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
          Polyline,
        } = require('react-leaflet');
 
        const L = require('leaflet');
        require('leaflet/dist/leaflet.css');
 
        /*
         * ---------------------------------------------------------
         * DATA
         * ---------------------------------------------------------
         */
 
const {repeaters = []} = require('@site/src/data/repeaters');
 
const repeaterSiteOverrides =
  require('@site/src/data/repeaterSiteOverrides').default || [];
 
const accs =
  require('@site/src/data/accs').default || [];
 
const eoc =
  require('@site/src/data/eoc').default || [];
 
const {districts = []} =
  require('@site/src/data/districts');
 
        const {linkedRepeaterSystems} =
          require('@site/src/data/linkedRepeaterSystems');
 
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
 
          intertie: false,
          sinbad: false,
 
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
 
            <circle
              cx="12"
              cy="5"
              r="1.4"
              fill="#20252b"
            />
 
            <path
              d="M12 6.5L8.3 20H15.7L12 6.5Z"
              fill="none"
              stroke="#20252b"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
 
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
            <path
              d="M5 20V10H19V20"
              fill="none"
              stroke="white"
              stroke-width="1.8"
              stroke-linejoin="round"
            />
 
            <path
              d="M4 10L12 6L20 10"
              fill="none"
              stroke="white"
              stroke-width="1.8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
 
            <path
              d="M10 20V15H14V20"
              fill="none"
              stroke="white"
              stroke-width="1.5"
            />
 
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
         * STANDARD MAP ICONS
         * ---------------------------------------------------------
         */
 
        const createMapIcon = (type) => {
          const style =
            markerStyles[type] || markerStyles.repeaters;
 
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
          accs: createMapIcon('accs'),
          eoc: createMapIcon('eoc'),
        };
 
        const getIcon = (type) =>
          icons[type] || icons.repeaters;
 
        /*
         * ---------------------------------------------------------
         * LINKED REPEATER SYSTEM ICONS
         * ---------------------------------------------------------
         */
 
        const createLinkedSystemIcon = (color) =>
          L.divIcon({
            html: `
              <div style="
                width:27px;
                height:27px;
                border-radius:50%;
                background:white;
                border:3px solid ${color};
                display:flex;
                align-items:center;
                justify-content:center;
                box-sizing:border-box;
                box-shadow:
                  0 0 0 1px rgba(0,0,0,0.35),
                  0 1px 4px rgba(0,0,0,0.25);
              ">
                ${repeaterTowerSymbol}
              </div>
            `,
            className: '',
            iconSize: [27, 27],
            iconAnchor: [13.5, 13.5],
            popupAnchor: [0, -16],
          });
 
        const linkedSystemIcons = {
          intertie: createLinkedSystemIcon(
            linkedRepeaterSystems.intertie.color
          ),
 
          sinbad: createLinkedSystemIcon(
            linkedRepeaterSystems.sinbad.color
          ),
        };
 
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
                  boxShadow:
                    '0 0 0 1px rgba(0,0,0,0.35)',
                  boxSizing: 'border-box',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {type === 'accs' ? (
                  <svg
                    viewBox="0 0 24 24"
                    width="11"
                    height="11"
                  >
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
                  <svg
                    viewBox="0 0 24 24"
                    width="11"
                    height="11"
                  >
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
 
          return (
            <span
              style={{
                width: '18px',
                height: '18px',
                flex: '0 0 18px',
                borderRadius: '50%',
                background: '#fff',
                border: `2px solid ${style.outer}`,
                boxShadow:
                  '0 0 0 1px rgba(0,0,0,0.35)',
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
 
        const LinkedSystemLegendSymbol = ({color}) => (
          <span
            style={{
              width: '18px',
              height: '18px',
              flex: '0 0 18px',
              borderRadius: '50%',
              background: '#fff',
              border: `3px solid ${color}`,
              boxSizing: 'border-box',
              boxShadow:
                '0 0 0 1px rgba(0,0,0,0.3)',
            }}
          />
        );
 
        /*
         * ---------------------------------------------------------
         * LINK TYPE LEGEND
         * ---------------------------------------------------------
         */
 
        const LinkTypeLegendLine = ({
          color,
        }) => (
          <span
            style={{
              width: '28px',
              height: 0,
              flex: '0 0 28px',
              borderTop: `2px dashed ${color}`,
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
 
        /*
         * ---------------------------------------------------------
         * LOCAL REPEATER SITE GROUPING
         * ---------------------------------------------------------
         */
 
        const getFrequencyNumber = (repeater) => {
          const value =
            repeater.frequency ??
            repeater.output ??
            '';
 
          const number =
            Number.parseFloat(value);
 
          return Number.isFinite(number)
            ? number
            : null;
        };
 
        const getRepeaterBand = (repeater) => {
          if (repeater.band) {
            return repeater.band;
          }
 
          const frequency =
            getFrequencyNumber(repeater);
 
          if (frequency === null) {
            return 'Other';
          }
 
          if (frequency >= 50 && frequency < 54) {
            return '6 m';
          }
 
          if (frequency >= 144 && frequency < 148) {
            return '2 m';
          }
 
          if (frequency >= 222 && frequency < 225) {
            return '1.25 m';
          }
 
          if (frequency >= 420 && frequency < 450) {
            return '70 cm';
          }
 
          if (frequency >= 902 && frequency < 928) {
            return '33 cm';
          }
 
          if (frequency >= 1240 && frequency < 1300) {
            return '23 cm';
          }
 
          return 'Other';
        };
 
        const getRepeaterMode = (repeater) => {
          if (repeater.digitalMode) {
            return repeater.digitalMode;
          }
 
          if (repeater.mode) {
            return repeater.mode;
          }
 
          const text = [
            repeater.name,
            repeater.location,
            repeater.sponsor,
            repeater.notes,
            repeater.internetLink,
            ...(repeater.features || []),
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
 
          if (
            text.includes('d-star') ||
            text.includes('dstar')
          ) {
            return 'D-STAR';
          }
 
          if (text.includes('dmr')) {
            return 'DMR';
          }
 
          if (
            text.includes('fusion') ||
            text.includes('c4fm') ||
            text.includes('ysf')
          ) {
            return 'C4FM';
          }
 
          if (text.includes('p25')) {
            return 'P25';
          }
 
          if (text.includes('nxdn')) {
            return 'NXDN';
          }
 
          return 'FM';
        };
 
        /*
         * ---------------------------------------------------------
         * AUDIT DISPLAY HELPERS
         * ---------------------------------------------------------
         */

        const getCoordinateConfidenceLabel = (value) => {
          switch (value) {
            case 'verified':
              return 'Verified';

            case 'high':
              return 'High confidence';

            case 'medium':
              return 'Moderate confidence';

            case 'low':
              return 'Low confidence';

            case 'unresolved':
              return 'Unresolved';

            case 'source':
              return 'Source coordinate';

            default:
              return null;
          }
        };

        const getOperationalStatusLabel = (value) => {
          switch (value) {
            case 'active':
              return 'Active';

            case 'uncertain':
              return 'Status uncertain';

            case 'off-air':
              return 'Off air';

            case 'portable':
              return 'Portable';

            case 'unknown':
              return 'Unknown';

            default:
              return null;
          }
        };

        const matchesSiteOverride = (
          repeater,
          override
        ) => {
          const frequency =
            getFrequencyNumber(repeater);
 
          const frequencyMatch =
            !override.frequencies?.length ||
            override.frequencies.some(
              (target) =>
                frequency !== null &&
                Math.abs(
                  frequency - target
                ) < 0.0001
            );
 
          if (!frequencyMatch) {
            return false;
          }
 
          if (!override.matchText?.length) {
            return true;
          }
 
          const searchableText = [
            repeater.name,
            repeater.location,
            repeater.area,
            repeater.callsign,
            repeater.sponsor,
            repeater.notes,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase();
 
          return override.matchText.some(
            (term) =>
              searchableText.includes(
                term.toLowerCase()
              )
          );
        };
 
        const findSiteOverride = (repeater) =>
          repeaterSiteOverrides.find(
            (override) =>
              matchesSiteOverride(
                repeater,
                override
              )
          );
 
        const buildRepeaterSites = (
          repeaterRecords
        ) => {
          const siteMap = new Map();

          repeaterRecords.forEach(
            (repeater, index) => {
              /*
               * Find the site override before checking position.
               * This allows a corrected override position to
               * replace a bad or missing source coordinate.
               */
              const override =
                findSiteOverride(repeater);

              /*
               * Known-bad or unresolved coordinates remain in
               * the source dataset but are not plotted.
               */
              if (override?.hideFromMap) {
                return;
              }

              const position =
                override?.position ||
                repeater.position;

              if (
                !Array.isArray(position) ||
                position.length < 2 ||
                !Number.isFinite(Number(position[0])) ||
                !Number.isFinite(Number(position[1]))
              ) {
                return;
              }

              /*
               * Audited sites use their explicit override ID.
               * Everything else is grouped when its coordinates
               * round to four decimal places.
               */
              const siteKey =
                override?.id ||
                `site-${Number(
                  position[0]
                ).toFixed(4)}-${Number(
                  position[1]
                ).toFixed(4)}`;

              if (!siteMap.has(siteKey)) {
                siteMap.set(siteKey, {
                  id: siteKey,

                  type: 'repeaters',

                  name:
                    override?.name ||
                    repeater.name ||
                    repeater.location ||
                    'Repeater Site',

                  location:
                    override?.location ||
                    repeater.location ||
                    '',

                  position,

                  coordinateConfidence:
                    override?.coordinateConfidence ||
                    'source',

                  lastVerified:
                    override?.lastVerified ||
                    null,

                  verificationNote:
                    override?.verificationNote ||
                    null,

                  repeaters: [],
                });
              }

              const frequency =
                getFrequencyNumber(repeater);

              const repeaterAudit =
                override?.repeaterMetadata?.find(
                  (metadata) =>
                    frequency !== null &&
                    Math.abs(
                      metadata.frequency -
                      frequency
                    ) < 0.0001
                ) || {};

              siteMap
                .get(siteKey)
                .repeaters
                .push({
                  ...repeater,

                  /*
                   * Audit metadata comes after the source record
                   * so reviewed values can correct stale values.
                   */
                  ...repeaterAudit,

                  id:
                    repeater.id ||
                    `${siteKey}-${index}`,

                  band:
                    getRepeaterBand(
                      repeater
                    ),

                  mode:
                    repeaterAudit.mode ||
                    getRepeaterMode(
                      repeater
                    ),

                  operationalStatus:
                    repeaterAudit.operationalStatus ||
                    repeater.operationalStatus ||
                    'unknown',

                  statusNote:
                    repeaterAudit.statusNote ||
                    repeater.statusNote ||
                    null,

                  frequencyNumber:
                    frequency,
                });
            }
          );

          siteMap.forEach((site) => {
            site.repeaters.sort(
              (a, b) =>
                (a.frequencyNumber || 0) -
                (b.frequencyNumber || 0)
            );
          });

          return Array.from(
            siteMap.values()
          );
        };

        const localRepeaterSites =
          buildRepeaterSites(repeaters);
 
        /*
         * ---------------------------------------------------------
         * OTHER MAP LOCATIONS
         * ---------------------------------------------------------
         */
 
        const formattedAccs = accs.map((acc) => ({
          ...acc,
          type: 'accs',
          location: acc.address,
        }));
 
        const locations = [
          ...localRepeaterSites,
          ...formattedAccs,
          ...eoc,
        ];
 
        const visibleLocations = locations.filter(
          (item) => {
            if (item.type === 'repeaters') {
              return layers.repeaters;
            }
 
            if (item.type === 'accs') {
              return layers.accs;
            }
 
            if (item.type === 'eoc') {
              return layers.eoc;
            }
 
            return false;
          }
        );
 
        /*
         * ---------------------------------------------------------
         * LINK ROUTE STYLES
         * ---------------------------------------------------------
         */
 
        const getLinkedRouteStyle = (
          type,
          systemColor
        ) => {
          switch (type) {
            case 'uhf-rf':
              return {
                color: systemColor,
                weight: 2.5,
                opacity: 0.8,
                dashArray: '9 7',
              };
 
            case '220-rf':
              return {
                color: '#2563a6',
                weight: 2.5,
                opacity: 0.85,
                dashArray: '9 7',
              };
 
            case 'voip':
              return {
                color: '#b05b28',
                weight: 2.25,
                opacity: 0.8,
                dashArray: '3 6',
              };
 
            case 'voip-backup':
              return {
                color: '#a02010',
                weight: 2,
                opacity: 0.75,
                dashArray: '2 7',
              };
 
            default:
              return {
                color: systemColor,
                weight: 2.5,
                opacity: 0.75,
                dashArray: '8 7',
              };
          }
        };
 
        const getLinkedRouteLabel = (type) => {
          switch (type) {
            case 'uhf-rf':
              return 'UHF RF Link';
 
            case '220-rf':
              return '220 MHz RF Link';
 
            case 'voip':
              return 'VoIP Link';
 
            case 'voip-backup':
              return 'VoIP Backup Link';
 
            default:
              return 'Repeater Link';
          }
        };
 
        /*
         * ---------------------------------------------------------
         * LINKED REPEATER SYSTEM RENDERER
         * ---------------------------------------------------------
         */
 
        const renderLinkedSystem = (systemKey) => {
          const system =
            linkedRepeaterSystems[systemKey];
 
          if (!system || !layers[systemKey]) {
            return null;
          }
 
          const siteLookup = Object.fromEntries(
            system.sites.map((site) => [
              site.id,
              site,
            ])
          );
 
          return (
            <>
              {/* LINK ROUTES */}
 
              {system.links.map(
                (rawLink, index) => {
                  const link = Array.isArray(
                    rawLink
                  )
                    ? {
                        from: rawLink[0],
                        to: rawLink[1],
                        type: 'generic',
                      }
                    : rawLink;
 
                  if (!link?.from || !link?.to) {
                    return null;
                  }
 
                  const from =
                    siteLookup[link.from];
 
                  const to =
                    siteLookup[link.to];
 
                  if (
                    !from?.position ||
                    !to?.position
                  ) {
                    return null;
                  }
 
                  const routeStyle =
                    getLinkedRouteStyle(
                      link.type,
                      system.color
                    );
 
                  return (
                    <Polyline
                      key={`${systemKey}-link-${index}`}
                      positions={[
                        from.position,
                        to.position,
                      ]}
                      pathOptions={
                        routeStyle
                      }
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
                              marginBottom: '6px',
                            }}
                          >
                            {getLinkedRouteLabel(
                              link.type
                            )}
                          </div>
 
                          <div>
                            <strong>
                              System:
                            </strong>{' '}
                            {system.name}
                          </div>
 
                          <div>
                            <strong>
                              From:
                            </strong>{' '}
                            {from.name}
                          </div>
 
                          <div>
                            <strong>
                              To:
                            </strong>{' '}
                            {to.name}
                          </div>
                        </div>
                      </Popup>
                    </Polyline>
                  );
                }
              )}
 
              {/* LINKED REPEATER SITES */}
 
              {system.sites
                .filter(
                  (site) => site.position
                )
                .map((site) => (
                  <Marker
                    key={`${systemKey}-${site.id}`}
                    position={site.position}
                    icon={
                      linkedSystemIcons[
                        systemKey
                      ]
                    }
                  >
                    <Popup>
                      <div
                        style={{
                          minWidth: '200px',
                          lineHeight: 1.5,
                        }}
                      >
                        <div
                          style={{
                            fontWeight: 700,
                            fontSize: '1rem',
                            marginBottom: '2px',
                          }}
                        >
                          {site.name}
                        </div>
 
                        <div
                          style={{
                            color:
                              system.color,
                            fontSize:
                              '0.82rem',
                            fontWeight: 700,
                            marginBottom: '7px',
                          }}
                        >
                          {system.name}
                        </div>
 
                        {site.frequency && (
                          <div>
                            <strong>
                              Frequency:
                            </strong>{' '}
                            {site.frequency}
                          </div>
                        )}
 
                        {site.offset && (
                          <div>
                            <strong>
                              Offset:
                            </strong>{' '}
                            {site.offset}
                          </div>
                        )}
 
                        {site.tone && (
                          <div>
                            <strong>
                              Tone:
                            </strong>{' '}
                            {site.tone}
                          </div>
                        )}
 
                        {site.location && (
                          <div>
                            <strong>
                              Location:
                            </strong>{' '}
                            {site.location}
                          </div>
                        )}
 
                        {site.notes && (
                          <div
                            style={{
                              marginTop:
                                '8px',
                              paddingTop:
                                '8px',
                              borderTop:
                                '1px solid #ddd',
                            }}
                          >
                            {site.notes}
                          </div>
                        )}
                      </div>
                    </Popup>
                  </Marker>
                ))}
            </>
          );
        };
 
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
              checked={
                basemap === value
              }
              onChange={() =>
                setBasemap(value)
              }
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
              gridTemplateColumns:
                '260px minmax(0, 1fr)',
              gap: '1rem',
              alignItems: 'start',
            }}
          >
            {/* SIDEBAR */}
 
            <aside
              style={{
                border:
                  '1px solid var(--ifm-color-emphasis-300)',
                borderRadius: '10px',
                padding: '1rem',
                background:
                  'var(--ifm-background-surface-color)',
                boxShadow:
                  '0 1px 4px rgba(0,0,0,0.06)',
              }}
            >
              {/* BASEMAP */}
 
              <div
                style={{
                  marginBottom: '1.1rem',
                }}
              >
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom:
                      '0.55rem',
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
                  background:
                    'var(--ifm-color-emphasis-300)',
                  margin:
                    '0.9rem 0 1rem',
                }}
              />
 
              {/* MAP LAYERS */}
 
              <div>
                <h3
                  style={{
                    marginTop: 0,
                    marginBottom:
                      '0.55rem',
                    fontSize: '1rem',
                  }}
                >
                  Map Layers
                </h3>
 
                <LayerRow
                  checked={
                    layers.districts
                  }
                  onChange={() =>
                    toggleLayer(
                      'districts'
                    )
                  }
                  symbol={
                    <DistrictLegendSymbol />
                  }
                  label="PACT Districts"
                />
 
                <LayerRow
                  checked={layers.eoc}
                  onChange={() =>
                    toggleLayer('eoc')
                  }
                  symbol={
                    <LegendSymbol type="eoc" />
                  }
                  label="Emergency Operations Center"
                />
 
                <LayerRow
                  checked={
                    layers.intertie
                  }
                  onChange={() =>
                    toggleLayer(
                      'intertie'
                    )
                  }
                  symbol={
                    <LinkedSystemLegendSymbol
                      color={
                        linkedRepeaterSystems
                          .intertie.color
                      }
                    />
                  }
                  label="Intermountain Intertie"
                />
 
                <LayerRow
                  checked={
                    layers.sinbad
                  }
                  onChange={() =>
                    toggleLayer(
                      'sinbad'
                    )
                  }
                  symbol={
                    <LinkedSystemLegendSymbol
                      color={
                        linkedRepeaterSystems
                          .sinbad.color
                      }
                    />
                  }
                  label="Sinbad Repeater System"
                />
 
                <LayerRow
                  checked={
                    layers.repeaters
                  }
                  onChange={() =>
                    toggleLayer(
                      'repeaters'
                    )
                  }
                  symbol={
                    <LegendSymbol type="repeaters" />
                  }
                  label="Local Repeaters"
                />
 
                <LayerRow
                  checked={
                    layers.provoRepeaterCoverage
                  }
                  onChange={() =>
                    toggleLayer(
                      'provoRepeaterCoverage'
                    )
                  }
                  symbol={
                    <CoverageLegendSymbol />
                  }
                  label="Provo City Repeater Line-of-Sight"
                />
 
                <LayerRow
                  checked={layers.accs}
                  onChange={() =>
                    toggleLayer('accs')
                  }
                  symbol={
                    <LegendSymbol type="accs" />
                  }
                  label="ACC Locations"
                />
              </div>
 
              {/* SINBAD LINK LEGEND */}
 
              {layers.sinbad && (
                <div
                  style={{
                    marginTop: '1rem',
                    paddingTop:
                      '0.9rem',
                    borderTop:
                      '1px solid var(--ifm-color-emphasis-300)',
                  }}
                >
                  <div
                    style={{
                      fontSize:
                        '0.78rem',
                      fontWeight: 700,
                      marginBottom:
                        '0.45rem',
                    }}
                  >
                    Sinbad Link Types
                  </div>
 
                  <div
                    style={{
                      display: 'grid',
                      gap: '6px',
                      fontSize:
                        '0.76rem',
                      color:
                        'var(--ifm-color-emphasis-700)',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems:
                          'center',
                        gap: '8px',
                      }}
                    >
                      <LinkTypeLegendLine
                        color={
                          linkedRepeaterSystems
                            .sinbad.color
                        }
                      />
                      <span>
                        UHF RF
                      </span>
                    </div>
 
                    <div
                      style={{
                        display: 'flex',
                        alignItems:
                          'center',
                        gap: '8px',
                      }}
                    >
                      <LinkTypeLegendLine
                        color="#2563a6"
                      />
                      <span>
                        220 MHz RF
                      </span>
                    </div>
 
                    <div
                      style={{
                        display: 'flex',
                        alignItems:
                          'center',
                        gap: '8px',
                      }}
                    >
                      <LinkTypeLegendLine
                        color="#b05b28"
                      />
                      <span>
                        VoIP
                      </span>
                    </div>
 
                    <div
                      style={{
                        display: 'flex',
                        alignItems:
                          'center',
                        gap: '8px',
                      }}
                    >
                      <LinkTypeLegendLine
                        color="#a02010"
                      />
                      <span>
                        VoIP Backup
                      </span>
                    </div>
                  </div>
                </div>
              )}
 
              <div
                style={{
                  marginTop: '1rem',
                  paddingTop: '0.9rem',
                  borderTop:
                    '1px solid var(--ifm-color-emphasis-300)',
                  fontSize: '0.8rem',
                  color:
                    'var(--ifm-color-emphasis-700)',
                  lineHeight: 1.45,
                }}
              >
                Select a marker or link
                on the map to view
                additional information.
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
                boxShadow:
                  '0 1px 4px rgba(0,0,0,0.08)',
              }}
            >
              <MapContainer
                center={[
                  40.2338,
                  -111.6585,
                ]}
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
                    basemaps[basemap]
                      .attribution
                  }
                  url={
                    basemaps[basemap]
                      .url
                  }
                />
 
                {/* DISTRICTS */}
 
                {layers.districts &&
                  districts.map(
                    (district) => (
                      <Polygon
                        key={
                          district.id
                        }
                        positions={
                          district.positions
                        }
                        pathOptions={{
                          color:
                            district.color,
                          fillColor:
                            district.color,
                          fillOpacity:
                            0.12,
                          weight: 1.5,
                          opacity:
                            0.75,
                        }}
                      >
                        <Popup>
                          <div
                            style={{
                              minWidth:
                                '170px',
                            }}
                          >
                            <strong>
                              {
                                district.name
                              }
                            </strong>
 
                            {district.notes && (
                              <>
                                <br />
                                <br />
                                {
                                  district.notes
                                }
                              </>
                            )}
                          </div>
                        </Popup>
                      </Polygon>
                    )
                  )}
 
                {/* PROVO CITY REPEATER LOS */}
 
                {layers.provoRepeaterCoverage &&
                  provoRepeaterCoverage && (
                    <GeoJSON
                      data={
                        provoRepeaterCoverage
                      }
                      style={() => ({
                        color:
                          '#2050a0',
                        weight: 1.5,
                        opacity: 0.85,
                        fillColor:
                          '#2050a0',
                        fillOpacity:
                          0.18,
                      })}
                      onEachFeature={(
                        feature,
                        layer
                      ) => {
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
 
                {/* LINKED REPEATER SYSTEMS */}
 
                {renderLinkedSystem(
                  'intertie'
                )}
 
                {renderLinkedSystem(
                  'sinbad'
                )}
 
                {/* LOCAL / ACC / EOC MARKERS */}
 
                {visibleLocations
                  .filter(
                    (item) =>
                      item.position
                  )
                  .map((item) => (
                    <Marker
                      key={`${item.type}-${item.id}`}
                      position={
                        item.position
                      }
                      icon={getIcon(
                        item.type
                      )}
                    >
                      <Popup>
                        {item.type === 'repeaters' &&
                        item.repeaters ? (
                          <div
                            style={{
                              minWidth: '250px',
                              maxWidth: '340px',
                              lineHeight: 1.45,
                            }}
                          >
                            <div
                              style={{
                                fontWeight: 700,
                                fontSize: '1rem',
                                marginBottom: '2px',
                              }}
                            >
                              {item.name}
                            </div>
 
                            {item.location && (
                              <div
                                style={{
                                  fontSize: '0.82rem',
                                  color:
                                    'var(--ifm-color-emphasis-700)',
                                  marginBottom: '8px',
                                }}
                              >
                                {item.location}
                              </div>
                            )}
 
                            {item.repeaters.length > 1 && (
                              <div
                                style={{
                                  fontSize: '0.75rem',
                                  fontWeight: 700,
                                  marginBottom: '8px',
                                }}
                              >
                                {item.repeaters.length}{' '}
                                repeaters at this site
                              </div>
                            )}
 
                            {item.repeaters.map(
                              (repeater, index) => (
                                <div
                                  key={repeater.id}
                                  style={{
                                    marginTop:
                                      index === 0
                                        ? 0
                                        : '8px',
 
                                    paddingTop:
                                      index === 0
                                        ? 0
                                        : '8px',
 
                                    borderTop:
                                      index === 0
                                        ? 'none'
                                        : '1px solid #ddd',
                                  }}
                                >
                                  <div
                                    style={{
                                      display: 'flex',
                                      justifyContent:
                                        'space-between',
                                      alignItems:
                                        'baseline',
                                      gap: '12px',
                                      fontWeight: 700,
                                    }}
                                  >
                                    <span>
                                      {
                                        repeater.frequency
                                      }
                                    </span>
 
                                    <span
                                      style={{
                                        fontSize:
                                          '0.72rem',
                                        color:
                                          'var(--ifm-color-emphasis-700)',
                                      }}
                                    >
                                      {repeater.band}
                                      {' · '}
                                      {repeater.mode}
                                    </span>
                                  </div>
 
                                  {repeater.offset && (
                                    <div
                                      style={{
                                        fontSize:
                                          '0.78rem',
                                      }}
                                    >
                                      <strong>
                                        Offset:
                                      </strong>{' '}
                                      {
                                        repeater.offset
                                      }
                                    </div>
                                  )}
 
                                  {repeater.tone && (
                                    <div
                                      style={{
                                        fontSize:
                                          '0.78rem',
                                      }}
                                    >
                                      <strong>
                                        Tone:
                                      </strong>{' '}
                                      {
                                        repeater.tone
                                      }
                                    </div>
                                  )}
 
                                  {repeater.callsign && (
                                    <div
                                      style={{
                                        fontSize:
                                          '0.78rem',
                                      }}
                                    >
                                      <strong>
                                        Callsign:
                                      </strong>{' '}
                                      {
                                        repeater.callsign
                                      }
                                    </div>
                                  )}
 
                                  {repeater.sponsor && (
                                    <div
                                      style={{
                                        fontSize:
                                          '0.78rem',
                                      }}
                                    >
                                      <strong>
                                        Sponsor:
                                      </strong>{' '}
                                      {
                                        repeater.sponsor
                                      }
                                    </div>
                                  )}

                                  {repeater.operationalStatus &&
                                    repeater.operationalStatus !==
                                      'unknown' && (
                                      <div
                                        style={{
                                          fontSize:
                                            '0.78rem',
                                        }}
                                      >
                                        <strong>
                                          Status:
                                        </strong>{' '}
                                        {
                                          getOperationalStatusLabel(
                                            repeater.operationalStatus
                                          )
                                        }
                                      </div>
                                    )}

                                  {repeater.statusNote && (
                                    <div
                                      style={{
                                        marginTop:
                                          '3px',
                                        fontSize:
                                          '0.72rem',
                                        color:
                                          'var(--ifm-color-emphasis-700)',
                                      }}
                                    >
                                      {
                                        repeater.statusNote
                                      }
                                    </div>
                                  )}
                                </div>
                              )
                            )}
 
                            {(item.coordinateConfidence ||
                              item.lastVerified ||
                              item.verificationNote) && (
                              <div
                                style={{
                                  marginTop: '9px',
                                  paddingTop: '7px',
                                  borderTop:
                                    '1px solid #ddd',
                                  fontSize:
                                    '0.72rem',
                                  color:
                                    'var(--ifm-color-emphasis-700)',
                                }}
                              >
                                {item.coordinateConfidence && (
                                  <div>
                                    <strong>
                                      Location confidence:
                                    </strong>{' '}
                                    {
                                      getCoordinateConfidenceLabel(
                                        item.coordinateConfidence
                                      )
                                    }
                                  </div>
                                )}

                                {item.lastVerified && (
                                  <div>
                                    <strong>
                                      Reviewed:
                                    </strong>{' '}
                                    {
                                      item.lastVerified
                                    }
                                  </div>
                                )}

                                {item.verificationNote && (
                                  <div
                                    style={{
                                      marginTop:
                                        '4px',
                                    }}
                                  >
                                    {
                                      item.verificationNote
                                    }
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div
                            style={{
                              minWidth:
                                '190px',
                              lineHeight:
                                1.5,
                            }}
                          >
                            <div
                              style={{
                                fontWeight:
                                  700,
                                fontSize:
                                  '1rem',
                                marginBottom:
                                  '6px',
                              }}
                            >
                              {
                                item.name
                              }
                            </div>
 
                            {item.district && (
                              <div>
                                <strong>
                                  District:
                                </strong>{' '}
                                {
                                  item.district
                                }
                              </div>
                            )}
 
                            {item.location && (
                              <div>
                                <strong>
                                  Location:
                                </strong>{' '}
                                {
                                  item.location
                                }
                              </div>
                            )}
 
                            {item.notes && (
                              <div
                                style={{
                                  marginTop:
                                    '8px',
                                  paddingTop:
                                    '8px',
                                  borderTop:
                                    '1px solid #ddd',
                                }}
                              >
                                {
                                  item.notes
                                }
                              </div>
                            )}
                          </div>
                        )}
                      </Popup>
                    </Marker>
                  ))}
              </MapContainer>
            </div>
 
            {/* RESPONSIVE / LEAFLET */}
 
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