import React from "react";
import { soundFx } from "../utils/audio";
import { FEST_METRICS } from "../data/festivalData";
import { MapPin, Mail, Phone, ArrowUp, ExternalLink } from "lucide-react";
import { useSectionScrollFade } from "../hooks/useSectionScrollFade";

export const Footer: React.FC = () => {
  const { sectionRef, isVisible } = useSectionScrollFade();
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={sectionRef} id="footer" className="relative bg-[#08090b] text-silver-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      <div className="absolute inset-0 bg-grain opacity-20 pointer-events-none" />

      <div className={`section-scroll-fade max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${isVisible ? "is-visible" : ""}`}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand & Institution Info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 bg-sunset flex items-center justify-center rounded-sm clip-diagonal-btn text-white font-display font-black text-xl">
                A
              </div>
              <div>
                <span className="font-display font-black text-2xl text-white tracking-wider">
                  AVESH<span className="text-sunset ml-1">2026</span>
                </span>
                <span className="block font-mono text-[10px] text-silver-500 uppercase tracking-widest">
                  CGIT RAIPUR ANNUAL TECH FEST
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-silver-400 leading-relaxed mb-6 max-w-sm">
              The premier annual technological festival of Chhattisgarh Institute of Technology (CGIT Raipur). Uniting code, combat robotics, creative design, and musical culture under the Kyoto-sunset urban skyline aesthetic.
            </p>

            <div className="font-mono text-xs space-y-2 text-silver-400">
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-sunset shrink-0" />
                <a
                  href={FEST_METRICS.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-sunset transition-colors underline decoration-white/20 hover:decoration-sunset underline-offset-2 flex items-center gap-1.5"
                  title="Open CGIT Raipur on Google Maps"
                >
                  <span>CGIT Campus, Sejbahar, Raipur, Chhattisgarh — 492015</span>
                  <ExternalLink className="w-3 h-3 text-sunset shrink-0" />
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sunset shrink-0" />
                <span>avesh2026@cgitraipur.edu.in</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sunset shrink-0" />
                <span>+91 771 288 8900 // Student Helpline</span>
              </p>
            </div>
          </div>

          {/* Quick Jump Links (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold tracking-widest text-white uppercase mb-4">
              // NAVIGATION
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="#hero" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  01 // HOME
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  02 // ABOUT AVESH
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  03 // COMPETITIONS
                </a>
              </li>
              <li>
                <a href="#explore" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  04 // EXPERIENCE
                </a>
              </li>
              <li>
                <a href="#schedule" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  05 // TIMELINE
                </a>
              </li>
              <li>
                <a href="#sponsors" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  06 // PARTNERS
                </a>
              </li>
            </ul>
          </div>

          {/* Core Competitions (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-mono text-xs font-bold tracking-widest text-white uppercase mb-4">
              // KEY ARENAS
            </h4>
            <ul className="space-y-2.5 font-mono text-xs">
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → HACK4COMMUNITY HACKATHON
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → FOUNDER'S FORGE IDEATHON
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → PROMPTME AI CHALLENGE
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → ROBO SOCCER & ROBO SUMO
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → TRUSS-CRAFT STRUCTURES
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → E-SPORTS (BGMI & FREE FIRE)
                </a>
              </li>
              <li>
                <a href="#events" onClick={() => soundFx.playClick()} className="hover:text-sunset transition-colors">
                  → CULTURAL & ARTIST NIGHT
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Coordinates (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-mono text-xs font-bold tracking-widest text-white uppercase mb-4">
              // CONNECT
            </h4>
            <div className="flex gap-2.5 mb-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 hover:bg-sunset/20 hover:text-sunset rounded-sm border border-white/5 transition-all text-silver-300"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 hover:bg-sunset/20 hover:text-sunset rounded-sm border border-white/5 transition-all text-silver-300"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 hover:bg-sunset/20 hover:text-sunset rounded-sm border border-white/5 transition-all text-silver-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 bg-white/5 hover:bg-sunset/20 hover:text-sunset rounded-sm border border-white/5 transition-all text-silver-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>

            <div className="font-mono text-[10px] text-silver-500 space-y-1">
              <a
                href={FEST_METRICS.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="block hover:text-sunset transition-colors group cursor-pointer"
                title="Open CGIT Raipur on Google Maps"
              >
                <p>LAT: 21.1632° N</p>
                <p>LONG: 81.6591° E</p>
                <p className="text-sunset underline decoration-sunset/40 group-hover:decoration-sunset underline-offset-2 mt-1 flex items-center gap-1">
                  <span>VIEW GOOGLE MAPS</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </p>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Baseline Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-silver-500">
          <p>
            © 2026 AVESH • CGIT RAIPUR. ALL RIGHTS RESERVED.
          </p>

          <p className="tracking-widest uppercase text-silver-400">
            THE MORE YOU LEARN, THE MORE YOU CAN.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-silver-400 hover:text-sunset transition-colors"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
