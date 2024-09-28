import { LocationProp } from "../../types/LocationProp";

const location81: LocationProp = {
  location: 81,
  name: "OURA VOS, TRAVELER",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF QUISI VOS IS IN PLAY", section: "80.2" },
                { name: "IF YOU'VE ACCEPTED SNACKS", section: "81.1" },
                { name: "OTHERWISE", section: "81.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF HELPING HAND IS ATTACHED TO OURA",
                  section: "81.3",
                },
                { name: "IF YOU'VE ACCEPTED SNACKS", section: "81.4" },
                { name: "OTHERWISE", section: "81.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "81.6" }],
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
              "“Greetings!” You hear a voice from up ahead and see Oura approaching. “You'll never guess who's gone off on another one of her adventures. Can you help me find Quisi again?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Oura with  to help Oura find Quisi once more."],
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
              "“Excuse me?” You hear the call from a little ways off and turn to see a woman striding toward you.",
              "“My name's Oura. I’m looking for my daughter. Have you seen her? About this tall? Green tunic? Asks a lot of questions?”",
              "You mention that you haven't seen her, and she throws up her hands. 'She was supposed to meet me at the Ranger Station hours ago. Can you help me find her?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Oura with  to help Oura find Quisi."],
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
              "Oura has been walking at a vigorous pace. When you call a halt to catch your breath, you can tell she’s eager to continue. She looks at you and says, 'I know this is taking you away from other tasks. Can you help me find Quisi? Or should I continue alone?'",
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
              "You offer to help again, and Oura smiles gratefully. 'I can always depend on you! I'm on her trail, but she's one step ahead of me as always. Maybe you can lure her out with those snacks of hers.'",
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
              "You offer to help, and Oura smiles gratefully. 'Thank you so much! I’ve been tracking Quisi for hours. I think I know where she’s going, but somehow the little trailblazer is always one step ahead of me. Maybe you can help?'",
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
              "Oura barks out in pain and staggers against a nearby tree. Although she denies it, you can tell the injury is bad. You go to her side and pull out your medical kit. This is going to take a while.",
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

export default location81;
