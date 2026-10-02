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
      collapsed: false,
      items: [
        'operations/activation',
        'operations/staffing-assignments-reporting',
        'operations/frequency-allocation',
      ],
    },

    {
      type: 'category',
      label: 'Training',
      collapsed: false,
      items: [
        'training/weekly-training-net',
        'training/meetings',
        'training/certification',
        'training/training-exercises',
        'training/events',
      ],
    },

    {
      type: 'category',
      label: 'Resources',
      collapsed: false,
      items: [
        'resources/apparel',
        'resources/codes',
        'resources/emergency-notification-systems',
        'resources/equipment',
        'resources/forms',
        'resources/getting-your-license',
        'resources/helpful-links',
        'resources/incident-coordination',
        'resources/lds-resources',
        'resources/leadership-team',
        'resources/local-groups',
        'resources/local-nets-repeaters-frequencies',
        'resources/preparation-for-disasters',
        'resources/radio-basics',
        'resources/radio-services-band-plans',
        'resources/radio-troubleshooting',
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