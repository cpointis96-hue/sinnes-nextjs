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
      "@type": "LocalBusiness",
      "@id": "https://sinnes.fr/cle-voiture-nice/#service",
      "name": "Clé de voiture Nice, Antibes, Cagnes-sur-Mer, Cannes",
      "description": "Service de reproduction et programmation de clé automobile à Nice et communes alentours. Intervention à domicile, chaque quartier connu.",
      "url": "https://sinnes.fr/cle-voiture-nice/",
      "telephone": "+33675540411",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "4 rue Diderot",
        "addressLocality": "Nice",
        "postalCode": "06000",
        "addressCountry": "FR"
      },
      "areaServed": [
        { "@type": "City", "name": "Nice" },
        { "@type": "City", "name": "Antibes" },
        { "@type": "City", "name": "Cagnes-sur-Mer" },
        { "@type": "City", "name": "Cannes" },
        { "@type": "City", "name": "Saint-Laurent-du-Var" },
        { "@type": "City", "name": "Villefranche-sur-Mer" }
      ],
      "employee": { "@id": "https://sinnes.fr/#sinouhe" },
      "parentOrganization": { "@id": "https://sinnes.fr/#organization" }
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://sinnes.fr/" },
        { "@type": "ListItem", "position": 2, "name": "Serrurier automobile Nice", "item": "https://sinnes.fr/serrurier-automobile-nice/" },
        { "@type": "ListItem", "position": 3, "name": "Clé voiture Nice et alentours", "item": "https://sinnes.fr/cle-voiture-nice/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Y a-t-il des frais de déplacement pour les interventions hors Nice ?",
          "acceptedAnswer": { "@type": "Answer", "text": "À Nice : aucun frais de déplacement. Pour Antibes, Cagnes-sur-Mer et Cannes : des frais kilométriques peuvent s'appliquer, communiqués gratuitement lors du devis téléphonique. Appelez le +33 6 75 54 04 11 pour obtenir un prix précis selon votre adresse exacte." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous intervenir dans le Vieux-Nice ou le Vieil Antibes ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Dans les zones piétonnes et les ruelles historiques inaccessibles en véhicule, Sinouhé Rochereau intervient à pied avec son matériel portable Abrites — valise compacte et lecteur RFID. La qualité et les tarifs de l'intervention sont identiques." }
        },
        {
          "@type": "Question",
          "name": "Quel est le délai réaliste pour une intervention à Cannes depuis Nice ?",
          "acceptedAnswer": { "@type": "Answer", "text": "En dehors des heures de pointe (matin 7h-9h et soir 17h-20h), comptez 35 à 45 minutes depuis Nice. En heure de pointe ou lors d'événements cannois (Festival de Cannes, MIPIM), prévoir 1h à 1h30. Sinouhé vous confirme le délai exact lors de l'appel." }
        },
        {
          "@type": "Question",
          "name": "Pouvez-vous intervenir au parking de l'aéroport Nice Côte d'Azur ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sinouhé Rochereau intervient directement aux niveaux P1 à P5 des parkings des terminaux T1 et T2. En cas de clé perdue avant un vol, appelez immédiatement le +33 6 75 54 04 11 — le délai d'intervention depuis le centre de Nice est généralement inférieur à 45 minutes." }
        },
        {
          "@type": "Question",
          "name": "Intervenez-vous à Sophia Antipolis le week-end ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui, 7j/7 y compris le week-end. Le parc technologique de Sophia Antipolis est moins chargé en circulation le week-end — délai d'intervention depuis Nice : 30 à 40 minutes. Appelez le +33 6 75 54 04 11." }
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
            Chaque quartier de Nice, chaque zone de la Côte d'Azur a ses particularités d'accès.
            Sinouhé Rochereau connaît le terrain : ruelles piétonnes du Vieux-Nice, parkings
            d'aéroport, zones industrielles de Sophia Antipolis, remparts du Vieil Antibes.
            Il se déplace directement là où vous êtes — avec son matériel complet, 7j/7.
            Appelez le{' '}
            <a href={`tel:${NAP.phoneTel}`} className="font-bold hover:underline" style={{ color: '#FFD700' }}>
              {NAP.phoneDisplay}
            </a>.
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
            Clé de voiture à Nice — quartier par quartier
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Nice est la ville principale d'intervention de Sinnes Automobiles.
            En tant que{' '}
            <a href="/serrurier-automobile-nice/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>serrurier automobile niçois</a>,
            Sinouhé Rochereau intervient sans supplément de déplacement sur l'ensemble de la ville —
            mais chaque quartier a ses propres réalités d'accès qu'il connaît parfaitement.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#FFD700' }}>
            Vieux-Nice — intervention à pied obligatoire
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Les ruelles du Vieux-Nice (rue Droite, rue du Marché, cours Saleya) sont interdites
            aux véhicules motorisés de 11h à 19h30 en été. Le parking Saleya souterrain est
            accessible mais le déplacement interne se fait à pied. Sinouhé se déplace avec son
            matériel portable Abrites — valise compacte et lecteur RFID — directement à votre
            véhicule. Délai typique : 25 à 35 minutes depuis le centre-ville.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#FFD700' }}>
            Aéroport Nice Côte d'Azur — clé perdue avant ou après un vol
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinouhé peut intervenir directement sur les niveaux P1 à P5 des terminaux T1 et T2.
            Conseil pratique : appelez immédiatement — si votre vol est dans moins d'une heure,
            signalez-le à l'appel, une solution partielle (accès au véhicule) peut être mise
            en place en attendant une reproduction complète à votre retour.
            Délai depuis le centre de Nice : 20 à 30 minutes hors embouteillages.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#FFD700' }}>
            Promenade des Anglais, Gare Nice-Ville, Quartier Libération
          </h3>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Parking de la Promenade (sous l'Hôtel Méridien), paking Thiers (gare SNCF),
            parking Jean-Médecin — ce sont des zones d'intervention classiques sur Nice.
            Aucune particularité d'accès particulière : délai 15 à 25 minutes depuis le centre-ville.
            En cas de situation urgente, consultez notre page{' '}
            <a href="/urgence-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>intervention d'urgence clé voiture</a>.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Clé de voiture à Antibes — Sophia Antipolis, Vieil Antibes, Port Vauban
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: '#374151' }}>
            Antibes est la deuxième ville d'intervention après Nice.
            Délai moyen : 30 à 40 minutes depuis Nice hors heure de pointe.
            Frais de déplacement : communiqués lors du devis téléphonique gratuit.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
            Sophia Antipolis — véhicules modernes, systèmes complexes
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Sophia Antipolis est une zone d'intervention régulière. Les collaborateurs du parc
            technologique roulent souvent avec des véhicules récents à systèmes de clé complexes
            (clé mains libres, badge, HITAG 3) — précisément le type d'intervention qui nécessite
            l'équipement Abrites de Sinouhé. Parkings de la zone : Eurosophia, Agora, INRIA.
            Le week-end, la circulation depuis Nice est allégée — délai réduit à 25-30 minutes.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
            Vieil Antibes et remparts — accès piéton comme dans le Vieux-Nice
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Les rues du centre historique (rue Aubernon, rue du Bas-Castelet) sont en zone
            piétonne. Sinouhé intervient à pied avec son matériel portable depuis le parking
            le plus proche. Stationnement limité sur les remparts : prévenir Sinouhé de votre
            emplacement précis pour optimiser le trajet à pied.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
            Port Vauban — plaisanciers et véhicules de passage
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Le Port Vauban est l'un des plus grands ports de plaisance de Méditerranée.
            Les plaisanciers de passage y laissent souvent leur véhicule plusieurs semaines —
            situation fréquente : batterie de télécommande déchargée ou clé introuvable
            au retour d'un séjour. Sinouhé intervient directement sur le parking du port.
          </p>

          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Pour un{' '}
            <a href="/depannage-cle-domicile/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>dépannage clé à domicile sur toute la zone</a>,
            Sinouhé se déplace directement à votre adresse avec son matériel complet.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Clé de voiture à Cagnes-sur-Mer — Hippodrome, Haut-de-Cagnes, Cros-de-Cagnes
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Délai depuis Nice : 20 à 30 minutes selon la zone de Cagnes visée.
            Chaque secteur a ses spécificités d'accès.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#FFD700' }}>
            Hippodrome de la Côte d'Azur — pics de demande les jours de courses
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Les journées de courses à l'Hippodrome (de novembre à mars) génèrent régulièrement
            des appels — des centaines de véhicules sur le parking, et l'excitation de
            l'événement favorise les oublis de clé. Le parking principal est directement
            accessible en véhicule depuis la route de Grenoble. Délai : 20 minutes depuis Nice.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#FFD700' }}>
            Haut-de-Cagnes — village médiéval perché, accès piéton
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Le village médiéval du Haut-de-Cagnes est accessible en voiture jusqu'au parking
            du Château, mais les ruelles intérieures sont piétonnes. Sinouhé stationne au
            parking extérieur et monte à pied avec son matériel portable.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#FFD700' }}>
            Cros-de-Cagnes — bord de mer, zone touristique
          </h3>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Le quartier balnéaire de Cros-de-Cagnes est bien desservi et accessible sans
            difficulté particulière. Parkings de bord de mer ouverts — zone d'intervention
            classique, délai 25 minutes depuis Nice.
          </p>
        </div>
      </section>

      {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
      <section className="bg-[#F0F3F7] py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Clé de voiture à Cannes — Festival, Croisette, La Bocca
          </h2>
          <p className="font-body leading-relaxed mb-6" style={{ color: '#374151' }}>
            Délai depuis Nice hors événements : 35 à 45 minutes.
            Pendant les grands événements cannois : 1h à 1h30 selon la circulation.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
            Palais des Festivals et Croisette — pics de demande pendant les événements
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Lors du Festival de Cannes (mai), du MIPIM (mars) ou des Cannes Lions (juin), la
            demande d'intervention bondit — visiteurs étrangers avec véhicules de location,
            clé de voiture oubliée dans l'agitation. Si vous êtes en période d'événement,
            signalez-le à l'appel : Sinouhé prévoit un délai adapté à la circulation.
            Parking de la Croisette et Parking Laubeuf — zones d'accès direct.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
            Rue d'Antibes et parkings souterrains
          </h3>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Artère commerçante principale de Cannes avec ses parkings souterrains (Parking des Vallergues,
            Parking Forville) — zone d'intervention classique en journée. Accès véhicule sans difficulté.
          </p>

          <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
            La Bocca — quartier résidentiel, couvert sans supplément
          </h3>
          <p className="font-body leading-relaxed mb-6" style={{ color: '#374151' }}>
            La Bocca à l'ouest de Cannes est couverte dans les mêmes conditions tarifaires
            que le centre-ville. Délai légèrement réduit depuis Nice via l'A8.
          </p>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: '#374151' }}>
            <p>"Merci beaucoup à Sinouhé et Inès — en 5 minutes il a réussi à rencoder une clé
            à Menton, ils nous ont sauvé la vie ! Entreprise très sérieuse."</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: '#6B7280' }}>
              — <strong style={{ color: '#111111' }}>Denis Ribes</strong>, avis Google · Décembre 2025
            </footer>
          </blockquote>

          <p className="font-body leading-relaxed" style={{ color: '#374151' }}>
            Pour en savoir plus sur nos services :{' '}
            <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>reproduction de clé voiture</a>{' '}
            ou{' '}
            <a href="/urgence-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>intervention d'urgence clé voiture</a>.
          </p>
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
            Questions pratiques — Délais, accès et logistique par zone
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
