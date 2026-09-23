// src/content/agent_knowledge.js

export const AGENT_ROLES = {
  executive: {
    name: "IT Systems & Support Advisor",
    tagline: "Hardware Diagnostics, Infrastructure & Systems Engineering",
    badge: "IT_ADVISOR_v1.0",
    description: "An AI advisor providing verified insights into Muhammad Mobeen's IT support competencies, hardware repair capabilities, CompTIA A+ certification, and technical projects.",
    suggestedQueries: [
      { id: "timeline", label: "⏱️ Career Timeline", query: "Can you provide Mobeen's complete career, education, and project timeline?" },
      { id: "comptia", label: "🛡️ CompTIA A+ Progress", query: "What is Mobeen's CompTIA A+ certification progress and competencies?" },
      { id: "hardware", label: "🔧 Hardware & Soldering", query: "What hands-on hardware and micro-soldering experience does Mobeen have?" },
      { id: "networking", label: "🌐 Networking & CCTV", query: "Can you summarize Mobeen's networking and CCTV deployment experience?" },
      { id: "projects", label: "💻 Technical Projects", query: "What software and engineering projects has Mobeen built?" },
      { id: "contact", label: "📍 Contact & UK Visa", query: "What is Mobeen's location, contact details, and UK right to work?" }
    ]
  },
  architect: {
    name: "SysOrchestrator v2.4",
    tagline: "Hardware Diagnostics, Network Telemetry & Real-Time Kernel",
    badge: "HARDWARE_KERNEL_STABLE",
    description: "Low-level autonomous terminal agent providing system telemetry, circuit diagnostics logs, React/Express/CCXT trading architectures, and network cabling specs.",
    suggestedCommands: [
      "help",
      "status",
      "skills",
      "timeline",
      "projects",
      "cryptobot",
      "repx",
      "hisaab",
      "hardware",
      "network",
      "comptia",
      "contact"
    ]
  }
};

