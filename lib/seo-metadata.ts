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
    'العلاج في الهند للعرب', 'السياحة العلاجية', 'العلاج الطبي في الهند', 'مستشفيات معتمدة في الهند',
    'أفضل مستشفيات الهند', 'العلاج في بنغالور للعرب', 'تكلفة العلاج في الهند', 'أسعار العلاج في الهند',
    
    // Disease-Specific Keywords
    'علاج السكري في الهند', 'علاج الضغط في الهند', 'علاج الكوليسترول في الهند', 'علاج أمراض القلب في الهند',
    'علاج السرطان في الهند', 'علاج الأورام في الهند', 'علاج أمراض الكلى في الهند', 'علاج أمراض الكبد في الهند',
    'علاج أمراض الرئة في الهند', 'علاج أمراض العظام في الهند', 'علاج أمراض العيون في الهند',
    'علاج أمراض الجلد في الهند', 'علاج أمراض النساء في الهند', 'علاج أمراض الأطفال في الهند',
    
    // Specific Diseases
    'علاج سرطان الثدي في الهند', 'علاج سرطان الرئة في الهند', 'علاج سرطان القولون في الهند',
    'علاج سرطان البروستاتا في الهند', 'علاج سرطان الكبد في الهند', 'علاج سرطان الدم في الهند',
    'علاج أمراض القلب التاجية', 'علاج قصور القلب', 'علاج الجلطة القلبية', 'علاج الذبحة الصدرية',
    'علاج ارتفاع ضغط الدم', 'علاج السكري النوع الأول', 'علاج السكري النوع الثاني',
    'علاج الفشل الكلوي', 'علاج حصى الكلى', 'علاج التهاب الكبد', 'علاج تليف الكبد',
    'علاج الربو', 'علاج التهاب الرئة', 'علاج السل', 'علاج سرطان الرئة',
    'علاج هشاشة العظام', 'علاج التهاب المفاصل', 'علاج الروماتيزم', 'علاج آلام الظهر',
    'علاج المياه البيضاء', 'علاج المياه الزرقاء', 'علاج انفصال الشبكية', 'علاج قصر النظر',
    'علاج الصدفية', 'علاج الأكزيما', 'علاج البهاق', 'علاج حب الشباب',
    'علاج تكيس المبايض', 'علاج الأورام الليفية', 'علاج سرطان الرحم', 'علاج سرطان المبيض',
    'علاج التوحد', 'علاج الشلل الدماغي', 'علاج الصرع', 'علاج الشلل الرعاش',
    
    // Dental Treatments - Enhanced for your specific services
    'زراعة الأسنان في الهند', 'زراعة الأسنان بنغالور', 'علاج الأسنان في الهند', 'طبيب أسنان في بنغالور',
    'الابتسامة الهوليوودية', 'تجميل الأسنان', 'تقويم الأسنان', 'علاج اللثة', 'تبييض الأسنان',
    'جراحة الفم والأسنان', 'زراعة الأسنان الفورية', 'أسنان اصطناعية', 'تركيبات الأسنان',
    'علاج جذور الأسنان', 'حشو الأسنان', 'خلع الأسنان', 'جراحة الفك',
    
    // Dental Implants - Comprehensive keywords
    'زراعة الأسنان', 'زراعة الأسنان الفورية', 'زراعة الأسنان في بنغالور', 'زراعة الأسنان في الهند',
    'أفضل طبيب أسنان في بنغالور', 'زراعة الأسنان للعرب', 'تكلفة زراعة الأسنان في الهند',
    'زراعة الأسنان السويسرية', 'زراعة الأسنان الألمانية', 'زراعة الأسنان الكورية',
    'زراعة الأسنان بدون ألم', 'زراعة الأسنان في يوم واحد', 'زراعة الأسنان المتقدمة',
    'زراعة الأسنان بالليزر', 'زراعة الأسنان بالكمبيوتر', 'زراعة الأسنان ثلاثية الأبعاد',
    'زراعة الأسنان المعتمدة', 'زراعة الأسنان بضمان', 'زراعة الأسنان الناجحة',
    'زراعة الأسنان للمسنين', 'زراعة الأسنان للشباب', 'زراعة الأسنان للنساء',
    'زراعة الأسنان للرجال', 'زراعة الأسنان للعائلات', 'زراعة الأسنان للسياح',
    
    // Hollywood Smile - Comprehensive keywords
    'الابتسامة الهوليوودية', 'الابتسامة الهوليوودية في الهند', 'الابتسامة الهوليوودية في بنغالور',
    'تجميل الأسنان', 'تجميل الأسنان في الهند', 'تجميل الأسنان في بنغالور',
    'ابتسامة هوليوودية مثالية', 'ابتسامة هوليوودية طبيعية', 'ابتسامة هوليوودية دائمة',
    'تبييض الأسنان', 'تبييض الأسنان بالليزر', 'تبييض الأسنان المنزلي',
    'تقويم الأسنان', 'تقويم الأسنان الشفاف', 'تقويم الأسنان الخفي',
    'قشور الأسنان', 'قشور البورسلين', 'قشور السيراميك',
    'تجميل الأسنان الأمامية', 'تجميل الأسنان الخلفية', 'تجميل الأسنان العلوية',
    'ابتسامة جذابة', 'ابتسامة مثالية', 'ابتسامة طبيعية',
    'تجميل الأسنان للعرب', 'تجميل الأسنان للنساء', 'تجميل الأسنان للرجال',
    'تكلفة الابتسامة الهوليوودية', 'أسعار الابتسامة الهوليوودية',
    
    // Natural Treatment - Comprehensive keywords
    'العلاج الطبيعي', 'العلاج الطبيعي في الهند', 'العلاج الطبيعي في بنغالور',
    'علاج طبيعي للعظام', 'علاج طبيعي للأعصاب', 'علاج طبيعي للمفاصل',
    'علاج آلام الظهر', 'علاج آلام الرقبة', 'علاج آلام الكتف',
    'علاج آلام الركبة', 'علاج آلام الورك', 'علاج آلام القدم',
    'العلاج الطبيعي للعظام', 'العلاج الطبيعي للأعصاب', 'العلاج الطبيعي للمفاصل',
    'علاج طبيعي بدون جراحة', 'علاج طبيعي بدون أدوية', 'علاج طبيعي آمن',
    'العلاج الطبيعي للعرب', 'العلاج الطبيعي للنساء', 'العلاج الطبيعي للرجال',
    'العلاج الطبيعي للمسنين', 'العلاج الطبيعي للشباب', 'العلاج الطبيعي للأطفال',
    'جلسات العلاج الطبيعي', 'برنامج العلاج الطبيعي', 'خطة العلاج الطبيعي',
    'أخصائي العلاج الطبيعي', 'طبيب العلاج الطبيعي', 'معالج طبيعي',
    'تكلفة العلاج الطبيعي', 'أسعار العلاج الطبيعي', 'مدة العلاج الطبيعي',
    
    // Prostate & Urology - Enhanced for your specific services
    'علاج البروستاتا في الهند', 'جراحة البروستاتا', 'تضخم البروستاتا', 'سرطان البروستاتا',
    'طبيب مسالك بولية', 'علاج حصى الكلى', 'جراحة المسالك البولية', 'علاج العقم عند الرجال',
    'علاج ضعف الانتصاب', 'علاج سرعة القذف', 'علاج دوالي الخصية', 'علاج التهاب البروستاتا',
    
    // Prostate Treatment - Comprehensive keywords
    'علاج البروستاتا', 'علاج البروستاتا في بنغالور', 'علاج البروستاتا في الهند',
    'أفضل طبيب مسالك بولية في بنغالور', 'علاج البروستاتا للعرب', 'تكلفة علاج البروستاتا في الهند',
    'تضخم البروستاتا', 'تضخم البروستاتا الحميد', 'تضخم البروستاتا الخبيث',
    'سرطان البروستاتا', 'سرطان البروستاتا المبكر', 'سرطان البروستاتا المتقدم',
    'جراحة البروستاتا', 'جراحة البروستاتا بالمنظار', 'جراحة البروستاتا بالليزر',
    'علاج البروستاتا بدون جراحة', 'علاج البروستاتا بالدواء', 'علاج البروستاتا بالعلاج الإشعاعي',
    'أعراض البروستاتا', 'تشخيص البروستاتا', 'فحص البروستاتا',
    'علاج البروستاتا للرجال', 'علاج البروستاتا للمسنين', 'علاج البروستاتا للشباب',
    'مستشفى علاج البروستاتا', 'عيادة علاج البروستاتا', 'مركز علاج البروستاتا',
    'تكلفة جراحة البروستاتا', 'أسعار علاج البروستاتا', 'مدة علاج البروستاتا',
    'نتائج علاج البروستاتا', 'نجاح علاج البروستاتا', 'مضاعفات علاج البروستاتا',
    
    // Cancer Treatments
    'علاج السرطان في الهند', 'علاج الأورام', 'العلاج الكيميائي', 'العلاج الإشعاعي',
    'جراحة الأورام', 'سرطان الثدي', 'سرطان الرئة', 'سرطان القولون', 'سرطان الكبد',
    'العلاج المناعي', 'العلاج الموجه', 'زراعة النخاع العظمي', 'العلاج بالخلايا الجذعية',
    
    // Cardiac Treatments
    'علاج القلب في الهند', 'جراحة القلب', 'قسطرة القلب', 'جراحة الشرايين', 'زراعة القلب',
    'علاج أمراض القلب', 'جراحة صمامات القلب', 'علاج الذبحة الصدرية', 'جراحة القلب المفتوح',
    'قسطرة الشرايين التاجية', 'زراعة دعامات القلب', 'علاج عدم انتظام ضربات القلب',
    
    // Orthopedic Treatments
    'علاج العظام في الهند', 'جراحة العظام', 'استبدال المفاصل', 'علاج الركبة', 'علاج الورك',
    'جراحة العمود الفقري', 'علاج الكسور', 'علاج آلام الظهر', 'العلاج الطبيعي',
    'استبدال مفصل الركبة', 'استبدال مفصل الورك', 'جراحة الغضروف', 'علاج تمزق الأربطة',
    
    // Fertility & IVF
    'علاج العقم في الهند', 'أطفال الأنابيب', 'الحقن المجهري', 'علاج تأخر الإنجاب',
    'جراحة الرحم', 'علاج تكيس المبايض', 'علاج هرمونات الخصوبة', 'تجميد البويضات',
    'تجميد الأجنة', 'الحمل خارج الرحم', 'علاج الإجهاض المتكرر',
    
    // Neurology
    'علاج الأعصاب في الهند', 'جراحة المخ والأعصاب', 'علاج الصرع', 'علاج الشلل الرعاش',
    'علاج الجلطة الدماغية', 'جراحة أورام المخ', 'علاج الصداع النصفي', 'علاج الشلل النصفي',
    'علاج التصلب المتعدد', 'علاج أورام المخ', 'جراحة العمود الفقري',
    
    // Cosmetic Surgery
    'جراحة التجميل في الهند', 'تجميل الأنف', 'شد الوجه', 'تكبير الثدي', 'شفط الدهون',
    'زراعة الشعر', 'تجميل الجفون', 'حقن البوتوكس', 'الفيلر', 'جراحة تجميل الأنف',
    'شد البطن', 'تكبير الأرداف', 'تجميل الأذن', 'جراحة تجميل الوجه',
    
    // General Medical Services
    'فحص شامل', 'تشخيص طبي', 'استشارة طبية', 'رعاية طبية متقدمة', 'مستشفيات JCI',
    'أطباء معتمدين', 'تكلفة العلاج في الهند', 'أسعار العلاج الطبي', 'العلاج في أفضل مستشفيات الهند',
    'مستشفيات معتمدة دولياً', 'أطباء متخصصين في الهند', 'العلاج الطبي المتقدم في الهند'
  ],
  en: [
    // Medical Tourism General
    'medical tourism India', 'medical tourism Bangalore', 'healthcare India', 'hospitals India', 'doctors India',
    'Arabic medical translator', 'medical services for Arabs', 'treatment in Bangalore', 'Bangalore hospitals', 'Bangalore doctors',
    'medical travel India', 'health tourism India', 'international patients India', 'medical visa India',
    'treatment in India for Arabs', 'medical tourism', 'medical treatment in India', 'accredited hospitals India',
    'best hospitals India', 'treatment in Bangalore for Arabs', 'treatment cost India', 'medical treatment prices India',
    
    // Disease-Specific Keywords
    'diabetes treatment India', 'hypertension treatment India', 'cholesterol treatment India', 'heart disease treatment India',
    'cancer treatment India', 'tumor treatment India', 'kidney disease treatment India', 'liver disease treatment India',
    'lung disease treatment India', 'bone disease treatment India', 'eye disease treatment India',
    'skin disease treatment India', 'women disease treatment India', 'pediatric treatment India',
    
    // Specific Diseases
    'breast cancer treatment India', 'lung cancer treatment India', 'colon cancer treatment India',
    'prostate cancer treatment India', 'liver cancer treatment India', 'blood cancer treatment India',
    'coronary heart disease treatment', 'heart failure treatment', 'heart attack treatment', 'angina treatment',
    'high blood pressure treatment', 'type 1 diabetes treatment', 'type 2 diabetes treatment',
    'kidney failure treatment', 'kidney stone treatment', 'hepatitis treatment', 'cirrhosis treatment',
    'asthma treatment', 'pneumonia treatment', 'tuberculosis treatment', 'lung cancer treatment',
    'osteoporosis treatment', 'arthritis treatment', 'rheumatism treatment', 'back pain treatment',
    'cataract treatment', 'glaucoma treatment', 'retinal detachment treatment', 'myopia treatment',
    'psoriasis treatment', 'eczema treatment', 'vitiligo treatment', 'acne treatment',
    'PCOS treatment', 'fibroid treatment', 'uterine cancer treatment', 'ovarian cancer treatment',
    'autism treatment', 'cerebral palsy treatment', 'epilepsy treatment', 'Parkinson treatment',
    
    // Dental Treatments - Enhanced for your specific services
    'dental implants India', 'dental implants Bangalore', 'dental treatment India', 'dentist Bangalore',
    'Hollywood smile', 'cosmetic dentistry', 'orthodontics', 'gum treatment', 'teeth whitening',
    'oral surgery', 'immediate dental implants', 'dentures', 'dental crowns', 'root canal treatment',
    'dental root treatment', 'dental filling', 'tooth extraction', 'jaw surgery',
    
    // Dental Implants - Comprehensive keywords
    'dental implants', 'immediate dental implants', 'dental implants Bangalore', 'dental implants India',
    'best dentist Bangalore', 'dental implants for Arabs', 'dental implants cost India',
    'Swiss dental implants', 'German dental implants', 'Korean dental implants',
    'painless dental implants', 'same day dental implants', 'advanced dental implants',
    'laser dental implants', 'computer guided dental implants', '3D dental implants',
    'certified dental implants', 'guaranteed dental implants', 'successful dental implants',
    'dental implants for seniors', 'dental implants for young', 'dental implants for women',
    'dental implants for men', 'dental implants for families', 'dental implants for tourists',
    'dental implant surgery', 'dental implant procedure', 'dental implant recovery',
    'dental implant maintenance', 'dental implant care', 'dental implant follow up',
    
    // Hollywood Smile - Comprehensive keywords
    'Hollywood smile', 'Hollywood smile India', 'Hollywood smile Bangalore',
    'cosmetic dentistry', 'cosmetic dentistry India', 'cosmetic dentistry Bangalore',
    'perfect Hollywood smile', 'natural Hollywood smile', 'permanent Hollywood smile',
    'teeth whitening', 'laser teeth whitening', 'home teeth whitening',
    'orthodontics', 'clear aligners', 'invisible braces',
    'dental veneers', 'porcelain veneers', 'ceramic veneers',
    'front teeth cosmetic', 'back teeth cosmetic', 'upper teeth cosmetic',
    'attractive smile', 'perfect smile', 'natural smile',
    'cosmetic dentistry for Arabs', 'cosmetic dentistry for women', 'cosmetic dentistry for men',
    'Hollywood smile cost', 'Hollywood smile price', 'Hollywood smile treatment',
    
    // Natural Treatment - Comprehensive keywords
    'natural treatment', 'natural treatment India', 'natural treatment Bangalore',
    'natural bone treatment', 'natural nerve treatment', 'natural joint treatment',
    'back pain treatment', 'neck pain treatment', 'shoulder pain treatment',
    'knee pain treatment', 'hip pain treatment', 'foot pain treatment',
    'natural treatment for bones', 'natural treatment for nerves', 'natural treatment for joints',
    'natural treatment without surgery', 'natural treatment without medicine', 'safe natural treatment',
    'natural treatment for Arabs', 'natural treatment for women', 'natural treatment for men',
    'natural treatment for seniors', 'natural treatment for young', 'natural treatment for children',
    'natural treatment sessions', 'natural treatment program', 'natural treatment plan',
    'natural treatment specialist', 'natural treatment doctor', 'natural therapist',
    'natural treatment cost', 'natural treatment price', 'natural treatment duration',
    
    // Prostate & Urology - Enhanced for your specific services
    'prostate treatment India', 'prostate surgery', 'enlarged prostate', 'prostate cancer',
    'urologist India', 'kidney stone treatment', 'urology surgery', 'male infertility treatment',
    'bladder surgery', 'urinary tract treatment', 'erectile dysfunction treatment', 'premature ejaculation treatment',
    'varicocele treatment', 'prostatitis treatment',
    
    // Prostate Treatment - Comprehensive keywords
    'prostate treatment', 'prostate treatment Bangalore', 'prostate treatment India',
    'best urologist Bangalore', 'prostate treatment for Arabs', 'prostate treatment cost India',
    'enlarged prostate', 'benign prostate enlargement', 'malignant prostate enlargement',
    'prostate cancer', 'early prostate cancer', 'advanced prostate cancer',
    'prostate surgery', 'laparoscopic prostate surgery', 'laser prostate surgery',
    'prostate treatment without surgery', 'prostate treatment with medicine', 'prostate radiation treatment',
    'prostate symptoms', 'prostate diagnosis', 'prostate examination',
    'prostate treatment for men', 'prostate treatment for seniors', 'prostate treatment for young',
    'prostate treatment hospital', 'prostate treatment clinic', 'prostate treatment center',
    'prostate surgery cost', 'prostate treatment price', 'prostate treatment duration',
    'prostate treatment results', 'prostate treatment success', 'prostate treatment complications',
    
    // Cancer Treatments
    'cancer treatment India', 'oncology India', 'chemotherapy', 'radiation therapy',
    'cancer surgery', 'breast cancer treatment', 'lung cancer treatment', 'colon cancer treatment',
    'liver cancer treatment', 'best cancer hospital India', 'oncologist Bangalore',
    'immunotherapy', 'targeted therapy', 'bone marrow transplant', 'stem cell therapy',
    
    // Cardiac Treatments
    'heart treatment India', 'cardiac surgery', 'heart catheterization', 'bypass surgery', 'heart transplant',
    'cardiology India', 'heart valve surgery', 'angioplasty', 'best cardiologist India',
    'open heart surgery', 'coronary angioplasty', 'heart stent', 'arrhythmia treatment',
    
    // Orthopedic Treatments
    'orthopedic treatment India', 'bone surgery', 'joint replacement', 'knee replacement', 'hip replacement',
    'spine surgery', 'fracture treatment', 'back pain treatment', 'physiotherapy India',
    'sports medicine India', 'arthroscopy', 'knee joint replacement', 'hip joint replacement',
    'cartilage surgery', 'ligament tear treatment',
    
    // Fertility & IVF
    'fertility treatment India', 'IVF India', 'infertility treatment', 'reproductive medicine',
    'egg donation', 'surrogacy India', 'fertility clinic Bangalore', 'IVF cost India',
    'egg freezing', 'embryo freezing', 'ectopic pregnancy treatment', 'recurrent miscarriage treatment',
    
    // Neurology
    'neurology treatment India', 'brain surgery', 'epilepsy treatment', 'Parkinson treatment',
    'stroke treatment', 'brain tumor surgery', 'migraine treatment', 'neurologist Bangalore',
    'hemiplegia treatment', 'multiple sclerosis treatment', 'brain tumor treatment', 'spine surgery',
    
    // Cosmetic Surgery
    'cosmetic surgery India', 'plastic surgery India', 'rhinoplasty', 'facelift', 'breast augmentation',
    'liposuction', 'hair transplant India', 'blepharoplasty', 'botox India', 'dermal fillers',
    'nose job surgery', 'tummy tuck', 'buttock augmentation', 'ear surgery', 'facial surgery',
    
    // General Medical Services
    'health checkup India', 'medical diagnosis', 'medical consultation', 'advanced healthcare',
    'JCI hospitals India', 'certified doctors', 'medical treatment cost India', 'affordable healthcare India',
    'second opinion India', 'medical tourism packages', 'treatment in best hospitals India',
    'internationally accredited hospitals', 'specialist doctors India', 'advanced medical treatment India'
  ]
};

