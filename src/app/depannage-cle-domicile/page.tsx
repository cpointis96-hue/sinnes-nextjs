import type { Metadata } from 'next'
import { NAP, TEAM, PRICES } from '@/constants/siteConfig'
import ProcessSteps from '@/components/ui/ProcessSteps'
import TrustStrip, { TrustStripItem, IconWrench, IconCalendar, IconShield, IconMapPin } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

export const metadata: Metadata = {
  title: "Dépannage clé voiture à domicile — Nice et Côte d'Azur",
  description: 'Dépannage et programmation de clé voiture à domicile à Nice. Intervention sur place 7j/7. Sinouhé Rochereau se déplace avec son matériel. +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/depannage-cle-domicile/' },
  openGraph: {
    title: 'Dépannage clé voiture à domicile — Sinnes Nice',
    url: 'https://sinnes.fr/depannage-cle-domicile/',
  },
}

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://sinnes.fr/depannage-cle-domicile/#service",
      "name": "Dépannage clé voiture à domicile",
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
        { "@type": "ListItem", "position": 2, "name": "Dépannage clé domicile", "item": "https://sinnes.fr/depannage-cle-domicile/" }
      ]
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Est-ce possible de programmer une clé voiture à domicile ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sinouhé Rochereau dispose d'équipements portables (valise Abrites, machine à taille laser portative) permettant de réaliser l'intégralité de l'intervention à votre domicile, sur votre lieu de travail ou sur un parking. Pas besoin de déplacer votre véhicule." }
        },
        {
          "@type": "Question",
          "name": "Y a-t-il des frais de déplacement pour une intervention à domicile ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Pas de frais de déplacement pour les interventions à Nice. Des frais kilométriques peuvent s'appliquer pour les communes éloignées (Cannes, Grasse, Menton). Tarif communiqué gratuitement par téléphone avant l'intervention." }
        },
        {
          "@type": "Question",
          "name": "Apportez-vous tout le matériel nécessaire ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Sinouhé Rochereau se déplace avec son matériel complet : valise de diagnostic Abrites, machine à taille de clé portative, stock de lames vierges et puces transpondeurs toutes marques. L'intervention complète est réalisée sur place en une visite." }
        },
        {
          "@type": "Question",
          "name": "Couvrez-vous toute la Côte d'Azur pour les interventions à domicile ?",
          "acceptedAnswer": { "@type": "Answer", "text": "Oui. Nice, Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer, Menton, Grasse, Vence, Mougins. Contactez-nous au +33 6 75 54 04 11 pour confirmer la disponibilité dans votre zone." }
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
  { num: 1, title: 'Appelez', desc: 'Donnez votre adresse et votre marque de véhicule' },
  { num: 2, title: 'Déplacement', desc: 'Sinouhé arrive avec son matériel complet — valise Abrites, machine à taille laser' },
  { num: 3, title: 'Intervention', desc: 'Tout est réalisé sur place : décodage, taillage, programmation' },
  { num: 4, title: 'Repartez', desc: 'Clé opérationnelle sans avoir bougé de chez vous' },
]


const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconWrench className="w-8 h-8" />, label: 'Matériel complet', sublabel: 'Abrites · Machine taille laser' },
  { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Domicile · Bureau · Parking' },
  { icon: <IconMapPin className="w-8 h-8" />, label: 'Toute la Côte d\'Azur', sublabel: 'Nice et alentours', href: '/cle-voiture-nice/' },
  { icon: <IconShield className="w-8 h-8" />, label: '0€ frais Nice', sublabel: 'Sans frais de déplacement' },
]

