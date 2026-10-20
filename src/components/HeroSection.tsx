import React, { useState, useEffect } from "react";
import { DiagonalArtwork } from "./DiagonalArtwork";
import { soundFx } from "../utils/audio";
import { FEST_METRICS } from "../data/festivalData";
import { ArrowDown, Calendar, MapPin, Trophy, ShieldCheck, Terminal } from "lucide-react";

interface HeroSectionProps {
  onOpenRegister: () => void;
  onOpenPoster: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onOpenPoster }) => {
  // Target date: October 28, 2026, 09:00 AM IST
  const targetTime = new Date("2026-10-28T09:00:00+05:30").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  return (
    <section 
      id="hero"
      className="relative min-h-[100svh] w-full bg-[#0d0e11] overflow-hidden flex flex-col justify-between pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.45] pointer-events-none"
        style={{ backgroundImage: "url('/assets/gec1.jpg')" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0d0e11] pointer-events-none" />
      {/* Background ambient lighting & subtle geometric architectural grid */}
      <div className="absolute inset-0 bg-dark-radial pointer-events-none opacity-80" />
      <div className="absolute -top-32 right-1/4 w-96 h-96 bg-sunset/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

      {/* Main Hero Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO EDITORIAL INFORMATION */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center order-2 lg:order-1">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-sm bg-white/5 border border-white/10 w-fit mb-4">
              <span className="w-2 h-2 rounded-full bg-sunset animate-ping" />
              <span className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase font-semibold">
                CGIT RAIPUR
              </span>
              <span className="text-white/20">•</span>
              <span className="font-mono text-[10px] tracking-widest text-sunset uppercase">
                ANNUAL TECH FEST
              </span>
            </div>

            {/* Massive Display Title */}
            <div className="relative mb-3">
              <h1 className="font-display font-black text-5xl sm:text-6xl md:text-7xl xl:text-8xl tracking-tight text-white uppercase leading-[0.9]">
                AVESH
                <span className="block text-sunset font-extrabold text-4xl sm:text-5xl md:text-6xl xl:text-7xl tracking-tighter mt-1">
                  2026
                </span>
              </h1>
              
              {/* Subtle background ghost typography */}
              <span 
                className="absolute -top-6 -left-4 text-7xl sm:text-9xl font-display font-black text-stroke-silver opacity-10 pointer-events-none -z-10 select-none"
                aria-hidden="true"
              >
                AVESH
              </span>
            </div>

            {/* Poster Motto */}
            <div className="border-l-2 border-sunset pl-4 my-4 py-0.5 space-y-1">
              <p className="font-mono text-sm sm:text-base font-bold tracking-[0.22em] text-silver-200 uppercase">
                {FEST_METRICS.motto.primary.split(",")[0]}
              </p>
              <p className="font-mono text-sm sm:text-base font-bold tracking-[0.22em] text-sunset uppercase">
                {FEST_METRICS.motto.primary.split(",")[1]?.trim() || "THE MORE YOU CAN"}
              </p>
              <p className="font-sans text-xs sm:text-sm text-silver-400 tracking-wide mt-2">
                {FEST_METRICS.motto.sub}
              </p>
            </div>

            {/* Live Countdown Timer */}
            <div className="my-5 p-3.5 sm:p-4 rounded-sm bg-[#171717]/80 border border-white/10 backdrop-blur-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] tracking-[0.25em] text-silver-400 uppercase flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-sunset" />
                  KICKOFF IN:
                </span>
                <span className="font-mono text-[10px] tracking-wider text-sunset">
                  OCT 28-30, 2026
                </span>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="p-2 bg-[#0e1014] rounded-sm border border-white/5">
                  <span className="block font-mono font-bold text-xl sm:text-2xl text-white">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>
                  <span className="block font-mono text-[9px] tracking-widest text-silver-500 uppercase mt-0.5">
                    DAYS
                  </span>
                </div>
                <div className="p-2 bg-[#0e1014] rounded-sm border border-white/5">
                  <span className="block font-mono font-bold text-xl sm:text-2xl text-white">
                    {String(timeLeft.hours).padStart(2, "0")}
                  </span>
                  <span className="block font-mono text-[9px] tracking-widest text-silver-500 uppercase mt-0.5">
                    HOURS
                  </span>
                </div>
                <div className="p-2 bg-[#0e1014] rounded-sm border border-white/5">
                  <span className="block font-mono font-bold text-xl sm:text-2xl text-white">
                    {String(timeLeft.minutes).padStart(2, "0")}
                  </span>
                  <span className="block font-mono text-[9px] tracking-widest text-silver-500 uppercase mt-0.5">
                    MINS
                  </span>
                </div>
                <div className="p-2 bg-[#0e1014] rounded-sm border border-white/5">
                  <span className="block font-mono font-bold text-xl sm:text-2xl text-sunset">
                    {String(timeLeft.seconds).padStart(2, "0")}
                  </span>
                  <span className="block font-mono text-[9px] tracking-widest text-silver-500 uppercase mt-0.5">
                    SECS
                  </span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-2">
              <a
                href="#events"
                onClick={() => soundFx.playClick()}
                className="group relative px-7 py-3.5 bg-sunset hover:bg-sunset-hover text-white font-mono text-xs font-bold tracking-[0.2em] rounded-sm clip-diagonal-btn shadow-[0_0_30px_rgba(255,100,46,0.45)] transition-all flex items-center gap-2"
              >
                <span>EXPLORE EVENTS</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenRegister();
                }}
                className="px-6 py-3.5 bg-transparent hover:bg-white/5 text-silver-200 hover:text-white border border-white/20 hover:border-sunset/70 font-mono text-xs font-bold tracking-[0.2em] rounded-sm clip-diagonal-btn-rev transition-all flex items-center gap-2"
              >
                <Terminal className="w-3.5 h-3.5 text-sunset" />
                <span>REGISTER NOW</span>
              </button>
            </div>

            {/* Geo & Metrics Footer Metadata */}
            <div className="flex flex-wrap items-center gap-4 text-silver-500 font-mono text-[10px] tracking-wider mt-6 pt-4 border-t border-white/5">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-sunset" />
                {FEST_METRICS.coordinates}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Trophy className="w-3 h-3 text-amber" />
                {FEST_METRICS.totalPrizePool} POOL
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-silver-400" />
                {FEST_METRICS.eventsCount} EVENTS
              </span>
            </div>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: CENTRAL DIAGONAL POSTER ARTWORK */}
          {/* ========================================================= */}
          <div className="lg:col-span-6 xl:col-span-7 flex justify-center items-center order-1 lg:order-2 py-4">
            <DiagonalArtwork onOpenPosterModal={onOpenPoster} />
          </div>

        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="relative z-10 flex justify-center items-center mt-6">
        <a
          href="#about"
          onClick={() => soundFx.playClick()}
          className="flex flex-col items-center gap-1.5 text-silver-500 hover:text-sunset transition-colors group"
        >
          <span className="font-mono text-[9px] tracking-[0.3em] uppercase">
            SCROLL TO EXPLORE
          </span>
          <ArrowDown className="w-4 h-4 animate-bounce text-sunset" />
        </a>
      </div>
    </section>
  );
};
