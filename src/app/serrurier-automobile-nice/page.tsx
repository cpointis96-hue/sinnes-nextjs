import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import Image from 'next/image'
import { NAP, ORG, PRICES, SINOUHE_FULL_ENTITY, AREA_SERVED_TYPED, SITE_URL } from '@/constants/siteConfig'
import TrustStrip, { TrustStripItem, IconEuro, IconCalendar, IconWrench, IconShield } from '@/components/ui/TrustStrip'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: seoData['serrurier-automobile-nice'].title,
  description: seoData['serrurier-automobile-nice'].description,
  alternates: { canonical: 'https://sinnes.fr/serrurier-automobile-nice/' },
  openGraph: {
    title: seoData['serrurier-automobile-nice'].title,
    url: 'https://sinnes.fr/serrurier-automobile-nice/',
    images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
  },
}

// ─────────────────────────────────────────────────────────────
// SCHEMA JSON-LD
// ─────────────────────────────────────────────────────────────

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Quelle est la différence entre un serrurier automobile et un serrurier de portes ?',
    answer: 'Un serrurier automobile est spécialisé exclusivement sur les véhicules : programmation de transpondeur, décodage de serrure de véhicule, duplication de clé avec puce électronique. Un serrurier de portes n\'a pas les équipements pour programmer les systèmes immobiliseurs modernes (valise Abrites, ZedFull). Sinnes Automobiles n\'intervient que sur les véhicules — c\'est notre seul métier.',
  },
  {
    question: 'Combien coûte un serrurier automobile à Nice ?',
    answer: `Le tarif dépend du type de clé : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres, ${PRICES.perteTotale.sinnes}€ en cas de perte totale sans double. Devis gratuit, prix identique 7j/7 — aucune majoration d'urgence.`,
  },
  {
    question: 'Quels outils utilise un vrai serrurier automobile professionnel ?',
    answer: 'Un serrurier automobile professionnel utilise une valise de diagnostic homologuée (chez Sinnes : Abrites et ZedFull), un lecteur RFID pour identifier les puces transpondeur (ID46, ID48, HITAG 2), un outil de décodage mécanique pour lire le code de la serrure sans clé d\'origine, et une fraiseuse laser ou à codes pour tailler la clé. Sans ces équipements, un technicien ne peut pas programmer les clés des véhicules modernes.',
  },
  {
    question: 'La garantie constructeur est-elle préservée après l\'intervention d\'un serrurier automobile ?',
    answer: 'Oui, si le serrurier utilise les bons outils et les bonnes méthodes. Sinouhé Rochereau, formateur certifié chez Incarline, programme les clés selon les normes constructeurs. La procédure de programmation officielle (via OBD ou accès direct à l\'immobiliseur) est identique à celle du concessionnaire — la garantie est donc entièrement préservée.',
  },
  {
    question: 'Est-il possible d\'ouvrir une voiture sans casser la serrure ?',
    answer: 'Oui, dans la plupart des cas. Sinouhé Rochereau utilise des techniques de crochetage professionnel sans effraction — ni dégât sur la serrure, ni trace sur la carrosserie. La technique varie selon le modèle et la génération du véhicule. Certains véhicules récents avec serrure électronique nécessitent une approche différente (accès OBD), mais le résultat est identique : aucun dommage.',
  },
]

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/serrurier-automobile-nice/#service',
      name: 'Serrurier automobile à Nice',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: AREA_SERVED_TYPED,
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tarifs serrurier automobile Nice',
        itemListElement: [
          { '@type': 'Offer', name: 'Clé simple', price: `${PRICES.cleSimple.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé centralisée', price: `${PRICES.cleCentralisee.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé mains libres', price: `${PRICES.cleMainsLibres.sinnes}`, priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Perte totale', price: `${PRICES.perteTotale.sinnes}`, priceCurrency: 'EUR' },
        ],
      },
    },
    getBreadcrumbSchema('https://sinnes.fr/serrurier-automobile-nice/', [
      { name: 'Accueil', item: 'https://sinnes.fr/' },
      { name: 'Serrurier automobile Nice', item: 'https://sinnes.fr/serrurier-automobile-nice/' },
    ]),
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    SINOUHE_FULL_ENTITY,
    getWebPageSchema('https://sinnes.fr/serrurier-automobile-nice/', '2026-03-01', '2026-03-23')
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

