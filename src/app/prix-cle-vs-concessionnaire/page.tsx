import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES, REVIEWS, ENTITY_LINKS, SINOUHE_FULL_ENTITY, INES_FULL_ENTITY, AREA_SERVED_TYPED, SOURCES, SITE_URL } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconClock, IconWrench, IconShield } from '@/components/ui/TrustStrip'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'

export const metadata: Metadata = {
  title: seoData['prix-cle-vs-concessionnaire'].title,
  description: seoData['prix-cle-vs-concessionnaire'].description,
  alternates: { canonical: 'https://sinnes.fr/prix-cle-vs-concessionnaire/' },
  openGraph: {
    title: seoData['prix-cle-vs-concessionnaire'].title,
    url: 'https://sinnes.fr/prix-cle-vs-concessionnaire/',
    images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Pourquoi refaire une clé chez un serrurier auto coûte moins cher qu'au concessionnaire ?",
    answer: "Les concessionnaires facturent les frais de concession, la marge constructeur sur les pièces et le temps d'atelier. Un serrurier indépendant comme Sinnes Automobiles travaille sans ces intermédiaires, avec le même matériel (Abrites, ZedFull) — d'où une économie de 50% à 80%.",
  },
  {
    question: "La clé faite par un serrurier fonctionne-t-elle comme une clé d'origine ?",
    answer: "Oui, à 100%. La lame est gravée à l'identique par machine laser et le transpondeur est programmé avec les codes constructeur via valise de diagnostic officielle. Votre véhicule et votre assurance ne font aucune différence entre une clé d'origine et une clé reproduite par Sinnes.",
  },
  {
    question: "Quel est le délai chez Sinnes vs un concessionnaire ?",
    answer: "Chez Sinnes Automobiles : 30 minutes à 2h, le jour même, à domicile ou à l'atelier. Chez un concessionnaire : généralement 1 à 3 semaines (commande de la pièce + prise de rendez-vous atelier). En cas de perte, votre véhicule est immobilisé tout ce temps.",
  },
  {
    question: "La garantie constructeur de ma voiture est-elle préservée ?",
    answer: "Oui. La garantie constructeur ne peut pas être annulée parce que vous avez fait reproduire une clé chez un tiers, dès lors que la reproduction est faite correctement avec des équipements certifiés. Sinouhé Rochereau utilise Abrites et ZedFull — les mêmes outils que les garages agréés.",
  },
]

const review = getReviewForPage('/prix-cle-vs-concessionnaire/')

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/prix-cle-vs-concessionnaire/#service",
      "name": "Serrurier automobile Nice — Comparaison tarifs",
      "serviceType": "Locksmith Price Comparison",
      "description": "Comparatif des prix pour refaire une clé de voiture à Nice : Sinnes Automobiles vs concessionnaires officiels.",
      "provider": { "@id": `${SITE_URL}/#organization` },
      "areaServed": AREA_SERVED_TYPED,
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
    getBreadcrumbSchema('https://sinnes.fr/prix-cle-vs-concessionnaire/', [
      { name: 'Accueil', item: 'https://sinnes.fr/' },
      { name: 'Prix vs concessionnaire', item: 'https://sinnes.fr/prix-cle-vs-concessionnaire/' }
    ]),
    {
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    },
    SINOUHE_FULL_ENTITY,
    INES_FULL_ENTITY,
    getWebPageSchema(
      'https://sinnes.fr/prix-cle-vs-concessionnaire/',
      seoData['prix-cle-vs-concessionnaire'].publishedAt,
      seoData['prix-cle-vs-concessionnaire'].modifiedAt,
      undefined,
      INES_FULL_ENTITY['@id']
    )
  ]
}

