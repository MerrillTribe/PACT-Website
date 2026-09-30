import React, { useMemo, useState } from 'react';

const equipmentLibrary = [
  // Radios — AnyTone
  { id: 'anytone-at-d168uv', type: 'radio', manufacturer: 'AnyTone', name: 'AT-D168UV' },
  { id: 'anytone-at-d578uviii-plus', type: 'radio', manufacturer: 'AnyTone', name: 'AT-D578UVIII Plus' },
  { id: 'anytone-at-d868uv', type: 'radio', manufacturer: 'AnyTone', name: 'AT-D868UV' },
  { id: 'anytone-at-d878uv', type: 'radio', manufacturer: 'AnyTone', name: 'AT-D878UV' },
  { id: 'anytone-at-d878uvii-plus', type: 'radio', manufacturer: 'AnyTone', name: 'AT-D878UVII Plus' },

  // Radios — Baofeng
  { id: 'baofeng-uv-5r', type: 'radio', manufacturer: 'Baofeng', name: 'UV-5R' },
  { id: 'baofeng-uv-82', type: 'radio', manufacturer: 'Baofeng', name: 'UV-82' },
  { id: 'baofeng-uv-9r-plus', type: 'radio', manufacturer: 'Baofeng', name: 'UV-9R Plus' },
  { id: 'baofeng-bf-f8hp', type: 'radio', manufacturer: 'Baofeng', name: 'BF-F8HP' },
  { id: 'baofeng-dm-1701', type: 'radio', manufacturer: 'Baofeng', name: 'DM-1701' },

  // Radios — Icom
  { id: 'icom-ic-2300h', type: 'radio', manufacturer: 'Icom', name: 'IC-2300H' },
  { id: 'icom-ic-2730a', type: 'radio', manufacturer: 'Icom', name: 'IC-2730A' },
  { id: 'icom-ic-2820h', type: 'radio', manufacturer: 'Icom', name: 'IC-2820H' },
  { id: 'icom-id-50a', type: 'radio', manufacturer: 'Icom', name: 'ID-50A' },
  { id: 'icom-id-51a', type: 'radio', manufacturer: 'Icom', name: 'ID-51A' },
  { id: 'icom-id-52a', type: 'radio', manufacturer: 'Icom', name: 'ID-52A' },
  { id: 'icom-id-5100a', type: 'radio', manufacturer: 'Icom', name: 'ID-5100A' },
  { id: 'icom-ic-705', type: 'radio', manufacturer: 'Icom', name: 'IC-705' },
  { id: 'icom-ic-7300', type: 'radio', manufacturer: 'Icom', name: 'IC-7300' },
  { id: 'icom-ic-7610', type: 'radio', manufacturer: 'Icom', name: 'IC-7610' },
  { id: 'icom-ic-9700', type: 'radio', manufacturer: 'Icom', name: 'IC-9700' },

  // Radios — Kenwood
  { id: 'kenwood-th-d72a', type: 'radio', manufacturer: 'Kenwood', name: 'TH-D72A' },
  { id: 'kenwood-th-d74a', type: 'radio', manufacturer: 'Kenwood', name: 'TH-D74A' },
  { id: 'kenwood-th-d75a', type: 'radio', manufacturer: 'Kenwood', name: 'TH-D75A' },
  { id: 'kenwood-tm-d710g', type: 'radio', manufacturer: 'Kenwood', name: 'TM-D710G' },
  { id: 'kenwood-tm-v71a', type: 'radio', manufacturer: 'Kenwood', name: 'TM-V71A' },
  { id: 'kenwood-ts-480sat', type: 'radio', manufacturer: 'Kenwood', name: 'TS-480SAT' },
  { id: 'kenwood-ts-590sg', type: 'radio', manufacturer: 'Kenwood', name: 'TS-590SG' },
  { id: 'kenwood-ts-890s', type: 'radio', manufacturer: 'Kenwood', name: 'TS-890S' },

  // Radios — Yaesu
  { id: 'yaesu-ft-4xr', type: 'radio', manufacturer: 'Yaesu', name: 'FT-4XR' },
  { id: 'yaesu-ft-5dr', type: 'radio', manufacturer: 'Yaesu', name: 'FT-5DR' },
  { id: 'yaesu-ft-60r', type: 'radio', manufacturer: 'Yaesu', name: 'FT-60R' },
  { id: 'yaesu-ft-65r', type: 'radio', manufacturer: 'Yaesu', name: 'FT-65R' },
  { id: 'yaesu-ft-70dr', type: 'radio', manufacturer: 'Yaesu', name: 'FT-70DR' },
  { id: 'yaesu-ftm-200dr', type: 'radio', manufacturer: 'Yaesu', name: 'FTM-200DR' },
  { id: 'yaesu-ftm-300dr', type: 'radio', manufacturer: 'Yaesu', name: 'FTM-300DR' },
  { id: 'yaesu-ftm-500dr', type: 'radio', manufacturer: 'Yaesu', name: 'FTM-500DR' },
  { id: 'yaesu-ft-891', type: 'radio', manufacturer: 'Yaesu', name: 'FT-891' },
  { id: 'yaesu-ft-710', type: 'radio', manufacturer: 'Yaesu', name: 'FT-710' },
  { id: 'yaesu-ftdx10', type: 'radio', manufacturer: 'Yaesu', name: 'FTDX10' },
  { id: 'yaesu-ftdx101d', type: 'radio', manufacturer: 'Yaesu', name: 'FTDX101D' },

  // Radios — Alinco
  { id: 'alinco-dj-vx50', type: 'radio', manufacturer: 'Alinco', name: 'DJ-VX50' },
  { id: 'alinco-dj-md5xtg', type: 'radio', manufacturer: 'Alinco', name: 'DJ-MD5XTG' },
  { id: 'alinco-dr-135t', type: 'radio', manufacturer: 'Alinco', name: 'DR-135T' },
  { id: 'alinco-dr-735t', type: 'radio', manufacturer: 'Alinco', name: 'DR-735T' },
  { id: 'alinco-dx-sr8t', type: 'radio', manufacturer: 'Alinco', name: 'DX-SR8T' },

  // Radios — Elecraft
  { id: 'elecraft-kx2', type: 'radio', manufacturer: 'Elecraft', name: 'KX2' },
  { id: 'elecraft-kx3', type: 'radio', manufacturer: 'Elecraft', name: 'KX3' },
  { id: 'elecraft-k3s', type: 'radio', manufacturer: 'Elecraft', name: 'K3S' },
  { id: 'elecraft-k4', type: 'radio', manufacturer: 'Elecraft', name: 'K4' },

  // Radios — FlexRadio
  { id: 'flexradio-flex-6300', type: 'radio', manufacturer: 'FlexRadio', name: 'FLEX-6300' },
  { id: 'flexradio-flex-6400', type: 'radio', manufacturer: 'FlexRadio', name: 'FLEX-6400' },
  { id: 'flexradio-flex-6400m', type: 'radio', manufacturer: 'FlexRadio', name: 'FLEX-6400M' },
  { id: 'flexradio-flex-6600', type: 'radio', manufacturer: 'FlexRadio', name: 'FLEX-6600' },
  { id: 'flexradio-flex-6600m', type: 'radio', manufacturer: 'FlexRadio', name: 'FLEX-6600M' },
  { id: 'flexradio-flex-6700', type: 'radio', manufacturer: 'FlexRadio', name: 'FLEX-6700' },

  // Radios — Xiegu
  { id: 'xiegu-g90', type: 'radio', manufacturer: 'Xiegu', name: 'G90' },
  { id: 'xiegu-x6100', type: 'radio', manufacturer: 'Xiegu', name: 'X6100' },
  { id: 'xiegu-x6200', type: 'radio', manufacturer: 'Xiegu', name: 'X6200' },
  { id: 'xiegu-x5105', type: 'radio', manufacturer: 'Xiegu', name: 'X5105' },

  // Antennas
  { id: 'diamond-x30a', type: 'antenna', manufacturer: 'Diamond', name: 'X30A' },
  { id: 'diamond-x50a', type: 'antenna', manufacturer: 'Diamond', name: 'X50A' },
  { id: 'diamond-x200a', type: 'antenna', manufacturer: 'Diamond', name: 'X200A' },
  { id: 'diamond-nr770hb', type: 'antenna', manufacturer: 'Diamond', name: 'NR770HB' },
  { id: 'comet-gp-3', type: 'antenna', manufacturer: 'Comet', name: 'GP-3' },
  { id: 'comet-gp-6', type: 'antenna', manufacturer: 'Comet', name: 'GP-6' },
  { id: 'comet-sbb-5', type: 'antenna', manufacturer: 'Comet', name: 'SBB-5' },

  // Power Supplies
  { id: 'samlex-sec-1235m', type: 'power-supply', manufacturer: 'Samlex', name: 'SEC-1235M' },
  { id: 'samlex-sec-1235', type: 'power-supply', manufacturer: 'Samlex', name: 'SEC-1235' },
  { id: 'astron-rs-35a', type: 'power-supply', manufacturer: 'Astron', name: 'RS-35A' },
  { id: 'astron-ss-30m', type: 'power-supply', manufacturer: 'Astron', name: 'SS-30M' },

  // Batteries
  { id: 'bioenno-blf-1220a', type: 'battery', manufacturer: 'Bioenno Power', name: 'BLF-1220A' },
  { id: 'bioenno-blf-1230a', type: 'battery', manufacturer: 'Bioenno Power', name: 'BLF-1230A' },
  { id: 'bioenno-blf-1240a', type: 'battery', manufacturer: 'Bioenno Power', name: 'BLF-1240A' },

  // Antenna Tuners
  { id: 'ldg-z-100plus', type: 'antenna-tuner', manufacturer: 'LDG', name: 'Z-100Plus' },
  { id: 'ldg-at-100proii', type: 'antenna-tuner', manufacturer: 'LDG', name: 'AT-100ProII' },
  { id: 'ldg-it-100', type: 'antenna-tuner', manufacturer: 'LDG', name: 'IT-100' },

  // SWR / Power Meters
  { id: 'diamond-sx-200', type: 'swr-meter', manufacturer: 'Diamond', name: 'SX-200' },
  { id: 'diamond-sx-400', type: 'swr-meter', manufacturer: 'Diamond', name: 'SX-400' },
  { id: 'mfj-815c', type: 'swr-meter', manufacturer: 'MFJ', name: 'MFJ-815C' },
];

