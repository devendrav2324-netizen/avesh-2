import React from "react";
import { soundFx } from "../utils/audio";
import { FEST_METRICS } from "../data/festivalData";
import { Cpu, Terminal, Flame, Users, Trophy, Building2, Zap, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      code: "01",
      title: "HACK4COMMUNITY",
      subtitle: "8-Hour Innovation Sprint & Demo",
      desc: "An innovation sprint where student teams collaborate, prototype and present practical ideas that solve real community, campus, and public service challenges.",
      icon: Terminal,
      color: "from-sunset/20 to-transparent",
    },
    {
      code: "02",
      title: "ROBOTICS BATTLES",
      subtitle: "Robo Soccer & Sumo Dohyo",
      desc: "High-velocity bot soccer knockout matches and circular dohyo ring sumo bouts testing torque, traction, low-profile wedges, and driver strategy.",
      icon: Cpu,
      color: "from-amber/20 to-transparent",
    },
    {
      code: "03",
      title: "AI & E-SPORTS",
      subtitle: "PromptMe & Auditorium Gaming",
      desc: "An on-the-spot 3-hour Prompt Engineering challenge, plus BGMI and Free Fire championship matches telecast live on the auditorium big screen.",
      icon: Zap,
      color: "from-coral/20 to-transparent",
    },
    {
      code: "04",
      title: "CULTURAL & ARTIST NIGHT",
      subtitle: "Stage Competitions & Live Headliner",
      desc: "Four live evening competitions in Solo/Group Singing and Dance, culminating in a star celebrity artist night and a dance floor DJ set.",
      icon: Flame,
      color: "from-sunset/30 to-amber/10",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0e1014] overflow-hidden border-t border-white/5">
      {/* Background architectural guides */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sunset/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-3">
              <Compass className="w-3.5 h-3.5 text-sunset" />
              <span className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
                SECTION 01 // FEST ARCHITECTURE
              </span>
            </div>
            
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.05]">
              WHERE URBAN FUTURISM MEETS <span className="text-sunset">RAW ENGINEERING</span>.
            </h2>
          </div>

          <div className="lg:max-w-md">
            <p className="font-sans text-sm sm:text-base text-silver-400 leading-relaxed mb-3">
              AVESH is the annual technical and cultural fest of <strong className="text-silver-200">CGIT Raipur</strong> (formerly known as GEC Raipur): four days where engineering meets expression. Two days of competitions in code, ideas, robotics and structures, a cultural evening on stage, and a closing artist night under the lights.
            </p>
            <span className="font-mono text-xs text-sunset tracking-wider uppercase block">
              // FESTIVAL HEAD: DR. SHWETA CHOUBEY
            </span>
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.code}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative p-6 sm:p-7 bg-[#171717] rounded-sm border border-white/5 hover:border-sunset/50 transition-all duration-300 clip-diagonal-card hover:shadow-[0_10px_30px_rgba(255,100,46,0.15)] flex flex-col justify-between"
              >
                {/* Accent corner tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold tracking-widest text-sunset">
                    // {pillar.code}
                  </span>
                  <div className="p-2.5 rounded-sm bg-white/5 text-silver-300 group-hover:text-sunset group-hover:bg-sunset/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div>
                  <h3 className="font-display font-bold text-xl text-white group-hover:text-silver-100 transition-colors mb-1">
                    {pillar.title}
                  </h3>
                  <span className="block font-mono text-[11px] tracking-wider text-sunset mb-3">
                    {pillar.subtitle}
                  </span>
                  <p className="font-sans text-xs sm:text-sm text-silver-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[10px] font-mono tracking-widest text-silver-500 uppercase">
                  <span>DISCIPLINE</span>
                  <span className="text-silver-400 group-hover:text-sunset transition-colors">
                    ACTIVE
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fest By The Numbers Banner from Official Brochure */}
        <div className="relative p-8 sm:p-10 bg-gradient-to-r from-[#171717] via-[#1c1e24] to-[#171717] rounded-sm border border-white/10 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-sunset/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-amber" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  8
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                TECHNICAL COMPETITIONS
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-4 h-4 text-sunset" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  4
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                CULTURAL COMPETITIONS
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Flame className="w-4 h-4 text-coral" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  1
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                GRAND ARTIST NIGHT
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-sunset" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  4 DAYS
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                27 – 30 OCTOBER 2026
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
