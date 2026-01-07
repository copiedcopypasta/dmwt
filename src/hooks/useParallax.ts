import { useEffect } from 'react';

export function useParallax() {
  useEffect(() => {
    // Detect iOS
    const isIOS =
      /iPad|iPhone|iPod/.test(navigator.platform) ||
      (/Mac/.test(navigator.platform) && navigator.maxTouchPoints > 1);

    if (isIOS) {
      return; // Disable parallax on iOS
    }

    let animationFrameId: number;

    const handleScroll = () => {
      // Cancel previous animation frame
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }

      animationFrameId = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset;
        const layers = document.querySelectorAll<HTMLElement>(
          '.keyart_layer.parallax',
        );

        console.log(
          'Parallax layers found:',
          layers.length,
          'scrollTop:',
          scrollTop,
        );

        layers.forEach((layer) => {
          const speed = parseFloat(layer.getAttribute('data-speed') || '0');
          const yPos = -(scrollTop * speed) / 100;
          console.log('Setting transform for layer:', { speed, yPos });
          layer.style.transform = `translate3d(0px, ${yPos}px, 0px)`;
        });
      });
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);
}