const equipmentTypes = [
  { id: 'radio', label: 'Radio' },
  { id: 'antenna', label: 'Antenna' },
  { id: 'power-supply', label: 'Power Supply' },
  { id: 'battery', label: 'Battery' },
  { id: 'antenna-tuner', label: 'Antenna Tuner' },
  { id: 'swr-meter', label: 'SWR / Power Meter' },
];

const stopWords = new Set([
  'the',
  'a',
  'an',
  'and',
  'or',
  'to',
  'of',
  'in',
  'on',
  'for',
  'is',
  'it',
  'i',
  'my',
  'do',
  'does',
  'how',
  'what',
  'where',
  'when',
  'why',
  'can',
  'could',
  'would',
  'should',
  'with',
  'this',
  'that',
  'from',
  'into',
  'about',
  'please',
]);

const synonyms = {
  wattage: ['power', 'output', 'tx power'],
  watts: ['power', 'output', 'tx power'],
  transmit: ['tx', 'transmit'],
  transmitting: ['tx', 'transmit'],
  receive: ['rx', 'receive'],
  receiving: ['rx', 'receive'],
  tone: ['ctcss', 'dcs', 'tone'],
  tones: ['ctcss', 'dcs', 'tone'],
  repeater: ['repeater', 'offset', 'duplex', 'shift'],

  frequency: [
    'frequency',
    'freq',
    'vfo',
    'tune',
    'tuning',
    'set frequency',
    'enter frequency',
  ],

  frequencies: [
    'frequency',
    'freq',
    'vfo',
    'tune',
    'tuning',
    'set frequency',
  ],

  channel: ['channel', 'memory'],
  channels: ['channel', 'memory'],
  memory: ['memory', 'channel'],
  scan: ['scan', 'scanning'],
  volume: ['volume', 'audio', 'speaker'],
  reset: ['reset', 'initialize', 'factory'],
};

