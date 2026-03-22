import type { Metadata } from 'next'
import Image from 'next/image'
import { NAP, ORG, SOCIAL, HOURS, TEAM, PRICES, REVIEWS, GEO, AREA_SERVED, ENTITY_LINKS, SOURCES, SINOUHE_FULL_ENTITY, AREA_SERVED_TYPED } from '@/constants/siteConfig'
import { seoData } from '@/data/seoData'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { BrandsCarousel, ReviewsCarousel } from './DynamicCarousels'
import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import { getHomepageReviews } from '@/data/reviews'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  alternates: { canonical: 'https://sinnes.fr/' },
  openGraph: {
    title: seoData.home.title,
    url: 'https://sinnes.fr/',
    images: [{ url: '/images/depannage-urgence-sinnes-1024x523.jpg', width: 1024, height: 523 }],
  },
}

const homepageReviews = getHomepageReviews()

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'AutomotiveBusiness'],
      '@id': 'https://sinnes.fr/#organization',
      name: ORG.name,
      legalName: ORG.legalName,
      foundingDate: ORG.foundingDate,
      identifier: ORG.siret,
      url: ORG.url,
      telephone: NAP.phoneTel,
      email: NAP.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: NAP.address.streetAddress,
        addressLocality: NAP.address.addressLocality,
        postalCode: NAP.address.postalCode,
        addressCountry: NAP.address.addressCountry,
        addressRegion: NAP.address.addressRegion,
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: GEO.latitude,
        longitude: GEO.longitude,
      },
      openingHours: HOURS.schemaValue,
      priceRange: '€€',
      numberOfEmployees: {
        '@type': 'QuantitativeValue',
        value: 2
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: NAP.phoneTel,
        contactType: 'customer service',
        areaServed: 'FR',
        availableLanguage: ['French']
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: REVIEWS.ratingValue,
        reviewCount: REVIEWS.reviewCount,
        bestRating: REVIEWS.bestRating,
      },
      review: homepageReviews.map((r) => ({
        '@type': 'Review',
        author: { '@type': 'Person', name: r.author },
        datePublished: r.date,
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5',
          bestRating: '5',
        },
        reviewBody: r.text,
      })),
      areaServed: AREA_SERVED_TYPED,
      sameAs: [
        SOCIAL.facebook,
        SOCIAL.instagram,
        SOCIAL.linkedin,
        SOCIAL.googleMaps,
        SOURCES.enterprise.societeCom,
        SOURCES.enterprise.lefigaroEntreprises,
        ENTITY_LINKS.nice,
        ENTITY_LINKS.locksmith,
      ],
      employee: [
        SINOUHE_FULL_ENTITY,
        {
          '@type': 'Person',
          '@id': TEAM.ines.id,
          name: TEAM.ines.name,
          jobTitle: TEAM.ines.jobTitle,
          sameAs: [
            SOURCES.ines.societeCom,
            SOURCES.ines.infonet
          ]
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Reproduction & double de clé de voiture',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Clé simple (sans télécommande)',
            price: String(PRICES.cleSimple.sinnes),
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            name: 'Clé centralisée (télécommande)',
            price: String(PRICES.cleCentralisee.sinnes),
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            name: 'Clé mains libres / badge',
            price: String(PRICES.cleMainsLibres.sinnes),
            priceCurrency: 'EUR',
          },
          {
            '@type': 'Offer',
            name: 'Perte totale (sans double)',
            price: String(PRICES.perteTotale.sinnes),
            priceCurrency: 'EUR',
          },
        ],
      },
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// DONNÉES STATIQUES
// ─────────────────────────────────────────────────────────────

