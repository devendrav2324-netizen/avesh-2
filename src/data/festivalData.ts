import { TechEvent, ScheduleItem, Sponsor } from "../types";

export const FEST_METRICS = {
  year: "2026",
  edition: "11TH EDITION",
  dates: "OCTOBER 28 - 30, 2026",
  location: "CGIT RAIPUR CAMPUS, CHHATTISGARH",
  coordinates: "21.2514° N, 81.6296° E",
  totalPrizePool: "₹2,50,000+",
  collegesExpected: "60+",
  attendees: "3,500+",
  eventsCount: "24+",
  motto: {
    primary: "THE MORE YOU LEARN, THE MORE YOU CAN.",
    sub: "ANNUAL TECH FEST — INNOVATE. BUILD. INSPIRE."
  }
};

export const EVENTS_DATA: TechEvent[] = [
  {
    id: "synapse-hackathon",
    title: "SYNAPSE 36",
    category: "coding",
    categoryLabel: "Flagship Hackathon",
    tagline: "36-Hour Continuous Architecture & Code Sprint",
    description: "Build cutting-edge solutions across AI/Agentic workflows, Web3 protocols, Smart City tech, and Open Innovation. Mentored by industry leads from top tech firms.",
    prizePool: "₹75,000",
    teamSize: "2 - 4 Members",
    entryFee: "FREE (Shortlist Based)",
    venue: "Main Computing Hub (Lab 3 & 4)",
    scheduleTime: "Day 1, 10:00 AM — Day 2, 10:00 PM",
    day: "Day 1",
    featured: true,
    highlights: [
      "Hardware dev kits & cloud credits provided",
      "Direct interview fast-tracks with hiring partners",
      "Round-the-clock redbull, pizza & caffeine stations"
    ],
    rules: [
      "All code must be authored inside the 36-hour sprint window.",
      "Pre-existing templates must be openly disclosed in README.",
      "Judging rubric: Technical depth (35%), Innovation (30%), UX (20%), Pitch (15%)."
    ]
  },
  {
    id: "robo-wars",
    title: "ROBO-WARS: CLASH OF TITANS",
    category: "robotics",
    categoryLabel: "Combat Robotics",
    tagline: "15kg & 30kg Armored Bot Destruction Arena",
    description: "Enter the reinforced steel arena with your pneumatic flippers, hardened spinning drums, and titanium wedge bots. Pure mechanical torque meets driver strategy.",
    prizePool: "₹45,000",
    teamSize: "3 - 5 Members",
    entryFee: "₹800 / Team",
    venue: "Central Open Arena (Ring Alpha)",
    scheduleTime: "Day 2, 02:00 PM",
    day: "Day 2",
    featured: true,
    highlights: [
      "Bulletproof polycarbonate 360° battle enclosure",
      "Hydraulic hazard traps & arena pitfall drops",
      "Live multi-angle drone cam stream on giant screens"
    ],
    rules: [
      "Weight classes strictly capped at 15kg and 30kg (+/- 2%).",
      "Flamethrowers, untethered projectiles, and radio jamming strictly banned.",
      "Matches last 3 minutes or until knockout by arena hazards."
    ]
  },
  {
    id: "terra-runner",
    title: "TERRA-RUNNER OBSTACLE",
    category: "robotics",
    categoryLabel: "Autonomous & RC",
    tagline: "Extreme Terrain Navigation & Line Tracking Challenge",
    description: "Navigate gravel pits, water hurdles, 45-degree inclines, and dynamic switch bridges with speed and precision.",
    prizePool: "₹25,000",
    teamSize: "2 - 4 Members",
    entryFee: "₹400 / Team",
    venue: "Mechanical Quadrangle",
    scheduleTime: "Day 1, 01:30 PM",
    day: "Day 1",
    highlights: [
      "Dynamic moving obstacle course",
      "Bonus multiplier for autonomous sensor navigation",
      "High-speed telemetry time trials"
    ],
    rules: [
      "Max dimensions: 30cm x 30cm x 25cm.",
      "Voltage must not exceed 24V DC onboard battery.",
      "Penalties assigned for touching track boundaries."
    ]
  },
  {
    id: "code-red",
    title: "CODE RED: ALGO DUEL",
    category: "coding",
    categoryLabel: "Competitive Programming",
    tagline: "Speed Debugging & Blind Coding Knockout",
    description: "Put your raw logic and memory to the ultimate test. Round 1 tests algorithmic time complexity; Round 2 turns monitors off for blind syntax execution.",
    prizePool: "₹18,000",
    teamSize: "Solo (1 Member)",
    entryFee: "₹150 / Head",
    venue: "Lab 1 (Silicon Hall)",
    scheduleTime: "Day 2, 11:00 AM",
    day: "Day 2",
    highlights: [
      "Live Elo leaderboard on tournament displays",
      "Languages supported: C++, Rust, Python 3, Java, Go",
      "Sudden death code face-off for top 4 finalists"
    ],
    rules: [
      "Strict zero-tolerance on internet browsing or AI copilot assistance.",
      "Ties broken by earliest accepted submission time.",
      "Blind round: Screen blanked; compile upon submission only."
    ]
  },
  {
    id: "nexus-esports",
    title: "NEXUS: ESPORTS ARENA",
    category: "gaming",
    categoryLabel: "Competitive Gaming",
    tagline: "Valorant 5v5 & BGMI Squad Championship",
    description: "Tactical FPS precision and Battle Royale survival under arena lights with pro casters, low-latency 240Hz tournament rigs, and deafening crowd cheers.",
    prizePool: "₹35,000",
    teamSize: "4 - 5 Members",
    entryFee: "₹500 / Team",
    venue: "Indoor Sports Complex (Auditorium)",
    scheduleTime: "Day 1 & Day 2 (Group Stages to Grand Finals)",
    day: "Day 1",
    featured: true,
    highlights: [
      "240Hz tournament displays & optical mechanical peripherals",
      "Live broadcast with casters on Twitch & YouTube",
      "Custom MVP trophy and gaming accessories sponsors"
    ],
    rules: [
      "Valorant played in standard competitive Tournament Mode.",
      "Mobile devices for BGMI must be physical phones; emulators barred.",
      "Disqualification for toxic conduct or third-party script exploitation."
    ]
  },
  {
    id: "design-strike",
    title: "DESIGN-STRIKE SPRINT",
    category: "creative",
    categoryLabel: "UI/UX & Visuals",
    tagline: "6-Hour Rapid Interface & Motion Design Challenge",
    description: "Receive an unexpected design brief at 09:00 AM. Prototype an audacious, accessible, and micro-interaction-rich interface in Figma.",
    prizePool: "₹15,000",
    teamSize: "1 - 2 Members",
    entryFee: "₹200 / Team",
    venue: "Design Innovation Studio",
    scheduleTime: "Day 2, 09:30 AM",
    day: "Day 2",
    highlights: [
      "Critiqued by senior product designers from unicorn tech startups",
      "Focus on design systems, micro-interactions, and accessibility",
      "Interactive prototype review on mobile devices"
    ],
    rules: [
      "Figma or Penpot file with verifiable timestamp history.",
      "Must include component auto-layout and interactive prototype.",
      "10-minute live demo before the judging panel."
    ]
  },
  {
    id: "step-up-dance",
    title: "STEP-UP: CREW BATTLE",
    category: "cultural",
    categoryLabel: "Stage & Dance",
    tagline: "Inter-College Western, Hip-Hop & Folk Dance Showdown",
    description: "Electrifying choreography, gravity-defying breakdance, and synchronization that shakes the outdoor amphitheater under sunset lights.",
    prizePool: "₹25,000",
    teamSize: "6 - 20 Members",
    entryFee: "₹1000 / Crew",
    venue: "Open Air Amphitheatre (Main Stage)",
    scheduleTime: "Day 2, 06:30 PM",
    day: "Day 2",
    highlights: [
      "Massive concert stage with pro concert line-array sound and LED walls",
      "Crowd engagement vote weighing 20% of final tally",
      "Special celebrity judge panel from national dance circuits"
    ],
    rules: [
      "Time limit: 8 to 12 minutes including setup and teardown.",
      "Props allowed with prior technical clearance.",
      "No hazardous materials (fire, water, glass) on stage."
    ]
  },
  {
    id: "battle-of-bands",
    title: "AURA: BATTLE OF BANDS",
    category: "cultural",
    categoryLabel: "Music & Band",
    tagline: "Live Rock, Metal & Fusion Musical Face-Off",
    description: "Distorted electric guitars, thunderous double-bass drums, and soulful vocal harmonics echoing across the CGIT Raipur night sky.",
    prizePool: "₹30,000",
    teamSize: "3 - 8 Members",
    entryFee: "₹800 / Band",
    venue: "Open Air Amphitheatre (Main Stage)",
    scheduleTime: "Day 3, 06:00 PM",
    day: "Day 3",
    featured: true,
    highlights: [
      "Mapex drum kit & Marshall half-stacks provided",
      "Pro audio engineering & multi-track recording for all finalists",
      "Opening slot for the headline celebrity night"
    ],
    rules: [
      "Total stage time: 20 minutes (including line check and tuning).",
      "At least one original composition mandatory.",
      "Pre-recorded backing tracks barred."
    ]
  },
  {
    id: "inno-expo",
    title: "TECH HORIZON EXPO",
    category: "creative",
    categoryLabel: "Hardware & R&D",
    tagline: "Student Patent & Working Prototype Showcase",
    description: "Display IoT devices, sustainable energy rigs, drone prototypes, and applied ML hardware to angel investors, professors, and tech enthusiasts.",
    prizePool: "₹20,000",
    teamSize: "1 - 4 Members",
    entryFee: "₹300 / Stall",
    venue: "Central Exhibition Hall",
    scheduleTime: "Day 1 to Day 3 (All-Day Expo)",
    day: "Day 1",
    highlights: [
      "Dedicated demo booth with power supply and poster display",
      "Venture incubator scouts offering pilot funding grants",
      "Best Sustainable Tech special trophy"
    ],
    rules: [
      "Working prototype mandatory; poster-only presentations excluded.",
      "Must adhere to campus electrical safety standards.",
      "Live demonstration required during jury rounds."
    ]
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  // DAY 1
  {
    id: "sch-1",
    time: "09:00 AM - 10:30 AM",
    title: "Grand Inauguration Ceremony & Keynote Address",
    category: "General",
    venue: "CGIT Main Auditorium",
    day: 1,
    speakerOrHost: "Chief Guest: Eminent Technologist & Director, CGIT Raipur"
  },
  {
    id: "sch-2",
    time: "10:30 AM - ONWARD",
    title: "SYNAPSE 36: Flagship Hackathon Kickoff",
    category: "Coding",
    venue: "Main Computing Hub (Lab 3 & 4)",
    day: 1,
    speakerOrHost: "Hackathon Mentors & Jury"
  },
  {
    id: "sch-3",
    time: "11:30 AM - 05:00 PM",
    title: "TECH HORIZON: Hardware & Project Expo Opening",
    category: "Exhibition",
    venue: "Central Exhibition Pavilion",
    day: 1
  },
  {
    id: "sch-4",
    time: "01:30 PM - 05:30 PM",
    title: "TERRA-RUNNER: Obstacle Robo Qualifiers",
    category: "Robotics",
    venue: "Mechanical Quadrangle",
    day: 1
  },
  {
    id: "sch-5",
    time: "02:00 PM - 07:00 PM",
    title: "NEXUS ESPORTS: Valorant Group Stage",
    category: "Gaming",
    venue: "Indoor Gaming Arena",
    day: 1
  },
  {
    id: "sch-6",
    time: "06:30 PM - 09:30 PM",
    title: "VOX CELESTIA: Acoustic & Solo Musical Evening",
    category: "Cultural",
    venue: "Open Air Amphitheatre",
    day: 1
  },

  // DAY 2
  {
    id: "sch-7",
    time: "09:30 AM - 03:30 PM",
    title: "DESIGN-STRIKE: 6-Hour Rapid UI/UX Sprint",
    category: "Creative",
    venue: "Design Innovation Studio",
    day: 2
  },
  {
    id: "sch-8",
    time: "11:00 AM - 01:30 PM",
    title: "CODE RED: Algorithmic Duel & Speed Debugging",
    category: "Coding",
    venue: "Silicon Hall (Lab 1)",
    day: 2
  },
  {
    id: "sch-9",
    time: "02:00 PM - 06:00 PM",
    title: "ROBO-WARS: 15kg & 30kg Armor Bot Annihilation",
    category: "Robotics",
    venue: "Central Open Arena (Ring Alpha)",
    day: 2
  },
  {
    id: "sch-10",
    time: "04:00 PM - 08:00 PM",
    title: "NEXUS ESPORTS: BGMI Championship Finals",
    category: "Gaming",
    venue: "Indoor Gaming Arena",
    day: 2
  },
  {
    id: "sch-11",
    time: "06:30 PM - 10:00 PM",
    title: "STEP-UP: Western & Folk Dance Crew Showdown",
    category: "Cultural",
    venue: "Main Concert Stage",
    day: 2
  },

  // DAY 3
  {
    id: "sch-12",
    time: "09:30 AM - 12:30 PM",
    title: "SYNAPSE 36: Final Pitching & Jury Evaluation",
    category: "Coding",
    venue: "CGIT Main Auditorium",
    day: 3
  },
  {
    id: "sch-13",
    time: "01:30 PM - 03:30 PM",
    title: "Tech Leadership Panel: AI in Urban Engineering",
    category: "Keynote",
    venue: "Conference Hall A",
    day: 3,
    speakerOrHost: "Panel of Industry CTOs & AI Researchers"
  },
  {
    id: "sch-14",
    time: "04:00 PM - 05:30 PM",
    title: "Grand Valedictory & Prize Distribution Ceremony",
    category: "Ceremony",
    venue: "CGIT Main Auditorium",
    day: 3
  },
  {
    id: "sch-15",
    time: "06:00 PM - 10:30 PM",
    title: "AURA BATTLE OF BANDS & STAR CELEBRITY CONCERT",
    category: "Cultural",
    venue: "Main Stadium Grounds",
    day: 3
  }
];

export const SPONSORS_DATA: Sponsor[] = [
  {
    name: "CYBERDYNE SYSTEMS",
    tier: "Title Partner",
    domain: "Autonomous Robotics & AI",
    iconName: "Cpu"
  },
  {
    name: "NEXUS CLOUD INFRA",
    tier: "Powered By",
    domain: "Distributed Compute & Scalability",
    iconName: "Server"
  },
  {
    name: "TITAN HARDWARE LABS",
    tier: "Powered By",
    domain: "Microcontrollers & High-Torque Motors",
    iconName: "Wrench"
  },
  {
    name: "HYPERION CHIPS",
    tier: "Associate Partner",
    domain: "Semiconductors & RISC-V",
    iconName: "Zap"
  },
  {
    name: "RED BULL ENERGY",
    tier: "Associate Partner",
    domain: "Official Refreshment & Focus Partner",
    iconName: "Flame"
  },
  {
    name: "DEVCOMMUNITY INDIA",
    tier: "Community",
    domain: "Open Source Tech Network",
    iconName: "Globe"
  },
  {
    name: "CHHATTISGARH INNOVATION HUB",
    tier: "Community",
    domain: "State Startup & Patent Support",
    iconName: "Shield"
  },
  {
    name: "SOUNDWAVE ACOUSTICS",
    tier: "Community",
    domain: "Pro Stage & Audio Systems",
    iconName: "Radio"
  }
];
