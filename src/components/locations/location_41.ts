import { LocationProp } from "../../types/LocationProp";

const location41: LocationProp = {
  location: 41,
  name: "LUNN, OUTPOST TENDER",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE SAVED LUNN ", section: "41.1" },
                { name: "OTHERWISE", section: "41.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU’VE SAVED LUNN ", section: "41.3" },
                { name: "OTHERWISE", section: "41.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "OTHERWISE", section: "41.5" }],
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
              "Lunn is still wearing his oversized cloak, still with damage from his close call. 'My friends!' he yells. 'It's so good to see you again.'",
              "He beckons you closer. 'I've got some items to trade as usual. And after what you did for me, I think I can swing some pretty good deals,' Lunn says with a wink, gesturing toward the notably disheveled outpost.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Lunn with  to trade for his wares."],
          },
        },
      ],
    },
    {
      index: 2,
      section: [
        {
          condition: [{ name: "If you have not saved Lunn", section: "41.2" }],
          text: {
            type: "story",
            text: [
              "A small man wearing a Ranger’s cloak that seems at least two sizes too large steps out from the trees and waves. 'People!' he yells. 'I don’t see too many travelers up here. What an opportunity!'",
              "He beckons you closer. 'I’ve got some items for trade, if you're interested. They’re around here somewhere!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Lunn with  to trade for his wares."],
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
              "Lunn eagerly unfurls a canvas roll, revealing his collection of found objects. 'See anything you like?' Lunn asks. 'I’m happy to trade for anything you have. If it wasn’t for you, I might still be lost in the woods!'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Each Ranger may search their Ranger deck for a gear and add it to their hand. Then each Ranger may return a gear from their hand to the collection. If they did, they choose a starting gear card from the collection that they meet the stat requirement for and add it to their hand. (This alteration to their deck is permanent.)",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Lunn happily trades with you. When you’re finished, he wraps up the canvas and heads out into the woods, whistling his usual aimless tune.",
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
              "Lunn beckons you over and sets down a roll of heavy canvas. He unties the artilope leather straps and rolls out the canvas, revealing his collection of found objects. “See anything you like?” Lunn asks. “Interested in a trade?”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Each Ranger may return a gear from their hand to the collection. If they did, then they choose a starting gear card from the collection that they meet the stat requirement for and add it to their hand. (This alteration to their deck is permanent.)",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Lunn makes a chirping sound to himself as he inspects his newest acquisition. Then he sets it on the canvas, rolls it up, and wanders off into the woods without as much as a goodbye. You hear him whistling a strange, aimless tune as he vanishes among the trees.",
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
              "Lunn groans and collapses. The wound doesn’t seem life threatening, but when you try to move him, he curls up and moans. You get out your medical supplies, and set to work treating him. This may take a while.",
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

export default location41;
