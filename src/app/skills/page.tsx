'use client';

export default function SkillsPage() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 text-white">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight">Skills</h1>
        <p className="text-gray-300 mt-2">A snapshot of my technical arsenal</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Section with Tabs */}
        <div className="space-y-4">
          {['Certifications', 'Programming Languages', 'Framework & Tools', 'Software Engineering Topics'].map((label, i) => (
            <button
              key={i}
              className={`w-full py-3 px-5 text-left rounded-lg font-medium border border-white/10 bg-white/5 hover:bg-white/10 transition`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Right Section: Empty for now */}
        <div className="text-gray-400 italic text-sm">
          Select a tab to view details (functionality to be added next).
        </div>
      </div>
    </section>
  );
}
