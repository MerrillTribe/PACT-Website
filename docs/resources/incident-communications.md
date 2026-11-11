---
sidebar_position: 1
draft: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Incident Communications

PACT's role is to maintain communications between the community and the **Provo Emergency Operations Center (EOC)**. During routine [**exercises**](/docs/training/training-exercises) and smaller incidents, PACT uses [**N-0 forms**](/docs/resources/forms) to document and relay information over a radio net. While this method is reliable, the volume of reports generated during a large-scale incident can quickly overwhelm the net's capacity, making it difficult to communicate information efficiently.

PACT follows a [**PACE Plan**](/docs/operations/frequency-allocation/#pace-plan) to maintain reliable communications when conditions change or existing methods become overwhelmed. When the volume of reports exceeds what can be efficiently handled over amateur radio, PACT members will transition to the **Contingency** communication method. This uses [**Android Team Awareness Kit (ATAK)**](#atak) and PACT's [**Mobile Ad Hoc Network (MANET)**](#mobile-ad-hoc-network) to document and transmit reports.


Through the **Wide Area Search Plugin (WASP)**, ATAK allows PACT members to document and share structured, location-based reports with the EOC and other connected PACT members in near real time. This streamlines the traditional reporting process by allowing multiple reports to be submitted and organized digitally without requiring each report to be relayed individually over voice radio.

PACT's MANET provides an independent, self-healing wireless data network that supports ATAK even when conventional internet or cellular services are unavailable. By automatically routing information through available network paths, MANETs can maintain connectivity even if individual links fail.

> **PACT does not replace emergency services or city departments.** PACT's responsibility is to relay information between the community and the EOC. Incident evaluation, coordination, and response remain the responsibility of the EOC and the appropriate public-safety agencies.

---

## ATAK

**ATAK (Android Team Awareness Kit)** is a mapping and situational-awareness application that allows PACT members to view, document, and share geographic information.

Instead of relying exclusively on verbal descriptions, members can identify an issue directly on a digital map, attach supporting information, and share it with authorized personnel. This helps the EOC receive information from multiple locations and maintain a **common operating picture** of conditions throughout Provo.

<div className="atak-summary-card">
  <h3>What ATAK Does for PACT</h3>
  <p>
    ATAK gives PACT a faster and more organized way to report conditions during
    large-scale incidents. It allows members to document hazards, infrastructure
    damage, blocked roads, and other observations on a shared map, helping the
    EOC receive and review information without relying entirely on voice radio.
  </p>
</div>

### Capabilities

<div className="atak-figure">
  <img
    src={useBaseUrl('/img/atak-tablet.jpg')}
    alt="ATAK displayed on a tablet with labeled capabilities"
    className="atak-figure-image"
  />

  <div className="atak-callout atak-callout-1">
    <strong>Shared Map</strong>
    <span>
      Displays incidents and operator activity geographically.
    </span>
  </div>

  <div className="atak-callout atak-callout-2">
    <strong>Incident Markers</strong>
    <span>
      Mark hazards, damage, blocked roads, and other observed conditions.
    </span>
  </div>

  <div className="atak-callout atak-callout-3">
    <strong>Location Tools</strong>
    <span>
      Help users identify exact positions and navigate the map.
    </span>
  </div>

  <div className="atak-callout atak-callout-4">
    <strong>Details & Photos</strong>
    <span>
      Add descriptions, attachments, and supporting information to reports.
    </span>
  </div>

  <div className="atak-callout atak-callout-5">
    <strong>Messaging</strong>
    <span>
      Share information digitally without occupying radio airtime.
    </span>
  </div>

  <div className="atak-callout atak-callout-6">
    <strong>Situational Awareness</strong>
    <span>
      Helps the EOC and connected PACT members understand conditions across the city.
    </span>
  </div>
</div>

<small>
  *Update the image path and adjust the callout positions as needed to match your screenshot.*
</small>


ATAK capabilities depend on the installed plugins, network connection, and configuration of the participating devices and servers.

### Wide Area Search Plugin (WASP)

The **Wide Area Search Plugin (WASP)** extends ATAK with structured reporting tools developed for disaster response and wide-area search operations.

WASP provides standardized markers and reporting capabilities for structures, hazards, vehicles, and other incident-related observations.

PACT uses the applicable reporting functions to document and communicate conditions observed in the field.

Examples of information PACT members may report include:

- Visible damage to buildings and infrastructure
- Downed power lines, trees, and other hazards
- Blocked or inaccessible roads
- Flooding and water-related damage
- Fires, smoke, and other hazardous conditions
- Requests for assistance received from the community
- Other significant conditions requiring EOC awareness

Although WASP includes functions developed for search-and-rescue operations, **PACT members do not conduct building searches, enter damaged structures, or assume emergency response responsibilities**.

### Immediate Hazards

ATAK does not replace voice radio for urgent communications.

Conditions involving an immediate threat to life or safety should be communicated through the appropriate emergency reporting pathway or as directed by Net Control and the EOC.

ATAK/WASP may then supplement the initial report with precise location information, photographs, and additional details.

A digital submission should not be assumed received or acted upon unless successful delivery has been verified through the established reporting procedure.

---

## MANET

ATAK requires a data network to exchange information between participating devices.

Under normal circumstances, cellular service and existing internet connections can provide this capability. During a major disaster, however, those systems may become congested, damaged, or unavailable.

PACT uses a **Mobile Ad Hoc Network (MANET)** to establish an independent wireless data network for incident coordination.

### What Is a MANET?

A **Mobile Ad Hoc Network** is a decentralized wireless network in which participating nodes can communicate and relay information between one another without relying on traditional cellular infrastructure.

Each node can form connections with compatible nearby nodes, allowing information to travel across multiple wireless links.

When supported by the network configuration, routing can adapt to changes in the available connections.

This makes MANET particularly useful for temporary communications networks that need to be deployed or repositioned during an incident.

### Comparing Mesh Technologies

Several technologies can provide off-grid communications, but their capabilities and intended applications differ.

| Technology | Strengths | Limitations for PACT |
|---|---|---|
| **Meshtastic / MeshCore** | Long-range, low-power messaging and location sharing | Limited bandwidth; not general-purpose IP networks for complete ATAK/WASP workflows |
| **AREDN** | High-capacity IP networking suitable for infrastructure links and network services | Often emphasizes planned links and site infrastructure; amateur-radio restrictions can affect applications |
| **Wi-Fi HaLow MANET** | Portable, multi-hop IP networking suitable for ATAK and field connectivity | Requires compatible equipment, careful configuration, and coverage testing |

Meshtastic and MeshCore are useful for lightweight text communications, location reporting, and telemetry. Meshtastic also supports integration with TAK for selected information.

AREDN provides a capable IP network that can support applications such as ATAK, messaging, and other network services.

**PACT's MANET approach emphasizes mobility, independent infrastructure, and direct IP connectivity for ATAK.**

The selection of Wi-Fi HaLow equipment is intended to provide a practical balance between wireless coverage, portable deployment, and sufficient data capacity for incident reporting.

### Wi-Fi HaLow

**Wi-Fi HaLow (IEEE 802.11ah)** is a wireless networking technology operating in sub-1 GHz spectrum.

Its propagation characteristics can offer advantages for longer-distance communication compared with conventional 2.4 GHz and 5 GHz Wi-Fi under suitable conditions.

For PACT, this provides several benefits:

- **Extended Coverage:** Wireless links can connect nodes across larger areas when terrain and interference permit.
- **Portable Equipment:** Nodes can be deployed at temporary operating locations.
- **IP Connectivity:** Compatible applications such as ATAK can exchange data across the network.
- **Multi-Hop Routing:** Information can travel through intermediate nodes when direct connections are unavailable.
- **Infrastructure Independence:** Local communication can continue without relying on a functioning commercial internet connection.

Actual performance depends on antenna placement, terrain, buildings, interference, equipment capabilities, and network configuration.

### OpenMANET

PACT's network architecture is based on the [OpenMANET Project](https://openmanet.net/), an open-source implementation of a Wi-Fi HaLow MANET.

OpenMANET combines compatible wireless hardware with networking software to support mobile, multi-hop IP communications.

Its networking architecture uses **802.11s and BATMAN-V** to establish communication between compatible nodes and manage available network paths.

A MANET also requires appropriate software and routing support. Simply connecting several Wi-Fi HaLow devices does not automatically create a true multi-hop network.

[OpenMANET Documentation](https://openmanet.github.io/docs/)

---

## PACT MANET Architecture

PACT's network is designed to connect the **Provo EOC**, communications trailer, and deployed field nodes through a locally controlled wireless data network.

The network can be expanded by positioning additional nodes at suitable locations throughout the incident area.

### Network Layout

```text
                      PROVO EOC
                    TAK Server
                        |
                    MANET Node
                        |
                   HaLow Link
                        |
                        v
                COMMUNICATIONS TRAILER
                    MANET Node
                    /        \
                   /          \
              HaLow Link   HaLow Link
                 /              \
                v                v
           FIELD NODE       FIELD NODE
                |                |
            Local Wi-Fi      Local Wi-Fi
                |                |
           ATAK / WASP       ATAK / WASP
```

A PACT member's Android device connects to a nearby network node through local Wi-Fi.

The node forwards network traffic across available MANET connections toward the EOC and other authorized participants.

A direct connection from every field operator to the EOC is not required, provided a functioning multi-hop path exists.

### Network Components

| Component | Function |
|---|---|
| **EOC Node** | Connects the MANET to EOC incident coordination systems |
| **Communications Trailer** | Provides a deployable network node or relay |
| **Field Nodes** | Extend network coverage and provide local device connectivity |
| **ATAK Devices** | Allow operators to document and exchange information |
| **TAK Server** | Coordinates information exchange between authorized TAK clients |

### Deployment Locations

MANET nodes may be positioned at:

- Provo Emergency Operations Center
- PACT communications trailer
- Area Coordination Centers (ACCs)
- Incident staging areas
- Field team operating locations
- Elevated or strategically positioned relay sites

Node placement is determined by incident requirements, available equipment, network coverage, and EOC direction.

### Communications Trailer

The PACT communications trailer provides an important mobile component of the network.

When positioned in a suitable location, the trailer can serve as a MANET relay, extending connectivity between the EOC and field nodes.

The trailer may also provide power, antennas, and equipment needed to support sustained network operations.

### TAK Server

A **TAK Server** provides a centralized information-sharing service for connected ATAK clients.

The server allows authorized personnel to exchange incident information and maintain a shared operational picture.

Functions may include:

- Sharing map markers and incident data
- Coordinating connected ATAK clients
- Distributing position and status information
- Managing authorized access
- Supporting information synchronization between participants

For independent operation, the TAK Server must remain accessible through the local MANET when commercial internet connectivity is unavailable.

The server may be hosted at the EOC or another designated location with appropriate power, network connectivity, and administrative controls.

### Network Reliability

A MANET is designed to support flexible networking, but it is not immune to communication failures.

A device may remain connected to a local Wi-Fi node even when that node has lost its connection to the rest of the mesh.

Likewise, a functioning MANET does not guarantee that the TAK Server or EOC systems are reachable.

Operators must verify actual end-to-end connectivity before relying on the digital reporting pathway.

When the MANET is unavailable, PACT members continue communications through the other available methods in the PACE plan.

---

## Incident Reporting Procedures

PACT members use ATAK and WASP to document and communicate information relevant to the EOC.

Reports should be accurate, concise, and limited to information the member is authorized to collect or relay.

### Submitting a Report

1. **Observe:** Identify a relevant condition from a safe location.
2. **Locate:** Open ATAK and identify the location on the map.
3. **Document:** Select the appropriate marker or reporting tool and record the observable conditions.
4. **Supplement:** Add photographs or supporting details when appropriate and authorized.
5. **Transmit:** Share the report through the designated data network.
6. **Verify:** Confirm receipt through the established reporting procedure.

### Reporting Standards

Reports should distinguish between directly observed conditions and information received from another person.

Members should avoid speculation, unsupported conclusions, and unnecessary personal information.

When reporting a condition, include sufficient detail to help the EOC identify the location and understand the concern.

**Example:**

> Large tree blocking both lanes of a residential street. No visible injuries. Observed from the east intersection at 1435 hours.

PACT members should not independently enter hazardous areas to obtain additional information.

### Radio and ATAK Coordination

Voice radio should be used for urgent communications, operational instructions, and coordination with Net Control.

ATAK is best suited for information that benefits from a map location, structured reporting, or supporting details.

When an incident presents an immediate threat to life or safety, the appropriate emergency reporting pathway takes priority.

ATAK can then supplement the urgent communication with additional information when available.

---

## Getting Started

PACT members participating in ATAK operations require a compatible Android device, the necessary applications, and access to the designated data network.

The following instructions provide an overview of the setup process. Equipment-specific settings will depend on the deployed configuration.

### 1. Install ATAK

**ATAK-CIV** is the civilian version of the Android Team Awareness Kit.

1. Install ATAK-CIV on a compatible Android device.
2. Open the application and complete the initial setup.
3. Grant the permissions required for the intended functions.
4. Become familiar with map navigation, markers, and basic controls.

[Download ATAK-CIV](https://play.google.com/store/apps/details?id=com.atakmap.app.civ)

### 2. Install WASP

The **Wide Area Search Plugin** adds structured disaster-reporting capabilities to ATAK.

1. Install a WASP version compatible with the installed ATAK version.
2. Open ATAK and locate the plugin management interface.
3. Confirm that WASP is installed and enabled.
4. Become familiar with the approved reporting tools.

[Download WASP](https://play.google.com/store/apps/details?id=com.atakmap.android.wasp.plugin)

:::caution AUTHORIZED USE
PACT members should use only the WASP reporting functions appropriate to their communications responsibilities.

Installing WASP does not authorize search-and-rescue activities, structural assessments, or entry into hazardous areas.
:::

### 3. Connect to the MANET

Once a PACT network node is available:

1. Power on the assigned network equipment.
2. Open the Android device's Wi-Fi settings.
3. Connect to the designated PACT network.
4. Confirm that the device has obtained a valid network connection.
5. Verify that the required TAK services are reachable.

A connection to local Wi-Fi does not necessarily indicate a functioning connection to the EOC.

### 4. Connect to TAK Server

Participating ATAK devices must be configured to connect to the designated TAK Server when server-based information sharing is used.

Required configuration may include:

- Server address
- Connection port and protocol
- Authentication credentials or certificates
- Authorized groups and permissions
- Connection verification

PACT will provide the appropriate connection settings to authorized personnel.

For security, server credentials and administrative access information are not published on this page.

### 5. Verify Operation

Before using the system during an incident:

1. Confirm that ATAK opens and displays the required map.
2. Verify the connection to the MANET.
3. Confirm connectivity to the designated TAK Server, if used.
4. Submit an authorized test marker or message.
5. Verify that the information reaches the intended recipient.

Training and testing reports must be clearly identified to prevent confusion with actual incidents.

---

## Network Equipment Setup

Network node installation and configuration are separate from the ATAK setup performed by individual PACT members.

PACT network administrators are responsible for preparing and maintaining the equipment used to establish the MANET.

### MANET Node Requirements

Each network node requires:

- Compatible Wi-Fi HaLow hardware
- Supported MANET firmware and routing configuration
- Appropriate antennas
- A suitable power source
- Local Wi-Fi or Ethernet connectivity for client devices, when required

Not all Wi-Fi HaLow devices support the same mesh functions or firmware.

Hardware compatibility must be confirmed before equipment is used as part of the PACT MANET.

### Node Configuration

A typical node setup includes:

1. Installing or updating compatible firmware.
2. Configuring the wireless mesh settings.
3. Assigning the node's network identity.
4. Configuring local Wi-Fi or Ethernet access.
5. Establishing connectivity with neighboring nodes.
6. Testing routing and communication with the EOC.
7. Verifying power and equipment reliability.

Consult the OpenMANET documentation for platform-specific installation and configuration instructions.

[OpenMANET Setup Guide](https://openmanet.github.io/docs/initial-setup.html)

### Network Testing

Before deployment, network administrators should verify:

- Communication between neighboring nodes
- Successful routing across multiple wireless hops
- Connection to the TAK Server
- Report delivery from field devices
- Network behavior when nodes disconnect or move
- Battery and backup power performance
- Coverage at intended operating locations

The network should also be tested without commercial internet connectivity to verify that the local incident coordination system remains functional.

---

## Operational Considerations

PACT's incident coordination capability depends on reliable equipment, trained operators, and coordination with the EOC.

### Information Security

ATAK may carry sensitive incident information, including operator locations, photographs, and reports concerning private property or individuals.

Network access and information sharing must be limited to authorized participants.

PACT must use suitable authentication, access controls, and information-handling procedures.

Applicable radio regulations, spectrum requirements, and equipment authorization must also be considered when selecting and operating network hardware.

### Network Limitations

Wi-Fi HaLow can provide extended wireless coverage, but terrain, structures, antenna placement, interference, and available power can limit performance.

Multi-hop networking can extend communications beyond a single direct link, but additional hops may reduce available throughput.

MANET operation should therefore be supported by field testing and realistic expectations of network performance.

### Communications Continuity

ATAK and MANET supplement existing communications capabilities.

They do not eliminate the need for voice radio, N-0 forms, or other established communications methods.

If the digital network becomes unavailable, PACT members continue using the available pathways in the [PACT PACE Plan](/docs/operations/frequency-allocation/#pace-plan).

The goal is to maintain reliable communications with the EOC under changing incident conditions, using the most appropriate available method for the information being transmitted.
