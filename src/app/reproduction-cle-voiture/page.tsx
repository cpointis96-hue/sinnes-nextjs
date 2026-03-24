import DiagonalDivider, { SteeringWheelIcon, KeyIcon } from '@/components/ui/DiagonalDivider'
import type { Metadata } from 'next'
import { NAP, TEAM, PRICES, REVIEWS, SINOUHE_FULL_ENTITY, AREA_SERVED_TYPED, SITE_URL } from '@/constants/siteConfig'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import TrustStrip, { IconEuro, IconSteering, IconShield, IconCalendar, type TrustStripItem } from '@/components/ui/TrustStrip'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import StickyCTA from '@/components/ui/StickyCTA'
import { seoData } from '@/data/seoData'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: seoData['reproduction-cle-voiture'].title,
  description: seoData['reproduction-cle-voiture'].description,
  alternates: { canonical: 'https://sinnes.fr/reproduction-cle-voiture/' },
  openGraph: {
    title: seoData['reproduction-cle-voiture'].title,
    url: 'https://sinnes.fr/reproduction-cle-voiture/',
    images: [{ url: '/images/sinnes-automobiles-cle-voiture-nice-og.jpg', width: 1200, height: 630, alt: 'Sinnes Automobiles — Double de clé voiture à Nice, service mobile expert Côte d\'Azur' }],
  },
}

// ─────────────────────────────────────────────────────────────
// SCHEMA JSON-LD
// ─────────────────────────────────────────────────────────────

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Combien coûte la reproduction d\'une clé de voiture ?',
    answer: `Le prix varie selon le type de clé : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres, ${PRICES.perteTotale.sinnes}€ en cas de perte totale. Devis gratuit sur demande.`,
  },
  {
    question: 'Est-il possible de reproduire une clé de voiture sans l\'originale ?',
    answer: 'Oui, dans la majorité des cas. Sinouhé Rochereau décode la serrure ou la centrale électronique pour recréer une clé fonctionnelle, même sans clé originale. Ce service est disponible pour la quasi-totalité des marques.',
  },
  {
    question: 'La reproduction de clé invalide-t-elle la garantie constructeur ?',
    answer: 'Non. Sinnes Automobiles utilise des procédures de programmation officielle (valise Abrites, ZedFull) respectant les préconisations constructeur. La garantie du véhicule est préservée.',
  },
  {
    question: 'Intervenez-vous sur toutes les marques de voiture ?',
    answer: 'Oui. Sinnes Automobiles prend en charge plus de 40 marques : Renault, Peugeot, Citroën, Volkswagen, Toyota, Hyundai, BMW, Mercedes-Benz, Audi, Fiat et bien d\'autres.',
  },
]

