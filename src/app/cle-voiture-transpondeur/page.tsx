import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconWrench, IconShield } from '@/components/ui/TrustStrip'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'
import StickyCTA from '@/components/ui/StickyCTA'

export const metadata: Metadata = {
  title: seoData['cle-voiture-transpondeur'].title,
  description: seoData['cle-voiture-transpondeur'].description,
  alternates: { canonical: 'https://sinnes.fr/cle-voiture-transpondeur/' },
  openGraph: {
    title: seoData['cle-voiture-transpondeur'].title,
    url: 'https://sinnes.fr/cle-voiture-transpondeur/',
  },
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "Qu'est-ce qu'un transpondeur dans une clé de voiture ?",
    answer: "Un transpondeur est une micropuce RFID intégrée dans la clé de voiture. Elle émet un code unique à 125 kHz qui est reconnu par l'antenne du contacteur. Si le code correspond à ceux enregistrés dans le calculateur, l'immobiliseur libère le démarrage du moteur. Sans transpondeur valide, la voiture ne démarre pas même avec la bonne lame mécanique.",
  },
  {
    question: "Comment savoir si ma clé a un transpondeur ?",
    answer: "La plupart des véhicules produits après 1995 ont un transpondeur. Pour vérifier : tentez de démarrer avec une clé double coupée sans électronique — si le moteur démarre puis s'arrête après 2 secondes, votre véhicule a un immobiliseur transpondeur actif.",
  },
  {
    question: "Peut-on cloner le transpondeur d'une clé de voiture ?",
    answer: "Oui pour les transpondeurs fixes (ID60, ID33, PCF7936 T5). Non pour les transpondeurs cryptés (ID46, ID48, HITAG). Pour les cryptés, une programmation via valise de diagnostic (Abrites ou ZedFull) est obligatoire — c'est la spécialité de Sinouhé Rochereau.",
  },
  {
    question: "Que se passe-t-il si le transpondeur d'une clé est endommagé ?",
    answer: "Si le transpondeur est défaillant, le moteur ne démarre pas (ou démarre puis coupe immédiatement). Sinnes Automobiles peut programmer un nouveau transpondeur sur une clé vierge et l'enregistrer dans le calculateur du véhicule. Intervention à Nice et toute la Côte d'Azur.",
  },
]

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/cle-voiture-transpondeur/#service",
      "name": "Programmation clé voiture transpondeur",
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
        { "@type": "ListItem", "position": 2, "name": "Clé voiture transpondeur", "item": "https://sinnes.fr/cle-voiture-transpondeur/" }
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
  { num: 1, title: 'La clé émet', desc: 'Le transpondeur dans la clé envoie un signal RFID à basse fréquence' },
  { num: 2, title: "L'antenne reçoit", desc: "L'antenne du contacteur lit le code unique du transpondeur" },
  { num: 3, title: 'Le calculateur vérifie', desc: "Le code est comparé à la liste des clés autorisées" },
  { num: 4, title: 'Démarrage autorisé', desc: "L'immobiliseur libère le circuit d'alimentation moteur" },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconWrench className="w-8 h-8" />, label: 'RFID 125 kHz', sublabel: 'ID46, ID48, HITAG, DST80' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Clonage possible', sublabel: 'Transpondeurs fixes T5, ID60' },
  { icon: <IconWrench className="w-8 h-8" />, label: 'Programmation OBD', sublabel: 'Abrites · ZedFull', href: '/programmation-cle-voiture/' },
  { icon: <IconEuro className="w-8 h-8" />, label: `${PRICES.cleSimple.sinnes} €`, sublabel: 'À partir de', href: '/reproduction-cle-voiture/' },
]

const review = getReviewForPage('/cle-voiture-transpondeur/')

