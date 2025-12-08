'use client';

import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from './page.module.css';

export default function Page() {
  return (
    <ParallaxProvider>
      <div className={styles.keyart}>
        <Parallax translateY={[-20, 20]}>
          <div className={`${styles.layer} ${styles.layer7}`} />
        </Parallax>

        <Parallax translateY={[-40, 40]}>
          <div className={`${styles.layer} ${styles.layer6}`} />
        </Parallax>

        <Parallax translateY={[-60, 60]}>
          <div className={`${styles.layer} ${styles.layer5}`} />
        </Parallax>

        <Parallax translateY={[-90, 90]}>
          <div className={`${styles.layer} ${styles.layer4}`} />
        </Parallax>

        <Parallax translateY={[-120, 120]}>
          <div className={`${styles.layer} ${styles.layer3}`} />
        </Parallax>

        <Parallax translateY={[-160, 160]}>
          <div className={`${styles.layer} ${styles.layer2}`} />
        </Parallax>

        <Parallax translateY={[-200, 200]}>
          <div className={`${styles.layer} ${styles.layer1}`} />
        </Parallax>
      </div>

      {/* CONTENT */}
      <div className={styles.content}>
        <div className={styles.contentInner}>
          <p>Learn more about Operating Systems with Wizard of OS.</p>
        </div>
      </div>
    </ParallaxProvider>
  );
}
