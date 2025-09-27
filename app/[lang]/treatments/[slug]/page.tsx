import { notFound } from 'next/navigation';
import { treatments } from '@/lib/content';
import { Star, Clock, Shield, Award, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import Link from 'next/link';

interface Props {
  params: { 
    lang: string;
    slug: string;
  };
}

export async function generateStaticParams() {
  const params = [];
  for (const lang of ['ar', 'en']) {
    for (const treatment of treatments) {
      params.push({
        lang,
        slug: treatment.slug,
      });
    }
  }
  return params;
}

export default function TreatmentDetail({ params }: Props) {
  const lang = params.lang as 'ar' | 'en';
  const slug = params.slug;

  if (!['ar', 'en'].includes(lang)) {
    notFound();
  }

  const treatment = treatments.find(t => t.slug === slug);
  if (!treatment) {
    notFound();
  }

  const isRTL = lang === 'ar';

  // Detailed treatment data
  const treatmentDetails = {
    'dental-implants-bangalore': {
      duration: lang === 'ar' ? '3-6 أشهر' : '3-6 months',
      cost: lang === 'ar' ? 'من 15,000 روبية' : 'From ₹15,000',
      successRate: '98%',
      procedures: lang === 'ar' ? [
        'استشارة أولية شاملة',
        'تصوير بالأشعة السينية',
        'زراعة الأسنان',
        'تركيب التاج',
        'متابعة دورية'
      ] : [
        'Comprehensive initial consultation',
        'X-ray imaging',
        'Dental implant placement',
        'Crown installation',
        'Regular follow-up'
      ],
      benefits: lang === 'ar' ? [
        'نتائج دائمة',
        'مظهر طبيعي',
        'تحسين المضغ',
        'حماية العظام',
        'ثقة بالنفس'
      ] : [
        'Permanent results',
        'Natural appearance',
        'Improved chewing',
        'Bone protection',
        'Self-confidence'
      ],
      doctors: lang === 'ar' ? [
        'د. أحمد خان - أخصائي زراعة الأسنان',
        'د. فاطمة علي - جراح فم وأسنان',
        'د. محمد حسن - أخصائي تقويم الأسنان'
      ] : [
        'Dr. Ahmed Khan - Dental Implant Specialist',
        'Dr. Fatima Ali - Oral & Maxillofacial Surgeon',
        'Dr. Mohammed Hassan - Orthodontist'
      ],
      hospitals: lang === 'ar' ? [
        'مستشفى أبولو بنغالور',
        'مستشفى فورتيس بنغالور',
        'عيادة مانيبال للأسنان'
      ] : [
        'Apollo Hospital Bangalore',
        'Fortis Hospital Bangalore',
        'Manipal Dental Clinic'
      ]
    },
    'prostate-treatment-bangalore': {
      duration: lang === 'ar' ? '1-2 أسابيع' : '1-2 weeks',
      cost: lang === 'ar' ? 'من 25,000 روبية' : 'From ₹25,000',
      successRate: '95%',
      procedures: lang === 'ar' ? [
        'فحص شامل للبروستاتا',
        'تحاليل الدم والبول',
        'الموجات فوق الصوتية',
        'العلاج بالليزر',
        'متابعة طبية'
      ] : [
        'Comprehensive prostate examination',
        'Blood and urine tests',
        'Ultrasound imaging',
        'Laser treatment',
        'Medical follow-up'
      ],
      benefits: lang === 'ar' ? [
        'علاج غير جراحي',
        'نتائج سريعة',
        'ألم أقل',
        'تعافي أسرع',
        'نتائج دائمة'
      ] : [
        'Non-surgical treatment',
        'Quick results',
        'Less pain',
        'Faster recovery',
        'Permanent results'
      ],
      doctors: lang === 'ar' ? [
        'د. راجيش كومار - أخصائي المسالك البولية',
        'د. بريا شارما - جراح المسالك البولية',
        'د. فينود باتيل - أخصائي الأورام'
      ] : [
        'Dr. Rajesh Kumar - Urologist',
        'Dr. Priya Sharma - Urological Surgeon',
        'Dr. Vinod Patel - Oncologist'
      ],
      hospitals: lang === 'ar' ? [
        'مستشفى نارايانا بنغالور',
        'مستشفى سانت جون بنغالور',
        'مركز علاج البروستاتا المتقدم'
      ] : [
        'Narayana Hospital Bangalore',
        'St. John\'s Hospital Bangalore',
        'Advanced Prostate Treatment Center'
      ]
    },
    'hollywood-smile-bangalore': {
      duration: lang === 'ar' ? '2-4 أسابيع' : '2-4 weeks',
      cost: lang === 'ar' ? 'من 20,000 روبية' : 'From ₹20,000',
      successRate: '99%',
      procedures: lang === 'ar' ? [
        'استشارة تجميلية',
        'تصميم الابتسامة',
        'تبييض الأسنان',
        'تركيب القشور',
        'لمسات نهائية'
      ] : [
        'Cosmetic consultation',
        'Smile design',
        'Teeth whitening',
        'Veneer placement',
        'Final touches'
      ],
      benefits: lang === 'ar' ? [
        'ابتسامة مثالية',
        'ثقة بالنفس',
        'مظهر شاب',
        'نتائج فورية',
        'عناية مدى الحياة'
      ] : [
        'Perfect smile',
        'Self-confidence',
        'Youthful appearance',
        'Instant results',
        'Lifetime care'
      ],
      doctors: lang === 'ar' ? [
        'د. سارة أحمد - أخصائية تجميل الأسنان',
        'د. عمر محمد - جراح تجميل الأسنان',
        'د. نورا خان - أخصائية تقويم الأسنان'
      ] : [
        'Dr. Sarah Ahmed - Cosmetic Dentist',
        'Dr. Omar Mohammed - Cosmetic Surgeon',
        'Dr. Nora Khan - Orthodontist'
      ],
      hospitals: lang === 'ar' ? [
        'عيادة الابتسامة المثالية',
        'مركز تجميل الأسنان المتقدم',
        'مستشفى الأسنان الدولي'
      ] : [
        'Perfect Smile Clinic',
        'Advanced Cosmetic Dental Center',
        'International Dental Hospital'
      ]
    },
    'natural-treatment-bangalore': {
      duration: lang === 'ar' ? '4-8 أسابيع' : '4-8 weeks',
      cost: lang === 'ar' ? 'من 12,000 روبية' : 'From ₹12,000',
      successRate: '92%',
      procedures: lang === 'ar' ? [
        'تشخيص شامل',
        'علاج طبيعي باليد',
        'تمارين علاجية',
        'علاج بالحرارة',
        'متابعة منتظمة'
      ] : [
        'Comprehensive diagnosis',
        'Manual natural therapy',
        'Therapeutic exercises',
        'Heat therapy',
        'Regular follow-up'
      ],
      benefits: lang === 'ar' ? [
        'بدون جراحة',
        'علاج طبيعي',
        'نتائج دائمة',
        'تعافي تدريجي',
        'تحسين الحركة'
      ] : [
        'No surgery required',
        'Natural healing',
        'Permanent results',
        'Gradual recovery',
        'Improved mobility'
      ],
      doctors: lang === 'ar' ? [
        'د. أنيتا شارما - أخصائية العلاج الطبيعي',
        'د. فيكاس جوبتا - أخصائي العظام',
        'د. مينا باتيل - أخصائية الأعصاب'
      ] : [
        'Dr. Anita Sharma - Physiotherapist',
        'Dr. Vikas Gupta - Orthopedic Specialist',
        'Dr. Meena Patel - Neurologist'
      ],
      hospitals: lang === 'ar' ? [
        'مركز العلاج الطبيعي المتقدم',
        'مستشفى العظام الطبيعي',
        'عيادة العلاج البديل'
      ] : [
        'Advanced Physiotherapy Center',
        'Natural Orthopedic Hospital',
        'Alternative Medicine Clinic'
      ]
    }
  };

  const details = treatmentDetails[slug as keyof typeof treatmentDetails];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-teal-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="text-6xl mb-6">{treatment.icon}</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {treatment.title[lang]}
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              {treatment.description[lang]}
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">
                  {lang === 'ar' ? 'المدة' : 'Duration'}
                </h3>
                <p className="text-2xl font-bold">{details.duration}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">
                  {lang === 'ar' ? 'معدل النجاح' : 'Success Rate'}
                </h3>
                <p className="text-2xl font-bold">{details.successRate}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <Award className="w-8 h-8 mx-auto mb-3" />
                <h3 className="text-lg font-semibold mb-2">
                  {lang === 'ar' ? 'البداية من' : 'Starting From'}
                </h3>
                <p className="text-2xl font-bold">{details.cost}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'ar' ? 'خطوات العلاج' : 'Treatment Process'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {lang === 'ar' ? 'نتبع أحدث المعايير الطبية لضمان أفضل النتائج' : 'We follow the latest medical standards to ensure the best results'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {details.procedures.map((procedure, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">{index + 1}</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {procedure}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'ar' ? 'فوائد العلاج' : 'Treatment Benefits'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0" />
                  <p className="text-lg font-medium text-gray-900">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'ar' ? 'فريق الأطباء' : 'Our Medical Team'}
            </h2>
            <p className="text-xl text-gray-600">
              {lang === 'ar' ? 'أفضل الأطباء المتخصصين في هذا المجال' : 'The best specialists in this field'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.doctors.map((doctor, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">👨‍⚕️</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{doctor}</h3>
                <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                  <span className="text-sm text-gray-500 ml-2 rtl:mr-2">(4.9)</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospitals */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {lang === 'ar' ? 'المستشفيات الشريكة' : 'Partner Hospitals'}
            </h2>
            <p className="text-xl text-gray-600">
              {lang === 'ar' ? 'مستشفيات معتمدة عالمياً بأحدث التقنيات' : 'Internationally certified hospitals with latest technology'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {details.hospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-xl">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{hospital}</h3>
                    <p className="text-gray-600">
                      {lang === 'ar' ? 'معتمد من JCI' : 'JCI Certified'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {lang === 'ar' ? 'ابدأ رحلتك العلاجية اليوم' : 'Start Your Treatment Journey Today'}
          </h2>
          <p className="text-xl mb-8 opacity-90">
            {lang === 'ar' ? 'احصل على استشارة مجانية مع أفضل الأطباء' : 'Get a free consultation with the best doctors'}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Phone className="w-5 h-5" />
              <span>+91-94814 92052</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <Mail className="w-5 h-5" />
              <span>info@ahmedtourisms.com</span>
            </div>
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <MapPin className="w-5 h-5" />
              <span>{lang === 'ar' ? 'بنغالور، الهند' : 'Bangalore, India'}</span>
            </div>
          </div>

          <WhatsAppCTA lang={lang} />
        </div>
      </section>

      {/* Back to Treatments */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link 
            href={`/${lang}/treatments`}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse text-blue-600 hover:text-blue-700 font-medium"
          >
            <ArrowRight className={`w-5 h-5 ${isRTL ? 'rotate-180' : ''}`} />
            <span>{lang === 'ar' ? 'العودة إلى جميع العلاجات' : 'Back to All Treatments'}</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