export const CLI_COMMANDS = {
  help: {
    description: "Display all available terminal commands and diagnostic subroutines",
    output: [
      "AVAILABLE SYSTEM ROUTINES:",
      "  help        - List all available terminal commands",
      "  status      - Print real-time system diagnostics, UK work rights, and environment",
      "  skills      - Display verified hardware, networking, and software competencies",
      "  timeline    - Inspect Consolidated Master Timeline (Education, Projects, Experience)",
      "  projects    - List all practical engineering projects and architecture specs",
      "  cryptobot   - Inspect CryptoBot 1.0 dual-account terminal, delta hedging & AI matrix",
      "  repx        - Inspect RepX AI 3D WebGL, 600k Kaggle Polars pipeline & engine specs",
      "  hisaab      - Inspect Hisaab-Kitaab offline ledger, Dexie & Gemini vision specs",
      "  hardware    - Inspect component-level PCB repair and BMS battery mod details",
      "  network     - Inspect CCTV surveillance, LAN/WLAN, and Cat6 cabling specs",
      "  comptia     - Review CompTIA A+ core competencies in progress",
      "  contact     - Dump direct communication channels and location coordinates",
      "  clear       - Clear terminal display buffer"
    ]
  },
  status: {
    description: "Query system diagnostics, location, and work authorization",
    output: [
      ">> HARDWARE & SYSTEMS RUNTIME TELEMETRY:",
      "  OPERATOR:         Muhammad Mobeen",
      "  LOCATION:         London, NW9 6EJ, United Kingdom",
      "  RIGHT TO WORK:    Full UK Right to Work (Spouse Visa - Verified)",
      "  PRIMARY TARGET:   IT Support Specialist / Hardware Technician / Systems Engineer",
      "  CERTIFICATION:    CompTIA A+ (In Progress — Core 1 & 2 Domains)",
      "  LANGUAGES:        English (Fluent), Urdu (Native), Hindi (Fluent), Punjabi (Fluent)",
      "  KERNEL STATUS:    Online (Vite 7 / React 19 / Express / Lightweight Charts / WebSockets / SQLite)"
    ]
  },
  skills: {
    description: "Display verified technical competencies across physical and digital systems",
    output: [
      ">> TECHNICAL SKILLS & SYSTEM STACK:",
      "  HARDWARE & REPAIR: Motherboard diagnostics, component soldering, circuit cleaning, Lithium-ion BMS, Arduino, relays",
      "  NETWORKING:        Router & LAN/WLAN config, CCTV deployment, structured cabling (Cat6 T568B), physical mounting",
      "  OS ADMINISTRATION: Windows 10/11 configuration & troubleshooting, Linux CLI basics, system recovery, hardware utilities",
      "  SOFTWARE STACK:    TypeScript, React 19, Express, WebSockets, Lightweight Charts, CCXT, SQLite, Tailwind CSS, REST APIs",
      "  AI WORKFLOWS:      AI-directed document parsing, receipt OCR, rapid prototyping, and automated testing"
    ]
  },
  timeline: {
    description: "Inspect Consolidated Master Timeline (Education, Projects, Experience)",
    output: [
      ">> CONSOLIDATED MASTER TIMELINE (CHRONOLOGICAL TELEMETRY RECORD):",
      "  [01] [Education]   Matriculation (GCSE Equivalent)         :: Jan 2016 – Mar 2018 | Pakistan",
      "  [02] [Education]   Super Wings (I.C.S)                     :: Jul 2018 – Apr 2020 | Pakistan",
      "  [03] [Projects]    Digital Branding & 3D Motion Design     :: Jan 2021 – Dec 2023 | Independent",
      "  [04] [Projects]    CryptoBot 1.0 Terminal Architecture     :: Feb 2021 – Present  | Independent",
      "  [05] [Experience]  Physical Infrastructure & CCTV Setup    :: Sep 2022 – Dec 2023 | Pakistan",
      "  [06] [Experience]  IT Infrastructure & Hardware Technician :: Jan 2024 – Present  | London, UK",
      "  [07] [Projects]    Hisaab-Kitaab Finance App               :: Jul 2024 – Feb 2025 | Independent",
      "  [08] [Education]   CompTIA A+ Certification Prep           :: Sep 2026 – Nov 2026 | London, UK",
      "",
      "Type 'hardware', 'network', 'cryptobot', or 'comptia' for deep-dive technical telemetry."
    ]
  },
  projects: {
    description: "Inspect practical technical projects and systems architecture",
    output: [
      ">> PRACTICAL EXPERIENCE & TECHNICAL PROJECTS:",
      "  [01] CryptoBot 1.0 Terminal  :: React 19 / CCXT / Gemini & Gemma AI / Delta-Neutral Hedging / Shadow Mode",
      "  [02] Hisaab-Kitaab           :: React 19 / Dexie.js (IndexedDB) / Gemini 3.1 Flash / Offline Ledger & PWA",
      "  [03] RepX AI Gym Platform    :: 3D WebGL Anatomy / 600k Kaggle Polars Pipeline / Deterministic Scorer",
      "  [04] Advanced Hardware Mod   :: Component-level diagnostics on liquid damage / +100% BMS Li-ion runtime",
      "  [05] IoT Home Automation     :: Arduino microcontroller / Multi-channel relay logic / Voice assistant",
      "  [06] Appliance & CCTV Net    :: Physical hardware mounting / Cat6 structured cabling / NVR remote access",
      "  [07] DIY Appliance Setup     :: Kitchen extractor hood mounting / structural wall anchor modification",
      "",
      "Type 'cryptobot', 'hisaab', 'repx', 'hardware' or 'network' for deep-dive physical specifications."
    ]
  },
  cryptobot: {
    description: "Inspect CryptoBot 1.0 institutional trading terminal and algorithmic execution engine",
    output: [
      ">> CRYPTOBOT 1.0 ALGORITHMIC TRADING TERMINAL TELEMETRY:",
      "  CORE PLATFORM:    Institutional Multi-Account Terminal styled after Binance Futures (#0B0E11)",
      "  TRADE COPYING:    Zero-latency Master-to-Slave trade mirroring (up to 20 accounts via CCXT & WS)",
      "  HEDGING ENGINES:  Delta Master (5 USDT buffer, break-even redeployment) & Voltron Straddle Harvester",
      "  AI BOT PILOT:     Multi-kernel matrix: Gemini 3.1 Flash-Lite (sentiment), Gemma 3 27B (ATR/risk), Gemini Flash Live",
      "  CHARTING ENGINE:  TradingView Lightweight Charts, live Binance WS, SuperTrend clouds, Alligator & OHLC HUD",
      "  SHADOW MODE:      Zero-risk SQLite paper trading (trades.db & shadow_orders.db) with 1x-125x margin simulation",
      "  SAFETY CONTROLS:  Global Panic Pause, Emergency Close All, TradingView authenticated webhook gateway"
    ]
  },
  hisaab: {
    description: "Inspect Hisaab-Kitaab digital ledger architecture and multimodal ingestion",
    output: [
      ">> HISAAB-KITAAB DIGITAL LEDGER ARCHITECTURE TELEMETRY:",
      "  CORE CONCEPT:     Digital Ledger (Khata) & Business Management PWA + Android APK",
      "  DATA ENGINE:      Dexie.js v4 (IndexedDB) with live reactive queries & optional Firebase sync",
      "  AI & VOICE:       Gemini 3.1 Flash real-time streaming voice assistant + Gemini Vision OCR",
      "  OFFLINE PARSING:  Client-side PDF.js, Tesseract.js & specialized JazzCash/Easypaisa regex parsers",
      "  LOCALIZATION:     Full English, Urdu (اردو), and Roman Urdu support with dynamic RTL layouts",
      "  UTILITIES:        jsPDF report export, jsQR payment scanner, transaction calendar & inventory"
    ]
  },
  repx: {
    description: "Inspect RepX AI 3D WebGL and data engine architecture",
    output: [
      ">> REPX AI CYBERNETIC ARCHITECTURE TELEMETRY:",
      "  VISUAL ENGINE:    Three.js WebGL / 27 Raycastable Sub-Muscles / GLSL Bio-Electric Shader",
      "  DATA PIPELINE:    605k+ Kaggle records normalized via Polars into 3,213 canonical exercises",
      "  SCORING ENGINE:   Pure deterministic 7-weight heuristic (<5ms) with Gemini AI coaching guardrails",
      "  OFFLINE ENGINE:   Local-first IndexedDB FSM with SHA-256 StorageEnvelope verification",
      "  BACKEND STACK:    Node.js / Express / Drizzle ORM / PGlite + PostgreSQL / Argon2id / CSRF",
      "  TEST COVERAGE:    275 automated unit, integration, and security tests"
    ]
  },
  hardware: {
    description: "Inspect component-level repair and BMS battery engineering",
    output: [
      ">> COMPONENT-LEVEL HARDWARE TELEMETRY:",
      "  DIAGNOSTIC PROTOCOL: Multimeter continuity mapping, thermal rail analysis, impedance probing",
      "  REPAIR CAPABILITIES: SMD component soldering, damaged PCB micro-jumper bridging, ultrasonic cleaning",
      "  POWER MODIFICATION:  Engineered multi-cell Lithium-ion pack with active BMS (over-current, thermal, balance)",
      "  RUNTIME OUTCOME:     +100% operational runtime achieved with stable voltage discharge curves",
      "  EMBEDDED LOGIC:      Arduino C++ firmware with opto-isolated relay switching for high-voltage AC circuits"
    ]
  },
  network: {
    description: "Inspect CCTV surveillance and network infrastructure deployment",
    output: [
      ">> NETWORK & CCTV INFRASTRUCTURE:",
      "  CABLING STANDARD:    TIA/EIA-568-B Cat6 UTP termination, punch-down patch panels, RJ45 crimping",
      "  SURVEILLANCE:        Multi-channel NVR/DVR IP setup, RTSP streaming, 802.3af/at PoE power budgeting",
      "  NETWORK LAYER:       Router LAN/WLAN subnetting, DHCP reservations, port forwarding, encrypted DDNS tunnel",
      "  PHYSICAL RIGGING:    Structural mounting, wall conduits, weather-sealed camera enclosures, clean AC wiring"
    ]
  },
  comptia: {
    description: "Review CompTIA A+ core competency areas",
    output: [
      ">> COMPTIA A+ COMPETENCY PROGRESS (IN PROGRESS):",
      "  CORE 1 (220-1101): Mobile devices, networking technology, hardware, virtualization & cloud computing",
      "  CORE 2 (220-1102): Operating systems (Windows, Linux, macOS), security protocols, software troubleshooting, operational procedures",
      "  STATUS:            Active exam preparation, continuous lab practice, and system diagnostic simulation"
    ]
  },
  contact: {
    description: "Show contact channels and work rights",
    output: [
      ">> DIRECT COMMUNICATION CHANNELS:",
      "  PHONE:         07351187884",
      "  EMAIL:         muhammadmobeen20011@gmail.com",
      "  LOCATION:      London, NW9 6EJ, United Kingdom",
      "  RIGHT TO WORK: Full Right to Work in the UK (Spouse Visa)",
      "  LINKEDIN:      https://www.linkedin.com/in/muhammadmobeenuk",
      "  GITHUB:        https://github.com/Mobeen-2024",
      "  PORTFOLIO:     https://my-project-portfolios-projects-ed15ad56.vercel.app/"
    ]
  }
};

