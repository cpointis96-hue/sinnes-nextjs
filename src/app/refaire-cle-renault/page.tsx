import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES, REVIEWS, ENTITY_LINKS, SINOUHE_FULL_ENTITY, AREA_SERVED_TYPED, SOURCES, SITE_URL } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'

export const metadata: Metadata = {
  title: seoData['refaire-cle-renault'].title,
  description: seoData['refaire-cle-renault'].description,
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-renault/' },
  openGraph: {
    title: seoData['refaire-cle-renault'].title,
    url: 'https://sinnes.fr/refaire-cle-renault/',
    images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Peut-on refaire une clé carte Renault (Mégane, Laguna) sans concessionnaire ?',
    answer: 'Oui. La clé carte Renault utilise le système IVER propriétaire. Sinouhé Rochereau maîtrise le calcul du PIN Code IVER et la programmation via valise Abrites — y compris pour les modèles introuvables en concession (ex: Laguna 2, Espace IV).',
  },
  {
    question: 'Combien coûte de refaire une clé Renault ?',
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé Clio 3 simple (transpondeur PCF7936). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé carte Mégane ou Laguna. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour un badge Smart Card (Mégane 4, Kadjar). Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: 'Ma Clio 3 est ancienne, pouvez-vous quand même refaire la clé ?',
    answer: `Oui. La Clio 3 (2005-2012) utilise un transpondeur PCF7936 — clonage direct possible sans passer par le réseau Renault. Intervention rapide, à partir de ${PRICES.cleSimple.sinnes}€.`,
  },
  {
    question: 'Peut-on refaire une clé Renault à domicile ?',
    answer: 'Oui. Sinnes Automobiles intervient à votre domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes. Sinouhé Rochereau se déplace avec le matériel portable complet.',
  },
]

const review = getReviewForPage('/refaire-cle-renault/')

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-renault/#service',
      name: 'Reproduction clé Renault Nice',
      serviceType: 'Car Key Duplication',
      description: 'Expertise Renault IVER : reproduction de clés cartes (Mégane, Laguna) et clés à lame (Clio, Kangoo) à Nice.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: AREA_SERVED_TYPED,
      about: {
        '@type': 'Brand',
        name: 'Renault',
        sameAs: ENTITY_LINKS.renault
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": REVIEWS.ratingValue,
        "reviewCount": REVIEWS.reviewCount,
        "bestRating": REVIEWS.bestRating
      },
      "review": review ? {
        "@type": "Review",
        "author": { "@type": "Person", "name": review.author },
        "datePublished": review.date,
        "reviewRating": {
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": review.text
      } : undefined,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tarifs clé Renault',
        itemListElement: [
          { '@type': 'Offer', name: 'Clé simple Renault (Clio)', price: `${PRICES.cleSimple.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé carte Renault (Mégane, Laguna)', price: `${PRICES.cleCentralisee.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Badge Smart Card Renault (Mégane 4)', price: `${PRICES.cleMainsLibres.sinnes}`, priceCurrency: 'EUR' },
        ],
      },
    },
    getBreadcrumbSchema('https://sinnes.fr/refaire-cle-renault/', [
      { name: 'Accueil', item: 'https://sinnes.fr/' },
      { name: 'Reproduction de clé', item: 'https://sinnes.fr/reproduction-cle-voiture/' },
      { name: 'Double de clé', item: 'https://sinnes.fr/double-cle-voiture/' },
      { name: 'Refaire clé Renault', item: 'https://sinnes.fr/refaire-cle-renault/' }
    ]),
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    SINOUHE_FULL_ENTITY,
    getWebPageSchema(
      'https://sinnes.fr/refaire-cle-renault/',
      seoData['refaire-cle-renault'].publishedAt,
      seoData['refaire-cle-renault'].modifiedAt,
      undefined,
      SINOUHE_FULL_ENTITY['@id']
    ),
  ],
}

