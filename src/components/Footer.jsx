import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 bg-darkBg border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand Copyright */}
        <div className="text-center md:text-left space-y-1">
          <div className="text-sm font-bold font-display text-lightText tracking-wider">
            {personalInfo.name}
          </div>
          <p className="text-xs text-slate-500">
            &copy; {currentYear} All Rights Reserved.
          </p>
        </div>

        {/* Tech Stack Reference */}
        <div className="text-center md:text-right text-xs text-slate-500 font-semibold tracking-wide">
          Designed & Built by <span className="text-accentSky">Khushi</span>
        </div>
      </div>
    </footer>
  );
}
