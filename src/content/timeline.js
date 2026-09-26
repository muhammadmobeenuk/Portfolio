// src/content/timeline.js

export const TIMELINE_DATA = [
  {
    id: "proj-cryptobot",
    section: "Experience",
    role: "Software Engineer (CryptoBot 1.0)",
    timeline: "Sep 2023 – Jun 2024",
    location: "Independent",
    orderIndex: 6,
    executive: {
      role: "CryptoBot 1.0 | High-Frequency Algorithmic Execution Engine",
      company: "Independent Project",
      description: "Architected an institutional-grade cryptocurrency trading terminal and execution engine, facilitating real-time Master-to-Slave trade mirroring across up to 20 concurrent accounts via CCXT and User Data Stream WebSockets.",
      achievements: [
        "Architected real-time trade mirroring across up to 20 concurrent accounts via CCXT and User Data Stream WebSockets",
        "Engineered automated Delta-Neutral and Voltron Straddle hedging algorithms, eliminating execution slippage and unhedged drawdowns by actively managing dynamic ATR spread friction",
        "Integrated a multi-kernel AI pilot (Gemini 3.1/Gemma) for real-time market regime classification, coupled with a zero-risk SQLite-backed virtual paper trading sandbox",
        "Resolved high-concurrency order parity failure points by implementing robust error handling for WebSocket reconnection packet drops during extreme market volatility"
      ],
      tags: ["React 19", "Node.js", "Express", "WebSockets", "CCXT", "SQLite", "Google Gemini & Gemma"]
    },
    architect: {
      role: "CRYPTOBOT_MULTI_KERNEL_TERMINAL",
      company: "HIGH_FREQUENCY_TRADING_LAB",
      description: "Event-driven algorithmic execution engine orchestrated via Node.js/Express, CCXT exchange abstraction, and an isolated SQLite paper trading sandbox.",
      achievements: [
        "Engineered EventBus real-time HedgeScore decision engine from drawdown, liquidity, and ATR friction",
        "Streamed Binance WebSocket 1m-1M OHLCV klines and orderbook depth into custom TradingView canvas",
        "Built isolated SQLite paper trading ledgers (trades.db & shadow_orders.db) with margin simulation"
      ],
      tags: ["Node.js / Express", "WebSockets", "SQLite", "Delta Hedging", "CCXT"]
    }
  },
  {
    id: "proj-hisaab",
    section: "Experience",
    role: "Software Engineer (Hisaab-Kitaab)",
    timeline: "Jul 2024 – May 2025",
    location: "Independent",
    orderIndex: 7,
    executive: {
      role: "Hisaab-Kitaab | Offline-First Financial PWA",
      company: "Independent Project",
      description: "Developed a localized, offline-first Progressive Web Application (PWA) to digitize merchant credit ledgers, reducing manual transaction entry time by over 80%.",
      achievements: [
        "Designed a zero-latency offline persistence architecture utilizing Dexie.js (IndexedDB) with reactive live queries, bypassing spotty network connectivity with optional Firebase cloud sync",
        "Built a dual-engine multimodal ingestion pipeline combining Gemini 3.1 Flash voice accounting with Tesseract.js OCR to automatically parse receipts, PDFs, and mobile money statements",
        "Implemented strict UI/UX parity supporting English, Urdu, and Roman Urdu with dynamic Right-to-Left (RTL) layout switching"
      ],
      tags: ["React 19", "TypeScript", "Dexie.js", "Tailwind CSS", "Gemini 3.1 Flash", "Tesseract.js"]
    },
    architect: {
      role: "HISAAB_KITAAB_REACTIVE_LEDGER",
      company: "LOCAL_FIRST_FINANCIAL_ENGINE",
      description: "Reactive offline-first financial datastore utilizing Dexie.js for schema-versioned client-side storage, WebRTC real-time voice streaming with Gemini 3.1, and dual-engine receipt OCR.",
      achievements: [
        "Engineered ACID client datastore with live query propagation and background sync queues",
        "Built deterministic fallback parsers for mobile money statements (JazzCash / Easypaisa)",
        "Packaged universal build targets across PWA Workbox precaching and native Capacitor Android APK"
      ],
      tags: ["Dexie.js", "WebRTC Audio", "Gemini Vision", "OCR", "PWA"]
    }
  },
  {
    id: "proj-repx",
    section: "Experience",
    role: "Software Engineer (RepX AI)",
    timeline: "Jun 2025 – Present",
    location: "Independent",
    orderIndex: 8,
    executive: {
      role: "RepX AI | 3D WebGL Fitness Intelligence Platform",
      company: "Independent Project",
      description: "Engineered a high-performance fitness platform featuring an interactive 3D WebGL athlete anatomy model, utilizing custom GLSL bio-electric shaders and raycastable sub-muscle telemetry.",
      achievements: [
        "Developed a deterministic, multi-factor recommendation engine delivering <5ms response times by normalizing 605k+ dataset records using Polars across 3,213 canonical exercises",
        "Solved mobile background timer throttling—a critical failure point during active workout sessions—by utilizing absolute Unix epoch calculations for deterministic state recovery",
        "Enforced strict trust-bounded AI architectures by constraining LLM coaching strictly to pre-scored deterministic candidates, successfully eliminating generative exercise hallucinations",
        "Secured local-first offline execution by wrapping IndexedDB storage in SHA-256 cryptographic envelopes"
      ],
      tags: ["React 19", "TypeScript", "Three.js", "WebGL/GLSL", "IndexedDB", "Polars"]
    },
    architect: {
      role: "REPX_AI_CORE_PLATFORM",
      company: "FITNESS_INTELLIGENCE_ENGINE",
      description: "Constructed an enterprise cybernetic fitness engine combining Three.js 3D anatomy rendering with runtime spatial mesh splitting, custom GLSL Bio-Electric muscle charge shaders, and an offline-first IndexedDB finite-state machine.",
      achievements: [
        "605k Kaggle Raw Record Ingestion & Polars High-Performance Normalization",
        "3D Spatial Partition & GLSL Bio-Electric Muscle Charge Shader Rendering",
        "IndexedDB Local-First State Buffering & SHA-256 Cryptographic Envelope Sync"
      ],
      tags: ["Three.js (GLSL)", "Polars", "IndexedDB", "SHA-256", "Deterministic AI"]
    }
  },
  {
    id: "exp-hardware",
    section: "Experience",
    role: "IT Infrastructure & Hardware Technician",
    timeline: "Jan 2024 – Present",
    location: "London, UK",
    orderIndex: 5,
    executive: {
      role: "IT Infrastructure & Hardware Technician",
      company: "Independent Contracting (London, UK)",
      description: "Perform component-level diagnostics, electronic repairs, and system recovery on compromised enterprise and consumer hardware.",
      achievements: [
        "Execute precision SMD micro-soldering, trace reconstruction, and multi-rail voltage impedance checks on liquid-damaged motherboards",
        "Custom-engineer lithium-ion battery packs integrating active Battery Management Systems (BMS), successfully extending operational runtimes by 100%"
      ],
      tags: ["Component-Level Diagnostics", "SMD Micro-Soldering", "Active BMS", "Lithium-Ion", "Trace Reconstruction"]
    },
    architect: {
      role: "HARDWARE_DIAGNOSTICS_&_SYSTEMS_TECHNICIAN",
      company: "INDEPENDENT_CONTRACTING",
      description: "Tracing microscopic PCB power rails, isolating short-to-ground conditions with thermal probes and digital multimeters, and fabricating balanced multi-cell battery packs.",
      achievements: [
        "Engineered custom multi-cell Li-ion pack with balanced charge management and over-current protection",
        "Diagnosed 3.3V and 5V power bus short circuits on high-density multi-layer motherboards",
        "Bridged severed PCB traces using micro-jumpers and UV-curable solder mask insulation"
      ],
      tags: ["SMD Micro-Soldering", "PCB Schematics", "Thermal Probing", "Li-ion BMS", "Multimeter"]
    }
  },
  {
    id: "exp-cctv",
    section: "Experience",
    role: "Physical Infrastructure & CCTV Deployment Engineer",
    timeline: "Sep 2022 – Dec 2023",
    location: "Pakistan",
    orderIndex: 4,
    executive: {
      role: "Physical Infrastructure & CCTV Deployment Engineer",
      company: "Commercial & Residential Installations",
      description: "Planned and executed on-premises CCTV surveillance networks, structured Cat6 network cabling, and local networking hardware installations for commercial facilities.",
      achievements: [
        "Terminated and routed high-density Cat6 structured Ethernet cabling adhering strictly to T568B enterprise standards",
        "Configured LAN/WLAN routers, subnetting, DHCP reservations, and port forwarding rules for secure remote NVR/DVR access"
      ],
      tags: ["CCTV (NVR/DVR)", "Cat6 Cabling", "LAN / WLAN", "Router Config", "Hardware Mounting"]
    },
    architect: {
      role: "PHYSICAL_INFRASTRUCTURE_&_SURVEILLANCE_LEAD",
      company: "FACILITY_DEPLOYMENT_OPS",
      description: "Executed Layer 1 physical cabling to Layer 3 IP routing, PoE switch power budgeting, RTSP streaming configuration, and electrical circuit integration.",
      achievements: [
        "Calculated 802.3af/at PoE power budgets for multi-node IP surveillance installations",
        "Configured secure remote access gateways with encrypted DDNS and firewall port restrictions",
        "Conducted physical structural modifications and electrical wiring for commercial equipment"
      ],
      tags: ["Structured Cabling", "IP Cameras", "Subnetting", "PoE", "Electrical Wiring"]
    }
  },
  {
    id: "edu-comptia",
    section: "Education",
    role: "CompTIA A+ Certification Preparation",
    timeline: "Target Completion: Nov 2026",
    location: "London, UK",
    orderIndex: 3,
    executive: {
      role: "CompTIA A+ Certification Preparation",
      company: "London, UK",
      description: "Structured lab practice across Core 1 (220-1101) and Core 2 (220-1102) domains.",
      achievements: [
        "Validating enterprise hardware diagnostics, Layer 2/3 networking protocols (TCP/IP, DNS, DHCP, VLANs), and multi-OS administration."
      ],
      tags: ["CompTIA A+", "Networking (TCP/IP)", "OS Diagnostics", "Virtualization", "Security"]
    },
    architect: {
      role: "COMPTIA_A+_CERTIFICATION_PIPELINE",
      company: "CORE_1_&_CORE_2_EXAM_DOMAINS",
      description: "Systematic diagnostic modeling and hardware simulation across 220-1101 & 220-1102 exam criteria, validating hardware buses, network packet flows, and security protocols.",
      achievements: [
        "Synthesized protocol behaviors for DHCP DORA cycle, DNS hierarchy, subnet boundaries, and 802.11 Wi-Fi standards",
        "Automated Windows CLI diagnostics (DISM, SFC, Netsh, Diskpart) and Linux bash administration workflows",
        "Hardened access control, endpoint security policies, and incident response runbooks"
      ],
      tags: ["220-1101 / 220-1102", "TCP/IP Subnetting", "PowerShell / Bash", "OS Hardening", "Hardware Telemetry"]
    }
  },
  {
    id: "edu-ics",
    section: "Education",
    role: "Intermediate in Computer Science (I.C.S)",
    timeline: "Jul 2018 – Apr 2020",
    location: "Super Wings College | Pakistan",
    orderIndex: 2,
    executive: {
      role: "Intermediate in Computer Science (I.C.S)",
      company: "Super Wings College",
      description: "Core focus: Programming Logic, Computer Architecture, Computational Mathematics, and Applied Physics.",
      achievements: [
        "Studied core computer science principles, data structures, and computer architecture.",
        "Developed foundational problem-solving skills bridging hardware logic and software programming."
      ],
      tags: ["Intermediate in CS (I.C.S)", "Programming Logic", "Computer Architecture", "Mathematics", "Physics"]
    },
    architect: {
      role: "INTERMEDIATE_COMPUTER_SCIENCE_FOUNDATIONS",
      company: "SUPER_WINGS_COLLEGE",
      description: "Formal curriculum in computer systems architecture, procedural programming logic, boolean algebra, and applied physics.",
      achievements: [
        "Gained deep understanding of CPU instruction cycles, memory architectures, and binary arithmetic",
        "Formulated algorithmic solutions to mathematical and computational problems",
        "Established theoretical principles bridging hardware electronics and software algorithms"
      ],
      tags: ["Computer Science", "Boolean Algebra", "Algorithms", "Physics", "Computational Logic"]
    }
  },
  {
    id: "edu-matric",
    section: "Education",
    role: "Matriculation (GCSE Equivalent)",
    timeline: "Jan 2016 – Mar 2018",
    location: "The Educators | Pakistan",
    orderIndex: 1,
    executive: {
      role: "Matriculation (GCSE Equivalent)",
      company: "The Educators",
      description: "Science and Computer Science focus. Multilingual fluency: English, Urdu, Hindi, Punjabi.",
      achievements: [
        "Completed foundational secondary education with a focus on science and mathematics.",
        "Demonstrated multilingual fluency: English, Urdu, Hindi, and Punjabi."
      ],
      tags: ["Matriculation", "Science", "Mathematics", "Multilingual", "Deductive Logic"]
    },
    architect: {
      role: "MATRICULATION_GCSE_EQUIVALENT",
      company: "THE_EDUCATORS_PAKISTAN",
      description: "Core secondary education in science, algebra, physics, and foundational computer literacy.",
      achievements: [
        "Mastered foundational algebra, basic physics, and empirical scientific deduction",
        "Developed multilingual communication capabilities facilitating international technical collaboration",
        "Laid the initial groundwork for technical curiosity and electronics repair"
      ],
      tags: ["Foundations", "Science", "Mathematics", "Multilingual", "Deductive Logic"]
    }
  }
];

