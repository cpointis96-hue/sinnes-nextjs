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
  siret: '940 997 927 00014',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo-avec-fond-noir.png`,
  logoWidth: 500,
  logoHeight: 500,
  foundingDate: '2025-01-01',
} as const

// ---------------------------------------------------------------------------
// NAP — Name, Address, Phone
// Règle absolue : un seul format, copié/collé depuis ici partout.
// ---------------------------------------------------------------------------

export const NAP = {
  /** Affiché sur le site, dans les schemas, les réseaux sociaux */
  phoneDisplay: '+33\u00A06\u00A075\u00A054\u00A004\u00A011',
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
// Source de vérité : Google My Business PlaceID ChIJl4_C8y7QzRIR_0Vn9YmYrGk
// Coordonnées extraites du marker GMB : !3d43.7361438!4d7.2701284
// ---------------------------------------------------------------------------

export const GEO = {
  latitude: 43.7361438,
  longitude: 7.2701284,
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
  reviewCount: '58',
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
  /** PlaceID officiel GMB pour Sinnes Automobiles Nice */
  gmbPlaceId: 'ChIJl4_C8y7QzRIR_0Vn9YmYrGk',
  /** URL directe vers les avis Google */
  gmbReviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJl4_C8y7QzRIR_0Vn9YmYrGk',
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
// Force refresh for hydration
// ---------------------------------------------------------------------------


export const NAV_ITEMS = [
  { label: 'Accueil', href: '/' },
  { label: 'Reproduction de clé', href: '/reproduction-cle-voiture/' },
  { label: 'Serrurier Nice', href: '/serrurier-automobile-nice/' },
  { label: 'Tarifs', href: '/tarif-cle-voiture/' },
  { label: 'Contact', href: '/contactez-nous/' },
] as const

// ---------------------------------------------------------------------------
// INFRASTRUCTURE SÉMANTIQUE (Entity-First 2026)
// ---------------------------------------------------------------------------

/** 
 * Mapping des IDs Wikidata vérifiés pour le Knowledge Graph.
 * Source de vérité pour les sameAs et about.
 */
export const ENTITY_LINKS = {
  nice: "https://www.wikidata.org/wiki/Q33959",
  antibes: "https://www.wikidata.org/wiki/Q126898",
  cannes: "https://www.wikidata.org/wiki/Q39984",
  cagnes: "https://www.wikidata.org/wiki/Q193832",
  cotedazur: "https://www.wikidata.org/wiki/Q182822",
  alpesmar: "https://www.wikidata.org/wiki/Q3139",
  monacogp: "https://www.wikidata.org/wiki/Q9102",
  locksmith: "https://www.wikidata.org/wiki/Q3479990",
  immobilizer: "https://www.wikidata.org/wiki/Q1571429",
  rfid: "https://www.wikidata.org/wiki/Q104954",
  renault: "https://www.wikidata.org/wiki/Q6686",
  audi: "https://www.wikidata.org/wiki/Q23317",
  mercedes: "https://www.wikidata.org/wiki/Q36008",
  toyota: "https://www.wikidata.org/wiki/Q53268",
  hyundai: "https://www.wikidata.org/wiki/Q55931",
  fiat: "https://www.wikidata.org/wiki/Q27510",
  vwgroup: "https://www.wikidata.org/wiki/Q156578",
} as const

/** 
 * Profils autoritaires externes (E-E-A-T).
 * Utilisé pour croiser les signaux de confiance GMB, SIRENE et réseaux.
 */
export const SOURCES = {
  enterprise: {
    gmb: 'https://www.google.com/maps/place/Sinnes+Automobiles/@43.7362735,7.105321,11z/data=!3m1!4b1!4m6!3m5!1s0x87fcb222a35de80b:0x2b059f74f9909f37!8m2!3d43.7361438!4d7.2701284!16s%2Fg%2F11x0g8czf3?entry=ttu',
    societeCom: 'https://www.societe.com/societe/sinnes-automobiles-940997927.html',
    lefigaroEntreprises: 'https://entreprises.lefigaro.fr/sinnes-automobiles-06/entreprise-940997927',
  },
  sinouhe: {
    pappers: 'https://www.pappers.fr/dirigeant/sinouhe_rochereau_1996-03',
    infonet: 'https://infonet.fr/dirigeants/66aa9fe95da7ac2c4b5d8f48/',
    societeCom: 'https://www.societe.com/manager/Sinouhe.ROCHEREAU.tbf-QSctD_i.html',
  },
  ines: {
    infonet: 'https://infonet.fr/dirigeants/67d274ebcc8b3a47c0084462/',
    societeCom: 'https://www.societe.com/manager/Ines.BARTHELEMY.6HAmNw7pT9X.html',
  },
} as const

/**
 * Villes desservies typées pour injection JSON-LD directe.
 */
export const AREA_SERVED_TYPED = [
  { '@type': 'City' as const, name: 'Nice', sameAs: ENTITY_LINKS.nice },
  { '@type': 'City' as const, name: 'Antibes', sameAs: ENTITY_LINKS.antibes },
  { '@type': 'City' as const, name: 'Cagnes-sur-Mer', sameAs: ENTITY_LINKS.cagnes },
  { '@type': 'City' as const, name: 'Cannes', sameAs: ENTITY_LINKS.cannes },
]

/**
 * Entité Person maximale pour Sinouhé Rochereau.
 */
export const SINOUHE_FULL_ENTITY = {
  '@type': 'Person' as const,
  '@id': TEAM.sinouhe.id,
  name: TEAM.sinouhe.name,
  jobTitle: TEAM.sinouhe.jobTitle,
  description: TEAM.sinouhe.description,
  sameAs: [
    SOCIAL.linkedin,
    SOURCES.sinouhe.pappers,
    SOURCES.sinouhe.infonet,
    SOURCES.sinouhe.societeCom,
    ENTITY_LINKS.monacogp,
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential' as const,
      name: 'Formateur international Incarline',
      credentialCategory: 'certification',
    },
  ],
  memberOf: [
    {
      '@type': 'SportsOrganization' as const,
      name: 'Grand Prix de Monaco',
      sameAs: ENTITY_LINKS.monacogp,
    },
  ],
  knowsAbout: [
    { '@type': 'Thing' as const, name: 'Programmation de clé automobile', sameAs: ENTITY_LINKS.locksmith },
    { '@type': 'Thing' as const, name: 'Transpondeur RFID', sameAs: ENTITY_LINKS.rfid },
    { '@type': 'Thing' as const, name: 'Immobiliseur électronique', sameAs: ENTITY_LINKS.immobilizer },
  ],
}
