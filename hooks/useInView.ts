"use client";

import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current || typeof window === 'undefined') return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -10% 0px', ...(options || {}) });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return { ref, isInView } as const;
}



