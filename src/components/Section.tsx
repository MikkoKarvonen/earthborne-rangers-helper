interface locationProps {
  location: {
    location: number;
    name: string;
    data: {
      index: number;
      text?: string;
      condition?: {
        name?: string;
        section?: number;
        text?: string;
      }[];
    }[];
  };
  setSelectedLocation: (location: number) => void;
}

function Section({ location, setSelectedLocation }: locationProps) {
  return (
    <div>
      <h1>
        {location.location}. {location.name}
      </h1>
      {location.data.map((item, index) => (
        <div key={index}>
          {item.text ? (
            <p key={item.index}>{item.text}</p>
          ) : (
            item.condition?.map((condition, conditionIndex) => (
              <div key={conditionIndex}>
                {condition.name ? (
                  <p>
                    If {condition.name}, go to {condition.section}
                  </p>
                ) : (
                  <p>{condition.text}</p>
                )}
              </div>
            ))
          )}
        </div>
      ))}
      <button onClick={() => setSelectedLocation(0)}>0</button>
    </div>
  );
}

export default Section;
