import type { Metadata } from 'next'
import { NAP, PRICES, TEAM } from '@/constants/siteConfig'
import FAQAccordion from './FAQAccordion'

// ─────────────────────────────────────────────────────────────
// METADATA
// ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Tarif clé de voiture — Prix à partir de 78€ Nice',
  description: `Prix reproduction de clé de voiture à Nice. Clé simple ${PRICES.cleSimple.sinnes}€, centralisée ${PRICES.cleCentralisee.sinnes}€, mains libres ${PRICES.cleMainsLibres.sinnes}€, perte totale ${PRICES.perteTotale.sinnes}€. Devis gratuit — +33 6 75 54 04 11`,
  alternates: { canonical: 'https://sinnes.fr/tarif-cle-voiture/' },
  openGraph: {
    title: 'Tarif reproduction de clé voiture — Sinnes Automobiles',
    url: 'https://sinnes.fr/tarif-cle-voiture/',
    images: [{ url: '/images/depannage-urgence-sinnes-1024x523.jpg', width: 1024, height: 523 }],
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
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Quel est le prix pour reproduire une clé de voiture à Nice ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: `Chez Sinnes Automobiles à Nice, les tarifs sont : ${PRICES.cleSimple.sinnes}€ pour une clé simple, ${PRICES.cleCentralisee.sinnes}€ pour une clé centralisée, ${PRICES.cleMainsLibres.sinnes}€ pour une clé mains libres ou badge, et ${PRICES.perteTotale.sinnes}€ en cas de perte totale. Devis gratuit avant toute intervention.`,
          },
        },
        {
          '@type': 'Question',
          name: "Y a-t-il des frais de déplacement en plus du tarif ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Pas de frais de déplacement pour les interventions sur Nice. Pour les déplacements hors Nice (Antibes, Cannes, Cagnes-sur-Mer…), un forfait déplacement peut s'appliquer — il est toujours précisé lors du devis.",
          },
        },
        {
          '@type': 'Question',
          name: "Est-ce moins cher chez Sinnes qu'au concessionnaire ?",
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui, sensiblement. Un concessionnaire facture en général 150-250€ pour une clé simple, 200-400€ pour une clé centralisée, et jusqu'à 1200€ en cas de perte totale. Sinnes Automobiles propose les mêmes prestations 2 à 5 fois moins cher, avec intervention à domicile.",
          },
        },
        {
          '@type': 'Question',
          name: 'Peut-on payer par carte bancaire ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: "Oui. Sinnes Automobiles accepte le paiement par carte bancaire, virement et espèces. La facture est remise systématiquement après l'intervention.",
          },
        },
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://sinnes.fr/#ines',
      name: TEAM.ines.name,
      jobTitle: TEAM.ines.jobTitle,
      worksFor: { '@id': 'https://sinnes.fr/#organization' },
    },
  ],
}

// ─────────────────────────────────────────────────────────────
// DONNÉES TARIFS
// ─────────────────────────────────────────────────────────────

const TARIFS = [
  {
    type: PRICES.cleSimple.label,
    inclus: 'Décodage + taille laser + clonage transpondeur',
    prix: PRICES.cleSimple.sinnes,
    conces: `${PRICES.cleSimple.concessionnaire.min}-${PRICES.cleSimple.concessionnaire.max}`,
    economie: 'Jusqu\'à -69%',
    delai: '1-2h',
  },
  {
    type: PRICES.cleCentralisee.label,
    inclus: 'Décodage + taille + transpondeur + télécommande',
    prix: PRICES.cleCentralisee.sinnes,
    conces: `${PRICES.cleCentralisee.concessionnaire.min}-${PRICES.cleCentralisee.concessionnaire.max}`,
    economie: 'Jusqu\'à -67%',
    delai: '2-3h',
  },
  {
    type: PRICES.cleMainsLibres.label,
    inclus: 'Badge + insert + décodage + télécommande',
    prix: PRICES.cleMainsLibres.sinnes,
    conces: `${PRICES.cleMainsLibres.concessionnaire.min}-${PRICES.cleMainsLibres.concessionnaire.max}`,
    economie: 'Jusqu\'à -81%',
    delai: '2-4h',
  },
  {
    type: PRICES.perteTotale.label,
    inclus: 'Crochetage + décodage + taille + programmation',
    prix: PRICES.perteTotale.sinnes,
    conces: `${PRICES.perteTotale.concessionnaire.min}-${PRICES.perteTotale.concessionnaire.max}`,
    economie: 'Jusqu\'à -80%',
    delai: 'Variable',
  },
]

