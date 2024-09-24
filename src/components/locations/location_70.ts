import { LocationProp } from "../../types/LocationProp";

const location70: LocationProp = {
  location: 70,
  name: "JARIS, WILLFUL YOUTH",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE FACED YOUR DEEPEST FEARS", section: "70.1" },
                { name: "OTHERWISE", section: "70.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF HELPING HAND IS ATTACHED TO JARIS",
                  section: "70.3",
                },
                { name: "IF YOU’VE FACED YOUR DEEPEST FEARS", section: "70.4" },
                { name: "OTHERWISE", section: "70.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "70.6" }],
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
              "You see Jaris sullenly peeling a basket of mourning root. The teen’s eyes light up when he spots you, and he jumps up, tubers forgotten. 'Good to see you!' he calls out.",
              "You clasp hands, and Jaris immediately starts asking about your gear, where you’re headed, and how you got the additional cuts and bruises you’ve received since you saw him last. Most importantly, he asks where you’ve been in the Valley.",
              "'I was thinking,' he says, suddenly bashful. '... well, in a few years I’ll be old enough to don the cloak, you see. So I was wondering what else it is that the Rangers do?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Jaris with  to chat with him more about your accomplishments.",
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
              "The young man in front of you is working hard to ignore your presence: studiously focusing on a thick stalk of tall grass in front of him. Suddenly his hand flicks out, and a loose streamer of cloth stretches forward, quickly stiffening into a narrow meter-long blade. Another flick, and the cloth flutters loosely to his side, and the stalk of grass collapses in two pieces.",
              "You try and ask his name and what he’s doing, but he just grunts 'Jaris,' and then turns away. You’re going to have to do something impressive if you want to get his attention.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Jaris with  to impress him enough to get his attention.",
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
              "Jaris sighs dramatically, and rolls his eyes. 'Come on! Are we still going to Greenbriar Knoll or what?'",
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
              "You regale the lad with stories of your adventures around the Valley, and Jaris drinks it all in without interruption. Then you take out some of the odd gear you’ve collected and demonstrate its use. At that point, a herd of stilt-horses could run over Jaris and he wouldn’t notice.",
              "After a while, you notice that Jaris’s questions are coming slower, and he seems to be paying less attention. You ask him what is on his mind, and he thinks for a moment. 'So, this is going to sound silly … but I was thinking. When I was up on Greenbriar Knoll … well, that was the most scared I’ve ever been in my life. But if I was going to be a Ranger, I need to learn to face my fears, right? So … would you be willing to go up Greenbriar again with me?'",
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
              "You convince Jaris to let you try his grass-cutting game, taking up the whisper-thin gauzeblade and, after a deep breath, flicking it up and toward a stalk of grass. A quick hiss, and the stalk—along with the stalk directly behind it—collapse, the grass on either side untouched.",
              "'Huh,' Jaris says. You see a flicker of grudging respect. 'I guess you know what you’re doing after all.'",
              "He thinks for a moment, then grins slyly. 'You think you have what it takes to do something really tough? I hear that if someone goes and spends the night on Greenbriar Knoll, they have the worst nightmares of their life. I knew this one guy. He couldn’t stop crying! A spiritspeaker needed to do a lot of work to help him get better.'",
              "He raises an eyebrow. “What about it? I’m game if you are.”",
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
              "Jaris howls in pain. You move to his side and wince when you see the injury. It’s going to take some time to get him patched up.",
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

export default location70;