export const EXECUTIVE_ANSWERS = {
  timeline: {
    title: "Consolidated Master Timeline & Milestones",
    thoughtTrace: "Retrieving verified chronological record across education, projects, and enterprise experience...",
    response: "Muhammad Mobeen's verified non-overlapping chronological record spans: (1) Matriculation (GCSE Equivalent) — The Educators (Jan 2016 – Mar 2018, Pakistan), (2) Super Wings (Intermediate in Computer Science / I.C.S, Jul 2018 – Apr 2020, Pakistan), (3) Digital Branding & 3D Motion Design (Jan 2021 – Dec 2023, Independent), (4) CryptoBot 1.0 Terminal Architecture (Feb 2021 – Present, Independent), (5) Physical Infrastructure & CCTV Deployment (Sep 2022 – Dec 2023, Pakistan), (6) IT Infrastructure & Hardware Technician (Jan 2024 – Present, London, UK), (7) Hisaab-Kitaab Finance App (Jul 2024 – Feb 2025, Independent), and (8) CompTIA A+ Certification Prep (Sep 2026 – Nov 2026, London, UK)."
  },
  comptia: {
    title: "CompTIA A+ Certification & Systems Mastery",
    thoughtTrace: "Retrieving certification progress and IT infrastructure syllabus...",
    response: "Muhammad Mobeen is actively preparing for the CompTIA A+ certification, building rigorous competencies in computer hardware, network protocols (TCP/IP, DNS, DHCP, VLANs), operating system diagnostics (Windows 10/11, Linux CLI), cybersecurity best practices, and systematic hardware troubleshooting."
  },
  hardware: {
    title: "Component-Level Hardware & Power Engineering",
    thoughtTrace: "Querying physical diagnostic, soldering, and BMS capabilities...",
    response: "Mobeen possesses hands-on expertise in motherboard diagnostics, microscopic circuit inspection, and precision component soldering. In a standout project, he reverse-engineered and repaired liquid-damaged circuitry, and custom-built a lithium-ion battery pack with an active Battery Management System (BMS), increasing equipment runtime by 100%."
  },
  networking: {
    title: "Networking & CCTV Infrastructure Deployment",
    thoughtTrace: "Analyzing physical cabling, NVR configurations, and router setup...",
    response: "Mobeen has planned and deployed on-premises CCTV surveillance networks, terminating and routing structured Cat6 cabling (T568B), configuring local routers (WLAN/LAN subnets, DHCP, port forwarding), and enabling secure remote mobile monitoring for commercial and residential installations."
  },
  projects: {
    title: "Featured Software & Engineering Projects",
    thoughtTrace: "Summarizing practical project portfolio...",
    response: "Mobeen's key projects include: (1) CryptoBot 1.0 institutional crypto terminal with real-time Master-Slave trade mirroring, Delta-Neutral hedging, and multi-kernel Gemini/Gemma AI pilot, (2) Hisaab-Kitaab offline digital ledger (Khata) PWA with Dexie.js and Gemini 3.1 Flash voice assistant, (3) RepX AI cybernetic fitness intelligence platform featuring 3D WebGL anatomy, 600k Kaggle dataset normalization, and deterministic recommendation algorithms, (4) Arduino IoT home automation with opto-isolated relays, and (5) Advanced Hardware BMS power modifications."
  },
  cryptobot: {
    title: "CryptoBot 1.0 — High-Frequency Dual-Account Terminal & AI Bot Pilot",
    thoughtTrace: "Retrieving CryptoBot 1.0 multi-account trade mirroring, delta hedging, and Gemini AI pilot specs...",
    response: "CryptoBot 1.0 is an institutional-grade cryptocurrency trading terminal styled after Binance Futures (#0B0E11). It provides high-speed real-time Master-to-Slave trade copying for up to 20 accounts using CCXT and Binance User Data Streams, automated Delta-Neutral hedging architectures (Delta Master with 5 USDT buffer and Voltron Straddle engines), multi-kernel AI intelligence powered by Google Gemini 3.1 Flash-Lite and Gemma 3 27B, high-performance TradingView Lightweight Charts canvas, and an isolated SQLite paper trading sandbox (Shadow Mode)."
  },
  hisaab: {
    title: "Hisaab-Kitaab — Digital Ledger & Business Management PWA",
    thoughtTrace: "Retrieving Hisaab-Kitaab offline-first specs, Dexie schema, and Gemini voice engine...",
    response: "Hisaab-Kitaab is a localized, offline-first digital ledger (Khata) and business management PWA designed to digitize traditional credit and bookkeeping for micro-merchants and individuals. Built with React 19 and Dexie.js (IndexedDB) for zero-latency offline operation, it integrates real-time hands-free voice accounting via Gemini 3.1 Flash, automated statement parsing (PDF/images/JazzCash/Easypaisa), Firebase cloud backup, and native Android APK support."
  },
  repx: {
    title: "RepX AI — 3D Fitness Intelligence Platform",
    thoughtTrace: "Retrieving RepX AI architectural specifications and 3D WebGL pipeline...",
    response: "RepX AI is an enterprise-caliber fitness intelligence platform engineered for gym-floor reliability. It features an interactive 3D WebGL athlete anatomy visualizer with raycastable sub-muscles and custom GLSL Bio-Electric shaders, a 7-factor deterministic recommendation engine over 3,213 canonical exercises (normalized from 605k+ Kaggle records via Polars), local-first offline IndexedDB persistence with SHA-256 storage envelopes, and zero-trust Drizzle/Postgres security."
  },
  contact: {
    title: "Direct Contact Coordinates & UK Right to Work",
    thoughtTrace: "Retrieving verified contact details and visa status...",
    response: "Muhammad Mobeen is based in London, NW9 6EJ, and holds Full Right to Work in the UK under a Spouse Visa. You can reach him directly at 07351187884, via email at muhammadmobeen20011@gmail.com, or connect on LinkedIn at https://www.linkedin.com/in/muhammadmobeenuk."
  },
  languages: {
    title: "Multilingual Communication",
    thoughtTrace: "Reviewing language proficiencies...",
    response: "Mobeen is fluent in four languages: English (Fluent), Urdu (Native), Hindi (Fluent), and Punjabi (Fluent), enabling seamless communication across diverse technical teams and client environments."
  }
};

