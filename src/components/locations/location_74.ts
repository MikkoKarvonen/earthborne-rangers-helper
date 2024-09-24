import { LocationProp } from "../../types/LocationProp";

const location74: LocationProp = {
  location: 74,
  name: "AELL, AMBITIOUS SHAPER",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU ARE ON GRUESOME FEAST", section: "74.1" },
                {
                  name: "IF YOU ARE ON REMOVE THE RECLAIMERS",
                  section: "1.19",
                },
                { name: "OTHERWISE", section: "74.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU ARE ON WASHED AWAY", section: "74.4" },
                { name: "OTHERWISE", section: "74.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU ARE ON WASHED AWAY", section: "1.22" },
                { name: "IF YOU ARE ON GRUESOME FEAST", section: "74.6" },
                { name: "OTHERWISE", section: "74.7" },
              ],
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
              "From amidst the chaos of the reclaimers entering the swamp, you hear a yell and see a brightly colored figure making his way toward you. After disappearing after the flood all those days ago, it looks like Aell made his way to the marsh.",
              "“What is happening?” he exclaims. “After last time, I’m a bit nervous about my powers, but I can try to help you the best I can.”",
            ],
          },
        },
      ],
    },
    {
      index: 2,
      section: [
        {
          text: {
            type: "story",
            text: [
              "As you slog through the half-drowned trail, you hear a splashing in the water up ahead. You look up to see Aell sitting on a log. The shaper looks half-drenched and thoroughly miserable.",
              "“What are you doing here?” he grunts, refusing to look in your direction. “Can’t you leave me in peace?”",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Clear Aell with  to convince him to use his powers again.",
            ],
          },
        },
      ],
    },
    {
      index: 3,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Spiraling streams of thick white vapor rise up around Aell as he raises his conduit into the air. The staff roars like a distant thunderstorm, and sparks leap up from its tip and into the clouds above. You can see roiling thunderheads stretched to the horizon, ready to dump their payloads of rain.",
              "Aell spins his conduit with a flourish, and the sky darkens even further.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You may attach a Flood card to a path card of your choice. Then discard all  from Aell.",
            ],
          },
        },
      ],
    },
    {
      index: 4,
      section: [
        {
          text: {
            type: "story",
            text: [
              "As Aell tries to focus on his conduit, you remind him to focus on just what is needed, not what is possible. Your quiet, firm voice helps center him, and he slowly but surely begins to reach out into the sky. Clouds skid across the horizon as the weather of the Valley begins to change.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Replace the weather card with another weather card of your choice. It maintains the same number of tokens. Then, discard Aell.",
            ],
          },
        },
      ],
    },
    {
      index: 5,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You hear a yell followed by a crack of thunder. You turn to see Aell, his conduit raised high, laughing as he's surrounded by reclaimers and hydraworms, lightning coursing through the air. Then you see him fall to his knees, and he vanishes from sight as the biomelds overtake him.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Record AELL LOST on the campaign tracking sheet. Permanently remove Aell from the Marsh of Rebirth set. Do not end the day.",
            ],
          },
        },
      ],
    },
    {
      index: 6,
      section: [
        {
          text: {
            type: "story",
            text: [
              "With a shocked cry, Aell collapses, dropping his conduit. You go to his side, get him to safety, and tend to his wounds.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["End the day."],
          },
        },
      ],
    },
  ],
};

export default location74;
