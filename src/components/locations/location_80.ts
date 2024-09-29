import { LocationProp } from "../../types/LocationProp";

const location80: LocationProp = {
  location: 80,
  name: "QUISI VOS, RASCAL",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                {
                  name: "IF A RANGER HAS BISCUIT BASKET EQUIPPED",
                  section: "80.1",
                },
                { name: "IF OURA VOS IS IN PLAY", section: "80.2" },
                { name: "OTHERWISE", section: "80.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "80.5" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "80.6" }],
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
              "From behind, you hear a giggle. You turn to find a young girl, hand poised over the basket of juniper biscuits. 'Hi!' she says, retracting her hand. 'What are you doing? Where are you going? Can I have a biscuit? Do you have anything else to eat?'",
              "Each time you answer her question, she has another one at the ready. It seems like you have a new traveling companion, at least until you can satisfy her curiosity.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Quisi with  to satisfy her curiosity."],
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
              "'Quisi!' You see a woman step onto the trail. 'Didn't I tell you to meet me at the Ranger Station?'",
              "Quisi, for her part, is studiously focused on digging a hole in the dirt with her toe. 'I was going to, but then I needed to help do some Ranger stuff. I lost track of time!'",
              "'I've heard that one before,' she says. 'Next time, please don't make me look for you. I don't like worrying!'",
              "'Don't worry, mama. I'm fine!' The woman walks up to Quisi and gives her a hug, then looks at you, clearly relieved.",
              "'Thank you for finding my little explorer,' she says. 'Can you say thank you, Quisi?'",
              "'Thank you!' Quisi says, and gives you a hug. Then she hands you a small pouch. 'These are my favorite snacks in the whole world. I have a whole bunch back home, so you can have these ones. Bye!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Quisi's Favorite Snack reward card. Write ACCEPTED SNACKS on the campaign tracker. Discard Oura and Quisi. Each Ranger soothes 2 fatigue.",
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
              "From up ahead, you hear a child quietly singing to herself. You move around a large cedar bole to find a young girl, maybe eight years old, tracing patterns in the ground with a rock. She’s covered in dirt, head to toe. In place of her left hand is a miraculous piece of technology: a prosthesis, gleaming in the sunlight, its fingers suspended in air, held only by her body’s memory of the hand.",
              "As soon as she notices you, she hops to her feet. 'Hi! I’m Quisi! What are you doing? Where are you going? What is that? Can I use it?'",
              "Each time you answer a question, she has another one at the ready. It seems like you have a new traveling companion, at least until you can satisfy her curiosity.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Quisi with  to satisfy her curiosity."],
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
              "You quickly find Quisi’s questions to be as constant and regular as the sunrise, though far more frequent. Answering one buys you only a few moments before she thinks of another. However, among her constant and endearing patter, you notice she says something of particular interest.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Draw a challenge card. Read one entry based on the challenge icon on the drawn card:",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              ": 'Did you know that up at Headwater Station, in the big pool, there’s ruins? All the way at the bottom, and I even heard there’s treasure down there!'",
              ": 'Mama said never go inside the terravore … but one time, I went just to the edge … and I peaked inside … and I saw something weird, and glowy, all the way at the back! I think it’s treasure!'",
              ": 'The Heart of the Swamp is gross, stinky, and full of giant worms. But I bet that if you get all the way to the very, very middle, there’s stuff there … like treasure!'",
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
              "After a nonstop barrage of questions, you’re a bit surprised when Quisi suddenly stops talking. You turn, and she’s standing on a rock, shielding her eyes as she looks at the sun.",
              "'I would stay and help you some more, but I can’t be late for dinner. See you some other time!' She hops off the rock and scampers down the path, vanishing from view in an instant.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue. Discard Quisi."],
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
              "Quisi yelps. You kneel down next to her, comforting her with soothing words as you inspect the injury. It looks treatable, but doing so will take time.",
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
  ],
};

export default location80;
