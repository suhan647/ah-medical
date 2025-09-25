"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Stethoscope } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { language, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = content.header[language.code].navigation;

  const menuItems = [
    { href: '/', label: navigation.home },
    { href: '/about', label: navigation.about },
    { href: '/services', label: navigation.services },
    { href: '/treatments', label: navigation.treatments },
    { href: '/tourism', label: navigation.tourism },
    { href: '/contact', label: navigation.contact },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <Stethoscope className="h-8 w-8 text-teal-600" />
            <span className="text-xl font-bold text-gray-900">
              {content.header[language.code].company}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-700 hover:text-teal-600 transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
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
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-teal-600 hover:bg-gray-50 rounded-md transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;