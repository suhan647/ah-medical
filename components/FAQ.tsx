"use client";

import { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { ChevronDown, MessageCircle, HelpCircle, Phone, Clock, Shield } from 'lucide-react';

const FAQ = () => {
  const { language } = useLanguage();
  const faqContent = content.faq[language.code];
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First question open by default

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="max-w-6xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-full mb-6 shadow-md">
            <HelpCircle size={20} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">
              {language.code === 'ar' ? 'أسئلة شائعة' : 'Common Questions'}
            </span>
          </div>
          <h2 className="section-title text-gray-900 mb-6">
            {faqContent.title}
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            {faqContent.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {faqContent.questions.map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus-ring group"
                  >
                    <h3 className="text-lg font-bold text-gray-900 pr-4 rtl:pl-4 group-hover:text-blue-600 transition-colors">
                      {item.question}
                    </h3>
                    <ChevronDown
                      size={24}
                      className={`text-gray-500 transition-all duration-300 flex-shrink-0 group-hover:text-blue-600 ${
                        openIndex === index ? 'rotate-180 text-blue-600' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 md:px-8 pb-6 animate-fade-in-up">
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
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            {/* Quick Contact */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {language.code === 'ar' ? 'لديك سؤال آخر؟' : 'Have Another Question?'}
                </h3>
                <p className="text-gray-600 text-sm">
                  {language.code === 'ar' 
                    ? 'فريقنا متاح على مدار الساعة للإجابة على جميع استفساراتك'
                    : 'Our team is available 24/7 to answer all your questions'
                  }
                </p>
              </div>
              
              <div className="space-y-3">
                <button
                  onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                  className="w-full whatsapp-button flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <MessageCircle size={20} />
                  <span>{language.code === 'ar' ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}</span>
                </button>
                
                <button
                  onClick={() => window.open('tel:+917204832004', '_blank')}
                  className="w-full cta-secondary flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <Phone size={20} />
                  <span>{language.code === 'ar' ? 'اتصل بنا' : 'Call Us'}</span>
                </button>
              </div>
            </div>

            {/* Support Hours */}
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center space-x-3 rtl:space-x-reverse mb-4">
                <Clock size={24} className="text-blue-600" />
                <h4 className="text-lg font-bold text-gray-900">
                  {language.code === 'ar' ? 'ساعات الدعم' : 'Support Hours'}
                </h4>
              </div>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between">
                  <span>{language.code === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                  <span className="font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language.code === 'ar' ? 'الجمعة' : 'Friday'}</span>
                  <span className="font-medium">9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{language.code === 'ar' ? 'السبت' : 'Saturday'}</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="mt-4 pt-4 border-t border-blue-200">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-blue-700 font-medium">
                    <Shield size={16} />
                    <span className="text-xs">
                      {language.code === 'ar' ? 'واتساب متاح 24/7 للحالات الطارئة' : 'WhatsApp available 24/7 for emergencies'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">
                {language.code === 'ar' ? 'لماذا تثق بنا؟' : 'Why Trust Us?'}
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield size={16} className="text-green-600" />
                  </div>
                  <span className="text-gray-700">
                    {language.code === 'ar' ? '10+ سنوات خبرة' : '10+ Years Experience'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle size={16} className="text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    {language.code === 'ar' ? '1000+ مريض راض' : '1000+ Happy Patients'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <HelpCircle size={16} className="text-yellow-600" />
                  </div>
                  <span className="text-gray-700">
                    {language.code === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;