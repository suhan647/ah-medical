"use client";

import { useLanguage } from '@/hooks/useLanguage';
import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Top Hospitals & Doctors in Bangalore | AH Medical Tourisms',
  description: 'Profiles of internationally accredited hospitals and experienced specialist doctors in Bangalore. Certifications, credentials, and specialties.',
  openGraph: {
    title: 'Top Hospitals & Doctors in Bangalore',
    description: 'Accredited hospitals and experienced specialist doctors with certifications and specialties.',
    images: ['/og-image.jpg']
  }
};

export default function HospitalsDoctors() {
  const { language } = useLanguage();

  const hospitals = [
    {
      name: language.code === 'ar' ? 'مستشفى الرعاية المتقدمة' : 'Advanced Care Hospital',
      accreditation: 'JCI, NABH',
      image: '/placeholder-hospital.jpg',
      specialties: language.code === 'ar' ? ['الأسنان', 'المسالك البولية', 'العظام'] : ['Dentistry', 'Urology', 'Orthopedics']
    },
    {
      name: language.code === 'ar' ? 'مستشفى المدينة الطبية' : 'City Medical Hospital',
      accreditation: 'NABH',
      image: '/placeholder-hospital-2.jpg',
      specialties: language.code === 'ar' ? ['التجميل', 'الأعصاب'] : ['Cosmetic', 'Neurology']
    }
  ];

  const doctors = [
    {
      name: language.code === 'ar' ? 'د. راهول شانكار' : 'Dr. Rahul Shankar',
      specialty: language.code === 'ar' ? 'جراحة المسالك البولية' : 'Urologist',
      exp: '15+',
      image: '/placeholder-doctor.jpg',
      credentials: ['MBBS, MS, MCh', 'Member of Urological Society of India']
    },
    {
      name: language.code === 'ar' ? 'د. بريا ديشاي' : 'Dr. Priya Desai',
      specialty: language.code === 'ar' ? 'تجميل الأسنان' : 'Cosmetic Dentist',
      exp: '12+',
      image: '/placeholder-doctor-2.jpg',
      credentials: ['BDS, MDS', 'AACD Certified']
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'أفضل المستشفيات والأطباء' : 'Hospitals & Doctors'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'مستشفيات معتمدة دولياً وأطباء متخصصون ذوو خبرة واسعة' : 'Internationally accredited hospitals and experienced specialist doctors.'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {language.code === 'ar' ? 'المستشفيات' : 'Hospitals'}
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            {hospitals.map((h, idx) => (
              <div key={idx} className="bg-gray-50 rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="relative w-full h-56">
                  <Image src={h.image} alt={h.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-gray-900">{h.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{language.code === 'ar' ? 'الاعتماد' : 'Accreditation'}: {h.accreditation}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {h.specialties.map((s, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-teal-100 text-teal-700">{s}</span>
                    ))}
                  </div>
                  <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                    {language.code === 'ar' ? 'اسأل عن هذه المستشفى' : 'Enquire on WhatsApp'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            {language.code === 'ar' ? 'الأطباء' : 'Doctors'}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {doctors.map((d, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-full flex flex-col">
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-4">
                  <Image src={d.image} alt={d.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{d.name}</h3>
                <p className="text-teal-700 font-medium">{d.specialty}</p>
                <p className="text-sm text-gray-600 mt-1">{language.code === 'ar' ? 'سنوات الخبرة' : 'Years of Experience'}: {d.exp}</p>
                <ul className="mt-3 space-y-1 text-sm text-gray-700 list-disc list-inside">
                  {d.credentials.map((c, i) => (<li key={i}>{c}</li>))}
                </ul>
                <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="inline-block mt-auto bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700">
                  {language.code === 'ar' ? 'احجز موعداً عبر واتساب' : 'Book via WhatsApp'}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}



