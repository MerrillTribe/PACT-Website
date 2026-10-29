export const linkedRepeaterSystems = {
  /*
   * =========================================================
   * INTERMOUNTAIN INTERTIE
   * =========================================================
   */

intertie: {
  id: 'intertie',
  name: 'Intermountain Intertie',
  color: '#5b4b8a',

  sites: [
    /*
     * =========================================================
     * UTAH
     * =========================================================
     */

    {
      id: 'hidden-peak',
      name: 'Hidden Peak',
      frequency: '147.180 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [40.561131, -111.645217],
      location: 'Snowbird / Hidden Peak, Utah',
      notes:
        'Primary northern Utah hub of the Intermountain Intertie.',
    },

    {
      id: 'farnsworth-peak',
      name: 'Farnsworth Peak',
      frequency: '147.120 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [40.658975, -112.202953],
      location: 'Farnsworth Peak, Utah',
    },

    {
      id: 'ensign-peak',
      name: 'Ensign Peak',
      frequency: '145.210 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [40.794425, -111.890653],
      location: 'Salt Lake City, Utah',
    },

    {
      id: 'orem',
      name: 'Orem',
      frequency: '449.575 MHz',
      offset: '-5.000 MHz',
      tone: '100.0 Hz',
      position: [40.306667, -111.675556],
      location: 'Orem, Utah',
    },

    {
      id: 'morgan',
      name: 'Morgan',
      frequency: '145.350 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [41.068611, -111.659444],
      location: 'Morgan, Utah',
    },

    {
      id: 'promontory',
      name: 'Promontory Point',
      frequency: '145.490 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [41.262658, -112.447817],
      location: 'Promontory Point, Utah',
    },

    {
      id: 'bear-lake',
      name: 'Bear Lake',
      frequency: '147.020 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [41.882236, -111.270114],
      location: 'Bear Lake, Utah',
    },

    {
      id: 'mt-pisgah',
      name: 'Mt. Pisgah',
      frequency: '449.650 MHz',
      offset: '-5.000 MHz',
      tone: '100.0 Hz',
      position: [41.550833, -111.936667],
      location: 'Mt. Pisgah, Utah',
    },

    {
      id: 'scotts-hill',
      name: "Scott's Hill",
      frequency: '145.270 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [40.629283, -111.569056],
      location: "Scott's Hill / Brighton, Utah",
    },

    {
      id: 'levan-peak',
      name: 'Levan Peak',
      frequency: '145.270 MHz',
      offset: '-0.600 MHz',
      tone: '103.5 Hz',
      position: [39.492056, -111.827708],
      location: 'Levan Peak, Utah',
    },

    {
      id: 'frisco-peak',
      name: 'Frisco Peak',
      frequency: '146.940 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [38.520372, -113.287469],
      location: 'Frisco Peak / Milford, Utah',
    },

    {
      id: 'monroe-peak',
      name: 'Monroe Peak',
      frequency: '146.840 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [38.541667, -112.073056],
      location: 'Monroe Peak, Utah',
    },

    {
      id: 'blowhard',
      name: 'Blowhard Peak',
      frequency: '146.800 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [37.591756, -112.866061],
      location: 'Blowhard Peak / Cedar Breaks, Utah',
    },

    {
      id: 'utah-hill',
      name: 'Utah Hill',
      frequency: '146.820 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [37.154892, -113.883172],
      location: 'Utah Hill / St. George, Utah',
    },

    {
      id: 'tods-junction',
      name: "Tod's Junction",
      frequency: '147.200 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [37.514444, -112.408056],
      location: "Tod's Junction / Hatch, Utah",
    },

    {
      id: 'cedar-mountain-intertie',
      name: 'Cedar Mountain',
      frequency: '147.120 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [39.171692, -110.619614],
      location: 'Cedar Mountain / Castle Dale, Utah',
    },

    /*
     * =========================================================
     * WYOMING
     * =========================================================
     */

    {
      id: 'medicine-butte',
      name: 'Medicine Butte',
      frequency: '146.860 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [41.347525, -110.901442],
      location: 'Medicine Butte / Evanston, Wyoming',
      notes:
        'Intertie site serving southwestern Wyoming and the I-80 corridor.',
    },

    /*
     * =========================================================
     * IDAHO
     * =========================================================
     */

    {
      id: 'malad',
      name: 'Malad',
      frequency: '447.225 MHz',
      offset: '-5.000 MHz',
      tone: '100.0 Hz',
      position: [42.184889, -112.454361],
      location: 'Malad Radio Site, Idaho',
      notes:
        'Relay point between the Hidden Peak hub in Utah and the Jumpoff hub in Idaho.',
    },

    {
      id: 'sedgwick-peak',
      name: 'Sedgwick Peak',
      frequency: '145.210 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [42.515875, -111.923561],
      location: 'Sedgwick Peak / Lava Hot Springs, Idaho',
    },

    {
      id: 'mt-harrison',
      name: 'Mt. Harrison',
      frequency: '145.270 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [42.309417, -113.659053],
      location: 'Mt. Harrison / Burley, Idaho',
      notes:
        'Connected to the Idaho Intertie hub through Jumpoff.',
    },

    {
      id: 'jumpoff',
      name: 'Jumpoff Peak',
      frequency: '146.850 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [43.756272, -113.100339],
      location: 'Jumpoff Peak / Arco, Idaho',
      notes:
        'Primary Idaho hub of the Intermountain Intertie.',
    },

    {
      id: 'sawtelle-peak',
      name: 'Sawtelle Peak',
      frequency: '145.230 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [44.56245, -111.444644],
      location: 'Sawtelle Peak / West Yellowstone, Idaho',
    },

    {
      id: 'mountain-home',
      name: 'Mountain Home',
      frequency: '145.150 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [43.154939, -115.681858],
      location: 'Mountain Home, Idaho',
      notes:
        'Relay site between Mt. Harrison and Shafer Butte.',
    },

    {
      id: 'shafer-butte',
      name: 'Shafer Butte',
      frequency: '145.130 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [43.755008, -116.098658],
      location: 'Shafer Butte / Boise, Idaho',
    },

    {
      id: 'snowbank',
      name: 'Snowbank',
      frequency: '146.660 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [44.441919, -116.137821],
      location: 'Snowbank / Cascade, Idaho',
    },

    /*
     * =========================================================
     * OREGON
     * =========================================================
     */

    {
      id: 'malheur-butte',
      name: 'Malheur Butte',
      frequency: '147.100 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [44.013378, -117.086339],
      location: 'Malheur Butte / Ontario, Oregon',
    },

    /*
     * =========================================================
     * MONTANA
     * =========================================================
     */

    {
      id: 'three-forks',
      name: 'Three Forks',
      frequency: '147.380 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [45.851731, -111.815442],
      location: 'Three Forks / Bozeman area, Montana',
      notes:
        'Full-time Intermountain Intertie connection added in May 2026.',
    },

    /*
     * =========================================================
     * NEVADA
     * =========================================================
     */

    {
      id: 'mt-potosi',
      name: 'Mt. Potosi',
      frequency: '146.880 MHz',
      offset: '-0.600 MHz',
      tone: '100.0 Hz',
      position: [35.965186, -115.500911],
      location: 'Mt. Potosi / Las Vegas, Nevada',
      notes:
        'Provides Intertie coverage into the Las Vegas area.',
    },

    /*
     * =========================================================
     * ARIZONA
     * =========================================================
     */

    {
      id: 'navajo-mountain',
      name: 'Navajo Mountain',
      frequency: '448.600 MHz',
      offset: '-5.000 MHz',
      tone: '100.0 Hz',
      position: [37.034381, -110.869928],
      location: 'Navajo Mountain / Page area, Arizona',
      notes:
        'Important Intertie gateway between southern Utah and the Arizona linked system.',
    },

    {
      id: 'jacob-lake',
      name: 'Jacob Lake',
      frequency: '147.300 MHz',
      offset: '+0.600 MHz',
      tone: '100.0 Hz',
      position: [36.737778, -112.212778],
      location: 'Jacob Lake / Fredonia, Arizona',
    },

    {
      id: 'mt-elden',
      name: 'Mt. Elden',
      frequency: '448.875 MHz',
      offset: '-5.000 MHz',
      tone: '100.0 Hz',
      position: [35.241519, -111.609483],
      location: 'Mt. Elden / Flagstaff, Arizona',
      notes:
        'Arizona Repeater Association gateway into the larger Arizona linked system.',
    },

    {
      id: 'towers-mountain',
      name: 'Towers Mountain',
      frequency: '449.175 MHz',
      offset: '-5.000 MHz',
      tone: '100.0 Hz',
      position: [34.234167, -112.3675],
      location: 'Towers Mountain / Prescott, Arizona',
    },

    {
      id: 'white-tanks',
      name: 'White Tanks',
      frequency: '442.275 MHz',
      offset: '+5.000 MHz',
      tone: '100.0 Hz',
      position: [33.575564, -112.578544],
      location: 'White Tank Mountains / Phoenix, Arizona',
    },

    {
      id: 'scottsdale-airpark',
      name: 'Scottsdale Airpark',
      frequency: '441.625 MHz',
      offset: '+5.000 MHz',
      tone: '100.0 Hz',
      position: [33.56, -111.918333],
      location: 'Scottsdale Airpark, Arizona',
    },
  ],

  /*
   * =========================================================
   * INTERMOUNTAIN INTERTIE LINKS
   * =========================================================
   */

  links: [
    /*
     * NORTHERN UTAH HUB
     */

    {
      from: 'hidden-peak',
      to: 'farnsworth-peak',
      type: 'uhf-rf',
    },

    {
      from: 'hidden-peak',
      to: 'ensign-peak',
      type: 'uhf-rf',
    },

    {
      from: 'hidden-peak',
      to: 'orem',
      type: 'uhf-rf',
    },

    {
      from: 'hidden-peak',
      to: 'morgan',
      type: 'uhf-rf',
    },

    {
      from: 'hidden-peak',
      to: 'medicine-butte',
      type: 'uhf-rf',
    },

    {
      from: 'hidden-peak',
      to: 'bear-lake',
      type: 'uhf-rf',
    },

    {
      from: 'hidden-peak',
      to: 'scotts-hill',
      type: 'uhf-rf',
    },

    /*
     * NORTHERN / IDAHO PATH
     *
     * UVHFS documents Malad as the relay between
     * Hidden Peak and the Jumpoff Idaho hub.
     */

    {
      from: 'hidden-peak',
      to: 'malad',
      type: 'uhf-rf',
    },

    {
      from: 'malad',
      to: 'jumpoff',
      type: 'uhf-rf',
    },

    {
      from: 'jumpoff',
      to: 'mt-harrison',
      type: 'uhf-rf',
    },

    {
      from: 'jumpoff',
      to: 'sawtelle-peak',
      type: 'uhf-rf',
    },

    {
      from: 'mt-harrison',
      to: 'mountain-home',
      type: 'uhf-rf',
    },

    {
      from: 'mountain-home',
      to: 'shafer-butte',
      type: 'uhf-rf',
    },

    /*
     * These western/northern sites are members of the
     * normally linked system, but the specific hop shown
     * here should be treated as cartographic topology rather
     * than a published link-frequency plan.
     */

    {
      from: 'shafer-butte',
      to: 'snowbank',
      type: 'uhf-rf',
    },

    {
      from: 'shafer-butte',
      to: 'malheur-butte',
      type: 'uhf-rf',
    },

    {
      from: 'sawtelle-peak',
      to: 'three-forks',
      type: 'uhf-rf',
    },

    /*
     * UTAH SOUTHBOUND PATH
     */

    {
      from: 'farnsworth-peak',
      to: 'promontory',
      type: 'uhf-rf',
    },

    {
      from: 'farnsworth-peak',
      to: 'levan-peak',
      type: 'uhf-rf',
    },

    {
      from: 'levan-peak',
      to: 'frisco-peak',
      type: 'uhf-rf',
    },

    {
      from: 'frisco-peak',
      to: 'blowhard',
      type: 'uhf-rf',
    },

    {
      from: 'blowhard',
      to: 'utah-hill',
      type: 'uhf-rf',
    },

    {
      from: 'blowhard',
      to: 'tods-junction',
      type: 'uhf-rf',
    },

    {
      from: 'tods-junction',
      to: 'navajo-mountain',
      type: 'uhf-rf',
    },

    /*
     * CENTRAL / SOUTHEAST UTAH
     */

    {
      from: 'frisco-peak',
      to: 'monroe-peak',
      type: 'uhf-rf',
    },

    {
      from: 'monroe-peak',
      to: 'cedar-mountain-intertie',
      type: 'uhf-rf',
    },

    /*
     * CACHE / BEAR LAKE
     */

    {
      from: 'bear-lake',
      to: 'mt-pisgah',
      type: 'uhf-rf',
    },

    /*
     * NEVADA
     */

    {
      from: 'utah-hill',
      to: 'mt-potosi',
      type: 'uhf-rf',
    },

    /*
     * ARIZONA
     *
     * UVHFS states that Mt. Elden is normally linked to
     * the Intertie through Navajo Mountain.
     */

    {
      from: 'navajo-mountain',
      to: 'jacob-lake',
      type: 'uhf-rf',
    },

    {
      from: 'navajo-mountain',
      to: 'mt-elden',
      type: 'uhf-rf',
    },

    {
      from: 'mt-elden',
      to: 'towers-mountain',
      type: 'uhf-rf',
    },

    {
      from: 'towers-mountain',
      to: 'white-tanks',
      type: 'uhf-rf',
    },

    {
      from: 'towers-mountain',
      to: 'scottsdale-airpark',
      type: 'uhf-rf',
    },
  ],
},

  /*
   * =========================================================
   * SINBAD REPEATER SYSTEM
   * =========================================================
   */

  sinbad: {
    id: 'sinbad',
    name: 'Sinbad Repeater System',
    color: '#3f7d44',

    sites: [
      {
        id: 'sinbad-lake-mountain',
        name: 'Lake Mountain',
        frequency: '147.080 MHz',
        offset: '+0.600 MHz',
        tone: '77.0 Hz',
        position: [40.282444, -111.936944],
        location: 'Lake Mountain',
        notes:
          'Sinbad system site covering much of the Wasatch Front. Linked toward Boarding House Ridge using 220 MHz RF, with VoIP backup.',
      },

      {
        id: 'sinbad-boarding-house',
        name: 'Boarding House Ridge',
        frequency: '147.080 MHz',
        offset: '+0.600 MHz',
        tone: '88.5 Hz',
        position: [39.656828, -111.198706],
        location: 'Boarding House Ridge',
        notes:
          'VHF repeater with UHF and VoIP links toward Bruin Point and a 220 MHz RF path toward Lake Mountain.',
      },

      {
        id: 'sinbad-ford-ridge',
        name: 'Ford Ridge',
        frequency: '145.310 MHz',
        offset: '-0.600 MHz',
        tone: '88.5 Hz',
        position: [39.756811, -110.990578],
        location: 'Ford Ridge',
        notes:
          'Full-time Sinbad system repeater linked toward Bruin Point.',
      },

      {
        id: 'sinbad-star-point',
        name: 'Star Point',
        frequency: '147.200 MHz',
        offset: '+0.600 MHz',
        tone: '88.5 Hz',
        position: [39.529944, -111.051536],
        location: 'Star Point',
        notes:
          'Sinbad system repeater linked using UHF and VoIP.',
      },

      {
        id: 'sinbad-bruin-peak',
        name: 'Bruin Point',
        frequency: '147.320 MHz',
        offset: '+0.600 MHz',
        tone: '88.5 Hz',
        position: [39.644722, -110.34775],
        location: 'Bruin Point',
        notes:
          'Primary hub for most of the Sinbad linked repeater system.',
      },

      {
        id: 'sinbad-flat-top',
        name: 'Flat Top',
        frequency: '145.490 MHz',
        offset: '-0.600 MHz',
        tone: '136.5 Hz',
        position: [40.222167, -110.104306],
        location: 'Duchesne County',
        notes:
          'Full-time Sinbad system site with UHF and VoIP links toward Bruin Point.',
      },

      {
        id: 'sinbad-grizzly-ridge',
        name: 'Grizzly Ridge',
        frequency: '147.040 MHz',
        offset: '+0.600 MHz',
        tone: '136.5 Hz',
        position: [40.739167, -109.483889],
        location: 'Grizzly Ridge',
        notes:
          'Sinbad system repeater linked toward Bruin Point.',
      },

      {
        id: 'sinbad-horn-mountain',
        name: 'Horn Mountain',
        frequency: '147.060 MHz',
        offset: '+0.600 MHz',
        tone: '88.5 Hz',
        position: [39.209619, -111.142047],
        location: 'Horn Mountain',
        notes:
          'Linked toward Bruin Point. Horn Mountain also serves an important VoIP linking role within the system.',
      },

      {
        id: 'sinbad-cedar-mountain',
        name: 'Cedar Mountain',
        frequency: '147.140 MHz',
        offset: '+0.600 MHz',
        tone: '88.5 Hz',
        position: [39.1712, -110.620206],
        location: 'Cedar Mountain',
        notes:
          'Sinbad system repeater with a UHF link toward Bruin Point. The site also hosts an Intermountain Intertie repeater.',
      },

      {
        id: 'sinbad-henry-mountain',
        name: 'Henry Mountain',
        frequency: '147.080 MHz',
        offset: '+0.600 MHz',
        tone: '136.5 Hz',
        position: [38.072528, -110.794817],
        location: 'Mt. Ellen / Henry Mountains',
        notes:
          'Remote solar-powered Sinbad system repeater site.',
      },

      {
        id: 'sinbad-bald-mesa',
        name: 'Bald Mesa',
        frequency: '146.760 MHz',
        offset: '-0.600 MHz',
        tone: '88.5 Hz',
        position: [38.528611, -109.324722],
        location: 'Bald Mesa',
        notes:
          'Full-time Sinbad system repeater linked by VoIP.',
      },

      {
        id: 'sinbad-abajo-peak',
        name: 'Abajo Peak',
        frequency: '146.610 MHz',
        offset: '-0.600 MHz',
        tone: '88.5 Hz',
        position: [37.839167, -109.461667],
        location: 'Abajo Peak',
        notes:
          'Sinbad system site with a long UHF link toward Bruin Point and a VoIP link.',
      },

      {
        id: 'sinbad-moab',
        name: 'Moab Downtown',
        frequency: '146.900 MHz',
        offset: '-0.600 MHz',
        tone: '88.5 Hz',
        position: null,
        location: 'Moab, Utah',
        notes:
          'Full-time Sinbad system repeater serving Moab.',
      },
    ],

    /*
     * ---------------------------------------------------------
     * SINBAD SYSTEM LINKS
     * ---------------------------------------------------------
     */

    links: [
      {
        from: 'sinbad-lake-mountain',
        to: 'sinbad-boarding-house',
        type: '220-rf',
      },

      {
        from: 'sinbad-boarding-house',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-ford-ridge',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-star-point',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-flat-top',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-grizzly-ridge',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-horn-mountain',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-cedar-mountain',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-henry-mountain',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-abajo-peak',
        to: 'sinbad-bruin-peak',
        type: 'uhf-rf',
      },

      {
        from: 'sinbad-bald-mesa',
        to: 'sinbad-abajo-peak',
        type: 'voip',
      },

      {
        from: 'sinbad-moab',
        to: 'sinbad-abajo-peak',
        type: 'voip',
      },
    ],
  },
};