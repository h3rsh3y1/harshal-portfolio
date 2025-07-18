'use client';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Code, BrainCircuit, ClipboardList, HeartPulse, Github } from 'lucide-react';

const projects = [
  {
    title: 'Fitness Tracking App',
    tech: ['Flutter', 'Firebase', 'Cloud Firestore'],
    description:
      'Built a full-stack cross-platform mobile app for tracking personal fitness goals in real-time. Integrated Firebase Authentication for secure login, Firestore for cloud database, and Provider for state management. Implemented modular architecture and reusable UI components for maintainability and scalability.',
    icon: ClipboardList,
    github: 'https://github.com/h3rsh3y1/FitQuest',
  },
  {
    title: 'Hospital Management System',
    tech: ['Java', 'Object-Oriented Programming', 'Interfaces', 'CSV Parsing', 'JavaDoc'],
    description:
      'Developed a scalable hospital management system using Java and OOP principles. Employed modular design using Manager classes and interfaces for patients, appointments, and prescriptions. Used CSV file handling for persistent storage and JavaDoc to document the entire API for maintainability.',
    icon: Code,
    github: 'https://github.com/yeowkenggg/2002-HMS-OOP',
  },
  {
    title: 'Heart-Attack Prediction Model',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'EDA', 'T-Test', 'Feature Scaling'],
    description:
      'Built and trained multiple machine learning models to predict heart attack risks. Cleaned and analyzed data using Pandas, applied statistical methods (T-Test), and evaluated various classifiers. Achieved 89.4% accuracy with Random Forest after applying normalization and dimensionality reduction techniques.',
    icon: HeartPulse,
    github: 'https://github.com/abomasumm/SC1015-mini-project',
  },
  {
    title: 'Sudoku Solver (AI Search)',
    tech: ['Python', 'Depth-First Search', 'Uniform Cost Search', 'A* Algorithm', 'Greedy Search'],
    description:
      'Implemented classic AI search algorithms to solve Sudoku as a constraint satisfaction and graph traversal problem. Benchmarked DFS, UCS, A*, and Greedy algorithms based on time, completeness, and path cost to analyze computational trade-offs. Visualized state transitions for comparative analysis.',
    icon: BrainCircuit,
  },
];

export default function Projects() {
  return (
    <LayoutGroup>
      <motion.section
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.15 } },
        }}
        className="p-10 max-w-5xl mx-auto space-y-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center"
        >
          Featured Projects
        </motion.h1>

        <AnimatePresence>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={idx}
                layout
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
                viewport={{ once: true, amount: 0.3 }}
                className="relative p-6 rounded-2xl bg-[#1a1a1d]/90 backdrop-blur border border-white/10 shadow-md hover:shadow-xl transform transition-all group"
              >
                {/* Icon overlay */}
                <div className="absolute -top-5 -left-5 bg-gradient-to-tr from-fuchsia-600 to-cyan-500 p-3 rounded-xl shadow-xl">
                  <project.icon className="w-6 h-6 text-white" />
                </div>

                {/* Title */}
                <h2 className="text-xl font-semibold text-white mb-1">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* GitHub Link */}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-cyan-300 hover:underline"
                  >
                    <Github className="w-4 h-4" />
                    View on GitHub
                  </a>
                )}
              </motion.div>
            ))}
          </div>
        </AnimatePresence>
      </motion.section>
    </LayoutGroup>
  );
}
