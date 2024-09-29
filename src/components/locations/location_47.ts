import { LocationProp } from "../../types/LocationProp";

const location47: LocationProp = {
  location: 47,
  name: "HY PIMPOT, CHEF",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ section: "47.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "CLEAR  IF HELPING HAND IS ATTACHED",
                  section: "47.2",
                },
                { name: "GO TO", section: "47.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "47.6" }],
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
              "You hear Hy’s shrill whistling long before you see him. It’s said that every Ranger in the Valley has tried to teach Hy Pimpot a new song to whistle, but none have succeeded.",
              "Eventually you spot the stout little gnome of a man intently chopping and mixing vinegary-smelling herbs and vegetables into a large bowl. 'Good, good, you're here,' he says without looking at you. 'Try this stew. I need to know if I've hit the right balance between 'pleasant heat' and 'tongue-searing.' What does it need? Kelpweed? Mourning Root?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You can help Hy Pimpot by gathering ingredients for the stew, or you can clear him with  to ask him how to make the stew as good as possible.",
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
              "'Ah!' Hy Pimpot waves at you. 'What else have you brought me? Surely not just more ricegrass and chikorish leaves? I can get those here! You've got to get away from Lone Tree to forage, or this soup will be left simply ... bland! You still willing to help, or should I head home?'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Agree to keep helping.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard all  from Hy Pimpot."],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Hy Pimpot and return HELPING HAND to your collection. Each Ranger soothes 1 fatigue.",
                    ],
                  },
                ],
              },
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
              "”Well … ” Hy says in a way that makes it very clear that he was waiting for you to ask. “I’m tired of making my soup with the same pepper-pods and northern potatoes that grow around these parts. I just remember how good it can be when someone gets some of the herbs and tubers from elsewhere in the Valley.” He stares at you intently. “I could use someone. Someone bold, hardy, and already exploring the Valley to accompany me on an adventure… ”",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Agree to help gather ingredients.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all  from Hy, and attach the HELPING HAND mission to him.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Hy. Each Ranger soothes 1 fatigue."],
                  },
                ],
              },
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
              "Hy Pimpot starts dicing, mashing, crushing, and even sautéing the various ingredients you’ve found, including a couple of plants you’re fairly sure your Ranger training told you were only used for stilt-horse food. All of it goes into his large pot, which he sets to boiling with the biggest Sol coil you’ve ever seen.",
              "After an hour, he emerges from his kitchen with a platter of wooden bowls, each steaming with a fragrant aroma. He passes one to each of you. You taste it gingerly, then start taking bigger and bigger spoonfuls. The soup is amazing! Fresh and light, but also hearty and filling all at once! You clamber for seconds as you heap effusive praise on the master chef.",
              "Hy nods and smiles, but he seems distracted. “Thank you, thank you,” he says. “But you know … ” He thinks for a while. “Some of those ingredients just aren’t as fresh as they could be. The gloomcaps, for example, I can tell they were in your pack for at least five hours. And the moss cherries … ah!” His eyes brighten. “Imagine how good it would be if I traveled with you, and cooked in the field, with herbs and spices picked right off the stem!”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Discard each flora attached to Hy. Each Ranger soothes 4 fatigue.",
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
              "You’re heading along the trail when Hy Pimpot suddenly shouts, “Stop!”",
              "You look around, worried you’re about to stumble into a puffercrawler. But instead you see Hy scrambling with his oversized pack, pulling out his portable Sol coil and pot. “Get me water,” he shouts as he pulls some leaves from a bush along the trail. “This needs to go into the pot immediately, and the rest of the ingredients have aged … perfectly!”",
              "You watch in bemused amusement as he dashes around the impromptu outdoor kitchen, dicing, slicing, mashing, frying, and at one point, smoking, the varied ingredients you and he worked so hard to gather. Finally, he raises his head from the steaming pot. “It’s … ” he says, his voice quavering. “ ... just try it.”",
              "You gather around the pot, dipping your spoons into the fragrant broth. It is quite simply the best soup, and possibly the best food, you’ve ever had. The complex flavors blend perfectly, rich but not overpowering, fresh but hearty, warm and soothing yet light and effervescent. Your only regret, as you set down your spoon and realize the pot is empty, is that you may never taste something quite that good again.",
              "Hy has a beatific smile on his face. “The best it’s ever been,” he says.",
              "You all sit in contented silence for a while, before you get up the courage to ask Hy exactly how he made the soup. The master chef nods. “I’ll tell you the recipe,” he says. “As long as you promise to remember it, and practice it. Someday, I want you to serve me something even better than this!”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Discard each flora attached to Hy. Each Ranger soothes 4 fatigue. Gain the Hy Pimpot’s Secret Recipe reward card. Discard Hy Pimpot and return HELPING HAND to the collection.",
            ],
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
              "Hy Pimpot yelps, holding his hands tightly against his injury. “That … hurts … so … bad!” he gasps. “Oh my, oh my, oh my.”",
              "His face seems to be graying and you’re worried he might faint. You need to stop and give him a chance to recover, and treat the injury while you’re at it.",
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

export default location47;
