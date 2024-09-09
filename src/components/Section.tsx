interface locationProps {
  location: {
    location: number;
    name: string;
    data: {
      index: number;
      text: string;
    };
  };
  setSelectedLocation: (location: number) => void;
}

function Section({ location, setSelectedLocation }: locationProps) {
  return (
    <div>
      <h1>
        {location.location}. {location.name}
      </h1>
      <p>{location.data.text}</p>
      <button onClick={() => setSelectedLocation(0)}>0</button>
    </div>
  );
}

export default Section;