export function processExecutiveQuery(queryText) {
  const normalized = queryText.toLowerCase().trim();
  
  if (!normalized) {
    return {
      title: "Query Error",
      thoughtTrace: "Sanitizing input...",
      response: "Please provide a query regarding CompTIA A+, hardware diagnostics, networking, projects, timeline, or contact information."
    };
  }

  if (normalized.includes("timeline") || normalized.includes("career") || normalized.includes("education") || normalized.includes("history") || normalized.includes("journey") || normalized.includes("matric") || normalized.includes("gcse") || normalized.includes("super wings") || normalized.includes("chronolog")) {
    return EXECUTIVE_ANSWERS.timeline;
  }
  if (normalized.includes("crypto") || normalized.includes("tradex") || normalized.includes("trading") || normalized.includes("bot") || normalized.includes("binance") || normalized.includes("hedg")) {
    return EXECUTIVE_ANSWERS.cryptobot;
  }
  if (normalized.includes("hisaab") || normalized.includes("khata") || normalized.includes("ledger") || normalized.includes("udhaar") || normalized.includes("easypaisa") || normalized.includes("jazzcash")) {
    return EXECUTIVE_ANSWERS.hisaab;
  }
  if (normalized.includes("repx") || normalized.includes("fitness") || normalized.includes("gym") || normalized.includes("biomechanic")) {
    return EXECUTIVE_ANSWERS.repx;
  }
  if (normalized.includes("comptia") || normalized.includes("cert") || normalized.includes("qualification") || normalized.includes("exam")) {
    return EXECUTIVE_ANSWERS.comptia;
  }
  if (normalized.includes("hardware") || normalized.includes("solder") || normalized.includes("bms") || normalized.includes("battery") || normalized.includes("circuit") || normalized.includes("repair")) {
    return EXECUTIVE_ANSWERS.hardware;
  }
  if (normalized.includes("network") || normalized.includes("cctv") || normalized.includes("cable") || normalized.includes("router") || normalized.includes("lan") || normalized.includes("wlan")) {
    return EXECUTIVE_ANSWERS.networking;
  }
  if (normalized.includes("case") || normalized.includes("project") || normalized.includes("work") || normalized.includes("build") || normalized.includes("app")) {
    return EXECUTIVE_ANSWERS.projects;
  }
  if (normalized.includes("contact") || normalized.includes("book") || normalized.includes("hire") || normalized.includes("email") || normalized.includes("phone") || normalized.includes("visa") || normalized.includes("location") || normalized.includes("right to work")) {
    return EXECUTIVE_ANSWERS.contact;
  }
  if (normalized.includes("language") || normalized.includes("speak") || normalized.includes("urdu") || normalized.includes("english") || normalized.includes("hindi") || normalized.includes("punjabi")) {
    return EXECUTIVE_ANSWERS.languages;
  }

  // General intelligent synthesis
  return {
    title: "Technical Profile Overview",
    thoughtTrace: `Processing query: "${queryText.slice(0, 40)}..." through technical knowledge graph`,
    response: `Muhammad Mobeen is an IT Support Specialist and Systems Engineer with expertise in hardware diagnostics, component soldering, structured network cabling, and full-stack software development. Currently preparing for CompTIA A+ and available for IT roles in London with Full UK Right to Work (Spouse Visa).`
  };
}

