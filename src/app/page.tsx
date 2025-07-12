'use client';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 max-w-3xl mx-auto space-y-6"
    >
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold mb-4">Hi, I’m Harshal 👋</h1>
      <p className="text-xl text-gray-600 max-w-xl">
        Computer Engineering student @ NTU · Backend & AI/ML Enthusiast · Passionate about building systems that bridge hardware and software.
      </p>
    </main>
    </motion.section>
  );
}
