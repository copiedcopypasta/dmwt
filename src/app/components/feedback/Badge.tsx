import React, { JSX } from 'react';

interface BadgeProps {
  text: string |undefined;
  color?: keyof typeof badgeColors;
}

const badgeColors = {
    red: "border-red-400 bg-red-600/40 text-red-400",
    green: "border-green-400 bg-green-600/40 text-green-400",
    yellow: "border-yellow-400 bg-yellow-600/40 text-yellow-400",
    blue: "border-blue-400 bg-blue-600/40 text-blue-400",
    gray: "border-gray-400 bg-gray-600/40 text-gray-400",
};

export default function Badge({
  text,
  color = "gray",
}: BadgeProps): JSX.Element {

  const colorClasses = badgeColors[color];

  return ( 
    <>
      <span className={`inline-flex items-center px-2 py-0.1 text-xs font-medium rounded-md border-2 transition-colors ${colorClasses}`}>
        {text}
      </span>
    </>
  );
}
