import '../globals.css';
import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import { LanguageProvider } from '@/hooks/useLanguage';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GupshupWidget from '@/components/GupshupWidget';
import LanguageBoundary from '@/components/LanguageBoundary';
import DirLangController from '@/components/DirLangController';
import { generateMetadata as generateSEOMetadata } from '@/lib/seo-metadata';
import { generateStructuredData } from '@/lib/structured-data';
import { notFound } from 'next/navigation';

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

interface Props {
  params: { lang: string };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const lang = params.lang as 'ar' | 'en';
  if (!['ar', 'en'].includes(lang)) {
    notFound();
  }
  return generateSEOMetadata(lang);
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export default function LocaleLayout({ children, params }: Props) {
  const lang = params.lang as 'ar' | 'en';
  
  if (!['ar', 'en'].includes(lang)) {
    notFound();
  }

  const structuredData = generateStructuredData(lang);
  const isRTL = lang === 'ar';

  return (
    <html lang={lang} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="google" content="notranslate" />
        <meta httpEquiv="Content-Language" content={lang} />
        <link rel="alternate" hrefLang="ar" href="https://ahmedtourisms.com/ar" />
        <link rel="alternate" hrefLang="en" href="https://ahmedtourisms.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://ahmedtourisms.com/ar" />
        <script async src="https://www.gupshup.ai/whatsapp-widget.js"></script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${cairo.variable} ${inter.variable} font-sans overflow-x-hidden`}>
        <LanguageProvider initialLang={lang}>
          <LanguageBoundary>
            <DirLangController />
            <Header />
            <main className="overflow-x-hidden">{children}</main>
            <Footer />
            <GupshupWidget />
          </LanguageBoundary>
        </LanguageProvider>
      </body>
    </html>
  );
}