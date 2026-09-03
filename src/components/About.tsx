import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Terminal, Code2, Database, BrainCircuit, GraduationCap, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/portfolioData';
import { soundManager } from '../utils/audio';
import { TiltCard } from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

export const About: React.FC = () => {
  const introSectionRef = useRef<HTMLElement>(null);
  const introPinRef = useRef<HTMLDivElement>(null);
  const textNotJustRef = useRef<HTMLDivElement>(null);
  const textAnotherRef = useRef<HTMLDivElement>(null);
  const textDevRef = useRef<HTMLDivElement>(null);
  const revealStatementRef = useRef<HTMLDivElement>(null);
  const perspectiveBadgeRef = useRef<HTMLDivElement>(null);

  const pillarsRef = useRef<HTMLDivElement>(null);
  const credentialsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!introSectionRef.current || !introPinRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: introSectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.8,
          pin: introPinRef.current,
          anticipatePin: 1,
        },
      });

<<<<<<< HEAD
=======
      // Initial state
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      gsap.set(textNotJustRef.current, { y: 0, opacity: 1, scale: 1 });
      gsap.set(textAnotherRef.current, { y: 0, opacity: 1, scale: 1 });
      gsap.set(textDevRef.current, { y: 0, opacity: 1, scale: 1 });
      gsap.set(revealStatementRef.current, { opacity: 0, scale: 0.88, y: 60 });

<<<<<<< HEAD
=======
      // Transform out "NOT JUST ANOTHER DEVELOPER" smoothly (without heavy raster blur filters)
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      tl.to(textNotJustRef.current, { y: -120, opacity: 0, scale: 0.9, ease: 'power2.inOut' }, 0.05);
      tl.to(textAnotherRef.current, { scale: 1.6, opacity: 0, ease: 'power2.inOut' }, 0.12);
      tl.to(textDevRef.current, { scale: 1.3, y: -40, opacity: 0, ease: 'power2.inOut' }, 0.2);

<<<<<<< HEAD
=======
      // Reveal statement
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      tl.fromTo(
        revealStatementRef.current,
        { opacity: 0, scale: 0.88, y: 70 },
        { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: 'power3.out' },
        0.32
      );
      tl.to(revealStatementRef.current, { scale: 1.03, duration: 0.2 }, 0.55);
      tl.to(
        revealStatementRef.current,
        { y: -70, opacity: 0, scale: 0.94, duration: 0.25, ease: 'power2.in' },
        0.75
      );

