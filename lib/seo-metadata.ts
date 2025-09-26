import { Metadata } from 'next';

export const siteConfig = {
  name: {
    ar: 'آه للسياحة الطبية',
    en: 'AH Medical Tourism'
  },
  description: {
    ar: 'أفضل خدمات السياحة الطبية في بنغالور، الهند مع مترجم عربي متخصص. علاج الأسنان، البروستاتا، القلب، السرطان، العظام، التجميل، العقم، الأعصاب مع أطباء معتمدين دولياً في مستشفيات JCI معتمدة.',
    en: 'Premier medical tourism services in Bangalore, India with specialized Arabic translator. Dental, prostate, cardiac, cancer, orthopedic, cosmetic, fertility, neurology treatments with internationally certified doctors in JCI accredited hospitals.'
  },
  url: 'https://ahmedtourisms.com'
};

export const keywords = {
  ar: [
    // Medical Tourism General
    'السياحة الطبية في الهند', 'السياحة الطبية بنغالور', 'علاج طبي في الهند', 'مستشفيات الهند', 'أطباء الهند',
    'مترجم طبي عربي', 'خدمات طبية للعرب', 'علاج في بنغالور', 'مستشفيات بنغالور', 'أطباء بنغالور',
    
    // Dental Treatments
    'زراعة الأسنان في الهند', 'زراعة الأسنان بنغالور', 'علاج الأسنان في الهند', 'طبيب أسنان في بنغالور',
    'الابتسامة الهوليوودية', 'تجميل الأسنان', 'تقويم الأسنان', 'علاج اللثة', 'تبييض الأسنان',
    'جراحة الفم والأسنان', 'زراعة الأسنان الفورية', 'أسنان اصطناعية', 'تركيبات الأسنان',
    
    // Prostate & Urology
    'علاج البروستاتا في الهند', 'جراحة البروستاتا', 'تضخم البروستاتا', 'سرطان البروستاتا',
    'طبيب مسالك بولية', 'علاج حصى الكلى', 'جراحة المسالك البولية', 'علاج العقم عند الرجال',
    
    // Cancer Treatments
    'علاج السرطان في الهند', 'علاج الأورام', 'العلاج الكيميائي', 'العلاج الإشعاعي',
    'جراحة الأورام', 'سرطان الثدي', 'سرطان الرئة', 'سرطان القولون', 'سرطان الكبد',
    
    // Cardiac Treatments
    'علاج القلب في الهند', 'جراحة القلب', 'قسطرة القلب', 'جراحة الشرايين', 'زراعة القلب',
    'علاج أمراض القلب', 'جراحة صمامات القلب', 'علاج الذبحة الصدرية',
    
    // Orthopedic Treatments
    'علاج العظام في الهند', 'جراحة العظام', 'استبدال المفاصل', 'علاج الركبة', 'علاج الورك',
    'جراحة العمود الفقري', 'علاج الكسور', 'علاج آلام الظهر', 'العلاج الطبيعي',
    
    // Fertility & IVF
    'علاج العقم في الهند', 'أطفال الأنابيب', 'الحقن المجهري', 'علاج تأخر الإنجاب',
    'جراحة الرحم', 'علاج تكيس المبايض', 'علاج هرمونات الخصوبة',
    
    // Neurology
    'علاج الأعصاب في الهند', 'جراحة المخ والأعصاب', 'علاج الصرع', 'علاج الشلل الرعاش',
    'علاج الجلطة الدماغية', 'جراحة أورام المخ', 'علاج الصداع النصفي',
    
    // Cosmetic Surgery
    'جراحة التجميل في الهند', 'تجميل الأنف', 'شد الوجه', 'تكبير الثدي', 'شفط الدهون',
    'زراعة الشعر', 'تجميل الجفون', 'حقن البوتوكس', 'الفيلر',
    
    // General Medical Services
    'فحص شامل', 'تشخيص طبي', 'استشارة طبية', 'رعاية طبية متقدمة', 'مستشفيات JCI',
    'أطباء معتمدين', 'تكلفة العلاج في الهند', 'أسعار العلاج الطبي'
  ],
  en: [
    // Medical Tourism General
    'medical tourism India', 'medical tourism Bangalore', 'healthcare India', 'hospitals India', 'doctors India',
    'Arabic medical translator', 'medical services for Arabs', 'treatment in Bangalore', 'Bangalore hospitals', 'Bangalore doctors',
    'medical travel India', 'health tourism India', 'international patients India', 'medical visa India',
    
    // Dental Treatments
    'dental implants India', 'dental implants Bangalore', 'dental treatment India', 'dentist Bangalore',
    'Hollywood smile', 'cosmetic dentistry', 'orthodontics', 'gum treatment', 'teeth whitening',
    'oral surgery', 'immediate dental implants', 'dentures', 'dental crowns', 'root canal treatment',
    
    // Prostate & Urology
    'prostate treatment India', 'prostate surgery', 'enlarged prostate', 'prostate cancer',
    'urologist India', 'kidney stone treatment', 'urology surgery', 'male infertility treatment',
    'bladder surgery', 'urinary tract treatment',
    
    // Cancer Treatments
    'cancer treatment India', 'oncology India', 'chemotherapy', 'radiation therapy',
    'cancer surgery', 'breast cancer treatment', 'lung cancer treatment', 'colon cancer treatment',
    'liver cancer treatment', 'best cancer hospital India', 'oncologist Bangalore',
    
    // Cardiac Treatments
    'heart treatment India', 'cardiac surgery', 'heart catheterization', 'bypass surgery', 'heart transplant',
    'cardiology India', 'heart valve surgery', 'angioplasty', 'best cardiologist India',
    
    // Orthopedic Treatments
    'orthopedic treatment India', 'bone surgery', 'joint replacement', 'knee replacement', 'hip replacement',
    'spine surgery', 'fracture treatment', 'back pain treatment', 'physiotherapy India',
    'sports medicine India', 'arthroscopy',
    
    // Fertility & IVF
    'fertility treatment India', 'IVF India', 'infertility treatment', 'reproductive medicine',
    'egg donation', 'surrogacy India', 'fertility clinic Bangalore', 'IVF cost India',
    
    // Neurology
    'neurology treatment India', 'brain surgery', 'epilepsy treatment', 'Parkinson treatment',
    'stroke treatment', 'brain tumor surgery', 'migraine treatment', 'neurologist Bangalore',
    
    // Cosmetic Surgery
    'cosmetic surgery India', 'plastic surgery India', 'rhinoplasty', 'facelift', 'breast augmentation',
    'liposuction', 'hair transplant India', 'blepharoplasty', 'botox India', 'dermal fillers',
    
    // General Medical Services
    'health checkup India', 'medical diagnosis', 'medical consultation', 'advanced healthcare',
    'JCI hospitals India', 'certified doctors', 'medical treatment cost India', 'affordable healthcare India',
    'second opinion India', 'medical tourism packages'
  ]
};