import { getWebPageSchema, getBreadcrumbSchema } from '@/utils/schema'

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/reproduction-cle-voiture/#service',
      name: 'Reproduction de clé de voiture',
      provider: { '@id': `${SITE_URL}/#organization` },
      description:
        'Reproduction, double et programmation de clé automobile à Nice. Toutes marques, intervention à domicile 7j/7.',
      areaServed: AREA_SERVED_TYPED,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tarifs reproduction de clé',
        itemListElement: [
          { '@type': 'Offer', name: 'Clé simple', price: String(PRICES.cleSimple.sinnes), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé centralisée', price: String(PRICES.cleCentralisee.sinnes), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé mains libres', price: String(PRICES.cleMainsLibres.sinnes), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Perte totale', price: String(PRICES.perteTotale.sinnes), priceCurrency: 'EUR' },
        ],
      },
    },
    getBreadcrumbSchema('https://sinnes.fr/reproduction-cle-voiture/', [
      { name: 'Accueil', item: 'https://sinnes.fr/' },
      { name: 'Reproduction de clé de voiture', item: 'https://sinnes.fr/reproduction-cle-voiture/' },
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
    getWebPageSchema('https://sinnes.fr/reproduction-cle-voiture/', '2026-03-01', '2026-03-23')
  ],
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

// ─────────────────────────────────────────────────────────────
// CUSTOM ICONS (SVG) — Style Sinnes
// ─────────────────────────────────────────────────────────────

function IconKeySimple({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="7.5" cy="12" r="3" />
      <path d="M10.5 12h9.5" />
      <path d="M15 12v3" />
      <path d="M18 12v3" />
    </svg>
  )
}

function IconKeyCentralisee({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="7" y="4" width="10" height="16" rx="2" />
      <path d="M12 8v4" />
      <path d="M10 10l4 0" />
      <circle cx="12" cy="16" r="1.5" />
      <path d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8" className="opacity-40" />
    </svg>
  )
}

function IconKeyMainsLibres({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="5" y="6" width="14" height="12" rx="2" />
      <circle cx="15" cy="12" r="2" />
      <path d="M9 10h2" />
      <path d="M9 14h2" />
    </svg>
  )
}

function IconPerteTotale({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
      <path d="M12 12l4 4" className="opacity-40" />
      <path d="M12 12l-4-4" className="opacity-40" />
    </svg>
  )
}

const TRUST_ITEMS: TrustStripItem[] = [
  {
    icon: <IconEuro className="w-8 h-8" />,
    label: `${PRICES.cleSimple.sinnes} €`,
    sublabel: 'À partir de : clé simple, centralisée, mains libres',
    href: '/tarif-cle-voiture/',
  },
  {
    icon: <IconSteering className="w-8 h-8" />,
    label: '40+ marques',
    sublabel: 'Renault, Toyota, BMW, Mercedes, VW, Hyundai, Audi, Fiat…',
  },
  {
    icon: <IconShield className="w-8 h-8" />,
    label: 'Laser + transpondeur',
    sublabel: 'Abrites & ZedFull · garantie constructeur préservée',
    href: '/programmation-cle-voiture/',
  },
  {
    icon: <IconCalendar className="w-8 h-8" />,
    label: '7j/7',
    sublabel: 'À domicile : Nice, Antibes, Cagnes-sur-Mer, Cannes',
    href: '/serrurier-automobile-nice/',
  },
 ]

const review = getReviewForPage('/reproduction-cle-voiture/')

export default function ReproductionCleVoiturePage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* BREADCRUMB */}
      <nav aria-label="Fil d'Ariane" className="py-3 px-4 bg-bg-shade border-b border-card-border">
        <div className="container-sinnes">
          <ol className="flex gap-2 text-sm font-body text-text-muted">
            <li>
              <a href="/" className="hover:text-primary transition-colors">
                Accueil
              </a>
            </li>
            <li aria-hidden="true" className="select-none">›</li>
            <li aria-current="page" className="text-text-main">
              Reproduction de clé de voiture
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO SECTION — FULL WIDTH DARK — ALL CONTENT PRESERVED */}
      <section style={{ background: '#0A0A0A' }} className="text-white pt-6 pb-6 px-4">
        <div className="container-sinnes text-center max-w-3xl mx-auto">
          {/* Badge avis */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">
              58 avis Google · 5.0/5
            </span>
          </div>

          <h1
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-4 "
            style={{ color: '#FFFFFF' }}
          >
            {seoData['reproduction-cle-voiture'].h1}
          </h1>

          <p className="font-body text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Expert en programmation électronique et taille laser haute sécurité.
            Sinnes Automobiles intervient pour la reproduction de votre clé de voiture à Nice,
            même sans original (perte totale). Nous recréons votre clé de A à Z via décodage
            de serrure et programmation valise officielle. Intervention mobile 7j/7.
            Garantie constructeur préservée.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href={`tel:${NAP.phoneTel}`}
              className="btn-accent btn-urgence inline-flex items-center justify-center gap-3 font-body font-bold rounded-lg"
            >
              Urgence 7j/7 : <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
            </a>
            <a
              href="/contactez-nous/"
              className="btn-accent inline-flex items-center justify-center font-body font-black rounded-lg shadow-[0_4px_14px_0_rgba(239,173,66,0.39)] hover:shadow-[0_6px_20px_rgba(239,173,66,0.23)] hover:scale-[1.02]"
            >
              Obtenir un devis gratuit
            </a>
          </div>

          {/* Byline Sinouhé */}
          <p className="text-sm text-white/70 border-l-4 border-accent pl-4 text-left max-w-xl mx-auto">
            Intervention assurée par{' '}
            <strong className="text-white">{TEAM.sinouhe.name}</strong> ·{' '}
            {TEAM.sinouhe.jobTitle}, formateur international chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* TRUST STRIP + REVIEW — collés aux blocs noirs */}
      <div className="bg-white">
        <TrustStrip items={TRUST_ITEMS} theme="shade" />
        {review && (
          <SingleReview
            review={review}
            serviceName="Reproduction de clé de voiture"
            serviceUrl="/reproduction-cle-voiture/"
          />
        )}
      </div>

      <div className="bg-white">
        <div className="container-sinnes">
          <DiagonalDivider id="dd-reproduction-top" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" />
        </div>
      </div>

      {/* 4 ÉTAPES — PREMIUM DARK — FULL WIDTH — REWORKED ANIMATION STYLE */}
      <section
        style={{
          background: 'linear-gradient(170deg, #0A0A0A 0%, #111111 50%, #0d0b07 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="pt-8 pb-10 px-4"
        aria-label="Notre processus en 4 étapes"
      >
        {/* Glow effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(239,173,66,0.4), transparent)',
          }}
        />

        <div className="container-sinnes max-w-2xl mx-auto">
          <h2
            className="font-heading font-bold text-2xl md:text-3xl mb-2 text-center"
            style={{ color: '#EFAD42' }}
          >
            {seoData['reproduction-cle-voiture'].h2[0]}
          </h2>
          <div
            style={{
              width: 50,
              height: 2,
              borderRadius: 1,
              background: 'linear-gradient(90deg, transparent, #EFAD42, transparent)',
              margin: '0 auto 1.5rem',
              opacity: 0.5,
            }}
          />

          <p className="font-body text-center text-white/60 text-sm mb-8 max-w-md mx-auto leading-relaxed">
            Double préventif ou perte totale : voici comment se déroule
            la reproduction de votre clé de voiture, étape par étape.
          </p>

          <div style={{ position: 'relative' }}>
            {/* Vertical Line */}
            <div
              style={{
                position: 'absolute',
                left: 22,
                top: 28,
                bottom: 28,
                width: 2,
                background: 'linear-gradient(to bottom, #EFAD42, rgba(239,173,66,0.15))',
                borderRadius: 1,
              }}
              aria-hidden="true"
            />

            {[
              {
                num: '01',
                title: "Votre besoin",
                desc: <>Appelez Sinnes au <a href={`tel:${NAP.phoneTel}`} className="font-bold hover:underline" style={{ color: '#EFAD42' }}>{NAP.phoneDisplay}</a> — Sinouhé identifie votre situation (double, clé perdue ou endommagée).</>
              },
              {
                num: '02',
                title: "Diagnostic sur place",
                desc: "Arrivée express. Décodage de la serrure mécanique ou interrogation de la centrale électronique du véhicule."
              },
              {
                num: '03',
                title: "Taille & Programmation",
                desc: "Taille laser haute précision et programmation du transpondeur via valise officielle (Abrites · ZedFull)."
              },
              {
                num: '04',
                title: "Clé prête — repartez",
                desc: "Votre véhicule démarre immédiatement. Garantie constructeur préservée, aucun remorquage nécessaire."
              }
            ].map((step, i) => (
              <div key={i} className="flex gap-6 pb-8 last:pb-0 relative group">
                {/* Step circle */}
                <div
                  style={{
                    width: 46, height: 46, borderRadius: '50%', background: '#EFAD42',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, position: 'relative', zIndex: 2,
                    boxShadow: '0 4px 15px rgba(239,173,66,0.3)',
                  }}
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  <span className="font-heading text-lg font-black text-black">{step.num}</span>
                </div>
                <div className="pt-1">
                  <p className="font-heading text-xl font-extrabold mb-2" style={{ color: '#EFAD42' }}>{step.title}</p>
                  <p className="font-body text-sm text-white/70 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bon à savoir block — PRESERVED & STYLED */}
          <div
            className="mt-12 p-6 rounded-2xl border"
            style={{
              background: 'rgba(239,173,66,0.03)',
              borderColor: 'rgba(239,173,66,0.1)'
            }}
          >
            <p className="font-heading text-xs font-black text-accent uppercase tracking-widest mb-4">Bon à savoir :</p>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex gap-3"><span className="text-accent">→</span> Double préventif 2 à 5× moins cher qu&apos;une perte totale.</li>
              <li className="flex gap-3"><span className="text-accent">→</span> Intervention mobile 7j/7, aucun remorquage nécessaire.</li>
              <li className="flex gap-3"><span className="text-accent">→</span> +40 marques prises en charge (Renault, BMW, VW, etc.).</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-reproduction-2" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* CORPS TEXTUEL — PARTIE 1 */}
      <article className="bg-white pt-8 pb-8 px-4">
        <div className="container-sinnes max-w-3xl mx-auto prose-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-5xl text-text-main mb-6">
            {seoData['reproduction-cle-voiture'].h2[4]}
          </h2>
          <p className="font-body text-text-main leading-relaxed mb-6 font-semibold">
            Pour refaire une clé de voiture, trois étapes sont nécessaires : décodage de la serrure
            ou lecture de la clé originale, taille laser de la lame, puis programmation du
            transpondeur dans le calculateur du véhicule. L&apos;ensemble de l&apos;intervention
            se déroule sur place en 1 à 2h — sans remorquage, sans rendez-vous en concession.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Que vous souhaitiez reproduire, copier ou faire un double de clé de voiture, la démarche
            désigne la même réalité : créer une clé fonctionnelle pour votre véhicule, qu&apos;il
            s&apos;agisse d&apos;un double préventif à partir de l&apos;original, ou d&apos;une
            recréation complète lorsque vous n&apos;avez plus aucune clé en votre possession.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Les clés de voiture modernes intègrent une puce électronique appelée transpondeur. Sans
            la{' '}
            <a href="/programmation-cle-voiture/" className="text-primary font-semibold hover:underline">
              programmation de clé automobile
            </a>{' '}
            adéquate, une clé taillée correctement ne démarrera pas le moteur : le calculateur
            refusera l&apos;autorisation de démarrage. Sinnes Automobiles maîtrise les deux étapes :
            taille mécanique et programmation électronique.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Les types de clés les plus courants sont : la clé simple (lame métallique + transpondeur
            basique), la clé centralisée (avec télécommande d&apos;ouverture/fermeture), la{' '}
            <a href="/cle-voiture-transpondeur/" className="text-primary font-semibold hover:underline">
              clé à transpondeur
            </a>{' '}
            haute sécurité (ID46, ID48, HITAG 2), et la carte mains libres ou badge.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            À la différence d&apos;une réparation de clé voiture (remplacement d&apos;un boîtier
            cassé, d&apos;une lame tordue ou d&apos;une pile), la reproduction recrée une clé
            entièrement nouvelle — taille mécanique et programmation électronique incluses.
            Et contrairement à un cordonnier, Sinnes Automobiles programme également le
            transpondeur : sans cette étape, la lame taillée ne démarrerait pas le moteur
            sur les véhicules modernes.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['reproduction-cle-voiture'].h2[1]}
          </h2>

          <h3 className="font-heading font-bold text-xl text-text-main mb-4">
            {seoData['reproduction-cle-voiture'].h3[0]}
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            C&apos;est la situation idéale. Sinouhé Rochereau décode la coupe de votre clé originale
            puis taille — ou grave — une nouvelle lame à l&apos;identique par laser de précision,
            sans aucune retouche nécessaire. La puce transpondeur est ensuite clonée ou programmée selon le
            protocole spécifique à votre véhicule.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Délai moyen : 1h à 2h sur place. Nous vous recommandons vivement de{' '}
            <a href="/double-cle-voiture/" className="text-primary font-semibold hover:underline">
              faire un double de clé
            </a>{' '}
            dès l&apos;achat de votre véhicule : c&apos;est le moyen le plus économique de vous prémunir
            contre la perte.
          </p>
        </div>
      </article>

      {/* SECTION PERTE TOTALE — FULL WIDTH DARK section */}
      <section
        style={{
          background: 'linear-gradient(170deg, #0A0A0A 0%, #111111 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="py-10 px-4"
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '50%',
            height: '1px',
            background: 'linear-gradient(90deg, transparent, rgba(239,173,66,0.4), transparent)',
          }}
        />
        <div className="container-sinnes max-w-3xl mx-auto">
          <h3 className="font-heading font-bold text-2xl mb-4" style={{ color: '#EFAD42' }}>
            {seoData['reproduction-cle-voiture'].h3[1]}
          </h3>
          <p className="font-body text-base leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.8)' }}>
            La{' '}
            <a href="/cle-voiture-perdue/" className="font-semibold hover:underline" style={{ color: '#EFAD42' }}>
              clé de voiture perdue
            </a>{' '}
            sans aucun double est le cas le plus complexe — mais il reste résolu dans la grande
            majorité des situations. Sinouhé procède au crochetage professionnel de la serrure ou
            interroge la centrale électronique du véhicule via valise de diagnostic pour extraire
            les codes d&apos;accès. Une nouvelle clé est ensuite recréée de zéro.
          </p>
          <p className="font-body text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Ce service est réalisé en atelier ou directement sur place selon la complexité. L&apos;ancien
            jeu de clés est invalidé dans le calculateur — votre véhicule est sécurisé.
          </p>
        </div>
      </section>

      {/* CORPS TEXTUEL — PARTIE 2 (Outils & Marques) */}
      <article className="bg-white pt-8 pb-8 px-4">
        <div className="container-sinnes max-w-3xl mx-auto prose-sinnes">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['reproduction-cle-voiture'].h2[2]}
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-6">
            Sinnes Automobiles investit dans les outils utilisés par les professionnels de l&apos;électronique
            automobile :
          </p>
          <ul className="font-body text-text-muted leading-relaxed mb-8 space-y-4 list-none pl-0">
            <li className="flex gap-3">
              <KeyIcon size={20} color="#EFAD42" className="mt-1 flex-shrink-0" />
              <span>
                <strong>Abrites Commander</strong> : lecture des codes d&apos;accès sans démontage du
                tableau de bord. Compatible avec la quasi-totalité des véhicules européens et
                asiatiques récents.
              </span>
            </li>
            <li className="flex gap-3">
              <KeyIcon size={20} color="#EFAD42" className="mt-1 flex-shrink-0" />
              <span>
                <strong>ZedFull</strong> : programmation des immobiliseurs ID46, ID48, HITAG 2,
                PCF7936 : les transpondeurs les plus répandus sur le marché.
              </span>
            </li>
            <li className="flex gap-3">
              <KeyIcon size={20} color="#EFAD42" className="mt-1 flex-shrink-0" />
              <span>
                <strong>Lecteur RFID</strong> : pour les cartes mains libres et badges
                d&apos;accès sans contact.
              </span>
            </li>
          </ul>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['reproduction-cle-voiture'].h2[3]}
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Renault, Citroën, Peugeot, Dacia, Volkswagen, Toyota, Hyundai, Kia, Ford, Opel,
            Fiat, Nissan, Suzuki, Mazda, Honda, Mitsubishi, Subaru, BMW, Mercedes-Benz, Audi,
            Mini, Smart, Porsche, Skoda, Seat, Cupra, Volvo, Lexus, Land Rover, Jaguar, Jeep,
            Alfa Romeo, DS, MG, Chevrolet, Chrysler, Dodge, Abarth, Lancia, Saab, Iveco.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-12">
            Si votre marque ne figure pas dans cette liste, contactez-nous directement au{' '}
            <a
              href={`tel:${NAP.phoneTel}`}
              className="text-primary font-semibold hover:underline"
            >
              <span className="whitespace-nowrap">{NAP.phoneDisplay}</span>
            </a>{' '}
            : la plupart des véhicules peuvent être traités.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['reproduction-cle-voiture'].h2[5]}
          </h2>
          <ul className="font-body text-text-muted leading-relaxed mb-8 space-y-3 list-none pl-0">
            {[
              { t: "2 à 5 fois moins cher", d: "qu'un concessionnaire, à prestation équivalente" },
              { t: "Intervention à domicile", d: "pas de dépanneuse, pas de rendez-vous en agence" },
              { t: "Délai sous 24h", d: "vs 1 à 3 semaines chez le constructeur" },
              { t: "Garantie constructeur préservée", d: "programmation officielle, zéro invalidation" },
              { t: "Spécialiste 100% automobile", d: "pas de serrurier maison, pas de généraliste" }
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <KeyIcon size={16} color="#EFAD42" className="mt-1 flex-shrink-0" />
                <span><strong>{item.t}</strong> : {item.d}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      <div className="bg-white">
        <div className="container-sinnes">
          <DiagonalDivider id="dd-reproduction-pre-tarifs" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" />
        </div>
      </div>

      {/* SECTION TARIFS — FULL WIDTH DARK — COMPACT & ELEGANT */}
      <section
        style={{
          background: 'linear-gradient(170deg, #0A0A0A 0%, #111111 50%, #0d0b07 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="py-12 px-4"
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

        <div className="container-sinnes max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="font-heading font-bold text-3xl md:text-5xl mb-4" style={{ color: '#EFAD42' }}>
              {seoData['reproduction-cle-voiture'].h3[2]}
            </h3>
            <p className="font-body text-white/50 text-sm max-w-lg mx-auto leading-relaxed">
              Comparez nos prix avec les réseaux constructeurs. Économisez jusqu&apos;à 80% sur vos doubles ou pertes totales.
            </p>
          </div>

          {/* Table Container — Hidden on small mobile */}
          <div className="hidden sm:block overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/5">
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-accent/60 font-body">Prestation</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-accent/60 text-center font-body">Expert Sinnes</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-white/30 text-center border-l border-white/5 font-body">Concessionnaire</th>
                  <th className="px-6 py-3 text-xs font-black uppercase tracking-widest text-accent text-center border-l border-white/5 font-body">Économie</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {[
                  { k: 'cleSimple', idx: <IconKeySimple className="w-5 h-5" /> },
                  { k: 'cleCentralisee', idx: <IconKeyCentralisee className="w-5 h-5" /> },
                  { k: 'cleMainsLibres', idx: <IconKeyMainsLibres className="w-5 h-5" /> },
                  { k: 'perteTotale', idx: <IconKeyMainsLibres className="w-5 h-5" /> }
                ].map((item) => {
                  const p = PRICES[item.k as keyof typeof PRICES];
                  if (!p) return null;
                  const avg = Math.round((p.concessionnaire.min + p.concessionnaire.max) / 2);
                  const s = Math.round(((avg - p.sinnes) / avg) * 100);
                  const icon = item.k === 'perteTotale' ? <IconPerteTotale className="w-5 h-5" /> : item.idx;

                  return (
                    <tr key={item.k} className="hover:bg-white/5 transition-colors">
                      <td className="px-6 py-3 flex items-center gap-3">
                        <span className="text-accent">{icon}</span>
                        <span className="font-body font-semibold text-white text-sm">{p.label}</span>
                      </td>
                      <td className="px-6 py-3 text-center font-heading font-bold text-xl text-white">{p.sinnes} €</td>
                      <td className="px-6 py-3 text-center text-white/30 font-body text-sm line-through border-l border-white/5">{avg} €</td>
                      <td className="px-6 py-3 text-center border-l border-white/5">
                        <span className="font-body font-semibold text-accent text-sm">-{s} %</span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Small Mobile List */}
          <div className="sm:hidden space-y-3">
            {[
              { k: 'cleSimple', idx: <IconKeySimple className="w-5 h-5" /> },
              { k: 'cleCentralisee', idx: <IconKeyCentralisee className="w-5 h-5" /> },
              { k: 'cleMainsLibres', idx: <IconKeyMainsLibres className="w-5 h-5" /> },
              { k: 'perteTotale', idx: <IconPerteTotale className="w-5 h-5" /> }
            ].map((item) => {
              const p = PRICES[item.k as keyof typeof PRICES];
              if (!p) return null;
              const avg = Math.round((p.concessionnaire.min + p.concessionnaire.max) / 2);
              const s = Math.round(((avg - p.sinnes) / avg) * 100);
              return (
                <div key={item.k} className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <span className="text-accent flex-shrink-0">{item.idx}</span>
                    <p className="font-body font-semibold text-white text-xs truncate">{p.label}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <p className="font-heading font-bold text-white text-base">{p.sinnes} €</p>
                    <p className="font-body text-xs text-white/30 line-through">{avg} €</p>
                    <span className="font-body font-semibold text-accent text-xs">-{s} %</span>
                  </div>
                </div>
              )
            })}
          </div>

          <p className="text-center mt-6 text-sm text-white/40 font-body italic">
            Tarifs indicatifs · Devis précis établi après diagnostic de votre véhicule.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-10 px-4">
        <div className="container-sinnes max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-8 text-center ">
            {seoData['reproduction-cle-voiture'].h2[6]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* CTA BAS */}
      <div className="text-center py-8 bg-bg-shade border-t border-card-border">
        <a href={`tel:${NAP.phoneTel}`} className="btn-accent inline-flex items-center justify-center font-body font-bold rounded-lg px-8 py-4">
          Appelez maintenant : {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-4">7j/7 · Devis gratuit · Intervention rapide</p>
      </div>

      <StickyCTA 
        variant={seoData['reproduction-cle-voiture'].ctas.sticky.variant} 
        label={seoData['reproduction-cle-voiture'].ctas.sticky.label} 
      />
    </>
  )
}
