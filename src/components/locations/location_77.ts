import { LocationProp } from "../../types/LocationProp";

const location77: LocationProp = {
  location: 77,
  name: "ELDER CORMAK WELLERS",
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
                  name: "IF YOU’VE COMPLETED RESCUE (KASENDE)",
                  section: "77.1",
                },
                { name: "OTHERWISE", section: "77.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE ON OR HAVE COMPLETED SEARCH (KASENDE)",
                  section: "77.3",
                },
                { name: "OTHERWISE", section: "77.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "77.5" }],
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
              "Elder Wellers smiles slightly when he sees you and bows slightly. 'I’ve been wanting to thank you for helping find Kasende. You did fine work.'",
              "He cocks his head inquisitively. 'Now, is there any way I can help you?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Wellers with  to ask him what there is to do around Tumbledown.",
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
              "As you walk along the lip of the vast cliff that looks out over the Verdessa, the roaring of Tumbledown Falls echoing in your ears, you see an older fellow perched on an outcropping, watching the jungle below. You call to him, and he looks up from a loosely bound notebook.",
              "'Greetings,' he nods slightly. 'Cormak Wellers, at your service.'",
              "You recognize the name; Elder Wellers is the head of Tumbledown and a naturalist of some renown within the Valley. You ask what he’s doing, and he shows the tight, neat writing in his book next to a diagram of what looks like a large tree.",
              "'Just making observations,' he says. 'You never know what you’ll see when you wait and watch.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Elder Wellers with  to ask him if he needs any help around Tumbledown.",
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
              "Elder Wellers nods respectfully. 'Thank you for looking for Kasende. I know she's tough, but sometimes she can get over her head. She might even need your help with something.'",
              "He gestures off toward the falls. 'By the way, if any of your powered items are running low on charge, feel free to use the waterspinner to restore them. It’s there to be used, after all.'",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "If you are on REMOVE THE RECLAIMERS: You ask Elder Wellers about the reclaimers, and he whistles. 'That's an undertaking, to be sure.' He stares out at the waterfall spilling into the Verdessa. 'If only we could just summon some rain and wash them away ... wasn't there a shaper that specializes in just that?'",
              "'You could also find Kasende here in Tumbledown and speak with her. I know she's been tracking the reclaimers herself. She was working with the local artificers on something related. I'm not sure what.'",
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
              "Wellers smiles slightly. 'There’s not too many of us around here. Tumbledown is a small settlement, and there’s always a chance something comes storming out of the Verdessa looking for a meal. Most people prefer the quiet of Meadow or Branch.'",
              "'However,' he hesitates for a moment, then continues. 'Have you met Kasende? She's one of the best hunters in the southern Valley, but she spends a lot of time hunting hydraworms near the Marsh of Rebirth, and she last left Tumbledown two days ago. It’s possible she's fine … but an old man can’t help but worry, I guess. Can you look for her?'",
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
                      "Gain the SEARCH (KASENDE) mission. Reminder: search the Tumbledown set for Kasende and attach her facedown to the mission card. Record 94.9 three days from now on the campaign tracker. You may choose this option only if you don’t have another Search or Rescue mission. Discard Elder Wellers.",
                    ],
                  },
                ],
              },
              {
                name: "B) Leave Kasende to someone else.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Elder Wellers. Record 94.9 three days from now on the campaign tracker.",
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
              "Elder Wellers stumbles and gasps. You move to catch him before he collapses. It will take some time to get him to safety and treat his injuries.",
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

export default location77;
