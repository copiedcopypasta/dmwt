// Todo: Create Component

import React, { JSX } from 'react';

interface ProgressBarProps {
  value: number | undefined;
  text?: string | null | undefined;
}

export default function ProgressBar({
  value,
  text,
}: ProgressBarProps): JSX.Element {
  /* Display text logic:
   * 1. If text is null, display nothing
   * 2. If text is defined, display text
   * 3. If text is undefined, display value followed by '%'
   */
  const textValue =
    text === null
      ? ''
      : text !== undefined
        ? text
        : value !== undefined
          ? `${value}%`
          : '';

  const correctedWidth = value === 100 ? 103 : value;

  return (
    <>
      <div className="relative h-6 w-80 overflow-hidden rounded-md bg-gray-200">
        {/*Progress bar fill*/}
        <div
          className="absolute top-0 left-0 h-full transition-all duration-300"
          style={{
            width: `${correctedWidth}%`,
            background: 'linear-gradient(135deg, #3b82f6 25%, #60a5fa 75%)',
            transform: 'skewX(-20deg)',
            transformOrigin: 'top left',
          }}
        ></div>
        {/*Progress bar text*/}
        <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-black">
          {textValue}
        </div>
      </div>
    </>
  );
}
