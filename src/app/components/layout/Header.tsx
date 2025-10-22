// header component for the application layout

import React, { JSX } from 'react';

interface HeaderProps {
  title?: string;
  children?: React.ReactNode;
}

export default function Header({ title, children }: HeaderProps): JSX.Element {
  return (
    <header className="relative bg-gray-800 p-4 text-white">
      <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-xl font-bold">
        {title}
      </h1>
      <nav className="absolute top-1/2 right-4 -translate-y-1/2 transform">
        {children}
      </nav>
    </header>
  );
}
