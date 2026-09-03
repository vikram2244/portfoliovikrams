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
    <footer className="relative w-full py-16 bg-[#030305] text-ivory border-t border-white/5 select-none">
      <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
<<<<<<< HEAD
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface border border-champagne/30 rounded-2xl flex items-center justify-center font-syncopate font-bold text-gradient-gold shadow-gold-glow">
              VB.
            </div>
            <div>
              <div className="font-syncopate text-sm font-bold tracking-tight text-white">
                TIRUMALA BALAJI VIKRAM
              </div>
              <span className="font-mono text-[10px] text-champagne tracking-wider uppercase block">
                FULL STACK JAVA DEVELOPER
=======
        {/* Top row: Brand & Back to top button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface border border-champagne/30 rounded-2xl flex items-center justify-center font-syncopate font-bold text-gradient-gold shadow-gold-glow">
              MV.
            </div>
            <div>
              <div className="font-syncopate text-sm font-bold tracking-tight text-white">
                MEGAVANNAN
              </div>
              <span className="font-mono text-[10px] text-champagne tracking-wider uppercase block">
                AI/ML & FULL STACK DEVELOPER
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor="TOP"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full glass-panel border border-white/15 text-xs font-mono text-ivory hover:text-champagne hover:border-champagne/40 transition-all cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-champagne" />
          </button>
        </div>

<<<<<<< HEAD
=======
        {/* Middle row: Metadata & Socials */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-ivory-dim uppercase tracking-widest block">
              LOCATION & TIMEZONE
            </span>
            <p className="font-space text-xs text-ivory font-medium">
<<<<<<< HEAD
              Vizianagaram, Andhra Pradesh, India • IST (UTC +5:30)
=======
              Chennai, Tamil Nadu, India • IST (UTC +5:30)
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
            </p>
          </div>

          <div className="flex items-center justify-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="GITHUB"
              className="p-3 rounded-2xl glass-panel text-ivory-dim hover:text-champagne hover:border-champagne/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="LINKEDIN"
              className="p-3 rounded-2xl glass-panel text-ivory-dim hover:text-sky-400 hover:border-sky-400/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${profile.socials.email}`}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="EMAIL"
              className="p-3 rounded-2xl glass-panel text-ivory-dim hover:text-champagne hover:border-champagne/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href={`tel:${profile.socials.phone}`}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor="CALL"
              className="p-3 rounded-2xl glass-panel text-ivory-dim hover:text-emerald-400 hover:border-emerald-400/40 transition-colors"
              aria-label="Phone"
            >
              <Phone className="w-4 h-4" />
            </a>
          </div>

          <div className="text-center md:text-right space-y-1">
            <span className="font-mono text-[10px] text-ivory-dim uppercase tracking-widest block">
              ENGINEERED WITH
            </span>
            <p className="font-mono text-xs text-champagne">
<<<<<<< HEAD
              React • Spring Boot • MySQL • Tailwind
=======
              Three.js • GSAP • Lenis • React • Tailwind
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
            </p>
          </div>
        </div>

<<<<<<< HEAD
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-space text-ivory-muted gap-4">
          <p>© {new Date().getFullYear()} Tirumala Balaji Vikram. All rights reserved.</p>
          <p className="font-mono text-[10px] text-ivory-muted">
            JAVA FULL STACK DEVELOPMENT
=======
        {/* Bottom copyright notice */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] font-space text-ivory-muted gap-4">
          <p>© {new Date().getFullYear()} Mega Vannan. All rights reserved.</p>
          <p className="font-mono text-[10px] text-ivory-muted">
            DESIGNED WITH MATHEMATICAL PRECISION & APPLIED AI
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
          </p>
        </div>
      </div>
    </footer>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
