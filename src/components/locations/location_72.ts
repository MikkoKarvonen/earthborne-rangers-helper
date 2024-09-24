import { LocationProp } from "../../types/LocationProp";

const location72: LocationProp = {
  location: 72,
  name: "THE ROILING",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ name: "GO TO", section: "72.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "72.2" }],
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
              "You push through thick bunches of cattails and reeds, climbing over sunken logs and smooth rocks. Then, with a start, you realize the 'rocks' and 'logs' are too smooth and too evenly shaped to be natural. One shifts beneath your hand, and suddenly you realize you’ve been climbing around and through the tangled coils of many hydraworms.",
              "As they begin to writhe around you, a mass of worm bodies begins to rise out of the swamp. The worm knot looks like it's formed of dozens of hydraworms. This goliath is too large to be anything but the Roiling, the oldest and nastiest hydraworm in the Valley.",
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
              "The Roiling seems to have enough. The remaining heads snap back to the central body mass, wrapping around it protectively as the whole assembly thrashes and rolls deeper into the swamp. The Roiling may be back in the future, but you’ve definitely scared it off for today.",
            ],
          },
        },
      ],
    },
  ],
};

export default location72;
