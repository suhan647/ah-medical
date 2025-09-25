"use client";

import { useLanguage } from '@/hooks/useLanguage';
import { content } from '@/lib/content';
import { Star, CheckCircle, Play } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

const Testimonials = () => {
  const { language } = useLanguage();
  const testimonialsContent = content.testimonials[language.code];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-20 trust-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title text-gray-900 mb-4">
            {testimonialsContent.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            {testimonialsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonialsContent.reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    {review.verified && (
                      <CheckCircle size={16} className="text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{review.location}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 rtl:space-x-reverse mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Treatment */}
              <div className="inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                {review.treatment}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed mb-6 flex-1">
                "{review.text}"
              </p>

              {/* Video Option */}
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {language.code === 'ar' ? 'مراجعة موثقة' : 'Verified Review'}
                </span>
                <button
                  onClick={() => setActiveVideo(activeVideo === review.name ? null : review.name)}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  <Play size={16} />
                  <span>{language.code === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg inline-block">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
              {language.code === 'ar' ? 'شارك تجربتك معنا' : 'Share Your Experience'}
            </h3>
            <p className="text-gray-600 mb-6">
              {language.code === 'ar' 
                ? 'ساعد الآخرين من خلال مشاركة قصة نجاحك'
                : 'Help others by sharing your success story'
              }
            </p>
            <button
              onClick={() => window.open('https://wa.me/7204832004', '_blank')}
              className="medical-button"
            >
              {language.code === 'ar' ? 'شارك قصتك' : 'Share Your Story'}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;