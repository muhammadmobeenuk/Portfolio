import React from 'react';
import { ArrowRight, Terminal, Sparkles, ChevronRight, Activity, Linkedin, ShieldCheck } from 'lucide-react';
import { playClick } from '../../utils/audio';

export default function Hero({ title, subtitle, isGodMode, themeMode = 'dark', onOpenAgentConsole, ctaPrimary, ctaSecondary }) {
  const scrollToProjects = () => {
    playClick(480, 0.04);
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleConsoleClick = () => {
    playClick(640, 0.05);
    onOpenAgentConsole();
  };

  const kpis = isGodMode ? [
    { label: "HARDWARE DIAGNOSTICS", value: "Component-Level" },
    { label: "ORDER STREAMING", value: "Real-Time WS" },
    { label: "CABLING STANDARD", value: "Cat6 T568B" },
    { label: "EMBEDDED FIRMWARE", value: "Arduino / C++" }
  ] : [
    { label: "TARGET CERTIFICATION", value: "CompTIA A+" },
    { label: "WORK AUTHORIZATION", value: "UK Full Rights" },
    { label: "POWER ENGINEERING", value: "+100% BMS Li-ion" },
    { label: "MULTILINGUAL", value: "4 Languages" }
  ];

  const primaryBtnText = ctaPrimary || (isGodMode ? "Inspect Systems Architecture" : "Explore Technical Projects");
  const secondaryBtnText = ctaSecondary || (isGodMode ? "Launch Terminal Co-Pilot" : "Consult Systems AI");

  return (
    <section className="relative min-h-[82vh] flex flex-col justify-center items-center px-4 sm:px-6 pt-12 md:pt-8 w-full">
      <div className="w-full max-w-5xl text-center space-y-7 md:space-y-9">
        
        {/* Top Status Radar Pill */}
        <div className="inline-flex items-center justify-center">
          <div className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 rounded-full border text-xs font-semibold backdrop-blur-xl transition-all duration-500 shadow-sm ${
            isGodMode 
              ? "bg-[#060a08]/85 border-green-500/40 text-green-300 font-mono shadow-[0_0_20px_rgba(34,197,94,0.18)]" 
              : themeMode === "light"
              ? "bg-white/90 border-slate-200 text-slate-800 shadow-md shadow-slate-200/50 font-sans"
              : "bg-[#0c1222]/80 border-slate-800/80 text-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.06)] font-sans"
          }`}>
            <span className="relative flex h-2.5 w-2.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isGodMode ? "bg-green-400" : themeMode === "light" ? "bg-blue-600" : "bg-cyan-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${
                isGodMode ? "bg-green-500" : themeMode === "light" ? "bg-blue-600" : "bg-cyan-400"
              }`} />
            </span>
            <span className="tracking-wide">
              {isGodMode 
                ? "root@systems-kernel: hardware_diagnostics_&_trading_engines" 
                : "Available for IT Support, Hardware & Systems Roles (London, UK)"}
            </span>
            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
          </div>
        </div>

        {/* High-Impact Master Headline */}
        <div className="space-y-5">
          <h1 
            key={title} 
            className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] transition-all duration-700 ${
              isGodMode 
                ? "text-green-400 font-mono drop-shadow-[0_0_30px_rgba(34,197,94,0.45)] text-glow-green" 
                : themeMode === "light"
                ? "text-slate-900 font-display tracking-tight drop-shadow-sm"
                : "text-white font-display tracking-tight drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]"
            }`}
          >
            {title}
          </h1>
          
          <p 
            key={subtitle}
            className={`text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${
              isGodMode 
                ? "text-green-300/80 font-mono" 
                : themeMode === "light"
                ? "text-slate-600 font-normal"
                : "text-slate-300/90 font-normal"
            }`}
          >
            {subtitle}
          </p>
        </div>

        {/* Action CTAs with Specular Glow */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <button
            onClick={scrollToProjects}
            className={`px-8 py-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 group shadow-xl active:scale-95 cursor-pointer ${
              isGodMode
                ? "bg-green-500 text-black hover:bg-green-400 hover:shadow-[0_0_35px_rgba(34,197,94,0.55)] font-mono"
                : "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_35px_rgba(37,99,235,0.4)] border border-blue-400/30"
            }`}
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={handleConsoleClick}
            className={`px-7 py-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2.5 border active:scale-95 cursor-pointer backdrop-blur-xl ${
              isGodMode
                ? "bg-black/70 border-green-500/50 text-green-400 hover:bg-green-500/15 hover:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.15)] font-mono"
                : themeMode === "light"
                ? "bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-950 shadow-md shadow-slate-200/50"
                : "bg-[#0c1222]/80 border-slate-800/90 text-slate-200 hover:bg-[#121b30] hover:border-slate-700 hover:text-white shadow-lg shadow-black/40"
            }`}
          >
            {isGodMode ? <Terminal className="w-4 h-4 text-green-400" /> : <Sparkles className={`w-4 h-4 ${themeMode === "light" ? "text-blue-600" : "text-cyan-400"}`} />}
            <span>{secondaryBtnText}</span>
          </button>

          <a
            href="https://www.linkedin.com/in/muhammadmobeenuk"
            target="_blank"
            rel="noreferrer"
            className={`px-6 py-4 rounded-2xl font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 flex items-center gap-2 border active:scale-95 cursor-pointer backdrop-blur-xl ${
              isGodMode
                ? "bg-black/70 border-green-500/50 text-green-400 hover:bg-green-500/15 hover:border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.15)] font-mono"
                : themeMode === "light"
                ? "bg-white border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-400 shadow-md shadow-blue-100/50"
                : "bg-[#0b162c]/80 border-blue-500/40 text-cyan-300 hover:bg-[#102142] hover:border-blue-400 hover:text-white shadow-lg shadow-black/40"
            }`}
          >
            <Linkedin className="w-4 h-4 text-blue-500 shrink-0" />
            <span>LinkedIn</span>
          </a>
        </div>

        {/* Quick Credentials & KPI Glass Ribbon */}
        <div className="pt-8 sm:pt-10 w-full max-w-4xl mx-auto">
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 p-4 sm:p-5 rounded-3xl border transition-all duration-500 ${
            isGodMode 
              ? "bg-[#050806]/85 border-green-500/30 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.85)]" 
              : themeMode === "light"
              ? "bg-white/95 border-slate-200/90 backdrop-blur-2xl shadow-xl shadow-slate-200/60"
              : "bg-[#0c1222]/80 border-slate-800/80 backdrop-blur-2xl shadow-[0_15px_40px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]"
          }`}>
            {kpis.map((kpi, index) => (
              <div key={index} className="text-center px-2 py-2 rounded-2xl transition-colors hover:bg-inherit/40">
                <p className={`text-base sm:text-lg md:text-xl font-black ${
                  isGodMode ? "text-green-400 font-mono" : themeMode === "light" ? "text-slate-900 font-display" : "text-white font-display"
                }`}>
                  {kpi.value}
                </p>
                <p className={`text-[10px] uppercase font-bold tracking-wider pt-1 ${
                  isGodMode ? "text-green-500/70 font-mono" : themeMode === "light" ? "text-slate-500 font-sans" : "text-slate-400 font-sans"
                }`}>
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}