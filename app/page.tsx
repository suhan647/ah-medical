"use client";

import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import { treatments } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      
      {/* Treatments Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="section-title text-gray-900 mb-4">
              {language.code === 'ar' ? 'العلاجات المتخصصة' : 'Specialized Treatments'}
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              {language.code === 'ar' 
                ? 'نقدم أحدث العلاجات الطبية مع أفضل الأطباء المتخصصين في مستشفيات معتمدة دولياً'
                : 'We offer the latest medical treatments with top specialists in internationally accredited hospitals'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {treatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.slug}`}
                className="group bg-white rounded-2xl p-6 md:p-7 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 h-full flex flex-col"
              >
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {treatment.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2">
                    {treatment.title[language.code]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {treatment.description[language.code]}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2 rtl:mr-2">(4.9)</span>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-center space-x-2 rtl:space-x-reverse text-teal-600 font-medium">
                    <span>{language.code === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                    <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/treatments"
              className="medical-button inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span>{language.code === 'ar' ? 'عرض جميع العلاجات' : 'View All Treatments'}</span>
              <ArrowRight size={20} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      <Testimonials />
      <Partners />
      <FAQ />

      {/* CTA Section */}
      <section className="py-16 md:py-20 professional-gradient">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-white mb-6">
            {language.code === 'ar' ? 'ابدأ رحلتك العلاجية اليوم' : 'Start Your Medical Journey Today'}
          </h2>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {language.code === 'ar' 
              ? 'احصل على استشارة مجانية وخطة علاجية مخصصة مع أفضل الأطباء في بنغالور'
              : 'Get free consultation and personalized treatment plan with Bangalore\'s best doctors'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 hover:bg-gray-50 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors duration-200 inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span>{language.code === 'ar' ? 'احصل على عرض سعر مجاني' : 'Get Free Quote'}</span>
              <ArrowRight size={20} className="rtl:rotate-180" />
            </Link>
            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="medical-button-outline bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold transition-colors duration-200"
            >
              {language.code === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}