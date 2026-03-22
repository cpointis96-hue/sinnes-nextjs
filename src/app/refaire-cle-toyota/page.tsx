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
  title: seoData['refaire-cle-toyota'].title,
  description: seoData['refaire-cle-toyota'].description,
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-toyota/' },
  openGraph: {
    title: seoData['refaire-cle-toyota'].title,
    url: 'https://sinnes.fr/refaire-cle-toyota/',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Peut-on refaire une clé Toyota hybride (Yaris, Auris) ?',
    answer: 'Oui. Les Toyota hybrides utilisent un système Smart Entry avec RFID double fréquence. Sinouhé Rochereau maîtrise la programmation du G-chip Toyota via valise Abrites — identique pour les modèles thermiques et hybrides.',
  },
  {
    question: 'Combien coûte de refaire une clé Toyota ?',
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé Toyota simple (Corolla avant 2007). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une Smart Key / badge. Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: 'Intervenez-vous sur les Toyota récents (RAV4, C-HR) ?',
    answer: 'Oui. Les Toyota récents (2015+) équipés du G-chip nécessitent une programmation via Abrites avec firmware récent. Sinouhé Rochereau intervient sur tous les modèles, y compris C-HR et RAV4 hybride.',
  },
  {
    question: 'La garantie Toyota est-elle préservée si je refais la clé chez Sinnes ?',
    answer: 'Oui. La méthode de programmation utilisée par Sinouhé Rochereau est non-invasive — elle n\'affecte pas le calculateur moteur ni la garantie constructeur Toyota.',
  },
]

const review = getReviewForPage('/refaire-cle-toyota/')

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-toyota/#service',
      name: 'Reproduction clé Toyota Nice',
      serviceType: 'Car Key Specialist',
      description: 'Expert en reproduction et programmation de clés Toyota (Yaris, Auris, RAV4) à Nice. Spécialiste G-chip et Smart Entry.',
      provider: { '@id': 'https://sinnes.fr/#organization' },
      areaServed: AREA_SERVED_TYPED,
      brand: {
        "@type": "Brand",
        "name": "Toyota",
        "sameAs": ENTITY_LINKS.toyota
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
        { '@type': 'ListItem', position: 4, name: 'Refaire clé Toyota', item: 'https://sinnes.fr/refaire-cle-toyota/' },
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
        '@id': 'https://sinnes.fr/refaire-cle-toyota/#webpage',
        url: 'https://sinnes.fr/refaire-cle-toyota/',
        name: 'Refaire une clé Toyota à Nice · Double & Perte totale 7j/7',
        isPartOf: { '@id': 'https://sinnes.fr/#website' },
        about: { '@id': 'https://sinnes.fr/#organization' },
        mainEntity: { '@id': 'https://sinnes.fr/refaire-cle-toyota/#service' }
      }
    ],
}

