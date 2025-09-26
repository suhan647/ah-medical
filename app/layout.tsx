import './globals.css';
import type { Metadata } from 'next';
import { Cairo, Inter } from 'next/font/google';
import { generateMetadata as generateRootMetadata } from '@/lib/seo-metadata';
import { generateStructuredData } from '@/lib/structured-data';

const cairo = Cairo({ subsets: ['arabic', 'latin'], variable: '--font-cairo' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata(): Promise<Metadata> {
  return generateRootMetadata('ar');
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${cairo.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}