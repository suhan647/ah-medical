import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Check if pathname already has a language prefix
  const pathnameHasLocale = pathname.startsWith('/ar/') || pathname.startsWith('/en/');
  
  if (!pathnameHasLocale) {
    // Get language from Accept-Language header or default to Arabic
    const acceptLanguage = request.headers.get('accept-language') || '';
    const preferredLanguage = acceptLanguage.includes('en') && !acceptLanguage.includes('ar') ? 'en' : 'ar';
    
    // Redirect to localized URL
    return NextResponse.redirect(new URL(`/${preferredLanguage}${pathname}`, request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|robots.txt|sitemap.xml|logos|images|placeholders).*)',
  ],
};