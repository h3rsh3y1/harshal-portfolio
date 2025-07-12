'use client';
import { motion } from "framer-motion";

export default function Contact() {
  return (
        <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-10 max-w-3xl mx-auto space-y-6"
    >
    <section className="p-10 max-w-xl mx-auto text-center space-y-6">
      <h1 className="text-3xl font-bold">Contact Me</h1>
      <p className="text-gray-700">Feel free to reach out through any of the platforms below.</p>

      <ul className="space-y-2 text-blue-600">
        <li>
          Email: <a href="mailto:harshalghate004@gmail.com">harshalghate004@gmail.com</a>
        </li>
        <li>
          GitHub: <a href="https://github.com/your-github">github.com/your-github</a>
        </li>
        <li>
          LinkedIn: <a href="https://linkedin.com/in/your-linkedin">linkedin.com/in/your-linkedin</a>
        </li>
      </ul>
    </section>
    </motion.section>
  );
}
