---
title: Radio Services
sidebar_position: 4
---
 
import React from 'react';
 
import {
  BriefcaseBusiness,
  RadioTower,
  Ship,
  Plane,
  TrainFront,
  TreePine,
  ExternalLink,
} from 'lucide-react';
 
There are many different types of radios, each designed for specific uses, such as talking with family, coordinating work, or communicating during emergencies. In the United States, the Federal Communications Commission (FCC) sets rules for how these radios can be used, including which frequencies are allowed and whether a license is required.
 
This guide explains the most common radio services, what they are used for, and their frequencies. **Remember, just because you can listen to a frequency does not mean you are allowed to transmit on it.**
 
## Radio Services
 
<div className="radio-services-license-guide">
  <strong>Understanding Radio Licenses:</strong> Some radio services can be
  used without a personal FCC license, while others require one. Certain
  services are limited to authorized users or organizations. Regardless
  of licensing requirements, you must use equipment and frequencies
  permitted for that service.
</div>
 
export const radioServices = [
  {
    id: 'frs',
    name: 'Family Radio Service',
    icon: 'FRS',
    subtitle: '462–467 MHz · UHF',
    license: 'No Individual License',
    facts: [
      ['Channels', '22'],
      ['Maximum Power', '2 W ERP'],
      ['Repeaters', 'Not permitted']
    ],
    description: 'Family Radio Service (FRS) provides short-range communication for families, outdoor activities, and small groups. It uses 22 shared channels and does not require an individual FCC license. FRS radios have built-in antennas and cannot use repeaters.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-B',
    linkLabel: 'FCC Service Rules',
    groups: [{
      title: 'FRS Frequency Table',
      columns: ['CH', 'Frequency (MHz)', 'Max ERP'],
      rows: [
        ['1','462.5625','2 W'],
        ['2','462.5875','2 W'],
        ['3','462.6125','2 W'],
        ['4','462.6375','2 W'],
        ['5','462.6625','2 W'],
        ['6','462.6875','2 W'],
        ['7','462.7125','2 W'],
        ['8','467.5625','0.5 W'],
        ['9','467.5875','0.5 W'],
        ['10','467.6125','0.5 W'],
        ['11','467.6375','0.5 W'],
        ['12','467.6625','0.5 W'],
        ['13','467.6875','0.5 W'],
        ['14','467.7125','0.5 W'],
        ['15','462.5500','2 W'],
        ['16','462.5750','2 W'],
        ['17','462.6000','2 W'],
        ['18','462.6250','2 W'],
        ['19','462.6500','2 W'],
        ['20','462.6750','2 W'],
        ['21','462.7000','2 W'],
        ['22','462.7250','2 W']
      ]
    }],
    note: 'FRS channels 8–14 are limited to 0.5 W ERP; all other channels are limited to 2 W ERP. Use compliant, certified FRS radios with integral antennas.'
  },
  {
    id: 'murs',
    name: 'Multi-Use Radio Service',
    icon: 'MURS',
    subtitle: '151–154 MHz · VHF',
    license: 'No Individual License',
    facts: [
      ['Channels', '5'],
      ['Maximum Power', '2 W Output'],
      ['Repeaters', 'Not permitted']
    ],
    description: 'Multi-Use Radio Service (MURS) provides short-range communication for personal, recreational, and business activities. It uses five VHF channels and does not require an individual FCC license. External antennas are permitted, but repeaters are not allowed.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-J',
    linkLabel: 'FCC Service Rules',
    groups: [{
      title: 'MURS Frequency Table',
      columns: ['CH', 'Frequency (MHz)', 'Max Output'],
      rows: [
        ['1','151.8200','2 W'],
        ['2','151.8800','2 W'],
        ['3','151.9400','2 W'],
        ['4','154.5700','2 W'],
        ['5','154.6000','2 W']
      ]
    }],
    note: 'MURS maximum transmitter output power is 2 W. Repeaters and telephone interconnection are prohibited.'
  },
  {
    id: 'cb',
    name: 'Citizens Band Radio',
    icon: 'CB',
    subtitle: '26.965–27.405 MHz · HF',
    license: 'No Individual License',
    facts: [
      ['Channels', '40'],
      ['Maximum Power', '4 W AM/FM · 12 W SSB'],
      ['Repeaters', 'Not permitted']
    ],
    description: 'Citizens Band (CB) radio provides communication for travelers, truck drivers, outdoor enthusiasts, and businesses. It uses 40 shared channels and does not require an individual FCC license. CB radios support AM, FM, and single-sideband communication without repeaters.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-D',
    linkLabel: 'FCC Service Rules',
    groups: [{
      title: 'CB Frequency Table',
      columns: ['CH', 'Frequency (MHz)', 'CH', 'Frequency (MHz)'],
      rows: [
        ['1','26.9650','21','27.2150'],
        ['2','26.9750','22','27.2250'],
        ['3','26.9850','23','27.2550'],
        ['4','27.0050','24','27.2350'],
        ['5','27.0150','25','27.2450'],
        ['6','27.0250','26','27.2650'],
        ['7','27.0350','27','27.2750'],
        ['8','27.0550','28','27.2850'],
        ['9','27.0650','29','27.2950'],
        ['10','27.0750','30','27.3050'],
        ['11','27.0850','31','27.3150'],
        ['12','27.1050','32','27.3250'],
        ['13','27.1150','33','27.3350'],
        ['14','27.1250','34','27.3450'],
        ['15','27.1350','35','27.3550'],
        ['16','27.1550','36','27.3650'],
        ['17','27.1650','37','27.3750'],
        ['18','27.1750','38','27.3850'],
        ['19','27.1850','39','27.3950'],
        ['20','27.2050','40','27.4050']
      ]
    }],
    note: 'Maximum CB transmitter power is 4 W carrier for AM, 4 W for FM, or 12 W peak envelope power for SSB. External RF power amplifiers and repeaters are prohibited.'
  },
  {
    id: 'gmrs',
    name: 'General Mobile Radio Service',
    icon: 'GMRS',
    subtitle: '462–467 MHz · UHF',
    license: 'FCC License Required',
    facts: [
      ['Channels', '22 + 8 repeater pairs'],
      ['Maximum Power', 'Up to 50 W Output'],
      ['Repeaters', 'Permitted']
    ],
    description: 'General Mobile Radio Service (GMRS) provides personal and family communications using handheld radios, mobile radios, and repeaters. An FCC license is required and generally covers eligible immediate family members. GMRS shares channels with FRS but permits higher-power equipment and repeaters for extended coverage.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-E',
    linkLabel: 'FCC Service Rules',
    groups: [{
      title: 'GMRS Frequency Table',
      columns: [
        'CH',
        'Simplex / Repeater Output (MHz)',
        'Repeater Input (MHz)',
        'Max Power'
      ],
      rows: [
        ['1','462.5625','—','5 W ERP'],
        ['2','462.5875','—','5 W ERP'],
        ['3','462.6125','—','5 W ERP'],
        ['4','462.6375','—','5 W ERP'],
        ['5','462.6625','—','5 W ERP'],
        ['6','462.6875','—','5 W ERP'],
        ['7','462.7125','—','5 W ERP'],
        ['8','467.5625','—','0.5 W ERP'],
        ['9','467.5875','—','0.5 W ERP'],
        ['10','467.6125','—','0.5 W ERP'],
        ['11','467.6375','—','0.5 W ERP'],
        ['12','467.6625','—','0.5 W ERP'],
        ['13','467.6875','—','0.5 W ERP'],
        ['14','467.7125','—','0.5 W ERP'],
        ['15','462.5500','467.5500','Up to 50 W'],
        ['16','462.5750','467.5750','Up to 50 W'],
        ['17','462.6000','467.6000','Up to 50 W'],
        ['18','462.6250','467.6250','Up to 50 W'],
        ['19','462.6500','467.6500','Up to 50 W'],
        ['20','462.6750','467.6750','Up to 50 W'],
        ['21','462.7000','467.7000','Up to 50 W'],
        ['22','462.7250','467.7250','Up to 50 W']
      ]
    }],
    note: 'GMRS channels 1–7 are limited to 5 W ERP. Channels 8–14 are limited to 0.5 W ERP and handheld operation. Up to 50 W transmitter output is allowed on eligible main channels for certain station types; fixed stations are limited to 15 W. Repeater input frequencies are 5 MHz above output frequencies.'
  },
  {
    id: 'business',
    name: 'Business Band',
    icon: 'Business',
    subtitle: 'Commercial Land Mobile Radio · FCC Part 90',
    license: 'FCC License Required',
    facts: [],
    description: 'Business radio systems provide communication for companies, organizations, transportation services, and commercial operations. They allow employees to coordinate daily activities using frequencies authorized for their organization. FCC licensing requirements, equipment, and operating privileges depend on the specific system.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-90',
    linkLabel: 'FCC Part 90 Rules',
    groups: []
  },
 
 
{
  id: 'amateur',
  name: 'Amateur Radio',
  icon: 'HAM',
  subtitle: 'Multiple HF, VHF, UHF and microwave bands',
  license: 'FCC License Required',
  facts: [],
  description: 'Amateur radio allows licensed operators to communicate locally, across the country, and around the world. It is used for personal communication, technical experimentation, education, and volunteer public service, including emergency communications. Available frequencies and operating privileges depend on the operator’s FCC license class.',
  link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-97',
  linkLabel: 'FCC Service Rules',
  frequencyLink: '/docs/resources/band-plans',
  groups: [],
  note: ''
},
 
 
{
  id: 'lora',
  name: 'LoRa / Mesh Communications',
  icon: 'LoRa',
  subtitle: 'Low-power digital communications · 902–928 MHz',
  license: 'Configuration Dependent',
  facts: [],
 
  description: 'LoRa is a low-power radio technology used to send text messages, location information, and other small amounts of data over long distances. Systems such as Meshtastic and MeshCore use LoRa to communicate without cellular service or internet access. Although they can use similar equipment, they operate as separate networks with different messaging and routing methods.',
 
  link: '',
  linkLabel: '',
 
  groups: [
    {
      title: 'Meshtastic Frequency Examples (United States)',
      columns: ['Configuration', 'Frequency', 'Description'],
      rows: [
        [
          'LongFast · Slot 20',
          '906.875 MHz',
          'Common Meshtastic configuration'
        ],
        [
          'LongTurbo · Slot 14',
          '908.750 MHz',
          'Meshtastic configuration'
        ],
        [
          'ISM Band',
          '902–928 MHz',
          'U.S. frequency range for compatible devices'
        ]
      ]
    }
  ],
 
  note: 'LoRa is a radio technology, not a separate FCC radio service. The frequencies shown are Meshtastic examples and do not necessarily apply to MeshCore. Devices must use compatible radio settings to communicate. Meshtastic and MeshCore cannot directly exchange messages simply because they use the same LoRa hardware. All equipment and configurations must comply with applicable FCC regulations.'
},
 
  {
    id: 'marine',
    name: 'Marine Radio',
    icon: 'Marine',
    subtitle: '156–162 MHz · Marine VHF',
    license: 'Authorization Varies',
    facts: [],
    description: 'Marine radio provides communication between boats, ships, coastal stations, and maritime authorities. It is used for navigation, vessel coordination, safety information, and emergency communications. Marine VHF Channel 16 is the international distress, safety, and calling channel.',
    link: 'https://www.navcen.uscg.gov/us-vhf-channel-information',
    linkLabel: 'USCG Channel Information',
    groups: [
      {
        title: 'Marine VHF Channels',
        columns: ['Channel', 'Frequency', 'Usage'],
        rows: [
          ['06','156.300 MHz','Intership safety'],
          ['09','156.450 MHz','Recreational calling'],
          ['13','156.650 MHz','Bridge-to-bridge navigation'],
          ['16','156.800 MHz','Distress, safety, and calling'],
          ['21A / 1021','157.050 MHz','U.S. Coast Guard liaison'],
          ['22A / 1022','157.100 MHz','Coast Guard information / safety'],
          ['68','156.425 MHz','Noncommercial communications'],
          ['69','156.475 MHz','Noncommercial communications'],
          ['71','156.575 MHz','Recreational communications'],
          ['72','156.625 MHz','Ship-to-ship communications'],
          ['78A / 1078','156.925 MHz','Noncommercial communications'],
          ['80A / 1080','157.025 MHz','Commercial / port use; verify'],
          ['81A / 1081','157.075 MHz','Government / restricted use'],
          ['82A / 1082','157.125 MHz','Government / restricted use'],
          ['83A / 1083','157.175 MHz','U.S. Coast Guard operations']
        ]
      }
    ],
    note: 'Marine channel numbering and permitted uses depend on jurisdiction; four-digit designations increasingly replace A suffixes.'
  },
     
 
{
  id: 'aviation',
  name: 'Aviation Radio',
  icon: 'Aviation',
  subtitle: '118–137 MHz · VHF Airband',
  license: 'Restricted / Authorized Use',
  facts: [],
 
  description: 'Aviation radio provides communication between pilots, air traffic controllers, and airport personnel. It is used to coordinate aircraft movements, manage air traffic, share weather information, and support emergency communications. Most civilian aviation voice communications use AM radio in the VHF airband.',
 
  link: 'https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/',
  linkLabel: 'FAA Chart Supplement',
 
  groups: [
    {
      title: 'Utah Airports & Air Traffic Control',
      columns: ['Airport / Facility', 'Frequency', 'Usage'],
      rows: [
        ['Provo (PVU)', '125.300 MHz', 'Tower / CTAF'],
        ['Provo (PVU)', '119.400 MHz', 'Ground'],
        ['Provo (PVU)', '135.175 MHz', 'ATIS / AWOS'],
        ['Provo Area', '118.850 MHz', 'Salt Lake Approach / Departure'],
 
        ['Salt Lake Intl (SLC)', '118.300 MHz', 'Tower — selected runways'],
        ['Salt Lake Intl (SLC)', '119.050 MHz', 'Tower — selected runway'],
        ['Salt Lake Intl (SLC)', '132.650 MHz', 'Tower — selected runway'],
        ['Salt Lake Intl (SLC)', '121.900 MHz', 'Ground — selected runways'],
        ['Salt Lake Intl (SLC)', '123.775 MHz', 'Ground — selected runways'],
        ['Salt Lake Intl (SLC)', '124.750 MHz', 'D-ATIS'],
        ['Salt Lake Intl (SLC)', '125.625 MHz', 'D-ATIS / weather'],
 
        ['Ogden-Hinckley (OGD)', '118.700 MHz', 'Tower / CTAF'],
        ['Ogden-Hinckley (OGD)', '121.700 MHz', 'Ground'],
        ['Ogden-Hinckley (OGD)', '125.550 MHz', 'ATIS'],
 
        ['Spanish Fork (SPK)', '122.900 MHz', 'CTAF'],
        ['Spanish Fork (SPK)', '119.275 MHz', 'AWOS'],
 
        ['Heber Valley (HCR)', '122.800 MHz', 'CTAF / UNICOM'],
        ['Heber Valley (HCR)', '124.825 MHz', 'AWOS'],
 
        ['Skypark (BTF)', '122.800 MHz', 'CTAF / UNICOM'],
 
        ['Cedar City (CDC)', '123.000 MHz', 'CTAF / UNICOM'],
        ['Cedar City (CDC)', '119.025 MHz', 'ASOS'],
 
        ['St. George (SGU)', '123.075 MHz', 'CTAF / UNICOM'],
        ['St. George (SGU)', '135.075 MHz', 'AWOS'],
 
        ['Canyonlands Regional (CNY)', '122.800 MHz', 'CTAF / UNICOM'],
        ['Canyonlands Regional (CNY)', '118.525 MHz', 'ASOS']
      ]
    },
 
    {
      title: 'Aviation Emergency & Search-and-Rescue Frequencies',
      columns: ['Frequency', 'Service', 'Usage'],
      rows: [
        ['121.500 MHz', 'Civil Aviation', 'Emergency / Guard'],
        ['243.000 MHz', 'Military Aviation', 'Emergency / Guard'],
        ['123.100 MHz', 'Aviation', 'Search-and-rescue communications']
      ]
    },
 
    {
      title: 'Emergency Locator Transmitters (ELTs)',
      columns: ['Frequency', 'Type', 'Usage'],
      rows: [
        ['121.500 MHz', 'Analog ELT', 'Emergency beacon / local homing'],
        ['243.000 MHz', 'Analog ELT', 'Military emergency beacon / homing'],
        ['406 MHz band', 'Digital ELT', 'Satellite distress alerting through Cospas-Sarsat']
      ]
    }
  ],
 
  note: 'Airport frequencies are based on FAA aeronautical information and may change. Tower, ground, approach, and other services may use different frequencies depending on location, runway, operating hours, and air traffic control instructions. Consult current FAA publications and NOTAMs before operational use. Air-medical dispatch, Civil Air Patrol, and other specialized agency frequencies are not included because their current Utah assignments have not been independently confirmed. This reference does not authorize transmission.'
},
 
 
{
  id: 'railroad',
  name: 'Railroad Radio',
  icon: 'Railroad',
  subtitle: '160–162 MHz · VHF',
  license: 'Restricted / Authorized Use',
  facts: [],
 
  description: 'Railroad radio provides communication between train crews, dispatchers, and yard personnel. It is used to coordinate train movements, switching operations, track maintenance, and railroad safety. In Utah Valley, Union Pacific and other railroad operations use standardized AAR radio channels.',
 
  link: 'https://utahcenteredrail.com/guides/subs/provosub.html',
  linkLabel: 'Provo Railroad Reference',
 
  groups: [
    {
      title: 'Utah Valley Railroad Frequencies',
      columns: ['AAR Channel', 'Frequency', 'Reported Usage'],
      rows: [
        ['23', '160.455 MHz', 'UP Provo Subdivision — Helper to Ironton'],
        ['42', '160.740 MHz', 'UP — Ironton to Midvale / Provo to Lynndyl'],
        ['12', '160.290 MHz', 'UP Provo Yard — yardmaster / switching'],
        ['09', '160.245 MHz', 'UP Provo Yard — switching'],
        ['54', '160.920 MHz', 'UP Provo Yard — switching'],
        ['44', '160.770 MHz', 'Utah Railway — switching'],
        ['68', '161.130 MHz', 'UP Provo Yard — switching'],
        ['69', '161.145 MHz', 'Utah Railway — Provo Yard switching'],
        ['79', '161.295 MHz', 'Utah Railway — Provo Yard switching'],
        ['89', '161.445 MHz', 'UP Provo Yard — switching'],
        ['92', '161.490 MHz', 'UP Roper Yard / regional reference']
      ]
    }
  ],
 
  note: 'These frequencies are based on published railroad-monitoring references, including the Utah Centered Rail Provo Subdivision guide (2019). Actual assignments and operating practices may change. Railroad channels are provided for monitoring and situational awareness only. Transmission requires appropriate railroad authorization.'
},
 
  {
    id: 'calling',
    name: 'Calling & Monitoring Frequencies',
    icon: 'Calling',
    subtitle: 'Amateur radio and other services',
    license: 'Authorization Varies',
    facts: [],
    description: 'Calling and monitoring frequencies are commonly used by radio operators to establish contact or listen for activity. They include amateur radio calling channels, APRS data frequencies, and informal calling conventions used by other radio services. Not every frequency is officially designated for national calling.',
    link: 'https://www.arrl.org/band-plan',
    linkLabel: 'ARRL Band Plan',
    groups: [{
      title: 'National Calling and Monitoring Reference',
      columns: ['Band', 'Frequency', 'Mode', 'Usage'],
      rows: [
        ['160 m','1.910 MHz','SSB','Activity / calling reference'],
        ['80 m','3.860 MHz','SSB','Activity / calling reference'],
        ['40 m','7.290 MHz','SSB','Activity / calling reference'],
        ['20 m','14.300 MHz','USB','Maritime Mobile Service Net'],
        ['17 m','18.160 MHz','USB','Activity / calling reference'],
        ['15 m','21.360 MHz','USB','Activity / calling reference'],
        ['12 m','24.950 MHz','USB','Activity / calling reference'],
        ['10 m','28.400 MHz','USB','Calling / activity'],
        ['6 m','50.125 MHz','USB','SSB calling'],
        ['2 m','146.520 MHz','FM simplex','National simplex calling'],
        ['2 m','144.390 MHz','APRS','North American APRS data'],
        ['1.25 m','223.500 MHz','FM simplex','Calling'],
        ['70 cm','446.000 MHz','FM simplex','National simplex calling'],
        ['GMRS','462.675 MHz','FM','Informal calling convention'],
        ['MURS','151.940 MHz','FM','Informal calling convention']
      ]
    }],
    note: 'Calling conventions vary by band, region, mode, and license privileges. APRS 144.390 MHz is a data frequency, not a voice calling channel.'
  },
  {
    id: 'wilderness',
    name: 'Wilderness Protocol',
    icon: 'Wilderness',
    subtitle: 'Amateur emergency monitoring practice',
    license: 'FCC License Required',
    facts: [],
    description: 'The Wilderness Protocol is an amateur radio practice intended to improve the chances of making contact in remote areas. Operators are encouraged to periodically monitor established calling frequencies for stations needing assistance. Participation is voluntary and does not guarantee that someone will be listening during an emergency.',
    link: 'https://www.arrl.org/files/file/Public%20Service/ARES/ARESFieldResourcesManual-2019.pdf',
    linkLabel: 'ARRL Field Resources Manual',
    groups: [
      {
        title: 'Amateur Monitoring Frequencies',
        columns: ['Frequency', 'Band', 'Mode', 'Usage'],
        rows: [
          ['146.520 MHz','2 meters','FM simplex','Primary amateur monitoring / calling'],
          ['446.000 MHz','70 centimeters','FM simplex','UHF calling / monitoring'],
          ['52.525 MHz','6 meters','FM simplex','FM calling'],
          ['223.500 MHz','1.25 meters','FM simplex','Calling / monitoring']
        ]
      },
      {
        title: 'Other Services — Separate Distress Channels',
        columns: ['Frequency', 'Service', 'Usage'],
        rows: [
          ['121.500 MHz','Aviation','Emergency / Guard'],
          ['156.800 MHz','Marine VHF','Channel 16 distress / calling']
        ]
      }
    ],
    note: 'Aviation and marine entries are separate service references, not Wilderness Protocol amateur channels. Transmitting on them requires applicable authority except where emergency rules provide otherwise.'
  }
];
 
