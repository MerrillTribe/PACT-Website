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
        'resources/getting-your-license',
        'resources/radio-basics',
        'resources/radio-services-band-plans',
        'resources/codes',
        'resources/local-nets-repeaters-frequencies',
        'resources/emergency-notification-systems',
        'resources/equipment',
        'resources/radio-troubleshooting',
        'resources/forms',
        'resources/local-groups',
        'resources/lds-resources',
        'resources/preparation-for-disasters',
        'resources/helpful-links',
        'resources/apparel',
        'resources/leadership-team',
      ],
    },

    {
      type: 'link',
      label: 'Announcements',
      href: '/announcements/',
    },

    {
      type: 'doc',
      id: 'get-involved',
      label: 'Get Involved',
    },
  ],
};

export default sidebars;