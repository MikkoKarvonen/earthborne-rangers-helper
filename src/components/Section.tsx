import { useEffect, useState } from "react";
import { LocationProp, TextSection } from "../types/LocationProp";
import useSound from "use-sound";

import loc2sec0 from "../assets/audios/location2/0.mp3";

interface LocationProps {
  location: LocationProp;
  setSelectedLocation: (location: number) => void;
}

function Section({ location, setSelectedLocation }: LocationProps) {
  const [sectionNumber, setSectionNumber] = useState(0);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const [play, { stop }] = useSound(loc2sec0);

  const section = location.data[sectionNumber];

  const goToSection = (section?: string) => {
    stop();
    setAudioPlaying(false);
    if (section) {
      const [loc, sec] = section.split(".");
      setSelectedLocation(parseInt(loc));
      setSectionNumber(parseInt(sec));
    }
  };

  const renderText = (textSection: TextSection) => (
    <div
      style={{
        textDecoration: textSection.type === "rule" ? "underline" : "none",
      }}
    >
      {textSection.text.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  );

  const audioHandler = () => {
    if (audioPlaying) {
      stop();
      setAudioPlaying(false);
    } else {
      play();
      setAudioPlaying(true);
    }
  };

  useEffect(() => {
    stop();
    setAudioPlaying(false);
  }, [sectionNumber]);

  return (
    <div>
      <h1>
        {location.location}. {location.name}
      </h1>
      <div>
        <p>
          {location.location}.{sectionNumber}
        </p>
        <button onClick={() => audioHandler()}>
          {audioPlaying ? "◼" : "⏵"}
        </button>
        {section.section.map((s) => {
          if (s.text !== undefined) {
            const textSection = s.text;
            return renderText(textSection);
          }
          if (s.condition !== undefined) {
            return (
              <div>
                {s.condition.map((condition) => {
                  if (condition.name !== undefined) {
                    return (
                      <p>
                        If {condition.name}, go to{" "}
                        <button onClick={() => goToSection(condition.section)}>
                          {condition.section}
                        </button>
                      </p>
                    );
                  }
                  if (condition.text !== undefined) {
                    const textSection = condition.text;
                    return renderText(textSection);
                  }
                })}
              </div>
            );
          }
          if (s.choose !== undefined) {
            return (
              <div>
                <p>{s.choose.name}</p>
                {s.choose.values.map((choose) => {
                  return (
                    <>
                      <p>{choose.name}</p>
                      {choose.text?.map((text) => renderText(text))}
                    </>
                  );
                })}
              </div>
            );
          }
          if (s.multiCondition !== undefined) {
            return (
              <div>
                {s.multiCondition.map((condition) => {
                  if (condition.name !== undefined) {
                    return (
                      <>
                        <p>{condition.name}</p>
                        {condition.conditions.map((condition) => (
                          <p>
                            If {condition.name}, go to{" "}
                            <button
                              onClick={() => goToSection(condition.section)}
                            >
                              {condition.section}
                            </button>
                          </p>
                        ))}
                      </>
                    );
                  }
                })}
              </div>
            );
          }
        })}
        {location.data.length > 1 &&
          Array.from({ length: location.data.length }, (_, i) => (
            <button key={i} onClick={() => setSectionNumber(i)}>
              {i}
            </button>
          ))}
      </div>
      <button onClick={() => goToSection("0.0")}>Back</button>
    </div>
  );
}

export default Section;
