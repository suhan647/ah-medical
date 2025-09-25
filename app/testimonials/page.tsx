"use client";

import { useLanguage } from '@/hooks/useLanguage';

export default function Testimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      name: language.code === 'ar' ? 'أحمد – السعودية' : 'Ahmed - Saudi Arabia',
      text: language.code === 'ar' ? 'تجربة رائعة وخدمة ممتازة. شكرًا للفريق والمترجم.' : 'Wonderful experience and excellent service. Thanks to the team and translator.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    },
    {
      name: language.code === 'ar' ? 'مريم – الإمارات' : 'Mariam - UAE',
      text: language.code === 'ar' ? 'تنسيق احترافي وراحة تامة خلال العلاج.' : 'Professional coordination and full comfort during treatment.',
      video: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'الشهادات والدراسات الحالة' : 'Testimonials & Case Studies'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'قصص نجاح من مرضانا' : 'Success stories from our patients'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-stretch">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe className="w-full h-full" src={t.video} title={t.name} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mt-4">{t.name}</h3>
              <p className="text-gray-600">{t.text}</p>
              <div className="mt-auto pt-4">
                <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                  {language.code === 'ar' ? 'شارك قصتك' : 'Share Your Story'}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
            {language.code === 'ar' ? 'أرسل قصتك عبر واتساب' : 'Send Your Story on WhatsApp'}
          </a>
        </div>
      </section>
    </div>
  );
}



