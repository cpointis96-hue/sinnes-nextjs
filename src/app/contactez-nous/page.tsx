import type { Metadata } from 'next'
import { NAP, HOURS, GEO } from '@/constants/siteConfig'
import ContactForm from './ContactForm'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'

export const metadata: Metadata = {
  title: seoData['contactez-nous'].title,
  description: seoData['contactez-nous'].description,
  alternates: { canonical: 'https://sinnes.fr/contactez-nous/' },
  openGraph: {
    title: seoData['contactez-nous'].title,
    url: 'https://sinnes.fr/contactez-nous/',
    images: [{ url: '/images/Deplacement.png', width: 1024, height: 683 }],
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://sinnes.fr/#organization',
      name: 'Sinnes Automobiles',
      telephone: NAP.phoneTel,
      email: 'contact@sinnes.fr',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4 rue Diderot',
        addressLocality: 'Nice',
        postalCode: '06000',
        addressCountry: 'FR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
      openingHours: HOURS.schemaValue,
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Contactez-nous', item: 'https://sinnes.fr/contactez-nous/' },
      ],
    },
    {
      '@type': 'WebPage',
      '@id': 'https://sinnes.fr/contactez-nous/#webpage',
      url: 'https://sinnes.fr/contactez-nous/',
      datePublished: '2026-03-01',
      dateModified: '2026-03-01',
      isPartOf: { '@id': 'https://sinnes.fr/#website' },
    },
  ],
}

const review = getReviewForPage('/contactez-nous/')

export default function ContactezNousPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Contactez-nous</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['contactez-nous'].h1}
          </h1>
          <p className="font-body text-lg leading-relaxed" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Devis gratuit · Intervention 7j/7 · Nice et Côte d'Azur
          </p>
        </div>
      </section>

      {/* NAP + FORMULAIRE */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <div className="grid md:grid-cols-2 gap-12">

            {/* NAP */}
            <div>
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color: '#EFAD42' }}>
                {seoData['contactez-nous'].h2[0]}
              </h2>
              <dl className="space-y-4 font-body">
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Téléphone</dt>
                  <dd>
                    <a href={`tel:${NAP.phoneTel}`} className="text-lg font-bold hover:underline" style={{ color: '#EFAD42' }}>
                      {NAP.phoneDisplay}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Adresse</dt>
                  <dd style={{ color: 'rgba(255,255,255,0.8)' }}>4 rue Diderot<br />06000 Nice</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Horaires</dt>
                  <dd style={{ color: 'rgba(255,255,255,0.8)' }}>7j/7 sur rendez-vous<br />8h00 – 20h00</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Zone d'intervention</dt>
                  <dd style={{ color: 'rgba(255,255,255,0.8)' }}>Nice · Antibes · Cagnes-sur-Mer<br />Cannes · Menton · Côte d'Azur</dd>
                </div>
              </dl>
            </div>

            {/* FORMULAIRE */}
            <div>
              <h2 className="font-heading font-bold text-xl mb-6" style={{ color: '#EFAD42' }}>
                {seoData['contactez-nous'].h2[1]}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {review && <SingleReview review={review} serviceName="Contact Sinnes Automobiles" serviceUrl="/contactez-nous/" />}

      {/* STICKY MOBILE */}
    </>
  )
}
