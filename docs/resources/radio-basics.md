---
sidebar_position: 1
title: Radio Basics
---

# Radio Basics

Radio communications depend on understanding several fundamental principles, including radio wave behavior, frequency selection, propagation, modulation, and operating methods.

---

## Basic Radio Principles

A radio system consists of three components:

- **Transmitter** — Converts voice or data into radio-frequency (RF) energy
- **Receiver** — Receives RF energy and converts it back into usable information
- **Antenna** — Radiates and receives electromagnetic energy

Radio signals travel as electromagnetic waves at the speed of light.

**Speed of Light:** 3 × 10^8 meters per second

---

## Radio Wave Properties

### Frequency

Frequency is the number of complete wave cycles occurring in one second.

| Unit | Equivalent |
|------|------------|
| 1 Hertz (Hz) | 1 cycle per second |
| 1 Kilohertz (kHz) | 1,000 cycles per second |
| 1 Megahertz (MHz) | 1,000,000 cycles per second |
| 1 Gigahertz (GHz) | 1,000,000,000 cycles per second |

---

### Wavelength

Wavelength is the distance between repeating wave peaks.

**Formula:** Wavelength = Speed of Light ÷ Frequency

Where:

- **Wavelength** = the physical length of the wave
- **Speed of Light** = 3 × 10^8 meters per second
- **Frequency** = the operating frequency

A lower frequency produces a longer wavelength. A higher frequency produces a shorter wavelength.

---

### Amplitude

Amplitude represents signal strength.

---

### Polarization

Types of polarization:

- Vertical
- Horizontal
- Circular

Matching polarization improves signal performance.

---

## Frequency Spectrum

### HF (High Frequency)

2–30 MHz

- Long-distance communications
- Skywave propagation
- Larger antennas

---

### VHF (Very High Frequency)

30–300 MHz

- Line-of-sight communications
- Local and regional coverage
- Common 2-meter operations

---

### UHF (Ultra High Frequency)

300 MHz–3 GHz

- Shorter-range communications
- Better building penetration
- Common 70-centimeter operations

---

## Propagation Paths

### Direct Wave (Line-of-Sight)

Signals travel directly between stations.

Affected by:

- Terrain
- Antenna height
- Obstructions

A higher antenna usually increases radio horizon and improves coverage.

**Rule of thumb:** Radio horizon in miles is approximately 1.23 times the square root of antenna height in feet.

---

### Ground Wave

Signals may follow the earth’s surface.

Includes:

- Surface wave
- Direct wave
- Ground-reflected wave

---

### Skywave

Signals may refract from the ionosphere.

Affected by:

- Time of day
- Solar activity
- Frequency
- Atmospheric conditions

---

## Modulation

Modulation places information onto a carrier wave.

### Amplitude Modulation (AM)

- Frequency remains constant
- Amplitude varies

Includes:

- Upper Sideband (USB)
- Lower Sideband (LSB)
- Single Sideband (SSB)

---

### Frequency Modulation (FM)

- Amplitude remains constant
- Frequency varies

Common for local VHF/UHF communications.

---

## Simplex vs. Duplex

### Simplex

Simplex communication uses a single frequency for both transmitting and receiving.

Stations take turns transmitting.

Examples:

- Direct radio-to-radio communication
- Training nets
- Field communications

---

### Duplex

Duplex communication uses separate transmit and receive frequencies.

This is commonly used with repeaters.

Examples:

- Repeater operations
- Coordinated nets
- Wide-area communications

---

## Simplex vs. Duplex Comparison

| Mode | Uses One Frequency | Uses Two Frequencies | Typical Use |
|------|-------------------|---------------------|-------------|
| Simplex | Yes | No | Direct station-to-station |
| Duplex | No | Yes | Repeater communications |

---

## Repeaters

A repeater receives a signal on one frequency and retransmits it on another.

Repeaters can help:

- Extend communication range
- Improve coverage
- Connect stations unable to hear each other directly

Repeaters are often placed on elevated sites to improve their service area.

---

## Common Repeater Terms

### Input Frequency

The frequency your radio transmits on.

### Output Frequency

The frequency your radio listens on.

### Offset

The difference between repeater input and output frequencies.

Examples:

- 600 kHz on 2 meters
- 5 MHz on 70 centimeters

Always verify the correct offset for the repeater you are using.

### Tone (CTCSS / PL Tone)

Some repeaters require an access tone.

The repeater will not retransmit your signal unless the correct tone is used.

---

## Example Repeater Setup

Example repeater settings:

- **Output:** 146.940
- **Offset:** -0.600
- **Tone:** 100.0 Hz

Radio setup:

- Listen on 146.940
- Transmit on 146.340
- Use 100.0 Hz tone

---

## Basic Radio Controls

### Volume

Controls received audio level.

Set the volume high enough to hear clearly without making the audio uncomfortable or distorted.

---

### Squelch

Squelch mutes background receiver noise when no signal is present.

Proper squelch setting:

- High enough to eliminate unwanted noise
- Low enough to avoid blocking weak signals

If squelch is set too high, weak stations may not be heard.

---

### RF Gain

RF Gain controls receiver sensitivity.

Higher gain:

- Better weak-signal reception
- More noise may be heard

Lower gain:

- Less interference
- Reduced weak-signal reception

Not all radios include RF Gain control.

---

### Mic Gain

Mic Gain controls transmitted audio strength.

Improper settings may cause:

- Weak audio
- Distorted audio
- Overdriven audio

Use moderate settings unless adjustment is needed.

---

## Repeater Courtesy Tone

A courtesy tone is a brief tone transmitted after a station unkeys.

It often indicates:

- The repeater is ready for the next station
- The previous transmission has fully cleared

### Best Practice

1. Finish transmitting
2. Release PTT
3. Listen for the courtesy tone
4. Pause briefly before transmitting again

This helps prevent doubling and allows other stations time to break in.

---

## Repeater Hang Time

Some repeaters remain keyed briefly after transmission ends.

This is called **hang time**.

Hang time helps conversations flow more smoothly and reduces repeated key-up delays.

---

## Time-Out Timer

Many repeaters include a time-out timer to prevent excessively long transmissions.

If a station transmits too long, the repeater may stop retransmitting until the timer resets.

Keep transmissions concise.

---

## Simplex Calling

Calling frequencies may be used to:

- Make initial contact
- Establish communication
- Move to another frequency

Typical procedure:

1. Listen first
2. Make your call
3. Establish contact
4. Move to another frequency if appropriate

This keeps calling frequencies available for other users.

---

## Directed Nets

A directed net is managed by a **Net Control Station (NCS).**

Net Control may:

- Open and close the net
- Take check-ins
- Recognize stations
- Pass traffic
- Maintain order on the frequency

Directed nets are used to keep communications organized, especially when multiple stations are involved.

---

## Net Etiquette

During a directed net:

- Listen carefully
- Wait to be recognized
- Keep transmissions concise
- Speak clearly
- Avoid interrupting except for emergency traffic

Following net procedures improves clarity and reduces confusion.

---

## Selecting the Right Communications Method

Three factors are critical:

1. Select the best propagation path
2. Select the proper antenna
3. Select the correct frequency

These choices often matter more than transmitter power alone.

---

## General Operating Characteristics

| Band | Typical Strength |
|------|----------------|
| HF | Long range |
| VHF | Reliable local coverage |
| UHF | Penetration and short-range performance |

---

:::tip Practical Rule of Thumb

**Lower frequencies** generally support longer-distance communications.

**Higher frequencies** generally support stronger local communications.

:::

