import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
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
          <Link className="button button--primary button--lg" to="/docs/join-pact">
            Join PACT
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description="Provo Auxiliary Communications Team (PACT) — volunteer emergency communications, training, and resources.">
      <HomepageHeader />
      <main>
  <div style={{textAlign: "center", padding: "4rem 0"}}>
    <img
      src="/img/pact-logo.png"
      alt="PACT Logo"
      style={{
        maxWidth: "500px",
        width: "80%",
        height: "auto"
      }}
    />
  </div>
</main>
    </Layout>
  );
}