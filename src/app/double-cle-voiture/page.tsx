import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'Double de clé voiture à Nice — Devis gratuit',
  description: 'Faire un double de clé voiture à Nice : intervention rapide, toutes marques. À partir de 78€. Sinouhé Rochereau, expert automobile. +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/double-cle-voiture/' },
  openGraph: {
    title: 'Double de clé voiture Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/double-cle-voiture/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/double-cle-voiture/#service",
      "name": "Double et reproduction de clé de voiture",
      "provider": { "@id": "https://sinnes.fr/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Antibes" },
        { "@type": "City", "name": "Cagnes-sur-Mer" },
        { "@type": "City", "name": "Cannes" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tarifs double clé automobile",
        "itemListElement": [
          { "@type": "Offer", "name": "Double clé simple", "price": `${PRICES.cleSimple.sinnes}`, "priceCurrency": "EUR" },
          { "@type": "Offer", "name": "Double clé centralisée", "price": `${PRICES.cleCentralisee.sinnes}`, "priceCurrency": "EUR" }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://sinnes.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Double de clé voiture", "item": "https://sinnes.fr/double-cle-voiture/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Peut-on faire un double de clé voiture sans l'originale ?",
          "acceptedAnswer": { "@type": "Answer", "text": `Oui, via décodage mécanique de la serrure. Sinouhé Rochereau utilise une valise de diagnostic pour lire le code de la serrure sans clé originale, puis grave la lame par laser. Tarif à partir de ${PRICES.perteTotale.sinnes}€ (perte totale).` }
        },
        {
          "@type": "Question",
          "name": "Combien coûte un double de clé de voiture ?",
          "acceptedAnswer": { "@type": "Answer", "text": `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple sans télécommande. Clé centralisée avec télécommande : à partir de ${PRICES.cleCentralisee.sinnes}€. Clé mains libres / badge : à partir de ${PRICES.cleMainsLibres.sinnes}€. Devis gratuit au +33 6 75 54 04 11.` }
        },
        {
          "@type": "Question",
          "name": "Combien de temps pour faire un double de clé ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Avec la clé originale : 30 à 45 minutes. Programmation d'un transpondeur incluse dans ce délai pour les clés avec puce. Sinouhé intervient à domicile ou à l'atelier à Nice." }
        },
        {
          "@type": "Question",
          "name": "Le double de clé fonctionne-t-il exactement comme l'originale ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. La lame est gravée à l'identique par machine laser et le transpondeur est cloné ou programmé avec les mêmes codes que l'originale. Votre véhicule ne fait aucune différence entre les deux clés." }
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://sinnes.fr/#sinouhe",
      "name": "Sinouhé Rochereau",
      "jobTitle": "Expert en programmation de clés automobiles",
      "worksFor": { "@id": "https://sinnes.fr/#organization" }
    }
  ]
}

