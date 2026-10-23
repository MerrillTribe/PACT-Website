---
title: Radio Services
sidebar_position: 4
draft: true
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
  Download,
} from 'lucide-react';
 
 
Radio services are different systems of wireless communication, each established for particular purposes—such as family conversations, business operations, transportation, or amateur experimentation. In the United States, the FCC sets rules for who may transmit, which frequencies and equipment may be used, and how a service operates. Some services do not require an individual license; others require an operator or station authorization.
 
This guide compares the common services and provides reference frequencies to help you understand how they differ. **Listening to a frequency does not give you permission to transmit on it.**
 
## Service Directory
 
<div className="radio-services-license-guide">
  <strong>Licensing labels:</strong> “No individual license” means eligible
  operation without a personal FCC license, <em>not</em> permission to transmit
  using arbitrary equipment. “FCC license required” and “Restricted /
  authorized use” indicate that additional authority is necessary.
  LoRa uses rules determined by the device and configuration.
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
    description: 'FRS provides short-distance communications for families, outdoor recreation, and group coordination. Its 22 channels are shared with GMRS, and no individual FCC license is required.',
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
    description: 'MURS provides five VHF channels for short-distance personal and business communications without an individual FCC license. External antennas are permitted, subject to antenna-height restrictions.',
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
    description: 'CB provides 40 shared channels for personal and business communications. It is commonly used by truck drivers, travelers, and outdoor groups, with AM, FM, and single-sideband operation using compliant radios.',
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
    description: 'GMRS supports handheld, mobile, base, and repeater communications. An individual FCC license generally covers eligible immediate family members. It shares 22 simplex channels with FRS and offers eight repeater pairs for extended coverage.',
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
    description: 'Business and Industrial/Business Pool radio systems serve commercial operations, facilities, transportation, and organizational communications. Authorized channels, power, emissions, and coverage depend on each FCC license.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-90',
    linkLabel: 'FCC Part 90 Rules',
    groups: []
  },
 

