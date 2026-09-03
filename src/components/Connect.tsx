import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import {
  Sparkles,
  Terminal,
  Mail,
  Phone,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { profile } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { TiltCard } from './TiltCard';

export const Connect: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const terminalLogs = [
    'SYSTEM_BOOT: Vikram Terminal v2.4 initialized',
    'CONNECTION: Secure TLS tunnel established',
    'CREDENTIALS: B.Tech ECE (Java Full Stack) VERIFIED',
    'STATUS: 200 - Ready for engineering inquiries',
  ];

  const handleCopy = (text: string, key: string) => {
    soundManager.playSuccess();
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    soundManager.playSuccess();

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#e5c378', '#f7edd0', '#d4af37', '#ffffff'],
      });
    } catch {
    }

    setIsSubmitted(true);
  };

  return (
    <section
      id="connect"
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-background-deep text-ivory border-t border-white/5 select-none"
    >
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-10 sm:space-y-12 md:space-y-16">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-3xl">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-panel border border-white/10 w-fit">
            <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-champagne" />
            <span className="font-space text-[8px] sm:text-[9px] md:text-[10px] tracking-epic text-ivory uppercase font-semibold">
              TRANSMISSION • CONTACT GATEWAY
            </span>
          </div>
          <h2 className="font-syncopate text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none uppercase">
            LET'S BUILD <br />
            <span className="text-gradient-gold">SOMETHING EPIC.</span>
          </h2>
          <p className="font-space text-xs sm:text-sm md:text-base text-ivory-muted leading-relaxed pt-1 sm:pt-2">
            Available for impactful full-stack Java roles, enterprise application development, and pragmatic engineering contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
          <div className="lg:col-span-5 flex flex-col">
            <TiltCard maxTilt={8} scale={1.015} className="h-full">
              <div className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl border border-white/10 flex flex-col justify-between space-y-4 sm:space-y-5 md:space-y-6 h-full shadow-xl">
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 sm:pb-4 gap-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-champagne font-mono text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest font-bold">
                      <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>DEVELOPER CONNECT TERMINAL</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span className="font-mono text-[7px] sm:text-[9px] text-emerald-400 font-bold">ONLINE</span>
                    </div>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/60 border border-white/5 font-mono text-[9px] sm:text-[11px] text-zinc-300 space-y-1 max-h-40 sm:max-h-48 overflow-y-auto">
                    {terminalLogs.map((log, idx) => (
                      <div
                        key={idx}
                        className={
                          log.includes('STATUS: 200')
                            ? 'text-emerald-400 font-bold'
                            : log.includes('VERIFIED')
                            ? 'text-champagne'
                            : ''
                        }
                      >
                        &gt; {log}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 sm:space-y-3 pt-3 sm:pt-4 border-t border-white/10">
                  <div
                    onMouseEnter={() => soundManager.playHover()}
                    className="flex flex-wrap items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne shrink-0" />
                      <div className="text-left overflow-hidden">
                        <span className="text-[7px] sm:text-[9px] font-space text-ivory-dim uppercase tracking-wider block">
                          EMAIL ADDRESS
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs text-white font-semibold truncate block">
                          {profile.socials.email}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(profile.socials.email, 'email')}
                      onMouseEnter={() => soundManager.playHover()}
                      data-cursor="COPY"
                      className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl glass-panel text-ivory hover:text-champagne hover:border-champagne transition-colors shrink-0 cursor-pointer active:scale-95"
                      title="Copy email"
                    >
                      {copiedKey === 'email' ? (
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                    </button>
                  </div>

                  <div
                    onMouseEnter={() => soundManager.playHover()}
                    className="flex flex-wrap items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne shrink-0" />
                      <div className="text-left">
                        <span className="text-[7px] sm:text-[9px] font-space text-ivory-dim uppercase tracking-wider block">
                          PHONE CONTACT
                        </span>
                        <span className="font-mono text-[10px] sm:text-xs text-white font-semibold">
                          {profile.socials.phoneFormatted}
                        </span>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(profile.socials.phone, 'phone')}
                      onMouseEnter={() => soundManager.playHover()}
                      data-cursor="COPY"
                      className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl glass-panel text-ivory hover:text-champagne hover:border-champagne transition-colors shrink-0 cursor-pointer active:scale-95"
                      title="Copy phone number"
                    >
                      {copiedKey === 'phone' ? (
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      )}
                    </button>
                  </div>

                  <div
                    onMouseEnter={() => soundManager.playHover()}
                    className="flex flex-wrap items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/5 border border-white/5 hover:border-champagne/30 transition-colors gap-2"
                  >
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400 shrink-0" />
                      <div className="text-left">
                        <span className="text-[7px] sm:text-[9px] font-space text-ivory-dim uppercase tracking-wider block">
                          LINKEDIN PROFILE
                        </span>
                        <a
                          href={profile.socials.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => soundManager.playClick()}
                          className="font-mono text-[10px] sm:text-xs text-sky-300 hover:text-sky-200 underline font-semibold"
                        >
                          in/{profile.socials.linkedinHandle}
                        </a>
                      </div>
                    </div>
                    <a
                      href={profile.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => soundManager.playClick()}
                      onMouseEnter={() => soundManager.playHover()}
                      data-cursor="OPEN"
                      className="p-1.5 sm:p-2 rounded-lg sm:rounded-xl glass-panel text-ivory hover:text-sky-400 hover:border-sky-400 transition-colors shrink-0"
                      title="Open LinkedIn"
                    >
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          <div className="lg:col-span-7 flex flex-col">
            <TiltCard maxTilt={8} scale={1.015} className="h-full">
              <div className="glass-panel p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-champagne/30 bg-gradient-to-br from-surface via-background-surface to-surface-subtle shadow-2xl flex flex-col justify-between h-full">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-1.5 sm:gap-2 text-champagne font-mono text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest">
                      <MessageSquare className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span>START A CONVERSATION</span>
                    </div>
                    <h3 className="font-syncopate text-xl sm:text-2xl font-bold text-white">
                      INITIATE TRANSMISSION
                    </h3>
                    <p className="font-space text-xs text-ivory-dim">
                      Drop a line directly regarding full-stack Java development roles or enterprise application collaborations.
                    </p>
                  </div>

                  {isSubmitted ? (
                    <div className="py-8 sm:py-10 md:py-12 text-center space-y-3 sm:space-y-4">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-champagne/20 border border-champagne flex items-center justify-center mx-auto text-champagne shadow-gold-glow">
                        <Check className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-syncopate text-lg sm:text-xl font-bold text-white">
                          TRANSMISSION RECEIVED
                        </h4>
                        <p className="font-space text-sm text-ivory-dim max-w-md mx-auto">
                          Thank you for reaching out. Vikram will respond within 24 hours.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          soundManager.playClick();
                          setIsSubmitted(false);
                          setFormData({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="px-4 sm:px-6 py-2 sm:py-2.5 rounded-full glass-panel border border-white/20 text-xs font-mono text-ivory hover:text-champagne transition-all cursor-pointer"
                      >
                        SEND ANOTHER MESSAGE
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        <div className="space-y-1">
                          <label className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-wider block">
                            YOUR NAME
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            onFocus={() => soundManager.playHover()}
                            placeholder="e.g. John Doe"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/50 border border-white/10 text-white font-space text-xs focus:border-champagne focus:outline-none transition-colors"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-wider block">
                            YOUR EMAIL
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            onFocus={() => soundManager.playHover()}
                            placeholder="john@company.com"
                            className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/50 border border-white/10 text-white font-space text-xs focus:border-champagne focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-wider block">
                          SUBJECT
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          onFocus={() => soundManager.playHover()}
                          placeholder="Java Developer Role / Project Collaboration"
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/50 border border-white/10 text-white font-space text-xs focus:border-champagne focus:outline-none transition-colors"
                        />
                      </div>

                      <div className="space-y-1">
                        <label className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-wider block">
                          MESSAGE
                        </label>
                        <textarea
                          required
                          rows={3}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          onFocus={() => soundManager.playHover()}
                          placeholder="Describe the opportunity, technical architecture, or scope..."
                          className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-black/50 border border-white/10 text-white font-space text-xs focus:border-champagne focus:outline-none transition-colors resize-none"
                        />
                      </div>

                      <div className="pt-1 sm:pt-2">
                        <button
                          type="submit"
                          onMouseEnter={() => soundManager.playHover()}
                          data-cursor="SEND"
                          className="w-full flex items-center justify-center gap-2 py-3 sm:py-4 rounded-xl sm:rounded-2xl bg-champagne text-black font-syncopate text-xs font-bold tracking-wider hover:bg-champagne-light hover:shadow-gold-strong transition-all duration-300 cursor-pointer shadow-gold-glow active:scale-98"
                        >
                          <span>DISPATCH MESSAGE</span>
                          <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
};