import { LocationProp } from "../../types/LocationProp";

const location59: LocationProp = {
  location: 59,
  name: "DACE, AMBITIOUS SHAPER",
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
                  name: "IF YOU ARE ON REMOVE THE RECLAIMERS",
                  section: "59.1",
                },
                { name: "IF YOU'VE SEEN A PERSON FLY", section: "59.2" },
                { name: "OTHERWISE", section: "59.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF HELPING HAND IS ATTACHED", section: "59.4" },
                { name: "IF YOU'VE SEEN A PERSON FLY", section: "59.5" },
                { name: "OTHERWISE", section: "59.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "59.7" }],
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
              `You find Aell's sister, Dace, sitting cross-legged beneath a tree in one
of Spire's many carefully maintained arboretums. A breeze rustles
the leaves, but only those of the tree beneath which Dace is sitting.
“Greetings,” she says.`,
              `You explain that you’re looking for a way to defeat the reclaimers and
that you believe her brother Aell, might be able to help by conjuring
a flood to flush the reclaimers out of the Valley.`,
              `“After he flooded the Valley, you want him to flood the Valley again?
He was pretty distraught the first time. I don't think he'll be up for it."`,
              `You tell her that Aell is the best hope the Valley has and that it would
be a mistake not to at least try to convince him to help.`,
              `After a moment, she agrees. "You're right. I know you're right. I
can be misled by my feelings about my brother. I wouldn't be able
to convince him to cause another flood, but you might. Before
he left, he told me he was going to go somewhere to practice his
manifestations—somewhere he couldn’t accidentally do anyone
harm. You'll find him in the Marsh of Rebirth.”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Gain the LOST BROTHER mission."],
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
              `A sudden whooshing sound is all you hear before a dark shadow
flashes overhead. For a moment, you think you’re being attacked by
a hungry irix, but then you see the shaper Dace fly through the air.
She lands in front of you, stumbles, and rolls into a ball. But when she
stands up, her face is aglow with pleasure and pride.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Dace with  to ask her how learning to fly is going.",
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
              `As you move along the path, you see a woman in the signature
resplendent attire of a shaper, running along the trail, skipping with
her arms outstretched. Every few steps she leaps as high into the air
as she can.`,
              `You call out to her, and she almost falls on her face. She straightens
up, face flushed with embarrassment. “What is it?”`,
              `You ask her what she’s doing, and she glares at you. “I’m trying not to
fall on my face. Isn't it obvious?”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Dace with  to find out what she's really doing."],
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
              `Dace looks seriously at you. “Do you think you can keep helping me
get to the Plummet?” she asks. “If not, I think I should head back.”`,
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
                    text: ["Discard all  from Dace."],
                  },
                ],
              },
              {
                name: "B) Part ways.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Dace and return HELPING HAND to your collection. Each Ranger soothes 2 fatigue.",
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
              `“It is going so well!” Dace exclaims. “Flying is amazing; it’s like I’ve
unlocked something inside of myself and now I’m learning new tricks
every day!”`,
              `She looks over at you with a slightly guilty grin. “In fact, I don’t
suppose you would mind taking me back to the Plummet? I’d like to
try that jump again now that I know so much more!”`,
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
                      "Discard all , and attach the HELPING HAND mission to Dace.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard Dace. Each Ranger soothes 2 fatigue."],
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
              `“I’m trying to learn to fly,” Dace explains. You try to stifle a laugh,
and her face flushes darker. “I’m not joking! There are shapers in the
Monastery that know how to fly. I’ve trained with them for years. And
everyone knows the story of the shaper who flew to Plateau.”`,
              `She sighs. “Oh, I don’t know why I’m bothering with this. Master
Cress always said that I wouldn’t really learn to fly unless I cast myself
into the empty air from a great height. He always had a flair for the
dramatic, but I think he may be right. I’ve just never been able to fully
commit and trust in my ability.”`,
              `She suddenly looks at you. “You know what? I say it's now or never.
Do you know the way to the Plummet? Can you take me there so I
can jump off?”`,
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Sounds fun. Let's do it.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all , and attach the HELPING HAND mission to Dace.",
                    ],
                  },
                ],
              },
              {
                name: "B) I don't know about this plan of yours.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Although you can’t help today, you spend some time speaking with her about her ambitions toward flight. Discard Dace, and write KIND WORDS WITH DACE on the campaign tracker.",
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
      index: 7,
      section: [
        {
          text: {
            type: "story",
            text: [
              `Dace howls in pain. As you rush to help her, you see the injury looks
serious. You pull out your medical supplies, and start looking around
for a place to set up a shelter. You’re not going to be able to move
until you treat her, and that’s going to take a while.`,
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

export default location59;
