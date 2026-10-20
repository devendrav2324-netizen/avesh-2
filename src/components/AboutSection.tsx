import React from "react";
import { soundFx } from "../utils/audio";
import { FEST_METRICS } from "../data/festivalData";
import { Cpu, Terminal, Flame, Users, Trophy, Building2, Zap, Compass } from "lucide-react";

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      code: "01",
      title: "SYNAPSE COMPUTING",
      subtitle: "36-Hour Hackathon & Agentic AI",
      desc: "Developing scalable real-world prototypes with deep learning, distributed cloud infra, and autonomous agent loops.",
      icon: Terminal,
      color: "from-sunset/20 to-transparent",
    },
    {
      code: "02",
      title: "ROBOKINETICS",
      subtitle: "Combat Bots & Autonomous Drones",
      desc: "High-torque spinning drums, hardened armor plates, and telemetry-guided obstacle drones clashing in bulletproof arenas.",
      icon: Cpu,
      color: "from-amber/20 to-transparent",
    },
    {
      code: "03",
      title: "NEO-CREATIVE",
      subtitle: "UI/UX & Interactive Media",
      desc: "Bridging architectural design systems, tactile user experiences, and competitive esports under live crowd casting.",
      icon: Zap,
      color: "from-coral/20 to-transparent",
    },
    {
      code: "04",
      title: "CULTURAL CELEBRATION",
      subtitle: "Band Battles & Dance Crews",
      desc: "When the sun dips behind the Raipur skyline, the amphitheater lights illuminate live rock bands, hip-hop crews, and EDM artists.",
      icon: Flame,
      color: "from-sunset/30 to-amber/10",
    },
  ];

  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#0e1014] overflow-hidden border-t border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.45] pointer-events-none"
        style={{ backgroundImage: "url('/assets/gec9.jpeg')" }}
      />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0d0e11] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0e1014] pointer-events-none" />
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
            <p className="font-sans text-sm sm:text-base text-silver-400 leading-relaxed">
              Founded as the flagship annual tech festival of <strong className="text-silver-200">CGIT Raipur</strong>, AVESH represents the synthesis of collegiate ambition, industrial robotics, and cinematic digital expression.
            </p>
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

        {/* Fest By The Numbers Banner */}
        <div className="relative p-8 sm:p-10 bg-gradient-to-r from-[#171717] via-[#1c1e24] to-[#171717] rounded-sm border border-white/10 shadow-xl overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-full bg-gradient-to-l from-sunset/10 to-transparent pointer-events-none" />
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Trophy className="w-4 h-4 text-amber" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  ₹2.5L+
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                TOTAL CASH PRIZE POOL
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Users className="w-4 h-4 text-sunset" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  3,500+
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                ACTIVE PARTICIPANTS
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Building2 className="w-4 h-4 text-silver-300" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  60+
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                COLLEGES ACROSS INDIA
              </span>
            </div>

            <div className="pt-4 lg:pt-0">
              <div className="flex items-center justify-center gap-2 mb-1">
                <Zap className="w-4 h-4 text-coral" />
                <span className="font-display font-black text-3xl sm:text-4xl text-white">
                  24+
                </span>
              </div>
              <span className="font-mono text-xs tracking-widest text-silver-400 uppercase">
                FLAGSHIP COMPETITIONS
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
