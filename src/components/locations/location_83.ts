import { LocationProp } from "../../types/LocationProp";

const location83: LocationProp = {
  location: 83,
  name: "REN KOBO, MERCHANT",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ name: "GO TO", section: "83.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "83.2" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "83.3" }],
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
              "The man’s broad face has been weathered by years of strong wind, and his eyes are surrounded by a forest of wrinkles from a lifetime of squinting into the sun. He pulls his hand out of the pocket of his long coat and thrusts it forward.",
              "He speaks with the drawl of the Messipian seafolk. 'Ren Kobo’s the name,' he says. 'Traveling merchant and Master of Commerce of the Sunray Flotilla, at your service. Perhaps you'd like to make a trade? If not, we can simply share the road; I see we’re traveling in the same direction.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Ren Kobo with  to trade with him."],
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
              "'Trade, you say?' Ren sweeps out his hands. 'Well of course you do! I’ve been from the Messipian Sea to the Fortresses of the Ice Clans, and I've even laid eyes on the Great Ocean, if you can believe it. And I have something from everywhere I’ve visited.'",
              "He goes to his wagon, and starts pulling out items. 'Now, let’s see if I can find something to tickle your fancy.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Each Ranger may return a gear from their hand to the collection. If they did, then they choose a starting gear card from the collection that they meet the aspect requirement for, and add it to their hand. (This alteration to their deck is permanent.)",
              "If you don’t trade with Ren Kobo, soothe 2 fatigue.",
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
              "Although he insists he’s fine, you can tell the old Messipian is in trouble. You’ll have to camp here for the night, so you can take the time to look him over properly and treat him.",
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

export default location83;
