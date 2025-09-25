"use client";

import { useLanguage } from '@/hooks/useLanguage';

export default function HowItWorks() {
  const { language } = useLanguage();

  const steps = [
    {
      title: language.code === 'ar' ? 'شارك التقارير عبر واتساب' : 'Share Reports on WhatsApp',
      desc: language.code === 'ar' ? 'أرسل تقاريرك الطبية إلى فريقنا لتقييم الحالة' : 'Send your medical reports to our team for assessment'
    },
    {
      title: language.code === 'ar' ? 'التقييم وخطة العلاج' : 'Assessment & Plan',
      desc: language.code === 'ar' ? 'نقترح أفضل الأطباء والمستشفيات وخطة علاج مناسبة' : 'We propose best doctors, hospitals, and a suitable treatment plan'
    },
    {
      title: language.code === 'ar' ? 'التأشيرة والسفر والإقامة' : 'Visa, Travel & Stay',
      desc: language.code === 'ar' ? 'نساعدك في الفيزا والحجوزات والإقامة مع مترجم' : 'We assist with visa, bookings, and stay with translator'
    },
    {
      title: language.code === 'ar' ? 'العلاج والمتابعة' : 'Treatment & Follow-up',
      desc: language.code === 'ar' ? 'نرافقك طوال العلاج والمتابعة بعده' : 'We accompany you during treatment and post-care follow-up'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'كيف نعمل' : 'How It Works'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'خطوات بسيطة وواضحة من أول تواصل حتى العودة بسلام' : 'Simple steps from first contact to safe return home'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {steps.map((s, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4 rtl:space-x-reverse">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{s.title}</h2>
                  <p className="text-gray-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
            {language.code === 'ar' ? 'ابدأ الآن عبر واتساب' : 'Start Now on WhatsApp'}
          </a>
        </div>
      </section>
    </div>
  );
}



