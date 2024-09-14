const location3 = {
  location: 3,
  name: "WHITE SKY",
  data: [
    {
      index: 0,
      condition: [
        { name: "SILARO MAKO IS IN PLAY", section: "53.6" },
        { name: "TALA THE RED IS IN PLAY", section: "84.7" },
        { name: "WHITE SKY IS FLOODED", section: "3.1" },
        {
          name: "THE MOON IS IN WANING GIBBOUS (DAYS 15 – 20)",
          section: "3.2",
        },
        {
          text: [
            {
              type: "story",
              text: "From your vantage point you can see much of the southern shore of White Sky Lake, from the froth of rapids at the head of the Silverfin River to the mix of rocky promontories and pebble-strewn beaches that slowly curve around toward the opposite shore. There you see the village of White Sky and the tiny forms of villagers going about their business on the platforms and docks.",
            },
          ],
        },
      ],
    },
    {
      index: 1,
      text: [
        {
          type: "story",
          text: "The paths around White Sky are a mess. Broken branches and fallen trees litter the ground, and long sections of them have been washed away. The village itself was mostly unharmed. A few boats were displaced or lost, and the utility buildings near the shoreline took a beating, but thankfully that’s about it. Everywhere you go, you see villagers hard at work, cleaning up around the lake. If you can spare the time, they would appreciate your help.",
        },
        {
          type: "rule",
          text: "Search the General set for Flood Damage, and put it into play.",
        },
      ],
    },
    {
      index: 2,
      text: [
        {
          type: "story",
          text: "As you approach White Sky, you can smell the tantalizing aroma of seasoned fish cooking over an open flame. When the moon is in waning gibbous, the people of White Sky invite their neighbors to join them in a celebration of the lake and the bounty it provides. The platforms are alive with people. You can’t take two steps without someone offering you delicious food. Music and laughter fill the air.",
        },
        {
          type: "rule",
          text: "Search the Valley set for up to three humans, and shuffle them into the path deck. This is in addition to the cards added from the White Sky set.",
        },
      ],
    },
  ],
};

export default location3;
