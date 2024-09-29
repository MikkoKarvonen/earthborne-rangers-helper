import { LocationProp } from "../../types/LocationProp";

const location87: LocationProp = {
  location: 87,
  name: "BEN AMON, SWIFT PILOT",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ section: "87.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "87.2" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "87.3" }],
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
              "A shadow skims over your head, and you duck, thinking you’re about to be attacked by a hungry irix. You look up in relief to see the shape of Ben Amon’s custom-made glider, the Swift, passing overhead. It lands gently in a clearing a short distance away. As you approach, you see Ben Amon emerge from the cockpit, stretch his legs, then check something on the underside of the vehicle.",
              "'Hello there!' he says, looking up from his work. 'I'm on an errand for Elder Thrush, but if you're in need of assistance, maybe I can give you a ride.'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Ben with  to board the Swift."],
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
              "After some discussion, Ben gestures toward the Swift. 'Climb aboard!' he says. 'The Elder asked me to run these supplies across the Valley as quickly as possible, but the winds are favorable today. I should be able to make your journey a little easier and be back to Lone Tree by sundown. Now, where to?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You may immediately proceed to the travel phase of the round. If you do, you can travel to any location within 2 paths (even if there are ready cards with the obstacle keyword in play). Use the terrain type of the last path you crossed over. If you choose to travel in this way, discard the current challenge card, and do not resolve the remainder of this test.",
              "If you choose not to travel, discard Ben, and resolve the remainder of the test as normal.",
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
              "Ben swears in several languages you’ve never heard before. You move to help him out and see that it will take some time to properly treat his injuries.",
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

export default location87;
