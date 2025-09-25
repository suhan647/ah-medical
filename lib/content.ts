import { Treatment, Service } from './types';

export const content = {
  header: {
    ar: {
      company: 'آه للسياحة الطبية',
      navigation: {
        home: 'الرئيسية',
        about: 'من نحن',
        services: 'خدماتنا',
        treatments: 'العلاجات',
        tourism: 'السياحة في بنغالور',
        contact: 'اتصل بنا'
      }
    },
    en: {
      company: 'AH Medical Tourisms',
      navigation: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        treatments: 'Treatments',
        tourism: 'Tourism in Bangalore',
        contact: 'Contact Us'
      }
    }
  },
  hero: {
    ar: {
      title: 'أفضل خدمات السياحة الطبية في بنغالور',
      subtitle: 'علاج طبي عالي الجودة مع مترجم عربي متخصص في الهند',
      description: 'نحن نقدم خدمات طبية شاملة مع الترجمة العربية والمرافقة الطبية في أفضل مستشفيات بنغالور. من علاج الأسنان إلى علاج البروستاتا والعلاج الطبيعي.',
      cta: 'احجز استشارتك الآن'
    },
    en: {
      title: 'Premier Medical Tourism Services in Bangalore',
      subtitle: 'Quality Medical Treatment with Arabic Translation Services in India',
      description: 'We provide comprehensive medical services with Arabic translation and medical coordination in Bangalore\'s best hospitals. From dental treatments to prostate care and natural therapy.',
      cta: 'Book Your Consultation Now'
    }
  },
  about: {
    ar: {
      title: 'عن عبد القدوس - منسقك الطبي',
      description: 'عبد القدوس هو مترجم ومنسق طبي وخبير سياحي في بنغالور. يتمتع بخبرة واسعة في مساعدة المرضى العرب للحصول على أفضل علاج طبي في الهند مع خدمات الترجمة المتخصصة.',
      experience: 'سنوات من الخبرة',
      patients: 'مريض راض',
      languages: 'لغات',
      specialties: [
        'مترجم طبي متخصص',
        'منسق علاج طبي',
        'دليل سياحي في بنغالور',
        'خدمات الإقامة والنقل'
      ]
    },
    en: {
      title: 'About Abdul Quddus - Your Medical Coordinator',
      description: 'Abdul Quddus is a translator, medical coordinator, and tourism expert in Bangalore. He has extensive experience helping Arab patients receive the best medical treatment in India with specialized translation services.',
      experience: 'Years of Experience',
      patients: 'Satisfied Patients',
      languages: 'Languages',
      specialties: [
        'Specialized Medical Translator',
        'Medical Treatment Coordinator',
        'Tourism Guide in Bangalore',
        'Accommodation & Transport Services'
      ]
    }
  },
  contact: {
    ar: {
      title: 'اتصل بنا',
      subtitle: 'تواصل معنا عبر واتساب للحصول على استشارة مجانية',
      whatsapp: 'تواصل عبر واتساب',
      location: 'بنغالور، الهند',
      email: 'info@ahmedtourisms.com'
    },
    en: {
      title: 'Contact Us',
      subtitle: 'Get in touch via WhatsApp for free consultation',
      whatsapp: 'Contact via WhatsApp',
      location: 'Bangalore, India',
      email: 'info@ahmedtourisms.com'
    }
  }
};

