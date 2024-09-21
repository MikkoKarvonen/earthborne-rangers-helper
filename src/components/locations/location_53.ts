import { LocationProp } from "../../types/LocationProp";

const location53: LocationProp = {
  location: 53,
  name: "SILARO MAKO, ARCHAEOLOGIST",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                {
                  name: "IF YOU ARE ON THE ARCOLOGY ARCHAEOLOGY MISSION, AND ALL OPTIONS ARE CHECKED OFF",
                  section: "50.3",
                },
                {
                  name: "IF YOU'VE PROVED SILARO'S HYPOTHESIS",
                  section: "53.1",
                },
                { name: "OTHERWISE", section: "53.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF HELPING HAND IS ATTACHED", section: "53.3" },
                {
                  name: "IF YOU'VE PROVED SILARO'S HYPOTHESIS",
                  section: "53.4",
                },
                { name: "OTHERWISE", section: "53.5" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "53.7" }],
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
              "You find Silaro, once again, deeply entranced in his work. This time, he seems particularly intrigued by what looks like the shell of a giant power coupling protruding from a crack in the wall some two meters above him. He doesn’t seem to notice your approach until a twig cracks underneath your feet.",
              "“Oh!” he says, then relaxes. “It’s you. Actually, just the person I wanted to speak to! Well, really I’d love to speak with whoever engineered these pressure sensors, or better yet, who removed them … they appear to have been worn away shortly before the dam broke and the valley flooded.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              `Clear Silaro with  to ask if he needs any more help with his
research.`,
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
              "As you carefully make your way over the moss-dappled stones near the Fractured Wall, you hear a faint series of beeps and grunts. Squinting, you spot a hunched figure intently studying a collapsed chunk of the Fractured Wall. As you approach and get ready to introduce yourself, he spins around to face you.",
              `“—clearly mid to late twenty-second century design, if you look
at the interlacing carbon microfibers in the stone! You agree?” You
pause, unsure if he’s addressing you or himself. He grins. “Well? What
do you think?” Confused but intrigued, you take a look for yourself.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [`Clear Silaro with  to ask him about his research.`],
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
              "The forest seems to stretch and bend around you as the day marches on. The straps of your pack dig into your shoulders, and your feet ache after a long day’s trek. You ask Silaro how important this mission is, and he shrugs.",
              "“If my hypothesis is correct, collecting this information from White Sky, Branch, or Spire could help us uncover a forgotten chapter in the history of the Valley’s arcology. But I know you can’t be everywhere at once. If you need to go on your way, I can carry on from here.”",
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
              "The sizzle of live wires buzzes through the air, and a sharp yelp sends you twirling around to find Silaro leaping back from a large chunk of rubble from the Fractured Wall. “Still live, definitely still live! I’m fine though, don’t you worry!” he cries.",
              `You help him to his feet and ask about his experiment. “See I picked
up what turned out to be not-so-faint traces of energy still humming
through the dam’s superstructure, which I believe must have been
distributed across the Valley …” He pauses for a moment, then his
eyes widen. “You wouldn’t happen to be heading back to say … Spire
or Branch? Ooo or White Sky, by any chance?” He smiles sheepishly.
“It’s just … I have another, uh, time sensitive hypothesis to unravel.”`,
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
              `“Ah yes! Of course, of course!” Silaro’s eyes light up. “The calcium
deposits. See, I believe this was once a dam, holding back a … a
huge lake, maybe a small sea. When it ruptured, the water would’ve
swept through the Valley, submerging and reshaping the ecosystem.
It eventually drained into the Verdessa, leaving behind aquatic life
forms. As they decomposed, they would have left strong deposits of
calcium in the soil, which would have enriched and accelerated the
regrowth of the Valley’s floor.”`,
              `He looks to you. “If I were able to test two samples, one from here
and another from say… White Sky, Branch or Spire, I could determine
if the same calcium deposits are indeed present! I know the paths
can be winding and dangerous, but maybe you’d be willing to
accompany me?”`,
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
              `As soon as you arrive, Silaro eyes a small patch of pebbled earth and
quickly begins collecting samples. Worn from your journey, you finally
rest in the nook of a hollowed tree trunk, which, for once, seems to
hug every curve of your aching body. Just as you begin to drift off,
you’re startled awake by Silaro’s joyous cry.`,
              `“Yes! And not only the same percentage of calcium enrichment but
dating back to approximately the same time!” He begins to pace
in concentric circles, each circle sending him farther and farther into
the forest. His voice drifts away but you manage to make out, “after
the flood … no noticeable decay of arcology technology across … a
flood this powerful must have scoured the Valley of life …”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              `Gain the Silaro’s Insight reward card. Discard Silaro, and return
HELPING HAND to the collection. Write PROVED SILARO’S PROVED SILARO’S
HYPOTHESIS HYPOTHESIS on the campaign tracker. Then return and read the intro
to the location as normal.`,
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
              `Silaro collapses. You rush over to examine him. He’s still breathing
but in a lot of pain. “Oh dear … I’m afraid I’ve ... ” he heaves as he
clenches his jaw. You must stay and help him recover, keeping an eye
out for any predators who may take advantage of his injuries.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [`End the day.`],
          },
        },
      ],
    },
  ],
};

export default location53;