<<<<<<< HEAD
=======
      // Fade-in animations for pillars and credentials
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      if (pillarsRef.current) {
        gsap.fromTo(
          pillarsRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: pillarsRef.current,
              start: 'top 80%',
            },
          }
        );
      }

      if (credentialsRef.current) {
        gsap.fromTo(
          credentialsRef.current,
          { opacity: 0, y: 45, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: credentialsRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    }, introSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id="intro" className="relative w-full bg-background-deep text-ivory">
<<<<<<< HEAD
=======
      {/* 1. Cinematic Pinned Typography Sequence */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      <section ref={introSectionRef} className="relative w-full h-[180vh] select-none">
        <div
          ref={introPinRef}
          className="relative w-full h-screen overflow-hidden flex items-center justify-center technical-grid"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-champagne/10 via-background-deep/90 to-background-deep pointer-events-none" />

<<<<<<< HEAD
=======
          {/* Three Giant Words */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
          <div className="relative z-20 flex flex-col items-center justify-center text-center px-4 max-w-6xl mx-auto space-y-2 md:space-y-4">
            <div
              ref={perspectiveBadgeRef}
              className="flex items-center gap-2 px-4 py-1 rounded-full glass-panel border border-white/10 mb-4"
            >
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="font-space text-[10px] tracking-epic text-ivory-muted uppercase">
                THE PERSPECTIVE
              </span>
            </div>
            <div
              ref={textNotJustRef}
              className="font-syncopate text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-white uppercase will-change-transform"
            >
              NOT JUST
            </div>
            <div
              ref={textAnotherRef}
              className="font-syncopate text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-zinc-500 uppercase will-change-transform"
            >
              ANOTHER
            </div>
            <div
              ref={textDevRef}
              className="font-syncopate text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gradient-gold uppercase will-change-transform"
            >
              DEVELOPER.
            </div>
          </div>

<<<<<<< HEAD
=======
          {/* Revealed Statement */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
          <div
            ref={revealStatementRef}
            className="absolute z-30 max-w-4xl px-6 md:px-12 text-center space-y-6 pointer-events-none"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel-gold border border-champagne/30 text-champagne text-xs font-mono tracking-widest uppercase shadow-gold-glow">
              <Terminal className="w-3.5 h-3.5" />
<<<<<<< HEAD
              <span>FULL STACK JAVA • SPRING BOOT</span>
            </div>
            <h2 className="font-syncopate text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              I BUILD <span className="text-gradient-gold">SCALABLE,</span>
              <br />
              <span className="text-ivory">SECURE &</span>
              <br />
              <span className="text-gradient-gold">ENTERPRISE SYSTEMS.</span>
            </h2>
            <p className="font-space text-xs sm:text-sm md:text-base text-ivory-dim max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
              Transforming complex business logic into intuitive, ultra-responsive web architectures with Java, Spring Boot, and React.
=======
              <span>FULL STACK • AI/ML ARCHITECT</span>
            </div>
            <h2 className="font-syncopate text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
              I BUILD <span className="text-gradient-gold">SYSTEMS,</span>
              <br />
              <span className="text-ivory">EXPERIENCES &</span>
              <br />
              <span className="text-gradient-gold">INTELLIGENT PRODUCTS.</span>
            </h2>
            <p className="font-space text-xs sm:text-sm md:text-base text-ivory-dim max-w-2xl mx-auto leading-relaxed uppercase tracking-wider">
              Transforming complex business logic and machine learning models into intuitive,
              ultra-responsive web architectures.
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
            </p>
          </div>
        </div>
      </section>

<<<<<<< HEAD
      <section id="about" className="relative w-full py-24 md:py-36 border-t border-white/5 technical-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10">
=======
      {/* 2. Engineering Architecture Pillars & Academic Credentials */}
      <section id="about" className="relative w-full py-24 md:py-36 border-t border-white/5 technical-grid">
        <div className="max-w-7xl mx-auto px-6 md:px-12 space-y-20 relative z-10">
          {/* Section Header */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
          <div className="space-y-4 max-w-3xl">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border border-white/10 w-fit">
              <Sparkles className="w-3.5 h-3.5 text-champagne" />
              <span className="font-space text-[10px] tracking-epic text-ivory uppercase font-semibold">
                SYSTEMS CRAFT • PHILOSOPHY
              </span>
            </div>
            <h2 className="font-syncopate text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-none uppercase">
              ARCHITECTURAL <br />
              <span className="text-gradient-gold">FOUNDATION.</span>
            </h2>
            <p className="font-space text-sm sm:text-base text-ivory-muted leading-relaxed pt-2">
<<<<<<< HEAD
              Every production system I design is anchored in deterministic object structures, resilient database schemas, and secure authentication.
            </p>
          </div>

          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
=======
              Every production system I design is anchored in deterministic object structures,
              resilient database schemas, and intentional artificial intelligence.
            </p>
          </div>

          {/* 3 Core Pillars with 3D Tilt Animations */}
          <div ref={pillarsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Pillar 01 */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
            <TiltCard maxTilt={12} scale={1.03} className="h-full">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full relative overflow-hidden group shadow-xl"
              >
                <div className="absolute -right-6 -top-6 font-syncopate text-7xl font-bold text-white/[0.03] select-none group-hover:text-champagne/10 transition-colors pointer-events-none">
                  01
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-white/15 flex items-center justify-center text-champagne group-hover:scale-110 group-hover:border-champagne transition-all shadow-gold-glow">
                    <Code2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-champagne tracking-widest uppercase">
                      FOUNDATION • 01
                    </span>
                    <h3 className="font-syncopate text-xl font-bold text-white tracking-wide leading-snug">
                      OBJECT ORIENTED <br />
                      <span className="text-gradient-gold">ARCHITECTURE</span>
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-ivory-dim leading-relaxed font-space">
<<<<<<< HEAD
                    Designing strict class abstractions, decoupled module boundaries, and reusable design patterns that maintain clarity under high product complexity.
=======
                    Designing strict class abstractions, decoupled module boundaries, and reusable
                    design patterns that maintain clarity under high product complexity.
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-[10px] font-mono text-ivory-muted">
                  <span className="px-2 py-0.5 rounded bg-white/5">SOLID Principles</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Clean OOP</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Modular Design</span>
                </div>
              </div>
            </TiltCard>

<<<<<<< HEAD
=======
            {/* Pillar 02 */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
            <TiltCard maxTilt={12} scale={1.03} className="h-full">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full relative overflow-hidden group shadow-xl"
              >
                <div className="absolute -right-6 -top-6 font-syncopate text-7xl font-bold text-white/[0.03] select-none group-hover:text-champagne/10 transition-colors pointer-events-none">
                  02
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-white/15 flex items-center justify-center text-champagne group-hover:scale-110 group-hover:border-champagne transition-all shadow-gold-glow">
                    <Database className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-champagne tracking-widest uppercase">
                      EFFICIENCY • 02
                    </span>
                    <h3 className="font-syncopate text-xl font-bold text-white tracking-wide leading-snug">
                      OPTIMIZED <br />
                      <span className="text-gradient-gold">DATA FLOW</span>
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-ivory-dim leading-relaxed font-space">
<<<<<<< HEAD
                    Normalizing relational database schemas, streamlining REST API contracts, and minimizing transport latency across both frontend and backend state layers.
=======
                    Normalizing relational database schemas, streamlining REST API contracts, and
                    minimizing transport latency across both frontend and backend state layers.
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-[10px] font-mono text-ivory-muted">
                  <span className="px-2 py-0.5 rounded bg-white/5">Relational DB</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">REST Gateway</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Low-Latency Flow</span>
                </div>
              </div>
            </TiltCard>

<<<<<<< HEAD
=======
            {/* Pillar 03 */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
            <TiltCard maxTilt={12} scale={1.03} className="h-full">
              <div
                onMouseEnter={() => soundManager.playHover()}
                className="glass-panel glass-panel-hover p-8 rounded-3xl border border-white/10 flex flex-col justify-between h-full relative overflow-hidden group shadow-xl"
              >
                <div className="absolute -right-6 -top-6 font-syncopate text-7xl font-bold text-white/[0.03] select-none group-hover:text-champagne/10 transition-colors pointer-events-none">
                  03
                </div>
                <div className="space-y-6 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-surface border border-white/15 flex items-center justify-center text-champagne group-hover:scale-110 group-hover:border-champagne transition-all shadow-gold-glow">
                    <BrainCircuit className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-champagne tracking-widest uppercase">
<<<<<<< HEAD
                      SECURITY • 03
                    </span>
                    <h3 className="font-syncopate text-xl font-bold text-white tracking-wide leading-snug">
                      SECURE <br />
                      <span className="text-gradient-gold">AUTHENTICATION</span>
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-ivory-dim leading-relaxed font-space">
                    Implementing JWT-based stateless authentication, role-based access control, BCrypt encryption, and protection against common web vulnerabilities.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-[10px] font-mono text-ivory-muted">
                  <span className="px-2 py-0.5 rounded bg-white/5">JWT Auth</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">RBAC</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">BCrypt</span>
=======
                      INTELLIGENCE • 03
                    </span>
                    <h3 className="font-syncopate text-xl font-bold text-white tracking-wide leading-snug">
                      INTELLIGENT <br />
                      <span className="text-gradient-gold">INTEGRATION</span>
                    </h3>
                  </div>
                  <p className="text-xs md:text-sm text-ivory-dim leading-relaxed font-space">
                    Integrating Gemini-based reasoning and PyTorch/CRNN sequence pipelines only where
                    heuristics fail and machine intelligence provides measurable exponential value.
                  </p>
                </div>
                <div className="pt-6 border-t border-white/5 flex flex-wrap gap-2 text-[10px] font-mono text-ivory-muted">
                  <span className="px-2 py-0.5 rounded bg-white/5">Gemini AI</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">PyTorch / CRNN</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Vector Embeddings</span>
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                </div>
              </div>
            </TiltCard>
          </div>

<<<<<<< HEAD
=======
          {/* Academic Credentials Card with 3D Tilt */}
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
          <div ref={credentialsRef} className="w-full">
            <TiltCard maxTilt={8} scale={1.01} className="w-full">
              <div className="glass-panel p-8 md:p-12 rounded-3xl border border-champagne/30 bg-gradient-to-br from-surface via-background-surface to-surface-subtle shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-80 h-80 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-champagne font-mono text-xs uppercase tracking-widest">
                      <GraduationCap className="w-4 h-4" />
                      <span>ACADEMIC CREDENTIALS • COMPUTER SCIENCE</span>
                    </div>
                    <h3 className="font-syncopate text-2xl md:text-3xl font-bold text-white tracking-tight">
<<<<<<< HEAD
                      B.TECH ELECTRONICS & COMMUNICATION <br />
                      <span className="text-gradient-gold">FULL STACK JAVA SPECIALIZATION</span>
=======
                      B.E. COMPUTER SCIENCE & ENGINEERING <br />
                      <span className="text-gradient-gold">AI/ML SPECIALIZATION</span>
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                    </h3>
                    <div className="flex items-center gap-2 text-sm md:text-base text-ivory font-space font-medium">
                      <span className="text-champagne font-bold">•</span>
                      <span>{profile.education.institution}</span>
                    </div>
                    <p className="text-xs md:text-sm text-ivory-dim leading-relaxed font-space pt-2">
<<<<<<< HEAD
                      Combining rigorous theoretical computer science fundamentals with hands-on full-stack development, data structures, algorithms, and enterprise Java application development.
=======
                      Combining rigorous theoretical computer science fundamentals — data structures,
                      relational theory, and algorithms — with cutting-edge artificial intelligence,
                      neural architectures, and full-stack software production.
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                    </p>
                  </div>

                  <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div
                      onMouseEnter={() => soundManager.playHover()}
                      className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 hover:border-champagne/40 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-champagne text-xs font-mono font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
<<<<<<< HEAD
                        <span>JAVA CORE</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
                        Spring Boot, Hibernate, JWT, REST APIs
=======
                        <span>AI / ML CORE</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
                        PyTorch, CRNN, Gemini, Vector Search
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                      </p>
                    </div>

                    <div
                      onMouseEnter={() => soundManager.playHover()}
                      className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 hover:border-champagne/40 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-champagne text-xs font-mono font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>FULL STACK</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
<<<<<<< HEAD
                        React, JS/TS, Tailwind, REST APIs
=======
                        React, Modern JS/TS, Tailwind, REST APIs
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                      </p>
                    </div>

                    <div
                      onMouseEnter={() => soundManager.playHover()}
                      className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 hover:border-champagne/40 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-champagne text-xs font-mono font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
<<<<<<< HEAD
                        <span>DATABASE</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
                        MySQL, SQL Optimization, Relational Design
=======
                        <span>BACKEND ARCH</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
                        Python, FastAPI, Relational Databases, ACID
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                      </p>
                    </div>

                    <div
                      onMouseEnter={() => soundManager.playHover()}
                      className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-1 hover:border-champagne/40 transition-colors"
                    >
                      <div className="flex items-center gap-1.5 text-champagne text-xs font-mono font-bold">
                        <CheckCircle2 className="w-3.5 h-3.5" />
<<<<<<< HEAD
                        <span>DEV TOOLS</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
                        Git, Maven, JUnit, Selenium, Postman
=======
                        <span>DEV INTEGRITY</span>
                      </div>
                      <p className="text-[11px] text-ivory-dim font-space">
                        Git, Clean Code, Performance Profiling
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
