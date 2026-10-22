import React, { useState, useEffect } from "react";
import { soundFx } from "../utils/audio";
import { Volume2, VolumeX, Menu, X, House, Info, Trophy, Compass, CalendarDays, Handshake, Mail } from "lucide-react";

interface HeaderProps {
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [scrolled, setScrolled] = useState(false);
  const [audioActive, setAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const navLinks = [
    { label: "HOME", href: "#hero", icon: House, code: "01" },
    { label: "ABOUT", href: "#about", icon: Info, code: "02" },
    { label: "EVENTS", href: "#events", icon: Trophy, code: "03" },
    { label: "EXPERIENCE", href: "#explore", icon: Compass, code: "04" },
    { label: "SCHEDULE", href: "#schedule", icon: CalendarDays, code: "05" },
    { label: "SPONSORS", href: "#sponsors", icon: Handshake, code: "06" },
    { label: "CONTACT", href: "#footer", icon: Mail, code: "07" },
  ];

  useEffect(() => {
    const updateScrolledState = () => setScrolled(window.scrollY > 40);
    updateScrolledState();
    window.addEventListener("scroll", updateScrolledState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolledState);
  }, []);

  const toggleSound = () => {
    const newState = soundFx.toggle();
    setAudioActive(newState);
  };

  const handleSectionClick = (href: string) => {
    setActiveSection(href);
    soundFx.playClick();
  };

  return (
    <>
      <header
        className={`header-mirror fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-2.5 shadow-2xl"
            : "py-3 sm:py-3.5 shadow-lg"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top Line: Brand (AVESH 2026) on Left, Action Bar on Right */}
          <div className="flex items-center justify-between pb-2.5">
            {/* Logo Brand on Left */}
            <a
              href="#hero"
              onClick={() => handleSectionClick("#hero")}
              className="group flex items-center gap-2.5 sm:gap-3.5"
            >
              <img
                src="/assets/avesh-emblem-transparent.png"
                alt=""
                aria-hidden="true"
                className="header-brand-logo h-10 w-14 object-contain sm:h-11 sm:w-16"
              />

              {/* Title & Institutional Tag */}
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-display font-black tracking-wider text-xl sm:text-2xl text-white">
                    AVESH<span className="text-sunset ml-1">2026</span>
                  </span>
                </div>
                <span className="font-mono text-[10px] tracking-widest text-silver-400 uppercase -mt-0.5">
                  CGIT RAIPUR
                </span>
              </div>
            </a>

            {/* Right Action Bar */}
            <div className="flex items-center gap-2.5 sm:gap-3">
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
                className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-sm border border-sunset font-mono text-xs font-bold tracking-[0.2em] text-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,100,46,0.5)] clip-diagonal-btn"
              >
                {/* Sliding fill background */}
                <span className="absolute inset-0 bg-sunset translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
                <span className="relative z-10 flex items-center">
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

          {/* Dedicated Navigation Bar: Down the Header Line (Avesh 2026) */}
          <nav aria-label="Main navigation" className="header-mirror-nav hidden lg:flex items-stretch justify-between gap-1 pt-2">
            {navLinks.map(({ label, href, icon: Icon, code }) => (
              <a
                key={label}
                href={href}
                aria-current={activeSection === href ? "location" : undefined}
                onClick={() => handleSectionClick(href)}
                className={`gaming-nav-link group ${activeSection === href ? "is-active" : ""}`}
              >
                <span className="gaming-nav-code">{code}</span>
                <Icon className="gaming-nav-icon" aria-hidden="true" />
                <span className="gaming-nav-label">
                  {label}
                </span>
                <span className="gaming-nav-indicator" />
              </a>
            ))}
          </nav>

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
                  handleSectionClick(link.href);
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