const steps = [
  { num: 1, title: 'Votre clé', desc: 'Apportez votre clé originale (ou nous décodons sans elle)' },
  { num: 2, title: 'Décodage', desc: 'Lecture de la lame et identification du transpondeur' },
  { num: 3, title: 'Taille laser', desc: 'Gravure de précision de la nouvelle lame' },
  { num: 4, title: 'Votre double', desc: 'Clé opérationnelle, programmée et garantie' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro className="w-8 h-8" />, label: `${PRICES.cleSimple.sinnes} €`, sublabel: 'À partir de', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Atelier et domicile' },
  { icon: <IconWrench className="w-8 h-8" />, label: 'Toutes marques', sublabel: 'Renault, Toyota, Audi, BMW…' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Garantie préservée', sublabel: 'Abrites · ZedFull' },
]

export default function DoubleCleVoiturePage() {
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
            <li aria-current="page" className="text-text">Double de clé voiture</li>
          </ol>
        </div>
      </nav>

      {/* SECTION 2 — HERO */}
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="text-[#FFD700] text-lg">★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">57 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            Double de clé voiture —<br />Faire un double en toute sécurité
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles réalise votre double de clé voiture à Nice et sur toute la Côte d'Azur.
            Double préventif avant une perte, remplacement d'une clé abîmée ou copie supplémentaire :
            Sinouhé Rochereau intervient directement à votre domicile ou à l'atelier.
            À partir de {PRICES.cleSimple.sinnes}€ pour un double de clé simple, {PRICES.cleCentralisee.sinnes}€ pour une clé avec télécommande.
            Devis gratuit au {NAP.phoneDisplay}.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 bg-accent text-text-inverse font-body font-bold
                       text-xl px-8 py-4 rounded-lg min-h-[56px] hover:bg-accent-dark transition-colors mb-8"
          >
            Devis gratuit — {NAP.phoneDisplay}
          </a>

          <p className="text-sm border-l-4 border-[#FFD700] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Expertise assurée par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> —
            Expert en programmation de clés automobiles, formateur international chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* SECTION 3 — PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            4 étapes pour votre double de clé
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="light" items={TRUST_ITEMS} />

      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Pourquoi faire un double de clé voiture maintenant ?
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            La plupart des propriétaires de voitures ne pensent à faire un double de clé qu'au moment
            où il est trop tard — après la perte. Or, les statistiques sont éloquentes : un véhicule
            immobilisé par perte totale de clé coûte en moyenne 240€ de réparation, contre 78€ pour
            un double préventif réalisé en amont. Le bon réflexe, c'est d'agir avant l'urgence.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Trois cas de figure justifient de faire un double de clé : le double préventif (vous n'avez
            qu'une seule clé et souhaitez en avoir une de secours), le remplacement d'une clé usée ou
            endommagée, et la reconstitution après perte totale. Pour ce dernier cas — sans aucune
            clé existante — Sinouhé procède par décodage de serrure. Si vous vous trouvez déjà
            dans cette situation, consultez directement notre page <a href="/cle-voiture-perdue/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>en cas de perte totale de vos clés</a>.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Faire un double de clé voiture dès aujourd'hui, c'est aussi s'assurer que votre partenaire,
            un membre de votre famille ou un gardien de confiance puisse accéder au véhicule en cas
            de besoin — sans dépendre d'une seule clé.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Faire un double de clé voiture : comment ça marche ?
          </h2>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111111' }}>
            Avec la clé originale — copie par décodage
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Le cas le plus simple et le plus rapide. Sinouhé décode la lame de votre clé originale
            par lecture optique ou mécanique, puis grave une lame identique à la machine laser.
            Si votre clé a un transpondeur, il est cloné (pour les transpondeurs fixes) ou programmé
            via valise OBD (pour les transpondeurs cryptés ID46, ID48, HITAG). Délai : 30 à 45 minutes,
            à l'atelier ou à domicile.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111111' }}>
            Sans la clé originale — décodage direct de la serrure
          </h3>
          <p className="font-body leading-relaxed mb-6" style={{ color: '#374151' }}>
            Si vous n'avez plus de clé du tout, Sinouhé procède au décodage mécanique de la serrure
            de porte ou de contact pour en extraire le code de coupe. C'est la même technique que
            pour les cas de perte totale. Pour tout ce qui concerne ce process,
            voir <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>reproduction de clé de voiture</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark (table dark) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Prix d'un double de clé voiture
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full font-body text-sm border-collapse">
              <thead>
                <tr style={{ background: '#FFD700' }}>
                  <th className="text-left px-4 py-3 font-bold text-[#0A0A0A]">Type de clé</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0A0A0A]">Prix Sinnes</th>
                  <th className="text-left px-4 py-3 font-bold text-[#0A0A0A]">Prix concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: '#1A1A1A' }}>
                  <td className="px-4 py-3" style={{ color: '#FFFFFF' }}>Clé simple (sans télécommande)</td>
                  <td className="px-4 py-3 font-bold" style={{ color: '#FFD700' }}>À partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.cleSimple.concessionnaire.min}–{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#222222' }}>
                  <td className="px-4 py-3" style={{ color: '#FFFFFF' }}>Clé centralisée (télécommande)</td>
                  <td className="px-4 py-3 font-bold" style={{ color: '#FFD700' }}>À partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.cleCentralisee.concessionnaire.min}–{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#1A1A1A' }}>
                  <td className="px-4 py-3" style={{ color: '#FFFFFF' }}>Clé mains libres / badge</td>
                  <td className="px-4 py-3 font-bold" style={{ color: '#FFD700' }}>À partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.cleMainsLibres.concessionnaire.min}–{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
                <tr style={{ background: '#222222' }}>
                  <td className="px-4 py-3" style={{ color: '#FFFFFF' }}>Perte totale (sans double)</td>
                  <td className="px-4 py-3 font-bold" style={{ color: '#FFD700' }}>À partir de {PRICES.perteTotale.sinnes}€</td>
                  <td className="px-4 py-3" style={{ color: 'rgba(255,255,255,0.5)' }}>{PRICES.perteTotale.concessionnaire.min}–{PRICES.perteTotale.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="font-body text-xs mb-8" style={{ color: 'rgba(255,255,255,0.4)' }}>
            * Tarifs indicatifs — devis personnalisé gratuit selon marque et modèle au <a href={`tel:${NAP.phoneTel}`} style={{ color: '#FFD700' }}>{NAP.phoneDisplay}</a>.
            Consultez notre page <a href="/prix-cle-voiture/" className="hover:underline font-semibold" style={{ color: '#FFD700' }}>prix d'un double de clé</a> pour le détail complet.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Double de clé Toyota, Hyundai — spécificités par marque
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Chaque constructeur a ses propres systèmes de transpondeur et de centralisation. Toyota
            utilise des systèmes RFID spécifiques (notamment sur les hybrides Yaris et Auris) qui
            nécessitent une programmation OBD. Hyundai et Kia partagent souvent la même architecture
            électronique — pour les doubles de clé sur ces marques, consultez notre page
            dédiée à <a href="/refaire-cle-toyota/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>double de clé Toyota</a> ou <a href="/refaire-cle-hyundai/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>refaire une clé Hyundai</a>.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Pour les véhicules du groupe VAG (Volkswagen, Audi, Seat, Skoda), les systèmes HITAG2
            et HITAG Pro nécessitent un calcul de PIN via valise Abrites. BMW et Mercedes utilisent
            leurs propres protocoles (DST80, PCF7937). Dans tous ces cas, Sinouhé Rochereau
            dispose des licences et équipements nécessaires.
          </p>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: '#374151' }}>
            <p>"Merci beaucoup à Sinouhé et Inès — en 5 minutes il a réussi à rencoder une clé
            à Menton, ils nous ont sauvé la vie ! Entreprise très sérieuse."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: '#6B7280' }}>
              — <strong style={{ color: '#111111' }}>Denis Ribes</strong>, avis Google · Décembre 2025
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#FFD700]/20 text-center">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
            Faire un double de clé voiture à Nice
          </h2>
          <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            7j/7 · Devis gratuit · Toutes marques · Atelier et domicile
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block bg-[#FFD700] text-[#0A0A0A] font-body font-bold text-xl
                       px-10 py-4 rounded-lg min-h-[56px] hover:bg-yellow-400 transition-colors"
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section style={{ background: '#F9FAFB' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text">
            Questions fréquentes — Double de clé voiture
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a href={`tel:${NAP.phoneTel}`} className="btn-accent text-lg px-10 py-4 min-h-[56px]">
          Appelez maintenant — {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Intervention rapide</p>
      </div>

      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="flex items-center justify-center w-full bg-[#e53935] text-white
                     font-body font-bold text-lg py-4 min-h-[56px]"
        >
          URGENCE — {NAP.phoneDisplay}
        </a>
      </div>
    </>
  )
}