const review = getReviewForPage('/serrurier-automobile-nice/')

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
      <section style={{ background: '#0A0A0A' }} className="pt-12 md:pt-6 pb-6">
        <div className="container-sinnes">

          {/* Badge avis — above the fold */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" aria-hidden="true" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-sm font-semibold text-white">58 avis Google · 5.0/5</span>
          </div>

          <h1 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl mb-6 leading-tight" style={{ color: '#FFFFFF' }}>
            {seoData['serrurier-automobile-nice'].h1}
          </h1>

          {/* Answer-first — 100 premiers mots */}
          <div className="max-w-3xl">
            <p className="font-body text-lg leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
              {ORG.name} est votre serrurier automobile à Nice, disponible 7j/7 pour toute
              intervention sur votre clé de voiture. Perte de clé, double préventif, clé bloquée
              dans le contact, ouverture sans effraction : nous intervenons directement là où vous
              êtes (domicile, lieu de travail, parking) sur Nice, Antibes, Cagnes-sur-Mer et Cannes.
              Tarifs à partir de {PRICES.cleSimple.sinnes}€. Devis gratuit, sans frais cachés.
            </p>
            <p className="font-body text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.7)' }}>
              Besoin d'une clé de voiture à Nice et alentours ou d'une intervention à domicile dans les meilleurs délais ? Contactez-nous.
            </p>

            {/* CTA urgence — après le texte hero */}
            <div className="mb-8">
              <a
                href={`tel:${NAP.phoneTel}`}
                className="btn-accent btn-urgence inline-flex items-center gap-3 font-body font-bold rounded-lg shadow-lg"
                aria-label={`Urgence serrurier automobile Nice — Appeler ${NAP.phoneDisplay}`}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                URGENCE : {NAP.phoneDisplay}
              </a>
              <p className="text-xs mt-2 font-body" style={{ color: 'rgba(255,255,255,0.6)' }}>7j/7 · Intervention rapide · Devis gratuit</p>
            </div>
          </div>

          {/* Byline Sinouhé — obligatoire */}
          <p className="font-body text-sm border-l-4 border-[#EFAD42] pl-4 mt-8 max-w-2xl" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Intervention assurée par <strong style={{ color: '#FFFFFF' }}>Sinouhé Rochereau</strong>, expert en programmation
            de clés automobiles, formateur international chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-serrurier" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* TRUST STRIP */}
      <TrustStrip theme="shade" items={TRUST_ITEMS} />

      {/* AVIS GOOGLE RÉEL */}
      {review && <SingleReview review={review} serviceName="Serrurier automobile Nice" serviceUrl="/serrurier-automobile-nice/" />}


      {/* ── CORPS PRINCIPAL ── */}
      <article className="bg-white py-16">
        <div className="container-sinnes max-w-[860px]">

          {/* H2 #1 — Différenciation */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6">
            {seoData['serrurier-automobile-nice'].h2[0]}
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Il existe une différence fondamentale entre un serrurier de portes et un serrurier
            automobile. Chez {ORG.name}, nous intervenons exclusivement sur les véhicules : notre
            expertise est pointue, nos outils sont professionnels : valise de diagnostic Abrites,
            ZedFull, lecteur RFID pour les puces ID46, ID48 et HITAG. Aucun généraliste ne dispose
            de ces équipements.
          </p>
          <p className="font-body text-text-main leading-relaxed mb-8">
            Nos services de{' '}
            <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">
              reproduction de clé de voiture
            </a>{' '}
            couvrent tous les types de véhicules : clé simple mécanique, clé centralisée à
            télécommande, clé mains libres et badge électronique. Chaque intervention est réalisée
            par Sinouhé Rochereau, formateur certifié et expert reconnu sur la Côte d'Azur.
          </p>

          {/* H2 #2 — Formation et certification (angle expertise) */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6">
            {seoData['serrurier-automobile-nice'].h2[1]}
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Sinouhé Rochereau n'est pas seulement serrurier automobile : il est formateur
            international certifié chez Incarline, l'un des organismes de référence en
            programmation de clés électroniques. Il forme d'autres techniciens à l'utilisation
            des outils Abrites et ZedFull, les mêmes valises que celles des concessionnaires.
          </p>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Cette expertise se traduit directement pour vous : Sinouhé peut traiter des cas
            que d'autres serruriers refusent : véhicules récents avec immobiliseurs de
            dernière génération, systèmes HITAG 3 ou clés cryptées, perte totale sans aucune
            clé d'origine. Commissaire au Grand Prix de Monaco depuis 2016, il connaît les
            exigences de fiabilité que le milieu automobile de haut niveau impose.
          </p>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Pour les détails techniques complets sur la programmation des puces transpondeur,
            consultez notre page{' '}
            <a href="/programmation-cle-voiture/" className="text-primary font-semibold hover:underline">
              programmation de clé voiture
            </a>.
          </p>
          <p className="font-body text-text-main leading-relaxed mb-8">
            Notre page{' '}
            <a href="/cle-voiture-nice/" className="text-primary font-semibold hover:underline">
              clé de voiture à Nice et alentours
            </a>{' '}
            détaille chaque quartier et commune couverts sur la Côte d'Azur.
          </p>

        </div>
      </article>

      {/* ── ZONE D'INTERVENTION — fond noir branding ── */}
      <section style={{ background: '#111111' }} className="py-10 px-4">
        <div className="container-sinnes max-w-[860px]">
          <h2 className="font-heading font-bold text-2xl md:text-3xl mb-6" style={{ color: '#EFAD42' }}>
            {seoData['serrurier-automobile-nice'].h2[2]}
          </h2>
          <p className="font-body text-base leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.8)' }}>
            Appelez le{' '}
            <a href={`tel:${NAP.phoneTel}`} className="font-bold" style={{ color: '#e53935' }}>
              {NAP.phoneDisplay}
            </a>{' '}
            : intervention sous 2h dans toute la zone. Nous couvrons :
          </p>
          <ul className="font-body leading-relaxed grid grid-cols-2 md:grid-cols-3 gap-3">
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Nice</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Antibes</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Cagnes-sur-Mer</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Cannes</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Saint-Laurent-du-Var</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Villefranche-sur-Mer</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Menton</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Grasse</li>
            <li className="flex items-center gap-2" style={{ color: 'rgba(255,255,255,0.85)' }}><span style={{ color: '#EFAD42' }} aria-hidden="true">✓</span>Vence · Mougins</li>
          </ul>
        </div>
      </section>

      <article className="bg-white py-8 px-4">
        <div className="container-sinnes max-w-[860px]">

          {/* H2 #3 — Urgence (KD 7) */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6">
            {seoData['serrurier-automobile-nice'].h2[3]}
          </h2>

          <p className="font-body text-text-main leading-relaxed mb-4">
            Le process est simple : vous appelez, nous convenons d'un RDV immédiat, nous
            intervenons sur place. Pas d'attente, pas de surfacturation d'urgence : le devis
            est gratuit et le prix est identique 7j/7. Pour un{' '}
            <a href="/urgence-cle-voiture/" className="text-primary font-semibold hover:underline">
              urgence clé voiture dans les Alpes-Maritimes
            </a>{' '}
            , Sinnes est disponible à toute heure.
          </p>

          {/* Avis Denis Ribes — cas concret daté */}
        </div>
      </article>

      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-serrurier-3" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      <article className="bg-white pt-6 pb-6 px-4">
        <div className="container-sinnes max-w-3xl mx-auto prose-sinnes">

          {/* H2 #4 — Nos interventions */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6 mt-12">
            {seoData['serrurier-automobile-nice'].h2[4]}
          </h2>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            {seoData['serrurier-automobile-nice'].h3[0]}
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Porte claquée, clé restée à l'intérieur, serrure bloquée : Sinouhé utilise des
            techniques de crochetage professionnel qui préservent intégralement la serrure et
            la carrosserie. Aucun dégât, aucune trace d'intervention.
          </p>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            {seoData['serrurier-automobile-nice'].h3[1]}
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-4">
            Un{' '}
            <a href="/double-cle-voiture/" className="text-primary font-semibold hover:underline">
              double de clé de voiture
            </a>{' '}
            préventif vous protège d'une perte future. Taille laser +
            programmation de la puce transpondeur en une seule intervention. Tous les constructeurs
            sont pris en charge.
          </p>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            {seoData['serrurier-automobile-nice'].h3[2]}
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-4">
            La valise Abrites et l'outil ZedFull permettent de programmer les puces RFID
            (ID46, ID48), les systèmes de centralisation et les immobiliseurs de nouvelle
            génération. Chaque clé est testée au démarrage avant notre départ.
          </p>

          <h3 className="font-heading font-bold text-xl text-third mt-6 mb-3">
            {seoData['serrurier-automobile-nice'].h3[3]}
          </h3>
          <p className="font-body text-text-main leading-relaxed mb-8">
            C'est le cas le plus complexe, mais pas impossible. Sans clé existante, la
            programmation est réalisée via lecture directe de l'immobiliseur du calculateur.
            Résultat : une nouvelle clé fonctionnelle à partir de {PRICES.perteTotale.sinnes}€.
            Pour en savoir plus sur notre processus, découvrez notre service de{' '}
            <a href="/depannage-cle-domicile/" className="text-primary font-semibold hover:underline">
              dépannage clé voiture à domicile
            </a>.
          </p>

          {/* H2 #5 — Tarifs */}
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-6 mt-12">
            {seoData['serrurier-automobile-nice'].h2[5]}
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-6">
            Chez {ORG.name}, pas de surprises. Le devis est gratuit, les prix sont affichés.
            Consultez notre page{' '}
            <a href="/tarif-cle-voiture/" className="text-primary font-semibold hover:underline">
              tarif clé voiture à Nice
            </a>{' '}
            pour le détail complet. Voici notre grille tarifaire comparée au concessionnaire :
          </p>

        </div>
      </article>

      {/* SECTION TARIFS — FULL WIDTH DARK — COMPACT & ELEGANT */}
      <section
        style={{
          background: '#0A0A0A',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="py-16 px-4"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '60%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(239,173,66,0.5), transparent)',
          }}
        />

        <div className="container-sinnes max-w-4xl mx-auto">
          {/* Tableau des tarifs */}
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-accent/80 font-body">Type de clé</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-accent/80 text-center font-body border-l border-white/5">Prix Sinnes</th>
                  <th className="px-6 py-4 text-xs font-black uppercase tracking-widest text-white/30 text-center border-l border-white/5 font-body">Prix concessionnaire</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { label: 'Clé simple (sans télécommande)', p: PRICES.cleSimple },
                  { label: 'Clé centralisée (télécommande)', p: PRICES.cleCentralisee },
                  { label: 'Clé mains libres / badge', p: PRICES.cleMainsLibres },
                  { label: 'Perte totale (sans double)', p: PRICES.perteTotale },
                ].map((item, idx) => (
                  <tr key={idx} className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-body font-semibold text-white text-sm md:text-base">{item.label}</span>
                    </td>
                    <td className="px-6 py-4 text-center border-l border-white/5">
                      <span className="font-heading font-bold text-xl md:text-2xl text-accent">À partir de {item.p.sinnes} €</span>
                    </td>
                    <td className="px-6 py-4 text-center text-white/40 font-body text-sm line-through border-l border-white/5">
                      {item.p.concessionnaire.min} - {item.p.concessionnaire.max} €
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <div className="bg-bg-shade"><div className="container-sinnes"><DiagonalDivider id="dd-serrurier-2" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#0A0A0A" /></div></div>

      {/* ── FAQ VISUEL (accordéon) ── */}

      <section className="bg-bg-shade pt-6 pb-16">

        <div className="container-sinnes max-w-[860px]">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-third mb-10">
            {seoData['serrurier-automobile-nice'].h2[6]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* STICKY MOBILE */}
    </>
  )
}
