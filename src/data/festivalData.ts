import { TechEvent, ScheduleItem, Sponsor } from "../types";

export const FEST_METRICS = {
  year: "2026",
  edition: "TECHNICAL & CULTURAL FEST",
  dates: "27/10/26 to 30/10/26",
  datesLong: "27 – 30 OCTOBER 2026",
  location: "CGIT RAIPUR CAMPUS, CHHATTISGARH",
  locationNote: "Formerly known as GEC Raipur",
  coordinates: "21.1632° N, 81.6591° E",
  mapsUrl: "https://www.google.com/maps/place/CGIT+Raipur/@21.1622671,81.6585535,715m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a28db654fdf4aa9:0x3ac2ad9bd20088ab!2sCGIT+Raipur!8m2!3d21.1632359!4d81.6591038!16s%2Fg%2F11d_d0yqsm!3m5!1s0x3a28db654fdf4aa9:0x3ac2ad9bd20088ab!8m2!3d21.1632359!4d81.6591038!16s%2Fg%2F11d_d0yqsm?authuser=0&entry=ttu&g_ep=EgoyMDI2MTAxNC4wIKXMDSoASAFQAw%3D%3D",
  festivalHead: "Dr. Shweta Choubey",
  totalPrizePool: "₹2,00,000+",
  collegesExpected: "60+",
  attendees: "3,500+",
  eventsCount: "8 TECH · 4 CULTURAL · 1 ARTIST NIGHT",
  motto: {
    primary: "THINK · BUILD · COMPETE · CELEBRATE",
    sub: "TECHNICAL & CULTURAL FEST — 27 TO 30 OCTOBER 2026"
  }
};

