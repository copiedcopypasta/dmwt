// Todo: Remove this comment, if you add props to the Interface

import React, { JSX } from 'react';

export interface FooterLink{
  label: string;
  href: string;
}

/* eslint-disable-next-line @typescript-eslint/no-empty-object-type */
interface FooterProps {
  links: FooterLink[];
  copyright: string;
  barrierefreiheit: string;
}

export default function Footer({ links, copyright, barrierefreiheit}: FooterProps): JSX.Element {
  return (
  <footer className="py-6 mt-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">

      {/*Links*/}
      <nav className="flex flex-wrap justify-center gap-4">
        {links.map((link) =>(
          <a
          key={link.href}
          href={link.href}
          className="hover:text-white"
          >
            {link.label}
          </a>
        ))}
      </nav>

      {/*Barrierefreiheit*/}
      <div className="text-center">
        <a href="#" className="hover:text-white">
          {barrierefreiheit}
        </a>
      </div>

      {/*Copyright*/}
      <div className="text-center md:text-right">
        {copyright}
      </div>
    </div>
  </footer>
  );
}
