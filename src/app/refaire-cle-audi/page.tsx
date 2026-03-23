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
 title: seoData['refaire-cle-audi'].title,
 description: seoData['refaire-cle-audi'].description,
 alternates: { canonical: 'https://sinnes.fr/refaire-cle-audi/' },
 openGraph: {
  title: seoData['refaire-cle-audi'].title,
  url: 'https://sinnes.fr/refaire-cle-audi/',
  images: [{ url: '/images/Deplacement.png', width: 1024, height: 683 }],
 },
}

const FAQ_ITEMS: FAQItem[] = [
 {
  question: 'Peut-on refaire une clé Audi sans aller chez le concessionnaire ?',
  answer: 'Oui. Sinouhé Rochereau maîtrise le système VAG avec valise Abrites et calcul du PIN Code IMMO4/IMMO5. Résultat identique au concessionnaire, délai plus court et tarif souvent inférieur.',
 },
 {
  question: 'Combien coûte de refaire une clé Audi ?',
  answer: `À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé Audi avec lame escamotable. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une clé KESSY / badge. Devis gratuit au +33 6 75 54 04 11.`,
 },
 {
  question: 'Intervenez-vous sur toutes les générations Audi ?',
  answer: 'Oui, de l\'Audi A3 8P (2003) aux modèles récents Q5 FY (2017+). Chaque génération utilise un transpondeur différent — notre valise Abrites couvre l\'intégralité de la gamme.',
 },
 {
  question: 'Peut-on refaire une clé Audi à domicile ?',
  answer: 'Oui. Sinnes Automobiles intervient à domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes avec le matériel portable Abrites.',
 },
]

const review = getReviewForPage('/refaire-cle-audi/')

const schema = {
 '@context': 'https://schema.org',
 '@graph': [
  {
   '@type': 'Service',
   '@id': 'https://sinnes.fr/refaire-cle-audi/#service',
   name: 'Reproduction clé Audi Nice',
   serviceType: 'Car Key Duplication',
   description: 'Expertise VAG : reproduction et programmation de clés Audi à Nice. Systèmes IMMO4/IMMO5 et KESSY.',
   provider: { '@id': 'https://sinnes.fr/#organization' },
   areaServed: AREA_SERVED_TYPED,
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
    name: 'Tarifs clé Audi',
    itemListElement: [
     { '@type': 'Offer', name: 'Clé Audi avec lame escamotable', price: `${PRICES.cleCentralisee.sinnes}`, priceCurrency: 'EUR' },
     { '@type': 'Offer', name: 'Clé KESSY / badge Audi', price: `${PRICES.cleMainsLibres.sinnes}`, priceCurrency: 'EUR' },
    ],
   },
  },
  {
   '@type': 'BreadcrumbList',
   itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
    { '@type': 'ListItem', position: 2, name: 'Reproduction de clé', item: 'https://sinnes.fr/reproduction-cle-voiture/' },
    { '@type': 'ListItem', position: 3, name: 'Double de clé', item: 'https://sinnes.fr/double-cle-voiture/' },
    { '@type': 'ListItem', position: 4, name: 'Refaire clé Audi', item: 'https://sinnes.fr/refaire-cle-audi/' },
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
   '@id': 'https://sinnes.fr/refaire-cle-audi/#webpage',
   url: 'https://sinnes.fr/refaire-cle-audi/',
   datePublished: '2026-03-16',
   dateModified: '2026-03-22',
   name: 'Refaire une clé Audi à Nice · Programmation VAG officielle',
   isPartOf: { '@id': 'https://sinnes.fr/#website' },
   about: { '@id': 'https://sinnes.fr/#organization' },
   mainEntity: { '@id': 'https://sinnes.fr/refaire-cle-audi/#service' }
  }
 ],
}