const normalizeText = (text = '') =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const getQueryWords = (text) =>
  normalizeText(text)
    .split(' ')
    .filter(
      (word) =>
        word.length > 2 &&
        !stopWords.has(word)
    );

const detectIntent = (questionText) => {
  const q = normalizeText(questionText);

  if (
    /(change|set|enter|adjust|tune|select|program).*(frequency|freq)/i.test(q) ||
    /(frequency|freq).*(change|set|enter|adjust|tune|select|program)/i.test(q)
  ) {
    return 'set-frequency';
  }

  if (/volume|speaker|audio|louder|quieter/i.test(q)) {
    return 'volume';
  }

  if (/power|watt|wattage|output power/i.test(q)) {
    return 'power';
  }

  if (/repeater|offset|duplex|shift/i.test(q)) {
    return 'repeater';
  }

  if (/ctcss|dcs|tone/i.test(q)) {
    return 'tone';
  }

  if (/scan|scanning/i.test(q)) {
    return 'scan';
  }

  if (/channel|memory|save channel|store channel/i.test(q)) {
    return 'memory';
  }

  if (/reset|factory|initialize/i.test(q)) {
    return 'reset';
  }

  return 'general';
};

const getSectionHeadings = (text) =>
  text
    .split('\n')
    .map((line) => line.trim())
    .filter((line) =>
      /^\d+(\.\d+)+\s+/.test(line)
    );

