---
sidebar_position: 4
---

import { useState } from 'react';

# Band Plans

The following interactive charts illustrate selected U.S. amateur radio frequency allocations by license class and FCC emission category. Select a frequency segment to view its boundaries and operating information.

export const pactBandPlanData = [
  {
    name: '2200 m',
    type: 'LF / MF',
    lo: 0.1357,
    hi: 0.1378,
    E: [[0.1357, 0.1378]],
    A: [[0.1357, 0.1378]],
    G: [[0.1357, 0.1378]],
    T: [],
    modes: [
      ['Phone / image / RTTY / data / CW (emission limitations apply)', 0.1357, 0.1378, 'combined']
    ],
    note: '135.7–137.8 kHz. Maximum 1 W EIRP. Utilities Technology Council notification and other restrictions apply.'
  },
  {
    name: '630 m',
    type: 'LF / MF',
    lo: 0.472,
    hi: 0.479,
    E: [[0.472, 0.479]],
    A: [[0.472, 0.479]],
    G: [[0.472, 0.479]],
    T: [],
    modes: [
      ['Phone / image / RTTY / data / CW (emission limitations apply)', 0.472, 0.479, 'combined']
    ],
    note: '472–479 kHz. Maximum 5 W EIRP, reduced to 1 W EIRP in specified Alaska areas. Utilities Technology Council notification applies.'
  },
  {
    name: '160 m',
    type: 'LF / MF',
    lo: 1.8,
    hi: 2.0,
    E: [[1.8, 2.0]],
    A: [[1.8, 2.0]],
    G: [[1.8, 2.0]],
    T: [],
    modes: [
      ['Phone / image / RTTY / data / CW (emission limitations apply)', 1.8, 2.0, 'combined']
    ],
    note: 'Amateur stations must protect radiolocation operations from 1.900–2.000 MHz.'
  },
  {
    name: '80 / 75 m',
    type: 'HF',
    lo: 3.5,
    hi: 4.0,
    E: [[3.5, 4.0]],
    A: [[3.525, 3.6], [3.7, 4.0]],
    G: [[3.525, 3.6], [3.8, 4.0]],
    T: [[3.525, 3.6]],
    modes: [
      ['RTTY / data / CW', 3.5, 3.6, 'data'],
      ['SSB / image / other / CW', 3.6, 4.0, 'phone']
    ],
    note: 'Technician CW privileges: 3.525–3.600 MHz, maximum 200 W PEP. Phone allocations begin at 3.600, 3.700, or 3.800 MHz depending on license class.'
  },
  {
    name: '60 m',
    type: 'HF',
    lo: 5.329,
    hi: 5.408,
    E: [
      [5.3306, 5.3334],
      [5.3466, 5.3494],
      [5.3515, 5.3665],
      [5.3716, 5.3744],
      [5.4036, 5.4064]
    ],
    A: [
      [5.3306, 5.3334],
      [5.3466, 5.3494],
      [5.3515, 5.3665],
      [5.3716, 5.3744],
      [5.4036, 5.4064]
    ],
    G: [
      [5.3306, 5.3334],
      [5.3466, 5.3494],
      [5.3515, 5.3665],
      [5.3716, 5.3744],
      [5.4036, 5.4064]
    ],
    T: [],
    modes: [
      ['5332 kHz center channel — USB / CW / RTTY / data', 5.3306, 5.3334, 'usb'],
      ['5348 kHz center channel — USB / CW / RTTY / data', 5.3466, 5.3494, 'usb'],
      ['5351.5–5366.5 kHz segment — USB / CW / RTTY / data', 5.3515, 5.3665, 'usb'],
      ['5373 kHz center channel — USB / CW / RTTY / data', 5.3716, 5.3744, 'usb'],
      ['5405 kHz center channel — USB / CW / RTTY / data', 5.4036, 5.4064, 'usb']
    ],
    note: 'Four discrete channels centered at 5332, 5348, 5373, and 5405 kHz, each illustrated with a nominal 2.8-kHz width. The separate 5351.5–5366.5 kHz allocation is 15 kHz wide. Channel operation is limited to 100 W ERP, while the 15-kHz segment is limited to 9.15 W ERP. Different emission and operating requirements apply. Channel rectangles do not represent unrestricted tuning privileges.'
  },
  {
    name: '40 m',
    type: 'HF',
    lo: 7.0,
    hi: 7.3,
    E: [[7.0, 7.3]],
    A: [[7.025, 7.3]],
    G: [[7.025, 7.125], [7.175, 7.3]],
    T: [[7.025, 7.125]],
    modes: [
      ['RTTY / data / CW', 7.0, 7.125, 'data'],
      ['SSB / image / other / CW', 7.125, 7.3, 'phone']
    ],
    note: 'General-class phone privileges begin at 7.175 MHz. Technician CW privileges: 7.025–7.125 MHz, maximum 200 W PEP. Limited geographic emission exceptions are not separately illustrated.'
  },
  {
    name: '30 m',
    type: 'HF',
    lo: 10.1,
    hi: 10.15,
    E: [[10.1, 10.15]],
    A: [[10.1, 10.15]],
    G: [[10.1, 10.15]],
    T: [],
    modes: [
      ['CW / RTTY / data', 10.1, 10.15, 'data']
    ],
    note: 'Maximum 200 W PEP. Phone is not authorized.'
  },
  {
    name: '20 m',
    type: 'HF',
    lo: 14.0,
    hi: 14.35,
    E: [[14.0, 14.35]],
    A: [[14.025, 14.15], [14.175, 14.35]],
    G: [[14.025, 14.15], [14.225, 14.35]],
    T: [],
    modes: [
      ['RTTY / data / CW', 14.0, 14.15, 'data'],
      ['SSB / image / other / CW', 14.15, 14.35, 'phone']
    ],
    priorityLabels: {
      A: [14.175]
    }
  },
  {
    name: '17 m',
    type: 'HF',
    lo: 18.068,
    hi: 18.168,
    E: [[18.068, 18.168]],
    A: [[18.068, 18.168]],
    G: [[18.068, 18.168]],
    T: [],
    modes: [
      ['RTTY / data / CW', 18.068, 18.11, 'data'],
      ['SSB / image / other / CW', 18.11, 18.168, 'phone']
    ]
  },
  {
    name: '15 m',
    type: 'HF',
    lo: 21.0,
    hi: 21.45,
    E: [[21.0, 21.45]],
    A: [[21.025, 21.2], [21.225, 21.45]],
    G: [[21.025, 21.2], [21.275, 21.45]],
    T: [[21.025, 21.2]],
    modes: [
      ['RTTY / data / CW', 21.0, 21.2, 'data'],
      ['SSB / image / other / CW', 21.2, 21.45, 'phone']
    ],
    priorityLabels: {
      A: [21.225]
    },
    note: 'Technician CW privileges: 21.025–21.200 MHz, maximum 200 W PEP.'
  },
  {
    name: '12 m',
    type: 'HF',
    lo: 24.89,
    hi: 24.99,
    E: [[24.89, 24.99]],
    A: [[24.89, 24.99]],
    G: [[24.89, 24.99]],
    T: [],
    modes: [
      ['RTTY / data / CW', 24.89, 24.93, 'data'],
      ['SSB / image / other / CW', 24.93, 24.99, 'phone']
    ]
  },
  {
    name: '10 m',
    type: 'HF',
    lo: 28.0,
    hi: 29.7,
    E: [[28.0, 29.7]],
    A: [[28.0, 29.7]],
    G: [[28.0, 29.7]],
    T: [[28.0, 28.5]],
    modes: [
      ['RTTY / data / CW', 28.0, 28.3, 'data'],
      ['SSB / image / other / CW', 28.3, 29.7, 'phone']
    ],
    note: 'Technician: 28.000–28.300 MHz CW, RTTY, and data; 28.300–28.500 MHz SSB phone and CW. Maximum 200 W PEP.'
  },
  {
    name: '6 m',
    type: 'VHF / UHF',
    lo: 50.0,
    hi: 54.0,
    E: [[50.0, 54.0]],
    A: [[50.0, 54.0]],
    G: [[50.0, 54.0]],
    T: [[50.0, 54.0]],
    modes: [
      ['CW only', 50.0, 50.1, 'cw'],
      ['Phone / image / RTTY / data / CW', 50.1, 54.0, 'combined']
    ]
  },
  {
    name: '2 m',
    type: 'VHF / UHF',
    lo: 144.0,
    hi: 148.0,
    E: [[144.0, 148.0]],
    A: [[144.0, 148.0]],
    G: [[144.0, 148.0]],
    T: [[144.0, 148.0]],
    modes: [
      ['CW only', 144.0, 144.1, 'cw'],
      ['Phone / image / RTTY / data / CW', 144.1, 148.0, 'combined']
    ]
  },
  {
    name: '1.25 m',
    type: 'VHF / UHF',
    lo: 219.0,
    hi: 225.0,
    E: [[219.0, 220.0], [222.0, 225.0]],
    A: [[219.0, 220.0], [222.0, 225.0]],
    G: [[219.0, 220.0], [222.0, 225.0]],
    T: [[219.0, 220.0], [222.0, 225.0]],
    modes: [
      ['Fixed digital message forwarding systems only', 219.0, 220.0, 'fdm'],
      ['Phone / image / RTTY / data / CW', 222.0, 225.0, 'combined']
    ],
    note: '219–220 MHz is restricted to fixed point-to-point digital message forwarding stations with special notification and coordination requirements. 220–222 MHz is not allocated to amateur stations. The 222–225 MHz segment permits ordinary amateur emissions.'
  },
  {
    name: '70 cm',
    type: 'VHF / UHF',
    lo: 420.0,
    hi: 450.0,
    E: [[420.0, 450.0]],
    A: [[420.0, 450.0]],
    G: [[420.0, 450.0]],
    T: [[420.0, 450.0]],
    modes: [
      ['Authorized amateur emissions', 420.0, 450.0, 'combined']
    ],
    note: '420–430 MHz is not available north of Line A near the Canadian border. Sharing and other restrictions apply.'
  },
  {
    name: '33 cm',
    type: 'VHF / UHF',
    lo: 902.0,
    hi: 928.0,
    E: [[902.0, 928.0]],
    A: [[902.0, 928.0]],
    G: [[902.0, 928.0]],
    T: [[902.0, 928.0]],
    modes: [
      ['Authorized amateur emissions', 902.0, 928.0, 'combined']
    ],
    note: 'Secondary allocation. Geographic and power restrictions may apply.'
  },
  {
    name: '23 cm',
    type: 'VHF / UHF',
    lo: 1240.0,
    hi: 1300.0,
    E: [[1240.0, 1300.0]],
    A: [[1240.0, 1300.0]],
    G: [[1240.0, 1300.0]],
    T: [[1240.0, 1300.0]],
    N: [[1270.0, 1295.0]],
    modes: [
      ['Authorized amateur emissions', 1240.0, 1300.0, 'combined']
    ],
    priorityLabels: {
      N: [1270.0, 1295.0]
    },
    note: 'Novice privileges are limited to 1270–1295 MHz at 5 W PEP; other geographic and sharing restrictions apply. A Novice row is shown for this band only.'
  }
];

