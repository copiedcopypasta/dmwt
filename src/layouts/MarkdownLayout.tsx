import { MarkdownSidebar } from '@/components/ui/base/markdown-sidebar';
import { ReactNode } from 'react';

interface MarkdownLayoutProps {
  leftSidebar?: ReactNode;
  content?: ReactNode;
  rightSidebar?: ReactNode;
  className?: string;
}

function MarkdownLayout({
  leftSidebar,
  content,
  rightSidebar,
  className = '',
}: MarkdownLayoutProps) {
  return (
    <div
      className={`grid gap-20 px-60 py-20 ${className}`}
      style={{ gridTemplateColumns: '1fr 3fr 1fr' }}
    >
      {leftSidebar && (
        <MarkdownSidebar className='sticky top-20 h-fit'>
          {leftSidebar}
        </MarkdownSidebar>
      )}
      {content}
      {rightSidebar && (
        <MarkdownSidebar className='sticky top-20 h-fit'>
          {rightSidebar}
        </MarkdownSidebar>
      )}
    </div>
  );
}

export { MarkdownLayout };