const steps = [
  { num: 1, title: 'Votre Renault', desc: "Identification du modèle et du type de clé : carte Mégane, clé Clio, badge Kadjar…" },
  { num: 2, title: 'Diagnostic IVER', desc: 'Lecture et calcul du PIN Code IVER via valise Abrites — système propriétaire Renault' },
  { num: 3, title: 'Programmation', desc: "Injection des codes dans le calculateur Renault — méthode certifiée Incarline" },
  { num: 4, title: 'Garantie', desc: 'Clé ou carte opérationnelle, immobiliseur préservé, garantie constructeur intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleSimple.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconWrench />, label: 'IVER Renault', sublabel: 'Clé carte + badge Smart Card' },
  { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]


export default function RefaireCleRenaultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Refaire clé Renault</li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0A0A0A' }} className="pt-16 pb-6 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>{REVIEWS.reviewCount} avis Google · {REVIEWS.ratingValue}/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-renault'].h1}
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Renault à Nice ? Renault est la marque numéro un
            de la clientèle Sinnes sur la Côte d'Azur. Sinouhé Rochereau maîtrise le système IVER
            propriétaire Renault : clé carte Mégane et Laguna, clé Clio, badge Smart Card Kadjar.
            À partir de {PRICES.cleSimple.sinnes}€, devis gratuit,
            appelez le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 font-body font-bold text-lg sm:text-xl px-6 sm:px-8 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity mb-8"
            style={{ background: '#EFAD42', color: '#0A0A0A' }}
          >
            Obtenir un devis gratuit : <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
          </a>

          <p className="text-sm border-l-4 border-[#EFAD42] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> ·
            Expert automobile, formateur international Incarline. Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-renault" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* PROCESS STEPS */}
      <section className="bg-white pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center " style={{ color: '#111111' }}>
            {seoData['refaire-cle-renault'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Refaire clé Renault" serviceUrl="/refaire-cle-renault/" />}

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />


      {/* CORPS TEXTUEL — BLOC 1 : modèles couverts (dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-renault'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Renault est la marque la plus fréquente parmi la clientèle Sinnes sur la Côte d'Azur.
            Nous intervenons sur l'intégralité de la gamme :
            <strong style={{ color: '#FFFFFF' }}> Clio</strong> (2, 3, 4, 5),
            <strong style={{ color: '#FFFFFF' }}> Mégane</strong> (2, 3, 4),
            <strong style={{ color: '#FFFFFF' }}> Captur</strong>,
            <strong style={{ color: '#FFFFFF' }}> Kadjar</strong>,
            <strong style={{ color: '#FFFFFF' }}> Koleos</strong>,
            <strong style={{ color: '#FFFFFF' }}> Laguna</strong> (2, 3),
            <strong style={{ color: '#FFFFFF' }}> Espace</strong> (IV),
            <strong style={{ color: '#FFFFFF' }}> Kangoo</strong> et
            <strong style={{ color: '#FFFFFF' }}> Trafic</strong> (utilitaire).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour réaliser un{' '}
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              double de clé Renault
            </a>{' '}
            dans les meilleures conditions, l'identification précise du modèle et de l'année est
            indispensable : les systèmes diffèrent profondément entre une Clio 3 et un badge Kadjar.
          </p>
        </div>
      </section>

      {/* CORPS TEXTUEL — BLOC 2 : clé carte IVER (light) */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
            {seoData['refaire-cle-renault'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Renault a introduit la <strong style={{ color: '#111111' }}>clé carte</strong> dès 2001 sur
            la Laguna 2, puis l'a généralisée sur la Mégane 2, 3 et 4. Ce format, unique sur le marché
            européen, ressemble à une carte de crédit et se glisse dans un lecteur intégré à la
            planche de bord pour démarrer le véhicule.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            L'immobiliseur Renault, appelé{' '}
            <strong style={{ color: '#111111' }}>IVER (Immobiliseur Véhicule Renault)</strong>, est un
            système propriétaire qui nécessite obligatoirement le calcul d'un PIN Code avant toute
            programmation. Ce PIN ne peut pas être lu directement depuis le calculateur : il doit être
            calculé via un algorithme spécifique accessible uniquement avec une valise Abrites à jour.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Cas réel rencontré par Sinnes : un Renault Espace IV dont la clé carte n'était plus
            disponible chez le concessionnaire (modèle fin de vie). Sinouhé Rochereau a pu reconstituer
            la carte complète via lecture IVER et nouvelle carte vierge programmée Abrites.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Pour les <strong style={{ color: '#111111' }}>Clio 3 (2005-2012)</strong> : transpondeur
            PCF7936 : clonage direct possible via ZedFull, sans calcul IVER. C'est l'intervention la
            plus rapide et la moins coûteuse de la gamme Renault, à partir de {PRICES.cleSimple.sinnes}€.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Pour les <strong style={{ color: '#111111' }}>Clio 4, Captur et Mégane 3/4</strong> (ID46
            crypté) et pour les <strong style={{ color: '#111111' }}>badges Smart Card (Kadjar, Koleos,
            Mégane 4)</strong> : programmation Abrites obligatoire avec calcul IVER. Consultez notre{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Renault
            </a>{' '}
            pour un devis adapté à votre modèle, contactez-nous au <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>
        </div>
      </section>

      {/* CORPS TEXTUEL — BLOC 3 : tarifs + blockquote (dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-renault'].h2[3]}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#EFAD42' }}>Type de clé Renault</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#EFAD42' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé Clio 3 (PCF7936, 2005–2012)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé carte Mégane / Laguna (IVER)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Badge Smart Card (Kadjar, Koleos, Mégane 4)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            La clé carte Renault intègre un système de{' '}
            <a href="/cle-voiture-transpondeur/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>transpondeur clé carte Renault</a>{' '}
            parmi les plus complexes du marché — consultez notre guide dédié.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 " style={{ color: '#0A0A0A' }}>
            {seoData['refaire-cle-renault'].h2[4]}
          </h2>
          <p className="font-body text-xl mb-8" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Devis gratuit · Intervention 7j/7 · Nice et Côte d'Azur
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block font-body font-bold text-xl sm:text-2xl px-10 sm:px-12 py-5 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: '#0A0A0A', color: '#EFAD42' }}
          >
            <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
          </a>
        </div>
      </section>

      {/* FAQ */}

      <section style={{ background: '#F0F3F7' }} className="py-16 px-4">

        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text ">
            {seoData['refaire-cle-renault'].h2[5]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA BAS */}
      <div className="text-center py-12 bg-bg-shade">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="inline-flex items-center gap-3 font-body font-bold text-lg px-10 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity"
          style={{ background: '#EFAD42', color: '#0A0A0A' }}
        >
          Appelez maintenant : <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Intervention rapide</p>
      </div>

    </>
  )
}