export const EVENTS_DATA: TechEvent[] = [
  // 1. HACKATHON
  {
    id: "hack4community",
    title: "OCTOCODE",
    category: "coding",
    categoryLabel: "Hackathon · 8 Hours",
    tagline: "8-Hour Innovation Sprint to Turn Ideas into Working Prototypes",
    description: "An innovation sprint where student teams collaborate, prototype and present practical ideas that matter to the community. Ideas are only the beginning: you leave with a working demo.",
    prizePool: "Revealing Soon",
    teamSize: "2 - 4 Members",
    entryFee: "FREE (Shortlist Based)",
    venue: "Main Computing Hub",
    scheduleTime: "27 & 28 Oct · 10:00 AM – 4:00 PM",
    day: "Day 1",
    featured: true,
    highlights: [
      "What to build: Problems in everyday life, campus experience, accessibility, sustainability, public services or community well-being",
      "Format: 8-Hour sprint from concept to functioning working prototype",
      "Presentation: Explain the problem, technical architecture, and community impact",
      "What you take home: A deployed prototype, a stronger team, and problem-solving mastery"
    ],
    rules: [
      "Build and present your own work and acknowledge any tools, APIs, datasets or libraries used.",
      "Keep solutions safe, respectful, and focused on positive community impact.",
      "Be ready to demonstrate the prototype and explain your technical design choices.",
      "Follow the organisers' instructions and time limits strictly."
    ]
  },

  // 2. FOUNDER'S FORGE IDEATHON
  {
    id: "founders-forge",
    title: "FOUNDER'S FORGE",
    category: "creative",
    categoryLabel: "Ideathon · 5 Hours",
    tagline: "Pitch an Idea with Clear Business Value to Professional Judges",
    description: "A fast, focused ideation competition for people who spot problems and think like founders. Shape your idea, pitch it to professional judges and get 1:1 mentoring along the way.",
    prizePool: "Revealing Soon",
    teamSize: "1 - 4 Members",
    entryFee: "₹200 / Team",
    venue: "Innovation Conference Hall",
    scheduleTime: "28 Oct · 10:00 AM – 3:00 PM (5 Hours)",
    day: "Day 2",
    featured: true,
    highlights: [
      "5-Hour structured format: Form your founding team, shape your idea, and pitch",
      "1:1 Mentoring: Professional judges and industry experts provide live feedback",
      "Open Domains: Technology, operations, services, startups, sustainability or community",
      "Required Pitch Deck: Problem, Solution, Impact, Business value, and Next steps"
    ],
    rules: [
      "Pitch your own idea and acknowledge any external tools, data or references.",
      "Show a real, verified problem and a viable, credible business model.",
      "Be ready to answer the judges' questions during the live evaluation round."
    ]
  },

  // 3. PROMPTME
  {
    id: "promptme",
    title: "PROMPTME",
    category: "coding",
    categoryLabel: "Prompt Engineering · 3 Hours",
    tagline: "Think. Prompt. Create. Your Words, AI's Power, Endless Possibilities",
    description: "An on-the-spot prompt engineering challenge revealed at the event: 2 hours to prompt and create, 1 hour to present your outputs and iterations.",
    prizePool: "Revealing Soon",
    teamSize: "Solo or Duo (1 - 2 Members)",
    entryFee: "₹150 / Participant",
    venue: "Silicon Computing Hall",
    scheduleTime: "27 Oct · 11:30 AM – 2:30 PM",
    day: "Day 1",
    highlights: [
      "On-the-spot challenge: Task revealed at the start of the competition",
      "Phase 1 (2 Hours): Plan, write, and refine prompts; test outputs and prepare results",
      "Phase 2 (1 Hour): Present final output and explain prompt engineering iterations",
      "Deliverables may include: AI-generated design, prototype, content, or problem research"
    ],
    rules: [
      "Tool rules are announced at the venue. You must explain your prompts and iterations.",
      "Provide clear Context, define the Task, set Constraints, and describe expected Output.",
      "Organisers' and jury evaluation of creativity, prompt precision, and utility is final."
    ]
  },

  // 4. ROBO SOCCER
  {
    id: "robo-soccer",
    title: "ROBO SOCCER",
    category: "robotics",
    categoryLabel: "Robotics Arena",
    tagline: "Manually Controlled Bots Battle in High-Energy Soccer Match",
    description: "Manually controlled bots, wired or wireless, battle in a high-energy soccer-style match. Push the ball into the opponent's goal and defend your own.",
    prizePool: "Revealing Soon",
    teamSize: "2 - 4 Members",
    entryFee: "₹400 / Team",
    venue: "Robotics Arena (Field 300 × 180 cm)",
    scheduleTime: "27 Oct · 01:30 PM – 04:00 PM",
    day: "Day 1",
    featured: true,
    highlights: [
      "Knockout tournament format with two 2-minute halves; teams switch sides at half-time",
      "Each team gets one 1-minute technical timeout to repair its robot",
      "The most goals wins; ties go to a sudden-death tie-breaker where first goal wins",
      "Field arena: roughly 300 × 180 cm with a goal at each end"
    ],
    rules: [
      "Max weight 3 kg; must fit a 300 × 300 × 300 mm box (5% tolerance).",
      "Max voltage 12.6 V; wired robots require a cable of at least 2 m.",
      "Only one designated team member controls the robot; others stay outside the game zone.",
      "Robots are inspected for dimensions and safety before each match."
    ]
  },

  // 5. ROBO SUMO
  {
    id: "robo-sumo",
    title: "ROBO SUMO",
    category: "robotics",
    categoryLabel: "Robotics Arena",
    tagline: "Two Bots. One Ring. Only One Stays Standing.",
    description: "Two bots. One circular ring (dohyo). Push your opponent out while staying inside. Power, traction and strategy decide who leaves the dohyo.",
    prizePool: "Revealing Soon",
    teamSize: "2 - 4 Members",
    entryFee: "₹400 / Team",
    venue: "Dohyo Ring Arena (Mechanical Quad)",
    scheduleTime: "28 Oct · 01:00 PM – 03:30 PM",
    day: "Day 2",
    highlights: [
      "Enter the dohyo: two bots start on opposite sides and wait for referee signal",
      "Low-profile, high-traction bot with a sturdy front wedge to get under and shove opponents",
      "Stay in: a bot pushed out of the ring loses the round; last bot standing wins",
      "Knockout bouts in the circular arena until a champion emerges"
    ],
    rules: [
      "Bots are inspected before each bout; bouts start and end on the referee's call.",
      "No flames, liquids, untethered projectiles, or parts that damage the arena.",
      "Weight, size, and power limits shared by organisers before the event. Referee decision is final."
    ]
  },

  // 6. TRUSS-CRAFT
  {
    id: "truss-craft",
    title: "TRUSS-CRAFT",
    category: "creative",
    categoryLabel: "Mega Structures · 3 Hours",
    tagline: "Popsicle Bridge Challenge: Design, Build and Live Load-Test",
    description: "Small sticks, big ideas. Design, build and load-test your own popsicle-stick truss bridge. It is not just about building a bridge, it is about building a stronger concept.",
    prizePool: "Revealing Soon",
    teamSize: "2 - 4 Members",
    entryFee: "₹300 / Team",
    venue: "Structures & Civil Lab",
    scheduleTime: "28 Oct · 10:30 AM – 01:30 PM (3 Hours)",
    day: "Day 2",
    highlights: [
      "Phase 1: Plan & design truss geometry and span on drawing sheet",
      "Phase 2: Build & assemble using provided ice-cream sticks, glue and cutters (3 hours)",
      "Phase 3: Live load testing with standard iron weights applied at the centre until failure",
      "Scoring: 50% Load Ratio, 30% Structural Stability, 20% Build Quality & Innovation"
    ],
    rules: [
      "Only materials provided at the venue may be used. No extra supports, thread or reinforcement.",
      "The bridge must be self-supported during the load test.",
      "Build strictly within the 3-hour limit. Disqualification is decided by the organisers."
    ]
  },

  // 7. E-SPORTS
  {
    id: "esports",
    title: "E-SPORTS ARENA",
    category: "gaming",
    categoryLabel: "BGMI + Free Fire",
    tagline: "Compete While Matches Are Telecast Live on the Auditorium Big Screen",
    description: "Play. Compete. Connect. Players battle in a dedicated gaming area while gameplay is captured and telecast live on the big screen in the auditorium.",
    prizePool: "Revealing Soon",
    teamSize: "Squad (4 Members) / Solo",
    entryFee: "₹300 / Squad",
    venue: "Main Auditorium & Gaming Arena",
    scheduleTime: "28 Oct · 11:30 AM – 04:00 PM",
    day: "Day 2",
    highlights: [
      "BGMI: Survival and strategy with 100 players across various maps and modes",
      "Free Fire: Fast-paced action with 50 players, unique character skills, drop, loot, Booyah",
      "Auditorium big screen live stream with crowd cheers and commentary",
      "Championship trophy and prizes for winning squads"
    ],
    rules: [
      "Fair play only: hacks, cheats, or third-party tools mean immediate disqualification.",
      "Match modes and tournament schedule announced at the venue.",
      "The organisers' decisions on match disputes are final."
    ]
  },

  // 8. QUIZ
  {
    id: "quiz",
    title: "TECH & GENERAL QUIZ",
    category: "coding",
    categoryLabel: "General · Technical · Aptitude",
    tagline: "Think Fast. Answer Right — 3 Layers of Problem-Solving",
    description: "A quiz built to test how you think, not just what you remember, through three layers of questions that bring out your problem-solving ability under time pressure.",
    prizePool: "Revealing Soon",
    teamSize: "2 Members per Team",
    entryFee: "₹100 / Team",
    venue: "Auditorium Seminar Hall",
    scheduleTime: "27 Oct · 10:30 AM – 01:00 PM",
    day: "Day 1",
    highlights: [
      "Layer 01 · General Knowledge: Awareness of the world, curiosity, and sharp recall",
      "Layer 02 · Technical: Questions rooted in engineering concepts applied to unfamiliar scenarios",
      "Layer 03 · Aptitude: Logic, reasoning, and quick problem breakdown under clock pressure",
      "Buzzer and rapid-fire finale round for top teams"
    ],
    rules: [
      "Answer within the time given. No phones or outside help during the rounds.",
      "The quizmaster's decision is final.",
      "The round format is announced at the venue."
    ]
  },

  // 9. CULTURAL COMPETITIONS
  {
    id: "cultural-day",
    title: "CULTURAL COMPETITIONS",
    category: "cultural",
    categoryLabel: "Singing & Dance · 29 Oct",
    tagline: "Solo Singing, Group Singing, Solo Dance & Group Dance",
    description: "The stage opens for voices and movement. Four competitions run one after another through the evening: Solo Singing, Group Singing, Solo Dance, and Group Dance.",
    prizePool: "Revealing Soon",
    teamSize: "Solo / Group",
    entryFee: "₹200 (Solo) / ₹500 (Group)",
    venue: "Open Air Amphitheatre (Main Stage)",
    scheduleTime: "29 Oct · 03:00 PM – 08:00 PM",
    day: "Day 3",
    featured: true,
    highlights: [
      "1 · Solo Singing: One voice, one spotlight. Show your range, control and stage presence",
      "2 · Group Singing: Harmony, balance and teamwork come together in a single performance",
      "3 · Solo Dance: Any style, one performer, the whole stage",
      "4 · Group Dance: Choreography, coordination and energy as a team"
    ],
    rules: [
      "Perform within the time limit announced for each event.",
      "Content must be decent and respectful. Performances follow the published order of the day.",
      "Judging criteria: Skill, expression, stage presence, creativity and overall impact. Judges' decision is final."
    ]
  },

  // 10. ARTIST NIGHT
  {
    id: "artist-night",
    title: "GRAND ARTIST NIGHT",
    category: "cultural",
    categoryLabel: "Concert & DJ · 30 Oct",
    tagline: "Auditorium Highlights, Live Celebrity Headliner & DJ Wind-Up",
    description: "The closing night of AVESH 2026: the two best performances of the fest on stage, an opening warm-up act, a headline live artist show, and a dance floor to end it all.",
    prizePool: "Revealing Soon",
    teamSize: "Open to All Delegates",
    entryFee: "Included with Fest Pass",
    venue: "CGIT Raipur Campus Main Grounds",
    scheduleTime: "30 Oct · 05:00 PM onwards",
    day: "Day 4",
    featured: true,
    highlights: [
      "1 · Auditorium Highlights: The two best performances of the fest take the stage once more",
      "2 · Opening Act: A warm-up performance that sets the stage for the headliner",
      "3 · Live Artist Show: The headline performance of the night (celebrity artist to be announced soon)",
      "4 · DJ & Wind-up: A DJ set to dance the night out and close AVESH 2026 under the lights"
    ],
    rules: [
      "Valid fest delegate pass or college ID required at campus security checkpoints.",
      "Respect performers, equipment, fellow students, and campus property."
    ]
  }
];

