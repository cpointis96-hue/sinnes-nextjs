import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconShield, IconWrench } from '@/components/ui/TrustStrip'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'

export const metadata: Metadata = {
  title: seoData['prix-cle-voiture'].title,
  description: seoData['prix-cle-voiture'].description,
  alternates: { canonical: 'https://sinnes.fr/prix-cle-voiture/' },
  openGraph: {
    title: seoData['prix-cle-voiture'].title,
    url: 'https://sinnes.fr/prix-cle-voiture/',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Quel est le prix d'une clé voiture avec télécommande ?",
    answer: `À partir de ${PRICES.cleCentralisee.sinnes}€ chez Sinnes Automobiles pour une clé centralisée avec télécommande. Ce tarif inclut le décodage de la serrure, le taillage laser de la lame et la programmation du transpondeur + télécommande. Comparaison : ${PRICES.cleCentralisee.concessionnaire.min} à ${PRICES.cleCentralisee.concessionnaire.max}€ chez un concessionnaire.`,
  },
  {
    question: "Combien coûte un double de clé de voiture ?",
    answer: `À partir de ${PRICES.cleSimple.sinnes}€ pour un double de clé simple (sans télécommande). À partir de ${PRICES.cleCentralisee.sinnes}€ avec télécommande et transpondeur programmé. Devis gratuit au +33 6 75 54 04 11 — tarif ferme communiqué avant toute intervention.`,
  },
  {
    question: "Le prix comprend-il la programmation du transpondeur ?",
    answer: "Oui, tous les tarifs Sinnes sont tout compris : décodage, taille laser et programmation du transpondeur ou de la télécommande sont inclus dans le prix annoncé. Aucun frais supplémentaire ne sera facturé.",
  },
  {
    question: "Y a-t-il des tarifs différents selon la marque de voiture ?",
    answer: "Le tarif dépend principalement du type de clé (simple, centralisée, mains libres) plutôt que de la marque. Certains modèles très récents ou haut de gamme peuvent nécessiter un tarif personnalisé — devis gratuit au +33 6 75 54 04 11.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://sinnes.fr/prix-cle-voiture/#article",
      "headline": "Prix clé voiture — Facteurs et fourchettes",
      "description": "Les facteurs qui influencent le prix d'une clé voiture : type de clé, marque, âge du véhicule, type de transpondeur.",
      "datePublished": "2025-01-20T08:00:00+01:00",
      "dateModified": "2026-03-20T08:00:00+01:00",
      "author": { "@id": "https://sinnes.fr/#ines" },
      "publisher": { "@id": "https://sinnes.fr/#organization" },
      "about": {
        "@type": "Service",
        "@id": "https://sinnes.fr/#service-cle",
        "name": "Reproduction de clé de voiture",
        "priceRange": `${PRICES.cleSimple.sinnes}€–${PRICES.perteTotale.sinnes}€`,
        "provider": { "@id": "https://sinnes.fr/#organization" }
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://sinnes.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Prix clé voiture", "item": "https://sinnes.fr/prix-cle-voiture/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": FAQ_ITEMS.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    },
    {
      "@type": "Person",
      "@id": "https://sinnes.fr/#ines",
      "name": TEAM.ines.name,
      "jobTitle": TEAM.ines.jobTitle,
      "knowsAbout": TEAM.ines.knowsAbout,
      "description": TEAM.ines.description,
      "worksFor": { "@id": "https://sinnes.fr/#organization" }
    }
  ]
}

const steps = [
  { num: 1, title: 'Identifiez', desc: 'Type de clé : simple, centralisée, mains libres ou perte totale ?' },
  { num: 2, title: 'Comparez', desc: "Prix Sinnes vs concessionnaire : jusqu'à 80% d'économie" },
  { num: 3, title: 'Demandez', desc: 'Devis gratuit par téléphone : tarif ferme en 2 minutes' },
  { num: 4, title: 'Économisez', desc: 'Même qualité, même garantie — sans le prix constructeur' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro className="w-8 h-8" />, label: `${PRICES.cleSimple.sinnes} €`, sublabel: 'À partir de', href: '/tarif-cle-voiture/' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Devis gratuit', sublabel: 'Tarif ferme en 2 minutes' },
  { icon: <IconEuro className="w-8 h-8" />, label: "Jusqu'à 80% moins cher", sublabel: 'vs concessionnaire', href: '/prix-cle-vs-concessionnaire/' },
  { icon: <IconWrench className="w-8 h-8" />, label: 'Prix tout compris', sublabel: 'Décodage + taille + programmation' },
]

const review = getReviewForPage('/prix-cle-voiture/')

export default function PrixCleVoiturePage() {
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
            <li aria-current="page" className="text-text">Prix clé voiture</li>
          </ol>
        </div>
      </nav>

      {/* SECTION 2 — HERO */}
      <section style={{ background: '#0A0A0A' }} className="py-16 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">58 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-voiture'].h1} :<br />Comparatif par type de clé
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Chez Sinnes Automobiles, le prix d'une clé voiture démarre à {PRICES.cleSimple.sinnes}€ pour une clé
            simple sans télécommande. Clé centralisée : à partir de {PRICES.cleCentralisee.sinnes}€. Clé mains libres :
            à partir de {PRICES.cleMainsLibres.sinnes}€. Perte totale : à partir de {PRICES.perteTotale.sinnes}€.
            Tous prix tout compris : décodage, taille et programmation inclus.
            Inès Barthelemy vous donne votre tarif en 2 minutes : {NAP.phoneDisplay}.
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
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-prix-cle-voiture" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* SECTION 3 — PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            {seoData['prix-cle-voiture'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="light" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Prix clé de voiture" serviceUrl="/prix-cle-voiture/" />}


      {/* H2 BLOC 1 — dark (informative) */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Chez Sinnes Automobiles, le prix d'une clé voiture se situe entre {PRICES.cleSimple.sinnes}€ et {PRICES.perteTotale.sinnes}€ selon le type
            de clé et votre situation. Pour le détail ligne par ligne, consultez{' '}
            <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>notre grille de tarifs détaillée</a>.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-voiture'].h2[1]}
          </h2>
          <ul className="list-none space-y-4 mb-8 pl-2" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <li className="font-body">
              <strong style={{ color: '#FFFFFF' }}>Type de clé</strong> : une clé simple sans télécommande ({PRICES.cleSimple.sinnes}€)
              coûte nettement moins cher qu'un badge mains libres ({PRICES.cleMainsLibres.sinnes}€). La complexité
              électronique et le nombre d'opérations font la différence.
            </li>
            <li className="font-body">
              <strong style={{ color: '#FFFFFF' }}>Marque du véhicule</strong> : certaines architectures propriétaires
              (Renault IVER, Toyota G-chip, Mercedes HiTag AES) nécessitent des outils et licences spécifiques
              qui influencent le tarif final.
            </li>
            <li className="font-body">
              <strong style={{ color: '#FFFFFF' }}>Âge du véhicule</strong> : les modèles antérieurs à 1995 n'ont pas
              de transpondeur : la clé est purement mécanique, donc moins coûteuse. Les véhicules récents
              (après 2015) ont des systèmes de plus en plus sécurisés.
            </li>
            <li className="font-body">
              <strong style={{ color: '#FFFFFF' }}>Type de transpondeur</strong> : les transpondeurs fixes (T5, ID60) sont
              clonables rapidement. Les transpondeurs cryptés (ID46, ID48, HITAG) nécessitent une
              programmation OBD via valise, plus longue à réaliser.
            </li>
          </ul>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            {seoData['prix-cle-voiture'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Le double de clé voiture est la prestation la plus courante, et la plus accessible.
            Pour une clé simple (sans télécommande), le prix démarre à {PRICES.cleSimple.sinnes}€.
            Pour une clé centralisée avec télécommande, à partir de {PRICES.cleCentralisee.sinnes}€.
            Ces tarifs incluent la taille laser de la lame et la programmation complète du
            transpondeur. Tout compris, pas de frais cachés.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Si vous avez perdu toutes vos clés sans conserver de double, la situation est différente :
            le tarif monte jusqu'à {PRICES.perteTotale.sinnes}€, car elle inclut le crochetage et la reprogrammation
            complète du calculateur. En savoir plus sur{' '}
            <a href="/cle-voiture-perdue/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>refaire une clé en cas de perte totale</a>.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Pour tout savoir sur le processus, consultez notre page{' '}
            <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>faire un double de clé voiture</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-voiture'].h2[3]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Chez Sinnes Automobiles, le prix affiché est le prix final. Voici ce que comprend
            chaque tarif :
          </p>
          <ul className="list-none space-y-2 mb-4 pl-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <li className="font-body">· <strong style={{ color: '#FFFFFF' }}>Décodage de la serrure</strong> : lecture mécanique ou par valise de la lame existante</li>
            <li className="font-body">· <strong style={{ color: '#FFFFFF' }}>Taille laser</strong> : gravure de précision de la nouvelle lame sur machine professionnelle</li>
            <li className="font-body">· <strong style={{ color: '#FFFFFF' }}>Programmation transpondeur</strong> : enregistrement du code dans le calculateur du véhicule</li>
            <li className="font-body">· <strong style={{ color: '#FFFFFF' }}>Programmation télécommande</strong> (pour les clés centralisées et mains libres)</li>
            <li className="font-body">· <strong style={{ color: '#FFFFFF' }}>Test de fonctionnement</strong> : vérification démarrage + centralisation avant départ</li>
          </ul>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Aucun frais de déplacement sur Nice. Frais kilométriques éventuels communiqués
            gratuitement lors du devis téléphonique. Pour les communes éloignées, consultez
            nos tarifs lors de l'appel.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
      <section className="bg-[#F0F3F7] py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            {seoData['prix-cle-voiture'].h2[4]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            La différence de prix entre Sinnes et un concessionnaire s'explique par la structure
            de coût : un concessionnaire facture ses frais de concession, la marge constructeur
            sur les pièces, et un taux horaire atelier élevé. Sinnes Automobiles est un prestataire
            indépendant, sans structure lourde, qui intervient directement, d'où une économie
            de 50% à 80% pour un résultat strictement identique.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Pour le comparatif détaillé, consultez notre page{' '}
            <a href="/prix-cle-vs-concessionnaire/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>notre comparatif tarif vs concessionnaire</a>.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Pour voir l'ensemble de{' '}
            <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>nos prestations de reproduction de clé</a>,
            de la clé simple au badge mains libres, consultez notre page dédiée.
          </p>        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#EFAD42]/20 text-center">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
            {seoData['prix-cle-voiture'].h2[5]}
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
          <p className="text-xs mt-3" style={{ color: 'rgba(255,255,255,0.4)' }}>7j/7 · Sans frais cachés · Devis gratuit</p>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}

      <section style={{ background: '#F0F3F7' }} className="py-16 px-4">

        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text">
            {seoData['prix-cle-voiture'].h2[6]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a href={`tel:${NAP.phoneTel}`} className="btn-accent text-lg px-10 py-4 min-h-[56px]">
          Appelez maintenant : {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Intervention rapide</p>
      </div>

    </>
  )
}