export function executeCliCommand(rawCmd) {
  const sanitized = rawCmd.trim().toLowerCase();
  
  if (!sanitized) {
    return {
      type: "empty",
      lines: []
    };
  }

  if (sanitized === "clear") {
    return {
      type: "clear",
      lines: []
    };
  }

  const handler = CLI_COMMANDS[sanitized];
  if (handler) {
    return {
      type: "success",
      command: sanitized,
      lines: handler.output
    };
  }

  // Fuzzy match or fallback
  if (sanitized.startsWith("time") || sanitized.startsWith("chrono") || sanitized.startsWith("edu") || sanitized.startsWith("career") || sanitized.startsWith("matric")) {
    return {
      type: "success",
      command: "timeline",
      lines: CLI_COMMANDS.timeline.output
    };
  }

  if (sanitized.startsWith("crypto") || sanitized.startsWith("trade") || sanitized.startsWith("bot")) {
    return {
      type: "success",
      command: "cryptobot",
      lines: CLI_COMMANDS.cryptobot.output
    };
  }

  if (sanitized.startsWith("hisaab") || sanitized.startsWith("khata")) {
    return {
      type: "success",
      command: "hisaab",
      lines: CLI_COMMANDS.hisaab.output
    };
  }

  if (sanitized.startsWith("rep")) {
    return {
      type: "success",
      command: "repx",
      lines: CLI_COMMANDS.repx.output
    };
  }

  if (sanitized.startsWith("proj")) {
    return {
      type: "success",
      command: "projects",
      lines: CLI_COMMANDS.projects.output
    };
  }

  if (sanitized.startsWith("hard")) {
    return {
      type: "success",
      command: "hardware",
      lines: CLI_COMMANDS.hardware.output
    };
  }

  if (sanitized.startsWith("net")) {
    return {
      type: "success",
      command: "network",
      lines: CLI_COMMANDS.network.output
    };
  }

  if (sanitized.startsWith("comp")) {
    return {
      type: "success",
      command: "comptia",
      lines: CLI_COMMANDS.comptia.output
    };
  }

  return {
    type: "error",
    command: rawCmd,
    lines: [
      `zsh: command not found: ${rawCmd}`,
      "Type 'help' to see valid system commands."
    ]
  };
}