{
  id: 'amateur',
  name: 'Amateur Radio',
  icon: 'HAM',
  subtitle: 'Multiple HF, VHF, UHF and microwave bands',
  license: 'Amateur License Required',
  facts: [],
  description: 'Amateur radio is a licensed radio service used for personal communications, technical experimentation, education, and public service. Operators can communicate locally through simplex frequencies and repeaters or across long distances using HF and other bands. The service also plays an important role in volunteer emergency communications. In the United States, operators must hold an FCC amateur radio license, with privileges determined by their license class.',
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
  description: 'LoRa (Long Range) is a low-power wireless technology designed to transmit small amounts of digital information over relatively long distances. It can support text messaging, location sharing, telemetry, and other data communications without relying on cellular networks or internet access. Meshtastic and MeshCore are two separate communication systems that use LoRa technology to create off-grid messaging networks. Both are described in the cards below.',
  link: '',
  linkLabel: '',
  groups: [{
    title: 'North American LoRa / Meshtastic Examples',
    columns: ['Configuration', 'Frequency', 'Interpretation'],
    rows: [
      [
        'US / LongFast · slot 20',
        '906.875 MHz',
        'Common Meshtastic preset/slot combination'
      ],
      [
        'US / LongTurbo · slot 14',
        '908.750 MHz',
        'Meshtastic preset/slot combination'
      ],
      [
        'US ISM allocation',
        '902–928 MHz',
        'Frequency band; not an individual channel'
      ]
    ]
  }],
  note: 'LoRa is a modulation technology, not a separately licensed FCC radio service. These frequency examples apply to Meshtastic configurations and should not be assumed to apply to MeshCore. Actual operating frequencies depend on device configuration, region, firmware, and network settings. Equipment must comply with applicable FCC requirements.'
},
  {
    id: 'marine',
    name: 'Marine Radio',
    icon: 'Marine',
    subtitle: '156–162 MHz · Marine VHF',
    license: 'Authorization Varies',
    facts: [],
    description: 'Marine VHF provides ship-to-ship, ship-to-shore, navigation-safety, and distress communications. Channel 16 (156.800 MHz) is the international distress, safety, and calling channel.',
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
    description: 'Aviation radio supports aircraft, air traffic control, airport operations, and emergencies. This Utah reference includes airports, backcountry, air medical, emergency monitoring, and Civil Air Patrol. Operational assignments may change: verify before relying on them.',
    link: 'https://www.faa.gov/air_traffic/flight_info/aeronav/digital_products/dafd/',
    linkLabel: 'FAA Chart Supplement',
    groups: [
      {
        title: 'Utah Aviation Frequencies',
        columns: ['Location / Agency', 'Frequency', 'Usage'],
        rows: [
          ['Salt Lake Center (ZLC)','128.300 MHz','ARTCC / en route — verify'],
          ['Salt Lake Center (ZLC)','132.675 MHz','ARTCC / high altitude — verify'],
          ['Salt Lake Approach','124.300 MHz','Approach / departure — verify'],
          ['Salt Lake Intl (SLC)','118.300 MHz','Tower — verify'],
          ['Salt Lake Intl (SLC)','121.900 MHz','Ground — verify'],
          ['Salt Lake Intl (SLC)','135.500 MHz','ATIS — verify'],
          ['Provo (PVU)','125.300 MHz','Tower / CTAF — FAA data effective Oct. 1, 2026'],
          ['Provo (PVU)','119.400 MHz','Ground — FAA data effective Oct. 1, 2026'],
          ['Provo (PVU)','135.175 MHz','ATIS / AWOS — FAA data effective Oct. 1, 2026'],
          ['Ogden-Hinckley (OGD)','124.700 MHz','Tower — verify'],
          ['Ogden-Hinckley (OGD)','121.800 MHz','Ground — verify'],
          ['Spanish Fork (U77)','122.900 MHz','CTAF / UNICOM — verify'],
          ['Heber Valley (36U)','123.000 MHz','CTAF / UNICOM — verify'],
          ['Skypark (BTF)','118.700 MHz','Tower — verify'],
          ['Skypark (BTF)','120.000 MHz','Ground — verify'],
          ['Cedar City (CDC)','118.000 MHz','Tower — verify'],
          ['St. George (SGU)','118.275 MHz','Tower — verify'],
          ['Moab Canyonlands (CNY)','122.800 MHz','CTAF / UNICOM — verify'],
          ['Common CTAF','122.800 MHz','Advisory / verify applicability'],
          ['Flight Service','122.200 MHz','Flight Service — verify'],
          ['Guard','121.500 MHz','Aviation emergency']
        ]
      },
      {
        title: 'Utah Backcountry Aviation',
        columns: ['Airport / Area', 'Frequency', 'Usage'],
        rows: [
          ['General backcountry CTAF','122.800 MHz','Common advisory — verify'],
          ['Mexican Mountain (U62)','122.900 MHz','CTAF — verify'],
          ['Dirty Devil (UTL)','122.900 MHz','CTAF — verify'],
          ['Hite Airport (UT03)','122.900 MHz','CTAF — verify'],
          ['Mineral Canyon (UT75)','122.900 MHz','CTAF — verify'],
          ['Canyonlands area','122.800 MHz','Air-to-air / advisory — verify'],
          ['Bryce Canyon area','122.750 MHz','Air-to-air — verify'],
          ['Moab area','122.800 MHz','Advisory — verify'],
          ['Flight Service','122.200 MHz','Flight Service — verify'],
          ['Guard','121.500 MHz','Aviation emergency']
        ]
      },
      {
        title: 'Utah Life Flight / Air Medical References',
        columns: ['Agency', 'Frequency', 'Usage'],
        rows: [
          ['AirMed','155.340 MHz','Hospital coordination — verify'],
          ['AirMed','123.025 MHz','Air-to-air — verify'],
          ['Classic Air Medical','155.280 MHz','EMS coordination — verify'],
          ['Life Flight','123.050 MHz','Air operations — verify'],
          ['University of Utah AirMed','463.000 MHz','Operations — verify'],
          ['Utah EMS MED','463.025 MHz','Medical coordination — verify'],
          ['HEAR','155.340 MHz','Hospital emergency radio — verify'],
          ['Guard','121.500 MHz','Aviation emergency']
        ]
      },
      {
        title: 'Utah Emergency Aviation Monitoring References',
        columns: ['Frequency', 'Band', 'Usage'],
        rows: [
          ['121.500 MHz','VHF Airband','International aviation emergency'],
          ['243.000 MHz','UHF Military','Military Guard'],
          ['123.100 MHz','VHF Airband','Search and rescue'],
          ['122.750 MHz','VHF Airband','Air-to-air — verify'],
          ['122.800 MHz','VHF Airband','Common CTAF / advisory'],
          ['155.160 MHz','VHF Public Safety','SAR coordination — verify'],
          ['155.340 MHz','VHF EMS','Hospital / air medical — verify'],
          ['155.475 MHz','VHF Public Safety','National law enforcement mutual aid'],
          ['154.280 MHz','VHF Fire','Fire mutual aid — verify'],
          ['168.625 MHz','Federal VHF','Federal aviation reference — verify'],
          ['163.100 MHz','Federal VHF','Federal operations reference — verify']
        ]
      },
      {
        title: 'Utah Civil Air Patrol References',
        columns: ['Frequency', 'Usage'],
        rows: [
          ['148.150 MHz','CAP primary — verify'],
          ['148.125 MHz','CAP tactical — verify'],
          ['148.1375 MHz','CAP operations — verify'],
          ['148.1625 MHz','CAP logistics — verify'],
          ['121.500 MHz','ELT search / Guard monitoring'],
          ['243.000 MHz','Military Guard']
        ]
      }
    ],
    note: 'Provo (PVU) frequencies have been corrected against aviation data effective October 1, 2026. Other airport, air-medical, federal, CAP, and public-safety entries have NOT been comprehensively verified for current assignment and must not be relied on operationally without checking current FAA publications, NOTAMs, and agency communications plans. This list does not authorize transmission.'
  },
  {
    id: 'railroad',
    name: 'Railroad Radio',
    icon: 'Railroad',
    subtitle: '160–162 MHz · VHF',
    license: 'Restricted / Authorized Use',
    facts: [],
    description: 'North American railroad communications use standardized AAR channel designations for train crews, dispatchers, yard operations, and maintenance. Actual operating channels vary by railroad and location.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-90',
    linkLabel: 'FCC Part 90 Rules',
    groups: [{
      title: 'AAR Frequency Reference',
      columns: ['AAR Channel', 'Frequency', 'Assignment Status'],
      rows: [
        ['007','160.215 MHz','Not location-verified'],
        ['008','160.230 MHz','Not location-verified'],
        ['020','160.410 MHz','Not location-verified'],
        ['021','160.425 MHz','Not location-verified'],
        ['036','160.650 MHz','Not location-verified'],
        ['046','160.800 MHz','Not location-verified'],
        ['052','160.890 MHz','Not location-verified'],
        ['058','160.980 MHz','Not location-verified'],
        ['060','161.010 MHz','Not location-verified'],
        ['064','161.070 MHz','Not location-verified'],
        ['066','161.100 MHz','Not location-verified'],
        ['072','161.190 MHz','Not location-verified'],
        ['074','161.220 MHz','Not location-verified'],
        ['080','161.310 MHz','Not location-verified'],
        ['086','161.400 MHz','Not location-verified'],
        ['096','161.550 MHz','Not location-verified'],
        ['097','161.565 MHz','Not location-verified']
      ]
    }],
    note: 'AAR frequencies are standardized; examples of use are not confirmed channel assignments for a specific Utah railroad or subdivision.'
  },
  {
    id: 'calling',
    name: 'Calling & Monitoring Frequencies',
    icon: 'Calling',
    subtitle: 'Amateur radio and other services',
    license: 'Authorization Varies',
    facts: [],
    description: 'These are amateur calling frequencies, activity centers, APRS, and informal conventions for other radio services. Not every listed frequency is an official national calling frequency.',
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
    license: 'Amateur License Required',
    facts: [],
    description: 'The Wilderness Protocol is an informal amateur-radio practice encouraging stations in remote areas to monitor calling channels for five minutes at the top of the hour, every three hours from 7 a.m. to 7 p.m. local time. It is not a guaranteed emergency-response service.',
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
    View Frequencies
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
                <p>Meshtastic is an off-grid messaging system for text, location sharing, and telemetry. Compatible nodes can relay messages beyond a direct radio link.</p>
                <p><strong>Network:</strong> Shared channels with matching radio presets, frequency slots, and security settings.</p>
                <p><strong>Common uses:</strong> Group messages, position reports, and sensor data.</p>
                <a className="radio-service-card__rules" href="https://meshtastic.org/docs/" target="_blank" rel="noopener noreferrer">Meshtastic documentation <ExternalLink size={14} aria-hidden="true" /></a>
              </section>
              <section className="radio-mesh-subcard" aria-labelledby="mesh-meshcore-title">
                <div className="radio-mesh-subcard__heading">
                  <img className="radio-mesh-subcard__logo" src="https://github.com/meshcore-dev.png?size=128" alt="MeshCore logo" loading="lazy" />
                  <h3 id="mesh-meshcore-title">MeshCore</h3>
                </div>
                <p>MeshCore is a separate off-grid messaging system built around companion devices, dedicated repeaters, and optional room servers.</p>
                <p><strong>Network:</strong> Companions and repeaters use matching radio settings to route messages across multiple hops.</p>
                <p><strong>Common uses:</strong> Direct messages, group messaging, and community networks.</p>
                <a className="radio-service-card__rules" href="https://meshcore.co.uk/" target="_blank" rel="noopener noreferrer">MeshCore project <ExternalLink size={14} aria-hidden="true" /></a>
              </section>
              <p className="radio-mesh-subcards__note">Meshtastic and MeshCore are separate protocols; devices cannot exchange messages directly simply because they use similar LoRa hardware.</p>
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
 
The cards below explain each service's authorization requirements and provide frequency references. **Not every listed channel is available for general transmission.**
 
## Emergency & Interoperability Resources
 
<div className="radio-nifog-card">
  <div className="radio-nifog-card__heading">
    <span className="radio-nifog-card__icon" aria-hidden="true">NIFOG</span>
    <div>
      <h3>National Interoperability Field Operations Guide (NIFOG)</h3>
      <span>CISA · Version 2.02 (December 2024)</span>
    </div>
  </div>
  <p>The NIFOG is a reference book that helps emergency responders from different organizations communicate by radio when they work together.</p>
  <p>It lists common interoperability channel names, frequencies, and technical information that can help communications personnel coordinate during major incidents.</p>
  <h4>What can you find in it?</h4>
  <ul>
    <li>Common VHF, UHF, and 700/800 MHz interoperability channels</li>
    <li>Radio channel[ names and programming references</li>
    <li>Information for planning communications between responding agencies</li>
  </ul>
  <p className="radio-nifog-card__note"><strong>Important:</strong> The NIFOG is a reference, not permission to transmit. Use these channels only with appropriate authorization and operational direction.</p>
  <div className="radio-nifog-card__actions">
    <a className="radio-frequency-button" href="https://www.cisa.gov/sites/default/files/2024-12/NIFOG%202.02_508%20FINAL%20VERSION%2012%2003%202024.pdf" target="_blank" rel="noopener noreferrer"><Download size={17} aria-hidden="true" /> Open NIFOG 2.02 (PDF)</a>
    <a className="radio-frequency-button radio-nifog-card__secondary-button" href="https://www.cisa.gov/safecom/field-operations-guides" target="_blank" rel="noopener noreferrer">CISA publications <ExternalLink size={15} aria-hidden="true" /></a>
  </div>
</div>
