export interface Language {
  code: 'ar' | 'en';
  name: string;
  dir: 'rtl' | 'ltr';
}

export interface Treatment {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  slug: string;
}

export interface Service {
  id: string;
  title: {
    ar: string;
    en: string;
  };
  description: {
    ar: string;
    en: string;
  };
  icon: string;
  image?: string;
  highlights?: {
    ar: string[];
    en: string[];
  };
  ctaLabel?: {
    ar: string;
    en: string;
  };
  features: {
    ar: string[];
    en: string[];
  };
}