export function generateMetadata(lang: 'ar' | 'en', page?: string): Metadata {
  const baseTitle = siteConfig.name[lang];
  const baseDescription = siteConfig.description[lang];
  
  let title = baseTitle;
  let description = baseDescription;
  
  // Add location and disease-specific enhancements
  const locationKeywords = lang === 'ar' 
    ? 'في بنغالور، الهند' 
    : 'in Bangalore, India';
  
  const diseaseKeywords = lang === 'ar'
    ? 'علاج السرطان، السكري، القلب، الكلى، الكبد، العظام، العيون'
    : 'cancer, diabetes, heart, kidney, liver, bone, eye treatment';
  
  // Page-specific metadata
  if (page === 'about') {
    title = lang === 'ar' 
      ? `من نحن - ${baseTitle} | خبرة 10+ سنوات في السياحة الطبية ${locationKeywords}`
      : `About Us - ${baseTitle} | 10+ Years Medical Tourism Experience ${locationKeywords}`;
    description = lang === 'ar'
      ? `تعرف على فريق آه للسياحة الطبية وخبرتنا في تقديم أفضل خدمات العلاج الطبي ${locationKeywords} مع مترجم عربي متخصص ومرافقة شاملة للمرضى العرب. ${diseaseKeywords}`
      : `Learn about AH Medical Tourism team and our expertise in providing the best medical treatment services ${locationKeywords} with specialized Arabic translator and comprehensive care for Arab patients. ${diseaseKeywords}`;
  } else if (page === 'services') {
    title = lang === 'ar'
      ? `خدماتنا الطبية - ${baseTitle} | ترجمة طبية وتنسيق العلاج ${locationKeywords}`
      : `Our Medical Services - ${baseTitle} | Medical Translation & Treatment Coordination ${locationKeywords}`;
    description = lang === 'ar'
      ? `خدمات شاملة تشمل الترجمة الطبية، تنسيق العلاج، الإقامة، النقل، والمرافقة الطبية مع أفضل المستشفيات المعتمدة ${locationKeywords}. ${diseaseKeywords}`
      : `Comprehensive services including medical translation, treatment coordination, accommodation, transport, and medical accompaniment with the best accredited hospitals ${locationKeywords}. ${diseaseKeywords}`;
  } else if (page === 'treatments') {
    title = lang === 'ar'
      ? `العلاجات الطبية - ${baseTitle} | ${diseaseKeywords} ${locationKeywords}`
      : `Medical Treatments - ${baseTitle} | ${diseaseKeywords} ${locationKeywords}`;
    description = lang === 'ar'
      ? `علاجات طبية متخصصة ${locationKeywords}: زراعة الأسنان، علاج البروستاتا، جراحة القلب، علاج السرطان، العظام، التجميل مع أطباء معتمدين دولياً. ${diseaseKeywords}`
      : `Specialized medical treatments ${locationKeywords}: dental implants, prostate treatment, cardiac surgery, cancer treatment, orthopedics, cosmetics with internationally certified doctors. ${diseaseKeywords}`;
  } else if (page === 'contact') {
    title = lang === 'ar'
      ? `اتصل بنا - ${baseTitle} | استشارة مجانية عبر واتساب ${locationKeywords}`
      : `Contact Us - ${baseTitle} | Free Consultation via WhatsApp ${locationKeywords}`;
    description = lang === 'ar'
      ? `تواصل معنا للحصول على استشارة طبية مجانية وتقييم حالتك. متاح 24/7 عبر واتساب مع فريق متخصص في السياحة الطبية ${locationKeywords}. ${diseaseKeywords}`
      : `Contact us for free medical consultation and case assessment. Available 24/7 via WhatsApp with specialized medical tourism team ${locationKeywords}. ${diseaseKeywords}`;
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
      yandex: 'your-yandex-verification-code',
    },
    other: {
      'google-site-verification': 'your-google-verification-code',
      'msvalidate.01': 'your-bing-verification-code',
      'yandex-verification': 'your-yandex-verification-code',
    }
  };
}

export function generateRootMetadata(lang: 'ar' | 'en'): Metadata {
  return generateMetadata(lang);
}