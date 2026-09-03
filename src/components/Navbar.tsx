import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { soundManager } from '../utils/audio';

interface NavbarProps {
  onOpenConnect: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConnect }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(soundManager.getMuted());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      const sections = ['hero', 'intro', 'about', 'work', 'skills', 'process', 'connect'];
      const scrollPos = window.scrollY + 220;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    soundManager.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleAudio = () => {
    const nextMuted = soundManager.toggleMute();
    setIsMuted(nextMuted);
    if (!nextMuted) {
      soundManager.playClick();
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-[#050507]/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          onMouseEnter={() => soundManager.playHover()}
          data-cursor="HOME"
          className="flex items-center gap-3 group text-left cursor-pointer"
        >
          <div className="w-10 h-10 bg-surface border border-champagne/30 rounded-2xl flex items-center justify-center font-syncopate font-bold text-gradient-gold shadow-gold-glow group-hover:scale-105 transition-transform">
            VTB
          </div>
          <div>
            <div className="font-syncopate text-xs md:text-sm font-bold tracking-tight text-white flex items-center gap-1.5">
              <span>VIKRAM</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </div>
            <span className="font-mono text-[9px] text-ivory-dim tracking-wider block uppercase">
              FULL STACK JAVA
            </span>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-[0.2em] text-ivory-dim">
          {[
            { id: 'intro', label: 'About' },
            { id: 'work', label: 'Work' },
            { id: 'skills', label: 'Skills' },
            { id: 'process', label: 'Process' },
            { id: 'connect', label: 'Connect' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              onMouseEnter={() => soundManager.playHover()}
              data-cursor={item.label.toUpperCase()}
              className={`hover:text-champagne transition-colors cursor-pointer relative py-1 ${
                activeSection === item.id ? 'text-champagne font-bold' : ''
              }`}
            >
              <span>{item.label}</span>
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-champagne rounded-full shadow-gold-glow" />
              )}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={toggleAudio}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor="AUDIO"
            className="flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border border-white/10 text-xs font-mono text-ivory-dim hover:text-champagne hover:border-champagne/40 transition-all cursor-pointer"
            title={isMuted ? 'Enable ambient audio' : 'Mute audio'}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
            ) : (
              <div className="flex items-center gap-1">
                <Volume2 className="w-3.5 h-3.5 text-champagne" />
                <span className="flex gap-0.5 items-end h-2.5">
                  <span className="w-0.5 h-1.5 bg-champagne animate-pulse" />
                  <span className="w-0.5 h-3 bg-champagne animate-pulse delay-75" />
                  <span className="w-0.5 h-2 bg-champagne animate-pulse delay-150" />
                </span>
              </div>
            )}
            <span className="text-[10px] tracking-wider">
              {isMuted ? 'SOUND OFF' : 'SOUND ON'}
            </span>
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              onOpenConnect();
            }}
            onMouseEnter={() => soundManager.playHover()}
            data-cursor="CONNECT"
            className="flex items-center gap-2 px-5 py-2 rounded-full bg-champagne text-black font-syncopate text-[11px] font-bold tracking-wider hover:bg-champagne-light hover:shadow-gold-strong transition-all duration-300 hover:scale-[1.02] cursor-pointer shadow-gold-glow active:scale-95"
          >
            <span>DEV CONNECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleAudio}
            className="p-2.5 rounded-xl glass-panel border border-white/10 text-ivory active:scale-95"
            aria-label="Toggle Audio"
          >
            {isMuted ? (
              <VolumeX className="w-4 h-4 text-zinc-500" />
            ) : (
              <Volume2 className="w-4 h-4 text-champagne" />
            )}
          </button>

          <button
            type="button"
            onClick={() => {
              soundManager.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2.5 rounded-xl glass-panel border border-white/10 text-ivory active:scale-95"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-white/10 px-6 py-8 mt-2 mx-4 rounded-3xl animate-fade-in space-y-6 shadow-2xl">
          <div className="flex flex-col space-y-4 text-sm font-syncopate uppercase tracking-widest">
            {[
              { id: 'intro', label: 'About' },
              { id: 'work', label: 'Work' },
              { id: 'skills', label: 'Skills' },
              { id: 'process', label: 'Process' },
              { id: 'connect', label: 'Connect' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="text-left py-2 text-ivory hover:text-champagne transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => {
                soundManager.playClick();
                setMobileMenuOpen(false);
                onOpenConnect();
              }}
              className="w-full py-3.5 rounded-2xl bg-champagne text-black font-syncopate text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-gold-glow active:scale-95"
            >
              <span>DEV CONNECT TERMINAL</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};