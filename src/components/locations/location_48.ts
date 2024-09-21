import { LocationProp } from "../../types/LocationProp";

const location48: LocationProp = {
  location: 48,
  name: "AR TEL, ANGLER",
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
                  section: "48.1",
                },
                {
                  name: "IF YOU'VE FOUND THE PERFECT FISHING SPOT",
                  section: "48.2",
                },
                { name: "OTHERWISE", section: "48.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF HELPING HAND IS ATTACHED", section: "48.4" },
                {
                  name: "IF YOU'VE FOUND THE PERFECT FISHING SPOT",
                  section: "48.5",
                },
                { name: "OTHERWISE", section: "48.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "48.7" }],
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
              "“What’s this, then?” The voice seems to come out of nowhere, then you look up to see someone standing on a rock overlooking the water. “Those smell like Hy Pimpot’s famous juniper biscuits!”",
              "You barely have time to notice that the person has a fishing rod before it flicks, out and the hook catches on the handle of the basket. With a practiced flick of the wrist, the basket now sits in front of the angler, who eyes the biscuits greedily.",
              "“May I? I haven’t had a bite all day!”",
              "Clear Ar Tel with  to ask about not getting any bites fishing.",
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
              "You catch sight of Ar Tel perched on a rock just offshore, staring at the ripples where a fishing line sits undisturbed amid the gentle waves. The angler looks in your direction and calls to you. “I don’t suppose you’re on your way to the Golden Shore again?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Ar Tel with  to discuss another fishing trip."],
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
              "Ahead of you, a partially submerged Estian ruin rises out of the water. Perched atop it, an energetic angler casts a high-arcing line into the lake with a tremendously long fishing pole.",
              "The fisherfolk sees you, then reels in the line and flips the pole around. Thrusting the base of it into the water, the angler pushes off from the ruin and uses the fishing rod to vault to the shore, landing on the trail in front of you.",
              "“No need to step lightly. Fishing’s been awful lately. It’s like there’s not a single fish in all of White Sky Lake!”",
              "Clear Ar Tel with  to ask about the poor fishing.",
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
              "“Is this the fastest route to the Golden Shore? I want to try to get some fishing in before dark! You haven’t changed your mind, have you?”",
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
              "“I was just thinking about that spot on the Golden Shore you showed me. Best fishing I’ve had in years! If you’re headed that way, mind if I tag along? I’m afraid I can’t give you anything for it, but I would certainly welcome the opportunity. No safer place than by the side of a Ranger!”",
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
              "Ar Tel harrumphs. “Not sure what it is, but the fishing’s been terrible for weeks! I think something spooked the fish in these parts. I can feel it!” The angler appears contemplative for a moment. “Actually, I’ve been hearing tales of some amazing fishing spots across the lake at the Golden Shore. Maybe all the fish moved up there! Would you be willing to accompany me? I’d sure appreciate an escort, what with the ‘fish spooker’ hanging around somewhere.”",
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
              "Ar Tel gasps and falls to the ground.",
              "You get Ar Tel to safety as quickly as you can, but it takes time. You’ll have to wait to return to your duties tomorrow.",
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

export default location48;
