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
  title: seoData['refaire-cle-hyundai'].title,
  description: seoData['refaire-cle-hyundai'].description,
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-hyundai/' },
  openGraph: {
    title: seoData['refaire-cle-hyundai'].title,
    url: 'https://sinnes.fr/refaire-cle-hyundai/',
    images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Peut-on cloner une clé Hyundai sans aller chez le concessionnaire ?',
    answer: 'Sur les modèles avant 2010 équipés du transpondeur PCF7936 : oui, clonage direct possible. Sur les modèles 2010+ avec ID46 ou Texas Crypto : non, une programmation via valise Abrites est obligatoire.',
  },
  {
    question: 'Combien coûte de refaire une clé Hyundai ?',
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple Hyundai. À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une Smart Key / badge.`,
  },
  {
    question: 'Intervenez-vous sur les Hyundai hybrides et électriques ?',
    answer: 'Oui. Les Ioniq hybride, Ioniq 5 et Kona électrique utilisent un système Smart Key spécifique. Sinouhé Rochereau maîtrise la programmation des badges et inserts de secours pour ces modèles.',
  },
  {
    question: 'Peut-on refaire une clé Hyundai à domicile ?',
    answer: 'Oui. Sinnes Automobiles intervient à domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes avec le matériel portable complet.',
  },
]

const review = getReviewForPage('/refaire-cle-hyundai/')

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-hyundai/#service',
      name: 'Reproduction clé Hyundai Nice',
      serviceType: 'Car Key Specialist',
      description: 'Expert en reproduction et programmation de clés Hyundai (i10, i30, Tucson, Ioniq) à Nice. Spécialiste système IMMO3 et Smart Key.',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: AREA_SERVED_TYPED,
      brand: {
        "@type": "Brand",
        "name": "Hyundai",
        "sameAs": ENTITY_LINKS.hyundai
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
        name: 'Tarifs clé Hyundai',
        itemListElement: [
          { '@type': 'Offer', name: 'Clé simple Hyundai', price: `${PRICES.cleSimple.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé centralisée Hyundai', price: `${PRICES.cleCentralisee.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Smart Key / badge Hyundai', price: `${PRICES.cleMainsLibres.sinnes}`, priceCurrency: 'EUR' },
        ],
      },
    },
    getBreadcrumbSchema('https://sinnes.fr/refaire-cle-hyundai/', [
      { name: 'Accueil', item: 'https://sinnes.fr/' },
      { name: 'Reproduction de clé', item: 'https://sinnes.fr/reproduction-cle-voiture/' },
      { name: 'Double de clé', item: 'https://sinnes.fr/double-cle-voiture/' },
      { name: 'Refaire clé Hyundai', item: 'https://sinnes.fr/refaire-cle-hyundai/' }
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
    getWebPageSchema('https://sinnes.fr/refaire-cle-hyundai/', '2026-03-15', '2026-03-19')
  ],
}

