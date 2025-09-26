"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Get language from localStorage
    const storedLang = localStorage.getItem('language');
    
    // Determine preferred language
    let preferredLang = 'ar'; // Always default to Arabic for first-time visitors
    
    // Only use English if user has explicitly saved it in localStorage
    if (storedLang === 'en') {
      preferredLang = 'en';
    }
    // For first-time visitors (no storedLang), always use Arabic
    // Ignore browser language preferences to ensure Arabic default
    
    // Redirect to the appropriate language route
    router.replace(`/${preferredLang}`);
  }, [router]);

  // Show loading while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading...</p>
        </div>
    </div>
  );
}