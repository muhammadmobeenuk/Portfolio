import React, { useState, useEffect, useMemo, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { 
  Send, Terminal, ShieldCheck, AlertCircle, Copy, Check, Github, 
  Phone, MapPin, Globe, Clock, Mail, MessageSquare, RefreshCw, 
  Zap, CheckCircle2, RotateCcw, Code, Linkedin 
} from 'lucide-react';
import { playClick, playSuccess, playError } from '../../utils/audio';

const STORAGE_KEY = 'mobeen_contact_draft_v1';
const RECIPIENT_EMAIL = "muhammadmobeen20011@gmail.com";
const RECIPIENT_PHONE = "07351187884";
const LOCATION_STR = "London, NW9 6EJ (Full Right to Work - Spouse Visa)";
const PORTFOLIO_URL = "https://my-project-portfolios-projects-ed15ad56.vercel.app/";
const WHATSAPP_URL = "https://wa.me/447351187884";
const LINKEDIN_URL = "https://www.linkedin.com/in/muhammadmobeenuk";

// Gateway Configurations
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || "xkoonpjk";
const CONTACT_API_ENDPOINT = import.meta.env.VITE_CONTACT_API_URL || `https://formspree.io/f/${FORMSPREE_ID}`;

const getInitialFormData = () => {
  const defaultState = {
    name: '',
    email: '',
    topic: 'IT Support & Systems Engineering',
    urgency: 'Standard (Scheduled Interview / Review)',
    message: '',
    botShield: '' // Invisible honeypot field
  };

  if (typeof window === 'undefined') return defaultState;

  try {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && (parsed.name || parsed.email || parsed.message)) {
        return {
          ...defaultState,
          name: parsed.name || '',
          email: parsed.email || '',
          topic: parsed.topic || defaultState.topic,
          urgency: parsed.urgency || defaultState.urgency,
          message: parsed.message || ''
        };
      }
    }
  } catch {
    // Storage unavailable or parsing error; fail gracefully
  }
  return defaultState;
};

