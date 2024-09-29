import { LocationProp } from "../../types/LocationProp";

const location90: LocationProp = {
  location: 90,
  name: "MYSTERIOUS VERDESSIAN",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ section: "90.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "90.2" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "90.3" }],
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
              "The trail leads over a small rise and you find yourself looking down into a clearing. In the center, maybe fifty meters away, you can see a reclaimer. Strangely, it’s standing perfectly still.",
              "Then you see something moving alongside it. What you thought was a large flowering weed appears to be some sort of being. As you watch, it runs an appendage lightly along the reclaimer’s back, and you see small white flowers sprout from its spine.",
              "You take a single step, and even that slight movement causes the being’s head to turn in your direction. You’re going to have to approach very cautiously if you don’t want to scare it off.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear the Verdessian with  to silently observe its behavior.",
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
              "You stay far enough away not to alert the being and decide to follow it as it leaves the reclaimer and disappears into the underbrush. As you follow, you notice strange plants along the trail. The tiny, twisting vines don’t appear to be native to the Valley, but look similar to plants you heard of in the Verdessa. Perhaps that’s where this being is from? But in any case, perhaps you can follow the trail left by these vines.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Complete the WATCHER IN THE BRUSH mission. Gain the TRAIL OF VINES mission. Return the Mysterious Verdessian to the General set.",
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
              "You hear a splintering crack like a thick branch breaking and see the Verdessian collapse. It quakes as though touched by a gentle breeze then wilts like an uprooted thistle left in the sun. You think it may be dead.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Write VERDESSIAN KILLED? on the campaign tracker.",
              "If you are on the WATCHER IN THE BRUSH or DEEPER MOTIVES mission, complete that mission. Return the Mysterious Verdessian to the General set.",
            ],
          },
        },
      ],
    },
  ],
};

export default location90;
