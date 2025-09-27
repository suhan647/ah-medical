"use client";

import Image from 'next/image';
import { useState } from 'react';
import { services } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

type GalleryItem = {
  id: string;
  name: { ar: string; en: string };
  image: string;
  description: { ar: string; en: string };
  features: { ar: string[]; en: string[] };
  highlights?: { ar: string[]; en: string[] };
  ctaLabel?: { ar: string; en: string };
};

const gallery: GalleryItem[] = services.map((s) => ({
  id: s.id,
  name: s.title,
  image: s.image || '/placeholders/service-' + s.id + '.jpg',
  description: s.description,
  features: s.features,
  highlights: s.highlights,
  ctaLabel: s.ctaLabel,
}));

export default function ServiceGallery() {
  const { language } = useLanguage();
  const [openId, setOpenId] = useState<string | null>(null);
  const [broken, setBroken] = useState<Record<string, boolean>>({});

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gallery.map((g) => (
          <button
            key={g.id}
            onClick={() => setOpenId(g.id)}
            className="group relative rounded-2xl overflow-hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-600"
          >
            <div className="relative w-full h-40 md:h-56 lg:h-64 bg-gray-50">
              <Image
                src={broken[g.id] ? '/placeholders/service-' + g.id + '.jpg' : g.image}
                alt={g.name[language.code]}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                onError={() => setBroken((b) => ({ ...b, [g.id]: true }))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-white text-sm md:text-base font-semibold drop-shadow">
                  {g.name[language.code]}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>

      {gallery.map((g) => (
        <Dialog key={`dlg-${g.id}`} open={openId === g.id} onOpenChange={(v) => !v && setOpenId(null)}>
          <DialogContent className="max-w-2xl w-[92vw] p-0 overflow-hidden">
            <div className="relative w-full h-56 md:h-64 bg-white">
              <Image src={g.image} alt={g.name[language.code]} fill className="object-contain" />
            </div>
            <div className="p-6">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{g.name[language.code]}</DialogTitle>
                <DialogDescription className="text-gray-600">
                  {g.description[language.code]}
                </DialogDescription>
              </DialogHeader>
              {g.highlights && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.highlights[language.code].map((h) => (
                    <span key={`${g.id}-hl-${h}`} className="px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-xs md:text-sm border border-teal-100">
                      {h}
                    </span>
                  ))}
                </div>
              )}
              <ul className="mt-5 space-y-2">
                {g.features[language.code].map((f) => (
                  <li key={`${g.id}-${f}`} className="text-sm text-gray-800">• {f}</li>
                ))}
              </ul>
              <div className="mt-5">
                <a
                  href={`https://wa.me/9481492052?text=${encodeURIComponent(language.code === 'ar' ? 'مرحباً! أريد الاستفسار عن الخدمات' : 'Hello! I would like to inquire about services')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full justify-center bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-semibold"
                >
                  {g.ctaLabel ? g.ctaLabel[language.code] : (language.code === 'ar' ? 'استفسر عبر واتساب' : 'Enquire on WhatsApp')}
                </a>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}


