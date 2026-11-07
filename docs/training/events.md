---
sidebar_position: 1
---

import { ArrowRight, X } from 'lucide-react';

# Events

Participating in community events gives PACT members valuable hands-on experience while serving their community. These volunteer opportunities help PACT members become more comfortable with their equipment, practice communication procedures, and develop skills that can be applied during emergencies.


<div className="pact-events-overview">

  <button
    type="button"
    className="pact-events-overview-card"
    onClick={() => document.getElementById('pact-modal-marathon').showModal()}
  >
    <div className="pact-events-card-heading">
      <h2>Provo Half Marathon</h2>
    </div>

    <p>
      Amateur radio operators support race communications
      between the starting line, finish line, aid stations,
      and mobile personnel along the course.
    </p>

    <div className="pact-events-overview-meta">
      <span>Spring (annual)</span>
      <span>Approximately 20 volunteers</span>
    </div>

    <span className="pact-events-card-link">
      View Event Details
    </span>
  </button>

  <button
    type="button"
    className="pact-events-overview-card"
    onClick={() => document.getElementById('pact-modal-parade').showModal()}
  >
    <div className="pact-events-card-heading">
      <h2>Provo Freedom Festival Parade</h2>
    </div>

    <p>
      Amateur radio volunteers provide communications
      along the parade route, support staging operations,
      and coordinate roving and shadow assignments.
    </p>

    <div className="pact-events-overview-meta">
      <span>Independence Day (annual)</span>
      <span>Approximately 35 volunteers</span>
    </div>

    <span className="pact-events-card-link">
      View Event Details
    </span>
  </button>

  <button
    type="button"
    className="pact-events-overview-card"
    onClick={() => document.getElementById('pact-modal-hike').showModal()}
  >
    <div className="pact-events-card-heading">
      <h2>Hike &amp; Light the Y</h2>
    </div>

    <p>
      Radio operators provide communications from the
      trailhead to the top of the Y, assisting event
      organizers and supporting EMS coordination.
    </p>

    <div className="pact-events-overview-meta">
      <span>BYU Homecoming (annual)</span>
      <span>Approximately 15 volunteers</span>
    </div>

    <span className="pact-events-card-link">
      View Event Details
    </span>
  </button>

</div>


{/* =========================================
    PROVO HALF MARATHON
    ========================================= */}

<dialog
  id="pact-modal-marathon"
  className="pact-events-modal"
  aria-label="Provo Half Marathon event details"
  onClick={(event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }}
>

  <section className="pact-events-detail" id="provo-half-marathon">

    <div className="pact-events-detail-header">

      <button
        type="button"
        className="pact-events-modal-close"
        aria-label="Close event details"
        onClick={(event) => event.currentTarget.closest('dialog').close()}
      >
        <X size={20} aria-hidden="true" />
      </button>

      <div className="pact-events-detail-title">
        <h2>Provo Half Marathon</h2>
      </div>

      <div className="pact-events-detail-tags">
        <span>Spring (annual)</span>
        <span>Approximately 20 volunteers</span>
      </div>

    </div>

    <div className="pact-events-detail-body">

      <div className="pact-events-info-grid">

        <div className="pact-events-panel">

          <h3>Event Overview</h3>

          <p>
            The Provo City Half Marathon is an annual spring race held
            in Provo that attracts both beginner and experienced runners
            from across Utah and the surrounding region. Known for its
            fast, scenic downhill course, the race begins at South Fork
            Park in Provo Canyon and finishes in downtown Provo along
            University Avenue and Center Street. The course follows
            portions of the Provo River Parkway and offers runners
            views of the canyon, mountains, and river while descending
            nearly 900 feet over 13.1 miles. Organized by Run13, the
            event also includes a 5K and Kids Marathon and has become
            one of the fastest-growing races in Utah due to its
            PR-friendly course, energetic downtown finish, and strong
            community atmosphere.
          </p>

        </div>

        <div className="pact-events-panel">

          <h3>Volunteer Information</h3>

          <p>
            The event typically utilizes approximately twenty amateur
            radio volunteers, including Net Control operators. Most
            volunteers are assigned to key race locations such as the
            start line, finish line, and water/aid stations along the
            course. Additional operators may be assigned as mobile or
            bike-mounted communicators to provide roving coverage
            throughout the event.
          </p>

          <p>
            Volunteer communications support for the Provo City Half
            Marathon is coordinated through{' '}
            <a href="/docs/resources/local-groups"><strong>Utah County Amateur Radio Emergency Service (UCARES)</strong></a>.
            {' '}PACT members interested in participating should
            register through UCARES.
          </p>

        </div>

      </div>

      <div className="pact-events-panel pact-events-staffing">

        <h3>Positions / Staffing Needs</h3>

        <div className="pact-events-position-list">
          <span>Start line</span>
          <span>Finish line</span>
          <span>Water/aid stations</span>
          <span>Mobile or bike-mounted communicators</span>
          <span>Net Control</span>
        </div>

      </div>

      <div className="pact-events-panel pact-events-comms">

        <h3>Communications Plan</h3>

        <p>
          On the day of the event, UCARES will link the following
          repeaters to support event communications:
        </p>

        <div className="pact-events-table-scroll">

          <table className="pact-events-frequency-table">

            <thead>
              <tr>
                <th>Channel / Repeater</th>
                <th>Frequency</th>
                <th>Operational Details</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <th scope="row">Downtown Repeater</th>
                <td className="pact-events-frequency">145.470 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 100.0 Hz</li>
                    <li><strong>Offset:</strong> -0.600 MHz</li>
                    <li><strong>Location:</strong> Utah Valley Hospital</li>
                    <li><strong>Purpose:</strong> Primary downtown operations</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Provo Canyon 1</th>
                <td className="pact-events-frequency">145.410 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 141.3 Hz</li>
                    <li><strong>Offset:</strong> -0.600 MHz</li>
                    <li><strong>Location:</strong> Provo Canyon</li>
                    <li><strong>Purpose:</strong> Primary canyon coverage</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Provo Canyon 2</th>
                <td className="pact-events-frequency">145.250 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 100.0 Hz</li>
                    <li><strong>Offset:</strong> -0.600 MHz</li>
                    <li><strong>Location:</strong> Sundance</li>
                    <li><strong>Purpose:</strong> Secondary canyon coverage</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Backup Downtown Repeater</th>
                <td className="pact-events-frequency">449.325 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 100.0 Hz</li>
                    <li><strong>Offset:</strong> -5.000 MHz</li>
                    <li><strong>Location:</strong> Utah Valley Hospital</li>
                    <li><strong>Purpose:</strong> Backup downtown operations</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">South Fork Crossband</th>
                <td className="pact-events-frequency">446.500 MHz</td>
                <td>
                  <ul>
                    <li><strong>Mode:</strong> Crossband</li>
                    <li><strong>Coverage:</strong> Provo South Fork Area</li>
                    <li><strong>Use:</strong> Temporary local access</li>
                    <li>
                      <strong>Note:</strong> Switch to a linked
                      repeater as soon as possible
                    </li>
                  </ul>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </section>

