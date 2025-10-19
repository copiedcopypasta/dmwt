import React, { JSX } from 'react';

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface ButtonProps {
  color?: "red" | "green" | "blue";
  descrition: string;
  link: string;
}

export default function Button({ color, descrition, link}: ButtonProps): JSX.Element {
  const colorClasses: Record<string, string> = {
    red: "bg-red-600 hover:bg-red-700 text-white",
    green: "bg-green-600 hover:bg-green-700 text-white",
    blue: "bg-blue-600 hover:bg-blue-700 text-white",
  };

  return (
    <a  
      href={link}
      className={'inline-block px-6 py-3 rounded-xl ${colorClasses[color]} shadow-sm'}
    >
      {descrition}
    </a>
  );
}
