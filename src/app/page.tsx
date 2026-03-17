import type { Metadata } from 'next'
import Image from 'next/image'
import { NAP, ORG, SOCIAL, HOURS, TEAM, PRICES } from '@/constants/siteConfig'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { BrandsCarousel, ReviewsCarousel } from './DynamicCarousels'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Sinnes Automobiles — Reproduction de clé voiture Nice',
  description:
    'Spécialiste reproduction & double de clé de voiture à Nice. Intervention 7j/7, tous véhicules. Devis gratuit — +33 6 75 54 04 11',
  alternates: { canonical: 'https://sinnes.fr/' },
  openGraph: {
    title: 'Sinnes Automobiles — Reproduction de clé voiture Nice',
    url: 'https://sinnes.fr/',
    images: [{ url: '/images/depannage-urgence-sinnes-1024x523.jpg', width: 1024, height: 523 }],
  },
}

// ─────────────────────────────────────────────────────────────
// SCHEMA JSON-LD — @graph Organization + LocalBusiness
// ─────────────────────────────────────────────────────────────

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LocalBusiness', 'AutomotiveBusiness'],
      '@id': 'https://sinnes.fr/#organization',
      name: ORG.name,
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
      geo: { '@type': 'GeoCoordinates', latitude: 43.7031, longitude: 7.262 },
      openingHours: 'Mo-Su 00:00-23:59',
      priceRange: '€€',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '57',
        bestRating: '5',
      },
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 43.7031, longitude: 7.262 },
        geoRadius: '40000',
      },
      sameAs: [
        SOCIAL.facebook,
        SOCIAL.instagram,
        SOCIAL.linkedin,
        SOCIAL.googleMaps,
      ],
      employee: [
        {
          '@type': 'Person',
          '@id': 'https://sinnes.fr/#sinouhe',
          name: TEAM.sinouhe.name,
          jobTitle: TEAM.sinouhe.jobTitle,
          description: TEAM.sinouhe.description,
        },
        {
          '@type': 'Person',
          '@id': 'https://sinnes.fr/#ines',
          name: TEAM.ines.name,
          jobTitle: TEAM.ines.jobTitle,
        },
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Reproduction & double de clé de voiture',
        itemListElement: [
          { '@type': 'Offer', name: 'Clé simple (sans télécommande)', price: String(PRICES.cleSimple.sinnes), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé centralisée (télécommande)', price: String(PRICES.cleCentralisee.sinnes), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Clé mains libres / badge', price: String(PRICES.cleMainsLibres.sinnes), priceCurrency: 'EUR' },
          { '@type': 'Offer', name: 'Perte totale (sans double)', price: String(PRICES.perteTotale.sinnes), priceCurrency: 'EUR' },
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

const AVIS = [
  { nom: 'Nathalie Letienne', date: '20/02/2026', note: 5, texte: "Je recommande vivement sinnes automobiles ! J'étais bloqué sur un parking avec mes clés à l'intérieur de ma voiture, complètement stressé… ils sont intervenus très rapidement et ont réussi à ouvrir mon véhicule sans aucun dégât." },
  { nom: 'Dylan D.', date: '16/02/2026', note: 5, texte: 'Rapide, sérieux et efficace!' },
  { nom: 'Lisa S.', date: '13/02/2026', note: 5, texte: 'Je recommande ce Monsieur à 2000%. En plus d\'être sympathique, il est très compétent. Un véritable magicien! Encore un grand merci!' },
  { nom: 'Cassandra Faraut', date: '13/02/2026', note: 5, texte: 'Rapide, efficace et très compétent, le service a été irréprochable. Je suis vraiment contente du travail réalisé sur ma voiture. Je recommande vivement de faire appel à eux !' },
  { nom: 'Nicolas Moreau', date: '22/01/2026', note: 5, texte: 'Je tiens à dire que la prestation est de haute qualité : à l\'heure, efficace et extrêmement sympathique de surcroît. Je recommande vivement.' },
  { nom: 'Adam Bouyssou', date: '18/01/2026', note: 5, texte: "Sinnes Automobiles est un super service, très gentil et très rapide. La réinitialisation du calculateur d'Airbags de ma Clio 5 2023 a duré 10min, elle ne démarrait plus et maintenant elle fonctionne à merveille !" },
  { nom: 'Alex Chuet', date: '16/01/2026', note: 5, texte: 'Ce jeune homme mérite tellement plus que cinq étoiles… Souriant, efficace, très arrangeant. Il a résolu mon problème en moins d\'une heure. Un énorme merci.' },
  { nom: 'Alexis Lucini', date: '18/12/2025', note: 5, texte: 'Rapide, efficace et très honnête je recommande fortement. Merci pour votre travail effectué sur mon fourgon.' },
  { nom: 'Denis Ribes', date: '09/12/2025', note: 5, texte: 'Merci beaucoup à Sinouhé et Inès — en 5 minutes il a réussi à rencoder une clé à Menton, ils nous ont sauvé la vie ! Entreprise très sérieuse, recommandation +++.' },
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
      <section className="relative flex items-center overflow-hidden bg-[#1a1a1a]" style={{minHeight: '52vh'}}>

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
            <div className="inline-flex items-center gap-2 bg-[#FFF8E7] px-3 py-1.5 rounded-full mb-6 border border-[#F5A623]/20">
              <span className="text-[#F5A623] text-base leading-none" aria-hidden="true">★★★★★</span>
              <span className="font-body text-[#1a1a1a] text-xs font-bold tracking-wide">57 avis Google · 5.0/5</span>
            </div>

            {/* H1 — noir sur blanc, choc visuel immédiat */}
            <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-[#1a1a1a] leading-tight mb-3 uppercase tracking-tight">
              Perte de clé auto&nbsp;?
            </h1>

            {/* H2 — sous-titre accrocheur */}
            <h2 className="font-heading font-bold text-lg md:text-xl text-[#1a1a1a] mb-5 leading-snug">
              Faites un double de clé en toute sécurité
            </h2>

            {/* Corps — concis, service clair */}
            <p className="font-body text-[#444] text-sm md:text-base leading-relaxed mb-8">
              {ORG.name} vous propose un service rapide de programmation de clé automobile,
              que ce soit pour un double ou en cas de perte totale. Nous nous déplaçons là où
              vous êtes, que ce soit à domicile, sur votre lieu de travail ou ailleurs.
            </p>

            {/* CTA principal */}
            <a
              href="/contactez-nous/"
              className="btn-accent inline-flex items-center gap-2 px-7 py-4 text-base font-bold w-full justify-center sm:w-auto sm:justify-start"
            >
              Prenez votre rendez-vous
            </a>

            {/* Lien maillage secondaire */}
            <p className="font-body text-xs text-[#888] mt-5">
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
      <section className="bg-white border-y border-[#eee] py-6 overflow-hidden" aria-label="Marques automobiles prises en charge">
        <BrandsCarousel />
        <ScrollReveal animation="fadeInUp" delay={0.1} className="container-sinnes mt-4 text-center">
          <p className="font-body text-sm italic text-[#6B7280]">
            Sinnes Automobiles réalise la reproduction, la duplication et la programmation de clés automobiles
            pour de nombreuses marques, y compris les véhicules récents équipés de clés électroniques et de transpondeurs.
          </p>
        </ScrollReveal>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 3 — AVANTAGE DOMICILE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-sinnes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Texte */}
            <div>
              <ScrollReveal animation="fadeInDown" as="h2"
                className="font-heading font-bold text-2xl md:text-3xl lg:text-4xl text-third mb-6 leading-tight">
                {ORG.name} c&apos;est un service à domicile, on vient à votre rencontre, où que vous soyez&nbsp;!
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
                <a href="/contactez-nous/" className="btn-accent inline-flex items-center gap-2 px-6 py-3 font-semibold tracking-wide">
                  CONTACTEZ-NOUS
                </a>
              </ScrollReveal>
            </div>

            {/* Illustration déplacement */}
            <ScrollReveal animation="zoomIn" delay={0.15}>
              <Image
                src="/images/Deplacement.png"
                alt="Sinnes Automobiles se déplace à domicile — Van Sinnes avec itinéraires Nice et alentours"
                title="Service à domicile Sinnes Automobiles — Nice, Antibes, Cannes"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 4 — SERVICES GRID
      ═══════════════════════════════════════════════════ */}
      <section className="bg-bg-shade py-16 md:py-24">
        <div className="container-sinnes">

          <ScrollReveal animation="fadeInDown" as="h2"
            className="font-heading font-bold text-3xl md:text-4xl text-third text-center mb-12">
            Nos services
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {/* Card 1 — Clé voiture */}
            <ScrollReveal animation="fadeInUp" delay={0}>
              <article className="card-sinnes p-8 flex flex-col gap-4 h-full">
                <ScrollReveal animation="zoomIn" delay={0.1} className="flex justify-center">
                  <Image
                    src="/images/programmation-cle.png"
                    alt="Programmation de clé automobile Sinnes à Nice"
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
                    alt="Vente de véhicule occasion Sinnes Automobiles Nice"
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

      {/* ═══════════════════════════════════════════════════
          SECTION 5 — QUI SOMMES-NOUS (Timeline)
      ═══════════════════════════════════════════════════ */}
      <section className="bg-white py-16 md:py-24">
        <div className="container-sinnes">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

            {/* Photo équipe */}
            <ScrollReveal animation="zoomIn" className="flex justify-center">
              <Image
                src="/images/SERVICES-SINNES-1.png"
                alt="Sinouhé et Inès — Équipe Sinnes Automobiles à votre service"
                title="L'équipe Sinnes Automobiles — Sinouhé Rochereau et Inès Barthelemy"
                width={800}
                height={800}
                className="rounded-card shadow-card w-full max-w-md h-auto"
              />
            </ScrollReveal>

            {/* Texte + Timeline */}
            <div>
              <ScrollReveal animation="fadeInDown" as="h2"
                className="font-heading font-bold text-3xl md:text-4xl text-third mb-8">
                Qui sommes nous&nbsp;?
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
                  Par <strong>{TEAM.sinouhe.name}</strong> — {TEAM.sinouhe.description}
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
      <section className="bg-[#1a1a1a] py-16 md:py-24 text-white">
        <div className="container-sinnes">

          <ScrollReveal animation="fadeInDown" as="h2"
            className="font-heading font-bold text-3xl md:text-4xl text-center mb-12"
            style={{ color: '#ffffff' }}>
            Contactez-nous
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
                — devis gratuit, sans frais cachés.
              </p>

              <a href={`tel:${NAP.phoneTel}`}
                 className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 hover:bg-white/20 transition-colors group">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span className="font-body font-bold text-accent text-lg group-hover:text-accent-dark transition-colors">
                  {NAP.phoneDisplay}
                </span>
              </a>

              <a href={`mailto:${NAP.email}`}
                 className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4 hover:bg-white/20 transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span className="font-body text-white/90">{NAP.email}</span>
              </a>

              <div className="flex items-center gap-4 bg-white/10 rounded-xl px-5 py-4">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-accent flex-shrink-0" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
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
                  <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
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
                    alt="Zone d'intervention de Sinnes Automobiles — Nice et alentours — Serrurier automobile à Nice"
                    title="Zone d'intervention Sinnes Automobiles — Nice, Antibes, Cannes, Côte d'Azur"
                    width={1024}
                    height={402}
                    className="w-full h-auto rounded-xl"
                  />
                </a>
                <figcaption className="font-body text-xs text-white/50 mt-2 text-center" itemProp="caption">
                  Zone d&apos;intervention de Sinnes Automobiles — Nice et alentours — Serrurier automobile à Nice
                </figcaption>
                <meta itemProp="contentUrl" content="https://sinnes.fr/images/carte-1024x402.png" />
                <meta itemProp="author" content="Sinnes Automobiles" />
              </figure>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SECTION 7 — AVIS GOOGLE
      ═══════════════════════════════════════════════════ */}
      <section className="bg-bg-shade py-16" aria-label="Avis clients Google">
        <div className="container-sinnes">

          {/* Badge global avis */}
          <ScrollReveal animation="fadeInDown" className="text-center mb-10">
            <div className="inline-flex items-center gap-3 bg-white border border-card-border rounded-full px-6 py-3 shadow-sm">
              <span className="text-[#FFD700] text-2xl" aria-hidden="true">★★★★★</span>
              <span className="font-body font-bold text-text-main">57 avis · 5.0/5</span>
              <span className="font-body text-xs text-text-muted">sur Google</span>
            </div>
          </ScrollReveal>

          <ReviewsCarousel avis={AVIS} />

          {/* CTA laisser un avis */}
          <ScrollReveal animation="fadeInUp" delay={0.1} className="text-center mt-8">
            <a
              href="https://g.page/r/sinnes-automobiles/review"
              rel="noopener noreferrer"
              target="_blank"
              className="font-body text-sm text-primary font-semibold hover:underline"
            >
              Laissez votre avis →
            </a>
          </ScrollReveal>

        </div>
      </section>

    </>
  )
}
