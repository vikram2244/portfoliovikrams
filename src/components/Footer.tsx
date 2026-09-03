import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Phone, Heart } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    soundManager.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative w-full py-10 sm:py-12 md:py-16 bg-[#030305] text-ivory border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-8 sm:space-y-10 md:space-y-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 pb-6 sm:pb-8 border-b border-white/10">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-surface border border-champagne/30 rounded-xl sm:rounded-2xl flex items-center justify-center font-syncopate font-bold text-gradient-gold shadow-gold-glow">
              VB.
            </div>
            <div>
              <div className="font-syncopate text-xs sm:text-sm font-bold tracking-tight text-white">
                TIRUMALA BALAJI VIKRAM
              </div>
              <span className="font-mono text-[8px] sm:text-[10px] text-champagne tracking-wider uppercase block">
                FULL STACK JAVA DEVELOPER
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor="TOP"
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 md:py-2.5 rounded-full glass-panel border border-white/15 text-[10px] sm:text-xs font-mono text-ivory hover:text-champagne hover:border-champagne/40 transition-all cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:-translate-y-0.5 transition-transform text-champagne" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center text-center md:text-left">
          <div className="space-y-0.5 sm:space-y-1">
            <span className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-widest block">
              LOCATION & TIMEZONE
            </span>
            <p className="font-space text-xs text-ivory font-medium">
              Vizianagaram, Andhra Pradesh, India • IST (UTC +5:30)
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="GITHUB"
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-panel text-ivory-dim hover:text-champagne hover:border-champagne/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="LINKEDIN"
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-panel text-ivory-dim hover:text-sky-400 hover:border-sky-400/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="EMAIL"
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-panel text-ivory-dim hover:text-champagne hover:border-champagne/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
            <a
              href={`tel:${profile.socials.phone}`}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="CALL"
              className="p-2 sm:p-3 rounded-xl sm:rounded-2xl glass-panel text-ivory-dim hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </div>

          <div className="text-center md:text-right space-y-0.5 sm:space-y-1">
            <span className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-widest block">
              ENGINEERED WITH
            </span>
            <p className="font-mono text-[10px] sm:text-xs text-champagne">
              React • Spring Boot • MySQL • Tailwind
            </p>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[9px] sm:text-[11px] font-space text-ivory-muted gap-2 sm:gap-4">
          <p>© {new Date().getFullYear()} Tirumala Balaji Vikram. All rights reserved.</p>
          <p className="font-mono text-[8px] sm:text-[10px] text-ivory-muted">
            JAVA FULL STACK DEVELOPMENT
          </p>
        </div>
      </div>
    </footer>
  );
};