</dialog>


{/* =========================================
    PROVO FREEDOM FESTIVAL PARADE
    ========================================= */}

<dialog
  id="pact-modal-parade"
  className="pact-events-modal"
  aria-label="Provo Freedom Festival Parade event details"
  onClick={(event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }}
>

  <section
    className="pact-events-detail"
    id="provo-freedom-festival-parade"
  >

    <div className="pact-events-detail-header">

      <button
        type="button"
        className="pact-events-modal-close"
        aria-label="Close event details"
        onClick={(event) => event.currentTarget.closest('dialog').close()}
      >
        <X size={20} aria-hidden="true" />
      </button>

      <div className="pact-events-detail-title">
        <h2>Provo Freedom Festival Parade</h2>
      </div>

      <div className="pact-events-detail-tags">
        <span>Independence Day (annual)</span>
        <span>Approximately 35 volunteers</span>
      </div>

    </div>

    <div className="pact-events-detail-body">

      <div className="pact-events-info-grid">

        <div className="pact-events-panel">

          <h3>Event Overview</h3>

          <p>
            The America's Freedom Festival at Provo is one of the
            nation’s largest patriotic celebrations and has been a
            longstanding Provo tradition since the late 1800s.
            Held annually from spring through the Fourth of July,
            the festival features more than 25 community events,
            including the Grand Parade, Balloon Fest, and the
            nationally recognized Stadium of Fire. On Independence
            Day morning, thousands of spectators gather along
            University Avenue in downtown Provo to watch the Grand
            Parade, one of the festival’s most recognized community
            traditions.
          </p>

        </div>

        <div className="pact-events-panel">

          <h3>Volunteer Information</h3>

          <p>
            The event typically utilizes approximately thirty-five
            amateur radio volunteers. Most volunteers are assigned
            to locations along the parade route, including the staging
            area and the parade start and finish lines. Several
            operators provide roving coverage throughout the event.
            All volunteers should plan on being at their assigned
            location by 0620.
          </p>

          <p>
            Volunteer communications support for the Freedom Festival
            Parade is coordinated through{' '}
            <a href="/docs/resources/local-groups"><strong>Utah County Amateur Radio Emergency Service (UCARES)</strong></a>.
            {' '}PACT members interested in participating should
            register through UCARES.
          </p>

        </div>

      </div>

      <div className="pact-events-panel pact-events-staffing">

        <h3>Positions / Staffing Needs</h3>

        <div className="pact-events-position-list">
          <span>Staging area</span>
          <span>Parade start line</span>
          <span>Parade finish line</span>
          <span>Roving coverage</span>
        </div>

      </div>

      <div className="pact-events-panel pact-events-comms">

        <h3>Communications Plan</h3>

        <p>
          On the day of the event, UCARES will use the following
          repeaters &amp; frequencies to support parade communications.
        </p>

        <div className="pact-events-table-scroll">

          <table className="pact-events-frequency-table">

            <thead>
              <tr>
                <th>Channel / Repeater</th>
                <th>Frequency</th>
                <th>Operational Details</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <th scope="row">Main Repeater</th>
                <td className="pact-events-frequency">145.470 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 100.0 Hz</li>
                    <li><strong>Purpose:</strong> Primary parade communications</li>
                    <li>
                      <strong>Note:</strong> Best signal reported
                      on this repeater
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Backup Frequency</th>
                <td className="pact-events-frequency">147.340 MHz</td>
                <td>
                  <ul>
                    <li><strong>Purpose:</strong> Backup parade communications</li>
                    <li><strong>Note:</strong> Use if directed by Net Control</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Shadow Repeater</th>
                <td className="pact-events-frequency">449.325 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 100.0 Hz</li>
                    <li><strong>Purpose:</strong> Shadow operator communications</li>
                    <li>
                      <strong>Note:</strong> Use only if assigned
                      to shadow operations
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Shadow Backup Repeater</th>
                <td className="pact-events-frequency">147.280 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 141.3 Hz</li>
                    <li>
                      <strong>Purpose:</strong> Backup for shadow
                      communications
                    </li>
                    <li><strong>Note:</strong> Use if directed by Net Control</li>
                  </ul>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </section>

