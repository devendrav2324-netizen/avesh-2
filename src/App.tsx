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
import { EventDetailModal } from "./components/EventDetailModal";
import { RegistrationModal } from "./components/RegistrationModal";
import { PosterModal } from "./components/PosterModal";
import { TechEvent } from "./types";
import { soundFx } from "./utils/audio";

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [introStep, setIntroStep] = useState(1);
  const [selectedEventForDetail, setSelectedEventForDetail] = useState<TechEvent | null>(null);
  const [selectedEventForRegister, setSelectedEventForRegister] = useState<TechEvent | null>(null);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);
  const [posterModalOpen, setPosterModalOpen] = useState(false);

  // Cinematic Intro Sequence
  useEffect(() => {
    // Check if user has already visited or prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIntroFinished(true);
      return;
    }

    const timer1 = setTimeout(() => setIntroStep(2), 500); // Reveal logo & ambient light
    const timer2 = setTimeout(() => setIntroStep(3), 1000); // Geometric slash reveal
    const timer3 = setTimeout(() => {
      setIntroFinished(true);
    }, 1800); // Complete & settle

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  const skipIntro = () => {
    setIntroFinished(true);
    soundFx.playClick();
  };

  const handleOpenRegister = (event?: TechEvent) => {
    if (event) {
      setSelectedEventForRegister(event);
    } else {
      setSelectedEventForRegister(null);
    }
    setRegisterModalOpen(true);
  };

  const handleSelectEvent = (event: TechEvent) => {
    setSelectedEventForDetail(event);
  };

  return (
    <div className="relative min-h-screen bg-[#0d0e11] text-[#f2f4f8] selection:bg-[#FF642E] selection:text-white overflow-x-hidden font-sans">
      
      {/* ======================================================== */}
      {/* CINEMATIC INTRO OVERLAY */}
      {/* ======================================================== */}
      {!introFinished && (
        <div 
          onClick={skipIntro}
          className="fixed inset-0 z-50 bg-[#08090b] flex flex-col items-center justify-center cursor-pointer transition-opacity duration-700 select-none"
        >
          {/* Ambient lighting sweep */}
          <div className="absolute inset-0 bg-dark-radial opacity-60" />
          <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

          {/* Central Logo & Geometric Slash Reveal */}
          <div className="relative z-10 text-center flex flex-col items-center">
            
            {/* Animated Brand Mark */}
            <div 
              className={`w-16 h-16 sm:w-20 sm:h-20 bg-[#171717] border border-sunset/50 rounded-sm clip-diagonal-btn flex items-center justify-center transition-all duration-700 ${
                introStep >= 1 ? "scale-100 opacity-100" : "scale-75 opacity-0"
              }`}
            >
              <span className="font-display font-black text-3xl sm:text-4xl text-white">
                A
              </span>
            </div>

            {/* Typography */}
            <div className={`mt-6 transition-all duration-700 ${introStep >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <h1 className="font-display font-black text-4xl sm:text-6xl text-white tracking-widest uppercase">
                AVESH<span className="text-sunset ml-2">2026</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm tracking-[0.3em] text-silver-400 mt-2 uppercase">
                CGIT RAIPUR // ANNUAL TECH FEST
              </p>
            </div>

            {/* Motto */}
            <div className={`mt-5 transition-all duration-700 delay-150 ${introStep >= 3 ? "opacity-100" : "opacity-0"}`}>
              <p className="font-mono text-xs tracking-[0.35em] text-sunset uppercase">
                THE MORE YOU LEARN, THE MORE YOU CAN.
              </p>
            </div>

            {/* Skip hint */}
            <span className="mt-8 font-mono text-[10px] tracking-widest text-silver-600 uppercase animate-pulse">
              [ CLICK ANYWHERE TO ENTER FEST ]
            </span>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MAIN APPLICATION SECTIONS */}
      {/* ======================================================== */}
      <Header 
        onOpenRegister={() => handleOpenRegister()} 
        onOpenPoster={() => setPosterModalOpen(true)}
      />

      <main>
        <HeroSection 
          onOpenRegister={() => handleOpenRegister()} 
          onOpenPoster={() => setPosterModalOpen(true)}
        />

        <AboutSection />

        <EventShowcase 
          onSelectEvent={handleSelectEvent}
          onRegisterEvent={(ev) => handleOpenRegister(ev)}
        />

        <ExploreExperience />

        <ScheduleSection />

        <SponsorsSection />

        <RegistrationCTA 
          onOpenRegister={() => handleOpenRegister()}
        />
      </main>

      <Footer />

      {/* ======================================================== */}
      {/* MODALS */}
      {/* ======================================================== */}
      {selectedEventForDetail && (
        <EventDetailModal
          event={selectedEventForDetail}
          onClose={() => setSelectedEventForDetail(null)}
          onRegister={(ev) => {
            setSelectedEventForDetail(null);
            handleOpenRegister(ev);
          }}
        />
      )}

      {registerModalOpen && (
        <RegistrationModal
          initialEvent={selectedEventForRegister}
          onClose={() => setRegisterModalOpen(false)}
        />
      )}

      {posterModalOpen && (
        <PosterModal
          onClose={() => setPosterModalOpen(false)}
        />
      )}

    </div>
  );
};

export default App;
