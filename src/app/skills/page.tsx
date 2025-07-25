'use client';
import { useState } from 'react';
import { BadgeCheck, Code2, Wrench } from 'lucide-react';
import Certifications from '../components/Certifications';
import { motion } from 'framer-motion';
import ProgrammingLanguages from '../components/ProgrammingLanguages';
import Framework from '../components/framework';

const tabs = [
  { label: 'Certifications', icon: BadgeCheck },
  { label: 'Programming Languages', icon: Code2 },
  { label: 'Framework & Tools', icon: Wrench },
];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState('Certifications');

  return (
    <section className="mt-10 px-4 sm:px-6 flex flex-col items-center w-full">
      <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent text-center">
        Skills
      </h2>
      <p className="text-sm text-gray-300 italic mb-8 text-center">
        A snapshot of my technical arsenal
      </p>
      <br></br>

      <div className="flex flex-col sm:flex-row gap-8 w-full max-w-6xl items-start">
        {/* Left Panel - Tabs */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 70, damping: 12 }}
          className="flex flex-row sm:flex-col flex-wrap justify-center sm:justify-start gap-4 sm:w-1/3 w-full"
        >
          {tabs.map(({ label, icon: Icon }) => (
            <button
              key={label}
              onClick={() => setSelectedTab(label)}
              className={`group flex items-center gap-2 rounded-xl px-4 py-3 text-xl font-semibold transition-all duration-300
                transform hover:scale-[1.015] hover:shadow-xl
                ${
                  selectedTab === label
                    ? 'bg-gradient-to-r from-[#34d399] to-[#6ee7b7] text-black border border-[#6ee7b7]'
                    : 'bg-gradient-to-r from-[#1e3a8a] to-[#1e40af] text-[#dbeafe] border border-[#60a5fa] hover:border-white/30'
                }`}
            >
              <Icon className="w-5 h-5 opacity-90 group-hover:scale-110 transition-transform duration-300" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Right Panel */}
        <div className="w-full sm:w-2/3 sm:pl-4 -mt-7">
          {selectedTab === 'Certifications' && <Certifications />}
          {selectedTab === 'Programming Languages' && <ProgrammingLanguages />}
          {selectedTab === 'Framework & Tools' && <Framework />}
        </div>
      </div>
    </section>
  );
}
