

/* =========================================
   PACT CENTRAL EVENTS SCHEDULE

   All dates and times use Provo, Utah
   local time (America/Denver).

   Add events here as dates are confirmed.

   Event categories:
   - interface meeting
   - training exercise
   - event
   - simulated emergency test (set)
   ========================================= */

/* =========================================
   EVENT CATEGORIES
   ========================================= */

export const eventCategories = {
  interface: 'Interface Meeting',
  exercise: 'Training Exercise',
  event: 'Event',
  set: 'Simulated Emergency Test (SET)',
};

/* =========================================
   UPCOMING EVENTS

   Events are automatically sorted by date
   when displayed on the homepage.

   Date format: YYYY-MM-DD
   Time format: HH:MM (24-hour)

   Set homepage: true to allow an event
   to appear in the homepage event card.
   ========================================= */

export const events = [
  {
    id: 'interface-nov-2026',
    title: 'PACT Interface Meeting',
    type: 'interface',
    date: '2026-11-18',
    startTime: '19:00',
    endTime: '20:00',
    location: 'Provo Fire Station 22',
    description: 'PACT Radio Trailer Training',
    link: '/docs/training/meetings/',
    homepage: true,
  },

  {
    id: 'provo-prepared-2027',
    title: 'Provo Prepared Exercise',
    type: 'exercise',
    date: '2027-04-15',
    startTime: '18:00',
    endTime: '20:00',
    location: 'Provo, Utah',
    description:
      'Annual emergency communications exercise involving neighborhoods, Area Coordination Centers, district operators, and the Provo Emergency Operations Center.',
    link: '/docs/training/training-exercises/',
    homepage: true,
  },
];

/* =========================================
   COMMUNITY EVENT OPPORTUNITIES

   These activities are recurring volunteer
   opportunities without confirmed dates.

   Once a date is announced, move the event
   into the events array above and add its
   date, startTime, and endTime.

   All of these use type: 'event'.
   ========================================= */

export const eventOpportunities = [
  {
    id: 'provo-half-marathon',
    title: 'Provo Half Marathon',
    type: 'event',
    organizer: 'UCARES',
    description:
      'Volunteer amateur radio communications supporting race operations and coordination along the course.',
    link: '/docs/training/events/',
  },

  {
    id: 'freedom-festival-parade',
    title: 'Provo Freedom Festival Parade',
    type: 'event',
    organizer: 'UCARES',
    description:
      'Volunteer communications supporting parade operations, route coordination, and event personnel.',
    link: '/docs/training/events/',
  },

  {
    id: 'hike-light-the-y',
    title: 'Hike & Light the Y',
    type: 'event',
    organizer: 'BYU Amateur Radio Club',
    description:
      'Volunteer radio communications supporting event participants, trail positions, and event coordination on Y Mountain.',
    link: '/docs/training/events/',
  },
];

/* =========================================
   EVENT UTILITIES
   ========================================= */

/**
 * Returns upcoming events in chronological
 * order, based on Provo local time.
 *
 * Events remain upcoming until their
 * scheduled end time has passed.
 */
export function getUpcomingEvents(
  eventList = events,
  now = new Date()
) {
  return eventList
    .filter((event) => {
      if (!event.date || !event.startTime) {
        return false;
      }

      const endTime = event.endTime || event.startTime;

      const eventEnd = new Date(
        `${event.date}T${endTime}:00`
      );

      // Interpret scheduled times in Provo's
      // America/Denver time zone rather than
      // the visitor's browser time zone.
      const eventTime = getProvoEventTimestamp(
        event.date,
        endTime
      );

      return (
        Number.isFinite(eventTime) &&
        eventTime >= now.getTime()
      );
    })
    .sort((a, b) => {
      const aTime = getProvoEventTimestamp(
        a.date,
        a.startTime
      );

      const bTime = getProvoEventTimestamp(
        b.date,
        b.startTime
      );

      return aTime - bTime;
    });
}

/**
 * Convert a Provo-local date and time to
 * a Unix timestamp, accounting for
 * Mountain Standard/Daylight Time.
 */
function getProvoEventTimestamp(date, time) {
  const [year, month, day] = date
    .split('-')
    .map(Number);

  const [hour, minute] = time
    .split(':')
    .map(Number);

  if (
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    !Number.isInteger(hour) ||
    !Number.isInteger(minute)
  ) {
    return NaN;
  }

  const utcGuess = Date.UTC(
    year,
    month - 1,
    day,
    hour,
    minute
  );

  const formatter = new Intl.DateTimeFormat(
    'en-US',
    {
      timeZone: 'America/Denver',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23',
    }
  );

  const getOffset = (timestamp) => {
    const parts = Object.fromEntries(
      formatter
        .formatToParts(new Date(timestamp))
        .filter((part) => part.type !== 'literal')
        .map((part) => [part.type, Number(part.value)])
    );

    const localAsUTC = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute
    );

    return localAsUTC - timestamp;
  };

  let timestamp = utcGuess;

  // Two passes handle Mountain Time's
  // daylight-saving offset.
  for (let i = 0; i < 2; i++) {
    timestamp = utcGuess - getOffset(timestamp);
  }

  return timestamp;
}

/**
 * Return the next homepage-eligible event.
 */
export function getNextEvent(now = new Date()) {
  const upcoming = getUpcomingEvents(
    events.filter((event) => event.homepage),
    now
  );

  return upcoming[0] || null;
}
