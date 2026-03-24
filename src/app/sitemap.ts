import { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/siteConfig'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', lastModified: '2026-03-24' },
    { url: '/reproduction-cle-voiture/', lastModified: '2026-03-23' },
    { url: '/serrurier-automobile-nice/', lastModified: '2026-03-23' },
    { url: '/tarif-cle-voiture/', lastModified: '2026-03-24' },
    { url: '/programmation-cle-voiture/', lastModified: '2026-03-20' },
    { url: '/double-cle-voiture/', lastModified: '2026-03-19' },
    { url: '/cle-voiture-perdue/', lastModified: '2026-03-18' },
    { url: '/urgence-cle-voiture/', lastModified: '2026-03-17' },
    { url: '/depannage-cle-domicile/', lastModified: '2026-03-16' },
    { url: '/cle-voiture-transpondeur/', lastModified: '2026-03-15' },
    { url: '/cle-voiture-nice/', lastModified: '2026-03-14' },
    { url: '/prix-cle-voiture/', lastModified: '2026-03-24' },
    { url: '/prix-cle-vs-concessionnaire/', lastModified: '2026-03-24' },
    { url: '/refaire-cle-hyundai/', lastModified: '2026-03-11' },
    { url: '/refaire-cle-audi/', lastModified: '2026-03-10' },
    { url: '/refaire-cle-fiat/', lastModified: '2026-03-09' },
    { url: '/refaire-cle-toyota/', lastModified: '2026-03-08' },
    { url: '/refaire-cle-mercedes/', lastModified: '2026-03-07' },
    { url: '/refaire-cle-renault/', lastModified: '2026-03-06' },
    { url: '/qui-sommes-nous/', lastModified: '2026-03-05' },
    { url: '/contactez-nous/', lastModified: '2026-03-24' },
  ]

  return pages.map(({ url, lastModified }) => ({
    url: `${SITE_URL}${url}`,
    lastModified,
  }))
}
