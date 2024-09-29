import { LocationProp } from "../../types/LocationProp";

const location64: LocationProp = {
  location: 64,
  name: "SEILO GRISS, APIARIST",
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
                  name: "IF YOU’VE DISCOVERED THE PHILOSOPHER’S HONEY",
                  section: "64.1",
                },
                { name: "OTHERWISE", section: "64.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE AT THE PHILOSOPHER’S GARDEN",
                  section: "64.3",
                },
                { name: "IF HELPING HAND IS ATTACHED", section: "64.4" },
                {
                  name: "IF YOU’VE DISCOVERED THE PHILOSOPHER’S HONEY",
                  section: "64.5",
                },
                { name: "OTHERWISE", section: "64.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "64.7" }],
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
              "You hear a familiar laugh, and Seilo strolls up, a small sapling from the Philosopher’s Garden in hand. “Meeting you that day I swear was providence. The Guide knows a winner when they see one!” He gives you a rough pat on the back. “My Philosopher’s Honey is the talk of the town, have em’ eating out the palm of my hand. Decided to go ahead and start transplanting early. Still have hordes of honey lovers hounding me day and night!”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Seilo with  to help him with harvesting his honey."],
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
              "A strange buzzing fills the air. A flash of yellow and black, and a bumblebee whizzes past. It’s quickly followed by three others. You follow them around the base of the tree only to find a man in a beekeeper’s shroud carefully examining a tray of honey. “Where are you? I know you’re hiding somewhere …” He leans closer and laughs. “Why hello, your highness!”",
              "The man finally notices you and gives you a theatrical bow. “Welcome! Name is Seilo Griss! Though I’m sure you knew that already. I suppose you’re looking for some honey then. They always are … Best honey in the Valley.” He winks and swaggers toward you. “Well, nothing’s for free in this world. You get your hands sticky and help me with this harvest, then maybe I’ll give you a taste …”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Seilo with  to help him with harvesting his honey."],
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
              `As the sun trails across the sky, the petals of the strange tree before
you molt to midnight purple. Smoke from the bee smoker stings your
nose, and in the haze, you see Seilo gently place the hive back on
its branch and wave you over. As you approach, he’s already dipping
a trembling finger into the honey, eyes wide with anticipation. One
taste and his body relaxes, his eyes dazzle with a thousand distant
stars, and a big smile creeps up his lips.`,
              `In a calm, deep voice he says, “Now if that isn’t heaven on Earth, I
don’t know what is. Give it a taste!” He passes you the jar. “Unlike
anything ever touched these lips. Am I right? I think I’ll call it … The
Philosopher’s Honey. Now, I have to harvest more while the little
buzzers are still sleepin’. Head on off now, but don’t tell anyone …
This will be the biggest thing since the ancestors left the arcologies.
You wait and see!”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Philosopher’s Honey reward card. Discard Seilo, and return HELPING HAND to the collection. Write DISCOVERED THE PHILOSOPHER’S HONEY on the campaign tracker.",
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
              "You’ve been leading Seilo along the trail for hours, but after the third time Seilo stops, claiming exhaustion, and asks you to carry one of his bags or honeypots for a while, you’re starting to suspect your “help” is as much serving as his porters as it is protection and guidance.",
              `You mention this to Seilo, taking off his bags and catching your breath.
Seilo is decent enough to look sheepish as he admits he might be a
bit heartier than he let on. “But I wasn’t lying to ya about the honey,”
he says. “Come along to the Philosopher's Garden, and we’ll get a
taste of the sweet stuff together!”`,
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
                    text: ["Discard all  from Seilo."],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Seilo and return HELPING HAND to your collection. Each Ranger soothes 2 fatigue.",
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
      index: 5,
      section: [
        {
          text: {
            type: "story",
            text: [
              "The rustling of leaves and Seilo rounds the corner, out of breath. He immediately holds out a hand. “Now I told you, Caythan, I don’t have any left so …” He realizes it’s you, and his eyes light up. “Ah! Thank the Guide wherever they wander. It’s you! Well, what did I say? An absolute sensation! Can’t even catch a moment for myself without someone chasin’ me down for more Philosopher’s Honey.”",
              `He leans against a nearby tree. “I keep telling em’ takes time to
harvest. But they won’t take no for an answer. Got me thinkin’ I might
just transplant a few of them trees down here in Branch. But that’ll
take some time. I don’t say this word often but … Please, could you
help me gather more from the Philosopher's Garden? I’ve done three
trips already in the last week!”`,
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Agree to help.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Seilo.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Seilo. Each Ranger soothes 2 fatigue."],
                  },
                ],
              },
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
              "“What did I say? Delicious, isn’t it?” Seilo slides the empty tray into the last box, pauses for a moment, then leans in. “Now if you think this was good, let me tell you somethin’… There’s a tree grows just north of here. Unlike anything I ever seen before. Found it a few months back. Whole train of little buzzers lead me to it. Was hiding in a little nook in the Philosopher’s Garden.”",
              `His voice drops to a whisper. “The flowers were almost chameleon-like,
shiftin’ colors with the rise and fall of the sun. I can’t help but wonder
what kind of honey those little buzzers are cooking up out there. If
you wanna make history with me, I’ll let you tag along … ”`,
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Agree to help.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Seilo.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Seilo. Each Ranger soothes 2 fatigue."],
                  },
                ],
              },
            ],
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
              "Seilo yelps, “Ah, help! Please!” When you finally reach him, he’s lying on the ground, unconscious. Your mind races as you scramble to figure out how to treat his injuries.",
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

export default location64;
