// Todo: Add defaultIcon

import React from 'react';

interface RatingProps {
  value: number;
  max: number;
  icon?: React.ReactNode;
}

export default function Rating({
  value,
  max,
  icon,
}: RatingProps): React.ReactElement {
  const defaultIcon = <svg />;

  const RatingIcon = icon || defaultIcon;

  return (
    <div className="flex items-center">
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`${i < value ? '' : 'text-gray-300'} flex-shrink-0`}
        >
          {RatingIcon}
        </span>
      ))}
    </div>
  );
}
