import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-[#0B0F19] overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] rounded-full bg-accentSky/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] rounded-full bg-accentViolet/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            My <span className="text-accentSky">Skills</span>
          </h2>
          <div className="w-[80px] h-[4px] bg-gradient-to-r from-accentSky to-accentViolet mx-auto mt-4 rounded-full" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((categoryData, catIdx) => {
            const Icon = categoryData.icon;
            return (
              <div
                key={catIdx}
                className="glassmorphism p-6 sm:p-8 rounded-2xl border border-white/5 hover:border-accentSky/20 shadow-glass transition-all duration-300 group hover:shadow-[0_0_30px_rgba(56,189,248,0.06)]"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-accentSky/10 text-accentSky group-hover:bg-accentSky group-hover:text-[#0f172a] transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-lightText group-hover:text-accentSky transition-colors duration-300">
                    {categoryData.category}
                  </h3>
                </div>

                {/* Progress bars list */}
                <div className="space-y-5">
                  {categoryData.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex justify-between text-xs sm:text-sm">
                        <span className="font-semibold text-slate-300 group-hover:text-lightText transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="font-bold text-accentSky">
                          {skill.level}%
                        </span>
                      </div>
                      
                      {/* Bar Background */}
                      <div className="h-2 w-full bg-[#1e293b] rounded-full overflow-hidden">
                        {/* Static fill bar */}
                        <div
                          style={{ width: `${skill.level}%` }}
                          className="h-full rounded-full bg-gradient-to-r from-accentSky to-accentViolet"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
