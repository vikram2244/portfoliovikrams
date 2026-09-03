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
  const [activeCategory, setActiveCategory] = useState('ai-ml');
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const watermark1Ref = useRef<HTMLDivElement>(null);
  const watermark2Ref = useRef<HTMLDivElement>(null);
  const glowOrbRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'ai-ml':
        return <BrainCircuit className="w-4 h-4" />;
      case 'full-stack':
        return <Globe className="w-4 h-4" />;
      case 'backend-data':
        return <Database className="w-4 h-4" />;
      default:
        return <Terminal className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax scroll on giant watermark text
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
      className="relative w-full py-24 md:py-36 bg-background-DEFAULT text-ivory overflow-hidden border-t border-white/5 select-none"
    >
      {/* Background Giant Watermark Parallax Text */}
      <div className="absolute inset-0 flex flex-col justify-around pointer-events-none opacity-[0.025] select-none aria-hidden">
        <div
          ref={watermark1Ref}
          className="font-syncopate text-[14vw] font-bold tracking-tighter whitespace-nowrap will-change-transform"
        >
          PYTORCH CRNN GEMINI REACT PYTHON
        </div>
        <div
          ref={watermark2Ref}
          className="font-syncopate text-[14vw] font-bold tracking-tighter whitespace-nowrap will-change-transform"
        >
          REST API DATABASES OOP ARCHITECTURE
        </div>
      </div>

      {/* Floating Gold Glow Orb */}
      <div
        ref={glowOrbRef}
        className="absolute top-20 right-10 w-72 h-72 bg-champagne/10 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-16">
        {/* Section Header */}
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="font-space text-[10px] tracking-epic text-ivory uppercase font-semibold">
              TECHNICAL COMPETENCY • CAPABILITIES
            </span>
          </div>
          <h2 className="font-syncopate text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase">
            3D SKILLS <br />
            <span className="text-gradient-gold">UNIVERSE.</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-ivory-muted leading-relaxed pt-2">
            No generic progress bars. An interactive matrix of deep learning pipelines, reactive
            frontend engineering, and normalized data flow architectures.
          </p>
        </div>

        {/* Category Tab Pills */}
        <div className="flex flex-wrap items-center gap-3">
          {skillCategories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleSelectCategory(cat.id)}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor={cat.title.split(' ')[0]}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-syncopate text-xs tracking-wider transition-all duration-300 cursor-pointer active:scale-95 ${
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

        {/* Category Description & Skill Cards Grid */}
        <div className="space-y-8">
          <p className="font-space text-xs sm:text-sm text-champagne uppercase tracking-widest font-mono">
            • {currentCategory.description}
          </p>

          <div
            ref={cardsContainerRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
                    className={`glass-panel p-6 rounded-3xl border transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between h-full min-h-[170px] shadow-lg ${
                      isCurrentHovered
                        ? 'border-champagne bg-surface-subtle shadow-gold-glow'
                        : 'border-white/10 hover:border-white/25'
                    }`}
                  >
                    {/* Top Row: Index & Level */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-ivory-dim tracking-wider uppercase">
                        SKILL // 0{sIdx + 1}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-champagne/15 border border-champagne/30 text-champagne font-mono text-[9px] uppercase tracking-wider font-bold">
                        {skill.level}
                      </span>
                    </div>

                    {/* Skill Name */}
                    <div className="my-3">
                      <h3 className="font-syncopate text-xl sm:text-2xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                        {skill.name}
                      </h3>
                    </div>

                    {/* Description Highlight */}
                    <p className="text-xs text-ivory-dim font-space leading-relaxed">
                      {skill.highlight}
                    </p>
                  </div>
                </TiltCard>
              );
            })}
          </div>
        </div>

        {/* Bottom Interactive Inspector Bar with 3D Tilt */}
        <TiltCard maxTilt={5} scale={1.01} className="w-full">
          <div className="glass-panel p-6 rounded-3xl border border-champagne/30 bg-gradient-to-r from-surface via-background-surface to-surface flex flex-col md:flex-row items-center justify-between gap-4 shadow-gold-glow">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
              <span className="font-mono text-xs text-ivory tracking-widest uppercase">
                ACTIVE STACK INSPECTOR:
              </span>
              <span className="font-syncopate text-xs font-bold text-champagne uppercase">
                {hoveredSkill ? hoveredSkill.name : currentCategory.title}
              </span>
            </div>

            <div className="text-[11px] font-space text-ivory-dim text-center md:text-right">
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