const steps = [
 { num: 1, title: 'Votre Audi', desc: "Identification de votre modèle et de votre type de clé — lame escamotable classique ou badge sans contact (KESSY)" },
 { num: 2, title: 'Diagnostic', desc: "Lecture du système électronique de votre Audi via valise professionnelle — chaque génération a ses spécificités" },
 { num: 3, title: 'Programmation', desc: "La nouvelle clé est enregistrée dans le calculateur de votre voiture : votre Audi la reconnaît comme d'origine" },
 { num: 4, title: 'Garantie', desc: 'Clé opérationnelle, immobiliseur préservé, garantie constructeur Audi intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
 { icon: <IconEuro />, label: `À partir de ${PRICES.cleCentralisee.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
 { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends inclus' },
 { icon: <IconWrench />, label: 'VAG / KESSY', sublabel: 'IMMO4/IMMO5 · Abrites' },
 { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]


export default function RefaireCleAudiPage() {
 return (
  <>
   <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

   {/* BREADCRUMB */}
   <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
    <div className="container-sinnes">
     <ol className="flex gap-2 text-sm font-body text-text-muted">
      <li><a href="/" className="hover:text-primary">Accueil</a></li>
      <li aria-hidden="true" className="select-none">›</li>
      <li aria-current="page">Refaire clé Audi</li>
     </ol>
    </div>
   </nav>

   {/* HERO */}
   <section style={{ background: '#0A0A0A' }} className="pt-16 pb-6 px-4">
    <div className="container-sinnes">
     <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
      <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
      <span className="font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>{REVIEWS.reviewCount} avis Google · {REVIEWS.ratingValue}/5
</span>
     </div>

     <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6 " style={{ color: '#FFFFFF' }}>
      {seoData['refaire-cle-audi'].h1}
     </h1>

     <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Vous avez perdu votre clé Audi, vous voulez en faire un double, ou votre clé ne démarre
      plus ? Sinnes Automobiles intervient sur toute la gamme à Nice : A1, A3, A4, A5, A6, Q3,
      Q5, Q7 et TT — y compris les modèles récents avec clé sans contact. Sinouhé Rochereau
      est formateur international en programmation automobile : il connaît les systèmes Audi
      mieux que beaucoup de concessionnaires. À partir de {PRICES.cleCentralisee.sinnes}€,
      devis gratuit au <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
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
   <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-audi" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

   {/* PROCESS STEPS */}
   <section className="bg-white pt-6 pb-16 px-4">
    <div className="container-sinnes">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center " style={{ color: '#111111' }}>
      {seoData['refaire-cle-audi'].h2[0]}
     </h2>
     <ProcessSteps steps={steps} theme="light" />
    </div>
   </section>

   {/* AVIS GOOGLE RÉEL */}
   {review && <SingleReview review={review} serviceName="Refaire clé Audi" serviceUrl="/refaire-cle-audi/" />}

   {/* TRUST STRIP */}
   <TrustStrip theme="shade" items={TRUST_ITEMS} />


   {/* H2 BLOC 1 — dark */}
   <section style={{ background: '#111111' }} className="py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
      {seoData['refaire-cle-audi'].h2[1]}
     </h2>
     <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Sinnes Automobiles couvre l'intégralité de la gamme Audi commercialisée en France.
      Citadines, berlines, SUV et coupés — chaque famille est prise en charge, y compris les
      générations intermédiaires que beaucoup de serruriers ne maîtrisent pas faute d'outils.
     </p>
     <ul className="grid grid-cols-2 gap-x-10 gap-y-3 mb-8">
      {[
       { model: 'A1', gens: '8X, GB' },
       { model: 'A3', gens: '8P · 8V · 8Y' },
       { model: 'A4', gens: 'B7 · B8 · B9' },
       { model: 'A5', gens: 'toutes générations' },
       { model: 'A6', gens: 'C6, C7' },
       { model: 'Q3', gens: 'toutes générations' },
       { model: 'Q5', gens: 'FY' },
       { model: 'Q7', gens: 'toutes générations' },
       { model: 'TT', gens: '8J, 8S' },
      ].map(({ model, gens }) => (
       <li key={model} className="flex items-baseline gap-3">
        <span className="font-heading font-bold text-lg" style={{ color: '#EFAD42', minWidth: '2.5rem' }}>{model}</span>
        <span className="font-body text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>{gens}</span>
       </li>
      ))}
     </ul>
     <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Audi fait partie du groupe Volkswagen — avec Seat, Skoda et Cupra. Ces marques partagent
      la même architecture électronique, ce qui permet à Sinouhé d'intervenir sur toutes avec
      les mêmes outils professionnels. Un VW Golf, un Seat Leon ou un Skoda Octavia récent :
      même procédure, même niveau d'expertise. Pour en savoir plus sur la{' '}
      <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
       programmation de clé voiture
      </a>{' '}
      en général, consultez notre page dédiée.
     </p>
    </div>
   </section>

   {/* H2 BLOC 2 — light */}
   <section className="bg-white py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
      {seoData['refaire-cle-audi'].h2[2]}
     </h2>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Refaire une clé Audi est plus complexe qu'une clé ordinaire parce que chaque génération
      utilise un système de sécurité différent. Concrètement : les modèles d'avant 2012 — A3,
      A4, A6 de cette époque — fonctionnent avec l'IMMO4. Les versions plus récentes (A3 8V,
      A4 B9, Q5...) utilisent l'IMMO5, dont le niveau de protection est plus élevé et qui
      nécessite un serveur dédié pour déverrouiller la programmation. C'est ce que beaucoup
      de serruriers ne peuvent pas faire — Sinouhé, si.
     </p>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Côté format, votre clé Audi est soit une clé à lame escamotable avec télécommande intégrée
      — celle que vous retournez pour faire sortir la lame — soit un badge plat que vous gardez
      dans votre poche pendant que votre voiture vous reconnaît à proximité. Ce deuxième format,
      appelé KESSY, est présent sur les A4, A6 et Q5/Q7 récents. Les deux formats se refont,
      à des <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>tarifs différents selon le modèle</a>.
     </p>
     <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
      L'A3 8P (2003–2013) est le modèle qu'on nous confie le plus souvent : il est très répandu
      et sa programmation est rapide. Quelle que soit votre génération, ce que nous faisons ne
      touche pas à la garantie constructeur Audi — la procédure est non invasive. Appelez-nous
      au <span className="whitespace-nowrap">{NAP.phoneDisplay}</span> pour un devis en deux minutes.
     </p>
    </div>
   </section>

   {/* H2 BLOC 3 — dark (table dark) */}
   <section style={{ background: '#111111' }} className="py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
      {seoData['refaire-cle-audi'].h2[3]}
     </h2>
     <div className="overflow-x-auto mb-8">
      <table className="w-full text-sm font-body border-collapse">
       <thead>
        <tr style={{ background: '#1A1A1A' }}>
         <th className="px-4 py-3 text-left" style={{ color: '#EFAD42' }}>Type de clé Audi</th>
         <th className="px-4 py-3 text-right" style={{ color: '#EFAD42' }}>Sinnes</th>
         <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
        </tr>
       </thead>
       <tbody>
        <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
         <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé avec lame escamotable + plip (ID48, IMMO4)</td>
         <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
         <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
        </tr>
        <tr style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
         <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé KESSY / badge (A4 B9, Q5 FY)</td>
         <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
         <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
        </tr>
       </tbody>
      </table>
     </div>
     <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
      Le système VAG utilise des technologies de{' '}
      <a href="/cle-voiture-transpondeur/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>transpondeur clé Audi</a>{' '}
      parmi les plus complexes du marché — découvrez comment fonctionne ce système.
     </p>
    </div>
   </section>

   {/* CTA MILIEU */}
   <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
    <div className="container-sinnes">
     <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 " style={{ color: '#0A0A0A' }}>
      {seoData['refaire-cle-audi'].h2[4]}
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
      {seoData['refaire-cle-audi'].h2[5]}
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
