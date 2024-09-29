import { LocationProp } from "../../types/LocationProp";

const location84: LocationProp = {
  location: 84,
  name: "TALA THE RED, EXILE",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE FOUND TALA A HOME", section: "84.1" },
                { name: "OTHERWISE", section: "84.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF HELPING HAND IS ATTACHED TO TALA",
                  section: "84.3",
                },
                { name: "IF YOU’VE FOUND TALA A HOME", section: "84.4" },
                { name: "OTHERWISE", section: "84.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "84.6" }],
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
              "You spot Tala talking to Kesis Merklain, a vertical gardener and a fixture of Tumbledown. 'Yes, this axe was made for climbing, but it works just as well for self-defense!' She explains to the elderly man, who looks a little horrified. 'Hold it like this – maybe with both hands...' Tala pauses when she sees you. 'Oh hello!' she calls.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Tala with  to ask her about her new home."],
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
              "You don’t know everyone in the Valley, but the moment you spot the woman walking toward you, you can tell she’s not a local. It’s not just the heavy furs and well-used ice axe hanging from her belt; the tightness around her eyes and mouth expresses discomfort with everything around her.",
              "You greet her, and she stares at you warily. 'I’m Tala the Red,' she finally replies reluctantly. 'Formerly of the Ice Clans to the north.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Tala with  to ask her about her exile."],
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
              "You ask Tala if she cares to explain more about the circumstances of her exile. She scowls. 'I am forbidden to speak of it,' she says curtly. 'Now, do you want to help me find a place to live here in the Valley or not?'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Continue Helping Her.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard all  from Tala."],
                  },
                ],
              },
              {
                name: "B) Stop for Today.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Tala and return HELPING HAND to your collection. Each Ranger soothes 2 fatigue.",
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
      index: 4,
      section: [
        {
          text: {
            type: "story",
            text: [
              "'I'm settling in,' Tala says. 'Elder Wellers has me working on a few cliffside maintenance projects since I'm so comfortable with heights. The Waterspinner always needs some sort of work done to it. Kesis here also needs help tending to his cliffside gardens.' She shakes her head and laughs. 'Thank you again, for helping me find this place. It's wonderful.' She turns away. 'Hey, Kesis! Don't hurt yourself now! Let me help you with that axe.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Discard Tala. Each Ranger soothes 2 fatigue."],
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
              "You know a little about the Ice Clans; they’re said to live in massive frozen palaces in the coldest parts of mountains. You ask Tala why she is 'formerly' from the Ice Clans, and she glares and looks away. 'It’s because I was exiled,' she says. 'Now I’m looking for a place to live. You got a problem with me living in your precious Valley?'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) No problem whatsoever.",
                text: [
                  {
                    type: "story",
                    text: [
                      "Despite her harshness, you think you sense a bit of vulnerability in her response. Hesitantly, you suggest that if she is looking for a place to live, you could take her around the Valley and see if any of the villages would be a good fit.",
                      "Tala looks startled at the offer. “You’d … help me with that?” When you assure her that you would, she sets her face back into a stern expression. “Thanks, then. Let’s go.” You set off, figuring that you’ll have to take her to different inhabited locations to see how she feels about each.",
                      "White Sky, Spire, Branch, Meadow, or Tumbledown all seem like good possibilities to you.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Tala.",
                    ],
                  },
                ],
              },
              {
                name: "B) Leave her in peace.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Tala. Each Ranger soothes 2 fatigue."],
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
              "Tala howls in pain. You turn to her, seeing her ice axe clutched in one hand and her eyes wide with fury. You patiently try to calm her down so that you can look at the injury, but it may take a while.",
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
    {
      index: 7,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You take Tala around White Sky. She spends a long time sitting on the edge of one of the platforms, staring across the lake. But then she gets up and shakes her head. 'I like the water, but it’s too calm. Too peaceful here. I want to live somewhere with some excitement, where you really get to see the fury of nature.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Return to entry 3, and read the next 'If' statement in sequence.",
            ],
          },
        },
      ],
    },
    {
      index: 8,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You take Tala around Spire, from the taverns and streets to the tops of the highest balconies in the shadow of the Spire. She looks happy on the balconies, but as soon as you suggest going back into town, she flinches. 'I like the heights, but you have way too many people here!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Return to entry 5, and read the next 'If' statement in sequence.",
            ],
          },
        },
      ],
    },
    {
      index: 9,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You take Tala through the trees of Branch but she keeps looking more and more uncomfortable. 'This place is so enclosed. I like trees, but I’m used to looking down on them from high above.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Return to entry 6, and read the next 'If' statement in sequence.",
            ],
          },
        },
      ],
    },
    {
      index: 10,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You don’t spend too long in Meadow before you can tell Tala isn’t happy here. 'The Ice Clans live on top of mountains. It’s so flat here. I've heard tell of a scenic overlook to the south that sounds promising.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Return to entry 8, and read the next 'If' statement in sequence.",
            ],
          },
        },
      ],
    },
    {
      index: 11,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You lead Tala to the edge of Tumbledown, overlooking the falls. Suddenly she whoops with excitement, a shout that almost startles you out of your boots. 'Look at this place!' she shouts. 'It’s just like the cliffs and mountains at home, even if it is a bit warm! Let’s go, I want to meet the people who live here.' You head down to the village, but you’re already sure that you’ve found Tala’s new home.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Tala’s Perseverance reward card. Discard Tala, and return HELPING HAND to the collection. Permanently move Tala to the Tumbledown set. Record FOUND TALA A HOME on the campaign tracker. Return to entry 10, and read the next 'If' statement in sequence.",
            ],
          },
        },
      ],
    },
  ],
};

export default location84;
