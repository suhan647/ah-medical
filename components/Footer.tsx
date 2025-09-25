"use client";

import Link from 'next/link';
import { Stethoscope, MapPin, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';

const Footer = () => {
  const { language } = useLanguage();
  const navigation = content.header[language.code].navigation;
  const contactInfo = content.contact[language.code];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Stethoscope className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">
                {content.header[language.code].company}
              </span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              {language.code === 'ar' 
                ? 'نحن نقدم أفضل خدمات السياحة الطبية في بنغالور مع مترجم عربي متخصص ومرافقة طبية شاملة.'
                : 'We provide the best medical tourism services in Bangalore with specialized Arabic translation and comprehensive medical assistance.'
              }
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <MapPin size={16} className="text-teal-400" />
                <span className="text-sm">{contactInfo.location}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Mail size={16} className="text-teal-400" />
                <span className="text-sm">{contactInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <Phone size={16} className="text-teal-400" />
                <span className="text-sm">+91 72048 32004</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language.code === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-teal-400 transition-colors">{navigation.home}</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-teal-400 transition-colors">{navigation.about}</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-teal-400 transition-colors">{navigation.services}</Link></li>
              <li><Link href="/treatments" className="text-gray-300 hover:text-teal-400 transition-colors">{navigation.treatments}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {language.code === 'ar' ? 'خدماتنا' : 'Our Services'}
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>{language.code === 'ar' ? 'علاج الأسنان' : 'Dental Treatment'}</li>
              <li>{language.code === 'ar' ? 'علاج البروستاتا' : 'Prostate Treatment'}</li>
              <li>{language.code === 'ar' ? 'العلاج الطبيعي' : 'Natural Treatment'}</li>
              <li>{language.code === 'ar' ? 'السياحة الطبية' : 'Medical Tourism'}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 {content.header[language.code].company}. {language.code === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;