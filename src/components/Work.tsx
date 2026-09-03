import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, ArrowUpRight, Github, ExternalLink, Cpu, Database, Flame, Layers } from 'lucide-react';
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
          icon: <Cpu className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-champagne" />,
          borderColor: 'border-champagne/40',
          glowColor: 'shadow-gold-glow',
        };
      case 1:
        return {
          gradient: 'from-blue-950/30 via-surface to-background-deep',
          icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-sky-400" />,
          borderColor: 'border-sky-400/40',
          glowColor: 'shadow-sky-400/20',
        };
      case 2:
        return {
          gradient: 'from-emerald-950/30 via-surface to-background-deep',
          icon: <Database className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-emerald-400" />,
          borderColor: 'border-emerald-400/40',
          glowColor: 'shadow-emerald-400/20',
        };
      case 3:
        return {
          gradient: 'from-red-950/30 via-surface to-background-deep',
          icon: <Flame className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-red-400" />,
          borderColor: 'border-red-400/40',
          glowColor: 'shadow-red-400/20',
        };
      default:
        return {
          gradient: 'from-purple-950/30 via-surface to-background-deep',
          icon: <Layers className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-400" />,
          borderColor: 'border-purple-400/40',
          glowColor: 'shadow-purple-400/20',
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
      className="relative w-full py-16 sm:py-20 md:py-28 lg:py-36 bg-background-deep text-ivory border-t border-white/5 select-none"
    >
      <div className="absolute inset-0 technical-grid-gold opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 space-y-12 sm:space-y-16 md:space-y-20">
        <div className="space-y-2 sm:space-y-3 md:space-y-4 max-w-3xl">
          <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full glass-panel border border-white/10 w-fit">
            <Sparkles className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-champagne" />
            <span className="font-space text-[8px] sm:text-[9px] md:text-[10px] tracking-epic text-ivory uppercase font-semibold">
              SELECTED WORKS • CASE STUDIES
            </span>
          </div>
          <h2 className="font-syncopate text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-white leading-none uppercase">
            CINEMATIC <br />
            <span className="text-gradient-gold">CASE STUDIES.</span>
          </h2>
          <p className="font-space text-xs sm:text-sm md:text-base text-ivory-muted leading-relaxed pt-1 sm:pt-2">
            Each project represents a tangible convergence of clean architecture, relational integrity, and pragmatic Java development.
          </p>
        </div>

        <div className="space-y-16 sm:space-y-20 md:space-y-28 lg:space-y-36">
          {projects.map((project, idx) => {
            const theme = getThemeAccents(idx);

            return (
              <div
                key={project.id}
                className="cinematic-project-item relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[65vh] flex flex-col justify-center"
              >
                <div className="project-giant-number absolute -top-8 sm:-top-10 md:-top-14 -left-3 sm:-left-4 md:-left-6 lg:-left-10 font-syncopate text-[10vw] sm:text-[12vw] md:text-[15vw] font-bold text-white/[0.025] select-none pointer-events-none tracking-tighter">
                  {project.number}
                </div>

                <TiltCard maxTilt={8} scale={1.01} className="w-full">
                  <div
                    className={`relative z-10 glass-panel glass-panel-hover p-5 sm:p-6 md:p-8 lg:p-12 rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br ${theme.gradient} shadow-2xl overflow-hidden group`}
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
                      <div className="project-content-panel lg:col-span-7 space-y-4 sm:space-y-5 md:space-y-6">
                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-2.5">
                          <span className="font-syncopate text-base sm:text-lg md:text-xl font-bold text-champagne">
                            {project.number}
                          </span>
                          <div className="h-3 sm:h-4 w-px bg-white/20" />
                          {project.status ? (
                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-champagne/20 border border-champagne/40 text-champagne font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-widest font-bold uppercase">
                              {project.status}
                            </span>
                          ) : (
                            <span className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-[8px] sm:text-[9px] md:text-[10px] tracking-widest uppercase flex items-center gap-1 font-bold">
                              <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                              FEATURED WORK
                            </span>
                          )}

                          {project.focus.slice(0, 2).map((tag, tagIdx) => (
                            <span
                              key={tagIdx}
                              className="px-1.5 sm:px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[8px] sm:text-[9px] md:text-[10px] font-space text-ivory-dim uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="space-y-1 sm:space-y-2">
                          <h3 className="font-syncopate text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight group-hover:text-champagne transition-colors">
                            {project.title}
                          </h3>
                          <p className="font-syne text-xs sm:text-sm md:text-base font-semibold text-ivory-muted">
                            {project.tagline}
                          </p>
                        </div>

                        <p className="font-space text-xs sm:text-sm text-ivory-dim leading-relaxed">
                          {project.description}
                        </p>

                        {project.metrics && (
                          <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-1 sm:pt-2">
                            {project.metrics.map((metric, mIdx) => (
                              <div
                                key={mIdx}
                                onMouseEnter={() => soundManager.playHover()}
                                className="p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-black/40 border border-white/5 hover:border-champagne/30 transition-colors"
                              >
                                <span className="text-[7px] sm:text-[8px] md:text-[9px] font-space text-ivory-dim tracking-wider uppercase block">
                                  {metric.label}
                                </span>
                                <span className="font-syncopate text-sm sm:text-base md:text-lg font-bold text-champagne">
                                  {metric.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}

                        <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
                          {project.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              onMouseEnter={() => soundManager.playHover()}
                              className="px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl bg-surface border border-white/10 text-[9px] sm:text-xs font-mono text-ivory group-hover:border-champagne/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="pt-3 sm:pt-4 flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
                          <button
                            type="button"
                            onClick={() => handleOpenCaseStudy(project)}
                            onMouseEnter={() => soundManager.playHover()}
                            data-cursor="VIEW"
                            className="flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3.5 rounded-full bg-champagne text-black font-syncopate text-[10px] sm:text-xs font-bold tracking-wider hover:bg-champagne-light hover:shadow-gold-strong transition-all duration-300 hover:scale-[1.03] cursor-pointer shadow-gold-glow active:scale-95"
                          >
                            <span>VIEW CASE STUDY</span>
                            <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                          </button>

                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => soundManager.playClick()}
                              onMouseEnter={() => soundManager.playHover()}
                              data-cursor="GITHUB"
                              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3.5 rounded-full glass-panel border border-white/15 text-ivory font-syncopate text-[9px] sm:text-xs hover:border-champagne hover:text-champagne transition-all"
                            >
                              <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                              <span>CODE</span>
                            </a>
                          )}

                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => soundManager.playClick()}
                              onMouseEnter={() => soundManager.playHover()}
                              data-cursor="LIVE"
                              className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 md:py-3.5 rounded-full glass-panel border border-white/15 text-ivory font-syncopate text-[9px] sm:text-xs hover:border-emerald-400 hover:text-emerald-400 transition-all"
                            >
                              <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4" />
                              <span>LIVE DEMO</span>
                            </a>
                          )}
                        </div>
                      </div>

                      <div className="project-visual-panel lg:col-span-5 relative">
                        <div
                          onClick={() => handleOpenCaseStudy(project)}
                          onMouseEnter={() => soundManager.playHover()}
                          data-cursor="EXPLORE"
                          className={`relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden cursor-pointer group/visual transition-all duration-300 shadow-2xl hover:shadow-gold-glow border ${theme.borderColor}`}
                        >
                          <div className="absolute inset-0 w-full h-full">
                            <img
                              src={project.imageUrl || `/assets/projects/${project.id}.png`}
                              alt={`${project.title} project preview`}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover/visual:scale-110"
                              onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.style.display = 'none';
                                target.parentElement?.classList.add('bg-gradient-to-br', 'from-[#0a0a0f]', 'to-[#1a1d2b]');
                              }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
                          </div>

                          <div className="relative z-10 flex flex-col justify-between h-full p-4 sm:p-5 md:p-6">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-red-500/90" />
                                <div className="w-2 h-2 rounded-full bg-amber-500/90" />
                                <div className="w-2 h-2 rounded-full bg-emerald-500/90" />
                              </div>
                              <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] text-ivory-dim/80 tracking-widest uppercase bg-black/40 px-2 py-0.5 rounded-md backdrop-blur-sm">
                                SYSTEM_SPEC_{project.number}
                              </span>
                            </div>

                            <div className="flex flex-col items-center justify-center text-center space-y-2 sm:space-y-3">
                              <div>
                                <h4 className="font-syncopate text-lg sm:text-xl md:text-2xl font-bold text-white tracking-wider drop-shadow-lg">
                                  {project.title}
                                </h4>
                                <p className="font-mono text-[9px] sm:text-[10px] md:text-[11px] text-champagne/80 tracking-wider drop-shadow-lg mt-0.5">
                                  {project.focus.slice(0, 2).join(' • ')}
                                </p>
                              </div>
                              <div className="flex items-center gap-1.5 text-[9px] sm:text-[10px] md:text-[11px] font-mono text-champagne/90 drop-shadow-lg bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                                <span>CLICK TO VIEW SYSTEM ARCHITECTURE</span>
                                <span className="text-white/60">→</span>
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-[7px] sm:text-[8px] md:text-[9px] font-mono text-ivory-dim/80 border-t border-white/10 pt-2 sm:pt-3">
                              <span className="drop-shadow-lg">TIRUMALA BALAJI VIKRAM</span>
                              <span className="text-champagne/90 font-semibold drop-shadow-lg">JAVA FULL STACK</span>
                            </div>
                          </div>
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
};