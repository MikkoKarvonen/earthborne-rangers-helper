import { useState } from "react";
import "./App.css";
import locations from "./components/locations";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locationKey = `location${selectedLocation}` as keyof typeof locations;
  const location = locations[locationKey];

  return (
    <div>
      {selectedLocation === 0 ? (
        <button onClick={() => setSelectedLocation(2)}>2</button>
      ) : (
        <div>
          <h1>
            {location.location}. {location.name}
          </h1>
          <p>{location.data.text}</p>
          <button onClick={() => setSelectedLocation(0)}>0</button>
        </div>
      )}
    </div>
  );
}

export default App;
