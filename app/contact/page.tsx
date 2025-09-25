"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { language } = useLanguage();
  const contactContent = content.contact[language.code];

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/7204832004', '_blank');
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {contactContent.title}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {contactContent.subtitle}
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
          >
            <MessageCircle size={24} />
            <span>{contactContent.whatsapp}</span>
          </button>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {language.code === 'ar' ? 'معلومات الاتصال' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language.code === 'ar' ? 'الموقع' : 'Location'}
                    </h3>
                    <p className="text-gray-600">
                      {contactContent.location}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {language.code === 'ar' 
                        ? 'نخدم جميع أنحاء بنغالور وكارناتاكا'
                        : 'Serving all of Bangalore and Karnataka'
                      }
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language.code === 'ar' ? 'رقم الهاتف' : 'Phone Number'}
                    </h3>
                    <p className="text-gray-600">+91 72048 32004</p>
                    <p className="text-gray-600 text-sm mt-1">
                      {language.code === 'ar' ? 'متاح 24/7 عبر واتساب' : 'Available 24/7 via WhatsApp'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language.code === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                    </h3>
                    <p className="text-gray-600">{contactContent.email}</p>
                    <p className="text-gray-600 text-sm mt-1">
                      {language.code === 'ar' ? 'نرد خلال 24 ساعة' : 'Response within 24 hours'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="mt-12 p-6 bg-teal-50 rounded-2xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {language.code === 'ar' ? 'ساعات العمل' : 'Working Hours'}
                </h3>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{language.code === 'ar' ? 'الأحد - الخميس' : 'Sunday - Thursday'}</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language.code === 'ar' ? 'الجمعة' : 'Friday'}</span>
                    <span>9:00 AM - 12:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language.code === 'ar' ? 'السبت' : 'Saturday'}</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="mt-4 pt-4 border-t border-teal-200">
                    <p className="text-sm text-teal-700 font-medium">
                      {language.code === 'ar' ? 'واتساب متاح 24/7 للحالات الطارئة' : 'WhatsApp available 24/7 for emergencies'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {language.code === 'ar' ? 'موقعنا' : 'Our Location'}
              </h2>
              <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <MapPin size={48} className="mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">
                    {language.code === 'ar' ? 'خريطة بنغالور' : 'Bangalore Map'}
                  </h3>
                  <p>
                    {language.code === 'ar' 
                      ? 'نخدم جميع أنحاء مدينة بنغالور'
                      : 'Serving all areas of Bangalore city'
                    }
                  </p>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-8 p-6 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl text-white">
                <h3 className="text-xl font-semibold mb-4">
                  {language.code === 'ar' ? 'بحاجة لمساعدة فورية؟' : 'Need Immediate Help?'}
                </h3>
                <p className="mb-4 text-teal-100">
                  {language.code === 'ar' 
                    ? 'تواصل معنا عبر واتساب للحصول على رد فوري واستشارة مجانية'
                    : 'Contact us via WhatsApp for immediate response and free consultation'
                  }
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full bg-white text-teal-600 hover:bg-gray-50 py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 rtl:space-x-reverse"
                >
                  <MessageCircle size={20} />
                  <span>{language.code === 'ar' ? 'ابدأ المحادثة' : 'Start Conversation'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'أسئلة شائعة' : 'Frequently Asked Questions'}
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language.code === 'ar' ? 'هل الاستشارة مجانية؟' : 'Is consultation free?'}
              </h3>
              <p className="text-gray-600">
                {language.code === 'ar' 
                  ? 'نعم، الاستشارة الأولية مجانية تماماً. نقدم تقييماً كاملاً لحالتك ونساعدك في اختيار أفضل خطة علاجية.'
                  : 'Yes, initial consultation is completely free. We provide complete assessment of your condition and help you choose the best treatment plan.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language.code === 'ar' ? 'هل تقدمون خدمات الترجمة؟' : 'Do you provide translation services?'}
              </h3>
              <p className="text-gray-600">
                {language.code === 'ar' 
                  ? 'نعم، نوفر مترجماً طبياً متخصصاً يرافقك في جميع المواعيد الطبية ويشرح لك كافة التفاصيل.'
                  : 'Yes, we provide a specialized medical translator who accompanies you to all medical appointments and explains all details.'
                }
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language.code === 'ar' ? 'كم تستغرق المعالجة؟' : 'How long does treatment take?'}
              </h3>
              <p className="text-gray-600">
                {language.code === 'ar' 
                  ? 'يختلف وقت العلاج حسب نوع الحالة. نقدم تقديراً دقيقاً للوقت المطلوب بعد تقييم حالتك.'
                  : 'Treatment duration varies depending on the condition. We provide accurate time estimate after evaluating your condition.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}