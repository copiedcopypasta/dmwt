'use client';

import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Greenland from './Greenland.svg';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import './index.module.css';

export interface Links {
  label: string;
  href: string;
}

export interface Sozials {
  icon: ReactElement;
  href: string;
  altText: string;
}

export interface LinkCategorys {
  resources: Links[] | null | undefined;
  legal: Links[] | null | undefined;
  about: Links[] | null | undefined;
  social: Links[] | null | undefined;
}

export interface FooterProps {
  links: LinkCategorys | null | undefined;
  sozials: Sozials[] | boolean | null | undefined;
  logo: boolean | null | undefined;
  banner: boolean | null | undefined;
}

/**
 * Checks if a value exists and is not empty
 */
const hasValue = (value: unknown): boolean => {
  if (
    value === null ||
    value === undefined ||
    value === false ||
    value === ''
  ) {
    return false;
  }
  if (Array.isArray(value) && value.length === 0) {
    return false;
  }
  return true;
};

/**
 * Checks if links category has any items
 */
const hasLinkCategory = (links: LinkCategorys | null | undefined): boolean => {
  if (!links) return false;
  return (
    hasValue(links.resources) ||
    hasValue(links.legal) ||
    hasValue(links.about) ||
    hasValue(links.social)
  );
};

/**
 * Maps category links or returns null
 */
const mapLinks = (category: Links[] | null | undefined): Links[] | null => {
  if (!hasValue(category)) return null;
  return category as Links[];
};

/**
 * Gets logo or returns null
 */
const getLogo = (logo: FooterProps['logo']): boolean => {
  return hasValue(logo);
};

/**
 * Gets banner or returns null
 */
const getBanner = (banner: FooterProps['banner']): boolean => {
  return hasValue(banner);
};

/**
 * Renders the footer info section (language, socials, logo)
 */
const InfoSection = ({
  showLogo,
  hasSozials,
  sozials,
}: {
  showLogo: boolean;
  hasSozials: boolean;
  sozials: Sozials[];
}): ReactElement => {
  const [selectedLanguage, setSelectedLanguage] = useState('de');

  const languages = [
    { value: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { value: 'en', label: 'English', flag: '🇬🇧' },
    { value: 'fr', label: 'Français', flag: '🇫🇷' },
    { value: 'es', label: 'Español', flag: '🇪🇸' },
    { value: 'it', label: 'Italiano', flag: '🇮🇹' },
  ];

  const selectedLang = languages.find(
    (lang) => lang.value === selectedLanguage,
  );

  return (
    <div className='flex flex-col items-start'>
      {/* Logo */}
      {showLogo && (
        <div className='mb-8'>
          <a href='/' aria-label='Home'>
            <Image
              src='/Icon.png'
              alt='Logo'
              width={125}
              height={125}
              className='h-25 w-25'
            />
          </a>
        </div>
      )}

      {/* Language */}
      <div className='mb-8'>
        <p className='mb-2 text-sm opacity-70'>Sprache</p>
        <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
          <SelectTrigger className='bg-success-500/20 hover:bg-success-500/30 w-fit min-w-[200px] rounded-lg border-transparent text-white'>
            <SelectValue>
              {selectedLang && (
                <div className='flex items-center gap-2'>
                  <span>{selectedLang.flag}</span>
                  <span>{selectedLang.label}</span>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent className='bg-success-500/20 border-transparent text-white backdrop-blur-sm'>
            <SelectGroup>
              {languages.map((lang) => (
                <SelectItem
                  key={lang.value}
                  value={lang.value}
                  className='hover:bg-success-500/30 focus:bg-success-500/30 focus:text-white'
                >
                  <div className='flex items-center gap-2'>
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Sozials */}
      {hasSozials && (
        <div>
          <p className='mb-4 text-sm opacity-70'>Soziales</p>
          <div className='flex gap-4'>
            {sozials.map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                aria-label={social.altText}
                className='hover:opacity-70'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

/**
 * Renders the footer links section
 */
const linksSection = (mappedLinks: {
  resources: Links[] | null;
  legal: Links[] | null;
  about: Links[] | null;
  social: Links[] | null;
}): ReactElement => {
  const categories = [
    { key: 'resources', title: 'Ressourcen' },
    { key: 'social', title: 'Soziales' },
    { key: 'about', title: 'Informationen' },
    { key: 'legal', title: 'Richtlinien' },
  ] as const;

  return (
    <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4'>
      {categories.map(({ key, title }) => {
        const links = mappedLinks[key];
        if (!links) return null;

        return (
          <div key={key}>
            <h3 className='mb-4 text-base text-neutral-400'>{title}</h3>
            <ul className='space-y-3'>
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className='text-base text-neutral-700 hover:underline'
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

/**
 * Renders the footer banner
 */
const bannerSection = (showBanner: boolean): ReactElement | null => {
  if (!showBanner) return null;

  return (
    <div className='col-span-2 mt-6 pt-8'>
      <Image
        width={0}
        height={0}
        src='/Banner.svg'
        alt='Footer Banner'
        className='h-auto w-full rounded-lg'
      />
    </div>
  );
};

/**
 * Page footer with a list of links and social media links.
 *
 * @param {FooterProps} props - The properties for the Footer component.
 * @param {LinkCategorys | null | undefined} props.links - The categories of links to display in the footer.
 * @param {Sozials[] | boolean | null | undefined} props.sozials - The social media links to display.
 * @param {boolean | null | undefined} props.showLogo - Whether to display the logo.
 * @param {boolean | null | undefined} props.logoBanner - Whether to display the logo banner.
 * @returns {ReactElement} The Footer component.
 */
export default function Footer({
  links,
  sozials,
  logo,
  banner,
}: FooterProps): ReactElement {
  const hasSozials = hasValue(sozials) && Array.isArray(sozials);
  const showLogo = getLogo(logo);
  const showBanner = getBanner(banner);

  const mappedLinks = {
    resources: links?.resources ? mapLinks(links.resources) : null,
    legal: links?.legal ? mapLinks(links.legal) : null,
    about: links?.about ? mapLinks(links.about) : null,
    social: links?.social ? mapLinks(links.social) : null,
  };

  return (
    <footer>
      <div className='text-brand-100 block overflow-hidden'>
        <Greenland
          className='block h-auto w-full'
          style={{ marginBottom: '-3px' }}
        />
      </div>

      <div className='footer-container bg-brand-100 gap-8 px-16 py-8'>
        <div className='grid grid-cols-3 gap-8'>
          {/* Row 1 - Left Column: Language + Sozials + Logo */}
          <InfoSection
            showLogo={showLogo}
            hasSozials={hasSozials}
            sozials={(sozials as Sozials[]) || []}
          />

          {/* Row 1 - Right Column: Links (spans 2 columns) */}
          <div className='col-span-2'>{linksSection(mappedLinks)}</div>
        </div>

        {/* Row 2 - Full Width Banner */}
        {bannerSection(showBanner)}
      </div>
    </footer>
  );
}
