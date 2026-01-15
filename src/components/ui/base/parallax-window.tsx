'use client';

import { useScrollPosition } from '@/hooks/useScrollPosition';
import * as React from 'react';

function ParallaxLayer({ children }: { children: React.ReactNode }) {
  const scrollY = useScrollPosition();

  return (
    <>
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) return child;

        const element = child as React.ReactElement<{
          style?: React.CSSProperties;
          'data-speed'?: string;
        }>;

        const speed = Number(element.props['data-speed'] ?? 1);
        const translateY = scrollY * (speed / 100);

        return React.cloneElement(element, {
          style: {
            ...(element.props.style ?? {}),
            transform: `translateY(${translateY}px)`,
          },
        });
      })}
    </>
  );
}

const PARALLAX_LAYERS = [
  {
    speed: '5',
    image: '/keyart/index-0.png',
    className:
      'fixed block h-[1000px] w-full bg-[#161A24] bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x',
  },
  {
    speed: '10',
    image: '/keyart/index-1.png',
    className:
      'absolute block h-[1000px] w-full bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x',
  },
  {
    speed: '15',
    image: '/keyart/index-2.png',
    className:
      'absolute block h-[1000px] w-full bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x',
  },
  {
    speed: '21',
    image: '/keyart/index-3.png',
    className:
      'absolute block h-[1000px] w-full bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x',
  },
  {
    speed: '31',
    image: '/keyart/index-4.png',
    className:
      'absolute block h-[1000px] w-full bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x',
  },
  {
    speed: '42',
    image: '/keyart/index-5.png',
    className:
      'absolute block h-[1000px] w-full bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x',
  },
];

function ParallaxWindow() {
  return (
    <div className='relative -z-10 block h-[900px]'>
      <ParallaxLayer>
        {PARALLAX_LAYERS.map((layer, index) => (
          <div
            key={index}
            data-speed={layer.speed}
            className={layer.className}
            style={{ backgroundImage: `url('${layer.image}')` }}
          />
        ))}
      </ParallaxLayer>
      <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-6.png')] bg-[length:auto_800px] bg-bottom bg-center bg-repeat-x" />
    </div>
  );
}

export { ParallaxWindow };
