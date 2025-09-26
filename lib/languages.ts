import { Language } from './types';

export const languages: Language[] = [
  { code: 'ar', name: 'العربية', dir: 'rtl' },
  { code: 'en', name: 'English', dir: 'ltr' }
];

export const defaultLanguage: Language = languages[0]; // Arabic