const TIMELINE = [
  {
    date: 'Janvier 2025',
    titre: 'Ouverture de Sinnes Automobile',
    texte:
      "Lancement de l'activité spécialisée dans la programmation et le codage de clés automobiles.",
  },
  {
    date: 'Octobre 2025',
    titre: 'La vente de véhicules',
    texte:
      "Sinnes Automobile élargit son savoir-faire en proposant désormais la vente de voitures sélectionnées avec soin.",
  },
]

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* ═══════════════════════════════════════════════════
          SECTION 1 — HERO (vidéo fond + carte blanche gauche)
      ═══════════════════════════════════════════════════ */}
      <section className="relative flex items-center overflow-hidden bg-[#1a1a1a]" style={{ minHeight: '52vh' }}>

        {/* Vidéo fond — couvre exactement la section */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/Design-sans-titre-2.mp4" type="video/mp4" />
        </video>

        {/* Overlay sombre global léger */}
        <div className="absolute inset-0 bg-black/20" aria-hidden="true" />

        {/* Carte semi-transparente gauche — vidéo visible derrière, texte lisible */}
        <div className="relative z-10 w-full px-4 sm:px-8 py-10 md:py-14">
          <ScrollReveal animation="fadeInUp" delay={0}
            className="bg-white/80 rounded-2xl shadow-xl p-7 md:p-10 w-full max-w-xl ml-0 md:ml-12 lg:ml-20">

            {/* Badge avis */}
            <div className="inline-flex items-center gap-2 bg-[#FFFFFF] px-3 py-1.5 rounded-full mb-6 border border-[#EFAD42]/20">
              <span className="star-or text-base leading-none" aria-hidden="true" style={{ color: '#FBBC04' }}>★★★★★</span>
              <span className="font-body text-[#1a1a1a] text-xs font-bold tracking-wide">{REVIEWS.reviewCount} avis Google · {REVIEWS.ratingValue}/5</span>
            </div>

            {/* H1 — noir sur blanc, choc visuel immédiat */}
            <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-3 uppercase tracking-tight ">
              {seoData.home.h1}
            </h1>

            <h2 className="font-heading font-bold text-lg md:text-xl text-[#1a1a1a] mb-5 leading-snug ">
              {seoData.home.h2[0]}
            </h2>

            {/* Corps — concis, service clair */}
            <p className="font-body text-[#6B7280] text-sm md:text-base leading-relaxed mb-8">
              {ORG.name} vous propose un service rapide de programmation de clé automobile,
              que ce soit pour un double ou en cas de perte totale. Nous nous déplaçons là où
              vous êtes, que ce soit à domicile, sur votre lieu de travail ou ailleurs.
            </p>

            {/* CTA principal */}
            <a
              href={`tel:${NAP.phoneTel}`}
              className="btn-accent inline-flex items-center gap-3 text-lg md:text-xl font-bold rounded-lg transition-colors shadow-lg"
            >
              Demandez votre devis : {NAP.phoneDisplay}
            </a>

            {/* Lien maillage secondaire */}
            <p className="font-body text-xs text-[#6B7280] mt-5">
              Besoin d&apos;un{' '}
              <a
                href="/serrurier-automobile-nice/"
                className="text-primary font-semibold underline underline-offset-2 hover:text-accent transition-colors"
              >
                serrurier automobile à Nice
              </a>{' '}
              disponible maintenant&nbsp;?
            </p>

          </ScrollReveal>
        </div>

      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 2 — CAROUSEL MARQUES
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white border-y border-[#F0F3F7] pt-6 pb-0 overflow-hidden" aria-label="Marques automobiles prises en charge">
        <BrandsCarousel />
        <ScrollReveal animation="fadeInUp" delay={0.1} className="container-sinnes mt-4 text-center">
          <p className="font-body text-sm italic text-[#6B7280]">
            Sinnes Automobiles réalise la reproduction, la duplication et la programmation de clés automobiles
            pour de nombreuses marques, y compris les véhicules récents équipés de clés électroniques et de transpondeurs.
          </p>
        </ScrollReveal>
      </section>

      {/* Divider signature — après marques */}
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-marques" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — AVANTAGE DOMICILE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white pt-6 pb-16 md:pb-24">
        <div className="container-sinnes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Texte */}
            <div>
              <ScrollReveal animation="fadeInDown" as="h2"
                className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-third mb-6 leading-tight ">
                {seoData.home.h2[1]}
              </ScrollReveal>

              <ScrollReveal animation="fadeInUp" delay={0.1}>
                <p className="font-body text-text-main leading-relaxed mb-4">
                  Domicile, lieu de travail, ou même en déplacement, nous sommes là pour vous.
                </p>
                <p className="font-body text-text-main leading-relaxed mb-6">
                  Nos services de{' '}
                  <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">
                    reproduction et double de clé de voiture
                  </a>{' '}
                  sont disponibles {HOURS.display} sur tout Nice et alentours.
                </p>
                <p className="font-body text-xs text-text-muted mb-8">
                  *Pas de frais de déplacement pour les interventions à Nice.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="bounceIn" delay={0.2} className="inline-block">
                <a href="/contactez-nous/" className="btn-accent inline-flex items-center justify-center gap-2 font-semibold tracking-wide rounded-lg">
                  CONTACTEZ-NOUS
                </a>
              </ScrollReveal>
            </div>

            {/* Illustration déplacement */}
            <ScrollReveal animation="zoomIn" delay={0.15}>
              <Image
                src="/images/Deplacement.png"
                alt={seoData.home.images.deplacement}
                title="Service à domicile Sinnes Automobiles — Nice, Antibes, Cannes"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Divider signature — après domicile */}
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-domicile" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — SERVICES GRID
      ═══════════════════════════════════════════════════ */}
      <section className="bg-bg-shade pt-6 pb-16 md:pb-24">
        <div className="container-sinnes">

          <ScrollReveal animation="fadeInDown" as="h2"
            className="font-heading font-bold text-3xl md:text-4xl text-third text-center mb-12 ">
            {seoData.home.h2[2]}
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* Card 1 — Clé voiture */}
            <ScrollReveal animation="fadeInUp" delay={0}>
              <article className="card-sinnes p-8 flex flex-col gap-4 h-full">
                <ScrollReveal animation="zoomIn" delay={0.1} className="flex justify-center">
                  <Image
                    src="/images/programmation-cle.png"
                    alt={seoData.home.images.programmation}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </ScrollReveal>
                <h3 className="font-heading font-bold text-xl text-card-title">
                  Reproduction de clé de voiture
                </h3>
                <p className="font-body text-text-muted leading-relaxed flex-1">
                  Vous avez perdu vos clés ou souhaitez refaire un double ? Nous avons une solution simple et rapide.
                </p>
                <a href="/reproduction-cle-voiture/" className="btn-accent text-sm mt-auto self-start">
                  Découvrir nos services
                </a>
              </article>
            </ScrollReveal>

            {/* Card 2 — Vente véhicule */}
            <ScrollReveal animation="fadeInUp" delay={0.15}>
              <article className="card-sinnes p-8 flex flex-col gap-4 h-full">
                <ScrollReveal animation="zoomIn" delay={0.1} className="flex justify-center">
                  <Image
                    src="/images/achatrevente-vehicule.png"
                    alt={seoData.home.images.achatrevente}
                    width={180}
                    height={180}
                    className="object-contain"
                  />
                </ScrollReveal>
                <h3 className="font-heading font-bold text-xl text-card-title">
                  Vente de véhicule
                </h3>
                <p className="font-body text-text-muted leading-relaxed flex-1">
                  Trouvez la voiture qui vous correspond parmi nos modèles récents et fiables, disponibles immédiatement.
                </p>
                <a href="/acheter-une-voiture/" className="btn-accent text-sm mt-auto self-start">
                  Voir les véhicules
                </a>
              </article>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Divider signature — entre services et qui-sommes-nous */}
      <div className="bg-bg-shade"><div className="container-sinnes"><DiagonalDivider id="dd-services" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — QUI SOMMES-NOUS (Timeline)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white pt-6 pb-16 md:pb-24">
        <div className="container-sinnes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Photo équipe */}
            <ScrollReveal animation="zoomIn" className="flex justify-center">
              <Image
                src="/images/SERVICES-SINNES-1.png"
                alt={seoData.home.images.equipe}
                title="L'équipe Sinnes Automobiles — Sinouhé Rochereau et Inès Barthelemy"
                width={800}
                height={800}
                className="rounded-card shadow-card w-full max-w-md h-auto"
              />
            </ScrollReveal>

            {/* Texte + Timeline */}
            <div>
              <ScrollReveal animation="fadeInDown" as="h2"
                className="font-heading font-bold text-3xl md:text-4xl text-third mb-8 ">
                {seoData.home.h2[3]}
              </ScrollReveal>

              {/* Timeline */}
              <div className="space-y-6 mb-8">
                {TIMELINE.map((item, i) => (
                  <ScrollReveal key={i} animation="fadeInUp" delay={i * 0.1}>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-3 h-3 rounded-full bg-accent mt-1 flex-shrink-0" />
                        {i < TIMELINE.length - 1 && (
                          <div className="w-0.5 h-full bg-accent/30 mt-1" />
                        )}
                      </div>
                      <div>
                        <span className="font-body text-xs font-semibold text-accent uppercase tracking-wide">
                          {item.date}
                        </span>
                        <h3 className="font-heading font-bold text-lg text-third mt-1">{item.titre}</h3>
                        <p className="font-body text-text-muted text-sm leading-relaxed mt-1">{item.texte}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              {/* Byline Sinouhé — obligatoire */}
              <ScrollReveal animation="fadeInUp" delay={0.2}>
                <p className="font-body text-sm text-text-muted border-l-4 border-accent pl-4 mb-8">
                  Par <strong>{TEAM.sinouhe.name}</strong> · {TEAM.sinouhe.description}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="bounceIn" delay={0.3} className="inline-block">
                <a href="/qui-sommes-nous/" className="btn-accent inline-flex items-center gap-2">
                  En savoir plus
                </a>
              </ScrollReveal>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 6 — CONTACT
      ═══════════════════════════════════════════════════ */}
      <section className="bg-[#1a1a1a] pt-16 md:pt-24 pb-6 text-white">
        <div className="container-sinnes">

          <ScrollReveal animation="fadeInDown" as="h2"
            className="font-heading font-bold text-3xl md:text-4xl text-center mb-12 "
            style={{ color: '#ffffff' }}>
            {seoData.home.h2[4]}
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

            {/* Infos contact */}
            <ScrollReveal animation="fadeInUp" delay={0.1} className="space-y-4">
              <p className="font-body leading-relaxed mb-6" style={{ color: 'rgba(255,255,255,0.90)' }}>
                Vous avez une question, besoin d&apos;une assistance ou souhaitez en savoir plus
                sur nos services ? Nous sommes là pour vous aider !
                Consultez nos{' '}
                <a href="/tarif-cle-voiture/" className="text-accent font-semibold hover:text-accent-dark transition-colors underline underline-offset-2">
                  tarifs de reproduction de clé
                </a>{' '}
                , devis gratuit, sans frais cachés.
              </p>

              <a href={`tel:${NAP.phoneTel}`}
                className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 hover:bg-white/20 transition-colors group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="font-body font-bold text-accent text-lg group-hover:text-accent-dark transition-colors">
                  {NAP.phoneDisplay}
                </span>
              </a>

              <a href={`mailto:${NAP.email}`}
                className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 hover:bg-white/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="font-body text-white/90">{NAP.email}</span>
              </a>

              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <div>
                  <span className="font-body text-white/90 block">
                    {NAP.address.streetAddress}, {NAP.address.postalCode} {NAP.address.addressLocality}
                  </span>
                  <span className="font-body text-xs text-white/50">Siège social</span>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                </svg>
                <span className="font-body text-white/90">Nous venons à votre rencontre*</span>
              </div>

              <p className="font-body text-xs text-white/40 pl-1">
                *Pas de frais de déplacement pour les interventions à Nice.
              </p>

              <ScrollReveal animation="bounceIn" delay={0.2} className="inline-block pt-2">
                <a href="/contactez-nous/" className="btn-accent inline-flex items-center gap-2">
                  Demandez votre devis
                </a>
              </ScrollReveal>
            </ScrollReveal>

            {/* Carte zone d'intervention */}
            <ScrollReveal animation="zoomIn" delay={0.15}>
              <figure itemScope itemType="https://schema.org/ImageObject">
                <a
                  href="https://www.google.fr/maps/place/Nice/@43.7031657,7.1704109,12z"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Voir la zone d'intervention Sinnes Automobiles sur Google Maps"
                >
                  <Image
                    src="/images/carte-1024x402.png"
                    alt={seoData.home.images.carte}
                    title="Zone d'intervention Sinnes Automobiles — Nice, Antibes, Cannes, Côte d'Azur"
                    width={1024}
                    height={402}
                    className="w-full h-auto rounded-xl"
                  />
                </a>
                <figcaption className="font-body text-xs text-white/50 mt-2 text-center" itemProp="caption">
                  Zone d&apos;intervention de Sinnes Automobiles · Nice et alentours · Serrurier automobile à Nice
                </figcaption>
                <meta itemProp="contentUrl" content="https://sinnes.fr/images/carte-1024x402.png" />
                <meta itemProp="author" content="Sinnes Automobiles" />
              </figure>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* Divider signature — avant avis */}
      <div className="bg-bg-shade"><div className="container-sinnes"><DiagonalDivider id="dd-avis" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — AVIS GOOGLE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-bg-shade pt-6 pb-16" aria-label="Avis clients Google">
        <div className="container-sinnes">

          <ReviewsCarousel />

        </div>
      </section>

    </>
  )
}