export default function CleVoitureTranspondeurPage() {
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
            <li aria-current="page" className="text-text">Clé voiture transpondeur</li>
          </ol>
        </div>
      </nav>

      {/* SECTION 2 — HERO */}
      <section style={{ background: '#0A0A0A' }} className="pt-6 pb-6 px-4">
        <div className="container-sinnes">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">58 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-transpondeur'].h1} :<br />Fonctionnement et programmation
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Le transpondeur est la puce électronique qui permet à votre voiture de reconnaître
            sa clé. Sans lui, le moteur refuse de démarrer même si la lame est correcte.
            Sinouhé Rochereau, expert certifié Incarline, programme et reproduit tous les types
            de transpondeurs automobiles à Nice et sur toute la Côte d'Azur.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="btn-accent inline-flex items-center gap-3 font-body font-bold rounded-lg mb-8"
          >
            Devis gratuit : {NAP.phoneDisplay}
          </a>

          <p className="text-sm border-l-4 border-[#EFAD42] pl-4 mt-6" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Expertise assurée par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> ·
            Formateur international en programmation de clés automobiles chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-transpondeur" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* SECTION 3 — PROCESS STEPS */}
      <section style={{ background: '#FFFFFF' }} className="pt-6 pb-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            {seoData['cle-voiture-transpondeur'].h2[0]}
          </h2>
          <ProcessSteps steps={steps} theme="light" />
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Clé voiture transpondeur" serviceUrl="/cle-voiture-transpondeur/" />}


      {/* SECTION 5 — CORPS TEXTUEL */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            {seoData['cle-voiture-transpondeur'].h2[1]}
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Un transpondeur est une micropuce RFID (Radio-Frequency Identification) logée dans
            la tête de votre clé de voiture. Cette puce, de la taille d'un grain de riz, contient
            un code unique programmé en usine. À chaque tentative de démarrage, elle émet ce code
            à 125 kHz en réponse à l'activation de l'antenne du contacteur.
          </p>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            La technologie du transpondeur automobile a été introduite en 1995 par Volkswagen
            sur la Golf 3, premier véhicule de grande série équipé d'un immobiliseur électronique
            transpondeur. Depuis lors, pratiquement tous les véhicules neufs en sont équipés.
            En France, l'immobiliseur est obligatoire sur les véhicules neufs depuis 1998.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Sans un transpondeur reconnu par le calculateur, le moteur peut démarrer mécaniquement
            (la lame actionne le contacteur), mais l'immobiliseur coupe instantanément l'alimentation
            du moteur, généralement après 2 à 3 secondes. C'est le signal d'alerte qui vous
            indique que votre clé de remplacement n'a pas été correctement programmée.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            {seoData['cle-voiture-transpondeur'].h2[2]}
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Le système immobiliseur se compose de trois éléments : l'antenne (autour du contacteur),
            le calculateur de bord (qui stocke les codes autorisés) et la puce transpondeur
            (dans la clé). Au démarrage, l'antenne émet un champ électromagnétique qui alimente
            passivement la puce : pas de batterie nécessaire dans le transpondeur. La puce reçoit
            de l'énergie, calcule une réponse cryptée et la renvoie à l'antenne.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Le calculateur compare le code reçu avec la liste des codes autorisés stockée en
            mémoire. S'il y a correspondance, l'immobiliseur libère le circuit d'alimentation
            du moteur. Ce processus prend moins d'une seconde. Les lexies techniques associées
            à ce système sont : calculateur, antenne transpondeur, puce immobiliseur, ID46,
            ID48, HITAG2, PCF7936, des termes que Sinouhé Rochereau manie au quotidien.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            {seoData['cle-voiture-transpondeur'].h2[3]}
          </h2>

          <h3 className="font-heading font-bold text-xl mb-3 text-text-main">
            {seoData['cle-voiture-transpondeur'].h3[0]}
          </h3>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Les transpondeurs fixes émettent toujours le même code, sans cryptage. Ils équipent
            les véhicules plus anciens (1995–2005 pour la majorité). Leur principal avantage :
            ils sont clonables : Sinouhé peut copier le code d'un transpondeur fixe sur une puce
            vierge compatible en quelques minutes, sans connexion OBD au véhicule.
            Types courants : PCF7935 (T5), Megamos ID48 sur les Renault ancien, transponders
            ID60 sur certaines Fiat et Alfa Romeo.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3 text-text-main">
            {seoData['cle-voiture-transpondeur'].h3[1]}
          </h3>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Les transpondeurs cryptés utilisent des algorithmes de chiffrement : chaque transaction
            entre la clé et le calculateur est unique. Impossible de les cloner directement.
            L'ID46 est le plus répandu (PSA, Renault, Fiat, Lancia, Honda, Mazda). L'ID48 équipe
            principalement les véhicules du groupe VAG (VW, Audi, Seat, Skoda, Porsche) jusqu'en 2011.
            Le HITAG2 est présent sur les BMW, Opel et Volvo de certaines générations.
            Pour programmer ces transpondeurs, une connexion OBD via valise Abrites est indispensable.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3 text-text-main">
            {seoData['cle-voiture-transpondeur'].h3[2]}
          </h3>
          <p className="font-body leading-relaxed mb-6 text-text-muted">
            Les véhicules récents (après 2011-2015) utilisent des algorithmes encore plus robustes.
            Le HITAG Pro équipe les VAG récents. Le DST80 est présent dans les Toyota et Lexus récents.
            Ces systèmes nécessitent des outils spécialisés et des licences constructeur. C'est
            exactement ce que propose Sinouhé avec ses équipements Abrites et ZedFull à jour.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            {seoData['cle-voiture-transpondeur'].h2[4]}
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            La réponse dépend du type de transpondeur. Pour les transpondeurs fixes (T5, ID60,
            ID33) : oui, le clonage est possible et rapide (5 à 10 minutes). Sinouhé lit le code
            de la puce originale avec un lecteur dédié, puis le copie sur une puce vierge compatible.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Pour les transpondeurs cryptés (ID46, ID48, HITAG) : le clonage direct est impossible
            par conception. La seule solution est la <a href="/programmation-cle-voiture/" className="text-primary font-semibold hover:underline">programmation de clé</a> via OBD :
            l'outil calcule les codes PIN constructeur et enregistre le nouveau transpondeur dans
            le calculateur, sans cloner l'original.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6 text-text-main">
            {seoData['cle-voiture-transpondeur'].h2[5]}
          </h2>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            La <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">reproduction de clé</a> complète implique deux étapes simultanées :
            le taillage de la lame (mécanique) et la programmation ou le clonage du transpondeur
            (électronique). Sinnes Automobiles réalise les deux dans la même intervention,
            en atelier à Nice ou à domicile sur toute la Côte d'Azur.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Si votre transpondeur est défaillant (puce fissurée ou morte), Sinouhé peut remplacer
            uniquement la puce en créant une nouvelle clé avec la même lame (si elle est encore
            fonctionnelle) ou en la regravant. Dans tous les cas, le nouveau transpondeur est
            enregistré dans le calculateur du véhicule via la prise OBD.
          </p>
          <p className="font-body leading-relaxed mb-4 text-text-muted">
            Pour{' '}
            <a href="/double-cle-voiture/" className="text-primary font-semibold hover:underline">obtenir un double de clé à transpondeur</a>,
            Sinouhé Rochereau réalise le taillage de la lame et la programmation du transpondeur
            dans la même intervention, à domicile ou à l'atelier. Consultez nos{' '}
            <a href="/tarif-cle-voiture/" className="text-primary font-semibold hover:underline">tarifs programmation clé à transpondeur</a>.
          </p>
          <p className="font-body leading-relaxed mb-8 text-text-muted">
            Vous avez une Audi ou un véhicule du groupe VAG ? Consultez notre page dédiée à la{' '}
            <a href="/refaire-cle-audi/" className="text-primary font-semibold hover:underline">clé transpondeur Audi</a>,
            IMMO4, IMMO5 et KESSY couverts.
          </p>
        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#EFAD42]/20 text-center">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
            {seoData['cle-voiture-transpondeur'].h2[6]}
          </h2>
          <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            7j/7 · Nice et Côte d'Azur · Toutes marques
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block bg-[#EFAD42] text-[#0A0A0A] font-body font-bold text-xl
                       px-10 py-4 rounded-lg min-h-[56px] hover:bg-yellow-400 transition-colors"
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* SECTION 8 — FAQ */}

      <section style={{ background: '#F0F3F7' }} className="py-16 px-4">

        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-8 text-text">
            {seoData['cle-voiture-transpondeur'].h2[7]}
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
        variant={seoData['cle-voiture-transpondeur'].ctas.sticky.variant} 
        label={seoData['cle-voiture-transpondeur'].ctas.sticky.label} 
      />
    </>
  )
}
