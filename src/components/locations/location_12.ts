import { LocationProp } from "../../types/LocationProp";

const location12: LocationProp = {
  location: 12,
  name: "GOLDEN SHORE",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "AR TEL IS IN PLAY", section: "12.1" },
            { name: "GOLDEN SHORE IS FLOODED", section: "12.2" },
          ],
          text: {
            type: "story",
            text: [
              "Wherever sunlight kisses the shoreline, you can see how the Golden Shore earned its name: countless flecks of gold glitter beneath the water, sparkling through the light reflected off the surface. A wind comes in off the water, causing the grass to rustle with a soft hiss.",
            ],
          },
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
              "Ar Tel nods approvingly. “Look! That little tucked away spot under those trees. It definitely feels better, don’t you think? Nothing spooking the fish around here. I can tell!”",
              "Ar Tel pulls one of several collapsible fishing poles out of a long conical tube. “Here. Never let it be said that I don’t pay my debts. Besides, how many vaulting rods does one person need?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Ar Tel’s Vaulting Rod reward card. Discard Ar Tel. Return HELPING HAND to the collection. Record FOUND THE PERFECT FISHING SPOT on the campaign tracker.",
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
              "Nothing about the Golden Shore shines today. The evidence of the recent flood dominates the landscape. As far as you can see, waves and rushing floodwaters have left the lake shore caked in stinking brown mud and covered in jumbled piles of fallen trees and driftwood.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Search the General set for Flood Damage, and put it into play.",
            ],
          },
        },
      ],
    },
  ],
};

export default location12;
