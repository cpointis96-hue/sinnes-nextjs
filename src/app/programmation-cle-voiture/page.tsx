import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconWrench, IconShield, IconCalendar } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'Programmation de clé voiture Nice — Transpondeur et badge',
  description: 'Programmation clé voiture à Nice : transpondeur, télécommande, badge mains libres. Sinouhé Rochereau, formateur Incarline. Devis gratuit — +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/programmation-cle-voiture/' },
  openGraph: {
    title: 'Programmation clé voiture Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/programmation-cle-voiture/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/programmation-cle-voiture/#service",
      "name": "Programmation de clé de voiture — Nice",
      "provider": { "@id": "https://sinnes.fr/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Antibes" },
        { "@type": "City", "name": "Cagnes-sur-Mer" },
        { "@type": "City", "name": "Cannes" }
      ]
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://sinnes.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Programmation clé voiture", "item": "https://sinnes.fr/programmation-cle-voiture/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Comment programmer une clé de voiture ?",
          "acceptedAnswer": { "@type": "Answer", "text": "La programmation nécessite une valise de diagnostic (Abrites ou ZedFull) branchée sur la prise OBD du véhicule. Le logiciel calcule les codes PIN constructeur, puis injecte les codes de la nouvelle clé dans le calculateur de bord. Le transpondeur est ensuite reconnu par l'immobiliseur. Intervention réalisée par Sinouhé Rochereau, formateur Incarline." }
        },
        {
          "@type": "Question",
          "name": "Peut-on reprogrammer une clé voiture perdue pour la désactiver ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. En cas de perte d'une clé, Sinouhé Rochereau peut reprogrammer l'immobiliseur pour effacer les codes de la clé perdue et réenregistrer uniquement les clés restantes. Cela sécurise votre véhicule contre une utilisation non autorisée." }
        },
        {
          "@type": "Question",
          "name": "La programmation de clé voiture à domicile est-elle possible ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sinnes Automobiles dispose d'équipements portables Abrites et ZedFull pour intervenir directement à votre domicile, sur votre lieu de travail ou sur un parking. Intervention à Nice, Antibes, Cagnes-sur-Mer et Cannes." }
        },
        {
          "@type": "Question",
          "name": "Combien coûte la programmation d'une clé de voiture ?",
          "acceptedAnswer": { "@type": "Answer", "text": `La programmation est incluse dans le tarif de reproduction : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée avec télécommande, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres. Devis gratuit au +33 6 75 54 04 11.` }
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://sinnes.fr/#sinouhe",
      "name": "Sinouhé Rochereau",
      "jobTitle": "Expert en programmation de clés automobiles",
      "description": "Formateur international chez Incarline. Commissaire au Grand Prix de Monaco depuis 2016.",
      "worksFor": { "@id": "https://sinnes.fr/#organization" }
    }
  ]
}

const steps = [
  { num: 1, title: 'Identification', desc: 'Lecture du transpondeur existant — ID46, ID48, HITAG, PCF7936' },
  { num: 2, title: 'Connexion', desc: 'Branchement valise Abrites ou ZedFull sur la prise OBD du véhicule' },
  { num: 3, title: 'Programmation', desc: 'Calcul des codes PIN et injection des clés dans le calculateur' },
  { num: 4, title: 'Test complet', desc: 'Vérification démarrage + télécommande + immobiliseur — garanti' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconWrench className="w-8 h-8" />, label: 'Abrites · ZedFull', sublabel: 'Équipements certifiés' },
  { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Atelier ou à domicile', href: '/depannage-cle-domicile/' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Toutes marques', sublabel: 'VAG, PSA, BMW, Mercedes…' },
  { icon: <IconEuro className="w-8 h-8" />, label: 'Devis gratuit', sublabel: 'Tarif ferme avant intervention', href: '/tarif-cle-voiture/' },
]

