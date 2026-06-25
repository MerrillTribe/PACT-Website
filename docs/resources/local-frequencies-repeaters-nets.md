---
sidebar_position: 1
draft: true
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import RepeaterJumpCards from '@site/src/components/JumpCards';

# Local Nets, Repeaters, & Frequencies

:::warning DRAFT PAGE
**THIS WEBPAGE IS CURRENTLY BEING REVIEWED FOR ACCURACY**
:::

## PACT Standard Load

The PACT Standard Load is a baseline set of frequencies and repeater channels programmed into member radios to support interoperable communications during nets, deployments, and emergency operations. Maintaining a standardized radio configuration helps ensure operators can communicate efficiently and transition between assignments with minimal confusion.

<div className="button-center">
  <a
    className="button button--lg button--cta"
  href={useBaseUrl('/files/pact-standard-load.xlsx')}
  download
  >
    DOWNLOAD PACT STANDARD LOAD (VER 1.0)
  </a>
</div>

---

## Local Nets

| Net | Day | Time | RX (MHz) | TX (MHz) | CTCSS |
|---|---|---|---:|---:|---:|
| **UVARC Family Net** | Sunday | 3:30 PM | 146.780 | 146.180 | 100.0 |
| **UVARC Maker Net** | Monday | 7:00 PM | 146.780 | 146.180 | 100.0 |
| **Jackson Hole Net** | Monday | 8:00 PM | 146.760 | 146.160 | 100.0 |
| **UCARES Simplex Net** | 2nd Tuesday | 9:00 PM | 147.340 | 147.340 | None |
| **UCARES Net** | Tuesday | 9:00 PM | 147.340<br />145.230<br />447.400<br />147.280<br />145.470 | 147.940<br />144.630<br />452.400<br />147.880<br />144.870 | 100.0<br />131.8<br />123.0<br />141.3<br />100.0 |
| **UVARC Ladies' Net** | Tuesday | 7:00 PM | 146.780 | 146.180 | 100.0 |
| **PACT Net** | Wednesday | 8:30 PM | 439.800 | 439.800 | — |
| **76ers Social Net** | Wednesday | 7:00 PM | 146.760 | 146.160 | 100.0 |
| **UVARC HF Net** | Wednesday | 9:00 PM | 28.345 | 28.345 | — |
| **UVARC New Ham Net** | Thursday | 7:00 PM | 146.780 | 146.180 | 100.0 |
| **UVARC CERT Net** | Thursday | 8:00 PM | 146.780 | 146.180 | 100.0 |
| **BARC Net** | Thursday | 9:00 PM | 145.330 | 144.730 | 100.0 |
| **UVARC 6-meter Net** | Friday | 8:00 PM | 50.140 SSB | 50.140 SSB | — |
| **UVARC Family History Net** | Saturday | 8:00 PM | 146.780 | 146.180 | 100.0 |

## Local Repeaters

This page lists local and regional amateur radio repeaters from the **UVHFS** repeater list. Frequencies are organized by band to make the list easier to scan in the field.

:::tip Programming Note
In this table, **RX Freq** is the frequency your radio listens to (uplink), and **TX Freq** is the frequency your radio transmits on (downlink). Program the listed **CTCSS** tone when one is provided.
:::

<RepeaterJumpCards
  cards={[
    { id: 'six-meter-repeaters', title: '6-Meter', subtitle: '3 repeaters' },
    { id: 'two-meter-repeaters', title: '2-Meter', subtitle: '132 repeaters' },
    { id: 'one-twenty-five-meter-repeaters', title: '1.25-Meter', subtitle: '21 repeaters' },
    { id: 'seventy-cm-repeaters', title: '70-cm', subtitle: '204 repeaters' },
    { id: 'thirty-three-cm-repeaters', title: '33-cm', subtitle: '5 repeaters' },
    { id: 'twenty-three-cm-repeaters', title: '23-cm', subtitle: '8 repeaters' },
  ]}
/>

<style>{`
.repeater-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.repeater-summary-card {
  border: 1px solid var(--ifm-color-emphasis-300);
  border-left: 6px solid var(--ifm-color-primary);
  border-radius: 12px;
  padding: 1rem;
  background: var(--ifm-background-surface-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);

  display: block;
  text-decoration: none;
  color: inherit;
  transition: all 0.15s ease;
}

.repeater-summary-card:hover {
  text-decoration: none;
  color: inherit;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
}

.repeater-summary-card strong {
  display: block;
  color: var(--ifm-color-primary-darkest);
  font-size: 1rem;
}

.repeater-summary-card span {
  display: block;
  margin-top: 0.25rem;
  color: var(--ifm-color-emphasis-700);
}

.repeater-section {
  scroll-margin-top: 90px;
  margin: 1rem 0;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 12px;
  background: var(--ifm-background-surface-color);
  overflow: hidden;
}

.repeater-section summary {
  cursor: pointer;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--ifm-color-primary-darkest);
  background: var(--ifm-color-emphasis-100);
}

.repeater-table-wrap {
  overflow-x: auto;
  padding: 0 1rem 1rem;
}

.repeater-table-wrap table {
  min-width: 900px;
  width: 100%;
}

.repeater-table-wrap th {
  white-space: nowrap;
}

.repeater-table-wrap td:nth-child(1),
.repeater-table-wrap td:nth-child(2),
.repeater-table-wrap td:nth-child(9) {
  font-family: monospace;
  white-space: nowrap;
}
`}</style>

<details id="six-meter-repeaters" className="repeater-section">
<summary>6-Meter Repeater List (3)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Area | Site Name | Call | Sponsor | CTCSS | Links |
|---:|---:|---|---|---|---|---|---:|---|
| 53.010 | 52.010 | Farmington | WasFrnt | Sheppard Peak | K7DAV | DCARC | 141.3 | — |
| 53.150 | 52.150 | Salt Lake | WasFrnt | Farnsworth (FOX 13) | WA7VHF | UVHFS | 146.2 | 448.160 |
| 53.210 | 52.210 | Statewide | Statewide | Statewide | (Shared) | Non Prot | — | — |

</div>
</details>

