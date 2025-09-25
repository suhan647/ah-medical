"use client";

import { useLanguage } from '@/hooks/useLanguage';
import Image from 'next/image';
import { useInView } from '@/hooks/useInView';
import { content } from '@/lib/content';
import { Award, Users, Globe, Clock } from 'lucide-react';

export default function About() {
  const { language } = useLanguage();
  const aboutContent = content.about[language.code];
  const hero = useInView<HTMLDivElement>();

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div ref={hero.ref} className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-700 ${hero.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {aboutContent.title}
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {aboutContent.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-teal-600 mb-1">10+</div>
                  <div className="text-sm text-gray-600">{aboutContent.experience}</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-teal-600 mb-1">1000+</div>
                  <div className="text-sm text-gray-600">{aboutContent.patients}</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative w-full h-[360px] md:h-[460px]">
                <Image
                  src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg"
                  alt="Abdul Quddus - Medical Coordinator"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white p-4 rounded-xl">
                <div className="text-center">
                  <div className="text-lg font-bold">3</div>
                  <div className="text-sm">{aboutContent.languages}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Company Overview */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'عن الشركة' : 'About the Company'}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
              {language.code === 'ar'
                ? 'آه للسياحة الطبية هي شركة متخصصة في تنسيق رحلات العلاج في بنغالور، الهند. نقدم حلولاً شاملة تشمل تقييم التقارير الطبية، اختيار المستشفى والطبيب المناسب، التأشيرة، الاستقبال في المطار، الإقامة، الترجمة الطبية، والمتابعة بعد العلاج. هدفنا هو تقديم تجربة علاجية آمنة ومريحة بمعايير جودة عالمية.'
                : 'AH Medical Tourism specializes in coordinating medical journeys in Bangalore, India. We provide end-to-end solutions including report assessment, selecting the right hospital and doctor, visa assistance, airport pickup, accommodation, medical translation, and post-treatment follow-up. Our goal is a safe, comfortable experience with global quality standards.'}
            </p>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'تخصصاتنا' : 'Our Specialties'}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.specialties.map((specialty, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {index === 0 && <Globe className="w-8 h-8 text-white" />}
                  {index === 1 && <Award className="w-8 h-8 text-white" />}
                  {index === 2 && <Users className="w-8 h-8 text-white" />}
                  {index === 3 && <Clock className="w-8 h-8 text-white" />}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {specialty}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'رحلتنا' : 'Our Journey'}
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language.code === 'ar' ? 'بداية الرحلة - 2014' : 'Journey Begins - 2014'}
                </h3>
                <p className="text-gray-600">
                  {language.code === 'ar' 
                    ? 'بدأت رحلتنا في مساعدة المرضى العرب للحصول على أفضل علاج طبي في بنغالور'
                    : 'Started our journey helping Arabic patients get the best medical treatment in Bangalore'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language.code === 'ar' ? 'توسع الخدمات - 2018' : 'Service Expansion - 2018'}
                </h3>
                <p className="text-gray-600">
                  {language.code === 'ar' 
                    ? 'إضافة خدمات السياحة والإقامة والنقل لتقديم تجربة شاملة'
                    : 'Added tourism, accommodation and transport services for comprehensive experience'
                  }
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {language.code === 'ar' ? 'النجاح المستمر - اليوم' : 'Continued Success - Today'}
                </h3>
                <p className="text-gray-600">
                  {language.code === 'ar' 
                    ? 'أكثر من 1000 مريض راض وشراكات مع أفضل المستشفيات في بنغالور'
                    : 'Over 1000 satisfied patients and partnerships with Bangalore\'s top hospitals'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language.code === 'ar' ? 'جاهزون لمساعدتك' : 'Ready to Help You'}
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            {language.code === 'ar' 
              ? 'تواصل معنا اليوم لبدء رحلتك العلاجية مع خبرة أكثر من 10 سنوات'
              : 'Contact us today to start your medical journey with over 10 years of experience'
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