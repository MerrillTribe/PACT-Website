---
sidebar_position: 4
title: Preparation for Disasters
draft: true
---
 
import useBaseUrl from '@docusaurus/useBaseUrl';
 
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
 
export const DisasterCard = ({
  id,
  title,
  image,
  alt,
  likelihood = 'Not Rated',
  likelihoodLevel = null,
  magnitude = 'Not Rated',
  magnitudeLevel = null,
  children,
  exampleLabel,
  exampleTitle,
  exampleText,
}) => (
  <div className="disaster-profile-card">
    <div className="disaster-profile-sidebar">
      <img
        src={useBaseUrl(image)}
        alt={alt || title}
        className="disaster-profile-icon"
      />
 
      <DisasterRating
        label="Likelihood"
        value={likelihood}
        level={likelihoodLevel}
      />
 
      <DisasterRating
        label="Magnitude"
        value={magnitude}
        level={magnitudeLevel}
      />
    </div>
 
    <div className="disaster-profile-content">
      <h2 id={id}>{title}</h2>
 
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
 
# Preparation for Disasters
 
Provo’s location makes it a great place to live, but it also comes with some inherent risks.

The Wasatch Mountains and Wasatch Fault bring the potential for earthquakes, landslides, debris flows, and wildfires. Utah Lake, the Provo River, and local soil conditions create risks of flooding and liquefaction. A major railroad corridor and a growing airport add to the possibility of transportation accidents.

Some disasters are more likely than others. Severe weather and wildfires occur relatively often in Utah County, while major earthquakes and dam failures are much less common but could have devastating consequences.

We may not be able to prevent every disaster, but we can prepare for them. **Understanding [**Provo's risks**](#understanding-provos-risks) is an important first step toward protecting ourselves, our families, and our community.**
 
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
 
## Disasters
 
The cards below provide information about different types of disasters, including how they occur, the impacts they can cause, and how they may affect Provo and Utah County.

### Earthquake
 
<DisasterCard
  id="earthquake"
  title="Earthquake"
  image="/img/earthquake.png"
  likelihood="Unlikely"
  likelihoodLevel={1}
  magnitude="Catastrophic"
  magnitudeLevel={4}
  exampleLabel="Utah Example"
  exampleTitle="2020 — Magna Earthquake"
  exampleText="The magnitude 5.7 Magna earthquake was centered in northern Utah and was felt across much of the Wasatch Front, demonstrating how a significant earthquake can disrupt communities far beyond its epicenter."
>
  <p>
    Earthquakes occur when accumulated geologic stress is suddenly released.
    In Provo, earthquake effects can include strong ground shaking, structural
    damage, landslides, fires, utility damage, and liquefaction.
  </p>
 
  <p>
    The Wasatch Fault runs along Provo's east bench, placing the city within
    Utah's primary earthquake hazard region.
  </p>
</DisasterCard>
 
The assessment identifies a substantial number of older buildings and areas susceptible to liquefaction.
 
| Earthquake Exposure | Provo Buildings |
|---|---:|
| Moderate-to-High Liquefaction Potential | 19,338 |
| Buildings Constructed Before 1990 | 15,358 |
 
The mitigation plan identifies several ways earthquake losses can be reduced:
 
- Secure heavy furniture and other objects to walls.
- Retrofit vulnerable buildings and critical infrastructure.
- Use flexible piping where appropriate.
- Require geotechnical studies in areas with problem soils.
- Use reinforced foundations or piers where liquefaction is a concern.
 
Provo's mitigation strategy also identifies seismic upgrades to city facilities and support for earthquake-retrofit programs.
 
---
### Liquefaction
 
<DisasterCard
  id="liquefaction"
  title="Liquefaction"
  image="/img/liquefaction.png"
  exampleLabel="Local Exposure"
  exampleTitle="19,338 Provo Buildings in Moderate-to-High Potential Areas"
  exampleText="The 2022 assessment identifies 19,338 Provo buildings in areas with moderate-to-high liquefaction potential."
>
  <p>
    Liquefaction occurs when loose soils begin to behave more like a liquid
    during prolonged earthquake shaking, reducing their ability to support
    buildings and infrastructure.
  </p>
 
  <p>
    Liquefaction is particularly important in Utah Valley because development
    exists between the Wasatch Fault and less-stable soils near Utah Lake.
  </p>
</DisasterCard>
 
The assessment identifies reinforced foundations or piers, geotechnical studies, and careful development in problem-soil areas as possible mitigation measures.
 
---
### Wildfire
 
<DisasterCard
  id="wildfire"
  title="Wildfire"
  image="/img/wildfire.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Utah County Example"
  exampleTitle="2018 — Bald Mountain & Pole Creek Fires"
  exampleText="The two fires burned more than 120,000 acres south of Provo and resulted in evacuations across several Utah County communities."
>
  <p>
    Wildfires occur regularly in Utah County, particularly during summer and
    fall. Areas where homes and development meet wildland vegetation are
    especially vulnerable.
  </p>
 
  <p>
    Provo's eastern foothills place portions of the city near the
    wildland-urban interface.
  </p>
</DisasterCard>
 
| Wildfire Exposure | Provo Buildings |
|---|---:|
| High Fire Risk | 652 |
| Moderate Fire Risk | 227 |
 
Wildfire can also create hazards that continue after the fire is extinguished. When vegetation is removed from steep slopes, subsequent rain can produce increased runoff, flash flooding, landslides, and debris flows.
 
 
The mitigation plan identifies several strategies:
 
- Maintain defensible space around structures.
- Remove vegetation and other fuels near buildings.
- Avoid storing firewood immediately next to structures.
- Keep roofs and rain gutters free of combustible debris.
- Use fire-resistant roofing and appropriate vegetation.
- Improve access and firebreaks in wildland-urban interface areas.
 
Provo's mitigation strategy includes participation in the **Ready, Set, Go!** program, public education about defensible space, and a chipping program.
 
---
### Flooding
 
<DisasterCard
  id="flooding"
  title="Flooding"
  image="/img/flooding.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Local Example"
  exampleTitle="September 2013 — Provo Flooding"
  exampleText="Heavy rain caused widespread street flooding, damaged roads and Lions Park, and damaged dozens of homes in Provo."
>
  <p>
    Flooding in Utah County can result from snowmelt, severe thunderstorms,
    flash flooding, and runoff from wildfire burn scars.
  </p>
</DisasterCard>
 
During the September 2013 event, the assessment reports that at least **25 Provo homes received major damage** and more than **50 received minor damage**.
 
Provo participates in the National Flood Insurance Program and Community Rating System and has adopted floodplain-management standards.
 
 
The assessment identifies several projects:
 
- Constructing or rehabilitating levees around the Provo River and Provo Airport.
- Participating in the Provo River Levee Analysis and Mapping Process.
- Replacing vulnerable sections of large-diameter pipe.
- Continuing floodplain-management and NFIP participation.
 
---
### Landslide
 
<DisasterCard
  id="landslide"
  title="Landslide"
  image="/img/landslide.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Critical"
  magnitudeLevel={3}
  exampleLabel="Local Example"
  exampleTitle="2005 — Sherwood Hills, Provo"
  exampleText="High groundwater following a wet winter contributed to slow-moving landslides in Sherwood Hills, resulting in multiple homes being condemned."
>
  <p>
    Landslides occur when soil, rock, or other material moves downslope. Steep
    terrain, groundwater, development, and unstable soils can contribute to
    landslide movement.
  </p>
 
  <p>
    The Provo assessment specifically notes slow-moving landslides occurring
    in neighborhoods, affecting residents and infrastructure.
  </p>
</DisasterCard>
 
 
Mitigation measures include:
 
- Investigate landslide-prone areas before development.
- Require geotechnical studies where appropriate.
- Avoid excessive irrigation on unstable slopes.
- Define and regulate development in steep-slope or high-risk areas.
- Keep utilities outside landslide-prone areas where possible.
 
---
### Mudslides & Debris Flows
 
<DisasterCard
  id="mudslide"
  title="Mudslides & Debris Flows"
  image="/img/mudslide.png"
  alt="Mudslide and Debris Flow"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Critical"
  magnitudeLevel={3}
  exampleLabel="Local Example"
  exampleTitle="2003 — Buckley Draw, Provo"
  exampleText="Several post-fire debris flows occurred after Provo constructed mitigation works. The largest flows were contained by the completed debris-flow trench and related structures."
>
  <p>
    Debris flows can carry mud, rock, vegetation, and other material rapidly
    downhill. Wildfire burn scars can greatly increase the risk during heavy
    rain.
  </p>
</DisasterCard>
 
The county assessment identifies post-wildfire debris flow as an important Utah County hazard and documents extensive mitigation work undertaken near Provo after the 2002 Springville fire.
 
---
### Sinkhole
 
<DisasterCard
  id="sinkhole"
  title="Sinkhole"
  image="/img/sinkhole.png"
  exampleLabel="Assessment Note"
  exampleTitle="No Separate Provo Risk Profile"
  exampleText="The 2022 regional mitigation plan does not provide a separate Provo probability, severity rating, or local sinkhole-loss profile."
>
  <p>
    Sinkholes form when the ground surface collapses into an underground void
    or weakened subsurface area. They can damage roads, utilities, buildings,
    and other infrastructure.
  </p>
</DisasterCard>
 
---
### Avalanche
 
<DisasterCard
  id="avalanche"
  title="Avalanche"
  image="/img/avalanche.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Local-Area Example"
  exampleTitle="Provo Canyon Avalanche Control"
  exampleText="The assessment identifies ongoing avalanche-control measures in Provo Canyon, including snow sheds and fences."
>
  <p>
    Avalanches occur when a mass of snow rapidly moves down a slope.
    Mountainous terrain makes avalanche an important Utah County hazard.
  </p>
</DisasterCard>
 
Avalanches have caused more deaths in Utah County than the other severe-weather hazards evaluated in the plan.
 
---
### Drought
 
<DisasterCard
  id="drought"
  title="Drought"
  image="/img/drought.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Recent Utah Example"
  exampleTitle="2026 — Statewide Drought Conditions"
  exampleText="Utah experienced significant drought conditions during 2026, with low snowpack and reduced runoff contributing to declining water supplies and elevated wildfire potential."
>
  <p>
    Drought is an extended period of unusually dry conditions that can reduce
    water availability and contribute to increased wildfire risk.
  </p>
 
  <p>
    Provo relies on local springs and wells for portions of its water supply,
    and the assessment identifies additional long-term water-storage capacity
    as a city need.
  </p>
</DisasterCard>
 
The assessment identifies:
 
- Continuing aquifer storage and recovery.
- Developing a water-treatment facility and infiltration in Rock Canyon.
- Deepening wells.
- Increasing long-term water-storage capability.
 
---
### Dust Bowl
 
<DisasterCard
  id="dust-bowl"
  title="Dust Bowl"
  image="/img/dust-bowl.png"
  exampleLabel="Assessment Note"
  exampleTitle="Not Separately Rated for Provo"
  exampleText="Extended drought and exposed dry soils can increase blowing dust, but the regional assessment does not provide a separate Provo Dust Bowl probability or severity rating."
>
  <p>
    Dust-bowl conditions develop when prolonged drought, dry soils, wind, and
    loss of vegetation combine to produce widespread blowing dust and soil
    erosion.
  </p>
</DisasterCard>
 
---
### Lightning
 
<DisasterCard
  id="lightning"
  title="Lightning"
  image="/img/lightning.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Negligible"
  magnitudeLevel={1}
  exampleLabel="Utah County History"
  exampleTitle="Lightning Injuries and Property Damage"
  exampleText="The county's severe-weather history documents deaths, injuries, and property damage associated with lightning."
>
  <p>
    Lightning accompanies thunderstorms and can injure people, damage
    electrical systems, ignite fires, and disrupt critical infrastructure.
  </p>
</DisasterCard>
 
---
### Heavy Rain
 
<DisasterCard
  id="heavy-rain"
  title="Heavy Rain"
  image="/img/heavy-rain.png"
  exampleLabel="Local Example"
  exampleTitle="September 2013 — Provo Flooding"
  exampleText="Heavy rainfall produced widespread street flooding in Provo and damaged roads, park facilities, and homes."
>
  <p>
    Heavy rain can overwhelm storm-drain systems, flood streets and low-lying
    areas, increase streamflow, and trigger flash flooding or debris flows.
  </p>
 
  <p>
    In Provo, the consequences of heavy rain can be amplified by steep
    foothill terrain and wildfire burn scars.
  </p>
</DisasterCard>
 
---
### High Wind
 
<DisasterCard
  id="high-wind"
  title="High Wind"
  image="/img/high-wind.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Recent Local Example"
  exampleTitle="August 30, 2026 — Severe Thunderstorm near Provo"
  exampleText="The National Weather Service warned of a severe thunderstorm affecting Provo and nearby communities with wind gusts up to 60 mph and the potential for damage to roofs, siding, and trees."
>
  <p>
    High winds can damage trees, buildings, power infrastructure, and other
    exposed property and can disrupt transportation and utility systems.
  </p>
 
  <p>
    Wind has produced the greatest monetary losses among the severe-weather
    hazards evaluated in the 2022 assessment.
  </p>
</DisasterCard>
 
---
### Hail
 
<DisasterCard
  id="hail"
  title="Hail"
  image="/img/hail.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Negligible"
  magnitudeLevel={1}
  exampleLabel="Recent Local Example"
  exampleTitle="August 30, 2026 — Severe Thunderstorm near Provo"
  exampleText="The National Weather Service warned of quarter-size hail in a storm affecting Provo, Springville, Spanish Fork, BYU, and nearby areas."
>
  <p>
    Hail develops within thunderstorms and can damage roofs, vehicles,
    vegetation, crops, and other exposed property.
  </p>
 
  <p>
    Hail is classified as Highly Likely and is among Utah County's most
    frequently occurring weather hazards.
  </p>
</DisasterCard>
 
---
### Heavy Snow
 
<DisasterCard
  id="heavy-snow"
  title="Heavy Snow"
  image="/img/heavy-snow.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Utah County History"
  exampleTitle="Recurring Winter-Storm Impacts"
  exampleText="The assessment records deaths, injuries, and property damage from heavy snow and other winter-weather events in Utah County."
>
  <p>
    Heavy snow can disrupt transportation, place additional loads on
    structures, affect utilities, and restrict access to canyon and mountain
    areas.
  </p>
</DisasterCard>
 
---
### Extreme Cold
 
<DisasterCard
  id="extreme-cold"
  title="Extreme Cold"
  image="/img/extreme-cold.png"
  likelihood="Highly Likely"
  likelihoodLevel={4}
  magnitude="Limited"
  magnitudeLevel={2}
  exampleLabel="Preparedness Example"
  exampleTitle="Winter Cold and Frozen-Pipe Risk"
  exampleText="The mitigation plan specifically identifies protecting water pipes during cold weather and safe winter travel as preparedness priorities."
>
  <p>
    Cold temperatures and wind chill can affect people, transportation,
    buildings, and water infrastructure during severe winter conditions.
  </p>
</DisasterCard>
 
---
### Extreme Heat
 
<DisasterCard
  id="extreme-heat"
  title="Extreme Heat"
  image="/img/extreme-heat.png"
  exampleLabel="Assessment Note"
  exampleTitle="No Separate Provo Rating"
  exampleText="Extreme heat is an important preparedness concern, but the 2022 regional assessment does not provide a separate Provo likelihood and magnitude pair for this hazard."
>
  <p>
    Prolonged periods of unusually high temperatures can create health risks,
    increase electricity demand, worsen drought conditions, and contribute to
    wildfire danger.
  </p>
</DisasterCard>
 
---
### Tornado
 
<DisasterCard
  id="tornado"
  title="Tornado"
  image="/img/tornado.png"
  likelihood="Likely"
  likelihoodLevel={3}
  magnitude="Negligible"
  magnitudeLevel={1}
  exampleLabel="Utah County History"
  exampleTitle="Tornadoes Included in County Severe-Weather Record"
  exampleText="The regional assessment classifies tornadoes as Likely but Negligible in the Utah County hazard matrix."
>
  <p>
    Tornadoes are rotating columns of air associated with severe
    thunderstorms. They are less destructive locally than many other hazards
    but are included in Utah County's historical severe-weather record.
  </p>
</DisasterCard>
 
---
### Infestation
 
<DisasterCard
  id="infestation"
  title="Infestation"
  image="/img/infestation.png"
  exampleLabel="Assessment Note"
  exampleTitle="Regional Rather Than City-Specific Hazard"
  exampleText="The assessment recognizes infestation as a regional hazard but states that its widespread nature makes meaningful jurisdiction-level mapping difficult."
>
  <p>
    Agricultural, plant, or insect infestations can affect vegetation,
    agriculture, and natural resources across broad areas.
  </p>
</DisasterCard>
 
---
### Volcano
 
<DisasterCard
  id="volcano"
  title="Volcano"
  image="/img/volcano.png"
  exampleLabel="Local Risk"
  exampleTitle="No Significant Provo Volcano Hazard Identified"
  exampleText="The 2022 regional mitigation plan does not provide a separate volcano risk profile for Provo."
>
  <p>
    Volcanic eruptions can produce ash, lava, gases, and other hazards. Provo
    is not located near an active volcanic system identified as a major local
    hazard in the regional assessment, so this disaster receives only brief
    treatment here.
  </p>
</DisasterCard>
 
---
### Hurricane
 
<DisasterCard
  id="hurricane"
  title="Hurricane"
  image="/img/hurricane.png"
  exampleLabel="Local Risk"
  exampleTitle="Direct Hurricane Impact Is Not a Provo Hazard"
  exampleText="Because Provo is far inland, the regional mitigation plan does not identify direct hurricane impacts as a local disaster risk."
>
  <p>
    Hurricanes are large tropical cyclones that form over warm ocean waters.
    Remnants of tropical systems can occasionally contribute moisture to the
    western United States, but a direct hurricane strike is not a realistic
    Provo scenario.
  </p>
</DisasterCard>
 
---
### Tsunami
 
<DisasterCard
  id="tsunami"
  title="Tsunami"
  image="/img/tsunami.png"
  exampleLabel="Local Risk"
  exampleTitle="No Conventional Tsunami Threat to Provo"
  exampleText="Provo is far inland and the 2022 regional assessment does not identify tsunami as a local hazard."
>
  <p>
    Tsunamis are large waves usually generated by major disturbances beneath
    oceans or other very large bodies of water. A conventional ocean tsunami
    does not represent a significant direct threat to Provo.
  </p>
</DisasterCard>
 
---
### Space Weather
 
<DisasterCard
  id="space-weather"
  title="Space Weather"
  image="/img/space-weather.png"
  exampleLabel="Potential Impact"
  exampleTitle="Geomagnetic Storms Can Disrupt Technology"
  exampleText="Strong solar activity can disturb radio communications, satellite services, navigation systems, and portions of the electric grid even when there is no direct physical damage on the ground."
>
  <p>
    Space weather includes solar flares, radiation storms, and geomagnetic
    disturbances produced by activity on the Sun.
  </p>
</DisasterCard>
 
---
### Dam Failure
 
<DisasterCard
  id="dam-failure"
  title="Dam Failure"
  image="/img/dam-failure.png"
  likelihood="Unlikely"
  likelihoodLevel={1}
  magnitude="Catastrophic"
  magnitudeLevel={4}
  exampleLabel="Provo Exposure"
  exampleTitle="16,883 Buildings in the Dam-Failure Exposure Analysis"
  exampleText="The Provo assessment identifies 16,883 buildings within its dam-failure exposure analysis."
>
  <p>
    A dam failure could release large amounts of water with little warning
    and produce significant downstream flooding.
  </p>
</DisasterCard>
 
Utah County contains several high-risk dams, and the regional assessment specifically considers Deer Creek and Jordanelle dams.
 
Although the probability is classified as **Unlikely**, the county matrix classifies the potential magnitude as **Catastrophic**.
 
---
### Hazardous Materials
 
<DisasterCard
  id="hazardous-materials"
  title="Hazardous Materials"
  image="/img/hazmat.png"
  exampleLabel="Local Consideration"
  exampleTitle="Transportation and Industrial Corridors"
  exampleText="The regional plan recognizes hazardous-material emergencies as a technological hazard. Provo's transportation corridors and developed areas create the possibility of accidental releases even though no separate Provo rating is assigned."
>
  <p>
    Hazardous-material emergencies can involve accidental releases of
    chemicals, fuels, gases, or other dangerous substances during
    transportation, storage, or industrial activity.
  </p>
</DisasterCard>
 
---
### Aviation Accident
 
<DisasterCard
  id="aviation-accident"
  title="Aviation Accident"
  image="/img/aviation-accident.png"
  exampleLabel="Local Consideration"
  exampleTitle="Growing Provo Airport"
  exampleText="The assessment notes that Provo Airport is a Part 139 FAA-certified airport and that continued airport growth increases traffic and the need for emergency response capability."
>
  <p>
    Aviation emergencies can occur during takeoff, landing, ground operations,
    or flight and can require fire, medical, law-enforcement, and
    mass-casualty response.
  </p>
</DisasterCard>
 
---
### Train Derailment
 
<DisasterCard
  id="train-derailment"
  title="Train Derailment"
  image="/img/train-derailment.png"
  exampleLabel="Local Consideration"
  exampleTitle="Union Pacific Rail Corridor"
  exampleText="The regional assessment specifically notes that the Union Pacific rail line can complicate movement and evacuation through Provo during a major emergency."
>
  <p>
    Train derailments can block transportation routes, damage infrastructure,
    cause fires, and create hazardous-material emergencies when freight cars
    are involved.
  </p>
</DisasterCard>
 
---
### Industrial Accident
 
<DisasterCard
  id="industrial-accident"
  title="Industrial Accident"
  image="/img/industrial-accident.png"
  exampleLabel="Assessment Note"
  exampleTitle="No Separate Provo Risk Rating"
  exampleText="Industrial and technological accidents are acknowledged by the regional plan, but it does not provide a separate Provo probability or severity rating for industrial accidents."
>
  <p>
    Industrial accidents can include fires, explosions, equipment failures,
    structural failures, and releases of hazardous substances.
  </p>
</DisasterCard>
 
---
### Power Outage
 
<DisasterCard
  id="power-outage"
  title="Power Outage"
  image="/img/power-outage.png"
  exampleLabel="Local Impact"
  exampleTitle="Severe Weather Can Disrupt Utilities"
  exampleText="The regional assessment identifies utility infrastructure as an important part of community resilience, and hazards such as wind, winter weather, wildfire, and earthquakes can cause power disruptions."
>
  <p>
    Power outages can interrupt heating, cooling, communications, traffic
    signals, medical equipment, water systems, businesses, and other essential
    services.
  </p>
</DisasterCard>
 
---
### Acts of Violence
 
<DisasterCard
  id="acts-of-violence"
  title="Acts of Violence"
  image="/img/acts-of-violence.png"
  exampleLabel="Assessment Note"
  exampleTitle="Protection of Critical Resources"
  exampleText="Utah County identifies protection of critical resources from terrorism as part of its mitigation efforts, but the regional plan does not assign a separate Provo likelihood or magnitude rating to acts of violence."
>
  <p>
    Intentional acts of violence can create mass-casualty incidents, disrupt
    public services, restrict access to affected areas, and require a
    coordinated public-safety response.
  </p>
</DisasterCard>
 
---
### Cyber Attack
 
<DisasterCard
  id="cyber-attack"
  title="Cyber Attack"
  image="/img/cyber-attack.png"
  exampleLabel="Assessment Note"
  exampleTitle="Critical Infrastructure Dependence"
  exampleText="The regional assessment emphasizes the importance of resilient infrastructure but does not provide a separate Provo cyber-attack probability or severity rating."
>
  <p>
    Cyber attacks can disrupt computer networks, communications, financial
    systems, utilities, public services, and other technology-dependent
    infrastructure.
  </p>
</DisasterCard>
 
---
### Water Contamination
 
<DisasterCard
  id="water-contamination"
  title="Water Contamination"
  image="/img/water-contamination.png"
  exampleLabel="Local Consideration"
  exampleTitle="Protecting Springs, Wells, and Water Infrastructure"
  exampleText="Provo relies on local springs and wells for portions of its water supply. The regional plan treats water infrastructure and long-term water reliability as important resilience concerns."
>
  <p>
    Water contamination can result from infrastructure failures, hazardous
    substances, microorganisms, runoff, or other events that make a water
    supply unsafe or require treatment and public notification.
  </p>
</DisasterCard>
 
---
### Poor Air Quality
 
<DisasterCard
  id="air-quality"
  title="Poor Air Quality"
  image="/img/air-quality.png"
  likelihood="High"
  likelihoodLevel={4}
  magnitude="Critical"
  magnitudeLevel={3}
  exampleLabel="Recurring Local Example"
  exampleTitle="Wasatch Front Inversions and Wildfire Smoke"
  exampleText="Utah County periodically experiences poor air quality from winter inversions and wildfire smoke, both of which can trap or introduce harmful pollutants in the valley."
>
  <p>
    Poor air quality can result from emissions produced by vehicles, homes,
    industry, and wildfire. Wasatch Front geography can contribute to
    inversions that trap pollutants near the valley floor.
  </p>
 
  <p>
    The regional assessment rates poor air quality as having a high
    probability in Utah County and a critical potential severity.
  </p>
</DisasterCard>
 
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

<div style={{ textAlign: 'center', marginTop: '1rem' }}>
  <a
    href={useBaseUrl('/docs/resources/emergency-notification-systems/')}
    className="button button--danger button--lg"
  >
    Emergency Notification Systems
  </a>
</div>

:::
 
---
 
*Disaster and mitigation information on this page is based primarily on the **[2022 Pre-Disaster Mitigation Plan](https://magutah.gov/static/files/Planning/2022%20Pre-Disaster%20Mitigation%20Plan%20for%20Summit%20Utah%20and%20Wasatch%20Counties%20with%20April%202022%20Revisions.pdf)***
