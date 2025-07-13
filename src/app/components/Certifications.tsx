'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const certifications = [
  {
    title: "JSE – Certified Entry-Level JavaScript Programmer",
    institute: "JS Institute®",
    issueDate: "May 2025",
    credentialID: "KaZp.XmEO.CjFV",
    skills: ["JavaScript (Programming Language)", "Information Technology"],
    link: "https://verify.openedg.org/",
    image: "/harshal_java_cert.jpg",
  },
  {
    title: "PCAP – Certified Associate in Python Programming",
    institute: "Python Institute®",
    issueDate: "Sep 2022",
    credentialID: "wOk6.TL6R.cV6e",
    skills: ["Python (Programming Language)", "Information Technology"],
    link: "https://verify.openedg.org/",
    image: "/pcap_cert.jpg",
  },
  {
    title: "PCEP – Certified Entry-Level Python Programmer",
    institute: "Python Institute®",
    issueDate: "Mar 2022",
    credentialID: "Kf8T.y75j.wwZG",
    skills: ["Python (Programming Language)", "Information Technology"],
    link: "https://verify.openedg.org/",
    image: "/pcep_cert.jpg",
  },
];

export default function Certifications() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const cert = certifications[currentIndex];

  const prev = () =>
    setCurrentIndex((i) => (i === 0 ? certifications.length - 1 : i - 1));
  const next = () =>
    setCurrentIndex((i) => (i === certifications.length - 1 ? 0 : i + 1));

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 py-10">
      {/* Glowing Background */}
      <div className="absolute -z-10 left-1/2 top-[45%] transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-20 rounded-full animate-pulse" />

      <AnimatePresence mode="wait">
        <motion.div
          key={cert.title}
          initial={{ opacity: 0, filter: 'blur(8px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, filter: 'blur(8px)' }}
          transition={{ duration: 0.23, ease: 'easeIn' }}
          className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.4)] px-10 py-10 overflow-hidden group"
        >
          {/* Shine effect (permanently visible) */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shine_2.5s_linear_infinite]" />

          {/* Title */}
          <h3 className="text-3xl font-extrabold text-white text-center mb-8 tracking-tight">
            {cert.title}
          </h3>

          {/* Content */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-10">
            {/* Left: Info */}
            <div className="flex-1 space-y-3">
              <p className="text-white font-medium">{cert.institute}</p>
              <p className="text-sm text-gray-300">Issued {cert.issueDate}</p>
              <p className="text-sm text-gray-300">
                <span className="font-semibold text-white">Credential ID:</span>{' '}
                {cert.credentialID}
              </p>

              <div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 px-6 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white hover:scale-105 transition-transform shadow-lg"
                >
                  Show credential ↗
                </a>
              </div>

              <p className="text-sm text-gray-300 pt-3">
                <span className="font-semibold text-white">Skills:</span>{' '}
                {cert.skills.join(' · ')}
              </p>
            </div>

            {/* Right: Certificate Image */}
            <motion.div
              whileHover={{ scale: 1.03, rotateX: 2, rotateY: -2 }}
              transition={{ type: 'spring', stiffness: 150 }}
              className="flex-shrink-0 w-full sm:w-[360px]"
            >
              <Image
                src={cert.image}
                alt="certificate"
                width={360}
                height={240}
                className="rounded-xl border border-white/20 shadow-lg"
              />
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
      {/* Dot Indicator */}
      <div className="flex justify-center mt-4 mb-4 gap-3">
        {certifications.map((_, index) => (
  <button
    key={index}
    onClick={() => setCurrentIndex(index)}
    className="focus:outline-none"
  >
    <motion.div
      className={`h-3 rounded-full transition-all duration-300 ${
        currentIndex === index ? 'w-8 bg-white' : 'w-3 bg-white/30'
      }`}
      animate={{
        scale: currentIndex === index ? 1.25 : 1,
        opacity: currentIndex === index ? 1 : 0.6,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    />
  </button>
))}

      </div>

      {/* Navigation */}
      <div className="flex justify-center mt-6 gap-6">
        <button
          onClick={prev}
          className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full text-xl transition shadow-md"
        >
          ◀
        </button>
        <button
          onClick={next}
          className="w-11 h-11 bg-white/10 hover:bg-white/20 rounded-full text-xl transition shadow-md"
        >
          ▶
        </button>
      </div>

      {/* Shine animation keyframe */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
