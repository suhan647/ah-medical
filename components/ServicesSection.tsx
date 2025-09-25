"use client";

import { services } from '@/lib/content';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesSection = () => {
  const { language } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'خدماتنا المتميزة' : 'Our Premium Services'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language.code === 'ar' 
              ? 'نقدم مجموعة شاملة من الخدمات الطبية والسياحية مع أفضل مستوى من الرعاية والاهتمام'
              : 'We offer comprehensive medical and tourism services with the highest level of care and attention'
            }
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group bg-gray-50 hover:bg-white rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-teal-100 h-full flex flex-col"
            >
              <div className="text-center mb-6">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">
                  {service.title[language.code]}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description[language.code]}
                </p>
              </div>

              <ul className="space-y-2">
                {service.features[language.code].map((feature) => (
                  <li key={`${service.id}-${feature}`} className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-700">
                    <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-gray-200">
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors font-medium">
                  {language.code === 'ar' ? 'اعرف المزيد' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;