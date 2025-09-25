"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { Award, MapPin, Users, Shield, Star, CheckCircle, GraduationCap } from 'lucide-react';
import Image from 'next/image';

const Partners = () => {
  const { language } = useLanguage();
  const partnersContent = content.partners[language.code];

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-blue-50 px-4 py-2 rounded-full mb-6">
            <Shield size={20} className="text-blue-600" />
            <span className="text-blue-700 font-semibold text-sm">
              {language.code === 'ar' ? 'شركاء معتمدون' : 'Certified Partners'}
            </span>
          </div>
          <h2 className="section-title text-gray-900 mb-6">
            {partnersContent.title}
          </h2>
          <p className="body-large text-gray-600 max-w-4xl mx-auto">
            {partnersContent.subtitle}
          </p>
        </div>

        {/* Hospitals */}
        <div className="mb-20">
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-12">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Shield size={24} className="text-blue-600" />
            </div>
            <h3 className="subsection-title text-gray-900">
              {language.code === 'ar' ? 'المستشفيات الشريكة' : 'Partner Hospitals'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersContent.hospitals.map((hospital, index) => (
              <div
                key={index}
                className="professional-card overflow-hidden h-full flex flex-col group"
              >
                <div className="relative h-56">
                  <Image
                    src={hospital.image}
                    alt={`${hospital.name} - JCI Accredited Hospital in Bangalore`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  
                  {/* Accreditation Badge */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Award size={16} className="text-yellow-500" />
                      <span className="text-sm font-bold text-gray-900">
                        {hospital.accreditation}
                      </span>
                    </div>
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="text-sm font-bold text-gray-900">4.8</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">
                    {hospital.name}
                  </h4>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {hospital.specialties.map((specialty, idx) => (
                      <span
                        key={idx}
                        className="medical-badge"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500" />
                      <span>{language.code === 'ar' ? 'معتمد دولياً' : 'Internationally Accredited'}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                      <Users size={16} className="text-blue-500" />
                      <span>{language.code === 'ar' ? 'أطباء متخصصون' : 'Specialist Doctors'}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                      <Shield size={16} className="text-purple-500" />
                      <span>{language.code === 'ar' ? 'أحدث التقنيات' : 'Latest Technology'}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                    className="mt-auto cta-primary w-full"
                  >
                    {language.code === 'ar' ? 'استفسر الآن' : 'Enquire Now'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Doctors */}
        <div className="mb-16">
          <div className="flex items-center justify-center space-x-3 rtl:space-x-reverse mb-12">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <GraduationCap size={24} className="text-teal-600" />
            </div>
            <h3 className="subsection-title text-gray-900">
              {language.code === 'ar' ? 'الأطباء المتخصصون' : 'Specialist Doctors'}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {partnersContent.doctors.map((doctor, index) => (
              <div
                key={index}
                className="professional-card p-8 flex items-center space-x-6 rtl:space-x-reverse group"
              >
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden ring-4 ring-blue-100 flex-shrink-0">
                  <Image
                    src={doctor.image}
                    alt={`${doctor.name} - ${doctor.specialty} in Bangalore`}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {doctor.name}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-3">
                    {doctor.specialty}
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Users size={14} className="text-green-500" />
                      <span className="font-medium">{doctor.experience}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Award size={14} className="text-yellow-500" />
                      <span>{doctor.credentials}</span>
                    </div>
                    <div className="flex items-center space-x-2 rtl:space-x-reverse">
                      <Star size={14} className="text-yellow-400 fill-current" />
                      <span className="font-medium">4.9/5 Patient Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 via-white to-teal-50 rounded-3xl p-8 md:p-12 shadow-xl border border-blue-100">
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                {language.code === 'ar' ? 'احجز مع أفضل الأطباء' : 'Book with Top Doctors'}
              </h3>
              <p className="body-large text-gray-600 mb-8">
                {language.code === 'ar' 
                  ? 'تواصل معنا لحجز موعد مع أفضل الأطباء المتخصصين في مستشفيات معتمدة دولياً. استشارة مجانية وتقييم شامل لحالتك'
                  : 'Contact us to book appointment with top specialist doctors in internationally accredited hospitals. Free consultation and comprehensive assessment of your condition'
                }
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle size={24} className="text-blue-600" />
                  </div>
                  <div className="font-semibold text-gray-900">
                    {language.code === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield size={24} className="text-green-600" />
                  </div>
                  <div className="font-semibold text-gray-900">
                    {language.code === 'ar' ? 'أطباء معتمدون' : 'Certified Doctors'}
                  </div>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award size={24} className="text-teal-600" />
                  </div>
                  <div className="font-semibold text-gray-900">
                    {language.code === 'ar' ? 'مستشفيات JCI' : 'JCI Hospitals'}
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                  className="cta-primary"
                >
                  {language.code === 'ar' ? 'احجز موعدك الآن' : 'Book Your Appointment'}
                </button>
                <button
                  onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                  className="whatsapp-button"
                >
                  {language.code === 'ar' ? 'تواصل عبر واتساب' : 'Contact on WhatsApp'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;