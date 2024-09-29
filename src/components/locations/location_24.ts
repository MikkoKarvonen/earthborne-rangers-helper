import { LocationProp } from "../../types/LocationProp";

const location24: LocationProp = {
  location: 24,
  name: "GREENBRIAR KNOLL",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "JARIS, WILLFUL YOUTH IS IN PLAY", section: "24.1" },
            {
              text: {
                type: "story",
                text: [
                  "The head-high grass makes it impossible to spot the knoll until the ground slopes upward, and you begin to climb a gentle grade.",
                  "As you finish your ascent, you find yourself on a hilltop. At the summit, you find a dais of time-worn and lichen-crusted stone, with narrow threads of metal weaving through it. You can see the dulled and patinated threads form distinct patterns—the mark of the Estians.",
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
              "As you ascend the slope, Jaris sprints ahead of you to the top. You circle around the dais of overgrown stone at the summit of the knoll, and you set down your packs and make camp. In the failing light of evening, you drift off to sleep.",
              "You wake with a start. You sit up. All is dark and still. You realize you’re alone. The bedrolls are empty. A chill runs up your spine as you look frantically around the dais. Then, as you stand at the center of the knoll, you hear a rustling in the grass ... just behind you.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Set aside your other game components. Shuffle the challenge discard into the challenge deck.",
              "Starting with the lead Ranger, going clockwise, each Ranger may draw a challenge card and place it faceup in front of them, or choose to pass. Once a Ranger passes, they are out, and cannot draw any more challenge cards.",
              "If a Ranger draws a challenge card with a  icon, they may choose to place it in front of a different Ranger who has not passed.",
              "When any Ranger has a matching pair of challenge icons in front of them, do the following based on which icon there’s a pair of:",
              "2 or more : You have conquered your fears! Gain the Face Your Fears reward card.",
              "2 or more : You gain flashes of insight into your near future. Scout 6 path cards and gain 1 energy of each aspect.",
              "2 or more : Fear overwhelms you! Suffer 1 injury, and discard all the challenge cards in front of you. You may not draw any more or have cards placed in front of you.",
              "Once all Rangers have passed or been overwhelmed by fear, continue.",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "You sit up to find the knoll still bathed in the dull red glow of late evening. Jaris sits up as well, gasping suddenly, then visibly relaxes when he sees you. For a long moment, you silently stare at each other. Jaris shudders. “Let’s get out of here,” he says.",
              "You clasp Jaris on the shoulder and congratulate him on being tough enough to sleep on Greenbriar Knoll.",
              "Jaris places his hand on your shoulder, clearly affected. “It wasn’t at all like people said. It was like the knoll was trying to get me to understand something. I’m not sure what.” Jaris gives you a rare smile, then starts down the trail back to Meadow.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Discard Jaris. Return HELPING HAND to the collection. Write FACED YOUR DEEPEST FEARS on the campaign tracker. Shuffle the challenge discard into the challenge deck.",
            ],
          },
        },
      ],
    },
  ],
};

export default location24;
