import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconClock, IconMapPin } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'Urgence clé voiture Nice — Intervention immédiate 7j/7',
  description: "Serrurier automobile d'urgence à Nice : clé perdue, bloquée ou cassée. Intervention rapide 7j/7, Antibes, Cannes. Devis gratuit — +33 6 75 54 04 11",
  alternates: { canonical: 'https://sinnes.fr/urgence-cle-voiture/' },
  openGraph: {
    title: 'Urgence clé voiture Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/urgence-cle-voiture/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/urgence-cle-voiture/#service",
      "name": "Serrurier automobile urgence Nice",
      "provider": { "@id": "https://sinnes.fr/#organization" },
      "areaServed": [
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Antibes" },
        { "@type": "City", "name": "Cagnes-sur-Mer" },
        { "@type": "City", "name": "Cannes" }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
        "opens": "00:00",
        "closes": "23:59"
      }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://sinnes.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Urgence clé voiture", "item": "https://sinnes.fr/urgence-cle-voiture/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Combien de temps pour une intervention urgence à Nice ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Sinnes Automobiles intervient en moins de 2h sur Nice et les communes voisines. Disponible 7j/7, week-ends et jours fériés inclus, sur rendez-vous immédiat au +33 6 75 54 04 11." }
        },
        {
          "@type": "Question",
          "name": "Intervenez-vous la nuit pour une urgence clé voiture ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, Sinnes est joignable 7j/7. Pour toute urgence nocturne, contactez-nous par téléphone au +33 6 75 54 04 11. L'intervention est planifiée en fonction de la disponibilité de Sinouhé Rochereau." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous ouvrir une voiture sans abîmer la serrure ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sinouhé Rochereau utilise des techniques de crochetage professionnel sans effraction. Dans la très grande majorité des cas, la serrure et la carrosserie sont intégralement préservées." }
        },
        {
          "@type": "Question",
          "name": "Quel est le tarif d'une intervention urgence ?",
          "acceptedAnswer": { "@type": "Answer", "text": `À partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.perteTotale.sinnes}€ pour une perte totale. Devis gratuit par téléphone avant toute intervention — aucun frais caché.` }
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
  { num: 1, title: 'Appelez', desc: `Contactez-nous au ${NAP.phoneDisplay} — réponse immédiate 7j/7` },
  { num: 2, title: 'Diagnostic', desc: "Sinouhé identifie votre situation : clé perdue, bloquée ou véhicule fermé" },
  { num: 3, title: 'Intervention', desc: "Déplacement sur Nice, Antibes, Cagnes, Cannes — sous 2h" },
  { num: 4, title: 'Solution', desc: "Clé opérationnelle ou véhicule ouvert — garantie constructeur préservée" },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconClock className="w-8 h-8" />, label: '< 2h', sublabel: 'Sur Nice et la Côte d\'Azur' },
  { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconMapPin className="w-8 h-8" />, label: 'Nice · Antibes · Cagnes · Cannes', sublabel: 'Zone d\'intervention', href: '/cle-voiture-nice/' },
  { icon: <IconEuro className="w-8 h-8" />, label: `${PRICES.cleSimple.sinnes} €`, sublabel: 'À partir de', href: '/tarif-cle-voiture/' },
]

