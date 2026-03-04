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
        'operations/frequency-allocation',
        'operations/staffing-assignments-reporting',
      ],
    },

    {
      type: 'doc',
      id: 'training',
      label: 'Training',
    },

    {
      type: 'doc',
      id: 'resources',
      label: 'Resources',
    },

    {
      type: 'doc',
      id: 'join-pact',
      label: 'Join PACT',
    },
  ],
};

export default sidebars;