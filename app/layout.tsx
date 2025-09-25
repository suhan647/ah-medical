import './globals.css';
import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import LanguageBoundary from '@/components/LanguageBoundary';
import DirLangController from '@/components/DirLangController';

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'AH Medical Tourisms - أفضل خدمات السياحة الطبية في بنغالور',
  description: 'خدمات سياحة طبية متكاملة مع مترجم عربي في بنغالور. علاج الأسنان، البروستاتا، العلاج الطبيعي مع أفضل الأطباء في الهند.',
  keywords: 'السياحة الطبية, بنغالور, علاج الأسنان, البروستاتا, مترجم عربي, طبيب, الهند, medical tourism, Bangalore, dental treatment, prostate, Arabic translator',
  openGraph: {
    title: 'AH Medical Tourisms - Premier Medical Tourism in Bangalore',
    description: "Comprehensive medical tourism services with Arabic translation in Bangalore. Dental, prostate, natural treatments with India's best doctors.",
    images: ['/og-image.jpg'],
    locale: 'ar_SA',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AH Medical Tourisms - Medical Tourism in Bangalore',
    description: 'Quality medical treatment with Arabic translation services',
  },
  alternates: {
    canonical: 'https://ahmedtourisms.com',
    languages: { ar: 'https://ahmedtourisms.com/ar', en: 'https://ahmedtourisms.com/en' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content="ar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MedicalBusiness',
              name: 'AH Medical Tourisms',
              description: 'Medical tourism services with Arabic translation in Bangalore',
              address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressCountry: 'IN' },
              telephone: '+917204832004',
              url: 'https://ahmedtourisms.com',
              medicalSpecialty: ['Dentistry', 'Urology', 'Orthopedics'],
              languagesSpoken: ['Arabic', 'English', 'Hindi'],
            }),
          }}
        />
      </head>
      <body className={`${cairo.variable} ${inter.variable} font-sans`}>
        <LanguageProvider>
          <LanguageBoundary>
            <DirLangController />
            <Header />
            <main>{children}</main>
            <Footer />
            <WhatsAppButton />
          </LanguageBoundary>
        </LanguageProvider>
      </body>
    </html>
  );
}