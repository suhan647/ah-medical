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
  title: 'AH Medical Tourism - Premium Healthcare Services in Bangalore | Arabic Support',
  description: 'Leading medical tourism company in Bangalore offering world-class healthcare with Arabic translation. Dental implants, prostate treatment, cosmetic surgery with certified doctors and JCI-accredited hospitals.',
  keywords: 'medical tourism Bangalore, Arabic medical translator India, dental implants Bangalore, prostate treatment India, cosmetic surgery Bangalore, JCI accredited hospitals, medical visa India, healthcare tourism',
  authors: [{ name: 'AH Medical Tourisms' }],
  openGraph: {
    title: 'AH Medical Tourism - World-Class Healthcare in Bangalore',
    description: 'Trusted medical tourism services with Arabic support. JCI-accredited hospitals, certified specialists, comprehensive care packages.',
    images: ['/og-image.jpg'],
    locale: 'ar_SA',
    alternateLocale: 'en_US',
    type: 'website',
    siteName: 'AH Medical Tourism',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AH Medical Tourism - Trusted Healthcare in Bangalore',
    description: 'Premium medical tourism with Arabic support, certified doctors, JCI hospitals',
  },
  alternates: {
    canonical: 'https://ahmedtourisms.com',
    languages: {
      'ar': 'https://ahmedtourisms.com/ar',
      'en': 'https://ahmedtourisms.com/en',
    },
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="Content-Language" content="ar" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "AH Medical Tourism",
              "description": "Premium medical tourism services with Arabic translation in Bangalore, India",
              "url": "https://ahmedtourisms.com",
              "logo": "https://ahmedtourisms.com/logo.png",
              "image": "https://ahmedtourisms.com/og-image.jpg",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Bangalore",
                "addressRegion": "Karnataka",
                "addressCountry": "IN",
                "postalCode": "560001"
              },
              "telephone": "+917204832004",
              "email": "info@ahmedtourisms.com",
              "priceRange": "$$",
              "currenciesAccepted": "INR, USD, SAR, AED",
              "paymentAccepted": "Cash, Credit Card, Bank Transfer",
              "openingHours": "Mo-Su 09:00-20:00",
              "areaServed": {
                "@type": "Country",
                "name": "India"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Bangalore"
              },
              "medicalSpecialty": ["Dentistry", "Urology", "Orthopedics"],
              "languagesSpoken": ["Arabic", "English", "Hindi"]
            })
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