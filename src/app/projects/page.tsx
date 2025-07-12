const projects = [
  {
    title: "Fitness Tracking App",
    tech: ["Flutter", "Firebase", "Provider"],
    description:
      "Cross-platform app with real-time goal tracking and modular architecture.",
  },
  {
    title: "Heart-Attack Prediction Model",
    tech: ["Python", "Pandas", "Sklearn"],
    description:
      "Built a classifier to predict heart attacks; achieved 89.4% accuracy using Random Forest, T-Test, and feature scaling.",
  },
  {
    title: "Sudoku Solver (AI Search)",
    tech: ["Python", "DFS", "UCS", "A*"],
    description:
      "Implemented and compared classical search algorithms to solve Sudoku puzzles as graph problems.",
  },
  {
    title: "Hospital Management System",
    tech: ["Java", "OOP", "CSV"],
    description:
      "Developed a Java HMS with modular design, interfaces, CSV handling, and JavaDoc documentation.",
  },
];

export default function Projects() {
  return (
    <section className="p-10 max-w-4xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-center">Projects</h1>
      {projects.map((project, idx) => (
        <div key={idx} className="border rounded-lg p-6 shadow-sm space-y-2">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-600">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-gray-200 px-2 py-1 text-xs rounded-full"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
