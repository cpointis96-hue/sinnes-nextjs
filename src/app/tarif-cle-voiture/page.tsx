import type { Metadata } from 'next'
import { NAP, PRICES, TEAM } from '@/constants/siteConfig'
import FAQAccordion, { type FAQItem } from './FAQAccordion'
import DiagonalDivider, { SteeringWheelIcon } from '@/components/ui/DiagonalDivider'
import PricingSection from './PricingSection'
import SingleReview from '@/components/ui/SingleReview'
import { getReviewForPage } from '@/data/reviews'
import { seoData } from '@/data/seoData'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: seoData['tarif-cle-voiture'].title,
  description: seoData['tarif-cle-voiture'].description,
  alternates: { canonical: 'https://sinnes.fr/tarif-cle-voiture/' },
  openGraph: {
    title: seoData['tarif-cle-voiture'].title,
    url: 'https://sinnes.fr/tarif-cle-voiture/',
    images: [{ url: '/images/depannage-urgence-sinnes-1024x523.jpg', width: 1024, height: 523 }],
  },
}

// ─────────────────────────────────────────────────────────────
// SCHEMA JSON-LD
// ─────────────────────────────────────────────────────────────

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'Quel est le prix pour reproduire une clé de voiture à Nice ?',
    answer: `Chez Sinnes Automobiles à Nice, les tarifs sont : ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres ou badge, et ${PRICES.perteTotale.sinnes}€ en cas de perte totale. Devis gratuit avant toute intervention.`,
  },
  {
    question: 'Y a-t-il des frais de déplacement en plus du tarif ?',
    answer: 'Pas de frais de déplacement pour les interventions sur Nice. Pour les déplacements hors Nice (Antibes, Cannes, Cagnes-sur-Mer…), un forfait déplacement peut s\'appliquer — il est toujours précisé lors du devis.',
  },
  {
    question: 'Est-ce moins cher chez Sinnes qu\'au concessionnaire ?',
    answer: 'Oui, sensiblement. Un concessionnaire facture en général 150-250€ pour une clé simple, 200-400€ pour une clé centralisée, et jusqu\'à 1200€ en cas de perte totale. Sinnes Automobiles propose les mêmes prestations 2 à 5 fois moins cher, avec intervention à domicile.',
  },
  {
    question: 'Peut-on payer par carte bancaire ?',
    answer: 'Oui. Sinnes Automobiles accepte le paiement par carte bancaire, virement et espèces. La facture est remise systématiquement après l\'intervention.',
  },
]

const schema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://sinnes.fr/tarif-cle-voiture/#pricing',
      name: 'Tarif reproduction de clé de voiture',
      provider: { '@id': 'https://sinnes.fr/#organization' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Grille tarifaire clé automobile — Sinnes Automobiles',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'Clé simple (sans télécommande)',
            price: '78',
            priceCurrency: 'EUR',
            description: 'Décodage + taille laser + clonage transpondeur. Délai : 1-2h.',
          },
          {
            '@type': 'Offer',
            name: 'Clé centralisée (avec télécommande)',
            price: '132',
            priceCurrency: 'EUR',
            description: 'Décodage + taille laser + programmation transpondeur + télécommande. Délai : 2-3h.',
          },
          {
            '@type': 'Offer',
            name: 'Clé mains libres / badge',
            price: '150',
            priceCurrency: 'EUR',
            description: 'Programmation badge + décodage + insert de secours + télécommande. Délai : 2-4h.',
          },
          {
            '@type': 'Offer',
            name: 'Perte totale (sans aucun double)',
            price: '240',
            priceCurrency: 'EUR',
            description: 'Crochetage + décodage serrure + taille + programmation. Délai : selon complexité.',
          },
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
          name: 'Tarif clé de voiture',
          item: 'https://sinnes.fr/tarif-cle-voiture/',
        },
      ],
    },
    {
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    },
    {
      '@type': 'Person',
      '@id': 'https://sinnes.fr/#ines',
      name: TEAM.ines.name,
      jobTitle: TEAM.ines.jobTitle,
      knowsAbout: TEAM.ines.knowsAbout,
      description: TEAM.ines.description,
      worksFor: { '@id': 'https://sinnes.fr/#organization' },
    },
  ],
}


// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

const review = getReviewForPage('/tarif-cle-voiture/')

export default function TarifCleVoiturePage() {
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
              Tarif clé de voiture
            </li>
          </ol>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ background: '#0A0A0A' }} className="text-white py-20 px-4">
        <div className="container-sinnes text-center max-w-3xl mx-auto">
          {/* Badge avis */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-6">
            <span className="star-or text-lg" style={{ color: '#FBBC04' }}>★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">
              58 avis Google · 5.0/5
            </span>
          </div>

          <h1
            className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            {seoData['tarif-cle-voiture'].h1} : Prix à partir de {PRICES.cleSimple.sinnes}€
          </h1>

          <p className="font-body text-white/80 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
            Sinnes Automobiles affiche ses prix sans frais cachés : {PRICES.cleSimple.sinnes}€ pour
            une clé simple, {PRICES.cleCentralisee.sinnes}€ pour une clé centralisée,{' '}
            {PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres, {PRICES.perteTotale.sinnes}€
            en cas de perte totale. Intervention à domicile sur Nice et Côte d&apos;Azur, 7j/7.
            Jusqu&apos;à 5 fois moins cher qu&apos;au concessionnaire.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <a
              href={`tel:${NAP.phoneTel}`}
              className="inline-flex items-center justify-center gap-3 bg-[#e53935] text-white
                         font-body font-bold text-xl px-8 py-4 rounded-lg min-h-[56px]
                         hover:bg-[#c62828] transition-colors"
            >
              📞 Devis gratuit : {NAP.phoneDisplay}
            </a>
          </div>

          {/* Byline Inès */}
          <p className="text-sm text-white/70 border-l-4 border-accent pl-4 text-left max-w-xl mx-auto">
            Tarifs établis par{' '}
            <strong className="text-white">{TEAM.ines.name}</strong> ·{' '}
            {TEAM.ines.jobTitle}. Transparence totale, sans frais cachés.
          </p>
        </div>
      </section>
      <div className="bg-white"><div className="container-sinnes"><DiagonalDivider id="dd-tarif-cle-voiture" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* GRILLE TARIFAIRE */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-5xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-10 text-center">
            {seoData['tarif-cle-voiture'].h2[0]}
          </h2>

          {/* Cards pricing */}
          <PricingSection />

          <div className="text-center mb-14">
            <p className="font-body text-sm text-text-muted mb-5">
              Tous les devis sont gratuits. Le prix final est confirmé avant toute intervention.
            </p>
            <a
              href="/contactez-nous/"
              className="inline-block bg-[#e53935] text-white font-body font-bold text-base
                         px-8 py-3 rounded-lg min-h-[48px] hover:bg-[#c62828] transition-colors"
            >
              Demandez votre devis personnalisé
            </a>
          </div>

        </div>
      </section>

      <div className="bg-bg-shade"><div className="container-sinnes"><DiagonalDivider id="dd-tarif-2" icon={<SteeringWheelIcon size={42} color="#D4A017" />} color="#1A1A1A" /></div></div>

      {/* CORPS TEXTUEL */}
      <article className="bg-bg-shade py-16 px-4">
        <div className="container-sinnes max-w-3xl mx-auto">

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['tarif-cle-voiture'].h2[1]}
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Chez Sinnes Automobiles, le tarif annoncé comprend l&apos;intégralité de la prestation :
            déplacement sur Nice (sans supplément), diagnostic, décodage, taille mécanique de la
            lame et programmation électronique du transpondeur. Il n&apos;y a pas de poste
            &ldquo;main d&apos;œuvre&rdquo; dissocié des pièces.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            {TEAM.ines.name} supervise chaque devis et chaque facture : &ldquo;nous préférons perdre
            une vente plutôt que d&apos;avoir un client qui découvre un supplément en fin
            d&apos;intervention&rdquo;.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Pour le détail des prestations, consultez{' '}
            <a href="/reproduction-cle-voiture/" className="text-primary font-semibold hover:underline">
              nos services de reproduction
            </a>{' '}
            de clé de voiture.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['tarif-cle-voiture'].h2[2]}
          </h2>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Un concessionnaire facture le même service entre 2 et 5 fois plus cher pour trois
            raisons structurelles : stocks imposants de clés vierges, frais généraux d&apos;un
            réseau agréé, et délais d&apos;approvisionnement commandés par le constructeur.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Sinnes Automobiles travaille en flux tendu : les pièces sont commandées à la demande,
            les déplacements sont optimisés, et l&apos;expertise de Sinouhé Rochereau réduit le
            temps d&apos;intervention. Ce modèle permet de faire passer l&apos;économie directement
            sur le tarif client.
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Pour une analyse détaillée,{' '}
            <a href="/prix-cle-vs-concessionnaire/" className="text-primary font-semibold hover:underline">
              tarif vs concessionnaire
            </a>{' '}
            : notre comparatif complet.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            {seoData['tarif-cle-voiture'].h2[3]}
          </h2>

          <h3 className="font-heading font-bold text-xl text-text-main mb-3">
            {seoData['tarif-cle-voiture'].h3[0]}
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-6">
            Aucun frais de déplacement pour les interventions sur la ville de Nice. Pour les
            communes alentours (Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var,
            Villefranche-sur-Mer), un forfait déplacement peut s&apos;appliquer : il est toujours
            annoncé lors du devis, avant l&apos;intervention.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-main mb-3">
            {seoData['tarif-cle-voiture'].h3[1]}
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-6">
            Certains modèles anciens (avant 1990) ou rares nécessitent des pièces spécifiques
            difficiles à sourcer. Le délai peut être allongé et un devis personnalisé est alors
            établi. Contactez-nous pour vérification.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-main mb-3">
            {seoData['tarif-cle-voiture'].h3[2]}
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-4">
            Trois façons de nous contacter : appel direct au{' '}
            <a
              href={`tel:${NAP.phoneTel}`}
              className="text-primary font-semibold hover:underline"
            >
              {NAP.phoneDisplay}
            </a>{' '}
            (réponse sous 30 min en journée), formulaire en ligne, ou e-mail à{' '}
            <a
              href={`mailto:${NAP.email}`}
              className="text-primary font-semibold hover:underline"
            >
              {NAP.email}
            </a>
            .
          </p>
          <p className="font-body text-text-muted leading-relaxed mb-8">
            Précisez votre marque, votre modèle, l&apos;année du véhicule et votre situation
            (double préventif, clé endommagée, perte totale) :{' '}
            <a href="/contactez-nous/" className="text-primary font-semibold hover:underline">
              demandez votre devis personnalisé
            </a>{' '}
            en ligne.
          </p>

        </div>
      </article>


      {/* FAQ */}

      <section className="bg-white py-16 px-4">

        <div className="container-sinnes max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-8 text-center">
            {seoData['tarif-cle-voiture'].h2[4]}
          </h2>
          <FAQAccordion items={FAQ_ITEMS} />

          {/* Lien prix comparatifs */}
          <div className="mt-8 text-center">
            <p className="font-body text-text-muted text-sm">
              Voir aussi :{' '}
              <a href="/prix-cle-voiture/" className="text-primary font-semibold hover:underline">
                prix par type de clé
              </a>{' '}
              en détail
            </p>
          </div>
        </div>
      </section>


    </>
  )
}

      {review && <SingleReview review={review} serviceName="Tarif clé de voiture" serviceUrl="/tarif-cle-voiture/" />}
