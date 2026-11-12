#!/usr/bin/env python3
"""Generate a terrain-based LOS GeoJSON module for the PACT Provo repeater map.

Run: python3 -m pip install numpy pillow requests rasterio shapely
     python3 generate_provo_los.py --output src/data/provoRepeaterCoverage.js

Downloads AWS/Mapzen Terrarium elevation tiles. Coverage is geometric, NOT RF.
"""
import argparse
import io
import json
import math
from pathlib import Path

import numpy as np
import requests
from PIL import Image
from rasterio.features import shapes
from rasterio.transform import from_origin
from shapely.geometry import shape, mapping

LAT = 40.232838
LON = -111.667014
TX_AGL_M = 95 * 0.3048
RX_AGL_M = 5 * 0.3048
EARTH_RADIUS_M = 6_371_000
TILE_URL = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'


def lonlat_to_pixel(lon, lat, z):
    n = 256 * (2 ** z)
    x = (lon + 180.0) / 360.0 * n
    lat_r = np.radians(np.clip(lat, -85.05112878, 85.05112878))
    y = (1.0 - np.arcsinh(np.tan(lat_r)) / np.pi) / 2.0 * n
    return x, y


def pixel_to_lonlat(x, y, z):
    n = 256 * 2 ** z
    lon = x / n * 360 - 180
    lat = np.degrees(np.arctan(np.sinh(np.pi * (1 - 2 * y / n))))
    return lon, lat


