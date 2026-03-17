import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQAccordion from './FAQAccordion'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'

export const metadata: Metadata = {
  title: 'Refaire une clé Mercedes à Nice — Clé étoile et badge',
  description: 'Reproduction clé Mercedes à Nice : Classe A, C, E, GLC. KESSY, clé étoile, ProxiKey. Sinouhé Rochereau, formateur Incarline. +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-mercedes/' },
  openGraph: {
    title: 'Refaire une clé Mercedes à Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/refaire-cle-mercedes/',
  },
}

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
        { '@type': 'ListItem', position: 2, name: 'Refaire clé Mercedes', item: 'https://sinnes.fr/refaire-cle-mercedes/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé Mercedes sans concessionnaire ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Sinouhé Rochereau maîtrise la programmation HiTag AES et ProxiKey via valise Abrites. Le résultat est identique à celui du concessionnaire Mercedes, sans le délai ni le surcoût.' },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte de refaire une clé Mercedes ?',
          acceptedAnswer: { '@type': 'Answer', text: `À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé étoile Mercedes avec télécommande (Classe A W176). À partir de ${PRICES.cleMainsLibres.sinnes}€ pour un badge ProxiKey (Classe E, GLC, GLE). Devis gratuit au +33 6 75 54 04 11.` },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous sur les Mercedes récentes (W205, GLC) ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Les Mercedes récentes utilisent le transpondeur HiTag AES, le plus sécurisé du marché. Sinouhé Rochereau dispose de la mise à jour Abrites spécifique à ces modèles.' },
        },
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé Smart (groupe Mercedes) ?',
          acceptedAnswer: { '@type': 'Answer', text: `Oui. Les Smart ForTwo et ForFour utilisent la même architecture clé que la Classe A W176 — intervention identique, tarif à partir de ${PRICES.cleCentralisee.sinnes}€.` },
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://sinnes.fr/#sinouhe',
      name: 'Sinouhé Rochereau',
      jobTitle: 'Expert en programmation de clés automobiles',
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
            <span className="text-[#FFD700] text-lg">★★★★★</span>
            <span className="font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>57 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            Refaire une clé Mercedes à Nice — Clé étoile et badge ProxiKey
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Mercedes à Nice ? Sinnes Automobiles intervient
            sur tous les modèles : Classe A, Classe C, Classe E, GLC, GLE et Smart. Sinouhé Rochereau
            maîtrise la programmation HiTag AES, la clé étoile et le badge ProxiKey via valise Abrites.
            À partir de {PRICES.cleCentralisee.sinnes}€, devis gratuit.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 font-body font-bold text-xl px-8 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity mb-8"
            style={{ background: '#FFD700', color: '#0A0A0A' }}
          >
            Devis gratuit — {NAP.phoneDisplay}
          </a>

          <p className="text-sm border-l-4 border-[#FFD700] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> —
            Expert automobile, formateur international Incarline. Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            Comment fonctionne la reproduction de clé Mercedes ?
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Clé Mercedes : modèles couverts à Nice
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
            <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>
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
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Clé étoile et ProxiKey Mercedes — programmation HiTag AES
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            La gamme Mercedes se divise en plusieurs types de clé selon la génération et la finition :
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            La <strong style={{ color: '#111111' }}>clé étoile Mercedes</strong> (design emblématique avec
            logo Mercedes-Benz intégré) est équipée d'une lame escamotable et d'un plip de centralisation.
            Elle est présente sur la Classe A W176, Classe C W204, et les modèles d'entrée de gamme.
            Transpondeur utilisé : ID46 pour les séries avant 2012, puis HiTag2 pour les séries récentes.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Le <strong style={{ color: '#111111' }}>ProxiKey (badge KESSY)</strong> est présent sur la
            Classe E W212+, la Classe C W205, le GLC et le GLE. Ce badge sans contact permet le déverrouillage
            et le démarrage sans sortir la clé du sac ou de la poche. Son transpondeur{' '}
            <strong style={{ color: '#111111' }}>HiTag AES</strong> est l'un des plus sécurisés du marché
            automobile — son calcul nécessite une version Abrites à jour et une licence spécifique Mercedes.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Cas particulier : les <strong style={{ color: '#111111' }}>Smart ForTwo et ForFour</strong>
            (groupe Mercedes-Benz) utilisent la même architecture que la Classe A W176. L'intervention
            est identique, avec un tarif à partir de {PRICES.cleCentralisee.sinnes}€. Pour connaître le{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Mercedes
            </a>{' '}
            précis pour votre modèle, appelez le {NAP.phoneDisplay}.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark + blockquote) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Tarif clé Mercedes — à partir de {PRICES.cleCentralisee.sinnes}€
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#FFD700' }}>Type de clé Mercedes</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#FFD700' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé étoile avec télécommande (Classe A W176, Smart)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0D0D0D', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Badge ProxiKey KESSY (Classe E, GLC, GLE)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>"Mon badge ProxiKey GLC ne fonctionnait plus. Le concessionnaire avait un délai de deux
            semaines. Sinouhé est intervenu à Nice le lendemain, badge reprogrammé en une heure.
            Excellent travail, tarif raisonnable."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              — <strong style={{ color: '#FFFFFF' }}>Frédéric L.</strong>, avis Google · Décembre 2025
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#FFD700' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0A' }}>
            Refaites votre clé Mercedes maintenant
          </h2>
          <p className="font-body text-xl mb-8" style={{ color: 'rgba(0,0,0,0.7)' }}>
            Devis gratuit · Intervention 7j/7 · Nice et Côte d'Azur
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block font-body font-bold text-2xl px-12 py-5 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity shadow-lg"
            style={{ background: '#0A0A0A', color: '#FFD700' }}
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#F9FAFB' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text">
            Questions fréquentes — Clé Mercedes
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA BAS */}
      <div className="text-center py-12 bg-bg-shade">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="inline-flex items-center gap-3 font-body font-bold text-lg px-10 py-4 rounded-lg min-h-[56px] hover:opacity-90 transition-opacity"
          style={{ background: '#FFD700', color: '#0A0A0A' }}
        >
          Appelez maintenant — {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Intervention rapide</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="flex items-center justify-center w-full font-body font-bold text-lg py-4 min-h-[56px]"
          style={{ background: '#FFD700', color: '#0A0A0A' }}
        >
          Devis gratuit — {NAP.phoneDisplay}
        </a>
      </div>
    </>
  )
}
