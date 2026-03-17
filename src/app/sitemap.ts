import { MetadataRoute } from 'next'

const BASE_URL = 'https://sinnes.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/reproduction-cle-voiture/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/serrurier-automobile-nice/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/tarif-cle-voiture/', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/programmation-cle-voiture/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/double-cle-voiture/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/cle-voiture-perdue/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/urgence-cle-voiture/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/depannage-cle-domicile/', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/cle-voiture-transpondeur/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/cle-voiture-nice/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/prix-cle-voiture/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/prix-cle-vs-concessionnaire/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/refaire-cle-hyundai/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/refaire-cle-audi/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/refaire-cle-fiat/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/refaire-cle-toyota/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/refaire-cle-mercedes/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/refaire-cle-renault/', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/acheter-une-voiture/', priority: 0.5, changeFrequency: 'monthly' as const },
    { url: '/qui-sommes-nous/', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/contactez-nous/', priority: 0.6, changeFrequency: 'yearly' as const },
    { url: '/mentions-legales-et-politique-de-confidentialite/', priority: 0.3, changeFrequency: 'yearly' as const },
  ]

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE_URL}${url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))
}