export const treatments: Treatment[] = [
  {
    id: '1',
    title: {
      ar: 'زراعة الأسنان',
      en: 'Dental Implants'
    },
    description: {
      ar: 'زراعة أسنان عالية الجودة مع أحدث التقنيات في أفضل عيادات الأسنان في بنغالور',
      en: 'High-quality dental implants with latest technology at Bangalore\'s best dental clinics'
    },
    icon: '🦷',
    slug: 'dental-implants-bangalore'
  },
  {
    id: '2',
    title: {
      ar: 'علاج البروستاتا',
      en: 'Prostate Treatment'
    },
    description: {
      ar: 'علاج شامل لأمراض البروستاتا مع أفضل أطباء المسالك البولية في الهند',
      en: 'Comprehensive prostate treatment with India\'s best urologists'
    },
    icon: '⚕️',
    slug: 'prostate-treatment-bangalore'
  },
  {
    id: '3',
    title: {
      ar: 'الابتسامة الهوليوودية',
      en: 'Hollywood Smile'
    },
    description: {
      ar: 'تجميل الأسنان والحصول على ابتسامة هوليوودية مثالية',
      en: 'Cosmetic dentistry for the perfect Hollywood smile'
    },
    icon: '😁',
    slug: 'hollywood-smile-bangalore'
  },
  {
    id: '4',
    title: {
      ar: 'العلاج الطبيعي',
      en: 'Natural Treatment'
    },
    description: {
      ar: 'علاج طبيعي للعظام والأعصاب والمفاصل بدون جراحة',
      en: 'Natural treatment for bones, nerves, and joints without surgery'
    },
    icon: '🌿',
    slug: 'natural-treatment-bangalore'
  }
];

