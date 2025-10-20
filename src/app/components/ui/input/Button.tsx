import React from 'react';

interface ButtonProps {
  color?: 'red' | 'green' | 'blue';
  description: string;
  link: string;
}

export default function Button({
  color,
  description,
  link,
}: ButtonProps): React.ReactElement {
  const colorClasses: Record<string, string> = {
    red: 'bg-red-600 hover:bg-red-700 text-white',
    green: 'bg-green-600 hover:bg-green-700 text-white',
    blue: 'bg-blue-600 hover:bg-blue-700 text-white',
  };

  const classes = `${color ? colorClasses[color] : 'bg-gray-600 text-white'} inline-block rounded-xl px-6 py-3 shadow-sm`;

  return (
    <a href={link} className={classes}>
      {description}
    </a>
  );
}
