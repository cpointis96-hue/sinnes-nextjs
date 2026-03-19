import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQAccordion from './FAQAccordion'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'

export const metadata: Metadata = {
  title: 'Refaire une clé Hyundai à Nice — Toutes générations',
  description: 'Reproduction et double de clé Hyundai à Nice. Architecture propriétaire IMMO3. Sinouhé Rochereau, expert Incarline. Devis gratuit — +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-hyundai/' },
  openGraph: {
    title: 'Refaire une clé Hyundai à Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/refaire-cle-hyundai/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-hyundai/#service',
      name: 'Reproduction clé Hyundai Nice',
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
        { '@type': 'ListItem', position: 2, name: 'Refaire clé Hyundai', item: 'https://sinnes.fr/refaire-cle-hyundai/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Peut-on cloner une clé Hyundai sans aller chez le concessionnaire ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Sur les modèles avant 2010 équipés du transpondeur PCF7936 : oui, clonage direct possible. Sur les modèles 2010+ avec ID46 ou Texas Crypto : non, une programmation via valise Abrites est obligatoire.' },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte de refaire une clé Hyundai ?',
          acceptedAnswer: { '@type': 'Answer', text: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple Hyundai. À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour une Smart Key / badge.` },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous sur les Hyundai hybrides et électriques ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Les Ioniq hybride, Ioniq 5 et Kona électrique utilisent un système Smart Key spécifique. Sinouhé Rochereau maîtrise la programmation des badges et inserts de secours pour ces modèles.' },
        },
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé Hyundai à domicile ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Sinnes Automobiles intervient à domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes avec le matériel portable complet.' },
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
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="text-[#FFD700] text-lg">★★★★★</span>
            <span className="font-body text-sm font-semibold" style={{ color: '#FFFFFF' }}>57 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            Refaire une clé Hyundai à Nice — Toutes générations
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Hyundai à Nice ? Sinnes Automobiles intervient sur
            tous les modèles : i10, i20, i30, Tucson, Santa Fe, Ioniq. Sinouhé Rochereau maîtrise le
            système IMMO3 propriétaire Hyundai — programmation via valise Abrites, transpondeur PCF7936
            ou ID46 selon la génération. À partir de {PRICES.cleSimple.sinnes}€, devis gratuit.
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
            Comment fonctionne la reproduction de clé Hyundai ?
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
            Refaire une clé Hyundai — modèles couverts
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
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>
              refaire une clé Hyundai
            </a>{' '}
            dans les meilleures conditions, il faut identifier précisément le modèle, l'année et la
            variante équipée.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Le système IMMO3 Hyundai : pourquoi la programmation est indispensable
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            L'immobiliseur Hyundai de troisième génération (IMMO3) est un système propriétaire qui
            empêche le clonage direct des clés sur tous les modèles produits depuis 2010. Contrairement
            à d'autres constructeurs qui utilisent des standards ouverts, Hyundai a développé une
            architecture spécifique pour ses véhicules récents.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles antérieurs à 2010</strong> (i10 première
            génération, i30 FD, ix35 début de série) : le transpondeur <strong style={{ color: '#111111' }}>PCF7936</strong> est
            utilisé. Le clonage direct est possible via la machine ZedFull — c'est la méthode la plus
            rapide et la moins coûteuse.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Sur les <strong style={{ color: '#111111' }}>modèles 2010 et plus récents</strong> : Hyundai
            utilise l'<strong style={{ color: '#111111' }}>ID46 crypté</strong> ou le{' '}
            <strong style={{ color: '#111111' }}>Texas Crypto</strong>. Ces puces ne peuvent pas être
            clonées par simple copie électronique — une communication directe avec le calculateur du
            véhicule est obligatoire via valise Abrites. Sinouhé Rochereau, formateur certifié Incarline,
            maîtrise cette procédure.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Pour les <strong style={{ color: '#111111' }}>Smart Keys Hyundai</strong> (Tucson 2021+,
            Ioniq, Ioniq 5) : il s'agit d'un badge RFID sans contact avec un insert de secours mécanique.
            La programmation requiert une session Abrites avec firmware récent — c'est le cas le plus
            complexe de la gamme, mais que Sinnes maîtrise entièrement.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Dans tous les cas, la méthode Sinnes préserve intégralement l'immobiliseur et la garantie
            constructeur Hyundai. L'intervention est non-invasive : aucun remplacement de calculateur,
            aucune modification du véhicule. Pour connaître le{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Hyundai
            </a>{' '}
            précis pour votre modèle, appelez le {NAP.phoneDisplay}.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark + blockquote) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Tarif clé Hyundai — à partir de {PRICES.cleSimple.sinnes}€
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#FFD700' }}>Type de clé Hyundai</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#FFD700' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé simple i10 (PCF7936, avant 2010)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0D0D0D', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé i30 / Tucson avec télécommande (ID46)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Smart Key Ioniq / Tucson 2021+ (badge)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>"J'avais perdu mes deux clés de Tucson. Le concessionnaire m'avait annoncé plus de 400€
            et trois semaines de délai. Sinouhé est venu chez moi le lendemain, en deux heures c'était
            réglé pour beaucoup moins cher."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              — <strong style={{ color: '#FFFFFF' }}>Marc Durand</strong>, avis Google · Janvier 2026
            </footer>
          </blockquote>

          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vous avez une autre marque ? Découvrez aussi notre page pour{' '}
            <a href="/refaire-cle-toyota/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>refaire une clé Toyota</a> à Nice.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#FFD700' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0A' }}>
            Refaites votre clé Hyundai maintenant
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
            Questions fréquentes — Clé Hyundai
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
