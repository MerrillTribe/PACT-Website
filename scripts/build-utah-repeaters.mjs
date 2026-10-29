import fs from 'node:fs/promises';
import path from 'node:path';

/*
 * =========================================================
 * UTAH REPEATER DATA GENERATOR
 * =========================================================
 *
 * Source:
 * Utah VHF Society Frequency Coordinator raw database
 *
 * Output:
 * src/data/repeaters.js
 *
 * Filters:
 *   - Utah only
 *   - Repeater outputs only
 *   - Active systems only
 *
 * Proposed, inactive, simplex, beacon, adjacent-state,
 * remote-base, and other non-repeater records are excluded.
 */

const SOURCE_URL =
  'https://utahvhfs.org/rptrraw.txt';

const OUTPUT_FILE = path.resolve(
  'src/data/repeaters.js'
);

/*
 * ---------------------------------------------------------
 * SIMPLE CSV PARSER
 * ---------------------------------------------------------
 *
 * Handles:
 * - commas inside quoted fields
 * - escaped double quotes
 * - empty fields
 */

function parseCsvLine(line) {
  const fields = [];

  let value = '';
  let insideQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];

    if (char === '"') {
      if (
        insideQuotes &&
        line[i + 1] === '"'
      ) {
        value += '"';
        i += 1;
      } else {
        insideQuotes = !insideQuotes;
      }

      continue;
    }

    if (
      char === ',' &&
      !insideQuotes
    ) {
      fields.push(value.trim());
      value = '';
      continue;
    }

    value += char;
  }

  fields.push(value.trim());

  return fields;
}

/*
 * ---------------------------------------------------------
 * NORMALIZE PROPERTY NAME
 * ---------------------------------------------------------
 */

function normalizeHeader(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_+|_+$/g, '');
}

/*
 * ---------------------------------------------------------
 * CREATE OBJECTS FROM CSV
 * ---------------------------------------------------------
 */

function parseCsv(text) {
  const lines = text
    .replace(/\r/g, '')
    .split('\n')
    .filter((line) => line.trim());

  if (!lines.length) {
    return [];
  }

  const headers = parseCsvLine(
    lines[0]
  ).map(normalizeHeader);

  return lines
    .slice(1)
    .map((line) => {
      const values =
        parseCsvLine(line);

      const record = {};

      headers.forEach(
        (header, index) => {
          record[header] =
            values[index] ?? '';
        }
      );

      return record;
    });
}

/*
 * ---------------------------------------------------------
 * NUMBER HELPERS
 * ---------------------------------------------------------
 */

function numberOrNull(value) {
  if (
    !value ||
    value === '#VALUE!'
  ) {
    return null;
  }

  const number =
    Number.parseFloat(value);

  return Number.isFinite(number)
    ? number
    : null;
}

function formatFrequency(value) {
  const number =
    numberOrNull(value);

  if (number === null) {
    return null;
  }

  /*
   * Keep enough precision for narrowband
   * repeater channels such as 447.9625.
   */

  return `${number
    .toFixed(4)
    .replace(/0+$/, '')
    .replace(/\.$/, '')} MHz`;
}

/*
 * ---------------------------------------------------------
 * OFFSET
 * ---------------------------------------------------------
 */

function formatOffset(
  outputValue,
  inputValue
) {
  const output =
    numberOrNull(outputValue);

  const input =
    numberOrNull(inputValue);

  if (
    output === null ||
    input === null
  ) {
    return null;
  }

  const difference =
    input - output;

  if (
    Math.abs(difference) <
    0.00001
  ) {
    return 'Simplex';
  }

  const sign =
    difference > 0
      ? '+'
      : '-';

  return `${sign}${Math.abs(
    difference
  ).toFixed(3)} MHz`;
}

/*
 * ---------------------------------------------------------
 * TONE
 * ---------------------------------------------------------
 */

function getTone(record) {
  /*
   * Prefer published CTCSS input
   * tone because that is the tone
   * the user actually programs.
   */

  if (record.ctcss_in) {
    return `${record.ctcss_in} Hz`;
  }

  /*
   * Some older UVHFS entries place
   * the PL frequency in the generic
   * tone field.
   */

  if (
    record.tone &&
    !['Y', 'N'].includes(
      record.tone.toUpperCase()
    )
  ) {
    return `${record.tone} Hz`;
  }

  /*
   * DCS / DPL systems
   */

  if (record.dcs_code) {
    return `DCS ${record.dcs_code}`;
  }

  return null;
}

/*
 * ---------------------------------------------------------
 * BAND LABEL
 * ---------------------------------------------------------
 */

