"use client";

import Link from 'next/link';
import { useLanguage } from '@/hooks/useLanguage';

export default function Blog() {
  const { language } = useLanguage();

  const posts = [
    {
      slug: 'medical-tourism-bangalore-guide',
      title: language.code === 'ar' ? 'دليل السياحة الطبية في بنغالور' : 'Medical Tourism in Bangalore: A Complete Guide',
      excerpt: language.code === 'ar' ? 'كل ما تحتاج معرفته قبل رحلتك العلاجية' : 'Everything you need to know before your medical trip'
    },
    {
      slug: 'dental-implants-india-faq',
      title: language.code === 'ar' ? 'زراعة الأسنان في الهند – أسئلة شائعة' : 'Dental Implants in India – FAQ',
      excerpt: language.code === 'ar' ? 'أجوبة على أهم الأسئلة حول الزراعة' : 'Answers to top questions about implants'
    }
  ];

  return (
    <div className="pt-20">
      <section className="py-16 bg-gradient-to-br from-teal-50 to-blue-50 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            {language.code === 'ar' ? 'المدونة والموارد' : 'Blog & Resources'}
          </h1>
          <p className="text-lg text-gray-600">
            {language.code === 'ar' ? 'مقالات تعليمية لتحسين رحلتك العلاجية' : 'Educational articles to enhance your medical journey'}
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {posts.map((p) => (
            <div key={p.slug} className="bg-gray-50 rounded-2xl p-6 shadow-sm border border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900"><Link href={`/blog/${p.slug}`}>{p.title}</Link></h2>
              <p className="text-gray-600">{p.excerpt}</p>
              <div className="mt-3 flex items-center gap-4">
                <Link className="text-teal-700 font-medium hover:underline" href={`/blog/${p.slug}`}>
                  {language.code === 'ar' ? 'اقرأ المزيد' : 'Read Article'}
                </Link>
                <a href="https://wa.me/7204832004" target="_blank" rel="noopener noreferrer" className="bg-teal-600 text-white px-3 py-1.5 rounded-md hover:bg-teal-700">
                  {language.code === 'ar' ? 'اسأل عبر واتساب' : 'Ask on WhatsApp'}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}