export default function ProgrammationCleVoiturePage() {
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
            <li aria-current="page" className="text-text">Programmation clé voiture</li>
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
            Programmation de clé voiture —<br />Transpondeur, télécommande et badge
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles programme et reprogramme tous les types de clés automobiles à Nice :
            transpondeur RFID, clé à code, télécommande centralisée, badge mains libres.
            Sinouhé Rochereau est formateur international certifié chez Incarline — il utilise
            les équipements Abrites et ZedFull, les mêmes que les concessionnaires officiels.
            Programmation à domicile ou à l'atelier Nice. Devis gratuit : {NAP.phoneDisplay}.
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
            Formateur international en programmation de clés automobiles chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* SECTION 3 — PROCESS STEPS */}
      <section style={{ background: '#FFFFFF' }} className="py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            Le processus de programmation
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* SECTION 5 — CORPS TEXTUEL */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            Programmation de clé voiture : qu'est-ce que c'est exactement ?
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Une clé de voiture moderne a deux composantes distinctes : la lame mécanique (qui actionne
            la serrure physiquement) et le transpondeur électronique (qui autorise le démarrage).
            La taille de la lame relève de la mécanique pure — c'est ce que fait une machine à
            graver. La programmation, elle, consiste à enregistrer le code unique du transpondeur
            dans le calculateur immobiliseur du véhicule.
          </p>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Sans une programmation correcte, votre moteur démarrera peut-être une seconde, puis
            s'arrêtera immédiatement — c'est l'immobiliseur qui coupe l'alimentation. C'est pour
            ça qu'une copie de clé chez un cordonnier ordinaire ne suffit plus pour les véhicules
            modernes : la lame est copiée, mais le transpondeur n'est pas programmé.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Pour tout comprendre sur la technologie des puces de clé, consultez notre page dédiée
            à la <a href="/cle-voiture-transpondeur/" className="text-primary font-semibold hover:underline">clé à transpondeur</a>.
            Pour la reproduction complète incluant taille + programmation, voir <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">reproduction de clé</a>.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            Reprogrammation clé voiture — les 3 cas de figure
          </h2>

          <h3 className="font-heading font-bold text-xl mb-3 text-text-main">
            Ajout d'une nouvelle clé (vous avez encore l'originale)
          </h3>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            C'est le cas le plus simple. Vous possédez encore votre clé d'origine et souhaitez
            en avoir une deuxième. Sinouhé branche la valise sur la prise OBD, lit les codes
            déjà enregistrés, et injecte le code de la nouvelle clé dans la liste des clés autorisées.
            La clé existante continue de fonctionner normalement. Durée : 30 à 45 minutes.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3 text-text-main">
            Remplacement complet (clé perdue, immobiliseur réinitialisé)
          </h3>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Si vous avez perdu toutes vos clés, l'immobiliseur doit être réinitialisé et les
            nouvelles clés programmées ex nihilo. Cette opération est plus complexe — elle nécessite
            le calcul des codes PIN constructeur via Abrites. Sinouhé efface toutes les clés
            précédentes de la mémoire du calculateur et enregistre uniquement les nouvelles.
            Ce processus est particulièrement important pour la sécurité de votre véhicule.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3 text-text-main">
            Télécommande seule (lame OK, plip défaillant)
          </h3>
          <p className="font-body leading-relaxed mb-6 text-text-muted">
            La télécommande (plip) ne répond plus : la centralisation ne s'ouvre plus à distance.
            La lame fonctionne toujours mécaniquement, mais le confort de la centralisation est
            perdu. Sinouhé peut reprogrammer une nouvelle télécommande sans toucher à la clé
            existante — opération rapide (15 à 20 minutes sur la plupart des marques).
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            Nos équipements professionnels — Abrites et ZedFull
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Abrites et ZedFull sont les deux références mondiales en matière de valises de
            programmation automobile professionnelles. Ce sont les mêmes outils qu'utilisent
            les concessionnaires agréés et les garages spécialisés. Ils supportent les transpondeurs
            ID46, ID48, HITAG2, HITAG Pro, PCF7936, DST80 — la quasi totalité des systèmes
            immobiliseurs présents sur le marché depuis 1995.
          </p>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Sinouhé Rochereau est formateur certifié Incarline, ce qui signifie qu'il maîtrise
            non seulement l'utilisation de ces outils, mais qu'il forme lui-même d'autres
            professionnels à leur utilisation. Vous bénéficiez ainsi d'une expertise de
            niveau formateur — bien au-delà de ce que propose un technicien lambda.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Cette maîtrise technique se traduit directement : sa vitesse d'intervention est
            supérieure à la moyenne, le taux de succès sur les premiers essais est de quasi
            100%, et les délais sont respectés. Voir aussi notre service de <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">reproduction de clé</a>.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            Programmation clé voiture à domicile — Nice et Côte d'Azur
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            La programmation à domicile est l'une des grandes forces de Sinnes Automobiles.
            Sinouhé se déplace avec son matériel complet — valise Abrites portable, machine à
            taille laser portative, stock de lames et transpondeurs vierges toutes marques.
            L'intégralité de l'intervention se passe chez vous, sans remorquage du véhicule.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Zone couverte : Nice (sans frais de déplacement), Antibes, Sophia Antipolis, Cagnes-sur-Mer,
            Cannes, Saint-Laurent-du-Var, Villefranche, Menton. Pour les détails de la zone et
            les conditions, voir notre page <a href="/depannage-cle-domicile/" className="text-primary font-semibold hover:underline">programmation à domicile</a>.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            Programmation par marque — Audi, Mercedes, Renault...
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Chaque constructeur a son protocole de programmation. Sinouhé Rochereau maîtrise
            les systèmes de toutes les grandes marques :
          </p>
          <ul className="list-none space-y-2 mb-4 pl-4 text-text-muted">
            <li className="font-body">— <strong className="text-text-main">Groupe VAG (VW, Audi, Seat, Skoda)</strong> : HITAG2, HITAG Pro, calcul PIN Abrites</li>
            <li className="font-body">— <strong className="text-text-main">Mercedes</strong> : infra rouge, EIS, systèmes KESSY mains libres</li>
            <li className="font-body">— <strong className="text-text-main">BMW / Mini</strong> : CAS2, CAS3, CAS4, EWS3, clés mains libres ID46</li>
            <li className="font-body">— <strong className="text-text-main">Renault / Dacia</strong> : carte Renault ID46/Megane, UCH</li>
            <li className="font-body">— <strong className="text-text-main">PSA (Peugeot/Citroën)</strong> : BSI, calculateur BSM, plips T15</li>
            <li className="font-body">— <strong className="text-text-main">Toyota / Lexus</strong> : systèmes RFID 4D, 4F, DST80</li>
          </ul>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Pour les clés Audi spécifiquement, consultez notre page <a href="/refaire-cle-audi/" className="text-primary font-semibold hover:underline">programmation clé Audi</a>.
            Pour Mercedes, voir <a href="/refaire-cle-mercedes/" className="text-primary font-semibold hover:underline">programmation clé Mercedes</a>.
          </p>

          <blockquote className="border-l-4 border-accent pl-6 italic text-text-muted my-8 bg-bg-shade py-4 pr-4 rounded-r-lg">
            <p className="mb-2">"Rapide, sérieux et efficace !"</p>
            <footer className="text-sm not-italic">
              — <strong>Dylan D.</strong>, avis Google · Février 2026
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#FFD700]/20 text-center">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
            Programmer votre clé voiture à Nice
          </h2>
          <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            7j/7 · Devis gratuit · Atelier et domicile · Toutes marques
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
            Questions fréquentes — Programmation de clé
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
