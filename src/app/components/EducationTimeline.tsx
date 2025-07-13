'use client';
import { motion } from 'framer-motion';

const education = [
    {
        exam: "AISSE",
        board: "CBSE Grade X",
        place: "GIIS, Singapore",
        year: "2018–2020",
        score: "97.7%",
    },
    {
        exam: "AISSCE",
        board: "CBSE Grade XII",
        place: "GIIS, Singapore",
        year: "2021–2023",
        score: "95.8%",
    },
    {
        exam: "NTU Singapore",
        board: "Computer Engineering",
        place: "",
        year: "2023–2027",
        score: "B.Eng",
    },
];

export default function EducationTimeline() {
    return (
        <div className="flex flex-col items-center space-y-10 mt-10">
            <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-purple-300 drop-shadow-md tracking-wide"
            >
                Education 🎓
            </motion.h2>


            <div className="relative w-full max-w-4xl px-4">
                {/* Animated Line with Arrow */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 2, ease: 'easeInOut' }}
                    className="absolute top-[8px] left-0 w-full h-1 origin-left z-0"
                >
                    <div className="w-full h-full bg-white" />
                    <div className="absolute right-0 top-[-6px] translate-x-full w-0 h-0 
            border-t-8 border-b-6 border-l-8 border-t-transparent border-b-transparent border-l-white" />
                </motion.div>

                {/* Dots + Cards */}
                <div className="flex justify-between relative z-10">
                    {education.map((entry, idx) => (
                        <div key={idx} className="flex flex-col items-center w-1/3">
                            {/* Dot */}
                            <motion.div
                                initial={{ scale: 0.5, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: idx * 0.6, duration: 0.4, type: "spring" }}
                                className="w-5 h-5 rounded-full bg-purple-500 border-4 border-white shadow-lg"
                            />

                            {/* Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.5, duration: 0.7, ease: 'easeIn' }}
                                className="relative group p-4 w-64 rounded-2xl bg-white/13 backdrop-blur-md border border-white/10 shadow-lg mt-8 transition-transform hover:scale-[1.04] hover:shadow-2xl"
                            >
                                {/* Glow on hover */}
                                <div className="absolute inset-0 rounded-2xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none" />

                                {/* Text Info */}
                                <div className="flex flex-col gap-1 pr-20 leading-relaxed">
                                    <div className="text-base font-semibold tracking-wide">{entry.exam}</div>
                                    <div className="text-xs text-gray-200">{entry.board}</div>
                                    {entry.place && <div className="text-xs text-gray-300 italic">{entry.place}</div>}
                                    <div className="text-xs text-gray-400">{entry.year}</div>
                                </div>

                                {/* Score Badge */}
                                <div className="absolute top-4 right-4 w-[68px] h-[68px] rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl font-bold shadow-md backdrop-blur-none group-hover:bg-white/20 transition-all duration-300">
                                    {entry.score ?? ""}
                                    
                                </div>

                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
