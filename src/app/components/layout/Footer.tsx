import React, { JSX } from 'react';

export interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  links: FooterLink[];
  copyright: string;
  barrierefreiheit: string;
}

export default function Footer({
  links,
  copyright,
  barrierefreiheit,
}: FooterProps): JSX.Element {
  return (
    <footer className="mt-8 py-6">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 md:flex-row md:justify-center">
        {/*Links*/}
        <nav className="flex flex-wrap justify-center gap-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
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
        <div className="text-center">{copyright}</div>
      </div>
    </footer>
  );
}