export const radioServiceCategories = [
  {
    id: 'personal',
    title: 'Personal & Community Communications',
    services: ['frs', 'gmrs', 'murs', 'cb', 'lora', 'amateur']
  },
  {
    id: 'commercial',
    title: 'Commercial & Transportation',
    services: ['business', 'marine', 'aviation', 'railroad']
  },
  {
    id: 'monitoring',
    title: 'Calling & Monitoring',
    services: ['calling', 'wilderness']
  }
];
 
{/* =========================================
    RADIO SERVICE CARD RENDERER
    ========================================= */}
 
{radioServiceCategories.map((category) => (
  <section
    key={category.id}
    className="radio-services-category"
    aria-labelledby={`radio-services-category-${category.id}`}
  >
    <h2 id={`radio-services-category-${category.id}`}>
      {category.title}
    </h2>
 
    <div className="radio-services-category__cards">
      {radioServices
        .filter((service) => category.services.includes(service.id))
        .map((service) => (
          <React.Fragment key={service.id}>
          <div
            key={service.id}
            className={`radio-service-card radio-service-card--${service.id}`}
          >
            <div className="radio-service-card__heading">
              <div className="radio-service-card__identity">
                <div
                  className={`radio-service-card__monogram ${
                    [
                      'business',
                      'marine',
                      'aviation',
                      'railroad',
                      'calling',
                      'wilderness'
                    ].includes(service.id)
                      ? 'radio-service-card__monogram--icon'
                      : ''
                  }`}
                  aria-hidden="true"
                >
                  {service.id === 'business' ? (
                    <BriefcaseBusiness size={25} strokeWidth={1.8} />
                  ) : service.id === 'marine' ? (
                    <Ship size={25} strokeWidth={1.8} />
                  ) : service.id === 'aviation' ? (
                    <Plane size={25} strokeWidth={1.8} />
                  ) : service.id === 'railroad' ? (
                    <TrainFront size={25} strokeWidth={1.8} />
                  ) : service.id === 'calling' ? (
                    <RadioTower size={25} strokeWidth={1.8} />
                  ) : service.id === 'wilderness' ? (
                    <TreePine size={25} strokeWidth={1.8} />
                  ) : (
                    service.icon
                  )}
                </div>
 
                <div className="radio-service-card__text">
                  <h3
                    id={`radio-service-${service.id}`}
                    className="radio-service-card__title"
                  >
                    {service.name}
                  </h3>
 
                  <span className="radio-service-card__subtitle">
                    {service.subtitle}
                  </span>
                </div>
              </div>
 
              <span className="radio-service-card__license">
                {service.license}
              </span>
            </div>
 
            {service.facts.length > 0 && (
              <div className="radio-service-card__facts">
                {service.facts.map(([label, value], index) => (
                  <div
                    className="radio-service-card__fact"
                    key={`${service.id}-${index}`}
                  >
                    <span className="radio-service-card__fact-label">
                      {label}
                    </span>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>
            )}
 
            <p className="radio-service-card__description">
              {service.description}
            </p>
 
            <div className="radio-service-card__actions">
              {service.link && (
                <a
                  className="radio-service-card__rules"
                  href={service.link}
                  target={service.link.startsWith('/') ? undefined : '_blank'}
                  rel={service.link.startsWith('/') ? undefined : 'noopener noreferrer'}
                >
                  {service.linkLabel}
                </a>
              )}
             
 
{service.frequencyLink || service.groups.length > 0 ? (
  <button
    type="button"
    className="radio-frequency-button"
    onClick={() => {
      if (service.frequencyLink) {
        window.location.href = service.frequencyLink;
      } else {
        const modal = document.getElementById(
          `radio-frequency-${service.id}`
        );
 
        if (modal && !modal.open) {
          modal.showModal();
        }
      }
    }}
  >
    {service.id === 'lora' ? 'Meshtastic Frequencies' : 'View Frequencies'}
  </button>
) : null}
 
            </div>
 
            {service.groups.length > 0 && (
              <dialog
                id={`radio-frequency-${service.id}`}
                className="radio-frequency-modal"
                aria-modal="true"
                aria-labelledby={`radio-modal-title-${service.id}`}
              >
                <div className="radio-frequency-modal__header">
                  <h3
                    id={`radio-modal-title-${service.id}`}
                    className="radio-frequency-modal__title"
                  >
                    {service.name} Frequencies
                  </h3>
 
                  <form method="dialog">
                    <button
                      type="submit"
                      className="radio-frequency-modal__close"
                      aria-label="Close frequency table"
                    >
                      ×
                    </button>
                  </form>
                </div>
 
                <div className="radio-frequency-modal__body">
                  {service.groups.map((group, groupIndex) => (
                    <section
                      className="radio-frequency-modal__group"
                      key={`${service.id}-group-${groupIndex}`}
                    >
                      <h4 className="radio-frequency-modal__group-title">
                        {group.title}
                      </h4>
 
                      <div className="radio-frequency-modal__table-scroll">
                        <table className="radio-service-card__table" aria-label={`${service.name}: ${group.title}`}>
                          <thead>
                            <tr>
                              {group.columns.map((column, index) => (
                                <th
                                  scope="col"
                                  key={`${service.id}-column-${groupIndex}-${index}`}
                                >
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
 
                          <tbody>
                            {group.rows.map((cells, rowIndex) => (
                              <tr
                                key={`${service.id}-row-${groupIndex}-${rowIndex}`}
                              >
                                {cells.map((cell, cellIndex) => (
                                  <td
                                    key={`${service.id}-cell-${groupIndex}-${rowIndex}-${cellIndex}`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  ))}
 
                  {service.note && (
                    <p className="radio-frequency-modal__note">
                      {service.note}
                    </p>
                  )}
                </div>
              </dialog>
            )}
          </div>
          {service.id === 'lora' && (
            <div className="radio-mesh-subcards" aria-label="LoRa messaging systems">
              <section className="radio-mesh-subcard" aria-labelledby="mesh-meshtastic-title">
                <div className="radio-mesh-subcard__heading">
                  <img className="radio-mesh-subcard__logo" src="https://github.com/meshtastic.png?size=128" alt="Meshtastic logo" loading="lazy" />
                  <h3 id="mesh-meshtastic-title">Meshtastic</h3>
                </div>
                <p>Meshtastic lets compatible radios exchange messages and location information without cell service or internet access.</p>
                <p><strong>Network:</strong> A distributed mesh where participating devices can relay messages. Dedicated repeaters are not required.</p>
                <p><strong>Messaging:</strong> Group channels, direct messages, and location sharing.</p>
                <p><strong>Common uses:</strong> Outdoor recreation, position reporting, community communication, and experimentation.</p>
                <a className="radio-service-card__rules" href="https://meshtastic.org" target="_blank" rel="noopener noreferrer">
                  Meshtastic Website <ExternalLink size={14} aria-hidden="true" />
                </a>
              </section>
              <section className="radio-mesh-subcard" aria-labelledby="mesh-meshcore-title">
                <div className="radio-mesh-subcard__heading">
                  <img className="radio-mesh-subcard__logo" src="https://github.com/meshcore-dev.png?size=128" alt="MeshCore logo" loading="lazy" />
                  <h3 id="mesh-meshcore-title">MeshCore</h3>
                </div>
                <p>MeshCore lets compatible radios exchange messages directly or through a network of dedicated repeaters without cell service or internet access.</p>
                <p><strong>Network:</strong> User devices communicate directly or through repeaters that forward messages along network paths.</p>
                <p><strong>Messaging:</strong> Public channels, private messages, and optional room servers for stored messages.</p>
                <p><strong>Common uses:</strong> Community messaging, fixed repeater networks, group coordination, and experimentation.</p>
                <a className="radio-service-card__rules" href="https://meshcore.io" target="_blank" rel="noopener noreferrer">
                  MeshCore Website <ExternalLink size={14} aria-hidden="true" />
                </a>
              </section>
              <p className="radio-mesh-subcards__note">Meshtastic and MeshCore use LoRa technology but are separate systems. Devices require compatible firmware and radio settings to communicate.</p>
            </div>
          )}
          </React.Fragment>
        ))}
    </div>
  </section>
))}
 
## Comparing Radio Services
 
The estimates below cover basic entry-level equipment in the United States. **Range is highly variable** and depends on terrain, antenna height, buildings, interference, equipment, and whether an existing repeater or mesh network is available. These are planning estimates, not guaranteed distances or price quotes.
 
| Radio service | Approximate cost of entry | Typical direct range |
| --- | --- | --- |
| [FRS](#radio-service-frs) | $20–$60 for a pair | 0.5–2 miles |
| [GMRS](#radio-service-gmrs) | $50–$150 per radio, plus FCC license | 1–5 miles |
| [MURS](#radio-service-murs) | $40–$100 per radio | 1–3 miles |
| [CB](#radio-service-cb) | $60–$200 for basic radio and antenna | 1–5 miles |
| [LoRa / Mesh](#radio-service-lora) | $25–$100 per node | 1–10+ miles between favorably placed nodes |
| [Amateur Radio](#radio-service-amateur) | $30–$150 for an entry-level handheld, plus testing/licensing costs | 1–5 miles with an entry-level VHF/UHF handheld; repeaters and HF can extend coverage much farther |
 
*Costs are approximate U.S. equipment budgets, not recurring service fees. The ranges are broad illustrations for common setups, not statistical averages. GMRS repeater access and mesh relays can extend coverage substantially; amateur-radio range varies enormously by band and operating mode. Business and transportation services use specialized equipment and authorization, so a single consumer entry-cost estimate would be misleading.*
 