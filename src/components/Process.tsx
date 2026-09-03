import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Compass, Code2, Cpu, Rocket, Layers, CheckCircle2 } from 'lucide-react';
import { philosophy } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { TiltCard } from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

export const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineProgressRef = useRef<HTMLDivElement>(null);

  const getStageIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Compass className="w-5 h-5 text-champagne" />;
      case 1:
        return <Layers className="w-5 h-5 text-champagne" />;
      case 2:
        return <Code2 className="w-5 h-5 text-champagne" />;
      case 3:
        return <Cpu className="w-5 h-5 text-champagne" />;
      default:
        return <Rocket className="w-5 h-5 text-champagne" />;
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Timeline vertical scroll line growth
      if (lineProgressRef.current) {
        gsap.fromTo(
          lineProgressRef.current,
          { height: '0%' },
          {
            height: '100%',
            ease: 'none',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top 70%',
              end: 'bottom 85%',
              scrub: 0.8,
            },
          }
        );
      }

      // Step cards entrance
      gsap.utils.toArray<HTMLElement>('.process-step-card-container').forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-background-deep text-ivory overflow-hidden border-t border-white/5 select-none"
    >
      <div className="absolute inset-0 technical-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 space-y-20">
        {/* Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="font-space text-[10px] tracking-epic text-ivory uppercase font-semibold">
              ENGINEERING METHODOLOGY • WORKFLOW
            </span>
          </div>
          <h2 className="font-syncopate text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase">
            HOW I <br />
            <span className="text-gradient-gold">BUILD.</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-ivory-muted leading-relaxed pt-2">
            A disciplined 5-stage lifecycle ensuring every product is architected for zero latency,
            robust data flow, and pragmatic machine intelligence.
          </p>
        </div>

        {/* Timeline with Glowing Line */}
        <div className="relative pl-6 md:pl-16 space-y-12">
          {/* Vertical progress line */}
          <div className="absolute left-2 md:left-6 top-6 bottom-6 w-0.5 bg-white/10">
            <div
              ref={lineProgressRef}
              className="w-full bg-gradient-to-b from-champagne via-champagne-light to-champagne shadow-gold-glow transition-all"
            />
          </div>

          {philosophy.map((stage, idx) => (
            <div key={stage.number} className="process-step-card-container relative">
              <TiltCard maxTilt={8} scale={1.015} className="w-full">
                <div
                  onMouseEnter={() => soundManager.playHover()}
                  className="relative glass-panel glass-panel-hover p-8 md:p-12 rounded-3xl border border-white/10 group shadow-xl"
                >
                  {/* Step Marker Badge */}
                  <div className="absolute -left-[31px] md:-left-[51px] top-10 flex items-center justify-center w-8 h-8 rounded-full bg-surface border-2 border-champagne text-champagne shadow-gold-glow z-20 group-hover:scale-110 transition-transform">
                    <span className="font-mono text-[10px] font-bold">{stage.number}</span>
                  </div>

                  <div className="space-y-6">
                    {/* Title & Subtitle */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-surface border border-champagne/30 flex items-center justify-center shadow-gold-glow group-hover:border-champagne transition-colors">
                          {getStageIcon(idx)}
                        </div>
                        <div>
                          <span className="font-mono text-[10px] text-champagne uppercase tracking-widest block">
                            PHASE 0{idx + 1}
                          </span>
                          <h3 className="font-syncopate text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      <div className="px-3.5 py-1 rounded-full bg-champagne/10 border border-champagne/30 text-champagne font-mono text-[10px] uppercase tracking-wider font-semibold">
                        STAGE {stage.number} OF 05
                      </div>
                    </div>

                    {/* Description */}
                    <p className="font-space text-xs sm:text-sm text-ivory-dim leading-relaxed">
                      {stage.details}
                    </p>

                    {/* Key Actions Checklist */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2">
                      {stage.blueprint.map((action, aIdx) => (
                        <div
                          key={aIdx}
                          onMouseEnter={() => soundManager.playHover()}
                          className="flex items-center gap-2 p-3 rounded-2xl bg-surface-subtle border border-white/5 text-[11px] font-mono text-ivory-dim group-hover:border-champagne/20 transition-colors"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne shrink-0" />
                          <span className="truncate">{action}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
