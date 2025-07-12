'use client';
import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 max-w-3xl mx-auto space-y-6"
    >
    <section className="p-10 text-center space-y-4">
      <h1 className="text-3xl font-bold">Resume</h1>
      <p className="text-gray-700">You can download my latest resume below.</p>
      <a
        href="/resume.pdf"
        download
        className="inline-block bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition"
      >
        Download Resume
      </a>
    </section>
    </motion.section>
  );
}
