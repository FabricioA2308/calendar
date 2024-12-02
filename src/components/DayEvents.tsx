// Component for displaying all events in the specified day

import EventDetails, { Event } from "./EventDetails";

export default function DayEvents(date: any, events: Array<Event>) {
  // todo filtering by day

  return (
    <>
      <h1>Events for {date}</h1>
      <ul>
        {events.map((event) => (
          <EventDetails event={event} />
        ))}
      </ul>
    </>
  );
}
