---
sidebar_position: 1
---

import React, { useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { Download, MapPin, Map } from 'lucide-react';

# PACT Frequencies

The following frequencies have been coordinated and allocated for PACT communications. PACT members should program these frequencies into their radio(s). District frequencies are used to share situational information and support district-level communication efforts as directed.

<div className="pact-frequency-download">
  <a
    className="pact-primary-button"
    href={useBaseUrl('/files/pact-map-v1-2.pdf')}
    download
  >
    <Download
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>DOWNLOAD PACT FREQUENCY MAP</span>
  </a>
</div>

## Provo City Repeater {#provo-city-repeater}

The Provo City Repeater is available for all PACT operations, trainings, and events.

export function RepeaterSelector() {
  const [view, setView] = useState('radio');

  const isRadio = view === 'radio';

  return (
    <div className="pact-repeater-panel">

      {/* Toggle and location */}

      <div className="pact-repeater-toolbar">

        <div
          className="pact-repeater-toggle"
          role="group"
          aria-label="Repeater frequency perspective"
        >
          <button
            type="button"
            className={isRadio ? 'active' : ''}
            aria-pressed={isRadio}
            onClick={() => setView('radio')}
          >
            Radio Programming
          </button>

          <button
            type="button"
            className={!isRadio ? 'active' : ''}
            aria-pressed={!isRadio}
            onClick={() => setView('repeater')}
          >
            Repeater Configuration
          </button>
        </div>

        <span className="pact-repeater-location">
          <MapPin
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          Provo City Hall
        </span>

      </div>

      {/* Receive and transmit frequencies */}

      <div className="pact-repeater-grid">

        <div className="pact-repeater-item">
          <div className="pact-repeater-label">
            RECEIVE (RX)
          </div>

          <div className="pact-repeater-value">
            {isRadio ? '443.575' : '448.575'}
          </div>

          <div className="pact-repeater-unit">
            MHz
          </div>
        </div>

        <div className="pact-repeater-item">
          <div className="pact-repeater-label">
            TRANSMIT (TX)
          </div>

          <div className="pact-repeater-value">
            {isRadio ? '448.575' : '443.575'}
          </div>

          <div className="pact-repeater-unit">
            MHz
          </div>
        </div>

      </div>

      {/* Additional programming settings */}

      <div className="pact-repeater-settings">

        <div>
          <span>CTCSS Tone</span>
          <strong>123.0 Hz</strong>
        </div>

        <div>
          <span>Frequency Offset</span>
          <strong>
            {isRadio ? '+5.000 MHz' : '−5.000 MHz (TX−RX)'}
          </strong>
        </div>

      </div>

      {/* Operating explanation */}

      <p className="pact-repeater-description">
        {isRadio
          ? 'Your radio receives on 443.575 MHz and transmits on 448.575 MHz. Program a +5.000 MHz offset and a 123.0 Hz transmit CTCSS tone.'
          : 'The repeater receives on 448.575 MHz and transmits on 443.575 MHz. Its transmit frequency is 5.000 MHz below its receive frequency.'}
      </p>

      {/* Repeater coverage map */}

      <div className="pact-repeater-map-action">
        <a
          className="pact-primary-button"
          href="https://provoauxiliarycommunicationsteam.com/repeater-map/"
        >
          <Map
            size={18}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>VIEW REPEATER COVERAGE MAP</span>
        </a>
      </div>

    </div>
  );
}

<RepeaterSelector />


## PACT Simplex Frequencies

<div className="pact-frequency-table">
  <table>
    <thead>
      <tr>
        <th>Designation</th>
        <th>Frequency (MHz)</th>
        <th>Purpose</th>
      </tr>
    </thead>

    <tbody>
      <tr>
        <td>
          <div className="pact-frequency-designation">
            <span className="pact-frequency-tag pact-frequency-net">
              <span>EOC</span>
            </span>
            <strong>Net Control</strong>
          </div>
        </td>
        <td>
          <span className="pact-frequency-value">
            439.800
          </span>
        </td>
        <td>Provo City EOC</td>
      </tr>

      <tr>
        <td>
          <div className="pact-frequency-designation">
            <span className="pact-frequency-tag pact-frequency-d1">
              <span>D1</span>
            </span>
            <strong>North District</strong>
          </div>
        </td>
        <td>
          <span className="pact-frequency-value">
            439.850
          </span>
        </td>
        <td>Inner District Communications</td>
      </tr>

      <tr>
        <td>
          <div className="pact-frequency-designation">
            <span className="pact-frequency-tag pact-frequency-d2">
              <span>D2</span>
            </span>
            <strong>East District</strong>
          </div>
        </td>
        <td>
          <span className="pact-frequency-value">
            439.925
          </span>
        </td>
        <td>Inner District Communications</td>
      </tr>

      <tr>
        <td>
          <div className="pact-frequency-designation">
            <span className="pact-frequency-tag pact-frequency-d3">
              <span>D3</span>
            </span>
            <strong>West District</strong>
          </div>
        </td>
        <td>
          <span className="pact-frequency-value">
            439.825
          </span>
        </td>
        <td>Inner District Communications</td>
      </tr>

      <tr>
        <td>
          <div className="pact-frequency-designation">
            <span className="pact-frequency-tag pact-frequency-d4">
              <span>D4</span>
            </span>
            <strong>Northwest District</strong>
          </div>
        </td>
        <td>
          <span className="pact-frequency-value">
            439.875
          </span>
        </td>
        <td>Inner District Communications</td>
      </tr>

      <tr>
        <td>
          <div className="pact-frequency-designation">
            <span className="pact-frequency-tag pact-frequency-d5">
              <span>D5</span>
            </span>
            <strong>Central District</strong>
          </div>
        </td>
        <td>
          <span className="pact-frequency-value">
            439.000
          </span>
        </td>
        <td>Inner District Communications</td>
      </tr>
    </tbody>
  </table>
</div>


---

## PACE Plan

PACT uses a **Primary, Alternate, Contingency, and Emergency (PACE) Plan** to maintain reliable communications between field operators and the Provo City Emergency Operations Center (EOC). The plan establishes multiple communication pathways to ensure critical information can continue to reach the EOC when primary systems become unavailable, congested, or ineffective.

Each level provides a progressively different method of communication:

- **Primary (P)** — The preferred communication method used during normal PACT operations.
- **Alternate (A)** — A secondary method used when the primary pathway is unavailable or insufficient.
- **Contingency (C)** — An additional communication pathway used when primary and alternate methods cannot adequately support operations.
- **Emergency (E)** — A last-resort method used when other communication pathways are unavailable.

<div className="pace-plan">

  <div className="pace-plan-header">
    <h3>PACT PACE Plan</h3>
  </div>

  <div className="pace-grid">

    <div className="pace-card">
      <div className="pace-letter">P</div>
      <div className="pace-name">Primary</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">
            Communication Method
          </span>
          <strong>439.800 MHz Simplex</strong>
        </div>

        <div className="pace-detail">
          <span className="pace-detail-label">
            Information Transmitted
          </span>
          <strong>N-0 Form</strong>
        </div>
      </div>

      <p>
        Primary pathway for field reports and communications
        with the EOC.
      </p>
    </div>

    <div className="pace-card">
      <div className="pace-letter">A</div>
      <div className="pace-name">Alternate</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">
            Communication Method
          </span>
          <strong>Provo City Repeater</strong>
        </div>

        <div className="pace-detail">
          <span className="pace-detail-label">
            Information Transmitted
          </span>
          <strong>N-0 Form</strong>
        </div>
      </div>

      <p>
        Secondary pathway for field reports and communications
        with the EOC.
      </p>
    </div>

    <div className="pace-card">
      <div className="pace-letter">C</div>
      <div className="pace-name">Contingency</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">
            Communication Method
          </span>
          <strong>MANET + ATAK</strong>
        </div>

        <div className="pace-detail">
          <span className="pace-detail">
            <span className="pace-detail-label">
              Information Transmitted
            </span>
            <strong>WASP Reports</strong>
          </span>
        </div>
      </div>

      <p>
        Parallel pathway for high-volume, location-based
        reporting during large-scale incidents.
      </p>
    </div>

    <div className="pace-card">
      <div className="pace-letter">E</div>
      <div className="pace-name">Emergency</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">
            Communication Method
          </span>
          <strong>Hand Delivery</strong>
        </div>

        <div className="pace-detail">
          <span className="pace-detail-label">
            Information Transmitted
          </span>
          <strong>N-0 Form</strong>
        </div>
      </div>

      <p>
        Physical delivery of reports when electronic
        communication pathways are unavailable.
      </p>
    </div>

  </div>

</div>