// ─────────────────────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────────────────────

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
            <span className="text-[#FFD700] text-lg">★★★★★</span>
            <span className="font-body text-white text-sm font-semibold">
              57 avis Google · 5.0/5
            </span>
          </div>

          <h1
            className="font-heading font-bold text-4xl md:text-5xl leading-tight mb-6"
            style={{ color: '#FFFFFF' }}
          >
            Tarif reproduction de clé de voiture — Prix à partir de {PRICES.cleSimple.sinnes}€
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
              📞 Devis gratuit — {NAP.phoneDisplay}
            </a>
          </div>

          {/* Byline Inès */}
          <p className="text-sm text-white/70 border-l-4 border-accent pl-4 text-left max-w-xl mx-auto">
            Tarifs établis par{' '}
            <strong className="text-white">{TEAM.ines.name}</strong> —{' '}
            {TEAM.ines.jobTitle}. Transparence totale, sans frais cachés.
          </p>
        </div>
      </section>

      {/* TABLEAU PRINCIPAL */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-4xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-8 text-center">
            Grille tarifaire — Tous types de clés
          </h2>

          {/* Mobile : cartes */}
          <div className="md:hidden space-y-4 mb-8">
            {TARIFS.map((t, i) => (
              <div key={i} className="border border-card-border rounded-xl p-5 bg-bg-shade">
                <p className="font-body font-bold text-text-main mb-1">{t.type}</p>
                <p className="font-body text-xs text-text-muted mb-3">{t.inclus}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-text-muted">Prix Sinnes</p>
                    <p className="font-bold text-primary text-lg">À partir de {t.prix}€</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-text-muted">Concessionnaire</p>
                    <p className="text-text-muted text-sm">{t.conces}€</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-semibold text-green-600">{t.economie}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop : tableau */}
          <div className="hidden md:block overflow-x-auto mb-8 rounded-xl border border-card-border">
            <table className="w-full font-body text-sm">
              <thead>
                <tr className="bg-accent text-white">
                  <th className="text-left px-5 py-4 font-bold">Type de clé</th>
                  <th className="text-left px-5 py-4 font-bold">Ce qui est inclus</th>
                  <th className="text-center px-5 py-4 font-bold">Prix Sinnes</th>
                  <th className="text-center px-5 py-4 font-bold">Concessionnaire</th>
                  <th className="text-center px-5 py-4 font-bold">Économie</th>
                  <th className="text-center px-5 py-4 font-bold">Délai</th>
                </tr>
              </thead>
              <tbody>
                {TARIFS.map((t, i) => (
                  <tr
                    key={i}
                    className={`border-t border-card-border ${i % 2 === 1 ? 'bg-bg-shade' : ''}`}
                  >
                    <td className="px-5 py-4 font-semibold text-text-main">{t.type}</td>
                    <td className="px-5 py-4 text-text-muted">{t.inclus}</td>
                    <td className="px-5 py-4 text-center font-bold text-primary">
                      À partir de {t.prix}€
                    </td>
                    <td className="px-5 py-4 text-center text-text-muted">{t.conces}€</td>
                    <td className="px-5 py-4 text-center font-semibold text-green-600">
                      {t.economie}
                    </td>
                    <td className="px-5 py-4 text-center text-text-muted">{t.delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-center">
            <p className="text-sm text-text-muted mb-4">
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

      {/* CORPS TEXTUEL */}
      <article className="bg-bg-shade py-16 px-4">
        <div className="container-sinnes max-w-3xl mx-auto">

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Ce qui est inclus dans le tarif — aucune surprise
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
            Pourquoi nos tarifs sont inférieurs au concessionnaire ?
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
            — notre comparatif complet.
          </p>

          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-6">
            Cas particuliers et suppléments éventuels
          </h2>

          <h3 className="font-heading font-bold text-xl text-text-main mb-3">
            Frais de déplacement hors Nice
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-6">
            Aucun frais de déplacement pour les interventions sur la ville de Nice. Pour les
            communes alentours (Antibes, Cagnes-sur-Mer, Cannes, Saint-Laurent-du-Var,
            Villefranche-sur-Mer), un forfait déplacement peut s&apos;appliquer — il est toujours
            annoncé lors du devis, avant l&apos;intervention.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-main mb-3">
            Véhicules anciens ou rares
          </h3>
          <p className="font-body text-text-muted leading-relaxed mb-6">
            Certains modèles anciens (avant 1990) ou rares nécessitent des pièces spécifiques
            difficiles à sourcer. Le délai peut être allongé et un devis personnalisé est alors
            établi. Contactez-nous pour vérification.
          </p>

          <h3 className="font-heading font-bold text-xl text-text-main mb-3">
            Comment obtenir un devis gratuit ?
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
            (double préventif, clé endommagée, perte totale) —{' '}
            <a href="/contactez-nous/" className="text-primary font-semibold hover:underline">
              demandez votre devis personnalisé
            </a>{' '}
            en ligne.
          </p>

        </div>
      </article>

      {/* CTA URGENCE */}
      <section className="bg-[#e53935] py-16 text-center text-white">
        <div className="container-sinnes">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">
            Devis gratuit en 30 minutes
          </h2>
          <p className="font-body text-xl mb-8 opacity-90">
            Décrivez votre véhicule et votre situation — nous vous répondons rapidement
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${NAP.phoneTel}`}
              className="inline-block bg-white text-[#e53935] font-body font-bold text-2xl
                         px-12 py-5 rounded-lg min-h-[56px] hover:bg-gray-100 transition-colors"
            >
              {NAP.phoneDisplay}
            </a>
            <a
              href="/contactez-nous/"
              className="inline-block border-2 border-white text-white font-body font-bold
                         text-xl px-10 py-4 rounded-lg min-h-[56px] hover:bg-white/10 transition-colors"
            >
              Formulaire de contact
            </a>
          </div>
          <p className="text-sm opacity-75 mt-4">
            *Pas de frais de déplacement pour les interventions à {NAP.address.addressLocality}
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 px-4">
        <div className="container-sinnes max-w-3xl mx-auto">
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-text-main mb-8 text-center">
            Questions fréquentes — Tarifs et paiement
          </h2>
          <FAQAccordion />

          {/* Lien prix comparatifs */}
          <div className="mt-8 text-center">
            <p className="font-body text-text-muted text-sm">
              Voir aussi :{' '}
              <a href="/prix-cle-voiture/" className="text-primary font-semibold hover:underline">
                prix par type de clé
              </a>{' '}
              en détail —{' '}
              <a href="/prix-cle-vs-concessionnaire/" className="text-primary font-semibold hover:underline">
                tarif vs concessionnaire
              </a>
            </p>
          </div>
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
        <p className="text-sm text-text-muted mt-3">7j/7 · Devis gratuit · Toutes marques</p>
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
