import { LocationProp } from "../../types/LocationProp";

const location82: LocationProp = {
  location: 82,
  name: "SIL BELAI, ARTIST",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE WITNESSED A MASTERPIECE", section: "82.1" },
                { name: "OTHERWISE", section: "82.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF HELPING HAND IS ATTACHED TO SIL, AND YOU ARE AT A MOUNTAIN LOCATION",
                  section: "82.3",
                },
                {
                  name: "IF HELPING HAND IS ATTACHED TO SIL, AND YOU ARE NOT AT A MOUNTAIN LOCATION",
                  section: "82.4",
                },
                { name: "IF YOU’VE WITNESSED A MASTERPIECE", section: "82.5" },
                { name: "OTHERWISE", section: "82.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "82.7" }],
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
              "Sil waves enthusiastically to you from her perch on an overlook above the trail. 'Well hello!' she calls. 'If it isn’t my favorite subject! How is protecting the Valley going?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Sil with  to watch as she finishes her painting."],
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
              "As you follow the path, you see a woman perched on a rock a few meters above the trail. She sees you at the same time and waves.",
              "'Hullo!' she calls out. You ask her what she’s doing, and she gestures to her easel. 'I’m trying to paint as much of the Valley as I can. This view is beautiful, but I could use a person in it to help with scale. Do you think you could just stand ... right ... there? Now try and look ... adventurous.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Sil with  to help her finish her painting."],
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
              "With a triumphant flourish, Sil adds a final stroke, looks at her canvas, and then back at the scene. She thinks for a moment, then leans back with a deep and satisfied sigh. 'I love it.' She looks at you. 'Thank you so much.'",
              "'Oh!' She exclaims and rummages around in her rucksack. 'I want you to have something.' She pulls out a well-used sketchbook and hands it to you. 'Drawings of flora and fauna from all over the Valley from when I was just starting out. There are a few blank pages left. I think you should be the one to fill them. See you next masterpiece!' She winks at you then begins to pack away her supplies.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Sil’s Sketchbook reward card. Write WITNESSED A MASTERPIECE on the campaign tracker. Discard Sil and return HELPING HAND to the collection.",
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
              "'This scenery is truly lovely, but the background just needs to be a mountain. Care to continue with me to a mountain?'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Absolutely!",
                text: [
                  {
                    type: "rule",
                    text: ["Discard all  from Sil."],
                  },
                ],
              },
              {
                name: "B) Say goodbye.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Sil and return HELPING HAND to your collection. Each Ranger soothes 2 fatigue.",
                    ],
                  },
                ],
              },
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
              "'Another day, another masterpiece!' Sil laughs and nibbles at the end of one of her brushes. 'I have to say, it was just so much fun painting you in the mountains. You aren’t heading up one right now, are you? Would you mind if I tag along and paint you again?'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Not at all!",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Sil.",
                    ],
                  },
                ],
              },
              {
                name: "B) Maybe next time.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Sil. Each Ranger soothes 2 fatigue."],
                  },
                ],
              },
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
              "'And ... done! I love your cloak! Such a nice color.' She takes a step back and appraises her work. 'You know, I can’t help but think that you would look even more heroic if you were posed on a mountain, with a sweeping view of the Valley behind you. I don’t suppose you'd be willing to accompany me to the top of a mountain and pose for me there? What do you think?'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Sounds fun! ",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Sil.",
                    ],
                  },
                ],
              },
              {
                name: "B) Some other time.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Sil. Each Ranger soothes 2 fatigue."],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      index: 7,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Sil gasps and stumbles. You move to help her, but one look tells you that you’re going to have to give up your current plans in order to get her to safety.",
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

export default location82;
