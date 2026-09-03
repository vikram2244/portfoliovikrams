import React, { useEffect, useState } from 'react';
import { soundManager } from '../utils/audio';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsFading(true);
            soundManager.playChime();
            setTimeout(onComplete, 700);
          }, 250);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + step, 100);
      });
    }, 45);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      id="preloader-overlay"
      className={`fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#050507] text-[#F5F5F7] transition-opacity duration-700 ease-out select-none ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />
      <div className="absolute w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-xs sm:max-w-sm px-4 sm:px-6 text-center space-y-4 sm:space-y-6">
        <div className="relative flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl sm:rounded-3xl bg-surface border border-champagne/30 shadow-gold-glow">
          <span className="font-syncopate text-2xl sm:text-3xl font-bold text-gradient-gold tracking-tight">
            VB.
          </span>
          <div className="absolute -inset-1 rounded-2xl sm:rounded-3xl border border-champagne/20 animate-spin-slow pointer-events-none" />
        </div>

        <div className="space-y-0.5 sm:space-y-1">
          <h2 className="font-syncopate text-[10px] sm:text-xs tracking-epic text-champagne uppercase font-bold">
            INITIALIZING EXPERIENCE
          </h2>
          <p className="font-mono text-[9px] sm:text-[11px] text-ivory-dim uppercase tracking-widest">
            VIKRAM • FULL STACK JAVA DEVELOPER
          </p>
        </div>

        <div className="w-48 sm:w-56 md:w-64 space-y-1.5 sm:space-y-2">
          <div className="w-full h-0.5 sm:h-1 bg-surface-subtle rounded-full overflow-hidden p-[1px]">
            <div
              className="h-full bg-gradient-to-r from-champagne via-champagne-light to-champagne rounded-full transition-all duration-100 ease-out shadow-gold-glow"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between items-center text-[8px] sm:text-[10px] font-mono text-ivory-dim uppercase">
            <span>Loading</span>
            <span className="text-champagne font-semibold">{progress}%</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 text-[8px] sm:text-[10px] font-mono text-ivory-muted">
          <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>ESTABLISHING CONNECTION</span>
        </div>
      </div>
    </div>
  );
};