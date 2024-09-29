import { LocationProp } from "../../types/LocationProp";

const location19: LocationProp = {
  location: 19,
  name: "THE PLUMMET",
  data: [
    {
      index: 0,
      section: [
        {
          condition: [
            { name: "DACE, AMBITIOUS SHAPER IS IN PLAY", section: "19.1" },
            {
              text: {
                type: "story",
                text: [
                  "The Plummet is visible from kilometers away, a perfectly vertical, sheer cliff looming over the Valley. It’s impossible to climb, so the only way to the top is a series of dangerous trails around the edges, to approach it along the lip of the Valley from the north, or to zip to the summit on a spiderline.",
                ],
              },
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
              "You reach the lip of the Plummet, and you and Dace stare over the sheer drop. She takes a deep breath, and starts to pace back and forth along the edge. You hear her repeating, quietly 'I am light as a feather, rising to the sun,' over and over.",
              "You start to say something about there being a better way to test this, but suddenly Dace hurls herself over the cliff! You dash to the edge to see her falling, then slowing, then gracefully gliding at the pace of a brisk walk. As she reaches the base of the Plummet, she stops, rises back up, then settles softly to the ground.",
              "You can hear her whoop of victory echoing off the rocks.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the Light as a Feather reward card. Discard Dace. Return HELPING HAND to the collection. Record SEEN A PERSON FLY on the campaign tracker.",
            ],
          },
        },
      ],
    },
  ],
};

export default location19;