</dialog>


{/* =========================================
    HIKE & LIGHT THE Y
    ========================================= */}

<dialog
  id="pact-modal-hike"
  className="pact-events-modal"
  aria-label="Hike & Light the Y event details"
  onClick={(event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.close();
    }
  }}
>

  <section className="pact-events-detail" id="hike-and-light-the-y">

    <div className="pact-events-detail-header">

      <button
        type="button"
        className="pact-events-modal-close"
        aria-label="Close event details"
        onClick={(event) => event.currentTarget.closest('dialog').close()}
      >
        <X size={20} aria-hidden="true" />
      </button>

      <div className="pact-events-detail-title">
        <h2>Hike &amp; Light the Y</h2>
      </div>

      <div className="pact-events-detail-tags">
        <span>BYU Homecoming</span>
        <span>Approximately 15 volunteers</span>
      </div>

    </div>

    <div className="pact-events-detail-body">

      <div className="pact-events-info-grid">

        <div className="pact-events-panel">

          <h3>Event Overview</h3>

          <p>
            Hike &amp; Light the Y is a longstanding tradition that
            began in 1924. During Homecoming, BYU students, faculty,
            and alumni hike to the Y on Y Mountain and participate
            in a special lighting ceremony.
          </p>

          <p>
            Amateur radio volunteers help support the event by
            providing communications between the event organizers
            and key locations along the route.
          </p>

        </div>

        <div className="pact-events-panel">

          <h3>Volunteer Information</h3>

          <p>
            The event typically utilizes fifteen amateur radio
            volunteers, including a Net Control operator. Most
            volunteers are stationed at key locations such as the
            trailhead, switchbacks, the top of the Y, and the shuttle
            pickup. Additional operators may be assigned as EMS or
            Director shadows to help relay information and coordinate
            requests for assistance throughout the event.
          </p>

          <p>
            Volunteers should be prepared for outdoor conditions,
            uneven terrain, and reduced visibility after sunset.
            Recommended equipment includes a reflective vest,
            flashlight or headlamp, an extra clothing layer,
            and an amateur radio with an earpiece.
          </p>

          <p>
            Volunteer communications support for Hike &amp; Light
            the Y is coordinated through the{' '}
            <a href="/docs/resources/local-groups/#byu-amateur-radio-club-barc"><strong>BYU Amateur Radio Club (BARC)</strong></a>.
            {' '}PACT members interested in participating should
            sign up through the club's leadership.
          </p>

        </div>

      </div>

      <div className="pact-events-panel pact-events-staffing">

        <h3>Positions / Staffing Needs</h3>

        <div className="pact-events-position-list">
          <span>Trailhead</span>
          <span>Switchbacks</span>
          <span>Top of the Y</span>
          <span>Shuttle pickup</span>
          <span>EMS shadows</span>
          <span>Director shadows</span>
          <span>Net Control</span>
        </div>

      </div>

      <div className="pact-events-panel pact-events-comms">

        <h3>Communications Plan</h3>

        <p>
          The following frequencies are used during the event.
          Volunteers should confirm their assignments and operating
          instructions before the event.
        </p>

        <div className="pact-events-table-scroll">

          <table className="pact-events-frequency-table">

            <thead>
              <tr>
                <th>Channel / Repeater</th>
                <th>Frequency</th>
                <th>Operational Details</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <th scope="row">BYU VHF Repeater</th>
                <td className="pact-events-frequency">145.330 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 100.0 Hz</li>
                    <li><strong>Offset:</strong> -0.600 MHz</li>
                    <li>
                      <strong>Purpose:</strong> Primary event
                      communications
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">BYU UHF Repeater</th>
                <td className="pact-events-frequency">449.075 MHz</td>
                <td>
                  <ul>
                    <li><strong>Tone:</strong> 167.9 Hz</li>
                    <li><strong>Offset:</strong> -5.000 MHz</li>
                    <li>
                      <strong>Purpose:</strong> Alternate repeater
                      access
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th scope="row">Backup Simplex Frequency</th>
                <td className="pact-events-frequency">146.500 MHz</td>
                <td></td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>

  </section>

</dialog>
