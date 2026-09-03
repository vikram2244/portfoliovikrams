import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight, Github, ExternalLink, Cpu, Database, Flame, Bot, Layers } from 'lucide-react';
import { projects, Project } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { TiltCard } from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

interface WorkProps {
  onSelectProject: (project: Project) => void;
}

export const Work: React.FC<WorkProps> = ({ onSelectProject }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.cinematic-project-item').forEach((item) => {
        const giantNumber = item.querySelector('.project-giant-number');
        const contentPanel = item.querySelector('.project-content-panel');
        const visualPanel = item.querySelector('.project-visual-panel');

        gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        })
          .fromTo(
            giantNumber,
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 0.7, ease: 'power2.out' }
          )
          .fromTo(
            contentPanel,
            { opacity: 0, y: 35 },
            { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' },
            '-=0.5'
          )
          .fromTo(
            visualPanel,
            { opacity: 0, scale: 0.95 },
            { opacity: 1, scale: 1, duration: 0.7, ease: 'power2.out' },
            '-=0.5'
          );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getThemeAccents = (index: number) => {
    switch (index) {
      case 0:
        return {
          gradient: 'from-amber-950/30 via-surface to-background-deep',
          accent: 'text-champagne',
          icon: <Cpu className="w-10 h-10 text-champagne" />,
          bgPattern: 'radial-gradient(circle at 75% 30%, rgba(229, 195, 120, 0.12), transparent 70%)',
        };
      case 1:
        return {
          gradient: 'from-blue-950/30 via-surface to-background-deep',
          accent: 'text-sky-400',
<<<<<<< HEAD
          icon: <Database className="w-10 h-10 text-sky-400" />,
=======
          icon: <Bot className="w-10 h-10 text-sky-400" />,
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
          bgPattern: 'radial-gradient(circle at 75% 30%, rgba(56, 189, 248, 0.12), transparent 70%)',
        };
      case 2:
        return {
          gradient: 'from-emerald-950/30 via-surface to-background-deep',
          accent: 'text-emerald-400',
          icon: <Database className="w-10 h-10 text-emerald-400" />,
          bgPattern: 'radial-gradient(circle at 75% 30%, rgba(16, 185, 129, 0.12), transparent 70%)',
        };
      case 3:
        return {
          gradient: 'from-red-950/30 via-surface to-background-deep',
          accent: 'text-red-400',
          icon: <Flame className="w-10 h-10 text-red-400" />,
          bgPattern: 'radial-gradient(circle at 75% 30%, rgba(248, 113, 113, 0.12), transparent 70%)',
        };
      default:
        return {
          gradient: 'from-purple-950/30 via-surface to-background-deep',
          accent: 'text-purple-400',
          icon: <Layers className="w-10 h-10 text-purple-400" />,
          bgPattern: 'radial-gradient(circle at 75% 30%, rgba(168, 85, 247, 0.12), transparent 70%)',
        };
    }
  };

  const handleOpenCaseStudy = (project: Project) => {
    soundManager.playModalOpen();
    onSelectProject(project);
  };

  return (
    <section
      id="work"
      ref={sectionRef}
      className="relative w-full py-24 md:py-36 bg-background-deep text-ivory border-t border-white/5 select-none"
    >
      <div className="absolute inset-0 technical-grid-gold opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 space-y-20">
<<<<<<< HEAD
=======
        {/* Section Header */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 w-fit">
            <Sparkles className="w-3.5 h-3.5 text-champagne" />
            <span className="font-space text-[10px] tracking-epic text-ivory uppercase font-semibold">
              SELECTED WORKS • CASE STUDIES
            </span>
          </div>
          <h2 className="font-syncopate text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase">
            CINEMATIC <br />
            <span className="text-gradient-gold">CASE STUDIES.</span>
          </h2>
          <p className="font-space text-sm sm:text-base text-ivory-muted leading-relaxed pt-2">
<<<<<<< HEAD
            Each project represents a tangible convergence of clean architecture, relational integrity, and pragmatic Java development.
          </p>
        </div>

=======
            Each project represents a tangible convergence of clean architecture, relational integrity,
            and pragmatic AI execution.
          </p>
        </div>

        {/* Project List */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
        <div className="space-y-24 md:space-y-36">
          {projects.map((project, idx) => {
            const theme = getThemeAccents(idx);

            return (
              <div
                key={project.id}
                className="cinematic-project-item relative min-h-[65vh] flex flex-col justify-center"
              >
<<<<<<< HEAD
=======
                {/* Giant Watermark Number */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                <div className="project-giant-number absolute -top-14 -left-6 md:-left-10 font-syncopate text-[15vw] font-bold text-white/[0.025] select-none pointer-events-none tracking-tighter">
                  {project.number}
                </div>

<<<<<<< HEAD
=======
                {/* Single, non-nested 3D TiltCard */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                <TiltCard maxTilt={8} scale={1.01} className="w-full">
                  <div
                    className={`relative z-10 glass-panel glass-panel-hover p-7 md:p-12 rounded-3xl border border-white/10 bg-gradient-to-br ${theme.gradient} shadow-2xl overflow-hidden group`}
                    style={{ backgroundImage: theme.bgPattern }}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
<<<<<<< HEAD
                      <div className="project-content-panel lg:col-span-7 space-y-6">
=======
                      {/* Left: Info & Metrics */}
                      <div className="project-content-panel lg:col-span-7 space-y-6">
                        {/* Meta Tags Row */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="font-syncopate text-lg md:text-xl font-bold text-champagne">
                            {project.number}
                          </span>
                          <div className="h-4 w-px bg-white/20" />
                          {project.status ? (
                            <span className="px-3 py-1 rounded-full bg-champagne/20 border border-champagne/40 text-champagne font-mono text-[10px] tracking-widest font-bold uppercase">
                              {project.status}
                            </span>
                          ) : (
                            <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] tracking-widest uppercase flex items-center gap-1.5 font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              FEATURED WORK
                            </span>
                          )}

                          {project.focus.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-space text-ivory-dim uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

<<<<<<< HEAD
=======
                        {/* Title & Tagline */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                        <div className="space-y-2">
                          <h3 className="font-syncopate text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                            {project.title}
                          </h3>
                          <p className="font-syne text-sm sm:text-base font-semibold text-ivory-muted">
                            {project.tagline}
                          </p>
                        </div>

<<<<<<< HEAD
=======
                        {/* Description */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                        <p className="font-space text-xs sm:text-sm text-ivory-dim leading-relaxed">
                          {project.description}
                        </p>

<<<<<<< HEAD
=======
                        {/* Metrics Grid */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                        {project.metrics && (
                          <div className="grid grid-cols-3 gap-3 pt-2">
                            {project.metrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                onMouseEnter={() => soundManager.playHover()}
                                className="p-3 rounded-2xl bg-black/40 border border-white/5 hover:border-champagne/30 transition-colors"
                              >
                                <span className="text-[9px] font-space text-ivory-dim tracking-wider uppercase block">
                                  {metric.label}
                                </span>
                                <span className="font-syncopate text-base sm:text-lg font-bold text-champagne">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

<<<<<<< HEAD
=======
                        {/* Tech Stack Pills */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                        <div className="flex flex-wrap gap-2 pt-2">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              onMouseEnter={() => soundManager.playHover()}
                              className="px-3 py-1 rounded-xl bg-surface border border-white/10 text-xs font-mono text-ivory group-hover:border-champagne/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

<<<<<<< HEAD
=======
                        {/* Action Buttons */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                        <div className="pt-4 flex flex-wrap items-center gap-4">
                          <button
                            type="button"
                            onClick={() => handleOpenCaseStudy(project)}
                            onMouseEnter={() => soundManager.playHover()}
                            data-cursor="VIEW"
                            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-champagne text-black font-syncopate text-xs font-bold tracking-wider hover:bg-champagne-light hover:shadow-gold-strong transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-gold-glow active:scale-95"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => soundManager.playClick()}
                              onMouseEnter={() => soundManager.playHover()}
                              data-cursor="GITHUB"
                              className="flex items-center gap-2 px-5 py-3.5 rounded-full glass-panel border border-white/15 text-ivory font-syncopate text-xs hover:border-champagne hover:text-champagne transition-all"
                            >
                              <Github className="w-4 h-4" />
                              <span>CODE</span>
                            </a>
                          )}
                        </div>
                      </div>

<<<<<<< HEAD
=======
                      {/* Right: Interactive 3D Architecture Visual (with 3D depth layer) */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                      <div className="project-visual-panel lg:col-span-5 relative">
                        <div
                          onClick={() => handleOpenCaseStudy(project)}
                          onMouseEnter={() => soundManager.playHover()}
                          data-cursor="EXPLORE"
                          className="relative w-full aspect-[4/3] rounded-2xl bg-black/60 border border-white/15 p-6 flex flex-col justify-between overflow-hidden cursor-pointer group/visual hover:border-champagne/60 transition-all duration-300 shadow-2xl hover:shadow-gold-glow"
                          style={{
                            transformStyle: 'preserve-3d',
                            transform: 'translateZ(18px)',
                          }}
                        >
<<<<<<< HEAD
=======
                          {/* Top row with mac dots & spec id */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                          <div className="flex items-center justify-between z-10">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="font-mono text-[9px] text-ivory-dim tracking-widest uppercase">
                              SYSTEM_SPEC_{project.number}
                            </span>
                          </div>

<<<<<<< HEAD
=======
                          {/* Center interactive icon & prompt */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                          <div className="my-auto flex flex-col items-center justify-center text-center space-y-3 z-10 transform group-hover/visual:scale-105 transition-transform duration-300">
                            <div className="w-20 h-20 rounded-3xl bg-surface-subtle border border-champagne/30 flex items-center justify-center shadow-gold-glow">
                              {theme.icon}
                            </div>
                            <span className="font-syncopate text-sm font-bold text-white tracking-widest">
                              {project.title}
                            </span>
                            <span className="text-[10px] font-mono text-champagne flex items-center gap-1">
                              <span>CLICK TO VIEW SYSTEM ARCHITECTURE</span>
                              <span>→</span>
                            </span>
                          </div>

<<<<<<< HEAD
                          <div className="flex items-center justify-between text-[9px] font-mono text-ivory-dim z-10 border-t border-white/5 pt-3">
                            <span>TIRUMALA BALAJI VIKRAM</span>
                            <span className="text-champagne font-semibold">JAVA FULL STACK</span>
                          </div>

=======
                          {/* Bottom footer bar */}
                          <div className="flex items-center justify-between text-[9px] font-mono text-ivory-dim z-10 border-t border-white/5 pt-3">
                            <span>MEGA VANNAN</span>
                            <span className="text-champagne font-semibold">AI/ML ARCHITECTURE</span>
                          </div>

                          {/* Background grid texture */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                          <div className="absolute inset-0 technical-grid opacity-30 pointer-events-none" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
