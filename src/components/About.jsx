import { personalInfo } from '../data/portfolioData';
import { School, Award, Heart, CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative py-24 bg-darkBg overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            About <span className="text-accentSky">Me</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Professional Photo */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-[280px] sm:w-[350px] aspect-square rounded-2xl overflow-hidden shadow-glass border border-white/10 hover:border-accentSky/40 transition-colors duration-300">
              <img 
                src="/avatar.jpg" 
                alt="Khushi Yadav profile" 
                className="w-full h-full object-cover filter brightness-95 hover:brightness-105 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right: Biography Paragraph & Key Info */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-lightText/90">
              Transforming Ideas into Intelligent Systems
            </h3>
            
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {personalInfo.bio}
            </p>

            {/* Quick bullet points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <School className="w-5 h-5 text-accentSky shrink-0" />
                <span>Final Year B.Tech, NSUT Delhi</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <Award className="w-5 h-5 text-accentViolet shrink-0" />
                <span>Focus: Data, Structures & Algorithms</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-accentSky shrink-0" />
                <span>DSA Problem Solver (800+ Solved)</span>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <div className="flex items-baseline">
                    <span className="font-display font-bold text-3xl sm:text-5xl text-accentSky">
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#94a3b8] uppercase tracking-wider mt-1.5 leading-snug">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