const steps = [
  { num: 1, title: 'Votre Toyota', desc: "Identification du modèle et de la génération : Yaris, Auris, Corolla, RAV4, C-HR…" },
  { num: 2, title: 'Diagnostic', desc: 'Lecture du G-chip Toyota (RFID double fréquence) via valise Abrites' },
  { num: 3, title: 'Programmation', desc: 'Injection des codes Smart Entry dans le calculateur Toyota — méthode Incarline' },
  { num: 4, title: 'Garantie', desc: 'Clé opérationnelle, insert de secours inclus, garantie constructeur intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleSimple.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconWrench />, label: 'Toyota G-chip', sublabel: 'RFID 125 kHz + 433 MHz' },
  { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]


export default function RefaireCleToyotaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Refaire clé Toyota</li>
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
            {seoData['refaire-cle-toyota'].h1} :<br />Hybride et thermique
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Toyota à Nice ? Sinnes Automobiles intervient
            sur tous les modèles : Yaris, Auris, Corolla, RAV4, C-HR, Prius. Sinouhé Rochereau maîtrise
            le système Smart Entry & Start (SESS) et le G-chip Toyota via valise Abrites, aussi bien
            pour les modèles thermiques qu'hybrides. À partir de {PRICES.cleSimple.sinnes}€, devis gratuit,
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
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-toyota" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* PROCESS STEPS */}
      <section className="bg-white pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center " style={{ color: '#111111' }}>
            {seoData['refaire-cle-toyota'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Refaire clé Toyota" serviceUrl="/refaire-cle-toyota/" />}


      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-toyota'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles intervient sur l'intégralité de la gamme Toyota en France :
            <strong style={{ color: '#FFFFFF' }}> Yaris</strong> (thermique et hybride, toutes générations),
            <strong style={{ color: '#FFFFFF' }}> Auris</strong> (E150, E180),
            <strong style={{ color: '#FFFFFF' }}> Corolla</strong> (E120, E140, E210),
            <strong style={{ color: '#FFFFFF' }}> RAV4</strong> (XA30, XA40, XA50),
            <strong style={{ color: '#FFFFFF' }}> C-HR</strong>,
            <strong style={{ color: '#FFFFFF' }}> Prius</strong>,
            <strong style={{ color: '#FFFFFF' }}> Camry</strong>,
            <strong style={{ color: '#FFFFFF' }}> Land Cruiser</strong> ainsi que les modèles{' '}
            <strong style={{ color: '#FFFFFF' }}>Lexus</strong> (groupe Toyota, même architecture).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour réaliser un{' '}
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              double de clé Toyota
            </a>{' '}
            en toute sécurité, l'identification précise du système électronique embarqué est indispensable,
            car Toyota utilise des architectures différentes selon les années.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
            {seoData['refaire-cle-toyota'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Toyota a développé son propre système de transpondeur : le{' '}
            <strong style={{ color: '#111111' }}>G-chip (Toyota Crypto)</strong>. Introduit progressivement
            à partir de 2010, il remplace les anciens ID4D60 utilisés sur les Corolla et Yaris des années
            2000. La différence est fondamentale pour la reproduction de clé.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sur les <strong style={{ color: '#111111' }}>anciens modèles (Corolla 2000-2007, Yaris 2001-2005)</strong> :
            transpondeur ID4D60 : clonage direct possible, intervention rapide à partir de {PRICES.cleSimple.sinnes}€.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles Toyota 2010 et plus récents</strong> équipés
            du G-chip : aucun clonage simple n'est possible. La valise Abrites doit établir une session
            directe avec le calculateur du véhicule. Sinouhé Rochereau dispose de la version firmware la
            plus récente pour couvrir même les modèles sortis en 2024.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Pour les <strong style={{ color: '#111111' }}>Toyota hybrides</strong> (Yaris hybride, Auris
            hybride, RAV4 hybride) : le Smart Entry & Start System (SESS) utilise une communication RFID
            à double fréquence : 125 kHz pour la reconnaissance du badge et 433 MHz pour le plip de
            centralisation. L'insert de secours mécanique est systématiquement fourni avec chaque Smart Key.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Consultez notre grille de{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Toyota
            </a>{' '}
            ou appelez le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span> pour un devis personnalisé selon votre modèle.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark + blockquote) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-toyota'].h2[3]}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#EFAD42' }}>Type de clé Toyota</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#EFAD42' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé simple (Corolla avant 2007, ID4D60)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé avec télécommande (Yaris, Auris G-chip)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Smart Key / badge (RAV4, C-HR, Prius)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vous avez une autre marque ? Découvrez aussi notre page pour{' '}
            <a href="/refaire-cle-renault/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>refaire une clé Renault</a> à Nice.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 " style={{ color: '#0A0A0A' }}>
            {seoData['refaire-cle-toyota'].h2[4]}
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
            {seoData['refaire-cle-toyota'].h2[5]}
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
