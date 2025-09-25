"use client";

import Link from 'next/link';
import { ArrowRight, Play, Shield, Award, Users, Clock } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';

const Hero = () => {
  const { language } = useLanguage();
  const heroContent = content.hero[language.code];

  return (
    <section className="relative medical-gradient min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium text-blue-700">
                <Shield size={16} />
                <span>{language.code === 'ar' ? 'معتمد من JCI' : 'JCI Accredited'}</span>
              </div>
              
              <h1 className="hero-title text-gray-900 leading-tight">
                {heroContent.title}
              </h1>
              <h2 className="text-lg md:text-xl lg:text-2xl text-blue-700 font-semibold">
                {heroContent.subtitle}
              </h2>
              <p className="text-base md:text-lg text-gray-700 max-w-2xl leading-relaxed">
                {heroContent.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="medical-button inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{heroContent.cta}</span>
                <ArrowRight size={20} className="rtl:rotate-180" />
              </Link>
              
              <button 
                onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                className="medical-button-outline inline-flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{heroContent.cta_secondary}</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-6 md:pt-8 border-t border-blue-200">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-700">10+</div>
                <div className="text-xs md:text-sm text-gray-600">
                  {language.code === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-700">1000+</div>
                <div className="text-xs md:text-sm text-gray-600">
                  {language.code === 'ar' ? 'مريض راض' : 'Happy Patients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-700">15+</div>
                <div className="text-xs md:text-sm text-gray-600">
                  {language.code === 'ar' ? 'مستشفى شريك' : 'Partner Hospitals'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-blue-700">24/7</div>
                <div className="text-xs md:text-sm text-gray-600">
                  {language.code === 'ar' ? 'دعم متواصل' : 'Support Available'}
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden medical-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg"
                  alt={language.code === 'ar' ? 'استشارة طبية في بنغالور' : 'Medical consultation in Bangalore'}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
                
                {/* Overlay with CTA */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {language.code === 'ar' ? 'استشارة مجانية' : 'Free Consultation'}
                        </div>
                        <div className="text-xs text-gray-600">
                          {language.code === 'ar' ? 'متاح الآن' : 'Available Now'}
                        </div>
                      </div>
                      <button
                        onClick={() => window.open('https://wa.me/7204832004', '_blank')}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                      >
                        {language.code === 'ar' ? 'واتساب' : 'WhatsApp'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badges */}
            <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-3 rounded-full shadow-lg">
              <Award size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-teal-600 text-white p-3 rounded-full shadow-lg">
              <Users size={24} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;