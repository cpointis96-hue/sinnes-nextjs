import type { Metadata } from 'next'
import Image from 'next/image'
import { NAP, ORG, PRICES } from '@/constants/siteConfig'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'
import FAQAccordion from './FAQAccordion'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Serrurier Automobile Nice — Intervention 7j/7',
  description:
    "Serrurier automobile à Nice spécialisé clé de voiture. Intervention 7j/7, Antibes, Cannes, Côte d'Azur. Devis gratuit — +33 6 75 54 04 11",
  alternates: { canonical: 'https://sinnes.fr/serrurier-automobile-nice/' },
  openGraph: {
    title: 'Serrurier Automobile Nice — Sinnes Automobiles',
    url: 'https://sinnes.fr/serrurier-automobile-nice/',
    images: [{ url: '/images/cle-de-voiture-nice-1024x683.jpg', width: 1024, height: 683 }],
  },
}

// ─────────────────────────────────────────────────────────────
// SCHEMA JSON-LD
// ─────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/serrurier-automobile-nice/#service',
      name: 'Serrurier automobile à Nice',
      provider: { '@id': 'https://sinnes.fr/#organization' },
      areaServed: [
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Cannes' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
        { '@type': 'ListItem', position: 2, name: 'Serrurier automobile Nice', item: 'https://sinnes.fr/serrurier-automobile-nice/' },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: "Quel est le délai d'intervention d'un serrurier automobile à Nice ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Sinnes Automobiles intervient généralement en moins de 2h sur Nice et les communes voisines. Disponible 7j/7, y compris week-ends et jours fériés, sur rendez-vous.",
          },
        },
        {
          '@type': 'Question',
          name: 'Combien coûte un serrurier automobile à Nice ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Le tarif dépend du type de clé : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres. Devis gratuit sur demande.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous aussi à Antibes, Cannes et Cagnes-sur-Mer ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Sinnes Automobiles couvre Nice, Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer et toute la Côte d'Azur.",
          },
        },
        {
          '@type': 'Question',
          name: "Est-il possible d'ouvrir une voiture sans casser la serrure ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, dans la plupart des cas. Sinouhé Rochereau utilise des techniques de crochetage professionnel sans effraction, préservant intégralement la serrure et la carrosserie.",
          },
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://sinnes.fr/#sinouhe',
      name: 'Sinouhé Rochereau',
      jobTitle: 'Expert en programmation de clés automobiles',
      worksFor: { '@id': 'https://sinnes.fr/#organization' },
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

const TRUST_ITEMS: TrustStripItem[] = [
  { icon: <IconEuro className="w-8 h-8" />, label: `${PRICES.cleSimple.sinnes} €`, sublabel: 'À partir de', href: '/tarif-cle-voiture/' },
  { icon: <IconCalendar className="w-8 h-8" />, label: '7j/7', sublabel: 'Nice · Antibes · Cagnes · Cannes', href: '/urgence-cle-voiture/' },
  { icon: <IconWrench className="w-8 h-8" />, label: '40+ marques', sublabel: 'Renault, BMW, Toyota, Mercedes…' },
  { icon: <IconShield className="w-8 h-8" />, label: 'Garantie préservée', sublabel: 'Programmation officielle Abrites · ZedFull', href: '/reproduction-cle-voiture/' },
]

