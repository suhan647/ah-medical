"use client";

import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';

const WhatsAppButton = () => {
  const { language } = useLanguage();
  
  const handleClick = () => {
    const message = language.code === 'ar' 
      ? 'مرحباً! أريد الاستفسار عن خدماتكم الطبية'
      : 'Hello! I would like to inquire about your medical services';
    
    const whatsappUrl = `https://wa.me/9481492052?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50  text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/logos/whatsapp.svg"
        alt="WhatsApp"
        width={54}
        height={54}
        className="w-14 h-14"
      />
    </button>
  );
};

export default WhatsAppButton;