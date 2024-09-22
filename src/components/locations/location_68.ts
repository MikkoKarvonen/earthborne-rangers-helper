import { LocationProp } from "../../types/LocationProp";

const location68: LocationProp = {
  location: 68,
  name: "TRAINED STILT-HORSE",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            {
              name: "ENTERS PLAY IF YOU’VE BEEN ACCEPTED AS A RIDER",
              section: "68.1",
            },
            { name: "OTHERWISE", section: "68.2" },
          ],
        },
        {
          condition: [{ name: "CLEAR ", section: "68.3" }],
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
              "The stilt-horses approach you cautiously, until they are surrounding you but keeping a healthy few meters of distance. Slowly, carefully, one of them extends its head, nuzzling your pocket for some cherry moss or sunberries. You think it remembers you.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Place 2  on this card.",
              "Clear the Stilt-Horse with  to be accepted as a rider.",
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
              "The small herd of stilt-horses prances away from you slowly as you circle around Meadow, their long legs daintily picking their way through the tall grass. The residents of Meadow say that the stilt-horses let people ride them, if they trust them. When you ask what the stilt-horses do to people that they don't trust, they just grin.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear the Stilt-Horse with  to be accepted as a rider."],
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
              "Finally, one of the stilt-horses kneels down low enough that you are able to climb onto its back. You balance there cautiously, your sore bum reminding you of the last two times you tried this. But this time, the stilt-horse seems perfectly content with you as its rider.",
              "You remember what the locals told you. The horses will let you ride them, but only for the day. This herd always returns to Meadow when night falls.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Choose one Ranger to ride the stilt-horse. That Ranger attaches it to their role. Remove all  from this card. Write down ACCEPTED AS A RIDER.",
            ],
          },
        },
      ],
    },
  ],
};

export default location68;
