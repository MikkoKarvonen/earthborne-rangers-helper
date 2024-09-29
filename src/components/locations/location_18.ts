import { LocationProp } from "../../types/LocationProp";

const location18: LocationProp = {
  location: 18,
  name: "THE HIGH BASIN",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "LYN MIRA, WOODWORKER IS IN PLAY", section: "18.1" },
            {
              text: {
                type: "story",
                text: [
                  "High above the forest below, the basin gleams in the sunlight. Smaller than White Sky Lake, the water in this mountain tarn is much deeper—the clear, cold water darkening to deep blue in the center. The elders say that nobody has ever reached those depths, and looking at it for yourself, you can well believe it. You wonder if there are submerged caves in the depths, and if any of the High Basin’s water drains into even deeper subterranean passages.",
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
              "Lyn whoops in delight. She sprints down to the shore, and as you follow, you find her poking happily at a massive, partially submerged tree, felled near the basin’s edge.",
              "“Take a look at this,” she crows. “Dolewood!” She raps it, and you hear a solid thunk. “You couldn’t ask for better conditions. The bark is still perfect, and all this rot just makes it easier to clean out!”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Search the path deck for a Rotting Dolewood, and put it into play.",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Lyn lays out several tools and readies her saw. The energy blade flickers and comes to life. She gestures toward her tools. “Instead of standing around, why don’t you take one of these and help? Finishing this canoe will go a lot faster with multiple hands!”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Lyn with  to complete the canoe."],
          },
        },
      ],
    },
  ],
};

export default location18;
