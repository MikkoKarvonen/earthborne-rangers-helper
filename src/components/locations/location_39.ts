import { LocationProp } from "../../types/LocationProp";

const location39: LocationProp = {
  location: 39,
  name: "A TRICK OF THE LIGHT",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE MET AN INTERLOPER", section: "39.1" },
                { name: "OTHERWISE", section: "39.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU’VE MET AN INTERLOPER", section: "39.4" },
                { name: "OTHERWISE", section: "39.5" },
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
              "A glint of light, a strange movement in the shadows, and you sense the familiar presence of the yeti. You see its form disappear behind a distant tree yet again.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You will have to clear A Trick of the Light with  to track down the yeti again.",
              "Go to 39.3.",
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
              "You see a dark shadow moving through the trees. You freeze, trying to get a better look at it. The shape seems humanoid, but taller than you, with a slightly forward-sloping posture. It steps into the light for a moment, and you catch a glimpse of a being covered in long fur. Then it steps behind a tree and vanishes. You hurry to the spot where you last saw it but find nothing.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You will have to clear A Trick of the Light with  to track down the mysterious figure.",
              "Go to 39.3.",
            ],
          },
        },
      ],
    },
    {
      index: 3,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If Kordo is in play:",
                text: [
                  {
                    type: "story",
                    text: [
                      "Kordo’s eyes light up, and he moves off toward the being. He pauses at the tree, then points to where a small branch has been half broken. Beyond that, some blades of grass have been bent over. Without a word, Kordo slinks off through the brush, beckoning you to follow.",
                    ],
                  },
                  {
                    type: "rule",
                    text: ["Add 5  to A Trick of the Light."],
                  },
                ],
              },
              {
                name: "Otherwise, read:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You look for impressions in the ground or broken twigs, for something—anything—to give evidence of this strange being. This would really interest an experienced tracker like Kordo down at Lone Tree.",
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
          condition: [
            {
              name: "IF KORDO, RANGER VETERAN IS IN PLAY",
              section: "39.6",
            },
            {
              text: {
                type: "story",
                text: [
                  "You turn, and a familiar form is standing before you. The yeti spreads both of its arms and reaches toward you, its furry hands hovering centimeters over your shoulders. Then it lowers its arms. Hesitantly, you stretch out your arms and do the same to it. The yeti hoots softly, a sound that seems somehow satisfied to you. Then it steps back and walks off into the forest. You feel a sense of calm knowing that you have a friend in these woods.",
                ],
              },
            },
          ],
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue."],
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
              "You move through the trees, not sure if you’re actually following something. You’re not even sure you really saw a being at all. You look for tracks, signs of passage, anything to guide your way. Then suddenly, you come around a tree and find yourself face to face with a tall, furry humanoid, with features that seem to be a blend between human and ... something else. You’ve heard stories of the yeti before, but you thought they were just that: stories!",
              "You look at the yeti for a long moment, and it looks back at you. Its eyes meet yours, and you feel oddly at peace, as if you and this yeti share an ancient kinship.",
              "You begin to speak, and in response, it rumbles in a low, somehow nonthreatening, manner. Then it steps back, and slips behind a tree. You move to follow, but it’s no longer there. Something glints on the ground, however, right where the being had been standing.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain Translocator reward card. Write MET AN INTERLOPER on the campaign tracker.",
            ],
          },
        },
        {
          condition: [
            {
              name: "IF KORDO, RANGER VETERAN IS IN PLAY",
              section: "39.6",
            },
            {
              text: {
                type: "story",
                text: [
                  "You try to follow the yeti, but it’s vanished again! You’re going to need someone more skilled in tracking than you to keep following this thing. You think Kordo back at Lone Tree might be able to help.",
                ],
              },
            },
          ],
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
              "At your side, Kordo breathes out slowly. 'Well, I’ll be planted! C’mon then, let’s keep after it!'",
              "Kordo quickly spots wisps of fur, small impressions in the ground, bent grass, and other signs of passage. He leads you on a rapid chase through the trees, pointing out each sign as he passes.",
              "After a long five minutes of running through the forest, the yeti stops on the far side of a small clearing. Kordo stops next to you and holds out his hands. 'Wait, wait. We mean you no harm.'",
              "The yeti looks at you all for a moment, but especially at Kordo. Then, slowly and deliberately, it nods. It takes a small silver ovoid from somewhere and sets it on the loam. Then, without any fuss, it fades into nothingness and disappears. Kordo stands unmoving, a smile as wide as the Valley on his face and tears of joy in his eyes.",
              "Later that day, Kordo finishes packing his bag. 'I’m headed back to Lone Tree. Thank you for this. I won’t forget it.'",
              "You clasp his shoulder and say farewell. He saunters down the trail, whistling a jaunty tune.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Discard Kordo. Return HELPING HAND to the collection. Gain Kordo’s Instinct reward card. Write FOUND KORDO'S QUARRY on the campaign tracker.",
            ],
          },
        },
      ],
    },
  ],
};

export default location39;
