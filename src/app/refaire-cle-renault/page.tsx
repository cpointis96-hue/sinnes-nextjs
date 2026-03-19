import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import FAQAccordion from './FAQAccordion'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'

export const metadata: Metadata = {
  title: 'Refaire une clé Renault à Nice — Clé carte et clé à lame',
  description: 'Reproduction clé Renault à Nice : Clio, Captur, Mégane, clé carte. Sinouhé Rochereau, expert IVER Renault. Devis gratuit — +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/refaire-cle-renault/' },
  openGraph: {
    title: 'Refaire une clé Renault à Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/refaire-cle-renault/',
  },
}

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/refaire-cle-renault/#service',
      name: 'Reproduction clé Renault Nice',
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
        { '@type': 'ListItem', position: 2, name: 'Refaire clé Renault', item: 'https://sinnes.fr/refaire-cle-renault/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé carte Renault (Mégane, Laguna) sans concessionnaire ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. La clé carte Renault utilise le système IVER propriétaire. Sinouhé Rochereau maîtrise le calcul du PIN Code IVER et la programmation via valise Abrites — y compris pour les modèles introuvables en concession (ex: Laguna 2, Espace IV).' },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte de refaire une clé Renault ?',
          acceptedAnswer: { '@type': 'Answer', text: `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé Clio 3 simple (transpondeur PCF7936). À partir de ${PRICES.cleCentralisee.sinnes}€ pour une clé carte Mégane ou Laguna. À partir de ${PRICES.cleMainsLibres.sinnes}€ pour un badge Smart Card (Mégane 4, Kadjar). Devis gratuit au +33 6 75 54 04 11.` },
        },
        {
          '@type': 'Question',
          name: 'Ma Clio 3 est ancienne, pouvez-vous quand même refaire la clé ?',
          acceptedAnswer: { '@type': 'Answer', text: `Oui. La Clio 3 (2005-2012) utilise un transpondeur PCF7936 — clonage direct possible sans passer par le réseau Renault. Intervention rapide, à partir de ${PRICES.cleSimple.sinnes}€.` },
        },
        {
          '@type': 'Question',
          name: 'Peut-on refaire une clé Renault à domicile ?',
          acceptedAnswer: { '@type': 'Answer', text: 'Oui. Sinnes Automobiles intervient à votre domicile à Nice, Antibes, Cagnes-sur-Mer et Cannes. Sinouhé Rochereau se déplace avec le matériel portable complet.' },
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
  { num: 1, title: 'Votre Renault', desc: "Identification du modèle et du type de clé : carte Mégane, clé Clio, badge Kadjar…" },
  { num: 2, title: 'Diagnostic IVER', desc: 'Lecture et calcul du PIN Code IVER via valise Abrites — système propriétaire Renault' },
  { num: 3, title: 'Programmation', desc: "Injection des codes dans le calculateur Renault — méthode certifiée Incarline" },
  { num: 4, title: 'Garantie', desc: 'Clé ou carte opérationnelle, immobiliseur préservé, garantie constructeur intacte' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro />, label: `À partir de ${PRICES.cleSimple.sinnes}\u00a0€`, sublabel: 'Devis gratuit', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconWrench />, label: 'IVER Renault', sublabel: 'Clé carte + badge Smart Card' },
  { icon: <IconShield />, label: 'Garantie constructeur', sublabel: 'Méthode non-invasive' },
]