<details id="two-meter-repeaters" className="repeater-section">
<summary>2-Meter Repeater List (132)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Area | Site Name | Call | Sponsor | CTCSS | Links |
|---:|---:|---|---|---|---|---|---:|---|
| 145.113 | 144.513 | Ogden | WasFrnt | Ogden Sheriff's Office | KE7EGG | — | — | — |
| 145.125 | 144.525 | Salt Lake | WasFrnt | Farnsworth Peak | KF6RAL | — | — | D-Star |
| 145.138 | 144.538 | Davis County | WasFrnt | Bountiful Rifle Range | KF7ZNS | DCARES | — | D-Star |
| 145.150 | 144.550 | Logan | North | WA7KMF QTH | AC7O | — | — | D-Star |
| 145.150 | 144.550 | Murray | WasFrnt | IHC Hospital Murray | KO7SLC | — | — | D-Star |
| 145.150 | 144.550 | Toquerville | Southwest | Hurricane Mesa | KF7YIX | Washington Co. | — | D-Star |
| 145.150 | 144.550 | Sterling | Central | Antelope Valley | K7BSK | D-Star | — | D-Star |
| 145.163 | 144.563 | Morgan | WasFrnt | Morgan Search & Rescue | KM7ARC | — | — | D-Star |
| 145.175 | 144.575 | Sunnyside | Price | Bruin Peak | K7SDC | SDARC | — | SDARC |
| 145.175 | 144.575 | Tremonton | WasFrnt | Riverside | N7RDS | NUTS | — | D-Star |
| 145.190 | 144.590 | Salt Lake | WasFrnt | Intermountain Ridge | W6IHC | IHC | 123.0 | — |
| 145.210 | 144.610 | Sedgwick, ID | North | Sedgwick | WA7VHF | UVHFS | 100.0 | 447.225 |
| 145.230 | 144.630 | Provo | WasFrnt | Lake Mountain (South) | K7UCS | UCARES | 131.8 | — |
| 145.250 | 144.650 | Ogden | WasFrnt | Weber State University | KD7FDH | WSUARC | 123.0 | — |
| 145.250 | 144.650 | Sundance | WasFrnt | Sundance | K7UVA | UVARC | 100.0 | — |
| 145.270 | 144.670 | Brighton | WasFrnt | Scotts Hill | K7JL | — | 100.0 | Intertie |
| 145.270 | 144.670 | Burley, ID | Idaho Linked | Mount Harrison | WA7FDR | — | 100.0 | — |
| 145.270 | 144.670 | Levan Peak | WasFrnt | Levan Peak State Site | K7JL | — | 103.5 | Intertie |
| 145.290 | 144.690 | Brigham City | WasFrnt | Brigham City | K7UB | GSARC | 123.0 | 448.300 |
| 145.290 | 144.690 | Sterling | Central | Antelope Valley | K7WWA | — | 131.8 | — |
| 145.310 | 144.710 | Red Spur | North | Red Spur | WA7KMF | BARC | 103.5 | 449.625 |
| 145.310 | 144.710 | Scofield | Price | Ford Ridge | K7SDC | SDARC | 88.5 | 147.320 |
| 145.330 | 144.730 | Provo | WasFrnt | BYU Campus | N7BYU | BYU Amateur Radio Club | 100.0 | EchoLink E96806 |

</div>
</details>

<details id="one-twenty-five-meter-repeaters" className="repeater-section">
<summary>1.25-Meter Repeater List (21)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Area | Site Name | Call | Sponsor | CTCSS | Links |
|---:|---:|---|---|---|---|---|---:|---|
| 223.400 | 221.800 | Payson | WasFrnt | Payson | NV7V | — | — | — |
| 223.880 | 222.280 | Pleasant Grove | WasFrnt | Pleasant Grove | KB7YOT | — | 167.9 | — |
| 223.920 | 222.320 | Ephraim | Central | Skyline Drive | WX7Y | — | 88.5 | — |
| 223.940 | 222.340 | Monticello | Southeast | Abajo Peak | K7QEQ | GMRA | — | — |
| 223.960 | 222.360 | Murray | WasFrnt | Murray | N7MRY | MARC | 103.5 | — |
| 224.420 | 222.820 | American Fork | WasFrnt | Lake Mountain (North FM Site) | W7WJC | UCRC | 156.7 | — |
| 224.540 | 222.940 | South Jordan | WasFrnt | South Jordan | W7RLR | — | 103.5 | — |
| 224.560 | 222.960 | Lehi | WasFrnt | Lake Mountain (North) | K7UVA | UVARC | 100.0 | 448.200 |
| 224.600 | 223.000 | Draper | WasFrnt | Draper | W7RLR | UHDARC | 103.5 | — |
| 224.640 | 223.040 | Sandy | WasFrnt | KA7EGC QTH | KA7EGC | — | 156.7 | — |
| 224.660 | 223.060 | South Jordan | WasFrnt | South Jordan | KA7EGC | — | 156.7 | — |
| 224.700 | 223.100 | Provo | WasFrnt | Lake Mountain | KE7AU | — | 107.2 | — |
| 224.740 | 223.140 | Ivins | Southwest | Ivins QTH | KF7KGN | — | 100.0 | — |
| 224.740 | 223.140 | Lehi | WasFrnt | Lehi QTH | KF7KGN | — | 100.0 | — |
| 224.780 | 223.180 | Salt Lake City | WasFrnt | Jordan Valley Hospital | KD0J | — | 100.0 | — |
| 224.820 | 223.220 | Salt Lake City | WasFrnt | Ensign Peak | WB6CDN | IREAN | 167.9 | IREAN |
| 224.860 | 223.260 | Statewide | Statewide | Statewide | (Shared) | Non Prot | — | — |
| 224.880 | 223.280 | Orem | WasFrnt | Orem (N7IMF QTH) | N7IMF | UHDARC | 156.7 | — |
| 224.900 | 223.300 | South Jordan | WasFrnt | South Jordan | KA7EGC | UHDARC | 156.7 | — |
| 224.960 | 223.360 | Syracuse | WasFrnt | Syracuse | NJ7J | — | — | — |
| 224.980 | 223.380 | Scofield | Price | Boardinghouse Ridge | WX7Y | SDARC | 88.5 | — |

</div>
</details>

