"use client";

import { useLanguage } from '@/hooks/useLanguage';

export default function TravelStay() {
  const { language } = useLanguage();

  const items = [
    {
      title: language.code === 'ar' ? 'تأشيرة طبية' : 'Medical Visa',
      desc: language.code === 'ar' ? 'إرشاد كامل لطلب الفيزا الطبية والوثائق المطلوبة' : 'Full guidance for medical visa application and required documents'
    },
    {
      title: language.code === 'ar' ? 'استقبال المطار' : 'Airport Pickup',
      desc: language.code === 'ar' ? 'سيارة مع سائق ومترجم عربي لاستقبالك من المطار' : 'Car with driver and Arabic translator picks you up from the airport'
    },
    {
      title: language.code === 'ar' ? 'الإقامة' : 'Accommodation',
      desc: language.code === 'ar' ? 'فنادق وشقق خدمية قريبة من المستشفيات' : 'Hotels and service apartments near hospitals'
    },
    {
      title: language.code === 'ar' ? 'التنقل اليومي' : 'Daily Transport',
      desc: language.code === 'ar' ? 'تنسيق التنقلات للمواعيد الطبية والجولات السياحية' : 'Coordinated transport for appointments and sightseeing'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'السفر والإقامة' : 'Travel & Stay'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'كل ما تحتاجه لرحلة علاجية مريحة' : 'Everything you need for a comfortable medical journey'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">{item.title}</h2>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
            {language.code === 'ar' ? 'خطط رحلتك عبر واتساب' : 'Plan Your Trip on WhatsApp'}
          </a>
        </div>
      </section>
    </div>
  );
}



