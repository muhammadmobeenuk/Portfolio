import { useState, useEffect, useMemo, useCallback } from "react";

// Content & Data
import ABOUT_CONTENT from "./content/About_me";
import HERO_CONTENT from "./content/Hero_content";
import { PROJECTS } from "./content/projects";

// Layout Components
import Navigation from "./components/layout/Navigation";
import BackgroundEffects from "./components/layout/BackgroundEffects";
import ScanOverlay from "./components/layout/ScanOverlay";
import IdentityStatus from "./components/layout/IdentityStatus";
import AgentConsole from "./components/layout/AgentConsole";
import TelemetryBar from "./components/layout/TelemetryBar";

// Section Components
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import SkillsMatrix from "./components/sections/SkillsMatrix";
import CareerTimeline from "./components/sections/CareerTimeline";
import Contact from "./components/sections/Contact";
import ProjectCard from "./components/ui/ProjectCard"; 
import ProjectDetailModal from "./components/ui/ProjectDetailModal";

// Utilities & Icons
import { Search, Filter, Layers, ArrowUp, Github, ExternalLink } from "lucide-react";
import { playModeSwitch, playClick } from "./utils/audio";

function App() {
  const [isGodMode, setIsGodMode] = useState(false);
  const [isScanning, setIsScanning] = useState(false);
  const [isAgentConsoleOpen, setIsAgentConsoleOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Theme Mode: 'dark' | 'light' (persisted in localStorage)
  const [themeMode, setThemeMode] = useState(() => {
    try {
      const saved = localStorage.getItem("portfolio_theme_mode");
      if (saved === "light" || saved === "dark") return saved;
    } catch {
      // Fallback
    }
    return "dark";
  });

  const toggleThemeMode = useCallback(() => {
    playClick(600, 0.03);
    setThemeMode(prev => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("portfolio_theme_mode", next);
      } catch {
        // storage disabled
      }
      return next;
    });
  }, []);

  // Project Search and Category Filter
  const [projectFilter, setProjectFilter] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  // Content Selection
  const activeContent = useMemo(() => ({
    hero: isGodMode ? HERO_CONTENT.architect : HERO_CONTENT.executive,
    about: isGodMode ? ABOUT_CONTENT.architect : ABOUT_CONTENT.executive,
  }), [isGodMode]);

  // Theme Configuration
  const theme = {
    container: isGodMode
      ? "bg-transparent text-green-400 font-mono selection:bg-green-500 selection:text-black"
      : themeMode === "light"
      ? "bg-transparent text-slate-900 font-sans selection:bg-blue-600 selection:text-white"
      : "bg-transparent text-slate-100 font-sans selection:bg-blue-600 selection:text-white",
    heading: isGodMode
      ? "text-green-500/80 font-mono"
      : themeMode === "light"
      ? "text-blue-600 font-sans tracking-[0.5em]"
      : "text-blue-400 font-sans tracking-[0.5em]",
    separator: isGodMode
      ? "bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"
      : "bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 shadow-[0_0_20px_rgba(59,130,246,0.5)]",
    projectTitle: isGodMode ? "// SYSTEM_OUTPUT: CASE_STUDIES" : "Featured Strategic Success",
    aboutLabel: isGodMode ? "// ROOT_LOG: SYSTEM_PROVENANCE" : "The Strategic Background",
  };

  useEffect(() => {
    const isDark = isGodMode || themeMode === "dark";
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.classList.toggle("light", !isDark);
  }, [isGodMode, themeMode]);

  const handleAuthentication = useCallback(() => {
    if (isScanning) return;
    setIsScanning(true);
    
    // 1.5s delay matches the ScanOverlay animation duration
    setTimeout(() => {
      setIsGodMode(prev => {
        const nextMode = !prev;
        playModeSwitch(nextMode);
        return nextMode;
      });
      setIsScanning(false);
    }, 1500);
  }, [isScanning]);

  // Keyboard Shortcuts: Ctrl+G or ~ for Biometric, Ctrl+K for Agent Console
  useEffect(() => {
    const handleGlobalKeyDown = (e) => {
      if ((e.ctrlKey && e.key.toLowerCase() === 'g') || (e.key === '`' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName))) {
        e.preventDefault();
        handleAuthentication();
      }
      if (e.ctrlKey && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsAgentConsoleOpen(prev => !prev);
      }
    };

    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, [handleAuthentication]);

  // Categories extracted from projects
  const projectCategories = useMemo(() => {
    const set = new Set(PROJECTS.map(p => p.category));
    return ["ALL", ...Array.from(set)];
  }, []);

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter(project => {
      const matchesCategory = projectFilter === "ALL" || project.category === projectFilter;
      
      const query = searchQuery.trim().toLowerCase();
      if (!query) return matchesCategory;

      const matchesTitle = project.executive.title.toLowerCase().includes(query) || project.architect.title.toLowerCase().includes(query);
      const matchesDesc = project.executive.description.toLowerCase().includes(query) || project.architect.description.toLowerCase().includes(query);
      const matchesCategoryText = project.category.toLowerCase().includes(query);
      const allTech = [...project.executive.techStack, ...project.architect.techStack];
      const matchesTech = allTech.some(t => t.toLowerCase().includes(query));

      return matchesCategory && (matchesTitle || matchesDesc || matchesCategoryText || matchesTech);
    });
  }, [projectFilter, searchQuery]);

  const handleFilterChange = (cat) => {
    playClick(500, 0.03);
    setProjectFilter(cat);
  };

  return (
    <div className={`min-h-screen relative overflow-x-hidden transition-all duration-700 ${theme.container}`}>
      
      {/* Visual Infrastructure */}
      <BackgroundEffects isGodMode={isGodMode} isScanning={isScanning} themeMode={themeMode} />
      <ScanOverlay isScanning={isScanning} />
      <IdentityStatus isScanning={isScanning} isGodMode={isGodMode} />

      {/* Architect Mode Telemetry Ribbon */}
      <div className="pt-0 md:pt-0">
        <TelemetryBar isGodMode={isGodMode} />
      </div>

      <Navigation 
        isGodMode={isGodMode} 
        isScanning={isScanning} 
        onScan={handleAuthentication}
        activeLabel={activeContent.hero.label}
        themeMode={themeMode}
        onToggleTheme={toggleThemeMode}
      />

      {/* Main Content Layer */}
      <main className={`relative z-10 pt-28 md:pt-32 pb-24 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto flex flex-col items-center space-y-24 md:space-y-32 transition-all duration-500 ${
        isScanning ? "blur-md opacity-50 scale-[0.98]" : "blur-0 opacity-100 scale-100"
      }`}>
        
        {/* 1. Hero Section */}
        <Hero 
          title={activeContent.hero.title} 
          subtitle={activeContent.hero.subtitle} 
          ctaPrimary={activeContent.hero.ctaPrimary}
          ctaSecondary={activeContent.hero.ctaSecondary}
          isGodMode={isGodMode} 
          themeMode={themeMode}
          onOpenAgentConsole={() => setIsAgentConsoleOpen(true)}
        />

        {/* 2. About Narrative & Metrics */}
        <About
          title={activeContent.about.title}
          bio={activeContent.about.bio}
          metrics={activeContent.about.metrics}
          isGodMode={isGodMode}
          themeMode={themeMode}
          label={theme.aboutLabel}
        />

        {/* 3. Interactive Skills & Architecture Matrix (NEW) */}
        <SkillsMatrix isGodMode={isGodMode} themeMode={themeMode} />

        {/* 4. Projects Section with Search & Category Filters */}
        <section id="projects" className="w-full py-12 md:py-16 scroll-mt-24">
          <header className="flex flex-col items-center mb-12 space-y-4 text-center">
            <div className="inline-flex items-center gap-2">
              <span className={`w-2 h-2 rounded-full ${isGodMode ? "bg-green-400 animate-ping" : themeMode === "light" ? "bg-blue-600" : "bg-cyan-400"}`} />
              <h2 className={`text-xs sm:text-sm font-bold tracking-[0.5em] uppercase transition-colors duration-500 ${theme.heading}`}>
                {theme.projectTitle}
              </h2>
            </div>
            
            <div className={`h-[2px] w-28 transition-all duration-500 ${theme.separator}`} />
            
            <p className={`text-sm max-w-xl pt-1 ${
              isGodMode 
                ? "font-mono text-green-400/80" 
                : themeMode === "light" 
                ? "text-slate-600 font-normal" 
                : "text-slate-300/80 font-normal"
            }`}>
              {isGodMode 
                ? "// CLICK ANY CASE STUDY TO INSPECT LOW-LEVEL PIPELINE EXECUTION & COMPLEXITY" 
                : "Select any case study to explore technical architecture, operational reliability, and hands-on execution."}
            </p>

            {/* Filter and Search Controls */}
            <div className="w-full max-w-4xl pt-6 space-y-5">
              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {projectCategories.map((cat, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleFilterChange(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 border cursor-pointer active:scale-95 ${
                      projectFilter === cat
                        ? isGodMode
                          ? "bg-green-500 text-black border-green-400 shadow-[0_0_20px_rgba(34,197,94,0.5)] font-mono"
                          : "bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 text-white border-blue-400/80 shadow-[0_0_25px_rgba(37,99,235,0.4)] font-sans"
                        : isGodMode
                          ? "bg-[#060a08]/80 text-green-400/70 border-green-500/20 hover:border-green-400 font-mono"
                          : themeMode === "light"
                          ? "bg-white/90 text-slate-700 border-slate-250 hover:border-slate-350 hover:bg-slate-50 hover:text-slate-950 font-sans shadow-sm"
                          : "bg-[#0d1424]/80 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-white font-sans backdrop-blur-md"
                    }`}
                  >
                    {cat === "ALL" ? `All (${PROJECTS.length})` : cat}
                  </button>
                ))}
              </div>

              {/* Stack Search Input Bar */}
              <div className="max-w-md mx-auto relative group">
                <Search className={`w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 transition-colors ${
                  isGodMode 
                    ? "text-green-400/60 group-focus-within:text-green-400" 
                    : themeMode === "light" 
                    ? "text-slate-400 group-focus-within:text-blue-600" 
                    : "text-slate-400 group-focus-within:text-cyan-400"
                }`} />
                <input
                  type="text"
                  value={searchQuery}
                  placeholder={isGodMode ? 'Filter stack (e.g. CCXT, Polars, C++, SQLite)...' : 'Filter by tool or skill (e.g. React 19, WebSockets, Python)...'}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className={`w-full pl-11 pr-4 py-3 rounded-2xl text-xs outline-none border transition-all ${
                    isGodMode
                      ? "bg-black/80 border-green-500/30 text-green-300 placeholder-green-700 focus:border-green-400 focus:shadow-[0_0_20px_rgba(34,197,94,0.25)] font-mono"
                      : themeMode === "light"
                      ? "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:shadow-[0_0_20px_rgba(37,99,235,0.15)] font-sans shadow-md"
                      : "bg-[#0d1424]/90 border-slate-800 text-white placeholder-slate-500 focus:border-blue-500/80 focus:shadow-[0_0_25px_rgba(37,99,235,0.25)] font-sans shadow-xl"
                  }`}
                />
              </div>
            </div>
          </header>

          {/* Project Cards Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
              {filteredProjects.map((project) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isGodMode={isGodMode} 
                  themeMode={themeMode}
                  onSelect={(p) => setSelectedProject(p)}
                />
              ))}
            </div>
          ) : (
            <div className={`p-12 text-center rounded-3xl border ${
              isGodMode 
                ? "bg-black/50 border-green-500/20 text-green-500/70 font-mono" 
                : themeMode === "light"
                ? "bg-white border-slate-200 text-slate-600 shadow-sm"
                : "bg-[#0d1424]/80 border-slate-800 text-slate-400"
            }`}>
              <p className="text-sm font-semibold">No case studies matching your filter criteria.</p>
              <button 
                onClick={() => { setProjectFilter("ALL"); setSearchQuery(""); }}
                className={`mt-4 px-4 py-2 rounded-xl text-xs font-bold uppercase ${
                  isGodMode ? "text-green-400 underline" : themeMode === "light" ? "text-blue-600 underline" : "text-blue-400 underline"
                }`}
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* 5. Career & Systems Evolution Timeline (NEW) */}
        <CareerTimeline isGodMode={isGodMode} themeMode={themeMode} />

        {/* 6. Contact Transmission Gateway */}
        <Contact isGodMode={isGodMode} themeMode={themeMode} />

      </main>

      {/* Footer */}
      <footer className={`w-full border-t py-8 px-6 text-center transition-colors duration-500 ${
        isGodMode 
          ? "border-green-500/20 bg-black/80 text-green-500/60 font-mono text-xs" 
          : themeMode === "light"
          ? "border-slate-200/90 bg-white/90 text-slate-600 font-sans text-xs backdrop-blur-xl shadow-[0_-5px_20px_rgba(0,0,0,0.02)]"
          : "border-slate-800/80 bg-[#070a12]/90 text-slate-400 font-sans text-xs backdrop-blur-xl"
      }`}>
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Mobeen. Dual-Reality Architecture. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={`flex items-center gap-1 hover:underline cursor-pointer ${
                isGodMode ? "text-green-400" : themeMode === "light" ? "text-blue-600" : "text-cyan-400"
              }`}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
            <a 
              href="https://www.linkedin.com/in/muhammadmobeenuk" 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1 hover:underline ${
                themeMode === "light" && !isGodMode ? "text-blue-600 hover:text-blue-800" : "text-cyan-400 hover:text-cyan-300"
              }`}
            >
              <span>LinkedIn</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a 
              href="https://github.com/Mobeen-2024/Portfolio" 
              target="_blank" 
              rel="noreferrer"
              className={`flex items-center gap-1 hover:underline ${
                themeMode === "light" && !isGodMode ? "text-slate-700 hover:text-slate-950" : "text-slate-300 hover:text-white"
              }`}
            >
              <span>GitHub</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </footer>

      {/* Interactive Dual-Reality Agent Console / Terminal Co-Pilot */}
      <AgentConsole 
        isGodMode={isGodMode} 
        themeMode={themeMode}
        isOpen={isAgentConsoleOpen} 
        setIsOpen={setIsAgentConsoleOpen} 
      />

      {/* Project Deep-Dive Architecture / Strategy Modal */}
      {selectedProject && (
        <ProjectDetailModal 
          project={selectedProject} 
          isGodMode={isGodMode} 
          themeMode={themeMode}
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </div>
  );
}

export default App;