const scoreHeadingForIntent = (heading, intent) => {
  const h = normalizeText(heading);

  let score = 0;

  switch (intent) {
    case 'set-frequency':
      if (/set up vfo frequency/.test(h)) score += 80;
      if (/set.*frequency/.test(h)) score += 55;
      if (/vfo.*frequency/.test(h)) score += 50;
      if (/frequency/.test(h)) score += 25;
      if (/vfo/.test(h)) score += 20;
      if (/auto repeater/.test(h)) score -= 50;
      if (/offset/.test(h)) score -= 25;
      break;

    case 'volume':
      if (/adjust volume/.test(h)) score += 80;
      if (/volume/.test(h)) score += 45;
      if (/power on/.test(h)) score -= 15;
      break;

    case 'power':
      if (/tx power/.test(h)) score += 80;
      if (/transmit power/.test(h)) score += 80;
      if (/power level/.test(h)) score += 60;
      if (/power/.test(h)) score += 30;
      break;

    case 'repeater':
      if (/repeater/.test(h)) score += 70;
      if (/offset/.test(h)) score += 50;
      if (/duplex/.test(h)) score += 40;
      break;

    case 'tone':
      if (/ctcss/.test(h)) score += 70;
      if (/dcs/.test(h)) score += 70;
      if (/tone/.test(h)) score += 45;
      break;

    case 'scan':
      if (/scan/.test(h)) score += 70;
      break;

    case 'memory':
      if (/memory/.test(h)) score += 65;
      if (/channel/.test(h)) score += 50;
      break;

    case 'reset':
      if (/factory reset/.test(h)) score += 80;
      if (/reset/.test(h)) score += 65;
      if (/initialize/.test(h)) score += 55;
      break;

    default:
      break;
  }

  return score;
};

