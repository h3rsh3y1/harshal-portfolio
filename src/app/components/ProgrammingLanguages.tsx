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
    <div className="w-full sm:w-3/4 mx-auto mt-12 flex flex-col items-center gap-10">
      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-10 gap-y-4 place-items-center w-full">
        {languages.map((lang, index) => {
          const isLastRow = index >= 8;

          return (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: 'easeOut',
              }}
              className={`flex flex-col items-center group transition-all ${
                isLastRow && index === 8 ? 'col-span-2 sm:col-span-1 sm:col-start-2' : ''
              } ${isLastRow && index === 9 ? 'col-span-2 sm:col-span-1 sm:col-start-3' : ''}`}
            >
              <div className="w-24 h-24 bg-white/80 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center">
                <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                  <Image
                    src={lang.image}
                    alt={lang.name}
                    fill
                    className="object-contain rounded-md"
                  />
                </div>
              </div>
              {/* Hovered name below */}
              <p className="text-sm font-semibold text-white mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {lang.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}