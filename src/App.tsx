import { useState } from "react";
import locations from "./components/locations";
import Section from "./components/Section";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  const locationKey = `location${selectedLocation}` as keyof typeof locations;
  const location = locations[locationKey];

  return (
    <div className=" h-svh flex justify-center items-center">
      {selectedLocation === 0 ? (
        <div className="prose flex flex-wrap ">
          {Array.from({ length: Object.keys(locations).length + 1 }, (_, i) => (
            <button
              key={i}
              className="btn btn-neutral mx-2 my-1 flex-auto "
              onClick={() => setSelectedLocation(i)}
            >
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
