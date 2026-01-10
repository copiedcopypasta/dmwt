'use client';

import Image from 'next/image';
import { useParallax } from '@/hooks/useParallax';
import styles from './page.module.css';

const KEYART_LAYERS = [
  { id: 0, src: '/keyart/index-1.png', speed: 0 },
  { id: 1, src: '/keyart/index-2.png', speed: 20 },
  { id: 2, src: '/keyart/index-3.png', speed: 40 },
  { id: 3, src: '/keyart/index-4.png', speed: 60 },
  { id: 4, src: '/keyart/index-5.png', speed: 80 },
  { id: 5, src: '/keyart/index-6.png', speed: 100 },
  { id: 6, src: '/keyart/index-7.png', speed: 120 },
].reverse();

export default function Page() {
  useParallax();

  return (
    <>
      <div className={styles.keyart}>
        {KEYART_LAYERS.map((layer) => (
          <div
            key={layer.id}
            className={`${styles.keyart_layer}${layer.src !== '/keyart/index-1.png' ? ` ${styles.parallax}` : ''}`}
            data-speed={layer.speed.toString()}
          >
            <Image
              src={layer.src}
              alt='Keyart layer'
              fill
              priority
              sizes='100vw'
              style={{ objectFit: 'cover', objectPosition: 'bottom center' }}
            />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <p>
            Willkommen auf der offiziellen Website von DM-WT – Ihrem digitalen
            Begleiter für das Wizard of OS Projekt! Hier finden Sie alle
            Informationen, Neuigkeiten und Ressourcen rund um das spannende
            Vorhaben, die Zukunft der Betriebssysteme zu gestalten.
          </p>
        </div>
      </div>
    </>
  );
}
