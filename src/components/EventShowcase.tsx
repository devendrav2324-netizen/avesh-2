import React, { useState } from "react";
import { TechEvent, EventCategory } from "../types";
import { EVENTS_DATA } from "../data/festivalData";
import { soundFx } from "../utils/audio";
import { Trophy, Users, Clock, MapPin, ArrowUpRight, Sparkles, Filter } from "lucide-react";

interface EventShowcaseProps {
  onSelectEvent: (event: TechEvent) => void;
  onRegisterEvent: (event: TechEvent) => void;
}

export const EventShowcase: React.FC<EventShowcaseProps> = ({ onSelectEvent, onRegisterEvent }) => {
  const [activeCategory, setActiveCategory] = useState<EventCategory>("all");
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  const categories: { key: EventCategory; label: string }[] = [
    { key: "all", label: "ALL EVENTS" },
    { key: "coding", label: "CODING & HACK" },
    { key: "robotics", label: "ROBOTICS" },
    { key: "gaming", label: "ESPORTS" },
    { key: "creative", label: "CREATIVE & R&D" },
    { key: "cultural", label: "CULTURAL & STAGE" },
  ];

  const filteredEvents = activeCategory === "all" 
    ? EVENTS_DATA 
    : EVENTS_DATA.filter((e) => e.category === activeCategory);

  return (
    <section id="events" className="relative py-24 sm:py-32 bg-[#0d0e11] border-t border-white/5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none"
        style={{ backgroundImage: "url('/assets/gec10.jpeg')" }}
      />
      <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-[#0e1014] to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-b from-transparent to-[#0e1014] pointer-events-none" />
      <div className="absolute inset-0 bg-grain opacity-25 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-sm mb-3">
              <Trophy className="w-3.5 h-3.5 text-sunset" />
              <span className="font-mono text-xs tracking-[0.25em] text-silver-300 uppercase">
                SECTION 02 // TOURNAMENT ARENA
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              FEATURED <span className="text-sunset">COMPETITIONS</span>.
            </h2>
            <p className="font-sans text-sm sm:text-base text-silver-400 mt-2 max-w-xl">
              24+ high-stakes engineering battles, 36-hour hackathons, combat robotics, and cultural stages. Choose your battlefield.
            </p>
          </div>

          <div className="text-right hidden md:block">
            <span className="font-mono text-xs tracking-widest text-silver-400 block uppercase">
              // TOTAL CASH PRIZES
            </span>
            <span className="font-display font-black text-3xl text-sunset">
              ₹2,50,000+
            </span>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          <Filter className="w-4 h-4 text-silver-500 mr-1 shrink-0" />
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                soundFx.playClick();
                setActiveCategory(cat.key);
              }}
              className={`px-4 py-2 rounded-sm font-mono text-xs tracking-wider uppercase whitespace-nowrap transition-all duration-200 clip-diagonal-badge ${
                activeCategory === cat.key
                  ? "bg-sunset text-white font-bold shadow-[0_0_15px_rgba(255,100,46,0.5)]"
                  : "bg-white/5 text-silver-400 hover:text-white hover:bg-white/10 border border-white/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event) => (
            <div
              key={event.id}
              className={`group relative bg-[#171717] rounded-sm border transition-all duration-300 flex flex-col justify-between overflow-hidden clip-diagonal-card hover:shadow-[0_15px_40px_rgba(0,0,0,0.6)] ${
                selectedEventId === event.id ? "-translate-y-2 scale-[1.03] z-10 shadow-[0_20px_45px_rgba(255,100,46,0.2)]" : ""
              } ${
                event.featured 
                  ? "border-sunset/40 hover:border-sunset" 
                  : "border-white/10 hover:border-white/30"
              }`}
            >
              {/* Featured Badge */}
              {event.featured && (
                <div className="absolute top-0 right-0 bg-sunset px-3 py-0.5 text-[9px] font-mono font-bold tracking-widest text-white clip-diagonal-badge z-20">
                  FLAGSHIP
                </div>
              )}

              {/* Card Header & Content */}
              <div className="p-6 sm:p-7">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 text-[10px] font-mono font-semibold tracking-wider uppercase bg-white/5 text-silver-300 border border-white/10 rounded">
                    {event.categoryLabel}
                  </span>
                  <span className="font-mono text-xs text-silver-400">
                    {event.day}
                  </span>
                </div>

                <h3 className="font-display font-extrabold text-2xl text-white group-hover:text-sunset transition-colors leading-tight mb-2">
                  {event.title}
                </h3>

                <p className="font-mono text-xs text-amber mb-3 tracking-wide">
                  {event.tagline}
                </p>

                <p className="font-sans text-xs sm:text-sm text-silver-400 line-clamp-3 leading-relaxed mb-6">
                  {event.description}
                </p>

                {/* Key metadata badges */}
                <div className="space-y-2 py-4 border-y border-white/5 font-mono text-xs text-silver-300">
                  <div className="flex items-center justify-between">
                    <span className="text-silver-500 flex items-center gap-1.5">
                      <Trophy className="w-3.5 h-3.5 text-amber" />
                      Prize Pool
                    </span>
                    <span className="font-bold text-white text-sm">
                      {event.prizePool}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-silver-500 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-sunset" />
                      Team Size
                    </span>
                    <span>{event.teamSize}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-silver-500 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-silver-400" />
                      Schedule
                    </span>
                    <span className="text-[11px] truncate max-w-[170px]">{event.scheduleTime}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-silver-500 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-silver-400" />
                      Venue
                    </span>
                    <span className="text-[11px] truncate max-w-[170px]">{event.venue}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-6 bg-[#121418] border-t border-white/5 flex items-center gap-3">
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedEventId(event.id);
                    onSelectEvent(event);
                  }}
                  className="flex-1 py-2.5 px-3 rounded-sm bg-white/5 hover:bg-white/10 text-silver-300 hover:text-white border border-white/10 font-mono text-xs tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <span>RULES & SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-silver-400" />
                </button>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedEventId(event.id);
                    onRegisterEvent(event);
                  }}
                  className="py-2.5 px-4 rounded-sm bg-sunset hover:bg-sunset-hover text-white font-mono text-xs font-bold tracking-wider clip-diagonal-btn transition-all flex items-center justify-center gap-1 shadow-md hover:shadow-sunset/40"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>REGISTER</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
