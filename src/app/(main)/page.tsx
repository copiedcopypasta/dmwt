'use client';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React from 'react';
import styles from './page.module.css';

export default function Page(): React.ReactElement {
  return (
    <div className='PageRoot'>
      <Parallax
        pages={1.5}
        style={{ top: '0', left: '0' }}
        className={styles.animation}
      >
        <ParallaxLayer offset={0} speed={0.1}>
          <div className={`${styles.animation_layer} ${styles.layer7}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.3}>
          <div className={`${styles.animation_layer} ${styles.layer6}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.5}>
          <div className={`${styles.animation_layer} ${styles.layer5}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.7}>
          <div className={`${styles.animation_layer} ${styles.layer4}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.7}>
          <div className={`${styles.animation_layer} ${styles.layer3}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={0.9}>
          <div className={`${styles.animation_layer} ${styles.layer2}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0} speed={1.1}>
          <div className={`${styles.animation_layer} ${styles.layer1}`} />
        </ParallaxLayer>

        <ParallaxLayer offset={0.9} speed={0.5} style={{ zIndex: 100 }}>
          <div className={styles.content}>
            <div className={styles.contentInner}>
              <p>
                Willkommen auf der offiziellen Website von DM-WT – Ihrem
                digitalen Begleiter für das Wizard of OS Projekt! Hier finden
                Sie alle Informationen, Neuigkeiten und Ressourcen rund um das
                spannende Vorhaben, die Zukunft der Betriebssysteme zu
                gestalten.
              </p>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
