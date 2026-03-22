import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconWrench, IconShield, IconClock } from '@/components/ui/TrustStrip'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'
import StickyCTA from '@/components/ui/StickyCTA'

export const metadata: Metadata = {
  title: seoData['cle-voiture-perdue'].title,
  description: seoData['cle-voiture-perdue'].description,
  alternates: { canonical: 'https://sinnes.fr/cle-voiture-perdue/' },
  openGraph: {
    title: seoData['cle-voiture-perdue'].title,
    url: 'https://sinnes.fr/cle-voiture-perdue/',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Que faire si on a perdu ses clés de voiture sans double ?",
    answer: `Appelez Sinnes Automobiles au +33 6 75 54 04 11. Sinouhé Rochereau intervient directement sur votre véhicule : crochetage sans effraction, décodage de la serrure, gravure de la nouvelle lame et programmation du transpondeur. Intervention à Nice et toute la Côte d'Azur.`,
  },
  {
    question: "Combien coûte la création d'une clé voiture perdue sans double ?",
    answer: `À partir de ${PRICES.perteTotale.sinnes}€ pour une perte totale (aucun double existant). Ce tarif comprend le crochetage sans effraction, le décodage de la serrure, le taillage laser de la lame et la programmation complète du transpondeur et de la télécommande. Devis gratuit au +33 6 75 54 04 11.`,
  },
  {
    question: "Peut-on vraiment ouvrir une voiture sans abîmer la serrure ?",
    answer: "Oui, dans la grande majorité des cas. Sinouhé Rochereau utilise des outils de crochetage professionnel certifiés. La serrure et la carrosserie sont intégralement préservées. Cette technique est différente du crochetage d'urgence des pompiers ou des amateurs.",
  },
  {
    question: "Combien de temps pour créer une clé perdue sans double ?",
    answer: "En général 1h30 à 2h : 15-20 min de crochetage, 20-30 min de décodage, 30-45 min de taillage et programmation. Sinouhé intervient directement sur place — pas besoin de remorquer le véhicule.",
  },
]

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
      "mainEntity": FAQ_ITEMS.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": { "@type": "Answer", "text": item.answer }
      }))
    },
    {
      "@type": "Person",
      "@id": "https://sinnes.fr/#sinouhe",
      "name": "Sinouhé Rochereau",
      "jobTitle": "Expert en programmation de clés automobiles",
      "knowsAbout": TEAM.sinouhe.knowsAbout,
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

const review = getReviewForPage('/cle-voiture-perdue/')

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
      <section style={{ background: '#0A0A0A' }} className="pt-16 pb-6 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">58 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h1} :<br />Solution d'urgence à Nice
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Vous avez perdu vos clés de voiture et vous n'avez aucun double ? Sinnes Automobiles
            a la solution : Sinouhé Rochereau procède au crochetage sans effraction, décode la serrure
            mécaniquement et recrée votre clé complète : lame taillée laser + transpondeur programmé.
            Intervention à Nice, Antibes, Cagnes, Cannes. À partir de {PRICES.perteTotale.sinnes}€, devis gratuit,
            appelez le <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="btn-accent btn-urgence inline-flex items-center gap-3 font-body font-bold rounded-lg animate-pulse mb-8"
          >
            URGENCE : {NAP.phoneDisplay}
          </a>

          <p className="text-sm border-l-4 border-[#EFAD42] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> ·
            Expert automobile, formateur international Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-cle-voiture-perdue" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* SECTION 3 — PROCESS STEPS */}
      <section className="bg-white pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center " style={{ color: '#111111' }}>
            {seoData['cle-voiture-perdue'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="light" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Clé de voiture perdue" serviceUrl="/cle-voiture-perdue/" />}


      {/* H2 BLOC 1 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pas de panique. La situation est stressante, mais elle a une solution rapide et peu onéreuse.
            La première étape est d'appeler Sinnes Automobiles au <span className="whitespace-nowrap">{NAP.phoneDisplay}</span> : en deux minutes,
            Sinouhé Rochereau vous confirme qu'il peut intervenir et vous donne un délai précis.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Le processus complet pour <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>refaire sa clé de voiture</a> sans double existant
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
      <section className="bg-white pt-16 pb-6 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
            {seoData['cle-voiture-perdue'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Le crochetage automobile professionnel est une technique radicalement différente de ce que
            pratiquent les serruriers de maison ou les dépanneurs d'urgence non spécialisés. Sinouhé
            Rochereau utilise des outils certifiés adaptés aux serrures automobiles modernes :
            crochets de sécurité, lames de déverrouillage, qui permettent d'actionner le mécanisme
            de la serrure sans forcer.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Résultat : la serrure de porte est intégralement préservée, les joints de portière ne sont
            pas endommagés, et la carrosserie reste impeccable. Vous ne verrez aucune marque d'intervention.
            C'est d'ailleurs ce qui distingue un vrai <a href="/urgence-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>serrurier automobile d'intervention en urgence</a> d'un
            bricoleur improvisé.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Une fois le véhicule ouvert, Sinouhé peut immédiatement passer à l'étape suivante :
            le décodage de la serrure pour reconstituer votre clé.
          </p>
        </div>
      </section>

      <div style={{ background: '#111111' }}><div className="container-sinnes"><DiagonalDivider id="dd-perdue-2" icon={<SteeringWheelIcon size={42} color="#EFAD42" />} color="#EFAD42" /></div></div>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="pt-6 pb-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h2[3]}
          </h2>

          <h3 className="font-heading font-bold text-xl mb-3 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h3[0]}
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Une fois le véhicule ouvert, Sinouhé introduit un outil de décodage dans la serrure
            de porte ou le contacteur. Cet outil lit les positions des goupilles à l'intérieur
            du barillet et retranscrit le code de coupe de la lame, le même que sur votre clé
            d'origine. Ce code est ensuite programmé sur la machine à taille laser.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h3[1]}
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            À partir du code de coupe obtenu par décodage, la machine grave une lame vierge
            adaptée à votre véhicule. La précision du taillage laser garantit une lame identique
            à l'originale : ni trop souple, ni trop rigide, avec les mêmes tolerances d'usinage.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h3[2]}
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
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#111111' }}>
            {seoData['cle-voiture-perdue'].h2[4]}
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            Le tarif pour une perte totale (aucun double existant) démarre à {PRICES.perteTotale.sinnes}€ chez Sinnes
            Automobiles. Ce prix inclut les 4 étapes : crochetage, décodage, taillage laser et
            programmation transpondeur. Tarif tout compris, aucun frais caché.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
            À titre de comparaison, un concessionnaire facture entre {PRICES.perteTotale.concessionnaire.min}€
            et {PRICES.perteTotale.concessionnaire.max}€ pour le même service, avec un délai de 1 à 3 semaines (commande de pièces +
            prise de rendez-vous atelier). Sinnes intervient le jour même, en 1h30.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
            Pour le détail des tarifs par type de clé, consultez notre page <a href="/tarif-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>tarif en cas de perte totale</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 5 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 " style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-perdue'].h2[5]}
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Une fois votre nouvelle clé en main, nous vous recommandons vivement de faire réaliser
            un double préventif immédiatement. Le coût est nettement inférieur (à partir de {PRICES.cleSimple.sinnes}€
            pour un simple), et vous ne vous retrouverez plus jamais dans cette situation stressante.
            Consultez notre page sur <a href="/double-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>pourquoi avoir un double de clé</a> pour comprendre
            l'importance de cette précaution.
          </p>        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section className="bg-[#e53935] py-16 text-center text-white my-0">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4 ">
            {seoData['cle-voiture-perdue'].h2[6]}
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            7j/7 · Intervention sur place · Nice et Côte d'Azur
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center justify-center bg-white text-[#e53935] font-body font-bold text-xl md:text-2xl rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            style={{ minHeight: '64px', padding: '12px 24px' }}
          >
            URGENCE : {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}

      <section style={{ background: '#F0F3F7' }} className="py-16 px-4">

        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text ">
            {seoData['cle-voiture-perdue'].h2[7]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="btn-accent btn-urgence inline-flex items-center gap-3 font-body font-bold rounded-lg"
        >
          URGENCE : {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Intervention rapide</p>
      </div>

      <StickyCTA 
        variant={seoData['cle-voiture-perdue'].ctas.sticky.variant} 
        label={seoData['cle-voiture-perdue'].ctas.sticky.label} 
      />
    </>
  )
}
