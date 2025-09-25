"use client";

import { useEffect } from 'react';
import { useLanguage } from '@/hooks/useLanguage';

export default function DirLangController() {
  const { language } = useLanguage();

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const update = () => {
      document.documentElement.setAttribute('dir', language.dir);
      document.documentElement.setAttribute('lang', language.code);
    };
    if (typeof window !== 'undefined' && 'requestAnimationFrame' in window) {
      window.requestAnimationFrame(update);
    } else {
      setTimeout(update, 0);
    }
  }, [language]);

  return null;
}


