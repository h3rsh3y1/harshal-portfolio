'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, FileDown, Phone, MapPin, CheckCircle } from 'lucide-react';

export default function ContactResume() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);

  const form = e.target as HTMLFormElement;
  const formData = new FormData(form);

  const body = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    service: formData.get('service'),
    message: formData.get('message'),
  };

  await fetch('/api/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  form.reset();
  setTimeout(() => setSubmitted(false), 3000);
};


  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="relative min-h-screen px-6 pt-20 pb-32 sm:px-12 text-white overflow-hidden"
    >
      {/* Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[160px] -z-10" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start z-10">
        {/* Form Panel */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-[#1a1a1d]/80 backdrop-blur-lg border border-white/10 p-10 rounded-3xl shadow-[0_0_40px_rgba(255,255,255,0.05)] relative"
        >
          <h2 className="text-4xl font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2">
            Let's work together
          </h2>
          <p className="text-gray-400 mb-8 text-sm">
            Got a project or collaboration in mind? Fill out the form and let’s make it happen.
          </p>

          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="text" placeholder="First name" required className="bg-black/30 text-sm text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <input type="text" placeholder="Last name" required className="bg-black/30 text-sm text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input type="email" placeholder="Email address" required className="bg-black/30 text-sm text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
              <input type="tel" placeholder="Phone number" className="bg-black/30 text-sm text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            </div>
            <select required className="bg-black/30 text-sm text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500">
              <option>Select a service</option>
              <option>Web Development</option>
              <option>UI/UX Design</option>
              <option>Consultation</option>
            </select>
            <textarea required placeholder="Type your message here." rows={4} className="bg-black/30 text-sm text-white px-4 py-3 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-fuchsia-500" />
            <button
              type="submit"
              className="bg-gradient-to-r from-fuchsia-500 to-purple-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:scale-105 hover:from-fuchsia-400 hover:to-purple-500 transition-transform duration-200"
            >
              Send message
            </button>
          </form>

          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded-full flex items-center gap-2 text-sm shadow-lg"
              >
                <CheckCircle className="w-4 h-4" />
                Message sent successfully!
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col gap-6 mt-10 justify-start text-sm"
        >
          <div className="flex items-center gap-4">
            <Phone className="text-fuchsia-400" />
            <span className="text-gray-300">(+65) 9379 9896</span>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="text-fuchsia-400" />
            <a href="mailto:harshalghate004@gmail.com" className="text-gray-300 hover:underline">
              harshalghate004@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Github className="text-fuchsia-400" />
            <a href="https://github.com/h3rsh3y1" className="text-gray-300 hover:underline" target="_blank">
              https://github.com/h3rsh3y1
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Linkedin className="text-fuchsia-400" />
            <a
              href="https://www.linkedin.com/in/harshal-ghate-b4517b2a1"
              className="text-gray-300 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/harshal-ghate-b4517b2a1
            </a>
          </div>
          <div className="flex items-center gap-4">
            <MapPin className="text-fuchsia-400" />
            <span className="text-gray-300">SINGAPORE</span>
          </div>
          <a
            href="/resume.pdf"
            download
            className="mt-6 inline-flex items-center gap-2 bg-black/30 text-white px-6 py-3 rounded-full border border-fuchsia-500 hover:bg-fuchsia-500 hover:text-black transition-all duration-200"
          >
            <FileDown className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}