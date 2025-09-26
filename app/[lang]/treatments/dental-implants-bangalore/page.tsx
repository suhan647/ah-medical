"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { CircleCheck as CheckCircle, Award, Clock, DollarSign, Star } from 'lucide-react';

export default function DentalImplants() {
  const { language } = useLanguage();

  const features = {
    ar: [
      'تقنيات زراعة متطورة',
      'مواد عالية الجودة',
      'أطباء معتمدون دولياً',
      'ضمان طويل المدى',
      'رعاية شاملة'
    ],
    en: [
      'Advanced implant technology',
      'High-quality materials',
      'Internationally certified doctors',
      'Long-term warranty',
      'Comprehensive care'
    ]
  };

  const benefits = {
    ar: [
      'حل دائم للأسنان المفقودة',
      'مظهر طبيعي وجميل',
      'تحسين وظائف المضغ',
      'الحفاظ على عظام الفك',
      'ثقة بالنفس محسّنة'
    ],
    en: [
      'Permanent solution for missing teeth',
      'Natural and beautiful appearance',
      'Improved chewing function',
      'Preserve jawbone structure',
      'Enhanced self-confidence'
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                {language.code === 'ar' 
                  ? 'زراعة الأسنان في بنغالور' 
                  : 'Dental Implants in Bangalore'
                }
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {language.code === 'ar' 
                  ? 'احصل على أفضل خدمات زراعة الأسنان في بنغالور مع أحدث التقنيات والمواد عالية الجودة. فريق من الأطباء المتخصصين يضمن لك نتائج مثالية.'
                  : 'Get the best dental implant services in Bangalore with latest technology and high-quality materials. Our team of specialist doctors ensures perfect results.'
                }
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Award className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium">
                    {language.code === 'ar' ? 'معتمد دولياً' : 'Internationally Certified'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-lg shadow-sm">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium">
                    {language.code === 'ar' ? '1-3 أيام' : '1-3 Days'}
                  </span>
                </div>
                <div className="flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-lg shadow-sm">
                  <DollarSign className="w-5 h-5 text-teal-600" />
                  <span className="text-sm font-medium">
                    {language.code === 'ar' ? 'أسعار تنافسية' : 'Competitive Prices'}
                  </span>
                </div>
              </div>

              <button
                onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
              >
                {language.code === 'ar' ? 'احجز استشارتك المجانية' : 'Book Free Consultation'}
              </button>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg"
                alt={language.code === 'ar' ? 'زراعة الأسنان في بنغالور' : 'Dental Implant Procedure'}
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute top-4 right-4 bg-white p-3 rounded-lg shadow-lg">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm font-medium ml-2 rtl:mr-2">4.9/5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'مميزات زراعة الأسنان لدينا' : 'Our Dental Implant Features'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features[language.code].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                {language.code === 'ar' ? 'فوائد زراعة الأسنان' : 'Benefits of Dental Implants'}
              </h2>
              
              <div className="space-y-4">
                {benefits[language.code].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-teal-50 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {language.code === 'ar' ? 'نسبة نجاح عالية' : 'High Success Rate'}
                </h3>
                <p className="text-gray-600">
                  {language.code === 'ar' 
                    ? 'نسبة نجاح تزيد عن 98% مع ضمان لمدة 10 سنوات على زراعة الأسنان'
                    : 'Over 98% success rate with 10-year warranty on dental implants'
                  }
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.pexels.com/photos/6529583/pexels-photo-6529583.jpeg"
                alt={language.code === 'ar' ? 'قبل زراعة الأسنان' : 'Before dental implant'}
                className="rounded-2xl shadow-lg"
              />
              <img
                src="https://images.pexels.com/photos/6529584/pexels-photo-6529584.jpeg"
                alt={language.code === 'ar' ? 'بعد زراعة الأسنان' : 'After dental implant'}
                className="rounded-2xl shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'مراحل زراعة الأسنان' : 'Dental Implant Process'}
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: language.code === 'ar' ? 'الفحص والتقييم' : 'Examination & Assessment',
                description: language.code === 'ar' 
                  ? 'فحص شامل وأشعة ثلاثية الأبعاد لتقييم الحالة'
                  : 'Comprehensive examination and 3D X-rays for assessment'
              },
              {
                step: 2,
                title: language.code === 'ar' ? 'التخطيط' : 'Planning',
                description: language.code === 'ar' 
                  ? 'وضع خطة علاجية مخصصة وتحديد نوع الزراعة'
                  : 'Creating personalized treatment plan and implant selection'
              },
              {
                step: 3,
                title: language.code === 'ar' ? 'الزراعة' : 'Implantation',
                description: language.code === 'ar' 
                  ? 'إجراء جراحة الزراعة تحت التخدير الموضعي'
                  : 'Implant surgery under local anesthesia'
              },
              {
                step: 4,
                title: language.code === 'ar' ? 'التركيب' : 'Crown Placement',
                description: language.code === 'ar' 
                  ? 'تركيب التاج النهائي بعد شفاء الزراعة'
                  : 'Final crown placement after implant healing'
              }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            {language.code === 'ar' ? 'الأسعار التنافسية' : 'Competitive Pricing'}
          </h2>
          
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl font-bold text-teal-600 mb-2">
              {language.code === 'ar' ? '₹25,000 - ₹45,000' : '₹25,000 - ₹45,000'}
            </div>
            <p className="text-gray-600 mb-6">
              {language.code === 'ar' ? 'لكل زراعة (شاملة التاج)' : 'Per implant (including crown)'}
            </p>
            
            <div className="text-left space-y-2 mb-8">
              <div className="flex justify-between">
                <span>{language.code === 'ar' ? 'زراعة عادية' : 'Standard Implant'}</span>
                <span>₹25,000 - ₹35,000</span>
              </div>
              <div className="flex justify-between">
                <span>{language.code === 'ar' ? 'زراعة متقدمة' : 'Premium Implant'}</span>
                <span>₹35,000 - ₹45,000</span>
              </div>
              <div className="flex justify-between font-semibold text-teal-600">
                <span>{language.code === 'ar' ? 'وفر حتى' : 'Save up to'}</span>
                <span>70%</span>
              </div>
            </div>

            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              {language.code === 'ar' ? 'احصل على عرض سعر مجاني' : 'Get Free Quote'}
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {language.code === 'ar' ? 'احجز موعدك اليوم' : 'Book Your Appointment Today'}
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            {language.code === 'ar' 
              ? 'ابدأ رحلتك نحو ابتسامة مثالية مع أفضل أطباء زراعة الأسنان في بنغالور'
              : 'Start your journey to a perfect smile with Bangalore\'s best dental implant specialists'
            }
          </p>
          <button
            onClick={() => window.open('https://wa.me/7204832004', '_blank')}
            className="bg-white text-teal-600 hover:bg-gray-50 px-8 py-4 rounded-lg font-semibold transition-colors"
          >
            {language.code === 'ar' ? 'تواصل معنا عبر واتساب' : 'Contact us via WhatsApp'}
          </button>
        </div>
      </section>
    </div>
  );
}