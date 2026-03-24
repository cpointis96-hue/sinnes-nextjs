import { MetadataRoute } from 'next'
import { SITE_URL } from '@/constants/siteConfig'
import { seoData } from '@/data/seoData'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: '/', lastModified: seoData.home.modifiedAt },
    { url: '/reproduction-cle-voiture/', lastModified: seoData['reproduction-cle-voiture'].modifiedAt },
    { url: '/serrurier-automobile-nice/', lastModified: seoData['serrurier-automobile-nice'].modifiedAt },
    { url: '/tarif-cle-voiture/', lastModified: seoData['tarif-cle-voiture'].modifiedAt },
    { url: '/programmation-cle-voiture/', lastModified: seoData['programmation-cle-voiture'].modifiedAt },
    { url: '/double-cle-voiture/', lastModified: seoData['double-cle-voiture'].modifiedAt },
    { url: '/cle-voiture-perdue/', lastModified: seoData['cle-voiture-perdue'].modifiedAt },
    { url: '/urgence-cle-voiture/', lastModified: seoData['urgence-cle-voiture'].modifiedAt },
    { url: '/depannage-cle-domicile/', lastModified: seoData['depannage-cle-domicile'].modifiedAt },
    { url: '/cle-voiture-transpondeur/', lastModified: seoData['cle-voiture-transpondeur'].modifiedAt },
    { url: '/cle-voiture-nice/', lastModified: seoData['cle-voiture-nice'].modifiedAt },
    { url: '/prix-cle-voiture/', lastModified: seoData['prix-cle-voiture'].modifiedAt },
    { url: '/prix-cle-vs-concessionnaire/', lastModified: seoData['prix-cle-vs-concessionnaire'].modifiedAt },
    { url: '/refaire-cle-hyundai/', lastModified: seoData['refaire-cle-hyundai'].modifiedAt },
    { url: '/refaire-cle-audi/', lastModified: seoData['refaire-cle-audi'].modifiedAt },
    { url: '/refaire-cle-fiat/', lastModified: seoData['refaire-cle-fiat'].modifiedAt },
    { url: '/refaire-cle-toyota/', lastModified: seoData['refaire-cle-toyota'].modifiedAt },
    { url: '/refaire-cle-mercedes/', lastModified: seoData['refaire-cle-mercedes'].modifiedAt },
    { url: '/refaire-cle-renault/', lastModified: seoData['refaire-cle-renault'].modifiedAt },
    { url: '/qui-sommes-nous/', lastModified: seoData['qui-sommes-nous'].modifiedAt },
    { url: '/contactez-nous/', lastModified: seoData['contactez-nous'].modifiedAt },
    { url: '/mentions-legales-et-politique-de-confidentialite/', lastModified: seoData['mentions-legales-et-politique-de-confidentialite'].modifiedAt },
  ]

  return pages.map(({ url, lastModified }) => ({
    url: `${SITE_URL}${url}`,
    lastModified,
  }))
}
