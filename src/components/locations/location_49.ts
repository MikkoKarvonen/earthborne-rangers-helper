import { LocationProp } from "../../types/LocationProp";

const location49: LocationProp = {
  location: 49,
  name: "VIRA, LAKE GUIDE",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                {
                  name: "IF A RANGER HAS BISCUIT BASKET EQUIPPED",
                  section: "49.1",
                },
                { name: "IF YOU'VE SAVED VIRA", section: "49.2" },
                { name: "OTHERWISE", section: "49.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU'VE SAVED VIRA", section: "49.4" },
                { name: "OTHERWISE", section: "49.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "49.6" }],
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
              "A massive, muscular arm drops over your shoulder, and you find yourself face-to-face with a tall woman wearing a thin smile.",
              "'Hello there,' the woman says. 'Name’s Vira, I make supply runs all over the lake.' She sniffs. 'Something in your bag sure smells good. Mind sharing?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Vira with  to charter her boat to immediately travel to any location on White Sky Lake.",
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
              "'Hello!' You hear the shout from the water and see Vira waving to you. You head over, and she clasps your hands. 'So, do you need to get somewhere? Normally, I stick around White Sky, but in your case, I’ll take you wherever a river reaches.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Vira with  to charter her boat to immediately travel to any location connected to a River path.",
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
              "The woman at the helm of the docked dolewood longboat has the shoulders that one earns after a life of paddling and pooling the Valley’s waterways. She nods curtly in your direction. 'I’m Vira, I make supply runs all over the lake.'",
              "She thinks for a moment after you introduce yourselves. “You know, if you need a ride somewhere around White Sky, I can take you. Just make sure you’re ready to go when you call on me.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Vira with  to charter her boat to immediately travel to any location on White Sky lake.",
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
              "Vira shoves her longboat away from the shore and begins heading into the current. As she does, she starts to whistle. You’re a bit surprised; you didn’t realize she could whistle, let alone such a cheerful tune.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You may immediately proceed to the travel phase of the round. If you do, you can travel to any location connected to a river (even if there are ready cards with the obstacle keyword in play). Use the river terrain type. If you choose to travel in this way, discard the current challenge card, and do not resolve the remainder of this test.",
              "If you choose not to travel, discard Vira, and resolve the remainder of the test as normal.",
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
              "You move down the shore and find Vira cleaning the deck of her longboat. She looks up and sighs. 'You ready?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You may immediately proceed to the travel phase of the round. If you do, you can travel to one of the following locations: Lone Tree Station, Golden Shore, or Atrox Mountain (even if there are ready cards with the obstacle keyword in play).",
              "Use the lakeshore terrain type when building the path deck. If you choose to travel in this way, discard the current challenge card, and do not resolve the remainder of this test.",
              "If you choose not to travel, discard Vira, and resolve the remainder of the test as normal.",
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
              "Vira growls. 'Well, that stung.'",
              "You attempt to help tend her injuries, but she waves you away irritatedly. You find yourself with nothing to do but make camp and wait for her to finish.",
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

export default location49;
