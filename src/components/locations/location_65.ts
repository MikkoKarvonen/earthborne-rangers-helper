import { LocationProp } from "../../types/LocationProp";

const location65: LocationProp = {
  location: 65,
  name: "LYN MIRA, WOODWORKER",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’VE CARVED A DOLEWOOD CANOE", section: "65.1" },
                { name: "OTHERWISE", section: "65.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF YOU ARE AT HIGH BASIN", section: "65.3" },
                { name: "IF HELPING HAND IS ATTACHED", section: "65.4" },
                { name: "IF YOU’VE CARVED A DOLEWOOD CANOE", section: "65.5" },
                { name: "OTHERWISE", section: "65.6" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "65.7" }],
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
              `You find Lyn sitting thoughtfully while whittling a small block of wood.
“Ah, great to see you back around these parts. Life has been as busy
as ever. With the rains coming back, I’m up to my ears with work.
What people don’t realize is these designs take time to get right.
They’re old, maybe as old as the first people to leave the arcologies.
Back then, they probably needed things nimble, tough, and quick.”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Lyn with  to chat with her about your boat."],
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
              `The sound of metal splitting wood and the scent of fresh sawdust
wafts toward you as you approach. A woman heaves an axe up, sweat
dripping from her brow. Around her are an assortment of finely carved
objects lazily strewn on work benches and old stumps. She waves you
over as she grabs a tool you’ve never seen before, a long-handled
device lined in a power casing.`,
              `“To what do I owe the pleasure?” She clicks a button on the handle
revealing a molten wire, humming with energy. “Laser cutter. Bark of
the dolewood is woven so tight you need to heat the surface if you’re
gonna cut through it.” She slowly begins hewing away at the bark of
a long piece of dolewood. Next to it you spy an intricately engraved
collapsible canoe. The craftsmanship is spectacular.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Lyn with  to ask her about the boat."],
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
              `With a gentle nudge you lock the last panel of dolewood into place,
take a breath, and step back. Lyn gives you a satisfied nod. You look
up and realize you’ve lost track of time, the carving process was so
engrossing it felt as if time slipped away like a silent stream flowing
on toward dusk. She eyes your work admiringly.`,
              `“I must say, I’m impressed. Took me more than a few goes before
I managed to make something like this.” You thank her for the
compliment and her help, and she clasps you on the shoulder. “Of
course! Should be rapids ready. Try collapsing it for storage, and if
you’d like, there’s a creek about a mile east of here where you can
give her a test run.”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              `Gain the Dolewood Canoe reward card. Discard Lyn, and return
HELPING HAND to the collection. Write CARVED A DOLEWOOD CARVED A DOLEWOOD
CANOE CANOE on the campaign tracker.`,
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
              `As you plod your way through the underbrush, you look out at the
horizon. You turn to Lyn and ask about the Dolewood canoes and the
journey ahead. She slows a bit and turns to you.`,
              `“See, folks need these canoes, especially with the rains and spawning
season coming on. A Ranger could use one of em’ too. Collapsible,
lightweight, and strong. If we keep on and make it to High Basin, I
can show you how to make one.”`,
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
              `Lyn waves and sets down her axe, clasping your hand with a hearty
grip. “Good to see you! I hope you didn’t come back for another
canoe?” She grins. “Actually, doubt I’d have enough dolewood
around to make another for you, what with all the others who are
asking.”`,
              `She gestures back to her tools. “Though, if you ain’t too busy, maybe
you could help me build a canoe for some folk? Seems like you had a
knack for it when you put the last one together.”`,
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
              `As Lyn finishes stripping the log she begins carving deep cuts into the
tough bark, slowly running the rope back and forth like a meditation.
You ask about her work, almost in a whisper as to not disturb the
ritual.`,
              `“Been building these canoes now for almost fifteen years. Handy
little guys. Designs been passed down for generations. Collapsible,
lightweight and durable. Perfect for you lot. Come with me to High
Basin where there’s the right kind of wood to be found. Now, I could
carve it for you … but if you want her to take care of you, you need
to know every notch and groove. Come with me, and I’ll show you
how to make one.”`,
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
              "Lyn cries out. Struggling to stand, she groans, and her eyes roll back into her head. You must carry her to safety and tend to her wounds.",
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

export default location65;
