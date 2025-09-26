import { content } from '@/lib/content';
import ContactInfo from '@/components/ContactInfo';

interface Props {
  params: { lang: string };
}

export async function generateStaticParams() {
  return [{ lang: 'ar' }, { lang: 'en' }];
}

export default function Contact({ params }: Props) {
  const lang = params.lang as 'ar' | 'en';
  const contactContent = content.contact[lang];

  return <ContactInfo lang={lang} contactContent={contactContent} />;
}