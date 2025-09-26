"use client";

import { content } from '@/lib/content';
import { Star, CircleCheck as CheckCircle, Play, Quote, MapPin, Calendar } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface TestimonialsProps {
  lang: 'ar' | 'en';
}

const Testimonials = ({ lang }: TestimonialsProps) => {
  const testimonialsContent = content.testimonials[lang];
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="section-padding trust-gradient">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white px-4 py-2 rounded-full mb-6 shadow-md">
            <Star size={20} className="text-yellow-500" />
            <span className="text-gray-700 font-semibold text-sm">
              {lang === 'ar' ? 'تقييم 4.9/5' : '4.9/5 Rating'}
            </span>
          </div>
          <h2 className="section-title text-gray-900 mb-6">
            {testimonialsContent.title}
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            {testimonialsContent.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsContent.reviews.map((review, index) => (
            <div
              key={index}
              className="testimonial-card h-full flex flex-col group hover:scale-105"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <Quote size={16} className="text-white" />
              </div>

              {/* Header */}
              <div className="flex items-center space-x-4 rtl:space-x-reverse mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden ring-4 ring-blue-100">
                  <Image
                    src={review.image}
                    alt={lang === 'ar' ? `${review.name} - مريض السياحة الطبية راض` : `${review.name} - Satisfied Medical Tourism Patient`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 rtl:space-x-reverse mb-1">
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    {review.verified && (
                      <CheckCircle size={18} className="text-green-500" />
                    )}
                  </div>
                  <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-600">
                    <MapPin size={14} />
                    <span>{review.location}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">({review.rating}.0)</span>
              </div>

              {/* Treatment Badge */}
              <div className="inline-block bg-gradient-to-r from-blue-100 to-teal-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6 self-start">
                {review.treatment}
              </div>

              {/* Review Text */}
              <blockquote className="text-gray-700 leading-relaxed mb-6 flex-1 italic">
                "{review.text}"
              </blockquote>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <div className="flex items-center space-x-2 rtl:space-x-reverse text-sm text-gray-500">
                  <Calendar size={14} />
                  <span>{lang === 'ar' ? 'مراجعة موثقة' : 'Verified Review'}</span>
                </div>
                <button
                  onClick={() => setActiveVideo(activeVideo === review.name ? null : review.name)}
                  className="flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors group-hover:scale-105"
                >
                  <Play size={16} />
                  <span>{lang === 'ar' ? 'شاهد الفيديو' : 'Watch Video'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">
                {lang === 'ar' ? 'مريض راض' : 'Happy Patients'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-medium">
                {lang === 'ar' ? 'نسبة نجاح' : 'Success Rate'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-teal-600 mb-2">4.9</div>
              <div className="text-gray-600 font-medium">
                {lang === 'ar' ? 'تقييم المرضى' : 'Patient Rating'}
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-medium">
                {lang === 'ar' ? 'دعم متواصل' : 'Support Available'}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-teal-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {lang === 'ar' ? 'شارك تجربتك معنا' : 'Share Your Success Story'}
            </h3>
            <p className="body-large mb-8 opacity-90 max-w-2xl mx-auto">
              {lang === 'ar' 
                ? 'ساعد الآخرين من خلال مشاركة قصة نجاحك واحصل على خصم خاص على علاجك القادم'
                : 'Help others by sharing your success story and get a special discount on your next treatment'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/94814 92052', '_blank')}
                className="bg-white text-blue-600 hover:bg-gray-50 px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {lang === 'ar' ? 'شارك قصتك' : 'Share Your Story'}
              </button>
              <button
                onClick={() => window.open('https://wa.me/94814 92052', '_blank')}
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:-translate-y-1"
              >
                {lang === 'ar' ? 'احجز استشارة' : 'Book Consultation'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;