const provoRepeaterCoverage = {
  type: 'FeatureCollection',

  metadata: {
    name: 'Provo City Repeater Line-of-Sight',
    site: 'Provo City Hall',

    transmitter: {
      latitude: 40.232838,
      longitude: -111.667014,

      antennaHeightFeetAGL: 50,
      antennaHeightMetersAGL: 15.24,

      transmitPowerWatts: 20,

      outputFrequencyMHz: 443.575,
      inputFrequencyMHz: 448.575,
      ctcssHz: 123.0,
    },

    model: 'Terrain-based line-of-sight',

    description:
      'Estimated terrain line-of-sight from the Provo City repeater at Provo City Hall. This layer does not guarantee usable RF coverage.',

    notes: [
      'Terrain elevation must be included in the LOS calculation.',
      'Antenna height is approximately 50 feet above ground level.',
      'Transmit power is 20 watts but is not used in the geometric LOS calculation.',
    ],
  },

  features: [],
};

export default provoRepeaterCoverage;