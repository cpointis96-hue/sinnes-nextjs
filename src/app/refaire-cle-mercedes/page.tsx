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
  title: seoData['refaire-cle-mercedes'].title,
  description: seoData['refaire-cle-mercedes'].description,
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-mercedes/' },
  openGraph: {
    title: seoData['refaire-cle-mercedes'].title,
    url: 'https://sinnes.fr/refaire-cle-mercedes/',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Peut-on refaire une clé Mercedes sans concessionnaire ?',
    answer: 'Oui. Sinouhé Rochereau maîtrise la programmation HiTag AES et ProxiKey via valise Abrites. Le résultat est identique à celui du concessionnaire Mercedes, sans le délai ni le surcoût.',
  },
  {
    question: 'Combien coûte de refaire une clé Mercedes ?',
    answer: `À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé étoile Mercedes avec télécommande (Classe A W176). À partir de ${PRICES.cleMainsLibres.sinnes}€ pour un badge ProxiKey (Classe E, GLC, GLE). Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: 'Intervenez-vous sur les Mercedes récentes (W205, GLC) ?',
    answer: 'Oui. Les Mercedes récentes utilisent le transpondeur HiTag AES, le plus sécurisé du marché. Sinouhé Rochereau dispose de la mise à jour Abrites spécifique à ces modèles.',
  },
  {
    question: 'Peut-on refaire une clé Smart (groupe Mercedes) ?',
    answer: `Oui. Les Smart ForTwo et ForFour utilisent la même architecture clé que la Classe A W176 — intervention identique, tarif à partir de ${PRICES.cleCentralisee.sinnes}€.`,
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-mercedes/#service',
      name: 'Reproduction clé Mercedes Nice',
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
        { '@type': 'ListItem', position: 4, name: 'Refaire clé Mercedes', item: 'https://sinnes.fr/refaire-cle-mercedes/' },
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
  { num: 1, title: 'Votre Mercedes', desc: "Identification du modèle : Classe A, C, E, GLC, GLE, Smart…" },
  { num: 2, title: 'Diagnostic', desc: 'Lecture du transpondeur HiTag AES ou ID46 via valise Abrites avec firmware récent' },
  { num: 3, title: 'Programmation', desc: 'Injection des codes dans le calculateur Mercedes — méthode officielle KESSY / ProxiKey' },
  { num: 4, title: 'Garantie', desc: 'Clé étoile ou badge opérationnel, garantie constructeur préservée' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleCentralisee.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconWrench />, label: 'HiTag AES', sublabel: 'KESSY + ProxiKey Mercedes' },
  { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]

const review = getReviewForPage('/refaire-cle-mercedes/')

export default function RefaireCleMercedesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Refaire clé Mercedes</li>
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
            {seoData['refaire-cle-mercedes'].h1} :<br />Clé étoile et badge ProxiKey
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Mercedes à Nice ? Sinnes Automobiles intervient
            sur tous les modèles : Classe A, Classe C, Classe E, GLC, GLE et Smart. Sinouhé Rochereau
            maîtrise la programmation HiTag AES, la clé étoile et le badge ProxiKey via valise Abrites.
            À partir de {PRICES.cleCentralisee.sinnes}€, devis gratuit.
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
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-refaire-cle-mercedes" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center break-words" style={{ color: '#111111' }}>
            {seoData['refaire-cle-mercedes'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Refaire clé Mercedes" serviceUrl="/refaire-cle-mercedes/" />}


      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 break-words" style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-mercedes'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles intervient sur l'ensemble des Mercedes commercialisées en France :
            <strong style={{ color: '#FFFFFF' }}> Classe A</strong> (W169, W176, W177),
            <strong style={{ color: '#FFFFFF' }}> Classe B</strong> (W245, W246),
            <strong style={{ color: '#FFFFFF' }}> Classe C</strong> (W204, W205),
            <strong style={{ color: '#FFFFFF' }}> Classe E</strong> (W212, W213),
            <strong style={{ color: '#FFFFFF' }}> GLC</strong>,
            <strong style={{ color: '#FFFFFF' }}> GLE</strong>,
            <strong style={{ color: '#FFFFFF' }}> GLA</strong> et
            <strong style={{ color: '#FFFFFF' }}> Smart</strong> (groupe Mercedes, ForTwo et ForFour).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour réaliser une{' '}
            <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              programmation clé Mercedes
            </a>{' '}
            dans les meilleures conditions, il est indispensable d'identifier précisément la génération
            du véhicule : chaque série utilise un système de transpondeur différent.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 break-words" style={{ color: '#111111' }}>
            {seoData['refaire-cle-mercedes'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La gamme Mercedes se divise en plusieurs types de clé selon la génération et la finition :
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La <strong style={{ color: '#111111' }}>clé étoile Mercedes</strong> (design emblématique avec
            logo Mercedes-Benz intégré) est équipée d'une lame escamotable et d'un plip de centralisation.
            Elle est présente sur la Classe A W176, Classe C W204, et les modèles d'entrée de gamme.
            Transpondeur utilisé : ID46 pour les séries avant 2012, puis HiTag2 pour les séries récentes.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Le <strong style={{ color: '#111111' }}>ProxiKey (badge KESSY)</strong> est présent sur la
            Classe E W212+, la Classe C W205, le GLC et le GLE. Ce badge sans contact permet le déverrouillage
            et le démarrage sans sortir la clé du sac ou de la poche. Son transpondeur{' '}
            <strong style={{ color: '#111111' }}>HiTag AES</strong> est l'un des plus sécurisés du marché
            automobile : son calcul nécessite une version Abrites à jour et une licence spécifique Mercedes.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Cas particulier : les <strong style={{ color: '#111111' }}>Smart ForTwo et ForFour</strong>
            (groupe Mercedes-Benz) utilisent la même architecture que la Classe A W176. L'intervention
            est identique, avec un tarif à partir de {PRICES.cleCentralisee.sinnes}€. Pour connaître le{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Mercedes
            </a>{' '}
            précis pour votre modèle, appelez le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark + blockquote) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 break-words" style={{ color: '#FFFFFF' }}>
            {seoData['refaire-cle-mercedes'].h2[3]}
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#EFAD42' }}>Type de clé Mercedes</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#EFAD42' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé étoile avec télécommande (Classe A W176, Smart)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0A0A0A', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Badge ProxiKey KESSY (Classe E, GLC, GLE)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#EFAD42' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Pour aller plus loin, consultez notre guide complet sur la{' '}
            <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>programmation clé voiture</a>,
            tous les systèmes, toutes les marques.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#EFAD42' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 break-words" style={{ color: '#0A0A0A' }}>
            {seoData['refaire-cle-mercedes'].h2[4]}
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
            {seoData['refaire-cle-mercedes'].h2[5]}
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
