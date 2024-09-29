import { LocationProp } from "../../types/LocationProp";

const location30: LocationProp = {
  location: 30,
  name: "MICHAEL'S BOG",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "IF KASENDE, EXPERT HUNTER IS IN PLAY", section: "30.1" },
            {
              text: {
                type: "story",
                text: [
                  "Amidst the swirling white mist, you can barely make out the shape of the ruin, nearly swallowed up by mounds of grass and half-sunken into the murky water. Calypsa told you the whole bog was named after the first artifact an intrepid explorer found within, a red steel device of unknown purpose, inscribed with the characters: ‘—ty of Michael.’",
                ],
              },
            },
          ],
        },
      ],
    },
    {
      index: 1,
      section: [
        {
          text: {
            type: "story",
            text: [
              "“Here we are,” Kasende says. “Michael's Bog.”",
              "Amidst the swirling white mist, you can barely make out the shape of a ruin, nearly swallowed up by mounds of grass and half sunken into the murky water. Beyond, the trail leads to the swamp, and you hear a rhythmic sloshing sound as something moves through the muck.",
              "Kasende unslings her whispercrack darter. “Time to go to work,” she says. “Keep an eye out. The hydraworms like to hide just beneath the surface of the water.” You follow her into the swamp ready to “prune” some hydraworms.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear a hydraworm, then clear Kasende with  to help her hunt.",
            ],
          },
        },
      ],
    },
  ],
};

export default location30;