export const SCHEDULE_DATA: ScheduleItem[] = [
  // DAY 1 — Tuesday, 27 October 2026 · Technical Day 1 (10 AM – 4 PM)
  {
    id: "sch-1",
    time: "10:00 AM - 10:45 AM",
    title: "AVESH 2026 Opening & Hack4Community Sprint Kickoff",
    category: "General",
    venue: "CGIT Main Auditorium",
    day: 1,
    speakerOrHost: "Festival Head: Dr. Shweta Choubey & Industry Mentors"
  },
  {
    id: "sch-2",
    time: "10:30 AM - 01:00 PM",
    title: "Quiz: General Knowledge, Technical & Aptitude",
    category: "Coding",
    venue: "Auditorium Seminar Hall",
    day: 1
  },
  {
    id: "sch-3",
    time: "11:30 AM - 02:30 PM",
    title: "PromptMe: On-The-Spot Prompt Engineering Challenge (2h Create + 1h Present)",
    category: "Coding",
    venue: "Silicon Computing Hall",
    day: 1
  },
  {
    id: "sch-4",
    time: "01:30 PM - 04:00 PM",
    title: "Robo Soccer: Knockout League (Two 2-Minute Halves)",
    category: "Robotics",
    venue: "Robotics Arena (Field 300 × 180 cm)",
    day: 1
  },

  // DAY 2 — Wednesday, 28 October 2026 · Technical Day 2 (10 AM – 4 PM)
  {
    id: "sch-5",
    time: "10:00 AM - 03:00 PM",
    title: "Founder's Forge: 5-Hour Ideathon & 1:1 Mentoring",
    category: "Creative",
    venue: "Innovation Conference Hall",
    day: 2,
    speakerOrHost: "Professional Judges & Startup Mentors"
  },
  {
    id: "sch-6",
    time: "10:30 AM - 01:30 PM",
    title: "Truss-Craft: Popsicle Bridge Build & Live Load Testing Rig",
    category: "Creative",
    venue: "Structures & Civil Lab",
    day: 2
  },
  {
    id: "sch-7",
    time: "11:30 AM - 04:00 PM",
    title: "E-Sports: BGMI & Free Fire Live Broadcast on Big Screen",
    category: "Gaming",
    venue: "Main Auditorium Gaming Complex",
    day: 2
  },
  {
    id: "sch-8",
    time: "01:00 PM - 03:30 PM",
    title: "Robo Sumo: Knockout Bouts in the Circular Dohyo Ring",
    category: "Robotics",
    venue: "Dohyo Ring Arena (Mechanical Quad)",
    day: 2
  },
  {
    id: "sch-9",
    time: "02:30 PM - 04:00 PM",
    title: "Hack4Community: Working Prototype Demos & Jury Evaluation",
    category: "Coding",
    venue: "Main Computing Hub",
    day: 2
  },

  // DAY 3 — Thursday, 29 October 2026 · Cultural Day (3 PM – 8 PM)
  {
    id: "sch-10",
    time: "03:00 PM - 04:15 PM",
    title: "Cultural Competition 1: Solo Singing (Your Voice, Centre Stage)",
    category: "Cultural",
    venue: "Open Air Amphitheatre (Main Stage)",
    day: 3
  },
  {
    id: "sch-11",
    time: "04:15 PM - 05:30 PM",
    title: "Cultural Competition 2: Group Singing (Harmony as a Team)",
    category: "Cultural",
    venue: "Open Air Amphitheatre (Main Stage)",
    day: 3
  },
  {
    id: "sch-12",
    time: "05:30 PM - 06:45 PM",
    title: "Cultural Competition 3: Solo Dance (Any Style, One Performer)",
    category: "Cultural",
    venue: "Open Air Amphitheatre (Main Stage)",
    day: 3
  },
  {
    id: "sch-13",
    time: "06:45 PM - 08:00 PM",
    title: "Cultural Competition 4: Group Dance (Choreography in Sync)",
    category: "Cultural",
    venue: "Open Air Amphitheatre (Main Stage)",
    day: 3
  },

  // DAY 4 — Friday, 30 October 2026 · Artist Night (5 PM onwards)
  {
    id: "sch-14",
    time: "05:00 PM - 05:45 PM",
    title: "Auditorium Highlights: Best Two Fest Performances",
    category: "Cultural",
    venue: "CGIT Raipur Main Grounds",
    day: 4
  },
  {
    id: "sch-15",
    time: "05:45 PM - 06:30 PM",
    title: "Opening Act: Setting the Stage for the Headliner",
    category: "Cultural",
    venue: "CGIT Raipur Main Grounds",
    day: 4
  },
  {
    id: "sch-16",
    time: "06:30 PM - 08:30 PM",
    title: "Live Artist Show: Headline Performance",
    category: "Cultural",
    venue: "CGIT Raipur Main Grounds",
    day: 4
  },
  {
    id: "sch-17",
    time: "08:30 PM - 10:30 PM",
    title: "DJ & Wind-Up: Dance the Night Out & Fest Wrap",
    category: "Cultural",
    venue: "CGIT Raipur Main Grounds",
    day: 4
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
    name: "NEO-TOKYO CLOUD",
    tier: "Powered By",
    domain: "Distributed Infrastructure",
    iconName: "Terminal"
  },
  {
    name: "REDLINE ENERGY",
    tier: "Powered By",
    domain: "Beverage & Performance",
    iconName: "Zap"
  },
  {
    name: "SYNTHESIS AUDIO",
    tier: "Associate Partner",
    domain: "Acoustics & Stage Production",
    iconName: "Flame"
  },
  {
    name: "DEV-ZERO COMMUNITY",
    tier: "Community",
    domain: "Open Source Ecosystem",
    iconName: "Compass"
  }
];
