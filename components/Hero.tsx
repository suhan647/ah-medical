"use client";

import Link from 'next/link';
import { ArrowRight, Play, Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';

const Hero = () => {
  const { language } = useLanguage();
  const heroContent = content.hero[language.code];

  return (
    <section className="relative medical-gradient min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto container-padding py-12 md:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in-left">
            <div className="space-y-6">
              {/* Trust Badge */}
              <div className="inline-flex items-center space-x-3 rtl:space-x-reverse bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-blue-100">
                <Shield size={20} className="text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">
                  {language.code === 'ar' ? 'معتمد من JCI و NABH' : 'JCI & NABH Accredited'}
                </span>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-xs text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
              
              <h1 className="hero-title text-gray-900 leading-tight">
                {heroContent.title}
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl text-blue-700 font-semibold leading-relaxed">
                {heroContent.subtitle}
              </h2>
              <p className="body-large text-gray-700 max-w-2xl">
                {heroContent.description}
              </p>

              {/* Key Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {language.code === 'ar' ? 'وفر حتى 70%' : 'Save up to 70%'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {language.code === 'ar' ? 'مترجم طبي مختص' : 'Medical Translator'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {language.code === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                  </span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">
                    {language.code === 'ar' ? 'دعم 24/7' : '24/7 Support'}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="cta-primary inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{heroContent.cta}</span>
                <ArrowRight size={20} className="rtl:rotate-180" />
              </Link>
              
              <button 
                onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                className="whatsapp-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{heroContent.cta_secondary}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-blue-200">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">10+</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">1000+</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'مريض راض' : 'Happy Patients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">15+</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'مستشفى شريك' : 'Partner Hospitals'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-1">98%</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'نسبة نجاح' : 'Success Rate'}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-right">
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden medical-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  // src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                  src="/images/hero-image.jpeg"
                  alt={language.code === 'ar' ? 'استشارة طبية متخصصة في بنغالور مع مترجم عربي' : 'Specialized medical consultation in Bangalore with Arabic translator'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-lg font-bold text-gray-900 mb-1">
                          {language.code === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                        </div>
                        <div className="text-sm text-gray-600 flex items-center space-x-2 rtl:space-x-reverse">
                          <Clock size={16} />
                          <span>{language.code === 'ar' ? 'متاح الآن' : 'Available Now'}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                      >
                        {language.code === 'ar' ? 'واتساب' : 'WhatsApp'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white p-4 rounded-2xl shadow-xl">
              <Award size={28} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-2xl shadow-xl">
              <Users size={28} />
            </div>
            
            {/* Certification Badge */}
            <div className="absolute top-6 left-6 certification-badge">
              <Shield size={16} className="mr-2" />
              <span className="text-xs font-bold">JCI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;