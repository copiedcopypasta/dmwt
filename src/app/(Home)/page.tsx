'use client';

import * as React from 'react';
import { BadgeCheckIcon } from 'lucide-react';
import {
  ThumbsupSolid,
  ThumbsdownSolid,
} from '@2hoch1/pixel-icon-library-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { FeedbackCard } from '@/components/ui/base/feedback-card';

const layer_1 = (
  <div className="fixed -z-10 block h-[1000px] w-full bg-[#161A24] bg-[url('/keyart/index-0.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const layer_2 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-1.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const layer_3 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-2.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const layer_4 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-3.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const layer_5 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-4.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const layer_6 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-5.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const layer_7 = (
  <div className="absolute block h-[1000px] w-full bg-[url('/keyart/index-6.png')] bg-[length:auto_1038px] bg-bottom bg-center bg-repeat-x" />
);

const verifiedBadge = {
  label: (
    <div className='flex items-center gap-1'>
      <BadgeCheckIcon className='size-3' />
      Verified
    </div>
  ),
  variant: 'secondary' as const,
  className: 'bg-blue-500 text-white dark:bg-blue-600',
};

const positiveBadge = {
  label: (
    <div className='flex items-center gap-1'>
      <ThumbsupSolid className='size-3' />
      Positive
    </div>
  ),
  variant: 'secondary' as const,
  className: 'bg-green-500 text-white dark:bg-green-600',
};

const negativeBadge = {
  label: (
    <div className='flex items-center gap-1'>
      <ThumbsdownSolid className='size-3' />
      Negative
    </div>
  ),
  variant: 'secondary' as const,
  className: 'bg-red-500 text-white dark:bg-red-600',
};

function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  );

  const feedbackData = [
    {
      author: {
        name: 'Craemon',
        avatarUrl: '/favicon/icon.png',
      },
      description:
        'TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet man heutzutage gar nicht mehr :D',
      badges: [verifiedBadge, negativeBadge],
    },
    {
      author: {
        name: 'Craemon',
        avatarUrl: '/favicon/icon.png',
      },
      description:
        'TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet man heutzutage gar nicht mehr :D',
      badges: [positiveBadge],
    },
    {
      author: {
        name: 'Craemon',
        avatarUrl: '/favicon/icon.png',
      },
      wand: '/wand.png',
      description:
        'TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet',
      badges: [negativeBadge],
    },
    {
      author: {
        name: 'MaxUser',
        avatarUrl: '/favicon/icon.png',
      },
      description:
        'Excellent service and support! The team responds quickly to any questions or issues. The infrastructure is reliable and the performance is outstanding. Highly recommended for anyone looking for professional hosting solutions. I have been very impressed with the quality of service provided.',
      badges: [verifiedBadge, positiveBadge],
    },
    {
      author: {
        name: 'TechPro',
        avatarUrl: '/favicon/icon.png',
      },
      description:
        'Very happy with the services. The technical team is knowledgeable and always ready to help. The system uptime is impressive and the customer support is beyond expectations. Great value for money. Would definitely recommend to other businesses.',
      badges: [positiveBadge],
    },
    {
      author: {
        name: 'DevExpert',
        avatarUrl: '/favicon/icon.png',
      },
      description:
        'Outstanding performance and reliability. The infrastructure is top-notch and the support team is incredibly responsive. They solved all my issues quickly and professionally. This is exactly what I was looking for in a hosting provider.',
      badges: [verifiedBadge, positiveBadge],
    },
    {
      author: {
        name: 'CloudUser',
        avatarUrl: '/favicon/icon.png',
      },
      wand: '/wand.png',
      description:
        'Best hosting experience I have had so far. Fast deployment, excellent documentation, and responsive support team. The pricing is competitive and the service quality is exceptional. I recommend this to all my colleagues.',
      badges: [positiveBadge],
    },
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      opts={{ loop: true }}
      className='w-full max-w-6xl'
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {feedbackData.map((feedback, index) => (
          <CarouselItem key={index} className='md:basis-1/3'>
            <FeedbackCard
              author={feedback.author}
              description={feedback.description}
              badges={feedback.badges}
              {...(feedback.wand && { wand: feedback.wand })}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default function Page() {
  return (
    <>
      <div className='block'>
        <div className='relative block h-[1000px]'>
          {/* Keyart Section */}
          {layer_1}
          {layer_2}
          {layer_3}
          {layer_4}
          {layer_5}
          {layer_6}
          {layer_7}
        </div>
        <div className='relative z-20 grid grid-cols-1 place-items-center gap-8 bg-black p-8'>
          <CarouselPlugin />
          <div className='text-muted-foreground mx-auto max-w-4xl text-lg leading-7'>
            <p>
              Willkommen auf der offiziellen Website von DM-WT – Ihrem digitalen
              Begleiter für das Wizard of OS Projekt! Hier finden Sie alle
              Informationen, Neuigkeiten und Ressourcen rund um das spannende
              Vorhaben, die Zukunft der Betriebssysteme zu gestalten.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
