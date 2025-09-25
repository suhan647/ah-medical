"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { services } from '@/lib/content';
import { CheckCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';
import ServiceGallery from '@/components/ServiceGallery';

export default function Services() {
  const { language } = useLanguage();
  const hero = useInView<HTMLDivElement>();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div ref={hero.ref} className={`max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8 transition-all duration-700 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {language.code === 'ar' 
              ? 'مجموعة شاملة من الخدمات الطبية والسياحية مع أعلى معايير الجودة والرعاية'
              : 'A comprehensive suite of medical and tourism services with top quality care'
            }
          </p>
          <a
            href="https://wa.me/7204832004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {language.code === 'ar' ? 'أرسل تقاريرك عبر واتساب' : 'Send Reports on WhatsApp'}
          </a>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGallery />
        </div>
      </section>

      {/* Service Details - Rich Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              {language.code === 'ar' ? 'تفاصيل خدماتنا' : 'Explore Our Services in Depth'}
            </h2>
            <p className="text-gray-600 md:text-lg">
              {language.code === 'ar' ? 'نظرة شاملة على المميزات، التفاصيل، وما يميز كل خدمة' : 'A comprehensive look at features, details, and what makes each service unique.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {services.map((s) => (
              <div key={`details-${s.id}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-52 md:h-60 bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={(s as any).image || `/placeholders/service-${s.id}.jpg`} alt={s.title[language.code]} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xl">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{s.title[language.code]}</h3>
                      <p className="text-gray-600 text-sm">{s.description[language.code]}</p>
                    </div>
                  </div>

                  {(s as any).highlights && (
                    <div className="flex flex-wrap gap-2">
                      {(s as any).highlights[language.code].map((h: string) => (
                        <span key={`${s.id}-tag-${h}`} className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs border border-teal-100">{h}</span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2">
                    {s.features[language.code].map((f) => (
                      <li key={`${s.id}-f-${f}`} className="text-sm text-gray-800 flex items-center space-x-2 rtl:space-x-reverse">
                        <CheckCircle size={16} className="text-teal-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/7204832004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-full justify-center bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-semibold"
                  >
                    {(s as any).ctaLabel ? (s as any).ctaLabel[language.code] : (language.code === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section (polished) */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3">
              {language.code === 'ar' ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <p className="text-gray-600 md:text-lg">
              {language.code === 'ar' 
                ? 'عملية بسيطة وواضحة من أول تواصل حتى المتابعة بعد العلاج'
                : 'Simple and clear process from first contact to post-care follow up'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((step) => (
              <div key={step} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="w-14 h-14 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold">{step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {step === 1 && (language.code === 'ar' ? 'التواصل الأولي' : 'Initial Contact')}
                  {step === 2 && (language.code === 'ar' ? 'تقييم الحالة' : 'Case Assessment')}
                  {step === 3 && (language.code === 'ar' ? 'التخطيط والتنسيق' : 'Planning & Coordination')}
                  {step === 4 && (language.code === 'ar' ? 'المرافقة والدعم' : 'Accompaniment & Support')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step === 1 && (language.code === 'ar' ? 'تواصل معنا عبر واتساب وأخبرنا عن حالتك' : 'Contact us via WhatsApp and tell us about your condition')}
                  {step === 2 && (language.code === 'ar' ? 'نقيم حالتك ونحدد أفضل طبيب ومستشفى' : 'We assess your condition and identify the best doctor and hospital')}
                  {step === 3 && (language.code === 'ar' ? 'ننسق المواعيد والإقامة والنقل' : 'We coordinate appointments, accommodation and transport')}
                  {step === 4 && (language.code === 'ar' ? 'نرافقك في جميع المراحل مع الترجمة' : 'We accompany you through all stages with translation')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language.code === 'ar' ? 'جاهز للبدء؟' : 'Ready to Start?'}
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            {language.code === 'ar' 
              ? 'احصل على استشارة مجانية اليوم وابدأ رحلتك العلاجية معنا'
              : 'Get free consultation today and start your medical journey with us'
            }
          </p>
          <button
            onClick={() => window.open('https://wa.me/7204832004', '_blank')}
            className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            {language.code === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </button>
        </div>
      </section>
    </div>
  );
}