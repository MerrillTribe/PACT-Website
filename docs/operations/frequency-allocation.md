---
sidebar_position: 1
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import { Download } from 'lucide-react';

# PACT Frequencies

The following frequencies have been coordinated and allocated for PACT communications. PACT members should program these frequencies into their radio(s). District frequencies are used to share situational information and support district-level communication efforts as directed.

<div style={{
  display: 'flex',
  justifyContent: 'center',
  margin: '1.5rem 0 2rem',
}}>
  <a
    className="button button--primary button--lg"
    href={useBaseUrl('/files/pact-map-v1-2.pdf')}
    download
  >
    <Download
      size={18}
      strokeWidth={2}
      aria-hidden="true"
    />
    <span>Download PACT Frequency Map</span>
  </a>
</div>

## PACT Simplex Frequencies

<table>
<thead>
<tr>
<th>Designation</th>
<th>Frequency (MHz)</th>
<th>Purpose</th>
</tr>
</thead>
<tbody>

<tr style={{backgroundColor: '#ffffff', borderLeft: '6px solid #6b7280'}}>
<td><strong style={{color: '#374151'}}>Net Control</strong></td>
<td><strong>439.800</strong></td>
<td>Provo City EOC</td>
</tr>

<tr style={{backgroundColor: '#f0fdf4', borderLeft: '6px solid #86efac'}}>
<td><strong style={{color: '#166534'}}>North District</strong><br /><small>District 1</small></td>
<td><strong>439.850</strong></td>
<td>Inner District Communications</td>
</tr>

<tr style={{backgroundColor: '#fefce8', borderLeft: '6px solid #fde68a'}}>
<td><strong style={{color: '#854d0e'}}>East District</strong><br /><small>District 2</small></td>
<td><strong>439.925</strong></td>
<td>Inner District Communications</td>
</tr>

<tr style={{backgroundColor: '#faf5ff', borderLeft: '6px solid #d8b4fe'}}>
<td><strong style={{color: '#6b21a8'}}>West District</strong><br /><small>District 3</small></td>
<td><strong>439.825</strong></td>
<td>Inner District Communications</td>
</tr>

<tr style={{backgroundColor: '#fef2f2', borderLeft: '6px solid #fca5a5'}}>
<td><strong style={{color: '#7f1d1d'}}>Northwest District</strong><br /><small>District 4</small></td>
<td><strong>439.875</strong></td>
<td>Inner District Communications</td>
</tr>

<tr style={{backgroundColor: '#eff6ff', borderLeft: '6px solid #93c5fd'}}>
<td><strong style={{color: '#1e3a8a'}}>Central District</strong><br /><small>District 5</small></td>
<td><strong>439.000</strong></td>
<td>Inner District Communications</td>
</tr>

</tbody>
</table>

## Provo City Repeater

The Provo City Repeater is available for all PACT operations, trainings, and events.

<table>
<thead>
<tr>
<th>Output (RX)</th>
<th>Input (TX)</th>
<th>CTCSS</th>
<th>Location</th>
</tr>
</thead>
<tbody>

<tr style={{backgroundColor: '#eff6ff', borderLeft: '6px solid #2050a0'}}>
<td><strong>443.575 MHz</strong></td>
<td><strong>448.575 MHz</strong></td>
<td><strong>123.0 Hz</strong></td>
<td>Provo City Hall</td>
</tr>

</tbody>
</table>

---

## PACE Plan

PACT uses a **Primary, Alternate, Contingency, and Emergency (PACE) Plan** to maintain reliable communications between field operators and the Provo City Emergency Operations Center (EOC). The plan establishes multiple communication pathways to ensure critical information can continue to reach the EOC when primary systems become unavailable, congested, or ineffective.

Each level provides a progressively different method of communication:

- **Primary (P)** — The preferred communication method used during normal PACT operations.
- **Alternate (A)** — A secondary method used when the primary pathway is unavailable or insufficient.
- **Contingency (C)** — An additional communication pathway used when primary and alternate methods cannot adequately support operations.
- **Emergency (E)** — A last-resort method used when other communication pathways are unavailable.

<div className="pace-plan">

  <div className="pace-plan-header">
    <h3>PACT PACE Plan</h3>
  </div>

  <div className="pace-grid">

    <div className="pace-card">
      <div className="pace-letter">P</div>
      <div className="pace-name">Primary</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">Communication Method</span>
          <strong>439.800 MHz Simplex</strong>
        </div>
        <div className="pace-detail">
          <span className="pace-detail-label">Information Transmitted</span>
          <strong>N-0 Form</strong>
        </div>
      </div>

      <p>
        Primary pathway for field reports and communications
        with the EOC.
      </p>
    </div>

    <div className="pace-card">
      <div className="pace-letter">A</div>
      <div className="pace-name">Alternate</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">Communication Method</span>
          <strong>Provo City Repeater</strong>
        </div>
        <div className="pace-detail">
          <span className="pace-detail-label">Information Transmitted</span>
          <strong>N-0 Form</strong>
        </div>
      </div>

      <p>
        Secondary pathway for field reports and communications
        with the EOC.
      </p>
    </div>

    <div className="pace-card">
      <div className="pace-letter">C</div>
      <div className="pace-name">Contingency</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">Communication Method</span>
          <strong>MANET + ATAK</strong>
        </div>
        <div className="pace-detail">
          <span className="pace-detail-label">Information Transmitted</span>
          <strong>WASP Reports</strong>
        </div>
      </div>

      <p>
        Parallel pathway for high-volume, location-based
        reporting during large-scale incidents.
      </p>
    </div>

    <div className="pace-card">
      <div className="pace-letter">E</div>
      <div className="pace-name">Emergency</div>

      <div className="pace-details">
        <div className="pace-detail">
          <span className="pace-detail-label">Communication Method</span>
          <strong>Hand Delivery</strong>
        </div>
        <div className="pace-detail">
          <span className="pace-detail-label">Information Transmitted</span>
          <strong>N-0 Form</strong>
        </div>
      </div>

      <p>
        Physical delivery of reports when electronic
        communication pathways are unavailable.
      </p>
    </div>

  </div>

</div>
