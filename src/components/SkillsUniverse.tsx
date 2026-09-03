import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, BrainCircuit, Globe, Database, Terminal } from 'lucide-react';
import { skillCategories, SkillItem } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { TiltCard } from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

export const SkillsUniverse: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCategory, setActiveCategory] = useState('java-core');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const watermark1Ref = useRef<HTMLDivElement>(null);
  const watermark2Ref = useRef<HTMLDivElement>(null);
  const glowOrbRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'java-core': return <BrainCircuit className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'full-stack': return <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      case 'database': return <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
      default: return <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />;
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (watermark1Ref.current) {
        gsap.to(watermark1Ref.current, {
          x: -80,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (watermark2Ref.current) {
        gsap.to(watermark2Ref.current, {
          x: 70,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }

      if (glowOrbRef.current) {
        gsap.to(glowOrbRef.current, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const currentCategory =
    skillCategories.find((cat) => cat.id === activeCategory) || skillCategories[0];

  const handleSelectCategory = (catId: string) => {
    soundManager.playTabSwitch();
    setActiveCategory(catId);
    setHoveredSkill(null);
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-background-DEFAULT text-ivory overflow-hidden border-t border-white/5 select-none"
    >
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-[0.025] select-none aria-hidden">
        <div
          ref={watermark1Ref}
          className="font-syncopate text-[10vw] sm:text-[12vw] md:text-[14vw] font-bold tracking-tighter whitespace-nowrap will-change-transform"
        >
          JAVA SPRING BOOT REACT MYSQL HIBERNATE
        </div>
        <div
          ref={watermark2Ref}
          className="font-syncopate text-[10vw] sm:text-[12vw] md:text-[14vw] font-bold tracking-tighter whitespace-nowrap will-change-transform"
        >
          REST API JWT DSA OOP MICROSERVICES
        </div>
      </div>

      <div
        ref={glowOrbRef}
        className="absolute top-10 sm:top-16 md:top-20 right-4 sm:right-8 md:right-10 w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 bg-champagne/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-10 sm:space-y-12 md:space-y-16">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-3xl">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-panel border border-white/10 w-fit">
            <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-champagne" />
            <span className="font-space text-[8px] sm:text-[9px] md:text-[10px] tracking-epic text-ivory uppercase font-semibold">
              TECHNICAL COMPETENCY • CAPABILITIES
            </span>
          </div>
          <h2 className="font-syncopate text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none uppercase">
            3D SKILLS <br />
            <span className="text-gradient-gold">UNIVERSE.</span>
          </h2>
          <p className="font-space text-xs sm:text-sm md:text-base text-ivory-muted leading-relaxed pt-1 sm:pt-2">
            An interactive matrix of Java enterprise development, reactive frontend engineering, and normalized data flow architectures.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor={cat.title.split(' ')[0]}
                className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3 rounded-xl sm:rounded-2xl font-syncopate text-[10px] sm:text-xs tracking-wider transition-all duration-300 cursor-pointer active:scale-95 ${
                  isActive
                    ? 'bg-champagne text-black font-bold shadow-gold-glow scale-[1.02]'
                    : 'glass-panel text-ivory-dim hover:text-ivory hover:border-white/20'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-4 sm:space-y-6 md:space-y-8">
          <p className="font-space text-xs sm:text-sm text-champagne uppercase tracking-widest font-mono">
            • {currentCategory.description}
          </p>

          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
          >
            {currentCategory.skills.map((skill, sIdx) => {
              const isCurrentHovered = hoveredSkill?.name === skill.name;

              return (
                <TiltCard key={skill.name} maxTilt={14} scale={1.03} className="h-full">
                  <div
                    onMouseEnter={() => {
                      soundManager.playHover();
                      setHoveredSkill(skill);
                    }}
                    onMouseLeave={() => setHoveredSkill(null)}
                    data-cursor="SKILL"
                    className={`glass-panel p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full min-h-[140px] sm:min-h-[160px] md:min-h-[170px] shadow-lg ${
                      isCurrentHovered
                        ? 'border-champagne bg-surface-subtle shadow-gold-glow'
                        : 'border-white/10 hover:border-white/25'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <span className="font-mono text-[8px] sm:text-[10px] text-ivory-dim tracking-wider uppercase">
                        SKILL // 0{sIdx + 1}
                      </span>
                      <span className="px-1.5 sm:px-2.5 py-0.5 rounded-full bg-champagne/15 border border-champagne/30 text-champagne font-mono text-[7px] sm:text-[9px] uppercase tracking-wider font-bold">
                        {skill.level}
                      </span>
                    </div>

                    <div className="my-2 sm:my-3">
                      <h3 className="font-syncopate text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    <p className="text-[10px] sm:text-xs text-ivory-dim font-space leading-relaxed">
                      {skill.highlight}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        <TiltCard maxTilt={5} scale={1.01} className="w-full">
          <div className="glass-panel p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-champagne/30 bg-gradient-to-r from-surface via-background-surface to-surface flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 shadow-gold-glow">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-[9px] sm:text-xs text-ivory tracking-widest uppercase">
                ACTIVE STACK INSPECTOR:
              </span>
              <span className="font-syncopate text-[9px] sm:text-xs font-bold text-champagne uppercase">
                {hoveredSkill ? hoveredSkill.name : currentCategory.title}
              </span>
            </div>

            <div className="text-[9px] sm:text-[11px] font-space text-ivory-dim text-center md:text-right">
              {hoveredSkill
                ? hoveredSkill.highlight
                : 'Hover over any core technology to inspect implementation context.'}
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};