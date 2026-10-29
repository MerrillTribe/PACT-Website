---
sidebar_position: 1
draft: true
---

# Incident Coordination

During a large-scale incident, the amount of information coming from throughout Provo can quickly exceed what can be efficiently passed over a radio net. In disasters, PACT's role is to maintain communication lines between the community and the **Provo Emergency Operations Center (EOC)**.

**Android Team Awareness Kit (ATAK)** is the **Alternate** step in PACT's **PACE plan**. ATAK provides an  method for communicating field information to the EOC. ATAK allows PACT members to report conditions directly on a shared map, reducing radio traffic and allowing the EOC to receive and organize multiple reports simultaneously.

To help maintain this capability when traditional internet or cellular networks are unavailable, PACT has establish a **Mobile Ad Hoc Network (MANET)** to provide a resilient local data network.

> **PACT is a communications organization.** PACT members do not replace police, fire, EMS, search and rescue, or other emergency responders. PACT's role is to observe, document, and relay relevant information to the City so appropriate personnel can evaluate and respond to reported conditions.

---

ATAK serves as an **Alternate communications method** for PACT during large-scale incidents.

Traditional radio communications work well for urgent messages and relatively small amounts of traffic. During a major disaster, however, dozens of field observations may need to reach the EOC at approximately the same time.

Passing every report individually over the radio and documenting it on a **PACT N-0 form** can become slow and consume valuable airtime.

ATAK provides another pathway.

```text
                     FIELD INFORMATION
                            │
             ┌──────────────┴──────────────┐
             │                             │
        RADIO / N-0                   ATAK / WASP
             │                             │
       Voice Traffic               Digital Reports
             │                             │
             └──────────────┬──────────────┘
                            │
                            ▼
                       PROVO EOC
```

The two methods complement one another. Radio remains available for urgent traffic, coordination, and assignments, while ATAK can carry larger volumes of structured, location-based information.


### Why ATAK is the Alternate

During routine operations, radio provides an efficient way to communicate with the EOC. During a large-scale disaster, however, the volume of field reports may exceed what can be efficiently passed over a single radio net.

ATAK provides a **parallel digital pathway** for those reports. Multiple PACT members can submit location-based information simultaneously while radio capacity remains available for urgent traffic, assignments, and coordination.


### Why ATAK is the Alternate

During routine operations, radio provides an efficient way to communicate with the EOC. During a large-scale disaster, however, the volume of field reports may exceed what can be efficiently passed over a single radio net.

ATAK provides a **parallel digital pathway** for those reports. Multiple PACT members can submit location-based information simultaneously while radio capacity remains available for urgent traffic, assignments, and coordination.

---

## ATAK

**ATAK (Android Team Awareness Kit)** is a mapping and situational-awareness application that allows information from the field to be displayed geographically and shared with the EOC.

Instead of relying exclusively on verbal descriptions, PACT members can use ATAK to identify the location of an issue and provide supporting information. Authorized personnel can then view those reports on a shared operational map.

ATAK can help PACT relay information such as:

* Damage observed from a safe location
* Downed trees, power lines, or other hazards
* Blocked or inaccessible roads
* Flooding
* Fires or smoke
* Damaged infrastructure
* Requests for assistance received from the community
* Other significant conditions observed in the field

This information can help the EOC establish a **common operating picture** and identify areas that may require attention.

### WASP

PACT uses the **Wide Area Search Plugin (WASP)** with ATAK as a structured method for documenting and communicating field observations.

Although WASP includes capabilities designed for search and rescue organizations, **PACT does not conduct building searches or assume the responsibilities of emergency responders**.

PACT uses appropriate WASP reporting capabilities to help communicate observed conditions to the EOC.

For example, following an earthquake, a PACT member may encounter a visibly damaged building. From a safe location, the member could use ATAK/WASP to identify the building, document observable damage, and submit the information to the EOC.

```text
PACT Member
     │
     │ Observes a problem
     ▼
ATAK + WASP
     │
     │ Location + Information
     ▼
PACT Data Network
     │
     ▼
Provo EOC
     │
     │ Evaluates Information
     ▼
Appropriate City Response
```

The PACT member's responsibility is to **report the condition—not investigate, search, enter, or resolve it**.

### Immediate Hazards

ATAK does not replace radio communications for urgent information.

Conditions involving an immediate threat to life or safety should be reported using the appropriate radio channel or other method directed by Net Control or the EOC.

ATAK/WASP can then supplement the radio report with the precise location and additional information when appropriate.

This allows radio communications to remain available for urgent traffic while ATAK provides a method for communicating more detailed, location-based information.

---

## Resilient Data Network

ATAK requires a data network to exchange information.

Under normal circumstances, devices may communicate using existing internet or cellular infrastructure. During a major disaster, however, those systems may become congested, damaged, or unavailable.

As the **Emergency** component of PACT's PACE plan, PACT may establish a **Mobile Ad Hoc Network (MANET)** to provide a locally controlled data network.

### What Is a MANET?

A **Mobile Ad Hoc Network** is a decentralized wireless network in which participating nodes can communicate without relying entirely on traditional cellular or internet infrastructure.

Multiple nodes can work together to relay data across the network.

```text
                 Provo EOC
                     ●
                     │
                   MANET
                     │
            Communications Trailer
                     ●
                  /     \
               MANET    MANET
                /         \
               ●           ●
          Field Team   Field Team
              │             │
            Wi-Fi         Wi-Fi
              │             │
            ATAK          ATAK
            WASP          WASP
```

Nodes can be positioned at strategic locations to help establish or extend coverage between field personnel and the EOC.

### PACT MANET

PACT's MANET is intended to provide a resilient data path for incident information when conventional infrastructure is unavailable.

MANET nodes may be deployed at locations such as:

* Provo EOC
* PACT communications trailer
* Field teams
* Area Coordination Centers (ACCs)
* Staging areas
* Other strategic locations as directed

A PACT member's ATAK device connects to a nearby MANET node using Wi-Fi. Information can then travel across the MANET toward the EOC.

The communications trailer may also be positioned to serve as a **mobile relay**, helping extend network coverage into an affected area.