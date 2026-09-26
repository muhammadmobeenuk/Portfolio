// src/content/projects.jsx

export const PROJECTS = [
  {
    id: 1,
    category: "Real-Time Systems & WebSockets",
    images: [
      "/images/projects/cryptobot/CryptoBot1.png",
      "/images/projects/cryptobot/CryptoBot2.png",
      "/images/projects/cryptobot/CryptoBot3.png",
      "/images/projects/cryptobot/CryptoBot4.png"
    ],
    executive: {
      title: "CryptoBot 1.0 Terminal",
      tagline: "High-Frequency Dual-Account Terminal & AI Bot Pilot",
      description: "An institutional-grade algorithmic trading terminal designed to replicate strategies across multiple accounts in real-time. Features automated risk management (Delta-Neutral hedging), AI-driven market analysis, and a zero-risk virtual trading sandbox to test strategies without financial exposure. Built to handle extreme market volatility with zero latency.",
      impact: "Real-Time WebSocket Mirroring & Delta Hedging",
      techStack: ["React 19", "Lightweight Charts", "Node.js / Express", "WebSockets / Socket.IO", "Google Gemini & Gemma", "CCXT", "Better-SQLite3", "Tailwind CSS 4"],
      keyMetrics: [
        { label: "Order Replication", value: "Real-Time WebSocket Sync" },
        { label: "AI Bot Matrix", value: "Gemini 3.1 + Gemma 3 27B" },
        { label: "Hedge Engine", value: "Delta-Neutral & Auto-Recovery" }
      ],
      strategicTakeaway: "Eliminates execution slippage, latency asymmetry, and unhedged drawdowns across multi-account portfolios by coupling automated delta-neutral position hedging with real-time AI market regime classification and zero-risk paper trading simulation.",
      businessChallenges: "Maintaining high-concurrency order execution parity across up to 20 accounts while handling WebSocket reconnection packet drops, dynamic ATR spread friction, and exchange rate-limit constraints during extreme volatility."
    },
    architect: {
      title: "CRYPTOBOT_MULTI_KERNEL_ENGINE",
      tagline: "React 19 / Express / CCXT / Gemini AI / Lightweight Charts / SQLite",
      description: "Event-driven algorithmic execution engine orchestrated via Node.js/Express and EventBus. Integrates Binance User Data Stream WebSockets, CCXT exchange abstraction, multi-kernel Google Gemini/Gemma AI pipelines, dynamic SuperTrend/Alligator canvas charting, and an isolated SQLite paper trading engine.",
      impact: "Zero-Lag Mirroring & Hedge Parity",
      techStack: ["React 19", "Lightweight Charts", "Node.js / Express", "WebSockets / Socket.IO", "Google Gemini & Gemma", "CCXT", "Better-SQLite3", "Tailwind CSS 4"],
      keyMetrics: [
        { label: "Multi-Account Sync", value: "Up to 20 Slave Accounts" },
        { label: "AI Cadence", value: "5-Min Sentiment Loop & Live Kernel" },
        { label: "Paper Engine", value: "Cross/Isolated Margin (1x–125x)" }
      ],
      architectureDetails: "EventBus decision engine calculating real-time HedgeScore from drawdown, liquidity, and ATR friction. Binance WebSocket orderbook depth and User Data streams drive instant CCXT slave replication with HMAC signature validation, automated desync reconciliation modals, and isolated SQLite ledgers (trades.db, shadow_orders.db).",
      pipelineSteps: [
        "Binance WebSocket Ingestion: 1m–1M OHLCV klines, orderbook depth & User Data fill events",
        "Multi-Kernel AI Telemetry: Gemini 3.1 Flash news sentiment + Gemma 3 27B ATR buffer calibration",
        "EventBus Decision Engine: HedgeScore calculation, offset buffers & hard drawdown circuit breakers",
        "CCXT Atomic Mirroring: High-speed order broadcast to slave accounts with HMAC validation",
        "Shadow Mode Engine: Full margin/leverage matching against live Binance trade feeds in SQLite"
      ],
      complexity: "Latency: Event-driven WebSocket mirroring | Risk: Delta-neutral dynamic ATR hedge | Storage: Synchronous SQLite"
    }
  },
  {
    id: 2,
    category: "Fintech & Offline PWA",
    images: [
      "/images/projects/hisaab-kitaab/hk-cover.png",
      "/images/projects/hisaab-kitaab/hk-dashboard.png",
      "/images/projects/hisaab-kitaab/hk-pos.png",
      "/images/projects/hisaab-kitaab/hk-reports.png",
      "/images/projects/hisaab-kitaab/hk-calendar.png",
      "/images/projects/hisaab-kitaab/hk-quick-add.png"
    ],
    executive: {
      title: "Hisaab-Kitaab Finance App",
      tagline: "Digital Ledger (Khata) & Offline-First PWA",
      description: "A specialized financial ledger and business management application designed to digitize traditional credit for merchants. Engineered as an offline-first platform, it functions seamlessly without internet access. Features include hands-free voice accounting, automatic receipt scanning, and full multilingual support (English, Urdu) to drastically reduce manual data entry time.",
      impact: "Offline-First Digital Ledger & OCR Ingestion",
      techStack: ["React 19", "TypeScript", "Dexie.js (IndexedDB)", "Gemini 3.1 Flash", "Firebase", "Tailwind CSS v4", "Capacitor 8", "Tesseract.js"],
      keyMetrics: [
        { label: "Offline Storage", value: "100% Local IndexedDB" },
        { label: "Document Ingestion", value: "PDF, OCR & CSV (Gemini)" },
        { label: "Localization", value: "Trilingual + RTL (Urdu)" }
      ],
      strategicTakeaway: "Empowered small business owners to replace error-prone paper ledgers with an offline-resilient PWA and Android APK, reducing transaction entry time by over 80% through voice dictation and automatic receipt extraction.",
      businessChallenges: "Micro-merchants in emerging markets frequently encounter spotty internet connectivity and informal accounting practices. Built an offline-first architecture using Dexie reactive live queries, dual-engine statement parsing (Gemini Vision + offline regex fallbacks for mobile money), and full Urdu RTL layout parity."
    },
    architect: {
      title: "HISAAB_KITAAB_ENGINE",
      tagline: "Dexie IndexedDB / Gemini 3.1 Live Voice / PWA & Capacitor / Firebase",
      description: "Constructed a reactive offline-first architecture utilizing Dexie.js v4 for schema-versioned client-side persistence and dexie-react-hooks for live query propagation. Implemented hands-free WebRTC voice accounting using Gemini 3.1 Flash, client-side OCR pipelines (PDF.js + Tesseract.js) with deterministic fallback parsers for JazzCash/Easypaisa, and multi-tenant personal vs. business context separation with PIN-based access control.",
      impact: "Zero-Lag Offline Storage & Multimodal Parsing",
      techStack: ["React 19 / Vite", "TypeScript 5.8", "Dexie.js (IndexedDB)", "Google Gemini (@google/genai)", "Firebase Firestore", "Capacitor 8", "Workbox PWA", "Recharts"],
      keyMetrics: [
        { label: "Client Database", value: "Dexie.js v4 Live Queries" },
        { label: "Voice Streaming", value: "< 350ms Real-Time Audio" },
        { label: "Platform Target", value: "PWA + Native Android APK" }
      ],
      architectureDetails: "IndexedDB client datastore with Zod schema validation and reactive hooks, Workbox service worker precaching, optional Firebase Firestore bidirectional cloud sync, and isolation between personal finances and business credit ledgers.",
      pipelineSteps: [
        "Multimodal Ingestion (Gemini Vision / PDF.js / Tesseract.js / JazzCash Fallback)",
        "Deterministic Data Sanitization, Amount Normalization & Category Mapping",
        "Atomic ACID Transaction Commit to Local Dexie.js IndexedDB Datastore",
        "Reactive UI State Propagation (Live Queries) & Optional Firestore Cloud Sync"
      ],
      complexity: "Storage: ACID IndexedDB with sync queue | Multimodal: WebRTC audio + OCR vision"
    }
  },
  {
    id: 3,
    category: "Full-Stack & 3D WebGL",
    images: [
      "/images/projects/repx/RepX1.png",
      "/images/projects/repx/RepX2.png",
      "/images/projects/repx/RepX3.png",
      "/images/projects/repx/RepX4.png",
      "/images/projects/repx/RepX5.png",
      "/images/projects/repx/RepX6.png",
      "/images/projects/repx/RepX7.png",
      "/images/projects/repx/RepX8.png"
    ],
    executive: {
      title: "RepX AI : Gym Platform",
      tagline: "Cybernetic Fitness Intelligence & 3D WebGL Telemetry",
      description: "A highly resilient personal fitness intelligence platform built for active gym environments. Overcomes poor connectivity and device throttling by running entirely offline. Key features include an interactive 3D anatomy visualizer and an AI-powered recommendation engine that processes over 600,000 data points to deliver instant, customized workout plans with zero lag.",
      impact: "3D WebGL Anatomy & Offline Resilience",
      techStack: ["Three.js", "WebGL / GLSL", "React 19", "TypeScript", "Drizzle ORM", "PostgreSQL / PGlite", "Python (Polars)", "Google Gemini"],
      keyMetrics: [
        { label: "Data Processing", value: "605k+ Kaggle Records" },
        { label: "Recommendation Speed", value: "< 5ms Deterministic" },
        { label: "3D Anatomy Heads", value: "27 Sub-Muscles" }
      ],
      strategicTakeaway: "Built an enterprise-grade fitness architecture combining 44×44px tactile gym-floor UI, zero layout shifts, local-first offline execution with background sync, and strict trust-bounded AI coaching that eliminates exercise hallucinations.",
      businessChallenges: "Active workout sessions demand absolute reliability with zero latency and offline capability. Solved mobile background timer throttling using absolute Unix epoch calculations, and prevented generative AI hallucinations by constraining LLM coaching strictly to pre-scored deterministic candidates."
    },
    architect: {
      title: "REPX_AI_CORE_PLATFORM",
      tagline: "WebGL Shaders / Polars Pipeline / Local-First FSM / Drizzle ORM",
      description: "Constructed an enterprise cybernetic fitness engine combining Three.js 3D anatomy rendering with runtime spatial mesh splitting, custom GLSL Bio-Electric muscle charge shaders, a 7-factor deterministic recommendation algorithm across 3,213 normalized exercises, and an offline-first IndexedDB finite-state machine sealed with SHA-256 StorageEnvelopes.",
      impact: "Sub-5ms Scorer & Zero Data Loss",
      techStack: ["Three.js (GLSL)", "React 19 / Vite", "Drizzle ORM", "PostgreSQL / PGlite", "Polars (Python)", "IndexedDB (idb)", "Argon2id / CSRF"],
      keyMetrics: [
        { label: "Scorer Latency", value: "< 5ms Heuristics" },
        { label: "Persistence Layer", value: "PGlite / Postgres Dual" },
        { label: "Test Suite", value: "275 Automated Tests" }
      ],
      architectureDetails: "Zero-trust backend with multi-tenant isolation (WHERE id = :id AND user_id = :userId), Argon2id password hashing, CSRF synchronizer tokens, Drizzle ORM schema with UUIDv7 keys, and an immutable finite-state machine (initializing -> in_progress -> completed) backed by IndexedDB and SHA-256 storage envelope verification.",
      pipelineSteps: [
        "605k Kaggle Raw Record Ingestion & Polars High-Performance Normalization",
        "3D Spatial Partition & GLSL Bio-Electric Muscle Charge Shader Rendering",
        "7-Factor Deterministic Compatibility Scoring (< 5ms, Zero Hallucinations)",
        "IndexedDB Local-First State Buffering & Cryptographic Envelope Sync"
      ],
      complexity: "Algorithmic: 7-factor weighted heuristic | Graphics: Multi-pass GLSL & spatial mesh splitting"
    }
  },
  {
    id: 4,
    category: "Hardware Diagnostics & Electronics",
    executive: {
      title: "Advanced Hardware Diagnostics & Repair",
      tagline: "Component-Level Restoration & BMS Engineering",
      description: "Performed highly technical component-level diagnostics and repair on damaged enterprise and consumer hardware. Engineered custom power management solutions, including battery management systems, to successfully extend equipment operational runtime by over 100%, demonstrating a deep understanding of low-level electronics and physical IT systems.",
      impact: "+100% Operational Runtime",
      techStack: ["Micro-Soldering", "BMS Integration", "Motherboard Diagnostics", "Li-ion Cells", "Multimeter"],
      keyMetrics: [
        { label: "Runtime Increase", value: "+100% via Active BMS" },
        { label: "Salvage Success", value: "Liquid Damage Reversal" },
        { label: "Cell Configuration", value: "Balanced Li-ion Pack" }
      ],
      strategicTakeaway: "Delivered component-level repair solutions that fully restored severely compromised hardware at a fraction of replacement cost, coupled with custom power mods.",
      businessChallenges: "Microscopic corrosion bridging solder joints and shorting high-voltage supply rails to sensitive ground planes required micro-soldering and trace reconstruction."
    },
    architect: {
      title: "PCB_DIAGNOSTICS_&_BMS",
      tagline: "Micro-Soldering / Circuit Tracing / BMS",
      description: "Disassembled high-density multilayer PCBs, traced power rail shorts using thermal inspection and multimeters, and micro-soldered replacement SMD components. Engineered balanced multi-cell Li-ion pack with active Battery Management System.",
      impact: "Zero-Resistance Rail Repair",
      techStack: ["SMD Micro-Soldering", "Thermal Probing", "Active BMS", "Circuit Schematics", "Oscilloscope"],
      keyMetrics: [
        { label: "Diagnostic Method", value: "Signal Line Tracing" },
        { label: "BMS Protection", value: "Over-current / Thermal / Balance" },
        { label: "Soldering Standard", value: "SMD / Micro-Pads" }
      ],
      architectureDetails: "Schematic analysis to identify 3.3V/5V power rail short-to-ground conditions, ultrasonic flux de-oxidation, micro-jumper trace bridging, and constant-current/constant-voltage BMS charge regulation.",
      pipelineSteps: [
        "Multimeter Continuity & Impedance Rail Mapping",
        "Ultrasonic Cleaning & Corrosion Neutralization",
        "SMD Component Desoldering & Micro-Jumper Bridging",
        "BMS Cell Voltage Balancing & Thermal Stress Testing"
      ],
      complexity: "Physical: Micron-scale micro-soldering | Electrical: 1S-4S BMS"
    }
  },
  {
    id: 5,
    category: "Embedded Systems & IoT",
    images: [
      "/images/projects/iot/board1.jpg",
      "/images/projects/iot/board2.png",
      "/images/projects/iot/board3.jpg"
    ],
    executive: {
      title: "IoT Home Automation Framework",
      tagline: "Smart Microcontroller Automation",
      description: "Developed a comprehensive IoT home automation framework bridging hardware and software. Transformed standard electrical appliances into intelligent, voice-activated smart systems with mobile control, emphasizing safety, low latency, and secure network integration.",
      impact: "Unified Smart Environment",
      techStack: ["Arduino", "C/C++", "Relay Logic", "Smart Assistant", "IoT Protocols"],
      keyMetrics: [
        { label: "Control Channels", value: "Multi-Channel Relay" },
        { label: "Interface", value: "Voice & Mobile App" },
        { label: "Response Lag", value: "< 200ms Actuation" }
      ],
      strategicTakeaway: "Transformed standard high-voltage electrical appliances into intelligent, voice-activated environmental systems with seamless manual fallback switches.",
      businessChallenges: "Isolating low-voltage 5V microcontroller logic from 240V AC mains to eliminate inductive kickback interference and ensure absolute operational safety."
    },
    architect: {
      title: "ARDUINO_RELAY_IOT_CORE",
      tagline: "Arduino C++ / Optocoupler Isolation / Relays",
      description: "Embedded C++ state machine running on Arduino with opto-isolated relay modules, debounced physical GPIO inputs, and smart assistant wireless gateway bridge integration.",
      impact: "Opto-Isolated AC Switching",
      techStack: ["Arduino C++", "Relay Modules", "Optocouplers", "WiFi / MQTT", "GPIO Interrupts"],
      keyMetrics: [
        { label: "Firmware", value: "Non-Blocking C++ Loop" },
        { label: "Galvanic Isolation", value: "Optocoupler Array" },
        { label: "Command Latency", value: "< 45ms Local" }
      ],
      architectureDetails: "Hardware interrupt-driven edge detection for physical toggle switches, non-blocking millis() state management, and fail-safe default-off relay coil states.",
      pipelineSteps: [
        "Voice Assistant / Mobile MQTT Command Reception",
        "Microcontroller Firmware Interlock & Bounds Check",
        "Optocoupler Signal Trigger & Relay Armature Energization",
        "State Telemetry Broadcast to Smart Network Bridge"
      ],
      complexity: "Firmware: Deterministic state machine | Safety: Full galvanic isolation"
    }
  },
  {
    id: 6,
    category: "Network Infrastructure & Deployment",
    executive: {
      title: "CCTV Network & Infrastructure",
      tagline: "Commercial & Residential Cabling",
      description: "Planned and deployed secure, on-premises network and surveillance infrastructure for commercial facilities. Managed structured cabling, IP routing, and firewall configurations to ensure robust, 24/7 facility monitoring with encrypted remote access.",
      impact: "Secure Multi-Point Coverage",
      techStack: ["CCTV (NVR/DVR)", "Structured Cabling (Cat6)", "LAN/WLAN", "Router Config", "Electrical Wiring"],
      keyMetrics: [
        { label: "Infrastructure", value: "Structured Cat6 / RJ45" },
        { label: "Surveillance", value: "Local NVR & Remote Access" },
        { label: "Certification", value: "CompTIA A+ Aligned" }
      ],
      strategicTakeaway: "Designed and deployed tamper-resistant physical IT networks and security surveillance, providing continuous 24/7 facility monitoring with encrypted mobile access.",
      businessChallenges: "Routing cabling through complex architectural conduits while maintaining strict bend radiuses and avoiding high-voltage AC electromagnetic interference."
    },
    architect: {
      title: "INFRASTRUCTURE_&_CCTV_NET",
      tagline: "Structured Cabling / NVR / Subnetting",
      description: "Terminated T568B Cat6 cabling, configured static IP addressing and port forwarding on local routers, set up multi-channel NVR recording streams, and integrated clean electrical power distribution.",
      impact: "Gigabit LAN & Secure RTSP",
      techStack: ["Cat6 Termination (T568B)", "NVR/DVR IP Cameras", "Subnetting / VLAN", "DDNS / Port Forwarding", "PoE Injectors"],
      keyMetrics: [
        { label: "Bandwidth", value: "1000BASE-T Gigabit" },
        { label: "Power Delivery", value: "802.3af/at PoE" },
        { label: "Stream Protocol", value: "RTSP / H.265+" }
      ],
      architectureDetails: "Isolated surveillance traffic onto dedicated IP subnets, configured PoE power budgets for outdoor weather-sealed cameras, and established secure remote access via encrypted DDNS tunnel.",
      pipelineSteps: [
        "Physical Site Survey, Cable Path & PoE Budget Planning",
        "T568B Cat6 Pulling, Punch-Down & Continuity Testing",
        "NVR Camera IP Addressing, Subnetting & RTSP Stream Config",
        "Router Firewall Rule Setup & Secure Remote Gateway Verification"
      ],
      complexity: "Physical: T568B standard | Network: Layer 2/3 IP Subnetting"
    }
  }
];