<details id="seventy-cm-repeaters" className="repeater-section">
<summary>70-cm Repeater List (204)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Area | Site Name | Call | Sponsor | CTCSS | Links |
|---:|---:|---|---|---|---|---|---|---|
| 433.600 | 428.600 | Nelson Peak | WasFrnt | Nelson Peak | WA7GIE | — | 100.0 | I5670 |
| 445.0875 | 440.0875 | Riverton | WasFrnt | KK7GKG | KK7GKG | — | — | DMR |
| 445.825 | 440.825 | Brigham City | WasFrnt | Box Elder County | W7DEE | Box Elder Co | 100.0 | — |
| 445.925 | 440.925 | Brigham City | WasFrnt | Box Elder County | W7DEE | Box Elder Co | 100.0 | — |
| 446.250 | 441.250 | Herriman | WasFrnt | Herriman High School | N7HRC | — | 100.0 | — |
| 446.600 | 441.600 | Saratoga Springs | WasFrnt | Saratoga Springs | WB7TUJ | — | 77.0 | — |
| 446.700 | 441.700 | Bluffdale | WasFrnt | Williams Peak | KG7NFE | — | 100.0 | — |
| 446.750 | 441.750 | Saratoga Springs | WasFrnt | 2100 North Redwood Road Saratoga | KG7QWU | — | — | — |
| 446.775 | 441.775 | Ivins | WasFrnt | Ivins QTH | KF7KGN | — | 100.0 | — |
| 446.775 | 441.775 | Point of the Mountain | WasFrnt | Point of the Mountain | KF7KGN | — | 100.0 | — |
| 446.950 | 441.950 | Highland | WasFrnt | Highland Fire Station | K7BUZ | — | 100.0 | — |
| 447.000 | 442.000 | Draper | WasFrnt | Draper | KE7QGT | — | 88.5 | — |
| 447.000 | 442.000 | Logan | North | Logan | NU7TS | DMR-Utah | — | IRLP |
| 447.000 | 442.000 | Payson | WasFrnt | Payson | NV7V | — | — | — |
| 447.025 | 442.025 | Helper | Price | Star Point | K7SDC | N7TAG | 88.5 | — |
| 447.025 | 442.025 | Salt Lake | WasFrnt | W0HU QTH | W0HU | — | 100.0 | — |
| 447.050 | 442.050 | Layton | WasFrnt | AH2S QTH | AH2S | — | 114.8 | — |
| 447.050 | 442.050 | Saratoga Springs | WasFrnt | KC7WSU QTH | KC7WST | DMR-Utah | 100.0 | I3205 |
| 447.050 | 442.050 | Veyo | Southwest | KB6KKW QTH | KB6KKW | — | — | — |
| 447.075 | 442.075 | Woodland Hills | WasFrnt | Salem | N7FQ | — | 131.8 | — |
| 447.075 | 442.075 | West Point | WasFrnt | West Point City Bldg | NA7RF | — | DCS051 | E401462 |
| 447.100 | 442.100 | Draper | WasFrnt | Sun Crest Fire Station #122 | KG7EGM | DHRA | 100.0 | — |
| 447.100 | 442.100 | Monticello | Southeast | Abajo Peak | N0NHJ | GMRA | 107.2 | GMRA |
| 447.125 | 442.125 | Cedar Mtn | Price | Cedar Mtn | K7YI | — | 100.0 | Cactus |
| 447.125 | 442.125 | Payson | WasFrnt | Mtn View Hospital | K7UCA | UCARES | 100.0 | — |
| 447.125 | 442.125 | Riverside | WasFrnt | Riverside | NU7TS | DMR-Utah | — | — |
| 447.150 | 442.150 | Clearfield | WasFrnt | Clearfield | KR7K | — | 114.8 | — |
| 447.150 | 442.150 | Salina | Central | Salina Canyon | KD7YE | WB7REL | — | — |
| 447.175 | 442.175 | Salt Lake | WasFrnt | Salt Lake | W7SAR | — | — | — |
| 447.200 | 442.200 | Antelope Is. | WasFrnt | Antelope Is. | K7DAV | DCARC | 127.3 | — |
| 447.225 | 442.225 | Malad | WasFrnt | Malad Radio Site | WA7VHF | UVHFS | 100.0 | — |
| 447.250 | 442.250 | Salt Lake | WasFrnt | Intermountain Medical Center | KF7JBA | — | 100.0 | — |
| 447.275 | 442.275 | Orem | WasFrnt | Timpanogos Hospital 750 W 800 N | K7UCA | UCARES | 100.0 | — |
| 447.300 | 442.300 | Woodland Hills | WasFrnt | Woodland Hills | WB7RPF | — | 77.0 | — |
| 447.300 | 442.300 | Tooele | WasFrnt | Tooele QTH | K7BU | — | 100.0 | — |
| 447.325 | 442.325 | Springville | WasFrnt | Springville | N7KYY | — | 114.8 | — |
| 447.350 | 442.350 | Promontory | WasFrnt | Promontory | WA7KMF | DMR | — | CC1 |
| 447.350 | 442.350 | Gunnison | Central | N7RVS QTH | N7RVS | — | 88.5 | — |
| 447.350 | 442.350 | St. George | Southwest | W7CRC QTH | W7CRC | DMR | — | — |
| 447.3625 | 442.3625 | Tooele | WasFrnt | N6RBV | N6RBV | — | — | — |
| 447.375 | 442.375 | Bountiful | WasFrnt | AC7H QTH | K7BBR | DMR | — | — |
| 447.375 | 442.375 | Logan | North | 1990 Canyon Ridge Drive | AC7JT | NUTS | — | — |
| 447.400 | 442.400 | Spanish Fork | WasFrnt | Teat Peak | K7UCS | — | 123.0 | — |
| 447.400 | 442.400 | Monticello | Southeast | Abajo Peak | K7QEQ | GMRA | — | Cactus |
| 447.425 | 442.425 | Saratoga Springs | WasFrnt | KE7NHU QTH | KE7NHU | — | 100.0 | — |
| 447.450 | 442.450 | Monroe | Central | Monroe Peak | W7DHH | Skyline | 114.8 | 433.650 I3576 |
| 447.450 | 442.450 | Sandy | WasFrnt | Sandy 11th Wo 13th E | N6DVZ | — | 110.9 | — |
| 447.475 | 442.475 | Riverton | WasFrnt | QTH | KK7GKG | — | 100.0 | — |
| 447.525 | 442.525 | Salt Lake | WasFrnt | Bacchus | K2NWS | — | 107.2 | NWS |
| 447.575 | 442.575 | All Utah | Statewide | Statewide | WA7GTU | Statewide | — | — |
| 447.575 | 442.575 | Kearns | WasFrnt | 4814 S 4620 W Kearns | K7LNP | — | 114.8 | — |
| 447.600 | 442.600 | Lehi | WasFrnt | Point of the Mountain | KD7RBR | — | 162.2 | I3065 |
| 447.625 | 442.625 | Castledale | Price | Horn Mtn. | K7YI | — | 100.0 | Cactus |
| 447.625 | 442.625 | Sandy | WasFrnt | 1300 East 9400 South Sandy | KG7FMP | — | 100.0 | — |
| 447.650 | 442.650 | Bountiful | WasFrnt | North Salt Lake Sewer Plant | K7DAV | DCARC | 123.0 | — |
| 447.650 | 442.650 | Paris, ID | North | 50 North Main St | AG7BL | BEARS | 123.0 | — |
| 447.650 | 442.650 | Moab | Southeast | Willow | N2KNK | — | 151.4 | — |
| 447.675 | 442.675 | Saratoga Springs | WasFrnt | AC7DU QTH Saratoga Springs | AC7DU | — | 100.0 | — |
| 447.700 | 442.700 | Castledale | Price | Horn Mtn. | WX7Y | — | 123.0 | I3280 |
| 447.700 | 442.700 | Salt Lake | WasFrnt | South Salt Lake Fire Station 43 | KF7YXL | — | 100.0 | — |
| 447.725 | 442.725 | Highland | WasFrnt | KX7VC QTH | KX7VC | — | 167.9 | A29864 |
| 447.750 | 442.750 | West Jordan | WasFrnt | West Jordan | WD7P | — | 100.0 | W |
| 447.775 | 442.775 | Powder Mtn | Northeast | Powder Mtn | KE7EGG | WCSO | 123.0 | — |
| 447.8125 | 442.8125 | Tooele | WasFrnt | South Mtn | N6DVZ | — | — | — |
| 447.850 | 442.850 | Sterling | Central | West of Sterling Antelope Valley | KB7K | — | 131.8 | — |
| 447.875 | 442.875 | Draper | WasFrnt | Draper QTH | W7RLR | HDARC | 100.0 | — |
| 447.900 | 442.900 | Salt Lake | WasFrnt | Curry Peak | WD7SL | OLRC SoJdn | 114.8 | — |
| 447.925 | 442.925 | Tremonton | WasFrnt | Riverside | N7RDS | NUTS | — | D-Star |
| 447.9375 | 442.9375 | Ensign Peak | WasFrnt | Ensign Peak | N6DVZ | DMR-Utah | — | DMR |
| 447.950 | 442.950 | Murray | WasFrnt | IHC Hospital Murray | KO7SLC | — | — | D-Star |
| 447.950 | 442.950 | Ogden | WasFrnt | Ogden Sheriff Office | KE7EGG | D-Star | — | D-Star |
| 447.950 | 442.950 | Sterling | Central | West of Sterling Antelope Valley | K7BSK | D-Star | — | D-Star |
| 447.950 | 442.950 | Toquerville | Southwest | Hurricane Mesa | KF7YIX | Washington Co | — | D-Star |
| 447.9625 | 442.9625 | Morgan | WasFrnt | Morgan Search & Rescue Bldg | KM7ARC | — | — | D-Star |
| 447.9625 | 442.9625 | Salt Lake | WasFrnt | Butterfield Peak | W7XDX | — | — | — |
| 447.975 | 442.975 | Davis County | WasFrnt | Bountiful Rifle Range | KF7ZNS | DCARES | — | D-Star |
| 447.975 | 442.975 | Provo | WasFrnt | KD7BBC QTH | NT3ST | D-Star | — | D-Star |
| 447.975 | 442.975 | Logan | North | WA7KMF QTH | AC7O | D-Star | — | D-Star |
| 447.9875 | 442.9875 | Malad ID | North | Pumice Plant south of Malad | KI7WQR | DMR | — | DMR |
| 448.000 | 443.000 | Salt Lake | WasFrnt | Capital | W7DES | — | 100.0 | — |
| 448.025 | 443.025 | Orem | WasFrnt | Orem QTH | KB7M | — | 100.0 | — |
| 448.050 | 443.050 | St. George | Southwest | St. George QTH | N4NZA | — | — | DMR |
| 448.050 | 443.050 | Salt Lake | WasFrnt | 322 No 2200 W Bldg C SLC | K7CSW | SLPEAKARC | 100.0 | — |
| 448.075 | 443.075 | Castledale | Price | Cedar Mtn. | K2NWS | D-Star | — | D-Star |
| 448.075 | 443.075 | Salt Lake | WasFrnt | Farnsworth Peak | KF6RAL | D-Star | — | D-Star |
| 448.100 | 443.100 | Cedar City | Southwest | Cedar City | N7DZP | — | — | — |
| 448.100 | 443.100 | U of U Hospital | WasFrnt | U of U Hospital | KD7NX | — | 114.8 | — |
| 448.125 | 443.125 | Murray | WasFrnt | Murray | N7HIW | — | 100.0 | — |
| 448.150 | 443.150 | St. George | Southwest | Utah Hill | K7BDP | — | — | Fusion |
| 448.150 | 443.150 | Salt Lake | WasFrnt | Farnsworth Peak (KSTU FOX 13) | WA7VHF | UVHFS | 146.2 | 53.150 |
| 448.175 | 443.175 | Salt Lake | WasFrnt | Ensign Peak | N7HIW | — | 100.0 | — |
| 448.200 | 443.200 | Fish Haven | North | Fish Haven | K7OGM | — | 100.0 | — |
| 448.200 | 443.200 | Lehi | WasFrnt | Lake Mountain (North) | K7UVA | UVARC | 100.0 | 146.780 |
| 448.225 | 443.225 | American Fork Canyon | WasFrnt | American Fork Canyon | K7UVA | — | 100.0 | — |
| 448.225 | 443.225 | West Valley | WasFrnt | Lehi | KF7KGN | — | 100.0 | — |
| 448.250 | 443.250 | Payson | WasFrnt | West Mtn | N6QWU | — | 100.0 | — |
| 448.275 | 443.275 | Manti | Central | Barton Pk. | K7BSK | Skyline | 114.8 | I3576 |
| 448.300 | 443.300 | Price | Price | Wood Hill | K7GX | — | 88.5 | I3270 E64264 |
| 448.300 | 443.300 | ATK Plant 3 | North | Thiokol Blue Springs Hill | K7UB | GSARC | 123.0 | 145.430 |
| 448.325 | 443.325 | Provo | WasFrnt | Lake Mountain (South) | K7UCS | UCARES | 103.5 | — |
| 448.350 | 443.350 | Draper | WasFrnt | South Mtn | N7GAD | — | — | — |
| 448.375 | 443.375 | Sandy | WasFrnt | Sandy QTH | W7ROY | — | 100.0 | — |
| 448.375 | 443.375 | Wellington | Price | Maud Mine near Wellington | KJ7KCN | — | DCS825 | — |
| 448.400 | 443.400 | Cedar City | Southwest | Iron Mtn. | KG7OOW | — | — | — |
| 448.400 | 443.400 | Salt Lake | WasFrnt | Intermountain Ridge | W6IHC | IHC | — | — |
| 448.450 | 443.450 | Bear Lake | North | Bear Lake | K7OGM | — | 123.0 | — |
| 448.450 | 443.450 | Salt Lake | WasFrnt | Ensign Peak | KC7IIB | SLCOARES | 100.0 | — |
| 448.475 | 443.475 | Park City | WasFrnt | Murdock Peak | KB7HAF | — | — | — |
| 448.525 | 443.525 | Salt Lake | WasFrnt | Ensign Peak | K7XRD | SLCARC | 100.0 | — |
| 448.550 | 443.550 | Castledale | Price | Cedar Mtn | WX7Y | — | 88.5 | — |
| 448.550 | 443.550 | Salt Lake | WasFrnt | IHC - West Valley Lake Park Bl | W6IHC | — | 100.0 | — |
| 448.575 | 443.575 | Ogden | WasFrnt | Little Mtn | W7SU | OARC | 100.0 | — |
| 448.575 | 443.575 | Marysvale | Central | Mt Edna | N7IOD | WB7REL | 131.8 | — |
| 448.600 | 443.600 | Page AZ | South | Navajo Mtn | WA7VHF | UVHFS | 100.0 | 146.800 |
| 448.600 | 443.600 | Ogden | WasFrnt | Mt Ogden | KE7EGG | OARC | 123.0 | — |
| 448.625 | 443.625 | Salt Lake | WasFrnt | Flat Top | WA7GIE | DARS | — | Cactus |
| 448.650 | 443.650 | Cedar City | Southwest | Blowhard | KB6BOB | DARS | — | Cactus |
| 448.650 | 443.650 | Coalville | WasFrnt | Lewis Peak | WA7GIE | DARS | — | — |
| 448.675 | 443.675 | Milford | Southwest | Frisco Peak | K7JL | DARS | — | Cactus |
| 448.675 | 443.675 | Wendover | WasFrnt | Wendover Peak | WA7GIE | DARS | — | Cactus |
| 448.700 | 443.700 | Lake Mountain | WasFrnt | Lake Mountain | N7IMF | UHDARC | 114.8 | — |
| 448.725 | 443.725 | St. George | Southwest | Scrub Peak | WB6TNP | — | — | — |
| 448.750 | 443.750 | Kamas | WasFrnt | QTH KD7MCI | WA7GIE | DARS | — | Cactus IRLP |
| 448.750 | 443.750 | Page AZ | South | Navajo Mtn | NA7DB | — | — | — |
| 448.750 | 443.750 | Preston ID | North | Hill top 5 mi NW Preston | KE7EYY | — | 88.5 | — |
| 448.775 | 443.775 | Ogden | WasFrnt | Promontory | KE7EGG | WCSO | 123.0 | — |
| 448.800 | 443.800 | West Valley | WasFrnt | West Valley Fire Station | K2WVC | K2MJM | 100.0 | — |
| 448.800 | 443.800 | Cedar City | Southwest | Iron Mtn. | K7JH | RCARC | 100.0 | — |
| 448.800 | 443.800 | Evanston | Northeast | Bear River | K6JR | — | 131.8 | Allstar |
| 448.825 | 443.825 | Bluffdale | WasFrnt | Bluffdale | WA7VHF | UVHFS | 100.0 | — |
| 448.850 | 443.850 | Salt Lake | WasFrnt | Oquirrhs | KD7PB | — | — | — |
| 448.875 | 443.875 | Lehi | WasFrnt | WB7RPF QTH | KG7QWU | ERC | 100.0 | — |
| 448.900 | 443.900 | Provo | Provo | KF7OY QTH | KF7OY | — | — | — |
| 448.925 | 443.925 | Mendon | North | N7PKI QTH | N7PKI | — | 100.0 | — |
| 448.925 | 443.925 | Lehi | WasFrnt | Lehi City Offices | KI7USB | — | 100.0 | — |
| 448.950 | 443.950 | Malad ID, ID | North | 4000 W Samaria Rd | K7RCN | — | 77.0 | — |
| 448.950 | 443.950 | Payson | WasFrnt | West Mtn | WA7FFM | — | — | — |
| 448.975 | 443.975 | Bear Lake | North | Laketown Site | K7OGM | DARS | — | Cactus |
| 448.975 | 443.975 | Vernon | West | Black Crook | WA7GIE | DARS | — | Cactus |
| 449.000 | 444.000 | Salt Lake | WasFrnt | Nelson Peak | WA7GIE | DARS | — | Cactus |
| 449.050 | 444.050 | Sunnyside | Price | Bruin Peak | K7SDC | SDARC | 88.5 | 147.320 I3270 E64264 |
| 449.075 | 444.075 | Ogden | WasFrnt | 1620 Swan Street | KW7TES | — | DCS114 | — |
| 449.075 | 444.075 | Provo BYU | WasFrnt | BYU | N7BYU | KI7TD | 167.9 | E |
| 449.100 | 444.100 | Kanab | Southwest | Kanab TV site | N7YSE | — | 100.0 | — |
| 449.100 | 444.100 | Moab | Southeast | Bald Mesa | K7QEQ | GMRA | — | Cactus |
| 449.150 | 444.150 | Farnsworth Peak | WasFrnt | Farnsworth Peak | K7JL | — | 100.0 | — |
| 449.175 | 444.175 | Draper | WasFrnt | Point of the Mountain | KA7EGC | — | 131.8 | 447.875 I3065 |
| 449.200 | 444.200 | Burley ID, ID | North | MT. Harrison | WA7UHW | — | — | — |
| 449.200 | 444.200 | Provo | WasFrnt | Lake Mountain Citadel site | WA7FFM | — | — | — |
| 449.225 | 444.225 | Millcreek | WasFrnt | Millcreek | KG7QWU | — | 100.0 | — |
| 449.250 | 444.250 | Statewide | Statewide | Statewide | KE7GHK | UTTHREAT | 186.2 | 145.410 |
| 449.250 | 444.250 | Logan | North | Logan | AC7II | SNP | 103.5 | — |
| 449.250 | 444.250 | Riverton | WasFrnt | Salt Lake | K7MLA | SNP | — | — |
| 449.250 | 444.250 | Statewide | Utah SNP | Utah | (Shared) | Non Prot | — | — |
| 449.250 | 444.250 | Statewide | WasFrnt | Statewide | W7DES | SNP | 100.0 | — |
| 449.275 | 444.275 | Hurricane | Southwest | Hurricane Mesa | K5JCA | — | 110.9 | — |
| 449.275 | 444.275 | Salt Lake | WasFrnt | Ensign Peak | WA7VHF | — | 88.5 | — |
| 449.300 | 444.300 | East of Holden | Central | Beesting Peak | KB7K | — | 131.8 | — |
| 449.300 | 444.300 | Logan | North | Logan QTH | W7BOZ | — | 103.5 | I7576 / E558836 |
| 449.300 | 444.300 | Salt Lake | WasFrnt | Salt Lake | K7DOU | — | — | — |
| 449.325 | 444.325 | Logan | North | Logan | N7RRZ | — | 156.7 | — |
| 449.325 | 444.325 | St. George | Southwest | Seegmiller | KD7GEP | — | — | — |
| 449.350 | 444.350 | Price | Price | Wood Hill | KA7LEG | — | — | — |
| 449.350 | 444.350 | St. George | St. George | KI2U QTH | KI2U | — | — | — |
| 449.350 | 444.350 | Tooele | West | South Mtn. | W7EO | — | 100.0 | — |
| 449.375 | 444.375 | Lava Hot Spr , ID | North | Sedgwick Peak | AE7TA | BARC | 88.5 | BARC |
| 449.400 | 444.400 | Salt Lake | WasFrnt | Ensign Peak | K7JL | — | 100.0 | — |
| 449.425 | 444.425 | Salt Lake | WasFrnt | Nelson Peak | WA7GIE | — | 100.0 | 449.475 I5620 |
| 449.475 | 444.475 | Provo | WasFrnt | Lake Mountain | WA7GIE | — | 100.0 | 449.425 I5620 |
| 449.500 | 444.500 | Cedar City | Southwest | Iron Mtn. | WR7AAA | — | 100.0 | — |
| 449.500 | 444.500 | Salt Lake | WasFrnt | Farnsworth Pk | K7JL | — | 100.0 | — |
| 449.525 | 444.525 | Brighton | WasFrnt | Scotts Peak | K7JL | — | 131.8 | 147.200 |
| 449.550 | 444.550 | Coalville | WasFrnt | Lewis Peak | WA7GIE | — | 100.0 | IRLP |
| 449.550 | 444.550 | Wendover | WasFrnt | Wendover Peak | WA7GIE | — | 123.0 | 449.425 IRLP |
| 449.550 | 444.550 | Apple Valley | Southwest | Little Creek Mesa | KG7FOT | — | 100.0 | — |
| 449.575 | 444.575 | Orem | WasFrnt | Orem | N7FOC | — | 100.0 | — |
| 449.575 | 444.575 | Wellsville | North | Wellsville | NU7TS | BARC | — | D-Star |
| 449.600 | 444.600 | Minersville | Southwest | Black Mtn | KI7NRX | — | 100.0 | — |
| 449.625 | 444.625 | Logan | North | Mt. Logan | WA7KMF | BARC | 103.5 | 146.720 |
| 449.650 | 444.650 | Logan | WasFrnt | Mt Pisgah | AC7II | — | 100.0 | — |
| 449.675 | 444.675 | Provo | WasFrnt | Lake Mountain (South) | K7UCS | UCARES | 173.8 | 448.325 |
| 449.700 | 444.700 | Bear Lake | North | Bear Lake | K7OGM | — | 100.0 | — |
| 449.700 | 444.700 | Cedar Fort, Ut | WasFrnt | Internet Hill | KO7R | — | 127.3 | — |
| 449.700 | 444.700 | Kaysville | WasFrnt | Kaysville Sewer Treat Plant | K7DOU | DCARC | 100.0 | — |
| 449.700 | 444.700 | St. George | Southwest | Schmutz Hill | K7SG | — | 100.0 | — |
| 449.700 | 444.700 | Vernal | Northeast | Vernal | W7BYU | W7BYU | 136.5 | — |
| 449.725 | 444.725 | Salt Lake | WasFrnt | Butterfield Pk. | WB7TSQ | ERC | 151.4 | — |
| 449.750 | 444.750 | West Mayfield | Central | West Mayfield | N7YFZ | — | 131.8 | — |
| 449.750 | 444.750 | Salt Lake | WasFrnt | Salt Lake | KA7OEI | — | 151.4 | — |
| 449.750 | 444.750 | St. George | Southwest | Utah Hill | W7AOR | N7ARR | 123.0 | — |
| 449.775 | 444.775 | Pleasant Grove | WasFrnt | Pleasant Grove | K8BKT | — | — | — |
| 449.800 | 444.800 | Woodland Hills | WasFrnt | Woodland Hills | KC7WSU | DMR-Utah | — | — |
| 449.800 | 444.800 | Mantua | North | Mt Pisgah | WA7KMF | BARC | 103.5 | — |
| 449.825 | 444.825 | Provo | WasFrnt | Provo | KB7YOT | — | 167.9 | — |
| 449.850 | 444.850 | Kanab | South | Kanab | W7NRC | — | — | — |
| 449.850 | 444.850 | Provo | WasFrnt | Ut. Valley Reg. Med. Cntr. | WA7FFM | UVRMC | — | — |
| 449.875 | 444.875 | Layton | WasFrnt | Shepherd Peak | K7DAV | DCARC | DCS51 | — |
| 449.900 | 444.900 | Vernal | Northeast | Uintah Co EOC | W7BAR | BARC | 136.5 | I7705 |
| 449.925 | 444.925 | Cedar City | Southwest | Rowberry | WR7AAA | — | 100.0 | — |
| 449.925 | 444.925 | Bountiful | WasFrnt | Bountiful Golf Course | K7DAV | DCARC | 100.0 | — |
| 449.950 | 444.950 | Clearfield | WasFrnt | Clearfield Civic Center | NJ7J | — | 123.0 | I3876 |
| 449.950 | 444.950 | Midway | WasFrnt | Midway | N7ZOI | — | — | — |
| 449.950 | 444.950 | Vernon | West | Vernon Hills | W7EO | TCARES | 100.0 | — |
| 449.975 | 444.975 | Lake Mountain | WasFrnt | Lake Mountain | K7UCS | UCARES | 131.8 | — |

