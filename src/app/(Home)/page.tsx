'use client';

import Image from 'next/image';
import * as React from 'react';
import FeedbackCarousel from '@/components/ui/base/feedback-carousel';
import ParallaxWindow from '@/components/ui/base/parallax-window';

export default function Page() {
  return (
    <>
      <div className='block overflow-hidden'>
        <ParallaxWindow />
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
