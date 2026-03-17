import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconWrench, IconShield, IconClock } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'Clé de voiture perdue sans double — Solution Nice',
  description: "Clé de voiture perdue sans double à Nice ? Sinnes intervient en urgence : crochetage, décodage, nouvelle clé programmée. Devis gratuit — +33 6 75 54 04 11",
  alternates: { canonical: 'https://sinnes.fr/cle-voiture-perdue/' },
  openGraph: {
    title: 'Clé de voiture perdue sans double — Sinnes Nice',
    url: 'https://sinnes.fr/cle-voiture-perdue/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/cle-voiture-perdue/#service",
      "name": "Clé de voiture perdue sans double — Nice",
      "provider": { "@id": "https://sinnes.fr/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Antibes" },
        { "@type": "City", "name": "Cagnes-sur-Mer" },
        { "@type": "City", "name": "Cannes" }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Tarifs clé perdue",
        "itemListElement": [
          { "@type": "Offer", "name": "Perte totale (aucun double)", "price": `${PRICES.perteTotale.sinnes}`, "priceCurrency": "EUR",
            "description": "Crochetage sans effraction + décodage serrure + taillage laser + programmation" }
        ]
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://sinnes.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Clé voiture perdue", "item": "https://sinnes.fr/cle-voiture-perdue/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Que faire si on a perdu ses clés de voiture sans double ?",
          "acceptedAnswer": { "@type": "Answer", "text": `Appelez Sinnes Automobiles au +33 6 75 54 04 11. Sinouhé Rochereau intervient directement sur votre véhicule : crochetage sans effraction, décodage de la serrure, gravure de la nouvelle lame et programmation du transpondeur. Intervention à Nice et toute la Côte d'Azur.` }
        },
        {
          "@type": "Question",
          "name": "Combien coûte la création d'une clé voiture perdue sans double ?",
          "acceptedAnswer": { "@type": "Answer", "text": `À partir de ${PRICES.perteTotale.sinnes}€ pour une perte totale (aucun double existant). Ce tarif comprend le crochetage sans effraction, le décodage de la serrure, le taillage laser de la lame et la programmation complète du transpondeur et de la télécommande. Devis gratuit au +33 6 75 54 04 11.` }
        },
        {
          "@type": "Question",
          "name": "Peut-on vraiment ouvrir une voiture sans abîmer la serrure ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, dans la grande majorité des cas. Sinouhé Rochereau utilise des outils de crochetage professionnel certifiés. La serrure et la carrosserie sont intégralement préservées. Cette technique est différente du crochetage d'urgence des pompiers ou des amateurs." }
        },
        {
          "@type": "Question",
          "name": "Combien de temps pour créer une clé perdue sans double ?",
          "acceptedAnswer": { "@type": "Answer", "text": "En général 1h30 à 2h : 15-20 min de crochetage, 20-30 min de décodage, 30-45 min de taillage et programmation. Sinouhé intervient directement sur place — pas besoin de remorquer le véhicule." }
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
  { num: 1, title: 'Appelez', desc: "Diagnostic par téléphone — confirmation du type d'intervention" },
  { num: 2, title: 'Crochetage', desc: 'Ouverture sans effraction — serrure et carrosserie préservées' },
  { num: 3, title: 'Décodage', desc: 'Lecture mécanique de la serrure pour reconstituer le code clé' },
  { num: 4, title: 'Nouvelle clé', desc: 'Taille laser + programmation transpondeur — repartez avec votre clé' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconClock className="w-8 h-8" />, label: 'Intervention urgence', sublabel: 'Réponse immédiate 7j/7', href: '/urgence-cle-voiture/' },
  { icon: <IconWrench className="w-8 h-8" />, label: 'Sans double possible', sublabel: 'Décodage serrure · Gravure laser' },
  { icon: <IconEuro className="w-8 h-8" />, label: `${PRICES.perteTotale.sinnes} €`, sublabel: 'À partir de', href: '/tarif-cle-voiture/' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Zéro effraction', sublabel: 'Crochetage professionnel' },
]

export default function CleVoiturePerdуePage() {
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
            <li aria-current="page" className="text-text">Clé de voiture perdue</li>
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
            Clé de voiture perdue sans double —<br />Solution d'urgence à Nice
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez perdu vos clés de voiture et vous n'avez aucun double ? Sinnes Automobiles
            a la solution : Sinouhé Rochereau procède au crochetage sans effraction, décode la serrure
            mécaniquement et recrée votre clé complète — lame taillée laser + transpondeur programmé.
            Intervention à Nice, Antibes, Cagnes, Cannes. À partir de {PRICES.perteTotale.sinnes}€, devis gratuit,
            appelez le {NAP.phoneDisplay}.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 bg-[#e53935] text-white font-body font-bold
                       text-xl px-8 py-4 rounded-lg min-h-[56px] animate-pulse
                       hover:bg-[#c62828] transition-colors mb-8"
          >
            URGENCE — {NAP.phoneDisplay}
          </a>

          <p className="text-sm border-l-4 border-[#FFD700] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> —
            Expert automobile, formateur international Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* SECTION 3 — PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            4 étapes pour récupérer votre clé
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
            J'ai perdu mes clés de voiture sans double — que faire ?
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pas de panique. La situation est stressante, mais elle a une solution rapide et peu onéreuse.
            La première étape est d'appeler Sinnes Automobiles au {NAP.phoneDisplay} : en deux minutes,
            Sinouhé Rochereau vous confirme qu'il peut intervenir et vous donne un délai précis.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Le processus complet pour <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>refaire sa clé de voiture</a> sans double existant
            se déroule en 4 étapes : appel diagnostic → crochetage sans effraction → décodage mécanique
            de la serrure → taillage laser + programmation transpondeur. L'intervention dure en général
            1h30 à 2h, réalisée sur place sans remorquage du véhicule.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Ne tentez pas d'ouvrir vous-même le véhicule avec des outils inadaptés : vous risquez
            d'endommager la serrure ou la carrosserie, ce qui alourdirait considérablement la facture.
            Le crochetage professionnel de Sinouhé est non-invasif et préserve intégralement la serrure.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Crochetage professionnel : ouvrir votre voiture sans casse
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Le crochetage automobile professionnel est une technique radicalement différente de ce que
            pratiquent les serruriers de maison ou les dépanneurs d'urgence non spécialisés. Sinouhé
            Rochereau utilise des outils certifiés adaptés aux serrures automobiles modernes —
            crochets de sécurité, lames de déverrouillage — qui permettent d'actionner le mécanisme
            de la serrure sans forcer.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Résultat : la serrure de porte est intégralement préservée, les joints de portière ne sont
            pas endommagés, et la carrosserie reste impeccable. Vous ne verrez aucune marque d'intervention.
            C'est d'ailleurs ce qui distingue un vrai <a href="/urgence-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>serrurier automobile d'intervention en urgence</a> d'un
            bricoleur improvisé.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Une fois le véhicule ouvert, Sinouhé peut immédiatement passer à l'étape suivante :
            le décodage de la serrure pour reconstituer votre clé.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Reconstituer une clé perdue : le processus complet
          </h2>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#FFFFFF' }}>
            Décodage mécanique de la serrure
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Une fois le véhicule ouvert, Sinouhé introduit un outil de décodage dans la serrure
            de porte ou le contacteur. Cet outil lit les positions des goupilles à l'intérieur
            du barillet et retranscrit le code de coupe de la lame — le même que sur votre clé
            d'origine. Ce code est ensuite programmé sur la machine à taille laser.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#FFFFFF' }}>
            Gravure laser de la nouvelle lame
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            À partir du code de coupe obtenu par décodage, la machine grave une lame vierge
            adaptée à votre véhicule. La précision du taillage laser garantit une lame identique
            à l'originale — ni trop souple, ni trop rigide, avec les mêmes tolerances d'usinage.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#FFFFFF' }}>
            Programmation du transpondeur et de la télécommande
          </h3>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            La lame seule ne suffit pas : sur les véhicules modernes, un transpondeur doit être
            reconnu par l'immobiliseur. Sinouhé branche sa valise Abrites ou ZedFull sur la prise
            OBD du véhicule, calcule les codes PIN constructeur et programme un nouveau transpondeur.
            Pour les clés avec télécommande centralisée, la télécommande est également programmée
            dans la même session.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
      <section className="bg-[#F0F3F7] py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Combien coûte une clé perdue sans double ?
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Le tarif pour une perte totale (aucun double existant) démarre à {PRICES.perteTotale.sinnes}€ chez Sinnes
            Automobiles. Ce prix inclut les 4 étapes : crochetage, décodage, taillage laser et
            programmation transpondeur. C'est un tarif tout compris — aucun frais caché.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            À titre de comparaison, un concessionnaire facture entre {PRICES.perteTotale.concessionnaire.min}€
            et {PRICES.perteTotale.concessionnaire.max}€ pour le même service, avec un délai de 1 à 3 semaines (commande de pièces +
            prise de rendez-vous atelier). Sinnes intervient le jour même, en 1h30.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Pour le détail des tarifs par type de clé, consultez notre page <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>tarif en cas de perte totale</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 5 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Prévenir la prochaine perte — l'importance du double
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Une fois votre nouvelle clé en main, nous vous recommandons vivement de faire réaliser
            un double préventif immédiatement. Le coût est nettement inférieur (à partir de {PRICES.cleSimple.sinnes}€
            pour un simple), et vous ne vous retrouverez plus jamais dans cette situation stressante.
            Consultez notre page sur <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>pourquoi avoir un double de clé</a> pour comprendre
            l'importance de cette précaution.
          </p>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>"Je recommande vivement sinnes automobiles ! J'étais bloquée sur un parking avec
            mes clés à l'intérieur — ils ont ouvert mon véhicule rapidement et sans aucun dégât."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              — <strong style={{ color: '#FFFFFF' }}>Nathalie Letienne</strong>, avis Google · Février 2026
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section className="bg-[#e53935] py-16 text-center text-white my-0">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Clé perdue ? Appelez maintenant
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            7j/7 · Intervention sur place · Nice et Côte d'Azur
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block bg-white text-[#e53935] font-body font-bold text-2xl
                       px-12 py-5 rounded-lg min-h-[56px] hover:bg-gray-100 transition-colors shadow-lg"
          >
            URGENCE — {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}
      <section style={{ background: '#F9FAFB' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text">
            Questions fréquentes — Clé de voiture perdue
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="inline-flex items-center gap-3 bg-[#e53935] text-white font-body font-bold text-lg px-10 py-4 rounded-lg min-h-[56px] hover:bg-[#c62828] transition-colors"
        >
          URGENCE — {NAP.phoneDisplay}
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
