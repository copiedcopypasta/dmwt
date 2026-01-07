'use client';

import CherryBlossomOne from '@/assets/cursor/cherry_blossom_1.png';
import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    let sparkleCounter = 0;
    let moveCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Sparkle mit Verzögerung hinzufügen
      if (moveCounter % 3 === 0) {
        setTimeout(() => {
          const newSparkle: Sparkle = {
            id: sparkleCounter++,
            x: e.clientX + (Math.random() - 0.5) * 25,
            y: e.clientY + (Math.random() - 0.5) * 25,
          };

          setSparkles((prev) => [...prev, newSparkle]);

          // Sparkle nach 600ms entfernen
          setTimeout(() => {
            setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id));
          }, 600);
        }, 50);
      }

      moveCounter++;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className='pointer-events-none fixed z-[9998] animate-ping opacity-70'
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: '3px',
            height: '3px',
            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
            clipPath:
              'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
        />
      ))}
      <img
        src={CherryBlossomOne.src}
        alt='cursor'
        className={`pointer-events-none fixed z-[9999] h-6 w-6 -translate-x-1/2 -translate-y-1/2 drop-shadow-lg transition-transform duration-150 ${
          isMoving ? 'scale-125 rotate-12' : 'scale-100 rotate-0'
        }`}
        style={{
          left: position.x,
          top: position.y,
        }}
      />
    </>
  );
}
