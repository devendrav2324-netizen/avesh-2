import React from "react";
import { SPONSORS_DATA } from "../data/festivalData";
import { soundFx } from "../utils/audio";
import { ShieldCheck, Cpu, Server, Wrench, Zap, Flame, Globe, Shield, Radio } from "lucide-react";

export const SponsorsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu": return Cpu;
      case "Server": return Server;
      case "Wrench": return Wrench;
      case "Zap": return Zap;
      case "Flame": return Flame;
      case "Globe": return Globe;
      case "Radio": return Radio;
      default: return Shield;
    }
  };

  return (
    <section id="sponsors" className="relative py-24 sm:py-32 bg-[#0e1014] border-t border-white/5">
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-sunset" />
            <span className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
              SECTION 05 // ECOSYSTEM PARTNERS
            </span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            POWERED BY <span className="text-sunset">INDUSTRY LEADERS</span>.
          </h2>
          <p className="font-sans text-sm sm:text-base text-silver-400 mt-2">
            Backed by vanguard hardware manufacturers, AI research labs, and collegiate tech networks.
          </p>
        </div>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {SPONSORS_DATA.map((sponsor, index) => {
            const Icon = getIcon(sponsor.iconName);
            return (
              <div
                key={index}
                onMouseEnter={() => soundFx.playHover()}
                className="group relative p-6 sm:p-8 bg-[#171717] rounded-sm border border-white/5 hover:border-sunset/50 transition-all duration-300 flex flex-col items-center text-center justify-between hover:shadow-[0_10px_30px_rgba(255,100,46,0.1)] clip-diagonal-card"
              >
                {/* Tier Badge */}
                <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-silver-500 group-hover:text-sunset transition-colors mb-4">
                  // {sponsor.tier}
                </span>

                {/* Tech Icon / Logo Mark */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-sm bg-white/5 border border-white/10 flex items-center justify-center text-silver-300 group-hover:text-sunset group-hover:border-sunset/40 group-hover:bg-sunset/10 transition-all duration-300 mb-4">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                {/* Partner Name & Domain */}
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-silver-100 transition-colors">
                    {sponsor.name}
                  </h4>
                  <p className="font-mono text-[10px] sm:text-[11px] text-silver-500 mt-1">
                    {sponsor.domain}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call for Sponsorship Pill */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3 px-6 py-4 rounded-sm bg-[#171717] border border-white/10 font-mono text-xs text-silver-400">
            <span>WANT TO PARTNER WITH AVESH 2026 AT CGIT RAIPUR?</span>
            <a
              href="mailto:sponsorships@cgitraipur.edu.in"
              onClick={() => soundFx.playClick()}
              className="text-sunset hover:text-white font-bold underline underline-offset-4 tracking-wider"
            >
              DOWNLOAD SPONSORSHIP BROCHURE →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
