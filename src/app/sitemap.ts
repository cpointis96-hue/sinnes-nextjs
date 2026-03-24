import { MetadataRoute } from 'next'

const BASE_URL = 'https://sinnes.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const, lastModified: '2026-03-23' },
    { url: '/reproduction-cle-voiture/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-23' },
    { url: '/serrurier-automobile-nice/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-22' },
    { url: '/tarif-cle-voiture/', priority: 0.9, changeFrequency: 'monthly' as const, lastModified: '2026-03-21' },
    { url: '/programmation-cle-voiture/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-20' },
    { url: '/double-cle-voiture/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-19' },
    { url: '/cle-voiture-perdue/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-18' },
    { url: '/urgence-cle-voiture/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-17' },
    { url: '/depannage-cle-domicile/', priority: 0.8, changeFrequency: 'monthly' as const, lastModified: '2026-03-16' },
    { url: '/cle-voiture-transpondeur/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-15' },
    { url: '/cle-voiture-nice/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-14' },
    { url: '/prix-cle-voiture/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-13' },
    { url: '/prix-cle-vs-concessionnaire/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-12' },
    { url: '/refaire-cle-hyundai/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-11' },
    { url: '/refaire-cle-audi/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-10' },
    { url: '/refaire-cle-fiat/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-09' },
    { url: '/refaire-cle-toyota/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-08' },
    { url: '/refaire-cle-mercedes/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-07' },
    { url: '/refaire-cle-renault/', priority: 0.7, changeFrequency: 'monthly' as const, lastModified: '2026-03-06' },
    { url: '/qui-sommes-nous/', priority: 0.5, changeFrequency: 'yearly' as const, lastModified: '2026-03-05' },
    { url: '/contactez-nous/', priority: 0.6, changeFrequency: 'yearly' as const, lastModified: '2026-03-04' },
    { url: '/mentions-legales-et-politique-de-confidentialite/', priority: 0.3, changeFrequency: 'yearly' as const, lastModified: '2026-03-03' },
  ]

  return pages.map(({ url, priority, changeFrequency, lastModified }) => ({
    url: `${BASE_URL}${url}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
