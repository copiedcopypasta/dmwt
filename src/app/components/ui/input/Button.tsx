import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface ButtonProps {
  color?: 'red' | 'green' | 'blue';
  description: string;
  link: string;
}

export default function Button({
  color,
  description,
  link,
}: ButtonProps): JSX.Element {
  const colorClasses: Record<string, string> = {
    red: 'bg-red-600 hover:bg-red-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
  };

  return (
    <a
      href={link}
      className={
        '${colorClasses[color]} inline-block rounded-xl px-6 py-3 shadow-sm'
      }
    >
      {description}
    </a>
  );
}
