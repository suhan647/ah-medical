"use client";

import Hero from '@/components/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import FAQ from '@/components/FAQ';
import { treatments } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';
import { ArrowRight, Star, CircleCheck as CheckCircle, Award, Shield, Users, Clock, MessageCircle, Calendar } from 'lucide-react';

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <Hero />
      <WhyChooseUs />
      
      {/* Featured Treatments Section */}
      <section className="section-padding bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-full mb-6 shadow-md">
              <Award size={20} className="text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">
                {language.code === 'ar' ? 'علاجات متخصصة' : 'Specialized Treatments'}
              </span>
            </div>
            <h2 className="section-title text-gray-900 mb-6">
              {language.code === 'ar' ? 'العلاجات الطبية المتقدمة' : 'Advanced Medical Treatments'}
            </h2>
            <p className="body-large text-gray-600 max-w-4xl mx-auto">
              {language.code === 'ar' 
                ? 'نقدم أحدث العلاجات الطبية مع أفضل الأطباء المتخصصين في مستشفيات معتمدة دولياً. جودة عالمية بأسعار تنافسية'
                : 'We offer the latest medical treatments with top specialists in internationally accredited hospitals. World-class quality at competitive prices'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {treatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/treatments/${treatment.slug}`}
                className="group professional-card p-8 text-center h-full flex flex-col"
              >
                <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                  <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {treatment.icon}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {treatment.title[language.code]}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                  {treatment.description[language.code]}
                </p>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2 rtl:mr-2">(4.9)</span>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                    <CheckCircle size={14} className="text-green-500" />
                    <span>{language.code === 'ar' ? 'أطباء معتمدون' : 'Certified Doctors'}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                    <Shield size={14} className="text-blue-500" />
                    <span>{language.code === 'ar' ? 'مستشفيات JCI' : 'JCI Hospitals'}</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-center space-x-2 rtl:space-x-reverse text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">
                  <span>{language.code === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                  <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/treatments"
              className="cta-primary inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span>{language.code === 'ar' ? 'عرض جميع العلاجات' : 'View All Treatments'}</span>
              <ArrowRight size={20} className="rtl:rotate-180" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="max-w-6xl mx-auto container-padding">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-50 px-4 py-2 rounded-full mb-6">
              <Users size={20} className="text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm">
                {language.code === 'ar' ? 'عملية بسيطة' : 'Simple Process'}
              </span>
            </div>
            <h2 className="section-title text-gray-900 mb-6">
              {language.code === 'ar' ? 'كيف نعمل معك' : 'How We Work With You'}
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              {language.code === 'ar' 
                ? 'عملية واضحة ومبسطة من أول تواصل حتى المتابعة بعد العلاج'
                : 'Clear and simplified process from first contact to post-treatment follow-up'
              }
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: <MessageCircle size={32} className="text-blue-600" />,
                title: language.code === 'ar' ? 'التواصل الأولي' : 'Initial Contact',
                description: language.code === 'ar' 
                  ? 'تواصل معنا عبر واتساب وأرسل تقاريرك الطبية'
                  : 'Contact us via WhatsApp and send your medical reports'
              },
              {
                step: 2,
                icon: <Users size={32} className="text-blue-600" />,
                title: language.code === 'ar' ? 'تقييم الحالة' : 'Case Assessment',
                description: language.code === 'ar' 
                  ? 'نقيم حالتك ونحدد أفضل طبيب ومستشفى'
                  : 'We assess your condition and identify the best doctor and hospital'
              },
              {
                step: 3,
                icon: <Calendar size={32} className="text-blue-600" />,
                title: language.code === 'ar' ? 'التخطيط والتنسيق' : 'Planning & Coordination',
                description: language.code === 'ar' 
                  ? 'ننسق المواعيد والإقامة والنقل'
                  : 'We coordinate appointments, accommodation and transport'
              },
              {
                step: 4,
                icon: <Shield size={32} className="text-blue-600" />,
                title: language.code === 'ar' ? 'المرافقة والدعم' : 'Accompaniment & Support',
                description: language.code === 'ar' 
                  ? 'نرافقك في جميع المراحل مع الترجمة'
                  : 'We accompany you through all stages with translation'
              }
            ].map((item) => (
              <div key={item.step} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-blue-100 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <Partners />
      <FAQ />

      {/* Enhanced CTA Section */}
      <section className="section-padding professional-gradient">
        <div className="max-w-5xl mx-auto text-center container-padding">
          <div className="mb-8">
            <h2 className="section-title text-white mb-6">
              {language.code === 'ar' ? 'ابدأ رحلتك العلاجية اليوم' : 'Start Your Medical Journey Today'}
            </h2>
            <p className="body-large text-blue-100 max-w-3xl mx-auto">
              {language.code === 'ar' 
                ? 'احصل على استشارة مجانية وخطة علاجية مخصصة مع أفضل الأطباء في بنغالور. نضمن لك أعلى مستوى من الرعاية والاهتمام'
                : 'Get free consultation and personalized treatment plan with Bangalore\'s best doctors. We guarantee you the highest level of care and attention'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <CheckCircle size={32} className="text-white mx-auto mb-3" />
              <div className="text-white font-semibold">
                {language.code === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Shield size={32} className="text-white mx-auto mb-3" />
              <div className="text-white font-semibold">
                {language.code === 'ar' ? 'مستشفيات معتمدة' : 'Accredited Hospitals'}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <Clock size={32} className="text-white mx-auto mb-3" />
              <div className="text-white font-semibold">
                {language.code === 'ar' ? 'دعم 24/7' : '24/7 Support'}
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <span>{language.code === 'ar' ? 'احصل على عرض سعر مجاني' : 'Get Free Quote'}</span>
              <ArrowRight size={20} className="rtl:rotate-180" />
            </button>
            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1"
            >
              {language.code === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}