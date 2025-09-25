"use client";

import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';

const Hero = () => {
  const { language } = useLanguage();
  const heroContent = content.hero[language.code];

  return (
    <section className="relative bg-gradient-to-br from-teal-50 to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {heroContent.title}
              </h1>
              <h2 className="text-xl md:text-2xl text-teal-600 font-semibold">
                {heroContent.subtitle}
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                {heroContent.description}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{heroContent.cta}</span>
                <ArrowRight size={20} className="rtl:rotate-180" />
              </Link>
              
              <button className="border-2 border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2 rtl:space-x-reverse">
                <Play size={20} />
                <span>{language.code === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">10+</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'سنوات خبرة' : 'Years Experience'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">1000+</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'مريض راض' : 'Happy Patients'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-600">24/7</div>
                <div className="text-sm text-gray-600">
                  {language.code === 'ar' ? 'دعم متواصل' : 'Support Available'}
                </div>
              </div>
            </div>
          </div>

          {/* Video Section */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video relative">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="/hero-poster.jpg"
                >
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                  <track
                    kind="captions"
                    srcLang="en"
                    label="English"
                    src="/captions-en.vtt"
                    default
                  />
                  <track
                    kind="captions"
                    srcLang="ar"
                    label="العربية"
                    src="/captions-ar.vtt"
                  />
                </video>

                {/* CTA overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center sm:justify-end">
                    <a
                      href="https://wa.me/7204832004"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pointer-events-auto inline-flex items-center space-x-2 rtl:space-x-reverse bg-teal-600 hover:bg-teal-700 text-white px-4 sm:px-6 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg"
                    >
                      <span>{language.code === 'ar' ? 'أرسل التقارير عبر واتساب' : 'Send Reports on WhatsApp'}</span>
                      <ArrowRight size={18} className="rtl:rotate-180" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-teal-600 text-white p-4 rounded-full">
              <Stethoscope size={32} />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-blue-600 text-white p-4 rounded-full">
              <Heart size={32} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Import Heart icon
import { Heart, Stethoscope } from 'lucide-react';

export default Hero;