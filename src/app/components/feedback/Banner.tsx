import React from 'react';
import Button from '../ui/input/Button';

interface BannerProps {
  position: 'top' | 'bottom';
  color?: string | undefined;
  message: string | undefined;
}

export default function Banner({
  position,
  message,
  color,
}: BannerProps): React.ReactElement {
  const [isVisible, setIsVisible] = React.useState(true);
  const handleClose = () => setIsVisible(false);
  // Banner should be responsive; width handled via CSS (Tailwind classes)

  if (!isVisible || !message) {
    return <></>;
  }

  // position wrapper: fixed at top or bottom, full-width container with centered content
  const wrapperPositionClass = position === 'bottom' ? 'bottom-4' : 'top-4';

  return (
    <>
      <div
        style={
          {
            ['--banner-color' as string]: color ?? 'transparent',
          } as React.CSSProperties
        }
        className={`fixed inset-x-0 ${wrapperPositionClass} pointer-events-none z-50 flex justify-center`}
      >
        <div
          className={`pointer-events-auto mx-auto flex w-4/6 max-w-4xl flex-col items-center gap-2 rounded border bg-[var(--banner-color)]/100 p-3`}
        >
          <div className="text-center">{message}</div>
          <Button text="Close" onClick={handleClose} color="" />
        </div>
      </div>
    </>
  );
}
