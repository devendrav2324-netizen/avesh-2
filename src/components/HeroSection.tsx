import React, { useEffect, useState } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { soundFx } from "../utils/audio";
import { HalftoneWordmarkFooter } from "./ui/halftone-wordmark-footer";
import { useSectionScrollFade } from "../hooks/useSectionScrollFade";

interface HeroSectionProps {
  onOpenRegister: () => void;
}

const FEST_START = new Date("2026-10-27T09:00:00+05:30").getTime();

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister }) => {
  const { sectionRef, isVisible } = useSectionScrollFade();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const difference = Math.max(0, FEST_START - Date.now());
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const interval = window.setInterval(updateCountdown, 1000);
    return () => window.clearInterval(interval);
  }, []);

  const countdownUnits = [
    { label: "DAYS", value: timeLeft.days },
    { label: "HOURS", value: timeLeft.hours },
    { label: "MINS", value: timeLeft.minutes },
    { label: "SECS", value: timeLeft.seconds },
  ];

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-[#0d0e11] px-4 pb-12 pt-32 sm:px-6 sm:pb-16 sm:pt-36"
    >
      <div aria-hidden="true" className="hero-tech-background pointer-events-none absolute inset-0">
        <svg
          className="hero-tech-circuit absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
        >
          <g className="hero-circuit-lines" stroke="currentColor" strokeWidth="1.5">
            <path d="M0 202h108l46 46h152l38 38h102" />
            <path d="M0 246h88l55 55h115l44 44h126" />
            <path d="M0 674h96l54-54h122l44-44h128" />
            <path d="M0 718h126l46-46h118l52-52h102" />
            <path d="M1440 202h-108l-46 46h-152l-38 38h-102" />
            <path d="M1440 246h-88l-55 55h-115l-44 44h-126" />
            <path d="M1440 674h-96l-54-54h-122l-44-44h-128" />
            <path d="M1440 718h-126l-46-46h-118l-52-52h-102" />
            <path d="M720 0v94l-38 38v72" />
            <path d="M720 900v-94l38-38v-72" />
          </g>
          <g className="hero-circuit-nodes" fill="currentColor">
            <circle cx="108" cy="202" r="4" />
            <circle cx="389" cy="334" r="4" />
            <circle cx="96" cy="674" r="4" />
            <circle cx="394" cy="618" r="4" />
            <circle cx="1332" cy="202" r="4" />
            <circle cx="1051" cy="334" r="4" />
            <circle cx="1344" cy="674" r="4" />
            <circle cx="1046" cy="618" r="4" />
            <circle cx="720" cy="94" r="4" />
            <circle cx="720" cy="806" r="4" />
          </g>
          <g className="hero-tech-orbits" stroke="currentColor">
            <circle cx="720" cy="450" r="292" strokeDasharray="2 12" />
            <circle cx="720" cy="450" r="326" strokeDasharray="68 190" />
          </g>
        </svg>
        <div className="hero-tech-core absolute left-1/2 top-1/2" />
        <div className="hero-tech-grain absolute inset-0" />
      </div>

      <div className={`section-scroll-fade relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center ${isVisible ? "is-visible" : ""}`}>
        <p className="mb-5 font-mono text-[10px] font-semibold uppercase tracking-[0.3em] text-silver-300 sm:text-xs">
          CGIT RAIPUR <span className="mx-2 text-sunset">/</span> ANNUAL TECH &amp; CULTURE FEST
        </p>

        <HalftoneWordmarkFooter />

        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-silver-300 sm:mt-8 sm:text-base">
          Four days of bold ideas, hands-on technology, fierce competition, and
          unforgettable performances—bringing the student community together
          at CGIT Raipur.
        </p>

        <div className="mt-8 w-full max-w-xl border-y border-white/10 py-5 sm:mt-10">
          <p className="mb-4 flex items-center justify-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-sunset sm:text-xs">
            <Calendar className="h-3.5 w-3.5" />
            27 — 30 October 2026
          </p>
          <div className="grid grid-cols-4 gap-2 sm:gap-6">
            {countdownUnits.map(({ label, value }) => (
              <div key={label}>
                <span className="block font-mono text-2xl font-bold tabular-nums text-white sm:text-3xl">
                  {String(value).padStart(2, "0")}
                </span>
                <span className="mt-1 block font-mono text-[9px] tracking-[0.2em] text-silver-500">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => {
            soundFx.playClick();
            onOpenRegister();
          }}
          className="mt-8 inline-flex items-center gap-3 bg-sunset px-7 py-3.5 font-mono text-xs font-bold tracking-[0.2em] text-white shadow-[0_0_30px_rgba(255,100,46,0.35)] transition-colors hover:bg-sunset-hover sm:mt-10"
        >
          REGISTER NOW
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
};
