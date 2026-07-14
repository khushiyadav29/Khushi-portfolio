import { ArrowUpRight } from 'lucide-react';
import { SiLeetcode } from 'react-icons/si';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function CodingProfiles() {
  const profiles = [
    {
      name: "GitHub",
      username: "@khushiyadav29",
      description: "Explore my open-source code repositories, React projects, and AI system implementations.",
      url: "https://github.com/khushiyadav29",
      icon: FaGithub,
      color: "group-hover:text-[#2dba4e]",
      borderColor: "hover:border-[#2dba4e]/30",
      glowColor: "hover:shadow-[0_0_20px_rgba(45,186,78,0.15)]",
      bgColor: "bg-[#2dba4e]/5"
    },
    {
      name: "LeetCode",
      username: "khushi_yadav29",
      description: "Review my algorithmic progress, contest histories (1700+ Rating), and problem-solving badges.",
      url: "https://leetcode.com/u/khushi_yadav29/",
      icon: SiLeetcode,
      color: "group-hover:text-[#f89f1b]",
      borderColor: "hover:border-[#f89f1b]/30",
      glowColor: "hover:shadow-[0_0_20px_rgba(248,159,27,0.15)]",
      bgColor: "bg-[#f89f1b]/5"
    },
    {
      name: "LinkedIn",
      username: "Khushi Yadav",
      description: "Connect with me professionally, read my project logs, and coordinate career opportunities.",
      url: "https://www.linkedin.com/in/khushi-yadav-0b0a382a1/",
      icon: FaLinkedin,
      color: "group-hover:text-[#0077b5]",
      borderColor: "hover:border-[#0077b5]/30",
      glowColor: "hover:shadow-[0_0_20px_rgba(0,119,181,0.15)]",
      bgColor: "bg-[#0077b5]/5"
    }
  ];

  return (
    <section className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background glow shadow */}
      <div className="absolute top-[30%] right-[-10%] w-[380px] h-[380px] rounded-full bg-accentSky/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Coding <span className="text-accentSky">Profiles</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        {/* Coding Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {profiles.map((profile, idx) => {
            const Icon = profile.icon;
            return (
              <a
                key={idx}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group glassmorphism p-8 rounded-2xl border border-white/5 ${profile.borderColor} transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1 ${profile.glowColor} cursor-pointer`}
              >
                <div>
                  {/* Header Row */}
                  <div className="flex justify-between items-center mb-6">
                    <div className={`p-4 rounded-2xl ${profile.bgColor} text-slate-400 ${profile.color} transition-all duration-300`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-lightText group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                  </div>

                  {/* Brand name */}
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-lightText">
                    {profile.name}
                  </h3>

                  {/* Username identifier */}
                  <div className="text-xs font-semibold text-accentSky tracking-wider font-display mt-1">
                    {profile.username}
                  </div>

                  {/* Description Paragraph */}
                  <p className="text-slate-400 text-xs sm:text-sm mt-4 leading-relaxed">
                    {profile.description}
                  </p>
                </div>

                {/* Hover CTA Button wrapper */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs font-bold text-slate-400 group-hover:text-lightText transition-colors">
                  Visit Profile
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
