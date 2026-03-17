/**
 * SINNES AUTOMOBILES — Configuration centralisée
 * Source de vérité unique pour NAP, coordonnées, horaires, équipe.
 *
 * ⚠️  CORRECTIONS APPLIQUÉES (audit 2026-03-15) :
 *   - Code postal : 06100 → 06000 (adresse réelle : Nice centre)
 *   - Latitude    : 43.7102 → 43.7031 (4 rue Diderot, coordonnées exactes)
 *   - Téléphone   : "+33 06.75.54.04.11" → E.164 + format affichage unifié
 */

// ---------------------------------------------------------------------------
// ORGANISATION
// ---------------------------------------------------------------------------

export const SITE_URL = 'https://sinnes.fr' as const

export const ORG = {
  name: 'Sinnes Automobiles',
  legalName: 'Sinnes Automobiles',
  /** SIRET affiché dans le footer et la page mentions légales */
  siret: '', // ← à renseigner
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-avec-fond-noir.png`,
  logoWidth: 500,
  logoHeight: 500,
  foundingDate: '2024',
} as const

// ---------------------------------------------------------------------------
// NAP — Name, Address, Phone
// Règle absolue : un seul format, copié/collé depuis ici partout.
// ---------------------------------------------------------------------------

export const NAP = {
  /** Affiché sur le site, dans les schemas, les réseaux sociaux */
  phoneDisplay: '+33 6 75 54 04 11',
  /** Valeur du href="tel:…" — E.164 sans espaces */
  phoneTel: '+33675540411',
  email: 'contact@sinnes.fr',
  address: {
    streetAddress: '4 rue Diderot',
    addressLocality: 'Nice',
    /** ✅ Corrigé : 06000 (pas 06100) */
    postalCode: '06000',
    addressCountry: 'FR',
    addressRegion: 'Provence-Alpes-Côte d\'Azur',
  },
} as const

// ---------------------------------------------------------------------------
// GÉOLOCALISATION
// ✅ Corrigé : latitude 43.7031 (pas 43.7102), longitude 7.2620 inchangée
// ---------------------------------------------------------------------------

export const GEO = {
  latitude: 43.7031,
  longitude: 7.2620,
} as const

// ---------------------------------------------------------------------------
// HORAIRES
// 7j/7 sur rendez-vous — schema.org format + affichage
// ---------------------------------------------------------------------------

export const HOURS = {
  /** Format schema.org OpeningHours */
  schemaValue: 'Mo-Su 00:00-23:59',
  /** Texte affiché sur le site */
  display: '7j/7 sur rendez-vous',
} as const

// ---------------------------------------------------------------------------
// ZONE DE SERVICE
// ---------------------------------------------------------------------------

export const AREA_SERVED = {
  type: 'GeoCircle',
  /** Rayon en mètres depuis l'atelier */
  geoRadius: '40000',
  cities: [
    'Nice',
    'Antibes',
    'Cagnes-sur-Mer',
    'Cannes',
    'Saint-Laurent-du-Var',
    'Villefranche-sur-Mer',
    'Menton',
    'Grasse',
    'Vence',
    'Mougins',
  ],
} as const

// ---------------------------------------------------------------------------
// AVIS CLIENTS
// ---------------------------------------------------------------------------

export const REVIEWS = {
  ratingValue: '5.0',
  reviewCount: '57',
  bestRating: '5',
  worstRating: '1',
} as const

// ---------------------------------------------------------------------------
// RÉSEAUX SOCIAUX
// ---------------------------------------------------------------------------

export const SOCIAL = {
  facebook: 'https://www.facebook.com/profile.php?id=61572526535843',
  instagram: 'https://www.instagram.com/sinnes_automobiles/',
  linkedin: 'https://www.linkedin.com/company/106317844',
  googleMaps: 'https://www.google.com/maps/place/Sinnes+Automobiles/',
} as const

export const SAME_AS: string[] = [
  SOCIAL.facebook,
  SOCIAL.instagram,
  SOCIAL.linkedin,
  SOCIAL.googleMaps,
]

// ---------------------------------------------------------------------------
// ÉQUIPE — E-E-A-T Personas
// ---------------------------------------------------------------------------

export const TEAM = {
  sinouhe: {
    /** @id schema.org unique et stable */
    id: `${SITE_URL}/#sinouhe`,
    name: 'Sinouhé Rochereau',
    jobTitle: 'Expert en programmation de clés automobiles',
    description:
      'Formateur international chez Incarline, spécialiste de l\'électronique automobile. ' +
      'Commissaire au Grand Prix de Monaco depuis 2016.',
    knowsAbout: [
      'Programmation clé automobile',
      'Électronique automobile',
      'Transpondeur',
      'Clé mains libres',
      'Diagnostic véhicule',
      'Valise Abrites',
      'ZedFull',
    ],
  },
  ines: {
    id: `${SITE_URL}/#ines`,
    name: 'Inès Barthelemy',
    jobTitle: 'Co-fondatrice — Gestion et relation client',
    description:
      'Responsable devis, facturation et suivi client chez Sinnes Automobiles.',
    knowsAbout: ['Devis automobile', 'Facturation', 'Relation client', 'Tarification'],
  },
} as const

// ---------------------------------------------------------------------------
// TARIFS (Schema Offer + affichage)
// Source : grille tarifaire validée client
// ---------------------------------------------------------------------------

export const PRICES = {
  cleSimple: {
    label: 'Clé simple (sans télécommande)',
    sinnes: 78,
    concessionnaire: { min: 150, max: 250 },
    currency: 'EUR',
  },
  cleCentralisee: {
    label: 'Clé centralisée (avec télécommande)',
    sinnes: 132,
    concessionnaire: { min: 200, max: 400 },
    currency: 'EUR',
  },
  cleMainsLibres: {
    label: 'Clé mains libres / badge',
    sinnes: 150,
    concessionnaire: { min: 400, max: 800 },
    currency: 'EUR',
  },
  perteTotale: {
    label: 'Perte totale (sans double existant)',
    sinnes: 240,
    concessionnaire: { min: 500, max: 1200 },
    currency: 'EUR',
  },
} as const

// ---------------------------------------------------------------------------
// NAVIGATION — menu principal
// (voir aussi Header.tsx pour le rendu)
// ---------------------------------------------------------------------------

export const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Reproduction de clé', href: '/reproduction-cle-voiture/' },
  { label: 'Serrurier Nice', href: '/serrurier-automobile-nice/' },
  { label: 'Tarifs', href: '/tarif-cle-voiture/' },
  { label: 'Acheter une voiture', href: '/acheter-une-voiture/' },
  { label: 'Contact', href: '/contactez-nous/' },
] as const

// ---------------------------------------------------------------------------
// GOOGLE MAPS embed (sans API key)
// ---------------------------------------------------------------------------

export const GOOGLE_MAPS_EMBED_SRC =
  'https://maps.google.com/maps?q=4+rue+diderot+nice+06000&output=embed&hl=fr'
