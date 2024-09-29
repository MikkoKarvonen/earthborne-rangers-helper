import { LocationProp } from "../../types/LocationProp";

const location45: LocationProp = {
  location: 45,
  name: "SPIRIT SPEAKER NAL",
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
                  name: "IF YOU HAVEN'T RECEIVED EITHER THE ACCOMMODATION OR INTERVENTION MISSION",
                  section: "45.1",
                },
                { name: "IF YOU SPOKE WITH A SPIRIT ", section: "45.2" },
                { name: "OTHERWISE", section: "45.3" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [
                { name: "IF HELPING HAND IS ATTACHED", section: "45.5" },
                { name: "IF YOU SPOKE WITH A SPIRIT ", section: "45.6" },
                { name: "OTHERWISE", section: "45.7" },
              ],
            },
            {
              name: "CLEAR ",
              conditions: [{ section: "45.8" }],
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
              "From one of Lone Tree's balconies, you hear the voices of two people arguing. One you immediately recognize as Kordo Haverson's, but it takes a moment before you recognize the other as Spirit Speaker Nal. You don’t think you’ve heard her raise her voice before.",
              "You find the two of them in the midst of a heated debate. Kordo’s face is flushed, and Nal has her arms crossed and is glaring. Although you're not sure what's going on, you feel like you should step in.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "If Kordo is not in play, search the path deck for him, and put him into play in the same area as Nal. Do not read his 'enters play' entry. Then go to 45.4.",
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
              "Nal smiles when she sees you. 'I've spent more time speaking with the Verdessian plant you and I found at the market,' she says. 'You'll be happy to know that I can hear the spirit of the Verdessa again, though only faintly. She's distracted and worried about something.'",
              "'The spirit of the Valley is agitated as well. Be careful out there. Don't be shy about asking the ancestors for assistance.'",
              "'Speaking of which,' she says. 'Would you like to assist me byaccompanying me to the market again?'",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Clear Nal with  to discuss another trip to Kobo's Market.",
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
              "You come across Nal, the Spirit Speaker of Lone Tree Station, sitting cross-legged before what looks like a floating disk of water. Her eyes are closed. You assume it’s best not to interrupt whatever she’s doing, and wait quietly for a few minutes.",
              "The Spirit Speakers of the Valley are the most adept at communicating with the world beyond the visible—spirits great and small as well as those of the ancestors.",
              "Nal's gifts are greater still. For with the help of a device crafted by Ben Amon, she is able to communicate over great distances, projecting images and emotions into the minds of Rangers in the field.",
              "After several minutes, she opens her eyes and speaks. “The spirit of the Valley was eager to tell me that you were coming,” she says. She turns to you and smiles warmly. “How can I help? If you need me to send a message, I may not be able to at the moment. The spirit of the Verdessa, the great jungle to the South, has gone silent. I don't know why. I feel like I need to get to the bottom of it before I do anything else. I'll be too distracted otherwise. Something's wrong.”",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Clear Nal with  to ask how you can help."],
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
              "You get between Nal and Kordo, and ask them what they’re arguing about. Kordo huffs, then Nal rolls her eyes and turns to you.",
              "“We have been debating this since Kordo and I first met, actually,” she says. “It’s a question of our role here, both as Rangers and inhabitants of this valley.”",
              "“Don’t make it too dramatic,” Kordo grumbles. “I just think that if we’re going to be proper stewards here, it’s up to us to clean up our ancestor’s mistakes.”",
              "“Biomelds aren’t mistakes!” Nal shoots back. “They may have been created for a purpose thousands of years ago, but in the time since they’ve evolved and become part of the ecosystem. They reproduce, they coexist, just like any other being.”",
              "“Oh, you think that caustic mulcher that has been lumbering around the wooded areas of the Valley is coexisting with everything else?” Kordo looks at you. “Maybe you can settle this. Nal thinks that big sticky-tongued, acid-drooling eating machine is a part of the environment. I, on the other hand, think that it’s been eating its way through the rest of the ecosystem, and it’s time to stop it. What do you think?”",
              "He reaches into his pocket and pulls out a ball of cloth. You catch it and open it, and find that it’s actually a long and lethal-looking gauzeblade.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: ["Gain the Gauzeblade reward card."],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Nal sighs. “Well it’s important to be able to identify yourself to it just like any other being,” she says, “The caustic mulcher, like the other biomelds around here, is an important part of the ecosystem. I haven't observed a drastic decrease in animal populations. Have you, Kordo? If the mulcher was a mistake, nature would have corrected it by now. It doesn't eat everything. Only what it must.”",
              "Kordo grunts. “You’ve already told me your plan to prove it. Coating yourself in leaf paste and seeing if the mulcher will eat you or spit you out? Sounds like a terrible idea.”",
              "“If I’m right,” Nal says, “then the mulcher won’t eat living plants, or something that tastes like one. It’s not cutting a swathe through the forest. It’s helping to manage it.”",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Agree with Kordo. The mulcher must go.",
                text: [
                  {
                    type: "rule",
                    text: ["Gain the INTERVENTION mission."],
                  },
                ],
              },
              {
                name: "B) Agree with Nal. The mulcher is misunderstood.",
                text: [
                  {
                    type: "rule",
                    text: ["Gain the ACCOMMODATION mission."],
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
              "Nal catches you glancing anxiously at the position of the sun. She puts an arm on your shoulder. “You’re worried about the time, I can tell. Do you need to return to your task, or can you still accompany me to Kobo's Market?”",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Continue helping Nal.",
                text: [
                  {
                    type: "rule",
                    text: ["Discard all  from Spirit Speaker Nal."],
                  },
                ],
              },
              {
                name: "B) Part company.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Spirit Speaker Nal and return HELPING HAND to your collection. Each Ranger soothes 2 fatigue.",
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
      index: 6,
      section: [
        {
          text: {
            type: "story",
            text: [
              "'So what do you think?' Nal asks. 'Would you like to accompany me to the market again? I hear that Ren Kobo himself has recently returned. I'm always curious to see what he brings back from his travels.'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Accompany Nal to Kobo’s Market.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all  and attach the HELPING HAND mission to Spirit Speaker Nal.",
                    ],
                  },
                ],
              },
              {
                name: "B) Some other time.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Spirit Speaker Nal. Each Ranger soothes 2 fatigue.",
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
      index: 7,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Nal stands, and the floating disk which was hovering before her settles gently to the ground.",
              "'As you know, Elder Thrush depends on me to communicate telepathically with Rangers in the field, but to do so effectively, Irequire the support of the most powerful spirits of this land. One of those, interestingly enough, is the spirit of the Verdessa. It shares a deep connection with the spirit of the Valley—like a mother to her child—and for some reason, I cannot reach it. It's very distressing.",
              "'I've received word that a wandering botanist has recently returned from an excursion to the Verdessa, and that she's brought some rare plant specimens along with her. She is currently staying at the merchant's quarters in Kobo's Market. If I had one of these specimens, I may be able to use it to reconnect with the spirit of the Verdessa. Perhaps you could accompany me to the market? I would be very grateful.'",
            ],
          },
        },
        {
          choose: {
            name: "RANGERS CHOOSE:",
            values: [
              {
                name: "A) Accompany Nal to Kobo’s Market.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard all  and attach the HELPING HAND mission to Spirit Speaker Nal.",
                    ],
                  },
                ],
              },
              {
                name: "B) Some other time.",
                text: [
                  {
                    type: "rule",
                    text: [
                      "Discard Spirit Speaker Nal. Each Ranger soothes 2 fatigue.",
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
      index: 8,
      section: [
        {
          text: {
            type: "story",
            text: [
              "Nal slumps and falls to the ground. You move to help her, clearing a space on the ground and making her comfortable. You determine that you’ll need to stay here for the rest of the day to treat her injuries.",
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

export default location45;
