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
    <div className="relative w-full sm:w-3/4 mx-8 mt-14 flex flex-col items-center gap-16">
      {/* Glowing Background Blob */}
      <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-blue-500 blur-[120px] opacity-20 animate-pulse rounded-full" />

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-6 place-items-center w-full">
        {languages.map((lang, index) => {
          const isLastRow = index >= 8;

          return (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: index * 0.07,
                scale: { duration: 0.1, ease: 'easeOut' }, // ← handles exit scale
              }}
              whileHover={{
                scale: 1.2,
                transition: {
                  duration: 0.11,
                  ease: 'easeOut',
                },
              }}

              className={`relative flex flex-col items-center group transition-all duration-30 ${isLastRow && index === 8 ? 'col-span-2 sm:col-span-1 sm:col-start-2' : ''
                } ${isLastRow && index === 9 ? 'col-span-2 sm:col-span-1 sm:col-start-3' : ''}`}
            >
              {/* Glow ring on hover */}
              <div className="absolute w-28 h-28 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 blur-xl opacity-0 group-hover:opacity-30 transition duration-200"></div>

              {/* Image container */}
              <div className="relative z-10 w-24 h-24 bg-white/80 rounded-xl shadow-xl hover:shadow-2xl transform flex items-center justify-center backdrop-blur-md">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src={lang.image}
                    alt={lang.name}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </div>

              {/* Language name - only appears on hover */}
              <p className="text-sm font-semibold text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                {lang.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
