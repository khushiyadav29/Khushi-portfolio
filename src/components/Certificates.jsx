import { certificatesData } from '../data/portfolioData';
import { ShieldCheck, Calendar, Award } from 'lucide-react';

export default function Certificates() {
  return (
    <section className="relative py-24 bg-darkBg overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-[30%] left-[-15%] w-[420px] h-[420px] rounded-full bg-accentViolet/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Licenses & <span className="text-accentSky">Certificates</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certificatesData.map((cert, idx) => (
            <div
              key={idx}
              className="group glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accentSky/25 transition-all duration-300 shadow-glass flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Header row */}
                <div className="flex justify-between items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold font-display text-lightText group-hover:text-accentSky transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-slate-400 text-xs sm:text-sm font-semibold mt-1">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-accentSky/15 text-accentSky shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                {/* Date & ID indicators */}
                <div className="flex flex-wrap gap-4 text-xs text-slate-500 mb-6 font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Issued {cert.date}</span>
                  </div>
                  {cert.id && (
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="w-3.5 h-3.5 text-accentViolet" />
                      <span>Credential ID: {cert.id}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills Chips mapping */}
              {cert.skills && cert.skills.length > 0 && (
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {cert.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-[#1e293b] text-slate-400 border border-white/5 group-hover:text-slate-200 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
