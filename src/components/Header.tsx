import React, { useState, useEffect } from "react";
import { soundFx } from "../utils/audio";
import { Volume2, VolumeX, Menu, X, Image as ImageIcon, Sparkles } from "lucide-react";

interface HeaderProps {
  onOpenRegister: () => void;
  onOpenPoster: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister, onOpenPoster }) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setAudioActive(newState);
  };

  const navLinks = [
    { label: "HOME", href: "#hero" },
    { label: "ABOUT", href: "#about" },
    { label: "EVENTS", href: "#events" },
    { label: "EXPERIENCE", href: "#explore" },
    { label: "SCHEDULE", href: "#schedule" },
    { label: "SPONSORS", href: "#sponsors" },
    { label: "CONTACT", href: "#footer" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0d0e11]/90 backdrop-blur-md py-3 border-b border-white/10 shadow-2xl"
            : "bg-gradient-to-b from-[#0d0e11]/90 via-[#0d0e11]/40 to-transparent py-5 sm:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand on Left */}
          <a
            href="#hero"
            onClick={() => soundFx.playClick()}
            className="group flex items-center gap-3.5"
          >
            {/* Geometric A Icon */}
            <div className="relative w-10 h-10 bg-[#171717] border border-white/10 flex items-center justify-center rounded-sm overflow-hidden group-hover:border-sunset transition-colors duration-300">
              <div className="absolute top-0 right-0 w-3 h-3 bg-sunset/20 clip-diagonal-btn" />
              <span className="font-display font-black text-xl text-white group-hover:text-sunset transition-colors">
                A
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-sunset scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
            </div>

            {/* Title & Institutional Tag */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-display font-black tracking-wider text-xl sm:text-2xl text-white">
                  AVESH<span className="text-sunset ml-1">2026</span>
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] font-mono tracking-widest uppercase bg-sunset/15 text-sunset border border-sunset/30 rounded">
                  TECH FEST
                </span>
              </div>
              <span className="font-mono text-[10px] tracking-widest text-silver-400 uppercase -mt-0.5">
                CGIT RAIPUR
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="relative font-mono text-xs tracking-[0.2em] text-silver-400 hover:text-white transition-colors duration-200 py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-sunset scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center gap-3">
            
            {/* View Reference Poster Button */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenPoster();
              }}
              title="Compare with original design inspiration"
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-white/5 hover:bg-white/10 text-silver-300 hover:text-white border border-white/10 hover:border-sunset/50 font-mono text-xs tracking-wider transition-all"
            >
              <ImageIcon className="w-3.5 h-3.5 text-sunset" />
              <span className="hidden xl:inline">REFERENCE</span> POSTER
            </button>

            {/* Audio Ambient Synth Toggle */}
            <button
              onClick={toggleSound}
              title={audioActive ? "Mute Ambient Sound" : "Enable Futuristic Audio Experience"}
              className={`p-2 rounded-sm border transition-all duration-300 ${
                audioActive
                  ? "bg-sunset/20 border-sunset text-sunset"
                  : "bg-white/5 border-white/10 text-silver-400 hover:text-white hover:border-white/20"
              }`}
            >
              {audioActive ? (
                <div className="flex items-center gap-1.5">
                  <Volume2 className="w-4 h-4 text-sunset animate-pulse" />
                  <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider text-sunset">
                    SFX ON
                  </span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5">
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline-block font-mono text-[10px] tracking-wider">
                    SFX
                  </span>
                </div>
              )}
            </button>

            {/* Outlined Orange "REGISTER NOW" CTA Button with diagonal styling */}
            <button
              onClick={() => {
                soundFx.playClick();
                onOpenRegister();
              }}
              className="relative group overflow-hidden px-5 py-2 rounded-sm border border-sunset font-mono text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,100,46,0.5)] clip-diagonal-btn"
            >
              {/* Sliding fill background */}
              <span className="absolute inset-0 bg-sunset translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-sunset group-hover:text-white transition-colors" />
                <span>REGISTER NOW</span>
              </span>
            </button>

            {/* Mobile Menu Icon */}
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="lg:hidden p-2 rounded-sm bg-white/5 border border-white/10 text-silver-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-[#0d0e11]/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 animate-fadeIn">
          <nav className="flex flex-col gap-5">
            <span className="font-mono text-xs tracking-widest text-sunset uppercase">
              // NAVIGATION // CGIT RAIPUR
            </span>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => {
                  soundFx.playClick();
                  setMobileMenuOpen(false);
                }}
                className="font-display font-bold text-2xl text-silver-200 hover:text-sunset transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-white/10 pt-6">
            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
                onOpenPoster();
              }}
              className="w-full py-3 rounded-sm bg-white/5 border border-white/10 font-mono text-xs tracking-widest text-silver-300 flex items-center justify-center gap-2"
            >
              <ImageIcon className="w-4 h-4 text-sunset" />
              VIEW DESIGN INSPIRATION POSTER
            </button>

            <button
              onClick={() => {
                soundFx.playClick();
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3.5 bg-sunset text-white font-mono font-bold text-sm tracking-widest rounded-sm clip-diagonal-btn text-center shadow-lg"
            >
              REGISTER FOR AVESH 2026
            </button>
          </div>
        </div>
      )}
    </>
  );
};
