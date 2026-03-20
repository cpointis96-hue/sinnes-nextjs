import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
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

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-audi/#service',
      name: 'Reproduction clé Audi Nice',
      provider: { '@id': 'https://sinnes.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Cannes' },
      ],
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
    {
      '@type': 'Person',
      '@id': 'https://sinnes.fr/#sinouhe',
      name: 'Sinouhé Rochereau',
      jobTitle: 'Expert en programmation de clés automobiles',
      knowsAbout: TEAM.sinouhe.knowsAbout,
      worksFor: { '@id': 'https://sinnes.fr/#organization' },
    },
  ],
}

const steps = [
  { num: 1, title: 'Votre Audi', desc: "Identification de la génération et du système VAG : A3 8P, A4 B8, Q5 FY, KESSY ou lame escamotable" },
  { num: 2, title: 'Diagnostic', desc: 'Lecture du transpondeur Audi via Abrites — ID48, MegaCode ou HiTag Pro selon la génération' },
  { num: 3, title: 'Programmation', desc: 'Calcul PIN Code IMMO4/IMMO5 et injection dans le calculateur VAG — méthode certifiée Incarline' },
  { num: 4, title: 'Garantie', desc: 'Clé opérationnelle, immobiliseur préservé, garantie constructeur Audi intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleCentralisee.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends inclus' },
  { icon: <IconWrench />, label: 'VAG / KESSY', sublabel: 'IMMO4/IMMO5 · Abrites' },
  { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]

const review = getReviewForPage('/refaire-cle-audi/')

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
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>58 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6 break-words" style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-audi'].h1} :<br />Programmation VAG officielle
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous cherchez à refaire ou programmer une clé Audi à Nice ? Sinnes Automobiles intervient sur
            toute la gamme : A1, A3 (8P/8V), A4 (B7/B8/B9), A5, A6, Q3, Q5, Q7 et TT. Sinouhé Rochereau
            maîtrise le système VAG avec valise Abrites : calcul PIN Code IMMO4/IMMO5, programmation
            KESSY et clés HiTag Pro. À partir de {PRICES.cleCentralisee.sinnes}€, devis gratuit.
            appelez le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 font-body font-bold text-lg sm:text-xl px-6 sm:px-8 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity mb-8"
            style={{ background: '#EFAD42', color: '#0A0A0A' }}
          >
            Devis gratuit : <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
          </a>

          <p className="text-sm border-l-4 border-[#EFAD42] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> ·
            Expert automobile, formateur international Incarline. Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-audi" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center break-words" style={{ color: '#111111' }}>
            {seoData['refaire-cle-audi'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Refaire clé Audi" serviceUrl="/refaire-cle-audi/" />}


      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 break-words" style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-audi'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles intervient sur l'intégralité de la gamme Audi présente en France :
            <strong style={{ color: '#FFFFFF' }}> A1</strong> (8X, GB),
            <strong style={{ color: '#FFFFFF' }}> A3</strong> (8P de 2003, 8V de 2012, 8Y de 2020),
            <strong style={{ color: '#FFFFFF' }}> A4</strong> (B7, B8, B9),
            <strong style={{ color: '#FFFFFF' }}> A5</strong>,
            <strong style={{ color: '#FFFFFF' }}> A6</strong> (C6, C7),
            <strong style={{ color: '#FFFFFF' }}> Q3</strong>,
            <strong style={{ color: '#FFFFFF' }}> Q5</strong> (FY),
            <strong style={{ color: '#FFFFFF' }}> Q7</strong> et
            <strong style={{ color: '#FFFFFF' }}> TT</strong>.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Audi appartient au groupe VAG (Volkswagen, Audi, Seat, Skoda, Cupra) : les systèmes
            d'immobiliseur sont communs entre ces marques, ce qui permet à Sinouhé d'intervenir sur
            l'ensemble du groupe avec les mêmes outils. Pour une{' '}
            <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              programmation clé Audi
            </a>{' '}
            ou pour tout autre véhicule VAG, le processus est identique.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 break-words" style={{ color: '#111111' }}>
            {seoData['refaire-cle-audi'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La difficulté spécifique aux Audi réside dans la multiplicité des systèmes d'immobiliseur
            selon les générations. L'
            <strong style={{ color: '#111111' }}>IMMO4</strong> équipe les modèles 2003–2012 (A3 8P, A4 B7/B8).
            L'<strong style={{ color: '#111111' }}>IMMO5</strong> monte à bord des modèles 2012 et plus récents
            (A3 8V, A4 B9, Q5 FY). La différence technique : l'IMMO5 nécessite un calcul de PIN Code
            encore plus sécurisé via serveur Abrites en ligne.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La clé classique Audi avec lame escamotable et plip intégré utilise un transpondeur
            <strong style={{ color: '#111111' }}> ID48</strong> (A3 8P, A4 B7) ou
            <strong style={{ color: '#111111' }}> MegaCode / HiTag Pro</strong> pour les versions plus récentes.
            La clé KESSY (Keyless Entry and Start System) est présente depuis l'A6 2011 et s'est
            généralisée sur l'A4 B9 et les Q5/Q7 récents : il s'agit d'un badge sans contact qui
            reconnaît le conducteur à proximité.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            L'A3 8P (2003–2013) reste l'un des cas les plus fréquemment traités chez Sinnes : ce modèle
            extrêmement répandu utilise l'ID48 avec IMMO4, une procédure maîtrisée et rapide. Dans tous
            les cas, la programmation préserve la garantie constructeur Audi. Pour connaître le{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Audi
            </a>{' '}
            adapté à votre modèle, contactez-nous au <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 break-words" style={{ color: '#FFFFFF' }}>
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
            Vous avez une autre marque haut de gamme ? Découvrez aussi notre page pour{' '}
            <a href="/refaire-cle-mercedes/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>refaire une clé Mercedes</a> à Nice.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 break-words" style={{ color: '#0A0A0A' }}>
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
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text break-words">
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
