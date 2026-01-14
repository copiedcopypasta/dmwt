'use client';

import Image from 'next/image';
import * as React from 'react';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import FeedbackCarousel from '@/components/ui/base/feedback-carousel';

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

const layer_1 = (
  <div
    data-speed='5'
    className="fixed block h-[1000px] w-full bg-[#161A24] bg-[url('/keyart/index-0.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x"
  />
);

const layer_2 = (
  <div
    data-speed='10'
    className="absolute block h-[1000px] w-full bg-[url('/keyart/index-1.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x"
  />
);

const layer_3 = (
  <div
    data-speed='15'
    className="absolute block h-[1000px] w-full bg-[url('/keyart/index-2.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x"
  />
);

const layer_4 = (
  <div
    data-speed='21'
    className="absolute block h-[1000px] w-full bg-[url('/keyart/index-3.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x"
  />
);

const layer_5 = (
  <div
    data-speed='31'
    className="absolute block h-[1000px] w-full bg-[url('/keyart/index-4.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x"
  />
);

const layer_6 = (
  <div
    data-speed='42'
    className="absolute block h-[1000px] w-full bg-[url('/keyart/index-5.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x"
  />
);

const layer_7 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-6.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

export default function Page() {
  return (
    <>
      <div className='block overflow-hidden'>
        <div className='relative -z-10 block h-[1000px]'>
          {/* Keyart Section */}
          <ParallaxLayer>
            {layer_1} {layer_2} {layer_3} {layer_4} {layer_5} {layer_6}
          </ParallaxLayer>
          {layer_7}
        </div>
        <div className='relative z-20 grid grid-cols-1 place-items-center gap-8 bg-black p-8'>
          <div className='h-100'>
            <h1 className='text-center text-4xl font-bold text-white md:text-5xl lg:text-6xl'>
              <Image
                src='/Banner.png'
                alt='DM-WT Logo'
                width={700}
                height={100}
                className='mx-auto'
              />
            </h1>
            <h2 className='text-muted-foreground text-center text-xl'>
              Sehr ausgefaller Text steht hier. Genau hier. Wirklich.
            </h2>
          </div>
          <FeedbackCarousel />
          <div className='text-muted-foreground mx-auto max-w-4xl text-lg leading-7'>
            <p>
              Willkommen auf der offiziellen Website von DM-WT – Ihrem digitalen
              Begleiter für das Wizard of OS Projekt! Hier finden Sie alle
              Informationen, Neuigkeiten und Ressourcen rund um das spannende
              Vorhaben, die Zukunft der Betriebssysteme zu gestalten.
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
