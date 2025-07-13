'use client';
import { motion } from 'framer-motion';
import EducationTimeline from './EducationTimeline'

export default function Hero() {
    return (
        <section className="max-w-5xl mx-auto px-4 py-12 space-y-12 text-white">
            {/* Row: Image + Intro */}
            <div className="flex flex-col md:flex-row md:items-end justify-center gap-8 text-center md:text-left">

                <motion.img
                    src="/me.jpg"
                    alt="Harshal"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="w-48 h-48 rounded-full mt-7 object-cover border-2 border-white shadow-md"
                />

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <h1 className="text-4xl font-bold">
                        Hi, I’m Harshal Meow <span className="inline-block animate-wave">👋</span>
                    </h1>
                    <p className="mt-2 text-gray-300 max-w-xl">
                        Computer Engineering student @ NTU Singapore · Passionate about merging software and hardware to create impactful systems. Special interest in backend development, AI/ML, and embedded systems — where data meets design. <br />
                        Always curious, always building.
                    </p>
                </motion.div>
            </div>


            {/* Education Section */}
            <EducationTimeline />
        </section>
    );
}
