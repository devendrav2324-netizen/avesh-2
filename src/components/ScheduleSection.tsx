import React, { useEffect, useState } from "react";
import { SCHEDULE_DATA } from "../data/festivalData";
import { Calendar, Clock, MapPin, User, ChevronDown } from "lucide-react";
import { useSectionScrollFade } from "../hooks/useSectionScrollFade";

const DAYS = [
  { day: 1 as const, date: "27 OCTOBER", title: "TECHNICAL DAY 01", hours: "10 AM — 4 PM" },
  { day: 2 as const, date: "28 OCTOBER", title: "TECHNICAL DAY 02", hours: "10 AM — 4 PM" },
  { day: 3 as const, date: "29 OCTOBER", title: "CULTURAL DAY", hours: "3 PM — 8 PM" },
  { day: 4 as const, date: "30 OCTOBER", title: "GRAND ARTIST NIGHT", hours: "5 PM ONWARDS" },
];

const clamp = (value: number) => Math.min(1, Math.max(0, value));

export const ScheduleSection: React.FC = () => {
  const { sectionRef, isVisible } = useSectionScrollFade();
  const [progress, setProgress] = useState(0);
  const activePosition = progress * (DAYS.length - 1);
  const activeDay = Math.min(DAYS.length - 1, Math.round(activePosition));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const updateProgress = () => {
      const scrollDistance = section.offsetHeight - window.innerHeight;
      const scrolled = Math.max(0, -section.getBoundingClientRect().top);
      setProgress(scrollDistance > 0 ? clamp(scrolled / scrollDistance) : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <section
      id="schedule"
      ref={sectionRef}
      className="relative border-t border-white/5 bg-[#0d0e11]"
      style={{ height: `${DAYS.length * 100}svh` }}
    >
      <div className={`section-scroll-fade sticky top-0 flex h-[100svh] flex-col overflow-hidden ${isVisible ? "is-visible" : ""}`}>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-15"
          style={{ backgroundImage: "url('/assets/gec10.jpeg')" }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0d0e11]/90 via-[#0d0e11]/90 to-[#0d0e11]/95" />
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />

        <header className="relative z-10 mx-auto flex w-full max-w-7xl items-end justify-between gap-6 px-4 pb-4 pt-28 sm:px-6 sm:pb-6 sm:pt-32 lg:px-8">
          <div>
            <div className="mb-2 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1">
              <Calendar className="h-3.5 w-3.5 text-sunset" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-silver-300 sm:text-xs">
                SECTION 04 // TIMELINE
              </span>
            </div>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
              EVENT <span className="text-sunset">SCHEDULE</span>.
            </h2>
            <p className="mt-2 hidden max-w-xl text-sm text-silver-400 sm:block">
              Four days of innovation, competition, and celebration at CGIT Raipur.
            </p>
          </div>
          <div className="hidden shrink-0 items-center gap-2 pb-1 font-mono text-[10px] uppercase tracking-widest text-silver-400 sm:flex">
            <ChevronDown className="h-4 w-4 animate-bounce text-sunset" />
            Keep scrolling
          </div>
        </header>

        <div className="relative z-10 mx-auto mb-3 flex w-full max-w-7xl items-center gap-3 px-4 sm:mb-5 sm:px-6 lg:px-8">
          <div className="relative h-px flex-1 bg-white/10">
            <div className="absolute inset-y-0 left-0 bg-sunset" style={{ width: `${progress * 100}%` }} />
          </div>
          <span className="min-w-16 text-right font-mono text-[10px] tracking-widest text-sunset">
            DAY 0{activeDay + 1} / 0{DAYS.length}
          </span>
        </div>

        <div className="schedule-panels relative z-10 flex min-h-0 w-full flex-1 items-center">
          <div
            className="schedule-panels-track flex h-full will-change-transform"
            style={{ transform: `translate3d(-${progress * (DAYS.length - 1) * 25}%, 0, 0)` }}
          >
            {DAYS.map((day, index) => {
              const dayProgress = clamp(1 - Math.abs(activePosition - index));
              const events = SCHEDULE_DATA.filter((event) => event.day === day.day);

              return (
                <article
                  key={day.day}
                  aria-label={`${day.title}, ${day.date}`}
                  className="schedule-day-panel flex h-full shrink-0 flex-col justify-center px-4 sm:px-8 lg:px-12"
                >
                  <div className="mx-auto w-full max-w-5xl">
                    <div
                      className={`mb-4 transition-all duration-500 sm:mb-6 ${
                        dayProgress > 0.15 ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                      }`}
                    >
                      <p className="font-mono text-[10px] font-bold tracking-[0.25em] text-sunset sm:text-xs">
                        DAY 0{day.day} <span className="text-silver-500">/</span> {day.date}
                        <span className="ml-3 text-silver-400">{day.hours}</span>
                      </p>
                      <h3 className="mt-1 font-display text-2xl font-extrabold text-white sm:text-4xl">
                        {day.title}
                      </h3>
                    </div>

                    <div className="schedule-event-list space-y-2 sm:space-y-2.5">
                      {events.map((event, eventIndex) => {
                        const revealAt = ((eventIndex + 1) / events.length) * 0.72;
                        const visible = dayProgress >= revealAt;

                        return (
                          <div
                            key={event.id}
                            style={{ transitionDelay: visible ? `${eventIndex * 75}ms` : "0ms" }}
                            className={`flex flex-col gap-1.5 border border-white/10 bg-[#171717]/95 px-3 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.24)] transition-all duration-500 sm:flex-row sm:items-center sm:gap-4 sm:px-4 ${
                              visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
                            }`}
                          >
                            <div className="flex shrink-0 items-center gap-2 sm:w-44">
                              <span className="flex items-center gap-1.5 font-mono text-[10px] font-bold text-sunset sm:text-[11px]">
                                <Clock className="h-3 w-3" />
                                {event.time}
                              </span>
                              <span className="hidden border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-wider text-silver-400 md:inline">
                                {event.category}
                              </span>
                            </div>

                            <div className="min-w-0 flex-1">
                              <h4 className="font-display text-xs font-bold text-white sm:text-sm">
                                {event.title}
                              </h4>
                              {event.speakerOrHost && (
                                <p className="mt-0.5 flex items-center gap-1 text-[10px] text-amber">
                                  <User className="h-3 w-3" />
                                  {event.speakerOrHost}
                                </p>
                              )}
                            </div>

                            <div className="flex items-center gap-1.5 font-mono text-[9px] text-silver-400 sm:w-48 sm:justify-end sm:text-[10px]">
                              <MapPin className="h-3 w-3 shrink-0 text-sunset" />
                              <span className="truncate">{event.venue}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
