import type { Metadata } from 'next'
import { NAP, PRICES, TEAM } from '@/constants/siteConfig'
import FAQAccordion from './FAQAccordion'
import TrustStrip, { IconEuro, IconSteering, IconShield, IconCalendar, type TrustStripItem } from '@/components/ui/TrustStrip'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Reproduction de clé de voiture Nice — Spécialiste',
  description:
    'Reproduction et double de clé de voiture à Nice. Toutes marques, intervention 7j/7. À partir de 78€. Devis gratuit — +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/reproduction-cle-voiture/' },
  openGraph: {
    title: 'Reproduction de clé de voiture — Sinnes Automobiles Nice',
    url: 'https://sinnes.fr/reproduction-cle-voiture/',
    images: [{ url: '/images/programmation-cle.png', width: 300, height: 300 }],
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
      '@id': 'https://sinnes.fr/reproduction-cle-voiture/#service',
      name: 'Reproduction de clé de voiture',
      provider: { '@id': 'https://sinnes.fr/#organization' },
      description:
        'Reproduction, double et programmation de clé automobile à Nice. Toutes marques, intervention à domicile 7j/7.',
      areaServed: [
        { '@type': 'City', name: 'Nice' },
        { '@type': 'City', name: 'Antibes' },
        { '@type': 'City', name: 'Cagnes-sur-Mer' },
        { '@type': 'City', name: 'Cannes' },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Tarifs reproduction de clé',
        itemListElement: [
          { '@type': 'Offer', name: 'Clé simple', price: '78', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé centralisée', price: '132', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé mains libres', price: '150', priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Perte totale', price: '240', priceCurrency: 'EUR' },
        ],
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://sinnes.fr/' },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Reproduction de clé de voiture',
          item: 'https://sinnes.fr/reproduction-cle-voiture/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Combien coûte la reproduction d\'une clé de voiture ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Le prix varie selon le type de clé : à partir de ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres, ${PRICES.perteTotale.sinnes}€ en cas de perte totale. Devis gratuit sur demande.`,
          },
        },
        {
          '@type': 'Question',
          name: 'Est-il possible de reproduire une clé de voiture sans l\'originale ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui, dans la majorité des cas. Sinouhé Rochereau décode la serrure ou la centrale électronique pour recréer une clé fonctionnelle, même sans clé originale. Ce service est disponible pour la quasi-totalité des marques.',
          },
        },
        {
          '@type': 'Question',
          name: 'La reproduction de clé invalide-t-elle la garantie constructeur ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Non. Sinnes Automobiles utilise des procédures de programmation officielle (valise Abrites, ZedFull) respectant les préconisations constructeur. La garantie du véhicule est préservée.',
          },
        },
        {
          '@type': 'Question',
          name: 'Intervenez-vous sur toutes les marques de voiture ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Oui. Sinnes Automobiles prend en charge plus de 40 marques : Renault, Peugeot, Citroën, Volkswagen, Toyota, Hyundai, BMW, Mercedes-Benz, Audi, Fiat et bien d\'autres.',
          },
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://sinnes.fr/#sinouhe',
      name: TEAM.sinouhe.name,
      jobTitle: TEAM.sinouhe.jobTitle,
      worksFor: { '@id': 'https://sinnes.fr/#organization' },
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

