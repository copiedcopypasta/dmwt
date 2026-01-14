'use client';

import { FeedbackCard } from '@/components/ui/base/feedback-card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  ThumbsdownSolid,
  ThumbsupSolid,
} from '@2hoch1/pixel-icon-library-react';
import Autoplay from 'embla-carousel-autoplay';
import { BadgeCheckIcon } from 'lucide-react';
import * as React from 'react';

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

const feedbackData = [
  {
    author: {
      name: 'Craemon',
      avatarUrl: '/Logo.png',
    },
    description:
      'TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet man heutzutage gar nicht mehr :D',
    badges: [verifiedBadge, negativeBadge],
  },
  {
    author: {
      name: 'MaxUser',
      avatarUrl: '/Logo.png',
    },
    description:
      'Excellent service and support! The team responds quickly to any questions or issues. The infrastructure is reliable and the performance is outstanding. Highly recommended for anyone looking for professional hosting solutions. I have been very impressed with the quality of service provided.',
    badges: [verifiedBadge, positiveBadge],
  },
  {
    author: {
      name: 'TechPro',
      avatarUrl: '/Logo.png',
    },
    description:
      'Very happy with the services. The technical team is knowledgeable and always ready to help. The system uptime is impressive and the customer support is beyond expectations. Great value for money. Would definitely recommend to other businesses.',
    badges: [positiveBadge],
  },
  {
    author: {
      name: 'DevExpert',
      avatarUrl: '/Logo.png',
    },
    description:
      'Outstanding performance and reliability. The infrastructure is top-notch and the support team is incredibly responsive. They solved all my issues quickly and professionally. This is exactly what I was looking for in a hosting provider.',
    badges: [verifiedBadge, positiveBadge],
  },
  {
    author: {
      name: 'CloudUser',
      avatarUrl: '/Logo.png',
    },
    description:
      'Best hosting experience I have had so far. Fast deployment, excellent documentation, and responsive support team. The pricing is competitive and the service quality is exceptional. I recommend this to all my colleagues.',
    badges: [positiveBadge],
  },
];

export default function FeedbackCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 6000, stopOnInteraction: true }),
  );

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
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
