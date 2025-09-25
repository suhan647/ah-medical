"use client";

import { useState, useEffect, createContext, useContext } from 'react';
import { Language } from '@/lib/types';
import { languages, defaultLanguage } from '@/lib/languages';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, obj?: any) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);

  useEffect(() => {
    const stored = typeof window !== 'undefined' ? localStorage.getItem('language') : null;
    // Default to Arabic unless the user explicitly saved 'en'
    const initial = stored === 'en' ? languages.find(l => l.code === 'en')! : defaultLanguage;
    setLanguageState(initial);
    if (!stored) {
      try {
        localStorage.setItem('language', initial.code);
      } catch {}
    }
  }, []);

  // We intentionally avoid touching documentElement here to prevent
  // interfering with React DOM commits. A top-level wrapper sets dir/lang.

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang.code);
  };

  const t = (key: string, obj?: any): string => {
    const keys = key.split('.');
    let value: any = obj || {};
    
    for (const k of keys) {
      value = value[k];
      if (value === undefined) return key;
    }
    
    return value[language.code] || value.en || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};