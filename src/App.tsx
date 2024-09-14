import { useState } from "react";
import "./App.css";
import locations from "./components/locations";
import Section from "./components/section";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locationKey = `location${selectedLocation}` as keyof typeof locations;
  const location = locations[locationKey];

  return (
    <div>
      {selectedLocation === 0 ? (
        <div>
          {Array.from({ length: 10 }, (_, i) => (
            <button key={i} onClick={() => setSelectedLocation(i)}>
              {i}
            </button>
          ))}
        </div>
      ) : (
        <Section
          location={location}
          setSelectedLocation={setSelectedLocation}
        />
      )}
    </div>
  );
}

export default App;