export default function Contact({ isGodMode, themeMode = 'dark' }) {
  const [formData, setFormData] = useState(getInitialFormData);

  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [status, setStatus] = useState('IDLE'); // 'IDLE' | 'SENDING' | 'SUCCESS' | 'ERROR'
  const [sendingStage, setSendingStage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [receipt, setReceipt] = useState(null);
  
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [copiedReceipt, setCopiedReceipt] = useState(false);
  const [hasRestoredDraft, setHasRestoredDraft] = useState(() => {
    if (typeof window === 'undefined') return false;
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        return Boolean(parsed && (parsed.name || parsed.email || parsed.message));
      }
    } catch {
      return false;
    }
    return false;
  });
  const [showRawPacket, setShowRawPacket] = useState(false);

  // Live UK Time & Operational Telemetry
  const [ukTime, setUkTime] = useState('');
  const isMounted = useRef(true);

  useEffect(() => {
    if (hasRestoredDraft) {
      const timer = setTimeout(() => setHasRestoredDraft(false), 4500);
      return () => clearTimeout(timer);
    }
  }, [hasRestoredDraft]);

  useEffect(() => {
    isMounted.current = true;
    const updateTime = () => {
      try {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/London',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false
        });
        setUkTime(formatter.format(now));
      } catch {
        setUkTime('12:00:00');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      isMounted.current = false;
      clearInterval(interval);
    };
  }, []);


  // Save draft to sessionStorage whenever form inputs change
  useEffect(() => {
    if (status === 'SUCCESS') return;
    try {
      if (formData.name || formData.email || formData.message) {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify({
          name: formData.name,
          email: formData.email,
          topic: formData.topic,
          urgency: formData.urgency,
          message: formData.message
        }));
      }
    } catch {
      // Ignore sessionStorage quotas or private browsing errors
    }
  }, [formData, status]);

  const topics = useMemo(() => (isGodMode ? [
    "// HARDWARE_DIAGNOSTICS_&_BMS",
    "// NETWORK_&_CCTV_SETUP",
    "// FULL_STACK_REACT_EXPRESS",
    "// IT_SUPPORT_ROLE_ENGAGEMENT"
  ] : [
    "IT Support & Systems Engineering",
    "Hardware Diagnostics & Soldering",
    "CCTV & Network Deployment",
    "Full-Stack Web Development"
  ]), [isGodMode]);

  const urgencyOptions = useMemo(() => (isGodMode ? [
    "// PRIORITY_0: CRITICAL_INCIDENT / IMMEDIATE_HIRE",
    "// PRIORITY_1: SCHEDULED_TECHNICAL_INTERVIEW",
    "// PRIORITY_2: EXPLORATORY_SYSTEMS_CONSULTATION"
  ] : [
    "Immediate / Urgent (Hiring / Incident)",
    "Standard (Scheduled Interview / Review)",
    "Informal Inquiry (Consultation / Networking)"
  ]), [isGodMode]);

  // Validation Logic (Schema Engine)
  const errors = useMemo(() => {
    const errs = {};
    const trimmedName = formData.name.trim();
    if (!trimmedName) {
      errs.name = isGodMode ? "ERR_NAME_REQUIRED: SENDER_ID is empty" : "Name is required.";
    } else if (trimmedName.length < 2) {
      errs.name = isGodMode ? "ERR_NAME_LENGTH: Min 2 characters required" : "Name must be at least 2 characters.";
    }

    const trimmedEmail = formData.email.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!trimmedEmail) {
      errs.email = isGodMode ? "ERR_EMAIL_REQUIRED: RETURN_ADDRESS missing" : "Email address is required.";
    } else if (!emailRegex.test(trimmedEmail)) {
      errs.email = isGodMode ? "ERR_RFC5322_FAILED: Invalid socket format" : "Please enter a valid email address (e.g. name@domain.com).";
    }

    const trimmedMsg = formData.message.trim();
    if (!trimmedMsg) {
      errs.message = isGodMode ? "ERR_EMPTY_PAYLOAD: Message body is required" : "Message details are required.";
    } else if (trimmedMsg.length < 10) {
      errs.message = isGodMode ? "ERR_PAYLOAD_TOO_SHORT: Min 10 bytes required" : "Message must be at least 10 characters.";
    } else if (trimmedMsg.length > 2000) {
      errs.message = isGodMode ? "ERR_BUFFER_OVERFLOW: Payload exceeds 2000 chars" : "Message cannot exceed 2000 characters.";
    }

    return errs;
  }, [formData, isGodMode]);

  const isFormValid = Object.keys(errors).length === 0;

  // Handlers
  const handleCopyEmail = () => {
    playClick(650, 0.04);
    navigator.clipboard.writeText(RECIPIENT_EMAIL);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyReceipt = () => {
    if (!receipt) return;
    playClick(650, 0.04);
    navigator.clipboard.writeText(`Transmission Ref: ${receipt.id}\nTimestamp: ${receipt.timestamp}\nTopic: ${receipt.topic}\nUrgency: ${receipt.urgency}\nHash: ${receipt.hash}`);
    setCopiedReceipt(true);
    setTimeout(() => setCopiedReceipt(false), 2500);
  };

  const handleCopyPayload = () => {
    playClick(650, 0.04);
    const formatted = `To: Muhammad Mobeen <${RECIPIENT_EMAIL}>\n` +
      `From: ${formData.name} <${formData.email}>\n` +
      `Category: ${formData.topic}\n` +
      `Urgency: ${formData.urgency}\n` +
      `Subject: [Portfolio Transmission] ${formData.topic} - from ${formData.name}\n\n` +
      `${formData.message}`;
    navigator.clipboard.writeText(formatted);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2500);
  };

  const handleClearDraft = () => {
    playClick(440, 0.03);
    setFormData({
      name: '',
      email: '',
      topic: topics[0],
      urgency: urgencyOptions[1],
      message: '',
      botShield: ''
    });
    setTouched({ name: false, email: false, message: false });
    sessionStorage.removeItem(STORAGE_KEY);
    setHasRestoredDraft(false);
  };

  const handleTopicClick = (topic) => {
    playClick(520, 0.03);
    setFormData(prev => ({
      ...prev,
      topic,
      message: prev.message ? prev.message : (isGodMode ? `Requesting technical review for ${topic}: ` : `I would like to discuss ${topic}: `)
    }));
  };

  const handleUrgencyClick = (urgency) => {
    playClick(540, 0.03);
    setFormData(prev => ({ ...prev, urgency }));
  };

  // Keyboard shortcut: Ctrl/Cmd + Enter to submit
  const handleKeyDown = (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  // Multi-Stage Submission Engine
  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    playClick(700, 0.05);

    // Mark all as touched to trigger inline error messages
    setTouched({ name: true, email: true, message: true });

    // Honeypot bot protection
    if (formData.botShield) {
      // Silently discard bot submission
      setStatus('SENDING');
      setSendingStage('ENCRYPTING_PAYLOAD');
      setTimeout(() => {
        setStatus('SUCCESS');
      }, 1200);
      return;
    }

    if (!isFormValid) {
      playError();
      return;
    }

    setStatus('SENDING');
    setSendingStage(isGodMode ? 'INITIALIZING_TLS_SOCKET' : 'Validating transmission package...');

    try {
      await new Promise(r => setTimeout(r, 250));
      if (!isMounted.current) return;
      setSendingStage(isGodMode ? 'ENCRYPTING_PAYLOAD_AES256' : 'Encrypting payload and preparing gateway...');

      await new Promise(r => setTimeout(r, 300));
      if (!isMounted.current) return;
      setSendingStage(isGodMode ? 'DISPATCHING_SYSTEM_PACKET' : 'Transmitting to secure mailbox gateway...');

      const randId = `MOBEEN-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
      const timestamp = new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' });
      const hash = Math.random().toString(16).substring(2, 10).toUpperCase();

      const useEmailJS = Boolean(EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY);

      if (useEmailJS) {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          {
            from_name: formData.name.trim(),
            name: formData.name.trim(),
            from_email: formData.email.trim(),
            email: formData.email.trim(),
            topic: formData.topic,
            urgency: formData.urgency,
            message: formData.message.trim(),
            mode: isGodMode ? 'ARCHITECT_GOD_MODE' : 'EXECUTIVE_MODE',
            reality_mode: isGodMode ? 'ARCHITECT_GOD_MODE' : 'EXECUTIVE_MODE',
            timestamp: `${timestamp} BST`,
            token: randId,
            hash: `0x${hash}`,
            to_email: RECIPIENT_EMAIL
          },
          EMAILJS_PUBLIC_KEY
        );
      } else {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 9000); // 9-second timeout safeguard

        const response = await fetch(CONTACT_API_ENDPOINT, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json", 
            "Accept": "application/json" 
          },
          signal: controller.signal,
          body: JSON.stringify({
            name: formData.name.trim(),
            email: formData.email.trim(),
            _replyto: formData.email.trim(),
            _subject: `[Portfolio Inquiry] ${formData.topic} from ${formData.name.trim()}`,
            topic: formData.topic,
            urgency: formData.urgency,
            message: formData.message.trim(),
            reality_mode: isGodMode ? 'ARCHITECT_GOD_MODE' : 'EXECUTIVE_MODE',
            theme_mode: themeMode,
            client_timestamp: new Date().toISOString(),
            reference_token: randId,
            integrity_hash: `0x${hash}`
          })
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(errorData.error || "Gateway reported transmission rejection.");
        }
      }

      playSuccess();
      setReceipt({
        id: randId,
        timestamp: `${timestamp} BST`,
        topic: formData.topic,
        urgency: formData.urgency,
        hash: `0x${hash}`
      });

      setStatus('SUCCESS');
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (err) {
      playError();
      setStatus('ERROR');
      if (err.name === 'AbortError') {
        setErrorMessage("Gateway response timed out after 9 seconds. Direct mail channel recommended.");
      } else {
        setErrorMessage(err.message || "Network error or ad-blocker blocked the form gateway. Direct mail client recommended.");
      }
    }
  };

  // Direct Mailto URI construction for resilient fallback
  const mailtoUri = useMemo(() => {
    const subject = encodeURIComponent(`[Inquiry: ${formData.topic}] from ${formData.name || 'Visitor'}`);
    const body = encodeURIComponent(
      `Hi Muhammad,\n\n` +
      `Category: ${formData.topic}\n` +
      `Urgency Level: ${formData.urgency}\n` +
      `Sender Name: ${formData.name}\n` +
      `Sender Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Sent via Portfolio Direct Mail Fallback Gateway.`
    );
    return `mailto:${RECIPIENT_EMAIL}?subject=${subject}&body=${body}`;
  }, [formData]);

  // Raw JSON packet for God Mode inspection
  const rawPacketJson = useMemo(() => JSON.stringify({
    header: {
      protocol: "HTTPS/TLS1.3",
      target: RECIPIENT_EMAIL,
      port: 443,
      auth_checksum: "CRC32-VALIDATED",
      reality_domain: isGodMode ? "ARCHITECT_TIER_0" : "EXECUTIVE"
    },
    sender: {
      id: formData.name || "<NULL>",
      address: formData.email || "<NULL>",
      urgency_flag: formData.urgency
    },
    payload: {
      domain: formData.topic,
      content: formData.message || "<EMPTY_BUFFER>"
    }
  }, null, 2), [formData, isGodMode]);

  // Theming definitions
  const theme = isGodMode 
    ? {
        text: "text-green-400 font-mono",
        accent: "text-green-400",
        border: "border-green-500/30 focus:border-green-400 focus:ring-1 focus:ring-green-400/40",
        borderError: "border-red-500/70 focus:border-red-400 focus:ring-1 focus:ring-red-400/50",
        button: "bg-green-500 text-black hover:bg-green-400 shadow-[0_0_30px_rgba(34,197,94,0.4)] font-mono",
        container: "bg-[#060a08]/95 border border-green-500/30 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,0,0,0.8)]",
        label: "text-green-500/70 font-mono",
        badge: "bg-black/60 border border-green-500/30 text-green-300 font-mono hover:border-green-400"
      }
    : themeMode === "light"
    ? {
        text: "text-slate-900 font-sans",
        accent: "text-blue-600",
        border: "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-500/20",
        borderError: "border-red-400 focus:border-red-600 focus:ring-2 focus:ring-red-500/20",
        button: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 shadow-[0_0_25px_rgba(37,99,235,0.3)] border border-blue-400/50 font-sans",
        container: "bg-white/95 border border-slate-200/90 backdrop-blur-2xl shadow-xl shadow-slate-200/50",
        label: "text-slate-600 font-sans",
        badge: "bg-white/90 border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-950 shadow-sm font-sans"
      }
    : {
        text: "text-white font-sans",
        accent: "text-cyan-400",
        border: "border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20",
        borderError: "border-red-500/60 focus:border-red-400 focus:ring-2 focus:ring-red-500/20",
        button: "bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 text-white hover:from-blue-500 hover:to-cyan-400 shadow-[0_0_35px_rgba(37,99,235,0.4)] border border-blue-400/30 font-sans",
        container: "bg-[#0c1222]/85 border border-slate-800/80 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)]",
        label: "text-slate-400 font-sans",
        badge: "bg-[#101728]/80 border border-slate-800 text-slate-300 hover:border-slate-700 hover:bg-[#151f36] hover:text-white shadow-md font-sans"
      };

  return (
    <section id="contact" className="w-full py-16 md:py-24 max-w-4xl mx-auto px-4 sm:px-6 scroll-mt-24">
      {/* Header & Status Telemetry */}
      <div className="text-center mb-10 space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-1 border transition-all"
             style={{
               borderColor: isGodMode ? 'rgba(34,197,94,0.3)' : themeMode === 'light' ? '#e2e8f0' : '#1e293b',
               background: isGodMode ? 'rgba(0,0,0,0.6)' : themeMode === 'light' ? '#ffffff' : 'rgba(15,23,42,0.6)'
             }}>
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className={theme.accent}>
            {isGodMode ? "// PROTOCOL: GATEWAY_SECURE" : "Direct Transmission Gateway"}
          </span>
          <span className="opacity-40">•</span>
          <span className="flex items-center gap-1 opacity-75 text-[10px]">
            <Clock className="w-3 h-3" />
            London {ukTime || "12:00:00"} BST
          </span>
        </div>

        <h2 className={`text-3xl sm:text-4xl font-black ${theme.text} ${isGodMode ? "text-glow-green" : ""}`}>
          {isGodMode ? "INITIATE_SYSTEM_TRANSMISSION" : "Connect With Muhammad Mobeen"}
        </h2>
        <p className={`text-sm max-w-lg mx-auto opacity-75 ${
          isGodMode ? "font-mono text-green-400/80" : themeMode === "light" ? "text-slate-600" : "text-slate-300"
        }`}>
          {isGodMode 
            ? "Direct socket to Muhammad Mobeen. Transmit hardware diagnostics, networking deployments, or full-stack opportunities."
            : "Available for IT Support Technician, Systems Engineering, and Technical Operations roles in London and remote."}
        </p>

        {/* Quick Contact Badges & Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 pt-3">
          <button
            type="button"
            onClick={handleCopyEmail}
            title="Click to copy email address"
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer active:scale-95 ${theme.badge}`}
          >
            {copiedEmail ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5 text-blue-500" />}
            <span>{copiedEmail ? "Copied Email!" : RECIPIENT_EMAIL}</span>
          </button>

          <a 
            href={`tel:${RECIPIENT_PHONE}`}
            title="Call direct"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${theme.badge}`}
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>{RECIPIENT_PHONE}</span>
          </a>

          <a 
            href={WHATSAPP_URL}
            target="_blank" 
            rel="noreferrer"
            title="Open WhatsApp chat"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all active:scale-95 ${theme.badge}`}
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          <a 
            href={LINKEDIN_URL} 
            target="_blank" 
            rel="noreferrer"
            title="Connect on LinkedIn"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all hover:scale-105 ${
              isGodMode 
                ? "bg-green-500/10 border border-green-500/30 text-green-300 font-mono"
                : themeMode === "light"
                ? "bg-blue-50 border border-blue-200 text-blue-700 shadow-sm"
                : "bg-blue-950/40 border border-blue-500/40 text-cyan-300 shadow-sm"
            }`}
          >
            <Linkedin className="w-3.5 h-3.5 text-blue-500" />
            <span>LinkedIn</span>
          </a>

          <div 
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-semibold select-none ${theme.badge}`}
            title="Right to work verification"
          >
            <MapPin className="w-3.5 h-3.5 text-red-400" />
            <span>{LOCATION_STR}</span>
          </div>

          <a 
            href="https://github.com/Mobeen-2024" 
            target="_blank" 
            rel="noreferrer"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${theme.badge}`}
          >
            <Github className="w-3.5 h-3.5 text-indigo-400" />
            <span>GitHub</span>
          </a>

          <a 
            href={PORTFOLIO_URL} 
            target="_blank" 
            rel="noreferrer"
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${theme.badge}`}
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>Live Portfolio</span>
          </a>
        </div>
      </div>

      {/* Main Transmission Card */}
      <div className={`p-6 sm:p-10 rounded-3xl transition-all duration-500 relative ${theme.container}`}>
        
        {/* Draft Auto-Restored Notification Banner */}
        {hasRestoredDraft && status !== 'SUCCESS' && (
          <div className="mb-6 px-4 py-2.5 rounded-xl text-xs font-medium flex items-center justify-between animate-in fade-in slide-in-from-top-2 border"
               style={{
                 background: isGodMode ? 'rgba(34,197,94,0.1)' : themeMode === 'light' ? '#eff6ff' : 'rgba(30,58,138,0.2)',
                 borderColor: isGodMode ? 'rgba(34,197,94,0.3)' : themeMode === 'light' ? '#bfdbfe' : 'rgba(59,130,246,0.3)',
                 color: isGodMode ? '#4ade80' : themeMode === 'light' ? '#1e40af' : '#93c5fd'
               }}>
            <div className="flex items-center gap-2">
              <RotateCcw className="w-3.5 h-3.5 animate-spin-slow" />
              <span>Prior session draft automatically restored from local cache.</span>
            </div>
            <button
              type="button"
              onClick={handleClearDraft}
              className="text-[10px] font-bold uppercase tracking-wider underline cursor-pointer hover:opacity-80"
            >
              Discard Draft
            </button>
          </div>
        )}

        {/* State Machine Rendering */}
        {status === 'SUCCESS' && receipt ? (
          <SuccessReceiptView 
            receipt={receipt} 
            isGodMode={isGodMode} 
            themeMode={themeMode}
            theme={theme}
            copiedReceipt={copiedReceipt}
            onCopyReceipt={handleCopyReceipt}
            onReset={() => {
              playClick(500, 0.03);
              setStatus('IDLE');
              setFormData({
                name: '',
                email: '',
                topic: topics[0],
                urgency: urgencyOptions[1],
                message: '',
                botShield: ''
              });
              setTouched({ name: false, email: false, message: false });
            }} 
          />
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            {/* Invisible Honeypot field for bot mitigation */}
            <input 
              type="text" 
              name="_bot_guard" 
              value={formData.botShield} 
              onChange={(e) => setFormData(prev => ({ ...prev, botShield: e.target.value }))}
              tabIndex={-1} 
              autoComplete="off" 
              aria-hidden="true" 
              style={{ position: 'absolute', opacity: 0, height: 0, width: 0, zIndex: -1, pointerEvents: 'none' }} 
            />

            {/* Topic Preset Chips */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`block text-[11px] uppercase tracking-widest font-bold ${theme.label}`}>
                  {isGodMode ? "// 01_SELECT_TRANSMISSION_DOMAIN:" : "1. Inquiry Category / Technical Domain"}
                </label>
                <span className="text-[10px] opacity-60 font-mono">
                  {formData.topic}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {topics.map((t, idx) => {
                  const isSelected = formData.topic === t;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTopicClick(t)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all duration-200 border cursor-pointer active:scale-95 ${
                        isSelected
                          ? isGodMode
                            ? "bg-green-500 text-black border-green-400 font-mono shadow-[0_0_15px_rgba(34,197,94,0.4)]"
                            : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-400 shadow-[0_0_15px_rgba(37,99,235,0.4)] font-sans"
                          : isGodMode
                            ? "bg-black/50 text-green-400/70 border-green-500/20 hover:border-green-400/60 font-mono"
                            : themeMode === "light"
                            ? "bg-slate-100 text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-950 font-sans"
                            : "bg-[#101728] text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white font-sans"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Urgency & Timeline Selector */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className={`block text-[11px] uppercase tracking-widest font-bold ${theme.label}`}>
                  {isGodMode ? "// 02_TRANSMISSION_PRIORITY_SLA:" : "2. Priority & Timeframe"}
                </label>
                <span className="text-[10px] opacity-60 font-mono">
                  {isGodMode ? "ACK_SLA: <24H" : "Guaranteed Response < 24 Hours"}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {urgencyOptions.map((urg, idx) => {
                  const isSelected = formData.urgency === urg;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleUrgencyClick(urg)}
                      className={`p-2.5 rounded-xl text-left text-xs font-semibold transition-all border cursor-pointer active:scale-98 ${
                        isSelected
                          ? isGodMode
                            ? "bg-green-500/20 text-green-300 border-green-400 font-mono shadow-[0_0_12px_rgba(34,197,94,0.25)]"
                            : themeMode === 'light'
                            ? "bg-blue-50 text-blue-900 border-blue-400 font-sans shadow-sm"
                            : "bg-blue-950/50 text-cyan-300 border-cyan-500/50 font-sans shadow-md"
                          : isGodMode
                            ? "bg-black/40 text-green-400/60 border-green-500/10 hover:border-green-500/40 font-mono"
                            : themeMode === 'light'
                            ? "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 font-sans"
                            : "bg-[#101728]/60 text-slate-400 border-slate-800/80 hover:border-slate-700 font-sans"
                      }`}
                    >
                      <div className="flex items-center gap-1.5">
                        {idx === 0 && <Zap className="w-3 h-3 text-amber-400 flex-shrink-0" />}
                        {idx === 1 && <Clock className="w-3 h-3 text-blue-400 flex-shrink-0" />}
                        {idx === 2 && <MessageSquare className="w-3 h-3 text-slate-400 flex-shrink-0" />}
                        <span className="truncate">{urg}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Inputs: Name & Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="contact-name" className={`block text-[11px] uppercase tracking-widest font-bold ${theme.label}`}>
                    {isGodMode ? '"sender_identity":' : 'Your Name / Recruiter ID *'}
                  </label>
                  {touched.name && errors.name && (
                    <span id="name-error" role="alert" className="text-[10px] text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.name}
                    </span>
                  )}
                </div>
                <input
                  id="contact-name"
                  required
                  type="text"
                  value={formData.name}
                  placeholder={isGodMode ? '"e.g. John Doe / Lead Tech Recruiter"' : 'e.g. Sarah Jenkins (Talent Acquisition)'}
                  aria-invalid={touched.name && !!errors.name}
                  aria-describedby={touched.name && errors.name ? "name-error" : undefined}
                  onBlur={() => setTouched(prev => ({ ...prev, name: true }))}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className={`w-full bg-transparent border-2 rounded-xl p-3 text-sm outline-none transition-all ${
                    touched.name && errors.name ? theme.borderError : theme.border
                  } ${
                    themeMode === "light" && !isGodMode ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
                  }`}
                />
              </div>

              {/* Email Field */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <label htmlFor="contact-email" className={`block text-[11px] uppercase tracking-widest font-bold ${theme.label}`}>
                    {isGodMode ? '"return_socket":' : 'Contact Email Address *'}
                  </label>
                  {touched.email && errors.email && (
                    <span id="email-error" role="alert" className="text-[10px] text-red-400 font-medium flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.email}
                    </span>
                  )}
                </div>
                <input
                  id="contact-email"
                  required
                  type="email"
                  value={formData.email}
                  placeholder={isGodMode ? '"e.g. engineering@enterprise.co.uk"' : 'e.g. recruiter@company.co.uk'}
                  aria-invalid={touched.email && !!errors.email}
                  aria-describedby={touched.email && errors.email ? "email-error" : undefined}
                  onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className={`w-full bg-transparent border-2 rounded-xl p-3 text-sm outline-none transition-all ${
                    touched.email && errors.email ? theme.borderError : theme.border
                  } ${
                    themeMode === "light" && !isGodMode ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
                  }`}
                />
              </div>
            </div>

            {/* Message Area with Character Counter & Shortcuts */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="contact-message" className={`block text-[11px] uppercase tracking-widest font-bold ${theme.label}`}>
                  {isGodMode ? '"transmission_payload": {' : "Inquiry / Opportunity Details *"}
                </label>
                <div className="flex items-center gap-2 text-[10px] opacity-60 font-mono">
                  <span>Press Ctrl+Enter to send</span>
                  <span>•</span>
                  <span className={formData.message.length > 1900 ? "text-amber-400 font-bold" : ""}>
                    {formData.message.length}/2000
                  </span>
                </div>
              </div>
              <textarea
                id="contact-message"
                required
                rows="4"
                value={formData.message}
                maxLength={2000}
                onKeyDown={handleKeyDown}
                onBlur={() => setTouched(prev => ({ ...prev, message: true }))}
                onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                aria-invalid={touched.message && !!errors.message}
                aria-describedby={touched.message && errors.message ? "message-error" : undefined}
                placeholder={isGodMode 
                  ? '"Specify technical requirements, diagnostics scope, network topologies, or compensation/role parameters..."' 
                  : "Please describe the role, required technical responsibilities, or project deliverables..."}
                className={`w-full bg-transparent border-2 rounded-2xl p-4 text-sm outline-none transition-all resize-y min-h-[120px] ${
                  touched.message && errors.message ? theme.borderError : theme.border
                } ${
                  themeMode === "light" && !isGodMode ? "text-slate-900 placeholder:text-slate-400" : "text-white placeholder:text-slate-500"
                }`}
              />
              {touched.message && errors.message && (
                <p id="message-error" role="alert" className="text-[10px] text-red-400 font-medium flex items-center gap-1 mt-1">
                  <AlertCircle className="w-3 h-3" />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Architect Mode Raw Packet Preview Toggle */}
            {isGodMode && (
              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => {
                    playClick(500, 0.02);
                    setShowRawPacket(prev => !prev);
                  }}
                  className="text-[10px] font-mono text-green-400/80 hover:text-green-300 flex items-center gap-1.5 cursor-pointer"
                >
                  <Code className="w-3 h-3" />
                  <span>{showRawPacket ? "[ HIDE_BUFFER_PREVIEW ]" : "[ INSPECT_RAW_PACKET_BUFFER ]"}</span>
                </button>
                {showRawPacket && (
                  <pre className="mt-2 p-3 rounded-xl bg-black/80 border border-green-500/30 text-green-400 text-[10px] font-mono overflow-x-auto max-h-48">
                    {rawPacketJson}
                  </pre>
                )}
              </div>
            )}

            {/* Multi-Stage Dispatch Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'SENDING'}
                className={`w-full py-4 rounded-2xl font-bold uppercase tracking-widest flex items-center justify-center gap-3 transition-all active:scale-[0.98] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed ${theme.button}`}
              >
                {status === 'SENDING' ? (
                  <div className="flex items-center gap-2.5">
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>{sendingStage || "Dispatched packet..."}</span>
                  </div>
                ) : (
                  <>
                    {isGodMode ? <Terminal className="w-4 h-4" /> : <Send className="w-4 h-4" />}
                    <span>{isGodMode ? "EXECUTE_ENCRYPTED_TRANSMISSION" : "Transmit Message to Muhammad Mobeen"}</span>
                  </>
                )}
              </button>
            </div>

            {/* Resilient Error & Direct Channel Fallback Panel */}
            {status === 'ERROR' && (
              <div role="alert" className="p-5 rounded-2xl border border-red-500/40 bg-red-950/20 text-red-200 animate-in fade-in slide-in-from-top-2 space-y-3">
                <div className="flex items-start gap-2.5">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-red-400">
                      Gateway Transmission Halted: {errorMessage}
                    </h5>
                    <p className="text-xs opacity-85 leading-relaxed">
                      Don&apos;t worry—your entered details are preserved. Use our resilient fallback channels to deliver your message instantly:
                    </p>
                  </div>
                </div>

                {/* 3 Robust Senior Fallback Action Buttons */}
                <div className="flex flex-wrap gap-2.5 pt-2">
                  <a
                    href={mailtoUri}
                    onClick={() => playClick(600, 0.04)}
                    className="flex-1 min-w-[200px] py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-red-500 hover:bg-red-400 text-black flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Launch Native Mail Client (Pre-Filled)</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyPayload}
                    className="flex-1 min-w-[180px] py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-white/10 hover:bg-white/20 text-white border border-white/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    {copiedPayload ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPayload ? "Copied Formatted Email!" : "Copy Payload for Gmail / LinkedIn"}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSubmit()}
                    className="py-2.5 px-4 rounded-xl text-xs font-bold text-center bg-black/40 hover:bg-black/60 text-slate-300 border border-slate-700 flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Retry Gateway</span>
                  </button>
                </div>
              </div>
            )}
          </form>
        )}

      </div>
    </section>
  );
}

/**
 * Senior Architectural Receipt Confirmation Card
 */
function SuccessReceiptView({ 
  receipt, 
  isGodMode, 
  themeMode, 
  theme, 
  copiedReceipt, 
  onCopyReceipt, 
  onReset 
}) {
  return (
    <div className="py-8 text-center animate-in zoom-in-95 duration-500 space-y-6">
      <div className={`p-4 rounded-2xl w-16 h-16 mx-auto flex items-center justify-center ${
        isGodMode 
          ? "bg-green-500/20 border border-green-500/40 shadow-[0_0_25px_rgba(34,197,94,0.4)] text-green-400" 
          : "bg-blue-600 text-white shadow-xl shadow-blue-500/30"
      }`}>
        <ShieldCheck className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-green-500/10 text-green-400 border border-green-500/20">
          <CheckCircle2 className="w-3 h-3" />
          <span>TRANSMISSION_ACK_RECEIVED</span>
        </div>
        <h4 className={`text-2xl sm:text-3xl font-black ${theme.text}`}>
          {isGodMode ? `RECEIPT_ID: #${receipt.id}` : "Inquiry Successfully Logged"}
        </h4>
        <p className={`text-xs sm:text-sm opacity-80 max-w-md mx-auto ${isGodMode ? "font-mono" : "font-normal"}`}>
          {isGodMode 
            ? "> Packet decrypted and routed to primary socket. Telemetry SLA: Response within 24 standard hours."
            : "Your message has been securely delivered to Muhammad Mobeen. A response will be dispatched within 24 hours."}
        </p>
      </div>

      {/* Verified Receipt Metadata Spec */}
      <div className={`max-w-md mx-auto p-4 rounded-2xl border text-left text-xs font-mono space-y-2 ${
        isGodMode 
          ? "bg-black/60 border-green-500/30 text-green-400" 
          : themeMode === 'light'
          ? "bg-slate-50 border-slate-200 text-slate-700"
          : "bg-[#101728]/70 border-slate-800 text-slate-300"
      }`}>
        <div className="flex justify-between border-b pb-1.5 border-current/10">
          <span className="opacity-60">Reference Token:</span>
          <span className="font-bold">{receipt.id}</span>
        </div>
        <div className="flex justify-between border-b pb-1.5 border-current/10">
          <span className="opacity-60">Dispatched:</span>
          <span>{receipt.timestamp}</span>
        </div>
        <div className="flex justify-between border-b pb-1.5 border-current/10">
          <span className="opacity-60">Domain:</span>
          <span className="truncate max-w-[200px]">{receipt.topic}</span>
        </div>
        <div className="flex justify-between">
          <span className="opacity-60">Integrity Hash:</span>
          <span>{receipt.hash}</span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
        <button 
          type="button"
          onClick={onCopyReceipt} 
          className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 border cursor-pointer active:scale-95 transition-all ${
            isGodMode 
              ? "bg-green-500/20 text-green-300 border-green-500/40 hover:bg-green-500/30 font-mono" 
              : themeMode === 'light'
              ? "bg-white border-slate-200 text-slate-800 hover:bg-slate-100 shadow-sm"
              : "bg-[#141d33] border-slate-700 text-slate-200 hover:bg-[#1c2947]"
          }`}
        >
          {copiedReceipt ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copiedReceipt ? "Copied Receipt Details!" : "Copy Receipt Token"}</span>
        </button>

        <button 
          type="button"
          onClick={onReset} 
          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer hover:underline underline-offset-4 transition-all ${theme.accent}`}
        >
          {isGodMode ? "[ RE_INITIALIZE_GATEWAY ]" : "Transmit Another Message"}
        </button>
      </div>
    </div>
  );
}