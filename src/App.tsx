import { useState } from "react";
import "./App.css";
import data from "./jsons/2.json";

function App() {
  const [selectedLocation, setSelectedLocation] = useState(0);

  return (
    <div>
      {selectedLocation === 0 ? (
        <button onClick={() => setSelectedLocation(2)}>2</button>
      ) : (
        <div>
          <h1>
            {data.location}. {data.name}
          </h1>
          <p>{data.data.text}</p>
          <button onClick={() => setSelectedLocation(0)}>0</button>
        </div>
      )}
    </div>
  );
}

export default App;
