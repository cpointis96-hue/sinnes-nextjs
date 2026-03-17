import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconMapPin, IconCalendar, IconClock, IconWrench } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: 'Clé de voiture Nice, Antibes, Cagnes-sur-Mer, Cannes',
  description: 'Reproduction et double de clé voiture à Nice, Antibes, Cagnes-sur-Mer et Cannes. Intervention mobile 7j/7. Sinouhé Rochereau. +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/cle-voiture-nice/' },
  openGraph: {
    title: 'Clé de voiture Nice et Côte d\'Azur — Sinnes Automobiles',
    url: 'https://sinnes.fr/cle-voiture-nice/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/cle-voiture-nice/#service",
      "name": "Clé de voiture Nice et Côte d'Azur",
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
        { "@type": "ListItem", "position": 2, "name": "Clé voiture Nice", "item": "https://sinnes.fr/cle-voiture-nice/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Intervenez-vous pour une clé de voiture à Antibes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sinnes Automobiles intervient à Antibes, notamment à Sophia Antipolis, dans le Vieil Antibes et au Port Vauban. Contactez-nous au +33 6 75 54 04 11 — Sinouhé Rochereau se déplace directement sur place." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous intervenir dans le Vieux-Nice ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, avec une particularité : les ruelles du Vieux-Nice ne sont pas accessibles en véhicule d'atelier. Sinouhé Rochereau intervient à pied avec son matériel portable Abrites — cela ne change rien à la qualité ni aux tarifs de l'intervention." }
        },
        {
          "@type": "Question",
          "name": "Quel est le délai d'intervention à Cannes ou Cagnes-sur-Mer ?",
          "acceptedAnswer": { "@type": "Answer", "text": "En général 1h à 2h depuis Nice. Sinouhé Rochereau couvre Nice, Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer et toute la Côte d'Azur. Pas de frais de déplacement pour les interventions à Nice." }
        },
        {
          "@type": "Question",
          "name": "Intervenez-vous à l'aéroport de Nice ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. En cas de clé perdue avant un vol ou au retour, Sinnes Automobiles peut intervenir directement aux parkings des terminaux 1 et 2 de l'aéroport Nice Côte d'Azur. Appelez le +33 6 75 54 04 11 dès que vous constatez le problème." }
        }
      ]
    },
    {
      "@type": "Person",
      "@id": "https://sinnes.fr/#sinouhe",
      "name": "Sinouhé Rochereau",
      "jobTitle": "Expert en programmation de clés automobiles",
      "worksFor": { "@id": "https://sinnes.fr/#organization" }
    },
    {
      "@type": "Person",
      "@id": "https://sinnes.fr/#ines",
      "name": "Inès Barthelemy",
      "jobTitle": "Co-fondatrice — Gestion et relation client",
      "worksFor": { "@id": "https://sinnes.fr/#organization" }
    }
  ]
}

