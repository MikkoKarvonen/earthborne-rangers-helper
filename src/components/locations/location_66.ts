import { LocationProp } from "../../types/LocationProp";

const location66: LocationProp = {
  location: 66,
  name: "ELDER TESORAL HALE",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE COMPLETED RESCUE (VIRA)", section: "66.1" },
                { name: "OTHERWISE", section: "66.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE ON OR HAVE COMPLETED SEARCH (VIRA)",
                  section: "66.3",
                },
                { name: "OTHERWISE", section: "66.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "66.5" }],
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
              "Elder Hale practically pulls your arm out of joint as he shakes your hand enthusiastically. 'Oh, thank you so much for finding Vira! I was so worried, but you saved the day! Just like a Ranger is supposed to, I suppose!'",
              "He suddenly stops and steps back, visibly settling himself. 'Now, how can I help you?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Hale with  to ask him about what to do around Branch.",
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
              "You hear Elder Tesoral Hale speaking urgently with one of the Branch villagers as you approach. 'Oh, goodness me. She was supposed to be here already! Why do you think she’s late?'",
              "You cough, and he looks up. 'Oh, ah, hello there. It’s good to see you, I’m sure!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Hale with  to ask him if he needs help around Branch.",
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
              `Elder Tesoral catches your eye a few meters off and bounds over.
“Thank you again for searching for Vira. I can’t thank you enough. If
you ever need to find anyone else, make your way to Evergreen Hall,
order a sweet wine, and start chatting away. All of the comings and
goings of the Valley somehow find their way there.`,
              `He gives you a knowing nod. “If you are looking for a bit more
excitement here in Branch, I’m sure Seilo could use a hand or two
with harvesting his honey. Also, Lyn Mira, our local woodworker,
makes excellent canoes. Give her a shout and she’d be more than
happy to show you!”`,
            ],
          },
        },
        {
          text: {
            type: "store",
            text: [
              `If you are on REMOVE THE RECLAIMERS: As Tesoral wraps up,
you bring up the reclaimer threat and ask him for ideas. "Ha! We're
craftspeople here in Branch. You're better off asking the more wild
folks like Kasende down in Tumbledown. Or maybe one of the
shapers. I think a couple of have taken up residence in Spire. A
brother and sister?"`,
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
              "Elder Hale sighs, twisting his fingers together. 'I’m sorry. I’m sure there’s some other folks who have problems around here, but right now I’m worried about Vira. You know her? From White Sky? Lyn and I were expecting her to come get her new boat, but she never arrived.'",
              "Suddenly his eyes lighten. 'Do you think you could look for her? Maybe she got lost or hurt on the trip.'",
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
                      "Gain the SEARCH (VIRA) mission. Reminder: search the White Sky set for Vira and attach her facedown to the mission card. Record 94.8 three days from now on the campaign tracker. You may choose this option only if you don’t have another Search or Rescue mission. Discard Elder Hale.",
                    ],
                  },
                ],
              },
              {
                name: "B) Leave Vira to someone else.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Elder Hale. Record 94.8 three days from now on the campaign tracker.",
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
              `Elder Hale takes a sharp, pained breath. “Ah!” You immediately go
to him to administer aid. His wounds look serious. It will take some
time to get him to safety.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [`End the day.`],
          },
        },
      ],
    },
  ],
};

export default location66;
