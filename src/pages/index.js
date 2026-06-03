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

    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Provo',
      addressRegion: 'UT',
      addressCountry: 'US',
    },

    areaServed: {
      '@type': 'City',
      name: 'Provo',
      addressRegion: 'UT',
      addressCountry: 'US',
    },

    sameAs: [
      'https://www.linkedin.com/company/provo-auxiliary-communications-team-pact/',
    ],
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