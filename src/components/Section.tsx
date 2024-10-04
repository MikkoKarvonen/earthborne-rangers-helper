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
      className={
        textSection.type === "rule"
          ? ""
          : "bg-base-200 px-5 py-1 border-2 border-base-300"
      }
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
    <div className="prose h-fit">
      <div className="flex justify-center">
        <h1>
          {location.location}. {location.name}
        </h1>
      </div>
      <div>
        <div className="flex justify-between">
          <p>
            {location.location}.{sectionNumber}
          </p>
          {import.meta.env.VITE_ENABLE_AUDIO && (
            <button className="btn btn-neutral" onClick={() => audioHandler()}>
              {audioPlaying ? "◼" : "⏵"}
            </button>
          )}
        </div>
        {section.section.map((s) => {
          if (s.text) {
            const textSection = s.text;
            return renderText(textSection);
          }
          if (s.condition) {
            return (
              <div>
                {s.condition.map((condition) => {
                  if (condition.name) {
                    return (
                      <p>
                        If {condition.name}, go to{" "}
                        <button
                          className="btn btn-neutral"
                          onClick={() => goToSection(condition.section)}
                        >
                          {condition.section}
                        </button>
                      </p>
                    );
                  }
                  if (condition.text) {
                    const textSection = condition.text;
                    return <>OTHERWISE, READ: {renderText(textSection)}</>;
                  }
                })}
              </div>
            );
          }
          if (s.choose) {
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
          if (s.multiCondition) {
            return (
              <div>
                {s.multiCondition.map((condition) => {
                  if (condition.name) {
                    return (
                      <>
                        <p>{condition.name}</p>
                        {condition.conditions.map((condition) => (
                          <p>
                            {condition.name ? (
                              <>{condition.name}, GO TO </>
                            ) : (
                              "GO TO"
                            )}
                            <button
                              className="btn btn-neutral"
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
            <button
              key={i}
              className="btn btn-neutral mx-2"
              onClick={() => setSectionNumber(i)}
            >
              {i}
            </button>
          ))}
      </div>
      <div className="flex justify-center pt-5">
        <button className="btn btn-ghost" onClick={() => goToSection("0.0")}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Section;