const steps = [
  { num: 1, title: 'Votre Hyundai', desc: "Identification du modèle et du type de clé équipé d'origine : i10, i20, Tucson, Ioniq…" },
  { num: 2, title: 'Diagnostic', desc: 'Lecture du transpondeur spécifique Hyundai via valise Abrites — IMMO3, ID46 ou PCF7936' },
  { num: 3, title: 'Programmation', desc: "Injection des codes dans le calculateur Hyundai — méthode certifiée Incarline" },
  { num: 4, title: 'Garantie', desc: 'Clé opérationnelle, immobiliseur préservé, garantie constructeur intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleSimple.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconWrench />, label: 'Expertise Hyundai IMMO3', sublabel: 'Valise Abrites + ZedFull' },
  { icon: <IconShield />, label: 'Garantie constructeur préservée', sublabel: 'Méthode non-invasive' },
]


export default function RefaireCleHyundaiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Refaire clé Hyundai</li>
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
            {seoData['refaire-cle-hyundai'].h1}
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Hyundai à Nice ? Sinnes Automobiles intervient sur
            tous les modèles : i10, i20, i30, Tucson, Santa Fe, Ioniq. Sinouhé Rochereau maîtrise le
            système IMMO3 propriétaire Hyundai : programmation via valise Abrites, transpondeur PCF7936
            ou ID46 selon la génération. À partir de {PRICES.cleSimple.sinnes}€, devis gratuit,
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
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-hyundai" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* PROCESS STEPS */}
      <section className="bg-white pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center " style={{ color: '#111111' }}>
            {seoData['refaire-cle-hyundai'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Refaire clé Hyundai" serviceUrl="/refaire-cle-hyundai/" />}

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />


      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-hyundai'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles intervient sur l'ensemble de la gamme Hyundai commercialisée en France :
            <strong style={{ color: '#FFFFFF' }}> i10</strong> (toutes générations),
            <strong style={{ color: '#FFFFFF' }}> i20</strong> (GB, BC3),
            <strong style={{ color: '#FFFFFF' }}> i30</strong> (FD, GD, PD),
            <strong style={{ color: '#FFFFFF' }}> i40</strong>,
            <strong style={{ color: '#FFFFFF' }}> ix35</strong>,
            <strong style={{ color: '#FFFFFF' }}> Tucson</strong> (TL, NX4),
            <strong style={{ color: '#FFFFFF' }}> Santa Fe</strong> (CM, DM, TM),
            <strong style={{ color: '#FFFFFF' }}> Kona</strong>,
            <strong style={{ color: '#FFFFFF' }}> Ioniq</strong> et
            <strong style={{ color: '#FFFFFF' }}> Ioniq 5</strong>.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Chaque génération utilise un système de transpondeur différent, c'est pourquoi la maîtrise
            du système IMMO3 Hyundai est indispensable. Pour faire un{' '}
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              double de clé Hyundai
            </a>{' '}
            dans les meilleures conditions, il faut identifier précisément le modèle, l'année et la
            variante équipée.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
            {seoData['refaire-cle-hyundai'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            L'immobiliseur Hyundai de troisième génération (IMMO3) est un système propriétaire qui
            empêche le clonage direct des clés sur tous les modèles produits depuis 2010. Contrairement
            à d'autres constructeurs qui utilisent des standards ouverts, Hyundai a développé une
            architecture spécifique pour ses véhicules récents.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles antérieurs à 2010</strong> (i10 première
            génération, i30 FD, ix35 début de série) : le transpondeur <strong style={{ color: '#111111' }}>PCF7936</strong> est
            utilisé. Le clonage direct est possible via la machine ZedFull : c'est la méthode la plus
            rapide et la moins coûteuse.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles 2010 et plus récents</strong> : Hyundai
            utilise l'<strong style={{ color: '#111111' }}>ID46 crypté</strong> ou le{' '}
            <strong style={{ color: '#111111' }}>Texas Crypto</strong>. Ces puces ne peuvent pas être
            clonées par simple copie électronique : une communication directe avec le calculateur du
            véhicule est obligatoire via valise Abrites. Sinouhé Rochereau, formateur certifié Incarline,
            maîtrise cette procédure.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Pour les <strong style={{ color: '#111111' }}>Smart Keys Hyundai</strong> (Tucson 2021+,
            Ioniq, Ioniq 5) : il s'agit d'un badge RFID sans contact avec un insert de secours mécanique.
            La programmation requiert une session Abrites avec firmware récent : c'est le cas le plus
            complexe de la gamme, mais que Sinnes maîtrise entièrement.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Dans tous les cas, la méthode Sinnes préserve intégralement l'immobiliseur et la garantie
            constructeur Hyundai. L'intervention est non-invasive : aucun remplacement de calculateur,
            aucune modification du véhicule. Pour connaître le{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Hyundai
            </a>{' '}
            précis pour votre modèle, appelez le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark + blockquote) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-hyundai'].h2[3]}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#EFAD42' }}>Type de clé Hyundai</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#EFAD42' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé simple i10 (PCF7936, avant 2010)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé i30 / Tucson avec télécommande (ID46)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Smart Key Ioniq / Tucson 2021+ (badge)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            La clé Hyundai requiert une{' '}
            <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>programmation de clé Hyundai</a>{' '}
            spécifique — découvrez notre guide complet sur la programmation automobile.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 " style={{ color: '#0A0A0A' }}>
            {seoData['refaire-cle-hyundai'].h2[4]}
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
            {seoData['refaire-cle-hyundai'].h2[5]}
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
