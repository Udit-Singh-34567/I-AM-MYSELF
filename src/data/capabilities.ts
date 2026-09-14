export const capabilities = [
  { id: "build", number: "01", label: "BUILD", description: "Interfaces, application logic, and APIs that turn a workflow into a usable product.", tools: ["React.js", "Vue.js", "Flutter", "Electron.js", "Django REST", "FastAPI", "Node.js"] },
  { id: "think", number: "02", label: "THINK", description: "Applied machine-learning work, from data preparation to experiments with models and prediction.", tools: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy"] },
  { id: "shape", number: "03", label: "SHAPE", description: "Data models and API design that give systems a reliable foundation.", tools: ["SQL", "MySQL", "MongoDB", "PostgreSQL", "REST API design", "Postman"] },
  { id: "ship", number: "04", label: "SHIP", description: "The tools that support an organized development workflow and dependable handoff.", tools: ["Git", "Docker", "Linux", "JavaScript", "TypeScript", "C++"] },
] as const;