</div>
</details>

<details id="thirty-three-cm-repeaters" className="repeater-section">
<summary>33-cm Repeater List (5)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Area | Site Name | Call | Sponsor | CTCSS | Links |
|---:|---:|---|---|---|---|---|---|---|
| 927.0625 | 902.0625 | Provo | WasFrnt | BYU | NG6K | UDRN | — | — |
| 927.1125 | 902.1125 | Salt Lake | WasFrnt | Butterfield Peak | W7XDX | — | DCS432 | — |
| 927.1625 | 902.1625 | Cedar Hills | WasFrnt | QTH | NG6K | — | DCS026 | DMR |
| 927.5875 | 902.5875 | Salt Lake | WasFrnt | W7XDX QTH | W7XDX | — | DCS432 | — |
| 927.9875 | 902.9875 | Lehi | WasFrnt | Lehi QTH | KF7KGN | — | 100.0 | E914870 |

</div>
</details>

<details id="twenty-three-cm-repeaters" className="repeater-section">
<summary>23-cm Repeater List (8)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Area | Site Name | Call | Sponsor | CTCSS | Links |
|---:|---:|---|---|---|---|---|---|---|
| 1282.060 | 1270.060 | St. George | Southwest | St. George QTH | K6FEU | — | 100.0 | — |
| 1283.000 | 1271.000 | Statewide | Statewide | Statewide | (Shared) | Non-Prot | — | — |
| 1284.400 | 1272.400 | Ogden | WasFrnt | Ogden Sheriff Office | KE7EGG | — | — | — |
| 1287.000 | 1275.000 | Salt Lake | WasFrnt | Farnsworth Peak | KF6RAL | — | — | D-Star |
| 1298.750 | 1298.750 | Ogden | WasFrnt | Ogden Sheriff Office | KE7EGG | — | — | D-Star |
| 1299.250 | 1299.250 | Salt Lake | WasFrnt | Farnsworth Peak | KF6RAL | — | — | D-Star |
| 1299.250 | 1299.250 | Toquerville | Southwest | Hurricane Mesa | KF7YIX | Washington County | — | D-Star |
| 1299.750 | 1299.750 | Logan | North | Logan | AC7O | — | — | D-Star |

