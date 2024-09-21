import { LocationProp } from "../../types/LocationProp";

const location50: LocationProp = {
  location: 50,
  name: "THE BUBBLE",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ name: "GO TO", section: "50.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU HAVEN’T RECEIVED THE ARCOLOGY ARCHAEOLOGY MISSION",
                  section: "50.2",
                },
                {
                  name: "IF YOU ARE ON THE ARCOLOGY ARCHAEOLOGY MISSION AND IT HAS 3 CHECK MARKS",
                  section: "50.3",
                },
                { name: "OTHERWISE", section: "50.4" },
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
              "Standing on the edge of one of White Sky’s platforms, you can see through the clear water to the lake bed a good five meters down. Nestled among the jagged rocks and mud is what looks like a large bubble of trapped air. You see green within and movement as well.",
              "You ask one of the locals, a young boy, if there’s anyone in the Bubble right now. “Just one,” he says, not taking his eyes off the bobber on his fishing line. “Silaro Mako, the archaeologist. Said he wanted to study some of the old arcology gadgets down there.”",
              "When you ask when he’s coming up, he laughs. 'No idea. Silaro says the Bubble has plenty of food in it. You can stay down there forever.'",
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
              "The air inside the Bubble is surprisingly still, and laden with enough oxygen that you feel as if you’ve woken from a deep sleep.",
              "In the center of the Bubble, you see a disk made of dull gray steel, maybe a few meters across. Someone has laid a bedroll next to it, and that same someone is crouched over the disk, studying it intently. The man looks up from his work and waves.",
              "“Welcome to the Bubble! Come over here, why don’t you?”",
              "Silaro shows you the disk, which appears to be stamped with concentric rings of indecipherable text. He also shows you a translation device he’s built, a glass plate that, when laid over the text, slowly translates parts of it into something legible.",
              "After a long time enthusiastically talking about his work, Silaro gets a thoughtful look in his eye. 'You know, there are arcology ruins all over the Valley. If you ever find anything interesting, I’d love for you to bring it by and show me. I can give you one of my translation plates too. That might help in any exploration you do.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Gain the ARCOLOGY ARCHAEOLOGY mission."],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "“Come back to me to show me what you’ve found. You can find me here, or in Spire, down in the arcology ... or out in the field studying the Fractured Wall. So much to discover! I can’t bear staying in one place for too long.”",
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
              "Silaro gasps in delight when you show him a set of small glass bricks you found among the ruins. They seemed totally unremarkable, except for a glowing golden mote of light trapped in the center of each. He brings them to his bedroll and pulls out a scanner, running it back and forth across the glass. Eventually, he sits back with a broad grin on his face.",
              "“These, I think, are quantumly entangled photons. I don’t know how they’re suspended in this medium, but the golden sparkles we see aren’t the photons themselves. I think they’re the photon’s quantum ‘ghosts.’”",
              "He pulls out a pair of circular devices with faces of darkened glass. He flips them over to reveal a square slot. 'Yes, the inscriptions I found said these needed to be powered by entangled photons, but I didn’t know what that meant until now.'",
              "He plugs a cube into one of the devices. Slowly, long golden lines appear on the dark glass. Though the lines seem random, something about their movement tugs at your mind, like they‘re trying to tell you something.",
              "Silaro hands one to you. “The Estians called them ‘probability compasses,’ but I’m not sure what they do. Try it out! I’m reasonably sure it’s not dangerous.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Probability Compass reward card. Complete the ARCOLOGY ARCHAEOLOGY mission.",
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
              "The Bubble is just as peaceful as you remember, the thick carpet of moss deadening your footfalls and feeling as soft as a finely woven hammock when you sit down.",
              "You chat with Silaro about his ongoing translation work for a bit, then settle in to relax and refocus your mind. Your meditation lasts for about an hour, until the small romp of lutrinals that live on the far side of the Bubble think it would be more fun to splash some of the exit pool on you. The resulting water fight between you and a dozen otter-cat hybrids isn’t exactly relaxing, but it does leave you with a smile on your face.",
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
  ],
};

export default location50;