export const pactLicenseClasses = ['E', 'A', 'G', 'T'];

export const pactLicenseNames = {
  E: 'Amateur Extra',
  A: 'Advanced',
  G: 'General',
  T: 'Technician',
  N: 'Novice'
};

export function pactFormatFrequency(value) {
  if (value < 1) {
    return `${Number((value * 1000).toFixed(4))} kHz`;
  }

  return `${Number(value.toFixed(4))} MHz`;
}

export function PactFrequencyBar({
  band,
  selectedClass,
  setDetail
}) {
  const x0 = 145;
  const width = 820;

  // Extra vertical spacing keeps frequency labels above bars.
  const firstRowY = 78;
  const rowSpacing = 67;
  const barHeight = 23;

  const scale = (frequency) =>
    x0 + ((frequency - band.lo) / (band.hi - band.lo)) * width;

  const availableClasses =
    band.N
      ? [...pactLicenseClasses, 'N']
      : pactLicenseClasses;

  const rows =
    selectedClass === 'ALL'
      ? availableClasses
      : availableClasses.includes(selectedClass)
        ? [selectedClass]
        : [];

  const height =
    firstRowY + rows.length * rowSpacing + 5;

  const bottomY =
    rows.length > 0
      ? firstRowY +
        (rows.length - 1) * rowSpacing +
        barHeight
      : firstRowY;

  const shortFrequency = (value) =>
    value < 1
      ? `${Number((value * 1000).toFixed(3))}`
      : `${Number(value.toFixed(4))}`;

  // Intersect license-class privileges with mode ranges.
  const getSegments = (licenseClass) => {
    const segments = [];

    for (const [licenseLo, licenseHi] of band[licenseClass] || []) {
      for (const [label, modeLo, modeHi, modeKind] of band.modes) {
        const lo = Math.max(licenseLo, modeLo);
        const hi = Math.min(licenseHi, modeHi);

        if (hi <= lo) continue;

        const technicianCwOnly =
          licenseClass === 'T' &&
          ['80 / 75 m', '40 m', '15 m'].includes(band.name);

        const technician10Phone =
          licenseClass === 'T' &&
          band.name === '10 m' &&
          lo >= 28.3;

        let kind = modeKind;
        let description = label;

        if (technicianCwOnly) {
          kind = 'cw';
          description =
            'CW only — Technician, 200 W PEP maximum';
        }

        if (technician10Phone) {
          kind = 'ssb';
          description =
            'SSB phone / CW — Technician, 200 W PEP maximum';
        }

        segments.push({
          lo,
          hi,
          kind,
          description
        });
      }
    }

    return segments.sort((a, b) => a.lo - b.lo);
  };

  const showDetail = (lo, hi, description) => {
    setDetail({
      band: band.name,
      range:
        `${pactFormatFrequency(lo)} – ` +
        `${pactFormatFrequency(hi)}`,
      desc: description,
      note: band.note || ''
    });
  };

  // Keep all internal frequency boundaries visible.
  const getBoundaries = (segments) => [
    ...new Set(
      segments.flatMap((segment) => [
        segment.lo,
        segment.hi
      ])
    )
  ]
    .filter((frequency) =>
      frequency > band.lo &&
      frequency < band.hi
    )
    .sort((a, b) => a - b);

  /*
   * Standard labels:
   * - Stay above each license-class bar.
   * - Use two lanes to reduce collisions.
   * - Preserve important frequency labels.
   */
  const getStandardLabels = (boundaries, licenseClass) => {
    const important =
      band.priorityLabels?.[licenseClass] || [];

    const estimateWidth = (frequency) =>
      shortFrequency(frequency).length * 6.8 + 9;

    const ordered = boundaries
      .map((frequency) => ({
        frequency,
        x: scale(frequency),
        width: estimateWidth(frequency),
        priority: important.some((value) =>
          Math.abs(value - frequency) < 0.000001
        )
      }))
      .sort((a, b) =>
        Number(b.priority) - Number(a.priority) ||
        a.x - b.x
      );

    const lanes = [[], []];
    const labels = [];

    for (const candidate of ordered) {
      const left = candidate.x + 3;
      const right = left + candidate.width;

      const lane = lanes.findIndex((occupied) =>
        occupied.every(([a, b]) =>
          right + 5 < a || left > b + 5
        )
      );

      if (lane < 0) continue;

      lanes[lane].push([left, right]);

      labels.push({
        ...candidate,
        lane
      });
    }

    return labels.sort((a, b) => a.x - b.x);
  };

  /*
   * Special 60-meter labeling:
   *
   * Four channel centers:
   * 5332, 5348, 5373, 5405 kHz
   *
   * Continuous 15-kHz segment:
   * 5351.5 to 5366.5 kHz
   *
   * Exact channel widths and segment boundaries
   * remain unchanged.
   */
  const getSixtyMeterLabels = (licenseClass) => {
    const allocations = band[licenseClass] || [];

    if (!allocations.length) return [];

    const overlaps = (modeLo, modeHi) =>
      allocations.some(([allocLo, allocHi]) =>
        Math.min(allocHi, modeHi) >
        Math.max(allocLo, modeLo)
      );

    const labels = [];

    for (const [description, modeLo, modeHi] of band.modes) {
      if (!overlaps(modeLo, modeHi)) continue;

      if (description.includes('center channel')) {
        const center = (modeLo + modeHi) / 2;
        const centerKHz =
          Number((center * 1000).toFixed(1));

        labels.push({
          x: scale(center),
          textX: scale(center),
          text: `${centerKHz}`,
          anchor: 'middle',
          lane: 1
        });
      } else {
        labels.push({
          x: scale(modeLo),
          textX: scale(modeLo) + 3,
          text: `${Number((modeLo * 1000).toFixed(1))}`,
          anchor: 'start',
          lane: 0
        });

        labels.push({
          x: scale(modeHi),
          textX: scale(modeHi) - 3,
          text: `${Number((modeHi * 1000).toFixed(1))}`,
          anchor: 'end',
          lane: 0
        });
      }
    }

    return labels.sort((a, b) => a.x - b.x);
  };

  const patternId =
    `pact-out-${band.name.replace(/[^a-zA-Z0-9]/g, '-')}`;

  return (
    <svg
      className="pact-band-svg"
      viewBox={`0 0 990 ${height}`}
      role="img"
      aria-label={`${band.name} amateur frequency allocations`}
    >
      {/* Hatched out-of-bounds pattern */}

      <defs>
        <pattern
          id={patternId}
          width="7"
          height="7"
          patternUnits="userSpaceOnUse"
          patternTransform="rotate(45)"
        >
          <rect
            width="7"
            height="7"
            fill="#f1f3f5"
          />
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="7"
            stroke="#9ca3af"
            strokeWidth="1.5"
          />
        </pattern>
      </defs>

      {/* Band heading */}

      <text
        x="8"
        y="21"
        className="pact-band-name"
      >
        {band.name}
      </text>

      {/* Minimum frequency */}

      <text
        x={x0}
        y="21"
        className="pact-band-end"
      >
        {pactFormatFrequency(band.lo)}
      </text>

      {/* Maximum frequency */}

      <text
        x={x0 + width}
        y="21"
        textAnchor="end"
        className="pact-band-end"
      >
        {pactFormatFrequency(band.hi)}
      </text>

      {/* License-class allocation rows */}

      {rows.map((licenseClass, rowIndex) => {
        const y =
          firstRowY + rowIndex * rowSpacing;

        const segments =
          getSegments(licenseClass);

        const boundaries =
          getBoundaries(segments);

        const labels =
          band.name === '60 m'
            ? getSixtyMeterLabels(licenseClass)
            : getStandardLabels(boundaries, licenseClass);

        return (
          <g key={licenseClass}>
            {/* License-class name */}

            <text
              x="123"
              y={y + 16}
              textAnchor="end"
              className="pact-band-class"
            >
              {pactLicenseNames[licenseClass]}
            </text>

            {/* Hatched background for unavailable frequencies */}

            <rect
              x={x0}
              y={y}
              width={width}
              height={barHeight}
              fill={`url(#${patternId})`}
              stroke="var(--ifm-color-emphasis-400)"
              strokeWidth="0.7"
            />

            {/* Colored operating segments */}

            {segments.map((segment, index) => (
              <rect
                key={`${licenseClass}-${index}`}
                x={scale(segment.lo)}
                y={y}
                width={Math.max(
                  0,
                  scale(segment.hi) -
                  scale(segment.lo)
                )}
                height={barHeight}
                className={`pact-mode-${segment.kind}`}
                onClick={() =>
                  showDetail(
                    segment.lo,
                    segment.hi,
                    `${pactLicenseNames[licenseClass]} — ${segment.description}`
                  )
                }
              >
                <title>
                  {`${pactLicenseNames[licenseClass]}: ${segment.description}; ${pactFormatFrequency(segment.lo)} – ${pactFormatFrequency(segment.hi)}`}
                </title>
              </rect>
            ))}

            {/* Internal frequency boundary lines */}

            {boundaries.map((frequency, index) => {
              const x = scale(frequency);

              return (
                <line
                  key={`boundary-${index}`}
                  x1={x}
                  x2={x}
                  y1={y}
                  y2={y + barHeight}
                  className="pact-band-boundary"
                  pointerEvents="none"
                />
              );
            })}

            {/* Frequency labels above their respective bars */}

            {labels.map((label, index) => {
              const x = label.x;
              const lane = label.lane;

              return (
                <g key={`label-${index}`}>
                  <line
                    x1={x}
                    x2={x}
                    y1={y - (lane === 0 ? 5 : 22)}
                    y2={y}
                    className="pact-band-frequency-tick"
                    pointerEvents="none"
                  />

                  <text
                    x={
                      label.textX === undefined
                        ? x + 3
                        : label.textX
                    }
                    y={y - (lane === 0 ? 10 : 27)}
                    textAnchor={label.anchor || 'start'}
                    className="pact-band-frequency-label"
                  >
                    {label.text === undefined
                      ? shortFrequency(label.frequency)
                      : label.text}
                  </text>
                </g>
              );
            })}
          </g>
        );
      })}

      {/* Left boundary to minimum frequency label */}

      <line
        x1={x0}
        x2={x0}
        y1={26}
        y2={bottomY}
        stroke="var(--ifm-color-emphasis-700)"
        strokeWidth="1.8"
        opacity="0.85"
        pointerEvents="none"
      />

      {/* Right boundary to maximum frequency label */}

      <line
        x1={x0 + width}
        x2={x0 + width}
        y1={26}
        y2={bottomY}
        stroke="var(--ifm-color-emphasis-700)"
        strokeWidth="1.8"
        opacity="0.85"
        pointerEvents="none"
      />
    </svg>
  );
}

