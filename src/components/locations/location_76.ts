import { LocationProp } from "../../types/LocationProp";

const location76: LocationProp = {
  location: 76,
  name: "KASENDE, EXPERT HUNTER",
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
                  section: "76.1",
                },
                { name: "IF YOU'VE PRUNED THE HYDRAWORM", section: "76.2" },
                { name: "OTHERWISE", section: "76.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU ARE ON GRUESOME FEAST", section: "76.4" },
                {
                  name: "IF THERE IS A HYDRAWORM IN THE PATH DISCARD",
                  section: "76.5",
                },
                {
                  name: "IF HELPING HAND IS ATTACHED TO KASENDE",
                  section: "76.6",
                },
                { name: "IF YOU'VE PRUNED THE HYDRAWORM", section: "76.7" },
                { name: "OTHERWISE", section: "76.8" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU ARE ON GRUESOME FEAST", section: "1.28" },
                { name: "OTHERWISE", section: "76.9" },
              ],
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
              "The hunter watches you with a glint of amusement in her eyes. “What is it?” she asks.",
              "You explain your mission to rid the Valley of the reclaimers, and ask Kasende if she has any ideas.",
              "“I might,” she says. “Ever since the reclaimers started showing up in the Valley, I've been tracking them and observing their behavior. I noticed that some of the reclaimers had white flowers sprouting from their spines, and that those reclaimers seemed to be leading the way for the others, so I killed one and harvested these.”",
              "The hunter reaches into her pocket and pulls out a vial containing several small white flowers.",
              "“I've learned that these flowers have no odor, but strangely, they emit an inaudible sound—a sonic vibration that only other reclaimers can perceive, and with the help of the artificers of Tumbledown, I developed a lure. It works, but even if we could amplify the sound enough to attract all the reclaimers in the Valley, I don't know what we'd do with them once they were all gathered in one place.”",
              "You suggest that perhaps the place is what's important—someplace from which the reclaimers couldn't escape. Someplace like...",
              "“The Marsh of Rebirth,” Kasende says. “Of course! Hydraworms will eat anything! Once they’re lured deep into the swamp, they should handle the rest. We just need to get them there!”",
              "Kasende leaves for a moment, then comes back with a bundle of small devices. “You take these lure amplifiers and set them at the borders of the swamp, then come and meet me in the Marsh of Rebirth where I'll prepare the lure itself. Before I leave, I'll let Elder Wellers know our plan. He can send word to Lone Tree Station. I'd like to think we can handle it, but who knows? We might need backup.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the WORM FOOD mission. Check off the right-most bubble next to it. It is not used for this mission.",
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
              "As you walk quietly along the trail, you are pleasantly surprised to see Kasende sitting on a rock up ahead, her back toward you. You figure this is the chance to pay her back for constantly sneaking up on you, and begin to carefully move toward her as quietly as possible.",
              "You’re still over ten meters away when Kasende speaks up. “You should practice your stealth,” she says without turning.",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Clear Kasende with  to ask if she needs more help with the hydraworms.",
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
              "“Careful.” The quiet voice behind you causes the hairs on the back of your neck to rise. You turn and see a small, serious person, whispercrack darter cradled in her arms. “You walk too loudly. Not all beings who dwell in the Valley are as merciful as I.”",
              "The hunter watches you for several long moments, then nods. “I am Kasende. I’m headed to the swamp. Someone has to keep the hydraworms in check. It may as well be me.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Kasende with  to ask more about the hydraworms and how you might be of assistance.",
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
              "You yell out to Kasende for support, and she wordlessly complies. She maneuvers around the worms and reclaimers and deftly corrals them away from you.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Exhaust up to 3 beings. Then discard all  from Kasende."],
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
              "You step back and watch as Kasende combats the writhing mass of hydraworms. Carefully, calmly, she raises her whispercrack darter and fires three times, the coilgun making a snapping noise as it spits hypersonic darts. Three hydraworm heads whip back, flailing. Then the whole mass slips into the murky waters of the swamp and vanishes.",
              "You ask Kasende if she killed them, but she shakes her head. “No. The worms are joined into a single whole somewhere deep beneath the swamp. I've incapacitated several heads, but the whole always remains. It’s a bloody, tiresome business, but it's necessary to keep the Valley's dangerous biomelds like this in check.” She shoulders her darter and turns to leave. “Thank you for your assistance,” she says over her shoulder. “Now I must continue on alone.”",
              "Discard one Hydraworm. Gain The Kasende Technique reward card. Discard Kasende, and return HELPING HAND to the collection. Record PRUNED THE HYDRAWORM on the campaign tracker.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Discard one Hydraworm. Gain The Kasende Technique reward card. Discard Kasende, and return HELPING HAND to the collection. Record PRUNED THE HYDRAWORM on the campaign tracker.",
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
              "You turn to see Kasende regarding you with a level stare. 'We still have work to do. You still coming to the Frowning Gate with me? Or should I head out on my own?'",
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
              "'The hydraworms are spawning once more and have made it to the Frowning Gate again,' she says. 'I have been doing some ‘pruning,’ but we can always do more. Do you want to hunt hydraworms with me again?'",
            ],
          },
        },
      ],
    },
    {
      index: 8,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Kasende looks up and down with a blank expression. 'Alright, you can come help if you want. We're heading to the Frowning Gate. Try to keep up.'",
            ],
          },
        },
      ],
    },
    {
      index: 9,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Kasende collapses without a sound. You see that she's injured and immediately get out your medical supplies. She may not want to admit it, but you know that treatment of her injuries is going to take a while.",
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
