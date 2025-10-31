'use client';

import React, { ReactElement } from 'react';

// Todo: Remove this comment, if you add props to the Interface
/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
export interface NavLink {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  siteName: string;
}

/**
 * Navbar
 *
 * Navigation component (placeholder). Currently has no props.
 *
 * Props:
 * @param {NavLink[]} links - Array of navigation links with label and href.
 * @param {string} siteName - Name of the site to display in the navbar.
 *
 * Return: ReactElement
 */
export default function Navbar({
  links,
  siteName,
}: NavbarProps): ReactElement {
  return (
    <header className="py-4 bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-between">
        
        {/* Site Name/Brand */}
        <div className="text-xl font-bold">
          <a href="/" className="hover:text-gray-300">
            {siteName}
          </a>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-gray-300">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
