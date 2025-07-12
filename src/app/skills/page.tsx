'use client';
import { motion } from "framer-motion";

export default function Skills() {
  return (
       <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 max-w-3xl mx-auto space-y-6"
    >
    <section className="p-10 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Skills</h1>

      <div>
        <h2 className="text-xl font-semibold">Programming Languages</h2>
        <p className="text-gray-700">C/C++, Python, Java, SQL, JavaScript, Verilog</p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Frameworks & Tools</h2>
        <p className="text-gray-700">
          React, Firebase, Supabase, Node.js, FastAPI, Azure, Flutter, Provider
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Software Engineering Topics</h2>
        <p className="text-gray-700">
          Object-Oriented Design, Software Architecture, Microprocessor Systems
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold">Certifications</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>PCEP – Certified Entry-Level Python Programmer (2022)</li>
          <li>PCAP – Certified Associate in Python Programming (2022)</li>
          <li>JSE – Certified Entry-Level in JavaScript (2025)</li>
        </ul>
      </div>
    </section>
    </motion.section>
  );
}
