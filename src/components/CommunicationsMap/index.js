import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function CommunicationsMap() {
  return (
    <BrowserOnly fallback={<div>Loading map...</div>}>
      {() => {
        const {MapContainer, TileLayer, Marker, Popup, Polygon} = require('react-leaflet');
        const L = require('leaflet');
        require('leaflet/dist/leaflet.css');

        const {repeaters = []} = require('@site/src/data/repeaters');
        const accs = require('@site/src/data/accs').default || [];
        const {districts = []} = require('@site/src/data/districts');

        const [basemap, setBasemap] = useState('streets');

        const basemaps = {
          streets: {
            name: 'Streets',
            url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            attribution: '&copy; OpenStreetMap contributors',
          },
          satellite: {
            name: 'Satellite',
            url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            attribution: 'Tiles &copy; Esri',
          },
          topo: {
            name: 'Topographic',
            url: 'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png',
            attribution:
              'Map data &copy; OpenStreetMap contributors, SRTM | Map style &copy; OpenTopoMap',
          },
        };

        const [layers, setLayers] = useState({
          repeaters: true,
          linkedRepeaters: true,
          accs: false,
          districts: true,
        });

        const createEmojiIcon = (emoji, backgroundColor) =>
          L.divIcon({
            html: `
              <div style="
                background:${backgroundColor};
                width:34px;
                height:34px;
                border-radius:50%;
                display:flex;
                align-items:center;
                justify-content:center;
                font-size:18px;
                border:2px solid white;
                box-shadow:0 2px 6px rgba(0,0,0,0.35);
              ">
                ${emoji}
              </div>
            `,
            className: '',
            iconSize: [34, 34],
            iconAnchor: [17, 17],
            popupAnchor: [0, -18],
          });

        const icons = {
          repeaters: createEmojiIcon('📻', '#2050a0'),
          'linked-repeaters': createEmojiIcon('📡', '#6a1b9a'),
          accs: createEmojiIcon('🏢', '#f57c00'),
        };

        const getIcon = (type) => icons[type] || icons.repeaters;

        const toggleLayer = (layerName) => {
          setLayers((prev) => ({
            ...prev,
            [layerName]: !prev[layerName],
          }));
        };

        const formattedAccs = accs.map((acc) => ({
          ...acc,
          type: 'accs',
          location: acc.address,
        }));

        const locations = [...repeaters, ...formattedAccs];

        const visibleLocations = locations.filter((item) => {
          if (item.type === 'repeaters') return layers.repeaters;
          if (item.type === 'linked-repeaters') return layers.linkedRepeaters;
          if (item.type === 'accs') return layers.accs;
          return false;
        });

        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '280px 1fr',
              gap: '1rem',
              alignItems: 'start',
            }}
          >
            <aside
              style={{
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '12px',
                padding: '1rem',
                background: 'var(--ifm-background-surface-color)',
              }}
            >
              <h3>Basemap</h3>

              <label>
                <input
                  type="radio"
                  name="basemap"
                  checked={basemap === 'streets'}
                  onChange={() => setBasemap('streets')}
                />{' '}
                🛣 Streets
              </label>

              <br />

              <label>
                <input
                  type="radio"
                  name="basemap"
                  checked={basemap === 'satellite'}
                  onChange={() => setBasemap('satellite')}
                />{' '}
                🛰 Satellite
              </label>

              <br />

              <label>
                <input
                  type="radio"
                  name="basemap"
                  checked={basemap === 'topo'}
                  onChange={() => setBasemap('topo')}
                />{' '}
                🏔 Topographic
              </label>

              <hr />

              <h3>Map Layers</h3>

              <label>
                <input
                  type="checkbox"
                  checked={layers.districts}
                  onChange={() => toggleLayer('districts')}
                />{' '}
                🗺️ PACT Districts
              </label>

              <br />

              <label>
                <input
                  type="checkbox"
                  checked={layers.linkedRepeaters}
                  onChange={() => toggleLayer('linkedRepeaters')}
                />{' '}
                📡 Linked Repeaters
              </label>

              <br />

              <label>
                <input
                  type="checkbox"
                  checked={layers.repeaters}
                  onChange={() => toggleLayer('repeaters')}
                />{' '}
                📻 Local Repeaters
              </label>

              <br />

              <label>
                <input
                  type="checkbox"
                  checked={layers.accs}
                  onChange={() => toggleLayer('accs')}
                />{' '}
                🏢 ACC Locations
              </label>
            </aside>

            <div
              style={{
                height: '650px',
                width: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #ccc',
              }}
            >
              <MapContainer
                center={[40.2338, -111.6585]}
                zoom={11}
                scrollWheelZoom={true}
                style={{height: '100%', width: '100%'}}
              >
                <TileLayer
                  key={basemap}
                  attribution={basemaps[basemap].attribution}
                  url={basemaps[basemap].url}
                />

                {layers.districts &&
                  districts.map((district) => (
                    <Polygon
                      key={district.id}
                      positions={district.positions}
                      pathOptions={{
                        color: district.color,
                        fillColor: district.color,
                        fillOpacity: 0.18,
                        weight: 2,
                      }}
                    >
                      <Popup>
                        <strong>{district.name}</strong>
                        <br />
                        <br />
                        {district.notes}
                      </Popup>
                    </Polygon>
                  ))}

                {visibleLocations
                  .filter((item) => item.position)
                  .map((item) => (
                    <Marker
                      key={`${item.type}-${item.id}`}
                      position={item.position}
                      icon={getIcon(item.type)}
                    >
                      <Popup>
                        <strong>{item.name}</strong>
                        <br />

                        {item.frequency && (
                          <>
                            <strong>Frequency:</strong> {item.frequency}
                            <br />
                          </>
                        )}

                        {item.offset && (
                          <>
                            <strong>Offset:</strong> {item.offset}
                            <br />
                          </>
                        )}

                        {item.tone && (
                          <>
                            <strong>Tone:</strong> {item.tone}
                            <br />
                          </>
                        )}

                        {item.district && (
                          <>
                            <strong>District:</strong> {item.district}
                            <br />
                          </>
                        )}

                        {item.location && (
                          <>
                            <strong>Location:</strong> {item.location}
                            <br />
                          </>
                        )}

                        {item.notes && (
                          <>
                            <br />
                            {item.notes}
                          </>
                        )}
                      </Popup>
                    </Marker>
                  ))}
              </MapContainer>
            </div>
          </div>
        );
      }}
    </BrowserOnly>
  );
}