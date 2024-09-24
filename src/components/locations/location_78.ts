import { LocationProp } from "../../types/LocationProp";

const location78: LocationProp = {
  location: 78,
  name: "ARCOLOGY SINKHOLE",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ name: "GO TO", section: "78.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE ON THE ARCOLOGY ARCHAEOLOGY MISSION",
                  section: "78.2",
                },
                { name: "OTHERWISE", section: "78.3" },
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
              "The land suddenly drops away in front of you. Luckily, you are paying attention, and you catch yourself before you go tumbling down a steep slope.",
              "You stand on the edge of a large pit, where it looks like an entire grove of trees has collapsed into the ground not long ago. Between the tangled mass of splintered trunks, you can see what looks like a broken steel archway and cracked pipes leading into darkness. The sinkhole may have exposed a new route into the old arcology beneath the Valley.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Arcology Sinkhole with  to explore its depths."],
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
              "Once you climb down the sinkhole and into the arcology, you pull out Silaro’s translation plate. You hold the clear pane of glass in front of your eyes, and the words on the walls appear to morph into something legible.",
              "Twenty minutes later, you find a workshop. The machinery has been carefully powered down, and you are able to activate a small autolathe. After using it to sculpt several useful items out of the nearby bricks of omni-resin, you turn it off again. The only other items of interest are a set of small glass bricks tucked into a corner. Each seems to have motes of golden light trapped in the glass. You tuck them into your rucksack; Silaro may know what they are.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Each Ranger shuffles up to two cards from their discard into their deck.",
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
              "It takes all morning to use a foldable carbonforged saw to cut the tree trunks then winch them up with a jury-rigged block and tackle. By the time the sun is high overhead, you’ve managed to clear a path to the archway.",
              "It turns out that the archway leads to a maze of passageways. You explore a little way in but worry about getting lost. The worn print carved into the walls is in a language utterly alien to you and is useless for navigation. Even so, you find a storage locker a few dozen meters down that still has some portable power cells. Their construction is marvelous even after thousands of years, you can still use them to charge your gear.",
              "Perhaps if you could read the writing on the walls, you might be able to find greater treasures further in? You think you remember someone named Silaro in White Sky who was studying the arcology. Maybe he can help?",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Each Ranger can either refill all tokens on a tech card, or search their deck for a tech card, and put it into play.",
            ],
          },
        },
      ],
    },
  ],
};

export default location78;
