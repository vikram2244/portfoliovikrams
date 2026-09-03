import React, { useEffect, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }

      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        const text = cursorTarget.getAttribute('data-cursor') || '';
        if (label) {
          label.textContent = text;
          label.style.display = text ? 'block' : 'none';
        }
        ring.className =
          'fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center transition-[width,height,border-color,background-color] duration-200 ease-out border w-16 h-16 rounded-full bg-champagne/15 border-champagne/70 backdrop-blur-[2px] shadow-gold-glow';
      } else if (target.closest('button, a, input, textarea, [role="button"]')) {
        if (label) {
          label.textContent = '';
          label.style.display = 'none';
        }
        ring.className =
          'fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center transition-[width,height,border-color,background-color] duration-200 ease-out border w-10 h-10 rounded-full bg-champagne/10 border-champagne/50 shadow-gold-glow';
      } else {
        if (label) {
          label.textContent = '';
          label.style.display = 'none';
        }
        ring.className =
          'fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center transition-[width,height,border-color,background-color] duration-200 ease-out border w-7 h-7 rounded-full bg-transparent border-white/25';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      dot.style.opacity = '0';
      ring.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const updateLoop = () => {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      ring.style.transform = `translate3d(${ringX.toFixed(2)}px, ${ringY.toFixed(2)}px, 0) translate(-50%, -50%)`;
      animId = requestAnimationFrame(updateLoop);
    };

    animId = requestAnimationFrame(updateLoop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 pointer-events-none z-[99999] w-1.5 h-1.5 rounded-full bg-champagne mix-blend-difference opacity-0 transition-opacity duration-300"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      />

      <div
        ref={ringRef}
        className="fixed top-0 left-0 pointer-events-none z-[99998] flex items-center justify-center border w-7 h-7 rounded-full bg-transparent border-white/25 opacity-0 transition-opacity duration-300"
        style={{ transform: 'translate3d(-100px, -100px, 0)' }}
      >
        <span
          ref={labelRef}
          className="font-mono text-[9px] font-bold text-champagne tracking-wider uppercase select-none hidden"
        />
      </div>
    </>
  );
};