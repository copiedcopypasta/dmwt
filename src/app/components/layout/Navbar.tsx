'use client';

import React, { ReactElement } from 'react';

interface NavbarProps {
  logo: string | ReactElement;
  logoUrl?: string | undefined;
  rightItems?: ReactElement | ReactElement[] | undefined;
}

/**
 * Navbar
 *
 * Navigation component (placeholder). Currently has no props.
 *
 * Props: none
 *
 * Return: ReactElement
 */
export default function Navbar({
  logo,
  logoUrl,
  rightItems,
}: NavbarProps): ReactElement {
  return (
    <>
      <header className="navbar flex h-[60px] w-auto items-center bg-gray-800 px-4 text-white">
        <div className="flex flex-1 items-center">
          {logoUrl ? (
            <a href={logoUrl} className="text-xl font-bold">
              {logo}
            </a>
          ) : (
            <div className="text-xl font-bold">{logo}</div>
          )}
        </div>
        <nav className="ml-auto flex items-center">{rightItems}hallo</nav>
        <div className="itemsRight align-right ml-auto flex items-center">
          {rightItems}
        </div>
      </header>
    </>
  );
}
