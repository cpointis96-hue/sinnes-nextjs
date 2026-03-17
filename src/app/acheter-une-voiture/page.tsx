import type { Metadata } from 'next'
import { NAP } from '@/constants/siteConfig'

export const metadata: Metadata = {
  title: "Acheter une voiture à Nice — Sinnes Automobiles",
  description: "Vente de voitures d'occasion à Nice. Véhicules récents et fiables sélectionnés par Sinnes Automobiles. Contactez-nous au +33 6 75 54 04 11",
  alternates: { canonical: 'https://sinnes.fr/acheter-une-voiture/' },
  openGraph: {
    title: "Acheter une voiture à Nice — Sinnes Automobiles",
    url: 'https://sinnes.fr/acheter-une-voiture/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDealer',
  '@id': 'https://sinnes.fr/acheter-une-voiture/#autodealer',
  name: 'Sinnes Automobiles — Vente VO',
  url: 'https://sinnes.fr/acheter-une-voiture/',
  telephone: NAP.phoneTel,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '4 rue Diderot',
    addressLocality: 'Nice',
    postalCode: '06000',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 43.7031,
    longitude: 7.2620,
  },
}

export default function AcheterUneVoiturePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Acheter une voiture</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            Acheter une voiture à Nice — Sinnes Automobiles
          </h1>
          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles sélectionne des véhicules d'occasion récents et fiables pour
            la Côte d'Azur. Chaque véhicule est contrôlé par Sinouhé Rochereau avant mise en vente.
            Contactez-nous pour connaître le stock disponible.
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 font-body font-bold text-xl px-8 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity"
            style={{ background: '#FFD700', color: '#0A0A0A' }}
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* STOCK / CONTACT */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Véhicules disponibles
          </h2>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Notre stock de véhicules d'occasion évolue régulièrement. Pour connaître les
            modèles actuellement disponibles — avec leur année, kilométrage, historique entretien
            et prix — appelez directement le <strong style={{ color: '#FFD700' }}>{NAP.phoneDisplay}</strong> ou
            envoyez-nous un message.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { label: 'Contrôle systématique', desc: 'Chaque véhicule est inspecté par Sinouhé Rochereau avant mise en vente' },
              { label: 'Modèles récents', desc: 'Sélection orientée fiabilité et rapport qualité-prix pour la Côte d\'Azur' },
              { label: 'Accompagnement', desc: 'Inès Barthelemy vous guide de la sélection jusqu\'à la remise des clés' },
            ].map((item, i) => (
              <div key={i} style={{ background: '#1A1A1A', border: '1px solid rgba(255,215,0,0.1)' }} className="p-6 rounded-lg">
                <p className="font-heading font-bold text-base mb-2" style={{ color: '#FFD700' }}>{item.label}</p>
                <p className="font-body text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Contactez-nous pour le stock VO
          </h2>
          <div className="space-y-4 font-body">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold" style={{ color: '#FFD700' }}>01</span>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Appelez le <a href={`tel:${NAP.phoneTel}`} className="font-bold hover:underline" style={{ color: '#FFD700' }}>{NAP.phoneDisplay}</a> pour connaître les véhicules disponibles</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold" style={{ color: '#FFD700' }}>02</span>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Venez voir et essayer le véhicule à Nice, 4 rue Diderot (06000)</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold" style={{ color: '#FFD700' }}>03</span>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>Inès Barthelemy prend en charge toutes les formalités administratives</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FFD700' }} className="py-12 text-center px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#0A0A0A' }}>
            Voir les véhicules disponibles
          </h2>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block font-body font-bold text-xl px-10 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity"
            style={{ background: '#0A0A0A', color: '#FFD700' }}
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* STICKY MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="flex items-center justify-center w-full font-body font-bold text-lg py-4 min-h-[56px]"
          style={{ background: '#FFD700', color: '#0A0A0A' }}
        >
          Appeler — {NAP.phoneDisplay}
        </a>
      </div>
    </>
  )
}
