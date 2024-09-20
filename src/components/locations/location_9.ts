import { LocationProp } from "../../types/LocationProp";

const location9: LocationProp = {
  location: 9,
  name: "THE MARSH OF REBIRTH",
  data: [
    {
      index: 0,
      section: [
        {
          text: {
            type: "story",
            text: [
              "The Marsh of Rebirth is the very heart of the swamp—a swirling morass of sluggish currents and thick waters stained with tannins. The heavy, humid stench of rot fills your nostrils, but despite the smell, the oxygen-rich air leaves you feeling invigorated. The Marsh of Rebirth is a place of decay and death but also of newborn life.",
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
              "For the last hour, the ground under your feet has been growing soggier. The rich scent of loam and decay fills your nose. Finally, you walk under a corridor of arching boughs draped with hanging moss and find yourself standing on a narrow spit of dry land leading into a morass of black water, vines, and cypress trees. You’ve found a path that leads to the Marsh of Rebirth.",
            ],
          },
        },
      ],
    },
    {
      index: 2,
      section: [
        {
          condition: [
            { name: "YOU ARE AT THE MARSH OF REBIRTH", section: "9.3" },
          ],
          text: {
            type: "story",
            text: [
              "You carefully pick through the vine-covered ruins. The ancient carbon- composite walls are hidden by muck and moss, worn down by water and weather.",
              "You brush aside a layer of grime and find a map carved into the wall. It shows this building as well as a large cluster of buildings deeper in the swamp. If there are any artifacts worth salvaging, you’ll probably find them in the Marsh of Rebirth. You step out of the ruins and get your bearings.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Exhaust each being."],
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
              "The bunker is so covered in mud and reeds that it looks like just another hillock rising out of the swamp, but you spot a corner of dull carbon composite peeking through the grass. You find a hatch, pry it open, and cautiously climb into the black, cavernous interior.",
              "Once inside, you see a series of rooms. Most are empty and overgrown, but in one room you find what appears to be a small dish of liquid metal with Estian script along the rim. You apply a universal power cell to the recharge port, and with some fiddling, you activate the device. Ripples flash across the surface, and suddenly the metal reforms into a topographical map of the swamp, replicated in stunning detail.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Gain the Topographone reward card."],
          },
        },
      ],
    },
  ],
};

export default location9;
