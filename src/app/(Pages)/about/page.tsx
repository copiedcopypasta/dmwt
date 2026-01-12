'use client';
import { BadgeCheckIcon } from 'lucide-react';
import {
  ThumbsupSolid,
  ThumbsdownSolid,
} from '@2hoch1/pixel-icon-library-react';
import { FeedbackCard } from '@/components/ui/base/feedback-card';

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

export default function Page() {
  return (
    <>
      <FeedbackCard
        author={{
          name: 'Craemon',
          avatarUrl: '/favicon/icon.png',
        }}
        description='TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet man heutzutage gar nicht mehr :D'
        badges={[verifiedBadge, negativeBadge]}
      />
      <FeedbackCard
        author={{
          name: 'Craemon',
          avatarUrl: '/favicon/icon.png',
        }}
        description='TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet man heutzutage gar nicht mehr :D'
        badges={[positiveBadge]}
      />
      <FeedbackCard
        author={{
          name: 'Craemon',
          avatarUrl: '/favicon/icon.png',
        }}
        wand='/wand.png'
        description='TIch bin seit Ende 2023 Kunde bei Nexo und nutze hauptsächlich KVM-Server. Schon damals mit den Xeon KVMs war ich sehr zufrieden – mittlerweile bin ich auf nen Ryzen KVM (R7 7950X3D) umgestiegen und der läuft sogar noch besser als mein Kühlschrank haha Nexo setzt bei der Hardware nur auf Top-Niveau (finde ich zumindest), insbesondere bei den CPUs. Seit Kurzem nutze ich auch einen größeren Webspace und kann auch dort nur Positives berichten – stabil, schnell und zuverlässig. Der Support ist ebenfalls prima. Wenn es mal zu Problemen oder einer Downtime kommen, kümmert sich der Inhaber schnell und engagiert darum, dass alles wieder läuft - Sowas sollten sich andere Hoster mal als Beispiel nehmen^^ All-in-One: Ich bin absolut zufrieden. So einen Hoster wie Nexo findet'
        badges={[negativeBadge]}
      />
    </>
  );
}
