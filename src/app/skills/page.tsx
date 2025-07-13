'use client';
import { useState } from 'react';
import { BadgeCheck, Code2, Wrench, Brain } from 'lucide-react';
import Certifications from '../components/Certifications';
import { motion } from 'framer-motion';
import ProgrammingLanguages from '../components/ProgrammingLanguages';


const tabs = [
  { label: "Certifications", icon: BadgeCheck },
  { label: "Programming Languages", icon: Code2 },
  { label: "Framework & Tools", icon: Wrench },
  { label: "Software Engineering Topics", icon: Brain },
];

export default function Skills() {
  const [selectedTab, setSelectedTab] = useState("Certifications");

  return (
    <section className="mt-10 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-2">Skills</h2>
      <p className="text-sm text-gray-300 italic mb-8">A snapshot of my technical arsenal</p>

      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-5xl -mt-10">


{/* Left Panel - Tabs */}
<motion.div
  initial={{ opacity: 0, x: -40 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: "spring", stiffness: 70, damping: 12 }}
  className="flex flex-col gap-4 w-full sm:w-1/3 mt-18"
>
  {tabs.map(({ label, icon: Icon }) => (
    <button
      key={label}
      onClick={() => setSelectedTab(label)}
      className={`group flex items-center gap-3 rounded-xl px-6 py-4 text-left font-semibold transition-all duration-300
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

        {/* Right Panel - Conditional Content */}
<div className="w-full sm:w-4/5 ">
  {selectedTab === "Certifications" && <Certifications />}
  {selectedTab === "Programming Languages" && <ProgrammingLanguages />}

</div>
      </div>
    </section>
    
  );
}
