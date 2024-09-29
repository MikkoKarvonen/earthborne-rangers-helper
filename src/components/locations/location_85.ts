import { LocationProp } from "../../types/LocationProp";

const location85: LocationProp = {
  location: 85,
  name: "CALYPSA, RANGER MENTOR",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ name: "GO TO", section: "85.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF HELPING HAND IS ATTACHED TO CALYPSA",
                  section: "85.2",
                },
                { name: "OTHERWISE", section: "85.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "85.4" }],
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
              "You come across Calypsa in the middle of a field as she is teaching something to Kal Iver. She waves you over. 'I’ve just been discussing some lessons with Kal,' she says. 'Care to sit in?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Calypsa with  to learn from the wise Ranger."],
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
              "You come panting back into the field, and Calypsa looks at you expectantly. 'So, how did you do?'",
            ],
          },
        },
        {
          choose: {
            name: "COUNT THE TOTAL FATIGUE BETWEEN ALL RANGERS, AND READ THE CORRESPONDING ENTRY:",
            values: [
              {
                name: "0 Fatigue.",
                text: [
                  {
                    type: "story",
                    text: [
                      "Calypsa shakes her head. “Did you even bother to try?”",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Discard Calypsa and return HELPING HAND to the collection.",
                    ],
                  },
                ],
              },
              {
                name: "1 - 4 Fatigue.",
                text: [
                  {
                    type: "story",
                    text: [
                      "Calypsa smiles at you. “A good effort. But I’m afraid Kal pushed himself further than you did. He’ll win this competition for today.”",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Discard Calypsa and return HELPING HAND to the collection.",
                    ],
                  },
                ],
              },
              {
                name: "More than 4 Fatigue.",
                text: [
                  {
                    type: "story",
                    text: [
                      "Calypsa raises her eyebrows. “Oh my. Very well done! You win the competition.” She claps your shoulder and slips a small badge into your hands, then looks serious. “Now, just remember to not push yourself harder than you need to. As with so many things, we should try and find balance in our actions.”",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Gain the Ranger Badge reward card. Discard Calypsa and return HELPING HAND to the collection.",
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
      index: 3,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Calypsa gestures to the field around you. 'As Rangers, we have a responsibility to the Valley. Not only to our friends and neighbors, but to the Valley and every living being within it.'",
              "'Look around us,' she says, and you dutifully study the meadow. 'The grasses, the bushes, the insects, the birds … the Valley is full of life. When we move through it, we cannot help but affect it.' She takes a few steps then gestures behind her to the grass crushed beneath her boots. 'That’s why we should think before we act. It can often be better to observe and otherwise avoid the living things in the Valley. And when we can’t observe …'",
              "She reaches into her pocket and pulls out a small chunk of meat. She tosses it into the middle of a field, and you hear a screech. An eagle swoops down, pouncing on the morsel. Calypsa smiles. 'It can be better to distract.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Exhaust one non-human being in play."],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "'Of course,' Calypsa says, 'there are a lot of beings in this Valley. Sometimes, there are too many to avoid or even to distract. Sometimes, you have to press on, even when it’s dangerous or tiring. Exhaustion, fatigue; these can be worthwhile trade-offs for accomplishing important tasks. You need to be willing to push yourself, and tire yourself, if you’re going to get everything done in a day that you need to do.'",
              "She looks at you and Kal. 'Perhaps a competition will teach you what I mean. Which of you can push yourselves more? Shall we find out?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "If you take on this challenge, it will discard your current fatigue stack.",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Agree to the test.",
                text: [
                  {
                    type: "story",
                    text: [
                      "Calypsa smiles. “Very good! Alright, go and suffer as much fatigue as you can, then come check back in with me. Whoever pushes themselves further will get a reward.”",
                      "Kal grins at you. “I’d wish you good luck, but all the luck in the world isn’t going to help you beat me.”",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Calypsa. Each Ranger discards their fatigue stack.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Calypsa. Each Ranger soothes 2 fatigue."],
                  },
                ],
              },
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
              "Calypsa gasps and drops down on one knee. As you move over to her, she looks up. 'I’ll admit it,' she says. 'I'm hurt.' She winces as you get out some medical supplies and get to work treating her injuries.",
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

export default location85;
