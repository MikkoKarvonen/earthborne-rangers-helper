import { LocationProp } from "../../types/LocationProp";

const location61: LocationProp = {
  location: 61,
  name: "TOLLIN LANG, SCULPTOR",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU'VE ERECTED A MIGHTY STATUE", section: "61.1" },
                { name: "OTHERWISE", section: "61.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU ARE AT STONEWEAVER BRIDGE", section: "61.3" },
                { name: "IF HELPING HAND IS ATTACHED", section: "61.4" },
                { name: "IF YOU'VE ERECTED A MIGHTY STATUE", section: "61.5" },
                { name: "OTHERWISE", section: "61.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "61.7" }],
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
              `“Hello!” Tollin seems perfectly happy to abandon his work (which you
think is a caustic mulcher eating a hydraworm, but you’re not entirely
sure) and chat with you.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Tollin with  to ask him about his next project."],
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
              `The glow alerts you to Tollin Lang’s presence before you actually
find him, crouched next to a heavy bag and rounded, hemispherical
pedestal. Above the pedestal, you see a whirling rainbow mass of
sparkling shards of glass. Even as you watch, Tollin reaches into the
bag—while wearing a heavy glove—and hauls out another handful of
shards, carefully casting them into the air. You see the brief flash of
an otherwise invisible suspensor field, and the shards join the larger
cloud. Tollin thinks for a moment, then uses a pole to nudge and push
the material into a new form. You’ve heard of kinetic glass before, but
this is the first time you’ve seen it used in such a quantity.`,
              `Tollin looks at you as you approach and waves. He starts chatting with
you as he continues to sculpt.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Tollin with  to ask him about his sculpture."],
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
              `With a final flourish, Tollin steps back and fiddles with the controls
on a pair of suspensor pedestals he’s put on the sides of the bridge.
With a musical crashing and tinkling sound, the mound of kinetic
glass shakes and rises. Slowly it forms into an abstract human shape,
surrounded by a spiraling swirl of stone. Even as you watch, the shape
slowly moves their arms, and the stones solidify into a sparkling
obsidian obelisk that envelops the figure, before breaking apart and
returning to its swirling spiral.`,
              `Tollin watches with a satisfied smile. “The hardest kinetic glass work
I’ve ever attempted,” he says. “And thanks to you, it was a success.”`,
              `He reaches into his bag and pulls out a hemisphere roughly the size
of his palm, along with a large leather pouch. “Here,” he hands it to
you. “I’m afraid I don’t have anything more practical to give you in
return, but this is a sculpture I did of a rabbit when I was practicing my
realism. I thought you might like it, or … ” he trails off, then laughs.
“Maybe you can use it as a decoy!”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              `Gain the Kinetic Glass Sculpture reward card. Discard Tollin, and
return HELPING HAND to the collection. Write ERECTED A MIGHTY ERECTED A MIGHTY
STATUE STATUE on the campaign tracker.`,
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
              `Tollin taps your shoulder. “Not that I’m minding the chance to
travel around the Valley, not at all in fact, but we are heading for
Stoneweaver Bridge to set up my statue, right? If not, maybe I should
just head back to Spire, or Branch, and continue my work there?”`,
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
              `“Oh this?” He gestures to the incomplete piece. “Something about
the duality of the prey-predator relationship, I think. Or maybe just
that there’s always a bigger fish out there?” He laughs. “But I have
to admit, I’d like a break to approach this with a fresh eye, and the
Stoneweaver sculpture should get checked to make sure it’s working
correctly. Don’t suppose you’d like to take me down there again?”`,
            ],
          },
        },
      ],
    },
    {
      index: 6,
      section: [
        {
          text: {
            type: "story",
            text: [
              `As you ask a few questions about Tollin’s work, he gradually pays less
and less attention to his current work until he’s set down his tools and
is engaged in a lively discussion with you.`,
              `“I’ve actually been asked by the elders at Spire to install a work on
Stoneweaver Bridge. Something to commemorate its construction,
you know? Anyway, I’ve created the design, but now I have to haul
nearly one hundred kilos of kinetic glass and materials there.” He
looks faintly abashed. “I … may have gotten carried away.”`,
              `Suddenly he brightens. “Hey, you travel all over the Valley, right?
Could you help me take the sculpture to Stoneweaver Bridge? I bet
it would be really easy if we had a boat; maybe one of the ones Lyn
Mira makes out in Branch? But we could just carry the materials there
too.”`,
            ],
          },
        },
      ],
    },
    {
      index: 7,
      section: [
        {
          text: {
            type: "story",
            text: [
              `Tollin looks confused for a moment. Then suddenly, he just collapses.
You rush to help him, and he shakes his head groggily. “The strangest
thing just happened … ” he murmurs.`,
              `His injuries look bad enough that you’d better set up camp. Treating
them may take a while.`,
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

export default location61;