const scoreSectionForIntent = (text, intent) => {
  const t = normalizeText(text);

  let score = 0;

  switch (intent) {
    case 'set-frequency':
      if (/set up vfo frequency/.test(t)) score += 100;
      if (/vfo frequency/.test(t)) score += 50;
      if (/enter.*frequency/.test(t)) score += 40;
      if (/set.*frequency/.test(t)) score += 40;
      if (/frequency.*keypad/.test(t)) score += 30;
      if (/keypad.*frequency/.test(t)) score += 30;
      if (/tune|tuning/.test(t)) score += 20;

      if (/auto repeater/.test(t)) score -= 60;
      if (/offset frequency/.test(t)) score -= 35;
      break;

    case 'volume':
      if (/adjust volume/.test(t)) score += 90;
      if (/increase the volume/.test(t)) score += 60;
      if (/decrease the volume/.test(t)) score += 40;
      if (/power volume/.test(t)) score += 25;
      if (/clockwise/.test(t)) score += 15;
      break;

    case 'power':
      if (/tx power/.test(t)) score += 80;
      if (/transmit power/.test(t)) score += 80;
      if (/power level/.test(t)) score += 60;
      if (/high power|low power/.test(t)) score += 40;
      break;

    case 'repeater':
      if (/repeater/.test(t)) score += 65;
      if (/offset/.test(t)) score += 45;
      if (/duplex|shift/.test(t)) score += 35;
      break;

    case 'tone':
      if (/ctcss/.test(t)) score += 70;
      if (/dcs/.test(t)) score += 70;
      if (/tone/.test(t)) score += 35;
      break;

    case 'scan':
      if (/scan/.test(t)) score += 70;
      break;

    case 'memory':
      if (/memory/.test(t)) score += 60;
      if (/channel/.test(t)) score += 45;
      break;

    case 'reset':
      if (/factory reset/.test(t)) score += 80;
      if (/reset/.test(t)) score += 65;
      if (/initialize/.test(t)) score += 55;
      break;

    default:
      break;
  }

  return score;
};

const getBestHeading = (text, questionText) => {
  const intent = detectIntent(questionText);
  const headings = getSectionHeadings(text);

  if (headings.length === 0) {
    switch (intent) {
      case 'set-frequency':
        return 'Set Frequency';
      case 'volume':
        return 'Adjust Volume';
      case 'power':
        return 'Transmit Power';
      case 'repeater':
        return 'Repeater Settings';
      case 'tone':
        return 'Tone Settings';
      case 'scan':
        return 'Scanning';
      case 'memory':
        return 'Memory Channels';
      case 'reset':
        return 'Reset';
      default:
        return 'Manual Result';
    }
  }

  const queryWords = getQueryWords(questionText);

  let bestHeading = headings[0];
  let bestScore = -Infinity;

  headings.forEach((heading) => {
    const normalizedHeading = normalizeText(heading);

    let score = scoreHeadingForIntent(
      heading,
      intent
    );

    queryWords.forEach((word) => {
      if (normalizedHeading.includes(word)) {
        score += 5;
      }
    });

    if (score > bestScore) {
      bestScore = score;
      bestHeading = heading;
    }
  });

  return bestHeading.replace(
    /^\d+(\.\d+)+\s+/,
    ''
  );
};

/*
 * Extracts a clean, user-facing answer from the selected manual chunk.
 * It removes section headings / manual headers before scoring sentences.
 */
