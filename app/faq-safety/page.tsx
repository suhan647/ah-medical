"use client";

import { useLanguage } from '@/hooks/useLanguage';

export default function FAQSafety() {
  const { language } = useLanguage();

  const faq = [
    {
      q: language.code === 'ar' ? 'هل المستشفيات معتمدة؟' : 'Are hospitals accredited?',
      a: language.code === 'ar' ? 'نعم، شركاؤنا معتمدون من JCI/NABH' : 'Yes, our partners are JCI/NABH accredited'
    },
    {
      q: language.code === 'ar' ? 'ماذا عن مكافحة العدوى؟' : 'What about infection control?',
      a: language.code === 'ar' ? 'إجراءات صارمة وفق المعايير العالمية' : 'Strict procedures aligned with international standards'
    },
    {
      q: language.code === 'ar' ? 'هل يوجد تأمين؟' : 'Is insurance available?',
      a: language.code === 'ar' ? 'يمكننا المساعدة في التوثيقات وتسوية المطالبات' : 'We help with documentation and claim settlement'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'الأسئلة والسلامة' : 'FAQ & Safety'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'إجابات حول الاعتماد والسلامة والتأمين' : 'Answers on accreditation, safety, and insurance'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          {faq.map((f, i) => (
            <div key={i} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">{f.q}</h2>
              <p className="text-gray-600 mt-1">{f.a}</p>
            </div>
          ))}
          <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700">
            {language.code === 'ar' ? 'اسألنا عبر واتساب' : 'Ask Us on WhatsApp'}
          </a>
        </div>
      </section>
    </div>
  );
}



