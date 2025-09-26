import { services } from '@/lib/content';
import { CircleCheck as CheckCircle } from 'lucide-react';
import ServiceGallery from '@/components/ServiceGallery';
import WhatsAppCTA from '@/components/WhatsAppCTA';

interface Props {
  params: { lang: string };
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export default function Services({ params }: Props) {
  const lang = params.lang as 'ar' | 'en';

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {lang === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            {lang === 'ar' 
              ? 'مجموعة شاملة من الخدمات الطبية والسياحية مع أعلى معايير الجودة والرعاية'
              : 'A comprehensive suite of medical and tourism services with top quality care'
            }
          </p>
          <a
            href="https://wa.me/94814 92052"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            {lang === 'ar' ? 'أرسل تقاريرك عبر واتساب' : 'Send Reports on WhatsApp'}
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
              {lang === 'ar' ? 'تفاصيل خدماتنا' : 'Explore Our Services in Depth'}
            </h2>
            <p className="text-gray-600 md:text-lg">
              {lang === 'ar' ? 'نظرة شاملة على المميزات، التفاصيل، وما يميز كل خدمة' : 'A comprehensive look at features, details, and what makes each service unique.'}
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 items-stretch">
            {services.map((s) => (
              <div key={`details-${s.id}`} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col h-full">
                <div className="relative w-full h-52 md:h-60 bg-gray-50">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={(s as any).image || `/placeholders/service-${s.id}.jpg`} 
                    alt={s.title[lang]} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-10 h-10 rounded-xl bg-teal-600 text-white flex items-center justify-center text-xl">
                      {s.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{s.title[lang]}</h3>
                      <p className="text-gray-600 text-sm">{s.description[lang]}</p>
                    </div>
                  </div>

                  {(s as any).highlights && (
                    <div className="flex flex-wrap gap-2">
                      {(s as any).highlights[lang].map((h: string) => (
                        <span key={`${s.id}-tag-${h}`} className="px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 text-xs border border-teal-100">{h}</span>
                      ))}
                    </div>
                  )}

                  <ul className="space-y-2">
                    {s.features[lang].map((f) => (
                      <li key={`${s.id}-f-${f}`} className="text-sm text-gray-800 flex items-center space-x-2 rtl:space-x-reverse">
                        <CheckCircle size={16} className="text-teal-600" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="https://wa.me/94814 92052"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-full justify-center bg-teal-600 hover:bg-teal-700 text-white py-2.5 rounded-lg font-semibold"
                  >
                    {(s as any).ctaLabel ? (s as any).ctaLabel[lang] : (lang === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp')}
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
              {lang === 'ar' ? 'كيف نعمل' : 'How We Work'}
            </h2>
            <p className="text-gray-600 md:text-lg">
              {lang === 'ar' 
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
                  {step === 1 && (lang === 'ar' ? 'التواصل الأولي' : 'Initial Contact')}
                  {step === 2 && (lang === 'ar' ? 'تقييم الحالة' : 'Case Assessment')}
                  {step === 3 && (lang === 'ar' ? 'التخطيط والتنسيق' : 'Planning & Coordination')}
                  {step === 4 && (lang === 'ar' ? 'المرافقة والدعم' : 'Accompaniment & Support')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step === 1 && (lang === 'ar' ? 'تواصل معنا عبر واتساب وأخبرنا عن حالتك' : 'Contact us via WhatsApp and tell us about your condition')}
                  {step === 2 && (lang === 'ar' ? 'نقيم حالتك ونحدد أفضل طبيب ومستشفى' : 'We assess your condition and identify the best doctor and hospital')}
                  {step === 3 && (lang === 'ar' ? 'ننسق المواعيد والإقامة والنقل' : 'We coordinate appointments, accommodation and transport')}
                  {step === 4 && (lang === 'ar' ? 'نرافقك في جميع المراحل مع الترجمة' : 'We accompany you through all stages with translation')}
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
            {lang === 'ar' ? 'جاهز للبدء؟' : 'Ready to Start?'}
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            {lang === 'ar' 
              ? 'احصل على استشارة مجانية اليوم وابدأ رحلتك العلاجية معنا'
              : 'Get free consultation today and start your medical journey with us'
            }
          </p>
          <WhatsAppCTA lang={lang} />
        </div>
      </section>
    </div>
  );
}