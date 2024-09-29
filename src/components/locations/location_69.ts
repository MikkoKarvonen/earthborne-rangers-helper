import { LocationProp } from "../../types/LocationProp";

const location69: LocationProp = {
  location: 69,
  name: "ELDER JULAR ABEL",
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
                  name: "IF YOU’VE COMPLETED LURE (OL’ BLOODY CLICKER)",
                  section: "69.1",
                },
                { name: "OTHERWISE", section: "69.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE ON OR HAVE COMPLETED LURE (OL’ BLOODY CLICKER)",
                  section: "69.3",
                },
                { name: "OTHERWISE", section: "69.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "69.5" }],
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
              "You hear Elder Jular Abel’s stomping stride through the grass, but when you finally come across her, she’s walking with a much more relaxed (if still energetic) air. 'Glorious day for a hike, now that I don’t have to worry ‘bout a hole full of teeth and legs opening beneath my feet!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Abel with  to ask her what there is to do around Meadow.",
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
              "You hear someone stomping through the thick grass long before you see Jular Abel, Meadow’s foremost elder. She’s walking with powerful, heavy strides, poking at the ground with a stout walking staff. She’s so preoccupied, you have to call her name twice before she notices you.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Abel with  to ask her if she needs help around Meadow.",
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
              `Elder Abel gives you a big bear hug. “You’ve done plenty for us
already, agreeing to deal with that thing,” she says. “Besides, us here
at Meadow have life pretty good right now. Except for young Jaris;
he’s always getting into trouble. Could always talk to him.”`,
              `She thinks for a moment. “By the by, if you’re planning on spending
some time in these parts, I’d find a few stilt-horses. Best way to
navigate the grasslands.”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["If you are on REMOVE THE RECLAIMERS continue reading:"],
          },
        },
        {
          text: {
            type: "story",
            text: [
              `"And you're still looking for a solution to the reclaimers, no? Well
Kasende down in Tumbledown is the best hunter I know. And that
shaper girl up in Spire, what's her name? Day? Dace? I bet she could
help you get a good eagle-eyed view with all that climbing and
swooping she does."`,
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
              `“There’s probably some people in the village that need help, but
right now I don’t have time for anything but checking for Ol’ Bloody
Clicker’s burrows.”`,
              `You ask her what she means, and she finally stops for a moment. “Ol’
Bloody Clicker’s the biggest, meanest spindlescuttler you’ve ever put
two eyes on. Dug tunnels all throughout the grasslands, and if you fall
into one, well, let’s just say you’d better get out before it hears you
and comes clicking.”`,
              `You shiver as she continues. “That’s bad enough, but I’m worried
the harvest festival in Meadow, what with all the people dancing and
carrying on, may be drawing the devil nearer and nearer. So if you
want to help, you could help me track him down before someone
gets eaten.”`,
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
                      "Gain the LURE (OL’ BLOODY CLICKER) mission. Reminder: find Ol’ Bloody Clicker, and attach him to the mission card. You may choose this option only if you don’t have another Lure or Confront mission. Discard Elder Abel.",
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
                      "Discard Elder Abel. Each Ranger soothes 2 fatigue.",
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
              "Elder Abel staggers, and for a moment, her tough pragmatic demeanor flees, and she just looks injured and in pain. You move to help as you retrieve the med kit from your pack. You'll need to quickly treat her wounds then get her to safety.",
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

export default location69;
