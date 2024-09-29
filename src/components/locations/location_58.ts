import { LocationProp } from "../../types/LocationProp";

const location58: LocationProp = {
  location: 58,
  name: "ARCOLOGY THRESHOLD",
  data: [
    {
      index: 0,
      section: [
        {
          multiCondition: [
            {
              name: "ENTERS PLAY",
              conditions: [{ section: "58.1" }],
            },
            {
              name: "CLEAR ",
              conditions: [
                {
                  name: "IF YOU HAVEN'T RECEIVED THE ARCOLOGY ARCHAEOLOGY MISSION",
                  section: "58.2",
                },
                {
                  name: "IF YOU ARE ON THE ARCOLOGY ARCHAEOLOGY MISSION AND ALL OPTIONS ARE CHECKED OFF",
                  section: "50.3",
                },
                { name: "OTHERWISE", section: "58.3" },
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
              `Most everyone in the Valley (and certainly everyone in Spire) is familiar
with the arcology, but most of them think of the upper levels that
have become the basements and power generation stations of Spire.
You head past the water turbines and the enclosed river docks, down
into a level below the Silverfin. Here the air is a bit damp, but you
find yourself in a brightly lit chamber full of cabinets and pedestals.
Artifacts are scattered throughout the space, each with a neat label
identifying them. Most seem to be from the Estians. Some seem even
older, from the decades before the Guide led people to begin the
Generational Projects.`,
              `A mousy young woman with large glowing glasses scurries up,
introducing herself as Krishtu Meeks. “If you’re looking for Silaro,”
she says, “he’s deeper into the arcology tunnels.” She points to a
series of vaulted entrances leading off from the chamber. Each seems
darker and more oppressive than the last.`,
              `Krishtu sees your hesitation. “Don’t worry,” she says. “It should be
safe … we haven’t seen anything dangerous in the upper passages
for … months now.”`,
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
              `Krishtu Meeks explains that if you want to learn more about the arcology,
Silaro is the person to talk to. You sigh and set off into the darkness.`,
              `The pitch-black passages quickly become a labyrinthine maze, with
the shadows easily swallowing up the meager lights you brought
with you. But eventually, you see a glimmering light up ahead. You
race forward to find Silaro crouched next to a set of lamps that give
off a warm, flickering glow. He’s studying long strings of writing that
appear to have been stamped into the walls, but looks up when you
approach. “Ah, hello!” he says. “Don’t get many visitors down here;
what can I do for you?”`,
              `You explain that you’re interested in the people who built this
arcology, and Silaro gets a gleam in his eyes. “Ah, the Estians,” he
says with a smile. “They’re a fascinating bunch, to be sure. I’ve been
studying them my entire life, and I’ve only scratched the surface of
what I can learn.”`,
              `“Tell you what,” he says. “The best way to learn is by doing, I always
say. So why don’t you poke around the various ruins scattered through
the Valley. If you find anything interesting, bring it back, and I’ll see
what I can tell you about it. And I’ll share what I know of the Estians
as well.”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Gain the ARCOLOGY ARCHAEOLOGY mission."],
          },
        },
        {
          text: {
            type: "story",
            text: [
              `“I also commonly work out of the Bubble beneath White Sky or out in the field at the Fractured Wall, so please stop in if you’re in the area!”`,
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
              `You’ve become accustomed to the gloomy chambers of the arcology
and make your way quickly to Silaro’s latest site. He looks up from
another etching in the wall and grins when he sees you. “My friends!”
he calls. “Good to see you as always. Quickly, come here and look
at this!”`,
              `You crouch down next to him and see that he has been scraping
away lichen from what appears to be sets of lines stamped all across
the metal. “I think this is a map!” Silaro exclaims. “If I’m right, this
arcology goes much deeper than any of us assumed. It’s spread out
much further too! All through the Valley, and maybe even out into
the Verdessa!”`,
              `You tell Silaro about your own investigations, and he excitedly
compares your notes to his map. “Indeed, indeed!” he shouts.
“Thanks to your observations, I think I can orient myself to this map. It
appears you’re right … the arcology does reach out to the Verdessa.
See this route here? It reaches all the way out into that huge forest.
There must be something there … too bad the route is far deeper
than we’ve ever traveled in these ruins.”`,
              `He thinks for a long moment. “But what makes me even more curious
is the evidence that they were gone long before the floods. I always
assumed the floods wiped them out, but if they were already gone,
then…well, clearly the dam failed because of their long absence, so
they must have left decades or even centuries before.`,
              `“I can tell you one thing, though. They didn’t travel overland; there’s
no evidence of them leaving through the northern passes. Honestly,
there’s no evidence that they migrated from this place at all. So …
what happened to them?”`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Each Ranger soothes 2 fatigue."],
          },
        },
      ],
    },
  ],
};

export default location58;
