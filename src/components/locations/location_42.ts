import { LocationProp } from "../../types/LocationProp";

const location42: LocationProp = {
  location: 42,
  name: "TOPSIDE MAST",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ section: "42.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "42.2" }],
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
              "High atop Lone Tree Station you'll find a series of circular platforms of polished wood and forged carbon. During your training, on clear, windless days, these platforms served as a refuge. You would often spend your free time in the afternoons bathing there in the sun, sitting in quiet contemplation and looking out over the mirrored surface of White Sky Lake. You'd also look wistfully at the airship known as the Swift, its hull gleaming in the sun, as Ben Amon would climb aboard and launch it into the air.",
              "The legs of the vehicle would compress and then extend with a sudden movement, propelling it upwards with tremendous force. Once it reached its apex, its wings would unfurl, and the glider would soundlessly soar toward the horizon, steadily descending as it flew toward its destination.",
              "Calypsa told you and the other initiates that it was prone to roll and crash in inclement weather, and if you flew it any great distance, its energy cells would drain, and the Swift would grow inert, unable to launch for days before the cells recharged.",
              "All this was clearly meant to dissuade you from taking the Swift out on your own, but when you look at the airship, you can’t help but feel a surge of excitement. To soar high above the Valley would surely be exhilarating, if not a little terrifying. Now that you're a full-fledged Ranger, perhaps you can convince the crew to take you for a ride.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Topside Mast with  to take the Swift for a ride."],
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
              "You climb aboard as Ben Amon himself emerges from the hangar and hops into the pilot's seat. 'Strap in!' he says, lowering a pair of goggles over his eyes. 'I never need much of an excuse to take the Swift out for a walk. There's nothing in this world like flying. You'll see!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You may immediately proceed to the travel phase of the round. If you do, you can travel to any location within 3 paths (even if there are ready cards with the obstacle keyword in play). Use the terrain type of the last path you crossed over. If you choose to travel in this way, discard the current challenge card, and do not resolve the remainder of this test.",
              "If you choose not to travel, discard Topside Mast, and resolve the remainder of the test as normal.",
            ],
          },
        },
      ],
    },
  ],
};

export default location42;
