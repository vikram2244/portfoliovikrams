import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Cpu, Layers, ChevronDown, Terminal } from 'lucide-react';
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
          end: 'bottom bottom',
          pin: pinContainerRef.current,
          scrub: 0.8,
          anticipatePin: 1,
          onUpdate: (self) => {
            setSequenceProgress(Math.round(self.progress * 100));
          },
        },
      });

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
          scale: 1.04,
          y: -10,
          ease: 'power2.inOut',
        },
        0
      );

      tl.to(
        centerTextRef.current,
        {
          opacity: 0.2,
          y: -15,
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
      className="relative w-full h-[160vh] bg-background-deep text-ivory select-none"
    >
      <div
        ref={pinContainerRef}
        className="relative w-full h-screen overflow-hidden flex flex-col justify-between pt-20 sm:pt-24 pb-4 sm:pb-6 technical-grid"
      >
        {/* Radial ambient illumination */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne/10 via-background-deep/85 to-background-deep pointer-events-none" />

        {/* Top Header Badge & Name */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center space-y-2 shrink-0">
          <div
            onMouseEnter={() => soundManager.playHover()}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full glass-panel border border-champagne/30 text-champagne text-[11px] sm:text-xs font-mono tracking-widest uppercase shadow-gold-glow cursor-default"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-champagne" />
            <span>FULL STACK JAVA DEVELOPER</span>
          </div>

          <div className="space-y-0.5">
            <h1 className="font-syncopate text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
              VIKRAM <span className="text-gradient-gold">TIRUMALA BALAJI</span>
            </h1>
            <p className="font-mono text-[11px] sm:text-xs font-semibold tracking-epic text-ivory-dim uppercase">
              FULL STACK JAVA DEVELOPER • B.TECH ECE
            </p>
          </div>
        </div>

        {/* Center Stage: Interactive 3D Card with Profile Picture & Telemetry HUDs */}
        <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 w-full flex items-center justify-center my-auto py-1">
          {/* Left HUD Panel */}
          <div
            ref={leftHudRef}
            className="hidden lg:flex flex-col gap-3.5 absolute left-2 xl:left-8 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300"
          >
            <TiltCard maxTilt={8} scale={1.03} className="max-w-[210px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel p-4 rounded-2xl border border-white/10 space-y-1.5 backdrop-blur-xl shadow-2xl group hover:border-champagne/40 transition-colors"
              >
                <div className="flex items-center gap-2 text-champagne font-mono text-[10px] uppercase font-bold tracking-wider">
                  <Cpu className="w-3.5 h-3.5" />
                  <span>JAVA SPRING BOOT</span>
                </div>
                <div className="space-y-0.5">
                  <div className="font-syncopate text-xs font-bold text-white">LATENCY: &lt;200MS</div>
                  <p className="font-mono text-[9px] text-ivory-dim">SPRING BOOT • HIBERNATE • JWT</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} scale={1.03} className="max-w-[210px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel px-3.5 py-2.5 rounded-xl border border-white/10 flex items-center gap-2.5 backdrop-blur-xl hover:border-champagne/40 transition-colors"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="font-mono text-[10px] text-emerald-400 uppercase tracking-widest font-semibold">
                  SYSTEMS ONLINE
                </span>
              </div>
            </TiltCard>
          </div>

          {/* Center 3D Tilt Card: Beautifully Sized, Perfectly Fitted Profile Picture */}
          <div
            ref={centerCardRef}
            className="relative z-20 w-[270px] sm:w-[310px] md:w-[340px] max-w-[90vw] mx-auto shrink-0"
          >
            <TiltCard maxTilt={10} scale={1.03} className="w-full">
              <div className="relative rounded-3xl p-3 sm:p-3.5 glass-panel border border-champagne/40 shadow-[0_0_50px_rgba(200,169,126,0.2)] bg-gradient-to-b from-[#18181D]/90 via-[#0E0E12]/95 to-[#08080B]/95 overflow-hidden group transition-all duration-500 hover:border-champagne/70">
                {/* Floating Top Badge */}
                <div className="absolute top-4 right-4 z-30 px-2.5 py-1 rounded-full bg-black/80 border border-champagne/40 text-champagne text-[9px] sm:text-[10px] font-mono tracking-wider font-semibold backdrop-blur-md flex items-center gap-1.5 shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-champagne animate-pulse" />
                  <span>JAVA FULL STACK</span>
                </div>

                {/* Photo Container with Native 3:4 Aspect Ratio and High-Definition Framing */}
                <div
                  className="relative w-full rounded-2xl overflow-hidden bg-[#0A0A0F] border border-white/10 shadow-inner"
                  style={{
                    aspectRatio: '4/4',
                    maxHeight: 'min(420px, 48vh)',
                  }}
                >
                  <img
                    src="/assets/hero/balajivikrampicture.png"
                    alt="Vikram Tirumala Balaji - Full Stack Java Developer"
                    className="w-full h-full object-cover object-[center_18%] transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.src.includes('hero_black_suit.png')) {
                        target.src = '/assets/hero/hero_black_suit.png';
                      }
                    }}
                  />

                  {/* Cinematic gradient overlay ensuring text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-[#050507]/30 to-transparent opacity-85 pointer-events-none" />

                  {/* Identification Label at bottom of photo */}
                  <div className="absolute bottom-3 left-3.5 right-3.5 z-20 flex items-end justify-between gap-2">
                    <div className="space-y-0.5">
                      <div className="font-syncopate text-sm sm:text-base font-bold text-white tracking-tight leading-tight drop-shadow-md">
                        VIKRAM TIRUMALA BALAJI
                      </div>
                      <div className="font-mono text-[9px] sm:text-[10px] text-champagne tracking-wider uppercase font-semibold drop-shadow">
                        JAVA FULL STACK • B.TECH ECE
                      </div>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/80 border border-champagne/40 flex items-center justify-center text-champagne shadow-gold-glow shrink-0 backdrop-blur-sm">
                      <Terminal className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Right HUD Panel */}
          <div
            ref={rightHudRef}
            className="hidden lg:flex flex-col gap-3.5 absolute right-2 xl:right-8 top-1/2 -translate-y-1/2 z-30 transition-transform duration-300"
          >
            <TiltCard maxTilt={8} scale={1.03} className="max-w-[210px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel p-4 rounded-2xl border border-white/10 space-y-1.5 backdrop-blur-xl shadow-2xl text-right hover:border-champagne/40 transition-colors"
              >
                <div className="flex items-center justify-end gap-2 text-champagne font-mono text-[10px] uppercase font-bold tracking-wider">
                  <span>CORE JAVA</span>
                  <Layers className="w-3.5 h-3.5" />
                </div>
                <div className="space-y-0.5">
                  <div className="font-syncopate text-xs font-bold text-white">ACID-COMPLIANT</div>
                  <p className="font-mono text-[9px] text-ivory-dim">REACT • SPRING BOOT • MYSQL</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={6} scale={1.03} className="max-w-[210px]">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel px-3.5 py-2.5 rounded-xl border border-white/10 flex items-center justify-end gap-2.5 backdrop-blur-xl hover:border-champagne/40 transition-colors"
              >
                <span className="font-mono text-[10px] text-ivory-dim uppercase tracking-widest font-semibold">
                  SRKR - AP - 2026
                </span>
                <span className="w-2 h-2 rounded-full bg-champagne" />
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Bottom Banner Statement & Scroll Sequence Bar */}
        <div className="relative z-20 max-w-5xl mx-auto px-6 w-full space-y-3 text-center shrink-0">
          <div ref={centerTextRef} className="space-y-1">
            <p className="font-syncopate text-xs sm:text-sm md:text-base font-bold tracking-wider text-white uppercase">
              I BUILD SCALABLE, SECURE{' '}
              <span className="text-gradient-gold">ENTERPRISE APPLICATIONS.</span>
            </p>
          </div>

          {/* Sequence Bar & Action CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 pt-2 border-t border-white/10 font-mono text-[10px] sm:text-[11px] text-ivory-dim">
            <div className="flex items-center gap-3">
              <span className="text-champagne font-bold">SEQUENCE:</span>
              <div className="w-28 sm:w-44 h-1.5 bg-surface rounded-full overflow-hidden p-[1px]">
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
