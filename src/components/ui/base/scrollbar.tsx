import React from 'react';

type Props = React.PropsWithChildren<{
  className?: string;
}>;

/**
 * Scrollbar
 * A small wrapper component that injects global, modern, slim scrollbars
 * supporting light and dark themes via `:root[data-theme="light"]` and
 * `:root[data-theme="dark"]`.
 *
 * Usage: place this high in your app (e.g. root layout) so the styles apply
 * globally. It also renders a wrapper div for optional scoping.
 */
export default function Scrollbar({ children, className }: Props) {
  return (
    <div
      className={['dmwt-scrollbar-root', className || '']
        .filter(Boolean)
        .join(' ')}
    >
      {children}

      <style jsx global>{`
        :root {
          --sb-size: 8px;
        }

        /* Theme variables */
        :root[data-theme='light'] {
          --sb-track: rgba(0, 0, 0, 0.04);
          --sb-thumb: rgba(0, 0, 0, 0.2);
          --sb-thumb-hover: rgba(0, 0, 0, 0.32);
        }

        :root[data-theme='dark'] {
          --sb-track: rgba(255, 255, 255, 0.04);
          --sb-thumb: rgba(255, 255, 255, 0.12);
          --sb-thumb-hover: rgba(255, 255, 255, 0.22);
        }

        /* Firefox: thin + colors */
        * {
          scrollbar-width: thin;
          scrollbar-color: var(--sb-thumb) transparent;
        }

        /* WebKit browsers */
        *::-webkit-scrollbar {
          width: var(--sb-size);
          height: var(--sb-size);
        }

        *::-webkit-scrollbar-corner {
          background: transparent;
        }

        *::-webkit-scrollbar-track {
          background: transparent;
        }

        *::-webkit-scrollbar-thumb {
          background-color: var(--sb-thumb);
          border-radius: 999px;
          border: 2px solid transparent;
          background-clip: padding-box;
          transition:
            background-color 160ms linear,
            transform 120ms ease;
          min-height: 20px;
        }

        *::-webkit-scrollbar-thumb:hover,
        *::-webkit-scrollbar-thumb:active {
          background-color: var(--sb-thumb-hover);
          transform: scale(1.08);
        }

        /* Provide a slightly larger, more visible scrollbar for focused elements */
        *:focus::-webkit-scrollbar-thumb {
          transform: scale(1.12);
        }

        /* Optional: Make scrollbar fully transparent when not hovered for ultra-minimal look */
        :root[data-theme='light']
          .dmwt-scrollbar-root:not(:hover)
          *::-webkit-scrollbar-thumb {
          opacity: 0.95;
        }

        :root[data-theme='dark']
          .dmwt-scrollbar-root:not(:hover)
          *::-webkit-scrollbar-thumb {
          opacity: 0.95;
        }

        /* Accessibility: ensure thin scrollbars still have good hit area on mobile/trackpads */
        @media (pointer: coarse) {
          :root {
            --sb-size: 12px;
          }
        }
      `}</style>
    </div>
  );
}

export { Scrollbar };
