import { LocationProp } from "../../types/LocationProp";

const location95: LocationProp = {
  location: 95,
  name: "FLOOD DAMAGE",
  data: [
    {
      index: 0,
      section: [
        {
          choose: {
            name: "READ THE ENTRY CORRESPONDING TO YOUR CURRENT LOCATION:",
            values: [
              {
                name: "White Sky:",
                text: [
                  {
                    type: "story",
                    text: [
                      "After the hard work of reattaching torn sails on White Sky's platforms and cleaning the paths along the shoreline, the lake is beginning to look like its old self again.",
                    ],
                  },
                ],
              },
              {
                name: "Kobo’s Market:",
                text: [
                  {
                    type: "story",
                    text: [
                      "After hours of bailing water and reassembling stalls, the market row is clearing up. It will take a while for everything to dry out, but trade has returned to Kobo's market.",
                    ],
                  },
                ],
              },
              {
                name: "Golden Shore:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You spend hours moving trees and reinforcing the banks of tributary streams. As you finish up, you look back over your handiwork and can see the telltale gleam of the shore's sands showing through once again.",
                    ],
                  },
                ],
              },
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Continue reading:",
              "Discard Flood Damage. Cross off the FLOODED entry on your campaign tracker corresponding to your current location. Each Ranger soothes 4 fatigue.",
            ],
          },
        },
      ],
    },
  ],
};

export default location95;
