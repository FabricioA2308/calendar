import "./App.css";
import DayEvents from "./components/DayEvents";

function App() {
  const placeholder = JSON.parse(
    '[{"date": "02/30", "events": [{"title": "Event title", "description": "Event description", "date": "02/30", "hour":"1PM"}]}]'
  );

  return (
    <>
      <DayEvents date={placeholder.date} events={placeholder.events} />
    </>
  );
}

export default App;
