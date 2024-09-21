import { LocationProp } from "../../types/LocationProp";

const location44: LocationProp = {
  location: 44,
  name: "KORDO, RANGER VETERAN",
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
                  name: "IF YOU HAVEN'T RECEIVED EITHER THE ACCOMMODATION OR INTERVENTION MISSION",
                  section: "44.1",
                },
                { name: "IF YOU’VE FOUND KORDO'S QUARRY", section: "44.2" },
                { name: "OTHERWISE", section: "44.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF HELPING HAND IS ATTACHED", section: "44.4" },
                { name: "IF YOU’VE FOUND KORDO'S QUARRY ", section: "44.5" },
                { name: "OTHERWISE", section: "44.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "44.7" }],
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
              "Through the brush you hear two people arguing at each other. One you immediately recognize as Kordo Haverson, but it takes a moment before you recognize the other as Spirit Speaker Nal. You don’t think you’ve heard her raise her voice before.",
              "You push forward and come across the two of them in the midst of a heated debate. Kordo’s face is flushed, and Nal has her arms crossed and is glaring. Although you’re not sure what’s going on, you feel like you should step in.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "If Nal is not in play, search the path deck for her and put her into play in the same area as Kordo. Do not read her normal entry.",
              "Go to 45.4.",
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
              "Kordo roars out a welcome when he sees you. “The great hunters return! Good to see you. Just a moment, and I’ll grab a bottle of the good stuff.”",
              "You spend an enjoyable few hours chatting with Kordo. When it’s time for you to leave, he hugs you and looks a bit sad to see you go. “Glad you came by, fellows. You know, we should go hunting again ‘fore too long, right? I know plenty of tales of more elusive prey than that northern ghost.”",
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
              "You got to know Kordo Haverson well enough during your training, but this time the old former Ranger gives you a warm grin and clasps your hand. “Welcome back, fellows! How’s your patrol been treating you?”",
              "You realize that, with your training complete, Kordo sees you as fellow Rangers and not novice students. Now you get a chance to see a side of the veteran hunter that you’d never known before.",
              "You get Kordo talking about some of his greatest hunts. He chuckles. “Well, my greatest quarry is the one I haven’t caught ... yet. Up in the ... no, you know what, I’d better not talk about it. I don’t want to send you on some hopeless chase.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Kordo with  to ask him about this elusive quarry."],
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
              "Kordo stops and looks sternly at you. “I can tell something is on your mind. Can you keep helping me? Or should I head back to Lone Tree, and we try this another time?”",
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
              "“So you are interested in another hunt!” Kordo seems quite pleased. “Well, I’ll put my ear to the ground and see if I can find us a proper quarry some day. Might take a while, though, so not today.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue."],
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
              "“You know,” Kordo says, a sly smile crossing his weather-beaten features. “Now that you’re no longer in training, Elder Thrush can’t stop you from coming on a hunt with me on account of it being ‘too dangerous.’”",
              "“Up in the Northern Woods, the ones in the mountains beyond the Valley, there’s something up there that’s evaded every snare, and I’ve lost every time I try to follow it. To this day, I haven’t spotted more than a shadow in the trees.” He sticks out his hand. “What do you say, fellows? Want to head up north with me and help me catch my greatest quarry?”",
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
              "Kordo stumbles and nearly falls to the ground. Blood is running down his leg, and his foot is twisted at an alarming angle.",
              "“My own fault,” he grunts. “I'm sorry, but I don’t think I’ll be moving anywhere soon. Can you patch me up?”",
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

export default location44;
