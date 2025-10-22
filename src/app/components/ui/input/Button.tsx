import React, { ReactElement } from 'react';

interface ButtonProps {
  color?: string | undefined;
  link?: string | undefined;
  text: string | undefined;
  onClick?: () => void;
}

export default function Button({
  color,
  text,
  link,
  onClick,
}: ButtonProps): ReactElement {
  const classes = `${color ? `bg-${color}-600 hover:bg-${color}-700 text-white` : 'bg-gray-600 text-white'} inline-block rounded-md px-5 py-2 shadow-sm`;

  if (link) {
    return (
      <a href={link} className={classes}>
        {text}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {text}
    </button>
  );
}
