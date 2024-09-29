import { LocationProp } from "../../types/LocationProp";

const location8: LocationProp = {
  location: 8,
  name: "SPIRE",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "TALA THE RED IS IN PLAY", section: "84.10" },
            {
              name: "YOU HAVE CELEBRATED THE HARVEST FESTIVAL",
              section: "8.1",
            },
            {
              name: "IT IS CURRENTLY DAY 6, 12, 18, 24, OR 30",
              section: "8.2",
            },
            {
              text: {
                type: "story",
                text: [
                  "The grasses in this part of the Valley rise so tall that you don’t realize you’ve reached Meadow until the path suddenly opens, revealing several humble cottages centered around the stump of a fallen dolewood. A herd of ironwool sheep tend to the grass. A shepherd stands nearby, casually watching the sheep. He waves.",
                  "“If you’re here for the festival, you’re early,” he says. “Pretty soon, this place will be full of people from all over the Valley—and sometimes beyond! There’s food, drink, music, and dancing! If there’s one thing we know how to do in Meadow, it’s how to throw a party.” An ironwool sheep pauses to give you a look, then quietly goes back to its grazing.",
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
              "The grasses in this part of the Valley rise so tall that you don’t realize you’ve reached Meadow until the path suddenly opens, revealing several humble cottages centered around the stump of a fallen dolewood. A herd of ironwool sheep tend to the grass.",
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
              "The grasses in this part of the Valley rise so tall that you don’t realize you’ve reached Meadow until the path suddenly opens, revealing several humble cottages centered around the stump of a fallen dolewood.",
              "The normally sleepy clearing is full of excited, chattering people. Lively music fills the air. Children run between the legs of the milling adults, playing tag. A set of tables have been dragged out into the center of the field and are already groaning under the weight of dishes of fragrant food. Beyond that, you hear uproarious cheering coming from a swirling circle of dancing villagers, spinning from partner to partner in an exuberant display.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Do not perform the usual setup for Meadow, and do not draw a path card on the first round in Meadow. Search the General set for Dancers Round, and put it into play. Search the Valley set for Ol’ Bloody Clicker, and shuffle him into to the path deck. Then each Ranger chooses a dancing partner by searching the collection for a human and putting them into play within reach with their  on them.",
            ],
          },
        },
      ],
    },
  ],
};

export default location8;
