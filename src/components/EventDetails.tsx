// Component used to display the dtails of a specified event.

export interface Event {
  title: string;
  description: string;
  date: string;
  hour: string;
}

interface EventProps {
  event: Event;
  children?: string;
}

export default function EventDetails(props: EventProps) {
  const { title, description, date, hour } = props.event;

  return (
    <>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{date}</p>
      <p>{hour}</p>
    </>
  );
}
