import { LocationProp } from "../../types/LocationProp";

const location16: LocationProp = {
  location: 16,
  name: "KOBO’S MARKET",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "SPIRIT SPEAKER NAL IS IN PLAY", section: "16.1" },
            { name: "KOBO’S MARKET IS FLOODED", section: "16.2" },
            {
              text: {
                type: "story",
                text: [
                  "Given Ren Kobo’s Messipian heritage, it’s not surprising that he set up his market next to a clear, spring-fed lake. You see the market, bathed in sunlight, bursting with wares from both inside and outside the Valley. You hear the joyful chatter of bartering customers and merchants as you approach.",
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
              "As Kobo’s Market comes into view, Nal smiles.",
              "To your surprise, she doesn’t head to the market. Instead, she steps off the trail and sits on a nearby stump. After what feels like several hours, a hunched, leathery woman with a massive backpack trundles up the trail you followed, heading toward the market.",
              "Nal calls to her, speaking a language you don’t recognize. They speak for a few minutes, then Nal reaches into her tunic and pulls out a small bag, which she hands to the woman. In turn, the woman gives Nal a palm-sized glass disk with a strange plant suspended in its center.",
              "After the woman leaves, Nal says, “I’m going to stay here awhile and speak with the spirit of this plant. It’s from the Verdessa, so it might help me overcome whatever is preventing the spirit of the Verdessa from coming through.”",
              "“Actually,” she says. “I have a feeling this will work better if we do this together.” Nal takes your hand and gestures for you to sit across from her. She places the plant between you and closes her eyes. You do the same, and soon time dissolves. When you open your eyes, you see that Nal is troubled. “I can hear the spirit of the Verdessa again, but it's muffled, like a whisper. It's like she's distracted, searching for something that she's lost,” she says. “I wonder what it could be.”",
              "Nal places a hand on your shoulder and her worried expression turns to a weary smile. “Thank you,“ she says. “I will return to Lone Tree with my new friend here and contemplate this further.“",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Nal's Understanding reward card. Discard Nal. Return HELPING HAND to the collection. Record SPOKE WITH A SPIRIT on the campaign tracker.",
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
              "You crest the lip of the dell and see Ren Kobo’s market. The pond in the center has overflowed its banks, and now half of the depression is a murky expanse of brown water. A few tents have been moved to the new banks of the pond, but you see at least one colorful patch of fabric rising forlornly out of the pond on a single remaining tent pole.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Search the General set for Flood Damage, and put it into play.",
            ],
          },
        },
      ],
    },
  ],
};

export default location16;