export default function UrgenceCleVoiturePage() {
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
            <li aria-current="page" className="text-text">Urgence clé voiture</li>
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
            Urgence clé voiture Nice —<br />Intervention immédiate 7j/7
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Clé de voiture perdue, bloquée dans le contact ou cassée ? Sinnes Automobiles intervient
            en urgence, 7j/7, directement là où vous êtes : parking, domicile, lieu de travail.
            Sinouhé Rochereau se déplace à Nice, Antibes, Cagnes-sur-Mer et Cannes — intervention
            en moins de 2h. Serrurier automobile autour de vous, disponible maintenant :
            appelez le {NAP.phoneDisplay}. À partir de {PRICES.cleSimple.sinnes}€, devis gratuit, sans frais cachés.
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
            Comment ça se passe ?
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
            Serrurier voiture urgence — disponible autour de vous
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Un serrurier voiture urgence disponible en moins de 2h — c'est la promesse de Sinnes Automobiles
            à Nice et sur toute la Côte d'Azur. Sinouhé Rochereau intervient 7j/7, week-ends et jours fériés
            inclus. Avec son matériel professionnel portable (valise Abrites, machine à taille laser),
            il se déplace directement sur votre lieu de blocage : domicile, parking, bureau ou bord de route.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour <a href="/serrurier-automobile-nice/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>notre service de serrurier automobile à Nice</a>, chaque
            intervention est précédée d'un diagnostic téléphonique gratuit : vous donnez la marque, le modèle
            et votre situation, Sinouhé vous communique un tarif ferme et un délai d'arrivée. Aucune mauvaise
            surprise à la facturation.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Contrairement à un serrurier de maison, Sinnes est exclusivement spécialisé en automobile.
            Cela fait toute la différence : connaissance des systèmes d'immobiliseur, des transpondeurs
            et des serrures de portes de véhicules. Une expertise que vous ne trouverez pas chez un
            serrurier généraliste.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Les 4 situations d'urgence les plus fréquentes
          </h2>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111111' }}>
            Clé de voiture perdue — sans double
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            La situation la plus stressante : vous n'avez plus vos clés et aucun double n'existe.
            Sinouhé procède au crochetage sans effraction, décode mécaniquement la serrure pour
            reconstituer le code de la lame, puis grave une nouvelle clé par laser et programme
            le transpondeur. Pour en savoir plus sur ce cas spécifique, consultez notre page dédiée
            à la <a href="/cle-voiture-perdue/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>clé de voiture perdue</a>.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111111' }}>
            Clé bloquée dans le contact ou cassée
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Une clé cassée dans le barillet ou bloquée dans le contacteur nécessite une extraction
            professionnelle. Sinouhé dispose des outils adaptés pour extraire la clé sans endommager
            le barillet. Si la clé est irrécupérable, une nouvelle est fabriquée sur place.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111111' }}>
            Véhicule fermé avec clés à l'intérieur
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Clés oubliées à l'intérieur, portière claquée automatiquement — Sinouhé ouvre votre
            véhicule sans effraction et sans dégât sur la carrosserie ou les joints de portière.
            Intervention rapide, discrète et professionnelle.
          </p>

          <h3 className="font-heading font-bold text-xl mb-3" style={{ color: '#111111' }}>
            Perte de la télécommande centralisée
          </h3>
          <p className="font-body leading-relaxed mb-6" style={{ color: '#374151' }}>
            Télécommande perdue ou défaillante : le véhicule ne répond plus à la commande d'ouverture centralisée.
            Sinnes programme une nouvelle télécommande sur place — toutes marques, y compris les systèmes
            cryptés récents (VAG, PSA, BMW, Mercedes).
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Pourquoi choisir Sinnes pour votre urgence ?
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinouhé Rochereau est formateur international certifié chez Incarline — la référence
            européenne en formation de programmation automobile. Il utilise les mêmes équipements
            que les garages agréés constructeurs : valise Abrites et ZedFull. Résultat : une
            intervention identique à ce que ferait un concessionnaire, en beaucoup moins de temps
            et à un tarif deux à trois fois inférieur.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pas de sous-traitance, pas d'intermédiaire : c'est Sinouhé en personne qui se déplace
            et réalise l'intervention. Cette disponibilité directe est particulièrement précieuse
            en situation d'urgence, où chaque heure compte.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour un déplacement à votre domicile ou sur votre lieu de travail, consultez notre page
            sur <a href="/depannage-cle-domicile/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>l'intervention à domicile</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
      <section className="bg-[#F0F3F7] py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Zone d'intervention — Nice et Côte d'Azur
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Sinnes Automobiles intervient en urgence sur Nice et toutes les communes voisines :
            Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer, Menton,
            Grasse, Vence et Mougins. Les interventions à Nice ne sont pas facturées de frais de déplacement.
          </p>
          <p className="font-body leading-relaxed mb-6" style={{ color: '#374151' }}>
            Pour toutes les situations de <a href="/cle-voiture-nice/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>clé de voiture à Nice et alentours</a>, appelez
            directement le {NAP.phoneDisplay} — Sinouhé vous donne une estimation de délai en moins
            de 2 minutes.
          </p>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: '#374151' }}>
            <p>"Je recommande vivement sinnes automobiles ! J'étais bloquée sur un parking avec
            mes clés à l'intérieur — ils ont ouvert mon véhicule rapidement et sans aucun dégât."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: '#6B7280' }}>
              — <strong style={{ color: '#111111' }}>Nathalie Letienne</strong>, avis Google · Février 2026
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section className="bg-[#e53935] py-16 text-center text-white my-0">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Urgence clé voiture — appelez maintenant
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            7j/7 · Intervention &lt; 2h · Nice et Côte d'Azur
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
            Questions fréquentes — Urgence clé voiture
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a href={`tel:${NAP.phoneTel}`} className="inline-flex items-center gap-3 bg-[#e53935] text-white font-body font-bold text-lg px-10 py-4 rounded-lg min-h-[56px] hover:bg-[#c62828] transition-colors">
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
