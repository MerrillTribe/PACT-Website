---
sidebar_position: 4
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  Mail,
  RadioTower,
  ChevronDown,
} from 'lucide-react';

# Leadership Team

The PACT leadership team coordinates volunteer emergency communications, training, and public service activities in support of Provo City. Meet the people responsible for keeping the team organized and ready to serve.


<div className="pact-leadership-chart">
  <img
    src={useBaseUrl('/img/leadership.png')}
    alt="PACT Leadership Team Organizational Chart"
    loading="lazy"
    style={{
      width: '75%',
      height: 'auto',
      margin: '0 auto',
    }}
  />
</div>

<div className="pact-leadership-contact">
  <p>
    Have a question about PACT? Email us at <a href="mailto:provoauxcomm@gmail.com">**provoauxcomm@gmail.com**</a>.
  </p>

  <a
    className="pact-primary-button"
    href="mailto:provoauxcomm@gmail.com"
  >
    <Mail
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>CONTACT LEADERSHIP TEAM</span>
  </a>
</div>

---

## Meet the Team

Each card highlights a leadership role and the person serving in it. Select **Read Biography** to learn more.

export const leadershipMembers = [
  {
    id: 'chris-blinzinger',
    name: 'Chris Blinzinger',
    role: 'Provo City Emergency Manager',
    callsign: 'KM7GCR',
    license: 'General',
    description: 'Leads PACT operations and coordination with city officials.',
    bio: 'Chris Blinzinger is the Emergency Manager for Provo City. He has held this position since 2010 and has been involved in emergency response for over 20 years. As a volunteer firefighter and EMT in Colorado, he responded for the county ambulance service and local fire protection district.',
portrait: null,
  },
  {
    id: 'elizabeth-feil',
    name: 'Elizabeth Feil',
    role: 'Team Coordinator',
    callsign: 'KK7IUS',
    license: 'Technician',
    description: 'Coordinates PACT leadership and team operations.',
    bio: 'Elizabeth Feil is a Licensed Clinical Social Worker and has been working as a therapist at Wasatch Mental Health since 2002, where she is currently the Division Director over Clinical and Community Services. She has been an amateur radio operator since 2022. She enjoys reading, musical theater (audience, not performer), exploring nature, and being the favorite aunt to 10 nieces and nephews.',
portrait: null,
  },
  {
    id: 'paul-urie',
    name: 'Paul Urie',
    role: 'Net Manager',
    callsign: 'N7QOC',
    license: 'Amateur Extra',
    description: 'Manages net operations and communications protocols.',
    bio: 'Paul is a retired pathologist who specialized in anatomic and clinical pathology. He received his medical degree from the University of Utah School of Medicine and practiced medicine for more than 45 years.',
portrait: null,
  },
  {
    id: 'henry-wright',
    name: 'Henry Wright',
    role: 'Assistant Net Manager',
    callsign: 'KK7LBK',
    license: 'General',
    description: 'Supports net operations and assists during activations.',
    bio: 'Biography coming soon.',
portrait: null,
  },
  {
    id: 'samuel-merrill',
    name: 'Samuel Merrill',
    role: 'Membership Coordinator',
    callsign: 'K3BYU / WSGN400',
    license: 'General',
    description: 'Oversees PACT member onboarding and engagement.',
    bio: 'Samuel has been a part of amateur radio since 2023. He joined PACT in 2025.',
portrait: null,
  },
  {
    id: 'dave-knecht',
    name: 'Dave Knecht',
    role: 'Assistant Membership Coordinator',
    callsign: 'KF7RJO',
    license: 'Technician',
    description: 'Assists with PACT member onboarding and engagement.',
    bio: 'Dave served as a city council member for Provo from 2002–2006. During that time, he was both the chair and vice-chair of the council.',
portrait: null,
  },
  {
    id: 'andrew-mulkern',
    name: 'Andrew Mulkern',
    role: 'Interface Coordinator',
    callsign: 'KK7RXQ',
    license: 'Amateur Extra',
    description: 'Plans and coordinates quarterly interface meetings.',
    bio: 'Andrew has been an amateur radio operator for two years and holds an Amateur Extra license. Andrew is a certified EMT and volunteers for ICS drills with UVU EMS.',
portrait: null,
  },
  {
    id: 'gavin-grow',
    name: 'Gavin Grow',
    role: 'ECS Team Representative',
    callsign: 'K9GKG',
    license: 'Technician',
    description: 'Coordinates with Emergency Communications Services.',
    bio: 'Gavin currently works as a special education teacher for the Provo School District. Gavin is currently the President of the ECS Team.',
portrait: null,
  },
];

<div className="pact-leadership-grid">
  {leadershipMembers.map((member) => (
    <article
      className="pact-leadership-card"
      key={member.id}
    >

      {/* =====================================
          NAVY HEADER — LEADERSHIP ROLE
          ===================================== */}

      <div className="pact-leadership-card__brand">
        <span>{member.role}</span>
      </div>

      {/* =====================================
          PORTRAIT AND RED PACT RIBBON
          ===================================== */}

      <div className="pact-leadership-card__visual">

        <div className="pact-leadership-card__portrait">
          {member.portrait ? (
            <img
              src={useBaseUrl(member.portrait)}
              alt={`Illustration of ${member.name}`}
              loading="lazy"
            />
          ) : (
            <div
              className="pact-leadership-card__placeholder"
              aria-label="Portrait coming soon"
            >
              <RadioTower
                size={48}
                strokeWidth={1.25}
                aria-hidden="true"
              />
              <span>PORTRAIT COMING SOON</span>
            </div>
          )}
        </div>

        {/* Red vertical ribbon */}


{/* Red vertical PACT ribbon */}

<div className="pact-leadership-card__role" aria-label="PACT">
  <div
    className="pact-leadership-card__letters"
    aria-hidden="true"
  >
    <span>P</span>
    <span>A</span>
    <span>C</span>
    <span>T</span>
  </div>
</div>

        {/* Overlapping circular PACT logo */}

<img
  src={useBaseUrl('/img/pact_logo_transparent.png')}
  alt="PACT Logo"
  className="pact-leadership-card__badge"
/>

      </div>

      {/* =====================================
          MEMBER INFORMATION
          ===================================== */}

      <div className="pact-leadership-card__information">

        <h3>{member.name}</h3>

        <p className="pact-leadership-card__callsign">
          {member.callsign}
        </p>

        <p className="pact-leadership-card__description">
          {member.description}
        </p>

      </div>

      {/* =====================================
          EXPANDABLE BIOGRAPHY
          ===================================== */}

      <details className="pact-leadership-card__details">

        <summary>
          <span>READ BIOGRAPHY</span>
          <ChevronDown
            size={17}
            aria-hidden="true"
          />
        </summary>

        <div className="pact-leadership-card__biography">

          <p>{member.bio}</p>

          <p className="pact-leadership-card__license">
            <strong>License class:</strong> {member.license}
          </p>

        </div>

      </details>

    </article>
  ))}
</div>
