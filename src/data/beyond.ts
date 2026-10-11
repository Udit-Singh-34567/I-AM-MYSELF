export const travelLists = [
  {
    label: "INDIA",
    places: [
      { name: "Leh–Ladakh", status: "done" },
      { name: "Rann of Kutch", status: "done" },
      { name: "Valley of Flowers", status: "pending" },
      { name: "Meghalaya", status: "pending" },
    ],
  },
  {
    label: "OUTSIDE INDIA",
    places: [
      { name: "Iceland", status: "pending" },
      { name: "Kyoto", status: "pending" },
      { name: "Swiss Alps", status: "pending" },
      { name: "New Zealand", status: "pending" },
    ],
  },
] as const;

export const curiosityNotes = [
  { title: "STORY-RICH MEDIA", copy: "Great stories build empathy, sharpen an eye for structure, and make complex worlds easier to remember." },
  { title: "D&D", copy: "Collaborative storytelling, improvisation, and problem-solving—good practice for listening, adapting, and building with a group." },
] as const;
