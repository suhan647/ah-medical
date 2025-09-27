"use client";

import Image from 'next/image';

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open('https://wa.me/9481492052', '_blank');
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