import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <Link
            className="button button--primary button--lg"
            to="/docs/get-involved">
            Join PACT
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Provo Auxiliary Communications Team',
    alternateName: 'PACT',
    url: 'https://provoauxiliarycommunicationsteam.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://provoauxiliarycommunicationsteam.com/img/pact-logo.png',
    },
    description:
      'The Provo Auxiliary Communications Team (PACT) is a volunteer organization supporting Provo City through emergency communications, training, public service events, and disaster preparedness.',
    foundingDate: '2025',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Provo',
      addressRegion: 'UT',
      addressCountry: 'US',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Provo, Utah',
    },
    knowsAbout: [
      'Amateur Radio',
      'Emergency Communications',
      'Emergency Preparedness',
      'Disaster Response',
      'Ham Radio',
      'Public Service Communications',
    ],
    sameAs: [
      'https://www.linkedin.com/company/provo-auxiliary-communications-team-pact/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Provo Auxiliary Communications Team',
    alternateName: 'PACT',
    url: 'https://provoauxiliarycommunicationsteam.com',
    publisher: {
      '@type': 'Organization',
      name: 'Provo Auxiliary Communications Team',
    },
    inLanguage: 'en-US',
    hasPart: [
      {
        '@type': 'WebPage',
        name: 'Join PACT',
        url: 'https://www.provo.gov/1056/Provo-Auxiliary-Communications-Team-PACT',
        description:
          'Official Provo City membership application page for the Provo Auxiliary Communications Team.',
      },
    ],
  };

  const webpageSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Provo Auxiliary Communications Team',
    url: 'https://provoauxiliarycommunicationsteam.com',
    description:
      'Volunteer emergency communications organization serving Provo, Utah.',
    isPartOf: {
      '@type': 'WebSite',
      name: 'Provo Auxiliary Communications Team',
      url: 'https://provoauxiliarycommunicationsteam.com',
    },
    about: {
      '@type': 'Organization',
      name: 'Provo Auxiliary Communications Team',
    },
    inLanguage: 'en-US',
  };

  return (
    <Layout
      title={siteConfig.title}
      description="Provo Auxiliary Communications Team (PACT) — volunteer emergency communications, training, and resources.">
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(webpageSchema),
          }}
        />
      </Head>

      <HomepageHeader />

      <main>
        <div style={{textAlign: 'center', padding: '4rem 0'}}>
          <img
            src={useBaseUrl('/img/pact-logo.png')}
            alt="PACT Logo"
            style={{
              maxWidth: '500px',
              width: '80%',
              height: 'auto',
            }}
          />
        </div>
      </main>
    </Layout>
  );
}