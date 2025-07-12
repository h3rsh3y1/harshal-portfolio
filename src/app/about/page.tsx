'use client';
import { motion } from "framer-motion";


export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 max-w-3xl mx-auto space-y-6"
    >
      
    <section className="p-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">About Me</h1>
      <p>
        I'm a Computer Engineering student at NTU Singapore (2023–2027), passionate about back-end development, microprocessor coding, and AI/ML. I love solving real-world problems at the intersection of software and hardware.
      </p>

      <h2 className="text-2xl font-semibold mt-6">Education</h2>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Nanyang Technological University, Singapore</strong><br />
          Bachelor of Engineering in Computer Engineering (2023 – 2027)
        </li>
        <li>
          <strong>GIIS, Singapore</strong><br />
          CBSE · 95.8% · Academic Proficiency Award (2018 – 2023)
        </li>
      </ul>
    </section>
    </motion.section>
  );
}
