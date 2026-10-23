---
sidebar_position: 4
title: Preparation for Disasters
draft: true
---
 
import useBaseUrl from '@docusaurus/useBaseUrl';
import {
  Info, Map, HeartPulse, Building2, Zap, RadioTower,
  CarFront, Trees, BriefcaseBusiness, Wheat, Landmark,
  House, Droplets, Wind, Flame, BellRing
} from 'lucide-react';

 
export const DisasterRating = ({ label, value, level }) => {
  const unrated = level == null;
 
  return (
    <div className="disaster-rating">
      <div className="disaster-rating-label">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
 
      <div
        className={
          unrated
            ? 'disaster-rating-bar disaster-rating-bar--unrated'
            : 'disaster-rating-bar'
        }
      >
        {[1, 2, 3, 4].map((step) => (
          <span
            key={step}
            className={!unrated && step <= level ? 'active' : undefined}
          ></span>
        ))}
      </div>
    </div>
  );
};
 
export const DISASTER_IMPACTS = {
  safety: ['Health & Safety', HeartPulse],
  infrastructure: ['Buildings & Infrastructure', Building2],
  utilities: ['Utilities', Zap],
  communications: ['Communications', RadioTower],
  transportation: ['Transportation', CarFront],
  environment: ['Environment', Trees],
  economy: ['Economic Activity', BriefcaseBusiness],
  agriculture: ['Agriculture & Food', Wheat],
  services: ['Public Services', Landmark],
  housing: ['Housing & Displacement', House],
  water: ['Water Supply', Droplets],
  air: ['Air Quality', Wind],
  fire: ['Fire Risk', Flame],
};