export function PactAmateurBandChart() {
  const [category, setCategory] =
    useState('HF');

  const [selectedClass, setSelectedClass] =
    useState('ALL');

  const [detail, setDetail] =
    useState(null);

  const visibleBands =
    pactBandPlanData.filter(
      (band) => band.type === category
    );

  return (
    <div className="pact-bands">
      {/* Band and license-class controls */}

      <div className="pact-bands-toolbar">
        <div
          className="pact-bands-tabs"
          aria-label="Band group"
        >
          {[
            'LF / MF',
            'HF',
            'VHF / UHF'
          ].map((group) => (
            <button
              key={group}
              type="button"
              className={
                category === group
                  ? 'active'
                  : ''
              }
              aria-pressed={
                category === group
              }
              onClick={() => {
                setCategory(group);
                setDetail(null);
              }}
            >
              {group}
            </button>
          ))}
        </div>

        <label className="pact-bands-filter">
          License class

          <select
            value={selectedClass}
            onChange={(event) => {
              setSelectedClass(
                event.target.value
              );
              setDetail(null);
            }}
          >
            <option value="ALL">
              All classes
            </option>

            {pactLicenseClasses.map((licenseClass) => (
              <option
                key={licenseClass}
                value={licenseClass}
              >
                {pactLicenseNames[licenseClass]}
              </option>
            ))}
          </select>
        </label>
      </div>

      {/* Emission-category legend */}

      <div className="pact-bands-legend">
        <span>
          <i className="pact-key pact-mode-cw" />
          CW ONLY
        </span>

        <span>
          <i className="pact-key pact-mode-ssb" />
          SSB PHONE
        </span>

        <span>
          <i className="pact-key pact-mode-phone" />
          SSB / IMAGE / OTHER
        </span>

        <span>
          <i className="pact-key pact-mode-data" />
          RTTY / DATA / CW
        </span>

        <span>
          <i className="pact-key pact-mode-combined" />
          PHONE / IMAGE / RTTY / DATA / CW
        </span>

        <span>
          <i className="pact-key pact-mode-fdm" />
          FIXED DIGITAL MESSAGE ONLY
        </span>

        <span>
          <i className="pact-key pact-mode-usb" />
          USB / CW / RTTY / DATA
        </span>

        <span>
          <i className="pact-key pact-mode-out" />
          OUT OF BOUNDS
        </span>
      </div>

      {/* Instructions */}

      <p className="pact-band-hint">
        Each row shows an amateur radio license class.
        Colored segments indicate the illustrated operating
        categories, and diagonal hatching indicates frequencies
        outside that class's allocation. Vertical lines mark
        allocation boundaries and band limits. Frequency labels
        are positioned above their corresponding bars, using
        two lanes where needed to reduce overlapping text.
        Select a colored segment to view its exact endpoints.
      </p>

      {/* Frequency charts */}

      <div className="pact-bands-list">
        {visibleBands.map((band) => (
          <div
            className="pact-band-item"
            key={band.name}
          >
            <PactFrequencyBar
              band={band}
              selectedClass={selectedClass}
              setDetail={setDetail}
            />

            {/* One description per band, including 60 m */}

            {band.note && (
              <div className="pact-band-note">
                {band.note}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Selected frequency details */}

      {detail && (
        <div
          className="pact-band-detail"
          role="status"
        >
          <div>
            <strong>
              {detail.band} — {detail.desc}
            </strong>

            <div>{detail.range}</div>

            {detail.note && (
              <small>{detail.note}</small>
            )}
          </div>

          <button
            type="button"
            onClick={() => setDetail(null)}
            aria-label="Dismiss selection"
          >
            ×
          </button>
        </div>
      )}

      {/* Regulatory disclaimer */}

      <p className="pact-bands-disclaimer">
        These charts provide a simplified illustration of
        selected U.S. amateur frequency allocations.
        Category colors summarize emission types but do
        not identify every regulatory exception, regional
        restriction, operating condition, or power limitation.
        The chart should not be treated as an exhaustive
        statement of legal operating privileges. Verify
        current FCC regulations before transmitting.
      </p>

      {/* Regulatory sources */}

      <p className="pact-bands-source">
        Sources:{' '}

        <a
          href="https://www.ecfr.gov/current/title-47/section-97.301"
          target="_blank"
          rel="noopener noreferrer"
        >
          FCC §97.301
        </a>

        {' · '}

        <a
          href="https://www.ecfr.gov/current/title-47/section-97.305"
          target="_blank"
          rel="noopener noreferrer"
        >
          FCC §97.305
        </a>

        {' · '}

        <a
          href="https://www.ecfr.gov/current/title-47/section-97.303"
          target="_blank"
          rel="noopener noreferrer"
        >
          FCC §97.303
        </a>

        {' · '}

        <a
          href="https://www.arrl.org/band-plan"
          target="_blank"
          rel="noopener noreferrer"
        >
          ARRL Band Plans
        </a>
      </p>
    </div>
  );
}

<PactAmateurBandChart />
