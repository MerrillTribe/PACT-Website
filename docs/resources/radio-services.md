---
title: Radio Services
sidebar_position: 4
draft: true
---

import {
  BriefcaseBusiness,
  RadioTower,
  Ship,
  Plane,
  TrainFront,
  TreePine,
} from 'lucide-react';

This reference summarizes common radio services and calling or monitoring frequencies. **A frequency appearing here does not authorize transmission.** Follow the applicable FCC rules and current operational assignments.


export const radioServices = [
  {
    id: 'frs',
    name: 'Family Radio Service',
    icon: 'FRS',
    subtitle: '462–467 MHz · UHF',
    license: 'License-free',
    facts: [['Channels', '22'], ['Maximum Power', '2 W ERP'], ['Repeaters', 'Not permitted']],
    description: 'FRS provides short-distance communications for families, outdoor recreation, and group coordination. Its 22 channels are shared with GMRS, and no individual FCC license is required.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-B',
    linkLabel: 'FCC Service Rules',
    groups: [{
      title: 'FRS Frequency Table',
      columns: ['CH', 'Frequency (MHz)', 'Max ERP'],
      rows: [
        ['1','462.5625','2 W'],['2','462.5875','2 W'],['3','462.6125','2 W'],
        ['4','462.6375','2 W'],['5','462.6625','2 W'],['6','462.6875','2 W'],
        ['7','462.7125','2 W'],['8','467.5625','0.5 W'],['9','467.5875','0.5 W'],
        ['10','467.6125','0.5 W'],['11','467.6375','0.5 W'],['12','467.6625','0.5 W'],
        ['13','467.6875','0.5 W'],['14','467.7125','0.5 W'],['15','462.5500','2 W'],
        ['16','462.5750','2 W'],['17','462.6000','2 W'],['18','462.6250','2 W'],
        ['19','462.6500','2 W'],['20','462.6750','2 W'],['21','462.7000','2 W'],
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
    license: 'License-free',
    facts: [['Channels', '5'], ['Maximum Power', '2 W Output'], ['Repeaters', 'Not permitted']],
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
    license: 'License-free',
    facts: [['Channels', '40'], ['Maximum Power', '4 W AM/FM · 12 W SSB'], ['Repeaters', 'Not permitted']],
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
    facts: [['Channels', '22 + 8 repeater pairs'], ['Maximum Power', 'Up to 50 W Output'], ['Repeaters', 'Permitted']],
    description: 'GMRS supports handheld, mobile, base, and repeater communications. An individual FCC license generally covers eligible immediate family members. It shares 22 simplex channels with FRS and offers eight repeater pairs for extended coverage.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-95/subpart-E',
    linkLabel: 'FCC Service Rules',
    groups: [{
      title: 'GMRS Frequency Table',
      columns: ['CH', 'Frequency (MHz)', 'Repeater Input (MHz)', 'Max Power'],
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
    facts: [
      ['Service', 'FCC Part 90'],
      ['Frequencies', 'Assigned by license'],
      ['Repeaters', 'When authorized']
    ],
    description: 'Business and Industrial/Business Pool radio systems serve commercial operations, facilities, transportation, and organizational communications. Authorized channels, power, emissions, and coverage depend on each FCC license.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-90',
    linkLabel: 'FCC Part 90 Rules',
    groups: []
  },
  {
    id: 'lora',
    name: 'Long Range (LoRa) Radio',
    icon: 'LoRa',
    subtitle: 'Meshtastic · MeshCore · 902–928 MHz',
    license: 'License-exempt operation possible',
    facts: [],
    description: 'LoRa is a long-range, low-power radio technology for digital communications. Meshtastic and MeshCore are separate off-grid messaging and networking systems using LoRa; their devices, firmware, roles, and network protocols are not interchangeable. Other applications include telemetry and remote sensors.',
    link: 'https://meshtastic.org/docs/overview/radio-settings/',
    linkLabel: 'Meshtastic Radio Settings',
    groups: [{
      title: 'North American LoRa Frequency Reference',
      columns: ['Frequency', 'Band', 'Typical Use'],
      rows: [
        ['902.300 MHz','33 cm','Configurable LoRa / ISM example'],
        ['903.000 MHz','33 cm','LoRa applications'],
        ['904.000 MHz','33 cm','Experimental / data links'],
        ['905.000 MHz','33 cm','Telemetry / data'],
        ['906.875 MHz','33 cm','Meshtastic LongFast, US region / slot 20'],
        ['908.000 MHz','33 cm','Configurable mesh use'],
        ['910.000 MHz','33 cm','IoT / sensor networks'],
        ['915.000 MHz','33 cm','General LoRa / ISM use'],
        ['920.000 MHz','33 cm','Configurable LoRa use'],
        ['927.000 MHz','33 cm','LoRa / ISM applications']
      ]
    }],
    note: 'These are illustrative frequencies, not fixed universal channels. Meshtastic and MeshCore use separate configurations and networking protocols. 928 MHz is the upper US band edge, not an ordinary channel-center frequency.'
  },
  {
    id: 'marine',
    name: 'Marine Radio',
    icon: 'Marine',
    subtitle: '156–162 MHz · Marine VHF',
    license: 'Licensing depends on operation',
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
      },
      {
        title: 'NOAA Weather Radio',
        columns: ['Channel', 'Frequency', 'Usage'],
        rows: [
          ['WX1','162.550 MHz','NOAA Weather Radio'],
          ['WX2','162.400 MHz','NOAA Weather Radio'],
          ['WX3','162.475 MHz','NOAA Weather Radio'],
          ['WX4','162.425 MHz','NOAA Weather Radio'],
          ['WX5','162.450 MHz','NOAA Weather Radio'],
          ['WX6','162.500 MHz','NOAA Weather Radio'],
          ['WX7','162.525 MHz','NOAA Weather Radio']
        ]
      }
    ],
    note: 'Marine channel numbering and permitted uses depend on jurisdiction; four-digit designations increasingly replace A suffixes. NOAA Weather Radio is receive-only for the general public.'
  },
  {
    id: 'aviation',
    name: 'Aviation Radio',
    icon: 'Aviation',
    subtitle: '118–137 MHz · VHF Airband',
    license: 'Authorized aviation use',
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
          ['Provo (PVU)','118.300 MHz','Tower — verify'],
          ['Provo (PVU)','121.725 MHz','Ground — verify'],
          ['Provo (PVU)','124.350 MHz','ATIS — verify'],
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
    note: 'Airport, air medical, federal, CAP, and public-safety entries reproduce previously supplied reference frequencies and have not been comprehensively validated for current assignment. Consult current FAA publications, NOTAMs, and agency communications plans. This list does not authorize transmission.'
  },
  {
    id: 'railroad',
    name: 'Railroad Radio',
    icon: 'Railroad',
    subtitle: '160–162 MHz · VHF',
    license: 'Railroad authorization required',
    facts: [],
    description: 'North American railroad communications use standardized AAR channel designations for train crews, dispatchers, yard operations, and maintenance. Actual operating channels vary by railroad and location.',
    link: 'https://www.ecfr.gov/current/title-47/chapter-I/subchapter-D/part-90',
    linkLabel: 'FCC Part 90 Rules',
    groups: [{
      title: 'AAR Frequency Reference',
      columns: ['AAR Channel', 'Frequency', 'Illustrative Use'],
      rows: [
        ['007','160.215 MHz','Yard operations'],
        ['008','160.230 MHz','Switching'],
        ['020','160.410 MHz','Road operations'],
        ['021','160.425 MHz','Dispatcher'],
        ['036','160.650 MHz','Local train operations'],
        ['046','160.800 MHz','Dispatcher / road'],
        ['052','160.890 MHz','Maintenance'],
        ['058','160.980 MHz','Yard / terminal'],
        ['060','161.010 MHz','Dispatch'],
        ['064','161.070 MHz','Road operations'],
        ['066','161.100 MHz','Dispatcher'],
        ['072','161.190 MHz','Engineering'],
        ['074','161.220 MHz','Railroad operations'],
        ['080','161.310 MHz','Road operations'],
        ['086','161.400 MHz','Dispatcher'],
        ['096','161.550 MHz','Railroad operations'],
        ['097','161.565 MHz','End-of-train reference — verify']
      ]
    }],
    note: 'AAR frequencies are standardized; examples of use are not confirmed channel assignments for a specific Utah railroad or subdivision.'
  },
  {
    id: 'calling',
    name: 'Calling & Monitoring Frequencies',
    icon: 'Calling',
    subtitle: 'Amateur radio and other services',
    license: 'Authorization varies',
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
    license: 'Amateur license required to transmit',
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

{/* =========================================
    RADIO SERVICE CARD RENDERER
    ========================================= */}

{radioServices.map((service) => (
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
      <a
        className="radio-service-card__rules"
        href={service.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {service.linkLabel}
      </a>

      {service.groups.length > 0 && (
        <button
          type="button"
          className="radio-frequency-button"
          onClick={() =>
            document
              .getElementById(`radio-frequency-${service.id}`)
              .showModal()
          }
        >
          View Frequencies
        </button>
      )}
    </div>

    {service.groups.length > 0 && (
      <dialog
        id={`radio-frequency-${service.id}`}
        className="radio-frequency-modal"
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
                <table className="radio-service-card__table">
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
))}

## National Interoperability Field Operations Guide (NIFOG)

The **National Interoperability Field Operations Guide (NIFOG)** is a reference for public-safety and emergency-response personnel. It covers interoperability channels, communications planning, and incident support across multiple radio bands.

Listed frequencies are **not open for general transmission**; applicable licenses and authorizations still apply.

For current publications and supporting guidance, visit [CISA SAFECOM](https://www.cisa.gov/safecom).