---
sidebar_position: 4
---

import { BellRing, CloudSun } from 'lucide-react';

# Emergency Notification Systems

Emergency notification systems provide timely information before, during, and after emergencies. PACT members should be familiar with the primary alerting systems used within Provo, Utah County, and Brigham Young University, as these systems are often the first source of information regarding severe weather, public safety incidents, evacuations, and other emergency situations. Monitoring official notifications can improve situational awareness, support informed decision-making, and help operators anticipate potential communication activations.

---

## Provo & Utah County Notification System (Everbridge)

Everbridge is the emergency notification system designed to alert communities in Utah County about emergencies and provide critical information for a variety of situations, such as severe weather, law enforcement activity, missing persons, and evacuations of buildings or neighborhoods.

The following communities participate in this program: American Fork, Alpine, Cedar Fort, Cedar Hills, Eagle Mountain, Elk Ridge, Fairfield, Genola, Goshen, Highland, Lehi, Orem, Payson, Pleasant Grove, Provo, Salem, Santaquin, Saratoga Springs, Vineyard, Woodland Hills, and unincorporated Utah County.

For additional information, visit the [**Provo City Notification System**](https://www.provo.gov/889/Notification-System) page.

<div style={{
  display: 'flex',
justifyContent: 'center',
  margin: '1.5rem 0 2rem',
}}>
  <a
    href="https://member.everbridge.net/1332612387832225/login"
    className="button button--primary button--lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BellRing
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>Sign Up for Everbridge</span>
  </a>
</div>

---

## BYU Notification System (Y-Alert!)

Y-Alert! is the emergency notification system designed to immediately alert the BYU community of an emergency or serious threat that could affect life safety. Notifications are sent through text messages, email, and/or voice calls.

BYU students, staff, and faculty can learn more about enrolling in Y-Alert! through BYU Emergency Management.


<div style={{
  display: 'flex',
justifyContent: 'center',
  margin: '1.5rem 0 2rem',
}}>
  <a
    href="https://emergencymanagement.byu.edu/warnings-and-notifications"
    className="button button--primary button--lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <BellRing
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>Sign Up for Y-Alert!</span>
  </a>
</div>

---

## NOAA Weather Radio (NWR)

NOAA Weather Radio broadcasts continuous weather forecasts, watches, warnings, and emergency alerts from the National Weather Service. Broadcasts are available 24/7 and can be received using a compatible weather radio or scanner.

<div style={{
  background: 'var(--ifm-color-emphasis-100)',
  borderRadius: '8px',
  padding: '1rem',
  margin: '1.25rem 0',
}}>
  <strong>NOAA Weather Radio Frequencies (MHz)</strong>

  <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: '0.75rem',
  }}>
    {[
      '162.400',
      '162.425',
      '162.450',
      '162.475',
      '162.500',
      '162.525',
      '162.550',
    ].map(freq => (
      <span
        key={freq}
        style={{
          background: 'var(--ifm-background-surface-color)',
          border: '1px solid var(--ifm-color-emphasis-300)',
          borderRadius: '6px',
          padding: '0.4rem 0.65rem',
          fontSize: '0.85rem',
          fontWeight: '500',
        }}
      >
        {freq}
      </span>
    ))}
  </div>
</div>


<div style={{
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem 0 2rem',
}}>
  <a
    href="https://www.weather.gov/nwr"
    className="button button--primary button--lg"
    target="_blank"
    rel="noopener noreferrer"
  >
    <CloudSun
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>NOAA Weather Radio</span>
  </a>
</div>
