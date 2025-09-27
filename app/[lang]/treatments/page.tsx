import Link from 'next/link';
import { treatments } from '@/lib/content';
import { ArrowRight, Star } from 'lucide-react';
import WhatsAppCTA from '@/components/WhatsAppCTA';

interface Props {
  params: { lang: string };
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export default function Treatments({ params }: Props) {
  const lang = params.lang as 'ar' | 'en';

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {lang === 'ar' ? 'العلاجات المتخصصة' : 'Specialized Treatments'}
          </h1>
          <p className="text-xl text-gray-600">
            {lang === 'ar' 
              ? 'نقدم أحدث العلاجات الطبية مع أفضل الأطباء المتخصصين في بنغالور'
              : 'We offer the latest medical treatments with Bangalore\'s best specialized doctors'
            }
          </p>
        </div>
      </section>

      {/* Treatments Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
            {treatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={`/${lang}/treatments/${treatment.slug}`}
                className="group bg-white rounded-2xl p-7 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-teal-200 h-full flex flex-col gap-4"
              >
                <div className="text-center">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
                    {treatment.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {treatment.title[lang]}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {treatment.description[lang]}
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center justify-center space-x-1 rtl:space-x-reverse mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-current" />
                    ))}
                    <span className="text-sm text-gray-500 ml-2 rtl:mr-2">(4.9)</span>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-center space-x-2 rtl:space-x-reverse text-teal-600 font-medium">
                    <span>{lang === 'ar' ? 'اعرف المزيد' : 'Learn More'}</span>
                    <ArrowRight size={16} className="rtl:rotate-180 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Treatments */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'لماذا تختار علاجاتنا؟' : 'Why Choose Our Treatments?'}
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {lang === 'ar' ? 'أفضل المستشفيات' : 'Best Hospitals'}
              </h3>
              <p className="text-gray-600">
                {lang === 'ar' 
                  ? 'شراكات مع أفضل المستشفيات المعتمدة دولياً في بنغالور'
                  : 'Partnerships with internationally accredited top hospitals in Bangalore'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">👨‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {lang === 'ar' ? 'أطباء متخصصون' : 'Specialized Doctors'}
              </h3>
              <p className="text-gray-600">
                {lang === 'ar' 
                  ? 'أطباء ذوو خبرة عالية ومعتمدون من أفضل الجامعات العالمية'
                  : 'Highly experienced doctors certified from world\'s best universities'
                }
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {lang === 'ar' ? 'أسعار تنافسية' : 'Competitive Prices'}
              </h3>
              <p className="text-gray-600">
                {lang === 'ar' 
                  ? 'علاج عالي الجودة بأسعار تنافسية مقارنة بالدول الأخرى'
                  : 'High-quality treatment at competitive prices compared to other countries'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {lang === 'ar' ? 'مراحل العلاج' : 'Treatment Process'}
            </h2>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal-200 hidden lg:block"></div>
            
            <div className="space-y-12">
              {[
                {
                  step: 1,
                  title: lang === 'ar' ? 'التقييم الأولي' : 'Initial Assessment',
                  description: lang === 'ar' 
                    ? 'تقييم شامل لحالتك الطبية وتحديد نوع العلاج المناسب'
                    : 'Comprehensive assessment of your medical condition and determining suitable treatment'
                },
                {
                  step: 2,
                  title: lang === 'ar' ? 'اختيار الطبيب' : 'Doctor Selection',
                  description: lang === 'ar' 
                    ? 'اختيار أفضل طبيب متخصص وتحديد موعد الاستشارة'
                    : 'Selecting the best specialist doctor and scheduling consultation'
                },
                {
                  step: 3,
                  title: lang === 'ar' ? 'التشخيص والفحص' : 'Diagnosis & Examination',
                  description: lang === 'ar' 
                    ? 'إجراء الفحوصات اللازمة ووضع خطة العلاج المناسبة'
                    : 'Conducting necessary tests and creating appropriate treatment plan'
                },
                {
                  step: 4,
                  title: lang === 'ar' ? 'العلاج والمتابعة' : 'Treatment & Follow-up',
                  description: lang === 'ar' 
                    ? 'تنفيذ العلاج مع المتابعة المستمرة والرعاية بعد العلاج'
                    : 'Treatment execution with continuous follow-up and post-treatment care'
                }
              ].map((item, index) => (
                <div key={item.step} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2 px-6">
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-teal-100">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse mb-4">
                        <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold">{item.step}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  <div className="hidden lg:block lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {lang === 'ar' ? 'ابدأ رحلة الشفاء' : 'Start Your Healing Journey'}
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            {lang === 'ar' 
              ? 'تواصل معنا اليوم للحصول على تقييم مجاني لحالتك وخطة علاجية مخصصة'
              : 'Contact us today for free assessment of your condition and personalized treatment plan'
            }
          </p>
          <WhatsAppCTA lang={lang} />
        </div>
      </section>
    </div>
  );
}