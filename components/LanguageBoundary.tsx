"use client";

import { useLanguage } from '@/hooks/useLanguage';

export default function LanguageBoundary({ children }: { children: React.ReactNode }) {
  const { language } = useLanguage();
  return (
    <div key={language.code} dir={language.dir} lang={language.code}>
      {children}
    </div>
  );
}