const getBestAnswer = (text, questionText) => {
  const intent = detectIntent(questionText);

  const lines = text
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean);

  const cleanedLines = lines.filter((line) => {
    // Remove common document/page title lines.
    if (
      /Digital DMR and Analog UHF\/VHF Two Way Radio/i.test(line)
    ) {
      return false;
    }

    // Remove numbered section headings such as:
    // 5.1 Power on the Radio
    // 5.2 Adjust Volume
    if (
      /^\d+(\.\d+)+\s+/.test(line)
    ) {
      return false;
    }

    return true;
  });

  const cleanedText =
    cleanedLines.join(' ');

  const sentences = cleanedText
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);

  if (sentences.length === 0) {
    return cleanedText || text;
  }

  const queryWords =
    getQueryWords(questionText);

  const scoredSentences =
    sentences.map(
      (sentence, index) => {
        const s =
          normalizeText(sentence);

        let score = 0;

        // General question-word matching
        queryWords.forEach((word) => {
          if (s.includes(word)) {
            score += 6;
          }
        });

        switch (intent) {
          case 'volume':
            if (/volume/.test(s)) score += 60;
            if (/power volume/.test(s)) score += 35;
            if (/increase/.test(s)) score += 30;
            if (/decrease/.test(s)) score += 25;
            if (/clockwise/.test(s)) score += 35;
            if (/counterclockwise/.test(s)) score += 35;

            // Turning the radio on is related, but not the user's question.
            if (
              /turn on the radio/.test(s)
            ) {
              score -= 40;
            }
            break;

          case 'set-frequency':
            if (/frequency/.test(s)) score += 50;
            if (/vfo/.test(s)) score += 45;
            if (/enter/.test(s)) score += 30;
            if (/keypad/.test(s)) score += 30;
            if (/set/.test(s)) score += 20;
            if (/dial/.test(s)) score += 20;
            if (/tune|tuning/.test(s)) score += 25;

            if (/auto repeater/.test(s)) score -= 60;
            if (/offset/.test(s)) score -= 30;
            break;

          case 'power':
            if (/tx power/.test(s)) score += 60;
            if (/transmit power/.test(s)) score += 60;
            if (/power level/.test(s)) score += 45;
            if (/high power/.test(s)) score += 35;
            if (/low power/.test(s)) score += 35;
            break;

          case 'repeater':
            if (/repeater/.test(s)) score += 55;
            if (/offset/.test(s)) score += 40;
            if (/duplex/.test(s)) score += 35;
            if (/shift/.test(s)) score += 30;
            break;

          case 'tone':
            if (/ctcss/.test(s)) score += 55;
            if (/dcs/.test(s)) score += 55;
            if (/tone/.test(s)) score += 35;
            break;

          case 'scan':
            if (/scan/.test(s)) score += 55;
            break;

          case 'memory':
            if (/memory/.test(s)) score += 50;
            if (/channel/.test(s)) score += 40;
            if (/save|store/.test(s)) score += 30;
            break;

          case 'reset':
            if (/factory reset/.test(s)) score += 65;
            if (/reset/.test(s)) score += 55;
            if (/initialize/.test(s)) score += 45;
            break;

          default:
            break;
        }

        return {
          sentence,
          index,
          score,
        };
      }
    );

  scoredSentences.sort(
    (a, b) => b.score - a.score
  );

  const best =
    scoredSentences[0];

  if (!best) {
    return cleanedText;
  }

  const answerSentences = [
    best.sentence,
  ];

  /*
   * Include the following sentence when it appears to be
   * part of the same instruction.
   */
  if (
    best.index + 1 <
    sentences.length
  ) {
    const next =
      sentences[
        best.index + 1
      ];

    const nextNormalized =
      normalizeText(next);

    let includeNext = false;

    if (intent === 'volume') {
      includeNext =
        /volume|clockwise|counterclockwise|increase|decrease/.test(
          nextNormalized
        );
    } else if (
      intent ===
      'set-frequency'
    ) {
      includeNext =
        /frequency|vfo|keypad|enter|dial|mhz/.test(
          nextNormalized
        );
    } else if (
      intent === 'power'
    ) {
      includeNext =
        /power|high|medium|low|watt|tx/.test(
          nextNormalized
        );
    } else {
      includeNext =
        next.length < 220;
    }

    if (includeNext) {
      answerSentences.push(next);
    }
  }

  return answerSentences.join(' ');
};

