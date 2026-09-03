import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Cpu, Layers, ChevronDown, Terminal, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/audio';
import { TiltCard } from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

export const Hero: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const leftHudRef = useRef<HTMLDivElement>(null);
  const rightHudRef = useRef<HTMLDivElement>(null);
  const centerCardRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const scrollPromptRef = useRef<HTMLDivElement>(null);

  const [sequenceProgress, setSequenceProgress] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !pinContainerRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=70%',
          pin: pinContainerRef.current,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            setSequenceProgress(Math.round(self.progress * 100));
          },
        },
      });

      // Pinned cinematic scrub transformations
      tl.to(
        leftHudRef.current,
        {
          x: -30,
          opacity: 0.3,
          ease: 'power2.inOut',
        },
        0
      );

      tl.to(
        rightHudRef.current,
        {
          x: 30,
          opacity: 0.3,
          ease: 'power2.inOut',
        },
        0
      );

      tl.to(
        centerCardRef.current,
        {
          scale: 1.05,
          y: -15,
          ease: 'power2.inOut',
        },
        0
      );

      tl.to(
        centerTextRef.current,
        {
          opacity: 0.1,
          y: -20,
          ease: 'power2.inOut',
        },
        0.2
      );

      tl.to(
        scrollPromptRef.current,
        {
          opacity: 0,
          y: 15,
          ease: 'power2.inOut',
        },
        0.1
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    soundManager.playClick();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full h-[170vh] bg-background-deep text-ivory select-none"
    >
      <div
        ref={pinContainerRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between pt-24 pb-8 technical-grid"
      >
        {/* Radial ambient illumination */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne/10 via-background-deep/85 to-background-deep pointer-events-none" />

        {/* Top Header Badge & Meta Row */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center space-y-3">
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-champagne/30 text-champagne text-xs font-mono tracking-widest uppercase shadow-gold-glow cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-champagne" />
            <span>AI • ML ENGINEERING & APPLIED SYSTEMS</span>
          </div>

          <div className="space-y-1">
            <h1 className="font-syncopate text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
              MEGA <span className="text-gradient-gold">VANNAN</span>
            </h1>
            <p className="font-mono text-xs sm:text-sm font-semibold tracking-epic text-ivory-dim uppercase">
              AI/ML • FULL STACK DEVELOPER
            </p>
          </div>
        </div>

        {/* Center Stage: Interactive 3D Cards & HUD telemetry */}
        <div className="relative z-20 max-w-6xl mx-auto px-6 w-full flex items-center justify-center my-auto">
          {/* Left HUD Panel with 3D Tilt */}
          <div
            ref={leftHudRef}
            className="hidden lg:flex flex-col gap-4 absolute left-4 xl:left-8 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300"
          >
            <TiltCard maxTilt={8} scale={1.03} className="max-w-[220px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2 backdrop-blur-xl shadow-2xl group hover:border-champagne/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-champagne font-mono text-[10px] uppercase font-bold tracking-wider">
                  <Cpu className="w-4 h-4" />
                  <span>AI • ML ENGINEERING</span>
                </div>
                <div className="space-y-1">
                  <div className="font-syncopate text-xs font-bold text-white">LATENCY: &lt;180MS</div>
                  <p className="font-mono text-[10px] text-ivory-dim">PYTORCH • CRNN • GEMINI VECTOR INFERENCE</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} scale={1.03} className="max-w-[220px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel p-3.5 rounded-xl border border-white/10 flex items-center gap-2.5 backdrop-blur-xl hover:border-champagne/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">
                  SYSTEMS ONLINE
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Center 3D Tilt Card with Portrait Photo */}
          <div ref={centerCardRef} className="relative z-20 max-w-sm sm:max-w-md w-full mx-auto">
            <TiltCard maxTilt={12} scale={1.03} className="w-full">
              <div className="relative rounded-3xl p-3 sm:p-4 glass-panel border border-champagne/40 shadow-cinematic bg-gradient-to-b from-surface via-background-surface to-surface overflow-hidden group">
                {/* Floating Top Badge */}
                <div className="absolute top-6 right-6 z-30 px-3 py-1 rounded-full bg-black/75 border border-champagne/40 text-champagne text-[10px] font-mono tracking-wider font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                  <span>AI/ML SPECIALIZATION • GOJAN SBT</span>
                </div>

                {/* Hero Photo Container */}
                <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-black/60 border border-white/10">
                  <img
                    src="/assets/hero/hero_black_suit.png"
                    alt="Mega Vannan - AI/ML Engineer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle gradient overlay at bottom of card */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-80" />

                  {/* Identification Label at bottom */}
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between">
                    <div>
                      <div className="font-syncopate text-lg sm:text-xl font-bold text-white tracking-tight">
                        MEGA VANNAN
                      </div>
                      <div className="font-mono text-[10px] text-champagne tracking-widest uppercase">
                        AI/ML ARCHITECT • B.E. CSE
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-surface border border-champagne/40 flex items-center justify-center text-champagne shadow-gold-glow">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right HUD Panel with 3D Tilt */}
          <div
            ref={rightHudRef}
            className="hidden lg:flex flex-col gap-4 absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300"
          >
            <TiltCard maxTilt={8} scale={1.03} className="max-w-[220px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel p-5 rounded-2xl border border-white/10 space-y-2 backdrop-blur-xl shadow-2xl text-right hover:border-champagne/40 transition-colors"
              >
                <div className="flex items-center justify-end gap-2 text-champagne font-mono text-[10px] uppercase font-bold tracking-wider">
                  <span>FULL STACK CORE</span>
                  <Layers className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <div className="font-syncopate text-xs font-bold text-white">ACID-COMPLIANT</div>
                  <p className="font-mono text-[10px] text-ivory-dim">REACT • FASTAPI • POSTGRESQL • TAILWIND</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} scale={1.03} className="max-w-[220px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel p-3.5 rounded-xl border border-white/10 flex items-center justify-end gap-2.5 backdrop-blur-xl hover:border-champagne/40 transition-colors"
              >
                <span className="font-mono text-[10px] text-ivory-dim uppercase tracking-widest font-semibold">
                  CHENNAI, TN // 2026
                </span>
                <span className="w-2 h-2 rounded-full bg-champagne" />
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Bottom Banner Statement & Scroll Sequence Bar */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 w-full space-y-5 text-center">
          <div ref={centerTextRef} className="space-y-2">
            <p className="font-syncopate text-sm sm:text-base md:text-lg font-bold tracking-wider text-white uppercase">
              I BUILD DIGITAL EXPERIENCES THAT{' '}
              <span className="text-gradient-gold">THINK, MOVE & PERFORM.</span>
            </p>
          </div>

          {/* Sequence Bar & Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2 border-t border-white/10 font-mono text-[11px] text-ivory-dim">
            <div className="flex items-center gap-3">
              <span className="text-champagne font-bold">SEQUENCE:</span>
              <div className="w-32 sm:w-48 h-1.5 bg-surface rounded-full overflow-hidden p-[1px]">
                <div
                  className="h-full bg-gradient-to-r from-champagne via-champagne-light to-champagne rounded-full transition-all duration-75 shadow-gold-glow"
                  style={{ width: `${Math.max(sequenceProgress, 8)}%` }}
                />
              </div>
              <span className="text-white font-semibold">{sequenceProgress}%</span>
            </div>

            <div ref={scrollPromptRef} className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('intro')}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="EXPLORE"
                className="flex items-center gap-2 text-ivory hover:text-champagne transition-colors cursor-pointer"
              >
                <span className="tracking-widest uppercase">SCROLL TO EXPLORE</span>
                <ChevronDown className="w-3.5 h-3.5 text-champagne animate-bounce" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
