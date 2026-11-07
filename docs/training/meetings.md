---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  CalendarDays,
  Clock3,
  MapPin,
  RadioTower,
  CalendarPlus,
} from 'lucide-react';

# Interface Meetings

<div className="pact-interface-next">

  <div className="pact-interface-next-header">
    <CalendarDays
      size={20}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>NEXT INTERFACE MEETING</span>
  </div>

  <div className="pact-interface-next-body">

    <div className="pact-interface-next-date">
      <h2>November 18, 2026</h2>

      <div className="pact-interface-next-time">
        <Clock3
          size={17}
          strokeWidth={1.8}
          aria-hidden="true"
        />
        <span>7:00–8:00 PM · Mountain Time</span>
      </div>
    </div>

    <div className="pact-interface-next-grid">

      <div className="pact-interface-info-card">

        <div className="pact-interface-info-label">
          <MapPin
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>LOCATION</span>
        </div>

        <a
          href="https://www.google.com/maps/search/?api=1&query=2737%20N%20Canyon%20Road%2C%20Provo%2C%20UT"
          target="_blank"
          rel="noopener noreferrer"
        >
          Fire Station 22
        </a>

      </div>

      <div className="pact-interface-info-card">

        <div className="pact-interface-info-label">
          <RadioTower
            size={16}
            strokeWidth={2}
            aria-hidden="true"
          />
          <span>TRAINING TOPIC</span>
        </div>

        <strong>PACT Radio Trailer</strong>

      </div>

    </div>

  </div>

</div>

<div className="pact-interface-next-action">
  <a
    className="pact-primary-button"
    href={useBaseUrl('/calendar/pact-interface-november-2026.ics')}
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

PACT Interface Meetings are quarterly gatherings used to share team updates, review upcoming exercises, provide training, and strengthen coordination among PACT members.

Meetings are open to all and attendance is strongly encouraged for PACT members.

We look forward to seeing you at our next Interface Meeting.

---

## 2027 Interface Meeting Schedule

<div className="pact-interface-schedule">

  <div className="pact-interface-schedule-time">
    <Clock3
      size={17}
      strokeWidth={1.8}
      aria-hidden="true"
    />
    <span>All meetings: 7:00–8:00 PM (Mountain Time)</span>
  </div>

  <div className="pact-interface-table-scroll">

    <table className="pact-interface-table">

      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Training Topic</th>
          <th className="pact-interface-calendar-column">Calendar</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>February 17</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2737%20N%20Canyon%20Road%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fire Station 22
            </a>
          </td>
          <td>TBD</td>
          <td className="pact-interface-calendar-column">
            <span className="pact-interface-calendar-unavailable">—</span>
          </td>
        </tr>

        <tr>
          <td>May 12</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=522%20E%203900%20N%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quail Orchard Park
            </a>
          </td>
          <td>TBD</td>
          <td className="pact-interface-calendar-column">
            <span className="pact-interface-calendar-unavailable">—</span>
          </td>
        </tr>

        <tr>
          <td>August 11</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=522%20E%203900%20N%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quail Orchard Park
            </a>
          </td>
          <td>TBD</td>
          <td className="pact-interface-calendar-column">
            <span className="pact-interface-calendar-unavailable">—</span>
          </td>
        </tr>

        <tr>
          <td>November 17</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2737%20N%20Canyon%20Road%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fire Station 22
            </a>
          </td>
          <td>TBD</td>
          <td className="pact-interface-calendar-column">
            <span className="pact-interface-calendar-unavailable">—</span>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</div>

## 2026 Interface Meeting Schedule

<div className="pact-interface-schedule">

  <div className="pact-interface-schedule-time">
    <Clock3
      size={17}
      strokeWidth={1.8}
      aria-hidden="true"
    />
    <span>All meetings: 7:00–8:00 PM (Mountain Time)</span>
  </div>

  <div className="pact-interface-table-scroll">

    <table className="pact-interface-table">

      <thead>
        <tr>
          <th>Date</th>
          <th>Location</th>
          <th>Training Topic</th>
          <th className="pact-interface-calendar-column">Calendar</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>February 17</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2737%20N%20Canyon%20Road%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fire Station 22
            </a>
          </td>
          <td>PACT Communication Plan</td>
          <td className="pact-interface-calendar-column">
            <a
              className="pact-interface-calendar-link"
              href={useBaseUrl('/calendar/pact-interface-february-2026.ics')}
              download
              aria-label="Add February 17, 2026 Interface Meeting to calendar"
            >
              <CalendarPlus
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>Add</span>
            </a>
          </td>
        </tr>

        <tr>
          <td>May 27</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=522%20E%203900%20N%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quail Orchard Park
            </a>
          </td>
          <td>Portable Radios / Go Kits</td>
          <td className="pact-interface-calendar-column">
            <a
              className="pact-interface-calendar-link"
              href={useBaseUrl('/calendar/pact-interface-may-2026.ics')}
              download
              aria-label="Add May 27, 2026 Interface Meeting to calendar"
            >
              <CalendarPlus
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>Add</span>
            </a>
          </td>
        </tr>

        <tr>
          <td>August 11</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=522%20E%203900%20N%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Quail Orchard Park
            </a>
          </td>
          <td>Portable Radios Part 2</td>
          <td className="pact-interface-calendar-column">
            <a
              className="pact-interface-calendar-link"
              href={useBaseUrl('/calendar/pact-interface-august-2026.ics')}
              download
              aria-label="Add August 11, 2026 Interface Meeting to calendar"
            >
              <CalendarPlus
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>Add</span>
            </a>
          </td>
        </tr>

        <tr>
          <td>November 18</td>
          <td>
            <a
              href="https://www.google.com/maps/search/?api=1&query=2737%20N%20Canyon%20Road%2C%20Provo%2C%20UT"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fire Station 22
            </a>
          </td>
          <td>PACT Radio Trailer</td>
          <td className="pact-interface-calendar-column">
            <a
              className="pact-interface-calendar-link"
              href={useBaseUrl('/calendar/pact-interface-november-2026.ics')}
              download
              aria-label="Add November 18, 2026 Interface Meeting to calendar"
            >
              <CalendarPlus
                size={17}
                strokeWidth={2}
                aria-hidden="true"
              />
              <span>Add</span>
            </a>
          </td>
        </tr>

      </tbody>

    </table>

  </div>

</div>