const steps = [
  { num: 1, title: 'Appelez', desc: `Contactez-nous au ${NAP.phoneDisplay} depuis n'importe où sur la Côte d'Azur` },
  { num: 2, title: 'Localisation', desc: 'Donnez votre adresse exacte — Nice, Antibes, Cagnes ou Cannes' },
  { num: 3, title: 'Déplacement', desc: 'Sinouhé arrive avec son matériel complet en moins de 2h' },
  { num: 4, title: 'Solution', desc: 'Clé opérationnelle sur place — toutes marques, garanti' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconMapPin className="w-8 h-8" />, label: 'Nice · Antibes · Cagnes · Cannes', sublabel: 'Zone d\'intervention', href: '/serrurier-automobile-nice/' },
  { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
  { icon: <IconClock className="w-8 h-8" />, label: 'Intervention < 2h', sublabel: 'Sur la Côte d\'Azur', href: '/urgence-cle-voiture/' },
  { icon: <IconWrench className="w-8 h-8" />, label: 'Domicile inclus', sublabel: 'Intervention à domicile', href: '/depannage-cle-domicile/' },
]

export default function CleVoitureNicePage() {
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
            <li aria-current="page" className="text-text">Clé de voiture Nice</li>
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
            Clé de voiture à Nice, Antibes,<br />Cagnes-sur-Mer et Cannes
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles intervient pour la reproduction et le double de clé voiture sur
            toute la Côte d'Azur. Sinouhé Rochereau se déplace directement là où vous êtes —
            domicile, parking, bureau, port. À partir de {PRICES.cleSimple.sinnes}€, 7j/7, devis gratuit.
            Appelez le {NAP.phoneDisplay}.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 bg-accent text-text-inverse font-body font-bold
                       text-xl px-8 py-4 rounded-lg min-h-[56px] hover:bg-accent-dark transition-colors mb-8"
          >
            Devis gratuit — {NAP.phoneDisplay}
          </a>

          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <p className="text-sm border-l-4 border-[#FFD700] pl-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Interventions techniques par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> —
              Expert programmation, formateur Incarline.
            </p>
            <p className="text-sm border-l-4 border-[#FFD700] pl-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Devis et suivi par <strong style={{ color: '#FFFFFF' }}>{TEAM.ines.name}</strong> —
              Co-fondatrice, gestion et relation client.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 — PROCESS STEPS */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
            Comment se passe une intervention ?
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
            Clé de voiture à Nice — intervention dans tous les quartiers
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Nice est la ville principale d'intervention de Sinnes Automobiles. Sinouhé Rochereau
            connaît chaque quartier et leurs spécificités d'accès. Pour le <a href="/serrurier-automobile-nice/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>serrurier automobile à Nice</a>,
            il intervient sur l'ensemble de la ville sans supplément de déplacement.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#FFFFFF' }}>Promenade des Anglais</strong> : parking de la Promenade, parking du Palais de la Méditerranée —
            interventions fréquentes pour des touristes ou résidents bloqués sur ces parkings.
            <strong style={{ color: '#FFFFFF' }}> Gare Nice-Ville</strong> : parking de la gare SNCF, parking Thiers —
            situation courante après un voyage : clé perdue ou clé dans le véhicule.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#FFFFFF' }}>Aéroport Nice Côte d'Azur</strong> (Terminaux 1 et 2) : les parkings de l'aéroport
            sont une zone d'intervention régulière. Clé perdue avant un vol ou au retour —
            Sinouhé peut intervenir directement sur les niveaux P1 à P5.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#FFFFFF' }}>Vieux-Nice</strong> : particularité importante — les ruelles historiques
            ne sont pas accessibles en véhicule d'atelier. Sinouhé intervient à pied avec
            son matériel portable Abrites. Sinouhé connaît chaque accès des ruelles étroites
            du Vieux-Nice — cela ne rallonge pas les délais ni les tarifs.
            <strong style={{ color: '#FFFFFF' }}> Quartier Libération</strong> : marché et commerces — zone résidentielle dense couverte sans problème.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Clé de voiture à Antibes — Sophia Antipolis et Vieil Antibes
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Antibes est la deuxième ville d'intervention de Sinnes après Nice. Trois zones sont
            particulièrement actives :
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            <strong style={{ color: '#111111' }}>Sophia Antipolis</strong> : le parc technologique est une source régulière
            d'appels. Les techniciens et cadres qui travaillent sur le parc ont souvent des
            véhicules récents avec des systèmes de clé complexes. "Les techniciens du parc
            technologique de Sophia Antipolis nous appellent régulièrement pour des doubles
            de clé sur le parking."
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            <strong style={{ color: '#111111' }}>Vieil Antibes</strong> / remparts : accès restreint pour les véhicules,
            stationnement limité dans les rues historiques. Même approche que dans le
            Vieux-Nice — intervention à pied si nécessaire.
            <strong style={{ color: '#111111' }}> Port Vauban</strong> : l'un des plus grands ports de plaisance de Méditerranée —
            les plaisanciers de passage font régulièrement appel à Sinnes pour des clés
            de véhicule laissés sur le port.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Délai depuis Nice : 30 à 45 minutes en dehors des heures de pointe. Frais de
            déplacement : communiqués gratuitement lors du devis téléphonique.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Clé de voiture à Cagnes-sur-Mer — Hippodrome et Haut-de-Cagnes
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Cagnes-sur-Mer présente plusieurs zones d'intervention spécifiques :
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            <strong style={{ color: '#FFFFFF' }}>Hippodrome de la Côte d'Azur</strong> : lors des journées de courses,
            le parking de l'hippodrome est une source fréquente d'appels — clés oubliées
            dans l'excitation de l'événement.
            <strong style={{ color: '#FFFFFF' }}> Haut-de-Cagnes</strong> / Vieux village : accès voiture limité dans ce village médiéval perché —
            intervention possible à pied depuis le parking extérieur.
            <strong style={{ color: '#FFFFFF' }}> Cros-de-Cagnes</strong> : quartier bord de mer avec son parking — zone résidentielle et touristique bien desservie.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
      <section className="bg-[#F0F3F7] py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Clé de voiture à Cannes — de la Croisette à La Bocca
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Cannes est couverte intégralement par Sinnes Automobiles. Les zones les plus actives :
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            <strong style={{ color: '#111111' }}>Palais des Festivals</strong> : lors des grands événements (Festival de Cannes,
            MIPIM, Cannes Lions), la demande d'interventions augmente significativement — visiteurs
            étrangers avec des véhicules de location ou des voitures personnelles.
            <strong style={{ color: '#111111' }}> Rue d'Antibes</strong> : artère commerçante principale, parkings souterrains adjacents —
            zone d'intervention classique en journée.
            <strong style={{ color: '#111111' }}> La Bocca</strong> : quartier résidentiel à l'ouest de Cannes — couvert sans supplément.
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
            Clé de voiture sur la Côte d'Azur
          </h2>
          <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            7j/7 · Nice · Antibes · Cagnes · Cannes · Devis gratuit
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
            Questions fréquentes — Clé voiture Nice et alentours
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
      <div className="text-center py-12 bg-bg-shade">
        <a href={`tel:${NAP.phoneTel}`} className="btn-accent text-lg px-10 py-4 min-h-[56px]">
          Appelez maintenant — {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Nice et Côte d'Azur</p>
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
