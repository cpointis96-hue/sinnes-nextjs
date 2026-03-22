import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES, REVIEWS, ENTITY_LINKS, SINOUHE_FULL_ENTITY, AREA_SERVED_TYPED, SOURCES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'

export const metadata: Metadata = {
  title: seoData['refaire-cle-fiat'].title,
  description: seoData['refaire-cle-fiat'].description,
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-fiat/' },
  openGraph: {
    title: seoData['refaire-cle-fiat'].title,
    url: 'https://sinnes.fr/refaire-cle-fiat/',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Peut-on doubler une clé Fiat 500 sans concessionnaire ?',
    answer: 'Oui. La Fiat 500 (2007+) utilise un transpondeur ID46 — Sinouhé Rochereau peut réaliser la programmation directement avec valise ZedFull ou Abrites. Intervention possible à domicile à Nice et alentours.',
  },
  {
    question: 'Combien coûte de refaire une clé Fiat ?',
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple Fiat (sans télécommande). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande intégrée. Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: 'Intervenez-vous sur les Fiat professionnelles (Ducato) ?',
    answer: 'Oui. Le Fiat Ducato est l\'un des véhicules utilitaires les plus fréquents sur la Côte d\'Azur. Sinouhé Rochereau intervient sur toutes les générations, clé simple ou avec télécommande.',
  },
  {
    question: 'Peut-on refaire une clé Fiat à domicile ?',
    answer: 'Oui. Sinnes Automobiles intervient à votre domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes. Pas besoin de vous déplacer.',
  },
]

const review = getReviewForPage('/refaire-cle-fiat/')

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-fiat/#service',
      name: 'Reproduction clé Fiat Nice',
      serviceType: 'Car Key Specialist',
      description: 'Expert en reproduction et programmation de clés Fiat (500, Panda, Ducato) à Nice. Utilisation d\'équipements officiels Abrites/ZedFull.',
      provider: { '@id': 'https://sinnes.fr/#organization' },
      areaServed: AREA_SERVED_TYPED,
      brand: {
        "@type": "Brand",
        "name": "Fiat",
        "sameAs": ENTITY_LINKS.fiat
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
      } : undefined
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Reproduction de clé', item: 'https://sinnes.fr/reproduction-cle-voiture/' },
        { '@type': 'ListItem', position: 3, name: 'Double de clé', item: 'https://sinnes.fr/double-cle-voiture/' },
        { '@type': 'ListItem', position: 4, name: 'Refaire clé Fiat', item: 'https://sinnes.fr/refaire-cle-fiat/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
      SINOUHE_FULL_ENTITY,
      {
        '@type': 'WebPage',
        '@id': 'https://sinnes.fr/refaire-cle-fiat/#webpage',
        url: 'https://sinnes.fr/refaire-cle-fiat/',
        name: 'Refaire une clé Fiat à Nice · Double & Perte totale 7j/7',
        isPartOf: { '@id': 'https://sinnes.fr/#website' },
        about: { '@id': 'https://sinnes.fr/#organization' },
        mainEntity: { '@id': 'https://sinnes.fr/refaire-cle-fiat/#service' }
      }
    ],
}

