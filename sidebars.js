// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'About PACT',
    },

    {
      type: 'category',
      label: 'Operations',
      items: [
        'operations/activation',
        'operations/staffing-assignments-reporting',
        'operations/frequency-allocation',
      ],
    },

    {
      type: 'category',
      label: 'Training',
      items: [
        'training/weekly-training-net',
        'training/meetings',
        'training/certification',
        'training/training-exercises',
      ],
    },

    {
      type: 'category',
      label: 'Resources',
      items: [
        'resources/radio-basics',
        'resources/band-plans-frequency-allocations',
        'resources/codes',
        'resources/local-frequencies-repeaters-nets',
        'resources/emergency-notification-systems',
        'resources/equipment',
        'resources/radio-troubleshooting',
        'resources/forms',
        'resources/local-groups',
        'resources/lds-resources',
        'resources/likelihood-of-disasters',
        'resources/clothing',
        'resources/leadership-team',

      ],
    },

    {
      type: 'doc',
      id: 'get-involved',
      label: 'Get Involved',
    },
  ],
};

export default sidebars;