export default function DepannageCledomicilePage() {
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
            <li aria-current="page" className="text-text">Dépannage clé domicile</li>
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
            Dépannage clé voiture à domicile —<br />Intervention sur place Nice
          </h1>

          <p className="font-body text-lg leading-relaxed mb-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Sinnes Automobiles vient chez vous. Sinouhé Rochereau se déplace avec son matériel
            complet — valise Abrites portable, machine à taille laser, stock de lames et
            transpondeurs toutes marques. Programmation clé voiture à domicile, dépannage
            sur place, double ou reproduction : tout est fait en une seule visite.
            7j/7, à partir de {PRICES.cleSimple.sinnes}€. Appelez le {NAP.phoneDisplay}.
          </p>

          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-flex items-center gap-3 bg-accent text-text-inverse font-body font-bold
                       text-xl px-8 py-4 rounded-lg min-h-[56px] hover:bg-accent-dark transition-colors mb-8"
          >
            Devis gratuit — {NAP.phoneDisplay}
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
            Comment se passe le dépannage à domicile ?
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
            Programmation clé voiture à domicile — comment ça marche ?
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            La programmation clé voiture à domicile est possible grâce aux équipements portables
            professionnels de Sinouhé Rochereau. La valise Abrites fonctionne en mode USB portable
            avec un laptop dédié. La machine à taille de clé portative reproduit une lame avec
            la même précision que les machines d'atelier. Stock de lames vierges et de puces
            transpondeurs toutes marques embarqué dans le véhicule de Sinouhé.
          </p>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Résultat : pas besoin de remorquer votre véhicule, pas besoin de vous déplacer.
            L'intervention complète — décodage de la serrure, taillage de la lame, programmation
            du transpondeur — se passe en une seule visite à votre adresse. Pour le <a href="/serrurier-automobile-nice/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>serrurier automobile à Nice</a>,
            c'est l'option la plus pratique.
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Cette approche est particulièrement appréciée dans les situations où le véhicule
            est immobilisé : clé perdue (le véhicule ne peut pas se déplacer par lui-même),
            clé bloquée dans le contact, ou simplement commodité d'une intervention sans
            se déplacer à l'atelier.
          </p>
        </div>
      </section>

      {/* H2 BLOC 2 — light */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#111111' }}>
            Zones d'intervention à domicile
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: '#374151' }}>
            Sinnes Automobiles intervient à domicile sur l'ensemble de la Côte d'Azur :
          </p>
          <ul className="list-none space-y-2 mb-4 pl-4" style={{ color: '#374151' }}>
            <li className="font-body">— <strong style={{ color: '#111111' }}>Nice</strong> : sans frais de déplacement, tous quartiers</li>
            <li className="font-body">— <strong style={{ color: '#111111' }}>Saint-Laurent-du-Var, Cagnes-sur-Mer</strong> : frais réduits</li>
            <li className="font-body">— <strong style={{ color: '#111111' }}>Antibes, Sophia Antipolis, Juan-les-Pins</strong> : frais kilométriques standard</li>
            <li className="font-body">— <strong style={{ color: '#111111' }}>Cannes, Mougins, Grasse</strong> : frais communiqués lors du devis</li>
            <li className="font-body">— <strong style={{ color: '#111111' }}>Villefranche, Beaulieu, Monaco, Menton</strong> : frais communiqués lors du devis</li>
          </ul>
          <p className="font-body leading-relaxed mb-8" style={{ color: '#374151' }}>
            Tous les frais de déplacement éventuels sont communiqués gratuitement avant toute
            intervention. Pour la <a href="/cle-voiture-nice/" className="font-semibold hover:underline" style={{ color: '#e53935' }}>clé de voiture à Nice et alentours</a>,
            consultez notre page dédiée à chaque ville.
          </p>
        </div>
      </section>

      {/* H2 BLOC 3 — dark */}
      <section style={{ background: '#111111' }} className="py-16 px-4">
        <div className="container-sinnes max-w-3xl">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#FFFFFF' }}>
            Dépannage d'urgence à domicile
          </h2>
          <p className="font-body leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            En situation d'urgence — clé perdue, véhicule immobilisé — Sinouhé peut intervenir
            en moins de 2h sur Nice. Le dépannage à domicile en urgence suit exactement le
            même processus que l'intervention programmée, avec la même qualité d'exécution
            et les mêmes tarifs (pas de surprime urgence cachée).
          </p>
          <p className="font-body leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Pour les situations d'urgence immédiate, consultez notre page <a href="/urgence-cle-voiture/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>urgence clé voiture</a>.
          </p>

          <blockquote className="border-l-4 border-[#FFD700] pl-4 italic my-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <p>"Rapide, sérieux et efficace!"</p>
            <footer className="text-sm mt-2 not-italic" style={{ color: 'rgba(255,255,255,0.5)' }}>
              — <strong style={{ color: '#FFFFFF' }}>Dylan D.</strong>, avis Google · Février 2026
            </footer>
          </blockquote>
        </div>
      </section>

      {/* SECTION 7 — CTA MILIEU */}
      <section style={{ background: '#1A1A1A' }} className="py-12 border-y border-[#FFD700]/20 text-center">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4" style={{ color: '#FFFFFF' }}>
            Intervention à domicile sur la Côte d'Azur
          </h2>
          <p className="font-body mb-6" style={{ color: 'rgba(255,255,255,0.7)' }}>
            7j/7 · Nice sans frais de déplacement · Devis gratuit
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
            Questions fréquentes — Dépannage clé à domicile
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