export default function RefaireCleRenaultPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page">Refaire clé Renault</li>
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
            Refaire une clé Renault à Nice — Clé carte et clé à lame
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez besoin de refaire ou doubler une clé Renault à Nice ? Renault est la marque numéro un
            de la clientèle Sinnes sur la Côte d'Azur. Sinouhé Rochereau maîtrise le système IVER
            propriétaire Renault — clé carte Mégane et Laguna, clé Clio, badge Smart Card Kadjar.
            À partir de {PRICES.cleSimple.sinnes}€, devis gratuit.
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
            Comment fonctionne la reproduction de clé Renault ?
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* CORPS TEXTUEL — BLOC 1 : modèles couverts (dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Clé Renault : modèles couverts à Nice
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Renault est la marque la plus fréquente parmi la clientèle Sinnes sur la Côte d'Azur.
            Nous intervenons sur l'intégralité de la gamme :
            <strong style={{ color: '#FFFFFF' }}> Clio</strong> (2, 3, 4, 5),
            <strong style={{ color: '#FFFFFF' }}> Mégane</strong> (2, 3, 4),
            <strong style={{ color: '#FFFFFF' }}> Captur</strong>,
            <strong style={{ color: '#FFFFFF' }}> Kadjar</strong>,
            <strong style={{ color: '#FFFFFF' }}> Koleos</strong>,
            <strong style={{ color: '#FFFFFF' }}> Laguna</strong> (2, 3),
            <strong style={{ color: '#FFFFFF' }}> Espace</strong> (IV),
            <strong style={{ color: '#FFFFFF' }}> Kangoo</strong> et
            <strong style={{ color: '#FFFFFF' }}> Trafic</strong> (utilitaire).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour réaliser un{' '}
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>
              double de clé Renault
            </a>{' '}
            dans les meilleures conditions, l'identification précise du modèle et de l'année est
            indispensable : les systèmes diffèrent profondément entre une Clio 3 et un badge Kadjar.
          </p>
        </div>
      </section>

      {/* CORPS TEXTUEL — BLOC 2 : clé carte IVER (light) */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Clé carte Renault — le format le plus complexe du marché
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Renault a introduit la <strong style={{ color: '#111111' }}>clé carte</strong> dès 2001 sur
            la Laguna 2, puis l'a généralisée sur la Mégane 2, 3 et 4. Ce format, unique sur le marché
            européen, ressemble à une carte de crédit et se glisse dans un lecteur intégré à la
            planche de bord pour démarrer le véhicule.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            L'immobiliseur Renault — appelé{' '}
            <strong style={{ color: '#111111' }}>IVER (Immobiliseur Véhicule Renault)</strong> — est un
            système propriétaire qui nécessite obligatoirement le calcul d'un PIN Code avant toute
            programmation. Ce PIN ne peut pas être lu directement depuis le calculateur : il doit être
            calculé via un algorithme spécifique accessible uniquement avec une valise Abrites à jour.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Cas réel rencontré par Sinnes : un Renault Espace IV dont la clé carte n'était plus
            disponible chez le concessionnaire (modèle fin de vie). Sinouhé Rochereau a pu reconstituer
            la carte complète via lecture IVER et nouvelle carte vierge programmée Abrites.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Pour les <strong style={{ color: '#111111' }}>Clio 3 (2005-2012)</strong> : transpondeur
            PCF7936 — clonage direct possible via ZedFull, sans calcul IVER. C'est l'intervention la
            plus rapide et la moins coûteuse de la gamme Renault, à partir de {PRICES.cleSimple.sinnes}€.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Pour les <strong style={{ color: '#111111' }}>Clio 4, Captur et Mégane 3/4</strong> (ID46
            crypté) et pour les <strong style={{ color: '#111111' }}>badges Smart Card (Kadjar, Koleos,
            Mégane 4)</strong> : programmation Abrites obligatoire avec calcul IVER. Consultez notre{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
              tarif clé Renault
            </a>{' '}
            pour un devis adapté à votre modèle.
          </p>
        </div>
      </section>

      {/* CORPS TEXTUEL — BLOC 3 : tarifs + blockquote (dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Tarif clé Renault — à partir de {PRICES.cleSimple.sinnes}€
          </h2>
          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm font-body border-collapse">
              <thead>
                <tr style={{ background: '#1A1A1A' }}>
                  <th className="px-4 py-3 text-left" style={{ color: '#FFD700' }}>Type de clé Renault</th>
                  <th className="px-4 py-3 text-right" style={{ color: '#FFD700' }}>Sinnes</th>
                  <th className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.5)' }}>Concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé Clio 3 (PCF7936, 2005–2012)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#0D0D0D', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Clé carte Mégane / Laguna (IVER)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#111111', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.8)' }}>Badge Smart Card (Kadjar, Koleos, Mégane 4)</td>
                  <td className="px-4 py-3 text-right font-bold" style={{ color: '#FFD700' }}>à partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3 text-right" style={{ color: 'rgba(255,255,255,0.4)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>"J'avais un Renault Espace IV avec une clé carte HS. Impossible d'en trouver une chez
            Renault, le modèle étant trop ancien. Sinouhé a résolu le problème en moins de deux heures
            à mon domicile à Cannes. Service exceptionnel."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              — <strong style={{ color: '#FFFFFF' }}>Adam K.</strong>, avis Google · Octobre 2025
            </footer>
          </blockquote>

          <p className="font-body leading-relaxed mt-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Vous avez une autre marque ? Découvrez aussi notre page pour{' '}
            <a href="/refaire-cle-fiat/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>refaire une clé Fiat</a> à Nice.
          </p>
        </div>
      </section>

      {/* CTA MILIEU */}
      <section className="py-16 text-center px-4" style={{ background: '#FFD700' }}>
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" style={{ color: '#0A0A0A' }}>
            Refaites votre clé Renault maintenant
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
            Questions fréquentes — Clé Renault
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
