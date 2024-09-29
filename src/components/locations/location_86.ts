import { LocationProp } from "../../types/LocationProp";

const location86: LocationProp = {
  location: 86,
  name: "THE FUNDAMENTALIST",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [
                { name: "IF YOU’RE AT THE BOWL OF THE SUN", section: "86.1" },
                { name: "OTHERWISE", section: "86.2" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU ARE ON INVASION (EITHER STAGE)",
                  section: "86.3",
                },
                { name: "OTHERWISE", section: "86.4" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ name: "GO TO", section: "86.5" }],
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
              "As you descend into a warm patch of sun, you see Tykor Hum, the so-called Fundamentalist of the Valley. You’ve heard Tykor lives alone and often wanders the Valley, but here in the verdant stone bowl, he seems to have set up a quiet meditation spot in the greenery. Tykor himself is sitting cross-legged on a large boulder with what appears to be an offering of fruits, flowers, and fragrant tea set out before him. His eyes are closed, and you can hear him mumbling to himself.",
              "When you get close, he seems to hear you because he opens his eyes. You ask him what he’s doing, and he stares back at you for a long moment. 'Speaking with my parents,' he says finally. 'What brings you to the Bowl of the Sun?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear the Fundamentalist with  to ask him about his way of life.",
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
              "You see a man quietly picking plums from a small, fragrant-smelling tree. You’ve heard of the so-called Fundamentalist, and you watch with interest as he carefully lifts and inspects each plum in turn. Occasionally, one comes off the tree, and he tucks it into a rucksack.",
              "When you see him notice you, you call out and ask what he’s doing. He frowns at you. 'What does it look like? I’m taking plums. Only the ones that are just about ready to fall off the tree, obviously. What are you doing?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear the Fundamentalist with  to ask him about his way of life.",
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
              "You tell Tykor about the reclaimers, and how they are surging into the Valley. Tykor listens intently. Then you ask the question on your mind: are the reclaimers a natural part of the environment that should be left alone, or a human creation that should be removed?",
              "Tykor strokes his grizzled chin and stares into space for a while. 'That’s a good question,' he says finally. 'On the one hand, these reclaimers of yours are clearly biomelds, created by our ancestors for Guide knows what reason. You could argue that removing them is no different than disassembling one of your villages so that everyone can live a hunter-gatherer lifestyle. In fact, you could even argue that removing them is just cleaning up our ancestors’ mess.'",
              "'But,' he continues, raising a finger, 'Humans have been a part of the ecosystem for hundreds of thousands of years. This whole ecosystem,' he gestures to the Valley and the world beyond with wild sweeps of his hands, 'is created by humans. First we changed it with our actions thousands of years ago, then we changed it again with the Generational Projects trying to change the first change!'",
              "He laughs for a moment, then grows serious. 'Perhaps the only thing we can do is to resolve to step back from this point forward, and stop meddling. That’s what I’d suggest, at any rate. Stop meddling, because it always leads to more meddling.' But then you hear his voice quiver just a tiny bit. 'But … I suppose that’s a cold comfort to all the people those reclaimers might hurt. That it’s … natural.'",
              "Tykor suddenly stands and begins to pack his bags without another word. In a minute, he is ready to leave with his rucksack. Unless you ask him to stay, he is clearly going to head out.",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Have him stay and continue helping you.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all  from the Fundamentalist, and move him.",
                    ],
                  },
                ],
              },
              {
                name: "B) Say goodbye.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard the Fundamentalist. Each Ranger soothes 2 fatigue.",
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
      index: 4,
      section: [
        {
          text: {
            type: "story",
            text: [
              "You ask Tykor why the others in the Valley call him the Fundamentalist, and he cocks his head for a moment. 'Do they?' he asks. 'I suppose I haven’t been into any of your villages in a while.'",
              "He thinks for another moment, then abruptly speaks. 'I guess it’s because of how I live,' he says. 'I don’t see us having any right to build houses and lay down roads across this Valley. That’s just us imposing our will on the rest of the world, which we have no more right to do than any other animal.'",
              "You ask if human sapience changes the situation at all, and he waves his hands as if driving off a fly. 'You sound like all the rest. No, no, our sapience just means we should recognize our capacity to change the world, and then make the conscious choice to reject that.'",
              "As he talks, he starts to pack his things. In a minute, he is ready to leave. Unless you ask him to stay, he is clearly going to head out.",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Have him stay and continue helping you.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all  from the Fundamentalist, and move him.",
                    ],
                  },
                ],
              },
              {
                name: "B) Say goodbye.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard the Fundamentalist. Each Ranger soothes 2 fatigue.",
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
      index: 5,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Tykor collapses silently from his injuries. When you get to him, he seems barely conscious. 'Is it my time?' he whispers. 'Do I go now to join the ancestors?' His eyes close. Despite his words, you see his injuries are treatable, though it will take some time.",
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

export default location86;
