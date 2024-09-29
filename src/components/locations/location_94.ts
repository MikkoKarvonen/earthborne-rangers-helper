import { LocationProp } from "../../types/LocationProp";

const location94: LocationProp = {
  location: 94,
  name: "WORLD EVENTS",
  data: [
    { index: 0, section: [] },
    {
      index: 1,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed BISCUIT DELIVERY:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You yawn as you wake up on the trail and then sniff the air curiously. Something smells delicious! You look around your campsite and see, sitting on a rock, a hearty grain loaf and stack of delicate sweetbreads, still warm and steaming. Someone hiked by while you were asleep and left them for you. On the top of the loaf you find a note that says: “Thanks for delivering the biscuits to us. Enjoy breakfast!”",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one additional energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you haven’t completed BISCUIT DELIVERY:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You yawn as you wake up on the trail then hear someone moving. You get out of your bedroll to find Kal Iver sitting in the campsite. Calypsa stands at the edge of the camp, watching the horizon. Kal has taken one of the now stale biscuits out of the basket and is trying to eat it. Eventually, he gives up and throws it back into the basket. “Too bad you didn’t deliver these while they were fresh,” he says. “Such a waste!”",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Return BISCUIT BASKET to the Mission set. Complete the BISCUIT DELIVERY mission. Then read 1.03.",
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
      index: 2,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed RISING WATERS:",
                text: [
                  {
                    type: "story",
                    text: [
                      "All your muscles, even the ones you didn’t know you had, seem to be aching as you nibble on a handful of dried sunberries. But the word is already coming in; the flood waters are starting to recede. Thanks to your efforts, the damage was minimal.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you haven’t completed RISING WATERS:",
                text: [
                  {
                    type: "story",
                    text: [
                      "It has rained heavily for the last two days, but this morning it has finally begun to subside. You see a runner approaching, wet and ragged. After he catches his breath, he tells you of the flood damage done to the areas surrounding White Sky Lake and asks if you might be of assistance by helping to clear debris and repair the damage.",
                      "“And there’s something else,” he says.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "For each location not marked off next to RISING WATERS, record the location name followed by FLOODED on the campaign tracker. Complete RISING WATERS. Then read 1.07a.",
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
      index: 3,
      section: [
        {
          text: {
            type: "rule",
            text: [
              "READ THIS ONLY IF YOU HAVEN’T COMPLETED SENSOR NETWORK OR SECRET INVASION.",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "As you searched for a place to make camp last night, you saw more than a dozen reclaimers. Some lurking among distant trees, others so close you had to flee or hide from them in the brush. The signs are clear; the reclaimers have invaded the Valley. Since they now seem to be everywhere, you decide there's no longer a need to search for them.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "If you have JOURNEY (SPIRE), SECRET INVASION, or SENSOR NETWORK, complete them. Write SURPRISED BY THE INVASION on the campaign tracker. Gain the INVASION - STAGE I mission.",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "You consider your options and determine that, if you want to do something about these reclaimers, the best people to talk to would be the experts in biomeld and animal behavior who live and work at the biological outpost south of Branch. If anyone can, they may be able to offer insight into how to deal with them.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Gain the JOURNEY (BIOLOGICAL OUTPOST) mission. Record 94.4 seven days from now on the campaign tracker.",
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
            type: "rule",
            text: ["READ THIS ENTRY ONLY IF YOU ARE ON INVASION - STAGE I."],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "Without a faster means of communication, news tends to flow like water along the paths and rivers of the Valley, borne by the traders and peddlers and a few dedicated stilt-horse couriers. It’s expected that when travelers cross paths on the trails, they take a few moments to share stories of local events.",
              "The last few times you’ve stopped to talk, all the stories have been about the reclaimers. A few people report being attacked by reclaimer seekers, and more have seen them moving in the forests and woodlands. Nearly all such sightings and attacks seem to take place near structures or old Estian ruins. It certainly sounds like they’re making themselves at home in the Valley.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Complete INVASION - STAGE I, and gain INVASION - STAGE II. Record 94.5 seven days from now on the campaign tracker.",
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
            type: "rule",
            text: [
              "READ THIS ENTRY ONLY IF YOU HAVEN'T GAINED OR COMPLETED WASHED AWAY OR GRUESOME FEAST.",
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              "You see a young couple hurrying along the trail toward you, their faces pinched with worry and their backpacks bulging with what looks like all their worldly possessions. When you raise a hand in greeting and ask what’s wrong, the woman gestures back along the trail.",
              "“A horde of those reclaimers,“ she explains breathlessly. “They’ve been spotted heading straight for Spire! We left as soon as we could.”",
              "You thank them and let them hurry on their way. If Spire is going to be attacked, then the village will need all the help that it can get. If you intend to help, you'd better get going.",
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Complete all Story and Interlude missions, and gain SPIRE UNDER ATTACK! Record 94.6 three days from now on the campaign tracker. You must abandon your plans and head to Spire to help the people there.",
            ],
          },
        },
      ],
    },
    {
      index: 6,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed THE FALL OF SPIRE:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You wake up, jolted out of sleep by visions of reclaimers overrunning Spire, spilling into the arcology, their strange voices crowing in victory. You take a deep breath, splash water on your face, and remind yourself that the danger has passed. All the same, you feel the need to be a bit more alert than usual today.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you haven’t:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You're jolted out of sleep by a hand on your shoulder. It's Kal Iver. His cloak is torn, and he's covered in either dirt or soot.",
                      "'Wake up,' he says. 'I thought you might be dead, but here you are, sleeping peacefully while the village of Spire was destroyed and thousands of people were displaced. We could have used your help, you know. I hope whatever you were busy doing was of equal importance.'",
                      "He looks with dismay at a rend in his cloak. 'You must travel to Lone Tree Station. Elder Thrush wants all Rangers to check in as soon as they are able.' With that, Kal departs.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Complete the SPIRE UNDER ATTACK mission, and gain JOURNEY (LONE TREE STATION). Record SPIRE FALLEN and MISSED IT on the campaign tracker.",
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
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed RESCUE (LUNN):",
                text: [
                  {
                    type: "story",
                    text: [
                      "You hear a whistle from outside your tent, and stumble out bleary-eyed to see Zek Tsal in your campsite atop his stilthorse. 'Got something for you,' he shouts, and tosses you a leaf-wrapped package. 'It’s from Lunn; he said thanks for saving his life!' You open it to find packs of needle tea.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you're currently on RESCUE (LUNN):",
                text: [
                  {
                    type: "story",
                    text: [
                      "Lunn groans, but there's nothing you can do can get him moving, and you’re concerned that he might suffer permanent injury without the help of a healer. You do the only thing you can do; making him as comfortable as possible, you light a signal fire and then spread out, looking for the tallest point to try and signal a rescuer.",
                      "That evening, a traveling merchant on a pincrawler spots your signal. You set Lunn on the back of the crawler, and the merchant waves farewell as they head toward the nearest Ranger station.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Complete RESCUE (LUNN), and record HELPED RESCUE LUNN on the campaign tracker.",
                    ],
                  },
                ],
              },
              {
                name: "Otherwise:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You receive word from a stilt-horse courier that Lunn has been found. Apparently Kal Iver went looking and found him nearly unconscious at the bottom of a shale scree. He's recovering now.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "If you have SEARCH (LUNN), complete it. If you don't, gain that mission and immediately complete it. Record KAL RESCUED LUNN on the campaign tracker.",
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
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed RESCUE (VIRA):",
                text: [
                  {
                    type: "story",
                    text: [
                      "You’re sitting in your tent, just waking up, when there’s a shout from the path. Zek Tsal is riding by on his stilt-horse. He doesn’t stop, but tosses you a bundle and calls 'Vira says thanks for saving her!' before riding away. You unwrap it to find stacks of fragrantly spiced pemmican.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you’re currently on RESCUE (VIRA):",
                text: [
                  {
                    type: "story",
                    text: [
                      "Vira has stopped responding, and her breathing is shallow. You can’t move her, but you’re worried she may suffer permanent injury without the help of a healer. All you can do is light a smoky signal fire and hope for rescue.",
                      "Luckily, that evening you see the Swift soaring through the sky to your position. You later learn that a boat along the Silverfin spotted the smoke and reported it once they reached their destination. You load Vira onto the Swift. A few moments later the glider launches high into the air, on its way to Lone Tree.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Complete RESCUE (VIRA), and record HELPED RESCUE VIRA on the campaign tracker.",
                    ],
                  },
                ],
              },
              {
                name: "Otherwise:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You receive word from a stilt-horse courier that Vira has been found. Apparently when nobody else went looking for her, Kal Iver went out and found her nearly unconscious at the base of a tree. Thankfully, her injuries were treatable, and everyone expects a full recovery.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "If you have SEARCH (VIRA), complete it. If you don't, gain that mission and immediately complete it. Record KAL RESCUED VIRA on the campaign tracker.",
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
      index: 9,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed RESCUE (KASENDE):",
                text: [
                  {
                    type: "story",
                    text: [
                      "You wake up to a shout from the trail. Zek Tsal is at the edge of your camp on his stilt-horse. When he sees you, he tosses a bundle to you. 'Glad to hand that off. Kasende says thanks!' Then he takes off. You unwrap the oiled paper to find it full of greasy hydraworm jerky. The smell is … pungent, but you’re pretty sure she meant it as a sincere gift.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you’re currently on RESCUE (KASENDE):",
                text: [
                  {
                    type: "story",
                    text: [
                      "Kasende has stopped responding to your jokes, and she is barely breathing. You can’t move her, but you’re worried she may suffer permanent injury without the help of a healer. You make her comfortable, then take her whispercrack darter and carry it to a nearby rise. You carefully load it with some homemade flare rounds, then begin to fire off the signals and hope for rescue.",
                      "After hours of waiting, you see a pair of stilt-horse riders heading toward you. You help her onto the back of one of the great steeds. You watch as they ride away, thankful that help arrived when it did.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Complete RESCUE (KASENDE), and record HELPED RESCUE KASENDE on the campaign tracker.",
                    ],
                  },
                ],
              },
              {
                name: "Otherwise:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You receive word from a stilt-horse courier that Kasende has been found. Kal Iver spent days searching for her in the southern swamps, before finding her close to death and hauling Kasende back to Tumbledown while fighting off swarming hydraworms. Stories of his daring rescue are already spreading up and down the Silverfin. Kasende is recovering from her injuries, and by all accounts, already planning her next hunt.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "If you have SEARCH (KASENDE), complete it. If you don't, gain that mission and immediately complete it. Record KAL RESCUED KASENDE on the campaign tracker.",
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
      index: 10,
      section: [
        {
          choose: {
            name: "READ ONE:",
            values: [
              {
                name: "If you’ve completed DEEPER MOTIVES:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You wake from a dream in which you were walking in a dense rainforest. There was a deafening chatter of insects, calling birds, and other sounds you couldn't recognize. You remember stopping before a tree which began to grow before your very eyes, stretching toward the sky like you were observing centuries of growth in the span of a few minutes. As the tree grew wider and wider, you felt the sudden need to escape, but when you tried, you found that you could not move. You looked down to see that your feet had taken root. You were no longer human, but a Verdessian. Just before the tree consumed you, you awoke.",
                      "You spend a moment contemplating your experience. You consider the possibility it wasn't a dream at all, but instead a message from the Verdessian. If it is, you're not sure how to interpret it. Regardless, you suddenly feel very awake and very alert.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Each Ranger gains one energy in an aspect of their choice for the first round.",
                    ],
                  },
                ],
              },
              {
                name: "If you’re currently on DEEPER MOTIVES:",
                text: [
                  {
                    type: "story",
                    text: [
                      "You wake to discover that the haversack you were using to carry the Verdessian is empty. It must have escaped during the night. You spend a quarter of an hour poking at the dirt and searching the surrounding area, but you find no sign of the Verdessian. You'll have to find another way to figure out what's going on.",
                    ],
                  },
                  {
                    type: "rule",
                    text: [
                      "Complete DEEPER MOTIVES, and record ANGERED THE VERDESSIAN on the campaign tracker.",
                    ],
                  },
                ],
              },
            ],
          },
        },
      ],
    },
  ],
};

export default location94;
