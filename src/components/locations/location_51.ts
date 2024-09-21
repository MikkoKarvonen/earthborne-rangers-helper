import { LocationProp } from "../../types/LocationProp";

const location51: LocationProp = {
  location: 51,
  name: "ELDER MURTOK GRAL",
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
                  section: "51.1",
                },
                { name: "IF YOU’VE COMPLETED LURE (QUIET)", section: "51.2" },
                { name: "OTHERWISE", section: "51.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU’VE COMPLETED OR CURRENTLY HAVE LURE (QUIET)",
                  section: "51.4",
                },
                { name: "OTHERWISE", section: "51.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "51.6" }],
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
              "“Well, well. What have we here?” Elder Murtok sets down his fishing pole and walks toward you. “The Rangers' famous juniper biscuits! The smell alone is almost enough to make me forget about our troubles. If only we could solve our problems with baked goods!”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Elder Murtok with  to learn what’s troubling him."],
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
              "As you walk along White Sky’s outermost platform, you see Elder Murtok Gral leaning out over the railing, eyes focused on the lake. He has a long, thin fishing pole in one hand, casting with quick, practiced motions. His eyes are closed; he seems to be fishing entirely by feel.",
              "His eyes drift open. “I recognize those footsteps,” he says. “I must say, it’s nice to know that Quiet isn’t lurking about anymore. But it does feel different without her. Doesn’t it?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Murtok with  to ask what there is to do around White Sky.",
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
              "As you walk along White Sky’s outermost platform, you see Elder Murtok Gral leaning out over the railing, eyes focused on the lake. He has a long, thin fishing pole in one hand, casting with quick, practiced motions. He seems distracted, however, staring at the distant shore.",
              "“Oh, hello,” he says. “Always good to have Rangers on the platforms.” His eyes never leave the shoreline. He seems to be looking for something.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Elder Murtok with  to find out what’s on his mind."],
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
              "“Thank you for your help,” he says. “Now, is there anything I can do for you?”",
              "You ask him if there’s anything else you can do for the folks of White Sky, and he thinks for a moment. “A lot of people have been complaining about the poor fishing around here lately. Including myself! I recommend talking to Ar Tel about that. Otherwise, you could always swim down to the Bubble and see if Silaro needs help. He’d be happy for the company!”",
              "As you make to leave, he taps your arm. “Also, if you need help getting around the lake, talk to Vira. She may be gruff, but she’s the best barge pilot I know.”",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              `If you are on REMOVE THE RECLAIMERS: You tell the elder about
the reclaimer threat, and he looks at you with worried eyes. "That's
a lot on your shoulders. I'm not sure our little village can help. We
barely managed against that flood ... say, that's an idea! Where did
that foolish shaper get off to? Those flood waters he summoned
would surely be strong enough to sweep some reclaimers away. I
think his sister, Dace, is still living in Spire. Maybe ask her."`,
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
              `Elder Murtok shakes his head. “It’s hard to think of any problem
greater than Quiet. That massive bearded lynx has been stalking our
shores for weeks. She nearly ate someone just the other day! Do you
think you could get her to leave us in peace?”`,
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
              `Elder Murtok gasps and collapses. You run to his side, and quickly
confirm your fears. His injuries are severe enough that you’re going
to have to find him some proper medical attention.`,
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

export default location51;