</div>
</details>


## Linked Repeater Systems

This page contains linked repeater systems commonly used throughout Utah and surrounding areas.

<RepeaterJumpCards
  cards={[
    {
      id: 'sinbad-linked',
      title: 'Sinbad / SDARC',
      subtitle: '11 repeaters',
    },
    {
      id: 'skyline-linked',
      title: 'Skyline',
      subtitle: '8 repeaters',
    },
    {
      id: 'intertie-linked',
      title: 'Intermountain Intertie',
      subtitle: '22 repeaters',
    },
  ]}
/>

<style>{`
.repeater-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.repeater-summary-card {
  border: 1px solid var(--ifm-color-emphasis-300);
  border-left: 6px solid var(--ifm-color-primary);
  border-radius: 12px;
  padding: 1rem;
  background: var(--ifm-background-surface-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.repeater-summary-card strong {
  display: block;
  color: var(--ifm-color-primary-darkest);
  font-size: 1rem;
}

.repeater-summary-card span {
  display: block;
  margin-top: 0.25rem;
  color: var(--ifm-color-emphasis-700);
}

.repeater-section {
  margin: 1rem 0;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 12px;
  background: var(--ifm-background-surface-color);
  overflow: hidden;
}

.repeater-section summary {
  cursor: pointer;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--ifm-color-primary-darkest);
  background: var(--ifm-color-emphasis-100);
}

.repeater-table-wrap {
  overflow-x: auto;
  padding: 0 1rem 1rem;
}

.repeater-table-wrap table {
  min-width: 900px;
  width: 100%;
}

.repeater-table-wrap th {
  white-space: nowrap;
}
`}</style>

