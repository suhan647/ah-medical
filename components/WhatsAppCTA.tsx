"use client";

import { ArrowRight } from 'lucide-react';

interface WhatsAppCTAProps {
  lang: 'ar' | 'en';
}

export default function WhatsAppCTA({ lang }: WhatsAppCTAProps) {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/94814 92052', '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button
        onClick={handleWhatsAppClick}
        className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 rtl:space-x-reverse"
      >
        <span>{lang === 'ar' ? 'احصل على عرض سعر مجاني' : 'Get Free Quote'}</span>
        <ArrowRight size={20} className="rtl:rotate-180" />
      </button>
      <button
        onClick={handleWhatsAppClick}
        className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1"
      >
        {lang === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
      </button>
    </div>
  );
}
