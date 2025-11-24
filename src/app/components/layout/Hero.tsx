'use client';

import React, { ReactElement } from 'react';

interface HeroProps {
  title?: string;
  children?: React.ReactNode;
}

/**
 * Header
 *
 * Page header with a centered title and optional nav content (children).
 *
 * Props:
 * @param {string | undefined} title - Optional title displayed centered in the header.
 * @param {React.ReactNode | undefined} children - Optional navigation elements placed on the right side of the header.
 *
 * Return: ReactElement
 */
export default function Hero({ title, children }: HeroProps): ReactElement {
  return (
    <>
      <header className="flex h-[80px] w-auto items-center bg-gray-800 px-4 text-white"></header>
    </>
  );
}