export function generateMetadata(lang: 'ar' | 'en', page?: string): Metadata {
  const baseTitle = siteConfig.name[lang];
  const baseDescription = siteConfig.description[lang];
  
  let title = baseTitle;
  let description = baseDescription;
  
  // Page-specific metadata
  if (page === 'about') {
    title = lang === 'ar' 
      ? `من نحن - ${baseTitle} | خبرة 10+ سنوات في السياحة الطبية`
      : `About Us - ${baseTitle} | 10+ Years Medical Tourism Experience`;
    description = lang === 'ar'
      ? 'تعرف على فريق آه للسياحة الطبية وخبرتنا في تقديم أفضل خدمات العلاج الطبي في بنغالور مع مترجم عربي متخصص ومرافقة شاملة للمرضى العرب.'
      : 'Learn about AH Medical Tourism team and our expertise in providing the best medical treatment services in Bangalore with specialized Arabic translator and comprehensive care for Arab patients.';
  } else if (page === 'services') {
    title = lang === 'ar'
      ? `خدماتنا الطبية - ${baseTitle} | ترجمة طبية وتنسيق العلاج`
      : `Our Medical Services - ${baseTitle} | Medical Translation & Treatment Coordination`;
    description = lang === 'ar'
      ? 'خدمات شاملة تشمل الترجمة الطبية، تنسيق العلاج، الإقامة، النقل، والمرافقة الطبية مع أفضل المستشفيات المعتمدة في بنغالور.'
      : 'Comprehensive services including medical translation, treatment coordination, accommodation, transport, and medical accompaniment with the best accredited hospitals in Bangalore.';
  } else if (page === 'treatments') {
    title = lang === 'ar'
      ? `العلاجات الطبية - ${baseTitle} | أسنان، بروستاتا، قلب، سرطان`
      : `Medical Treatments - ${baseTitle} | Dental, Prostate, Cardiac, Cancer`;
    description = lang === 'ar'
      ? 'علاجات طبية متخصصة في بنغالور: زراعة الأسنان، علاج البروستاتا، جراحة القلب، علاج السرطان، العظام، التجميل مع أطباء معتمدين دولياً.'
      : 'Specialized medical treatments in Bangalore: dental implants, prostate treatment, cardiac surgery, cancer treatment, orthopedics, cosmetics with internationally certified doctors.';
  } else if (page === 'contact') {
    title = lang === 'ar'
      ? `اتصل بنا - ${baseTitle} | استشارة مجانية عبر واتساب`
      : `Contact Us - ${baseTitle} | Free Consultation via WhatsApp`;
    description = lang === 'ar'
      ? 'تواصل معنا للحصول على استشارة طبية مجانية وتقييم حالتك. متاح 24/7 عبر واتساب مع فريق متخصص في السياحة الطبية.'
      : 'Contact us for free medical consultation and case assessment. Available 24/7 via WhatsApp with specialized medical tourism team.';
  }
  
  const keywordString = keywords[lang].join(', ');
  
  return {
    title,
    description,
    keywords: keywordString,
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/${lang}${page ? `/${page}` : ''}`,
      siteName: siteConfig.name[lang],
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/hero-image.jpeg',
          width: 1200,
          height: 630,
          alt: lang === 'ar' ? 'آه للسياحة الطبية - أفضل خدمات العلاج في بنغالور' : 'AH Medical Tourism - Best Treatment Services in Bangalore'
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/hero-image.jpeg']
    },
    alternates: {
      canonical: `${siteConfig.url}/${lang}${page ? `/${page}` : ''}`,
      languages: {
        ar: `${siteConfig.url}/ar${page ? `/${page}` : ''}`,
        en: `${siteConfig.url}/en${page ? `/${page}` : ''}`,
        'x-default': `${siteConfig.url}/ar${page ? `/${page}` : ''}`
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
    }
  };
}

export function generateRootMetadata(lang: 'ar' | 'en'): Metadata {
  return generateMetadata(lang);
}