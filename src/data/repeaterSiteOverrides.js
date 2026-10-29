/*
 * =========================================================
 * PACT REPEATER SITE OVERRIDES / AUDIT DATA
 * =========================================================
 *
 * Purpose:
 *
 * 1. Group repeaters known to share a physical site.
 * 2. Correct stale or erroneous source coordinates.
 * 3. Preserve confidence and verification information.
 * 4. Suppress known-bad coordinates until they are resolved.
 *
 * coordinateConfidence:
 *
 *   verified   = exact site position strongly established
 *   high       = multiple reliable sources agree
 *   medium     = correct facility/site, exact antenna uncertain
 *   low        = questionable source coordinate
 *   unresolved = do not trust the current coordinate
 *
 * operationalStatus:
 *
 *   active
 *   uncertain
 *   off-air
 *   portable
 *   restricted
 *   seasonal
 *   unknown
 *
 * lastVerified is the date PACT last reviewed the site
 * information, not necessarily the FCC/UVHFS coordination date.
 */

const repeaterSiteOverrides = [
  /*
   * =======================================================
   * BYU — WILKINSON STUDENT CENTER
   * =======================================================
   */

  {
    id: 'byu-wilkinson-student-center',

    name: 'Wilkinson Student Center',

    location:
      'Brigham Young University, Provo, Utah',

    position: [
      40.2484,
      -111.6468,
    ],

    frequencies: [
      145.33,
      449.075,
      927.0625,
    ],

    matchText: [
      'byu',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'BYU amateur radio repeater equipment is located at the Wilkinson Student Center.',

    repeaterMetadata: [
      {
        frequency: 145.33,
        operationalStatus: 'active',
      },
      {
        frequency: 449.075,
        operationalStatus: 'active',
      },
      {
        frequency: 927.0625,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * UTAH VALLEY HOSPITAL
   * =======================================================
   *
   * 145.470 and 449.325 are documented as co-located.
   *
   * 447.125 and 449.850 have been removed from this
   * grouping because their current sites are disputed
   * or have changed.
   */

  {
    id: 'utah-valley-hospital',

    name: 'Utah Valley Hospital',

    location:
      '1034 N 500 W, Provo, UT 84604',

    position: [
      40.2475,
      -111.6661,
    ],

    frequencies: [
      145.47,
      449.325,
    ],

    matchText: [
      'utah valley',
      'uvrmc',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '145.470 MHz and 449.325 MHz are documented as co-located at Utah Valley Hospital.',

    repeaterMetadata: [
      {
        frequency: 145.47,
        operationalStatus: 'active',
      },
      {
        frequency: 449.325,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * TIMPANOGOS REGIONAL HOSPITAL
   * =======================================================
   */

  {
    id: 'timpanogos-regional-hospital',

    name: 'Timpanogos Regional Hospital',

    location:
      '750 W 800 N, Orem, UT 84057',

    position: [
      40.3138,
      -111.7135,
    ],

    frequencies: [
      447.275,
    ],

    matchText: [
      'timpanogos',
    ],

    coordinateConfidence: 'medium',

    lastVerified: '2026-10-28',

    verificationNote:
      'The source coordinate is erroneous. This position represents the hospital facility; exact antenna placement has not yet been independently established.',

    repeaterMetadata: [
      {
        frequency: 447.275,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * MOUTH OF PROVO CANYON
   * =======================================================
   */

  {
    id: 'mouth-of-provo-canyon',

    name: 'Mouth of Provo Canyon',

    location:
      'Mouth of Provo Canyon, Utah County',

    position: [
      40.3119,
      -111.6511,
    ],

    frequencies: [
      145.41,
      448.325,
    ],

    matchText: [
      'provo canyon',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Both repeaters are listed at the same Mouth of Provo Canyon radio site.',

    repeaterMetadata: [
      {
        frequency: 145.41,
        operationalStatus: 'active',
      },
      {
        frequency: 448.325,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — NORTH / FOREST SERVICE SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-north-fs',

    name: 'Lake Mountain — North FS Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2831,
      -111.9375,
    ],

    frequencies: [
      145.23,
      224.56,
      448.2,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'These repeaters share the Lake Mountain North / Forest Service site coordinates.',

    repeaterMetadata: [
      {
        frequency: 145.23,
        operationalStatus: 'active',
      },
      {
        frequency: 224.56,
        operationalStatus: 'active',
      },
      {
        frequency: 448.2,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — UVARC / FM SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-uvarc-fm-site',

    name: 'Lake Mountain — UVARC Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2828,
      -111.9364,
    ],

    frequencies: [
      146.78,
      224.42,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'These repeater records share the same Lake Mountain north-site coordinates.',

    repeaterMetadata: [
      {
        frequency: 146.78,
        operationalStatus: 'active',
      },
      {
        frequency: 224.42,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — LEHI ARC / SDARC SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-lehi-sdarc',

    name: 'Lake Mountain — Lehi ARC / SDARC Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2825,
      -111.9369,
    ],

    frequencies: [
      145.37,
      147.08,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Lehi ARC publishes this location for 145.370 MHz, and the current SDARC 147.080 MHz record uses the same position.',

    repeaterMetadata: [
      {
        frequency: 145.37,
        operationalStatus: 'active',
      },
      {
        frequency: 147.08,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — STATE SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-state-site',

    name: 'Lake Mountain — State Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2825,
      -111.9365,
    ],

    frequencies: [
      146.76,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'UARC publishes the Lake Mountain repeater GPS position for 146.760 MHz.',

    repeaterMetadata: [
      {
        frequency: 146.76,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — CITADEL SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-citadel',

    name: 'Lake Mountain — Citadel Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2664,
      -111.9367,
    ],

    frequencies: [
      449.2,
    ],

    matchText: [
      'citadel',
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Coordinator data specifically identifies this as the Lake Mountain Citadel site.',

    repeaterMetadata: [
      {
        frequency: 449.2,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — SOUTH / COUNTY SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-south-county',

    name: 'Lake Mountain — South / County Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2614,
      -111.9281,
    ],

    frequencies: [
      147.28,
      449.675,
      449.975,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current UCARES information identifies the Lake Mountain South repeater complex and documents co-location of the primary repeaters.',

    repeaterMetadata: [
      {
        frequency: 147.28,
        operationalStatus: 'active',
      },
      {
        frequency: 449.675,
        operationalStatus: 'restricted',
        statusNote:
          'Closed repeater reserved for ECS Team members.',
      },
      {
        frequency: 449.975,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — 224.700 / 449.475 SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-2617-site',

    name: 'Lake Mountain — South Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2617,
      -111.9278,
    ],

    frequencies: [
      224.7,
      449.475,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Both repeater records use the exact same latitude, longitude, and elevation.',

    repeaterMetadata: [
      {
        frequency: 224.7,
        operationalStatus: 'uncertain',
        statusNote:
          'Current sources disagree on whether this repeater is on-air.',
      },
      {
        frequency: 449.475,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LAKE MOUNTAIN — N7IMF SITE
   * =======================================================
   */

  {
    id: 'lake-mountain-n7imf',

    name: 'Lake Mountain — N7IMF Site',

    location:
      'Lake Mountain, Utah County',

    position: [
      40.2781,
      -111.934,
    ],

    frequencies: [
      448.7,
    ],

    matchText: [
      'lake mtn',
      'lake mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current repeater information places this site approximately 500 meters from the northern Lake Mountain communications complex.',

    repeaterMetadata: [
      {
        frequency: 448.7,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * WEST MOUNTAIN
   * =======================================================
   */

  {
    id: 'west-mountain-main',

    name: 'West Mountain',

    location:
      'West Mountain, Utah County',

    position: [
      40.09,
      -111.8219,
    ],

    frequencies: [
      147.34,
      448.25,
      448.95,
    ],

    matchText: [
      'west mtn',
      'west mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'All three repeaters are listed within approximately 100 meters of one another at the West Mountain communications site.',

    repeaterMetadata: [
      {
        frequency: 147.34,
        operationalStatus: 'active',
      },
      {
        frequency: 448.25,
        operationalStatus: 'active',
      },
      {
        frequency: 448.95,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * WOODLAND HILLS
   * =======================================================
   */

  {
    id: 'woodland-hills-main',

    name: 'Woodland Hills',

    location:
      'Woodland Hills, Utah',

    position: [
      40.0056,
      -111.6547,
    ],

    frequencies: [
      447.075,
      447.3,
    ],

    matchText: [
      'woodland hills',
      'salem',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The two repeaters share the same listed transmitter coordinates.',

    repeaterMetadata: [
      {
        frequency: 447.075,
        operationalStatus: 'active',
      },
      {
        frequency: 447.3,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * LEHI SHARED QTH
   * =======================================================
   */

  {
    id: 'lehi-shared-qth',

    name: 'Lehi QTH',

    location:
      'Lehi, Utah',

    position: [
      40.4592,
      -111.8297,
    ],

    frequencies: [
      224.74,
      927.9875,
    ],

    matchText: [
      'lehi',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Both records use the same Lehi QTH coordinates.',

    repeaterMetadata: [
      {
        frequency: 224.74,
        operationalStatus: 'active',
      },
      {
        frequency: 927.9875,
        operationalStatus: 'uncertain',
      },
    ],
  },

  /*
   * =======================================================
   * AMERICAN FORK CANYON ENTRANCE / CEDAR HILLS
   * =======================================================
   */

  {
    id: 'cedar-hills-af-canyon-entrance',

    name: 'American Fork Canyon Entrance',

    location:
      'Cedar Hills, Utah',

    position: [
      40.4283,
      -111.7561,
    ],

    frequencies: [
      927.1625,
    ],

    matchText: [
      'cedar hills',
      'american fork canyon',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current records describe the site as the American Fork Canyon entrance in Cedar Hills.',

    repeaterMetadata: [
      {
        frequency: 927.1625,
        operationalStatus: 'active',
        mode: 'DMR',
      },
    ],
  },

  /*
   * =======================================================
   * REDWOOD ROAD / EAGLE MOUNTAIN
   * =======================================================
   *
   * Lehi ARC publishes identical coordinates and elevation
   * for 147.020 MHz and 446.750 MHz.
   */

  {
    id: 'redwood-road-eagle-mountain',

    name: 'Redwood Road / Eagle Mountain',

    location:
      'Eagle Mountain / Saratoga Springs, Utah',

    position: [
      40.370475,
      -111.991758,
    ],

    frequencies: [
      147.02,
      446.75,
    ],

    matchText: [
      'redwood',
      'eagle mountain',
      'saratoga',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Lehi ARC publishes identical coordinates and elevation for both repeaters.',

    repeaterMetadata: [
      {
        frequency: 147.02,
        operationalStatus: 'active',
      },
      {
        frequency: 446.75,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * TRAVERSE RIDGE
   * =======================================================
   */

  {
    id: 'traverse-ridge',

    name: 'Traverse Ridge',

    location:
      'Traverse Ridge, Lehi, Utah',

    position: [
      40.4678,
      -111.8872,
    ],

    frequencies: [
      445.1375,
      446.575,
    ],

    matchText: [
      'traverse ridge',
      'lehi',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current K7RPT system information lists both repeaters on the air at the Traverse Ridge communications site.',

    repeaterMetadata: [
      {
        frequency: 445.1375,
        operationalStatus: 'active',
        mode: 'DMR',
      },
      {
        frequency: 446.575,
        operationalStatus: 'active',
        mode: 'FM',
      },
    ],
  },

  /*
   * =======================================================
   * AMERICAN FORK CANYON
   * =======================================================
   */

  {
    id: 'american-fork-canyon-448225',

    name: 'American Fork Canyon',

    location:
      'American Fork Canyon, Utah County',

    position: [
      40.5331,
      -111.6414,
    ],

    frequencies: [
      448.225,
    ],

    matchText: [
      'american fork canyon',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Utah coordinator data identifies this repeater at the American Fork Canyon site.',

    repeaterMetadata: [
      {
        frequency: 448.225,
        operationalStatus: 'seasonal',
        statusNote:
          'American Fork Canyon Alliance identifies this repeater as seasonal.',
      },
    ],
  },

  /*
   * =======================================================
   * PROVO CITY REPEATER — KM7GCR
   * =======================================================
   *
   * Verified technical configuration:
   *   Downlink / repeater output: 448.575 MHz
   *   Uplink / repeater input:    443.575 MHz
   *   Offset:                     -5.000 MHz
   *   Uplink tone:                123.0 Hz
   *
   * The UVHFS-generated KM7GCR record has the correct
   * frequency direction. Its source coordinate is overridden
   * to the verified Provo City Hall location. The older
   * manually maintained 443.575-output record is suppressed
   * below as a duplicate with reversed frequencies.
   */

  {
    id: 'provo-city-repeater-km7gcr',

    name: 'Provo City Repeater',

    location:
      'Provo City Hall, Provo, Utah',

    position: [
      40.232838,
      -111.667014,
    ],

    frequencies: [
      448.575,
    ],

    matchText: [
      'km7gcr',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Verified configuration: 448.575 MHz downlink / 443.575 MHz uplink, -5.000 MHz offset, 123.0 Hz uplink tone. The source position is corrected to Provo City Hall.',

    repeaterMetadata: [
      {
        frequency: 448.575,
        callsign: 'KM7GCR',
        inputFrequency: '443.575 MHz',
        offset: '-5.000 MHz',
        tone: '123.0 Hz',
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * ENSIGN PEAK — KC7IIB / KA7EGC SITE
   * =======================================================
   *
   * 449.175 was historically labeled Point of the Mountain,
   * but current coordinator notes place it at Ensign Peak.
   * 448.450 is listed within approximately 20 meters of the
   * same Ensign communications compound.
   */

  {
    id: 'ensign-peak-kc7iib-ka7egc',

    name: 'Ensign Peak — KC7IIB / KA7EGC Site',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8072,
      -111.8918,
    ],

    frequencies: [
      448.45,
      449.175,
    ],

    matchText: [
      'ensign peak',
      'pt of mtn',
      'point of the mountain',
      'kc7iib',
      'ka7egc',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '448.450 MHz and 449.175 MHz are listed within approximately 20 meters of one another at the Ensign Peak communications complex. Coordinator notes place 449.175 MHz at Ensign Peak despite its stale Point of the Mountain site label.',

    repeaterMetadata: [
      {
        frequency: 448.45,
        operationalStatus: 'active',
      },
      {
        frequency: 449.175,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — FARNSWORTH PEAK / FOX 13 SITE
   * =======================================================
   */

  {
    id: 'farnsworth-peak-fox13',

    name: 'Farnsworth Peak — FOX 13 Site',

    location:
      'Farnsworth Peak, Salt Lake County, Utah',

    position: [
      40.6583,
      -112.2031,
    ],

    frequencies: [
      53.15,
      146.94,
      147.12,
      448.15,
      449.15,
      449.5,
    ],

    matchText: [
      'farnsworth',
      'fox 13',
      'kstu',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Utah coordinator records place all six repeaters at the same Farnsworth Peak FOX 13 site coordinates and elevation.',

    repeaterMetadata: [
      {
        frequency: 53.15,
        operationalStatus: 'active',
      },
      {
        frequency: 146.94,
        operationalStatus: 'active',
      },
      {
        frequency: 147.12,
        operationalStatus: 'active',
      },
      {
        frequency: 448.15,
        operationalStatus: 'active',
      },
      {
        frequency: 449.15,
        operationalStatus: 'active',
      },
      {
        frequency: 449.5,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — FARNSWORTH PEAK / UARC KSL SITE
   * =======================================================
   */

  {
    id: 'farnsworth-peak-uarc-146620',

    name: 'Farnsworth Peak — UARC / KSL Site',

    location:
      'Farnsworth Peak, Salt Lake County, Utah',

    position: [
      40.6597,
      -112.2022,
    ],

    frequencies: [
      146.62,
    ],

    matchText: [
      'farnsworth',
      'ksl 5',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Utah coordinator data identifies the Farnsworth half of the synchronized UARC 146.620 MHz system at the KSL site.',

    repeaterMetadata: [
      {
        frequency: 146.62,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — SCOTT'S HILL
   * =======================================================
   */

  {
    id: 'scotts-hill',

    name: "Scott's Hill",

    location:
      "Scott's Hill, Brighton, Utah",

    position: [
      40.6292,
      -111.5689,
    ],

    frequencies: [
      145.27,
      146.62,
      449.525,
    ],

    matchText: [
      'scotts hill',
      "scott's hill",
      'scotts peak',
      'brighton',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current coordinator records place 145.270 MHz and 146.620 MHz at the same Scott’s Hill coordinates; 449.525 MHz is listed at the same communications site within approximately 40 meters.',

    repeaterMetadata: [
      {
        frequency: 145.27,
        operationalStatus: 'active',
      },
      {
        frequency: 146.62,
        operationalStatus: 'active',
      },
      {
        frequency: 449.525,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — BUTTERFIELD PEAK MAIN SITE
   * =======================================================
   */

  {
    id: 'butterfield-peak-main',

    name: 'Butterfield Peak — Main Site',

    location:
      'Butterfield Peak, Salt Lake County, Utah',

    position: [
      40.4672,
      -112.1708,
    ],

    frequencies: [
      145.45,
      147.14,
      449.725,
      927.1125,
    ],

    matchText: [
      'butterfield',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'These four repeaters are listed at the same Butterfield Peak site coordinates or the same communications compound.',

    repeaterMetadata: [
      {
        frequency: 145.45,
        operationalStatus: 'active',
      },
      {
        frequency: 147.14,
        operationalStatus: 'active',
      },
      {
        frequency: 449.725,
        operationalStatus: 'active',
      },
      {
        frequency: 927.1125,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — BUTTERFIELD PEAK DIGITAL SITE
   * =======================================================
   */

  {
    id: 'butterfield-peak-digital',

    name: 'Butterfield Peak — Digital / SkyHub Site',

    location:
      'Butterfield Peak, Salt Lake County, Utah',

    position: [
      40.4669,
      -112.173,
    ],

    frequencies: [
      447.9625,
      449.375,
    ],

    matchText: [
      'butterfield',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '447.9625 MHz and 449.375 MHz are listed within approximately 25 meters of one another at Butterfield Peak.',

    repeaterMetadata: [
      {
        frequency: 447.9625,
        operationalStatus: 'active',
        mode: 'DMR',
      },
      {
        frequency: 449.375,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — NELSON PEAK
   * =======================================================
   */

  {
    id: 'nelson-peak-main',

    name: 'Nelson Peak',

    location:
      'Nelson Peak, Salt Lake County, Utah',

    position: [
      40.6139,
      -112.1856,
    ],

    frequencies: [
      433.6,
      449,
      449.425,
    ],

    matchText: [
      'nelson peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'These three WA7GIE repeater records use the same Nelson Peak transmitter coordinates. Operational status varies by repeater.',

    repeaterMetadata: [
      {
        frequency: 433.6,
        operationalStatus: 'uncertain',
        statusNote:
          'Current sources do not consistently indicate this repeater as open and active.',
      },
      {
        frequency: 449,
        operationalStatus: 'restricted',
        statusNote:
          'Current coordinator data identifies this as a closed/restricted Cactus-system repeater.',
      },
      {
        frequency: 449.425,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — INTERMOUNTAIN RIDGE
   * =======================================================
   */

  {
    id: 'intermountain-ridge',

    name: 'Intermountain Ridge',

    location:
      'Intermountain Ridge, Salt Lake County, Utah',

    position: [
      40.4681,
      -112.1542,
    ],

    frequencies: [
      145.19,
      448.4,
    ],

    matchText: [
      'intermountain ridge',
      'w6ihc',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Both IHC Radio Club repeaters use the same Intermountain Ridge coordinates and are listed together in the Salt Lake County emergency communications standard load.',

    repeaterMetadata: [
      {
        frequency: 145.19,
        operationalStatus: 'active',
      },
      {
        frequency: 448.4,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — JORDAN VALLEY HOSPITAL
   * =======================================================
   */

  {
    id: 'jordan-valley-hospital',

    name: 'Jordan Valley Hospital',

    location:
      'Jordan Valley Hospital, West Jordan, Utah',

    position: [
      40.5903,
      -111.975,
    ],

    frequencies: [
      146.84,
      224.78,
    ],

    matchText: [
      'jordan valley hospital',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Salt Lake County emergency communications information identifies 224.780 MHz as linked to 146.840 MHz at Jordan Valley Hospital, and both source records use the same coordinates.',

    repeaterMetadata: [
      {
        frequency: 146.84,
        operationalStatus: 'active',
      },
      {
        frequency: 224.78,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — HUNTSMAN / UNIVERSITY HOSPITAL
   * =======================================================
   */

  {
    id: 'huntsman-center',

    name: 'Huntsman / University Hospital',

    location:
      'University of Utah / Huntsman Cancer Institute, Salt Lake City, Utah',

    position: [
      40.7719,
      -111.8367,
    ],

    frequencies: [
      146.74,
      448.1,
    ],

    matchText: [
      'huntsman',
      'u of u hospital',
      'university hospital',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 146.740 MHz and 448.100 MHz repeaters use identical source coordinates and are documented as a linked hospital repeater pair.',

    repeaterMetadata: [
      {
        frequency: 146.74,
        operationalStatus: 'active',
      },
      {
        frequency: 448.1,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — INTERMOUNTAIN MEDICAL CENTER
   * =======================================================
   */

  {
    id: 'intermountain-medical-center',

    name: 'Intermountain Medical Center',

    location:
      'Intermountain Medical Center, Murray, Utah',

    position: [
      40.6606,
      -111.8908,
    ],

    frequencies: [
      145.15,
      447.25,
      447.95,
      1298.75,
    ],

    matchText: [
      'ihc hospital murray',
      'intermountain medical center',
      'imed',
      'ko7slc',
      'kf7jba',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '145.150 MHz, 447.950 MHz, and 1298.750 MHz share the same hospital coordinates. The 447.250 MHz SLCoARES IMED TacNet record is approximately 25 meters away within the same medical-center complex.',

    repeaterMetadata: [
      {
        frequency: 145.15,
        operationalStatus: 'active',
      },
      {
        frequency: 447.25,
        operationalStatus: 'active',
      },
      {
        frequency: 447.95,
        operationalStatus: 'active',
      },
      {
        frequency: 1298.75,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — RIVERTON / KK7GKG SITE
   * =======================================================
   */

  {
    id: 'riverton-kk7gkg-site',

    name: 'Riverton — KK7GKG Site',

    location:
      'Riverton, Utah',

    position: [
      40.5158,
      -112.0069,
    ],

    frequencies: [
      445.0875,
      445.2625,
      446.075,
      447.475,
    ],

    matchText: [
      'riverton',
      'kk7gkg',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'All four active KK7GKG repeater records use the same Riverton transmitter coordinates. The separate 446.425 MHz Riverton QTH record has no published coordinate and is not forced into this grouping.',

    repeaterMetadata: [
      {
        frequency: 445.0875,
        operationalStatus: 'active',
      },
      {
        frequency: 445.2625,
        operationalStatus: 'active',
      },
      {
        frequency: 446.075,
        operationalStatus: 'active',
      },
      {
        frequency: 447.475,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — BLUFFDALE
   * =======================================================
   */

  {
    id: 'bluffdale-main',

    name: 'Bluffdale',

    location:
      'Bluffdale, Utah',

    position: [
      40.4306,
      -111.93,
    ],

    frequencies: [
      145.35,
      448.825,
    ],

    matchText: [
      'bluffdale',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Both repeaters use the same Bluffdale site coordinates and elevation in current Utah coordinator data.',

    repeaterMetadata: [
      {
        frequency: 145.35,
        operationalStatus: 'active',
      },
      {
        frequency: 448.825,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — ENSIGN PEAK K7XRD / WA7VHF SITE
   * =======================================================
   */

  {
    id: 'ensign-peak-k7xrd-wa7vhf',

    name: 'Ensign Peak — K7XRD / WA7VHF Site',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8058,
      -111.8906,
    ],

    frequencies: [
      147.16,
      449.275,
    ],

    matchText: [
      'ensign peak',
      'k7xrd',
      'wa7vhf',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      '147.160 MHz and 449.275 MHz use identical Ensign Peak coordinates and elevation.',

    repeaterMetadata: [
      {
        frequency: 147.16,
        operationalStatus: 'active',
      },
      {
        frequency: 449.275,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — ENSIGN PEAK N7HIW / K7JL SITE
   * =======================================================
   */

  {
    id: 'ensign-peak-n7hiw-k7jl',

    name: 'Ensign Peak — N7HIW / K7JL Site',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8047,
      -111.8964,
    ],

    frequencies: [
      448.175,
      449.4,
    ],

    matchText: [
      'ensign peak',
      'n7hiw',
      'k7jl',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      '448.175 MHz and 449.400 MHz use identical Ensign Peak coordinates.',

    repeaterMetadata: [
      {
        frequency: 448.175,
        operationalStatus: 'active',
      },
      {
        frequency: 449.4,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * SALT LAKE COUNTY — ENSIGN PEAK STANDALONE SITES
   * =======================================================
   */

  {
    id: 'ensign-peak-145210',

    name: 'Ensign Peak — 145.210',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8053,
      -111.8967,
    ],

    frequencies: [
      145.21,
    ],

    matchText: [
      'ensign peak',
      'wa7vhf',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Intermountain Intertie information places 145.210 MHz at Ensign Peak. The repeater remains usable even when its Intertie link is unavailable.',

    repeaterMetadata: [
      {
        frequency: 145.21,
        operationalStatus: 'active',
        statusNote:
          'Repeater remains usable; Intermountain Intertie link status may vary.',
      },
    ],
  },

  {
    id: 'ensign-peak-146700',

    name: 'Ensign Peak — SLCo ARES Site',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8081,
      -111.8903,
    ],

    frequencies: [
      146.7,
    ],

    matchText: [
      'ensign peak',
      'kc7iib',
      'slcoares',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Utah coordinator data lists the SLCo ARES 146.700 MHz repeater at this Ensign Peak site.',

    repeaterMetadata: [
      {
        frequency: 146.7,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'ensign-peak-224820',

    name: 'Ensign Peak — 224.820',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8131,
      -111.8911,
    ],

    frequencies: [
      224.82,
    ],

    matchText: [
      'ensign peak',
      'ka7egc',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Utah coordinator and Salt Lake County club information consistently identify 224.820 MHz with Ensign Peak.',

    repeaterMetadata: [
      {
        frequency: 224.82,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'ensign-peak-dmr-4479375',

    name: 'Ensign Peak — DMR Site',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8061,
      -111.895,
    ],

    frequencies: [
      447.9375,
    ],

    matchText: [
      'ensign peak',
      'n6dvz',
      'dmr-utah',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current Utah coordinator data identifies the N6DVZ DMR repeater at this Ensign Peak position.',

    repeaterMetadata: [
      {
        frequency: 447.9375,
        operationalStatus: 'active',
        mode: 'DMR',
      },
    ],
  },

  {
    id: 'ensign-peak-448525',

    name: 'Ensign Peak — K7XRD East Site',

    location:
      'Ensign Peak, Salt Lake City, Utah',

    position: [
      40.8072,
      -111.8811,
    ],

    frequencies: [
      448.525,
    ],

    matchText: [
      'ensign peak',
      'k7xrd',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'This K7XRD repeater is consistently identified with Ensign Peak but is sufficiently separated from the other Ensign transmitter coordinates to remain a distinct marker.',

    repeaterMetadata: [
      {
        frequency: 448.525,
        operationalStatus: 'active',
      },
    ],
  },

  /*
   * =======================================================
   * STATEWIDE AUDIT ADDITIONS — DAVIS THROUGH SOUTHWEST UTAH
   * =======================================================
   *
   * These entries encode the high-confidence physical-site
   * groupings, coordinate corrections, status corrections,
   * and quarantines established during the statewide audit.
   */

  {
    id: 'davis-shepherd-peak',

    name: 'Shepherd Peak',

    location:
      'Davis County, Utah',

    position: [
      41.02545,
      -111.8375,
    ],

    frequencies: [
      53.01,
      449.875,
    ],

    matchText: [
      'sheppard peak',
      'shepherd peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '53.010 MHz and 449.875 MHz are co-located on the Shepherd/Sheppard Peak communications site.',

    repeaterMetadata: [
      {
        frequency: 53.01,
        operationalStatus: 'active',
      },
      {
        frequency: 449.875,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'davis-antelope-island-frary-peak',

    name: 'Antelope Island — Frary Peak',

    location:
      'Antelope Island, Davis County, Utah',

    position: [
      41.0147,
      -112.2083,
    ],

    frequencies: [
      147.04,
      447.2,
    ],

    matchText: [
      'antelope is',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 147.040 MHz and 447.200 MHz Davis County repeaters share the Antelope Island / Frary Peak site.',

    repeaterMetadata: [
      {
        frequency: 147.04,
        operationalStatus: 'active',
      },
      {
        frequency: 447.2,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'davis-bountiful-rifle-range',

    name: 'Bountiful Rifle Range',

    location:
      'Bountiful, Davis County, Utah',

    position: [
      40.9028,
      -111.8531,
    ],

    frequencies: [
      145.1375,
      447.975,
    ],

    matchText: [
      'bountiful rifle range',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 145.1375 MHz and 447.975 MHz records share the same Bountiful Rifle Range site.',

    repeaterMetadata: [
      {
        frequency: 145.1375,
        operationalStatus: 'active',
      },
      {
        frequency: 447.975,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'davis-north-salt-lake-south-plant',

    name: 'North Salt Lake South Plant',

    location:
      'North Salt Lake, Davis County, Utah',

    position: [
      40.8431,
      -111.9464,
    ],

    frequencies: [
      147.3,
      447.65,
    ],

    matchText: [
      'north salt lake south plant',
      'north salt lake sewer plant',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 147.300 MHz and 447.650 MHz Davis County repeaters are co-located at the North Salt Lake South Plant.',

    repeaterMetadata: [
      {
        frequency: 147.3,
        operationalStatus: 'active',
      },
      {
        frequency: 447.65,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'weber-mount-ogden',

    name: 'Mount Ogden',

    location:
      'Mount Ogden, Weber County, Utah',

    position: [
      41.1997,
      -111.8819,
    ],

    frequencies: [
      146.9,
      448.6,
    ],

    matchText: [
      'mt ogden',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '146.900 MHz and 448.600 MHz share the Mount Ogden site.',

    repeaterMetadata: [
      {
        frequency: 146.9,
        operationalStatus: 'active',
      },
      {
        frequency: 448.6,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'weber-powder-mountain',

    name: 'Powder Mountain',

    location:
      'Powder Mountain, Weber County, Utah',

    position: [
      41.3697,
      -111.7647,
    ],

    frequencies: [
      145.47,
      447.775,
    ],

    matchText: [
      'powder mtn',
      'powder mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The Weber County Sheriff 145.470 MHz and 447.775 MHz repeaters share the Powder Mountain site.',

    repeaterMetadata: [
      {
        frequency: 145.47,
        operationalStatus: 'active',
      },
      {
        frequency: 447.775,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'weber-ogden-sheriff-office',

    name: 'Ogden Sheriff Office',

    location:
      'Ogden, Weber County, Utah',

    position: [
      41.245,
      -111.9939,
    ],

    frequencies: [
      145.1125,
      447.95,
      1284.4,
      1298.75,
    ],

    matchText: [
      'ogden sheriff office',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF, UHF, and 23 cm D-STAR records share the Ogden Sheriff Office site.',

    repeaterMetadata: [
      {
        frequency: 145.1125,
        operationalStatus: 'active',
      },
      {
        frequency: 447.95,
        operationalStatus: 'active',
      },
      {
        frequency: 1284.4,
        operationalStatus: 'active',
      },
      {
        frequency: 1298.75,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'weber-little-mountain',

    name: 'Little Mountain / Marriott-Slaterville',

    location:
      'Weber County, Utah',

    position: [
      41.2547,
      -112.2372,
    ],

    frequencies: [
      146.82,
      448.575,
    ],

    matchText: [
      'little mtn',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '146.820 MHz and 448.575 MHz share the Little Mountain / Marriott-Slaterville site. Current regional sources report the systems off air.',

    repeaterMetadata: [
      {
        frequency: 146.82,
        operationalStatus: 'off-air',
      },
      {
        frequency: 448.575,
        operationalStatus: 'off-air',
      },
    ],

  },

  {
    id: 'box-elder-promontory-south',

    name: 'Promontory Point — South Site',

    location:
      'Promontory Point, Box Elder County, Utah',

    position: [
      41.2578,
      -112.4408,
    ],

    frequencies: [
      145.49,
      147.26,
      447.35,
    ],

    matchText: [
      'promontory point',
      'promontory',
      'promentory',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The Intertie/BARC/DMR records occupy the southern Promontory communications site near 41.2578, -112.4408.',

    repeaterMetadata: [
      {
        frequency: 145.49,
        operationalStatus: 'active',
      },
      {
        frequency: 147.26,
        operationalStatus: 'active',
      },
      {
        frequency: 447.35,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'box-elder-riverside-dstar',

    name: 'Riverside — N7RDS D-STAR Site',

    location:
      'Riverside / Tremonton, Box Elder County, Utah',

    position: [
      41.7794,
      -112.1789,
    ],

    frequencies: [
      145.175,
      447.925,
    ],

    matchText: [
      'riverside',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The N7RDS 145.175 MHz and 447.925 MHz D-STAR records share the same Riverside site.',

    repeaterMetadata: [
      {
        frequency: 145.175,
        operationalStatus: 'active',
      },
      {
        frequency: 447.925,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'box-elder-county-brigham-city',

    name: 'Box Elder County — Brigham City',

    location:
      'Brigham City, Box Elder County, Utah',

    position: [
      41.5089,
      -112.035,
    ],

    frequencies: [
      445.825,
      445.925,
    ],

    matchText: [
      'box elder county',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The two W7DEE Box Elder County repeaters share the same Brigham City site.',

    repeaterMetadata: [
      {
        frequency: 445.825,
        operationalStatus: 'active',
      },
      {
        frequency: 445.925,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'box-elder-promontory-448775-unresolved',

    name: 'Promontory 448.775 — Coordinate Unresolved',

    frequencies: [
      448.775,
    ],

    matchText: [
      'promontory',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The record is identified as Promontory, but the stored coordinate is in the Ogden area and conflicts with the current Promontory site description.',

    repeaterMetadata: [
      {
        frequency: 448.775,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'box-elder-thiokol-448300-unresolved',

    name: 'Thiokol / ATK 448.300 — Coordinate Unresolved',

    frequencies: [
      448.3,
    ],

    matchText: [
      'thiokol blue springs hill',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The stored 448.300 MHz coordinate conflicts strongly with the associated Thiokol / ATK site information and should not be plotted until independently resolved.',

    repeaterMetadata: [
      {
        frequency: 448.3,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'cache-mount-logan',

    name: 'Mount Logan',

    location:
      'Mount Logan, Cache County, Utah',

    position: [
      41.7136,
      -111.7169,
    ],

    frequencies: [
      146.72,
      449.625,
    ],

    matchText: [
      'mt logan',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'BARC publishes identical coordinates for the 146.720 MHz and 449.625 MHz Mount Logan repeaters.',

    repeaterMetadata: [
      {
        frequency: 146.72,
        operationalStatus: 'active',
      },
      {
        frequency: 449.625,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'cache-mount-pisgah',

    name: 'Mount Pisgah',

    location:
      'Mount Pisgah, Cache County, Utah',

    position: [
      41.5511,
      -111.9369,
    ],

    frequencies: [
      447,
      449.65,
      449.8,
    ],

    matchText: [
      'mt pisgah',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The DMR, Intertie, and BARC UHF systems share the Mount Pisgah communications site.',

    repeaterMetadata: [
      {
        frequency: 447,
        operationalStatus: 'active',
        mode: 'DMR',
      },
      {
        frequency: 449.65,
        operationalStatus: 'active',
      },
      {
        frequency: 449.8,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'cache-sheriff-office',

    name: 'Cache County Sheriff\'s Office',

    location:
      'Logan, Cache County, Utah',

    position: [
      41.737,
      -111.8656,
    ],

    frequencies: [
      146.64,
      447.125,
    ],

    matchText: [
      'cache co',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 146.640 MHz FM and 447.125 MHz DMR records are located at the Cache County Sheriff Office complex.',

    repeaterMetadata: [
      {
        frequency: 146.64,
        operationalStatus: 'active',
      },
      {
        frequency: 447.125,
        operationalStatus: 'active',
        mode: 'DMR',
      },
    ],

  },

  {
    id: 'cache-smithfield-fire-old-coordinates',

    name: 'Smithfield Fire — Old Coordinates Unresolved',

    frequencies: [
      147.2,
      447.975,
      1299.75,
    ],

    matchText: [
      'smithfield fire station',
      'logan',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current operator information associates these systems with Smithfield Fire, but the stored coordinates conflict with the newly updated 145.150 MHz Smithfield Fire site.',

    repeaterMetadata: [
      {
        frequency: 147.2,
        operationalStatus: 'active',
      },
      {
        frequency: 447.975,
        operationalStatus: 'active',
      },
      {
        frequency: 1299.75,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'morgan-search-rescue',

    name: 'Morgan Search & Rescue',

    location:
      'Morgan, Utah',

    position: [
      41.0569,
      -111.6803,
    ],

    frequencies: [
      145.1625,
      447.9625,
    ],

    matchText: [
      'morgan search & rescue',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF and UHF D-STAR records share the Morgan Search & Rescue building site.',

    repeaterMetadata: [
      {
        frequency: 145.1625,
        operationalStatus: 'uncertain',
        statusNote: 'Coordinator data lists the system open; community reports indicate it should be re-verified.',
      },
      {
        frequency: 447.9625,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'rich-bear-lake-main',

    name: 'Bear Lake — Laketown Main Site',

    location:
      'Bear Lake / Laketown, Rich County, Utah',

    position: [
      41.8825,
      -111.2692,
    ],

    frequencies: [
      147.02,
      448.975,
      449.7,
    ],

    matchText: [
      'bear lake',
      'laketown site',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '147.020 MHz, 448.975 MHz, and 449.700 MHz share the main Bear Lake/Laketown mountain site.',

    repeaterMetadata: [
      {
        frequency: 147.02,
        operationalStatus: 'active',
      },
      {
        frequency: 448.975,
        operationalStatus: 'off-air',
      },
      {
        frequency: 449.7,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'summit-lewis-peak',

    name: 'Lewis Peak',

    location:
      'Lewis Peak, Summit County, Utah',

    position: [
      40.855,
      -111.4797,
    ],

    frequencies: [
      147.36,
      448.65,
      449.55,
    ],

    matchText: [
      'lewis peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The three WA7GIE Lewis Peak records occupy the same summit communications complex.',

    repeaterMetadata: [
      {
        frequency: 147.36,
        operationalStatus: 'active',
      },
      {
        frequency: 448.65,
        operationalStatus: 'off-air',
      },
      {
        frequency: 449.55,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'wasatch-wilson-peak',

    name: 'Wilson Peak',

    location:
      'Midway / Wasatch County, Utah',

    position: [
      40.5714,
      -111.4761,
    ],

    frequencies: [
      147.2,
    ],

    matchText: [
      'wilson peak',
    ],

    coordinateConfidence: 'medium',

    lastVerified: '2026-10-28',

    verificationNote:
      'The site identity is established as Wilson Peak, but current external sources differ by roughly one kilometer on the exact transmitter coordinate.',

    repeaterMetadata: [
      {
        frequency: 147.2,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'tooele-wendover-peak',

    name: 'Wendover Peak',

    location:
      'Wendover, Tooele County, Utah',

    position: [
      40.7544,
      -114.0194,
    ],

    frequencies: [
      147.2,
      448.675,
      449.55,
    ],

    matchText: [
      'wendover peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF and UHF Wendover Peak records share the same source coordinate and elevation.',

    repeaterMetadata: [
      {
        frequency: 147.2,
        operationalStatus: 'active',
      },
      {
        frequency: 448.675,
        operationalStatus: 'off-air',
      },
      {
        frequency: 449.55,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'tooele-black-crook-peak',

    name: 'Black Crook Peak',

    location:
      'Vernon, Tooele County, Utah',

    position: [
      39.9844,
      -112.5397,
    ],

    frequencies: [
      145.39,
      448.975,
    ],

    matchText: [
      'black crook',
      'vernon',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '145.390 MHz and 448.975 MHz share the high Black Crook Peak site east of Vernon.',

    repeaterMetadata: [
      {
        frequency: 145.39,
        operationalStatus: 'active',
      },
      {
        frequency: 448.975,
        operationalStatus: 'off-air',
      },
    ],

  },

  {
    id: 'tooele-south-mountain',

    name: 'South Mountain',

    location:
      'Tooele County, Utah',

    position: [
      40.46,
      -112.4097,
    ],

    frequencies: [
      147.3,
      449.35,
    ],

    matchText: [
      'south mountain',
      'south mtn',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '147.300 MHz and 449.350 MHz share the South Mountain communications site.',

    repeaterMetadata: [
      {
        frequency: 147.3,
        operationalStatus: 'active',
      },
      {
        frequency: 449.35,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'juab-levan-peak',

    name: 'Levan Peak State Site',

    location:
      'Levan Peak, Juab County, Utah',

    position: [
      39.4919,
      -111.8286,
    ],

    frequencies: [
      145.27,
    ],

    matchText: [
      'levan peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Levan Peak coordinate is established. Current Intermountain Intertie reporting indicates a temporary transmitter failure.',

    repeaterMetadata: [
      {
        frequency: 145.27,
        operationalStatus: 'off-air',
        statusNote: 'Intermountain Intertie reported the 2 m transmitter failed as of September 13, 2026.',
      },
    ],

  },

  {
    id: 'sanpete-barton-peak',

    name: 'Barton Peak',

    location:
      'Barton Peak, Sanpete County, Utah',

    position: [
      39.3231,
      -111.7731,
    ],

    frequencies: [
      146.72,
      448.275,
    ],

    matchText: [
      'barton peak',
      'barton pk',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The Skyline 146.720 MHz and 448.275 MHz systems share the Barton Peak site.',

    repeaterMetadata: [
      {
        frequency: 146.72,
        operationalStatus: 'active',
      },
      {
        frequency: 448.275,
        operationalStatus: 'active',
        tone: '114.8 Hz',
      },
    ],

  },

  {
    id: 'sanpete-antelope-valley-sterling',

    name: 'Antelope Valley — West of Sterling',

    location:
      'West of Sterling, Sanpete County, Utah',

    position: [
      39.2017,
      -111.7283,
    ],

    frequencies: [
      145.15,
      145.29,
      447.85,
      447.95,
    ],

    matchText: [
      'west of sterling antelope valley',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The four Sterling/Antelope Valley systems occupy the same communications site.',

    repeaterMetadata: [
      {
        frequency: 145.15,
        operationalStatus: 'active',
      },
      {
        frequency: 145.29,
        operationalStatus: 'active',
      },
      {
        frequency: 447.85,
        operationalStatus: 'active',
      },
      {
        frequency: 447.95,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'sanpete-skyline-drive-223920-unresolved',

    name: 'Skyline Drive 223.920 — Coordinate Unresolved',

    frequencies: [
      223.92,
    ],

    matchText: [
      'skyline drive',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The stored coordinate exactly duplicates Horn Mountain and is not credible for the Skyline Drive / Ephraim repeater.',

    repeaterMetadata: [
      {
        frequency: 223.92,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'sevier-monroe-peak',

    name: 'Monroe Peak',

    location:
      'Monroe Peak, Sevier County, Utah',

    position: [
      38.5367,
      -112.073,
    ],

    frequencies: [
      146.64,
      146.84,
      146.86,
      447.45,
    ],

    matchText: [
      'monroe peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current records place the four Monroe Peak systems in the same summit communications complex.',

    repeaterMetadata: [
      {
        frequency: 146.64,
        operationalStatus: 'active',
      },
      {
        frequency: 146.84,
        operationalStatus: 'active',
      },
      {
        frequency: 146.86,
        operationalStatus: 'active',
      },
      {
        frequency: 447.45,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'millard-beesting-peak',

    name: 'Beesting Peak',

    location:
      'East of Holden, Millard County, Utah',

    position: [
      39.0417,
      -112.1417,
    ],

    frequencies: [
      147.1,
      449.3,
    ],

    matchText: [
      'beesting peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      '147.100 MHz and 449.300 MHz share the Beesting Peak site.',

    repeaterMetadata: [
      {
        frequency: 147.1,
        operationalStatus: 'active',
      },
      {
        frequency: 449.3,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'carbon-ford-ridge',

    name: 'Ford Ridge',

    location:
      'Ford Ridge, Carbon County, Utah',

    position: [
      39.756811,
      -110.990578,
    ],

    frequencies: [
      145.31,
    ],

    matchText: [
      'ford ridge',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Coordinate normalized to the operator-published SDARC Ford Ridge site.',

    repeaterMetadata: [
      {
        frequency: 145.31,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'carbon-boardinghouse-ridge',

    name: 'Boardinghouse Ridge',

    location:
      'Boardinghouse Ridge, Carbon County, Utah',

    position: [
      39.656828,
      -111.198706,
    ],

    frequencies: [
      147.08,
      224.98,
    ],

    matchText: [
      'boardinghouse',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF and 1.25 m systems share the operator-published Boardinghouse Ridge site.',

    repeaterMetadata: [
      {
        frequency: 147.08,
        operationalStatus: 'active',
      },
      {
        frequency: 224.98,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'carbon-bruin-point',

    name: 'Bruin Point',

    location:
      'Bruin Point, Carbon County, Utah',

    position: [
      39.644722,
      -110.34775,
    ],

    frequencies: [
      145.175,
      147.32,
      449.05,
    ],

    matchText: [
      'bruin peak',
      'bruin point',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The three Bruin systems are normalized to SDARC\'s published Bruin Point site coordinate.',

    repeaterMetadata: [
      {
        frequency: 145.175,
        operationalStatus: 'active',
      },
      {
        frequency: 147.32,
        operationalStatus: 'active',
      },
      {
        frequency: 449.05,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'carbon-star-point',

    name: 'Star Point',

    location:
      'Star Point, Carbon County, Utah',

    position: [
      39.529944,
      -111.051536,
    ],

    frequencies: [
      447.025,
    ],

    matchText: [
      'star point',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The generated record lacks coordinates; position supplied from the operator-published Star Point site.',

    repeaterMetadata: [
      {
        frequency: 447.025,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'emery-horn-mountain',

    name: 'Horn Mountain',

    location:
      'Horn Mountain, Emery County, Utah',

    position: [
      39.209619,
      -111.142047,
    ],

    frequencies: [
      147.06,
      447.625,
      447.7,
    ],

    matchText: [
      'horn mtn',
      'horn mountain',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The three Horn Mountain systems share the SDARC operator-published site.',

    repeaterMetadata: [
      {
        frequency: 147.06,
        operationalStatus: 'active',
      },
      {
        frequency: 447.625,
        operationalStatus: 'active',
      },
      {
        frequency: 447.7,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'carbon-wood-hill',

    name: 'Wood Hill',

    location:
      'Price, Carbon County, Utah',

    position: [
      39.6078,
      -110.8136,
    ],

    frequencies: [
      147.2,
      448.3,
      449.35,
    ],

    matchText: [
      'wood hill',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The three Wood Hill records share the same source coordinate and elevation.',

    repeaterMetadata: [
      {
        frequency: 147.2,
        operationalStatus: 'active',
      },
      {
        frequency: 448.3,
        operationalStatus: 'active',
      },
      {
        frequency: 449.35,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'grand-bald-mesa',

    name: 'Bald Mesa',

    location:
      'Bald Mesa, Grand County, Utah',

    position: [
      38.528611,
      -109.324722,
    ],

    frequencies: [
      146.76,
      449.1,
    ],

    matchText: [
      'bald mesa',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF Sinbad and UHF systems share the Bald Mesa site.',

    repeaterMetadata: [
      {
        frequency: 146.76,
        operationalStatus: 'active',
      },
      {
        frequency: 449.1,
        operationalStatus: 'off-air',
      },
    ],

  },

  {
    id: 'san-juan-abajo-peak',

    name: 'Abajo Peak',

    location:
      'Abajo Peak, San Juan County, Utah',

    position: [
      37.839167,
      -109.461667,
    ],

    frequencies: [
      146.61,
      223.94,
      447.1,
      447.4,
    ],

    matchText: [
      'abajo peak',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The Abajo Peak systems are normalized to the operator-published summit site coordinate.',

    repeaterMetadata: [
      {
        frequency: 146.61,
        operationalStatus: 'active',
      },
      {
        frequency: 223.94,
        operationalStatus: 'active',
      },
      {
        frequency: 447.1,
        operationalStatus: 'active',
      },
      {
        frequency: 447.4,
        operationalStatus: 'off-air',
      },
    ],

  },

  {
    id: 'wayne-mount-ellen',

    name: 'Mount Ellen — Henry Mountains',

    location:
      'Henry Mountains, Wayne County, Utah',

    position: [
      38.072528,
      -110.794817,
    ],

    frequencies: [
      147.08,
    ],

    matchText: [
      'mt. ellen',
      'henry mts',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Coordinate normalized to the SDARC operator-published Mount Ellen / Henry Mountains site.',

    repeaterMetadata: [
      {
        frequency: 147.08,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'emery-cedar-mountain-main',

    name: 'Cedar Mountain — Main Site',

    location:
      'Cedar Mountain, Emery County, Utah',

    position: [
      39.1712,
      -110.620206,
    ],

    frequencies: [
      147.12,
      147.14,
      447.125,
    ],

    matchText: [
      'cedar mtn',
      'cedar mountain',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The Intertie, Sinbad, and Cactus records are normalized to the operator-published Cedar Mountain main site.',

    repeaterMetadata: [
      {
        frequency: 147.12,
        operationalStatus: 'active',
      },
      {
        frequency: 147.14,
        operationalStatus: 'active',
      },
      {
        frequency: 447.125,
        operationalStatus: 'off-air',
      },
    ],

  },

  {
    id: 'emery-cedar-mountain-secondary',

    name: 'Cedar Mountain — Secondary Site',

    location:
      'Cedar Mountain, Emery County, Utah',

    position: [
      39.1772,
      -110.6069,
    ],

    frequencies: [
      448.075,
      448.55,
    ],

    matchText: [
      'cedar mtn',
    ],

    coordinateConfidence: 'medium',

    lastVerified: '2026-10-28',

    verificationNote:
      'These two UHF records share a second Cedar Mountain coordinate; exact relationship to the main SDARC/Intertie facility remains unverified.',

    repeaterMetadata: [
      {
        frequency: 448.075,
        operationalStatus: 'active',
      },
      {
        frequency: 448.55,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'duchesne-flat-top-myton',

    name: 'Flat Top — Myton',

    location:
      'Myton, Duchesne County, Utah',

    position: [
      40.222167,
      -110.104306,
    ],

    frequencies: [
      145.49,
    ],

    matchText: [
      'flat top',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'Coordinate normalized to the operator-published Flat Top / Myton site.',

    repeaterMetadata: [
      {
        frequency: 145.49,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'daggett-grizzly-ridge',

    name: 'Grizzly Ridge',

    location:
      'Daggett County, Utah',

    position: [
      40.739167,
      -109.483889,
    ],

    frequencies: [
      147.04,
    ],

    matchText: [
      'grizzley ridge',
      'grizzly ridge',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The source coordinate is corrected to the operator-published Grizzly Ridge site.',

    repeaterMetadata: [
      {
        frequency: 147.04,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'garfield-bryce-the-pinks-duplicate',

    name: 'Bryce Canyon — Duplicate Source Record',

    frequencies: [
      145.35,
    ],

    matchText: [
      'the pinks bryce canyon',
    ],

    hideFromMap: true,

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'Suppresses the exact duplicate W6DZL 145.350 MHz source record. The companion Bryce Canyon record remains the displayed repeater.',

    repeaterMetadata: [
      {
        frequency: 145.35,
        operationalStatus: 'uncertain',
      },
    ],

  },

  {
    id: 'garfield-bryce-canyon-status',

    name: 'Bryce Canyon — The Pinks',

    location:
      'Bryce Canyon, Garfield County, Utah',

    position: [
      37.4206,
      -112.3231,
    ],

    frequencies: [
      145.35,
    ],

    matchText: [
      'bryce canyon',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'UVHFS continues to list the repeater open, while community reporting contains an off-air report; status remains uncertain.',

    repeaterMetadata: [
      {
        frequency: 145.35,
        operationalStatus: 'uncertain',
      },
    ],

  },

  {
    id: 'beaver-frisco-peak',

    name: 'Frisco Peak',

    location:
      'Frisco Peak, Beaver County, Utah',

    position: [
      38.5203,
      -113.2872,
    ],

    frequencies: [
      146.94,
      448.675,
    ],

    matchText: [
      'frisco peak',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF Intertie and UHF systems share the Frisco Peak site.',

    repeaterMetadata: [
      {
        frequency: 146.94,
        operationalStatus: 'active',
      },
      {
        frequency: 448.675,
        operationalStatus: 'off-air',
      },
    ],

  },

  {
    id: 'iron-blowhard-mountain',

    name: 'Blowhard Mountain',

    location:
      'Blowhard Mountain, Iron County, Utah',

    position: [
      37.5917,
      -112.8658,
    ],

    frequencies: [
      146.8,
      448.65,
    ],

    matchText: [
      'blowhard',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 146.800 MHz and 448.650 MHz records share the Blowhard Mountain site.',

    repeaterMetadata: [
      {
        frequency: 146.8,
        operationalStatus: 'active',
      },
      {
        frequency: 448.65,
        operationalStatus: 'restricted',
        statusNote: 'Coordinator data marks the UHF system closed; current community data describes it as private.',
      },
    ],

  },

  {
    id: 'iron-iron-mountain-main',

    name: 'Iron Mountain — Main Site',

    location:
      'Iron Mountain, Iron County, Utah',

    position: [
      37.6447,
      -113.3737,
    ],

    frequencies: [
      146.76,
      146.98,
      448.4,
      448.8,
    ],

    matchText: [
      'iron mtn',
      'iron mountain',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The four principal Iron Mountain systems cluster within approximately 150 meters and share the same high-site elevation.',

    repeaterMetadata: [
      {
        frequency: 146.76,
        operationalStatus: 'active',
      },
      {
        frequency: 146.98,
        operationalStatus: 'active',
      },
      {
        frequency: 448.4,
        operationalStatus: 'active',
      },
      {
        frequency: 448.8,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'washington-utah-hill-main',

    name: 'Utah Hill — Main Site',

    location:
      'Utah Hill, Washington County, Utah',

    position: [
      37.1553,
      -113.8834,
    ],

    frequencies: [
      145.49,
      146.82,
      147.28,
      224.9,
      447.675,
      448.15,
    ],

    matchText: [
      'utah hill',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The Utah Hill systems are normalized to the current site cluster around 37.1553, -113.8834.',

    repeaterMetadata: [
      {
        frequency: 145.49,
        operationalStatus: 'active',
      },
      {
        frequency: 146.82,
        operationalStatus: 'active',
      },
      {
        frequency: 147.28,
        operationalStatus: 'active',
      },
      {
        frequency: 224.9,
        operationalStatus: 'active',
      },
      {
        frequency: 447.675,
        operationalStatus: 'restricted',
      },
      {
        frequency: 448.15,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'washington-seegmiller-peak',

    name: 'Seegmiller Peak',

    location:
      'Seegmiller Peak, Washington County, Utah',

    position: [
      36.84667,
      -113.492,
    ],

    frequencies: [
      146.91,
      449.325,
    ],

    matchText: [
      'seegmiller',
    ],

    coordinateConfidence: 'verified',

    lastVerified: '2026-10-28',

    verificationNote:
      'The 449.325 MHz source coordinate is stale; both Seegmiller repeaters are normalized to the verified 146.910 MHz / APRS site coordinate.',

    repeaterMetadata: [
      {
        frequency: 146.91,
        operationalStatus: 'active',
      },
      {
        frequency: 449.325,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'washington-hurricane-mesa-dstar',

    name: 'Hurricane Mesa — D-STAR Site',

    location:
      'Hurricane Mesa, Washington County, Utah',

    position: [
      37.2239,
      -113.22,
    ],

    frequencies: [
      145.15,
      447.95,
      1299.25,
    ],

    matchText: [
      'hurricane mesa',
    ],

    coordinateConfidence: 'high',

    lastVerified: '2026-10-28',

    verificationNote:
      'The VHF, UHF, and 23 cm D-STAR records share exactly the same Hurricane Mesa coordinate.',

    repeaterMetadata: [
      {
        frequency: 145.15,
        operationalStatus: 'uncertain',
      },
      {
        frequency: 447.95,
        operationalStatus: 'uncertain',
      },
      {
        frequency: 1299.25,
        operationalStatus: 'uncertain',
      },
    ],

  },

  {
    id: 'salt-lake-riverton-446425-unresolved',

    name: 'Riverton 446.425 — Coordinate Unresolved',

    frequencies: [
      446.425,
    ],

    matchText: [
      'riverton qth',
      'kk7gkg',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The repeater has no source coordinate and has not been independently tied to the verified KK7GKG Riverton multi-repeater site.',

    repeaterMetadata: [
      {
        frequency: 446.425,
        operationalStatus: 'uncertain',
      },
    ],

  },

  {
    id: 'salt-lake-south-jordan-224660-unresolved',

    name: 'South Jordan 224.660 — Coordinate Unresolved',

    frequencies: [
      224.66,
    ],

    matchText: [
      'south jordan',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The repeater is active but the current source record has no defensible transmitter coordinate.',

    repeaterMetadata: [
      {
        frequency: 224.66,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'washington-ivins-224740-unresolved',

    name: 'Ivins 224.740 — Coordinate Unresolved',

    frequencies: [
      224.74,
    ],

    matchText: [
      'ivins',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current sources identify the Ivins system, but no sufficiently reliable transmitter coordinate is available.',

    repeaterMetadata: [
      {
        frequency: 224.74,
        operationalStatus: 'active',
      },
    ],

  },

  {
    id: 'washington-ivins-446775-unresolved',

    name: 'Ivins 446.775 — Coordinate Unresolved',

    frequencies: [
      446.775,
    ],

    matchText: [
      'ivins',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The linked Ivins UHF system is current, but no sufficiently reliable transmitter coordinate is available.',

    repeaterMetadata: [
      {
        frequency: 446.775,
        operationalStatus: 'active',
      },
    ],

  },

  /*
   * =======================================================
   * UNRESOLVED / SUPPRESSED RECORDS
   * =======================================================
   *
   * These records remain part of the repeater dataset but
   * should NOT be plotted using their current source
   * coordinates.
   */

  {
    id: 'salt-lake-224080-unresolved',

    name: 'Salt Lake 224.080 — Site Unresolved',

    frequencies: [
      224.08,
    ],

    matchText: [
      'ensign peak',
      'north point',
      'ka7egc',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current club references alternately describe this repeater as North Point / Ensign Peak and Ensign Peak, while the stored coordinate is far west of the Ensign ridge. Do not plot until the transmitter site is resolved.',

    repeaterMetadata: [
      {
        frequency: 224.08,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'salt-lake-1265-nelson-farnsworth-unresolved',

    name: '1265 MHz WA7GIE — Site Unresolved',

    frequencies: [
      1265,
    ],

    matchText: [
      'nelson peak',
      'wa7gie',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The record is labeled Nelson Peak, but its stored coordinate and 9000-foot elevation place it in the Farnsworth Peak communications complex. Do not plot until the site identity is resolved.',

    repeaterMetadata: [
      {
        frequency: 1265,
        operationalStatus: 'uncertain',
      },
    ],
  },

  {
    id: 'salt-lake-448625-flat-top-unresolved',

    name: 'Flat Top 448.625 — Closed / Site Unresolved',

    frequencies: [
      448.625,
    ],

    matchText: [
      'flat top',
      'wa7gie',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current coordinator data marks this repeater closed. Its stored coordinate is also inconsistent with the listed 10000-foot site elevation, so it should not be plotted.',

    repeaterMetadata: [
      {
        frequency: 448.625,
        operationalStatus: 'off-air',
      },
    ],
  },

  {
    id: 'salt-lake-448850-oquirrhs-unresolved',

    name: 'Oquirrhs 448.850 — Closed / Site Unresolved',

    frequencies: [
      448.85,
    ],

    matchText: [
      'oquirrhs',
      'kessler',
      'kd7pb',
      'w7ydo',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current records disagree on the site identity while Utah coordinator data marks the repeater closed. Do not plot until the physical site is resolved.',

    repeaterMetadata: [
      {
        frequency: 448.85,
        operationalStatus: 'off-air',
      },
    ],
  },

  {
    id: 'utah-county-447125-unresolved',

    name: 'Utah County 447.125',

    frequencies: [
      447.125,
    ],

    matchText: [
      'utah valley',
      'mountain view',
      'payson',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current sources disagree between Utah County Sheriff’s Office, Mountain View Hospital, and Utah Valley Hospital. Do not plot until the transmitter site is resolved.',

    repeaterMetadata: [
      {
        frequency: 447.125,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'springville-447325-unresolved',

    name: 'Springville 447.325',

    frequencies: [
      447.325,
    ],

    matchText: [
      'springville',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The current source coordinate conflicts with an older, geographically more plausible Springville coordinate.',

    repeaterMetadata: [
      {
        frequency: 447.325,
        operationalStatus: 'uncertain',
      },
    ],
  },

  {
    id: 'point-of-mountain-446775-unresolved',

    name: 'Point of the Mountain 446.775',

    frequencies: [
      446.775,
    ],

    matchText: [
      'pt of mtn',
      'point of the mountain',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Repeater appears active in northern Utah, but the currently stored coordinate does not reliably identify the Point of the Mountain transmitter site.',

    repeaterMetadata: [
      {
        frequency: 446.775,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'point-of-mountain-447600-unresolved',

    name: 'Point of the Mountain 447.600',

    frequencies: [
      447.6,
    ],

    matchText: [
      'pt of mtn',
      'point of the mountain',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Historical notes indicate the repeater was temporarily moved after a site fire. The current permanent transmitter coordinate has not been established.',

    repeaterMetadata: [
      {
        frequency: 447.6,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'lake-mountain-447425-unresolved',

    name: 'Lake Mountain 447.425',

    frequencies: [
      447.425,
    ],

    matchText: [
      'saratoga springs',
      'ke7nhu',
      'lake mountain',
      'lake mtn',
      'ng6k',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current information places this multi-mode NG6K repeater on Lake Mountain, but the older coordinator record still points to Saratoga Springs. Exact Lake Mountain sub-site is unresolved.',

    repeaterMetadata: [
      {
        frequency: 447.425,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'west-mountain-449800-unresolved',

    name: 'West Mountain 449.800',

    frequencies: [
      449.8,
    ],

    matchText: [
      'woodland hills',
      'west mountain',
      'west mtn',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Current information places the DMR repeater on West Mountain, while older coordinator data places it in Woodland Hills. Exact West Mountain sub-site is not yet established.',

    repeaterMetadata: [
      {
        frequency: 449.8,
        operationalStatus: 'active',
        mode: 'DMR',
      },
    ],
  },

  {
    id: 'lake-mountain-449850-unresolved',

    name: 'Lake Mountain 449.850',

    frequencies: [
      449.85,
    ],

    matchText: [
      'uvrmc',
      'utah valley',
      'ut. valley',
      'lake mountain',
      'lake mtn',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The repeater appears to have moved from the Utah Valley hospital complex to Lake Mountain in 2026. Exact current Lake Mountain sub-site remains unresolved.',

    repeaterMetadata: [
      {
        frequency: 449.85,
        operationalStatus: 'active',
      },
    ],
  },

  {
    id: 'provo-city-reversed-manual-duplicate',

    name: 'Provo City Repeater — Reversed Manual Duplicate',

    frequencies: [
      443.575,
    ],

    matchText: [
      'provo city repeater',
      'provo city hall',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'Suppresses the older manually maintained record that lists 443.575 MHz as the repeater output. KM7GCR is correctly configured for 448.575 MHz downlink / 443.575 MHz uplink with a -5.000 MHz offset and 123.0 Hz uplink tone.',

    repeaterMetadata: [
      {
        frequency: 443.575,
        operationalStatus: 'off-air',
        statusNote:
          'Duplicate/reversed data record; do not use as the Provo City repeater output.',
      },
    ],
  },

  {
    id: 'orem-intertie-449575',

    name: 'Orem Intertie',

    frequencies: [
      449.575,
    ],

    matchText: [
      'orem',
    ],

    hideFromMap: true,

    coordinateConfidence: 'unresolved',

    lastVerified: '2026-10-28',

    verificationNote:
      'The repeater is active on the Intermountain Intertie, but coordinator records identify the equipment as portable. It remains available through the separate Intertie map layer.',

    repeaterMetadata: [
      {
        frequency: 449.575,
        operationalStatus: 'portable',
      },
    ],
  },
];

export default repeaterSiteOverrides;