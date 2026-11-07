---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  CalendarDays,
  Clock3,
  Radio,
  RadioTower,
  FileText,
  ChevronDown,
} from 'lucide-react';

# Weekly Training Net

<div className="pact-net-schedule">

  <div className="pact-net-schedule-header">
    <CalendarDays
      size={20}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>WEEKLY TRAINING NET</span>
  </div>

  <div className="pact-net-schedule-body">

    <div className="pact-net-daytime-compact">

      <div className="pact-net-daytime-heading">
        Every Wednesday
      </div>

      <div className="pact-net-daytime-clock">
        <Clock3
          size={17}
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <span>8:30 PM · Mountain Time</span>
      </div>

    </div>

    <div className="pact-net-schedule-grid">

      <div className="pact-net-schedule-item">
        <span className="pact-net-phase-label">
          CHECK-INS
        </span>

        <strong>439.800 MHz</strong>
        <span>Simplex</span>
      </div>

      <div className="pact-net-schedule-item">
        <span className="pact-net-phase-label">
          ANNOUNCEMENTS &amp; TRAINING
        </span>

        <strong>
          <a
            href={useBaseUrl('/docs/operations/frequency-allocation/#provo-city-repeater')}
            onClick={(event) => {
              event.preventDefault();
              window.location.assign(event.currentTarget.href);
            }}
          >
            Provo City Repeater
          </a>
        </strong>

        <span>Following Check-Ins</span>
      </div>

    </div>

  </div>

</div>

<div className="pact-net-calendar-action">
  <a
    className="pact-primary-button"
    href={useBaseUrl('/calendar/pact-weekly-training-net.ics')}
    download
  >
    <CalendarDays
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>ADD TO CALENDAR</span>
  </a>
</div>

---

PACT holds a weekly training net to help its members practice radio procedures, build confidence, and stay familiar with emergency communication operations.

While attendance is not required, regular participation is strongly encouraged.

---

## Net Format

The weekly training net is conducted in two phases. Members should remain on the assigned frequency until Net Control directs them to switch.



<div className="pact-net-format">

  <div className="pact-net-format-step">

    <div className="pact-net-format-number pact-net-format-blue">
      01
    </div>

    <div className="pact-net-format-content">
      <h3>Check-Ins — Simplex</h3>

      <p>
        Members check in by district on <strong>439.800 MHz simplex</strong>,
        practicing the communication procedures used during PACT{' '}
        <a href="/docs/operations/activation">activations</a>.
      </p>
    </div>

  </div>

  <div className="pact-net-format-connector">
    <span aria-hidden="true">↓</span>
  </div>

  <div className="pact-net-format-step">

    <div className="pact-net-format-number pact-net-format-red">
      02
    </div>

    <div className="pact-net-format-content">
      <h3>Announcements, Traffic &amp; Training — Repeater</h3>

      <p>
        After check-ins, Net Control directs stations to switch to the{' '}
        <a href="/docs/operations/frequency-allocation/#provo-city-repeater">Provo City repeater</a>{' '}
        for announcements, traffic, and training.
      </p>
    </div>

  </div>

</div>

---

## How to Check In

During the first portion of the net, Net Control will call for check-ins by each Provo Neighborhood District.

When your district is called:

1. Wait for a pause.
2. State your FCC call sign slowly and clearly using [**standard phonetics**](/docs/resources/codes#itu-phonetic-alphabet).
3. Indicate whether or not you have traffic for the net.
4. Wait for acknowledgment from Net Control.

#### Example Check-In

<div className="pact-net-example">

  <div className="pact-net-example-row">

    <div className="pact-net-example-icon">
      <RadioTower
        size={20}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </div>

    <div className="pact-net-example-content">
      <strong>NET CONTROL</strong>

      <p>
        "All stations located in the North District,
        please check in."
      </p>
    </div>

  </div>

  <div className="pact-net-example-divider"></div>

  <div className="pact-net-example-row">

    <div className="pact-net-example-icon">
      <Radio
        size={20}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </div>

    <div className="pact-net-example-content">
      <strong>OPERATOR</strong>

      <p>
        "This is November-Seven-Bravo-Yankee-Uniform
        with no traffic."
      </p>
    </div>

  </div>

</div>

If you have announcements, formal traffic, or information for the net, say **"with traffic"** instead of **"with no traffic."**

After your check-in has been acknowledged, remain on **439.800 MHz simplex** until Net Control instructs all stations to switch to the Provo City repeater.

If you indicate that you have traffic, Net Control will let you know when to speak. Remember, PACT nets are **directed nets**. Operators should wait to be recognized by Net Control before transmitting unless there is emergency traffic.

If you miss your district's check-in, wait until Net Control calls for late or missed check-ins.

---

## Operating Tips

The following guidance explains common situations members may encounter during the training net.

<div className="pact-net-accordion">

  <details className="pact-net-details">

    <summary>Why Check-Ins Use Simplex</summary>

    <div className="pact-net-details-content">

      <p>
        PACT emergency operations primarily rely on
        <strong> simplex communications</strong> between operators
        and Net Control. Conducting weekly check-ins on simplex
        gives members regular practice using the same operating
        method that may be required during an activation.
      </p>

      <p>
        Because Provo covers a large geographic area, it is normal
        for some stations to hear Net Control but not every other
        station—or vice versa. After check-ins are complete, the
        net transitions to the <strong>Provo City repeater</strong>,
        allowing everyone to hear announcements, traffic, and
        the weekly training topic more reliably.
      </p>

    </div>

  </details>

  <details className="pact-net-details">

    <summary>Handling Doubles</summary>

    <div className="pact-net-details-content">

      <p>
        A <strong>double</strong> occurs when two or more stations
        transmit at the same time. When this happens, Net Control
        may not be able to clearly understand either station.
      </p>

      <p>If you hear a double:</p>

      <ul>
        <li>Stop transmitting.</li>
        <li>Wait for Net Control to identify a station or request a repeat.</li>
        <li>Do not try to continue over another station.</li>
      </ul>

      <p>
        Net Control may recognize part of a call sign and ask
        that station to transmit again.
      </p>

      <blockquote>
        "The station ending in Bravo-Yankee-Uniform,
        please repeat your callsign."
      </blockquote>

      <p>
        Brief pauses before transmitting help reduce doubles,
        especially during simplex check-ins.
      </p>

    </div>

  </details>

</div>

---

## Net Control Script

PACT training nets follow a structured format as outlined below.

<details className="pact-net-script">

  <summary>

    <span className="pact-net-script-icon">
      <FileText
        size={21}
        strokeWidth={1.8}
        aria-hidden="true"
      />
    </span>

    <span className="pact-net-script-heading">
      <strong>Net Control Script</strong>
      <small>
        Opening, district check-ins, announcements, training, and closing
      </small>
    </span>

    <ChevronDown
      className="pact-net-script-chevron"
      size={21}
      strokeWidth={2}
      aria-hidden="true"
    />

  </summary>

  <div className="pact-net-script-content">

#### 10 Minutes Before the Net

**QST, QST, QST**

This is station ________ with an announcement for all stations monitoring this frequency.

The Provo Auxiliary Communications Team Weekly Training Net will begin at **20:30 hours local time**.

Check-ins will be taken on **439.800 MHz simplex**.

After check-ins are complete, the remainder of the net will be conducted on the **Provo City repeater**.

All stations interested in participating, please stand by until the net is called.

---

##### 20:30 Hours — Start the Net

Calling the Provo Auxiliary Communications Team Weekly Training Net.

This is Net Control Station ________ and my transmitting location is the ________ Neighborhood in the ______ District.

The purpose of this net is to provide training for amateur radio operators and to become familiar with radio equipment and emergency communication procedures in Provo.

Check-ins will be taken on **439.800 MHz simplex**. Once check-ins are complete, all stations will be directed to switch to the **Provo City repeater** for announcements, traffic, and tonight's training topic.

This is a directed net. Please transmit **ONLY** as requested by Net Control.

We use the ARRL standard word **BREAK** for priority or emergency traffic only.

**Is there any priority or emergency traffic for the net?**

---

#### Check-Ins

Check-ins will now be taken by Provo Neighborhood District.

1. North District (District 1)
2. East District (District 2)
3. West District (District 3)
4. Northwest District (District 4)
5. Central District (District 5)
6. Stations from anywhere

**(Pause after every three or four check-ins to acknowledge stations.)**

---

#### Announcements, Traffic, & Training

The remainder of the net will be conducted on the **Provo City repeater**.

The Provo City repeater uses the following settings:

- **Receive (Output):** 443.575 MHz
- **Transmit (Input):** 448.575 MHz
- **CTCSS Tone:** 123.0 Hz

Please switch to the repeater now.

**(Switch to the repeater & pause for 30 seconds.)**

Is there anyone who was unable to check in on simplex who would like to check in now?

---

#### Net Agenda

1. Announcements and Additional Business
2. Scheduled Traffic
3. Training Topic

---

#### Late or Missed Check-Ins

I will now call for any late or missed check-ins.

Please state your call sign slowly and clearly using standard phonetics.

---

#### Closing

Thank you to everyone who participated in tonight's training net.

This is station ________, Net Control for the Provo Auxiliary Communications Team Weekly Training Net, closing the net at ________ hours and returning the repeater to normal amateur radio use.

  </div>

</details>
