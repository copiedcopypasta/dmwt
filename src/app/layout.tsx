import React from 'react';
import { Metadata } from 'next';
import { getSiteUrl } from '@/lib/server-utils';
import '@/styles/globals.css';
import Footer, { FooterProps } from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),

  title: {
    default: 'Wizard of OS',
    template: '%s | Wizard of OS',
  },

  description: 'Wizard of OS – Tools, Utilities & Magic für dein System.',

  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
    shortcut: '/favicon.ico',
  },

  openGraph: {
    type: 'website',
    siteName: 'Wizard of OS',
    title: 'Wizard of OS',
    description: 'Wizard of OS – Tools, Utilities & Magic für dein System.',
    images: [
      {
        url: '/og-default.jpg', // Optional: kannst du später ersetzen
        width: 1200,
        height: 630,
        alt: 'Wizard of OS – Open Graph Bild',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Wizard of OS',
    description: 'Wizard of OS – Tools, Utilities & Magic für dein System.',
    images: ['/twitter-default.jpg'], // optional
    creator: '@deinTwitterHandle', // optional
  },

  robots: {
    index: true,
    follow: true,
  },
};

const footer: FooterProps = {
  links: {
    resources: [
      { label: 'Hilfe', href: '/hilfe' },
      { label: 'Quests', href: '/quests' },
      { label: 'Tests', href: '/tests' },
      { label: 'Hochschule', href: '/hochschule' },
    ],
    legal: [
      { label: 'Impressum', href: '/impressum' },
      { label: 'Datenschutz', href: '/datenschutz' },
      { label: 'Cookie‑Einstellungen', href: '/cookie-settings' },
      { label: 'Lizenzen', href: '/lizenzen' },
      { label: 'Barrierefreiheit', href: '/barrierefreiheit' },
    ],
    about: [
      { label: 'Über uns', href: '/about' },
      { label: 'Informationen', href: '/informations' },
      { label: 'Nutzerbindungen', href: '/nutzerbindungen' },
    ],
    social: [
      { label: 'Feedback', href: '/feedback' },
      { label: 'Kontakt', href: '/contact' },
      { label: 'Soziales', href: '/sozials' },
    ],
  },
  sozials: [
    { icon: <>GH</>, href: 'https://github.com', altText: 'GitHub' },
    { icon: <>TW</>, href: 'https://twitter.com', altText: 'Twitter' },
    { icon: <>DC</>, href: 'https://discord.com', altText: 'Discord' },
  ],
  logo: true,
  banner: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ height: '100vh' }} suppressHydrationWarning>
      <body
        className='min-h-screen'
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          backgroundColor: '#000000',
        }}
      >
        {children}
        <Footer {...footer} />
      </body>
    </html>
  );
}
