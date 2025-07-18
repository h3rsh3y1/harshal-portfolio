'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const languages = [
  { name: 'C', image: '/c.jpg' },
  { name: 'C++', image: '/c++.jpg' },
  { name: 'Python', image: '/python.jpg' },
  { name: 'SQL', image: '/sql.svg' },
  { name: 'Java', image: '/java.png' },
  { name: 'JavaScript', image: '/javascript.png' },
  { name: 'Verilog', image: '/verilog.jpg' },
  { name: 'TypeScript', image: '/typescript.jpg' },
  { name: 'HTML', image: '/html.jpg' },
  { name: 'CSS', image: '/css.jpg' },
];

export default function ProgrammingLanguages() {
  return (
    <div className="relative w-full flex flex-col items-center gap-12 px-2 sm:px-4 mt-4">
      {/* Glowing blob */}
      <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-blue-500 blur-[120px] opacity-20 animate-pulse rounded-full" />

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-x-6 gap-y-8 w-full place-items-center">
        {languages.map((lang, index) => (
          <motion.div
            key={lang.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            whileHover={{ scale: 1.1 }}
            className="relative flex flex-col items-center group"
          >
            {/* Hover Glow */}
            <div className="absolute w-28 h-28 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 blur-xl opacity-0 group-hover:opacity-30 transition duration-200" />

            {/* Icon Box */}
            <div className="relative z-10 w-25 h-25 bg-white/80 rounded-xl shadow-xl hover:shadow-2xl flex items-center justify-center backdrop-blur-md">
              <div className="relative w-20 h-20 sm:w-20 sm:h-20">
                 <Image src={lang.image} alt={lang.name} fill className="object-contain rounded-md" />
              </div>
            </div>

            {/* Label */}
            <p className="text-sm font-medium text-white mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-center">
              {lang.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
