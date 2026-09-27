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
      role: "CryptoBot 1.0 | Real-Time Algorithmic Execution Platform",
      company: "Independent Product / Full-Stack Project",
      description: "Architected a real-time execution terminal using React, Node.js and WebSockets, with Master-to-Slave trade mirroring across up to 20 concurrent accounts.",
      achievements: [
        "Architected a real-time execution terminal using React, Node.js and WebSockets, with Master-to-Slave trade mirroring across up to 20 concurrent accounts.",
        "Integrated CCXT exchange APIs and User Data Stream WebSockets for live account and order-state synchronisation.",
        "Implemented automated hedging logic and an AI market-regime classification layer using Gemini/Gemma within a controlled paper-trading sandbox.",
        "Improved resilience under high concurrency by handling WebSocket reconnection and packet-drop scenarios during volatile workloads."
      ],
      tags: ["React 19", "Node.js", "Express", "WebSockets", "CCXT", "SQLite", "Gemini", "Gemma"]
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
      company: "Independent Product / Full-Stack Project",
      description: "Built an offline-first merchant ledger PWA that reduced manual transaction-entry effort by 80%+ through workflow automation.",
      achievements: [
        "Built an offline-first merchant ledger PWA that reduced manual transaction-entry effort by 80%+ through workflow automation.",
        "Designed zero-latency local persistence with IndexedDB/Dexie.js and optional Firebase synchronisation for unreliable connectivity.",
        "Created a multimodal ingestion pipeline using Gemini Vision and Tesseract.js OCR to parse receipts, PDFs and mobile-money statements.",
        "Implemented English, Urdu and Roman Urdu UI support with dynamic right-to-left (RTL) layout switching."
      ],
      tags: ["React 19", "TypeScript", "Dexie.js", "IndexedDB", "Tailwind CSS", "Gemini Vision", "Tesseract.js", "Firebase"]
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
      company: "Independent Product / Full-Stack Project",
      description: "Processed and normalised 605K+ dataset records across 3,213 canonical exercises using Polars to support deterministic recommendations.",
      achievements: [
        "Processed and normalised 605K+ dataset records across 3,213 canonical exercises using Polars to support deterministic recommendations.",
        "Engineered an interactive 3D athlete anatomy experience with custom GLSL visualisation and raycastable muscle telemetry.",
        "Achieved sub-5ms recommendation responses and solved mobile background-timer throttling with Unix epoch-based deterministic state recovery.",
        "Constrained AI coaching to pre-scored deterministic candidates and protected local-first IndexedDB data using SHA-256 cryptographic envelopes."
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
    role: "Technical Specialist & Hardware Support",
    timeline: "Jan 2024 – Present",
    location: "London, UK | Hybrid",
    orderIndex: 5,
    executive: {
      role: "Technical Specialist & Hardware Support",
      company: "Independent Contractor",
      description: "Perform component-level diagnostics, board repair and system recovery on consumer computers and laptops, including liquid-damaged motherboards and user-data recovery.",
      achievements: [
        "Perform component-level diagnostics, board repair and system recovery on consumer computers and laptops, including liquid-damaged motherboards and user-data recovery.",
        "Execute SMD micro-soldering, trace reconstruction and multi-rail voltage/impedance checks to isolate hardware faults.",
        "Engineer custom power-management solutions and lithium-ion battery packs with active BMS integration, extending operational runtimes by up to 100%.",
        "Plan and deploy physical/wireless networking: Cat6 routing and RJ-45 termination, gateway/router configuration, subnets and Wi-Fi access points.",
        "Integrate IoT microcontrollers and relays with voice/smart ecosystems, considering circuit load and safe assembly."
      ],
      tags: ["Component-Level Diagnostics", "SMD Micro-Soldering", "Active BMS", "Lithium-Ion", "Networking"]
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
      description: "Planned and executed CCTV surveillance networks, structured Cat6 cabling and local networking installations for commercial and residential environments.",
      achievements: [
        "Planned and executed CCTV surveillance networks, structured Cat6 cabling and local networking installations for commercial and residential environments.",
        "Terminated and routed high-density Ethernet cabling to T568B standards and configured LAN/WLAN networking equipment.",
        "Configured subnetting, DHCP reservations and port-forwarding rules to enable secure remote NVR/DVR access."
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
    timeline: "Jan 2026 – Dec 2026 | In Progress",
    location: "London, UK",
    orderIndex: 3,
    executive: {
      role: "CompTIA A+ — Professional Certification Track",
      company: "London, UK",
      description: "Preparing across Core 1 (220-1101) and Core 2 (220-1102), including PC/mobile hardware, operating systems, networking, troubleshooting and security baselines.",
      achievements: [
        "Preparing across Core 1 (220-1101) and Core 2 (220-1102), including PC/mobile hardware, operating systems, networking, troubleshooting and security baselines.",
        "Practical coverage of TCP/IP, DNS, DHCP, VLANs, Windows, macOS and Linux fundamentals."
      ],
      tags: ["CompTIA A+", "Networking", "OS Diagnostics", "Security", "Hardware"]
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
  }
];

