'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const frameworks = [
  { name: 'React', image: '/react.png' },
  { name: 'Firebase', image: '/firebase.png' },
  { name: 'Supabase', image: '/supabase.jpeg' },
  { name: 'FastAPI', image: '/fastapi.png' },
  { name: 'AWS', image: '/aws.png' },
  { name: 'Node.js', image: '/nodejs.png' },
  { name: 'Next.js', image: '/nextjs.svg' },
];

export default function Frameworks() {
  return (
    <div className="relative w-full max-w-4xl mx-auto mt-14 px-6 flex flex-col items-center gap-12">
      {/* Glowing Background Blob */}
      <div className="absolute -z-10 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-blue-500 blur-[120px] opacity-20 animate-pulse rounded-full" />

      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 -mt-10 place-items-center w-full">
        {frameworks.map((fw, index) => (
          <motion.div
            key={fw.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: index * 0.07,
              scale: { duration: 0.1, ease: 'easeOut' },
            }}
            whileHover={{
              scale: 1.12,
              transition: {
                duration: 0.15,
                ease: 'easeOut',
              },
            }}
            className="relative flex flex-col items-center group transition-all duration-30"
          >
            {/* Glow ring on hover */}
            <div className="absolute w-28 h-28 rounded-xl bg-gradient-to-tr from-purple-500 to-cyan-500 blur-xl opacity-0 group-hover:opacity-30 transition duration-200" />

            {/* Image container */}
            <div className="relative z-10 w-25 h-25 bg-gray-800/90 rounded-xl shadow-xl hover:shadow-2xl transform flex items-center justify-center backdrop-blur-md">
              <div className="relative w-20 h-20 sm:w-20 sm:h-20">
                <Image
                  src={fw.image}
                  alt={fw.name}
                  fill
                  className="object-contain rounded-md"
                />
              </div>
            </div>

            {/* Name */}
            <p className="text-sm font-semibold text-white mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
              {fw.name}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