class Terrain:
    def __init__(self, z, radius_m, cache):
        self.z = z
        self.px0, self.py0 = lonlat_to_pixel(LON, LAT, z)
        # conservative pixel bounding box for radius plus interpolation margin
        dlat = (radius_m + 1500) / 111_100
        dlon = (radius_m + 1500) / (111_100 * math.cos(math.radians(LAT)))
        corners = [lonlat_to_pixel(LON + dx, LAT + dy, z)
                   for dx in (-dlon, dlon) for dy in (-dlat, dlat)]
        self.tx0 = int(min(p[0] for p in corners) // 256)
        self.tx1 = int(max(p[0] for p in corners) // 256)
        self.ty0 = int(min(p[1] for p in corners) // 256)
        self.ty1 = int(max(p[1] for p in corners) // 256)
        self.left, self.top = self.tx0 * 256, self.ty0 * 256
        self.cache = Path(cache)
        self.cache.mkdir(parents=True, exist_ok=True)
        w = (self.tx1-self.tx0+1)*256
        h = (self.ty1-self.ty0+1)*256
        self.dem = np.empty((h,w), dtype=np.float32)
        session = requests.Session()
        for ty in range(self.ty0, self.ty1+1):
            for tx in range(self.tx0, self.tx1+1):
                fn = self.cache / f'terrarium_{z}_{tx}_{ty}.png'
                if not fn.exists():
                    url = TILE_URL.format(z=z,x=tx,y=ty)
                    print('Downloading',url,flush=True)
                    response = session.get(url, timeout=35)
                    response.raise_for_status()
                    # Check image before caching an error page
                    Image.open(io.BytesIO(response.content)).verify()
                    fn.write_bytes(response.content)
                rgb = np.asarray(Image.open(fn).convert('RGB'), dtype=np.float32)
                elev = rgb[:,:,0]*256 + rgb[:,:,1] + rgb[:,:,2]/256 - 32768
                oy, ox = (ty-self.ty0)*256, (tx-self.tx0)*256
                self.dem[oy:oy+256, ox:ox+256] = elev
        self.h, self.w = self.dem.shape

    def sample(self, lon, lat):
        px, py = lonlat_to_pixel(lon, lat, self.z)
        x, y = np.asarray(px) - self.left, np.asarray(py) - self.top
        if np.any((x<0)|(y<0)|(x>=self.w-1)|(y>=self.h-1)):
            raise ValueError('DEM area insufficient for LOS trace')
        xi, yi = np.floor(x).astype(int), np.floor(y).astype(int)
        fx, fy = x-xi, y-yi
        a = self.dem[yi,xi]*(1-fx) + self.dem[yi,xi+1]*fx
        b = self.dem[yi+1,xi]*(1-fx) + self.dem[yi+1,xi+1]*fx
        return a*(1-fy)+b*fy


def compute(terrain, radius_m, cell_m, ray_step_m, k_factor, rx_height_m):
    # Equirectangular local grid, appropriate for tens of kilometers around Provo
    coslat = math.cos(math.radians(LAT))
    extent = math.ceil(radius_m/cell_m)
    coords = np.arange(-extent, extent+1)*cell_m
    xs, ys = np.meshgrid(coords, coords[::-1]) # north at top
    dist = np.hypot(xs,ys)
    inside = dist<=radius_m
    out = np.zeros(inside.shape, dtype=np.uint8)
    tx_ground = float(terrain.sample(LON,LAT))
    tx_alt = tx_ground + TX_AGL_M
    eff_radius = EARTH_RADIUS_M*k_factor
    # Each target has a straight LOS path from the repeater.
    # Curvature/refraction adjustment: bulge = s*(D-s)/(2*effectiveEarthRadius).
    row_idx, col_idx = np.nonzero(inside)
    target_x, target_y = xs[inside], ys[inside]
    target_d = dist[inside]
    lon = LON + target_x/(111_320*coslat)
    lat = LAT + target_y/111_320
    ground = terrain.sample(lon,lat)
    rx_alt = ground + rx_height_m
    visible = np.ones(target_d.shape, dtype=bool)
    # Vectors of 1000 targets, each checked at 100m-ish path intervals.
    for start in range(0,len(target_d),1000):
        end = min(start+1000,len(target_d))
        D = target_d[start:end]
        nsteps = np.maximum(1,np.ceil(D/ray_step_m).astype(int))
        # Group trace points by normalized path fractions. Excludes transmitter and receiver.
        maxsteps = int(nsteps.max())
        blocked = np.zeros(len(D),dtype=bool)
        for step in range(1,maxsteps):
            active = (step<nsteps) & (~blocked)
            if not active.any():
                continue
            idx=np.where(active)[0]
            fraction = step/nsteps[idx]
            s = D[idx]*fraction
            path_lon = LON + target_x[start:end][idx]*fraction/(111_320*coslat)
            path_lat = LAT + target_y[start:end][idx]*fraction/111_320
            terrain_elev = terrain.sample(path_lon,path_lat)
            los_alt = tx_alt + (rx_alt[start:end][idx] - tx_alt)*fraction
            earth_bulge = s*(D[idx]-s)/(2*eff_radius)
            blocked[idx] = terrain_elev + earth_bulge > los_alt
        visible[start:end] = ~blocked
        if start % 10000 == 0:
            print(f'Checked {end:,} / {len(target_d):,} locations',flush=True)
    out[row_idx,col_idx] = visible.astype(np.uint8)
    # rasterio expects west/north outer edges; convert metric local coordinates to degrees
    degrees_per_meter_lon=1/(111_320*coslat)
    degrees_per_meter_lat=1/111_320
    west = LON + (coords[0]-cell_m/2)*degrees_per_meter_lon
    north= LAT + (coords[-1]+cell_m/2)*degrees_per_meter_lat
    # Cell sizes in degrees differ for latitude and longitude.
    transform = from_origin(west,north,cell_m*degrees_per_meter_lon,cell_m*degrees_per_meter_lat)
    polygons=[]
    for geom,val in shapes(out,mask=out.astype(bool),transform=transform):
        if val != 1: continue
        polygon = shape(geom).simplify(cell_m*degrees_per_meter_lat*0.35,preserve_topology=True)
        if polygon.is_empty: continue
        polygons.append(polygon)
    # Avoid gigantic multi-feature GeoJSON with repeated popup content.
    from shapely.ops import unary_union
    combined=unary_union(polygons)
    feature={'type':'Feature','properties':{'name':'Terrain line of sight','visibility':'line-of-sight'},'geometry':mapping(combined)}
    return feature,tx_ground,int(visible.sum()),len(visible)


def main():
    p=argparse.ArgumentParser()
    p.add_argument('--output',default='src/data/provoRepeaterCoverage.js')
    p.add_argument('--radius-km',type=float,default=30)
    p.add_argument('--cell-m',type=float,default=150)
    p.add_argument('--ray-step-m',type=float,default=100)
    p.add_argument('--zoom',type=int,default=11)
    p.add_argument('--k-factor',type=float,default=1.0,help='1.0 = geometric LOS, no atmospheric bending; 1.333 = standard refraction assumption')
    p.add_argument('--receiver-ft',type=float,default=5)
    p.add_argument('--cache',default='.terrain-cache')
    args=p.parse_args()
    if args.radius_km<=0 or args.cell_m<=0 or args.ray_step_m<=0 or args.k_factor<=0: p.error('dimensions and k-factor must be positive')
    terrain=Terrain(args.zoom,args.radius_km*1000,args.cache)
    feature,ground,nvisible,npoints=compute(terrain,args.radius_km*1000,args.cell_m,args.ray_step_m,args.k_factor,args.receiver_ft*.3048)
    data={
      'type':'FeatureCollection',
      'metadata':{
        'name':'Provo City Repeater Line-of-Sight',
        'site':'Provo City Hall',
        'transmitter':{
          'latitude':LAT,'longitude':LON,'antennaHeightFeetAGL':95,
          'antennaHeightMetersAGL':round(TX_AGL_M,3),
          'siteGroundElevationMetersDEM':round(ground,1),
          'transmitPowerWatts':20,
          'outputFrequencyMHz':443.575,'inputFrequencyMHz':448.575,'ctcssHz':123.0},
        'model':'Terrain-based geometric line-of-sight',
        'modelParameters':{'receiverHeightFeetAGL':args.receiver_ft,'radiusKm':args.radius_km,'gridCellMeters':args.cell_m,'raySampleSpacingMeters':args.ray_step_m,'earthRadiusFactor':args.k_factor,'terrainSource':'Mapzen/AWS Terrarium DEM','terrainTileZoom':args.zoom},
        'description':'Estimated terrain line-of-sight; not a prediction or guarantee of usable RF coverage.',
        'notes':['Antenna is 95 feet above local ground level.','Terrain was tested along each radial path; buildings and trees excluded.','Transmit power is not used in geometric line-of-sight calculation.','The coverage boundary depends on DEM accuracy, sample spacing and receiver height.']
      },
      'features':[feature]
    }
    dest=Path(args.output);dest.parent.mkdir(parents=True,exist_ok=True)
    dest.write_text('const provoRepeaterCoverage = '+json.dumps(data,separators=(',',':'))+';\n\nexport default provoRepeaterCoverage;\n')
    print('Wrote',dest,'size',dest.stat().st_size,'bytes; visible cells',nvisible,'/',npoints)

if __name__=='__main__':main()