export default function SerrurierAutomobileNicePage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ── BREADCRUMB ── */}
      <nav aria-label="Fil d'Ariane" className="py-3 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li><a href="/" className="hover:text-primary transition-colors">Accueil</a></li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page" className="text-text-main">Serrurier automobile Nice</li>
          </ol>
        </div>
      </nav>

      {/* ── HERO — CTA urgence + H1 + answer-first ── */}
      <section style={{ background: '#0A0A0A' }} className="py-12 md:py-16">
        <div className="container-sinnes">

          {/* Badge avis — above the fold */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="text-[#FFD700] text-lg" aria-hidden="true">★★★★★</span>
            <span className="font-body text-sm font-semibold text-white">57 avis Google · 5.0/5</span>
          </div>

          {/* CTA urgence — position haute */}
          <div className="mb-8">
            <a
              href={`tel:${NAP.phoneTel}`}
              className="inline-flex items-center gap-3 bg-[#e53935] text-white font-body font-bold
                         text-lg md:text-xl px-6 md:px-8 py-4 rounded-lg min-h-[56px]
                         hover:bg-[#c62828] transition-colors shadow-lg"
              aria-label={`Urgence serrurier automobile Nice — Appeler ${NAP.phoneDisplay}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              URGENCE — {NAP.phoneDisplay}
            </a>
            <p className="text-xs mt-2 font-body" style={{ color: 'rgba(255,255,255,0.6)' }}>7j/7 · Intervention rapide · Devis gratuit</p>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
            Serrurier automobile à Nice — Intervention 7j/7
          </h1>

          {/* Answer-first — 100 premiers mots */}
          <div className="max-w-3xl">
            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {ORG.name} est votre serrurier automobile à Nice, disponible 7j/7 pour toute
              intervention sur votre clé de voiture. Perte de clé, double préventif, clé bloquée
              dans le contact, ouverture sans effraction : nous intervenons directement là où vous
              êtes — domicile, lieu de travail, parking — sur Nice, Antibes, Cagnes-sur-Mer et Cannes.
              Tarifs à partir de {PRICES.cleSimple.sinnes}€. Devis gratuit, sans frais cachés.
              Appelez maintenant :{' '}
              <a href={`tel:${NAP.phoneTel}`} className="font-bold hover:underline" style={{ color: '#FFD700' }}>
                {NAP.phoneDisplay}
              </a>.
            </p>
            <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Besoin d'une{' '}
              <a href="/cle-voiture-nice/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>
                clé de voiture à Nice et alentours
              </a>{' '}
              ou d'un{' '}
              <a href="/depannage-cle-domicile/" className="font-semibold hover:underline" style={{ color: '#FFD700' }}>
                intervention à domicile
              </a>{' '}
              dans les meilleurs délais ? Contactez-nous.
            </p>
          </div>

          {/* Byline Sinouhé — obligatoire */}
          <p className="font-body text-sm border-l-4 border-[#FFD700] pl-4 mt-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention assurée par <strong style={{ color: '#FFFFFF' }}>Sinouhé Rochereau</strong> — Expert en programmation
            de clés automobiles, formateur international chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* ── CORPS PRINCIPAL ── */}
      <article className="bg-white py-16">
        <div className="container-sinnes max-w-[860px]">

          {/* H2 #1 — Différenciation */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6">
            Serrurier automobile à Nice : spécialiste clé de voiture, pas serrurier maison
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Il existe une différence fondamentale entre un serrurier de portes et un serrurier
            automobile. Chez {ORG.name}, nous intervenons exclusivement sur les véhicules — notre
            expertise est pointue, nos outils sont professionnels : valise de diagnostic Abrites,
            ZedFull, lecteur RFID pour les puces ID46, ID48 et HITAG. Aucun généraliste ne dispose
            de ces équipements.
          </p>
          <p className="font-body text-text-main leading-relaxed mb-8">
            Nos services de{' '}
            <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">
              reproduction de clé
            </a>{' '}
            couvrent tous les types de véhicules : clé simple mécanique, clé centralisée à
            télécommande, clé mains libres et badge électronique. Chaque intervention est réalisée
            par Sinouhé Rochereau, formateur certifié et expert reconnu sur la Côte d'Azur.
          </p>

          {/* H2 #2 — Autour de moi (KD 8) */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6">
            Besoin d'un serrurier automobile autour de vous à Nice ?
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Appelez le{' '}
            <a href={`tel:${NAP.phoneTel}`} className="text-[#e53935] font-bold">
              {NAP.phoneDisplay}
            </a>{' '}
            — intervention sous 2h dans toute la zone. Nous couvrons Nice, Antibes, Cagnes-sur-Mer,
            Cannes, Saint-Laurent-du-Var, Villefranche-sur-Mer, Menton, Grasse, Vence et Mougins.
            Pour toute intervention locale, consultez notre page{' '}
            <a href="/cle-voiture-nice/" className="text-primary font-semibold hover:underline">
              clé de voiture à Nice et alentours
            </a>.
          </p>

          {/* H3 — Vieux-Nice */}
          <h3 className="font-heading font-bold text-xl text-third mt-8 mb-3">
            Intervention à pied dans le Vieux-Nice
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-6">
            Les ruelles du Vieux-Nice, le parking souterrain Saleya et les zones piétonnes
            autour du marché du Cours Saleya sont inaccessibles aux véhicules d'intervention.
            Sinouhé se déplace à pied avec son matériel portable — valise de diagnostic compacte,
            lecteur RFID — pour intervenir directement sur place, sans déplacer votre véhicule.
          </p>

          {/* H3 — Aéroport */}
          <h3 className="font-heading font-bold text-xl text-third mt-8 mb-3">
            Zone aéroport Nice Côte d'Azur
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-6">
            Vous avez perdu vos clés en arrivant à l'aéroport de Nice Côte d'Azur ?
            Nous intervenons directement au parking des terminaux T1 et T2. Une situation
            fréquente, souvent résolue en moins d'une heure après votre appel.
          </p>

          {/* H3 — Sophia + Antibes */}
          <h3 className="font-heading font-bold text-xl text-third mt-8 mb-3">
            Sophia Antipolis et Antibes
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-6">
            Les collaborateurs du parc technologique de Sophia Antipolis font partie de nos clients
            réguliers — clé restée dans le bureau, badge endommagé, télécommande défaillante.
            Nous couvrons également le Vieil Antibes, le Port Vauban et les remparts historiques.
          </p>

          {/* H3 — Cannes */}
          <h3 className="font-heading font-bold text-xl text-third mt-8 mb-3">
            Cannes et Grasse
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-8">
            Du Palais des Festivals à La Bocca en passant par la Rue d'Antibes, nous intervenons
            sur tout le territoire cannois. La zone de Grasse et ses environs sont également
            couverts — contactez-nous pour confirmer le délai selon votre localisation exacte.
          </p>

          {/* H2 #3 — Urgence (KD 7) */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6">
            Serrurier automobile d'urgence Nice — Clé bloquée, perdue ou cassée
          </h2>

          {/* CTA urgence intégré */}
          <div className="bg-[#e53935]/5 border-l-4 border-[#e53935] pl-6 py-4 mb-6 rounded-r-lg">
            <p className="font-body text-text-main mb-3">
              Situation d'urgence ? Ne restez pas bloqué.
            </p>
            <a
              href={`tel:${NAP.phoneTel}`}
              className="inline-flex items-center gap-2 bg-[#e53935] text-white font-body font-bold
                         px-6 py-3 rounded-lg min-h-[44px] hover:bg-[#c62828] transition-colors"
            >
              Appeler maintenant — {NAP.phoneDisplay}
            </a>
          </div>

          <p className="font-body text-text-main leading-relaxed mb-4">
            Le process est simple : vous appelez, nous convenons d'un RDV immédiat, nous
            intervenons sur place. Pas d'attente, pas de surfacturation d'urgence — le devis
            est gratuit et le prix est identique 7j/7. Pour un{' '}
            <a href="/urgence-cle-voiture/" className="text-primary font-semibold hover:underline">
              dépannage urgence clé
            </a>{' '}
            dans les Alpes-Maritimes, Sinnes est disponible à toute heure.
          </p>

          {/* Avis Denis Ribes — cas concret daté */}
          <blockquote className="border-l-4 border-accent pl-4 italic text-text-muted my-8 bg-bg-shade py-4 pr-4 rounded-r-lg">
            <p className="font-body">
              &ldquo;Merci beaucoup à Sinouhé et Inès — en 5 minutes il a réussi à rencoder une clé
              à Menton, ils nous ont sauvé la vie ! Entreprise très sérieuse, recommandation +++.&rdquo;
            </p>
            <footer className="font-body text-sm mt-2 not-italic">
              — <strong>Denis Ribes</strong>, avis Google · Décembre 2025
            </footer>
          </blockquote>

          {/* H2 #4 — Nos interventions */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6 mt-12">
            Nos interventions de serrurier automobile à Nice
          </h2>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            Ouverture de véhicule sans effraction
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Porte claquée, clé restée à l'intérieur, serrure bloquée — Sinouhé utilise des
            techniques de crochetage professionnel qui préservent intégralement la serrure et
            la carrosserie. Aucun dégât, aucune trace d'intervention.
          </p>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            Reproduction et double de clé de voiture
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Un double de clé préventif vous protège d'une perte future. Taille laser +
            programmation de la puce transpondeur en une seule intervention. Tous les constructeurs
            sont pris en charge.
          </p>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            Programmation de clé et transpondeur
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-4">
            La valise Abrites et l'outil ZedFull permettent de programmer les puces RFID
            (ID46, ID48), les systèmes de centralisation et les immobiliseurs de nouvelle
            génération. Chaque clé est testée au démarrage avant notre départ.
          </p>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            Clé perdue sans double existant
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-8">
            C'est le cas le plus complexe — mais pas impossible. Sans clé existante, la
            programmation est réalisée via lecture directe de l'immobiliseur du calculateur.
            Résultat : une nouvelle clé fonctionnelle à partir de {PRICES.perteTotale.sinnes}€.
            Pour en savoir plus sur notre processus, découvrez notre service d'{' '}
            <a href="/depannage-cle-domicile/" className="text-primary font-semibold hover:underline">
              intervention à domicile
            </a>.
          </p>

          {/* H2 #5 — Tarifs */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6 mt-12">
            Tarifs serrurier automobile Nice — Transparence totale
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-6">
            Chez {ORG.name}, pas de surprises. Le devis est gratuit, les prix sont affichés.
            Voici notre grille tarifaire comparée au concessionnaire :
          </p>

          {/* Tableau des tarifs */}
          <div className="overflow-x-auto mb-8">
            <table className="w-full border-collapse font-body text-sm md:text-base">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="text-left p-3 font-bold rounded-tl-lg">Type de clé</th>
                  <th className="text-center p-3 font-bold">Prix Sinnes</th>
                  <th className="text-center p-3 font-bold rounded-tr-lg">Prix concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-card-border">
                  <td className="p-3">Clé simple (sans télécommande)</td>
                  <td className="p-3 text-center font-bold text-primary">À partir de {PRICES.cleSimple.sinnes}€</td>
                  <td className="p-3 text-center text-text-muted">{PRICES.cleSimple.concessionnaire.min}-{PRICES.cleSimple.concessionnaire.max}€</td>
                </tr>
                <tr className="bg-bg-shade border-b border-card-border">
                  <td className="p-3">Clé centralisée (télécommande)</td>
                  <td className="p-3 text-center font-bold text-primary">À partir de {PRICES.cleCentralisee.sinnes}€</td>
                  <td className="p-3 text-center text-text-muted">{PRICES.cleCentralisee.concessionnaire.min}-{PRICES.cleCentralisee.concessionnaire.max}€</td>
                </tr>
                <tr className="bg-white border-b border-card-border">
                  <td className="p-3">Clé mains libres / badge</td>
                  <td className="p-3 text-center font-bold text-primary">À partir de {PRICES.cleMainsLibres.sinnes}€</td>
                  <td className="p-3 text-center text-text-muted">{PRICES.cleMainsLibres.concessionnaire.min}-{PRICES.cleMainsLibres.concessionnaire.max}€</td>
                </tr>
                <tr className="bg-bg-shade">
                  <td className="p-3 rounded-bl-lg">Perte totale (sans double)</td>
                  <td className="p-3 text-center font-bold text-primary">À partir de {PRICES.perteTotale.sinnes}€</td>
                  <td className="p-3 text-center text-text-muted rounded-br-lg">{PRICES.perteTotale.concessionnaire.min}-{PRICES.perteTotale.concessionnaire.max}€</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="text-center mb-12">
            <a
              href={`tel:${NAP.phoneTel}`}
              className="btn-accent inline-flex items-center gap-2 px-8 py-4"
            >
              Devis gratuit — {NAP.phoneDisplay}
            </a>
          </div>

        </div>
      </article>

      {/* ── CTA URGENCE MILIEU DE PAGE ── */}
      <section className="bg-[#e53935] py-16 text-center text-white">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Serrurier automobile à Nice disponible maintenant ?
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            7j/7 · Devis gratuit · Intervention rapide · Toutes marques
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block bg-white text-[#e53935] font-body font-bold text-2xl
                       px-12 py-5 rounded-lg min-h-[56px] hover:bg-gray-50 transition-colors shadow-lg"
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* ── FAQ VISUEL (accordéon) ── */}
      <section className="bg-bg-shade py-16">
        <div className="container-sinnes max-w-[860px]">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-10">
            Questions fréquentes — Serrurier automobile à Nice
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* ── CTA BAS DE PAGE ── */}
      <section className="bg-white py-12 text-center">
        <div className="container-sinnes">
          <a
            href={`tel:${NAP.phoneTel}`}
            className="btn-accent btn-urgence inline-flex items-center gap-2 text-lg px-10 py-4 min-h-[56px]"
          >
            Appeler maintenant — {NAP.phoneDisplay}
          </a>
          <p className="font-body text-sm text-text-muted mt-3">7j/7 · Intervention rapide · Devis gratuit</p>
        </div>
      </section>

    </>
  )
}
