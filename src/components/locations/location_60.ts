import { LocationProp } from "../../types/LocationProp";

const location60: LocationProp = {
  location: 60,
  name: "ELDER MORA ORLIN",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE COMPLETED LURE (UMBRA)", section: "60.1" },
                { name: "OTHERWISE", section: "60.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE ON OR HAVE COMPLETED LURE (UMBRA)",
                  section: "60.3",
                },
                { name: "OTHERWISE", section: "60.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "60.5" }],
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
              "Elder Orlin looks you up and down, and this time she nods slowly. “I must say I appreciate you dealing with Umbra. Fine work. Old Kordo couldn’t have done better.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Orlin with  to ask if she needs assistance with anything else.",
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
              "Elder Orlin looks you up and down and snorts gruffly. “If you were a piece of wrought carbon, I think I’d stick you back in my forge until you were properly tempered. But you are wearing a Ranger cloak, I suppose. What's your business around Spire?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Orlin with  to ask her if she needs help around Spire.",
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
              "Mora pulls out a pipe, lights it, and takes a long pull as she gives your question some thought. Then she blows out a cloud of astringent, purple smoke. “If you’re looking to help people, I know Dace, one of the shapers, just down from the Monastery. She’s been struggling with her training. And I heard that Tollin Lang may need some help with some fool art installation down south. Otherwise, the archaeologist, Silaro, he’s always poking around near the arcology threshold.”",
              "She takes another puff. “If none of those appeal, head over to the Hearty Brew, and ask around. Otherwise, you can always stop by the Carbon Forge if you're in need of some gear.”",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              'If you are on REMOVE THE RECLAIMERS: Elder Orlin stops as a thought occurs to her. "That all seems like small sunberries at this point. Do you have any updates on the reclaimers?" You explain that you\'re looking for answers, and she rubs her temple thoughtfully. "In a village as large as this, I\'m sure that someone here could help. Maybe that shaper, Dace. She knows a thing or two."',
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
              "Mora glances skyward. “Spire’s a big place, plenty of people need help. But right now, I’m most worried about that giant raptor, Umbra. The blighter may fly all over the Valley, but she likes perching at the top of the Spire, then swooping down to snatch up her prey. Last year, it was Old Harli Jephson. I don’t want to see that happen again.”",
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
                      "Gain the LURE (UMBRA) mission. Reminder: find Umbra and attach her to the mission card. You may choose this option only if you don’t have another Lure or Confront mission. Discard Elder Orlin.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Elder Orlin. Each Ranger soothes 2 fatigue.",
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
              "Mora staggers but doesn’t fall despite the painful wound. You move toward her, hesitant to suggest she needs help, but the Elder reaches over and grabs your shoulder for support.",
              "“It’s bad,” she growls. As she leans on you, you help her to the ground. She looks at the injury and grimaces. “I think I’ll need to let you patch me up before we go anywhere.”",
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

export default location60;
