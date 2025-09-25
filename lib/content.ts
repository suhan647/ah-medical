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
        contact: 'اتصل بنا'
      }
    },
    en: {
      company: 'AH Medical Tourism',
      navigation: {
        home: 'Home',
        about: 'About Us',
        services: 'Services',
        treatments: 'Treatments',
        contact: 'Contact Us'
      }
    }
  },
  hero: {
    ar: {
      title: 'الرعاية الطبية المتميزة في بنغالور',
      subtitle: 'مع الدعم العربي الكامل والمستشفيات المعتمدة دولياً',
      description: 'نقدم خدمات السياحة الطبية الراقية مع مترجمين طبيين متخصصين في أفضل المستشفيات المعتمدة من JCI في بنغالور. رعاية شاملة من الاستشارة إلى المتابعة.',
      cta: 'احصل على عرض سعر مجاني',
      cta_secondary: 'تواصل عبر واتساب'
    },
    en: {
      title: 'World-Class Healthcare in Bangalore',
      subtitle: 'With Complete Arabic Support & JCI-Accredited Hospitals',
      description: 'Premium medical tourism services with specialized medical translators at Bangalore\'s finest JCI-accredited hospitals. Comprehensive care from consultation to follow-up.',
      cta: 'Get Free Quote',
      cta_secondary: 'Contact on WhatsApp'
    }
  },
  whyChooseUs: {
    ar: {
      title: 'لماذا تختار آه للسياحة الطبية؟',
      subtitle: 'الثقة والجودة والرعاية الشخصية في كل خطوة',
      reasons: [
        {
          title: 'مستشفيات معتمدة دولياً',
          description: 'شراكات حصرية مع مستشفيات معتمدة من JCI و NABH',
          icon: '🏥'
        },
        {
          title: 'أطباء معتمدون',
          description: 'فريق من الأطباء المتخصصين المعتمدين دولياً',
          icon: '👨‍⚕️'
        },
        {
          title: 'ترجمة طبية متخصصة',
          description: 'مترجمون طبيون مدربون يرافقونك في كل موعد',
          icon: '🗣️'
        },
        {
          title: 'أسعار شفافة',
          description: 'تكاليف واضحة بدون رسوم خفية - وفر حتى 70%',
          icon: '💰'
        },
        {
          title: 'رعاية شاملة',
          description: 'من الاستقبال في المطار إلى المتابعة بعد العلاج',
          icon: '🤝'
        },
        {
          title: 'دعم 24/7',
          description: 'فريق دعم متاح على مدار الساعة عبر واتساب',
          icon: '📞'
        }
      ]
    },
    en: {
      title: 'Why Choose AH Medical Tourism?',
      subtitle: 'Trust, Quality, and Personalized Care at Every Step',
      reasons: [
        {
          title: 'JCI-Accredited Hospitals',
          description: 'Exclusive partnerships with JCI & NABH accredited hospitals',
          icon: '🏥'
        },
        {
          title: 'Certified Specialists',
          description: 'Team of internationally certified specialist doctors',
          icon: '👨‍⚕️'
        },
        {
          title: 'Medical Translation',
          description: 'Trained medical translators accompany you to every appointment',
          icon: '🗣️'
        },
        {
          title: 'Transparent Pricing',
          description: 'Clear costs with no hidden fees - save up to 70%',
          icon: '💰'
        },
        {
          title: 'Complete Care',
          description: 'From airport pickup to post-treatment follow-up',
          icon: '🤝'
        },
        {
          title: '24/7 Support',
          description: 'Round-the-clock support team available via WhatsApp',
          icon: '📞'
        }
      ]
    }
  },
  testimonials: {
    ar: {
      title: 'ماذا يقول مرضانا',
      subtitle: 'قصص نجاح حقيقية من مرضى راضين',
      reviews: [
        {
          name: 'أحمد المالكي',
          location: 'الرياض، السعودية',
          treatment: 'زراعة الأسنان',
          rating: 5,
          text: 'تجربة استثنائية من البداية للنهاية. الفريق محترف والمترجم ساعدني كثيراً. النتائج فاقت توقعاتي.',
          image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
          verified: true
        },
        {
          name: 'فاطمة الزهراني',
          location: 'جدة، السعودية',
          treatment: 'الابتسامة الهوليوودية',
          rating: 5,
          text: 'خدمة راقية ونتائج مذهلة. شكراً للدكتور والفريق المساعد. أنصح الجميع بهذه الخدمة.',
          image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg',
          verified: true
        },
        {
          name: 'محمد العتيبي',
          location: 'الكويت',
          treatment: 'علاج البروستاتا',
          rating: 5,
          text: 'علاج ناجح والحمد لله. الفريق اهتم بكل التفاصيل والمتابعة ممتازة.',
          image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
          verified: true
        }
      ]
    },
    en: {
      title: 'What Our Patients Say',
      subtitle: 'Real success stories from satisfied patients',
      reviews: [
        {
          name: 'Ahmed Al-Malki',
          location: 'Riyadh, Saudi Arabia',
          treatment: 'Dental Implants',
          rating: 5,
          text: 'Exceptional experience from start to finish. Professional team and the translator helped me tremendously. Results exceeded my expectations.',
          image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
          verified: true
        },
        {
          name: 'Fatima Al-Zahrani',
          location: 'Jeddah, Saudi Arabia',
          treatment: 'Hollywood Smile',
          rating: 5,
          text: 'Premium service and amazing results. Thanks to the doctor and support team. I recommend this service to everyone.',
          image: 'https://images.pexels.com/photos/3768114/pexels-photo-3768114.jpeg',
          verified: true
        },
        {
          name: 'Mohammed Al-Otaibi',
          location: 'Kuwait',
          treatment: 'Prostate Treatment',
          rating: 5,
          text: 'Successful treatment, thank God. The team took care of every detail and follow-up was excellent.',
          image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
          verified: true
        }
      ]
    }
  },
  partners: {
    ar: {
      title: 'شركاؤنا من المستشفيات والأطباء',
      subtitle: 'نتعاون مع أفضل المؤسسات الطبية المعتمدة في بنغالور',
      hospitals: [
        {
          name: 'مستشفى فورتيس',
          accreditation: 'JCI, NABH',
          specialties: ['جراحة القلب', 'الأورام', 'زراعة الأعضاء'],
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'
        },
        {
          name: 'مستشفى أبولو',
          accreditation: 'JCI, NABH',
          specialties: ['جراحة الأعصاب', 'العظام', 'أمراض النساء'],
          image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
        },
        {
          name: 'مستشفى مانيبال',
          accreditation: 'NABH',
          specialties: ['الأسنان', 'العيون', 'الجلدية'],
          image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg'
        }
      ],
      doctors: [
        {
          name: 'د. راجيش كومار',
          specialty: 'جراح القلب',
          experience: '20+ سنة',
          credentials: 'MBBS, MS, MCh',
          image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg'
        },
        {
          name: 'د. بريا شارما',
          specialty: 'طبيبة أسنان تجميلية',
          experience: '15+ سنة',
          credentials: 'BDS, MDS',
          image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg'
        }
      ]
    },
    en: {
      title: 'Our Hospital & Doctor Partners',
      subtitle: 'We collaborate with Bangalore\'s finest accredited medical institutions',
      hospitals: [
        {
          name: 'Fortis Hospital',
          accreditation: 'JCI, NABH',
          specialties: ['Cardiac Surgery', 'Oncology', 'Organ Transplant'],
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg'
        },
        {
          name: 'Apollo Hospital',
          accreditation: 'JCI, NABH',
          specialties: ['Neurosurgery', 'Orthopedics', 'Gynecology'],
          image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg'
        },
        {
          name: 'Manipal Hospital',
          accreditation: 'NABH',
          specialties: ['Dentistry', 'Ophthalmology', 'Dermatology'],
          image: 'https://images.pexels.com/photos/1170979/pexels-photo-1170979.jpeg'
        }
      ],
      doctors: [
        {
          name: 'Dr. Rajesh Kumar',
          specialty: 'Cardiac Surgeon',
          experience: '20+ years',
          credentials: 'MBBS, MS, MCh',
          image: 'https://images.pexels.com/photos/5327580/pexels-photo-5327580.jpeg'
        },
        {
          name: 'Dr. Priya Sharma',
          specialty: 'Cosmetic Dentist',
          experience: '15+ years',
          credentials: 'BDS, MDS',
          image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg'
        }
      ]
    }
  },
  faq: {
    ar: {
      title: 'الأسئلة الشائعة',
      subtitle: 'إجابات على أهم الأسئلة حول خدماتنا',
      questions: [
        {
          question: 'هل الاستشارة الأولية مجانية؟',
          answer: 'نعم، نقدم استشارة مجانية تماماً لتقييم حالتك وتقديم خطة العلاج المناسبة مع تقدير التكاليف.'
        },
        {
          question: 'كيف أحصل على التأشيرة الطبية؟',
          answer: 'نساعدك في جميع إجراءات التأشيرة الطبية بما في ذلك الدعوة الطبية والوثائق المطلوبة.'
        },
        {
          question: 'هل المستشفيات معتمدة دولياً؟',
          answer: 'نعم، جميع شركاؤنا من المستشفيات معتمدة من JCI و NABH وتلتزم بأعلى معايير الجودة العالمية.'
        },
        {
          question: 'ما هي تكلفة الخدمات؟',
          answer: 'التكاليف تختلف حسب نوع العلاج. نقدم أسعاراً تنافسية مع شفافية كاملة وبدون رسوم خفية.'
        },
        {
          question: 'هل يوجد ضمان على العلاج؟',
          answer: 'نعم، نقدم ضمانات على العلاجات حسب نوع الإجراء، بالإضافة إلى متابعة مجانية لفترة محددة.'
        },
        {
          question: 'كم تستغرق مدة العلاج؟',
          answer: 'المدة تختلف حسب نوع العلاج. نقدم جدولاً زمنياً مفصلاً مع خطة العلاج.'
        }
      ]
    },
    en: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about our services',
      questions: [
        {
          question: 'Is the initial consultation free?',
          answer: 'Yes, we provide completely free consultation to assess your condition and provide appropriate treatment plan with cost estimates.'
        },
        {
          question: 'How do I get a medical visa?',
          answer: 'We assist you with all medical visa procedures including medical invitation and required documentation.'
        },
        {
          question: 'Are the hospitals internationally accredited?',
          answer: 'Yes, all our partner hospitals are JCI and NABH accredited and maintain the highest international quality standards.'
        },
        {
          question: 'What are the service costs?',
          answer: 'Costs vary depending on the type of treatment. We offer competitive pricing with complete transparency and no hidden fees.'
        },
        {
          question: 'Is there a treatment guarantee?',
          answer: 'Yes, we provide treatment guarantees based on the type of procedure, plus free follow-up for a specified period.'
        },
        {
          question: 'How long does treatment take?',
          answer: 'Duration varies by treatment type. We provide a detailed timeline with the treatment plan.'
        }
      ]
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
    image: 'https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg',
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
    image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
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
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
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
  {
    id: '4',
    title: {
      ar: 'تنسيق السياحة العلاجية',
      en: 'Medical Tourism Coordination'
    },
    description: {
      ar: 'مساعدة شاملة من تقييم التقارير إلى حجز المواعيد مع الأطباء',
      en: 'End-to-end help from report assessment to booking doctor appointments'
    },
    icon: '🧭',
    image: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg',
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
    id: '5',
    title: {
      ar: 'العلاج الطبيعي والعظام',
      en: 'Natural & Orthopedic Care'
    },
    description: {
      ar: 'العلاج الطبيعي لآلام الأعصاب والعظام والمفاصل بإشراف مختصين',
      en: 'Natural treatment for orthopedic nerve and joint pain under specialists'
    },
    icon: '🦴',
    image: 'https://images.pexels.com/photos/4506109/pexels-photo-4506109.jpeg',
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
    id: '6',
    title: {
      ar: 'خدمات الطعام العربي',
      en: 'Arabic Food Assistance'
    },
    description: {
      ar: 'إرشاد إلى مطاعم عربية قريبة وتوصيل الطعام عند الحاجة',
      en: 'Guidance to nearby Arabic restaurants and food delivery when needed'
    },
    icon: '🍽️',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg',
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