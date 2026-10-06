import React, {useState} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function CommunicationsMap() {
  return (
    <BrowserOnly fallback={<div>Loading map...</div>}>
      {() => {
        const {
          MapContainer,
          TileLayer,
          Marker,
          Popup,
          Polygon,
          GeoJSON,
        } = require('react-leaflet');

        const L = require('leaflet');
        require('leaflet/dist/leaflet.css');

        /*
         * ---------------------------------------------------------
         * DATA
         * ---------------------------------------------------------
         */

        const {repeaters = []} = require('@site/src/data/repeaters');
        const accs = require('@site/src/data/accs').default || [];
        const {districts = []} = require('@site/src/data/districts');

        const provoRepeaterCoverage =
          require('@site/src/data/provoRepeaterCoverage').default;

        /*
         * ---------------------------------------------------------
         * STATE
         * ---------------------------------------------------------
         */

        const [basemap, setBasemap] = useState('streets');

        const [layers, setLayers] = useState({
          repeaters: true,
          linkedRepeaters: true,
          accs: false,
          eoc: true,
          districts: true,
          provoRepeaterCoverage: false,
        });

        /*
         * ---------------------------------------------------------
         * BASEMAPS
         * ---------------------------------------------------------
         */

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

        /*
         * ---------------------------------------------------------
         * SVG SYMBOLS
         * ---------------------------------------------------------
         */

        const repeaterTowerSymbol = `
          <svg
            viewBox="0 0 24 24"
            width="17"
            height="17"
            aria-hidden="true"
          >
            <!-- RF SIGNALS -->
            <path
              d="M6.2 5.8C3.8 8.1 3.8 11.9 6.2 14.2"
              fill="none"
              stroke="#d63b32"
              stroke-width="1.8"
              stroke-linecap="round"
            />

            <path
              d="M17.8 5.8C20.2 8.1 20.2 11.9 17.8 14.2"
              fill="none"
              stroke="#d63b32"
              stroke-width="1.8"
              stroke-linecap="round"
            />

            <!-- ANTENNA -->
            <circle
              cx="12"
              cy="5"
              r="1.4"
              fill="#20252b"
            />

            <!-- TOWER -->
            <path
              d="M12 6.5L8.3 20H15.7L12 6.5Z"
              fill="none"
              stroke="#20252b"
              stroke-width="1.8"
              stroke-linejoin="round"
            />

            <!-- CROSS MEMBERS -->
            <path
              d="
                M10.6 11H13.4
                M9.8 14H14.2
                M9 17H15
              "
              fill="none"
              stroke="#20252b"
              stroke-width="1.25"
              stroke-linecap="round"
            />

            <!-- BASE -->
            <path
              d="M7.4 20H16.6"
              fill="none"
              stroke="#20252b"
              stroke-width="1.8"
              stroke-linecap="round"
            />
          </svg>
        `;

        const flagSymbol = `
          <svg
            viewBox="0 0 24 24"
            width="14"
            height="14"
            aria-hidden="true"
          >
            <path
              d="M7 19V4"
              fill="none"
              stroke="white"
              stroke-width="1.9"
              stroke-linecap="round"
            />

            <path
              d="M8.5 5.2H18L14.2 8.5L18 11.8H8.5Z"
              fill="white"
              stroke="white"
              stroke-width="1"
              stroke-linejoin="round"
            />
          </svg>
        `;

        const eocSymbol = `
          <svg
            viewBox="0 0 24 24"
            width="15"
            height="15"
            aria-hidden="true"
          >
            <!-- BUILDING -->
            <path
              d="M5 20V10H19V20"
              fill="none"
              stroke="white"
              stroke-width="1.8"
              stroke-linejoin="round"
            />

            <!-- ROOF -->
            <path
              d="M4 10L12 6L20 10"
              fill="none"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <!-- DOOR -->
            <path
              d="M10 20V15H14V20"
              fill="none"
              stroke="white"
              stroke-width="1.5"
            />

            <!-- ANTENNA -->
            <path
              d="M12 6V2.8"
              fill="none"
              stroke="white"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        `;

        /*
         * ---------------------------------------------------------
         * MARKER STYLES
         * ---------------------------------------------------------
         */

        const markerStyles = {
          repeaters: {
            outer: '#2050a0',
            inner: '#ffffff',
            shape: 'circle',
            symbol: repeaterTowerSymbol,
          },

          'linked-repeaters': {
            outer: '#4b3b7f',
            inner: '#ffffff',
            shape: 'ring',
            symbol: repeaterTowerSymbol,
          },

          accs: {
            background: '#b85c1e',
            shape: 'square',
            symbol: flagSymbol,
          },

          eoc: {
            background: '#a02010',
            shape: 'square',
            symbol: eocSymbol,
          },
        };

        /*
         * ---------------------------------------------------------
         * CREATE LEAFLET ICONS
         * ---------------------------------------------------------
         */

        const createMapIcon = (type) => {
          const style = markerStyles[type] || markerStyles.repeaters;

          /*
           * SQUARE ICONS
           * ACC + EOC
           */

          if (style.shape === 'square') {
            return L.divIcon({
              html: `
                <div style="
                  width:24px;
                  height:24px;
                  background:${style.background};
                  border-radius:4px;
                  border:2px solid white;
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  box-sizing:border-box;
                  box-shadow:
                    0 0 0 1px rgba(0,0,0,0.35),
                    0 1px 3px rgba(0,0,0,0.25);
                ">
                  ${style.symbol}
                </div>
              `,
              className: '',
              iconSize: [24, 24],
              iconAnchor: [12, 12],
              popupAnchor: [0, -14],
            });
          }

          /*
           * LINKED REPEATER
           */

          if (style.shape === 'ring') {
            return L.divIcon({
              html: `
                <div style="
                  width:27px;
                  height:27px;
                  border-radius:50%;
                  background:${style.outer};
                  display:flex;
                  align-items:center;
                  justify-content:center;
                  box-sizing:border-box;
                  box-shadow:
                    0 0 0 1px rgba(0,0,0,0.35),
                    0 1px 4px rgba(0,0,0,0.25);
                ">
                  <div style="
                    width:21px;
                    height:21px;
                    border-radius:50%;
                    background:${style.inner};
                    border:1.5px solid white;
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    box-sizing:border-box;
                  ">
                    ${style.symbol}
                  </div>
                </div>
              `,
              className: '',
              iconSize: [27, 27],
              iconAnchor: [13.5, 13.5],
              popupAnchor: [0, -15],
            });
          }

          /*
           * LOCAL REPEATER
           */

          return L.divIcon({
            html: `
              <div style="
                width:25px;
                height:25px;
                border-radius:50%;
                background:${style.inner};
                border:2.5px solid ${style.outer};
                display:flex;
                align-items:center;
                justify-content:center;
                box-sizing:border-box;
                box-shadow:
                  0 0 0 1px rgba(0,0,0,0.35),
                  0 1px 3px rgba(0,0,0,0.25);
              ">
                ${style.symbol}
              </div>
            `,
            className: '',
            iconSize: [25, 25],
            iconAnchor: [12.5, 12.5],
            popupAnchor: [0, -15],
          });
        };

        const icons = {
          repeaters: createMapIcon('repeaters'),
          'linked-repeaters': createMapIcon('linked-repeaters'),
          accs: createMapIcon('accs'),
          eoc: createMapIcon('eoc'),
        };

        const getIcon = (type) => icons[type] || icons.repeaters;

        /*
         * ---------------------------------------------------------
         * LEGEND SYMBOLS
         * ---------------------------------------------------------
         */

        const LegendSymbol = ({type}) => {
          const style = markerStyles[type];

          if (!style) return null;

          if (style.shape === 'square') {
            return (
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  flex: '0 0 18px',
                  borderRadius: '3px',
                  background: style.background,
                  border: '2px solid white',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.35)',
                  boxSizing: 'border-box',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {type === 'accs' ? (
                  <svg viewBox="0 0 24 24" width="11" height="11">
                    <path
                      d="M7 19V4"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    <path
                      d="M8.5 5.2H18L14.2 8.5L18 11.8H8.5Z"
                      fill="white"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="11" height="11">
                    <path
                      d="M5 20V10H19V20"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <path
                      d="M4 10L12 6L20 10"
                      fill="none"
                      stroke="white"
                      strokeWidth="2"
                    />

                    <path
                      d="M12 6V3"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.8"
                    />
                  </svg>
                )}
              </span>
            );
          }

          if (style.shape === 'ring') {
            return (
              <span
                style={{
                  width: '18px',
                  height: '18px',
                  flex: '0 0 18px',
                  borderRadius: '50%',
                  background: style.outer,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 0 1px rgba(0,0,0,0.35)',
                }}
              >
                <span
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#fff',
                    boxSizing: 'border-box',
                  }}
                />
              </span>
            );
          }

          return (
            <span
              style={{
                width: '18px',
                height: '18px',
                flex: '0 0 18px',
                borderRadius: '50%',
                background: '#fff',
                border: `2px solid ${style.outer}`,
                boxShadow: '0 0 0 1px rgba(0,0,0,0.35)',
                boxSizing: 'border-box',
              }}
            />
          );
        };

        const DistrictLegendSymbol = () => (
          <span
            style={{
              width: '18px',
              height: '18px',
              flex: '0 0 18px',
              borderRadius: '3px',
              border: '2px solid #6b7280',
              background: 'rgba(107,114,128,0.18)',
              boxSizing: 'border-box',
            }}
          />
        );

        const CoverageLegendSymbol = () => (
          <span
            style={{
              width: '18px',
              height: '18px',
              flex: '0 0 18px',
              borderRadius: '3px',
              border: '2px solid #2050a0',
              background: 'rgba(32,80,160,0.18)',
              boxSizing: 'border-box',
            }}
          />
        );

        /*
         * ---------------------------------------------------------
         * LAYER LOGIC
         * ---------------------------------------------------------
         */

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
          if (item.type === 'repeaters') {
            return layers.repeaters;
          }

          if (item.type === 'linked-repeaters') {
            return layers.linkedRepeaters;
          }

          if (item.type === 'accs') {
            return layers.accs;
          }

          if (item.type === 'eoc') {
            return layers.eoc;
          }

          return false;
        });

        /*
         * ---------------------------------------------------------
         * SIDEBAR COMPONENTS
         * ---------------------------------------------------------
         */

        const LayerRow = ({
          checked,
          onChange,
          symbol,
          label,
        }) => (
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '6px 0',
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            <input
              type="checkbox"
              checked={checked}
              onChange={onChange}
              style={{margin: 0}}
            />

            {symbol}

            <span>{label}</span>
          </label>
        );

        const BasemapRow = ({
          value,
          label,
        }) => (
          <label
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '9px',
              padding: '6px 0',
              cursor: 'pointer',
              fontSize: '0.95rem',
            }}
          >
            <input
              type="radio"
              name="basemap"
              value={value}
              checked={basemap === value}
              onChange={() => setBasemap(value)}
              style={{margin: 0}}
            />

            <span>{label}</span>
          </label>
        );

        /*
         * ---------------------------------------------------------
         * RENDER
         * ---------------------------------------------------------
         */

        return (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '260px minmax(0, 1fr)',
              gap: '1rem',
              alignItems: 'start',
            }}
          >
            {/* SIDEBAR */}

            <aside
              style={{
                border: '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '10px',
                padding: '1rem',
                background: 'var(--ifm-background-surface-color)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              {/* BASEMAP */}

              <div style={{marginBottom: '1.1rem'}}>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: '0.55rem',
                    fontSize: '1rem',
                  }}
                >
                  Basemap
                </h3>

                <BasemapRow
                  value="streets"
                  label="Streets"
                />

                <BasemapRow
                  value="satellite"
                  label="Satellite"
                />

                <BasemapRow
                  value="topo"
                  label="Topographic"
                />
              </div>

              <div
                style={{
                  height: '1px',
                  background: 'var(--ifm-color-emphasis-300)',
                  margin: '0.9rem 0 1rem',
                }}
              />

              {/* MAP LAYERS */}

              <div>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom: '0.55rem',
                    fontSize: '1rem',
                  }}
                >
                  Map Layers
                </h3>

                <LayerRow
                  checked={layers.districts}
                  onChange={() => toggleLayer('districts')}
                  symbol={<DistrictLegendSymbol />}
                  label="PACT Districts"
                />

                <LayerRow
                  checked={layers.eoc}
                  onChange={() => toggleLayer('eoc')}
                  symbol={<LegendSymbol type="eoc" />}
                  label="Emergency Operations Center"
                />

                <LayerRow
                  checked={layers.linkedRepeaters}
                  onChange={() => toggleLayer('linkedRepeaters')}
                  symbol={<LegendSymbol type="linked-repeaters" />}
                  label="Linked Repeaters"
                />

                <LayerRow
                  checked={layers.repeaters}
                  onChange={() => toggleLayer('repeaters')}
                  symbol={<LegendSymbol type="repeaters" />}
                  label="Local Repeaters"
                />

                <LayerRow
                  checked={layers.provoRepeaterCoverage}
                  onChange={() =>
                    toggleLayer('provoRepeaterCoverage')
                  }
                  symbol={<CoverageLegendSymbol />}
                  label="Provo City Repeater Line-of-Sight"
                />

                <LayerRow
                  checked={layers.accs}
                  onChange={() => toggleLayer('accs')}
                  symbol={<LegendSymbol type="accs" />}
                  label="ACC Locations"
                />
              </div>

              <div
                style={{
                  marginTop: '1rem',
                  paddingTop: '0.9rem',
                  borderTop:
                    '1px solid var(--ifm-color-emphasis-300)',
                  fontSize: '0.8rem',
                  color: 'var(--ifm-color-emphasis-700)',
                  lineHeight: 1.45,
                }}
              >
                Select a marker on the map to view location and frequency information.
              </div>
            </aside>

            {/* MAP */}

            <div
              style={{
                height: '650px',
                width: '100%',
                borderRadius: '10px',
                overflow: 'hidden',
                border:
                  '1px solid var(--ifm-color-emphasis-300)',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              }}
            >
              <MapContainer
                center={[40.2338, -111.6585]}
                zoom={11}
                scrollWheelZoom={true}
                style={{
                  height: '100%',
                  width: '100%',
                }}
              >
                {/* BASEMAP */}

                <TileLayer
                  key={basemap}
                  attribution={
                    basemaps[basemap].attribution
                  }
                  url={
                    basemaps[basemap].url
                  }
                />

                {/* DISTRICTS */}

                {layers.districts &&
                  districts.map((district) => (
                    <Polygon
                      key={district.id}
                      positions={district.positions}
                      pathOptions={{
                        color: district.color,
                        fillColor: district.color,
                        fillOpacity: 0.12,
                        weight: 1.5,
                        opacity: 0.75,
                      }}
                    >
                      <Popup>
                        <div style={{minWidth: '170px'}}>
                          <strong>
                            {district.name}
                          </strong>

                          {district.notes && (
                            <>
                              <br />
                              <br />
                              {district.notes}
                            </>
                          )}
                        </div>
                      </Popup>
                    </Polygon>
                  ))}

                {/* PROVO CITY REPEATER LOS COVERAGE */}

                {layers.provoRepeaterCoverage &&
                  provoRepeaterCoverage && (
                    <GeoJSON
                      data={provoRepeaterCoverage}
                      style={() => ({
                        color: '#2050a0',
                        weight: 1.5,
                        opacity: 0.85,
                        fillColor: '#2050a0',
                        fillOpacity: 0.18,
                      })}
                      onEachFeature={(feature, layer) => {
                        layer.bindPopup(`
                          <div style="
                            min-width:210px;
                            line-height:1.5;
                          ">
                            <div style="
                              font-weight:700;
                              margin-bottom:6px;
                            ">
                              Provo City Repeater
                            </div>

                            <div>
                              <strong>Output (RX):</strong>
                              443.575 MHz
                            </div>

                            <div>
                              <strong>Input (TX):</strong>
                              448.575 MHz
                            </div>

                            <div>
                              <strong>CTCSS:</strong>
                              123.0 Hz
                            </div>

                            <div style="
                              margin-top:8px;
                              padding-top:8px;
                              border-top:1px solid #ddd;
                              font-size:12px;
                            ">
                              Terrain-based line-of-sight estimate.
                              Actual usable radio coverage may vary.
                            </div>
                          </div>
                        `);
                      }}
                    />
                  )}

                {/* LOCATION MARKERS */}

                {visibleLocations
                  .filter((item) => item.position)
                  .map((item) => (
                    <Marker
                      key={`${item.type}-${item.id}`}
                      position={item.position}
                      icon={getIcon(item.type)}
                    >
                      <Popup>
                        <div
                          style={{
                            minWidth: '190px',
                            lineHeight: 1.5,
                          }}
                        >
                          <div
                            style={{
                              fontWeight: 700,
                              fontSize: '1rem',
                              marginBottom: '6px',
                            }}
                          >
                            {item.name}
                          </div>

                          {item.frequency && (
                            <div>
                              <strong>
                                Frequency:
                              </strong>{' '}
                              {item.frequency}
                            </div>
                          )}

                          {item.offset && (
                            <div>
                              <strong>
                                Offset:
                              </strong>{' '}
                              {item.offset}
                            </div>
                          )}

                          {item.tone && (
                            <div>
                              <strong>
                                Tone:
                              </strong>{' '}
                              {item.tone}
                            </div>
                          )}

                          {item.district && (
                            <div>
                              <strong>
                                District:
                              </strong>{' '}
                              {item.district}
                            </div>
                          )}

                          {item.location && (
                            <div>
                              <strong>
                                Location:
                              </strong>{' '}
                              {item.location}
                            </div>
                          )}

                          {item.notes && (
                            <div
                              style={{
                                marginTop: '8px',
                                paddingTop: '8px',
                                borderTop:
                                  '1px solid #ddd',
                              }}
                            >
                              {item.notes}
                            </div>
                          )}
                        </div>
                      </Popup>
                    </Marker>
                  ))}
              </MapContainer>
            </div>

            {/* RESPONSIVE + LEAFLET STYLING */}

            <style>
              {`
                @media (max-width: 900px) {
                  div[style*="grid-template-columns: 260px"] {
                    grid-template-columns: 1fr !important;
                  }
                }

                .leaflet-popup-content-wrapper {
                  border-radius: 8px;
                }

                .leaflet-popup-content {
                  margin: 13px 15px;
                }

                .leaflet-container {
                  font-family: var(--ifm-font-family-base);
                }
              `}
            </style>
          </div>
        );
      }}
    </BrowserOnly>
  );
}