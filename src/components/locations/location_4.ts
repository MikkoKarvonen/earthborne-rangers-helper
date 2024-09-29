import { LocationProp } from "../../types/LocationProp";

const location4: LocationProp = {
  location: 4,
  name: "NORTHERN OUTPOST",
  data: [
    {
      index: 0,
      section: [
        {
          text: {
            type: "story",
            text: [
              "The hike through the dark and gloomy woods has taken you hours, but you finally reach the Northern Outpost.",
            ],
          },
        },
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve FIXED UP NORTHERN OUTPOST, read:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You can see the evidence of your previous work. The forest no longer encroaches on the building and you can get a clear picture of the surroundings.",
                    ],
                  },
                  {
                    type: "rule",
                    text: ["The lead Ranger may scout 2 path cards."],
                  },
                  {
                    type: "story",
                    text: [
                      "However, Lunn’s clutter has already begun to build back up. You could help him tidy up, but you imagine the rewards wouldn’t be as great this time around.",
                    ],
                  },
                ],
              },
              {
                name: "Otherwise, read:",
                text: [
                  {
                    type: "story",
                    text: [
                      "Scraps of wood, cloth, leather, and paneling lie scattered about the exterior. After long years of neglect, the forest around seems to press in on the outpost from all sides.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Search the Northern Outpost set for The Deep Woods, and put it into play.",
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
              "IF YOU HAVEN’T GAINED OR COMPLETED THE SEARCH (LUNN) MISSION, READ THE FOLLOWING:",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              `You find a note tacked to the door. It reads: "I went to go investigate a strange presence in the forest. Be back by the full moon. If I’m not, I’m probably in trouble! - Lunn."`,
              "You step inside, but it’s deserted. The note said Lunn should have been back days ago. Sounds like he probably needs help.",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE",
            values: [
              {
                name: "A) Look for Lunn.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Gain the **SEARCH (LUNN)** mission. Reminder: search the Northern Outpost set for Lunn and attach him facedown to the mission card. Record 94.7 three days from now on the campaign tracker. You may choose this option only if you don’t have another Search or Rescue mission.",
                    ],
                  },
                ],
              },
              {
                name: "B) Not today.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Record 94.7 three days from now on the campaign tracker. Do not add Lunn to the path deck.",
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
    {
      index: 1,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve FIXED UP NORTHERN OUTPOST, read:",
                text: [
                  {
                    type: "story",
                    text: [
                      "After a few hours of tidying, scrubbing, and general fixing, the outpost is back in some semblance of working order … for now. You breathe a sigh of relief at a job well done.",
                    ],
                  },
                  {
                    type: "rule",
                    text: ["Each Ranger soothes 3 fatigue."],
                  },
                ],
              },
              {
                name: "Otherwise, read:",
                text: [
                  {
                    type: "story",
                    text: [
                      "It takes hours of hacking back overgrowth and scrubbing the floor to get the outpost back in working order. You breathe a sigh of relief at a job well done. Future visitors to this outpost will have a much easier time reaching the structure now.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger soothes 3 fatigue. Discard the Deep Woods if it’s in play. Record FIXED UP NORTHERN OUTPOST, on the campaign tracker.",
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default location4;
