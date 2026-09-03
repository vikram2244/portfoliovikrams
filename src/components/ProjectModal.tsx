import React, { useEffect, useState, useRef } from 'react';
import { X, ExternalLink, Cpu, Layers, GitBranch, Sparkles, CheckCircle, Activity, Github } from 'lucide-react';
import { Project } from '../data/portfolioData';
import { soundManager } from '../utils/audio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'architecture' | 'flow' | 'ai' | 'tech'>('architecture');
  const modalContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        soundManager.playClick();
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      soundManager.playModalOpen();
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleTabSelect = (tabId: 'architecture' | 'flow' | 'ai' | 'tech') => {
    soundManager.playTabSwitch();
    setActiveTab(tabId);
    if (modalContentRef.current) {
      modalContentRef.current.scrollTop = 0;
    }
  };

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 md:p-6 lg:p-10 bg-black/85 backdrop-blur-2xl overflow-y-auto select-none"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          soundManager.playClick();
          onClose();
        }
      }}
    >
      <div className="relative w-full max-w-4xl rounded-2xl sm:rounded-3xl border border-champagne/30 bg-[#0a0a0f] shadow-2xl overflow-hidden my-auto max-h-[90vh] flex flex-col">
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-champagne/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex-1 overflow-y-auto custom-scrollbar p-4 sm:p-6 md:p-8 lg:p-10" ref={modalContentRef}>
          <div className="space-y-4 sm:space-y-5 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between border-b border-white/10 pb-4 sm:pb-6 gap-3 sm:gap-0">
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-[10px] sm:text-xs text-champagne bg-champagne/15 px-2 sm:px-2.5 py-0.5 rounded-full border border-champagne/30 font-bold">
                    SYSTEM // {project.number}
                  </span>
                  <span className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase tracking-widest">
                    ARCHITECTURAL SPECIFICATION
                  </span>
                </div>
                <h2 className="font-syncopate text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight">
                  {project.title}
                </h2>
                <p className="font-syne text-xs sm:text-sm text-champagne-light">
                  {project.tagline}
                </p>
              </div>

              <button
                type="button"
                onClick={() => {
                  soundManager.playClick();
                  onClose();
                }}
                onMouseEnter={() => soundManager.playHover()}
                data-cursor="CLOSE"
                aria-label="Close Project Modal"
                className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel border border-white/10 text-ivory-dim hover:text-champagne hover:border-champagne/40 transition-colors cursor-pointer shrink-0 self-start sm:self-center"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

            {project.metrics && (
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => soundManager.playHover()}
                    className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/5 space-y-0.5 sm:space-y-1 hover:border-champagne/30 transition-colors"
                  >
                    <div className="font-mono text-[8px] sm:text-[10px] text-ivory-dim uppercase">{m.label}</div>
                    <div className="font-syncopate text-lg sm:text-xl md:text-2xl font-bold text-gradient-gold">
                      {m.value}
                    </div>
                    <div className="font-mono text-[7px] sm:text-[9px] text-ivory-muted">{m.desc}</div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-1.5 sm:gap-2 border-b border-white/10 pb-2 sm:pb-3">
              {[
                { id: 'architecture', label: 'System Overview', icon: Layers },
                { id: 'flow', label: 'Data Flow Pipeline', icon: GitBranch },
                { id: 'ai', label: 'Security & Auth', icon: Cpu },
                { id: 'tech', label: 'Tech Stack & Modules', icon: Activity },
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabSelect(tab.id as any)}
                    onMouseEnter={() => soundManager.playHover()}
                    className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-mono tracking-wider transition-all cursor-pointer ${
                      isActive
                        ? 'bg-champagne text-black font-bold shadow-gold-glow'
                        : 'glass-panel text-ivory-dim hover:text-ivory'
                    }`}
                  >
                    <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden xs:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="space-y-4 sm:space-y-5 md:space-y-6 min-h-[180px] sm:min-h-[200px] md:min-h-[220px]">
              {activeTab === 'architecture' && (
                <div className="space-y-3 sm:space-y-4 animate-fade-in">
                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 sm:space-y-2">
                    <span className="font-mono text-[8px] sm:text-[10px] text-champagne uppercase font-bold tracking-wider">
                      OPERATIONAL PROBLEM SOLVED
                    </span>
                    <p className="font-space text-xs sm:text-sm text-ivory-dim leading-relaxed">
                      {project.architectureDetails.problemSolved}
                    </p>
                  </div>

                  <div className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 space-y-1.5 sm:space-y-2">
                    <span className="font-mono text-[8px] sm:text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
                      SYSTEM ARCHITECTURE OVERVIEW
                    </span>
                    <p className="font-space text-xs sm:text-sm text-ivory-dim leading-relaxed">
                      {project.architectureDetails.systemOverview}
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'flow' && (
                <div className="space-y-2 sm:space-y-3 animate-fade-in">
                  <span className="font-mono text-[8px] sm:text-[10px] text-champagne uppercase font-bold tracking-wider block">
                    END-TO-END DATA FLOW PIPELINE
                  </span>
                  <div className="space-y-2 sm:space-y-2.5">
                    {project.architectureDetails.dataFlow.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2 sm:gap-3 p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5"
                      >
                        <span className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-surface border border-champagne/30 text-champagne font-mono text-[10px] sm:text-xs flex items-center justify-center font-bold shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="font-space text-xs sm:text-sm text-ivory-dim leading-relaxed">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'ai' && (
                <div className="space-y-2 sm:space-y-3 animate-fade-in">
                  <span className="font-mono text-[8px] sm:text-[10px] text-champagne uppercase font-bold tracking-wider block">
                    SECURITY & AUTHENTICATION
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {project.architectureDetails.aiComponents.map((comp, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-2 sm:gap-2.5"
                      >
                        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-champagne shrink-0 mt-0.5" />
                        <span className="font-space text-xs sm:text-sm text-ivory-dim">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'tech' && (
                <div className="space-y-3 sm:space-y-4 animate-fade-in">
                  <span className="font-mono text-[8px] sm:text-[10px] text-champagne uppercase font-bold tracking-wider block">
                    TECHNOLOGIES DEPLOYED & MODULE ROLES
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {project.technologies.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 sm:p-3.5 rounded-lg sm:rounded-xl bg-surface border border-white/10 flex flex-wrap items-center justify-between gap-1"
                      >
                        <span className="font-mono text-xs sm:text-sm text-white font-bold">{tech}</span>
                        <span className="text-[8px] sm:text-[10px] font-mono text-champagne uppercase">
                          PRODUCTION STACK
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 pt-3 sm:pt-4 border-t border-white/10">
              <div className="font-mono text-[8px] sm:text-[10px] text-ivory-dim">
                PROJECT REF: <span className="text-white">{project.id.toUpperCase()}</span>
              </div>

              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundManager.playClick()}
                    onMouseEnter={() => soundManager.playHover()}
                    data-cursor="GITHUB"
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-white/10 hover:bg-white/20 text-white font-mono text-[10px] sm:text-xs transition-colors"
                  >
                    <Github className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden xs:inline">REPOSITORY</span>
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
                    className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 font-mono text-[10px] sm:text-xs transition-colors"
                  >
                    <ExternalLink className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    <span className="hidden xs:inline">LIVE DEMO</span>
                  </a>
                )}

                <button
                  type="button"
                  onClick={() => {
                    soundManager.playClick();
                    onClose();
                  }}
                  onMouseEnter={() => soundManager.playHover()}
                  className="px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-champagne text-black font-syncopate text-[10px] sm:text-xs font-bold tracking-wider hover:bg-champagne-light transition-all shadow-gold-glow cursor-pointer active:scale-95"
                >
                  CLOSE SPEC
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};