export const DisasterImpacts = ({ impacts = [] }) => {
  if (!impacts.length) return null;
  return (
    <div className="disaster-impacts">
      <div className="disaster-impacts-heading">Potential Impacts</div>
      <div className="disaster-impacts-list">
        {impacts.map(key => {
          const entry = DISASTER_IMPACTS[key];
          if (!entry) return null;
          const [label, Icon] = entry;
          return (
            <div className="disaster-impact" key={key}>
              <Icon size={17} strokeWidth={1.8} aria-hidden="true" />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const DisasterCard = ({
  id,
  title,
  image,
  alt,
  likelihood = 'Not Rated',
  likelihoodLevel = null,
  magnitude = 'Not Rated',
  magnitudeLevel = null,
  impacts = [],
  riskMap = null,
  about = false,
  children,
  exampleLabel,
  exampleTitle,
  exampleText,
}) => (
  <div className="disaster-profile-card">
    <div className="disaster-profile-sidebar">
      <img src={useBaseUrl(image)} alt={alt || title} className="disaster-profile-icon" />
      <DisasterRating label="Likelihood" value={likelihood} level={likelihoodLevel} />
      <DisasterRating label="Magnitude" value={magnitude} level={magnitudeLevel} />
      <DisasterImpacts impacts={impacts} />
      {riskMap && (
        <a href={useBaseUrl(riskMap)} target="_blank" rel="noopener noreferrer"
           className="button button--primary disaster-risk-map">
          <Map size={17} aria-hidden="true" />
          <span>Risk Map</span>
        </a>
      )}
    </div>
    <div className="disaster-profile-content">
      <div className="disaster-profile-title-row">
        <h2 id={id}>{title}</h2>
        {about && (
          <button type="button" className="disaster-about-button"
            title={`About ${title}`} aria-label={`About ${title}`}
            aria-haspopup="dialog" aria-controls={`hazard-about-${id}`}
            onClick={() => document.getElementById(`hazard-about-${id}`)?.showModal()}>
            <Info size={20} strokeWidth={1.8} aria-hidden="true" />
            <span>More Info</span>
          </button>
        )}
      </div>
      {children}
      {exampleTitle && (
        <div className="disaster-profile-event">
          <span className="disaster-profile-event-label">
            {exampleLabel || 'Local / Recent Example'}
          </span>
          <strong>{exampleTitle}</strong>
          {exampleText && <p>{exampleText}</p>}
        </div>
      )}
    </div>
  </div>
);

export const AboutHazardModal = ({ id, title, children }) => (
  <dialog id={`hazard-about-${id}`} className="disaster-about-modal"
    aria-label={`About ${title}`}
    onClick={event => {
      if (event.target === event.currentTarget) event.currentTarget.close();
    }}>
    <div className="disaster-about-modal-header">
      <h2>About {title}</h2>
      <button type="button" className="disaster-about-close" aria-label="Close information"
        onClick={event => event.currentTarget.closest('dialog')?.close()}>
        ×
      </button>
    </div>
    <div className="disaster-about-modal-body">{children}</div>
  </dialog>
);

# Preparation for Disasters
 
Provo’s location makes it a great place to live, but it also comes with some inherent risks.

The Wasatch Mountains and Wasatch Fault bring the potential for earthquakes, landslides, debris flows, and wildfires. Utah Lake, the Provo River, and local soil conditions create risks of flooding and liquefaction. A major railroad corridor and a growing airport add to the possibility of transportation accidents.

Some disasters are more likely than others. Severe weather and wildfires occur relatively often in Utah County, while major earthquakes and dam failures are much less common but could have devastating consequences.

We may not be able to prevent every disaster, but we can prepare for them. **Understanding [**Provo's risks**](#understanding-provos-risks) is an important first step toward protecting ourselves, our families, and our community.**


:::info About This Information
The information on this page is provided for educational and emergency preparedness purposes. Hazard ratings are based primarily on the **2022 Pre-Disaster Mitigation Plan for Summit, Utah, and Wasatch Counties**, supplemented by authoritative government sources.

Historical examples do not necessarily indicate future risk, and modeled disaster scenarios are not predictions of future events.

During an emergency, always follow official warnings and instructions from public safety authorities.
:::

 
---
 
## Disasters
 
Disasters can result from natural processes, severe weather, infrastructure failures, accidents, or human actions. Many disasters can have a domino effect. An earthquake, for example, can cause liquefaction, landslides, tsunamis, or dam failure.

The icons below represent some of the disasters found around the world.
 
### Natural Disasters
 
<div className="disaster-icon-grid">
 
  <a href="#earthquake" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/earthquake.png')}
      alt="Earthquake"
    />
    <span>Earthquake</span>
  </a>
 
  <a href="#liquefaction" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/liquefaction.png')}
      alt="Liquefaction"
    />
    <span>Liquefaction</span>
  </a>
 
  <a href="#wildfire" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/wildfire.png')}
      alt="Wildfire"
    />
    <span>Wildfire</span>
  </a>
 
  <a href="#flooding" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/flooding.png')}
      alt="Flooding"
    />
    <span>Flooding</span>
  </a>
 
  <a href="#landslide" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/landslide.png')}
      alt="Landslide"
    />
    <span>Landslide</span>
  </a>
 
  <a href="#mudslide" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/mudslide.png')}
      alt="Mudslide"
    />
    <span>Mudslide</span>
  </a>
 
  <a href="#sinkhole" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/sinkhole.png')}
      alt="Sinkhole"
    />
    <span>Sinkhole</span>
  </a>
 
  <a href="#avalanche" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/avalanche.png')}
      alt="Avalanche"
    />
    <span>Avalanche</span>
  </a>
 
  <a href="#drought" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/drought.png')}
      alt="Drought"
    />
    <span>Drought</span>
  </a>
 
  <a href="#dust-bowl" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/dust-bowl.png')}
      alt="Dust Bowl"
    />
    <span>Dust Bowl</span>
  </a>
 
  <a href="#lightning" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/lightning.png')}
      alt="Lightning"
    />
    <span>Lightning</span>
  </a>
 
  <a href="#heavy-rain" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/heavy-rain.png')}
      alt="Heavy Rain"
    />
    <span>Heavy Rain</span>
  </a>
 
  <a href="#high-wind" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/high-wind.png')}
      alt="High Wind"
    />
    <span>High Wind</span>
  </a>
 
  <a href="#hail" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/hail.png')}
      alt="Hail"
    />
    <span>Hail</span>
  </a>
 
  <a href="#heavy-snow" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/heavy-snow.png')}
      alt="Heavy Snow"
    />
    <span>Heavy Snow</span>
  </a>
 
  <a href="#extreme-cold" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/extreme-cold.png')}
      alt="Extreme Cold"
    />
    <span>Extreme Cold</span>
  </a>
 
  <a href="#extreme-heat" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/extreme-heat.png')}
      alt="Extreme Heat"
    />
    <span>Extreme Heat</span>
  </a>
 
  <a href="#tornado" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/tornado.png')}
      alt="Tornado"
    />
    <span>Tornado</span>
  </a>
 
  <a href="#infestation" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/infestation.png')}
      alt="Infestation"
    />
    <span>Infestation</span>
  </a>
 
  <a href="#volcano" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/volcano.png')}
      alt="Volcano"
    />
    <span>Volcano</span>
  </a>
 
  <a href="#hurricane" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/hurricane.png')}
      alt="Hurricane"
    />
    <span>Hurricane</span>
  </a>
 
  <a href="#tsunami" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/tsunami.png')}
      alt="Tsunami"
    />
    <span>Tsunami</span>
  </a>
 
  <a href="#space-weather" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/space-weather.png')}
      alt="Space Weather"
    />
    <span>Space Weather</span>
  </a>
 
</div>
 
### Human-Caused Disasters
 
<div className="disaster-icon-grid">
 
  <a href="#dam-failure" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/dam-failure.png')}
      alt="Dam Failure"
    />
    <span>Dam Failure</span>
  </a>
 
  <a href="#hazardous-materials" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/hazmat.png')}
      alt="Hazardous Materials"
    />
    <span>Hazardous Materials</span>
  </a>
 
  <a href="#aviation-accident" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/aviation-accident.png')}
      alt="Aviation Accident"
    />
    <span>Aviation Accident</span>
  </a>
 
  <a href="#train-derailment" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/train-derailment.png')}
      alt="Train Derailment"
    />
    <span>Train Derailment</span>
  </a>
 
<a href="#industrial-accident" className="disaster-icon-item">
  <img
    src={useBaseUrl('/img/industrial-accident.png')}
    alt="Industrial Accident"
  />
  <span>Industrial Accident</span>
</a>
 
  <a href="#power-outage" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/power-outage.png')}
      alt="Power Outage"
    />
    <span>Power Outage</span>
  </a>
 
<a href="#acts-of-violence" className="disaster-icon-item">
  <img
    src={useBaseUrl('/img/acts-of-violence.png')}
    alt="Acts of Violence"
  />
  <span>Acts of Violence</span>
</a>
 
  <a href="#cyber-attack" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/cyber-attack.png')}
      alt="Cyber Attack"
    />
    <span>Cyber Attack</span>
  </a>
 
  <a href="#water-contamination" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/water-contamination.png')}
      alt="Water Contamination"
    />
    <span>Water Contamination</span>
  </a>
 
  <a href="#air-quality" className="disaster-icon-item">
    <img
      src={useBaseUrl('/img/air-quality.png')}
      alt="Poor Air Quality"
    />
    <span>Poor Air Quality</span>
  </a>
 
</div>
 
---
 
## Understanding Provo's Risks
 
The **[2022 Pre-Disaster Mitigation Plan](https://magutah.gov/static/files/Planning/2022%20Pre-Disaster%20Mitigation%20Plan%20for%20Summit%20Utah%20and%20Wasatch%20Counties%20with%20April%202022%20Revisions.pdf)**, prepared by the Mountainland Association of Governments, compares disasters in Utah County by their **probability** and **severity**.

- **Probability** — how likely a disaster is to occur.
- **Severity** — how serious its impacts could be.

Together, these factors help show which disasters pose the greatest risk to our community. The matrix below shows how each disaster compares.
 
<div className="hazard-matrix-wrapper">
 
  <div className="hazard-matrix-title">
    Utah County Hazard Matrix
  </div>
 
  <div className="hazard-matrix-layout">
 
    <div className="hazard-matrix-y-axis">
      Likelihood
    </div>
 
    <div className="hazard-matrix-grid">
 
      {/* Row 1 */}
 
      <div className="matrix-row-label">
        <span>Highly Likely</span>
      </div>
 
      <div className="matrix-cell risk-moderate">
        Hail
      </div>
 
      <div className="matrix-cell risk-high">
        Fire<br />
        Winter Weather<br />
        Wind<br />
        Avalanche
      </div>
 
      <div className="matrix-cell risk-high"></div>
 
      <div className="matrix-cell risk-high"></div>
 
 
      {/* Row 2 */}
 
      <div className="matrix-row-label">
        <span>Likely</span>
      </div>
 
      <div className="matrix-cell risk-low">
        Lightning<br />
        Tornado
      </div>
 
      <div className="matrix-cell risk-moderate">
        Flood<br />
        Drought
      </div>
 
      <div className="matrix-cell risk-high">
        Landslide<br />
        Debris Flow
      </div>
 
      <div className="matrix-cell risk-high"></div>
 
 
      {/* Row 3 */}
 
      <div className="matrix-row-label">
        <span>Possible</span>
      </div>
 
      <div className="matrix-cell risk-low"></div>
 
      <div className="matrix-cell risk-low"></div>
 
      <div className="matrix-cell risk-moderate"></div>
 
      <div className="matrix-cell risk-high"></div>
 
 
      {/* Row 4 */}
 
      <div className="matrix-row-label">
        <span>Unlikely</span>
      </div>
 
      <div className="matrix-cell risk-low"></div>
 
      <div className="matrix-cell risk-low"></div>
 
      <div className="matrix-cell risk-low"></div>
 
      <div className="matrix-cell risk-moderate">
        Earthquake<br />
        Dam Failure
      </div>
 
 
      {/* Bottom labels */}
 
      <div className="matrix-corner"></div>
 
      <div className="matrix-column-label">
        Negligible
      </div>
 
      <div className="matrix-column-label">
        Limited
      </div>
 
      <div className="matrix-column-label">
        Critical
      </div>
 
      <div className="matrix-column-label">
        Catastrophic
      </div>
 
    </div>
 
  </div>
 
  <div className="hazard-matrix-x-axis">
    Magnitude / Severity
  </div>
 
</div>
:::note How to read the matrix
 
**Potential Magnitude / Severity**
 
- **Catastrophic:** More than 50% of the community affected; many lives and a great deal of property potentially affected.
- **Critical:** 25–50% affected; multiple lives and/or multiple properties potentially affected.
- **Limited:** 10–25% affected; some property loss and fewer than three lives potentially lost.
- **Negligible:** Less than 10% affected; some property impact and no expected loss of life.
 
**Probability**
 
- **Highly Likely:** Near 100% probability within the next year.
- **Likely:** 10–100% probability in the next year, or at least one occurrence in the next 10 years.
- **Possible:** 1–10% probability in the next year, or at least one occurrence in the next 100 years.
- **Unlikely:** Less than 1% probability in the next 100 years.
 
:::
 
### What Could Be Affected in Provo?

The **[2022 Pre-Disaster Mitigation Plan](https://magutah.gov/static/files/Planning/2022%20Pre-Disaster%20Mitigation%20Plan%20for%20Summit%20Utah%20and%20Wasatch%20Counties%20with%20April%202022%20Revisions.pdf)** estimates how many buildings in Provo could be exposed to several major disasters. These estimates show that even less frequent events could affect a significant portion of our community.

| Disaster | Buildings Potentially Exposed | Estimated Building Value |
|---|---:|---:|
| Dam Failure | 16,883 | $5,531,865,000 |
| Fire Risk — High | 652 | $364,479,000 |
| Fire Risk — Moderate | 227 | $76,906,000 |
| Flood — 1% Annual Probability | 48 | $23,058,000 |
| Landslide | 290 | $108,752,000 |
| Liquefaction — Moderate to High | 19,338 | $6,140,581,000 |
| Earthquake — Pre-1990 Buildings | 15,358 | $4,386,424,000 |

### Risk Maps

The number of buildings potentially exposed only tells part of the story. Risk maps help show where some of these threats are concentrated throughout Provo.

<div className="hazard-map-links">

  <a
    href={useBaseUrl('/files/provo-flood-plain-map.pdf')}
    target="_blank"
    rel="noopener noreferrer"
    className="hazard-map-button"
  >
    Flood Hazard Map
  </a>

  <a
    href={useBaseUrl('/files/provo-landslide-map.pdf')}
    target="_blank"
    rel="noopener noreferrer"
    className="hazard-map-button"
  >
    Landslide Hazard Map
  </a>

  <a
    href={useBaseUrl('/files/provo-wildfire-map.pdf')}
    target="_blank"
    rel="noopener noreferrer"
    className="hazard-map-button"
  >
    Wildfire Hazard Map
  </a>

  <a
    href={useBaseUrl('/files/provo-liquefaction-map.pdf')}
    target="_blank"
    rel="noopener noreferrer"
    className="hazard-map-button"
  >
    Liquefaction Hazard Map
  </a>

</div>
 
---

## Preparing for Disasters

:::warning Transportation & Access During a Major Emergency
 
Provo's geography can make movement through the city more difficult during a large emergency. Utah Lake, the Wasatch Mountains, the Provo River, Interstate 15, and the railroad corridor all influence how people and emergency resources move through the community.
 
The 2022 assessment specifically notes that areas west of I-15 have relatively few crossings to the east side of the city, which could create congestion during a large-scale evacuation.
 
A major disaster could also damage or temporarily close roads, bridges, rail crossings, and other transportation routes.
 
:::

---
 
## Stay Informed

:::danger Emergency Alerts

PACT encourages everyone in the Provo community to sign up for local emergency notification systems. These alerts can provide important information and instructions before, during, and after an emergency.

When an emergency occurs, monitor official alerts and follow instructions from Provo City, Utah County, and other public-safety agencies.


<div style={{
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem 0 1rem',
}}>
  <a
    href={useBaseUrl('/docs/resources/emergency-notification-systems/')}
    className="button button--danger button--lg"
  >
    <BellRing
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>Emergency Notification Systems</span>
  </a>
</div>

:::

---
 
## Disasters
 
The cards below provide information about different types of disasters, including how they occur, the impacts they can cause, and how they may affect Provo and Utah County.

<DisasterCard
  id="earthquake"
  title="Earthquake"
  image="/img/earthquake.png"
  likelihood="Unlikely"
  likelihoodLevel={1}
  magnitude="Catastrophic"
  magnitudeLevel={4}
  impacts={['safety', 'infrastructure', 'utilities', 'communications', 'transportation']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="2020 — Magna Earthquake"
  exampleText="On March 18, 2020, a magnitude 5.7 earthquake struck near Magna, Utah. Shaking was felt across much of the Wasatch Front, causing structural damage and utility disruptions. The event demonstrated how even a moderate earthquake can affect communities throughout the region."
>
  <p>
    Earthquakes occur when accumulated stress within the Earth's crust causes
    rocks to suddenly slip along a fault, releasing energy as seismic waves
    that shake the ground. Depending on their size and location, earthquakes
    can cause anything from minor tremors to widespread destruction.
  </p>

  <p>
    Provo is located along the Wasatch Fault, an active fault system capable
    of producing large earthquakes. A major earthquake along this fault
    could generate intense ground shaking throughout Utah Valley, with
    older buildings and structures not designed to modern seismic standards
    particularly vulnerable to damage.
  </p>

  <p>
    Severe ground shaking could damage or collapse buildings, compromise
    roads and bridges, and disrupt critical infrastructure. Widespread
    interruptions to electricity, natural gas, water, transportation,
    and communications could complicate emergency response and recovery
    efforts.
  </p>
</DisasterCard>

<AboutHazardModal id="earthquake" title="Earthquakes">
  <div>

  #### Earthquake Magnitude

  Earthquake magnitude measures the size of an earthquake at its source.
  Although commonly called the **Richter scale**, most modern earthquakes
  are measured using the **Moment Magnitude Scale (Mw)**, which provides
  more reliable measurements of large earthquakes.

  The scale is logarithmic. Each whole-number increase represents
  approximately **10 times the measured seismic wave amplitude** and
  **32 times the energy released**.

  | Magnitude | Classification |
  |---|---|
  | 2.0–3.9 | Minor |
  | 4.0–4.9 | Light |
  | 5.0–5.9 | Moderate |
  | 6.0–6.9 | Strong |
  | 7.0–7.9 | Major |
  | 8.0+ | Great |

  #### Magnitude vs. Intensity

  Magnitude measures the overall size of an earthquake, while intensity
  describes how strongly the ground shakes at a particular location.

  The **Modified Mercalli Intensity Scale** uses Roman numerals from I
  (not felt) to XII (total destruction) to describe observed shaking
  and damage.

  Two communities can experience different shaking intensities from
  the same earthquake because of their distance from the fault,
  local geology, and other factors.

  #### How Earthquakes Cause Damage

  - **Ground Shaking:** Seismic waves cause the ground and structures
    to move. Strong shaking can damage foundations, walls, and other
    structural components.

  - **Surface Rupture:** Movement along a fault can displace the ground
    surface, potentially damaging buildings, roads, and utilities
    constructed across the fault.

  - **Building Vulnerability:** Older buildings, particularly those
    constructed with unreinforced masonry, are often more susceptible
    to earthquake damage than structures designed to modern seismic
    standards.

  - **Infrastructure Disruption:** Earthquakes can damage roads,
    bridges, power lines, water mains, and natural gas pipelines,
    interrupting essential services and complicating emergency response.

  Earthquake damage depends on more than magnitude alone. The depth
  of the earthquake, distance from the fault, local ground conditions,
  and construction quality all influence the severity of its impacts.

  **Learn More:** [USGS — Earthquake Magnitude, Energy Release, and Shaking Intensity](https://www.usgs.gov/programs/earthquake-hazards/earthquake-magnitude-energy-release-and-shaking-intensity)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="liquefaction"
  title="Liquefaction"
  image="/img/liquefaction.png"
  impacts={['infrastructure', 'utilities', 'communications', 'transportation']}
  about={true}
  riskMap="/files/provo-liquefaction-map.pdf"
  exampleLabel="Local Example"
  exampleTitle="Liquefaction Potential in Provo"
  exampleText="Large portions of western Provo are located on soils susceptible to liquefaction. The 2022 Pre-Disaster Mitigation Plan identifies significant exposure throughout the city, particularly in areas with loose sediments and shallow groundwater."
>
  <p>
    Liquefaction occurs when loose, water-saturated soil temporarily loses
    its strength during strong earthquake shaking. As pressure builds
    between soil particles, the ground can behave more like a liquid
    than a solid, losing its ability to support buildings and other
    structures.
  </p>

  <p>
    Utah Valley is particularly susceptible to liquefaction because
    much of the valley floor consists of sediments deposited by ancient
    Lake Bonneville and local rivers. Areas near Utah Lake, the Provo
    River, and locations with shallow groundwater are especially
    vulnerable when strong ground shaking occurs.
  </p>

  <p>
    Liquefaction can cause buildings to sink or tilt, roads to buckle,
    and underground utilities to rupture. Ground settlement and
    horizontal movement can damage foundations, bridges, pipelines,
    and other infrastructure, even when structures survive the
    initial earthquake shaking.
  </p>
</DisasterCard>

<AboutHazardModal id="liquefaction" title="Liquefaction">
  <div>

  #### How Liquefaction Occurs

  Under normal conditions, soil particles press against one another,
  allowing the ground to support the weight of buildings, roads,
  and other structures.

  When loose, saturated soil experiences strong earthquake shaking,
  the particles attempt to rearrange into a more compact configuration.
  Because water occupies the spaces between the particles, the
  shaking can cause **pore-water pressure** to increase.

  As this pressure rises, the contact forces between soil particles
  decrease, reducing the soil's strength. If enough strength is lost,
  the soil temporarily behaves more like a liquid than a solid.

  Liquefaction does not mean the ground literally turns into water.
  Instead, the soil loses much of its ability to support loads
  and resist movement.

  #### Conditions That Contribute to Liquefaction

  Three primary conditions make liquefaction more likely:

  - **Loose Soil:** Sandy or silty soils with loosely packed particles
    are particularly susceptible.

  - **Water Saturation:** Groundwater fills the spaces between soil
    particles, allowing pore-water pressure to increase during shaking.

  - **Strong Ground Shaking:** Earthquake vibrations disturb the soil
    structure and can cause it to lose strength.

  These conditions frequently occur in river valleys, former lakebeds,
  and areas with relatively shallow groundwater.

  #### Types of Liquefaction Damage

  Liquefaction can produce several types of ground deformation:

  - **Ground Settlement:** Soil compacts or shifts, causing the
    ground surface to sink unevenly. Buildings may settle or tilt
    as their foundations lose support.

  - **Lateral Spreading:** Large sections of ground move horizontally
    over liquefied soil, sometimes toward rivers, slopes, or other
    areas with less lateral support.

  - **Loss of Bearing Strength:** Soil beneath a structure becomes
    unable to support its weight, potentially causing foundations
    to sink or shift.

  - **Sand Boils:** Water and sediment are forced upward through
    cracks in the ground, depositing sand or silt at the surface.

  - **Underground Infrastructure Damage:** Soil movement can break
    water mains, sewer lines, natural gas pipelines, and other
    buried utilities.

  #### Why Utah Valley Is Vulnerable

  Much of Utah Valley was once covered by **Lake Bonneville**, a
  large prehistoric lake that deposited extensive layers of
  sediment across the valley floor.

  These deposits, along with sediment carried by rivers and
  streams, created areas of loose, sandy, and silty soils.

  In locations where groundwater is relatively close to the
  surface, these soil conditions can become susceptible to
  liquefaction during strong earthquakes.

  Liquefaction potential varies significantly across Provo.
  Actual susceptibility depends on local soil composition,
  groundwater depth, and the intensity of earthquake shaking.

  **Learn More:** [Utah Geological Survey — Liquefaction](https://geology.utah.gov/hazards/earthquakes/liquefaction/)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="wildfire"
  title="Wildfire"
  image="/img/wildfire.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['safety', 'housing', 'air', 'communications', 'environment']}
  about={true}
  riskMap="/files/provo-wildfire-map.pdf"
  exampleLabel="Local Example"
  exampleTitle="2018 — Bald Mountain & Pole Creek Fires"
  exampleText="The Bald Mountain and Pole Creek Fires burned approximately 120,851 acres in southern Utah County and surrounding areas. The lightning-caused fires prompted widespread evacuations, threatened thousands of homes, and disrupted transportation routes, demonstrating how rapidly wildfires can threaten communities along the Wasatch Front."
>
  <p>
    Wildfires are uncontrolled fires that spread through vegetation such as
    grass, brush, and forests. They can ignite naturally through lightning
    or result from human activities, including unattended fires, equipment
    use, and electrical failures. Under hot, dry, and windy conditions,
    wildfires can spread rapidly and become difficult to contain.
  </p>

  <p>
    Provo's location along the Wasatch Mountains places portions of the
    city near the wildland-urban interface, where homes and developed
    areas meet natural vegetation. Dry summers, seasonal winds, and
    steep foothill terrain can create conditions favorable for wildfire
    ignition and rapid fire spread.
  </p>

  <p>
    Wildfires can destroy homes, damage utilities and transportation
    infrastructure, and force residents to evacuate. Smoke and airborne
    particles can also affect air quality across Utah Valley, even
    when fires are burning far from populated areas. Large wildfires
    can strain emergency response resources and disrupt essential
    services for extended periods.
  </p>
</DisasterCard>

<AboutHazardModal id="wildfire" title="Wildfire">
  <div>

  #### The Fire Triangle

  Fire requires three essential elements to ignite and continue burning:

  - **Heat:** An ignition source, such as lightning, sparks, flames,
    or hot equipment, provides the energy needed to start combustion.

  - **Fuel:** Combustible materials, including dry grass, shrubs,
    trees, and other vegetation, provide material for the fire
    to consume.

  - **Oxygen:** Oxygen in the surrounding air supports the
    combustion process.

  Together, these elements form the **Fire Triangle**. Removing any
  one of them can stop combustion.

  #### The Fire Behavior Triangle

  Once a wildfire starts, three primary factors determine how
  quickly it spreads and how intensely it burns:

  - **Fuel:** The type, amount, arrangement, and moisture content
    of vegetation affect how readily a fire ignites and spreads.
    Dry grasses can carry flames rapidly, while larger vegetation
    can sustain intense fires for longer periods.

  - **Weather:** Wind, temperature, humidity, and precipitation
    strongly influence wildfire behavior. Strong winds can push
    flames toward unburned vegetation, while hot temperatures
    and low humidity can dry out available fuels.

  - **Topography:** Slope steepness, elevation, and terrain shape
    influence fire movement. Fires generally spread faster uphill
    because rising heat and flames preheat vegetation above them.

  These three factors form the **Fire Behavior Triangle** and help
  explain why wildfires can behave differently as they move
  through changing landscapes and weather conditions.

  #### How Wildfires Spread

  Wildfires spread through several processes:

  - **Surface Fires:** Burn through grasses, shrubs, fallen leaves,
    and other vegetation near the ground.

  - **Crown Fires:** Spread through the upper branches and foliage
    of trees, often producing intense flames and rapid fire growth.

  - **Ground Fires:** Burn through organic material beneath the
    surface, sometimes smoldering for extended periods.

  - **Spot Fires:** Develop when burning embers are carried by
    wind or rising air currents and ignite vegetation or
    structures ahead of the main fire.

  Spotting is particularly dangerous because embers can cross
  roads, firebreaks, and other barriers that might otherwise
  slow the spread of a wildfire.

  #### Why Wildfires Can Spread Rapidly

  Several environmental conditions can combine to produce
  extreme fire behavior:

  - **Strong Winds:** Push flames toward unburned vegetation
    and carry embers ahead of the main fire.

  - **Low Humidity:** Allows vegetation to dry more easily,
    increasing its susceptibility to ignition.

  - **High Temperatures:** Can contribute to drying vegetation
    and reducing fuel moisture.

  - **Steep Slopes:** Allow rising heat to preheat vegetation
    uphill, often increasing the rate of fire spread.

  - **Continuous Vegetation:** Unbroken areas of grass, brush,
    or forest can allow fires to spread across large distances.

  Changes in wind direction or terrain can cause sudden shifts
  in fire behavior, making wildfire movement difficult to predict.

  **Learn More:** [National Park Service — Wildland Fire Behavior](https://www.nps.gov/articles/wildland-fire-behavior.htm)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="flooding"
  title="Flooding"
  image="/img/flooding.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['safety', 'housing', 'infrastructure', 'utilities', 'communications']}
  about={true}
  riskMap="/files/provo-flood-plain-map.pdf"
  exampleLabel="Local Example"
  exampleTitle="September 2013 — Provo Flooding"
  exampleText="On September 7, 2013, intense rainfall caused widespread flash flooding across Provo and other Utah County communities. Floodwaters damaged roads, homes, and public facilities, including Lions Park. At least 25 Provo homes sustained major damage, while more than 50 experienced minor damage."
>
  <p>
    Flooding occurs when water accumulates or flows into areas that are
    normally dry. It can result from prolonged rainfall, intense
    thunderstorms, rapid snowmelt, overflowing rivers, or drainage
    systems becoming overwhelmed. Flooding can develop gradually
    over several days or occur suddenly with little warning.
  </p>

  <p>
    Provo's location between the Wasatch Mountains and Utah Lake
    creates several potential flooding hazards. Snowmelt and heavy
    precipitation can increase flows in the Provo River and other
    waterways, while steep mountain terrain can channel runoff
    rapidly toward developed areas. Low-lying neighborhoods and
    locations with limited drainage capacity may be especially
    susceptible to flooding.
  </p>

  <p>
    Flooding can damage homes, businesses, roads, bridges, and
    underground utilities. Rising water can make transportation
    routes impassable, overwhelm stormwater infrastructure, and
    threaten public safety. Significant flooding may require
    evacuations and disrupt essential services while damaged
    infrastructure is repaired.
  </p>
</DisasterCard>

<AboutHazardModal id="flooding" title="Flooding">
  <div>

  #### Types of Flooding

  Flooding can occur through several different processes:

  - **River Flooding:** Occurs when water levels rise above the
    banks of a river or stream, inundating surrounding land.
    Prolonged rainfall and melting snowpack can increase river
    flows beyond the capacity of the channel.
  - **Flash Flooding:** Develops rapidly, often within minutes
    or hours of intense rainfall. Flash floods can produce
    powerful currents with little warning, particularly in
    mountainous terrain, narrow canyons, and urban areas.

  - **Snowmelt Flooding:** Occurs when rising temperatures cause
    accumulated snow to melt faster than rivers, streams, and
    drainage systems can accommodate the resulting runoff.
    Rapid warming or rainfall on an existing snowpack can
    increase the risk.

  - **Urban Flooding:** Occurs when rainwater accumulates on
    streets, parking lots, and other developed surfaces because
    storm drains and drainage channels cannot carry it away
    quickly enough.

  #### How Flooding Develops

  Flooding occurs when water enters an area faster than the
  surrounding environment or drainage infrastructure can
  accommodate it.

  Several factors influence how quickly floodwaters accumulate:

  - **Precipitation Intensity:** Heavy rainfall over a short
    period can overwhelm drainage systems and cause rapid runoff.

  - **Soil Saturation:** When soil is already saturated, less
    additional water can infiltrate the ground, increasing
    surface runoff.

  - **Snowpack and Temperature:** Rapid warming can release
    large volumes of water stored in mountain snowpack,
    increasing streamflow.

  - **Topography:** Steep slopes accelerate runoff, while
    valleys and low-lying areas can concentrate accumulating
    floodwaters.

  - **Urban Development:** Roads, buildings, and paved surfaces
    reduce the amount of water that can soak into the ground,
    increasing runoff into stormwater systems.

  These factors can combine, causing flooding even when
  precipitation occurs outside the area ultimately affected.

  #### Understanding Floodplains

  A **floodplain** is an area of land adjacent to a river,
  stream, or other waterway that may become inundated when
  water levels exceed the normal channel.

  Floodplains are a natural part of river systems. During
  periods of high flow, water spreads beyond the riverbanks
  into surrounding low-lying areas.

  Development within floodplains can increase the potential
  for damage when flooding occurs. Floodplain maps identify
  areas with modeled flood hazards and help communities
  understand where significant flooding may occur.

  However, flooding is not limited to designated floodplains.
  Heavy rainfall, drainage failures, and localized runoff
  can cause flooding in areas outside mapped flood zones.

  #### Understanding the 100-Year Flood

  Flood risk is often described using statistical probabilities.

  A **100-year flood** does not mean that a flood occurs
  only once every 100 years. Instead, it describes a flood
  magnitude with a **1% chance of being equaled or exceeded
  in any given year**.

  Common flood probability classifications include:

  | Flood Classification | Annual Probability |
  |---|---|
  | 10-Year Flood | 10% |
  | 25-Year Flood | 4% |
  | 50-Year Flood | 2% |
  | 100-Year Flood | 1% |
  | 500-Year Flood | 0.2% |

  Each year's probability is independent of previous years.
  Therefore, a 100-year flood could occur in consecutive
  years or multiple times within a relatively short period.

  Over a 30-year period, an area exposed to a 1% annual-chance
  flood has approximately a **26% chance** of experiencing at
  least one flood of that magnitude or greater, assuming the
  annual probability remains constant.

  Understanding these probabilities helps explain why
  significant flooding remains possible even in locations
  where major floods are relatively uncommon.

  **Learn More:** [National Weather Service — Flood Hazards](https://www.weather.gov/safety/flood-hazards)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="landslide"
  title="Landslide"
  image="/img/landslide.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Critical"
  magnitudeLevel={3}
  impacts={['safety', 'housing', 'infrastructure', 'transportation', 'communications']}
  about={true}
  riskMap="/files/provo-landslide-map.pdf"
  exampleLabel="Local Example"
  exampleTitle="2005 — Sherwood Hills, Provo"
  exampleText="Following an unusually wet winter in 2005, elevated groundwater levels contributed to renewed landslide movement in Provo's Sherwood Hills neighborhood. The slow-moving landslide damaged homes and infrastructure, resulting in multiple homes being condemned. The event demonstrated how unstable slopes can threaten developed neighborhoods even without sudden, rapid ground movement."
>
  <p>
    Landslides occur when soil, rock, or other earth materials move
    downhill under the influence of gravity. They develop when the
    forces pulling material downslope exceed the strength holding
    it in place. Landslides can occur suddenly or develop gradually,
    with some continuing to move over months or years.
  </p>

  <p>
    Provo's location along the Wasatch Mountains creates areas of
    elevated landslide susceptibility, particularly along steep
    foothills and slopes containing unstable geologic materials.
    Groundwater, heavy precipitation, erosion, and changes to
    natural slopes can contribute to instability. Previous
    landslide activity in developed neighborhoods demonstrates
    that these hazards are not limited to undeveloped mountainsides.
  </p>

  <p>
    Landslides can damage or destroy homes, roads, retaining walls,
    and underground utilities as the ground shifts beneath them.
    Even slow movement can crack foundations, distort structures,
    and compromise essential infrastructure. Significant landslides
    may force evacuations, restrict access to neighborhoods, and
    create costly, long-term recovery challenges.
  </p>
</DisasterCard>

<AboutHazardModal id="landslide" title="Landslide">
  <div>

  #### How Landslides Occur

  Gravity continuously pulls soil and rock downhill. Under stable
  conditions, the strength of the earth materials and the friction
  between them resist this movement.

  A landslide occurs when the forces pulling material downhill
  become greater than the forces holding the slope in place.

  This can happen when a slope becomes overloaded, its supporting
  material is removed, or the strength of the underlying soil
  and rock decreases.

  Water is one of the most important factors influencing slope
  stability. As groundwater accumulates, it can increase the
  weight of slope materials and reduce the friction and strength
  that help keep them in place.

  #### Types of Landslides

  Landslides can take several forms depending on the materials
  involved and how they move:

  - **Rotational Slides:** Soil or rock moves along a curved
    failure surface, often causing the upper portion of the
    sliding mass to tilt backward. These movements can create
    steep scarps and uneven ground surfaces.

  - **Translational Slides:** Material moves downhill along
    a relatively flat or planar surface. Large sections of
    soil or rock may shift together while remaining partially
    intact.

  - **Rockfalls:** Individual rocks or larger rock masses
    detach from steep slopes or cliffs and fall, bounce,
    or roll downhill. Rockfalls can occur rapidly and
    travel considerable distances.

  - **Slope Creep:** Extremely slow movement of soil or rock
    downhill over long periods. Creep may gradually deform
    roads, fences, retaining walls, and building foundations.

  The speed and scale of landslide movement can vary greatly.
  Some landslides move only a few inches over several years,
  while others can travel downhill in seconds.

  #### What Triggers Landslides?
  Several natural and human-related factors can cause slopes
  to become unstable:

  - **Heavy Precipitation:** Rainwater infiltrates the ground,
    increasing soil moisture and groundwater pressure.

  - **Snowmelt:** Rapid melting can introduce substantial
    amounts of water into hillsides, particularly following
    winters with significant snow accumulation.

  - **Groundwater Changes:** Rising groundwater levels can
    reduce the strength of soil and rock, allowing existing
    landslides to reactivate.

  - **Erosion:** Streams, runoff, or excavation can remove
    material supporting the base of a slope.

  - **Earthquake Shaking:** Ground vibrations can temporarily
    increase forces acting on unstable slopes and trigger
    movement.

  - **Human Activity:** Construction, grading, irrigation,
    excavation, and changes to drainage patterns can alter
    slope stability.

  Landslides often result from several contributing factors
  rather than a single cause.

  #### Understanding Slow-Moving Landslides

  Not all landslides occur suddenly. Some move gradually
  over months, years, or even decades.

  Slow-moving landslides can remain relatively stable for
  long periods before becoming active again when groundwater
  levels rise or other conditions change.

  As the ground moves, buildings and infrastructure can
  experience uneven displacement, causing:

  - Cracks in foundations, walls, and pavement.
  - Doors and windows to become misaligned.
  - Retaining walls and fences to tilt or separate.
  - Underground water, sewer, and utility lines to break.
  - Roads and sidewalks to shift or buckle.

  The Sherwood Hills landslides in Provo demonstrate how
  repeated slope movement can affect developed neighborhoods
  over extended periods.

  **Learn More:** [USGS — Landslide Types and Processes](https://pubs.usgs.gov/fs/2004/3072/)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="mudslide"
  title="Mudslides & Debris Flows"
  image="/img/mudslide.png"
  alt="Mudslide and Debris Flow"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Critical"
  magnitudeLevel={3}
  impacts={['safety', 'infrastructure', 'transportation', 'utilities', 'communications']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="2025 — Buckley Draw, Provo"
  exampleText="On August 27, 2025, intense rainfall over the recently burned Buckley Draw watershed triggered a major debris flow in southeastern Provo. Approximately 15 acre-feet of sediment and debris moved downhill, overwhelming portions of the protective infrastructure, damaging a church building, and reaching State Street. Existing diversion structures helped prevent more extensive damage to nearby residential neighborhoods."
>
  <p>
    Mudslides and debris flows occur when water mixes with loose soil,
    rocks, sediment, and vegetation, creating a moving mass that
    travels downhill under the force of gravity. Unlike ordinary
    flooding, debris flows contain large amounts of solid material
    and can carry boulders, trees, and other heavy objects.
    These flows can develop rapidly and travel with tremendous force.
  </p>

  <p>
    Provo's steep foothills and mountain drainages create conditions
    where debris flows can occur, particularly following intense
    rainfall or wildfire. Areas below recently burned watersheds
    are especially vulnerable because vegetation loss and changes
    to soil conditions can increase runoff and erosion.
    Drainages along the eastern benches can channel debris
    toward developed neighborhoods.
  </p>

  <p>
    Debris flows can bury roads, damage or destroy buildings,
    overwhelm drainage systems, and sever underground utilities.
    Their combination of water, sediment, and large debris makes
    them especially destructive. Flows can develop with little
    warning, threatening residents and infrastructure located
    along drainage channels and at the base of steep slopes.
  </p>
</DisasterCard>

<AboutHazardModal id="mudslide" title="Mudslides & Debris Flows">
  <div>

  #### How Debris Flows Form

  Debris flows develop when loose earth materials become
  mobilized by water and begin moving downhill.

  Heavy rainfall can produce rapid runoff that erodes soil
  and picks up loose sediment, rocks, and vegetation.
  As more material becomes incorporated into the moving
  water, it can transform into a thick, debris-laden flow.

  Unlike ordinary streamflow, debris flows contain enough
  sediment and rock to behave as a dense, moving mixture.
  The concentration of solid material allows them to
  transport large objects that flowing water alone
  might not be able to move.

  Debris flows often travel through existing stream channels,
  gullies, and mountain drainages before spreading outward
  onto flatter terrain.

  #### Mudslides vs. Debris Flows

  Although the terms are frequently used interchangeably,
  they can describe different types of earth movement.

  - **Mudflows:** Flows consisting primarily of water and
    fine-grained materials such as clay, silt, and mud.
    They generally contain fewer large rocks than
    typical debris flows.

  - **Debris Flows:** Rapidly moving mixtures of water,
    mud, sand, gravel, rocks, and vegetation. They can
    carry large boulders and trees over considerable
    distances.

  - **Debris Avalanches:** Extremely rapid movements of
    loose earth materials that may travel long distances
    down steep terrain, sometimes with relatively little
    water compared with debris flows.

  The term "mudslide" is commonly used to describe several
  types of moving mud or sediment, but **debris flow** is
  generally the more precise scientific term when referring
  to fast-moving mixtures of water and coarse material.

  #### Why Wildfires Increase Debris Flow Risk

  Wildfires can significantly change how water moves
  across a watershed.

  Under normal conditions, vegetation intercepts rainfall,
  root systems help stabilize soil, and organic material
  slows surface runoff.

  Following a wildfire, several changes may occur:

  - **Vegetation Loss:** Burned vegetation provides less
    protection against rainfall and surface erosion.

  - **Reduced Soil Absorption:** Fire can contribute to
    water-repellent soil conditions, reducing the amount
    of rainwater that infiltrates the ground.

  - **Increased Surface Runoff:** Rainfall can move more
    rapidly across exposed slopes and into drainage channels.

  - **Sediment Mobilization:** Runoff can pick up loose
    soil, ash, rocks, and other material, increasing
    the volume and destructive force of the flow.

  These conditions can allow relatively short, intense
  rainstorms to generate destructive debris flows.

  The risk is often greatest during the first rainy season
  following a wildfire, although elevated runoff and
  erosion hazards may persist as the landscape recovers.

  #### How Debris Flows Travel

  Debris flows behave differently from ordinary floodwater
  because they contain a high concentration of sediment
  and other solid materials.

  As a debris flow moves downhill, it may:

  - **Accelerate on Steep Slopes:** Gravity increases the
    speed and momentum of the moving material.

  - **Follow Drainage Channels:** Existing gullies and
    streambeds can concentrate and direct the flow.

  - **Increase in Volume:** The flow can collect additional
    sediment, rocks, and vegetation as it travels.
  - **Spread onto Alluvial Fans:** When a flow exits a
    narrow canyon and reaches flatter ground, it can
    spread outward and deposit large amounts of debris.

  - **Block or Change Drainage Paths:** Accumulated debris
    can obstruct channels, redirecting subsequent water
    and sediment into new areas.

  These characteristics make debris flows particularly
  dangerous near canyon mouths and developed areas
  below steep mountain drainages.

  #### Understanding Debris Flow Mitigation

  Because debris flows can carry enormous amounts of
  sediment and rock, communities sometimes construct
  specialized infrastructure to reduce their impacts.

  Common engineering approaches include:

  - **Debris Basins:** Designed to capture and temporarily
    store sediment and other debris carried downhill.

  - **Diversion Channels:** Direct flows toward designated
    areas and away from vulnerable buildings.

  - **Deflection Berms:** Earthen barriers that redirect
    moving material away from structures.

  - **Check Dams:** Small barriers placed within channels
    to reduce erosion and retain portions of transported
    sediment.

  These structures can reduce damage but cannot eliminate
  the risk, particularly when flows exceed their
  engineered design capacity.

  Provo's Buckley Draw watershed demonstrates both the
  effectiveness and limitations of debris flow mitigation.
  Following a 2002 wildfire, a diversion channel and
  protective barriers were constructed in 2003.

  These structures helped contain the 2003 mudflow and
  continued to provide protection during the much larger
  2025 event, although portions of the 2025 flow exceeded
  the available protective capacity.

  **Learn More:** [USGS — Post-Fire Flooding and Debris Flow](https://www.usgs.gov/centers/california-water-science-center/science/post-fire-flooding-and-debris-flow)

  **Local Study:** [Provo City — Buckley Draw Debris Flow Forensic Study](https://www.provo.gov/DocumentCenter/View/7408/Buckley-Draw-Debris-Flow-Forensic-Study-PDF)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="sinkhole"
  title="Sinkhole"
  image="/img/sinkhole.png"
  impacts={['safety', 'infrastructure', 'utilities', 'transportation']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Sinkhole and Ground Collapse Hazards in Utah"
  exampleText="Sinkholes occur in parts of Utah where soluble bedrock, including limestone and gypsum, can develop underground cavities. Although ground-collapse hazards exist in the state, the 2022 Pre-Disaster Mitigation Plan does not identify sinkholes as a separately rated hazard for Provo."
>
  <p>
    Sinkholes are depressions or openings in the ground that form when
    underlying material can no longer support the surface above it.
    They commonly develop when groundwater gradually dissolves
    soluble bedrock, creating underground voids that may eventually
    collapse. Sinkholes can form slowly over many years or appear
    suddenly when the ground gives way.
  </p>

  <p>
    In Utah, natural sinkholes are associated primarily with areas
    containing soluble rock formations such as limestone, gypsum,
    and salt. Sinkholes are not identified as a major Provo-specific
    hazard in the regional mitigation plan, although localized
    ground collapse can occur where underground erosion or other
    subsurface conditions remove support from the ground above.
  </p>

  <p>
    Sinkholes and other localized ground collapses can damage
    buildings, roads, sidewalks, and underground utilities.
    Sudden collapses can create dangerous openings in developed
    areas, while gradual ground movement may cause foundations
    and pavement to crack or settle. The severity of damage
    depends on the size, depth, and location of the collapse.
  </p>
</DisasterCard>

<AboutHazardModal id="sinkhole" title="Sinkhole">
  <div>

  #### How Sinkholes Form

  Most natural sinkholes develop through a geological process
  known as **dissolution**, in which water gradually dissolves
  certain types of bedrock.

  Rainwater absorbs small amounts of carbon dioxide from the
  atmosphere and soil, forming a weak carbonic acid.
  As this water moves underground, it can slowly dissolve
  susceptible rocks such as limestone.

  Over time, several changes may occur:

  1. **Rock Dissolution:** Groundwater gradually dissolves
     portions of the underlying bedrock.

  2. **Cavity Formation:** Small fractures and openings
     expand into larger underground spaces.

  3. **Loss of Support:** The material above the cavity
     becomes increasingly unstable as the void grows.

  4. **Ground Collapse:** When the overlying material
     can no longer support its own weight, it may settle
     or collapse into the cavity.

  This process can take hundreds or thousands of years,
  although the final collapse may occur suddenly.

  Landscapes shaped by the dissolution of soluble bedrock
  are known as **karst terrain**.

  #### Types of Sinkholes

  Geologists generally recognize three common types
  of natural sinkholes:

  - **Dissolution Sinkholes:** Form where soluble bedrock
    is exposed or covered by only a thin layer of soil.
    Water gradually dissolves the rock, creating shallow
    depressions at the surface.

  - **Cover-Subsidence Sinkholes:** Develop when loose
    sediment gradually moves downward into openings
    within the underlying bedrock. These sinkholes
    typically form slowly and may produce broad,
    shallow depressions.

  - **Cover-Collapse Sinkholes:** Occur when a layer of
    cohesive soil or sediment temporarily bridges an
    underground cavity before suddenly collapsing.
    These events can create deep, steep-sided holes
    with little visible warning.

  The type of sinkhole that develops depends on the
  underlying geology, groundwater conditions, and
  characteristics of the overlying soil.

  #### Natural vs. Human-Caused Ground Collapse

  Not every sudden opening in the ground is a
  geological sinkhole.

  Ground collapse can also result from human activity
  or failures in underground infrastructure.

  Examples include:

  - **Underground Erosion:** Flowing water can transport
    soil through underground openings, gradually
    creating voids beneath the surface.

  - **Broken Water or Sewer Lines:** Leaking pipes
    can wash away surrounding soil, removing support
    beneath roads, sidewalks, or structures.

  - **Underground Excavation:** Abandoned mines,
    tunnels, or other subsurface excavations can
    collapse when supporting materials deteriorate.

  - **Groundwater Withdrawal:** Lowering groundwater
    levels can contribute to subsidence or trigger
    collapse in areas already susceptible to
    sinkhole formation.

  Although these processes can produce similar
  surface damage, their underlying causes differ.
  A pavement collapse caused by a broken water
  main, for example, is not necessarily a
  natural geological sinkhole.

  #### Sinkholes in Utah

  Utah contains several types of soluble bedrock,
  including limestone, gypsum, and salt deposits.

  Where groundwater interacts with these materials,
  dissolution can create underground cavities and
  surface depressions.

  One documented example is **Hole-in-the-Ground**
  in Snake Valley, Millard County. This natural
  sinkhole formed in limestone bedrock and provides
  a visible example of how underground dissolution
  can produce a large surface collapse.

  However, sinkhole susceptibility varies considerably
  across Utah and depends on local geology.

  The presence of sinkholes elsewhere in Utah does
  not necessarily indicate that similar conditions
  exist beneath Provo.

  **Learn More:** [USGS — Sinkholes](https://www.usgs.gov/water-science-school/science/sinkholes)

  **Utah Example:** [Utah Geological Survey — Hole-in-the-Ground, Snake Valley](https://geology.utah.gov/map-pub/survey-notes/geosights/geosights-hole-in-the-ground-snake-valley-millard-county-utah/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="avalanche"
  title="Avalanche"
  image="/img/avalanche.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['safety', 'transportation', 'communications', 'services']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="Avalanche Control in Provo Canyon"
  exampleText="Provo Canyon contains steep mountain slopes where avalanches can threaten US-189 and surrounding areas. The Utah Department of Transportation conducts avalanche mitigation, including controlled releases and temporary road closures, to reduce the danger to motorists. The 2022 Pre-Disaster Mitigation Plan also identifies snow sheds and avalanche-control fencing as measures for protecting transportation routes through the canyon."
>
  <p>
    Avalanches occur when a mass of snow suddenly breaks loose and moves
    downhill under the force of gravity. They develop when the forces
    pulling snow downslope exceed the strength holding the snowpack
    together. Avalanches can travel at high speeds, carrying enormous
    amounts of snow and debris down mountain slopes.
  </p>

  <p>
    Provo's proximity to the Wasatch Mountains creates significant
    avalanche hazards in nearby mountainous areas, particularly
    Provo Canyon and the surrounding high-elevation terrain.
    Heavy snowfall, wind, changing temperatures, and steep
    slopes can create unstable snow conditions. Although most
    developed areas of Provo are not directly exposed, nearby
    mountain roads and recreational areas can be vulnerable.
  </p>

  <p>
    Avalanches can bury or injure people, damage infrastructure,
    and block transportation routes. Large avalanches may
    deposit substantial amounts of snow and debris across
    roadways, temporarily isolating communities or restricting
    access through mountain corridors. Avalanche hazards can
    also complicate emergency response and transportation
    during severe winter conditions.
  </p>
</DisasterCard>

<AboutHazardModal id="avalanche" title="Avalanche">
  <div>

  #### How Avalanches Form

  An avalanche occurs when the force pulling snow downhill
  becomes greater than the strength holding the snowpack
  in place.

  Snow accumulates in layers throughout the winter. Each
  snowfall can create a new layer with different characteristics,
  including density, temperature, moisture content, and
  crystal structure.

  Some layers bond strongly together, while others contain
  weak or poorly bonded snow crystals.

  When a stronger, cohesive layer of snow rests on a weaker
  layer, the snowpack can become unstable. If the weak layer
  fails, the overlying snow may fracture and slide downhill.

  Four important ingredients contribute to many avalanches:

  1. **Snow:** Enough accumulated snow to form a moving mass.
  2. **Slope:** Terrain steep enough for gravity to pull the
     snow downhill.
  3. **Instability:** Weak layers or insufficient bonding
     within the snowpack.
  4. **Trigger:** An additional force or change that causes
     the unstable snow to release.

  Different avalanche types can form through different
  processes, but all involve snow moving downhill under
  the influence of gravity.

  #### Types of Avalanches

  Avalanches are classified according to how the snow
  releases and the characteristics of the moving material.

  - **Slab Avalanches:** Occur when a cohesive layer of
    snow fractures and slides over a weaker layer
    beneath it. Slab avalanches can release across
    large areas and are responsible for most fatal
    avalanche accidents.

  - **Loose Snow Avalanches:** Begin at a single point
    and spread outward as they move downhill, creating
    a fan-shaped path. They occur when loose,
    unconsolidated snow loses its stability.

  - **Wet Snow Avalanches:** Develop when liquid water
    weakens bonds between snow grains. They are often
    associated with warming temperatures, rain,
    or melting snow.

  - **Dry Snow Avalanches:** Involve relatively dry snow
    and can move rapidly, sometimes producing large
    airborne clouds of snow particles.

  These classifications can overlap. For example,
  a slab avalanche may involve either wet or dry snow.

  #### What Triggers Avalanches?

  Snowpack stability can change rapidly as environmental
  conditions evolve.

  Common contributing factors include:

  - **Heavy Snowfall:** Rapid accumulation adds weight
    to existing snow layers, potentially exceeding
    their ability to support the additional load.

  - **Wind Loading:** Strong winds transport snow
    from exposed slopes and deposit it on sheltered
    slopes, forming dense wind slabs.

  - **Temperature Changes:** Warming and melting
    can weaken snow bonds, particularly when
    liquid water enters the snowpack.

  - **Rain on Snow:** Rain adds weight and liquid
    water to the snowpack, potentially reducing
    stability.

  - **Human Activity:** Skiers, snowboarders,
    snowmobilers, and other travelers can apply
    additional stress that triggers an unstable
    snow layer.

  - **Natural Releases:** Avalanches can occur
    without direct human involvement when
    accumulated stress exceeds snowpack strength.

  In many avalanche accidents, the avalanche is
  triggered by the person involved or someone
  traveling nearby.

  #### Understanding Avalanche Terrain

  Terrain plays an important role in determining
  where avalanches begin and how far they travel.

  Most slab avalanches initiate on slopes between
  approximately **30 and 45 degrees**, although
  avalanches can occur on steeper terrain.

  Important terrain characteristics include:

  - **Slope Angle:** Slopes steeper than about
    30 degrees are more likely to produce
    slab avalanches when unstable snow is present.

  - **Slope Aspect:** The direction a slope faces
    affects sunlight exposure, temperature,
    and wind-deposited snow.

  - **Elevation:** Snow accumulation, temperature,
    and wind conditions can differ significantly
    between lower and higher elevations.

  - **Terrain Traps:** Gullies, creek beds, and
    depressions can concentrate moving snow,
    increasing burial depth.

  - **Avalanche Runout Zones:** Areas below
    avalanche starting zones where moving snow
    can travel and eventually accumulate.

  Avalanches can travel into relatively flat
  terrain below the slopes where they originate.
  Consequently, locations beneath steep slopes
  may still be exposed to avalanche hazards.

  #### Understanding Avalanche Control

  Transportation agencies and mountain communities
  use several techniques to reduce the risk that
  avalanches pose to developed areas.

  Common methods include:

  - **Controlled Avalanche Releases:** Explosives
    or specialized systems are used to deliberately
    release unstable snow under controlled conditions.

  - **Snow Sheds:** Protective structures built
    over roads to allow moving snow to pass above
    the roadway.

  - **Avalanche Fencing:** Specialized barriers
    designed to stabilize snow accumulation
    or influence how snow is deposited.

  - **Temporary Road Closures:** Roads may be
    closed during periods of elevated avalanche
    danger or while avalanche-control operations
    are underway.

  - **Monitoring and Forecasting:** Weather
    observations, snowpack measurements, and
    avalanche forecasts help specialists
    evaluate changing conditions.

  Provo Canyon is an example of a transportation
  corridor where avalanche mitigation helps
  reduce the risk to motorists and maintain
  access through mountainous terrain.

  **Learn More:** [Utah Avalanche Center — Avalanche Education](https://utahavalanchecenter.org/education)

  **Local Resource:** [UDOT — Avalanche Safety](https://connect.udot.utah.gov/current-conditions/avalanche/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="drought"
  title="Drought"
  image="/img/drought.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['water', 'agriculture', 'environment', 'economy', 'fire']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="2026 — Statewide Drought Emergency"
  exampleText="In May 2026, Utah declared a statewide drought emergency following its warmest winter on record and the lowest recorded mountain snowpack. All 29 counties were experiencing severe drought, with 22 counties experiencing extreme drought conditions. The unusually low snowpack reduced expected runoff and placed additional pressure on water supplies throughout Utah, including Utah County."
>
  <p>
    Drought is an extended period of unusually dry conditions that
    results in a shortage of available water. It develops when
    precipitation remains below normal levels over time, often
    compounded by high temperatures and increased evaporation.
    Unlike sudden disasters, drought typically develops gradually
    and may persist for months or years.
  </p>

  <p>
    Provo's water supply depends on precipitation, mountain
    snowpack, local springs, and groundwater resources.
    Reduced winter snowfall and prolonged dry conditions can
    decrease runoff, limit groundwater replenishment, and
    place additional pressure on available water supplies.
    Utah's naturally dry climate makes the region particularly
    sensitive to extended periods of below-normal precipitation.
  </p>

  <p>
    Drought can reduce water availability for homes, agriculture,
    businesses, and natural ecosystems. Extended dry conditions
    can lower reservoir levels, affect groundwater supplies,
    damage vegetation, and increase demand on existing water
    infrastructure. Severe drought may also result in water
    restrictions, economic losses, and long-term environmental
    impacts.
  </p>
</DisasterCard>

<AboutHazardModal id="drought" title="Drought">
  <div>

  #### How Drought Develops

  Drought occurs when an area receives less precipitation
  than normal over an extended period, creating a growing
  imbalance between water supply and demand.
  Several environmental factors influence how drought
  develops and intensifies:

  - **Reduced Precipitation:** Extended periods of below-normal
    rainfall or snowfall decrease the amount of water entering
    rivers, reservoirs, and groundwater systems.

  - **High Temperatures:** Warmer conditions increase
    evaporation from soil and surface water and can
    increase water loss through vegetation.

  - **Low Snowpack:** Reduced mountain snowfall limits
    the amount of water available from spring and
    summer snowmelt.

  - **Soil Moisture Deficits:** Dry soils can absorb
    precipitation that might otherwise contribute
    to runoff and streamflow.

  - **Water Demand:** Agricultural, residential,
    commercial, and industrial water use can
    increase pressure on limited supplies.

  Drought severity depends on how much precipitation
  is missing, how long the shortage continues, and
  how water availability compares with demand.

  #### Types of Drought

  Scientists generally recognize four types of drought,
  each describing a different aspect of water scarcity.

  - **Meteorological Drought:** Occurs when precipitation
    remains below normal for a particular region
    over an extended period.

  - **Agricultural Drought:** Develops when insufficient
    soil moisture or irrigation water affects crops,
    livestock, and agricultural production.

  - **Hydrological Drought:** Occurs when water shortages
    become evident in rivers, streams, lakes,
    reservoirs, and groundwater supplies.

  - **Socioeconomic Drought:** Develops when water
    shortages affect the availability of goods and
    services, creating economic or societal impacts.

  These classifications are closely related.
  A prolonged meteorological drought, for example,
  can eventually develop into hydrological drought
  as reservoirs and groundwater supplies decline.

  #### Understanding Utah's Snowpack

  Mountain snowpack serves as one of Utah's most
  important natural water-storage systems.

  During winter, snow accumulates in the mountains,
  storing precipitation until temperatures rise
  during spring and summer.

  As the snow melts, water flows into rivers,
  streams, reservoirs, and groundwater systems,
  helping sustain water supplies during Utah's
  typically hot and dry summer months.

  Several snowpack characteristics influence
  the amount of water available:

  - **Snow Accumulation:** The total amount of
    snowfall during the winter season.

  - **Snow Water Equivalent (SWE):** The amount
    of liquid water contained within the snowpack
    if all the snow were melted.

  - **Snowmelt Timing:** When snow begins melting
    and how quickly the stored water is released.

  - **Soil Moisture:** Dry soils can absorb a
    significant portion of snowmelt before
    runoff reaches streams and reservoirs.

  - **Temperature:** Warmer conditions can
    accelerate melting and increase water
    losses before runoff reaches storage systems.

  A winter with below-normal snowpack can
  create water supply challenges even if
  rainfall during other parts of the year
  remains relatively normal.

  #### How Drought Is Measured

  Drought severity is commonly communicated
  using the **U.S. Drought Monitor**, which
  evaluates precipitation, soil moisture,
  streamflow, and other environmental indicators.
  The monitor uses five categories:

  | Classification | Description |
  |---|---|
  | D0 — Abnormally Dry | Dry conditions that may precede or follow drought |
  | D1 — Moderate Drought | Developing water shortages and vegetation stress |
  | D2 — Severe Drought | Increased water shortages and agricultural impacts |
  | D3 — Extreme Drought | Major water shortages and significant environmental impacts |
  | D4 — Exceptional Drought | Widespread and potentially devastating drought impacts |

  The categories reflect the relative severity
  of drought conditions rather than a fixed
  amount of missing rainfall.

  D0 represents abnormally dry conditions
  and is not classified as drought itself.

  #### Why Drought Can Persist

  The end of a dry period does not necessarily
  mean that all drought impacts disappear.

  Different parts of the water system respond
  to precipitation at different rates.

  - **Soil Moisture:** Rainfall may improve
    surface soil conditions relatively quickly,
    depending on the severity of the deficit.

  - **Streams and Rivers:** Streamflow may
    recover when rainfall and snowmelt increase,
    although recovery depends on watershed
    conditions.

  - **Reservoirs:** Large reservoirs may
    require multiple seasons of above-normal
    runoff to recover from significant deficits.

  - **Groundwater:** Aquifers can respond much
    more slowly because replenishment depends
    on water gradually infiltrating underground.

  As a result, meteorological drought may
  end before hydrological drought conditions
  have fully recovered.

  **Learn More:** [NOAA — Understanding Drought](https://www.drought.gov/what-is-drought)

  **Utah Resource:** [Utah Division of Water Resources — Drought in Utah](https://water.utah.gov/drought/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="dust-bowl"
  title="Dust Bowl"
  image="/img/dust-bowl.png"
  impacts={['air', 'safety', 'transportation', 'agriculture']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Dust Storms Along the Wasatch Front"
  exampleText="Utah periodically experiences dust storms when strong winds lift sediment from dry lakebeds, desert areas, and exposed soils. Dust from western and southwestern Utah can travel considerable distances and affect communities along the Wasatch Front, including Utah County. Although these events demonstrate the region's susceptibility to airborne dust, the 2022 Pre-Disaster Mitigation Plan does not identify Dust Bowl conditions as a separately rated Provo hazard."
>
  <p>
    Dust Bowl conditions develop when prolonged drought, high winds,
    and the loss of protective vegetation allow large amounts of
    exposed soil to erode and become airborne. Repeated dust storms
    can remove fertile topsoil, damage agricultural land, and
    contribute to widespread environmental degradation. Unlike
    an isolated dust storm, a Dust Bowl involves persistent
    conditions affecting an extensive region.
  </p>

  <p>
    Utah's arid climate, exposed lakebeds, and desert landscapes
    create conditions where wind erosion and dust storms can occur.
    Strong winds can transport dust into Utah Valley from distant
    source regions, particularly during dry periods. However,
    Provo is not identified as having a major Dust Bowl hazard
    in the regional mitigation plan.
  </p>

  <p>
    Severe dust storms can reduce visibility, disrupt transportation,
    and introduce large amounts of airborne particulate matter.
    Prolonged wind erosion can also degrade soil quality, damage
    agricultural resources, and reduce vegetation cover. These
    impacts can extend beyond the areas where dust originates,
    affecting communities many miles downwind.
  </p>
</DisasterCard>

<AboutHazardModal id="dust-bowl" title="Dust Bowl">
  <div>

  #### How Dust Bowl Conditions Develop

  Dust Bowl conditions occur when environmental and land-use
  factors combine to make large areas of soil vulnerable
  to wind erosion.

  Several conditions contribute to their development:

  - **Prolonged Drought:** Extended dry conditions reduce
    soil moisture and weaken vegetation that normally
    protects the ground.

  - **Vegetation Loss:** Without grasses, crops, and other
    plants, the soil becomes more exposed to wind.

  - **High Winds:** Strong or persistent winds can
    dislodge and transport loose soil particles.

  - **Soil Disturbance:** Intensive cultivation,
    overgrazing, and other land disturbances can
    reduce soil stability and increase erosion.

  When these conditions persist, wind can repeatedly
  remove topsoil faster than it is naturally replaced.

  #### How Wind Erosion Works

  Wind erosion occurs when moving air lifts or pushes
  soil particles across the ground.

  Scientists generally describe three methods of
  soil transport:

  - **Suspension:** Very small particles, such as
    dust and fine silt, become airborne and can
    travel hundreds or thousands of miles.

  - **Saltation:** Sand-sized particles bounce
    along the ground as wind lifts them briefly
    before they fall back to the surface.

  - **Surface Creep:** Larger particles roll or
    slide along the ground, often after being
    struck by bouncing particles.

  These processes can occur simultaneously,
  gradually removing soil from exposed landscapes.

  Fine airborne particles can remain suspended
  long after a dust storm has passed its
  original source area.

  #### Dust Storms vs. Dust Bowls

  Although closely related, dust storms and Dust Bowl
  conditions are not the same.

  - **Dust Storm:** A weather event in which strong
    winds lift large amounts of dust or sand into
    the atmosphere, reducing visibility and
    potentially affecting air quality.

  - **Dust Bowl:** A prolonged environmental
    condition characterized by repeated dust storms,
    widespread soil erosion, drought, and extensive
    land degradation.

  A single dust storm may last only minutes or hours,
  while Dust Bowl conditions can persist for years.

  Dust storms can occur without a Dust Bowl,
  particularly in desert regions and areas
  with exposed dry lakebeds.

  #### The Dust Bowl of the 1930s

  The most famous Dust Bowl occurred across portions
  of the Great Plains during the 1930s.

  During the preceding decades, extensive areas of
  native grassland had been converted into farmland.

  When severe drought developed, crops failed and
  large areas of exposed soil were left vulnerable
  to powerful winds.

  Repeated dust storms carried enormous quantities
  of topsoil across the region. Some storms
  transported dust across much of the United States,
  reaching the East Coast.

  The disaster caused widespread agricultural losses,
  economic hardship, and the displacement of
  thousands of farming families.

  The Dust Bowl demonstrated how prolonged drought,
  combined with unsustainable land management,
  can transform a regional environmental problem
  into a major disaster.

  It also contributed to the development of modern
  soil conservation programs and practices
  intended to reduce erosion and protect
  agricultural land.

  **Learn More:** [USGS — Wind Erosion and Dust Emissions](https://www.usgs.gov/centers/southwest-biological-science-center/science/wind-erosion-and-dust-emissions-colorado)

  **Utah Resource:** [Utah Geological Survey — What's With All This Dust?](https://geology.utah.gov/map-pub/survey-notes/glad-you-asked/glad-you-asked-whats-with-all-this-dust/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="lightning"
  title="Lightning"
  image="/img/lightning.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Negligible"
  magnitudeLevel={1}
  impacts={['safety', 'fire', 'utilities', 'communications']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="Lightning Impacts in Utah County"
  exampleText="Utah County has experienced lightning-related deaths, injuries, and property damage, as documented in the 2022 Pre-Disaster Mitigation Plan. Thunderstorms regularly develop over the Wasatch Mountains and surrounding valleys, creating lightning hazards for communities, outdoor recreation areas, and mountain transportation corridors."
>
  <p>
    Lightning is a powerful electrical discharge that occurs
    within thunderstorms, between clouds, or between a cloud
    and the ground. It develops when electrical charges build
    up within a storm and the difference between those charges
    becomes large enough to overcome the insulating properties
    of the surrounding air.
  </p>

  <p>
    Provo experiences thunderstorms, particularly during the
    warmer months when atmospheric instability and mountain
    terrain contribute to storm development. Lightning is
    especially relevant in exposed locations such as mountain
    trails, open fields, parks, and other outdoor areas.
    Lightning can also strike locations several miles from
    the heaviest rainfall.
  </p>

  <p>
    Lightning strikes can cause serious injuries or fatalities,
    ignite fires, and damage buildings, electrical equipment,
    and utility infrastructure. Electrical surges can disrupt
    power and communications systems, while strikes to trees
    or other objects can create additional hazards. Even
    relatively isolated lightning events can have significant
    consequences for individuals and affected facilities.
  </p>
</DisasterCard>

<AboutHazardModal id="lightning" title="Lightning">
  <div>

  #### How Lightning Forms

  Lightning develops when electrical charges become separated
  within a thunderstorm.

  Inside a developing storm, strong upward and downward air
  currents cause ice crystals, supercooled water droplets,
  and soft hail particles known as graupel to collide.

  These collisions help transfer electrical charges between
  particles, causing different regions of the storm to
  develop positive and negative charges.

  Typically, positive charges accumulate near the upper
  portion of the storm, while negative charges become
  concentrated in the middle and lower portions.

  As the difference between these charges increases,
  the electric field becomes strong enough to overcome
  the insulating properties of the surrounding air.

  A conductive pathway begins to form, allowing a rapid
  electrical discharge to occur.

  This discharge is what we observe as **lightning**.

  #### Types of Lightning

  Lightning can occur in several different ways,
  depending on where electrical charges are released.

  - **Intracloud Lightning:** Occurs between regions of
    opposite electrical charge within the same cloud.
    This is the most common type of lightning and
    often illuminates large portions of a thunderstorm.

  - **Cloud-to-Cloud Lightning:** Occurs when an electrical
    discharge travels between two separate clouds
    containing regions of opposite charge.

  - **Cloud-to-Ground Lightning:** Occurs when an electrical
    discharge connects a thunderstorm with the Earth's
    surface. This type presents a direct danger to
    people, buildings, trees, and infrastructure.

  - **Cloud-to-Air Lightning:** Occurs when a discharge
    extends from a charged cloud into the surrounding
    atmosphere without connecting to another cloud
    or the ground.

  Some lightning appears as a broad flash illuminating
  an entire cloud. This is commonly called
  **sheet lightning** and usually results from
  lightning occurring within or behind clouds.

  #### Positive vs. Negative Lightning

  Cloud-to-ground lightning can transfer either
  negative or positive electrical charge.

  - **Negative Lightning:** The most common type of
    cloud-to-ground lightning. It typically originates
    from negatively charged regions in the middle
    or lower portion of a thunderstorm.

  - **Positive Lightning:** Less common and often
    originates from positively charged regions
    near the upper portion or anvil of a storm.
    Positive lightning can transfer substantial
    electrical charge and may strike farther
    from the main storm.

  Both types can cause serious injuries, fires,
  and infrastructure damage.

  Positive lightning is particularly noteworthy
  because it can occur well outside the areas
  experiencing heavy rainfall.

  #### Understanding Thunder

  Thunder is the sound produced by the rapid
  heating and expansion of air surrounding
  a lightning discharge.

  A lightning channel can heat the surrounding
  air to approximately **50,000°F (27,800°C)**,
  several times hotter than the surface of the Sun.

  This intense heating causes the air to expand
  explosively, creating a shock wave that
  travels outward as sound.

  Because light travels much faster than sound,
  lightning is usually seen before thunder
  is heard.

  The approximate distance to a lightning
  discharge can be estimated by counting the
  seconds between the flash and the thunder.

  | Time Between Flash and Thunder | Approximate Distance |
  |---|---|
  | 5 seconds | 1 mile |
  | 10 seconds | 2 miles |
  | 15 seconds | 3 miles |
  | 20 seconds | 4 miles |
  | 30 seconds | 6 miles |

  This estimate provides only the approximate
  distance to the lightning discharge and
  does not establish whether a location is safe.

  #### Lightning Beyond the Storm

  Lightning does not always strike directly
  beneath the darkest clouds or heaviest rain.

  Some cloud-to-ground discharges travel
  horizontally away from a thunderstorm
  before descending toward the ground.

  These events are sometimes called
  **bolts from the blue** because they can
  strike areas beneath relatively clear skies.

  Lightning has been documented striking
  more than 10 miles from its parent
  thunderstorm, with some exceptional
  strikes traveling even farther.

  Consequently, lightning can threaten
  locations that are not experiencing
  rainfall or other obvious storm conditions.

  **Learn More:** [National Weather Service — Understanding Lightning](https://www.weather.gov/safety/lightning-science)

  **Additional Resource:** [National Weather Service — Bolts from the Blue](https://www.weather.gov/pub/lightningBoltBlue)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="heavy-rain"
  title="Heavy Rain"
  image="/img/heavy-rain.png"
  impacts={['safety', 'transportation', 'infrastructure', 'utilities', 'communications']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="September 2013 — Provo Heavy Rainfall"
  exampleText="On September 7, 2013, intense thunderstorms produced exceptionally heavy rainfall across Utah County. Some locations recorded approximately 0.6–0.8 inches of rain in just 15 minutes. The storm overwhelmed drainage systems, flooded streets, and damaged homes, roads, and public facilities in Provo, demonstrating how intense rainfall over a short period can produce significant local impacts."
>
  <p>
    Heavy rain occurs when atmospheric conditions produce large amounts
    of precipitation over a relatively short period or sustained
    rainfall over an extended duration. It develops when moisture-rich
    air rises, cools, and condenses into clouds, allowing water droplets
    to grow until they become heavy enough to fall as rain.
    Intense thunderstorms can produce exceptionally high rainfall
    rates within a small geographic area.
  </p>

  <p>
    Provo's location along the Wasatch Mountains influences local
    precipitation patterns. Moist air can be lifted by mountain
    terrain, enhancing cloud development and precipitation under
    favorable conditions. Seasonal thunderstorms and occasional
    surges of monsoonal moisture can produce intense rainfall
    across Utah Valley, particularly during the warmer months.
  </p>

  <p>
    Heavy rainfall can overwhelm stormwater systems, reduce
    visibility, damage roads and infrastructure, and disrupt
    transportation and outdoor activities. Intense precipitation
    can also produce rapidly changing conditions across nearby
    communities, creating challenges for emergency response
    and infrastructure management.
  </p>
</DisasterCard>

<AboutHazardModal id="heavy-rain" title="Heavy Rain">
  <div>

  #### How Heavy Rain Forms

  Rain develops when moisture in the atmosphere condenses
  into cloud droplets that eventually grow large enough
  to fall toward the ground.

  Several atmospheric conditions contribute to heavy rainfall:

  - **Atmospheric Moisture:** Water vapor provides the
    moisture needed for cloud formation and precipitation.
    Air containing more water vapor can support greater
    rainfall amounts when conditions are favorable.

  - **Rising Air:** Air must generally rise and cool for
    water vapor to condense into cloud droplets.

  - **Atmospheric Instability:** Warm, moist air rising
    through cooler surrounding air can produce strong
    upward currents and deep thunderstorm clouds.

  - **Sustained Moisture Supply:** Continued movement
    of moist air into a storm can allow precipitation
    to persist or intensify.

  Inside clouds, tiny water droplets grow through
  collisions and other processes. When droplets
  become large enough, they fall as precipitation.

  Heavy rainfall can occur when storms produce
  precipitation efficiently or repeatedly affect
  the same location.

  #### Types of Heavy Rainfall

  Heavy rainfall can develop through several
  different atmospheric processes:

  - **Convective Rainfall:** Produced by rising
    air within showers and thunderstorms.
    Convective storms can generate intense,
    localized rainfall over short periods.

  - **Stratiform Rainfall:** Associated with
    widespread cloud systems that produce
    precipitation across large geographic areas.
    These events generally have lower rainfall
    rates than intense thunderstorms but can
    continue for many hours.

  - **Orographic Rainfall:** Occurs when moist
    air is forced upward over mountains,
    cooling and producing precipitation.

  - **Monsoonal Rainfall:** Associated with
    seasonal changes in atmospheric circulation
    that transport additional moisture into
    a region, often supporting the development
    of thunderstorms.

  These processes can overlap. For example,
  monsoonal moisture can fuel convective
  thunderstorms that are enhanced by mountain
  terrain.

  #### How Mountains Influence Rainfall

  Mountain ranges can strongly influence
  where precipitation develops and how much
  rain reaches the ground.

  When moist air encounters a mountain barrier,
  it may be forced upward along the terrain.

  As the air rises, atmospheric pressure decreases,
  allowing the air to expand and cool.

  If the rising air cools sufficiently, water
  vapor condenses into cloud droplets and
  precipitation may develop.

  This process is known as **orographic lift**.

  Several effects can occur:

  - **Enhanced Precipitation:** Rising air
    can increase cloud development and
    precipitation along windward mountain slopes.

  - **Localized Storm Development:** Mountain
    heating and terrain-driven air movement
    can contribute to thunderstorm formation.

  - **Rain Shadows:** Air descending on the
    opposite side of a mountain range
    generally warms and becomes relatively
    drier, sometimes reducing precipitation.

  - **Variable Rainfall:** Nearby locations
    can receive substantially different
    amounts of rain depending on elevation,
    storm movement, and terrain.

  The Wasatch Mountains influence weather
  patterns in Utah Valley, helping create
  differences in precipitation across
  relatively short distances.

  #### Rainfall Intensity vs. Accumulation

  Meteorologists evaluate rainfall using
  both its total accumulation and the rate
  at which it falls.

  - **Rainfall Accumulation:** The total
    amount of precipitation received
    during a specified period, usually
    measured in inches.

  - **Rainfall Intensity:** The rate at
    which precipitation falls, commonly
    expressed in inches per hour.

  For example:

  | Rainfall Event | Equivalent Average Rate |
  |---|---|
  | 0.25 inches in 15 minutes | 1 inch/hour |
  | 0.50 inches in 15 minutes | 2 inches/hour |
  | 1.00 inch in 30 minutes | 2 inches/hour |
  | 2.00 inches in 1 hour | 2 inches/hour |

  These examples demonstrate why rainfall
  duration matters.

  A storm producing one inch of rain
  in fifteen minutes has a much higher
  average rainfall intensity than a
  storm producing the same amount
  over several hours.

  The consequences of rainfall depend
  on the intensity, duration, and
  conditions of the affected area.

  #### Why Some Storms Produce Extreme Rainfall

  Certain atmospheric conditions allow
  storms to produce unusually large
  amounts of precipitation.
  Important factors include:

  - **Deep Atmospheric Moisture:** Large
    amounts of water vapor provide
    additional moisture for precipitation.

  - **Strong Updrafts:** Rising air can
    sustain thunderstorm development
    and support continued precipitation.

  - **Slow Storm Movement:** A thunderstorm
    that remains over one location can
    produce large rainfall totals.

  - **Training Thunderstorms:** Multiple
    storms move repeatedly over the
    same location, similar to train
    cars following the same track.

  - **Persistent Moisture Transport:**
    Winds continually supply moist air
    to a developing storm system.

  - **Terrain Enhancement:** Mountains
    can force moist air upward and
    intensify precipitation in
    favorable atmospheric conditions.

  These factors can combine to produce
  extreme rainfall rates and unusually
  large precipitation totals, sometimes
  affecting only a small portion of
  a larger region.

  **Learn More:** [National Weather Service — North American Monsoon](https://www.weather.gov/gjt/monsoon)

  **Additional Resource:** [National Weather Service — Orographic Lifting](https://forecast.weather.gov/glossary.php?word=Orographic+Lifting)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="high-wind"
  title="High Wind"
  image="/img/high-wind.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['safety', 'utilities', 'communications', 'transportation', 'infrastructure']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="August 30, 2026 — Severe Thunderstorm near Provo"
  exampleText="On August 30, 2026, the National Weather Service issued a Severe Thunderstorm Warning for central Utah County, including Provo. A radar-indicated thunderstorm southwest of the city was capable of producing wind gusts up to 60 mph, with potential damage to roofs, siding, and trees. The warning demonstrated how severe thunderstorm winds can threaten developed areas of Utah Valley."
>
  <p>
    High winds occur when air moves rapidly through the atmosphere,
    generally in response to differences in atmospheric pressure.
    Strong winds can develop from large weather systems,
    thunderstorms, or air flowing across mountainous terrain.
    Sudden gusts can produce damaging forces even when average
    wind speeds are relatively moderate.
  </p>

  <p>
    Provo's location along the Wasatch Mountains influences
    local wind patterns. Mountain slopes, canyons, and nearby
    valleys can redirect or accelerate airflow, sometimes
    producing strong downslope or canyon winds. Thunderstorms
    and passing weather systems can also generate powerful
    winds across Utah Valley throughout the year.
  </p>

  <p>
    High winds can uproot trees, damage roofs and buildings,
    overturn unsecured objects, and bring down power lines.
    Flying debris can threaten public safety, while damaged
    utility infrastructure may cause widespread power and
    communications outages. Severe wind events can also
    disrupt transportation and complicate emergency response.
  </p>
</DisasterCard>

<AboutHazardModal id="high-wind" title="High Wind">
  <div>

  #### How Wind Forms

  Wind is the movement of air caused primarily by
  differences in atmospheric pressure.

  Uneven heating of the Earth's surface creates
  differences in air temperature and density,
  contributing to areas of relatively high
  and low atmospheric pressure.
  Air accelerates in response to the **pressure
  gradient force**, which pushes air from
  higher toward lower pressure.

  Several factors influence the resulting wind:

  - **Pressure Gradient:** Larger pressure differences
    over shorter distances generally produce
    stronger winds.

  - **Coriolis Effect:** Earth's rotation deflects
    moving air, influencing wind direction
    over large distances.

  - **Surface Friction:** Trees, buildings, and
    terrain slow winds near the ground and
    create turbulence.

  - **Topography:** Mountains, valleys, and
    canyons can redirect and locally accelerate
    airflow.

  Wind speed and direction result from the
  combined influence of these forces.

  #### Types of High Wind Events

  Strong winds can develop through several
  different atmospheric processes:

  - **Gradient Winds:** Winds associated with
    broad atmospheric pressure patterns.
    Strong pressure differences between
    weather systems can produce widespread
    windy conditions.

  - **Downslope Winds:** Develop when air
    descends a mountain slope. Under certain
    atmospheric conditions, mountain waves
    can produce particularly strong and
    damaging winds near the base of a range.

  - **Canyon Winds:** Winds influenced by
    airflow through mountain canyons.
    Local pressure and temperature differences,
    combined with terrain, can produce
    strong winds near canyon mouths.

  - **Thunderstorm Outflow:** Winds produced
    when cooler, denser air descends within
    a thunderstorm and spreads outward
    after reaching the ground.

  - **Downbursts:** Concentrated areas of
    strong descending air within thunderstorms.
    When the air reaches the surface, it
    spreads outward and can produce
    damaging straight-line winds.

  These processes can occur independently
  or combine to increase local wind speeds.

  #### How Mountains Influence Wind

  Mountainous terrain can significantly
  alter the speed and direction of airflow.

  Along the Wasatch Front, strong winds
  can develop when atmospheric conditions
  force air across the Wasatch Mountains
  and down toward the valleys.

  Several processes can influence wind
  behavior near mountains:

  - **Downslope Acceleration:** Air flowing
    over mountain ridges can accelerate
    as it descends under favorable
    atmospheric conditions.

  - **Mountain Waves:** Stable air flowing
    across a mountain range can develop
    wave-like motions. Some mountain-wave
    patterns produce powerful descending
    winds on the leeward side.

  - **Canyon Channeling:** Terrain can
    concentrate and redirect airflow,
    sometimes increasing wind speeds
    near canyon entrances.

  - **Turbulence:** Mountains, buildings,
    and other obstacles disrupt airflow,
    creating irregular changes in wind
    speed and direction.

  These effects help explain why wind
  conditions can vary significantly
  between locations only a few miles apart.
  #### Sustained Winds vs. Wind Gusts

  Wind is commonly described using
  two different measurements.

  - **Sustained Wind:** The average wind
    speed measured over a specified period.
    The National Weather Service commonly
    uses a two-minute averaging period
    for surface observations.

  - **Wind Gust:** A brief increase in
    wind speed above the prevailing
    average wind. Gusts may be considerably
    stronger than sustained winds.

  For example, a storm might produce
  sustained winds of 30 mph with
  occasional gusts reaching 60 mph.

  These short bursts can exert substantial
  forces on trees, roofs, signs,
  and other exposed structures.

  The force exerted by wind increases
  approximately with the square of
  its speed.

  This means that, under otherwise
  similar conditions, **doubling
  the wind speed can produce roughly
  four times the wind pressure**.

  #### Understanding Wind Speeds

  The **Beaufort Wind Scale** is a
  standardized system originally
  developed to describe wind strength
  using observable effects.

  It remains useful for understanding
  how different wind speeds can affect
  the surrounding environment.

  | Wind Speed | Beaufort Classification | Typical Effects |
  |---|---|---|
  | 13–18 mph | Moderate Breeze | Small branches move |
  | 19–24 mph | Fresh Breeze | Small trees begin swaying |
  | 25–31 mph | Strong Breeze | Large branches move |
  | 32–38 mph | Near Gale | Whole trees sway |
  | 39–46 mph | Gale | Twigs may break |
  | 47–54 mph | Strong Gale | Minor structural damage possible |
  | 55–63 mph | Storm | Trees may be uprooted |
  | 64–73 mph | Violent Storm | Significant wind damage possible |
  | 74+ mph | Hurricane Force | Potential for extensive damage |

  These descriptions represent general
  wind effects rather than precise
  thresholds at which damage will occur.

  Actual damage depends on factors
  including exposure, building
  construction, tree condition,
  and wind duration.

  The National Weather Service generally
  classifies thunderstorm wind gusts of
  **58 mph or greater** as severe.

  **Learn More:** [National Weather Service — Wind Safety](https://www.weather.gov/safety/wind)

  **Additional Resource:** [National Weather Service — Beaufort Wind Scale](https://www.weather.gov/tbw/beaufort)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="hail"
  title="Hail"
  image="/img/hail.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Negligible"
  magnitudeLevel={1}
  impacts={['safety', 'infrastructure', 'agriculture', 'transportation']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="August 30, 2026 — Severe Thunderstorm near Provo"
  exampleText="On August 30, 2026, the National Weather Service issued a Severe Thunderstorm Warning for central Utah County, including Provo. Radar indicated a thunderstorm capable of producing quarter-size hail, approximately one inch in diameter. The warning highlighted the potential for hail damage to vehicles and other exposed property throughout the affected area."
>
  <p>
    Hail is a form of frozen precipitation consisting of balls or
    irregular lumps of ice that develop inside thunderstorms.
    Hailstones form when strong upward air currents carry water
    droplets into extremely cold regions of a storm, where they
    freeze and accumulate additional layers of ice. When the
    hailstones become too heavy for the storm's updrafts to
    support, they fall toward the ground.
  </p>

  <p>
    Utah County experiences thunderstorms capable of producing
    hail, particularly during the warmer months. Provo's location
    near the Wasatch Mountains can contribute to localized
    thunderstorm development when atmospheric conditions are
    favorable. Although most hailstorms produce relatively
    small hailstones, stronger thunderstorms can generate
    larger hail capable of causing significant damage.
  </p>

  <p>
    Hail can damage roofs, windows, vehicles, crops, and other
    exposed property. Larger hailstones can injure people and
    animals, while intense hailstorms may disrupt transportation
    and outdoor activities. Damage generally increases with
    hailstone size, impact speed, and the vulnerability of
    affected structures and materials.
  </p>
</DisasterCard>

<AboutHazardModal id="hail" title="Hail">
  <div>

  #### How Hail Forms

  Hail develops inside thunderstorms containing strong
  upward air currents known as **updrafts**.

  These updrafts carry water droplets into regions
  of the atmosphere where temperatures are below
  freezing.

  Some droplets remain liquid despite being below
  32°F (0°C). These are called **supercooled
  water droplets**.

  When supercooled droplets encounter an ice
  particle, they freeze onto its surface,
  gradually increasing its size.

  Hail formation generally involves several stages:

  1. **Initial Ice Formation:** A small ice particle
     develops within a thunderstorm.

  2. **Upward Transport:** Strong updrafts carry
     the particle into regions containing
     supercooled water droplets.

  3. **Ice Accumulation:** Water droplets freeze
     onto the particle, increasing its size.

  4. **Continued Growth:** The hailstone may remain
     suspended or move through different regions
     of the storm, collecting additional ice.

  5. **Descent:** When the hailstone can no longer
     be supported by the updraft, it falls
     toward the ground.

  Some hailstones partially or completely melt
  while falling through warmer air below
  the thunderstorm.

  #### How Hailstones Grow

  Hailstones often contain multiple layers
  of ice, somewhat resembling the rings
  found inside an onion.

  These layers develop as hailstones encounter
  different temperature and moisture conditions
  while moving through a thunderstorm.

  Two important growth processes include:

  - **Dry Growth:** Supercooled water droplets
    freeze almost immediately upon contacting
    the hailstone. Air bubbles may become
    trapped within the ice, producing
    a cloudy or opaque appearance.

  - **Wet Growth:** Water collects on the
    hailstone's surface faster than it
    can freeze immediately. The water
    subsequently freezes, often forming
    clearer layers of ice.

  Alternating periods of wet and dry growth
  can create the distinct layered structure
  visible inside some hailstones.

  The number of layers does not necessarily
  indicate how many times a hailstone has
  traveled upward and downward through
  a thunderstorm.

  #### Understanding Hail Size

  The National Weather Service commonly
  describes hailstones by comparing their
  diameter to familiar objects.

  | Hail Diameter | Size Comparison |
  |---|---|
  | 0.25 inches | Pea |
  | 0.50 inches | Marble |
  | 0.75 inches | Penny |
  | 0.88 inches | Nickel |
  | 1.00 inch | Quarter |
  | 1.25 inches | Half Dollar |
  | 1.50 inches | Ping-Pong Ball |
  | 1.75 inches | Golf Ball |
  | 2.00 inches | Hen Egg |
  | 2.50 inches | Tennis Ball |
  | 2.75 inches | Baseball |
  | 4.00 inches | Grapefruit |
  | 4.50 inches | Softball |

  The National Weather Service classifies
  a thunderstorm as **severe** when it
  produces hail at least **one inch in
  diameter**, wind gusts of at least
  58 mph, or a tornado.

  Although smaller hailstones can cause
  damage, larger hail generally presents
  a greater threat to buildings,
  vehicles, and exposed property.

  #### Why Some Thunderstorms Produce Larger Hail

  The size of a hailstone depends largely
  on the conditions inside the thunderstorm.

  Several factors influence hail growth:

  - **Updraft Strength:** Stronger upward
    air currents can support larger
    hailstones and allow additional
    time for ice accumulation.

  - **Supercooled Water:** Greater amounts
    of available liquid water below
    freezing can support more rapid
    hailstone growth.

  - **Storm Organization:** Long-lived,
    organized thunderstorms can maintain
    strong updrafts for extended periods.

  - **Temperature Structure:** The depth
    of cold air within the storm and
    the amount of warm air below it
    influence hail growth and melting.

  - **Time Within the Storm:** Hailstones
    that remain in favorable growth
    regions longer can accumulate
    additional ice.

  Particularly large hail is often
  associated with **supercell thunderstorms**,
  which contain persistent, rotating updrafts.

  These powerful updrafts can support
  hailstone growth for extended periods,
  allowing some stones to reach
  several inches in diameter.

  #### Hail vs. Sleet

  Although hail and sleet are both
  forms of frozen precipitation,
  they form through different processes.

  - **Hail:** Develops inside thunderstorms
    when strong updrafts support the growth
    of ice particles through the accumulation
    of supercooled water droplets.

  - **Sleet:** Consists of small ice pellets
    that generally form when snowflakes
    melt while falling through a layer
    of warmer air and then refreeze
    in a sufficiently deep layer
    of freezing air near the ground.

  Hail is most commonly associated with
  thunderstorms during warmer seasons,
  while sleet typically occurs during
  winter precipitation events.

  Unlike sleet, hail can form even
  when temperatures at the ground
  are relatively warm.

  **Learn More:** [NOAA — Thunderstorm Hazards: Hail](https://www.noaa.gov/jetstream/hail)

  **Additional Resource:** [NOAA — Hail Size Classifications](https://www.noaa.gov/jetstream/appendix/weather-glossary-h)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="heavy-snow"
  title="Heavy Snow"
  image="/img/heavy-snow.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['safety', 'transportation', 'utilities', 'communications', 'services']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="Recurring Winter Storms in Utah County"
  exampleText="Utah County regularly experiences winter storms that bring substantial snowfall to the Wasatch Mountains and surrounding communities. The 2022 Pre-Disaster Mitigation Plan documents deaths, injuries, and property damage associated with heavy snow and winter weather. Significant snowfall can disrupt travel through Provo Canyon and other mountain corridors while creating hazardous conditions throughout Utah Valley."
>
  <p>
    Heavy snow occurs when atmospheric conditions produce substantial
    accumulations of frozen precipitation over a relatively short
    period or through prolonged snowfall. Snow develops when ice
    crystals form within clouds and grow into snowflakes that
    reach the ground without completely melting. Heavy snowstorms
    can produce rapidly accumulating snow, reduced visibility,
    and significant disruptions to daily activities.
  </p>

  <p>
    Provo's location along the Wasatch Mountains creates
    conditions favorable for winter snowfall, particularly
    when moist air is lifted over mountainous terrain.
    Snowfall amounts can vary considerably with elevation,
    with mountain communities and canyon corridors often
    receiving substantially more snow than the valley floor.
    Winter storm systems can also produce significant
    accumulation throughout developed areas of Provo.
  </p>

  <p>
    Heavy snow can make roads impassable, disrupt transportation,
    damage trees and power lines, and interrupt essential
    services. Accumulated snow can place substantial weight
    on roofs and other structures, particularly when the
    snow is dense or contains significant moisture.
    Major snowstorms can restrict emergency vehicle access
    and delay the restoration of affected infrastructure.
  </p>
</DisasterCard>

<AboutHazardModal id="heavy-snow" title="Heavy Snow">
  <div>

  #### How Snow Forms

  Snow forms when water vapor in the atmosphere
  deposits onto tiny ice particles within clouds.

  As additional water vapor freezes onto these
  particles, ice crystals grow into different
  shapes depending on the surrounding temperature
  and moisture conditions.

  Under favorable conditions, individual ice
  crystals can collide and stick together,
  forming larger snowflakes.

  Snow formation generally involves several stages:

  1. **Ice Crystal Formation:** Water vapor
     deposits onto ice particles within
     sufficiently cold clouds.

  2. **Crystal Growth:** Additional water
     vapor accumulates, allowing ice
     crystals to grow.

  3. **Snowflake Development:** Individual
     ice crystals may combine into larger,
     more complex snowflakes.

  4. **Descent:** Snowflakes fall toward
     the ground as they become large
     enough to overcome upward air currents.

  5. **Surface Accumulation:** If snowflakes
     remain sufficiently frozen during
     their descent, they can reach
     the ground and accumulate.

  Snow can sometimes reach the ground
  even when surface temperatures are
  slightly above freezing, particularly
  when the warmer layer is relatively
  shallow and snowfall is intense.

  #### Types of Snow

  Snow can have very different physical
  characteristics depending on temperature,
  moisture content, and atmospheric conditions.

  - **Dry Powder Snow:** Contains relatively
    little liquid-water equivalent for its
    depth. The snow is generally light,
    fluffy, and less densely packed.

  - **Wet Snow:** Contains more liquid-water
    equivalent for a given depth and is
    typically denser and heavier. Wet snow
    can cling to trees, power lines,
    and other exposed surfaces.

  - **Compacted Snow:** Develops when existing
    snow settles or becomes compressed.
    Compaction increases density and
    reduces snow depth without necessarily
    removing much of its water content.

  - **Crusted Snow:** Forms when the upper
    portion of a snowpack melts and
    refreezes, creating a harder
    surface layer.

  These differences help explain why
  two snowstorms producing the same
  accumulation depth can have
  significantly different impacts.

  #### Understanding Snow-to-Liquid Ratios

  Snow-to-liquid ratio describes the relationship
  between the depth of accumulated snow and
  the amount of liquid water it would produce
  if completely melted.

  A commonly used approximation is a
  **10:1 ratio**, meaning ten inches of snow
  would produce approximately one inch
  of liquid water.

  However, actual ratios can vary
  substantially depending on snow density.

  | Snow-to-Liquid Ratio | Snow from 1 Inch of Water | General Description |
  |---|---|---|
  | 5:1 | 5 inches | Very wet, dense snow |
  | 8:1 | 8 inches | Wet, heavy snow |
  | 10:1 | 10 inches | Common approximation |
  | 15:1 | 15 inches | Relatively dry snow |
  | 20:1 | 20 inches | Light, fluffy snow |

  These are illustrative classifications,
  not fixed thresholds. Snow density can
  vary within the same storm.

  For example, six inches of snow with
  a 5:1 ratio contains approximately
  1.2 inches of liquid-water equivalent,
  while twelve inches of snow with a
  20:1 ratio contains only 0.6 inches.

  Consequently, the shallower wet snow
  contains approximately twice as much
  water and weighs roughly twice as much
  per unit area as the deeper dry snow.

  #### How Heavy Snowstorms Develop

  Significant snowstorms generally require
  sufficient atmospheric moisture, cold
  temperatures, and a process that lifts
  air to produce precipitation.

  Several conditions can contribute
  to heavy snowfall:

  - **Atmospheric Moisture:** Moisture
    provides the water vapor needed
    for ice crystal formation and growth.

  - **Rising Air:** Weather systems and
    atmospheric disturbances lift air,
    allowing it to cool and produce
    clouds and precipitation.

  - **Favorable Temperatures:** Cold
    atmospheric layers support the
    development and preservation
    of snowflakes.

  - **Orographic Lift:** Mountains force
    approaching air upward, potentially
    enhancing snowfall along elevated
    terrain.

  - **Persistent Storm Systems:** Slow-moving
    storms or repeated periods of snowfall
    can produce large accumulations.

  - **Snow Bands:** Narrow areas of
    enhanced atmospheric lift can
    produce particularly intense
    snowfall rates over relatively
    small geographic areas.

  These conditions can cause large
  differences in snowfall accumulation
  between nearby locations.

  #### Understanding Snow Loads

  Snow accumulation places additional
  weight on roofs, canopies, and
  other structures.

  The weight of snow depends primarily
  on its water content rather than
  its depth alone.

  One inch of liquid water spread
  over one square foot weighs
  approximately **5.2 pounds**.

  This means that snow containing
  one inch of liquid-water equivalent
  creates a load of approximately
  5.2 pounds per square foot,
  before accounting for other factors.

  For example:

  | Liquid-Water Equivalent | Approximate Load |
  |---|---|
  | 1 inch | 5.2 lb/ft² |
  | 2 inches | 10.4 lb/ft² |
  | 3 inches | 15.6 lb/ft² |
  | 4 inches | 20.8 lb/ft² |

  Additional snowfall, rain absorbed
  by existing snow, and drifting can
  increase the weight placed on
  individual portions of a roof.

  Snow loads may also be distributed
  unevenly because of wind, roof
  shape, and surrounding structures.

  Actual structural risk depends on
  building design, roof geometry,
  local building requirements,
  and the distribution of accumulated snow.

  **Learn More:** [National Weather Service — Winter Weather](https://www.weather.gov/safety/winter)

  **Additional Resource:** [National Weather Service — Understanding Snow-to-Liquid Ratios](https://www.weather.gov/arx/why_snowratios)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="extreme-cold"
  title="Extreme Cold"
  image="/img/extreme-cold.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  impacts={['safety', 'utilities', 'transportation', 'communications']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="Winter Freezing Conditions in Provo"
  exampleText="Provo regularly experiences freezing temperatures during winter, with occasional periods of much colder weather. Extended freezes can threaten exposed plumbing, water infrastructure, and other temperature-sensitive systems. The 2022 Pre-Disaster Mitigation Plan identifies protecting water pipes from freezing as an important local winter-weather concern."
>
  <p>
    Extreme cold occurs when temperatures fall significantly below
    normal for a particular region, creating hazardous conditions
    for people, animals, and infrastructure. Cold outbreaks
    often develop when large masses of Arctic or polar air move
    into lower latitudes. Strong winds can accelerate heat loss,
    making already cold conditions feel substantially colder.
  </p>

  <p>
    Provo experiences freezing temperatures throughout the winter,
    with occasional outbreaks of extreme cold. The surrounding
    Wasatch Mountains and Utah Valley influence local temperature
    patterns, particularly when cold air becomes trapped near
    the valley floor. Prolonged periods of subfreezing temperatures
    can affect developed neighborhoods, transportation corridors,
    and exposed infrastructure.
  </p>

  <p>
    Extreme cold can cause hypothermia, frostbite, and other
    cold-related injuries. Freezing temperatures can damage
    water pipes, affect vehicles and mechanical equipment,
    and increase demand for heating and electricity. Extended
    cold outbreaks may disrupt utilities, transportation,
    and essential services, particularly when accompanied
    by power outages or other winter-weather hazards.
  </p>
</DisasterCard>

<AboutHazardModal id="extreme-cold" title="Extreme Cold">
  <div>

  #### How Extreme Cold Develops

  Extreme cold often occurs when large masses of cold,
  dense air move southward from Arctic or polar regions.

  These air masses develop over areas where limited
  solar heating and prolonged winter darkness allow
  temperatures to fall significantly.

  Several atmospheric conditions contribute
  to extreme cold events:

  - **Arctic Air Masses:** Large regions of very
    cold air form over northern latitudes and
    can spread southward into the United States.

  - **Jet Stream Patterns:** Changes in the
    position and shape of the jet stream
    can allow cold polar air to move
    farther south than usual.

  - **High-Pressure Systems:** Strong areas
    of high atmospheric pressure can
    produce clear skies, light winds,
    and conditions favorable for cooling.

  - **Radiational Cooling:** At night,
    the Earth's surface releases heat
    through infrared radiation.
    Clear skies and light winds can
    allow temperatures near the ground
    to fall rapidly.

  - **Snow Cover:** Snow reflects much
    of the Sun's incoming energy and
    can help maintain colder surface
    temperatures.

  Extreme cold can occur without
  substantial snowfall or strong winds.

  #### Understanding Wind Chill

  Wind chill describes how cold conditions
  feel to exposed human skin when wind
  increases the rate of heat loss.

  Under calm conditions, a thin layer
  of air warmed by the body forms near
  the skin's surface.

  Wind removes this relatively warm
  layer, allowing heat to escape
  more rapidly.

  The National Weather Service uses
  a wind chill index to estimate
  the combined effects of air
  temperature and wind speed.

  For example:

  | Air Temperature | Wind Speed | Approximate Wind Chill |
  |---|---|---|
  | 30°F | 10 mph | 21°F |
  | 20°F | 15 mph | 6°F |
  | 10°F | 20 mph | -9°F |
  | 0°F | 15 mph | -19°F |
  | -10°F | 20 mph | -35°F |

  Wind chill does not represent a
  change in actual air temperature.

  **Importantly, wind chill does not
  cause inanimate objects to become
  colder than the surrounding air.**

  A water pipe exposed to 10°F air
  and a wind chill of -9°F can cool
  more quickly because of the wind,
  but it will not become colder
  than the actual 10°F air solely
  because of wind chill.

  #### Temperature Inversions and Cold-Air Pooling

  Under normal atmospheric conditions,
  air temperature generally decreases
  with increasing elevation.

  A **temperature inversion** occurs
  when a layer of warmer air sits
  above colder air near the surface.

  During clear, calm winter nights,
  the ground loses heat through
  radiation, cooling the air
  immediately above it.

  Because cold air is relatively
  dense, it can flow downhill
  and accumulate in valleys
  and other low-lying areas.

  This process is known as
  **cold-air pooling**.

  Several factors can help maintain
  a valley temperature inversion:

  - **Surrounding Mountains:** Mountain
    terrain can restrict the horizontal
    movement of trapped cold air.

  - **Stable Atmospheric Conditions:**
    High-pressure systems and weak
    winds can limit vertical mixing.

  - **Clear Nights:** Strong radiational
    cooling lowers temperatures
    near the ground.

  - **Snow-Covered Ground:** Snow cover
    can reinforce low surface
    temperatures by reflecting sunlight.

  These conditions can sometimes
  cause valley temperatures to be
  colder than temperatures at
  higher elevations.

  Utah Valley's geography makes
  temperature inversions and
  cold-air pooling particularly
  relevant to Provo.

  #### How Extreme Cold Affects the Human Body

  The human body maintains an internal
  temperature of approximately 98.6°F
  (37°C) through metabolic heat
  production and temperature regulation.

  When heat loss exceeds the body's
  ability to produce heat, body
  temperature begins to fall.

  Heat escapes through several processes:

  - **Radiation:** The body emits
    heat toward cooler surroundings.

  - **Conduction:** Heat transfers
    directly to colder surfaces
    through physical contact.

  - **Convection:** Moving air or
    water carries heat away
    from the body.

  - **Evaporation:** Moisture evaporating
    from the skin removes heat.

  Prolonged or severe cold exposure
  can produce two major medical conditions:

  - **Hypothermia:** Occurs when core
    body temperature falls below 95°F
    (35°C). It can impair coordination,
    judgment, and normal bodily
    functions and may become fatal.

  - **Frostbite:** Occurs when skin
    and underlying tissues freeze,
    potentially damaging cells
    and blood vessels. Fingers,
    toes, ears, and the nose
    are particularly vulnerable.

  The risk depends on temperature,
  wind, moisture, clothing,
  exposure duration, and
  individual circumstances.

  #### How Freezing Temperatures Affect Infrastructure

  Extreme cold can affect buildings,
  utilities, transportation systems,
  and mechanical equipment.

  Several physical processes
  contribute to cold-weather damage:

  - **Water Expansion:** Water expands
    by approximately 9% when it
    freezes. Ice formation inside
    confined plumbing can create
    pressures capable of rupturing
    pipes and fittings.

  - **Thermal Contraction:** Many
    materials contract as temperatures
    decrease. Temperature changes
    can place stress on joints,
    seals, and structural components.

  - **Reduced Battery Performance:**
    Cold temperatures slow
    electrochemical reactions,
    reducing the available power
    and starting capability
    of some batteries.

  - **Changes in Material Properties:**
    Some materials become more
    brittle or less flexible
    at very low temperatures.

  - **Increased Energy Demand:**
    Heating systems require more
    energy as the difference
    between indoor and outdoor
    temperatures increases.

  Water pipes are particularly
  vulnerable when located in
  unheated spaces or exposed
  to prolonged freezing conditions.

  Pipe failure may not become
  apparent until temperatures
  rise and accumulated ice melts,
  allowing water to escape
  through damaged sections.

  **Learn More:** [National Weather Service — Cold Weather Safety](https://www.weather.gov/safety/cold)

  **Additional Resource:** [National Weather Service — Understanding Wind Chill](https://www.weather.gov/safety/cold-wind-chill-chart)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="extreme-heat"
  title="Extreme Heat"
  image="/img/extreme-heat.png"
  impacts={['safety', 'utilities', 'water', 'services']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="July 2026 — Record Heat in Provo"
  exampleText="July 2026 was Provo's warmest July on record by average daily temperature, according to NOAA-based historical weather data. The average daily high reached approximately 98.9°F, with an average low of 67.9°F. The prolonged heat demonstrated how sustained high temperatures can place additional stress on residents, infrastructure, and electricity demand throughout Utah Valley."
>
  <p>
    Extreme heat occurs when temperatures rise significantly above
    normal levels for a particular region, often persisting for
    several consecutive days. Heat waves commonly develop when
    high-pressure systems create stable atmospheric conditions
    that favor strong surface heating and suppress cloud formation.
    Prolonged periods of high temperatures can become dangerous
    even without other severe weather.
  </p>

  <p>
    Provo experiences hot, relatively dry summers, with temperatures
    periodically exceeding 100°F. The city's location within Utah
    Valley and the presence of buildings, roads, and other developed
    surfaces can contribute to localized heat retention.
    Extended periods of high daytime temperatures, particularly
    when accompanied by warm nights, can increase heat exposure
    throughout the community.
  </p>

  <p>
    Extreme heat can cause dehydration, heat exhaustion, heatstroke,
    and other heat-related illnesses. Prolonged high temperatures
    can also increase electricity demand, strain cooling systems,
    affect transportation infrastructure, and place additional
    stress on vulnerable populations. Consecutive hot days
    without adequate overnight cooling can increase the
    severity of these impacts.
  </p>
</DisasterCard>

<AboutHazardModal id="extreme-heat" title="Extreme Heat">
  <div>

  #### How Extreme Heat Develops

  Extreme heat often develops when atmospheric conditions
  allow temperatures to remain unusually high over
  several consecutive days.

  Large areas of high atmospheric pressure can create
  conditions favorable for prolonged warming.

  These systems can cause air to descend through
  the atmosphere, where it compresses and warms.

  Several factors contribute to extreme heat events:

  - **High-Pressure Systems:** Large regions of high
    pressure can produce relatively stable weather,
    reduced cloud cover, and strong daytime heating.

  - **Heat Domes:** Persistent high-pressure patterns
    can maintain unusually hot conditions over
    large geographic areas for extended periods.

  - **Strong Solar Heating:** Clear skies allow
    substantial solar radiation to reach and
    warm the Earth's surface.

  - **Dry Soil Conditions:** When soil moisture
    is limited, less incoming energy is used
    for evaporation, allowing more energy
    to contribute to surface warming.

  - **Persistent Weather Patterns:** Slowly
    changing atmospheric circulation can
    allow hot conditions to remain over
    the same region for several days
    or longer.

  Heat waves can vary considerably in
  duration and severity.

  A temperature considered extreme in
  one geographic region may be relatively
  common in another.

  #### Understanding the Heat Index

  The **Heat Index**, sometimes called the
  apparent temperature, describes how hot
  the air feels to the human body when
  relative humidity is considered
  alongside air temperature.

  The body primarily cools itself
  through the evaporation of sweat.

  When humidity is high, the surrounding
  air contains more moisture, reducing
  the rate at which sweat evaporates.

  As a result, the body may have greater
  difficulty releasing excess heat.

  For example:

  | Air Temperature | Relative Humidity | Approximate Heat Index |
  |---|---|---|
  | 90°F | 40% | 91°F |
  | 90°F | 70% | 106°F |
  | 95°F | 50% | 107°F |
  | 100°F | 40% | 109°F |
  | 100°F | 50% | 118°F |

  These values illustrate how increasing
  humidity can substantially increase
  the apparent temperature.

  The National Weather Service calculates
  the standard Heat Index for shaded
  locations with light winds.

  **Exposure to direct sunlight can
  increase the apparent heat stress
  beyond the standard Heat Index.**

  In relatively dry climates such as
  Utah's, the Heat Index may sometimes
  be lower than the actual air temperature.
  However, intense sunlight, physical
  activity, and limited evaporative
  cooling can still produce dangerous
  heat exposure.

  #### Understanding Urban Heat Islands

  Urban areas can experience higher
  temperatures than surrounding
  rural or undeveloped locations.

  This phenomenon is known as the
  **Urban Heat Island Effect**.

  Several characteristics of developed
  areas contribute to this effect:

  - **Heat-Absorbing Surfaces:** Asphalt,
    concrete, and buildings absorb
    solar energy during the day
    and release stored heat later.

  - **Limited Vegetation:** Fewer trees
    and plants reduce shade and
    evaporative cooling.

  - **Building Density:** Closely spaced
    structures can restrict airflow
    and influence how heat escapes
    from developed areas.

  - **Human Activities:** Vehicles,
    industrial equipment, and
    air-conditioning systems release
    additional heat into the environment.

  - **Reduced Nighttime Cooling:**
    Roads and buildings can continue
    releasing stored heat after sunset.

  Urban heat islands can be particularly
  noticeable during the evening and
  overnight hours.

  As a result, developed neighborhoods
  may remain warmer than nearby
  parks or less-developed areas.

  #### How Extreme Heat Affects the Human Body

  The human body maintains a relatively
  stable internal temperature by balancing
  heat production and heat loss.

  When environmental temperatures
  become elevated, the body relies
  increasingly on two processes:

  - **Sweating:** Evaporation of moisture
    from the skin removes heat
    from the body.

  - **Increased Skin Blood Flow:**
    Blood vessels near the skin
    expand, allowing additional
    body heat to transfer
    toward the environment.

  When heat exposure exceeds the
  body's ability to regulate its
  temperature, heat-related illness
  can develop.

  Several conditions may occur:

  - **Heat Cramps:** Painful muscle
    spasms that can develop during
    strenuous activity in hot
    conditions, often associated
    with heavy sweating.

  - **Heat Exhaustion:** Develops
    when the body struggles to
    regulate temperature and
    maintain adequate circulation,
    often producing heavy sweating,
    weakness, dizziness, and nausea.

  - **Heatstroke:** A life-threatening
    condition in which the body's
    temperature regulation fails,
    producing severe overheating
    and central nervous system
    dysfunction, such as confusion,
    seizures, or unconsciousness.

  Heatstroke is a medical emergency
  and can cause permanent organ
  damage or death.

  The risk of heat-related illness
  depends on environmental conditions,
  physical activity, hydration,
  individual health, and the
  duration of exposure.

  #### Why Prolonged Heat Is Dangerous

  A single hot afternoon can create
  dangerous conditions, but extended
  heat waves present additional challenges.

  Repeated exposure to high temperatures
  can place cumulative stress on the
  human body and community infrastructure.

  Several factors contribute to
  these increased impacts:

  - **Warm Overnight Temperatures:**
    Limited nighttime cooling can
    prevent people and buildings
    from recovering from daytime heat.

  - **Cumulative Heat Exposure:**
    Consecutive hot days increase
    the duration of thermal stress
    experienced by residents.

  - **Increased Electricity Demand:**
    Greater use of air conditioning
    increases demand on electricity
    generation and distribution systems.

  - **Infrastructure Stress:** Prolonged
    heat can affect pavement, rail
    infrastructure, electrical
    equipment, and mechanical systems.

  - **Reduced Cooling Opportunities:**
    Buildings without effective cooling
    may accumulate heat over several
    consecutive days.

  - **Vulnerable Populations:** Older
    adults, young children, people
    with certain medical conditions,
    and individuals without access
    to effective cooling may face
    elevated risks.

  Warm nighttime temperatures are
  especially important because
  they limit opportunities for
  the body and built environment
  to release accumulated heat.

  **Learn More:** [National Weather Service — Heat Safety](https://www.weather.gov/safety/heat)

  **Additional Resource:** [NOAA — Heat Index](https://www.weather.gov/safety/heat-index)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="tornado"
  title="Tornado"
  image="/img/tornado.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Negligible"
  magnitudeLevel={1}
  impacts={['safety', 'infrastructure', 'housing', 'utilities', 'communications']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="1982 — Provo Airport Tornado"
  exampleText="On September 13, 1982, a waterspout formed over Utah Lake before moving ashore at the Provo Airport as a tornado. The storm damaged an airport security gate and overturned a small aircraft that had been tied down. The tornado traveled approximately half a mile, demonstrating that tornadoes can occur directly within Provo and surrounding Utah Valley."
>
  <p>
    Tornadoes are rapidly rotating columns of air extending from a
    thunderstorm to the ground. They develop when atmospheric
    conditions produce concentrated rotation within a storm,
    sometimes creating a visible funnel-shaped cloud. Tornadoes
    vary considerably in size, duration, and intensity, with
    the strongest producing extremely destructive winds.
  </p>

  <p>
    Although tornadoes occur less frequently in Utah than
    in the central United States, they are a documented
    hazard in Utah County. Thunderstorms developing over
    Utah Valley can occasionally produce tornadoes,
    including waterspouts that form over Utah Lake and
    move onto surrounding land. Provo's mountainous
    surroundings do not eliminate the possibility
    of tornado formation.
  </p>

  <p>
    Tornadoes can damage buildings, uproot trees, overturn
    vehicles, and destroy exposed infrastructure. Their
    rotating winds can lift and propel debris, creating
    significant hazards for people and property. Even
    relatively weak tornadoes can cause localized damage,
    while stronger events may produce widespread
    destruction along their paths.
  </p>
</DisasterCard>

<AboutHazardModal id="tornado" title="Tornado">
  <div>

  #### How Tornadoes Form

  Tornadoes develop when atmospheric conditions
  allow concentrated rotation to form within
  a thunderstorm and extend to the ground.

  Many significant tornadoes develop within
  powerful thunderstorms known as **supercells**.

  Several atmospheric conditions contribute
  to tornado formation:

  - **Atmospheric Instability:** Warm, moist
    air near the surface can rise rapidly
    when surrounded by cooler air aloft.

  - **Wind Shear:** Changes in wind speed
    or direction with height can create
    horizontal rotation within the atmosphere.

  - **Strong Updrafts:** Rising air within
    a thunderstorm can tilt and stretch
    rotating air into a more vertical
    orientation.

  - **Storm Rotation:** In some thunderstorms,
    organized rotation develops within
    the updraft, forming a mesocyclone.

  - **Near-Surface Rotation:** Under favorable
    conditions, concentrated rotation can
    develop near the ground and connect
    with the circulation within the storm.

  Not every rotating thunderstorm produces
  a tornado. The exact processes that
  determine whether a tornado develops
  remain an active area of meteorological
  research.

  #### Types of Tornadoes

  Tornadoes can form through different
  atmospheric processes.

  - **Supercell Tornadoes:** Develop within
    organized thunderstorms containing
    persistent rotating updrafts known
    as mesocyclones. These tornadoes
    can become particularly large
    and destructive.

  - **Landspouts:** Generally develop
    when a growing thunderstorm updraft
    stretches existing rotation near
    the ground. Unlike typical supercell
    tornadoes, landspouts do not
    require a rotating mesocyclone.

  - **Waterspouts:** Rotating columns
    of air that occur over water.
    Fair-weather waterspouts typically
    develop through processes similar
    to landspouts, while tornadic
    waterspouts are associated with
    rotating thunderstorms.

  - **Multiple-Vortex Tornadoes:** Contain
    two or more smaller rotating
    vortices moving around a common
    center. These smaller vortices
    can produce concentrated areas
    of particularly intense damage.

  Waterspouts are especially relevant
  to Utah County because they have
  been documented over Utah Lake.

  A waterspout that moves onto land
  may continue as a tornado.

  #### Understanding the Enhanced Fujita Scale

  The **Enhanced Fujita Scale (EF Scale)**
  is used in the United States to
  classify tornado intensity based
  on the damage a tornado causes.
  The National Weather Service evaluates
  damage to buildings, trees, and
  other structures to estimate the
  wind speeds responsible.

  The scale contains six categories:

  | Rating | Estimated Wind Speed | Classification |
  |---|---|---|
  | EF0 | 65–85 mph | Weak |
  | EF1 | 86–110 mph | Weak |
  | EF2 | 111–135 mph | Strong |
  | EF3 | 136–165 mph | Strong |
  | EF4 | 166–200 mph | Violent |
  | EF5 | Over 200 mph | Violent |

  The scale became operational in
  the United States in 2007,
  replacing the original Fujita Scale.

  **Important:** EF ratings are primarily
  based on damage assessments, not
  direct measurements of tornado winds.

  The actual wind speeds within a
  tornado can vary considerably
  along its path.

  Tornado size also does not reliably
  indicate intensity. A relatively
  narrow tornado can produce
  extremely destructive winds.

  #### Tornadoes vs. Straight-Line Winds

  Tornadoes and damaging straight-line
  winds can both occur during
  severe thunderstorms.

  However, their wind patterns
  are fundamentally different.

  - **Tornadoes:** Produce concentrated
    rotating winds around a
    relatively narrow circulation.

  - **Straight-Line Winds:** Generally
    flow outward from thunderstorm
    downdrafts, without the organized
    rotating circulation of a tornado.

  - **Downbursts:** Occur when strong
    descending air reaches the
    ground and spreads outward,
    producing potentially destructive
    straight-line winds.

  Tornadoes often produce damage
  patterns that reflect converging
  or rotating airflow.

  Straight-line winds more commonly
  produce damage oriented in
  similar directions across
  an affected area.

  However, damage patterns can be
  complex, and trained meteorologists
  evaluate multiple types of evidence
  when determining the cause.

  #### Tornadoes in Utah

  Tornadoes occur in Utah, although
  they are less common than in
  regions such as the central
  Great Plains.

  The National Weather Service
  documented nine tornadoes in
  Utah County between 1950 and 2012.

  Several noteworthy local
  incidents include:

  - **1965 — Provo Canyon:** A tornado
    touched down near Vivian Park,
    toppling large trees and
    damaging a tent.

  - **1966 — Springville:** A tornado
    uprooted a tree and removed
    part of a home's roof.

  - **1982 — Provo Airport:** A waterspout
    moved ashore from Utah Lake,
    damaging airport property and
    overturning a small aircraft.

  - **2003 — Payson:** An F0 tornado
    damaged fencing and moved
    a small aluminum boat.

  Although Utah tornadoes are
  generally less frequent and
  often weaker than those observed
  in the Great Plains, significant
  tornadoes are possible.

  For example, an F2 tornado
  struck downtown Salt Lake City
  on August 11, 1999, killing
  one person, injuring more
  than 80 others, and causing
  extensive property damage.

  This event demonstrates that
  destructive tornadoes can
  occur along the Wasatch Front.

  **Learn More:** [NOAA — How Tornadoes Form](https://www.noaa.gov/jetstream/thunderstorms/thunderstorm-hazards-tornadoes)

  **Additional Resource:** [National Weather Service — Enhanced Fujita Scale](https://www.weather.gov/grb/efscale)

  **Utah History:** [National Weather Service — Tornadoes in Utah](https://www.weather.gov/slc/tornado)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="infestation"
  title="Infestation"
  image="/img/infestation.png"
  impacts={['agriculture', 'environment', 'economy']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="2006 — Japanese Beetle Infestation, Orem"
  exampleText="In July 2006, an invasive population of Japanese beetles was discovered in Orem, Utah. The insects threatened lawns, ornamental plants, trees, and agricultural crops because they feed on hundreds of plant species. The Utah Department of Agriculture and Food implemented an extensive monitoring and treatment program that successfully eradicated the established population, demonstrating how invasive pests can threaten local ecosystems and agricultural resources."
>
  <p>
    Infestations occur when populations of insects, plants, or other
    harmful organisms increase or spread to levels that threaten
    agriculture, natural ecosystems, property, or public health.
    They may involve unusually large populations of native pests
    or invasive species introduced from other regions.
    Infestations can develop gradually and persist for months
    or years if conditions support continued reproduction.
  </p>

  <p>
    Provo and Utah County contain agricultural land, residential
    landscapes, urban forests, and natural ecosystems that can
    be affected by pest outbreaks. Seasonal temperatures,
    vegetation availability, and environmental conditions
    influence which organisms can survive and reproduce.
    Human transportation of plants, soil, and other materials
    can also introduce invasive species into the region.
  </p>

  <p>
    Infestations can damage crops, weaken or kill trees,
    reduce agricultural productivity, and disrupt natural
    ecosystems. Large pest populations may create substantial
    economic losses and require extensive management efforts.
    Some organisms can also transmit diseases to humans,
    animals, or plants, creating additional consequences
    beyond direct damage to vegetation.
  </p>
</DisasterCard>

<AboutHazardModal id="infestation" title="Infestation">
  <div>

  #### How Infestations Develop

  Under normal conditions, populations of insects and
  other organisms are influenced by food availability,
  climate, predators, diseases, and competition.

  These factors help regulate population growth
  within an ecosystem.

  An infestation can develop when favorable conditions
  allow a pest population to increase substantially
  or when an introduced organism becomes established
  in a new environment.

  Several factors can contribute to infestations:

  - **Favorable Temperatures:** Warm conditions can
    accelerate the development and reproduction
    of certain insects.

  - **Abundant Food Sources:** Large areas of
    suitable crops, trees, or vegetation can
    support expanding pest populations.

  - **Reduced Natural Predation:** A lack of
    predators, parasites, or diseases may
    allow pest populations to grow.

  - **Environmental Stress:** Drought, disease,
    and other environmental conditions can
    weaken vegetation, increasing its
    susceptibility to certain pests.

  - **Introduction of New Species:** Organisms
    transported into unfamiliar ecosystems
    may establish populations where natural
    controls are limited.

  Infestations often develop through a combination
  of environmental and biological factors
  rather than a single cause.

  #### Native Pests vs. Invasive Species

  Not all organisms responsible for infestations
  are invasive species.

  An important distinction exists between
  native organisms experiencing population
  outbreaks and organisms introduced
  from other regions.

  - **Native Pests:** Organisms naturally
    occurring within an ecosystem that
    can cause damage when their populations
    become unusually large. Examples
    include certain grasshoppers and
    bark beetles.

  - **Introduced Species:** Organisms
    transported outside their natural
    geographic range through human
    activity, either intentionally
    or accidentally.

  - **Invasive Species:** Introduced
    organisms that become established
    and cause, or are likely to cause,
    ecological, economic, or other harm.

  An introduced species is not necessarily
  invasive. Many introduced organisms
  do not spread aggressively or cause
  significant damage.

  Conversely, native species can still
  produce destructive outbreaks when
  environmental conditions allow
  their populations to expand.

  #### Types of Infestations

  Infestations can affect several
  different environments and resources.

  - **Agricultural Pests:** Insects such as
    grasshoppers, Mormon crickets, and
    crop-feeding beetles can damage
    fields, orchards, and agricultural
    production.

  - **Forest Pests:** Bark beetles and
    other insects can attack trees,
    weakening or killing large numbers
    of them during severe outbreaks.

  - **Invasive Plants:** Non-native plants
    can spread into natural habitats,
    displacing native vegetation and
    altering ecosystem conditions.

  - **Urban Landscape Pests:** Insects
    such as Japanese beetles can damage
    residential lawns, ornamental
    plants, and urban trees.

  - **Disease Vectors:** Organisms such
    as mosquitoes and ticks can carry
    pathogens that cause disease
    in humans or animals.

  Different infestations have different
  ecological and economic consequences.

  Some primarily affect vegetation,
  while others can threaten agriculture,
  wildlife, or public health.

  #### How Infestations Spread

  The spread of an infestation depends
  on the organism's biology, available
  habitat, and environmental conditions.

  Several processes can allow pests
  and invasive species to expand:

  - **Natural Reproduction:** Rapid
    reproductive cycles can allow
    populations to increase substantially
    within a short period.

  - **Migration and Dispersal:** Flying
    insects, windborne seeds, and
    mobile organisms can spread
    into surrounding areas.

  - **Human Transportation:** Plants,
    firewood, soil, agricultural
    products, and vehicles can
    unintentionally transport pests
    into new locations.

  - **Suitable Habitat:** Areas containing
    appropriate food sources, shelter,
    and environmental conditions
    can support new populations.

  - **Limited Natural Controls:** Invasive
    organisms may spread more successfully
    when predators, diseases, or
    competitors are absent.

  Once an organism becomes established
  across a large geographic area,
  eliminating it can become increasingly
  difficult.

  #### Why Infestations Are Difficult to Control

  Infestations can present significant
  management challenges because organisms
  reproduce, disperse, and interact
  with surrounding ecosystems.

  Several factors complicate control efforts:

  - **Rapid Population Growth:** Some
    insects produce multiple generations
    within a single growing season.

  - **Early Detection Challenges:** Small
    populations may remain unnoticed
    until damage becomes visible.

  - **Large Geographic Areas:** Pests
    can spread across private property,
    agricultural land, and natural
    habitats with different management
    practices.

  - **Hidden Life Stages:** Eggs, larvae,
    and organisms living underground
    may be difficult to detect.

  - **Environmental Consequences:** Broad
    pest-control methods can affect
    beneficial insects and other
    non-target organisms.

  - **Reintroduction:** Even after
    successful eradication, pests
    may be transported into the
    region again.

  These challenges help explain why
  monitoring and early detection are
  important parts of invasive-species
  management.

  The Japanese beetle eradication
  program in Orem illustrates how
  sustained monitoring and coordinated
  treatment can eliminate an
  established invasive pest population.

  **Learn More:** [USDA APHIS — Plant Pests and Diseases in Utah](https://www.aphis.usda.gov/plant-pests-diseases/utah)

  **Local Resource:** [Utah State University Extension — Japanese Beetle](https://extension.usu.edu/planthealth/research/japanese-beetle)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="volcano"
  title="Volcano"
  image="/img/volcano.png"
  impacts={['air', 'safety', 'transportation', 'agriculture', 'communications']}
  about={true}
  exampleLabel="Utah Example"
  exampleTitle="Approximately 660 Years Ago — Ice Springs Eruption"
  exampleText="Utah's most recent known volcanic eruption occurred at Ice Springs in the Black Rock Desert of Millard County approximately 660 years ago. The eruption produced basaltic lava flows and volcanic cones that remain visible today. Although this volcanic field is far from Provo, it demonstrates that volcanic activity has occurred in Utah during relatively recent geologic history."
>
  <p>
    Volcanoes are openings in the Earth's crust through which molten
    rock, gases, and other volcanic materials reach the surface.
    Eruptions occur when magma rises from beneath the Earth's surface,
    sometimes producing flowing lava, volcanic ash, or explosive
    releases of gas and fragmented rock. Volcanic activity can
    range from relatively gentle lava flows to highly destructive
    explosive eruptions.
  </p>

  <p>
    Utah has experienced volcanic activity throughout its geologic
    history, including relatively recent eruptions in the Black Rock
    Desert of central Utah. However, Provo is not located near
    an identified active volcanic system, and the 2022
    Pre-Disaster Mitigation Plan does not classify volcanic
    eruptions as a significant local hazard.
  </p>

  <p>
    Volcanic eruptions can destroy nearby infrastructure through
    lava flows, ash accumulation, and other volcanic hazards.
    Large explosive eruptions may also disrupt aviation,
    transportation, and regional infrastructure far beyond
    the immediate eruption area. For Provo, indirect impacts
    from a distant major eruption are more plausible than
    damage from nearby volcanic activity.
  </p>
</DisasterCard>

<AboutHazardModal id="volcano" title="Volcano">
  <div>

  #### How Volcanoes Form

  Volcanoes develop when molten or partially molten rock,
  known as **magma**, forms beneath the Earth's surface
  and moves upward through the crust.

  Magma can form through several processes, including
  decompression melting, the addition of water to
  hot rock, and changes in temperature.

  Because magma can be less dense than surrounding
  rock, buoyancy and pressure differences can
  contribute to its upward movement.

  Several processes are involved in volcanic activity:

  1. **Magma Generation:** Rock partially melts
     beneath the Earth's surface, producing magma.

  2. **Magma Movement:** Magma rises through
     fractures and other pathways in the crust.

  3. **Magma Storage:** Some magma accumulates
     in underground reservoirs before erupting.

  4. **Volcanic Eruption:** Magma, gases, and
     fragmented rock may escape through
     openings called volcanic vents.

  5. **Volcanic Landform Development:** Repeated
     eruptions can gradually build volcanic
     mountains, cones, or extensive lava fields.

  Once magma reaches the Earth's surface,
  it is called **lava**.

  Volcanoes commonly occur near tectonic
  plate boundaries, although some develop
  within tectonic plates.

  #### Types of Volcanoes

  Volcanoes develop different shapes and structures
  depending on the composition of their magma
  and the characteristics of their eruptions.

  - **Shield Volcanoes:** Broad volcanoes with
    relatively gentle slopes, built primarily
    by repeated flows of fluid basaltic lava.
    Hawaii's Mauna Loa is a well-known example.

  - **Stratovolcanoes:** Also called composite
    volcanoes, these are generally steep-sided
    mountains built from alternating layers
    of lava flows and fragmented volcanic
    materials. Mount St. Helens and
    Mount Rainier are examples.

  - **Cinder Cones:** Relatively small,
    steep-sided volcanoes formed when
    fragments of molten rock are ejected
    from a vent and accumulate around it.
    Cinder cones occur in several
    volcanic fields throughout Utah.

  - **Lava Domes:** Form when thick,
    highly viscous lava accumulates
    near a volcanic vent rather than
    flowing long distances. Growing
    lava domes can become unstable
    and collapse.

  A single volcanic system may contain
  several volcanic landforms, depending
  on its eruption history.

  #### Types of Volcanic Eruptions

  Volcanic eruptions vary considerably
  in their intensity and behavior.

  Two broad categories describe
  how volcanic material reaches
  the surface:

  - **Effusive Eruptions:** Occur when
    relatively fluid lava flows onto
    the surface without extensive
    explosive fragmentation.
    These eruptions can produce
    extensive lava fields.

  - **Explosive Eruptions:** Occur when
    rapidly expanding gases fragment
    magma and propel ash, rock,
    and other volcanic material
    into the atmosphere.

  The behavior of an eruption depends
  on several important factors:

  - **Magma Viscosity:** Describes how
    strongly magma resists flowing.
    Highly viscous magma generally
    moves less easily than
    low-viscosity magma.

  - **Gas Content:** Dissolved gases
    can expand as magma rises
    and pressure decreases.

  - **Magma Composition:** The chemical
    composition, particularly silica
    content, influences viscosity
    and eruption behavior.

  - **Interaction With Water:** Contact
    between hot volcanic material
    and water can produce steam
    explosions and additional
    fragmentation.

  A volcano can produce different
  eruption styles during separate
  periods of activity.

  #### Understanding Volcanic Hazards

  Volcanic eruptions can create several
  distinct hazards.

  - **Lava Flows:** Streams or sheets
    of molten rock moving across
    the ground. Lava can burn,
    bury, or destroy structures
    along its path.

  - **Volcanic Ash:** Tiny fragments
    of volcanic glass, rock, and
    minerals produced during explosive
    eruptions. Ash can travel
    substantial distances through
    the atmosphere.

  - **Pyroclastic Flows:** Extremely
    hot, rapidly moving mixtures
    of volcanic gases, ash,
    and rock fragments that
    travel along the ground.

  - **Volcanic Gases:** Volcanoes
    release gases such as water
    vapor, carbon dioxide,
    and sulfur dioxide, which
    can affect the atmosphere
    and nearby environments.

  - **Lahars:** Volcanic mudflows
    formed when water mixes
    with loose volcanic material.
    Lahars can travel through
    river valleys and bury
    developed areas.

  - **Volcanic Projectiles:** Explosive
    eruptions can eject large
    fragments of rock or molten
    material near the volcanic vent.

  The hazards produced by an eruption
  depend on the type of volcano,
  eruption characteristics,
  and surrounding geography.

  #### Volcanic Activity in Utah

  Utah contains numerous volcanic
  landforms representing millions
  of years of geologic activity.

  One of the most significant areas
  is the **Black Rock Desert volcanic
  field** in Millard County.

  This volcanic field contains
  lava flows, cinder cones,
  and other features produced
  by repeated eruptions.

  Several notable volcanic features
  include:

  - **Pavant Butte:** A volcanic
    landform created when an eruption
    interacted with the waters
    of ancient Lake Bonneville
    approximately 15,300 years ago.

  - **Tabernacle Hill:** A volcanic
    feature formed approximately
    14,500 years ago during
    the Lake Bonneville period.

  - **Ice Springs:** The site
    of Utah's youngest known
    volcanic eruption, approximately
    660 years ago.

  These volcanic features demonstrate
  that Utah has experienced eruptions
  during relatively recent
  geologic history.

  However, volcanic activity
  is not evenly distributed
  across the state.

  Provo and Utah Valley are not
  located within the Black Rock
  Desert volcanic field, and
  no significant direct volcanic
  hazard is identified for Provo
  in the regional mitigation plan.

  **Learn More:** [USGS — About Volcanoes](https://www.usgs.gov/programs/VHP/about-volcanoes)

  **Utah Resource:** [Utah Geological Survey — Quaternary Volcanic Rocks of Utah](https://geology.utah.gov/hazards/volcanoes/quaternary-volcanic-rocks-of-utah/)

  **Local Geology:** [Utah Geological Survey — Black Rock Desert Volcanic Features](https://geology.utah.gov/map-pub/survey-notes/geosights/geosights-volcanic-features-in-the-black-rock-desert-millard-county/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="hurricane"
  title="Hurricane"
  image="/img/hurricane.png"
  impacts={['safety', 'infrastructure', 'utilities', 'communications', 'transportation']}
  about={true}
  exampleLabel="Regional Example"
  exampleTitle="2023 — Hurricane Hilary Remnants"
  exampleText="In August 2023, Hurricane Hilary weakened into a tropical storm as it moved through the southwestern United States. Moisture associated with the remnants spread into the Great Basin, including portions of Utah, contributing to rainfall and elevated flash-flood concerns. The event demonstrated how tropical cyclones can influence weather far inland, even after losing their hurricane-strength winds."
>
  <p>
    Hurricanes are powerful tropical cyclones that develop over
    warm ocean waters and contain organized thunderstorms
    rotating around an area of low atmospheric pressure.
    They are classified as hurricanes when their maximum
    sustained winds reach at least 74 mph. These storms
    can produce destructive winds, torrential rainfall,
    and significant coastal flooding.
  </p>

  <p>
    Provo is located far inland and is not exposed to direct
    hurricane landfalls. Tropical cyclones generally weaken
    as they move away from warm ocean waters, making
    hurricane-force conditions from such systems extremely
    unlikely in Utah Valley. However, moisture from
    weakening tropical cyclones can occasionally travel
    into the western United States and influence rainfall
    patterns across Utah.
  </p>

  <p>
    Hurricanes can cause extensive damage to buildings,
    utilities, transportation networks, and coastal
    infrastructure. Although Provo does not face the
    direct coastal hazards associated with hurricanes,
    moisture from distant tropical systems can contribute
    to periods of heavy precipitation and associated
    disruptions. Such impacts depend on the storm's
    path and surrounding atmospheric conditions.
  </p>
</DisasterCard>

<AboutHazardModal id="hurricane" title="Hurricane">
  <div>

  #### How Hurricanes Form

  Hurricanes develop over warm tropical or subtropical
  ocean waters when atmospheric conditions support
  the organization of thunderstorms around an area
  of low pressure.

  Several conditions contribute to hurricane formation:

  - **Warm Ocean Water:** Sea surface temperatures
    of approximately 80°F (26.5°C) or warmer,
    extending through a sufficiently deep layer,
    generally favor tropical cyclone development.

  - **Atmospheric Moisture:** Moist air supports
    the formation of deep thunderstorms and
    releases energy as water vapor condenses.

  - **Low Wind Shear:** Relatively small changes
    in wind speed or direction with height
    allow thunderstorms to remain organized
    around the developing circulation.

  - **Atmospheric Instability:** Warm, moist
    air rising through the atmosphere
    supports sustained thunderstorm activity.

  - **Coriolis Effect:** Earth's rotation
    helps organize large-scale circulation.
    This is why tropical cyclones rarely
    form directly along the equator.

  Hurricane development begins when a
  disturbance produces organized thunderstorms
  and a developing low-pressure circulation.

  As moist air rises and water vapor condenses,
  latent heat is released into the atmosphere.

  This heating helps sustain the circulation
  and can contribute to falling atmospheric
  pressure and strengthening winds.

  If favorable conditions persist, the
  disturbance may strengthen into a
  tropical depression, tropical storm,
  and eventually a hurricane.

  #### Understanding Hurricane Structure

  Mature hurricanes contain several
  distinct atmospheric features.

  - **Eye:** A relatively calm region
    near the center of a strong
    tropical cyclone. The eye often
    contains lighter winds and
    fewer clouds than surrounding areas.

  - **Eyewall:** A ring of powerful
    thunderstorms surrounding the eye.
    The strongest sustained winds
    and most intense convection
    are typically found here.

  - **Spiral Rainbands:** Curved bands
    of thunderstorms extending outward
    from the storm's center. Rainbands
    can produce heavy rainfall,
    gusty winds, and tornadoes.

  - **Central Low Pressure:** The
    low-pressure center around which
    the storm's winds circulate.

  - **Upper-Level Outflow:** Air rising
    within the storm spreads outward
    near the top of the troposphere,
    helping maintain the circulation.
  Hurricanes rotate counterclockwise
  in the Northern Hemisphere and
  clockwise in the Southern Hemisphere.

  The size of a hurricane can vary
  considerably and is not necessarily
  related to its intensity.

  #### Tropical Cyclone Classifications

  Tropical cyclones are classified
  according to their maximum
  sustained wind speeds.

  | Classification | Sustained Wind Speed |
  |---|---|
  | Tropical Depression | 38 mph or less |
  | Tropical Storm | 39–73 mph |
  | Hurricane | 74 mph or greater |
  | Major Hurricane | 111 mph or greater |

  A tropical cyclone receives a name
  when it reaches tropical storm strength.

  The term **hurricane** is generally
  used for tropical cyclones in the
  Atlantic and eastern North Pacific.

  Similar storms are called
  **typhoons** in the western
  North Pacific, while the term
  **tropical cyclone** is used
  in several other ocean basins.

  These names describe the same
  general type of weather system.

  #### Understanding the Saffir-Simpson Scale

  The **Saffir-Simpson Hurricane Wind Scale**
  classifies hurricanes into five categories
  according to their maximum sustained
  wind speeds.

  | Category | Sustained Winds | General Wind Damage |
  |---|---|---|
  | 1 | 74–95 mph | Some damage |
  | 2 | 96–110 mph | Extensive damage |
  | 3 | 111–129 mph | Devastating damage |
  | 4 | 130–156 mph | Catastrophic damage |
  | 5 | 157+ mph | Catastrophic damage |

  Categories 3, 4, and 5 are classified
  as **major hurricanes**.

  The scale describes the destructive
  potential of hurricane winds.

  It does not directly account for
  rainfall, storm surge, or flooding.

  Consequently, a lower-category
  hurricane can still produce
  catastrophic consequences,
  particularly when it generates
  extreme rainfall or coastal flooding.

  #### Why Hurricanes Weaken Over Land

  Hurricanes obtain much of their energy
  from heat and moisture supplied by
  warm ocean waters.

  When a hurricane moves inland,
  it loses direct access to this
  oceanic energy source.

  Several processes contribute
  to weakening:

  - **Reduced Moisture Supply:** The
    storm receives less energy
    from evaporation over warm water.

  - **Surface Friction:** Trees,
    buildings, and terrain increase
    friction and disrupt the
    storm's low-level circulation.

  - **Mountainous Terrain:** Mountains
    can interfere with the storm's
    circulation and alter its structure.

  - **Wind Shear:** Changes in wind
    speed and direction with height
    can displace thunderstorms
    away from the circulation center.

  - **Cooler Water:** Movement over
    colder ocean waters can also
    reduce the energy available
    to sustain the storm.

  Hurricanes usually weaken after
  moving inland, although their
  remaining circulation and moisture
  can persist for considerable distances.

  #### How Hurricane Remnants Can Affect Utah

  Although Utah is far from the ocean,
  moisture associated with tropical
  cyclones can occasionally reach
  the interior western United States.

  Some tropical cyclones form in the
  eastern Pacific Ocean near Mexico
  and move northward toward the
  southwestern United States.

  As these systems weaken, their
  remaining moisture can interact
  with other atmospheric disturbances.

  Several outcomes are possible:

  - **Moisture Transport:** Tropical
    systems can introduce unusually
    moist air into otherwise
    relatively dry regions.

  - **Enhanced Precipitation:** Tropical
    moisture interacting with other
    weather systems can support
    additional rainfall.

  - **Widespread Cloud Cover:** Moisture
    and atmospheric disturbances
    can produce extensive cloudiness.

  - **Changing Weather Patterns:** The
    remnants of a tropical cyclone
    may interact with prevailing
    winds and other storm systems.

  Hurricane Hilary in August 2023
  demonstrated how moisture from
  a former hurricane can spread
  into the Great Basin and
  influence weather across
  parts of the western United States.

  These events do not mean that
  Utah is experiencing a hurricane.
  By the time tropical systems
  affect the state, they have
  generally weakened or lost
  their tropical cyclone structure.

  **Learn More:** [NOAA — What Is a Hurricane?](https://oceanservice.noaa.gov/facts/hurricane.html)

  **Additional Resource:** [National Hurricane Center — Saffir-Simpson Hurricane Wind Scale](https://www.nhc.noaa.gov/aboutsshws.php)

  **Regional Example:** [NOAA — Tropical Storm Hilary, August 2023](https://www.wpc.ncep.noaa.gov/tropical/rain/hilary2023.html)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="tsunami"
  title="Tsunami"
  image="/img/tsunami.png"
  impacts={['safety', 'infrastructure', 'transportation', 'utilities', 'communications']}
  about={true}
  exampleLabel="Utah Example"
  exampleTitle="1909 — Great Salt Lake Seiche"
  exampleText="The magnitude 6+ Hansel Valley earthquake in 1909 produced reported wave activity in the Great Salt Lake. The Utah Geological Survey identifies this event in its discussion of earthquake-induced lake oscillations, known as seiches. Although different from an ocean tsunami, the event demonstrates how earthquakes can disturb large inland bodies of water."
>
  <p>
    Tsunamis are series of long-period waves generated when
    large volumes of water are suddenly displaced. They are
    most commonly caused by underwater earthquakes, although
    landslides, volcanic eruptions, and other disturbances
    can also generate tsunami waves. Unlike ordinary surface
    waves, tsunamis can transport enormous amounts of energy
    across entire ocean basins.
  </p>

  <p>
    Provo is located far inland and cannot be reached by
    a conventional ocean tsunami. However, large inland
    bodies of water, including Utah Lake, can theoretically
    experience waves generated by sudden water displacement
    or oscillations known as seiches. The 2022 Pre-Disaster
    Mitigation Plan does not identify tsunamis as a
    significant local hazard for Provo.
  </p>

  <p>
    Tsunamis can produce powerful currents, rapid changes
    in water level, and destructive inundation along
    affected shorelines. In inland lakes, unusual water
    movement could potentially affect nearby shorelines,
    marinas, and waterfront infrastructure. However,
    these phenomena should not be confused with the
    much larger ocean-tsunami hazards experienced
    by coastal communities.
  </p>
</DisasterCard>

<AboutHazardModal id="tsunami" title="Tsunami">
  <div>

  #### How Tsunamis Form

  Tsunamis develop when a large volume of water
  is suddenly displaced, causing waves to spread
  outward from the source of the disturbance.

  Most major tsunamis are generated by large
  underwater earthquakes that produce significant
  vertical movement of the seafloor.

  Several processes can generate tsunamis:

  - **Underwater Earthquakes:** Sudden movement
    of the seafloor can raise or lower large
    sections of the overlying water.

  - **Submarine Landslides:** Large masses of
    sediment or rock moving underwater can
    displace water and generate waves.

  - **Coastal Landslides:** Rock or soil falling
    into a body of water can create a sudden
    displacement and generate powerful waves.

  - **Volcanic Activity:** Underwater eruptions,
    volcanic explosions, or collapsing
    volcanic slopes can generate tsunamis.

  - **Meteorite Impacts:** Large objects
    striking the ocean can displace
    substantial quantities of water,
    although such events are extremely rare.

  Not every underwater earthquake produces
  a tsunami. The size, depth, fault movement,
  and amount of water displaced all influence
  whether significant waves develop.

  #### How Tsunami Waves Travel

  Tsunami waves behave differently from
  most ordinary ocean waves.

  In deep water, a tsunami typically has
  a very long wavelength, sometimes
  extending hundreds of miles between
  successive wave crests.

  Because of these long wavelengths,
  tsunami waves can travel at
  extremely high speeds.

  In deep ocean water, tsunami speeds
  can exceed **500 mph**, comparable
  to the speed of a commercial aircraft.

  Despite this speed, the height of
  a tsunami in the open ocean may
  be relatively small.

  As a tsunami approaches shallow
  coastal waters, several changes occur:

  1. **Wave Speed Decreases:** Shallower
     water causes the wave to slow.

  2. **Wavelength Shortens:** The distance
     between successive wave crests
     generally decreases.

  3. **Wave Height May Increase:** The
     wave's energy becomes concentrated
     into a shorter horizontal distance,
     potentially increasing its height.

  4. **Water Moves Inland:** The wave may
     surge onto land, producing
     strong currents and flooding.

  This transformation is known
  as **wave shoaling**.

  Tsunamis do not always appear as
  towering breaking waves. They can
  arrive as rapidly rising water
  or powerful surges.

  #### Tsunamis vs. Ordinary Waves

  Ordinary ocean waves and tsunamis
  differ in how they form and
  how they move through water.

  | Characteristic | Ordinary Wind Waves | Tsunamis |
  |---|---|---|
  | Primary Cause | Wind | Sudden water displacement |
  | Typical Wave Period | Seconds | Minutes to hours |
  | Wavelength | Relatively short | Extremely long |
  | Water Movement | Concentrated near surface | Extends through much of water depth |
  | Deep-Ocean Speed | Generally much slower | Can exceed 500 mph |

  Ordinary waves are primarily
  generated by wind transferring
  energy to the water's surface.

  Tsunamis involve long-period
  movements of a much larger
  portion of the water column.

  This allows tsunami energy
  to travel across entire
  ocean basins with relatively
  little loss of energy.

  Tsunamis are sometimes called
  **tidal waves**, but this term
  is scientifically inaccurate.

  Tsunamis are not caused
  by astronomical tides.

  #### Understanding Tsunami Measurements

  Scientists use several measurements
  to describe tsunami behavior
  and its effects on shorelines.

  - **Wave Height:** The vertical
    distance between a wave crest
    and its preceding trough.

  - **Wave Period:** The time between
    successive wave crests
    passing a fixed location.

  - **Run-Up:** The maximum vertical
    elevation that tsunami water
    reaches above a reference
    sea level on land.

  - **Inundation Distance:** The
    horizontal distance that
    tsunami water travels inland
    from the shoreline.

  - **Flow Depth:** The depth of
    tsunami water above the
    local ground surface.

  These measurements describe
  different characteristics
  of the same event.

  A tsunami with a relatively
  modest wave height offshore
  can still produce dangerous
  inundation when coastal
  geography amplifies the wave.

  The first wave in a tsunami
  series is not necessarily
  the largest.

  Subsequent waves can arrive
  minutes or hours later and
  may produce stronger currents
  or greater flooding.

  #### Tsunamis and Seiches in Lakes

  Large inland bodies of water can
  experience sudden water movements
  caused by earthquakes, landslides,
  strong winds, or atmospheric
  pressure disturbances.

  Two important phenomena include:

  - **Lake Tsunamis:** Traveling waves
    generated by sudden displacement
    of lake water, such as from
    an underwater landslide
    or abrupt ground movement.

  - **Seiches:** Standing waves that
    cause water to oscillate
    back and forth within an
    enclosed or partially
    enclosed body of water.

  A seiche is often compared
  to water sloshing back
  and forth in a bathtub.

  Seiches can develop when strong
  winds push water toward one
  end of a lake and the
  water subsequently rebounds.

  Earthquakes and rapid changes
  in atmospheric pressure can
  also produce lake oscillations.

  Seiches and tsunamis are
  different wave phenomena,
  although both can affect
  water levels along shorelines.

  #### Could a Tsunami Occur in Utah Lake?

  Utah Lake is a large, relatively
  shallow freshwater lake located
  immediately west of Provo.

  Although the lake cannot be
  affected by an ocean tsunami,
  sudden displacement of lake
  water could theoretically
  generate localized waves.

  Possible causes include:

  - Significant ground displacement
    beneath the lake.

  - A large landslide entering
    the water.

  - Strong winds or atmospheric
    disturbances producing
    lake-level oscillations.

  Such events would depend on
  the characteristics of the
  disturbance and the lake's
  depth and geometry.

  **Importantly, the 2022
  Pre-Disaster Mitigation Plan
  does not identify tsunami
  as a significant Provo hazard.**

  The possibility of lake
  oscillations should not
  be interpreted as evidence
  that Utah Lake faces a
  substantial tsunami risk.

  **Learn More:** [NOAA — The Science Behind Tsunamis](https://www.noaa.gov/explainers/science-behind-tsunamis)

  **Additional Resource:** [NOAA — What Is a Seiche?](https://oceanservice.noaa.gov/facts/seiche.html)

  **Utah Resource:** [Utah Geological Survey — What About Great Salt Lake?](https://geology.utah.gov/map-pub/survey-notes/what-about-great-salt-lake/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="space-weather"
  title="Space Weather"
  image="/img/space-weather.png"
  impacts={['communications', 'utilities', 'transportation', 'services']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="May 2024 — Extreme Geomagnetic Storm"
  exampleText="On May 10, 2024, Earth experienced a G5 (Extreme) geomagnetic storm, the highest classification on NOAA's scale. The storm produced unusually widespread auroras visible across Utah and much of the United States. The event demonstrated how solar activity can affect the Earth's magnetic environment and threaten technologies used for communications, navigation, and electrical power."
>
  <p>
    Space weather refers to changing conditions in the space environment
    caused primarily by activity on the Sun. Solar flares, coronal mass
    ejections, and streams of charged particles can interact with
    Earth's magnetic field and upper atmosphere. These interactions
    can produce geomagnetic storms, disrupt radio propagation,
    and interfere with satellite-based technologies.
  </p>

  <p>
    Although Provo is protected from most harmful solar radiation
    by Earth's atmosphere and magnetic field, the city depends
    on technologies that can be affected by space weather.
    Amateur radio networks, GPS navigation, satellite services,
    and electrical infrastructure are all potentially vulnerable.
    Particularly strong geomagnetic storms can affect systems
    across large geographic areas, including Utah.
  </p>

  <p>
    Severe space weather can disrupt long-distance radio
    communications, reduce GPS accuracy, interfere with
    satellites, and place additional stress on electrical
    transmission systems. These effects can complicate
    emergency communications, transportation, navigation,
    and other technology-dependent services. The severity
    of disruptions depends on the type and intensity
    of solar activity.
  </p>
</DisasterCard>

<AboutHazardModal id="space-weather" title="Space Weather">
  <div>

  #### How Space Weather Develops

  Space weather originates primarily from changes in
  the Sun's magnetic field and the movement of
  charged particles through space.

  The Sun continuously releases a stream of charged
  particles known as the **solar wind**.

  Under normal conditions, Earth's magnetic field
  deflects much of this material around the planet.

  However, solar activity can produce sudden
  increases in radiation, energetic particles,
  and disturbances in the solar wind.

  Several processes contribute to space weather:

  - **Solar Magnetic Activity:** The Sun's magnetic
    field continuously changes, sometimes
    storing large amounts of energy.

  - **Magnetic Reconnection:** Magnetic field
    structures can rapidly reorganize,
    releasing stored magnetic energy.

  - **Solar Wind:** A continuous flow of
    charged particles travels outward
    from the Sun through the solar system.

  - **Solar Eruptions:** Sudden releases
    of energy and material can produce
    intense space weather disturbances.

  - **Interaction With Earth:** Solar
    radiation and charged particles
    can disturb Earth's magnetic
    field and upper atmosphere.

  The strength and consequences of
  space weather depend on the type
  of solar event and how it
  interacts with Earth.

  #### Types of Space Weather

  Several different solar phenomena
  can produce space weather effects.

  - **Solar Flares:** Sudden bursts of
    electromagnetic radiation released
    from active regions of the Sun.
    Strong solar flares can alter
    Earth's ionosphere and produce
    radio blackouts on the sunlit
    side of the planet.

  - **Coronal Mass Ejections (CMEs):**
    Large eruptions of magnetized
    plasma expelled from the Sun's
    outer atmosphere. Earth-directed
    CMEs can produce geomagnetic
    storms when they interact
    with Earth's magnetic field.

  - **Solar Radiation Storms:** Events
    involving large increases in
    high-energy charged particles,
    primarily protons. These particles
    can affect satellites and
    polar radio communications.

  - **Geomagnetic Storms:** Disturbances
    in Earth's magnetic field caused
    by enhanced energy transfer from
    the solar wind into the
    magnetosphere.
  - **High-Speed Solar Wind Streams:**
    Fast-moving streams of charged
    particles originating from
    coronal holes on the Sun.
    Their interaction with slower
    solar wind can contribute
    to geomagnetic activity.

  Solar flares and CMEs frequently
  occur together, but they are
  distinct phenomena.

  A solar flare releases
  electromagnetic radiation,
  while a CME ejects substantial
  amounts of plasma and
  magnetic field into space.

  #### Earth's Magnetosphere and Ionosphere

  Two regions surrounding Earth
  play important roles in
  space weather.

  **The Magnetosphere**

  Earth's magnetic field creates
  a region of space known
  as the magnetosphere.

  The magnetosphere interacts
  with the solar wind,
  deflecting much of the
  incoming charged particles.

  During a geomagnetic storm,
  increased energy transfer
  from the solar wind can
  disturb the magnetosphere.

  These disturbances can
  produce electrical currents
  and changes in Earth's
  magnetic field.

  **The Ionosphere**

  The ionosphere is a region
  of Earth's upper atmosphere
  containing electrically
  charged particles created
  by solar radiation.

  It plays a particularly
  important role in radio
  communication because
  it can refract HF radio
  waves back toward Earth.

  Changes in the ionosphere's
  electron density can alter
  radio propagation and
  introduce errors into
  satellite navigation signals.

  Space weather can therefore
  affect communications even
  when no physical damage
  occurs to radio equipment.

  #### Understanding Space Weather Scales

  NOAA uses three separate
  scales to communicate the
  severity of space weather.

  | Scale | Phenomenon | Primary Concerns |
  |---|---|---|
  | G1–G5 | Geomagnetic Storms | Power grids, GPS, satellites, HF radio |
  | S1–S5 | Solar Radiation Storms | Satellites, polar communications, radiation exposure |
  | R1–R5 | Radio Blackouts | HF communication and navigation signals |

  Each scale uses five severity levels:

  | Level | Classification |
  |---|---|
  | 1 | Minor |
  | 2 | Moderate |
  | 3 | Strong |
  | 4 | Severe |
  | 5 | Extreme |

  **Geomagnetic Storms (G Scale)**

  The G scale measures the
  severity of disturbances
  in Earth's magnetic field.

  Strong geomagnetic storms
  can interfere with satellite
  navigation, HF radio
  propagation, and portions
  of the electrical grid.

  **Solar Radiation Storms (S Scale)**

  The S scale measures elevated
  levels of energetic solar
  particles near Earth.

  These storms can affect
  spacecraft electronics,
  polar radio communications,
  and radiation exposure
  at high altitudes.

  **Radio Blackouts (R Scale)**

  The R scale describes
  ionospheric disturbances
  associated with solar
  X-ray emissions.

  Strong radio blackouts
  can significantly degrade
  or temporarily prevent
  HF radio communications
  across the sunlit
  portion of Earth.

  The three scales measure
  different phenomena.
  A G5 geomagnetic storm
  does not necessarily
  coincide with an R5
  radio blackout.

  #### How Space Weather Affects Radio Communications

  Space weather can affect
  radio frequencies differently
  depending on their propagation
  characteristics.

  **HF Radio Communications**

  High-frequency radio
  (3–30 MHz) often relies
  on the ionosphere to
  support communication
  over long distances.

  During normal conditions,
  radio waves can be refracted
  through ionized regions
  of the upper atmosphere,
  allowing signals to reach
  locations beyond the horizon.

  Solar activity can change
  this propagation environment.

  - **Solar Flares:** Increased
    X-ray radiation can enhance
    ionization in the lower
    ionosphere, causing greater
    absorption of HF signals
    on Earth's sunlit side.

  - **Geomagnetic Storms:**
    Disturbances in the
    ionosphere can alter
    usable frequencies
    and make long-distance
    propagation unreliable.

  - **Solar Radiation Storms:**
    High-energy particles
    can increase absorption
    in polar regions,
    disrupting HF paths
    crossing high latitudes.

  These changes can cause
  fading, unexpected propagation,
  reduced signal strength,
  or complete loss of
  particular HF paths.

  **VHF and UHF Radio Communications**

  VHF and UHF systems,
  including most local
  amateur radio repeaters,
  primarily use direct
  or near-line-of-sight
  propagation.

  Consequently, these systems
  are generally less dependent
  on the ionosphere than
  long-distance HF communications.

  However, intense solar
  radio emissions and unusual
  ionospheric conditions
  can sometimes affect
  VHF and UHF reception
  or propagation.

  **Satellite Communications**

  Satellite radio systems
  can experience interference
  or signal degradation
  caused by ionospheric
  disturbances and
  solar radio emissions.

  Space weather can also
  affect the satellites
  themselves, potentially
  disrupting communications
  services that depend
  on them.

  For emergency communications
  organizations such as PACT,
  understanding these differences
  is important because a space
  weather event may affect
  HF, satellite, and local
  VHF/UHF systems differently.

  #### How Space Weather Affects Technology

  Modern infrastructure depends
  on several systems that
  can be affected by
  space weather.

  **GPS and Satellite Navigation**

  GPS signals travel from
  satellites through Earth's
  ionosphere before reaching
  receivers on the ground.

  Geomagnetic disturbances
  can change the ionosphere's
  electron density,
  introducing errors
  or interruptions in
  satellite navigation.

  These effects are especially
  important for precision
  navigation, surveying,
  agriculture, and other
  applications requiring
  highly accurate positioning.

  **Satellites**

  Energetic solar particles
  can interfere with
  spacecraft electronics
  and contribute to
  electrical charging.

  Geomagnetic storms can
  also heat and expand
  Earth's upper atmosphere,
  increasing atmospheric
  drag on satellites
  in low Earth orbit.

  **Electrical Power Grids**

  Rapid changes in Earth's
  magnetic field can
  induce electrical currents
  in long conductors.

  These are called
  **geomagnetically induced
  currents (GICs)**.

  High-voltage transmission
  networks can be affected
  by these currents,
  potentially causing
  voltage regulation problems,
  transformer heating,
  or equipment malfunctions.

  The most extreme geomagnetic
  storms can contribute to
  widespread power disruptions
  under vulnerable conditions.

  **Auroras**

  One of the most visible
  effects of geomagnetic
  activity is the aurora.

  Auroras form when energetic
  charged particles interact
  with gases in Earth's
  upper atmosphere,
  producing visible light.

  During particularly strong
  geomagnetic storms,
  auroras may be visible
  much farther from
  the polar regions
  than usual.

  The May 2024 geomagnetic
  storm produced unusually
  widespread auroral displays,
  including visibility
  across Utah.

  #### Understanding the Solar Cycle

  Solar activity follows an
  approximately **11-year cycle**,
  during which the number
  of sunspots and the
  frequency of solar
  eruptions change.

  The cycle includes
  two broad phases:

  - **Solar Minimum:** A period
    of relatively low sunspot
    activity and fewer
    major solar eruptions.

  - **Solar Maximum:** A period
    of increased sunspot
    activity and generally
    more frequent solar
    flares and CMEs.

  Severe space weather
  is more likely during
  periods of elevated
  solar activity, although
  major events can occur
  at other times
  during the cycle.

  The solar cycle does
  not allow scientists
  to predict the exact
  timing of individual
  solar eruptions.

  **Learn More:** [NOAA — Space Weather Impacts](https://www.spaceweather.gov/impacts)

  **Space Weather Scales:** [NOAA — Space Weather Scales](https://www.spaceweather.gov/noaa-scales-explanation)

  **Radio Communications:** [NOAA — HF Radio Communications](https://www.spaceweather.gov/impacts/hf-radio-communications)

  **Local Example:** [NOAA — G5 Conditions Observed, May 2024](https://www.spaceweather.gov/news/g5-conditions-observed)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="dam-failure"
  title="Dam Failure"
  image="/img/dam-failure.png"
  likelihood="Unlikely"
  likelihoodLevel={1}
  magnitude="Catastrophic"
  magnitudeLevel={4}
  impacts={['safety', 'housing', 'infrastructure', 'transportation', 'communications']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Deer Creek & Jordanelle Dams"
  exampleText="Deer Creek and Jordanelle dams are located upstream of Provo along the Provo River. The 2022 Pre-Disaster Mitigation Plan identifies both dams as significant regional hazards because a major failure could send floodwaters through Provo Canyon and into developed portions of Utah Valley. Inundation studies indicate that portions of Provo, Orem, and surrounding communities could be affected. These are modeled failure scenarios, not historical dam failures."
>
  <p>
    Dam failure occurs when a dam loses its ability to safely retain
    or control the water stored behind it. Failures can result from
    overtopping, internal erosion, structural damage, foundation
    instability, or other conditions that compromise the dam's
    integrity. Depending on the type of failure, water may be
    released gradually or suddenly in large quantities.
  </p>

  <p>
    Provo is located downstream of Deer Creek and Jordanelle
    reservoirs, both situated along the Provo River. These
    reservoirs store substantial quantities of water, and
    a major failure could produce severe downstream flooding.
    Provo Canyon and low-lying areas along the Provo River
    are particularly relevant to the region's dam-failure
    inundation studies.
  </p>

  <p>
    A catastrophic dam failure could release a powerful flood
    wave capable of damaging buildings, bridges, roads, and
    critical infrastructure. Rapidly rising water could
    threaten lives, isolate neighborhoods, and disrupt
    transportation, utilities, and emergency communications.
    Although major dam failures are uncommon, their
    consequences can extend far downstream from the
    original structure.
  </p>
</DisasterCard>

<AboutHazardModal id="dam-failure" title="Dam Failure">
  <div>

  #### How Dams Work

  Dams are engineered structures constructed across
  rivers, valleys, or other waterways to store,
  regulate, or redirect water.

  They serve several important purposes,
  including municipal water supply, irrigation,
  hydroelectric power generation, flood control,
  and recreation.

  Several components are commonly found
  in large dams:

  - **Dam Structure:** The primary barrier
    retaining water within the reservoir.

  - **Reservoir:** The body of water stored
    behind the dam.

  - **Spillway:** A structure designed to
    safely release excess water and prevent
    reservoir levels from rising too high.

  - **Outlet Works:** Pipes, tunnels, gates,
    or valves that allow operators to
    regulate water releases.

  - **Foundation:** The underlying soil
    or rock supporting the dam.

  - **Abutments:** The natural terrain
    or rock formations against which
    the ends of the dam are supported.

  Water stored behind a dam creates
  pressure against the structure.

  This pressure increases with water
  depth, meaning the lower portions
  of a dam experience greater water
  pressure than the upper portions.

  Dams are designed to resist these
  forces while controlling water
  releases through engineered systems.

  #### Types of Dams

  Dams can be constructed using
  different materials and structural
  designs.

  Three common types include:

  - **Embankment Dams:** Constructed
    primarily from compacted earth,
    rock, or a combination of both.
    Their stability comes largely
    from the weight and arrangement
    of the materials used.

  - **Concrete Gravity Dams:** Large
    concrete structures that rely
    primarily on their own weight
    to resist the pressure of
    retained water.

  - **Arch Dams:** Curved concrete
    structures that transfer much
    of the water pressure into
    the surrounding canyon walls.

  Some dams combine characteristics
  of multiple structural designs.

  **Deer Creek Dam and Jordanelle Dam
  are both embankment dams**, making
  the behavior of compacted earth
  and rock materials particularly
  relevant to understanding their
  construction.

  #### How Dams Fail

  Dam failures can occur through
  several different mechanisms.

  **Overtopping**

  Overtopping occurs when water
  rises above the dam's crest
  and flows over portions not
  designed to carry that flow.

  This may result from extreme
  inflows, inadequate spillway
  capacity, or malfunctioning
  discharge structures.

  Overtopping is particularly
  dangerous for embankment dams
  because flowing water can erode
  the earth or rock materials.

  Continued erosion can create
  an opening that grows rapidly,
  potentially resulting in
  a complete breach.

  **Internal Erosion (Piping)**

  Water can seep through a dam,
  its foundation, or the
  surrounding ground.

  Properly designed dams include
  measures to control seepage
  and prevent the movement
  of soil particles.

  Internal erosion occurs when
  flowing water gradually
  removes material from
  within the structure
  or its foundation.

  If erosion progresses,
  it may create larger
  internal openings and
  weaken the dam.

  Advanced internal erosion
  can develop into a failure
  mechanism commonly called
  **piping**.

  **Structural Failure**

  Structural failure occurs when
  parts of a dam can no longer
  withstand the forces
  acting upon them.

  Contributing factors may include:

  - Excessive loading.
  - Cracking or deformation.
  - Deterioration of structural materials.
  - Damage to critical components.
  - Inadequate structural resistance.

  Structural failures can
  occur suddenly or develop
  progressively as conditions
  worsen.

  **Foundation Instability**

  A dam depends on stable
  underlying soil and rock
  for support.

  Foundation problems can
  occur when supporting
  materials weaken, erode,
  settle, or move.

  Differential settlement,
  slope instability, and
  excessive seepage pressure
  can threaten the integrity
  of the structure.
  **Earthquake Damage**

  Strong earthquake shaking
  can place additional forces
  on dams and their foundations.

  Depending on the design
  and local conditions,
  shaking may contribute
  to cracking, deformation,
  or instability.

  Modern dam engineering
  evaluates seismic hazards
  as part of dam safety
  and structural design.

  #### Understanding Dam Hazard Classifications

  Dam hazard classifications describe
  the potential consequences of
  a dam failure.

  They do not directly describe
  the probability that a dam
  will fail.

  In the United States,
  dams are generally grouped
  into three hazard categories:

  | Classification | Potential Consequences of Failure |
  |---|---|
  | Low Hazard | No probable loss of human life; generally limited property and environmental losses |
  | Significant Hazard | No probable loss of human life, but potential economic losses, environmental damage, or disruption of important facilities |
  | High Hazard | Failure would probably cause loss of human life |

  A **High Hazard** classification
  does not necessarily mean that
  a dam is structurally unsafe
  or likely to fail.

  It means the consequences
  of a failure could be severe
  because of the people or
  infrastructure located downstream.

  This distinction is important
  when interpreting dam safety
  information and regional
  hazard assessments.

  #### Understanding Dam Breaches

  A dam breach occurs when
  an opening develops in
  the structure, allowing
  water to escape in an
  uncontrolled manner.

  The characteristics of
  the resulting flood depend
  on several factors:

  - **Reservoir Volume:** The amount
    of water available to be released.

  - **Water Depth:** Greater water
    depth creates higher pressure
    and can influence flow
    through the breach.

  - **Breach Size:** A larger
    opening can allow water
    to escape more rapidly.

  - **Breach Development Time:**
    A breach forming quickly
    can produce a more sudden
    release than one developing
    over an extended period.

  - **Downstream Terrain:**
    Valleys, river channels,
    floodplains, and developed
    areas influence how water
    spreads and travels.

  Engineers use mathematical
  models to estimate the
  movement of floodwaters
  following potential
  dam failures.

  These models can identify
  areas that may be inundated,
  estimated water depths,
  and flood arrival times
  under specific assumptions.
  #### Dam Failures and Provo

  Two major reservoirs along
  the Provo River are particularly
  relevant to Provo's regional
  dam-failure hazard assessment.

  **Deer Creek Dam**

  Deer Creek Dam is located
  approximately 16 miles
  northeast of Provo.

  It is an earthfill dam
  constructed to store and
  regulate water for municipal,
  agricultural, and other uses.

  The reservoir lies upstream
  of Provo Canyon, where
  the Provo River continues
  toward Utah Valley.

  **Jordanelle Dam**

  Jordanelle Dam is located
  farther upstream along
  the Provo River in
  Wasatch County.

  It stores water for
  municipal and industrial
  uses and contributes
  to regional water management.

  Because Jordanelle is
  upstream of Deer Creek,
  the two dams are part
  of a connected river system.

  **Cascading Dam Failures**

  Under an extreme hypothetical
  scenario, a failure of an
  upstream dam can create
  conditions that threaten
  another dam downstream.

  For example, a sudden
  release from Jordanelle
  Reservoir could greatly
  increase inflow into
  Deer Creek Reservoir.

  If the resulting conditions
  exceeded the downstream
  dam's ability to safely
  retain or release water,
  additional failure
  could potentially occur.

  The 2022 Pre-Disaster
  Mitigation Plan includes
  modeling of a hypothetical
  Jordanelle Dam failure
  leading to overtopping
  and failure of Deer Creek Dam.

  These scenarios help
  emergency planners assess
  potential consequences.

  **They do not indicate that
  either dam is expected
  to fail.**

  #### Understanding Inundation Maps

  A **dam-failure inundation map**
  shows areas that may be
  flooded under a particular
  modeled failure scenario.

  Engineers use information
  about reservoir storage,
  dam characteristics,
  downstream topography,
  and hydraulic conditions
  to simulate flood movement.

  Inundation studies may
  estimate:

  - Areas potentially covered by water.
  - Maximum floodwater depths.
  - Estimated flood arrival times.
  - Potential impacts to roads and bridges.
  - Locations of affected infrastructure.

  Different failure assumptions
  can produce different
  inundation boundaries.

  As a result, inundation
  maps represent modeled
  scenarios rather than
  predictions of a future event.

  The 2022 regional mitigation
  plan identifies potential
  flooding along Provo Canyon
  and into portions of
  Provo and Orem from
  hypothetical failures
  of Deer Creek or Jordanelle.

  **Learn More:** [FEMA — National Dam Safety Program](https://www.fema.gov/emergency-managers/risk-management/dam-safety)

  **Utah Resource:** [Utah State Hazard Mitigation — Dam Failure](https://hazards.utah.gov/dam-failure/)

  **Local Assessment:** [2022 Pre-Disaster Mitigation Plan](https://hazards.utah.gov/wp-content/uploads/2022-Pre-Disaster-Mitigation-Plan-for-Summit-Utah-and-Wasatch-Counties.pdf)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="hazardous-materials"
  title="Hazardous Materials"
  image="/img/hazmat.png"
  impacts={['safety', 'environment', 'transportation', 'communications', 'services']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Transportation & Industrial Corridors in Provo"
  exampleText="Provo contains major transportation corridors, including Interstate 15, U.S. Route 89, and the Union Pacific railroad, where hazardous materials may be transported. Industrial facilities, commercial operations, and utility infrastructure may also store or use hazardous substances. Accidental releases along these corridors or at fixed facilities could affect nearby neighborhoods, businesses, and transportation routes."
>
  <p>
    Hazardous materials are substances that can threaten human health,
    property, or the environment because of their chemical,
    physical, or biological properties. These materials may be
    toxic, flammable, corrosive, reactive, radioactive, or
    otherwise dangerous. Emergencies occur when hazardous
    substances are accidentally released, spilled, or exposed
    to conditions that create an immediate danger.
  </p>

  <p>
    Provo's transportation corridors, industrial areas, and
    commercial facilities create opportunities for hazardous
    material incidents. Chemicals, fuels, compressed gases,
    and other regulated substances may be transported through
    the city or stored and used at local facilities. The
    consequences of a release depend on the material involved,
    the quantity released, and surrounding environmental
    conditions.
  </p>

  <p>
    Hazardous material incidents can expose people to dangerous
    vapors, gases, liquids, or contaminated surfaces. Depending
    on the substance, a release may cause poisoning, chemical
    burns, fires, explosions, or environmental contamination.
    Significant incidents can require evacuations, restrict
    transportation, disrupt businesses, and complicate
    emergency response operations.
  </p>
</DisasterCard>

<AboutHazardModal id="hazardous-materials" title="Hazardous Materials">
  <div>

  #### What Makes a Material Hazardous?

  A material is considered hazardous when its properties
  create a potential danger to people, property,
  or the environment.

  Hazardous materials are not limited to unusual
  industrial chemicals. Many substances commonly
  used in transportation, manufacturing, agriculture,
  and commercial operations can present hazards
  under certain conditions.

  Several characteristics determine the dangers
  associated with a material:

  - **Toxicity:** The ability of a substance to
    cause harmful biological effects when
    inhaled, swallowed, or absorbed.

  - **Flammability:** The ability of a substance
    to ignite and burn under certain conditions.

  - **Corrosivity:** The ability to chemically
    damage or destroy materials or living tissue.

  - **Reactivity:** The tendency to undergo
    potentially dangerous chemical reactions,
    sometimes releasing heat, gas, or pressure.

  - **Radioactivity:** The emission of ionizing
    radiation from unstable atomic nuclei.

  - **Biological Hazard:** The potential for
    infectious organisms or biological
    materials to cause disease.

  A material can possess multiple hazardous
  properties simultaneously.

  For example, a chemical may be both
  flammable and toxic, creating different
  risks depending on how it is released.

  #### Understanding Hazardous Materials Classes

  The U.S. Department of Transportation
  organizes hazardous materials into
  **nine primary hazard classes**.

  These classifications help identify
  the primary hazards associated with
  substances transported in commerce.

  | Class | Hazard Type | Examples |
  |---|---|---|
  | 1 | Explosives | Fireworks, blasting explosives |
  | 2 | Gases | Propane, compressed oxygen, chlorine |
  | 3 | Flammable Liquids | Gasoline, ethanol |
  | 4 | Flammable Solids | Certain reactive metals, matches |
  | 5 | Oxidizers & Organic Peroxides | Ammonium nitrate, certain peroxide formulations |
  | 6 | Toxic & Infectious Substances | Certain pesticides, infectious samples |
  | 7 | Radioactive Materials | Radioactive isotopes used in medicine or industry |
  | 8 | Corrosive Materials | Sulfuric acid, sodium hydroxide |
  | 9 | Miscellaneous Hazardous Materials | Lithium-ion batteries, dry ice |

  Some hazard classes contain additional
  divisions that identify more specific
  properties.

  For example, Class 2 includes
  flammable gases, nonflammable
  nontoxic gases, and toxic gases.

  These classifications are important
  because different materials can
  behave very differently during
  an accident or release.

  #### How Hazardous Material Releases Occur

  Hazardous material incidents can
  occur at fixed facilities or
  during transportation.

  Several circumstances can
  result in an accidental release:

  - **Transportation Accidents:** Collisions,
    rollovers, or derailments involving
    vehicles transporting hazardous
    substances can damage containment
    systems and release their contents.

  - **Storage Tank Failures:** Corrosion,
    structural damage, excessive pressure,
    or other failures can allow materials
    to escape from storage containers.

  - **Industrial Equipment Failures:**
    Damaged valves, pumps, pipelines,
    or processing equipment can
    release hazardous substances.

  - **Improper Chemical Mixing:** Some
    chemicals react dangerously when
    combined, potentially releasing
    heat, pressure, or toxic gases.

  - **Fires and Explosions:** High
    temperatures or physical damage
    can compromise containers
    holding hazardous materials.

  - **Human Error:** Incorrect handling,
    equipment operation, or storage
    practices can contribute to
    accidental releases.

  The severity of an incident depends
  on the material's properties,
  the quantity involved, and
  the circumstances of the release.

  #### How Hazardous Materials Spread

  The movement of a released substance
  depends on its physical state,
  chemical properties, and
  environmental conditions.

  **Airborne Releases**

  Gases, vapors, and airborne
  particles can spread through
  the atmosphere.

  Their movement is influenced by:

  - Wind speed and direction.
  - Atmospheric stability.
  - Temperature and humidity.
  - Terrain and nearby buildings.
  - The substance's physical properties.

  Some dense gases or cold vapor
  clouds can initially accumulate
  near the ground and move
  through low-lying areas.

  However, gas behavior varies
  significantly by substance
  and release conditions.

  **Liquid Spills**

  Liquid hazardous materials may
  spread across surfaces, collect
  in depressions, or enter
  drainage systems.

  Depending on their properties,
  they may evaporate, infiltrate
  soil, or enter nearby waterways.

  **Soil and Water Contamination**

  Released chemicals can sometimes
  move through soil or become
  transported by surface water.

  Some substances may eventually
  reach groundwater or remain
  within contaminated sediments.

  The extent of contamination
  depends on factors such as
  soil permeability, chemical
  solubility, and groundwater
  movement.

  #### How Hazardous Materials Affect People

  Hazardous substances can enter
  or affect the human body
  through several exposure routes.

  Three principal exposure
  pathways include:

  - **Inhalation:** Breathing gases,
    vapors, fumes, or airborne
    particles into the respiratory
    system.

  - **Ingestion:** Swallowing a
    hazardous substance directly
    or consuming contaminated
    food or water.

  - **Direct Contact:** Exposure
    through contact with the skin,
    eyes, or other tissues.
    Certain substances can also
    be absorbed through the skin.

  The effects of exposure
  depend on several factors:

  - The type of substance.
  - Its concentration.
  - The duration of exposure.
  - The route of exposure.
  - Individual susceptibility.

  **Acute exposure** refers to
  exposure occurring over a
  relatively short period.

  **Chronic exposure** generally
  involves repeated or continuous
  exposure over an extended period.

  Some hazardous substances
  cause immediate symptoms,
  while others may produce
  delayed or long-term effects.

  #### Understanding Hazmat Placards

  Vehicles transporting certain
  quantities or types of hazardous
  materials are required to display
  standardized warning placards.

  These placards help identify
  the primary dangers associated
  with the transported material.

  Common placard features include:

  - **Color:** Helps communicate
    the type of hazard.

  - **Symbol:** Represents a
    hazard such as fire,
    toxicity, or corrosivity.

  - **Hazard Class Number:**
    Identifies the DOT hazard
    class or division.

  - **UN Identification Number:**
    A four-digit number that
    identifies a particular
    substance or group of
    hazardous materials.

  For example:

  | UN Number | Material |
  |---|---|
  | UN 1203 | Gasoline |
  | UN 1075 | Liquefied petroleum gas |
  | UN 1017 | Chlorine |
  | UN 1202 | Diesel fuel or gas oil |
  | UN 1005 | Anhydrous ammonia |

  These identification numbers
  help emergency responders
  determine which materials
  may be involved in an incident.

  Not every hazardous material
  shipment displays a four-digit
  identification number on
  an exterior placard.

  #### Understanding the Emergency Response Guidebook

  The U.S. Department of Transportation
  publishes the **Emergency Response
  Guidebook (ERG)** to assist first
  responders during the initial
  stages of hazardous materials
  transportation incidents.

  The guidebook provides information
  about hazardous substances and
  their potential dangers.

  It includes:

  - Material identification information.
  - General hazards associated with substances.
  - Initial isolation and protective action guidance.
  - Fire and spill considerations.
  - Guidance for protecting responders and the public.

  The guidebook organizes information
  using several color-coded sections.

  | Section | Purpose |
  |---|---|
  | Yellow | Materials listed by UN identification number |
  | Blue | Materials listed alphabetically by name |
  | Orange | Emergency response guidance for groups of materials |
  | Green | Initial isolation and protective action distances for certain substances |

  The ERG is intended primarily
  for trained emergency responders
  and is not a substitute for
  incident-specific assessment
  or specialized hazardous
  materials expertise.

  The current 2024 edition is
  available online through PHMSA.

  **Learn More:** [EPA — Possible Exposure Pathways During Emergencies](https://www.epa.gov/emergency-response/possible-exposure-pathways-during-emergencies)

  **Hazard Classifications:** [PHMSA — Emergency Response Guidebook](https://www.phmsa.dot.gov/training/hazmat/erg/emergency-response-guidebook-erg)

  **Emergency Response Guidebook:** [Download the 2024 ERG (PDF)](https://www.phmsa.dot.gov/sites/phmsa.dot.gov/files/2024-04/ERG2024-Eng-Web-a.pdf)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="aviation-accident"
  title="Aviation Accident"
  image="/img/aviation-accident.png"
  impacts={['safety', 'transportation', 'infrastructure', 'services', 'communications']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="1995 — Aircraft Crash East of Provo"
  exampleText="On November 21, 1995, a Cessna 152 departed Provo Municipal Airport and collided with mountainous terrain several miles east of the city. The pilot was fatally injured, and the aircraft was destroyed. The accident, documented by the National Transportation Safety Board, illustrates how surrounding terrain can contribute to aviation hazards in Utah Valley."
>
  <p>
    Aviation accidents occur when aircraft operations result in
    serious injuries, fatalities, or substantial aircraft damage.
    Accidents can happen during takeoff, flight, approach, landing,
    or ground operations. They may involve commercial airliners,
    private aircraft, helicopters, or other types of aircraft,
    with consequences ranging from localized damage to
    large-scale emergencies.
  </p>

  <p>
    Provo is home to Provo Airport, which supports commercial
    passenger service, general aviation, and other flight
    operations. The airport's continued development has
    increased the importance of aviation-related emergency
    planning. Utah Valley's surrounding mountains, variable
    weather conditions, and growing aviation activity
    create considerations for aircraft operating
    in and around the region.
  </p>

  <p>
    Aviation accidents can cause fatalities, serious injuries,
    fires, fuel spills, and damage to nearby property or
    infrastructure. Incidents occurring at airports may
    disrupt flight operations and require specialized
    emergency response resources. Accidents involving
    larger aircraft or populated areas can create
    complex rescue, medical, and public-safety
    challenges.
  </p>
</DisasterCard>

<AboutHazardModal id="aviation-accident" title="Aviation Accident">
  <div>

  #### Types of Aviation Accidents

  Aviation accidents can occur in several different
  ways depending on the aircraft, operating
  environment, and circumstances.

  Common categories include:

  - **Controlled Flight Into Terrain (CFIT):**
    Occurs when an airworthy aircraft under
    the control of its pilot unintentionally
    collides with terrain, water, or an
    obstacle without the crew recognizing
    the danger in sufficient time.

  - **Loss of Control:** Occurs when a pilot
    becomes unable to maintain the aircraft's
    intended flight path or attitude.
    This may involve stalls, spins,
    or other uncontrolled movements.

  - **Runway Accidents:** Include runway
    overruns, excursions, and collisions
    involving aircraft operating
    on or near runways.

  - **Midair Collisions:** Occur when two
    or more aircraft collide while
    airborne.

  - **Mechanical or System Failures:**
    Malfunctions involving engines,
    flight controls, or other critical
    systems can contribute to accidents.

  - **Ground Accidents:** May involve
    aircraft, airport vehicles,
    personnel, or equipment during
    taxiing, servicing, or other
    ground operations.

  Different types of accidents may
  involve overlapping contributing factors.

  #### Understanding the Phases of Flight

  Aircraft operations are commonly
  divided into several phases,
  each with different operational
  demands and potential hazards.

  | Phase | Description |
  |---|---|
  | Taxi | Aircraft movement on the ground before takeoff or after landing |
  | Takeoff | Acceleration and transition from ground movement to flight |
  | Initial Climb | Aircraft gains altitude after departure |
  | Cruise | Flight along the planned route at an established altitude |
  | Descent | Aircraft begins reducing altitude toward its destination |
  | Approach | Aircraft maneuvers and aligns for landing |
  | Landing | Aircraft descends onto the runway and decelerates |

  Takeoff, approach, and landing require
  particular attention because aircraft
  operate at relatively low altitudes
  and have less time or space
  to recover from certain problems.

  However, serious accidents can occur
  during any phase of flight.

  #### What Causes Aviation Accidents?

  Aviation accidents rarely result
  from a single factor.

  Investigators frequently examine
  combinations of human, mechanical,
  environmental, and organizational
  circumstances.

  Important contributing factors include:

  - **Human Factors:** Pilot decision-making,
    situational awareness, fatigue,
    communication, training, and
    other human-performance issues.

  - **Weather Conditions:** Reduced visibility,
    thunderstorms, turbulence, icing,
    wind shear, and strong crosswinds
    can complicate flight operations.

  - **Mechanical Failures:** Problems involving
    aircraft engines, flight controls,
    instruments, or other systems.

  - **Terrain and Obstacles:** Mountains,
    towers, power lines, and other
    obstacles can create hazards,
    particularly during low-altitude flight.

  - **Maintenance Issues:** Improper maintenance,
    undetected defects, or equipment
    deterioration can contribute
    to aircraft failures.

  - **Operational Factors:** Flight planning,
    aircraft loading, fuel management,
    and organizational procedures
    can influence flight safety.

  Aircraft accidents often result
  from multiple circumstances
  interacting in ways that
  overcome existing safety measures.

  #### Commercial vs. General Aviation

  Aviation includes several categories
  of aircraft operations.

  **Commercial Aviation**

  Commercial aviation includes airline
  operations carrying passengers or
  cargo under applicable federal
  aviation regulations.

  Airlines typically operate with
  structured maintenance programs,
  standardized operating procedures,
  specialized training, and
  regulatory oversight.

  **General Aviation**

  General aviation includes many
  civilian flight activities
  outside scheduled airline
  and military operations.

  Examples include:

  - Private recreational flying.
  - Flight training.
  - Business aviation.
  - Aerial photography and surveying.
  - Agricultural aviation.
  - Certain emergency and public-service flights.

  General aviation aircraft range
  from small single-engine airplanes
  to sophisticated business jets.

  The risks and regulatory requirements
  vary according to the aircraft
  and type of operation.

  **Helicopter Operations**

  Helicopters can take off and
  land vertically, hover,
  and operate in locations
  inaccessible to most airplanes.

  Their operating characteristics
  also introduce distinct hazards,
  including rotor-related dangers,
  confined landing areas,
  and specialized mechanical systems.

  #### Understanding Aviation Accident Investigations

  In the United States, the
  **National Transportation Safety Board
  (NTSB)** is responsible for
  investigating civil aviation
  accidents and determining
  their probable causes.

  The **Federal Aviation Administration
  (FAA)** regulates civil aviation
  and oversees aviation safety
  standards and operations.

  These agencies have different
  but complementary responsibilities.

  An aviation accident investigation
  may involve examining:

  - Aircraft wreckage and components.
  - Flight paths and radar information.
  - Weather and environmental conditions.
  - Pilot qualifications and experience.
  - Aircraft maintenance records.
  - Air traffic control communications.
  - Flight data and cockpit recordings,
    when available.

  Investigators use collected evidence
  to reconstruct the sequence
  of events and identify
  contributing factors.

  The NTSB may issue safety
  recommendations intended to
  reduce the likelihood
  of similar accidents.

  **Aircraft Accident vs. Incident**

  Federal regulations distinguish
  between these terms.

  - **Accident:** Generally involves
    death, serious injury,
    or substantial aircraft damage
    during an aircraft operation.

  - **Incident:** An occurrence other
    than an accident that affects
    or could affect the safety
    of aircraft operations.

  Not every mechanical malfunction,
  emergency landing, or unusual
  aviation event is classified
  as an accident.

  #### Aviation Emergencies in Provo

  Provo Airport serves as a regional
  aviation facility supporting
  commercial passenger flights
  and general aviation.

  The airport is certified under
  **14 CFR Part 139**, which establishes
  operational and safety requirements
  for airports serving certain
  commercial air carrier operations.

  These requirements address
  areas including:

  - Airport emergency planning.
  - Aircraft rescue and firefighting.
  - Runway and taxiway safety.
  - Airport inspections and maintenance.
  - Aviation fueling safety.
  - Wildlife hazard management.
  - Snow and ice control.

  **Aircraft Rescue and Firefighting (ARFF)**

  Aircraft rescue and firefighting
  involves specialized personnel,
  equipment, and procedures
  for responding to aircraft
  emergencies.

  Aviation accidents can create
  unusual response challenges
  because aircraft may contain:

  - Large quantities of aviation fuel.
  - High-energy electrical systems.
  - Pressurized components.
  - Complex structural materials.
  - Large numbers of passengers.
  - Difficult-to-access interior spaces.

  Part 139 requires certificated
  airports to maintain applicable
  emergency response capabilities,
  including ARFF services for
  qualifying air carrier operations.

  **Provo's Geographic Considerations**

  Utah Valley's surrounding terrain
  presents additional considerations
  for aviation operations.

  The Wasatch Mountains rise
  steeply east of Provo,
  while Utah Lake occupies
  much of the valley's
  western portion.

  Mountainous terrain can create
  challenges involving:

  - Terrain clearance.
  - Rapidly changing visibility.
  - Mountain waves and turbulence.
  - Strong and variable winds.
  - Limited emergency landing areas.

  The 1995 crash east of Provo
  demonstrates the importance
  of terrain awareness in
  aviation operations.

  As commercial and general
  aviation activity continues
  in Utah Valley, emergency
  planning remains an important
  part of community preparedness.

  **Learn More:** [NTSB — Aviation Investigations](https://www.ntsb.gov/investigations/Pages/aviation.aspx)

  **Airport Safety:** [FAA — Part 139 Airport Certification](https://www.faa.gov/airports/airport_safety/part139_cert)

  **Aircraft Rescue and Firefighting:** [FAA — ARFF](https://www.faa.gov/airports/airport_safety/aircraft_rescue_fire_fighting)

  **Local Example:** [NTSB — Aviation Accident Investigation Database](https://www.ntsb.gov/Pages/AviationQuery.aspx)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="train-derailment"
  title="Train Derailment"
  image="/img/train-derailment.png"
  impacts={['safety', 'transportation', 'environment', 'communications', 'economy']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Union Pacific Rail Corridor in Provo"
  exampleText="The Union Pacific railroad passes through developed portions of Provo and serves as an important regional transportation corridor. The 2022 Pre-Disaster Mitigation Plan identifies the rail line as a potential obstacle to movement and evacuation during major emergencies. A derailment could block road crossings, disrupt rail service, and complicate emergency access, particularly if multiple railcars were involved."
>
  <p>
    Train derailments occur when one or more wheels of a railroad
    vehicle leave the rails. They can result from track defects,
    mechanical failures, excessive speed, collisions, or other
    conditions that disrupt the interaction between the wheels
    and track. Derailments range from relatively minor incidents
    involving a single railcar to major accidents involving
    multiple locomotives and railcars.
  </p>

  <p>
    Provo contains active railroad infrastructure, including
    the Union Pacific rail corridor and connections serving
    regional freight and passenger transportation. Railroad
    tracks pass through developed areas and intersect several
    transportation routes. These corridors create potential
    locations where a derailment could affect nearby
    neighborhoods, businesses, and emergency access.
  </p>

  <p>
    Train derailments can damage rail infrastructure, block
    roadways, disrupt transportation, and threaten nearby
    structures. Depending on the type of train and cargo
    involved, an accident may also cause fires, fuel spills,
    or hazardous material releases. Major incidents can
    require extensive emergency response operations and
    interrupt rail service for extended periods.
  </p>
</DisasterCard>

<AboutHazardModal id="train-derailment" title="Train Derailment">
  <div>

  #### How Trains Stay on the Tracks

  Railroad vehicles use specially designed steel
  wheels that travel along steel rails.

  Unlike automobile wheels, railroad wheels
  are shaped to guide the vehicle along
  a fixed path.

  Several design features help keep
  trains on the tracks:

  - **Wheel Tread:** The portion of the wheel
    that normally contacts the rail.
    Railroad wheel treads are slightly
    tapered, helping wheelsets
    remain aligned with the track.

  - **Wheel Flange:** A raised rim along
    the inner edge of the wheel.
    Flanges help prevent excessive
    sideways movement and provide
    guidance when necessary.

  - **Axles:** Railroad wheels are
    typically connected by solid
    axles that keep each wheelset
    aligned and rotating together.

  - **Rails:** Steel rails support
    the weight of the train and
    guide its movement.

  - **Cross Ties:** Ties hold the
    rails in position and help
    maintain proper spacing.

  - **Ballast:** Crushed stone
    beneath and around the ties
    distributes loads, provides
    drainage, and helps maintain
    track stability.

  The distance between the rails
  is known as the **track gauge**.

  Standard-gauge railroads in
  the United States use a
  gauge of **4 feet, 8.5 inches**.

  Proper wheel geometry, track
  alignment, and rail condition
  are essential for maintaining
  stable train movement.

  #### How Train Derailments Occur

  A derailment happens when the
  forces acting on a railroad
  vehicle cause its wheels to
  leave their intended position
  on the rails.

  Several factors can contribute
  to derailments:

  **Track Defects**

  Track defects can interfere
  with the ability of wheels
  to remain properly supported
  and guided.

  Examples include:

  - Broken or damaged rails.
  - Improper track alignment.
  - Excessive rail spacing.
  - Defective switches.
  - Unstable track foundations.
  - Deteriorated ties or ballast.

  **Mechanical Failures**

  Railroad vehicles contain
  numerous mechanical components
  that must function correctly.

  Failures involving wheels,
  axles, bearings, suspension,
  or braking equipment can
  contribute to derailments.

  **Excessive Speed**

  Trains must operate within
  speed limits appropriate for
  track conditions, curvature,
  and other operating factors.

  Excessive speed through a
  curve can create lateral
  forces that exceed the
  track and vehicle's ability
  to maintain stable movement.

  **Human Factors**

  Errors involving train
  handling, switching,
  communications, or
  operating procedures
  can contribute to accidents.

  **Environmental Conditions**

  Flooding, severe weather,
  debris on the tracks,
  and ground movement can
  damage railroad infrastructure
  or interfere with operations.

  Derailments frequently involve
  multiple contributing factors
  rather than a single isolated
  failure.

  #### Types of Railroad Accidents

  Railroad accidents can take
  several different forms.

  - **Derailments:** Occur when
    one or more railroad wheels
    leave the rails.

  - **Train Collisions:** Occur
    when trains collide with
    other trains, railroad
    equipment, or obstructions.

  - **Grade-Crossing Accidents:**
    Involve collisions between
    trains and vehicles or
    pedestrians at locations
    where roads or pathways
    cross railroad tracks.

  - **Switching Accidents:** Occur
    during operations involving
    the movement, coupling,
    or positioning of railcars.

  - **Railroad Equipment Failures:**
    Mechanical or structural
    problems may cause accidents
    even when a derailment
    does not occur.

  These categories can overlap.

  For example, a collision
  at a grade crossing may
  also cause several
  railcars to derail.

  #### Understanding Railroad Safety Systems

  Railroads use multiple
  technologies and procedures
  to reduce accident risks.

  Important systems include:

  **Track Inspections**

  Railroad tracks are inspected
  to identify conditions that
  could affect safe operations.

  Inspections may identify:

  - Rail defects.
  - Improper track geometry.
  - Deteriorated ties.
  - Damaged switches.
  - Track foundation problems.

  Some inspections use specialized
  vehicles and electronic equipment
  to evaluate rail conditions.

  **Hotbox Detectors**

  Railroad wheel bearings can
  generate excessive heat
  when they begin to fail.

  Trackside hotbox detectors
  use infrared sensors to
  identify unusually hot
  bearings as trains pass.

  A detector may alert railroad
  personnel when temperatures
  exceed established thresholds.

  Bearing failures can be
  particularly dangerous
  because they may damage
  axles or other components
  and contribute to derailments.

  **Dragging Equipment Detectors**

  Trackside sensors can
  identify certain objects
  hanging beneath railcars
  that may strike or damage
  railroad infrastructure.

  **Railroad Signaling**

  Railroad signals communicate
  operating information and
  help control train movement.

  Depending on the system,
  signals can indicate
  whether a train may proceed,
  must slow down, or
  must stop.

  **Positive Train Control (PTC)**

  Positive Train Control is
  a technology designed
  to automatically intervene
  in certain unsafe
  operating situations.

  PTC is intended to help prevent:

  - Train-to-train collisions.
  - Derailments caused by
    excessive speed.
  - Unauthorized movement into
    established work zones.
  - Movement through switches
    left in the wrong position.

  PTC does not prevent every
  type of railroad accident.

  For example, it generally
  does not directly prevent
  derailments caused by
  broken rails or
  failed wheel bearings.

  #### Freight Trains and Hazardous Materials

  Freight railroads transport
  a wide variety of cargo,
  including:

  - Consumer goods.
  - Agricultural products.
  - Construction materials.
  - Fuels and petroleum products.
  - Industrial chemicals.
  - Manufactured equipment.

  Some freight trains carry
  materials classified as
  hazardous under federal
  transportation regulations.

  In a derailment, damaged
  railcars or containers
  may release their contents.

  The consequences depend
  on the type of cargo,
  the quantity involved,
  and the circumstances
  of the accident.

  In February 2023, a
  Norfolk Southern freight
  train derailed in
  East Palestine, Ohio.

  The accident involved
  hazardous material releases
  and became the subject
  of extensive federal
  investigations.

  Investigators determined
  that the derailment began
  with the failure of
  an overheated wheel bearing.

  This illustrates how
  a mechanical failure
  can contribute to a
  much larger transportation
  emergency.

  For additional information
  about chemical properties,
  exposure pathways, and
  hazardous substance
  identification, see the
  **Hazardous Materials**
  section of this page.

  #### Railroad Accidents in Provo

  Provo is located along
  a major regional
  railroad corridor.

  The Union Pacific rail
  network supports freight
  transportation through
  Utah Valley and connects
  the region to broader
  national rail networks.

  Railroad infrastructure
  also intersects or
  parallels portions of
  Provo's transportation
  system.

  A significant derailment
  could affect the
  surrounding community
  in several ways:

  - **Blocked Crossings:** Derailed
    equipment may obstruct roads
    or prevent access across
    railroad tracks.

  - **Infrastructure Damage:**
    Railcars and locomotives
    can damage tracks,
    signals, utilities,
    and nearby structures.

  - **Transportation Disruption:**
    Rail operations and
    affected roadways
    may remain closed
    while the accident
    is investigated
    and cleared.

  - **Emergency Access:**
    Blocked crossings
    can complicate movement
    between neighborhoods
    and delay emergency vehicles.

  - **Secondary Hazards:**
    Fires, fuel spills,
    or hazardous material
    releases may create
    additional complications.

  The 2022 Pre-Disaster
  Mitigation Plan identifies
  Provo's railroad corridor
  as an important factor
  in transportation and
  emergency access planning.

  Because major transportation
  corridors and railroad
  crossings influence movement
  through the city, disruptions
  can affect areas beyond
  the immediate accident scene.

  **Learn More:** [Federal Railroad Administration — Railroad Safety](https://railroads.dot.gov/railroad-safety)

  **Accident Causes:** [FRA — Train Accident Cause Codes](https://railroads.fra.dot.gov/forms-guides-publications/guides/train-accident-cause-codes)

  **Railroad Safety Technology:** [FRA — Positive Train Control](https://railroads.dot.gov/train-control/ptc/positive-train-control-ptc)

  **Accident Investigations:** [NTSB — Railroad Investigations](https://www.ntsb.gov/investigations/Pages/railroad.aspx)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="industrial-accident"
  title="Industrial Accident"
  image="/img/industrial-accident.png"
  impacts={['safety', 'infrastructure', 'utilities', 'communications', 'environment']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Industrial & Utility Facilities in Provo"
  exampleText="Provo contains manufacturing facilities, commercial operations, warehouses, and utility infrastructure that rely on industrial equipment and mechanical systems. Accidents involving equipment failures, fires, explosions, or structural damage could threaten workers and nearby properties while interrupting essential services. The 2022 Pre-Disaster Mitigation Plan recognizes technological and industrial hazards but does not assign a separate industrial-accident risk rating for Provo."
>
  <p>
    Industrial accidents are unexpected events involving machinery,
    equipment, structures, or processes at industrial and commercial
    facilities. They can include fires, explosions, mechanical
    failures, structural collapses, and uncontrolled chemical
    reactions. These incidents may result from equipment
    malfunctions, human error, environmental conditions,
    or failures of safety systems.
  </p>

  <p>
    Provo contains industrial, commercial, and utility facilities
    that depend on mechanical equipment, electrical systems,
    and complex operating processes. Facilities such as
    manufacturing plants, warehouses, processing operations,
    and utility installations can present different types
    of industrial hazards. The potential consequences
    depend on the materials, equipment, and activities
    involved at each location.
  </p>

  <p>
    Industrial accidents can cause serious injuries, fatalities,
    fires, explosions, and damage to buildings or nearby
    infrastructure. Significant incidents may disrupt
    electricity, water, transportation, or commercial
    operations and require specialized emergency response
    resources. In some cases, an initial equipment failure
    can trigger additional failures that increase the
    overall severity of the incident.
  </p>
</DisasterCard>

<AboutHazardModal id="industrial-accident" title="Industrial Accident">
  <div>

  #### Types of Industrial Accidents

  Industrial facilities use machinery, energy systems,
  chemicals, and structural equipment to perform
  a wide range of operations.

  Accidents can occur when these systems fail
  or operate outside their intended conditions.

  Common types of industrial accidents include:

  - **Industrial Fires:** Uncontrolled combustion
    involving equipment, combustible materials,
    fuels, or industrial processes.

  - **Explosions:** Rapid releases of energy
    that produce pressure waves, heat,
    and potentially flying debris.

  - **Mechanical Failures:** Malfunctions
    involving motors, pumps, turbines,
    conveyors, or other machinery.

  - **Pressure System Failures:** Ruptures
    involving boilers, compressed-gas
    systems, pressure vessels,
    or industrial piping.

  - **Structural Failures:** The partial
    or complete collapse of buildings,
    storage systems, platforms,
    or supporting structures.

  - **Chemical Process Accidents:** Uncontrolled
    reactions or process failures
    that may release heat, pressure,
    or hazardous substances.

  - **Electrical Accidents:** Equipment
    failures involving short circuits,
    electrical arcs, overheating,
    or other electrical hazards.

  Different accident types can occur
  together or trigger one another.

  #### How Industrial Accidents Occur

  Industrial facilities typically operate
  within established limits for temperature,
  pressure, speed, electrical load,
  and other conditions.

  Accidents can develop when equipment
  or processes move beyond these
  safe operating limits.

  Several factors may contribute:

  - **Equipment Deterioration:** Corrosion,
    fatigue, wear, and aging can
    gradually weaken machinery
    and structural components.

  - **Mechanical Malfunctions:** Bearings,
    valves, pumps, and other components
    can fail during operation.

  - **Human Factors:** Miscommunication,
    incorrect procedures, insufficient
    training, or operational mistakes
    may contribute to unsafe conditions.

  - **Maintenance Problems:** Undetected
    defects or inadequate maintenance
    can allow equipment problems
    to develop over time.

  - **Process Control Failures:** Malfunctioning
    sensors, control systems, or
    automation equipment may fail
    to maintain safe operating conditions.

  - **External Events:** Severe weather,
    earthquakes, utility failures,
    or other disasters can damage
    industrial facilities.

  Major industrial accidents often result
  from several contributing factors
  rather than a single isolated failure.

  #### Understanding Industrial Fires and Explosions

  Industrial fires and explosions can
  occur when combustible materials
  interact with ignition sources
  under suitable conditions.

  **Industrial Fires**

  Combustion requires three essential
  elements:

  - Fuel.
  - Heat.
  - Oxygen or another oxidizing agent.

  These elements are commonly represented
  by the **Fire Triangle**.

  Industrial environments may contain
  additional hazards because fuels
  can exist as gases, vapors,
  liquids, dust, or solid materials.

  Some industrial fires can spread
  rapidly when combustible materials
  are concentrated or ventilation
  conditions are favorable.

  **Industrial Explosions**

  An explosion involves a rapid
  release of energy that produces
  a sudden increase in pressure.

  Several types of explosions
  can occur in industrial environments:

  - **Chemical Explosions:** Rapid
    chemical reactions release
    energy, often producing
    heat and pressure.

  - **Physical Explosions:** Stored
    pressure or other physical
    energy is released suddenly,
    such as when a pressurized
    vessel ruptures.

  - **Dust Explosions:** Suspended
    combustible dust ignites
    within a confined or
    partially confined space.

  - **Vapor Cloud Explosions:** A
    cloud of flammable vapor
    ignites under conditions
    that allow damaging
    pressure to develop.

  Two important combustion terms
  describe different flame behaviors:

  - **Deflagration:** Combustion
    that propagates through a
    material at a speed below
    the local speed of sound.

  - **Detonation:** A combustion
    process involving a shock
    wave that travels through
    the reactive material
    at supersonic speed.

  Both processes can produce
  destructive consequences,
  depending on the materials
  and surrounding conditions.

  #### Understanding Industrial Equipment Failures

  Industrial operations frequently rely
  on equipment containing substantial
  amounts of stored energy.

  This energy may be mechanical,
  electrical, thermal, or stored
  within pressurized systems.

  **Pressure Vessels**

  Pressure vessels are containers
  designed to hold gases or
  liquids at pressures different
  from the surrounding atmosphere.

  Examples include:

  - Compressed-air tanks.
  - Boilers.
  - Industrial reactors.
  - Pressurized storage vessels.
  - Refrigeration equipment.

  A pressure vessel can fail
  if internal pressure exceeds
  its structural capacity
  or if the vessel becomes
  weakened by deterioration
  or damage.

  A sudden rupture can release
  stored energy, producing
  a powerful pressure wave
  and potentially projecting
  fragments of the vessel.

  **Mechanical Equipment**

  Industrial machinery often
  contains moving parts
  operating at high speeds
  or under substantial loads.

  Failures involving rotating
  machinery, bearings, shafts,
  or other components can
  damage surrounding equipment
  and create additional hazards.

  **Electrical Systems**

  Electrical equipment can
  fail through insulation
  breakdown, short circuits,
  overheating, or other faults.

  Some electrical failures
  produce an **arc flash**,
  which is a sudden release
  of energy through an
  electrical arc.

  Arc flashes can generate
  intense heat, bright light,
  and pressure effects.

  #### How Industrial Accidents Escalate

  Industrial accidents sometimes
  develop into larger emergencies
  through a sequence of
  connected failures.

  This process is often
  described as a
  **cascading failure**.

  For example:

  1. **Initial Equipment Failure:**
     A mechanical component fails
     during normal operation.

  2. **Loss of Process Control:**
     The failure causes operating
     conditions to move outside
     their intended limits.

  3. **Safety System Failure:**
     An automatic shutdown
     or protective device
     fails to respond as intended.

  4. **Secondary Damage:** Increasing
     pressure, temperature, or
     mechanical stress damages
     additional equipment.

  5. **Major Incident:** The combined
     failures result in a fire,
     explosion, or other
     serious accident.

  This is an illustrative sequence.
  Actual accidents can develop
  through many different pathways.

  Industrial safety engineering
  frequently uses multiple
  independent protective measures
  to reduce the likelihood
  of such escalation.

  #### Understanding Industrial Safety Systems

  Industrial facilities use a variety
  of engineered systems and
  operating practices to
  control hazards.

  Common protective systems include:

  - **Process Monitoring:** Sensors
    measure temperatures, pressures,
    flow rates, and other
    operating conditions.

  - **Automatic Shutdown Systems:**
    Equipment can be stopped
    when unsafe conditions
    are detected.

  - **Pressure Relief Devices:**
    Safety valves and other
    devices help protect
    systems against excessive
    pressure.

  - **Fire Detection Systems:**
    Sensors identify heat,
    smoke, or flames.

  - **Fire Suppression Systems:**
    Specialized systems may
    control or extinguish
    fires involving industrial
    equipment and materials.

  - **Secondary Containment:**
    Barriers and containment
    structures can limit
    the spread of certain
    spilled materials.

  - **Redundant Safety Systems:**
    Multiple independent
    protective systems reduce
    dependence on any
    single component.

  These protective measures
  are often referred to as
  **layers of protection**.

  The purpose is to reduce
  the likelihood that an
  individual equipment failure
  will develop into a
  catastrophic accident.

  #### Understanding Process Safety Management

  **Process Safety Management (PSM)**
  is a systematic approach
  to identifying and controlling
  hazards associated with
  certain industrial processes.

  OSHA regulates process safety
  management for covered operations
  involving highly hazardous
  chemicals.

  Important elements of PSM include:

  - Identifying process hazards.
  - Maintaining equipment integrity.
  - Establishing operating procedures.
  - Training personnel.
  - Managing changes to equipment
    and operating processes.
  - Investigating incidents.
  - Evaluating emergency procedures.

  The Environmental Protection Agency
  also administers the
  **Risk Management Program (RMP)**,
  which applies to certain
  facilities handling specified
  hazardous substances above
  regulatory threshold quantities.

  Covered facilities must evaluate
  potential accidental releases,
  maintain prevention programs,
  and address emergency response.

  These regulations are intended
  to reduce the likelihood
  and consequences of serious
  industrial chemical accidents.

  #### Industrial Accidents in Provo

  Provo contains a variety of
  commercial, industrial, and
  utility facilities that
  support the community.

  These operations may involve:

  - Manufacturing equipment.
  - Electrical distribution systems.
  - Heating and cooling systems.
  - Warehousing and material handling.
  - Water and wastewater infrastructure.
  - Mechanical and processing equipment.

  Different facilities present
  different hazards depending
  on their activities,
  materials, and equipment.

  A significant industrial
  accident could affect
  surrounding neighborhoods
  and infrastructure even
  when the incident remains
  confined to a single facility.

  For example, damage to
  an essential utility
  installation could interrupt
  services for customers
  located far from the
  original incident.

  The 2022 Pre-Disaster
  Mitigation Plan recognizes
  industrial and technological
  hazards as part of
  regional emergency planning.

  However, it does not
  provide a separate
  likelihood and magnitude
  assessment for industrial
  accidents in Provo.

  **Learn More:** [OSHA — Process Safety Management](https://www.osha.gov/process-safety-management)

  **Industrial Chemical Safety:** [EPA — Risk Management Program](https://www.epa.gov/rmp/risk-management-program-rmp-rule-overview)

  **Accident Investigations:** [U.S. Chemical Safety and Hazard Investigation Board](https://www.csb.gov/)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="power-outage"
  title="Power Outage"
  image="/img/power-outage.png"
  impacts={['utilities', 'communications', 'services', 'economy', 'safety']}
  about={true}
  exampleLabel="Local Example"
  exampleTitle="August 28, 2026 — Provo Power Outages"
  exampleText="On August 28, 2026, Provo experienced multiple power outages, including a significant outage in the East Bay area. Provo Power reported damaged utility infrastructure, including downed and leaning poles, and dispatched crews to repair and stabilize the affected equipment. Power was restored by 9:13 PM, demonstrating how damage to electrical distribution infrastructure can interrupt service across multiple neighborhoods."
>
  <p>
    Power outages occur when the electrical system can no longer
    deliver electricity to homes, businesses, or other facilities.
    Interruptions can result from equipment failures, damaged
    power lines, severe weather, accidents, or disturbances
    affecting the larger electrical grid. Outages may affect
    individual buildings, entire neighborhoods, or large
    geographic regions.
  </p>

  <p>
    Provo operates its own municipal electric utility, Provo Power,
    which maintains electrical distribution infrastructure
    throughout the city. The system depends on substations,
    transformers, power lines, and connections to regional
    electricity resources. Damage to this infrastructure or
    disruptions to the broader electrical network can
    interrupt service to Provo residents and businesses.
  </p>

  <p>
    Power outages can disrupt heating, cooling, lighting,
    communications, traffic signals, businesses, and other
    essential services. Extended outages may also affect
    medical equipment, water and wastewater infrastructure,
    refrigeration, and emergency response operations.
    Widespread electrical failures can create cascading
    disruptions as other critical systems lose power.
  </p>
</DisasterCard>

<AboutHazardModal id="power-outage" title="Power Outage">
  <div>

  #### How the Electrical Grid Works

  The electrical grid is an interconnected network
  that generates, transmits, and distributes
  electricity to consumers.

  The system is commonly divided into
  three major components:

  **1. Electricity Generation**

  Electricity is produced at generating
  facilities using sources such as:

  - Natural gas.
  - Coal.
  - Hydroelectric power.
  - Nuclear energy.
  - Solar energy.
  - Wind energy.

  Generators convert mechanical or other
  forms of energy into electrical energy.

  **2. Electrical Transmission**

  Electricity is transported over long
  distances using high-voltage
  transmission lines.

  Higher transmission voltages allow
  large amounts of electrical power
  to be transported while reducing
  resistive losses.

  Substations and transformers connect
  different portions of the grid
  and change voltage levels.

  **3. Electrical Distribution**

  Distribution systems deliver electricity
  from substations to homes, businesses,
  and other facilities.

  Distribution lines typically operate
  at lower voltages than major
  transmission lines.

  Transformers located throughout
  neighborhoods further reduce
  voltage to levels suitable
  for individual customers.

  A simplified electricity pathway is:

  **Generating Facility → Transmission Lines → Substation → Distribution Lines → Transformer → Customer**

  The electrical grid must continuously
  balance electricity generation
  with consumer demand.

  Significant imbalances or equipment
  problems can affect system stability
  and interrupt electrical service.

  #### What Causes Power Outages?

  Power outages can develop from
  many different causes.

  Common contributing factors include:

  - **Severe Weather:** Strong winds,
    lightning, snow, and ice can
    damage power lines, poles,
    transformers, and other equipment.

  - **Equipment Failures:** Transformers,
    switches, cables, and other
    electrical components can fail
    because of age, deterioration,
    or unexpected malfunctions.

  - **Vehicle Accidents:** Vehicles
    striking utility poles or
    electrical equipment can
    interrupt service.

  - **Vegetation Contact:** Trees
    and branches contacting
    electrical lines can
    cause faults or damage.

  - **Wildlife:** Animals contacting
    energized equipment can
    cause electrical faults.

  - **Construction Damage:** Excavation
    or other construction activity
    can damage underground
    electrical cables.

  - **Grid Disturbances:** Problems
    affecting generation,
    transmission, or regional
    grid stability can interrupt
    power across larger areas.

  - **Planned Maintenance:** Utilities
    sometimes disconnect equipment
    intentionally to perform
    repairs, inspections,
    or system improvements.

  The extent of an outage
  depends on which electrical
  components are affected
  and how the system
  is configured.

  #### Types of Power Outages

  Not all electrical interruptions
  occur in the same way.

  Several terms describe different
  types of power disturbances:

  **Localized Outage**

  An interruption affecting a
  limited area, such as a
  building, street, or neighborhood.

  Localized outages often result
  from problems involving
  distribution equipment.

  **Widespread Blackout**

  A loss of electrical service
  affecting a large geographic
  area or substantial number
  of customers.

  Large blackouts may involve
  transmission failures,
  generation problems,
  or cascading grid disturbances.

  **Brownout**

  A reduction in electrical
  voltage below its normal
  operating level.

  A brownout does not necessarily
  involve a complete loss
  of electricity, but reduced
  voltage can affect the
  operation of equipment.

  **Momentary Interruption**

  A brief loss of electrical
  service, sometimes lasting
  only a fraction of a second
  or several seconds.

  These interruptions may occur
  when protective equipment
  temporarily disconnects
  a circuit and then
  restores service.

  **Rolling Blackout**

  An intentional interruption
  of electrical service
  to selected areas
  for limited periods.

  Rolling blackouts may be
  used as an emergency measure
  to reduce electrical demand
  when sufficient supply
  is unavailable.

  #### How Electrical Failures Spread

  Electrical systems contain
  protective devices designed
  to identify faults and
  disconnect affected equipment.

  These systems help prevent
  a localized failure from
  damaging additional infrastructure.

  Important protective devices include:

  - **Circuit Breakers:** Disconnect
    electrical circuits when
    abnormal conditions
    are detected.

  - **Fuses:** Interrupt electrical
    current when excessive
    current causes the
    protective element to melt.

  - **Protective Relays:** Monitor
    electrical conditions and
    signal circuit breakers
    when certain faults occur.

  - **Reclosers:** Automatically
    interrupt and attempt
    to restore electrical
    service following
    certain distribution faults.

  - **Sectionalizing Equipment:**
    Helps isolate damaged portions
    of a distribution network.

  Under normal conditions,
  these devices reduce the
  extent of outages.

  However, a disturbance
  affecting one part of
  an interconnected grid
  can sometimes place
  additional stress on
  other components.

  #### Understanding Cascading Blackouts

  A cascading blackout occurs
  when an initial electrical
  disturbance triggers
  additional failures
  across the power system.

  For example:

  1. **Initial Failure:** A major
     transmission line becomes
     unavailable.

  2. **Power Redistribution:**
     Electricity flows through
     other available transmission
     paths.

  3. **Additional Overloading:**
     Some remaining lines
     may exceed their
     safe operating limits.

  4. **Protective Disconnection:**
     Protective systems disconnect
     overloaded or unstable
     equipment.

  5. **Cascading Failures:**
     Additional disconnections
     may further destabilize
     the network.

  If the disturbance continues,
  large portions of the
  electrical grid may
  lose power.

  This is why electrical
  grid operators continuously
  monitor power flows,
  frequency, voltage,
  and system stability.

  Not every major equipment
  failure causes a cascading
  blackout. Grid design
  and protective systems
  are intended to limit
  these consequences.

  #### How Power Is Restored

  Restoring electrical service
  depends on the location
  and cause of the outage.

  Utility operators generally
  work through several stages:

  **1. Identifying the Problem**

  Monitoring systems, protective
  equipment, and field reports
  help determine which portions
  of the system are affected.

  **2. Isolating Damaged Equipment**

  Faulted lines, transformers,
  or other components are
  disconnected so unaffected
  portions of the grid
  can potentially be
  restored safely.

  **3. Reconfiguring the System**

  Utilities may use switching
  operations to restore
  electricity through
  alternate available paths.

  **4. Repairing Infrastructure**

  Crews replace or repair
  damaged lines, poles,
  transformers, and other
  electrical equipment.

  **5. Restoring Service**

  Electrical circuits are
  reenergized after required
  safety checks and repairs.

  Restoration may occur in stages
  rather than simultaneously
  for all affected customers.

  **Black Start**

  Following certain major
  regional blackouts,
  some generating facilities
  may need to restart
  without receiving electricity
  from the external grid.

  This process is called
  **black start**.

  Specialized generating
  resources can provide
  initial power so additional
  generating facilities
  and transmission systems
  can be brought online.

  Black-start procedures
  are primarily relevant
  to major grid restoration,
  rather than ordinary
  neighborhood outages.

  #### Understanding Electrical Grid Frequency

  In the United States,
  most interconnected
  alternating-current
  electrical systems
  operate at **60 Hz**.

  This means the electrical
  current completes 60
  cycles each second.

  Maintaining stable grid
  frequency requires
  balancing electrical
  generation and demand.

  - **Insufficient Generation:**
    When electrical demand exceeds
    available generation,
    system frequency tends
    to decrease.

  - **Excess Generation:** When
    generation exceeds demand,
    frequency tends to increase.

  Significant frequency deviations
  can threaten grid stability.

  Automated protective systems
  may disconnect loads
  or generating facilities
  to prevent more serious
  system disturbances.

  Grid frequency is therefore
  an important indicator
  of the balance between
  electricity supply
  and demand.

  #### Power Outages in Provo

  Provo operates its own
  municipally owned
  electric utility,
  known as **Provo Power**.

  Provo Power maintains
  the city's electrical
  distribution infrastructure,
  including:

  - Power lines.
  - Utility poles.
  - Distribution transformers.
  - Substations.
  - Electrical switching equipment.
  - System monitoring infrastructure.

  Provo Power is a member
  of the **Utah Municipal
  Power Agency (UMPA)**,
  which coordinates electrical
  resources for Provo
  and several other
  municipal utilities.

  The city's electric
  infrastructure is connected
  to broader regional
  electrical resources.

  Consequently, outages may
  originate from problems
  within Provo's distribution
  system or from disturbances
  affecting the larger
  electrical network.

  **Electrical System Monitoring**

  Provo Power maintains
  a 24-hour electrical
  dispatch operation
  and uses an Outage
  Management System (OMS)
  to identify and monitor
  electrical interruptions.

  Its official website
  also provides information
  about current and
  recent outages.

  **Why Power Outages Matter for Emergency Communications**

  PACT relies on electrical
  and communications infrastructure
  to support emergency operations.

  Electrical outages can affect:

  - Amateur radio repeaters
    without functioning
    backup power.

  - Internet connections
    and network equipment.

  - Cellular towers and
    associated infrastructure.

  - Radio charging equipment.

  - Emergency Operations
    Center systems.

  - Other communications
    equipment dependent
    on external electricity.

  The degree of disruption
  depends on available
  backup power,
  equipment configuration,
  and the duration
  of the outage.

  **Learn More:** [U.S. Department of Energy — How the Electrical Grid Works](https://www.energy.gov/oe/electricity-101)

  **Electrical Distribution:** [U.S. Energy Information Administration — Electricity Delivery](https://www.eia.gov/energyexplained/electricity/delivery-to-consumers.php)

  **Local Utility:** [Provo Power](https://www.provo.gov/352/Power)

  **Local Outage Information:** [Provo Power — Outages](https://www.provo.gov/1132/Outages)

  </div>
</AboutHazardModal>

---

<DisasterCard
  id="acts-of-violence"
  title="Acts of Violence"
  image="/img/acts-of-violence.png"
  impacts={['safety', 'services', 'communications', 'transportation']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Public Safety & Critical Infrastructure in Provo"
  exampleText="Provo contains universities, schools, public gathering places, government facilities, transportation corridors, and other locations where a serious act of violence could create a large-scale emergency. Such incidents may require coordination among law enforcement, fire, emergency medical services, and emergency management. The 2022 Pre-Disaster Mitigation Plan recognizes the protection of critical resources from terrorism as a regional mitigation concern but does not assign a separate Provo likelihood or magnitude rating for acts of violence."
>
  <p>
    Acts of violence are intentional actions that cause or threaten
    physical harm to people, property, or critical infrastructure.
    Large-scale incidents may include active assailant attacks,
    mass violence, terrorism, or deliberate attacks against
    essential facilities. Unlike natural disasters, these
    emergencies result from human actions and can develop
    rapidly with little or no warning.
  </p>

  <p>
    Provo's universities, schools, public gathering places,
    transportation facilities, and developed neighborhoods
    create environments where serious violent incidents could
    affect multiple people or disrupt community operations.
    Although the circumstances of such incidents are difficult
    to predict, their consequences can extend beyond the
    immediate location and require coordination among
    multiple public-safety agencies.
  </p>

  <p>
    Significant acts of violence can cause injuries, fatalities,
    property damage, and widespread psychological distress.
    Major incidents may require evacuations, restricted access
    to affected areas, extensive emergency medical resources,
    and prolonged law-enforcement operations. Attacks against
    essential infrastructure may also disrupt utilities,
    transportation, communications, or other public services.
  </p>
</DisasterCard>

<AboutHazardModal id="acts-of-violence" title="Acts of Violence">
  <div>

  #### Types of Violent Emergencies

  Violent emergencies can take several forms,
  depending on the circumstances, methods,
  and objectives of those involved.

  Common categories include:

  - **Active Assailant Incidents:** Situations in
    which one or more individuals are actively
    attempting to kill or seriously injure
    people in a populated area.

  - **Mass Violence:** Intentional acts of violence
    that cause or threaten serious injuries
    or fatalities among multiple people.

  - **Targeted Violence:** Deliberate attacks
    directed toward particular individuals,
    groups, institutions, or locations.

  - **Terrorism:** Acts of violence associated
    with objectives such as intimidating
    populations or coercing governments
    for political or ideological purposes.

  - **Attacks Against Critical Infrastructure:**
    Intentional physical attacks that damage
    or disable facilities providing
    essential community services.

  These categories can overlap.

  For example, an incident may involve
  an active assailant and produce
  mass casualties while also
  meeting the legal definition
  of terrorism.

  However, not every violent crime
  constitutes terrorism or
  a large-scale emergency.

  #### Targeted Violence vs. Terrorism

  Targeted violence and terrorism
  are related but distinct concepts.

  **Targeted Violence**

  Targeted violence generally involves
  an individual or group deliberately
  selecting a person, location,
  or other target before committing
  an act of violence.

  Motivations may include personal
  grievances, hostility, revenge,
  or other objectives.

  Targeted violence does not
  necessarily involve political
  or ideological motivations.

  **Terrorism**

  Terrorism involves unlawful violence
  associated with objectives such
  as intimidating civilians
  or influencing government
  actions through coercion.

  Federal law distinguishes
  domestic and international
  terrorism according to
  specific statutory criteria.

  An important distinction is
  that the term terrorism
  concerns the nature and
  purpose of the activity,
  not simply the number
  of people harmed.

  Investigators evaluate
  available evidence, including
  intent and circumstances,
  when determining how an
  incident should be classified.

  #### Understanding Mass Casualty Incidents

  A **Mass Casualty Incident (MCI)**
  occurs when the number, severity,
  or needs of injured people
  exceed the resources immediately
  available to manage the incident
  through normal operations.

  The classification is based
  partly on the capabilities
  of the responding system.

  For example, an incident involving
  several seriously injured people
  could overwhelm the resources
  of a small community, even
  though a larger metropolitan
  area might manage the same
  incident with routine resources.

  Mass casualty incidents can
  result from many types
  of emergencies, including:

  - Acts of violence.
  - Transportation accidents.
  - Industrial accidents.
  - Structural collapses.
  - Natural disasters.
  - Other large-scale emergencies.

  A mass casualty incident
  is therefore not necessarily
  an act of violence.

  **Medical Triage**

  During incidents involving
  numerous casualties,
  emergency medical personnel
  may use triage systems
  to prioritize patients
  according to injury severity
  and available resources.

  Triage helps responders
  organize medical treatment
  and transportation when
  demand exceeds immediately
  available capabilities.

  Different emergency medical
  systems may use different
  triage methods and protocols.

  #### How Violent Incidents Affect Communities

  Significant acts of violence
  can affect communities
  in ways that extend far
  beyond the immediate scene.

  **Immediate Impacts**

  The initial consequences
  may include:

  - Injuries and fatalities.
  - Emergency medical demand.
  - Evacuations or restricted access.
  - Disruption of nearby activities.
  - Damage to buildings or infrastructure.

  **Transportation Disruptions**

  Roads and public transportation
  routes may be temporarily
  closed to support emergency
  operations, investigations,
  and public safety.

  These closures may affect
  movement through surrounding
  neighborhoods and commercial
  areas.

  **Infrastructure Disruptions**

  Violence directed toward
  critical facilities may
  damage essential systems.

  Depending on the facility,
  consequences could include
  interruptions to electricity,
  water, transportation,
  or communications.

  **Community Recovery**

  Major violent incidents can
  have long-lasting effects
  on individuals and communities.

  Recovery may involve
  psychological support,
  restoration of services,
  facility repairs,
  investigations, and
  efforts to restore
  normal community operations.

  #### Understanding Emergency Response Coordination

  Serious violent incidents
  often require coordination
  among multiple agencies.

  Different organizations
  have distinct responsibilities
  during an emergency.

  **Law Enforcement**

  Law enforcement agencies
  are responsible for
  addressing immediate threats,
  protecting public safety,
  securing affected areas,
  and conducting criminal
  investigations.

  **Fire and Emergency Medical Services**

  Fire and EMS personnel
  provide medical care,
  rescue services,
  patient transportation,
  and other emergency
  support functions.

  **Emergency Management**

  Emergency management agencies
  help coordinate resources,
  maintain situational awareness,
  and support the broader
  response when an incident
  exceeds routine capabilities.

  **Public Information**

  Public information personnel
  help distribute verified
  emergency information
  and coordinate messaging
  among responding agencies.

  **Incident Command System**

  Large incidents may use
  the **Incident Command System (ICS)**
  to establish a common
  organizational structure.

  ICS provides a standardized
  framework for coordinating
  personnel, resources,
  communications,
  and incident objectives.

  When multiple agencies
  share incident management
  responsibilities, they may
  establish a Unified Command
  structure.

  Unified Command allows
  agencies with different
  legal authorities and
  responsibilities to coordinate
  under common incident objectives.

  #### Understanding Critical Infrastructure

  Critical infrastructure includes
  systems and facilities whose
  disruption could significantly
  affect public safety,
  security, economic activity,
  or essential services.

  Examples include:

  - Electrical power systems.
  - Water and wastewater facilities.
  - Transportation infrastructure.
  - Communications networks.
  - Healthcare facilities.
  - Emergency services infrastructure.

  Attacks against critical
  infrastructure can produce
  consequences even when
  relatively few people
  are directly injured.

  For example, the loss
  of an essential utility
  service could affect
  homes, businesses,
  hospitals, and other
  facilities far beyond
  the original incident.

  Critical infrastructure
  protection is therefore
  an important component
  of emergency management.

  #### Acts of Violence in Provo

  Provo is a developed community
  containing educational institutions,
  residential neighborhoods,
  commercial districts,
  public facilities,
  and major transportation routes.

  These locations support
  the city's daily activities
  and can require coordinated
  emergency operations
  when serious incidents occur.

  A large-scale violent
  incident could involve
  multiple responding
  organizations, including:

  - Provo Police Department.
  - Provo Fire & Rescue.
  - Utah County emergency services.
  - Emergency medical providers.
  - Provo City Emergency Management.
  - Other agencies as needed.

  Depending on the incident,
  Provo's Emergency Operations
  Center may support
  resource coordination,
  situational awareness,
  and public information.

  **Emergency Communications**

  Reliable communications
  help responding agencies
  share information and
  coordinate resources.

  During large-scale incidents,
  emergency communications
  networks may experience
  increased demand or
  localized disruptions.

  Auxiliary communications
  organizations such as PACT
  may support authorized
  emergency management
  functions when activated
  and assigned.

  PACT's role is to support
  communications and information
  flow as directed by
  emergency management,
  not to perform law-enforcement
  or security operations.

  The 2022 Pre-Disaster
  Mitigation Plan includes
  protection of critical
  resources from terrorism
  among regional mitigation
  considerations.

  However, it does not
  provide a separate
  probability or magnitude
  assessment for acts
  of violence in Provo.

  **Learn More:** [FEMA — Active Shooter: What You Can Do (IS-907.A)](https://training.fema.gov/programs/independent-study/courseoverview.aspx?code=IS-907.a)

  **Emergency Management:** [FEMA — National Incident Management System](https://www.fema.gov/emergency-managers/nims)

  **Critical Infrastructure:** [CISA — Critical Infrastructure Security and Resilience](https://www.cisa.gov/topics/critical-infrastructure-security-and-resilience)

  **Threat Information:** [DHS — National Terrorism Advisory System](https://www.dhs.gov/national-terrorism-advisory-system)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="cyber-attack"
  title="Cyber Attack"
  image="/img/cyber-attack.png"
  impacts={['communications', 'services', 'utilities', 'economy']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Digital Infrastructure & Essential Services in Provo"
  exampleText="Provo relies on interconnected computer networks and digital systems to support municipal operations, utilities, businesses, healthcare, and communications. A significant cyberattack affecting these systems could interrupt essential services or compromise sensitive information. The 2022 Pre-Disaster Mitigation Plan recognizes the importance of resilient infrastructure but does not assign a separate likelihood or magnitude rating for cyberattacks in Provo."
>
  <p>
    Cyber attacks are deliberate attempts to gain unauthorized access
    to computer systems, steal or alter information, or disrupt
    digital operations. They can involve malicious software,
    compromised accounts, deceptive communications, or attacks
    against network infrastructure. Cyber incidents range from
    isolated compromises of individual devices to large-scale
    disruptions affecting entire organizations.
  </p>

  <p>
    Provo depends on digital technology to support essential
    municipal services, utilities, healthcare, transportation,
    businesses, and emergency communications. Many of these
    systems rely on interconnected networks, specialized
    software, and external service providers. A cyberattack
    affecting one organization or shared technology provider
    could disrupt services used throughout the community.
  </p>

  <p>
    Cyber attacks can expose sensitive information, disrupt
    communications, interrupt financial transactions, and
    prevent organizations from accessing critical computer
    systems. Attacks involving operational technology may
    also interfere with the monitoring or control of physical
    infrastructure. Significant incidents can create widespread
    operational disruptions and require extended recovery efforts.
  </p>
</DisasterCard>

<AboutHazardModal id="cyber-attack" title="Cyber Attack">
  <div>

  #### Types of Cyber Attacks

  Cyber attacks can involve many different
  techniques depending on the systems
  being targeted and the objectives
  of the attacker.

  Common types include:

  - **Malware:** Malicious software designed
    to damage systems, collect information,
    disrupt operations, or perform
    unauthorized activities.

  - **Ransomware:** A type of malware that
    encrypts files or otherwise prevents
    access to systems. Attackers typically
    demand payment in exchange for
    restoring access or withholding
    stolen information.

  - **Phishing:** Fraudulent messages or
    websites designed to trick individuals
    into revealing sensitive information,
    opening malicious attachments,
    or visiting deceptive websites.

  - **Denial-of-Service (DoS) Attacks:**
    Attempts to overwhelm or otherwise
    disrupt a system so legitimate
    users cannot access it.

  - **Distributed Denial-of-Service
    (DDoS) Attacks:** Denial-of-service
    attacks launched from numerous
    devices or systems simultaneously.

  - **Credential Attacks:** Attempts to
    obtain or misuse usernames,
    passwords, authentication tokens,
    or other login credentials.

  - **Supply Chain Attacks:** Attacks
    that compromise an organization
    through software, equipment,
    or services supplied by
    another organization.

  A single cyber incident may
  involve several of these
  techniques working together.

  #### How Cyber Attacks Occur

  Computer systems depend on software,
  hardware, user accounts, and
  network connections to operate.

  A cyberattack occurs when someone
  deliberately exploits weaknesses
  in these systems or manipulates
  users to gain unauthorized access
  or disrupt normal operations.

  Several factors can contribute
  to a successful attack:

  - **Software Vulnerabilities:** Errors
    or weaknesses in software can
    sometimes allow unauthorized
    actions or access.

  - **Compromised Credentials:** Stolen
    or improperly protected login
    information can allow attackers
    to impersonate legitimate users.

  - **Social Engineering:** Attackers
    manipulate people into disclosing
    information or performing
    actions they would not
    otherwise authorize.

  - **Misconfigured Systems:** Incorrect
    security settings may expose
    systems or information
    to unauthorized access.

  - **Third-Party Dependencies:**
    Compromises involving technology
    providers can affect other
    organizations using their services.

  - **Insider Threats:** Individuals
    with authorized access may
    intentionally misuse it
    or inadvertently contribute
    to a security incident.

  Cyberattacks frequently involve
  multiple weaknesses rather
  than a single isolated problem.

  #### Understanding Ransomware

  Ransomware is one of the most
  disruptive forms of cyberattack
  affecting organizations.

  In a typical ransomware incident,
  malicious software prevents
  access to important files
  or computer systems.

  The attacker then demands
  payment, often claiming that
  payment will restore access.

  Some ransomware incidents
  also involve data theft.

  Several consequences may result:

  - **Loss of Data Access:** Files
    and databases become unavailable
    to authorized users.

  - **Operational Disruption:**
    Organizations may be unable
    to use applications needed
    for daily operations.

  - **Data Exposure:** Sensitive
    information may be stolen
    and threatened with
    public release.

  - **Financial Losses:** Organizations
    may experience business
    interruptions, recovery expenses,
    and other economic impacts.

  - **Extended Recovery:** Restoring
    affected systems can require
    substantial time and
    technical resources.

  Modern ransomware attacks
  sometimes use a technique
  known as **double extortion**.

  In these incidents, attackers
  both encrypt data and steal
  information, threatening to
  release the stolen data
  unless a ransom is paid.

  Paying a ransom does not
  guarantee that systems
  will be restored or that
  stolen information
  will remain private.

  #### Understanding the CIA Triad

  Information security is often
  explained using three
  foundational principles:

  **Confidentiality, Integrity,
  and Availability.**

  Together, these form
  the **CIA Triad**.

  | Principle | Meaning | Example |
  |---|---|---|
  | Confidentiality | Information is accessible only to authorized parties | Preventing unauthorized access to personal records |
  | Integrity | Information remains accurate and is not improperly altered | Preventing changes to financial or operational data |
  | Availability | Systems and information remain accessible when needed | Keeping emergency communications systems operational |

  Cyberattacks may affect
  one or more of these principles.

  **Confidentiality**

  A data breach may expose
  information that should
  remain private.

  **Integrity**

  Unauthorized changes
  to information can make
  records or computer
  outputs unreliable.

  **Availability**

  A ransomware or
  denial-of-service attack
  can prevent legitimate
  users from accessing
  systems or information.

  Some cyber incidents
  affect all three
  principles simultaneously.

  #### Cyber Attacks Against Critical Infrastructure

  Critical infrastructure increasingly
  depends on computers and
  communications networks.

  Many facilities use digital systems
  to monitor equipment, exchange
  information, and coordinate
  operations.

  Important infrastructure
  sectors include:

  - Electrical power.
  - Water and wastewater.
  - Transportation.
  - Healthcare.
  - Communications.
  - Financial services.
  - Government operations.
  - Emergency services.

  Cyber incidents affecting these
  systems can have consequences
  beyond the loss of computer data.

  **Information Technology (IT)**

  IT systems primarily manage
  information, communications,
  and business operations.

  Examples include:
  - Email servers.
  - Databases.
  - Business applications.
  - Computer networks.
  - Digital records systems.

  **Operational Technology (OT)**

  OT systems monitor or control
  physical equipment and processes.

  Examples include:

  - Industrial control systems.
  - Water treatment controls.
  - Electrical control equipment.
  - Building automation systems.
  - Manufacturing equipment.

  Some OT environments use
  **Supervisory Control and Data
  Acquisition (SCADA)** systems
  to monitor and control
  distributed infrastructure.

  An attack affecting IT may
  primarily disrupt information
  and business processes.

  An attack affecting OT may
  interfere with the visibility,
  control, or operation of
  physical equipment.

  However, the consequences
  depend on the affected system
  and available protective measures.

  #### How Cyber Incidents Can Spread

  Modern organizations frequently
  rely on networks connecting
  multiple systems and services.

  This interconnection improves
  efficiency but can also
  create shared dependencies.

  For example:

  1. **Initial Compromise:** A computer
     system or user account
     becomes compromised.

  2. **Service Disruption:** Important
     applications or data
     become unavailable.

  3. **Organizational Impact:**
     Employees cannot access
     systems required for
     normal operations.

  4. **Dependent Services:** Other
     organizations or departments
     relying on the affected
     system may experience
     disruptions.

  5. **Extended Recovery:** Restoring
     interconnected systems
     may require coordination
     among multiple providers.

  This is an illustrative sequence,
  not a description of how
  every cyberattack develops.

  An incident affecting a widely
  used service provider can
  sometimes disrupt organizations
  that were not directly attacked.

  These effects are particularly
  important for infrastructure
  that depends on cloud services,
  communication networks,
  or centralized software systems.

  #### Cybersecurity and Emergency Communications

  Modern emergency communications
  involve both traditional radio
  equipment and digital systems.

  Different communication methods
  have different dependencies.

  **Internet-Dependent Communications**
  Some communication systems
  depend on external networks
  and online services.

  Examples include:

  - Email.
  - Internet messaging.
  - Cloud-based applications.
  - Voice over Internet Protocol
    (VoIP) systems.
  - Internet-linked radio systems.
  - Online dispatch or
    coordination platforms.

  A cyberattack affecting
  the underlying service
  provider or network
  could interrupt access
  to these services.

  **Land Mobile Radio Systems**

  Conventional VHF and UHF
  radio systems can operate
  without an internet connection
  when using direct simplex
  communications.

  Standalone repeaters may
  also continue operating
  independently of internet
  services if their power
  and local equipment
  remain functional.

  However, some modern radio
  systems depend on digital
  networks for linking,
  control, or other functions.

  Cyber incidents affecting
  these supporting systems
  may disrupt certain
  radio capabilities.

  **Satellite Communications**

  Satellite communication
  services also depend
  on ground infrastructure,
  computer networks,
  and supporting systems.

  Compromise or disruption
  of these dependencies
  can affect service
  availability.

  **Emergency Coordination Systems**

  Emergency management agencies
  may rely on software to
  coordinate personnel,
  maintain situational awareness,
  and distribute information.

  Cyber incidents can interfere
  with these functions even
  when physical communications
  infrastructure remains intact.

  #### Cyber Attacks and Provo

  Provo depends on interconnected
  technology to support
  many essential services.

  Examples include:

  - Municipal administration.
  - Electrical utility operations.
  - Water infrastructure.
  - Transportation systems.
  - Healthcare facilities.
  - Educational institutions.
  - Emergency communications.
  - Local businesses.

  The degree of exposure varies
  according to each system's
  design, connectivity,
  and security measures.

  A significant cyberattack
  could potentially interrupt
  one or more essential services,
  even without causing direct
  physical damage.
  **PACT Communications**

  PACT uses communications
  technologies to support
  Provo City during authorized
  emergency operations.

  Some coordination tools
  may depend on internet
  connectivity or external
  service providers.

  However, direct amateur
  radio simplex communications
  do not require internet access.

  This distinction is important
  when considering how a
  cyber incident could affect
  different communication methods.

  The 2022 Pre-Disaster
  Mitigation Plan emphasizes
  the importance of protecting
  infrastructure and maintaining
  essential services.

  However, it does not
  provide a separate
  cyberattack likelihood
  or magnitude rating
  for Provo.

  **Learn More:** [CISA — Cybersecurity](https://www.cisa.gov/topics/cybersecurity-best-practices)

  **Cybersecurity Terminology:** [NIST — Computer Security Resource Center](https://csrc.nist.gov/glossary)

  **Ransomware:** [CISA — StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide)

  **Critical Infrastructure:** [CISA — Cybersecurity Scenarios](https://www.cisa.gov/resources-tools/resources/cybersecurity-scenarios)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="water-contamination"
  title="Water Contamination"
  image="/img/water-contamination.png"
  impacts={['safety', 'water', 'services', 'economy', 'communications']}
  about={true}
  exampleLabel="Local Context"
  exampleTitle="Protecting Provo's Drinking Water Supply"
  exampleText="Provo obtains most of its culinary water from local springs and groundwater wells, supplemented by treated surface water from the Provo River and Deer Creek system. These sources depend on protected watersheds, groundwater quality, water treatment, and a reliable distribution network. Contamination affecting a water source or part of the distribution system could require additional treatment, public notification, or temporary restrictions on water use."
>
  <p>
    Water contamination occurs when harmful microorganisms, chemicals,
    radioactive substances, or other pollutants enter a water supply.
    Contaminants may originate from natural geological processes,
    agricultural and industrial activities, sewage, or damaged
    infrastructure. Depending on the substance involved,
    contaminated water may become unsafe for drinking,
    cooking, or other uses.
  </p>

  <p>
    Provo relies primarily on springs and groundwater wells,
    along with treated surface water from regional sources.
    These supplies can be vulnerable to different forms
    of contamination depending on surrounding land use,
    geological conditions, and infrastructure integrity.
    Protecting water sources and maintaining reliable
    treatment and distribution systems are important
    components of the city's water infrastructure.
  </p>

  <p>
    Water contamination can cause illness, expose residents
    to harmful chemicals, and interrupt access to safe
    drinking water. Significant incidents may require
    public water advisories, additional treatment, or
    temporary restrictions on water use. Contamination
    affecting major water infrastructure could disrupt
    homes, businesses, healthcare facilities, and other
    essential community services.
  </p>
</DisasterCard>

<AboutHazardModal id="water-contamination" title="Water Contamination">
  <div>

  #### Types of Water Contamination

  Water can become contaminated by several different
  categories of substances.

  The nature of the contaminant determines
  its potential effects and the methods
  required to remove or control it.

  **Biological Contamination**

  Biological contamination involves microorganisms
  capable of causing disease.

  Common examples include:

  - **Bacteria:** Organisms such as certain
    strains of E. coli, Salmonella,
    and Campylobacter.

  - **Viruses:** Disease-causing viruses
    such as norovirus and hepatitis A.

  - **Protozoa:** Microscopic parasites
    such as Giardia and Cryptosporidium.

  Biological contamination may result
  from sewage, animal waste, or other
  sources of disease-causing organisms.

  **Chemical Contamination**

  Chemical contaminants may occur naturally
  or enter water through human activities.

  Examples include:

  - Arsenic and other naturally occurring elements.
  - Lead and copper from certain plumbing materials.
  - Nitrates associated with fertilizers and waste.
  - Pesticides and agricultural chemicals.
  - Petroleum products and industrial solvents.
  - Per- and polyfluoroalkyl substances (PFAS).

  Chemical contaminants vary considerably
  in their toxicity and environmental behavior.

  Some produce immediate health effects,
  while others may cause harm following
  repeated or prolonged exposure.

  **Radiological Contamination**

  Radiological contamination occurs when
  radioactive substances are present
  in water.

  Certain radioactive elements occur
  naturally in rocks and groundwater.

  Examples include:

  - Uranium.
  - Radium.
  - Radon.

  The potential health effects depend
  on the radioactive material,
  its concentration, and
  the duration of exposure.

  **Physical Contamination**

  Physical contaminants affect the
  appearance or physical characteristics
  of water.

  Examples include:

  - Sediment.
  - Suspended soil particles.
  - Organic debris.
  - Other particulate materials.

  Physical changes do not always mean
  water is unsafe, but they can
  indicate changes in water quality
  or interfere with treatment.

  #### How Drinking Water Becomes Contaminated

  Drinking water can become contaminated
  at several points between its
  original source and the consumer.

  **Source Water Contamination**

  Contaminants may enter groundwater,
  rivers, reservoirs, or other
  drinking water sources.

  Potential sources include:

  - Agricultural runoff.
  - Industrial discharges.
  - Leaking underground storage tanks.
  - Sewage or wastewater releases.
  - Naturally occurring minerals.
  - Stormwater carrying pollutants.

  **Treatment System Problems**

  Water treatment facilities use
  processes designed to control
  or remove contaminants.

  Equipment failures, operational
  problems, or water-quality
  changes can reduce treatment
  effectiveness.

  **Distribution System Contamination**

  Water may also become contaminated
  after leaving a treatment facility.

  Distribution systems contain
  pipes, valves, pumps,
  and storage facilities.

  Potential causes include:

  - Broken or damaged water mains.
  - Loss of water pressure.
  - Cross-connections with unsafe water.
  - Improperly protected storage facilities.
  - Deteriorated plumbing materials.

  A contamination incident may
  affect an individual building,
  a portion of a distribution
  network, or an entire
  water supply system.

  #### Surface Water vs. Groundwater

  Drinking water generally comes
  from two broad categories
  of natural sources.

  **Surface Water**

  Surface water includes:

  - Rivers.
  - Streams.
  - Lakes.
  - Reservoirs.

  These sources are directly exposed
  to surrounding environmental conditions.

  Rainfall, runoff, wildlife,
  and human activities can
  introduce microorganisms,
  sediment, or chemicals.

  Surface water typically requires
  filtration and disinfection
  before distribution as
  public drinking water.

  **Groundwater**

  Groundwater is water stored
  underground within soil,
  sediment, and rock formations.

  These underground water-bearing
  formations are known as
  **aquifers**.

  Groundwater may be accessed
  through wells or emerge
  naturally at springs.

  As water moves through
  underground materials,
  some contaminants can
  be filtered or reduced.

  However, groundwater is
  not automatically free
  of contamination.

  Dissolved minerals, agricultural
  chemicals, industrial pollutants,
  and microorganisms can
  sometimes reach underground
  water supplies.

  Groundwater contamination
  can be particularly challenging
  because some pollutants
  move slowly and may
  remain underground
  for extended periods.

  #### How Drinking Water Is Treated

  Public drinking water systems
  use treatment processes
  appropriate for their
  water sources and
  identified contaminants.

  Common treatment processes include:

  **Coagulation and Flocculation**

  Treatment chemicals may be
  added to help small suspended
  particles combine into
  larger particles.

  These larger particles
  are easier to remove.

  **Sedimentation**

  Water is allowed to move
  slowly through a basin,
  allowing heavier particles
  to settle.

  **Filtration**

  Water passes through
  filter media or other
  treatment systems designed
  to remove suspended particles
  and certain contaminants.

  **Disinfection**

  Disinfection reduces or
  inactivates disease-causing
  microorganisms.

  Common disinfection methods
  include:

  - Chlorine-based disinfectants.
  - Ultraviolet light.
  - Ozone.

  Different methods have different
  advantages and limitations.

  **Specialized Treatment**

  Some contaminants require
  additional treatment technologies.

  Examples include:

  - Activated carbon adsorption.
  - Ion exchange.
  - Reverse osmosis.
  - Specialized filtration processes.

  Not every drinking water
  facility uses all of
  these treatment methods.

  The required treatment depends
  on the source water,
  contaminant characteristics,
  and applicable regulations.

  #### Understanding Water Quality Monitoring

  Public drinking water systems
  are required to monitor
  water quality according
  to applicable regulations.

  Testing may evaluate:

  - Microorganisms.
  - Chemical contaminants.
  - Disinfectant levels.
  - Turbidity.
  - Other regulated water-quality indicators.

  **Turbidity** measures the
  cloudiness of water caused
  by suspended particles.

  Elevated turbidity can
  interfere with certain
  treatment processes
  and may indicate
  changing source-water conditions.

  **Maximum Contaminant Levels**

  The Environmental Protection Agency
  establishes enforceable drinking
  water standards for many
  regulated contaminants.

  A **Maximum Contaminant Level (MCL)**
  is the highest permitted
  concentration of a regulated
  contaminant in drinking water,
  subject to applicable
  regulatory requirements.

  Some contaminants are regulated
  through treatment techniques
  rather than numerical MCLs.

  Public water systems must
  provide annual water-quality
  information through
  **Consumer Confidence Reports**.

  #### Understanding Drinking Water Advisories

  When drinking water may
  be unsafe, public water
  systems and health authorities
  may issue an advisory.

  Three major advisory
  categories are commonly used.

  | Advisory | Meaning |
  |---|---|
  | Boil Water | Water may contain harmful microorganisms; boiling according to official instructions can make it microbiologically safer |
  | Do Not Drink | Water must not be consumed or used for food and beverage preparation |
  | Do Not Use | Water must not be used for any purpose covered by the advisory because exposure may be dangerous |

  **Boil Water Advisory**

  A Boil Water Advisory is
  generally issued when
  microbial contamination
  is suspected or confirmed.

  Boiling can inactivate
  many disease-causing
  bacteria, viruses,
  and parasites.

  However, boiling does not
  reliably remove hazardous
  chemicals, heavy metals,
  or radioactive contaminants.

  **Do Not Drink Advisory**

  A Do Not Drink Advisory
  may be issued when
  consuming the water
  presents a risk that
  cannot be addressed
  through boiling.

  Other uses, such as
  bathing or washing,
  may also be restricted,
  depending on the contaminant.

  **Do Not Use Advisory**

  A Do Not Use Advisory
  indicates that water
  should not be used
  for purposes identified
  in the official notice.

  Such advisories may
  involve contaminants
  capable of causing harm
  through contact,
  inhalation, or
  other exposure routes.

  **The specific instructions
  provided by the water utility
  or public health authority
  always take precedence over
  general advisory descriptions.**

  #### Why Water Pressure Matters

  Municipal water distribution
  systems normally maintain
  positive internal pressure.

  This pressure helps move
  water through pipes
  and reduces the likelihood
  that surrounding groundwater
  or soil water will enter
  through small openings.

  A significant loss
  of pressure can increase
  contamination concerns,
  particularly when damaged
  pipes are exposed to
  contaminated surroundings.

  Pressure loss may occur
  because of:

  - Major water main breaks.
  - Pump or equipment failures.
  - Storage system problems.
  - Other distribution disruptions.

  Following certain pressure-loss
  incidents, a water utility
  may issue a precautionary
  Boil Water Advisory while
  evaluating water quality.

  However, a water main
  break does not automatically
  mean contamination occurred.

  #### Water Contamination in Provo

  Provo operates a municipal
  drinking water system
  that serves residents,
  businesses, and
  essential facilities.

  The city's culinary
  water supplies include:

  - **Springs:** Natural groundwater
    sources that supply a
    substantial portion
    of Provo's water.

  - **Groundwater Wells:** Wells that
    provide water from underground
    aquifers and supplement
    other available sources.

  - **Treated Surface Water:**
    Water originating from
    regional surface sources,
    including the Provo River
    and Deer Creek system.

  Provo's water system also
  includes storage facilities,
  pumping equipment,
  treatment infrastructure,
  and distribution pipelines.

  **Protecting Groundwater**

  Because groundwater is
  an important part of
  Provo's water supply,
  protecting underground
  sources is particularly
  relevant to the city.

  Contaminants introduced
  at the ground surface
  can sometimes migrate
  through soil and rock
  into aquifers.

  The potential for migration
  depends on local geology,
  groundwater movement,
  and the characteristics
  of the contaminant.

  **Protecting Distribution Infrastructure**

  Water distribution systems
  must maintain adequate
  operating conditions
  to deliver safe water.

  Damage to critical pipes,
  storage facilities,
  or pumping systems
  can interrupt service
  and may require
  additional water-quality
  monitoring.

  **Community-Wide Consequences**

  A significant drinking
  water contamination incident
  could affect:

  - Residential water use.
  - Restaurants and food service.
  - Schools and universities.
  - Healthcare facilities.
  - Commercial operations.
  - Other essential services.

  The 2022 Pre-Disaster
  Mitigation Plan emphasizes
  the importance of
  water infrastructure
  and reliable water supplies.

  However, it does not
  assign a separate
  likelihood and magnitude
  rating for water
  contamination in Provo.

  **Learn More:** [CDC — What Causes Tap Water Contamination](https://www.cdc.gov/drinking-water/causes/)

  **Water Advisories:** [EPA — Drinking Water Advisory Types](https://www.epa.gov/waterutilityresponse/water-decontamination-frequently-asked-questions-customers)

  **Drinking Water Standards:** [EPA — National Primary Drinking Water Regulations](https://www.epa.gov/ground-water-and-drinking-water/national-primary-drinking-water-regulations)

  **Local Resource:** [Provo City — Water and Sewer](https://www.provo.gov/392/Water-and-Sewer)

  </div>
</AboutHazardModal>
 
---

<DisasterCard
  id="air-quality"
  title="Poor Air Quality"
  image="/img/air-quality.png"
  likelihood="High"
  likelihoodLevel={4}
  magnitude="Critical"
  magnitudeLevel={3}
  impacts={['safety', 'air', 'environment', 'economy']}
  about={true}
  exampleLabel="Recurring Local Example"
  exampleTitle="Utah Valley Winter Inversions & Wildfire Smoke"
  exampleText="Utah County regularly experiences episodes of reduced air quality during winter temperature inversions, when pollutants accumulate near the valley floor. Wildfire smoke can also affect Provo during warmer months, even when the fires are located hundreds of miles away. These recurring conditions demonstrate how local geography, atmospheric conditions, and emissions contribute to the region's air-quality challenges."
>
  <p>
    Poor air quality occurs when airborne pollutants reach
    concentrations that may harm human health or the environment.
    Common pollutants include fine particulate matter, ground-level
    ozone, nitrogen dioxide, sulfur dioxide, and carbon monoxide.
    These substances may be emitted directly into the atmosphere
    or form through chemical reactions involving other pollutants.
  </p>

  <p>
    Provo is located in Utah Valley, where surrounding mountains
    and seasonal weather patterns can contribute to pollution
    accumulation. During winter temperature inversions, cold
    air becomes trapped beneath warmer air, limiting atmospheric
    mixing and allowing fine particulate matter to build up.
    Wildfire smoke and summertime ozone formation can also
    reduce air quality throughout the region.
  </p>

  <p>
    Exposure to elevated air pollution can irritate the
    respiratory system, aggravate asthma, and increase the
    risk of cardiovascular and respiratory problems.
    Fine particles can penetrate deep into the lungs,
    while certain gaseous pollutants can inflame
    airways and reduce lung function. Severe or prolonged
    pollution episodes can affect public health,
    outdoor activities, and community operations.
  </p>
</DisasterCard>

<AboutHazardModal id="air-quality" title="Poor Air Quality">
  <div>

  #### Understanding Air Pollutants

  Air pollution consists of particles and gases
  that can affect human health, visibility,
  ecosystems, and the environment.

  The Environmental Protection Agency
  identifies six major categories of
  common outdoor air pollutants,
  known as **criteria air pollutants**.

  These include:

  - Particulate matter.
  - Ground-level ozone.
  - Carbon monoxide.
  - Sulfur dioxide.
  - Nitrogen dioxide.
  - Lead.

  Different pollutants originate
  from different sources and
  behave differently in
  the atmosphere.

  **Particulate Matter (PM)**

  Particulate matter consists of
  microscopic solid particles
  and liquid droplets
  suspended in the air.

  Two commonly measured
  categories are:

  - **PM2.5:** Fine particles with
    aerodynamic diameters of
    2.5 micrometers or smaller.

  - **PM10:** Inhalable particles
    with aerodynamic diameters
    of 10 micrometers or smaller.

  For comparison, a human hair
  is typically tens of
  micrometers in diameter.

  PM2.5 particles are particularly
  concerning because they can
  penetrate deeply into
  the respiratory system.

  Some fine particles and
  their constituents can
  also enter the bloodstream.

  Sources of particulate
  pollution include:

  - Vehicle emissions.
  - Wood burning.
  - Industrial operations.
  - Construction and road dust.
  - Wildfire smoke.
  - Atmospheric chemical reactions.

  Not all particulate matter
  is emitted directly.

  A substantial portion
  of wintertime PM2.5
  pollution in northern Utah
  forms through chemical
  reactions in the atmosphere.

  **Ground-Level Ozone (O3)**

  Ground-level ozone is a
  gas formed through
  chemical reactions involving
  nitrogen oxides and
  volatile organic compounds
  in the presence of sunlight.

  Ozone in the upper
  atmosphere protects Earth
  from harmful ultraviolet
  radiation.

  However, ozone near
  the ground is an
  air pollutant that
  can damage lung tissue
  and aggravate respiratory
  conditions.

  **Carbon Monoxide (CO)**

  Carbon monoxide is a
  colorless, odorless gas
  produced by incomplete
  combustion.

  Sources include motor
  vehicles, engines,
  and other fuel-burning
  equipment.

  Carbon monoxide reduces
  the blood's ability
  to transport oxygen.

  **Nitrogen Dioxide (NO2)**

  Nitrogen dioxide is a
  reactive gas associated
  with combustion processes.

  It can contribute to
  respiratory irritation
  and participate in
  the formation of
  ozone and fine particles.

  **Sulfur Dioxide (SO2)**

  Sulfur dioxide is produced
  primarily when sulfur-containing
  fuels or materials are burned
  or processed.

  It can irritate the
  respiratory system and
  contribute to the formation
  of sulfate particles.

  **Lead (Pb)**

  Lead is a toxic metal
  that can enter the
  atmosphere through certain
  industrial processes
  and other sources.

  Airborne lead exposure
  can affect the nervous
  system and other
  organs.

  #### How Temperature Inversions Form

  Under typical atmospheric
  conditions, air temperature
  decreases as altitude increases
  through the lower atmosphere.

  Warmer air near the ground
  can rise and mix
  with cooler air above.

  This vertical mixing
  helps disperse pollutants.

  During a **temperature inversion**,
  warmer air is positioned
  above a layer of
  cooler air near
  the ground.

  The warmer layer suppresses
  vertical mixing, allowing
  pollutants to accumulate
  within the colder air.

  Several conditions favor
  winter inversions:

  - **Clear Skies:** The ground
    loses heat rapidly
    during nighttime.

  - **Long Winter Nights:**
    Extended cooling allows
    dense cold air
    to accumulate.

  - **Calm Winds:** Weak winds
    limit atmospheric mixing.

  - **Snow Cover:** Snow reflects
    sunlight and helps keep
    the ground and nearby
    air relatively cold.

  - **High Pressure Systems:**
    Persistent atmospheric
    conditions can suppress
    mixing and maintain
    the inversion.

  - **Mountainous Terrain:**
    Surrounding mountains
    can help contain
    cold air within valleys.

  **Why Inversions Are Common in Utah Valley**

  Utah Valley is bordered
  by the Wasatch Mountains
  to the east and
  other elevated terrain
  to the west and south.

  During winter, cold air
  can accumulate within
  the valley while
  warmer air remains above.

  The resulting inversion
  restricts the vertical
  movement of pollutants.

  Vehicle exhaust,
  residential heating,
  commercial activities,
  and other sources
  continue adding emissions
  to the trapped air.

  Over several days,
  pollutant concentrations
  may increase substantially.

  Inversions are not
  themselves pollutants.

  They are atmospheric
  conditions that can
  concentrate pollutants
  already present
  in the air.

  **How Inversions End**

  Inversions typically weaken
  when weather conditions
  restore atmospheric mixing.

  Strong winds, approaching
  storm systems, and
  changes in temperature
  can disrupt the
  stable air layers.

  Once mixing resumes,
  accumulated pollutants
  can disperse more
  effectively.

  #### Understanding Secondary Particulate Formation

  An important characteristic
  of Utah's winter pollution
  is that much of the
  PM2.5 is not emitted
  directly as particles.

  Instead, gases released
  from different sources
  react in the atmosphere
  and form new particles.

  These are called
  **secondary particulates**.

  Important precursor
  pollutants include:

  - Nitrogen oxides (NOx).
  - Ammonia (NH3).
  - Volatile organic compounds (VOCs).
  - Sulfur dioxide (SO2).

  Atmospheric reactions
  involving these substances
  can produce particulate
  compounds such as
  ammonium nitrate and
  ammonium sulfate.

  Ammonium nitrate is
  a major component of
  fine particulate pollution
  during northern Utah
  winter inversion episodes.

  This means that reducing
  directly emitted smoke
  or dust alone does
  not address every
  source of PM2.5.

  Gaseous precursor emissions
  can also contribute
  substantially to the
  development of poor
  air quality.

  #### How Wildfire Smoke Affects Air Quality

  Wildfires release a complex
  mixture of gases and
  airborne particles.

  The exact composition
  depends on the vegetation,
  materials being burned,
  combustion conditions,
  and atmospheric processes.

  Wildfire smoke commonly
  contains:

  - Fine particulate matter.
  - Carbon monoxide.
  - Volatile organic compounds.
  - Nitrogen oxides.
  - Other combustion products.

  **Long-Distance Smoke Transport**

  Wildfire smoke can travel
  hundreds or thousands
  of miles from
  the original fire.

  Winds transport smoke
  through the atmosphere,
  sometimes carrying it
  across multiple states.

  Atmospheric conditions
  determine whether smoke
  remains elevated or
  mixes down toward
  the ground.

  Consequently, communities
  can experience unhealthy
  air quality even when
  no wildfire is burning
  nearby.

  **Smoke and Visibility**

  Smoke particles scatter
  and absorb sunlight,
  producing haze and
  reducing visibility.

  However, visibility alone
  is not a reliable
  measurement of
  health risk.

  Some harmful pollutants
  may be present even
  when the air does
  not appear visibly smoky.

  **Wildfire Smoke vs. Winter Inversions**

  Wildfire smoke introduces
  pollutants generated
  by combustion.

  Winter inversions primarily
  describe atmospheric conditions
  that restrict pollution
  dispersion.

  These are different
  phenomena, although
  smoke can accumulate
  during an inversion
  if both occur
  at the same time.

  #### How Ground-Level Ozone Forms

  Ground-level ozone is not
  usually emitted directly
  from vehicles or
  industrial equipment.

  Instead, it develops
  through chemical reactions
  involving precursor pollutants.

  Two important precursor
  groups include:

  - **Nitrogen Oxides (NOx):**
    Emitted by vehicles,
    combustion equipment,
    and other sources.

  - **Volatile Organic Compounds (VOCs):**
    Released from fuels,
    solvents, vegetation,
    and various industrial
    and commercial activities.

  Sunlight drives reactions
  involving these substances
  that can produce ozone
  near the ground.

  **Why Ozone Is Often a Summer Concern**

  Ozone formation is generally
  favored by strong sunlight,
  warm temperatures,
  and suitable atmospheric
  conditions.

  As a result, elevated
  ozone concentrations
  commonly develop during
  warm, sunny weather.

  Ozone concentrations
  can vary throughout
  the day.

  They may increase
  during daylight hours
  as photochemical reactions
  become more active.

  The relationship between
  ozone and precursor
  emissions is complex.

  Changes in one precursor
  do not necessarily
  produce proportional
  changes in ozone levels.

  #### Understanding the Air Quality Index

  The **Air Quality Index (AQI)**
  is a standardized system
  developed by the Environmental
  Protection Agency to communicate
  outdoor air pollution levels
  and associated health concerns.

  The AQI uses a numerical
  scale divided into
  six major categories.

  | AQI | Category | Color |
  |---|---|---|
  | 0–50 | Good | Green |
  | 51–100 | Moderate | Yellow |
  | 101–150 | Unhealthy for Sensitive Groups | Orange |
  | 151–200 | Unhealthy | Red |
  | 201–300 | Very Unhealthy | Purple |
  | 301–500 | Hazardous | Maroon |

  Higher AQI values indicate
  greater levels of health
  concern.

  **How AQI Is Calculated**

  Air-quality measurements
  are converted into
  pollutant-specific
  AQI values.

  The calculations use
  concentration breakpoints
  established for different
  pollutants and averaging
  periods.

  The reported overall AQI
  generally reflects the
  highest applicable
  pollutant-specific AQI.

  For example, PM2.5 may
  be the dominant pollutant
  during a winter inversion,
  while ozone may determine
  the AQI on a
  summer afternoon.

  **AQI vs. Pollutant Concentration**

  AQI is not itself
  a pollutant concentration.

  Pollutants are measured
  in different units.

  For example:

  - PM2.5 is commonly
    measured in micrograms
    per cubic meter (µg/m³).

  - Ozone is commonly
    measured in parts
    per billion (ppb).

  The AQI converts these
  different measurements
  into a common scale
  for public communication.

  The EPA periodically
  updates AQI breakpoints
  when applicable health-based
  standards change.

  **AQI and Health**

  As AQI levels increase,
  the potential for
  adverse health effects
  generally increases.

  At moderately elevated
  levels, people with
  certain underlying
  health conditions
  may experience effects
  before others.

  At higher levels,
  health concerns extend
  to increasingly large
  portions of the population.

  #### How Air Pollution Affects Human Health

  The health effects
  of air pollution depend
  on the specific pollutant,
  concentration, duration
  of exposure, and
  individual susceptibility.

  **Respiratory Effects**

  Certain pollutants can
  irritate or inflame
  the respiratory system.

  Potential effects include:

  - Coughing.
  - Airway irritation.
  - Reduced lung function.
  - Aggravated asthma.
  - Worsening of chronic
    respiratory conditions.

  **Cardiovascular Effects**

  Exposure to fine particulate
  pollution is associated
  with increased cardiovascular
  health risks.

  Fine particles can
  contribute to systemic
  inflammation and other
  biological responses.

  Studies have linked
  elevated particle exposure
  with increased risks
  of cardiovascular events,
  particularly among
  susceptible populations.

  **Short-Term and Long-Term Exposure**

  Short-term exposure
  refers to pollution
  experienced over hours
  or days.

  Long-term exposure
  refers to repeated
  or sustained exposure
  over months or years.

  Both can affect health,
  although the nature
  and magnitude of
  the effects differ.

  #### Poor Air Quality in Provo

  Provo experiences air-quality
  challenges associated
  with Utah Valley's
  geography and
  regional emissions.
  Three recurring conditions
  are especially relevant.

  **Winter: Fine Particulate Pollution**

  During winter,
  temperature inversions
  can trap pollution
  near the valley floor.

  The resulting buildup
  of PM2.5 is one of
  northern Utah's
  most significant
  air-quality concerns.

  **Summer: Ground-Level Ozone**

  Warm temperatures
  and strong sunlight
  can support the
  formation of
  ground-level ozone.

  Ozone levels may
  become elevated
  under favorable
  weather and
  pollution conditions.

  **Wildfire Season: Smoke**

  Wildfires in Utah
  and surrounding states
  can send smoke
  into Utah Valley.

  These smoke events
  may temporarily elevate
  particulate concentrations
  and reduce visibility.

  **Air Quality Monitoring**

  The Utah Division of
  Air Quality operates
  an air-monitoring network
  and publishes air-quality
  observations and forecasts.

  Monitoring stations measure
  selected pollutants,
  allowing agencies to
  evaluate changing
  conditions and
  public health concerns.

  Air quality can vary
  between locations
  because of elevation,
  emissions, terrain,
  and weather conditions.

  The 2022 Pre-Disaster
  Mitigation Plan identifies
  poor air quality
  as a significant
  regional hazard.

  It assigns poor
  air quality a
  **High** likelihood
  and **Critical**
  potential magnitude.

  **Learn More:** [Utah DEQ — Understanding Utah's Air Quality](https://deq.utah.gov/daq/understanding-utahs-air-quality)

  **Winter Inversions:** [Utah DEQ — Inversions](https://deq.utah.gov/daq/inversions)

  **Air Quality Index:** [EPA — Air Quality Index Basics](https://www.airnow.gov/aqi/aqi-basics/)

  **Wildfire Smoke:** [EPA — Wildfire Smoke and Your Health](https://www.epa.gov/wildfire-smoke-course)

  **Utah Air Quality Data:** [Utah Division of Air Quality](https://air.utah.gov/)

  </div>
</AboutHazardModal>
 
---
 
*Disaster and mitigation information on this page is based primarily on the **[2022 Pre-Disaster Mitigation Plan](https://magutah.gov/static/files/Planning/2022%20Pre-Disaster%20Mitigation%20Plan%20for%20Summit%20Utah%20and%20Wasatch%20Counties%20with%20April%202022%20Revisions.pdf)***