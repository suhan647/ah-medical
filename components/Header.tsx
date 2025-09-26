"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import LanguageSwitcher from './LanguageSwitcher';
import { usePathname } from 'next/navigation';

const Header = () => {
  const { language, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = content.header[language.code].navigation;

  const menuItems = [
    { href: `/${language.code}`, label: navigation.home },
    { href: `/${language.code}/about`, label: navigation.about },
    { href: `/${language.code}/services`, label: navigation.services },
    { href: `/${language.code}/treatments`, label: navigation.treatments },
    { href: `/${language.code}/contact`, label: navigation.contact },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href={`/${language.code}`} className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="relative h-24 md:h-24 w-[220px] md:w-[340px]">
              <Image
                src={language.code === 'ar' ? '/logos/ah-medical-travles-logo-ar.png' : '/logos/ah-medical-travles-logo-en.png'}
                alt={content.header[language.code].company}
                fill
                sizes="(max-width: 768px) 220px, 340px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => {
              const isRoot = item.href === `/${language.code}`;
              const isActive = isRoot ? pathname === `/${language.code}` : pathname.startsWith(item.href);
              const base = 'transition-colors font-medium px-2 py-1 rounded-md';
              const active = 'text-teal-700 bg-teal-50';
              const inactive = 'text-gray-700 hover:text-teal-600';
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`${base} ${isActive ? active : inactive}`}
                >
                  {item.label}
                </Link>
              );
            })}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4 rtl:space-x-reverse">
            <LanguageSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-teal-600 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => {
                const isRoot = item.href === `/${language.code}`;
                const isActive = isRoot ? pathname === `/${language.code}` : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2 rounded-md transition-colors font-medium ${isActive ? 'text-teal-700 bg-teal-50' : 'text-gray-700 hover:text-teal-600 hover:bg-gray-50'}`}
                    onClick={() => setIsMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;