import { timelineData } from '../data/portfolioData';
import { GraduationCap, ArrowDownCircle } from 'lucide-react';

export default function Timeline() {
  return (
    <section id="experience" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-[20%] left-[-15%] w-[400px] h-[400px] rounded-full bg-accentSky/5 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-accentSky">Journey</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative">
          {/* Vertical central guide line */}
          <div className="absolute left-[16px] md:left-1/2 top-0 bottom-0 w-[2px] bg-[#1e293b] -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-12 md:space-y-16">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col md:flex-row relative items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Circle badge indicator */}
                  <div className="absolute left-[16px] md:left-1/2 top-1.5 -translate-x-1/2 z-20">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border-2 border-accentSky flex items-center justify-center shadow-[0_0_10px_rgba(56,189,248,0.4)]">
                      {idx === 0 ? (
                        <GraduationCap className="w-4 h-4 text-accentSky" />
                      ) : (
                        <ArrowDownCircle className="w-4 h-4 text-accentSky" />
                      )}
                    </div>
                  </div>

                  {/* Content Panel */}
                  <div className="ml-12 md:ml-0 w-[calc(100%-48px)] md:w-[calc(50%-40px)] glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accentSky/25 transition-all duration-300 shadow-glass group hover:shadow-[0_0_25px_rgba(56,189,248,0.05)]">
                    {/* Glowing highlight indicator */}
                    <div className="absolute top-4 right-4 text-xs font-bold text-accentSky font-display tracking-widest">
                      {item.year}
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-lightText font-display group-hover:text-accentSky transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
