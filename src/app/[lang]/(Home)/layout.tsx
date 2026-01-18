import React from 'react';
import Navbar, { NavbarProps } from '@/components/Navbar';
import Footer, { FooterProps } from '@/components/Footer';
import { getDictionary } from '@/i18n/getDictionary';

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  const navbar: NavbarProps = {
    logo: true,
    logoUrl: `/${lang}`,
    links: [
      { label: dict.nav.quests, href: `/${lang}/quests` },
      { label: dict.nav.info, href: `/${lang}/informations` },
      { label: dict.nav.docs, href: `/${lang}/documentation` },
    ],
    searchBar: false,
    darkModeToggle: true,
    loginButton: true,
    fixed: false,
    backgroundColor: '#161A24',
  };

  const footer: FooterProps = {
    links: {
      resources: [
        {
          label: dict.footer.resources.tests,
          href: 'https://github.com/copiedcopypasta/dmwt_WoOS/deployments',
        },
        {
          label: dict.footer.resources.analytics,
          href: `/${lang}/analytics`,
        },
        {
          label: dict.footer.resources.source,
          href: 'https://github.com/copiedcopypasta/dmwt',
        },
      ],
      legal: [
        { label: dict.footer.legal.imprint, href: `/${lang}/impressum` },
        { label: dict.footer.legal.privacy, href: `/${lang}/datenschutz` },
        { label: dict.footer.legal.cookies, href: `/${lang}/cookie-settings` },
        { label: dict.footer.legal.licenses, href: `/${lang}/lizenzen` },
        { label: dict.footer.legal.bindings, href: `/${lang}/nutzerbindungen` },
      ],
      about: [
        { label: dict.footer.about.us, href: `/${lang}/about` },
        {
          label: dict.footer.about.university,
          href: 'https://www.reutlingen-university.de/',
        },
        {
          label: dict.footer.about.accessibility,
          href: `/${lang}/barrierefreiheit`,
        },
      ],
      social: [
        { label: dict.footer.social.feedback, href: `/${lang}/feedback` },
        { label: dict.footer.social.contact, href: `/${lang}/contact` },
        { label: dict.footer.social.faq, href: `/${lang}/faq` },
      ],
    },
    sozials: [
      { href: 'https://github.com', altText: 'GitHub' },
      { href: 'https://youtube.com', altText: 'YouTube' },
      { href: 'https://discord.com', altText: 'Discord' },
    ],
    logo: true,
    banner: true,
    categories: [
      { key: 'resources', title: dict.footer.resources.title },
      { key: 'social', title: dict.footer.social.title },
      { key: 'about', title: dict.footer.about.title },
      { key: 'legal', title: dict.footer.legal.title },
    ],
    socialsText: { key: 'socialText', title: dict.other.socialText },
    languageText: { key: 'languageText', title: dict.other.languageText }
  };

  return (
    <div className="bg-[#161a24]">
      <Navbar {...navbar} />
      <main>{children}</main>
      <Footer {...footer} />
    </div>
  );
}