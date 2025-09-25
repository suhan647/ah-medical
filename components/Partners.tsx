"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { Award, MapPin, Users } from 'lucide-react';
import Image from 'next/image';

const Partners = () => {
  const { language } = useLanguage();
  const partnersContent = content.partners[language.code];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-gray-900 mb-4">
            {partnersContent.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {partnersContent.subtitle}
          </p>
        </div>

        {/* Hospitals */}
        <div className="mb-16">
          <h3 className="subsection-title text-gray-900 mb-8 text-center">
            {language.code === 'ar' ? 'المستشفيات الشريكة' : 'Partner Hospitals'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {partnersContent.hospitals.map((hospital, index) => (
              <div
                key={index}
                className="trust-card rounded-2xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-48 md:h-56">
                  <Image
                    src={hospital.image}
                    alt={hospital.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Award size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        {hospital.accreditation}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h4 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">
                    {hospital.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {hospital.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                    className="mt-auto bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium transition-colors"
                  >
                    {language.code === 'ar' ? 'استفسر الآن' : 'Enquire Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors */}
        <div>
          <h3 className="subsection-title text-gray-900 mb-8 text-center">
            {language.code === 'ar' ? 'الأطباء المتخصصون' : 'Specialist Doctors'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
            {partnersContent.doctors.map((doctor, index) => (
              <div
                key={index}
                className="trust-card rounded-2xl p-6 md:p-8 flex items-center space-x-4 rtl:space-x-reverse"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900 mb-1">
                    {doctor.name}
                  </h4>
                  <p className="text-blue-600 font-medium mb-2">
                    {doctor.specialty}
                  </p>
                  <div className="text-sm text-gray-600 space-y-1">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Users size={14} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Award size={14} />
                      <span>{doctor.credentials}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {language.code === 'ar' ? 'احجز مع أفضل الأطباء' : 'Book with Top Doctors'}
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              {language.code === 'ar' 
                ? 'تواصل معنا لحجز موعد مع أفضل الأطباء المتخصصين في مستشفيات معتمدة دولياً'
                : 'Contact us to book appointment with top specialist doctors in internationally accredited hospitals'
              }
            </p>
            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="medical-button"
            >
              {language.code === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;