import { LocationProp } from "../../types/LocationProp";

const location91: LocationProp = {
  location: 91,
  name: "BISCUIT DELIVERY",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "KORDO, RANGER VETERAN", section: "91.1" },
                { name: "SPIRIT SPEAKER NAL", section: "91.2" },
                { name: "HY PIMPOT, CHEF", section: "91.3" },
                { name: "QUISI VOS, RASCAL", section: "91.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "KORDO, RANGER VETERAN", section: "91.5" },
                { name: "SPIRIT SPEAKER NAL", section: "91.6" },
                { name: "HY PIMPOT, CHEF", section: "91.7" },
                { name: "QUISI VOS, RASCAL", section: "91.8" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "GO TO THE NORMAL JOURNAL ENTRY FOR THAT CHARACTER" },
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
              "“Glad you made it through training,” the grizzled man sticks out his hand and shakes yours firmly. “The name's Kordo in case you forgot. I understand you have a lot of new faces to take in.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Kordo with  to speak with him further."],
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
              "You come across a woman sitting on a meditation pillow, her eyes closed. She doesn’t open them, but gestures for you to come closer.",
              "“We’re happy to have you,” she says. “I’m Nal, the Spirit Speaker here at Lone Tree Station. Sit with me for a minute, then we can talk.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Nal with  to speak with her further."],
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
              "You come across a massive pile of diced and sliced vegetables, roots, and tubers. Occasionally, more slices fly through the air to land on top of the pile.",
              "“Back already?” a voice says from beyond the vegetable pile. “I told you. There’s no silverfin curry to be had until the fish has marinated for at least three hours!”",
              "A head pokes out from behind the pile. “Oh, it’s you! I thought you were Elder Thrush. She gets so impatient on silverfin curry day! Calypsa sent you for the biscuits, eh? They’re just out of the oven. Let me know when you’re ready to leave, and we’ll get you and those biscuits to the good people of White Sky straight away.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Travel away from Lone Tree Station while Hy Pimpot is in play to complete the mission.",
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
              "You feel a tug on your backpack and turn to see a young girl suddenly walking beside you.",
              "“Hi!” she says. “Do you smell something? Is Hy Pimpot baking his famous juniper biscuits? Can I have one? Which way to the kitchen?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Quisi with  to help her find the kitchen."],
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
              "“Well, I’ve been in the Rangers for a few decades. Survived more atrox attacks than I can count!” Kordo rubs his chin. “Once, I was one of the best hunters in the Valley. I suppose I still am, but these days I spend most of my time keeping things running smoothly around here. Though I do get out for a hunt every now and then.”",
              "His voice takes on a tone of mock severity. “I’d take you on a hunt right now, in fact, but you have some biscuits to deliver! You’re not going to let the people of White Sky starve are you?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue, then discard Kordo."],
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
              "Nal opens her eyes and slowly turns to you, her movements precise and fluid. She smiles at you like an old friend. 'That was lovely,' she says. 'I just had the most amazing experience. I was speaking with the spirit of Mount Nim. It was so powerful! And ancient! It’s a great spirit to call upon if you ever find yourself in need of some perspective.'",
              "'But right now, we should check on the spirits of those biscuits,' she says with a playful smirk. 'You’d better find Hy Pimpot and pick them up while they’re still warm!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue, then discard Nal."],
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
              "Hy Pimpot crosses his arms and gives you a severe look. 'You’d better grab those biscuits and hit the trail before they cool too much! They’re still good cold, mind you, but they’re just so much better when they’re warm!'",
              "You raise your hands and tell him you’re just about to leave. 'Good!' he says. 'Just let me know when you’re ready. I’ll be right here. Waiting.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Discard all  from Hy Pimpot. (He is not discarded.)",
              "Travel away from Lone Tree Station while Hy Pimpot is in play to collect the biscuits and continue the mission.",
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
              "In your time together, Quisi has made a game of scouring Lone Tree Station for clues as to the kitchen’s whereabouts. Eventually, the scent of Hy Pimpot’s biscuits grows stronger, and Quisi cheers. 'Yes! Yes! Yes! Delicious biscuits, here I come!' She runs off.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue, then discard Quisi."],
          },
        },
      ],
    },
  ],
};

export default location91;
