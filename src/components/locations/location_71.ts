import { LocationProp } from "../../types/LocationProp";

const location71: LocationProp = {
  location: 71,
  name: "OL' BLOODY CLICKER",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF DANCER’S ROUND IS IN PLAY", section: "71.1" },
                { name: "OTHERWISE", section: "71.2" },
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
              "As you dance along in time to the music, you feel the ground suddenly shake beneath your feet. The musicians stop and the dancers pause.",
              "Suddenly, the center of the green collapses downward. People run screaming from the pit, and you see feelers and then giant, snapping mandibles rise up into the air. The segmented, sinuous form of Ol’ Bloody Clicker erupts from the earth, and all of the villagers flee.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Discard Dancer’s Round."],
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
              "You pause as you hear a faint sound. Not even daring to breathe, you strain your ears and in the distance you hear a … click …. click … click … like metal shards dropping one by one onto a piece of glass.",
              "You wait, and the clicking subsides. With a shudder, you let out your breath and take a step … only to jump away as the ground collapses right in front of you. A huge spindlescuttler, all shiny brown carapace, slicing mandibles, and hundreds of legs, rears above you.",
            ],
          },
        },
      ],
    },
  ],
};

export default location71;
