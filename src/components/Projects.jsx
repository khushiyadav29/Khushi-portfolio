import { projectsData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div className="group relative glassmorphism rounded-2xl overflow-hidden border border-white/5 hover:border-accentSky/30 shadow-glass transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_40px_rgba(56,189,248,0.08)] hover:scale-[1.01]">
      {/* Visual Overlay Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-accentSky/5 via-transparent to-accentViolet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Project Image Panel */}
      <div className="relative h-48 w-full overflow-hidden shrink-0">
        <div className="absolute inset-0 bg-slate-950/40 z-10" />
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-20 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-accentSky uppercase tracking-wider">
          {project.subtitle}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow z-20">
        <h3 className="text-xl sm:text-2xl font-bold font-display text-lightText group-hover:text-accentSky transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[#94a3b8] text-xs sm:text-sm mt-3 leading-relaxed flex-grow">
          {project.description}
        </p>

        {/* Feature Highlights Bullet list */}
        <ul className="mt-4 space-y-1.5 text-xs text-slate-400">
          {project.features.slice(0, 3).map((feat, fIdx) => (
            <li key={fIdx} className="flex items-start gap-1.5">
              <span className="text-accentSky mt-0.5">•</span>
              <span>{feat}</span>
            </li>
          ))}
        </ul>

        {/* Tech Chips */}
        <div className="flex flex-wrap gap-2 mt-6">
          {project.tech.map((tech, tIdx) => (
            <span 
              key={tIdx} 
              className="px-2.5 py-1 text-[11px] font-bold rounded-md bg-[#1e293b] text-slate-300 border border-white/5"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Link Buttons */}
        <div className="flex items-center gap-4 mt-6 pt-4 border-t border-white/5">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-accentSky transition-colors"
          >
            <FaGithub className="w-4 h-4" />
            GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-bold text-slate-300 hover:text-accentSky transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-darkBg overflow-hidden">
      {/* Decorative backdrop glow */}
      <div className="absolute top-[40%] right-[-15%] w-[450px] h-[450px] rounded-full bg-accentViolet/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Featured <span className="text-accentSky">Projects</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projectsData.map((project, idx) => (
            <ProjectCard key={idx} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
