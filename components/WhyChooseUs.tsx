"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { useInView } from '@/hooks/useInView';
import { CheckCircle, Award, Shield, Heart, DollarSign, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const whyChooseContent = content.whyChooseUs[language.code];
  const section = useInView<HTMLDivElement>();

  const iconMap = {
    0: <Shield size={32} className="text-blue-600" />,
    1: <Award size={32} className="text-blue-600" />,
    2: <Heart size={32} className="text-blue-600" />,
    3: <DollarSign size={32} className="text-blue-600" />,
    4: <CheckCircle size={32} className="text-blue-600" />,
    5: <Clock size={32} className="text-blue-600" />,
  };

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div ref={section.ref} className={`text-center mb-16 transition-all duration-700 ${section.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Award size={20} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">
              {language.code === 'ar' ? 'لماذا نحن الأفضل' : 'Why We\'re The Best'}
            </span>
          </div>
          <h2 className="section-title text-gray-900 mb-6">
            {whyChooseContent.title}
          </h2>
          <p className="body-large text-gray-600 max-w-4xl mx-auto">
            {whyChooseContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseContent.reasons.map((reason, index) => (
            <div
              key={index}
              className={`professional-card p-8 text-center h-full transition-all duration-700 delay-${index * 100} group`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                {iconMap[index as keyof typeof iconMap]}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
              
              {/* Additional trust indicator for specific cards */}
              {index === 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center space-x-2 rtl:space-x-reverse text-sm text-blue-600 font-medium">
                    <CheckCircle size={16} />
                    <span>{language.code === 'ar' ? 'معتمد دولياً' : 'Internationally Certified'}</span>
                  </div>
                </div>
              )}
              
              {index === 3 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-2xl font-bold text-green-600 mb-1">70%</div>
                  <div className="text-sm text-gray-600">
                    {language.code === 'ar' ? 'توفير في التكاليف' : 'Cost Savings'}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Enhanced CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-3xl p-8 md:p-12 shadow-lg">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {language.code === 'ar' ? 'جاهز لبدء رحلتك العلاجية؟' : 'Ready to Start Your Medical Journey?'}
            </h3>
            <p className="body-large text-gray-600 mb-8 max-w-2xl mx-auto">
              {language.code === 'ar' 
                ? 'انضم إلى أكثر من 1000 مريض راض واحصل على أفضل رعاية طبية في بنغالور'
                : 'Join over 1000 satisfied patients and get the best medical care in Bangalore'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                className="cta-primary"
              >
                {language.code === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
              </button>
              <button
                onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                className="cta-secondary"
              >
                {language.code === 'ar' ? 'احصل على عرض سعر' : 'Get Free Quote'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;