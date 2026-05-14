// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Provo Auxiliary Communications Team',

  tagline:
    'The Provo Auxiliary Communication Team (PACT) is a volunteer team organized to assist Provo City with communications during large emergencies or other disruptions as well as planned events in Provo.',

  favicon: 'img/favicon.ico',

  url: 'https://www.provoauxiliarycommunicationsteam.com',
  baseUrl: '/',

  organizationName: 'MerrillTribe',
  projectName: 'PACT-Website',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/MerrillTribe/PACT-Website/tree/main/',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      },
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
        title: 'Home',

        logo: {
          alt: 'PACT Logo',
          src: 'img/pact-logo-blue.png',
        },

        items: [
          {
            to: '/docs/intro',
            label: 'About PACT',
            position: 'left',
          },
          {
            to: '/docs/operations/activation',
            label: 'Operations',
            position: 'left',
          },
          {
            to: '/docs/training/weekly-training-net',
            label: 'Training',
            position: 'left',
          },
          {
            to: '/docs/resources/codes',
            label: 'Resources',
            position: 'left',
          },
          {
            to: '/docs/get-involved',
            label: 'Get Involved',
            position: 'left',
          },
          {
            href: 'https://github.com/MerrillTribe/PACT-Website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Provo Auxiliary Communications Team`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
