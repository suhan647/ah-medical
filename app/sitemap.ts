import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ahmedtourisms.com';
  const languages = ['ar', 'en'];
  const pages = ['', '/about', '/services', '/treatments', '/contact'];
  const treatments = ['/treatments/dental-implants-bangalore'];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/treatments`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
  const sitemap: MetadataRoute.Sitemap = [];

  // Generate URLs for each language and page combination
  languages.forEach(lang => {
    pages.forEach(page => {
      const url = page === '' ? `${baseUrl}/${lang}` : `${baseUrl}/${lang}${page}`;
      const priority = page === '' ? 1 : page === '/contact' ? 0.5 : 0.8;
      
      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : page === '/contact' ? 'monthly' : 'weekly',
        priority,
      });
    });

    // Add treatment pages
    treatments.forEach(treatment => {
      sitemap.push({
        url: `${baseUrl}/${lang}${treatment}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 0.7,
      });
    });
  });

  return sitemap;
}