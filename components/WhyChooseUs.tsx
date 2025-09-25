"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { useInView } from '@/hooks/useInView';

const WhyChooseUs = () => {
  const { language } = useLanguage();
  const whyChooseContent = content.whyChooseUs[language.code];
  const section = useInView<HTMLDivElement>();

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={section.ref} className={`text-center mb-12 md:mb-16 transition-all duration-700 ${section.isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="section-title text-gray-900 mb-4">
            {whyChooseContent.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {whyChooseContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {whyChooseContent.reasons.map((reason, index) => (
            <div
              key={index}
              className={`trust-card rounded-2xl p-6 md:p-8 text-center h-full transition-all duration-700 delay-${index * 100}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl mb-4">{reason.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.open('https://wa.me/7204832004', '_blank')}
            className="medical-button"
          >
            {language.code === 'ar' ? 'تواصل معنا الآن' : 'Contact Us Now'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;