function getBand(record) {
  const band =
    String(record.band || '');

  switch (band) {
    case '29':
      return '10 m';

    case '52':
      return '6 m';

    case '144':
      return '2 m';

    case '220':
      return '1.25 m';

    case '440':
      return '70 cm';

    case '902':
      return '33 cm';

    case '1240':
      return '23 cm';

    case '2400':
      return '13 cm';

    case '3000':
      return '9 cm';

    case '5000':
      return '6 cm';

    case '10000':
      return '3 cm';

    default:
      return band
        ? `${band} MHz band`
        : null;
  }
}

/*
 * ---------------------------------------------------------
 * ID GENERATOR
 * ---------------------------------------------------------
 */

function slug(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function createId(
  record,
  index
) {
  const frequency =
    slug(record.output);

  const site =
    slug(
      record.site_name ||
        record.location
    );

  const callsign =
    slug(record.callsign);

  return [
    'utah',
    frequency,
    site,
    callsign,
    index,
  ]
    .filter(Boolean)
    .join('-');
}

/*
 * ---------------------------------------------------------
 * ACTIVE UTAH REPEATER FILTER
 * ---------------------------------------------------------
 */

function isUtahRepeater(record) {
  /*
   * Utah only.
   *
   * UVHFS also maintains some
   * neighboring-state records for
   * frequency coordination.
   */

  if (
    String(record.state || '')
      .trim()
      .toUpperCase() !== 'UT'
  ) {
    return false;
  }

  /*
   * Repeater output records only.
   *
   * This removes beacons, simplex,
   * packet, remote bases, etc.
   */

  if (
    String(record.use || '')
      .trim()
      .toUpperCase() !== 'RO'
  ) {
    return false;
  }

  /*
   * Only systems that UVHFS
   * currently marks active.
   *
   * Y = active
   * T = temporarily off air
   * P = proposed
   * N = inactive
   */

  if (
    String(record.active || '')
      .trim()
      .toUpperCase() !== 'Y'
  ) {
    return false;
  }

  return true;
}

/*
 * ---------------------------------------------------------
 * CONVERT UVHFS RECORD
 * ---------------------------------------------------------
 */

function convertRepeater(
  record,
  index
) {
  const latitude =
    numberOrNull(record.latitude);

  const longitude =
    numberOrNull(record.longitude);

  const siteName =
    record.site_name ||
    record.location ||
    'Repeater';

  const nearbyLocation =
    record.location || '';

  const area =
    record.area || '';

  const callsign =
    record.callsign || null;

  const sponsor =
    record.sponsor || null;

  const band =
    getBand(record);

  const position =
    latitude !== null &&
    longitude !== null
      ? [latitude, longitude]
      : null;

  const features = [];

  if (
    String(record.wide_area)
      .toUpperCase() === 'Y'
  ) {
    features.push(
      'Wide-area coverage'
    );
  }

  if (
    String(record.ares)
      .toUpperCase() === 'Y'
  ) {
    features.push('ARES');
  }

  if (
    String(record.races)
      .toUpperCase() === 'Y'
  ) {
    features.push('RACES');
  }

  if (
    String(record.linked)
      .toUpperCase() === 'Y'
  ) {
    features.push('Linked');
  }

  if (
    String(record.internet)
      .toUpperCase() === 'Y'
  ) {
    features.push(
      'Internet linked'
    );
  }

  if (
    String(record.emerg_power)
      .toUpperCase() === 'Y'
  ) {
    features.push(
      'Emergency power'
    );
  }

  return {
    id: createId(
      record,
      index
    ),

    name: siteName,

    frequency:
      formatFrequency(
        record.output
      ),

    inputFrequency:
      formatFrequency(
        record.input
      ),

    offset: formatOffset(
      record.output,
      record.input
    ),

    tone: getTone(record),

    position,

    location:
      nearbyLocation,

    area,

    band,

    callsign,

    sponsor,

    coverageArea:
      record.coverage_area ||
      null,

    internetLink:
      record.internet_link ||
      null,

    linkedFrequency:
      record.link_freq ||
      null,

    elevationFeet:
      numberOrNull(
        record.amsl_feet
      ),

    transmitPowerWatts:
      numberOrNull(
        record.tx_power
      ),

    erpWatts:
      numberOrNull(
        record.erp
      ),

    features,

    notes:
      record.notes || null,

    source:
      'Utah VHF Society',

    sourceUpdated:
      record.update || null,

    type: 'repeaters',
  };
}

/*
 * ---------------------------------------------------------
 * OPTIONAL MANUAL REPEATERS
 * ---------------------------------------------------------
 *
 * Use this for repeaters that PACT wants
 * shown but that have not yet appeared in
 * the current UVHFS data.
 *
 * The Provo City repeater is included here
 * so it remains available on the map.
 */

const manualRepeaters = [
  {
    id: 'provo-city-repeater',

    name: 'Provo City Repeater',

    frequency: '443.575 MHz',

    inputFrequency:
      '448.575 MHz',

    offset: '+5.000 MHz',

    tone: '123.0 Hz',

    position: [
      40.232838,
      -111.667014,
    ],

    location:
      'Provo City Hall',

    area:
      'Wasatch Front',

    band:
      '70 cm',

    callsign: null,

    sponsor:
      'Provo City',

    coverageArea:
      'Provo',

    internetLink: null,

    linkedFrequency: null,

    elevationFeet: null,

    transmitPowerWatts: 20,

    erpWatts: null,

    features: [
      'Emergency communications',
    ],

    notes:
      'Provo City emergency communications repeater.',

    source:
      'PACT / Provo City',

    sourceUpdated:
      '2026-09-17',

    type: 'repeaters',
  },
];

/*
 * ---------------------------------------------------------
 * DUPLICATE CHECK
 * ---------------------------------------------------------
 */

function repeaterKey(repeater) {
  return [
    repeater.frequency,
    repeater.callsign,
    repeater.name,
  ]
    .map((value) =>
      String(value || '')
        .trim()
        .toLowerCase()
    )
    .join('|');
}

function removeDuplicates(
  repeaters
) {
  const seen =
    new Set();

  return repeaters.filter(
    (repeater) => {
      const key =
        repeaterKey(
          repeater
        );

      if (seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    }
  );
}

/*
 * ---------------------------------------------------------
 * SORT
 * ---------------------------------------------------------
 */

function frequencyNumber(
  repeater
) {
  return (
    Number.parseFloat(
      repeater.frequency
    ) || 0
  );
}

function sortRepeaters(
  a,
  b
) {
  const frequencyDifference =
    frequencyNumber(a) -
    frequencyNumber(b);

  if (
    frequencyDifference !== 0
  ) {
    return frequencyDifference;
  }

  return a.name.localeCompare(
    b.name
  );
}

/*
 * ---------------------------------------------------------
 * DOWNLOAD DATABASE
 * ---------------------------------------------------------
 */

console.log(
  'Downloading Utah VHF Society repeater database...'
);

const response =
  await fetch(SOURCE_URL);

if (!response.ok) {
  throw new Error(
    `Unable to download UVHFS database: ${response.status} ${response.statusText}`
  );
}

const rawText =
  await response.text();

const records =
  parseCsv(rawText);

console.log(
  `Database records loaded: ${records.length}`
);

/*
 * ---------------------------------------------------------
 * FILTER + CONVERT
 * ---------------------------------------------------------
 */

const generatedRepeaters =
  records
    .filter(
      isUtahRepeater
    )
    .map(
      convertRepeater
    );

/*
 * ---------------------------------------------------------
 * COMBINE WITH PACT MANUAL ENTRIES
 * ---------------------------------------------------------
 */

const repeaters =
  removeDuplicates([
    ...generatedRepeaters,
    ...manualRepeaters,
  ]).sort(
    sortRepeaters
  );

/*
 * ---------------------------------------------------------
 * STATISTICS
 * ---------------------------------------------------------
 */

const withCoordinates =
  repeaters.filter(
    (repeater) =>
      repeater.position
  ).length;

const missingCoordinates =
  repeaters.length -
  withCoordinates;

const countsByBand =
  repeaters.reduce(
    (counts, repeater) => {
      const band =
        repeater.band ||
        'Unknown';

      counts[band] =
        (counts[band] || 0) +
        1;

      return counts;
    },
    {}
  );

/*
 * ---------------------------------------------------------
 * OUTPUT JAVASCRIPT FILE
 * ---------------------------------------------------------
 */

const header = `/*
 * =========================================================
 * UTAH AMATEUR RADIO REPEATERS
 * =========================================================
 *
 * Generated from:
 * Utah VHF Society Frequency Coordinator database
 *
 * Source:
 * https://utahvhfs.org/rptrraw.txt
 *
 * Filters:
 * - State: Utah
 * - Use: Repeater Output
 * - Status: Active
 *
 * Do not edit generated entries manually.
 * Run:
 *
 *   node scripts/build-utah-repeaters.mjs
 *
 * to refresh this file.
 */

`;

const output =
  `${header}export const repeaters = ${JSON.stringify(
    repeaters,
    null,
    2
  )};\n`;

await fs.mkdir(
  path.dirname(OUTPUT_FILE),
  {
    recursive: true,
  }
);

await fs.writeFile(
  OUTPUT_FILE,
  output,
  'utf8'
);

console.log('');
console.log(
  'Utah repeater file generated.'
);

console.log(
  `Total repeaters: ${repeaters.length}`
);

console.log(
  `With coordinates: ${withCoordinates}`
);

console.log(
  `Missing coordinates: ${missingCoordinates}`
);

console.log('');
console.log(
  'Repeaters by band:'
);

Object.entries(
  countsByBand
)
  .sort()
  .forEach(
    ([band, count]) => {
      console.log(
        `  ${band}: ${count}`
      );
    }
  );

console.log('');
console.log(
  `Written to: ${OUTPUT_FILE}`
);