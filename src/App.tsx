import { useState } from "react";
import "./App.css";
import locations from "./components/locations";
console.log("🚀 ~ locations:", Object.keys(locations));
import Section from "./components/section";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locationKey = `location${selectedLocation}` as keyof typeof locations;
  const location = locations[locationKey];

  return (
    <div>
      {selectedLocation === 0 ? (
        <div>
          {Array.from({ length: Object.keys(locations).length }, (_, i) => (
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
