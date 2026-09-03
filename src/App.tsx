import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Background3D } from './components/Background3D';
import { CustomCursor } from './components/CustomCursor';
import { Preloader } from './components/Preloader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Work } from './components/Work';
import { SkillsUniverse } from './components/SkillsUniverse';
import { Process } from './components/Process';
import { Connect } from './components/Connect';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Project } from './data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const tickerCb = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerCb);
      lenis.destroy();
    };
  }, []);

  const handleOpenConnect = () => {
    const el = document.getElementById('connect');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#050507] text-[#F5F5F7] overflow-x-hidden selection:bg-champagne/30 selection:text-champagne-light">
      <div className="film-grain" aria-hidden="true" />

      <Background3D interactive={true} />

      <CustomCursor />

      {loading && <Preloader onComplete={() => setLoading(false)} />}

      <Navbar onOpenConnect={handleOpenConnect} />

      <main className="relative z-10 w-full flex flex-col">
        <Hero />
        <About />
        <Work onSelectProject={(project) => setSelectedProject(project)} />
        <SkillsUniverse />
        <Process />
        <Connect />
      </main>

      <Footer />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}