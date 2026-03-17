import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQAccordion from './FAQAccordion'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'

export const metadata: Metadata = {
  title: 'Refaire une clé Audi à Nice — Programmation VAG officielle',
  description: 'Reproduction clé Audi à Nice : A1, A3, A4, Q3, Q5. Système KESSY et VAG. Sinouhé Rochereau, formateur Incarline. Devis gratuit — +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-audi/' },
  openGraph: {
    title: 'Refaire une clé Audi à Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/refaire-cle-audi/',
  },
}

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
        { '@type': 'ListItem', position: 2, name: 'Refaire clé Audi', item: 'https://sinnes.fr/refaire-cle-audi/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé Audi sans aller chez le concessionnaire ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Sinouhé Rochereau maîtrise le système VAG avec valise Abrites et calcul du PIN Code IMMO4/IMMO5. Résultat identique au concessionnaire, délai plus court et tarif souvent inférieur.' },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte de refaire une clé Audi ?',
          acceptedAnswer: { '@type': 'Answer', text: `À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé Audi avec lame escamotable. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une clé KESSY / badge. Devis gratuit au +33 6 75 54 04 11.` },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous sur toutes les générations Audi ?',
          acceptedAnswer: { '@type': 'Answer', text: "Oui, de l'Audi A3 8P (2003) aux modèles récents Q5 FY (2017+). Chaque génération utilise un transpondeur différent — notre valise Abrites couvre l'intégralité de la gamme." },
        },
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé Audi à domicile ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Sinnes Automobiles intervient à domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes avec le matériel portable Abrites.' },
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
  { num: 1, title: 'Votre Audi', desc: "Identification de la génération et du système VAG : A3 8P, A4 B8, Q5 FY, KESSY ou lame escamotable" },
  { num: 2, title: 'Diagnostic', desc: 'Lecture du transpondeur Audi via Abrites — ID48, MegaCode ou HiTag Pro selon la génération' },
  { num: 3, title: 'Programmation', desc: 'Calcul PIN Code IMMO4/IMMO5 et injection dans le calculateur VAG — méthode certifiée Incarline' },
  { num: 4, title: 'Garantie', desc: 'Clé opérationnelle, immobiliseur préservé, garantie constructeur Audi intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleCentralisee.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends inclus' },
  { icon: <IconWrench />, label: 'VAG / KESSY', sublabel: 'IMMO4/IMMO5 — Abrites' },
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
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="text-[#FFD700] text-lg">★★★★★</span>
            <span className="font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>57 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            Refaire une clé Audi à Nice — Programmation VAG officielle
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous cherchez à refaire ou programmer une clé Audi à Nice ? Sinnes Automobiles intervient sur
            toute la gamme : A1, A3 (8P/8V), A4 (B7/B8/B9), A5, A6, Q3, Q5, Q7 et TT. Sinouhé Rochereau
            maîtrise le système VAG avec valise Abrites — calcul PIN Code IMMO4/IMMO5, programmation
            KESSY et clés HiTag Pro. À partir de {PRICES.cleCentralisee.sinnes}€, devis gratuit.
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
            Comment se déroule la programmation clé Audi ?
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
            Clé Audi : modèles couverts à Nice
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
            Audi appartient au groupe VAG (Volkswagen, Audi, Seat, Skoda, Cupra) — les systèmes
            d'immobiliseur sont communs entre ces marques, ce qui permet à Sinouhé d'intervenir sur
            l'ensemble du groupe avec les mêmes outils. Pour une{' '}
            <a href="/programmation-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>
              programmation clé Audi
            </a>{' '}
            ou pour tout autre véhicule VAG, le processus est identique.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Système VAG et KESSY — pourquoi la programmation Audi est complexe
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            La difficulté spécifique aux Audi réside dans la multiplicité des systèmes d'immobiliseur
            selon les générations. L'
            <strong style={{ color: '#111111' }}>IMMO4</strong> équipe les modèles 2003–2012 (A3 8P, A4 B7/B8).
            L'<strong style={{ color: '#111111' }}>IMMO5</strong> monte à bord des modèles 2012 et plus récents
            (A3 8V, A4 B9, Q5 FY). La différence technique : l'IMMO5 nécessite un calcul de PIN Code
            encore plus sécurisé via serveur Abrites en ligne.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            La clé classique Audi avec lame escamotable et plip intégré utilise un transpondeur
            <strong style={{ color: '#111111' }}> ID48</strong> (A3 8P, A4 B7) ou
            <strong style={{ color: '#111111' }}> MegaCode / HiTag Pro</strong> pour les versions plus récentes.
            La clé KESSY — Keyless Entry and Start System — est présente depuis l'A6 2011 et s'est
            généralisée sur l'A4 B9 et les Q5/Q7 récents : il s'agit d'un badge sans contact qui
            reconnaît le conducteur à proximité.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            L'A3 8P (2003–2013) reste l'un des cas les plus fréquemment traités chez Sinnes — ce modèle
            extrêmement répandu utilise l'ID48 avec IMMO4, une procédure maîtrisée et rapide. Dans tous
            les cas, la programmation préserve la garantie constructeur Audi. Pour connaître le{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Audi
            </a>{' '}
            adapté à votre modèle, contactez-nous au {NAP.phoneDisplay}.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Tarif clé Audi — à partir de {PRICES.cleCentralisee.sinnes}€
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#FFD700' }}>Type de clé Audi</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#FFD700' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé avec lame escamotable + plip (ID48, IMMO4)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0D0D0D', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé KESSY / badge (A4 B9, Q5 FY)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>"Ma clé Audi A4 était tombée en panne de télécommande et ne démarrait plus. Sinouhé est
            venu à mon bureau à Nice-Méridia avec sa valise, il a tout réglé en 1h30. Impeccable."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              — <strong style={{ color: '#FFFFFF' }}>Laurent Ferreri</strong>, avis Google · Décembre 2025
            </footer>
          </blockquote>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#FFD700' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0A' }}>
            Refaites votre clé Audi maintenant
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
            Questions fréquentes — Clé Audi
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
