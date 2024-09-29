import { LocationProp } from "../../types/LocationProp";

const location92: LocationProp = {
  location: 92,
  name: "DEEPER MOTIVES",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ARRIVE",
              conditions: [{ name: "TUMBLEDOWN", section: "92.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "SPIRIT SPEAKER NAL", section: "92.2" },
                { name: "MYSTERIOUS VERDESSIAN", section: "92.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "GO TO THE NORMAL JOURNAL ENTRY FOR THAT CHARACTER" },
              ],
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
              "The hike to Tumbledown has left you steadily more anxious the closer you get. The haversack holding the trapped Verdessian has started to shake and rustle more and more, and you’ve had to stop several times to push the budding vines back under the pack’s flaps. But eventually, you see the Valley drop away into the great green ocean of the Verdessa and hear the constant, muted roar of the waterfall.",
              "Nal meets you upon a wide balcony. She clasps your arms and gestures to the vast jungle below. 'With the Verdessa so close, I think I will be able to communicate with the Verdessian.' She nods to the pack. 'Go ahead and open it.'",
              "You empty the haversack onto the ground, and immediately the ball of vines and roots flows upward and forms into the figure of the Verdessian. Slowly, it turns to Nal. 'We mean you no harm,' she says.",
              "'The spirit of the Verdessa has offered to help us communicate with each other. Will you speak with us?' The Verdessian opens the petals of its face, revealing vibrant reds and purples. Its stamens flex like fingers.",
              "'It agrees,' Nal says. 'But it says we must converse on soft ground.' You accompany them to a patch of grass on the cliffs looking over the Verdessa. Nal closes her eyes, and her breath becomes steady and rhythmic. She and the Verdessian begin to speak.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Search the Lone Tree set for Spirit Speaker Nal, and put her into play within reach of a Ranger of your choice. Then search the General set for the Mysterious Verdessian, and put it into play in the same area. Do not read their 'enters play' text.",
              "If you haven’t gained or completed the SEARCH (KASENDE) mission, do not shuffle Kasende, Expert Hunter into the path deck.",
              "Clear Spirit Speaker Nal and the Mysterious Verdessian with  to aid in their understanding of one another. Reveal  icons from the challenge deck to advance their conversation.",
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
              "Eyes closed, Nal is focused fully on the Verdessian. You can feel the connection between them. It’s as if the very air is energized and alive. You close your eyes and see a vision of endless green—the canopy of the Verdessa stretching far to the south—and you feel a sudden kinship with the Verdessian, two lifeforms together in the substrata of all existence.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "You may shuffle one card from the challenge discard back into the challenge deck. Discard all  from Spirit Speaker Nal. (She is not discarded.)",
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
              "The Verdessian’s stamens undulate in repeating hypnotic patterns as Nal stands across from it with her eyes closed. You can feel the connection between them. It’s as if the very air is energized and alive. You close your eyes and see a vision of dark roots, burrowing to the deepest, hidden places on Earth. You feel a sudden kinship with the Verdessian—both of you supported by the same ground, warmed by the same sun, and sharing in the same moment.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Exhaust all flora except the Mysterious Verdessian. Discard all  from the Mysterious Verdessian. (It is not discarded.)",
            ],
          },
        },
      ],
    },
  ],
};

export default location92;
