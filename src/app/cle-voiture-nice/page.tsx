import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES, SINOUHE_FULL_ENTITY, AREA_SERVED_TYPED, SITE_URL } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconMapPin, IconCalendar, IconClock, IconWrench } from '@/components/ui/TrustStrip'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'
import StickyCTA from '@/components/ui/StickyCTA'

export const metadata: Metadata = {
 title: seoData['cle-voiture-nice'].title,
 description: seoData['cle-voiture-nice'].description,
 alternates: { canonical: 'https://sinnes.fr/cle-voiture-nice/' },
 openGraph: {
  title: seoData['cle-voiture-nice'].title,
  url: 'https://sinnes.fr/cle-voiture-nice/',
  images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
 },
}

const FAQ_ITEMS: FAQItem[] = [
 {
  question: "Y a-t-il des frais de déplacement pour les interventions hors Nice ?",
  answer: "À Nice : aucun frais de déplacement. Pour Antibes, Cagnes-sur-Mer et Cannes : des frais kilométriques peuvent s'appliquer, communiqués gratuitement lors du devis téléphonique. Appelez le +33 6 75 54 04 11 pour obtenir un prix précis selon votre adresse exacte.",
 },
 {
  question: "Pouvez-vous intervenir dans le Vieux-Nice ou le Vieil Antibes ?",
  answer: "Oui. Dans les zones piétonnes et les ruelles historiques inaccessibles en véhicule, Sinouhé Rochereau intervient à pied avec son matériel portable Abrites — valise compacte et lecteur RFID. La qualité et les tarifs de l'intervention sont identiques.",
 },
 {
  question: "Quel est le délai réaliste pour une intervention à Cannes depuis Nice ?",
  answer: "En dehors des heures de pointe (matin 7h-9h et soir 17h-20h), comptez 35 à 45 minutes depuis Nice. En heure de pointe ou lors d'événements cannois (Festival de Cannes, MIPIM), prévoir 1h à 1h30. Sinouhé vous confirme le délai exact lors de l'appel.",
 },
 {
  question: "Pouvez-vous intervenir au parking de l'aéroport Nice Côte d'Azur ?",
  answer: "Oui. Sinouhé Rochereau intervient directement aux niveaux P1 à P5 des parkings des terminaux T1 et T2. En cas de clé perdue avant un vol, appelez immédiatement le +33 6 75 54 04 11 — le délai d'intervention depuis le centre de Nice est généralement inférieur à 45 minutes.",
 },
 {
  question: "Intervenez-vous à Sophia Antipolis le week-end ?",
  answer: "Oui, 7j/7 y compris le week-end. Le parc technologique de Sophia Antipolis est moins chargé en circulation le week-end — délai d'intervention depuis Nice : 30 à 40 minutes. Appelez le +33 6 75 54 04 11.",
 },
]

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
 "@context": "https://schema.org",
 "@graph": [
  {
   "@type": "LocalBusiness",
   "@id": "https://sinnes.fr/cle-voiture-nice/#service",
   "name": "Clé de voiture Nice, Antibes, Cagnes-sur-Mer, Cannes",
   "description": "Service de reproduction et programmation de clé automobile à Nice et communes alentours. Intervention à domicile, chaque quartier connu.",
   "url": "https://sinnes.fr/cle-voiture-nice/",
   "telephone": NAP.phoneTel,
   "address": {
    "@type": "PostalAddress",
    "streetAddress": "4 rue Diderot",
    "addressLocality": "Nice",
    "postalCode": "06000",
    "addressCountry": "FR"
   },
   "areaServed": [
    ...AREA_SERVED_TYPED,
    { "@type": "City", "name": "Saint-Laurent-du-Var" },
    { "@type": "City", "name": "Villefranche-sur-Mer" }
   ],
   "employee": { "@id": TEAM.sinouhe.id },
   "parentOrganization": { "@id": `${SITE_URL}/#organization` }
  },
  getBreadcrumbSchema('https://sinnes.fr/cle-voiture-nice/', [
    { name: 'Accueil', item: 'https://sinnes.fr/' },
    { name: 'Serrurier automobile Nice', item: 'https://sinnes.fr/serrurier-automobile-nice/' },
    { name: 'Clé voiture Nice et alentours', item: 'https://sinnes.fr/cle-voiture-nice/' }
  ]),
  {
   "@type": "FAQPage",
   "mainEntity": FAQ_ITEMS.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": { "@type": "Answer", "text": item.answer }
   }))
  },
  SINOUHE_FULL_ENTITY,
  {
   "@type": "Person",
   "@id": TEAM.ines.id,
   "name": "Inès Barthelemy",
   "jobTitle": "Co-fondatrice, gestion et relation client",
   "worksFor": { "@id": `${SITE_URL}/#organization` }
  },
  getWebPageSchema('https://sinnes.fr/cle-voiture-nice/', '2026-03-12', '2026-03-23')
 ]
}

