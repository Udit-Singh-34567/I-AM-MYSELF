export const projects = [
  {
    number: "01",
    category: "CRM / FLIGHT BOOKING",
    title: "ValueUTickets.com",
    description: "An end-to-end flight booking CRM covering booking workflows, an admin dashboard, and automated mail scheduling.",
    stack: ["Vue.js", "Django REST", "MySQL"],
    featured: true,
  },
  {
    number: "02",
    category: "COMMERCE",
    title: "GripChain.in",
    description: "A MEVN-stack storefront with product management, authentication, and order workflows, tuned for database performance at scale.",
    stack: ["MongoDB", "Express", "Vue", "Node"],
  },
  {
    number: "03",
    category: "ML",
    title: "Bug Prediction System",
    description: "A model that flags high-risk code modules ahead of release, reaching roughly 85% prediction accuracy through feature engineering.",
    stack: ["Python", "Pandas", "Scikit-learn"],
  },
  {
    number: "04",
    category: "CROSS-PLATFORM",
    title: "Multi-Platform To-Do",
    description: "One codebase running on web, mobile, and desktop, kept in sync across devices through a REST API.",
    stack: ["Flutter", "Electron.js", "Node.js"],
  },
] as const;
