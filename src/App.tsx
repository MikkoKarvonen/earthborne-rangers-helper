import "./App.css";
import data from "./jsons/2.json";

function App() {
  return (
    <div>
      <h1>
        {data.location}. {data.name}
      </h1>
      <p>{data.data.text}</p>
    </div>
  );
}

export default App;
