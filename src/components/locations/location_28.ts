import { LocationProp } from "../../types/LocationProp";

const location28: LocationProp = {
  location: 28,
  name: "TERRAVORE",
  data: [
    {
      index: 0,
      section: [
        {
          text: {
            type: "story",
            text: [
              "From far away, it looks like a massive molehill winding through valleys and over ridge lines, a ridge of rocky ground cutting through the trees. Only as you get closer can you make out the incongruous details: the regular height and width of the ridge; the occasional vents oozing steam into the still air; and the gaping cavern where the ridge finally terminates in a glen.",
              "As you get closer, you can see how the land—bushes, trees, rocks, and dirt—looks like it’s been scooped into that maw-like cavern. Then the entire 'ridge' shudders and slides forward, and a few more inches of land are shoveled into the maw. The entire ridge is one of the legendary terravores, a kilometers-long biomeld that slowly but inevitably consumes and processes everything in its path.",
            ],
          },
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
              "You carefully climb into the gaping mouth of the terravore, coughing slightly as you breathe in the acrid, humid air. The light quickly fades away as you go deeper, and the air becomes thicker and thicker. The ground becomes more jumbled and chaotic as well, and you see rocks and tree trunks giving way to smaller, splintered chunks.",
              "Eventually you come to a smoking, bubbling pool that seems to block your progress. You look around and manage to find two routes. There seems to be a path along the side of the pool, near a series of protrusions that look uncomfortably like rib bones in the side of the terravore. However, there is also a particularly large log half-submerged in the pool that it looks like you could crawl across.",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Take the path along the side.",
                text: [
                  {
                    type: "rule",
                    text: ["Draw a challenge card."],
                  },
                  {
                    type: "story",
                    text: [
                      "If the card has a  icon: You safely make it to the other side of the pool, although you flinch once or twice when you hear a strange skittering above you.",
                      "Otherwise: You are about halfway around the pool when dozens of pale, blind mites the size of your hand drop down from the ceiling and skitter all over you. You spend a few horrifying minutes scooping them off you and throwing them into the pool before making it to the other side. Each Ranger suffers 3 fatigue.",
                    ],
                  },
                ],
              },
              {
                name: "B) Take the log through the pool.",
                text: [
                  {
                    type: "rule",
                    text: ["Draw a challenge card."],
                  },
                  {
                    type: "story",
                    text: [
                      "If the card has a  or  icon: You safely make it to the other side of the pool, although the log dips uncomfortably low into the liquid.",
                      "Otherwise: You are halfway across the log when you slip and, before you can catch yourself, your leg splashes briefly into the pool. Your clothing immediately begins to smoke and dissolve, and although you get to the other side, you can’t get the burned clothing off before some of the liquid eats into your skin and leaves some nasty burns. Each Ranger suffers 1 injury.",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Continue reading:"],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "You proceed a little farther and are just about to turn back because of the unbreathable air when you see something glowing just up ahead. It appears to be a vine, something not of the terravore but linked to it, with fine hair-like roots burrowing into its flesh. As you inspect it, it seems like this links into the biomeld’s nervous system. You figure out how to detach it, and wonder if maybe you could link it to yours, and what it would do?",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Gain the Dendritic Vine reward card."],
          },
        },
      ],
    },
  ],
};

export default location28;