const TRUST_ITEMS: TrustStripItem[] = [
  {
    icon: <IconEuro className="w-8 h-8" />,
    label: `${PRICES.cleSimple.sinnes} €`,
    sublabel: 'À partir de — clé simple, centralisée, mains libres',
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
    sublabel: 'Abrites & ZedFull — garantie constructeur préservée',
    href: '/programmation-cle-voiture/',
  },
  {
    icon: <IconCalendar className="w-8 h-8" />,
    label: '7j/7',
    sublabel: 'À domicile — Nice, Antibes, Cagnes-sur-Mer, Cannes',
    href: '/serrurier-automobile-nice/',
  },
]

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

      {/* HERO */}
      <section style={{ background: '#0A0A0A' }} className="text-white py-20 px-4">
        <div className="container-sinnes text-center max-w-3xl mx-auto">
          {/* Badge avis */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="text-[#FFD700] text-lg">★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">
              57 avis Google · 5.0/5
            </span>
          </div>

          <h1
            className="font-heading font-extrabold text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Reproduction de clé de voiture — Spécialiste Nice &amp; Côte d&apos;Azur
          </h1>

          <p className="font-body text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Sinnes Automobiles reproduit et programme votre clé de voiture à Nice, 7j/7, pour
            toutes les marques. Double préventif, clé perdue, clé endommagée ou perte totale :
            nous intervenons directement chez vous — domicile, lieu de travail ou parking.
            Taille laser + programmation transpondeur officielle. À partir de{' '}
            {PRICES.cleSimple.sinnes}€. Garantie constructeur préservée. Devis gratuit :{' '}
            <a
              href={`tel:${NAP.phoneTel}`}
              className="text-accent hover:text-accent-dark font-semibold"
            >
              {NAP.phoneDisplay}
            </a>
            .
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`tel:${NAP.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 bg-[#e53935] text-white
                         font-body font-bold text-xl px-8 py-4 rounded-lg min-h-[56px]
                         hover:bg-[#c62828] transition-colors"
            >
              📞 {NAP.phoneDisplay}
            </a>
            <a
              href="/contactez-nous/"
              className="inline-flex items-center justify-center bg-white text-[#1a1a1a]
                         font-body font-bold text-xl px-8 py-4 rounded-lg min-h-[56px]
                         hover:bg-gray-100 transition-colors"
            >
              Devis gratuit
            </a>
          </div>

          {/* Byline Sinouhé */}
          <p className="text-sm text-white/70 border-l-4 border-accent pl-4 text-left max-w-xl mx-auto">
            Intervention assurée par{' '}
            <strong className="text-white">{TEAM.sinouhe.name}</strong> —{' '}
            {TEAM.sinouhe.jobTitle}, formateur international chez Incarline.
            Commissaire au Grand Prix de Monaco depuis 2016.
          </p>
        </div>
      </section>

      {/* 4 ÉTAPES — mobile-first, lisible, impactant */}
      <section className="bg-white py-14 px-5" aria-label="Notre processus en 4 étapes">
        <div className="container-sinnes max-w-2xl mx-auto md:max-w-none">

          <p className="font-body text-[#9CA3AF] text-xs uppercase tracking-[0.2em] text-center mb-12">
            Notre processus
          </p>

          {/* Mobile: colonne avec ligne verticale — Desktop: rangée */}
          <div className="relative flex flex-col md:flex-row md:items-start md:gap-0">

            {/* Ligne verticale mobile uniquement */}
            <div
              className="absolute left-[27px] top-12 bottom-12 w-px md:hidden"
              style={{ background: 'linear-gradient(to bottom, #FFD700, rgba(255,215,0,0.1))' }}
              aria-hidden="true"
            />

            {[
              { n: '01', title: 'Votre besoin', desc: 'Double préventif, clé perdue, endommagée ou perte totale' },
              { n: '02', title: 'Diagnostic', desc: 'Décodage serrure ou centrale électronique sur place' },
              { n: '03', title: 'Taille & Programmation', desc: 'Taille laser + programmation transpondeur (Abrites · ZedFull)' },
              { n: '04', title: 'Clé prête', desc: 'Votre véhicule démarre — garantie constructeur préservée', last: true },
            ].map((step, i) => (
              <div
                key={i}
                className="flex-1 flex items-start gap-8 pb-10 last:pb-0 md:flex-col md:items-center md:pb-0 md:px-6 md:text-center relative"
              >
                {/* Numéro */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 border md:mb-4"
                  style={{
                    background: '#F9FAFB',
                    borderColor: 'rgba(255,215,0,0.8)',
                  }}
                >
                  <span
                    className="font-heading font-black text-xl"
                    style={{ color: '#FFD700' }}
                  >
                    {step.n}
                  </span>
                </div>

                {/* Texte */}
                <div className="pt-3 md:pt-0">
                  <p
                    className="font-heading font-bold text-xl md:text-lg leading-tight mb-1"
                    style={{ color: '#111111' }}
                  >
                    {step.title}
                  </p>
                  <p className="font-body text-[#6B7280] text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Flèche desktop entre étapes */}
                {i < 3 && (
                  <div
                    className="hidden md:block absolute right-0 top-6 -translate-y-1/2 text-2xl font-black"
                    style={{ color: 'rgba(255,215,0,0.6)' }}
                    aria-hidden="true"
                  >
                    ›
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="text-center font-body text-sm font-semibold mt-14 mb-2 tracking-wide" style={{ color: '#FFD700' }}>
            À partir de {PRICES.cleSimple.sinnes}€ &nbsp;·&nbsp; Devis gratuit &nbsp;·&nbsp; {NAP.phoneDisplay}
          </p>
        </div>
      </section>

      {/* RÉASSURANCE */}
      <TrustStrip items={TRUST_ITEMS} theme="shade" />

      {/* CORPS TEXTUEL */}
      <article className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl mx-auto prose-sinnes">

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Qu&apos;est-ce que la reproduction de clé de voiture ?
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            La reproduction de clé de voiture désigne l&apos;ensemble des opérations permettant de
            créer une clé fonctionnelle pour votre véhicule — qu&apos;il s&apos;agisse d&apos;un double
            préventif à partir de l&apos;original, ou d&apos;une recréation complète lorsque vous
            n&apos;avez plus aucune clé en votre possession.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Les clés de voiture modernes intègrent une puce électronique appelée transpondeur. Sans
            la{' '}
            <a href="/programmation-cle-voiture/" className="text-primary font-semibold hover:underline">
              programmation de clé automobile
            </a>{' '}
            adéquate, une clé taillée correctement ne démarrera pas le moteur — le calculateur
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

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Reproduction de clé avec ou sans original — deux situations
          </h2>

          <h3 className="font-heading font-bold text-xl text-text-main mb-4">
            Vous avez encore votre clé originale (double préventif)
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            C&apos;est la situation idéale. Sinouhé Rochereau décode la coupe de votre clé originale
            puis taille une nouvelle lame à l&apos;identique — taille laser de précision, sans aucune
            retouche nécessaire. La puce transpondeur est ensuite clonée ou programmée selon le
            protocole spécifique à votre véhicule.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Délai moyen : 1h à 2h sur place. Nous vous recommandons vivement de{' '}
            <a href="/double-cle-voiture/" className="text-primary font-semibold hover:underline">
              faire un double de clé
            </a>{' '}
            dès l&apos;achat de votre véhicule — c&apos;est le moyen le plus économique de vous prémunir
            contre la perte.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-main mb-4">
            Vous n&apos;avez plus aucune clé (perte totale)
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            La{' '}
            <a href="/cle-voiture-perdue/" className="text-primary font-semibold hover:underline">
              clé de voiture perdue
            </a>{' '}
            sans aucun double est le cas le plus complexe — mais il reste résolu dans la grande
            majorité des situations. Sinouhé procède au crochetage professionnel de la serrure ou
            interroge la centrale électronique du véhicule via valise de diagnostic pour extraire
            les codes d&apos;accès. Une nouvelle clé est ensuite recréée de zéro.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Ce service est réalisé en atelier ou directement sur place selon la complexité. L&apos;ancien
            jeu de clés est invalidé dans le calculateur — votre véhicule est sécurisé.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Notre méthode : taille laser + programmation transpondeur
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Sinnes Automobiles investit dans les outils utilisés par les professionnels de l&apos;électronique
            automobile :
          </p>
          <ul className="font-body text-text-muted leading-relaxed mb-4 space-y-2 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-accent flex-shrink-0">→</span>
              <span>
                <strong>Abrites Commander</strong> : lecture des codes d&apos;accès sans démontage du
                tableau de bord. Compatible avec la quasi-totalité des véhicules européens et
                asiatiques récents.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent flex-shrink-0">→</span>
              <span>
                <strong>ZedFull</strong> : programmation des immobiliseurs ID46, ID48, HITAG 2,
                PCF7936 — les transpondeurs les plus répandus sur le marché.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent flex-shrink-0">→</span>
              <span>
                <strong>Lecteur RFID</strong> : pour les cartes mains libres et badges
                d&apos;accès sans contact.
              </span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-accent pl-6 italic text-text-muted my-8 bg-bg-shade py-4 pr-4 rounded-r-lg">
            <p className="mb-2">
              &ldquo;Ce jeune homme mérite tellement plus que cinq étoiles… Souriant, efficace,
              très arrangeant. Il a résolu mon problème en moins d&apos;une heure.&rdquo;
            </p>
            <footer className="text-sm not-italic">
              — <strong>Alex Chuet</strong>, avis Google · Janvier 2026
            </footer>
          </blockquote>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Toutes les marques — 40+ constructeurs pris en charge
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Renault, Citroën, Peugeot, Dacia, Volkswagen, Toyota, Hyundai, Kia, Ford, Opel,
            Fiat, Nissan, Suzuki, Mazda, Honda, Mitsubishi, Subaru, BMW, Mercedes-Benz, Audi,
            Mini, Smart, Porsche, Skoda, Seat, Cupra, Volvo, Lexus, Land Rover, Jaguar, Jeep,
            Alfa Romeo, DS, MG, Chevrolet, Chrysler, Dodge, Abarth, Lancia, Saab, Iveco.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Si votre marque ne figure pas dans cette liste, contactez-nous directement au{' '}
            <a
              href={`tel:${NAP.phoneTel}`}
              className="text-primary font-semibold hover:underline"
            >
              {NAP.phoneDisplay}
            </a>{' '}
            — la plupart des véhicules peuvent être traités.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Tarifs reproduction de clé de voiture — Transparence totale
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-6">
            Pour les détails complets,{' '}
            <a href="/tarif-cle-voiture/" className="text-primary font-semibold hover:underline">
              consultez nos tarifs
            </a>{' '}
            — devis gratuit, sans frais cachés.
          </p>

          {/* Tableau tarifs */}
          <div className="overflow-x-auto mb-8 rounded-xl border border-card-border">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="text-left px-4 py-3 font-bold">Type de clé</th>
                  <th className="text-center px-4 py-3 font-bold">Prix Sinnes</th>
                  <th className="text-center px-4 py-3 font-bold">Prix concessionnaire</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-card-border">
                  <td className="px-4 py-3 text-text-main">{PRICES.cleSimple.label}</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">
                    À partir de {PRICES.cleSimple.sinnes}€
                  </td>
                  <td className="px-4 py-3 text-center text-text-muted">
                    {PRICES.cleSimple.concessionnaire.min}-{PRICES.cleSimple.concessionnaire.max}€
                  </td>
                </tr>
                <tr className="border-t border-card-border bg-bg-shade">
                  <td className="px-4 py-3 text-text-main">{PRICES.cleCentralisee.label}</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">
                    À partir de {PRICES.cleCentralisee.sinnes}€
                  </td>
                  <td className="px-4 py-3 text-center text-text-muted">
                    {PRICES.cleCentralisee.concessionnaire.min}-{PRICES.cleCentralisee.concessionnaire.max}€
                  </td>
                </tr>
                <tr className="border-t border-card-border">
                  <td className="px-4 py-3 text-text-main">{PRICES.cleMainsLibres.label}</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">
                    À partir de {PRICES.cleMainsLibres.sinnes}€
                  </td>
                  <td className="px-4 py-3 text-center text-text-muted">
                    {PRICES.cleMainsLibres.concessionnaire.min}-{PRICES.cleMainsLibres.concessionnaire.max}€
                  </td>
                </tr>
                <tr className="border-t border-card-border bg-bg-shade">
                  <td className="px-4 py-3 text-text-main">{PRICES.perteTotale.label}</td>
                  <td className="px-4 py-3 text-center font-bold text-primary">
                    À partir de {PRICES.perteTotale.sinnes}€
                  </td>
                  <td className="px-4 py-3 text-center text-text-muted">
                    {PRICES.perteTotale.concessionnaire.min}-{PRICES.perteTotale.concessionnaire.max}€
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mb-10">
            <a
              href="/contactez-nous/"
              className="inline-block bg-accent text-white font-body font-bold text-base
                         px-8 py-3 rounded-lg hover:bg-accent-dark transition-colors"
            >
              Demandez votre devis gratuit
            </a>
          </div>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Pourquoi choisir Sinnes Automobiles plutôt qu&apos;un concessionnaire ?
          </h2>
          <ul className="font-body text-text-muted leading-relaxed mb-4 space-y-3 list-none pl-0">
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">✓</span>
              <span>
                <strong>2 à 5 fois moins cher</strong> qu&apos;un concessionnaire, à prestation
                équivalente
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">✓</span>
              <span>
                <strong>Intervention à domicile</strong> — pas de dépanneuse, pas de rendez-vous
                en agence
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">✓</span>
              <span>
                <strong>Délai sous 24h</strong> vs 1 à 3 semaines chez le constructeur
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">✓</span>
              <span>
                <strong>Garantie constructeur préservée</strong> — programmation officielle,
                zéro invalidation
              </span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold flex-shrink-0">✓</span>
              <span>
                <strong>Spécialiste 100% automobile</strong> — pas de serrurier maison, pas de
                généraliste
              </span>
            </li>
          </ul>

          <blockquote className="border-l-4 border-accent pl-6 italic text-text-muted my-8 bg-bg-shade py-4 pr-4 rounded-r-lg">
            <p className="mb-2">
              &ldquo;Merci beaucoup à Sinouhé et Inès — en 5 minutes il a réussi à rencoder une
              clé à Menton, ils nous ont sauvé la vie ! Entreprise très sérieuse.&rdquo;
            </p>
            <footer className="text-sm not-italic">
              — <strong>Denis Ribes</strong>, avis Google · Décembre 2025
            </footer>
          </blockquote>

        </div>
      </article>

      {/* CTA URGENCE */}
      <section className="bg-[#1a1a1a] py-16 text-center text-white border-y border-[#FFD700]/20">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4" style={{ color: '#ffffff' }}>
            Besoin d&apos;une reproduction de clé rapidement ?
          </h2>
          <p className="font-body text-xl mb-8 text-white/80">
            7j/7 · Devis gratuit · Toutes marques · Nice et Côte d&apos;Azur
          </p>
          <a
            href={`tel:${NAP.phoneTel}`}
            className="inline-block bg-[#e53935] text-white font-body font-bold text-2xl
                       px-12 py-5 rounded-lg min-h-[56px] hover:bg-[#c62828] transition-colors"
          >
            {NAP.phoneDisplay}
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-8 text-center">
            Questions fréquentes — Reproduction de clé de voiture
          </h2>
          <FAQAccordion />
        </div>
      </section>

      {/* CTA BAS */}
      <div className="text-center py-12 bg-bg-shade px-4">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="inline-block bg-accent text-white font-body font-bold text-lg
                     px-10 py-4 rounded-lg min-h-[56px] hover:bg-accent-dark transition-colors"
        >
          Appeler maintenant — {NAP.phoneDisplay}
        </a>
        <p className="text-sm text-text-muted mt-3">
          7j/7 · Devis gratuit · Toutes marques
        </p>
        <p className="text-xs text-text-muted mt-1">
          *Pas de frais de déplacement pour les interventions à {NAP.address.addressLocality}.
        </p>
      </div>

      {/* STICKY MOBILE */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <a
          href={`tel:${NAP.phoneTel}`}
          className="flex items-center justify-center w-full bg-[#e53935] text-white
                     font-body font-bold text-lg py-4 min-h-[56px]"
        >
          📞 {NAP.phoneDisplay}
        </a>
      </div>
    </>
  )
}
