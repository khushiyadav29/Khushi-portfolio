import { personalInfo } from '../data/portfolioData';
import { FileText, ArrowRight } from 'lucide-react';

export default function Hero() {
  const roles = ["Full Stack Developer", "AI Enthusiast", "Problem Solver", "Open Source Learner"];

  const handleProjectsClick = (e) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden"
    >
      {/* Static Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[25%] left-[15%] w-[8px] h-[8px] rounded-full bg-accentSky/40" />
        <div className="absolute top-[60%] right-[20%] w-[12px] h-[12px] rounded-full bg-accentViolet/30" />
        <div className="absolute bottom-[30%] left-[25%] w-[10px] h-[10px] rounded-full bg-[#f43f5e]/30" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center z-10">
        <div className="flex flex-col items-center space-y-6">
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accentSky/10 border border-accentSky/20 text-accentSky text-xs md:text-sm font-semibold tracking-wider uppercase shadow-glass">
            <span className="w-2 h-2 rounded-full bg-accentSky" />
            Ready for Software Developer Opportunities
          </div>

          {/* Name Header */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-accentSky via-indigo-400 to-accentViolet bg-clip-text text-transparent block sm:inline">
              {personalInfo.name}
            </span>
          </h1>

          {/* Institution and Program */}
          <div className="max-w-2xl">
            <h2 className="text-lg sm:text-2xl font-semibold text-lightText/90 font-display">
              {personalInfo.program}
            </h2>
            <p className="text-sm sm:text-base text-[#94a3b8] mt-2 font-medium">
              {personalInfo.institution}
            </p>
          </div>

          {/* Static Role Subtitle */}
          <div className="text-base sm:text-xl font-bold text-slate-300 tracking-wide max-w-xl">
            {roles.join("  •  ")}
          </div>

          {/* Call-to-actions buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
            <a
              href="/resume.pdf"
              download="Khushi_Yadav_Resume.pdf"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-accentSky to-indigo-500 text-[#0F172A] text-base font-bold tracking-wider shadow-md hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </a>
            <a
              href="#projects"
              onClick={handleProjectsClick}
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-full bg-darkCard/50 border border-white/10 hover:border-accentSky/50 text-lightText text-base font-bold tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-sm"
            >
              View Projects
              <ArrowRight className="w-5 h-5 text-accentSky" />
            </a>
          </div>

          {/* Social Icons row */}
          <div className="flex items-center gap-6 pt-10">
            {personalInfo.socials.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-full bg-darkCard border border-white/5 text-[#94a3b8] transition-all duration-300 hover:border-accentSky/30 hover:scale-110 shadow-glass ${social.color}`}
                  aria-label={social.name}
                >
                  <Icon className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