<details id="sinbad-linked" className="repeater-section">
<summary>Sinbad / SDARC Linked System</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Site Name | Callsign | CTCSS | Notes |
|---:|---:|---|---|---:|---|
| 145.310 | 144.710 | Ford Ridge | K7SDC | 88.5 | — |
| 145.490 | 144.890 | Flat Top | WB7BYU | 136.5 | — |
| 146.610 | 146.010 | Abajo Peak | K7SDC | 88.5 | — |
| 146.760 | 146.160 | Bald Mesa | K7QEQ | 88.5 | — |
| 146.900 | 146.300 | Moab Downtown | K7QEQ | 88.5 | — |
| 147.040 | 147.640 | Grizzly Ridge | W7BAR | 136.5 | — |
| 147.060 | 147.660 | Horn Mountain | K7SDC | 88.5 | — |
| 147.080 | 147.680 | Boarding House Ridge | K7SDC | 88.5 | — |
| 147.080 | 147.680 | Henry Mountain | K7SDC | 136.5 | — |
| 147.080 | 147.680 | Lake Mountain | K7SDC | 77.0 | — |
| 147.140 | 147.740 | Cedar Mountain | K7SDC | 88.5 | Linked |
| 147.120 | 147.720 | Cedar Mountain (Intertie) | WX7Y | 100.0 | Linked |
| 147.200 | 147.800 | Star Point | K7SDC | 88.5 | — |
| 147.320 | 147.920 | Bruin Peak | K7SDC | 88.5 | — |
| 222.840 | 224.440 | Boarding House Ridge | WX7Y | 88.5 | 1.25 m |
| 447.625 | 442.625 | Horn Mountain | WX7Y | 88.5 | 70 cm |


</div>
</details>

<details id="skyline-linked" className="repeater-section">
<summary>Skyline Linked System</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Site Name | Sponsor | Links |
|---:|---:|---|---|---|---|
| 146.660 | 146.060 | Ephraim | Horseshoe Flat | Skyline | 433.650 |
| 146.720 | 146.120 | Glendale | Spencer Bench | Skyline | 447.450 |
| 146.720 | 146.120 | Manti | Barton Peak | Skyline | 447.450 |
| 146.720 | 146.120 | East Salina | Salina Canyon | Skyline | 448.275 |
| 146.860 | 146.260 | Monroe | Monroe Peak | Skyline | 433.650 |
| 147.100 | 147.700 | East Holden | Beesting Peak | Skyline | 433.650 |
| 447.450 | 442.450 | Monroe | Monroe Peak | Skyline | 433.650 |
| 448.275 | 443.275 | Manti | Barton Peak | Skyline | IRLP I3576 |

</div>
</details>

<details id="intertie-linked" className="repeater-section">
<summary>Intermountain Intertie (Snowlink)</summary>

