
 // @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Provo Auxiliary Communications Team',

  tagline:
    'The Provo Auxiliary Communications Team (PACT) is a volunteer team organized to assist Provo City with communications during large emergencies & planned community events.',

  favicon: 'img/favicon.ico',

  url: 'https://provoauxiliarycommunicationsteam.com',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'MerrillTribe',
  projectName: 'PACT-Website',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  /* =========================================
     DOCUSAURUS PRESETS
     ========================================= */

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },

        blog: {
          routeBasePath: 'announcements',
          blogTitle: 'PACT Announcements',
          blogDescription:
            'Important updates, training information, schedule changes, certification updates, and other information from the Provo Auxiliary Communications Team.',
          showReadingTime: false,
          blogSidebarTitle: 'Recent Announcements',
          blogSidebarCount: 5,
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  /* =========================================
     LOCAL WEBSITE SEARCH
     ========================================= */

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // Generate a cache-friendly search index.
        hashed: true,

        // Search documentation pages.
        indexDocs: true,
        docsRouteBasePath: '/docs',

        // Search announcements.
        indexBlog: true,
        blogRouteBasePath: '/announcements',

        // Include general website pages.
        indexPages: true,

        // English-language search.
        language: 'en',

        // Position search on right side of navbar.
        searchBarPosition: 'right',

        // Enable Command+K / Ctrl+K search.
        searchBarShortcut: true,
        searchBarShortcutHint: true,

        // Show the matching section in results.
        explicitSearchResultPath: true,

        // Highlight matching search terms.
        highlightSearchTermsOnTargetPage: true,

        // Maximum number of search suggestions.
        searchResultLimits: 8,
      },
    ],
  ],

  /* =========================================
     THEME CONFIGURATION
     ========================================= */

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      /* =========================================
         NAVIGATION
         ========================================= */

      navbar: {
        // Default identity on documentation pages.
        // Homepage CSS displays PACT instead.
        title: 'Home',

        // Default blue PACT logo.
        // Homepage CSS displays the regular logo.
        logo: {
          alt: 'PACT Logo',
          src: 'img/pact-logo-blue.png',
        },

        items: [

{
  to: '/docs/about-pact/',
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
            to: '/announcements',
            label: 'Announcements',
            position: 'left',
          },
          {
            to: '/docs/get-involved',
            label: 'Get Involved',
            position: 'left',
          },
        ],
      },

      /* =========================================
         FOOTER
         ========================================= */

      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Provo Auxiliary Communications Team`,
      },

      /* =========================================
         CODE HIGHLIGHTING
         ========================================= */

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
