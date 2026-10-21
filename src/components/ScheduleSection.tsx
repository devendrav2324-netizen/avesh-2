import React, { useState } from "react";
import { SCHEDULE_DATA } from "../data/festivalData";
import { soundFx } from "../utils/audio";
import { Calendar, Clock, MapPin, User, ChevronRight } from "lucide-react";

export const ScheduleSection: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<1 | 2 | 3 | 4>(1);

  const daysInfo = [
    { 
      day: 1 as const, 
      label: "DAY 01 · 27 OCT", 
      date: "TUESDAY · 10 AM – 4 PM", 
      title: "Technical Day 1",
      theme: "Hack4Community Sprint, PromptMe, Quiz & Robo Soccer" 
    },
    { 
      day: 2 as const, 
      label: "DAY 02 · 28 OCT", 
      date: "WEDNESDAY · 10 AM – 4 PM", 
      title: "Technical Day 2",
      theme: "Founder's Forge, Truss-Craft, E-Sports & Robo Sumo" 
    },
    { 
      day: 3 as const, 
      label: "DAY 03 · 29 OCT", 
      date: "THURSDAY · 3 PM – 8 PM", 
      title: "Cultural Day",
      theme: "Solo & Group Singing, Solo & Group Dance Competitions" 
    },
    { 
      day: 4 as const, 
      label: "DAY 04 · 30 OCT", 
      date: "FRIDAY · 5 PM ONWARDS", 
      title: "Grand Artist Night",
      theme: "Auditorium Highlights, Live Celebrity Artist Show & DJ Night" 
    },
  ];

  const currentDayEvents = SCHEDULE_DATA.filter((s) => s.day === selectedDay);

  return (
    <section id="schedule" className="relative py-24 sm:py-32 bg-[#0d0e11] border-t border-white/5 overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center opacity-15 pointer-events-none"
        style={{ backgroundImage: "url('/assets/gec10.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0e11]/85 via-[#0d0e11]/90 to-[#0d0e11]/85 pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-3">
              <Calendar className="w-3.5 h-3.5 text-sunset" />
              <span className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
                SECTION 04 // TIMELINE
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              EVENT <span className="text-sunset">SCHEDULE</span>.
            </h2>
            <p className="font-sans text-sm sm:text-base text-silver-400 mt-2 max-w-xl">
              Four continuous days (27/10/26 – 30/10/26) of non-stop innovation, competitive engineering, and celebrations at CGIT Raipur.
            </p>
          </div>

          {/* Download Full Schedule Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              alert("Full PDF Schedule with lab assignments will be released 48 hours prior to the festival.");
            }}
            className="px-4 py-2.5 rounded-sm bg-white/5 hover:bg-white/10 text-silver-300 hover:text-white border border-white/10 font-mono text-xs tracking-wider transition-all"
          >
            DOWNLOAD ITINERARY (PDF)
          </button>
        </div>

        {/* Day Selector Tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {daysInfo.map((item) => (
            <button
              key={item.day}
              onClick={() => {
                soundFx.playClick();
                setSelectedDay(item.day);
              }}
              className={`p-5 text-left rounded-sm border transition-all duration-300 flex flex-col justify-between clip-diagonal-card ${
                selectedDay === item.day
                  ? "-translate-y-2 scale-[1.03] z-10 bg-[#1f2229] border-sunset text-white shadow-[0_0_28px_rgba(255,100,46,0.5)]"
                  : "bg-[#171717] border-white/5 text-silver-400 hover:text-white hover:border-white/20"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`font-mono text-xs font-bold tracking-widest ${selectedDay === item.day ? "text-sunset" : "text-silver-500"}`}>
                    // {item.label}
                  </span>
                  <span className="font-mono text-[11px] text-silver-400">
                    {item.date}
                  </span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-silver-300 font-medium">
                  {item.theme}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono">
                <span className={selectedDay === item.day ? "text-sunset" : "text-silver-500"}>
                  {selectedDay === item.day ? "● CURRENT VIEW" : "CLICK TO VIEW"}
                </span>
                <ChevronRight className={`w-4 h-4 ${selectedDay === item.day ? "text-sunset" : "text-silver-600"}`} />
              </div>
            </button>
          ))}
        </div>

        {/* Timeline Items List */}
        <div className="space-y-4">
          {currentDayEvents.map((item) => (
            <div
              key={item.id}
              className="group p-5 sm:p-6 bg-[#171717] rounded-sm border border-white/5 hover:border-sunset/40 transition-all duration-200 flex flex-col lg:flex-row lg:items-center justify-between gap-4"
            >
              {/* Left: Time and Category */}
              <div className="flex items-center gap-4 lg:w-72 shrink-0">
                <div className="p-2.5 rounded-sm bg-white/5 text-sunset font-mono text-xs font-bold flex items-center gap-1.5 border border-white/5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{item.time}</span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono tracking-wider uppercase bg-white/5 text-silver-400 border border-white/5">
                  {item.category}
                </span>
              </div>

              {/* Center: Title & Host */}
              <div className="flex-1">
                <h4 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-sunset transition-colors">
                  {item.title}
                </h4>
                {item.speakerOrHost && (
                  <p className="font-sans text-xs text-amber mt-1 flex items-center gap-1.5">
                    <User className="w-3 h-3 text-amber" />
                    <span>{item.speakerOrHost}</span>
                  </p>
                )}
              </div>

              {/* Right: Venue */}
              <div className="flex items-center gap-2 lg:w-60 justify-start lg:justify-end text-silver-400 font-mono text-xs">
                <MapPin className="w-3.5 h-3.5 text-sunset shrink-0" />
                <span className="truncate">{item.venue}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
