import { LocationProp } from "../../types/LocationProp";

const location93: LocationProp = {
  location: 93,
  name: "THE FALL OF SPIRE",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "DACE, AMBITIOUS SHAPER", section: "93.1" },
                { name: "ELDER MORA ORLIN", section: "93.2" },
                { name: "TOLLIN LANG, SCULPTOR", section: "93.3" },
                {
                  name: "THE CARBON FORGE, A HEARTY BREW, OR ARCOLOGY THRESHOLD",
                  section: "93.4",
                },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "DACE, AMBITIOUS SHAPER", section: "93.5" },
                { name: "ELDER MORA ORLIN", section: "93.6" },
                { name: "TOLLIN LANG, SCULPTOR", section: "93.7" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "ARCOLOGY THRESHOLD", section: "93.8" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "DACE, ELDER MORA ORLIN, OR TOLLIN LANG",
                  section: "93.9",
                },
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
              "You see a small group of people hesitantly making their way through the streets. Suddenly you hear someone shout from above you. You look up and see the shaper Dace standing on a rooftop. 'Come on!' She yells down to the two dozen people below her. 'Turn left! I don’t see any reclaimers for at least three buildings!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Dace with  to get her group out of the village. If you have KIND WORDS WITH DACE, add 2  to her.",
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
              "As you rush down the streets, suddenly a reclaimer flies out of a nearby window and lands in a broken heap on the street in front of you. You hear a bellowing voice shout '—and stay out!'",
              "You look in the window and see Elder Orlin standing in front of a group of frightened villagers. She spins a large hammer in slow circles, and as she does, the hammer’s head begins to glow blue and hum. As you start to call out to her, another reclaimer charges through a side door, and Elder Orlin pivots and swings. The hammer connects with the reclaimer’s chest with a flash of blue light and the tang of ozone. Then she turns and catches sight of you.",
              "'We’ve got to get these people to safety!' she says, swinging her hammer once again.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Orlin with  to get her group out of the city. If you have IMPRESSED ELDER ORLIN, add 2  to her.",
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
              "You hear Tollin Lang before you see him. The young artist comes around a corner leading a few dozen townsfolk. 'Keep up, keep up!' he shouts. 'We’re close, now! Just stay together!'",
              "He sees you and the relief on his face is immediate. 'Thank the ancestors! Help me get these people out of here!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Tollin with  to get his group out of the city. If you have APPRECIATED TOLLIN’S ART, add 2  to him.",
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
              "The structure is nearly unrecognizable due to the number of reclaimers crawling over its surface, which itself glistens with reproductive mucus. Where there are grubs, the building material is slowly sloughing off like bark from a rotting tree. If there's anyone left inside, you need to get them out before the structure collapses.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear this feature with  before it clears from  to avoid suffering fatigue.",
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
              "It takes almost an hour, but you finally get Dace’s group to the safety of the far bank of the Silverfin River. Dace herself carries the last of the people—a young boy—in a bounding flight across the water. Accompanied by a rush of wind, she gracefully lands beside you. 'Thank you,' she says. 'I can take it from here.'",
              "Write DACE’S GROUP SAVED on the campaign tracker, and return Dace, Ambitious Shaper to the collection.",
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
              "You and Elder Orlin’s group steadily make your way across the bridge, fighting off reclaimers with every step. Elder Orlin stands shoulder to shoulder with you, swinging her hammer at any reclaimer that dares cross her path.",
              "Once you reach the bank of the Silverfin, Elder Orlin catches her breath. 'I haven't gotten that much exercise in eighty years!' she says as she wipes the sweat from her brow. 'You've done well. I can keep an eye on them from here.'",
              "Write ELDER ORLIN’S GROUP SAVED on the campaign tracker, and return Elder Mora Orlin to the collection.",
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
              "You lead Tollin’s group down to the intake inlets for Spire’s hydroelectric generators. There you find a pair of large seed barges and get everyone aboard. As they cast off, Tollin claps you on your shoulder. 'Thanks for getting us out! I think we'll be all right if you still need to help anyone else.'",
              "Write TOLLIN’S GROUP SAVED on the campaign tracker, and return Tollin Lang, Sculptor to the collection.",
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
              "As you approach the threshold, you notice that nearly every reclaimer in Spire is moving in your direction, funneling into the excavated arcology entrance, then disappearing into the darkness below. Is this what truly drew them to Spire? Something buried deep in the arcology ruin? Regardless of their motivations, you decide that if they want to claim the tunnels of the arcology, they can have them. Your priorities lie on the surface.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Discard the Arcology Threshold."],
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
              "As you make the turn toward the exit, a wave of reclaimers breaks your line of sight to the group of villagers. You'll need to find them again if you hope to guide them to safety.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Shuffle the villager who cleared from  into the Spire deck. Do not end the day.",
            ],
          },
        },
      ],
    },
  ],
};

export default location93;