export const services: Service[] = [
  {
    id: '1',
    title: {
      ar: 'خدمات طب الأسنان',
      en: 'Dental Services'
    },
    description: {
      ar: 'علاج شامل للأسنان مع أحدث التقنيات',
      en: 'Comprehensive dental treatment with latest technology'
    },
    icon: '🦷',
    image: '/placeholders/dental-services.png',
    highlights: {
      ar: ['أطباء أسنان معتمدون', 'تقنيات تصوير حديثة', 'تعقيم ومعايير سلامة عالية'],
      en: ['Board-certified dentists', 'Modern imaging technology', 'High sterilization standards']
    },
    ctaLabel: { ar: 'اطلب خطة علاج', en: 'Request Treatment Plan' },
    features: {
      ar: ['زراعة الأسنان', 'الابتسامة الهوليوودية', 'تقويم الأسنان', 'علاج اللثة'],
      en: ['Dental Implants', 'Hollywood Smile', 'Orthodontics', 'Gum Treatment']
    }
  },
  {
    id: '2',
    title: {
      ar: 'الترجمة الطبية',
      en: 'Medical Translation'
    },
    description: {
      ar: 'مترجم طبي متخصص يرافقك في جميع المواعيد',
      en: 'Specialized medical translator accompanying you to all appointments'
    },
    icon: '🗣️',
    image: '/placeholders/medical-translation.png',
    highlights: {
      ar: ['ترجمة متخصصة للمصطلحات الطبية', 'خصوصية كاملة', 'مرافقة في المواعيد'],
      en: ['Specialized medical terminology', 'Full confidentiality', 'Accompaniment at appointments']
    },
    ctaLabel: { ar: 'احجز مترجمك', en: 'Book Your Translator' },
    features: {
      ar: ['ترجمة فورية', 'مرافقة طبية', 'شرح التشخيص', 'التنسيق مع الأطباء'],
      en: ['Real-time Translation', 'Medical Assistance', 'Diagnosis Explanation', 'Doctor Coordination']
    }
  },
  {
    id: '3',
    title: {
      ar: 'الإقامة والنقل',
      en: 'Accommodation & Transport'
    },
    description: {
      ar: 'حجز الفنادق والشقق الخدمية مع خدمات النقل',
      en: 'Hotel and service apartment booking with transport services'
    },
    icon: '🏨',
    image: '/placeholders/accommodation-transport.png',
    highlights: {
      ar: ['خيارات قريبة من المستشفى', 'سائقون موثوقون', 'أسعار تنافسية'],
      en: ['Hospital-adjacent options', 'Trusted drivers', 'Competitive pricing']
    },
    ctaLabel: { ar: 'خطط للإقامة', en: 'Plan Your Stay' },
    features: {
      ar: ['حجز الفنادق', 'شقق خدمية', 'تأجير سيارات', 'مطار بيك اب', 'سيارات أجرة مع مترجم عربي'],
      en: ['Hotel Booking', 'Service Apartments', 'Car Rental', 'Airport Pickup', 'Rental taxis with Arabic translation']
    }
  },
  // {
  //   id: '4',
  //   title: {
  //     ar: 'السياحة في بنغالور',
  //     en: 'Bangalore Tourism'
  //   },
  //   description: {
  //     ar: 'جولات سياحية مع دليل عربي متخصص',
  //     en: 'Tourism tours with specialized Arabic guide'
  //   },
  //   icon: '🏛️',
  //   image: '/services/bangalore-tourism.jpg',
  //   highlights: {
  //     ar: ['أماكن شهيرة', 'مطاعم عربية', 'تسوق'],
  //     en: ['Famous spots', 'Arabic cuisine', 'Shopping']
  //   },
  //   ctaLabel: { ar: 'ابدأ جولتك', en: 'Start Your Tour' },
  //   features: {
  //     ar: ['المعالم السياحية', 'المطاعم العربية', 'التسوق', 'الأماكن الدينية'],
  //     en: ['Tourist Attractions', 'Arabic Restaurants', 'Shopping', 'Religious Sites']
  //   }
  // },
  {
    id: '5',
    title: {
      ar: 'تنسيق السياحة العلاجية',
      en: 'Medical Tourism Coordination'
    },
    description: {
      ar: 'مساعدة شاملة من تقييم التقارير إلى حجز المواعيد مع الأطباء',
      en: 'End-to-end help from report assessment to booking doctor appointments'
    },
    icon: '🧭',
    image: '/placeholders/medical-tourism-coordination.png',
    highlights: {
      ar: ['تقييم التقارير', 'تحديد المواعيد', 'متابعة بعد العلاج'],
      en: ['Report triage', 'Appointment scheduling', 'Post-care follow up']
    },
    ctaLabel: { ar: 'ابدأ التنسيق', en: 'Start Coordination' },
    features: {
      ar: ['استلام التقارير عبر واتساب', 'استشارة الطبيب المعني', 'تحديد المواعيد', 'متابعة ما بعد العلاج'],
      en: ['Receive reports on WhatsApp', 'Consult concerned doctor', 'Schedule appointments', 'Post-treatment follow-up']
    }
  },
  {
    id: '6',
    title: {
      ar: 'العلاج الطبيعي والعظام',
      en: 'Natural & Orthopedic Care'
    },
    description: {
      ar: 'العلاج الطبيعي لآلام الأعصاب والعظام والمفاصل بإشراف مختصين',
      en: 'Natural treatment for orthopedic nerve and joint pain under specialists'
    },
    icon: '🦴',
    image: '/placeholders/natural-orthopedic-care.png',
    highlights: {
      ar: ['جلسات مخصصة', 'إشراف مختصين', 'برنامج منزلي'],
      en: ['Personalized sessions', 'Specialist oversight', 'Home program']
    },
    ctaLabel: { ar: 'احجز جلسة', en: 'Book a Session' },
    features: {
      ar: ['علاج آلام المفاصل', 'علاج آلام الأعصاب', 'جلسات علاجية مخصصة', 'متابعة تقدم الحالة'],
      en: ['Joint pain therapy', 'Nerve pain therapy', 'Personalized rehab sessions', 'Progress monitoring']
    }
  },
  {
    id: '7',
    title: {
      ar: 'خدمات الطعام العربي',
      en: 'Arabic Food Assistance'
    },
    description: {
      ar: 'إرشاد إلى مطاعم عربية قريبة وتوصيل الطعام عند الحاجة',
      en: 'Guidance to nearby Arabic restaurants and food delivery when needed'
    },
    icon: '🍽️',
    image: '/services/arabic-food-assistance.png',
    highlights: {
      ar: ['توصيات غذائية', 'مطاعم قريبة', 'خيارات توصيل'],
      en: ['Dietary tips', 'Nearby restaurants', 'Delivery options']
    },
    ctaLabel: { ar: 'اطلب توصية', en: 'Get a Recommendation' },
    features: {
      ar: ['مطاعم عربية متوفرة', 'اقتراحات غذائية بعد العلاج'],
      en: ['Arabian restaurants available', 'Post-treatment dietary suggestions']
    }
  }
];