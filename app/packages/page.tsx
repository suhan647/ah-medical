"use client";

import { useLanguage } from '@/hooks/useLanguage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Medical Packages: Treatment + Stay | AH Medical Tourisms',
  description: 'Pre-built packages including treatment, accommodation, airport pickup and translator assistance. Transparent inclusions and exclusions.',
  openGraph: {
    title: 'Medical Tourism Packages',
    description: 'Treatment + accommodation + transport + translator. Transparent pricing.',
    images: ['/og-image.jpg']
  }
};

export default function Packages() {
  const { language } = useLanguage();

  const packages = [
    {
      name: language.code === 'ar' ? 'زراعة الأسنان - باقة 7 أيام' : 'Dental Implants - 7 Days',
      inclusions: language.code === 'ar' ? ['الاستشارة', 'زراعة الأسنان', 'الإقامة', 'مترجم طبي', 'التنقل'] : ['Consultation', 'Implants', 'Accommodation', 'Medical Translator', 'Transport'],
      exclusions: language.code === 'ar' ? ['الأدوية بعد العملية', 'الإقامة الإضافية'] : ['Post-op medication', 'Extra stay']
    },
    {
      name: language.code === 'ar' ? 'علاج البروستاتا - باقة 5 أيام' : 'Prostate Treatment - 5 Days',
      inclusions: language.code === 'ar' ? ['الاستشارة', 'الفحوصات', 'الإقامة', 'مترجم طبي', 'التنقل'] : ['Consultation', 'Diagnostics', 'Accommodation', 'Translator', 'Transport'],
      exclusions: language.code === 'ar' ? ['الإجراءات الاختيارية'] : ['Optional procedures']
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'الباقات الطبية' : 'Packages'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'باقات شاملة العلاج والإقامة والنقل مع مترجم طبي' : 'All-in-one treatment, stay, and transport with a medical translator.'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-stretch">
          {packages.map((p, idx) => (
            <div key={idx} className="border border-gray-100 rounded-2xl p-6 shadow-sm bg-gray-50 hover:bg-white hover:shadow-md transition h-full flex flex-col">
              <h2 className="text-xl font-semibold text-gray-900">{p.name}</h2>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">{language.code === 'ar' ? 'تشمل' : 'Inclusions'}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  {p.inclusions.map((i, k) => (<li key={k}>{i}</li>))}
                </ul>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold text-gray-800">{language.code === 'ar' ? 'لا تشمل' : 'Exclusions'}</h3>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  {p.exclusions.map((e, k) => (<li key={k}>{e}</li>))}
                </ul>
              </div>
              <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                {language.code === 'ar' ? 'استفسر عبر واتساب' : 'Enquire on WhatsApp'}
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