const steps = [
  { num: 1, title: 'Prix concessionnaire', desc: `Clé simple : ${PRICES.cleSimple.concessionnaire.min}-${PRICES.cleSimple.concessionnaire.max}€ · Centralisée : ${PRICES.cleCentralisee.concessionnaire.min}-${PRICES.cleCentralisee.concessionnaire.max}€ · Délai : 1 à 3 semaines` },
  { num: 2, title: 'Prix Sinnes', desc: `Clé simple : ${PRICES.cleSimple.sinnes}€ · Centralisée : ${PRICES.cleCentralisee.sinnes}€ · Délai : 30 min à 2h` },
  { num: 3, title: 'Même qualité', desc: 'Équipements Abrites et ZedFull identiques aux concessionnaires' },
  { num: 4, title: 'Votre choix', desc: "Économie de 50% à 80% · Même garantie · Intervention immédiate" },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro className="w-8 h-8" />, label: '-80%', sublabel: "Jusqu'à", href: '/tarif-cle-voiture/' },
  { icon: <IconClock className="w-8 h-8" />, label: 'Même jour', sublabel: '30 min à 2h (vs 1-3 semaines)' },
  { icon: <IconWrench className="w-8 h-8" />, label: 'Même matériel', sublabel: 'Abrites et ZedFull' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Garantie préservée', sublabel: 'Programmation officielle', href: '/reproduction-cle-voiture/' },
]


export default function PrixCleVsConcessionnairePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* SECTION 1 — BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page" className="text-text">Prix vs concessionnaire</li>
          </ol>
        </div>
      </nav>

      {/* SECTION 2 — HERO */}
      <section style={{ background: '#0A0A0A' }} className="pt-16 pb-6 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">{REVIEWS.reviewCount} avis Google · {REVIEWS.ratingValue}/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-vs-concessionnaire'].h1}
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Un concessionnaire facture entre {PRICES.cleSimple.concessionnaire.min}€ et {PRICES.perteTotale.concessionnaire.max}€ pour refaire une clé de voiture,
            avec un délai de 1 à 3 semaines. Sinnes Automobiles réalise la même prestation
            à partir de {PRICES.cleSimple.sinnes}€, le jour même, en 30 minutes à 2h, avec les mêmes équipements
            professionnels. Inès Barthelemy vous explique pourquoi.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 bg-accent text-text-inverse font-body font-bold
                       text-xl px-8 py-4 rounded-lg min-h-[56px] hover:bg-accent-dark transition-colors mb-8"
          >
            Devis gratuit : {NAP.phoneDisplay}
          </a>

          <p className="text-sm border-l-4 border-[#EFAD42] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Tarifs et devis gérés par <strong style={{ color: '#FFFFFF' }}>{TEAM.ines.name}</strong> ·
            Co-fondatrice de Sinnes Automobiles, responsable gestion et relation client.
          </p>
        </div>
      </section>
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-prix-cle-vs-concessionnaire" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* SECTION 3 — PROCESS STEPS */}
      <section className="bg-white pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            {seoData['prix-cle-vs-concessionnaire'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Prix clé vs concessionnaire" serviceUrl="/prix-cle-vs-concessionnaire/" />}

      {/* TRUST STRIP */}
      <TrustStrip theme="light" items={TRUST_ITEMS} />


      {/* H2 BLOC 1 — dark (table dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-vs-concessionnaire'].h2[1]}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full font-body text-sm border-collapse">
              <thead>
                <tr style={{ background: '#EFAD42' }}>
                  <th className="text-left px-3 py-3 font-bold text-[#0A0A0A]">Type de clé</th>
                  <th className="text-left px-3 py-3 font-bold text-[#0A0A0A]">Sinnes</th>
                  <th className="text-left px-3 py-3 font-bold text-[#0A0A0A]">Concessionnaire</th>
                  <th className="text-left px-3 py-3 font-bold text-[#0A0A0A]">Économie</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#1A1A1A' }}>
                  <td className="px-3 py-3" style={{ color: '#FFFFFF' }}>Clé simple</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>{PRICES.cleSimple.sinnes}€</td>
                  <td className="px-3 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>~68%</td>
                </tr>
                <tr style={{ background: '#111111' }}>
                  <td className="px-3 py-3" style={{ color: '#FFFFFF' }}>Clé centralisée</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>{PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-3 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>~67%</td>
                </tr>
                <tr style={{ background: '#1A1A1A' }}>
                  <td className="px-3 py-3" style={{ color: '#FFFFFF' }}>Clé mains libres</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>{PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-3 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>~75%</td>
                </tr>
                <tr style={{ background: '#111111' }}>
                  <td className="px-3 py-3" style={{ color: '#FFFFFF' }}>Perte totale</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>{PRICES.perteTotale.sinnes}€</td>
                  <td className="px-3 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.perteTotale.concessionnaire.min}–{PRICES.perteTotale.concessionnaire.max}€</td>
                  <td className="px-3 py-3 font-bold" style={{ color: '#EFAD42' }}>~72%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            {seoData['prix-cle-vs-concessionnaire'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La différence de prix n'est pas due à une meilleure qualité d'exécution chez le
            concessionnaire : c'est une question de structure de coûts. Un concessionnaire
            supporte des charges fixes considérables : loyer de la concession, personnel
            administratif, frais de garantie constructeur, système informatique propriétaire,
            et bien sûr la marge sur les pièces détachées facturées au prix catalogue.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Sinouhé Rochereau travaille sans ces intermédiaires. Ses équipements Abrites et ZedFull
            sont les mêmes que ceux des garages agréés : les logiciels sont simplement achetés
            sous licence personnelle plutôt que via le réseau constructeur. Le coût marginal
            d'une intervention est donc bien plus bas, et cette économie est répercutée
            directement sur le tarif client.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            En tant que{' '}
            <a href="/serrurier-automobile-nice/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>serrurier automobile indépendant à Nice</a>,
            Sinnes Automobiles incarne exactement ce modèle : aucun intermédiaire, coûts réduits,
            économie répercutée sur le tarif client.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Pour les tarifs détaillés, consultez notre <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>grille de tarifs Sinnes</a> et
            notre page <a href="/prix-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>prix d'une clé voiture</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-vs-concessionnaire'].h2[3]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            C'est l'une des questions les plus fréquentes, et la réponse est oui, sans réserve.
            La garantie constructeur d'un véhicule ne peut pas être annulée au motif qu'une
            clé a été reproduite par un tiers, dès lors que cette reproduction est effectuée
            correctement et avec des équipements certifiés. C'est une protection légale pour
            le consommateur (directive UE 1999/44/CE et droit français).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinouhé Rochereau utilise Abrites et ZedFull, exactement les mêmes outils que les
            garages agréés constructeur. La programmation est effectuée selon les protocoles
            officiels. L'immobiliseur du véhicule ne fait aucune différence entre une clé
            programmée par un concessionnaire et une clé programmée par Sinnes.
            Pour en savoir plus sur le processus, consultez <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>nos services de reproduction</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
      <section className="bg-[#F0F3F7] py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            {seoData['prix-cle-vs-concessionnaire'].h2[4]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Le délai est peut-être la différence la plus concrète pour le client. Chez un
            concessionnaire : il faut d'abord commander la clé vierge (souvent importée),
            attendre la livraison (5 à 10 jours ouvrés), puis prendre rendez-vous à l'atelier
            (1 à 2 semaines d'attente supplémentaire). Total : 1 à 3 semaines d'immobilisation
            du véhicule dans les cas de perte totale.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Chez Sinnes Automobiles : Sinouhé arrive avec un stock de lames vierges et de
            transpondeurs toutes marques dans son véhicule d'intervention. L'intervention
            complète (décodage + taillage + programmation) dure de 30 minutes (clé simple)
            à 2h (perte totale complexe). Le jour même, à domicile si vous le souhaitez.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Si votre véhicule est votre outil de travail ou si vous avez des enfants à récupérer,
            ce délai fait une différence considérable, et à 50-80% d'économie en plus.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            La meilleure protection : <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>faire un double de clé plutôt qu'attendre le concessionnaire</a>,
            à partir de {PRICES.cleSimple.sinnes}€, aujourd'hui même, sans délai.
          </p>        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#EFAD42]/20 text-center">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-vs-concessionnaire'].h2[5]}
          </h2>
          <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Inès ou Sinouhé vous donnent un tarif ferme en 2 minutes. Sans engagement.
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block bg-[#EFAD42] text-[#0A0A0A] font-body font-bold text-xl
                       px-10 py-4 rounded-lg min-h-[56px] hover:bg-yellow-400 transition-colors"
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}

      <section style={{ background: '#F0F3F7' }} className="py-16 px-4">

        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text">
            {seoData['prix-cle-vs-concessionnaire'].h2[6]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a href={`tel:${NAP.phoneTel}`} className="btn-accent inline-flex items-center justify-center font-body font-bold rounded-lg">
          Appelez maintenant : {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Intervention rapide</p>
      </div>

    </>
  )
}
