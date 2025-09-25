"use client";

import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import { treatments } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <Hero />
      <ServicesSection />
      
      {/* Treatments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'العلاجات المتخصصة' : 'Specialized Treatments'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language.code === 'ar' 
                ? 'نقدم أحدث العلاجات الطبية مع أفضل الأطباء المتخصصين في الهند'
                : 'We offer the latest medical treatments with India\'s best specialized doctors'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.slug}`}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200"
              >
                <div className="text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                    {treatment.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {treatment.title[language.code]}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {treatment.description[language.code]}
                  </p>
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-teal-600 font-medium">
                    <span>{language.code === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                    <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language.code === 'ar' ? 'لماذا تختار آه للسياحة الطبية؟' : 'Why Choose AH Medical Tourisms?'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language.code === 'ar' ? 'مترجم طبي متخصص' : 'Specialized Medical Translator'}
                    </h3>
                    <p className="text-gray-600">
                      {language.code === 'ar' 
                        ? 'مترجم عربي متخصص يرافقك في جميع المواعيد الطبية ويشرح لك كافة التفاصيل'
                        : 'Arabic translator accompanies you to all medical appointments and explains all details'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language.code === 'ar' ? 'أفضل المستشفيات' : 'Best Hospitals'}
                    </h3>
                    <p className="text-gray-600">
                      {language.code === 'ar' 
                        ? 'شراكات مع أفضل المستشفيات والعيادات في بنغالور مع أحدث المعدات'
                        : 'Partnerships with Bangalore\'s best hospitals and clinics with latest equipment'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language.code === 'ar' ? 'خدمات شاملة' : 'Comprehensive Services'}
                    </h3>
                    <p className="text-gray-600">
                      {language.code === 'ar' 
                        ? 'من الاستقبال في المطار إلى الإقامة والجولات السياحية، نهتم بكل التفاصيل'
                        : 'From airport pickup to accommodation and tours, we handle every detail'
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                alt="Medical consultation"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-teal-600/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language.code === 'ar' ? 'ابدأ رحلتك العلاجية اليوم' : 'Start Your Medical Journey Today'}
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? 'تواصل معنا عبر واتساب للحصول على استشارة مجانية وخطة علاجية مخصصة لحالتك'
              : 'Contact us via WhatsApp for free consultation and personalized treatment plan'
            }
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors duration-200"
          >
            <span>{language.code === 'ar' ? 'احجز استشارتك المجانية' : 'Book Free Consultation'}</span>
            <ArrowRight size={20} className="rtl:rotate-180" />
          </Link>
        </div>
      </section>
    </div>
  );
}