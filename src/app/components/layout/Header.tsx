// header component for the application layout

import React, { JSX } from 'react';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps): JSX.Element {
  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 text-white">
      <h1 className="text-xl font-bold">{title}</h1>
      <nav>{children}</nav>
    </header>
  );
}
