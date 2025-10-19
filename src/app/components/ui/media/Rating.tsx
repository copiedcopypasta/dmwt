// Todo: Add defaultIcon

import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface RatingProps {
  value: number;
  max: number;
  icon?: React.ReactNode;
}

export default function Rating({ value, max, icon}: RatingProps): JSX.Element {
  const defaultIcon = (
    <svg></svg>
  );

  const RatingIcon = icon || defaultIcon;

  return (
    <div className="flex items-center">
      {Array.from({ length: max}, (_, i) =>(
        <span key={i} className={'flex-shrink-0 ${i < value ? "" : "text-gray-300"}'}>
          {RatingIcon}
        </span>
      ))}
    </div>
  );
}