<div className="repeater-table-wrap">

| RX Freq | TX Freq | Location | Site Name | Sponsor | CTCSS |
|---:|---:|---|---|---|---:|
| 147.120 | 147.720 | Salt Lake City, UT | Farnsworth Peak | Intermountain Intertie | 100.0 |
| 147.180 | 147.780 | Alta, UT | Hidden Peak | Intermountain Intertie | 100.0 |
| 145.270 | 144.670 | Brighton, UT | Scott Hill | Intermountain Intertie | 100.0 |
| 145.210 | 144.610 | Salt Lake City, UT | Ensign Peak | Intermountain Intertie | 100.0 |
| 449.400 | 444.400 | Salt Lake City, UT | Ensign Peak | Intermountain Intertie | 100.0 |
| 449.575 | 444.575 | Orem, UT | Orem | Intermountain Intertie | 100.0 |
| 145.350 | 144.750 | Morgan, UT | Morgan | Intermountain Intertie | 100.0 |
| 145.490 | 144.890 | Ogden, UT | Promontory | Intermountain Intertie | 100.0 |
| 147.020 | 147.620 | Garden City, UT | Bear Lake | Intermountain Intertie | 100.0 |
| 449.650 | 444.650 | Logan, UT | Mount Pisgah | Intermountain Intertie | 100.0 |
| 145.270 | 144.670 | Levan, UT | Levan Peak | Intermountain Intertie | 103.5 |
| 147.120 | 147.720 | Castle Dale, UT | Cedar Mountain | Intermountain Intertie | 100.0 |
| 146.840 | 146.240 | Monroe, UT | Monroe Peak | Intermountain Intertie | 100.0 |
| 146.940 | 146.340 | Milford, UT | Frisco Peak | Intermountain Intertie | 100.0 |
| 146.800 | 146.200 | Cedar City, UT | Blowhard Mountain | Intermountain Intertie | 100.0 |
| 147.200 | 147.800 | Hatch, UT | Tod's Junction | Intermountain Intertie | 100.0 |
| 146.820 | 146.220 | St. George, UT | West Mountain Peak | Intermountain Intertie | 100.0 |
| 448.600 | 443.600 | Page, AZ | Navajo Mountain | Intermountain Intertie | 100.0 |
| 447.225 | 442.225 | Malad, ID | Malad | Intermountain Intertie | 100.0 |
| 146.850 | 146.250 | Arco, ID | Jumpoff Peak | Intermountain Intertie | 100.0 |
| 145.230 | 144.630 | West Yellowstone, MT | Sawtell Peak | Intermountain Intertie | 100.0 |
| 145.210 | 144.610 | Lava Hot Springs, ID | Sedgwick Peak | Intermountain Intertie | 100.0 |
| 145.270 | 144.670 | Burley, ID | Mount Harrison | Intermountain Intertie | 100.0 |
| 145.150 | 144.550 | Mountain Home, ID | Mountain Home | Intermountain Intertie | 100.0 |
| 145.130 | 144.530 | Boise, ID | Shafer Butte | Intermountain Intertie | 100.0 |
| 146.660 | 146.060 | Cascade, ID | Snowbank Mountain | Intermountain Intertie | 100.0 |
| 147.300 | 147.900 | Jacob Lake, AZ | Jacob Lake | Intermountain Intertie | 100.0 |
| 448.875 | 443.875 | Flagstaff, AZ | Mount Eldon | Intermountain Intertie | 100.0 |
| 449.175 | 444.175 | Prescott, AZ | Tower Mountain | Intermountain Intertie | 100.0 |
| 442.275 | 447.275 | Buckeye, AZ | White Tanks | Intermountain Intertie | 100.0 |
| 441.625 | 446.625 | Scottsdale, AZ | Scottsdale Airpark | Intermountain Intertie | 100.0 |
| 147.380 | 147.980 | Three Forks, MT | Cardwell | Intermountain Intertie | 100.0 |
| 146.880 | 146.280 | Las Vegas, NV | Potosi Mountain | Intermountain Intertie | 100.0 |
| 147.100 | 147.700 | Ontario, OR | Malheur Butte | Intermountain Intertie | 100.0 |
| 146.860 | 146.260 | Evanston, WY | Medicine Butte | Intermountain Intertie | 100.0 |

</div>
</details>


## Local Frequencies

This page contains commonly used simplex frequencies used throughout Utah and surrounding areas.

<RepeaterJumpCards
  cards={[
    {
      id: 'two-meter-simplex',
      title: '2-Meter',
      subtitle: '53 frequencies',
    },
    {
      id: 'six-meter-simplex',
      title: '6-Meter',
      subtitle: '1 frequency',
    },
    {
      id: 'other-simplex',
      title: 'Other',
      subtitle: '62 frequencies',
    },
  ]}
/>

<style>{`
.repeater-summary-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  margin: 1.5rem 0 2rem;
}

.repeater-summary-card {
  border: 1px solid var(--ifm-color-emphasis-300);
  border-left: 6px solid var(--ifm-color-primary);
  border-radius: 12px;
  padding: 1rem;
  background: var(--ifm-background-surface-color);
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
}

.repeater-summary-card strong {
  display: block;
  color: var(--ifm-color-primary-darkest);
  font-size: 1rem;
}

.repeater-summary-card span {
  display: block;
  margin-top: 0.25rem;
  color: var(--ifm-color-emphasis-700);
}

.repeater-section {
  margin: 1rem 0;
  border: 1px solid var(--ifm-color-emphasis-300);
  border-radius: 12px;
  background: var(--ifm-background-surface-color);
  overflow: hidden;
}

.repeater-section summary {
  cursor: pointer;
  padding: 1rem 1.25rem;
  font-weight: 800;
  color: var(--ifm-color-primary-darkest);
  background: var(--ifm-color-emphasis-100);
}

.repeater-table-wrap {
  overflow-x: auto;
  padding: 0 1rem 1rem;
}

.repeater-table-wrap table {
  min-width: 700px;
  width: 100%;
}
`}</style>

<details id="two-meter-simplex" className="repeater-section">
<summary>2-Meter Simplex Frequencies (53)</summary>

<div className="repeater-table-wrap">