export default function RadioAssistant() {
  const [
    equipmentType,
    setEquipmentType,
  ] = useState('radio');

  const [
    equipment,
    setEquipment,
  ] = useState('');

  const [
    question,
    setQuestion,
  ] = useState('');

  const [
    messages,
    setMessages,
  ] = useState([]);

  const filteredEquipment =
    useMemo(
      () =>
        equipmentLibrary.filter(
          (item) =>
            item.type ===
            equipmentType
        ),
      [equipmentType]
    );

  const manufacturers =
    useMemo(
      () => [
        ...new Set(
          filteredEquipment.map(
            (item) =>
              item.manufacturer
          )
        ),
      ],
      [filteredEquipment]
    );

  const selectedEquipment =
    equipmentLibrary.find(
      (item) =>
        item.id === equipment
    );

  const selectedTypeLabel =
    equipmentTypes.find(
      (item) =>
        item.id ===
        equipmentType
    )?.label || 'Equipment';

  const handleEquipmentTypeChange = (
    event
  ) => {
    setEquipmentType(
      event.target.value
    );

    setEquipment('');
    setMessages([]);
    setQuestion('');
  };

  const handleEquipmentChange = (
    event
  ) => {
    setEquipment(
      event.target.value
    );

    setMessages([]);
    setQuestion('');
  };

  const handleSubmit = async (
    event
  ) => {
    event.preventDefault();

    if (
      !equipment ||
      !question.trim()
    ) {
      return;
    }

    const submittedQuestion =
      question.trim();

    const intent =
      detectIntent(
        submittedQuestion
      );

    const userMessage = {
      type: 'user',
      text: submittedQuestion,
    };

    setMessages(
      (currentMessages) => [
        ...currentMessages,
        userMessage,
      ]
    );

    setQuestion('');

    try {
      const response =
        await fetch(
          `/manual-data/${equipment}.json`
        );

      if (!response.ok) {
        throw new Error(
          'Manual data not found'
        );
      }

      const manual =
        await response.json();

      const baseWords =
        getQueryWords(
          submittedQuestion
        );

      const expandedWords =
        new Set();

      baseWords.forEach(
        (word) => {
          expandedWords.add(word);

          if (synonyms[word]) {
            synonyms[word].forEach(
              (synonym) => {
                expandedWords.add(
                  synonym
                );
              }
            );
          }
        }
      );

      const queryWords = [
        ...expandedWords,
      ];

      const scoredSections =
        manual.sections
          .map((section) => {
            const normalizedText =
              normalizeText(
                section.text
              );

            let score = 0;

            queryWords.forEach(
              (word) => {
                const normalizedWord =
                  normalizeText(word);

                if (
                  normalizedText.includes(
                    normalizedWord
                  )
                ) {
                  score += 4;
                }

                if (
                  !normalizedWord.includes(
                    ' '
                  )
                ) {
                  const matches =
                    normalizedText.match(
                      new RegExp(
                        `\\b${normalizedWord}\\b`,
                        'g'
                      )
                    );

                  if (matches) {
                    score +=
                      matches.length;
                  }
                }
              }
            );

            const normalizedQuestion =
              normalizeText(
                submittedQuestion
              );

            if (
              normalizedQuestion.length >
                5 &&
              normalizedText.includes(
                normalizedQuestion
              )
            ) {
              score += 25;
            }

            score +=
              scoreSectionForIntent(
                section.text,
                intent
              );

            const headings =
              getSectionHeadings(
                section.text
              );

            headings.forEach(
              (heading) => {
                score +=
                  scoreHeadingForIntent(
                    heading,
                    intent
                  );
              }
            );

            return {
              ...section,
              score,
            };
          })
          .filter(
            (section) =>
              section.score > 0
          )
          .sort(
            (a, b) =>
              b.score - a.score
          );

      const bestResult =
        scoredSections[0];

      if (!bestResult) {
        setMessages(
          (currentMessages) => [
            ...currentMessages,
            {
              type: 'assistant',
              text:
                "I couldn't find that information in the available equipment manual.",
            },
          ]
        );

        return;
      }

      setMessages(
        (currentMessages) => [
          ...currentMessages,
          {
            type: 'assistant',
            manual:
              manual.manual,
            pdf:
              manual.pdf,
            result:
              bestResult,
            question:
              submittedQuestion,
          },
        ]
      );
    } catch (error) {
      console.error(error);

      setMessages(
        (currentMessages) => [
          ...currentMessages,
          {
            type: 'assistant',
            text:
              'The manual could not be loaded for this equipment. A searchable manual may not have been added yet.',
          },
        ]
      );
    }
  };

  return (
    <div className="radio-assistant">

      <div className="radio-assistant-header">
        <h2>
          PACT Equipment Manual Assistant
        </h2>

        <p>
          Select your equipment and ask a
          question about its operation,
          programming, setup, or
          troubleshooting.
        </p>
      </div>

      <div className="radio-assistant-control">
        <label htmlFor="equipment-type">
          Equipment Type
        </label>

        <select
          id="equipment-type"
          value={equipmentType}
          onChange={
            handleEquipmentTypeChange
          }
        >
          {equipmentTypes.map(
            (type) => (
              <option
                key={type.id}
                value={type.id}
              >
                {type.label}
              </option>
            )
          )}
        </select>
      </div>

      <div className="radio-assistant-control">
        <label htmlFor="equipment-model">
          {selectedTypeLabel} Model
        </label>

        <select
          id="equipment-model"
          value={equipment}
          onChange={
            handleEquipmentChange
          }
        >
          <option value="">
            Select{' '}
            {selectedTypeLabel.toLowerCase()}
            ...
          </option>

          {manufacturers.map(
            (manufacturer) => (
              <optgroup
                key={manufacturer}
                label={manufacturer}
              >
                {filteredEquipment
                  .filter(
                    (item) =>
                      item.manufacturer ===
                      manufacturer
                  )
                  .map(
                    (item) => (
                      <option
                        key={
                          item.id
                        }
                        value={
                          item.id
                        }
                      >
                        {
                          item.name
                        }
                      </option>
                    )
                  )}
              </optgroup>
            )
          )}
        </select>

        {selectedEquipment && (
          <div
            style={{
              marginTop: '0.6rem',
              fontSize: '0.9rem',
              opacity: 0.8,
            }}
          >
            Selected:{' '}

            <strong>
              {
                selectedEquipment.manufacturer
              }{' '}
              {
                selectedEquipment.name
              }
            </strong>
          </div>
        )}
      </div>

      <div className="radio-assistant-chat">

        {messages.length === 0 ? (
          <div className="radio-assistant-empty">

            <strong>
              Ask the manual
            </strong>

            <p>
              {selectedEquipment
                ? `Ask a question about the ${selectedEquipment.manufacturer} ${selectedEquipment.name}.`
                : `Select a ${selectedTypeLabel.toLowerCase()} above to begin.`}
            </p>

          </div>
        ) : (
          messages.map(
            (message, index) => (
              <div
                key={index}
                className={
                  message.type ===
                  'user'
                    ? 'radio-message radio-message-user'
                    : 'radio-message radio-message-assistant'
                }
              >

                <div className="radio-message-label">
                  {message.type ===
                  'user'
                    ? 'You'
                    : 'Equipment Manual Assistant'}
                </div>

                {message.result ? (
                  <div>

                    <div
                      style={{
                        fontSize:
                          '1.05rem',
                        fontWeight:
                          '700',
                        marginBottom:
                          '0.65rem',
                      }}
                    >
                      {getBestHeading(
                        message.result
                          .text,
                        message.question
                      )}
                    </div>

                    <div
                      style={{
                        lineHeight:
                          '1.65',
                        fontSize:
                          '1rem',
                      }}
                    >
                      {getBestAnswer(
                        message.result
                          .text,
                        message.question
                      )}
                    </div>

                    <div
                      style={{
                        marginTop:
                          '1rem',
                        paddingTop:
                          '0.8rem',
                        borderTop:
                          '1px solid var(--ifm-color-emphasis-300)',
                        fontSize:
                          '0.9rem',
                      }}
                    >

                      <div>
                        <strong>
                          Source:
                        </strong>{' '}
                        {
                          message.manual
                        }{' '}
                        — Page{' '}
                        {
                          message.result
                            .page
                        }
                      </div>

                      <a
                        href={`${message.pdf}#page=${message.result.page}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display:
                            'inline-block',
                          marginTop:
                            '0.6rem',
                          fontWeight:
                            '700',
                        }}
                      >
                        View Manual
                      </a>

                    </div>
                  </div>
                ) : (
                  <div>
                    {message.text}
                  </div>
                )}

              </div>
            )
          )
        )}
      </div>

      <form
        className="radio-assistant-form"
        onSubmit={handleSubmit}
      >

        <label htmlFor="equipment-question">
          Ask a Question
        </label>

        <textarea
          id="equipment-question"
          rows="3"
          value={question}
          onChange={(event) =>
            setQuestion(
              event.target.value
            )
          }
          placeholder={
            selectedEquipment
              ? `Ask about the ${selectedEquipment.name}...`
              : `Select a ${selectedTypeLabel.toLowerCase()} first...`
          }
          disabled={!equipment}
        />

        <button
          type="submit"
          disabled={
            !equipment ||
            !question.trim()
          }
        >
          Ask Manual
        </button>

      </form>

      <div className="radio-assistant-notice">

        <strong>
          Manual-based answers only.
        </strong>{' '}

        The assistant searches approved
        equipment manuals and returns
        relevant information from those
        manuals. If the information cannot
        be found, it will say so rather than
        provide an unsupported answer.

      </div>

    </div>
  );
}