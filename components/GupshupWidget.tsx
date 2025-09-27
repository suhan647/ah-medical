"use client";

import { useEffect, useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

// Extend Window interface to include Gupshup function
declare global {
  interface Window {
    generateWhatsAppWidget?: (settings: any) => void;
  }
}

const GupshupWidget = () => {
  const { language } = useLanguage();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check if we're on desktop
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768); // md breakpoint
    };

    // Initial check
    checkScreenSize();

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  useEffect(() => {
    // Only load Gupshup widget on desktop
    if (!isDesktop) return;

    // Load the Gupshup script
    const script = document.createElement('script');
    script.src = 'https://www.gupshup.ai/whatsapp-widget.js';
    script.async = true;
    document.head.appendChild(script);

    // Initialize the widget when the script loads
    script.onload = () => {
      if (window.generateWhatsAppWidget) {
        const isArabic = language.code === 'ar';
        
        const widgetSettings = {
          "message": isArabic 
            ? "مرحباً بكم في السياحة الطبية AH! كيف يمكننا مساعدتكم اليوم؟" 
            : "Welcome to AH Medical Tourism! How can we help you today?",
          "response": isArabic 
            ? "كيف يمكنني مساعدتك؟" 
            : "How can I help you?",
          "name": isArabic 
            ? "عبد القدوس" 
            : "Abdul Quddus",
          "status": isArabic 
            ? "عادة ما يرد خلال يوم" 
            : "Typically replies within a day",
          "profilePic": "https://gs-upload.gupshup.io/revamp/assets/v3/images/whatsapp-widget/dummy.jpeg",
          "whatsappIcon": "https://gs-upload.gupshup.io/revamp/assets/v3/images/whatsapp-widget/WhatsApp.svg",
          "buttonText": isArabic 
            ? "تحدث عبر واتساب" 
            : "Chat on WhatsApp",
          "headerBgColor": "#075E54",
          "nameTextColor": "#FFFFFF",
          "statusTextColor": "#FFFFFF",
          "buttonTextColor": "#FFFFFF",
          "buttonBgColor": "#25D366",
          "buttonBorderRadius": "24px",
          "mobileNumber": "94814 92052",
          "template": "a"
        };
        window.generateWhatsAppWidget(widgetSettings);
      }
    };

    // Cleanup function
    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [language.code, isDesktop]);

  // Don't render anything on mobile
  if (!isDesktop) {
    return null;
  }

  return (
    <div>
      {/* Gupshup widget will be rendered here on desktop */}
    </div>
  );
};

export default GupshupWidget;
