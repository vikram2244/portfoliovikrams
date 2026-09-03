import React, { useRef, MouseEvent, ReactNode } from 'react';
import { soundManager } from '../utils/audio';

interface TiltCardProps {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
  glare?: boolean;
  scale?: number;
  playSound?: boolean;
  onClick?: () => void;
  id?: string;
  dataCursor?: string;
}

<<<<<<< HEAD
=======
/**
 * Ultra-performant 3D Tilt Card using Direct DOM manipulation & hardware-accelerated transforms
 * Zero React state updates on mousemove ensures butter-smooth 120 FPS without component re-renders
 */
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 10,
  glare = true,
  scale = 1.02,
  playSound = true,
  onClick,
  id,
  dataCursor,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const glareRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  const handleMouseEnter = () => {
    if (playSound) {
      soundManager.playCardHover();
    }
    const card = cardRef.current;
    if (card) {
<<<<<<< HEAD
=======
      // Remove any lingering transition while moving mouse for instant responsive tracking
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      card.style.transition = 'transform 0.08s ease-out';
    }
    if (glareRef.current && glare) {
      glareRef.current.style.opacity = '1';
    }
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
    }

    rafId.current = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

<<<<<<< HEAD
=======
      // Calculate tilt angles
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      const tiltX = ((y - centerY) / centerY) * -maxTilt;
      const tiltY = ((x - centerX) / centerX) * maxTilt;

      card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`;

      if (glareRef.current && glare) {
        const glareX = ((x / rect.width) * 100).toFixed(1);
        const glareY = ((y / rect.height) * 100).toFixed(1);
        glareRef.current.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(229, 195, 120, 0.22), transparent 60%)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }

    const card = cardRef.current;
    if (card) {
<<<<<<< HEAD
=======
      // Smoothly return to flat resting position with easing
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
      card.style.transition = 'transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)';
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    }

    if (glareRef.current && glare) {
      glareRef.current.style.opacity = '0';
    }
  };

  return (
    <div
      ref={cardRef}
      id={id}
      data-cursor={dataCursor}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative transform-gpu will-change-transform ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-300 z-30 overflow-hidden"
          aria-hidden="true"
        />
      )}
    </div>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> 1e0d9bd928e0b0defb39f8de8b0330cd614822be
