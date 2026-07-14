import { achievementsData } from '../data/portfolioData';
import confetti from 'canvas-confetti';

export default function Achievements() {
  const handleCardClick = (title) => {
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.75 },
      colors: ['#38BDF8', '#8B5CF6', '#6366f1', '#F8FAFC'],
      disableForReducedMotion: true
    });
  };

  return (
    <section id="achievements" className="relative py-24 bg-darkBg overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute bottom-[10%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accentViolet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Honors & <span className="text-accentSky">Achievements</span>
          </h2>
          <p className="text-[#64748b] text-sm mt-3 font-medium">Click on any card to celebrate! 🎉</p>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {achievementsData.map((ach, idx) => {
            const Icon = ach.icon;
            return (
              <div
                key={idx}
                onClick={() => handleCardClick(ach.title)}
                className="group glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accentSky/30 shadow-glass cursor-pointer hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_25px_rgba(56,189,248,0.06)] transition-all duration-300 flex flex-col justify-between h-full select-none"
              >
                <div>
                  {/* Icon & Badge row */}
                  <div className="flex justify-between items-center mb-6">
                    <div className="p-3 rounded-xl bg-accentSky/10 text-accentSky group-hover:bg-accentSky group-hover:text-[#0f172a] transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] sm:text-xs font-bold font-display uppercase tracking-widest text-[#94a3b8] px-2.5 py-1 rounded-md bg-[#1e293b] border border-white/5">
                      {ach.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold font-display text-lightText group-hover:text-accentSky transition-colors duration-300">
                    {ach.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                    {ach.description}
                  </p>
                </div>

                <div className="text-[10px] text-accentSky/40 font-bold uppercase tracking-wider mt-6 group-hover:text-accentSky transition-colors">
                  Tap card to trigger confetti
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
