import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { EventShowcase } from "./components/EventShowcase";
import { ExploreExperience } from "./components/ExploreExperience";
import { ScheduleSection } from "./components/ScheduleSection";
import { SponsorsSection } from "./components/SponsorsSection";
import { RegistrationCTA } from "./components/RegistrationCTA";
import { Footer } from "./components/Footer";
import { soundFx } from "./utils/audio";

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);

  // Show the festival emblem before revealing the page.
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(
      () => setIntroFinished(true),
      prefersReducedMotion ? 1200 : 2600,
    );
    return () => window.clearTimeout(timer);
  }, []);

  const skipIntro = () => {
    setIntroFinished(true);
    soundFx.playClick();
  };

  const handleOpenRegister = () => {
    document.getElementById("events")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#0d0e11] font-sans text-[#f2f4f8] selection:bg-[#FF642E] selection:text-white">
      
      {/* ======================================================== */}
      {/* CINEMATIC INTRO OVERLAY */}
      {/* ======================================================== */}
      {!introFinished && (
        <button
          onClick={skipIntro}
          type="button"
          aria-label="Skip intro and enter AVESH"
          className="fixed inset-0 z-50 flex cursor-pointer items-center justify-center overflow-hidden border-0 bg-black p-8 transition-opacity duration-700 select-none"
        >
          <img
            src="/assets/avesh-emblem.png"
            alt="AVESH 2026 festival emblem and wordmark"
            className="intro-logo-reveal relative z-10 h-auto w-full max-w-4xl object-contain"
          />
        </button>
      )}

      {/* ======================================================== */}
      {/* MAIN APPLICATION SECTIONS */}
      {/* ======================================================== */}
      <Header />

      <main>
        <HeroSection 
          onOpenRegister={() => handleOpenRegister()} 
        />

        <AboutSection />

        <EventShowcase />

        <ExploreExperience />

        <ScheduleSection />

        <SponsorsSection />

        <RegistrationCTA 
          onOpenRegister={() => handleOpenRegister()}
        />
      </main>

      <Footer />

    </div>
  );
};

export default App;