| Frequency | Primary Use | Secondary Use | Additional Use | Band |
|---:|---|---|---|---|
| 145.510 | Cache County ARES | Packet Group (Salt Lake City) | — | 2-Meter |
| 145.530 | Salt Lake County ARES | — | — | 2-Meter |
| 145.550 | Weber County ARES | — | — | 2-Meter |
| 145.570 | Davis County ARES | — | — | 2-Meter |
| 145.590 | ERC North | ERC South | — | 2-Meter |
| 145.610 | Foothill MARA | Various ERC | — | 2-Meter |
| 145.630 | Utah County ARES | TERT | — | 2-Meter |
| 145.650 | Weber County ARES | — | — | 2-Meter |
| 145.670 | Salt Lake/Tooele County MARA | — | — | 2-Meter |
| 145.690 | Salt Lake/Tooele County MARA | — | — | 2-Meter |
| 145.730 | Wasatch Front ATV Intercom | Tooele County ARES | — | 2-Meter |
| 145.750 | Davis County ARES | — | — | 2-Meter |
| 145.770 | C.S.E.R.G. | — | — | 2-Meter |
| 145.790 | Utah County South MARA | Lone Peak ARC (formerly Highland ARC) | — | 2-Meter |
| 146.420 | Salt Lake County ARES | Cache County ERC | — | 2-Meter |
| 146.440 | R.A.C.E.S. | Morgan County ARES | CUARC | 2-Meter |
| 146.460 | Utah County ARES | Various ERC | — | 2-Meter |
| 146.480 | Box Elder County ARES | Utah Valley University (UVU) | — | 2-Meter |
| 146.500 | Salt Lake County ARES | — | — | 2-Meter |
| 146.520 | National Simplex | Cache County ARES | — | 2-Meter |
| 146.540 | Cache & Rich County MARA | Utah County South MARA | — | 2-Meter |
| 146.560 | Cache County ARES | Weber County ARES | Various ERC | 2-Meter |
| 146.580 | Weber County ARES | K7HLR Code Practice | — | 2-Meter |
| 147.400 | R.A.C.E.S. | — | — | 2-Meter |
| 147.420 | Davis County ARES | Davis County ARC | — | 2-Meter |
| 147.440 | Salt Lake/Tooele County MARA | ERC North | Various ERC | 2-Meter |
| 147.460 | Salt Lake County ARES | — | — | 2-Meter |
| 147.480 | Tooele County ARES | ERC North | — | 2-Meter |
| 147.500 | Morgan County ARES | Salt Lake County ARES | — | 2-Meter |
| 147.520 | Cache County ARES | ERC Central | ERC South | 2-Meter |
| 147.540 | Salt Lake County ARES | — | — | 2-Meter |
| 147.560 | ERC Central | Various ERC | — | 2-Meter |
| 147.580 | Weber County ARES | CUARC | — | 2-Meter |
| 144.390 | National APRS | — | — | 2-Meter |
| 144.910 | Rural Wasatch Front Packet (AX.25) | — | — | 2-Meter |
| 144.930 | Utah County Packet | — | — | 2-Meter |
| 144.950 | Salt Lake County Packet | — | — | 2-Meter |
| 144.970 | Davis/Weber/Box Elder Counties Packet | — | — | 2-Meter |
| 144.990 | Rural Wasatch Front Packet (TCP/IP) | — | — | 2-Meter |
| 145.010 | Statewide Packet (not for metro-area users) | — | — | 2-Meter |
| 145.030 | Utah County Packet | — | — | 2-Meter |
| 145.050 | Salt Lake County Packet (AX.25, MSYS) | — | — | 2-Meter |
| 145.070 | Davis/Weber/Box Elder Counties Packet (AX.25, MSYS) | — | — | 2-Meter |
| 145.090 | Tooele/Weber Counties Packet | — | — | 2-Meter |
| 145.110 | Wasatch Front Packet Repeater Output *(Discontinued)* | — | — | 2-Meter |
| 145.110 | Digital Voice Repeater Output | — | — | 2-Meter |
| 145.125 | Digital Voice Repeater Output (D-Star, Farnsworth Peak) | — | — | 2-Meter |
| 145.130 | Utah County Packet (TCP/IP) *(Discontinued)* | — | — | 2-Meter |
| 145.150 | Salt Lake County Packet (TCP/IP) *(Discontinued)* | — | — | 2-Meter |
| 145.150 | Digital Voice Repeater Output (D-Star, IMC, Murray) | — | — | 2-Meter |
| 145.175 | Digital Voice Repeater Output (D-Star, Bruin Peak) | — | — | 2-Meter |
| 145.190 | Voice Repeater Output (Salt Lake City) | — | — | 2-Meter |
</div>
</details>

<details id="six-meter-simplex" className="repeater-section">
<summary>6-Meter Simplex Frequencies (1)</summary>

<div className="repeater-table-wrap">

| General-Purpose simplex (ragchew) frequencies: |  |  |  |  |  |  |  | Band |
|---|---|---|---|---|---|---|---|---|
| 1.466 | ERC North | -  | -  |  |  |  |  | 6-Meter |

</div>
</details>

<details id="other-simplex" className="repeater-section">
<summary>Other Simplex Frequencies (62)</summary>

<div className="repeater-table-wrap">

| Band | Primary | Secondary 1 | Secondary 2 |
|---|---:|---:|---:|
| 10 Meters | 29.600 | — | — |
| 6 Meters | 52.525 | 52.540 | — |
| 2 Meters | 146.520 | 146.540 | 146.560 |
| 222 MHz | 223.500 | — | — |
| 70 cm (Analog) | 446.000 | 446.500 | — |
| 70 cm (D-Star) | 438.5000 | 438.5125 | — |
| 70 cm (D-Star Dongle) | 438.5250 | — | — |
| 23 cm | 1294.500 | — | — |
| 13 cm | 2305.200 | — | — |

| Organization / Use | Primary | Secondary 1 | Secondary 2 | Secondary 3 | Secondary 4 | Secondary 5 |
|---|---:|---:|---:|---:|---:|---:|
| **R.A.C.E.S.** | 146.440 | 147.400 | — | — | — | — |
| **Box Elder County ARES** | 146.480 | 147.600* | — | — | — | — |
| **Cache County ARES** | 147.520 | 146.520 | 146.560 | 145.510 | — | — |
| **Davis County ARES** | 147.420 | 145.570 | 145.750 | — | — | — |
| **Morgan County ARES** | 147.500 | 146.440 | — | — | — | — |
| **Salt Lake County ARES** | 147.540 | 145.530 | 146.420 | 146.500 | 147.460 | 147.500 |
| **Tooele County ARES** | 145.730 | 147.480 | — | — | — | — |
| **Utah County ARES** | 146.460 | 145.630 | — | — | — | — |
| **Weber County ARES** | 146.580 | 145.650 | 147.580 | 145.550 | 146.560 | — |
| **TERT** | 145.630 | — | — | — | — | — |
| **Cache/Rich County MARA** | 146.540 | — | — | — | — | — |
| **Salt Lake/Tooele County MARA** | 145.690 | 145.310* | 145.670 | — | — | — |
| **Utah County South MARA** | 146.540 | 145.790 | — | — | — | — |
| **Foothill MARA** | 145.610 | — | — | — | — | — |
| **ERC North** | 145.590 | 147.480 | 147.440 | 146.600 | — | — |
| **ERC Central** | 147.560 | 147.520 | — | — | — | — |
| **ERC South** | 145.590 | 147.520 | — | — | — | — |
| **ERC – Pole Canyon** | 147.600* | — | — | — | — | — |
| **National Simplex** | 146.520 | — | — | — | — | — |
| **C.S.E.R.G.** | 145.770 | — | — | — | — | — |
| **Code Practice** | 146.580 | — | — | — | — | — |
| **Utah DX Association** | 147.600* | — | — | — | — | — |
| **Lone Peak ARC** | 145.790 | — | — | — | — | — |
| **Council of Utah Amateur Radio Clubs (CUARC)** | 146.440 | 147.580 | — | — | — | — |
| **Utah Valley University (UVU)** | 146.480 | — | — | — | — | — |
| **Experimental Simplex** | 145.710& | — | — | — | — | — |
| **Wasatch Front ATV Intercom** | 145.730 | — | — | — | — | — |
| **Malad Pass Remote Base** | 147.450@ | — | — | — | — | — |
| **RMRA Emergency Monitoring Network** | 145.710& | — | — | — | — | — |

**Notes**

- **\*** Shared by Box Elder County ARES, Utah DX Association, ERC – Pole Canyon, and Salt Lake/Tooele County MARA.
- **@** Malad Pass Remote Base.
- **&** Experimental simplex / RMRA Emergency Monitoring Network.
- Avoid routine simplex operation **below 145.310 MHz** and **above 147.600 MHz** unless specifically assigned.

</div>
</details>
