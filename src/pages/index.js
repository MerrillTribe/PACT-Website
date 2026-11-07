

import React, {useEffect, useState} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import {RadioTower, CalendarDays, ArrowRight} from 'lucide-react';

import {getNextEvent} from '@site/src/data/events';
import styles from './index.module.css';

/* =========================================
   HOMEPAGE HERO
   ========================================= */

function HomepageHeader() {
  return (
    <header className={styles.hero}>

      {/* Future silent background video.
          Uncomment when your video is ready.

      <video
        className={styles.backgroundVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source
          src="/video/pact-introduction.mp4"
          type="video/mp4"
        />
      </video>
      */}

      <div className={styles.heroOverlay} />

      <div className={styles.container}>
        <div className={styles.heroContent}>

          <span className={styles.eyebrow}>
            COMMUNICATION · SERVICE · PREPAREDNESS
          </span>

          <h1>Provo Auxiliary Communications Team</h1>

          <p>
            The Provo Auxiliary Communications Team (PACT) is a
            volunteer team organized to assist Provo City with
            communications during large emergencies &amp; planned
            community events.
          </p>

          <Link
            className={styles.primaryButton}
            to="/docs/get-involved"
          >
            GET INVOLVED
            <ArrowRight size={18} aria-hidden="true" />
          </Link>

        </div>
      </div>
    </header>
  );
}

/* =========================================
   EVENT DATE AND TIME FORMATTING
   ========================================= */

function formatEventDate(dateString) {
  if (!dateString) return '';

  const [year, month, day] = dateString
    .split('-')
    .map(Number);

  const date = new Date(
    Date.UTC(year, month - 1, day)
  );

  return new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(date);
}

function formatEventTime(timeString) {
  if (!timeString) return '';

  const [hours, minutes] = timeString
    .split(':')
    .map(Number);

  const period = hours >= 12 ? 'PM' : 'AM';
  const hour = hours % 12 || 12;

  return `${hour}:${String(minutes).padStart(2, '0')} ${period}`;
}

/* =========================================
   AUTOMATIC UPCOMING EVENT CARD
   ========================================= */

function NextEventCard() {
  const [nextEvent, setNextEvent] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    function updateEvent() {
      setNextEvent(getNextEvent(new Date()));
      setIsLoaded(true);
    }

    updateEvent();

    // Refresh the upcoming event every minute
    // while the homepage remains open.
    const interval = window.setInterval(
      updateEvent,
      60000
    );

    return () => window.clearInterval(interval);
  }, []);

  return (
    <article className={styles.activityCard}>

      <div className={styles.cardHeading}>
        <CalendarDays
          size={25}
          strokeWidth={1.8}
          className={styles.cardIcon}
          aria-hidden="true"
        />

        <h3>Next Upcoming Event</h3>
      </div>

      <div className={styles.cardContent}>

        {!isLoaded ? (
          <p className={styles.cardDetail}>
            Loading upcoming events...
          </p>
        ) : nextEvent ? (
          <>
            <p className={styles.cardPrimary}>
              {nextEvent.title}
            </p>

            <p className={styles.cardDetail}>
              {formatEventDate(nextEvent.date)}
              {' · '}
              {formatEventTime(nextEvent.startTime)}

              {nextEvent.endTime && (
                <>
                  {' – '}
                  {formatEventTime(nextEvent.endTime)}
                </>
              )}
            </p>

            {nextEvent.location && (
              <p className={styles.cardDetail}>
                {nextEvent.location}
              </p>
            )}

            {nextEvent.description && (
              <p className={styles.cardDetail}>
                {nextEvent.description}
              </p>
            )}
          </>
        ) : (
          <>
            <p className={styles.cardPrimary}>
              To Be Announced
            </p>

            <p className={styles.cardDetail}>
              No upcoming events are currently scheduled.
            </p>
          </>
        )}

      </div>

      {nextEvent?.link && (
        <Link
          to={nextEvent.link}
          className={styles.cardLink}
          aria-label={`View details for ${nextEvent.title}`}
        >
          Event Details
          <ArrowRight size={17} aria-hidden="true" />
        </Link>
      )}

    </article>
  );
}

/* =========================================
   HOMEPAGE ACTIVITIES
   ========================================= */

function HomepageContent() {
  return (
    <main className={styles.mainContent}>
      <div className={styles.container}>

        <section className={styles.activitiesSection}>

          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>
              STAY CONNECTED
            </span>

            <h2>Upcoming Activities</h2>
          </div>

          <div className={styles.activityGrid}>

            {/* Next Upcoming Net */}
            <article className={styles.activityCard}>

              <div className={styles.cardHeading}>
                <RadioTower
                  size={25}
                  strokeWidth={1.8}
                  className={styles.cardIcon}
                  aria-hidden="true"
                />

                <h3>Next Upcoming Net</h3>
              </div>

              <div className={styles.cardContent}>

                <p className={styles.cardPrimary}>
                  Weekly Training Net
                </p>

                <p className={styles.cardDetail}>
                  Wednesdays · 8:30 PM
                </p>

                <p className={styles.cardDetail}>
                  Check-ins: 439.800 MHz Simplex
                </p>

                <p className={styles.cardDetail}>
                  Announcements: Provo City Repeater
                </p>

              </div>

              <Link
                to="/docs/training/weekly-training-net/"
                className={styles.cardLink}
              >
                Net Information
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

            </article>

            {/* Automatically Populated Upcoming Event */}
            <NextEventCard />

          </div>
        </section>

      </div>
    </main>
  );
}

/* =========================================
   HOMEPAGE + SEO SCHEMAS
   ========================================= */

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
      description="Provo Auxiliary Communications Team (PACT) — volunteer emergency communications, training, and resources."
      wrapperClassName="pact-homepage"
    >
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
      <HomepageContent />

    </Layout>
  );
}
