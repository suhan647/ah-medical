export function generateStructuredData(lang: 'ar' | 'en', page?: string) {
  const baseData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://ahmedtourisms.com/#organization',
        name: lang === 'ar' ? 'آه للسياحة الطبية' : 'AH Medical Tourism',
        alternateName: lang === 'ar' ? 'AH Medical Tourism' : 'آه للسياحة الطبية',
        url: 'https://ahmedtourisms.com',
        logo: {
          '@type': 'ImageObject',
          url: `https://ahmedtourisms.com/logos/ah-medical-travles-logo-${lang}.png`,
          width: 340,
          height: 96
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+91-94814 92052',
          contactType: 'customer service',
          availableLanguage: ['Arabic', 'English', 'Hindi'],
          areaServed: ['IN', 'SA', 'AE', 'KW', 'QA', 'BH', 'OM'],
          hoursAvailable: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
            opens: '09:00',
            closes: '20:00'
          }
        },
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN'
        },
        sameAs: [
          'https://wa.me/94814 92052'
        ],
        description: lang === 'ar' 
          ? 'شركة متخصصة في السياحة الطبية تقدم خدمات العلاج الطبي في بنغالور، الهند مع مترجم عربي متخصص'
          : 'Specialized medical tourism company providing medical treatment services in Bangalore, India with specialized Arabic translator'
      },
      {
        '@type': 'MedicalBusiness',
        '@id': 'https://ahmedtourisms.com/#medicalbusiness',
        name: lang === 'ar' ? 'آه للسياحة الطبية' : 'AH Medical Tourism',
        medicalSpecialty: [
          'Dentistry', 'Urology', 'Cardiology', 'Oncology', 'Orthopedics', 
          'Neurology', 'Fertility Medicine', 'Plastic Surgery', 'Ophthalmology',
          'Endocrinology', 'Gastroenterology', 'Pulmonology', 'Dermatology',
          'Gynecology', 'Pediatrics', 'Psychiatry', 'Radiology', 'Anesthesiology',
          'Emergency Medicine', 'Internal Medicine', 'General Surgery'
        ],
        availableService: [
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'زراعة الأسنان' : 'Dental Implants',
            description: lang === 'ar' 
              ? 'زراعة أسنان عالية الجودة مع أحدث التقنيات'
              : 'High-quality dental implants with latest technology'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج البروستاتا' : 'Prostate Treatment',
            description: lang === 'ar' 
              ? 'علاج شامل لأمراض البروستاتا'
              : 'Comprehensive prostate treatment'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج السرطان' : 'Cancer Treatment',
            description: lang === 'ar' 
              ? 'علاج الأورام والسرطان مع أحدث التقنيات'
              : 'Cancer and tumor treatment with latest technology'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'جراحة القلب' : 'Cardiac Surgery',
            description: lang === 'ar' 
              ? 'جراحة القلب والأوعية الدموية'
              : 'Heart and cardiovascular surgery'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج السكري' : 'Diabetes Treatment',
            description: lang === 'ar' 
              ? 'علاج شامل لمرض السكري من النوع الأول والثاني'
              : 'Comprehensive treatment for Type 1 and Type 2 diabetes'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج أمراض القلب' : 'Heart Disease Treatment',
            description: lang === 'ar' 
              ? 'علاج أمراض القلب التاجية وقصور القلب'
              : 'Treatment for coronary heart disease and heart failure'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج أمراض الكلى' : 'Kidney Disease Treatment',
            description: lang === 'ar' 
              ? 'علاج الفشل الكلوي وحصى الكلى'
              : 'Treatment for kidney failure and kidney stones'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج أمراض الكبد' : 'Liver Disease Treatment',
            description: lang === 'ar' 
              ? 'علاج التهاب الكبد وتليف الكبد'
              : 'Treatment for hepatitis and cirrhosis'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج أمراض العظام' : 'Orthopedic Treatment',
            description: lang === 'ar' 
              ? 'علاج هشاشة العظام والتهاب المفاصل'
              : 'Treatment for osteoporosis and arthritis'
          },
          {
            '@type': 'MedicalService',
            name: lang === 'ar' ? 'علاج أمراض العيون' : 'Eye Disease Treatment',
            description: lang === 'ar' 
              ? 'علاج المياه البيضاء والزرقاء'
              : 'Treatment for cataracts and glaucoma'
          }
        ],
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'JCI Accreditation',
            recognizedBy: {
              '@type': 'Organization',
              name: 'Joint Commission International'
            }
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'NABH Accreditation',
            recognizedBy: {
              '@type': 'Organization',
              name: 'National Accreditation Board for Hospitals'
            }
          }
        ]
      },
      {
        '@type': 'TravelAgency',
        '@id': 'https://ahmedtourisms.com/#travelagency',
        name: lang === 'ar' ? 'آه للسياحة الطبية' : 'AH Medical Tourism',
        serviceType: 'Medical Tourism',
        areaServed: {
          '@type': 'Country',
          name: 'India'
        },
        availableLanguage: ['Arabic', 'English', 'Hindi'],
        offers: {
          '@type': 'Offer',
          description: lang === 'ar' 
            ? 'خدمات السياحة الطبية الشاملة مع الترجمة والمرافقة'
            : 'Comprehensive medical tourism services with translation and accompaniment'
        }
      },
      {
        '@type': 'WebSite',
        '@id': 'https://ahmedtourisms.com/#website',
        url: 'https://ahmedtourisms.com',
        name: lang === 'ar' ? 'آه للسياحة الطبية' : 'AH Medical Tourism',
        inLanguage: lang,
        publisher: {
          '@id': 'https://ahmedtourisms.com/#organization'
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://ahmedtourisms.com/search?q={search_term_string}',
          'query-input': 'required name=search_term_string'
        }
      }
    ]
  };

  // Add page-specific structured data
  if (page === 'treatments') {
    baseData['@graph'].push({
      '@type': 'ItemList',
      name: lang === 'ar' ? 'العلاجات الطبية المتاحة' : 'Available Medical Treatments',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'MedicalProcedure',
            name: lang === 'ar' ? 'زراعة الأسنان' : 'Dental Implants',
            description: lang === 'ar' 
              ? 'زراعة أسنان عالية الجودة مع أحدث التقنيات في أفضل عيادات الأسنان'
              : 'High-quality dental implants with latest technology at best dental clinics'
          }
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'MedicalProcedure',
            name: lang === 'ar' ? 'علاج البروستاتا' : 'Prostate Treatment',
            description: lang === 'ar' 
              ? 'علاج شامل لأمراض البروستاتا مع أفضل أطباء المسالك البولية'
              : 'Comprehensive prostate treatment with best urologists'
          }
        }
      ]
    } as any);
  }

  return baseData;
}