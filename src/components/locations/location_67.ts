import { LocationProp } from "../../types/LocationProp";

const location67: LocationProp = {
  location: 67,
  name: "DANCER’S ROUND",
  data: [
    {
      index: 0,
      section: [
        {
          text: {
            type: "story",
            text: [
              `The musicians pause for breath, then launch into a sprightly tune that
gets your feet tapping and hands clapping. As you twirl and leap
around the dancer’s green, a pair of hands grasp yours, and a new
partner spins with you to the center of the dance. Although you’re
surrounded by dozens of dancing pairs, the two of you dance like
there is nobody else there.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              `Discard your dancing partner. If you do not have the associated notable
event on the campaign tracker for the person, add it to your campaign
tracker now. Then gain the reward card listed beneath it:`,
              `If the person isn't listed above, or if you already had that person’s
notable event recorded on your campaign tracker, read the following:`,
            ],
          },
        },
        {
          text: {
            type: "story",
            text: [
              `It seems like you dance for hours, the music weaving you and your
partner together until you forget the Harvest Festival, the Valley, and
your duties as a Ranger. But eventually, the music stops, and you
blink as you and your partner find yourselves standing in the midst of
a circle of applauding celebrants. A couple of villagers step forward
and place woven grass crowns on your and your partner’s head.
“Here’s to the two who best embody the spirit of the festival!” they
shout, and the applause and cheering grows even louder.`,
              `You and your partner grin foolishly at each other, then embrace. As
you both leave to return to your regular lives, you feel the connection
between you fade to a warm memory, but one you know you will
cherish for the rest of your lives.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [`Gain the Harvest Crown reward card.`],
          },
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
              `Eventually, the exhausted musicians end their playing, begging for
refreshments for sore hands and hoarse voices. The dancers begin to
leave the cleared space in the center of the festival, returning to the
stalls and booths set up for the occasion. Soon those will be taken down
as well, and the good folk of Meadow will return to their regular lives.`,
            ],
          },
        },
        {
          text: {
            type: "rule",
            text: [
              "Write CELEBRATED THE HARVEST FESTIVAL CELEBRATED THE HARVEST FESTIVAL on the campaign tracker.",
            ],
          },
        },
      ],
    },
  ],
};

export default location67;
