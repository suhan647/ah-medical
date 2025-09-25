"use client";

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { ChevronDown, MessageCircle } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();
  const faqContent = content.faq[language.code];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-gray-900 mb-4">
            {faqContent.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            {faqContent.subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqContent.questions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus-ring"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4 rtl:pl-4">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`text-gray-500 transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 md:px-8 pb-6">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-gray-700 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {language.code === 'ar' ? 'لديك سؤال آخر؟' : 'Have Another Question?'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language.code === 'ar' 
                ? 'فريقنا متاح على مدار الساعة للإجابة على جميع استفساراتك'
                : 'Our team is available 24/7 to answer all your questions'
              }
            </p>
            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="medical-button inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <MessageCircle size={20} />
              <span>{language.code === 'ar' ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;