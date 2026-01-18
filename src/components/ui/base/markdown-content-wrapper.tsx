'use client';

import { MarkdownContent } from '@/components/ui/base/markdown-content';
import { ReactNode } from 'react';

interface MarkdownContentWrapperProps {
  title?: string;
  description?: string;
  badges?: string[];
  children: ReactNode;
  className?: string;
  prevUrl: string;
  nextUrl: string;
}

export function MarkdownContentWrapper({
  title,
  description,
  badges,
  children,
  className,
  prevUrl,
  nextUrl,
}: MarkdownContentWrapperProps) {
  return (
    <MarkdownContent
      title={title}
      description={description}
      badges={badges}
      prevUrl={prevUrl}
      nextUrl={nextUrl}
      className={className}
    >
      {children}
    </MarkdownContent>
  );
}