const steps = [
  { num: 1, title: 'Votre Fiat', desc: "Identification du modèle et de la génération : 500, Panda, Tipo, Ducato…" },
  { num: 2, title: 'Diagnostic', desc: 'Lecture du transpondeur ID46 via valise Abrites ou ZedFull selon l\'année' },
  { num: 3, title: 'Programmation', desc: 'Injection des codes dans le calculateur Fiat — méthode officielle Incarline' },
  { num: 4, title: 'Garantie', desc: 'Clé opérationnelle, immobiliseur préservé, garantie constructeur intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleSimple.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconWrench />, label: 'Fiat ID46', sublabel: 'Valise Abrites + ZedFull' },
  { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]


export default function RefaireCleFiatPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Refaire clé Fiat</li>
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
            {seoData['refaire-cle-fiat'].h1} :<br />Fiat 500, Panda et toute la gamme
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Fiat à Nice ? Sinnes Automobiles intervient sur
            tous les modèles Fiat : 500, Panda, Tipo, Bravo et Ducato professionnel. Sinouhé Rochereau
            maîtrise la programmation du transpondeur ID46 via valise ZedFull ou Abrites. À partir
            de {PRICES.cleSimple.sinnes}€, devis gratuit,
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
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-fiat" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* PROCESS STEPS */}
      <section className="bg-white pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center " style={{ color: '#111111' }}>
            {seoData['refaire-cle-fiat'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Refaire clé Fiat" serviceUrl="/refaire-cle-fiat/" />}


      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-fiat'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles intervient sur l'ensemble de la gamme Fiat distribuée en France :
            <strong style={{ color: '#FFFFFF' }}> Fiat 500</strong> (toutes générations depuis 2007),
            <strong style={{ color: '#FFFFFF' }}> 500X</strong>,
            <strong style={{ color: '#FFFFFF' }}> 500L</strong>,
            <strong style={{ color: '#FFFFFF' }}> Panda</strong> (2e et 3e génération),
            <strong style={{ color: '#FFFFFF' }}> Tipo</strong>,
            <strong style={{ color: '#FFFFFF' }}> Punto</strong>,
            <strong style={{ color: '#FFFFFF' }}> Bravo</strong> et
            <strong style={{ color: '#FFFFFF' }}> Ducato</strong> (utilitaire).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour réaliser un{' '}
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              double de clé Fiat
            </a>{' '}
            dans les meilleures conditions, il est essentiel d'identifier le modèle exact et l'année
            de fabrication, car les systèmes de transpondeur varient selon les générations.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
            {seoData['refaire-cle-fiat'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La majorité des Fiat modernes (depuis 2007) utilise le transpondeur{' '}
            <strong style={{ color: '#111111' }}>ID46</strong>. Ce composant est intégré à la clé et
            communique avec l'immobiliseur du véhicule pour autoriser le démarrage. Son fonctionnement
            diffère selon les générations :
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles antérieurs à 2008</strong> (Fiat Grande
            Punto première série, Doblo première génération) : certains transpondeurs peuvent être
            clonés directement par machine ZedFull. C'est la méthode la plus rapide.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles 2008 et plus récents</strong>, dont la
            Fiat 500 (2007+) qui reste l'un des véhicules les plus fréquents de la Côte d'Azur : l'ID46
            est en version cryptée. Un simple clonage est impossible : la programmation OBD via valise
            Abrites est obligatoire. Sinouhé Rochereau maîtrise cette procédure pour toutes les variantes.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Cas particulier : le <strong style={{ color: '#111111' }}>Fiat Ducato professionnel</strong>.
            C'est l'un des utilitaires les plus répandus sur les chantiers de la Côte d'Azur. Sinnes
            intervient sur toutes les générations de Ducato, que la clé soit simple ou dotée d'une
            télécommande de centralisation. La présence du système Blue&Me sur certaines variantes
            n'affecte pas la programmation de la clé.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Pour un devis précis adapté à votre modèle Fiat, consultez notre grille{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Fiat
            </a>{' '}
            ou appelez directement le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark + blockquote) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-fiat'].h2[3]}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#EFAD42' }}>Type de clé Fiat</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#EFAD42' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé simple sans télécommande (Tipo, Punto)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé avec télécommande intégrée (500, Panda 3e gen)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Fiat 500e (électrique) · Smart Key</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>devis personnalisé</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>sur RDV</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vous avez un véhicule du groupe VAG ? Découvrez aussi notre page pour{' '}
            <a href="/refaire-cle-audi/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>refaire une clé Audi</a> à Nice.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 " style={{ color: '#0A0A0A' }}>
            {seoData['refaire-cle-fiat'].h2[4]}
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
            {seoData['refaire-cle-fiat'].h2[5]}
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
