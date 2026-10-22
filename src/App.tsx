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
import { TechEvent } from "./types";
import { soundFx } from "./utils/audio";

export const App: React.FC = () => {
  const [introFinished, setIntroFinished] = useState(false);
  const [selectedEventForDetail, setSelectedEventForDetail] = useState<TechEvent | null>(null);
  const [selectedEventForRegister, setSelectedEventForRegister] = useState<TechEvent | null>(null);
  const [registerModalOpen, setRegisterModalOpen] = useState(false);

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
      <Header 
        onOpenRegister={() => handleOpenRegister()} 
      />

      <main>
        <HeroSection 
          onOpenRegister={() => handleOpenRegister()} 
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

    </div>
  );
};

export default App;
