// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Provo Auxiliary Communications Team',
  tagline: 'PACT',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  // GitHub Pages (project site) config for repo: MerrillTribe/PACT-Website
  url: 'https://merrilltribe.github.io',
  baseUrl: '/PACT-Website/',

  organizationName: 'MerrillTribe',
  projectName: 'PACT-Website',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/MerrillTribe/PACT-Website/tree/main/',
        },

        // If you don't want a blog, disable it (cleaner for an org docs site)
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'PACT',
        logo: {
          alt: 'PACT Logo',
          src: 'img/pact-logo.png', // change to pact-logo.jpg if your file is JPG
        },
        items: [
          {to: '/docs/intro', label: 'About PACT', position: 'left'},
          {to: '/docs/operations/activation', label: 'Operations', position: 'left'},
          {to: '/docs/training', label: 'Training', position: 'left'},
          {to: '/docs/resources', label: 'Resources', position: 'left'},
          {to: '/docs/join-pact', label: 'Join PACT', position: 'left'},

          {
            href: 'https://github.com/MerrillTribe/PACT-Website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'PACT',
            items: [
              {label: 'About PACT', to: '/docs/intro'},
              {label: 'Operations', to: '/docs/operations/activation'},
              {label: 'Training', to: '/docs/training'},
              {label: 'Resources', to: '/docs/resources'},
              {label: 'Join PACT', to: '/docs/join-pact'},
            ],
          },
          {
            title: 'More',
            items: [
              {label: 'GitHub', href: 'https://github.com/MerrillTribe/PACT-Website'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Provo Auxiliary Communications Team (PACT).`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;