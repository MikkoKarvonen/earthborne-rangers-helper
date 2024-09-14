import { useState } from "react";

interface locationProps {
  location: {
    location: number;
    name: string;
    data: {
      index: number;
      text?: string;
      condition?: {
        name?: string;
        section?: string;
        text?: string;
      }[];
    }[];
  };
  setSelectedLocation: (location: number) => void;
}

function Section({ location, setSelectedLocation }: locationProps) {
  const [sectionNumber, setSectionNumber] = useState(0);

  const section = location.data[sectionNumber];

  const goToSection = (section?: string) => {
    if (section) {
      const [loc, sec] = section.split(".");
      setSelectedLocation(parseInt(loc));
      setSectionNumber(parseInt(sec));
    }
  };

  return (
    <div>
      <h1>
        {location.location}. {location.name}
      </h1>
      <div>
        <p>
          {location.location}.{sectionNumber}
        </p>
        {section.text ? (
          <p>{section.text}</p>
        ) : (
          section.condition?.map((condition, conditionIndex) => (
            <div key={conditionIndex}>
              {condition.name ? (
                <p>
                  If {condition.name}, go to{" "}
                  <button onClick={() => goToSection(condition.section)}>
                    {condition.section}
                  </button>
                </p>
              ) : (
                <p>{condition.text}</p>
              )}
            </div>
          ))
        )}
        {location.data.length > 1 &&
          Array.from({ length: location.data.length }, (_, i) => (
            <button key={i} onClick={() => setSectionNumber(i)}>{i}</button>
          ))}
      </div>
      <button onClick={() => goToSection("0.0")}>Back</button>
    </div>
  );
}

export default Section;
