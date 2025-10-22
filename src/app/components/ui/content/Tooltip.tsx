'use client';

import React, { ReactElement } from 'react';

interface TooltipProps {
  text: string | undefined;
  children: React.ReactNode;
}

export default function Tooltip({
  text,
  children,
}: TooltipProps): ReactElement {
  const [isVisible, setVisible] = React.useState(false);
  return (
    <>
      <div
        className="relative inline-block"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        {children}
        {isVisible && (
          <div className="absolute bottom-full mb-2 w-max max-w-xs rounded-md bg-gray-800 p-2 text-sm text-white shadow-lg">
            {text}
          </div>
        )}
      </div>
    </>
  );
}