const steps = [
 { num: 1, title: 'Appelez', desc: `Contactez-nous au ${NAP.phoneDisplay} depuis n'importe où sur la Côte d'Azur` },
 { num: 2, title: 'Localisation', desc: 'Donnez votre adresse exacte : Nice, Antibes, Cagnes ou Cannes' },
 { num: 3, title: 'Déplacement', desc: 'Sinouhé arrive avec son matériel complet en moins de 2h' },
 { num: 4, title: 'Solution', desc: 'Clé opérationnelle sur place, toutes marques, garanti' },
]


const TRUST_ITEMS: TrustStripItem[] = [
 { icon: <IconMapPin className="w-8 h-8" />, label: 'Nice · Antibes · Cagnes · Cannes', sublabel: 'Zone d\'intervention', href: '/serrurier-automobile-nice/' },
 { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Week-ends et jours fériés' },
 { icon: <IconClock className="w-8 h-8" />, label: 'Intervention < 2h', sublabel: 'Sur la Côte d\'Azur', href: '/urgence-cle-voiture/' },
 { icon: <IconWrench className="w-8 h-8" />, label: 'Domicile inclus', sublabel: 'Intervention à domicile', href: '/depannage-cle-domicile/' },
]

const review = getReviewForPage('/cle-voiture-nice/')

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
   <section style={{ background: '#0A0A0A' }} className="pt-6 pb-6 px-4">
    <div className="container-sinnes">
     <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
      <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
      <span className="font-body text-white text-sm font-semibold">58 avis Google · 5.0/5</span>
     </div>

     <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6" style={{ color: '#FFFFFF' }}>
      {seoData['cle-voiture-nice'].h1}
     </h1>

     <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Chaque quartier de Nice, chaque zone de la Côte d'Azur a ses particularités d'accès.
      Sinouhé Rochereau connaît le terrain : ruelles piétonnes du Vieux-Nice, parkings
      d'aéroport, zones industrielles de Sophia Antipolis, remparts du Vieil Antibes.
      Il se déplace directement là où vous êtes, avec son matériel complet, 7j/7.
      Appelez le{' '}
      <a href={`tel:${NAP.phoneTel}`} className="font-bold hover:underline" style={{ color: '#EFAD42' }}>
       {NAP.phoneDisplay}
      </a>.
     </p>

     <a
      href={`tel:${NAP.phoneTel}`}
      className="btn-accent btn-urgence inline-flex items-center gap-3 font-body font-bold rounded-lg shadow-lg mb-8"
     >
       Devis gratuit : <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
     </a>

     <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <p className="text-sm border-l-4 border-[#EFAD42] pl-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
       Interventions techniques par <strong style={{ color: '#FFFFFF' }}>{TEAM.sinouhe.name}</strong> ·
       Expert programmation, formateur Incarline.
      </p>
      <p className="text-sm border-l-4 border-[#EFAD42] pl-4" style={{ color: 'rgba(255,255,255,0.6)' }}>
       Devis et suivi par <strong style={{ color: '#FFFFFF' }}>{TEAM.ines.name}</strong> ·
       Co-fondatrice, gestion et relation client.
      </p>
     </div>
    </div>
   </section>
   <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-cle-voiture-nice" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

   {/* SECTION 3 — PROCESS STEPS */}
   <section className="bg-white pt-6 pb-16 px-4">
    <div className="container-sinnes">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-10 text-center" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h2[0]}
     </h2>
     <ProcessSteps steps={steps} theme="light" />
    </div>
   </section>

   {/* AVIS GOOGLE RÉEL */}
   {review && <SingleReview review={review} serviceName="Clé de voiture Nice" serviceUrl="/cle-voiture-nice/" />}

   {/* TRUST STRIP */}
   <TrustStrip theme="light" items={TRUST_ITEMS} />


   {/* H2 BLOC 1 — dark */}
   <section style={{ background: '#111111' }} className="py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
      {seoData['cle-voiture-nice'].h2[1]}
     </h2>
     <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Nice est la ville principale d'intervention de Sinnes Automobiles.
      En tant que{' '}
      <a href="/serrurier-automobile-nice/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>serrurier automobile niçois</a>,
      Sinouhé Rochereau intervient sans supplément de déplacement sur l'ensemble de la ville,
      mais chaque quartier a ses propres réalités d'accès qu'il connaît parfaitement.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#EFAD42' }}>
      {seoData['cle-voiture-nice'].h3[0]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Les ruelles du Vieux-Nice (rue Droite, rue du Marché, cours Saleya) sont interdites
      aux véhicules motorisés de 11h à 19h30 en été. Le parking Saleya souterrain est
      accessible mais le déplacement interne se fait à pied. Sinouhé se déplace avec son
      matériel portable Abrites (valise compacte et lecteur RFID) directement à votre
      véhicule. Délai typique : 25 à 35 minutes depuis le centre-ville.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#EFAD42' }}>
      {seoData['cle-voiture-nice'].h3[1]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Sinouhé peut intervenir directement sur les niveaux P1 à P5 des terminaux T1 et T2.
      Conseil pratique : appelez immédiatement. Si votre vol est dans moins d'une heure,
      signalez-le à l'appel, une solution partielle (accès au véhicule) peut être mise
      en place en attendant une reproduction complète à votre retour.
      Délai depuis le centre de Nice : 20 à 30 minutes hors embouteillages.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#EFAD42' }}>
      {seoData['cle-voiture-nice'].h3[2]}
     </h3>
     <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Parking de la Promenade (sous l'Hôtel Méridien), paking Thiers (gare SNCF),
      parking Jean-Médecin : ce sont des zones d'intervention classiques sur Nice.
      Aucune particularité d'accès particulière : délai 15 à 25 minutes depuis le centre-ville.
      En cas de situation urgente, consultez notre page{' '}
      <a href="/urgence-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>intervention d'urgence clé voiture</a>.
     </p>
    </div>
   </section>

   {/* H2 BLOC 2 — light */}
   <section className="bg-white pt-16 pb-6 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h2[2]}
     </h2>
     <p className="font-body leading-relaxed mb-6" style={{ color: '#111111' }}>
      Antibes est la deuxième ville d'intervention après Nice.
      Délai moyen : 30 à 40 minutes depuis Nice hors heure de pointe.
      Frais de déplacement : communiqués lors du devis téléphonique gratuit.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h3[3]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Sophia Antipolis est une zone d'intervention régulière. Les collaborateurs du parc
      technologique roulent souvent avec des véhicules récents à systèmes de clé complexes
      (clé mains libres, badge, HITAG 3), précisément le type d'intervention qui nécessite
      l'équipement Abrites de Sinouhé. Parkings de la zone : Eurosophia, Agora, INRIA.
      Le week-end, la circulation depuis Nice est allégée, délai réduit à 25-30 minutes.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h3[4]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Les rues du centre historique (rue Aubernon, rue du Bas-Castelet) sont en zone
      piétonne. Sinouhé intervient à pied avec son matériel portable depuis le parking
      le plus proche. Stationnement limité sur les remparts : prévenir Sinouhé de votre
      emplacement précis pour optimiser le trajet à pied.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h3[5]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Le Port Vauban est l'un des plus grands ports de plaisance de Méditerranée.
      Les plaisanciers de passage y laissent souvent leur véhicule plusieurs semaines,
      situation fréquente : batterie de télécommande déchargée ou clé introuvable
      au retour d'un séjour. Sinouhé intervient directement sur le parking du port.
     </p>

     <p className="font-body leading-relaxed mb-8" style={{ color: '#111111' }}>
      Pour un{' '}
      <a href="/depannage-cle-domicile/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>dépannage clé à domicile sur toute la zone</a>,
      Sinouhé se déplace directement à votre adresse avec son matériel complet.
     </p>
    </div>
   </section>

   <div style={{ background: '#111111' }}><div className="container-sinnes"><DiagonalDivider id="dd-nice-2" icon={<SteeringWheelIcon size={42} color="#EFAD42" />} color="#EFAD42" /></div></div>

   {/* H2 BLOC 3 — dark */}
   <section style={{ background: '#111111' }} className="pt-6 pb-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
      {seoData['cle-voiture-nice'].h2[3]}
     </h2>
     <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Délai depuis Nice : 20 à 30 minutes selon la zone de Cagnes visée.
      Chaque secteur a ses spécificités d'accès.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#EFAD42' }}>
      {seoData['cle-voiture-nice'].h3[6]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Les journées de courses à l'Hippodrome (de novembre à mars) génèrent régulièrement
      des appels : des centaines de véhicules sur le parking, et l'excitation de
      l'événement favorise les oublis de clé. Le parking principal est directement
      accessible en véhicule depuis la route de Grenoble. Délai : 20 minutes depuis Nice.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#EFAD42' }}>
      {seoData['cle-voiture-nice'].h3[7]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Le village médiéval du Haut-de-Cagnes est accessible en voiture jusqu'au parking
      du Château, mais les ruelles intérieures sont piétonnes. Sinouhé stationne au
      parking extérieur et monte à pied avec son matériel portable.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#EFAD42' }}>
      {seoData['cle-voiture-nice'].h3[8]}
     </h3>
     <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
      Le quartier balnéaire de Cros-de-Cagnes est bien desservi et accessible sans
      difficulté particulière. Parkings de bord de mer ouverts, zone d'intervention
      classique, délai 25 minutes depuis Nice.
     </p>
    </div>
   </section>

   {/* H2 BLOC 4 — bg-[#F0F3F7] shade */}
   <section className="bg-[#F0F3F7] py-16 px-4">
    <div className="container-sinnes max-w-3xl">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h2[4]}
     </h2>
     <p className="font-body leading-relaxed mb-6" style={{ color: '#111111' }}>
      Délai depuis Nice hors événements : 35 à 45 minutes.
      Pendant les grands événements cannois : 1h à 1h30 selon la circulation.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h3[9]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Lors du Festival de Cannes (mai), du MIPIM (mars) ou des Cannes Lions (juin), la
      demande d'intervention bondit : visiteurs étrangers avec véhicules de location,
      clé de voiture oubliée dans l'agitation. Si vous êtes en période d'événement,
      signalez-le à l'appel : Sinouhé prévoit un délai adapté à la circulation.
      Parking de la Croisette et Parking Laubeuf : zones d'accès direct.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h3[10]}
     </h3>
     <p className="font-body leading-relaxed mb-4" style={{ color: '#111111' }}>
      Artère commerçante principale de Cannes avec ses parkings souterrains (Parking des Vallergues,
      Parking Forville) : zone d'intervention classique en journée. Accès véhicule sans difficulté.
     </p>

     <h3 className="font-heading font-bold text-lg mb-2" style={{ color: '#111111' }}>
      {seoData['cle-voiture-nice'].h3[11]}
     </h3>
     <p className="font-body leading-relaxed mb-6" style={{ color: '#111111' }}>
      La Bocca à l'ouest de Cannes est couverte dans les mêmes conditions tarifaires
      que le centre-ville. Délai légèrement réduit depuis Nice via l'A8.
     </p>
     <p className="font-body leading-relaxed mb-6" style={{ color: '#111111' }}>
      Sur l'ensemble de cette zone, chaque intervention suit le même protocole : diagnostic
      du système immobiliseur, taille laser de la lame à la côte exacte du véhicule, puis
      programmation du transpondeur via valise Abrites ou ZedFull. Toutes marques, tous
      systèmes — du simple plip au badge mains libres crypté. Pour le détail complet de
      cette méthode, consultez notre page{' '}
      <a href="/reproduction-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>
        reproduction de clé voiture à Nice
      </a>.
     </p>
    </div>
   </section>

   {/* SECTION 7 — CTA MILIEU */}
   <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#EFAD42]/20 text-center">
    <div className="container-sinnes">
     <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
      {seoData['cle-voiture-nice'].h2[5]}
     </h2>
     <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
      7j/7 · Nice · Antibes · Cagnes · Cannes · Devis gratuit
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
      {seoData['cle-voiture-nice'].h2[6]}
     </h2>
     <FAQAccordion items={FAQ_ITEMS} />
    </div>
   </section>

   {/* SECTION 9 — CTA BAS + STICKY MOBILE */}
   <div className="text-center py-12 bg-bg-shade">
    <a
     href={`tel:${NAP.phoneTel}`}
     className="btn-accent btn-urgence inline-flex items-center gap-3 font-body font-bold rounded-lg shadow-lg"
    >
     URGENCE : {NAP.phoneDisplay}
    </a>
    <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Nice et Côte d'Azur</p>
   </div>

   <StickyCTA 
    variant={seoData['cle-voiture-nice'].ctas.sticky.variant} 
    label={seoData['cle-voiture-nice'].ctas.sticky.label} 
   />
  </>
 )
}
