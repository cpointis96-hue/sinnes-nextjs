import { REVIEWS as ALL_REVIEWS } from './reviews'

/**
 * SOURCE DE VÉRITÉ UNIQUE POUR LE SEO ET LES TEXTES DU SITE
 * Modifiez ce fichier pour mettre à jour les titres, descriptions et textes alternatifs.
 */

export const seoData = {
  home: {
    title: 'Sinnes Automobiles — Reproduction de clé voiture Nice',
    description: 'Spécialiste reproduction & double de clé de voiture à Nice. Intervention 7j/7, tous véhicules. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Perte de clé auto\u00A0?',
    h2: [
      'Faites un double de clé en toute sécurité',
      'Sinnes Automobiles c\'est un service à domicile, on vient à votre rencontre, où que vous soyez\u00A0!',
      'Nos services',
      'Qui sommes nous\u00A0?',
      'Contactez-nous'
    ],
    images: {
      hero: 'Perte de clé auto - Service Sinnes Automobiles',
      deplacement: 'Sinnes Automobiles se déplace à domicile — Van Sinnes avec itinéraires Nice et alentours',
      programmation: 'Programmation de clé automobile Sinnes à Nice',
      achatrevente: 'Vente de véhicule occasion Sinnes Automobiles Nice',
      equipe: 'Sinouhé et Inès — Équipe Sinnes Automobiles à votre service',
      carte: 'Zone d\'intervention de Sinnes Automobiles — Nice et alentours — Serrurier automobile à Nice'
    }
  },
  'reproduction-cle-voiture': {
    title: 'Reproduction de clé de voiture Nice — Spécialiste',
    description: 'Reproduction et double de clé de voiture à Nice. Toutes marques, intervention 7j/7. À partir de 78€. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Reproduction de clé de voiture',
    h2: [
      "Qu'est-ce que la reproduction de clé de voiture ?",
      'Reproduction de clé avec ou sans original : deux situations',
      'Notre méthode : taille laser + programmation transpondeur',
      'Reproduction de clé pour plus de 40 marques de voiture',
      'Tarifs reproduction de clé de voiture : Transparence totale',
      'Pourquoi choisir Sinnes Automobiles plutôt qu\'un concessionnaire ?',
      'Questions fréquentes : Reproduction de clé de voiture'
    ],
    h3: [
      'Vous avez encore votre clé originale (double préventif)',
      "Vous n'avez plus aucune clé (perte totale)"
    ],
    images: {
      main: 'Service de reproduction de clé de voiture Sinnes Automobiles'
    },
    ctas: {
      sticky: { label: 'Obtenir un devis gratuit', variant: 'service' as const }
    }
  },
  'serrurier-automobile-nice': {
    title: 'Serrurier Automobile Nice — Intervention 7j/7',
    description: 'Serrurier automobile à Nice spécialisé clé de voiture. Intervention 7j/7, Antibes, Cannes, Côte d\'Azur. Devis gratuit.',
    h1: 'Serrurier Automobile à Nice',
    h2: [
      'Serrurier automobile à Nice : spécialiste clé de voiture, pas serrurier maison',
      'Sinouhé Rochereau · Formateur international, expert certifié',
      'Zone d\'intervention : Nice et Côte d\'Azur',
      'Serrurier automobile d\'urgence Nice : Clé bloquée, perdue ou cassée',
      'Nos interventions de serrurier automobile à Nice',
      'Tarifs serrurier automobile Nice : Transparence totale',
      'Questions fréquentes : Serrurier Automobile à Nice'
    ],
    h3: [
      'Ouverture de véhicule sans effraction',
      'Reproduction et double de clé de voiture',
      'Programmation de clé et transpondeur',
      'Clé perdue sans double existant'
    ],
    images: {
      main: 'Serrurier automobile en intervention à Nice'
    }
  },
  'tarif-cle-voiture': {
    title: 'Tarif clé de voiture — Prix à partir de 78€ Nice',
    description: 'Décodage + taille laser + clonage transpondeur. Délai : 1-2h. Économisez sur le prix concessionnaire.',
    h1: 'Tarif clé de voiture',
    h2: [
      'Grille tarifaire : Tous types de clés',
      'Ce qui est inclus dans le tarif : aucune surprise',
      'Pourquoi nos tarifs sont inférieurs au concessionnaire ?',
      'Cas particuliers et suppléments éventuels',
      'Questions fréquentes : Tarifs et paiement'
    ],
    h3: [
      'Frais de déplacement hors Nice',
      'Véhicules anciens ou rares',
      'Comment Obtenir un devis gratuit ?'
    ],
    images: {
      main: 'Grille tarifaire Sinnes Automobiles'
    }
  },
  'programmation-cle-voiture': {
    title: 'Programmation de clé voiture Nice — Transpondeur et badge',
    description: 'Programmation clé voiture à Nice : transpondeur, télécommande, badge mains libres. Sinouhé Rochereau, formateur Incarline. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Programmation de clé de voiture',
    h2: [
      'Le processus de programmation',
      'Programmation de clé voiture : qu\'est-ce que c\'est exactement ?',
      'Reprogrammation clé voiture : les 3 cas de figure',
      'Nos équipements professionnels : Abrites et ZedFull',
      'Programmation de clé voiture à domicile : Nice et Côte d\'Azur',
      'Programmation par marque : Audi, Mercedes, Renault...',
      'Programmer votre clé voiture à Nice',
      'Questions fréquentes : Programmation de clé'
    ],
    h3: [
      'Ajout d\'une nouvelle clé (vous avez encore l\'originale)',
      'Remplacement complet (clé perdue, immobiliseur réinitialisé)',
      'Télécommande seule (lame OK, plip défaillant)'
    ],
    images: {
      main: 'Programmation électronique de clé auto'
    },
    ctas: {
      sticky: { label: 'Obtenir un devis gratuit', variant: 'service' as const }
    }
  },
  'double-cle-voiture': {
    title: 'Double de clé voiture à Nice — Devis gratuit',
    description: 'Faire un double de clé voiture à Nice : intervention rapide, toutes marques. À partir de 78€. Sinouhé Rochereau, expert automobile. +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Double de clé de voiture',
    h2: [
      '4 étapes pour votre double de clé',
      'Pourquoi faire un double de clé voiture maintenant ?',
      'Faire un double de clé voiture : comment ça marche ?',
      'Prix d\'un double de clé voiture',
      'Double de clé Toyota, Hyundai : spécificités par marque',
      'Faire un double de clé voiture à Nice',
      'Questions fréquentes : Double de clé voiture'
    ],
    h3: [
      'Avec la clé originale : copie par décodage',
      'Sans la clé originale : décodage direct de la serrure'
    ],
    images: {
      main: 'Double de clé de voiture préventif'
    },
    ctas: {
      sticky: { label: 'Obtenir un devis gratuit', variant: 'service' as const }
    }
  },
  'cle-voiture-perdue': {
    title: 'Clé de voiture perdue sans double — Solution Nice',
    description: 'Clé de voiture perdue sans double à Nice ? Sinnes intervient en urgence : crochetage, décodage, nouvelle clé programmée. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Perte totale de clés de voiture',
    h2: [
      '4 étapes pour récupérer votre clé',
      'J\'ai perdu mes clés de voiture sans double : que faire ?',
      'Crochetage professionnel : ouvrir votre voiture sans casse',
      'Reconstituer une clé perdue : le processus complet',
      'Combien coûte une clé perdue sans double ?',
      'Prévenir la prochaine perte : l\'importance du double',
      'Clé perdue ? Appelez maintenant',
      'Questions fréquentes : Clé de voiture perdue'
    ],
    h3: [
      '1. Le crochetage et l\'ouverture du véhicule',
      '2. Le décodage de la serrure',
      '3. La programmation d\'une nouvelle clé'
    ],
    images: {
      main: 'Dépannage perte de clé voiture sans double'
    },
    ctas: {
      sticky: { label: 'URGENCE', variant: 'urgency' as const }
    }
  },
  'urgence-cle-voiture': {
    title: 'Urgence clé voiture Nice — Intervention immédiate 7j/7',
    description: 'Serrurier automobile d\'urgence à Nice. Clé bloquée, porte claquée, vol de clé. Intervention sous 30-45 minutes. +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Dépannage Urgence Clé Voiture',
    h2: [
      'Comment ça se passe ?',
      'Serrurier voiture urgence : disponible autour de vous',
      'Les 4 situations d\'urgence les plus fréquentes',
      'Pourquoi choisir Sinnes pour votre urgence ?',
      'Zone d\'intervention : Nice et Côte d\'Azur',
      'Questions fréquentes : Urgence clé voiture'
    ],
    images: {
      main: 'Intervention d\'urgence serrurier auto'
    },
    ctas: {
      sticky: { label: 'URGENCE', variant: 'urgency' as const }
    }
  },
  'depannage-cle-domicile': {
    title: 'Dépannage clé voiture à domicile — Nice et Côte d\'Azur',
    description: 'Dépannage et programmation de clé voiture à domicile à Nice. Intervention sur place 7j/7. Sinouhé Rochereau se déplace avec son matériel. +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Dépannage à domicile',
    h2: [
      'Comment se passe le dépannage à domicile ?',
      'Programmation clé voiture à domicile : comment ça marche ?',
      'Zones d\'intervention à domicile',
      'Dépannage d\'urgence à domicile',
      'Intervention à domicile sur la Côte d\'Azur',
      'Questions fréquentes : Dépannage clé à domicile'
    ],
    images: {
      main: 'Service mobile Sinnes Automobiles'
    },
    ctas: {
      sticky: { label: 'URGENCE', variant: 'urgency' as const }
    }
  },
  'cle-voiture-transpondeur': {
    title: 'Clé voiture transpondeur — Fonctionnement et programmation',
    description: 'Clé voiture avec transpondeur : comment ça fonctionne, comment la programmer ou reproduire. Expert Nice — Sinouhé Rochereau. +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Tout savoir sur le transpondeur',
    h2: [
      'Comment fonctionne un transpondeur ?',
      'Qu\'est-ce qu\'un transpondeur dans une clé de voiture ?',
      'Comment fonctionne l\'immobiliseur électronique ?',
      'Les différents types de transpondeurs automobiles',
      'Peut-on cloner un transpondeur de clé voiture ?',
      'Reproduire ou programmer une clé à transpondeur',
      'Programmer votre clé transpondeur',
      'Questions fréquentes : Clé voiture transpondeur'
    ],
    h3: [
      'Transpondeur fixe (ID60, ID33, T5)',
      'Transpondeur crypté (ID46, ID48, HITAG2)',
      'Transpondeur haute sécurité (HITAG Pro, DST80)'
    ],
    images: {
      main: 'Schéma puce transpondeur clé auto'
    },
    ctas: {
      sticky: { label: 'URGENCE', variant: 'urgency' as const }
    }
  },
  'cle-voiture-nice': {
    title: 'Clé de voiture Nice, Antibes, Cagnes-sur-Mer, Cannes',
    description: 'Reproduction et double de clé voiture à Nice, Antibes, Cagnes-sur-Mer et Cannes. Intervention mobile 7j/7. Sinouhé Rochereau. +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Service local Clé de voiture',
    h2: [
      'Comment se passe une intervention ?',
      'Nos interventions à Nice, quartier par quartier',
      'Intervention rapide sur Antibes : Sophia Antipolis, Vieil Antibes, Port Vauban',
      'Dépannage à Cagnes-sur-Mer : de l\'Hippodrome au Haut-de-Cagnes',
      'Serrurier auto à Cannes : Croisette, La Bocca et Palais des Festivals',
      'Votre clé de voiture sur toute la Côte d\'Azur',
      'Questions pratiques : Délais, accès et logistique par zone'
    ],
    h3: [
      'Vieux-Nice : intervention à pied obligatoire',
      'Aéroport Nice Côte d\'Azur : clé perdue avant ou après un vol',
      'Promenade des Anglais, Gare Nice-Ville, Quartier Libération',
      'Sophia Antipolis : véhicules modernes, systèmes complexes',
      'Vieil Antibes et remparts : accès piéton comme dans le Vieux-Nice',
      'Port Vauban : plaisanciers et véhicules de passage',
      'Hippodrome de la Côte d\'Azur : pics de demande les jours de courses',
      'Haut-de-Cagnes : village médiéval perché, accès piéton',
      'Cros-de-Cagnes : bord de mer, zone touristique',
      'Palais des Festivals et Croisette : pics de demande pendant les événements',
      'Rue d\'Antibes et parkings souterrains',
      'La Bocca : quartier résidentiel, couvert sans supplément'
    ],
    images: {
      main: 'Intervention Côte d\'Azur'
    },
    ctas: {
      sticky: { label: 'URGENCE', variant: 'urgency' as const }
    }
  },
  'prix-cle-voiture': {
    title: 'Prix clé voiture — Facteurs et fourchettes | Sinnes Nice',
    description: 'Quel est le prix pour refaire une clé de voiture ? Variantes selon la marque, le modèle et la technologie (simple, centralisée, mains libres).',
    h1: 'Prix d\'une reproduction de clé',
    h2: [
      'Comment obtenir votre prix ?',
      'Quels facteurs font varier le prix d\'une clé voiture ?',
      'Prix d\'un double de clé voiture',
      'Ce qui est inclus dans le prix',
      'Pourquoi Sinnes coûte moins cher ?',
      'Obtenez votre prix maintenant',
      'Questions fréquentes : Prix clé voiture'
    ],
    images: {
      main: 'Coût d\'une clé automobile'
    }
  },
  'prix-cle-vs-concessionnaire': {
    title: 'Serrurier auto vs concessionnaire — Jusqu\'à 6x moins cher',
    description: 'Refaire une clé voiture chez un serrurier indépendant vs concessionnaire : comparatif prix, délais et garantie. Économisez jusqu\'à 300€.',
    h1: 'Serrurier vs Concessionnaire',
    h2: [
      'Sinnes vs concessionnaire : les faits',
      'Tableau comparatif : serrurier vs concessionnaire 2026',
      'Pourquoi le concessionnaire coûte-t-il plus cher ?',
      'La garantie constructeur est-elle préservée chez Sinnes ?',
      'Délais : concessionnaire vs Sinnes',
      'Économisez jusqu\'à 80% sur votre clé de voiture',
      'Questions fréquentes : Prix serrurier vs concessionnaire'
    ],
    images: {
      main: 'Comparatif de prix clé auto'
    }
  },
  'refaire-cle-hyundai': {
    title: 'Refaire une clé Hyundai à Nice · Toutes générations',
    description: 'Reproduction et double de clé Hyundai à Nice. Architecture propriétaire IMMO3. Sinouhé Rochereau, expert Incarline. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Clé de voiture Hyundai',
    h2: [
      'Comment fonctionne la reproduction de clé Hyundai ?',
      'Refaire une clé Hyundai : modèles couverts',
      'Le système IMMO3 Hyundai : pourquoi la programmation est indispensable',
      'Tarif clé Hyundai : à partir de 78€',
      'Refaites votre clé Hyundai maintenant',
      'Questions fréquentes : Clé Hyundai'
    ],
    images: {
      main: 'Programmation clé Hyundai à Nice'
    }
  },
  'refaire-cle-audi': {
    title: 'Refaire une clé Audi à Nice · Programmation VAG officielle',
    description: 'Reproduction clé Audi à Nice : A1, A3, A4, Q3, Q5. Système KESSY et VAG. Sinouhé Rochereau, formateur Incarline. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Clé de voiture Audi',
    h2: [
      'Comment se déroule la programmation clé Audi ?',
      'Clé Audi : modèles couverts à Nice',
      'Système VAG et KESSY : pourquoi la programmation Audi est complexe',
      'Tarif clé Audi : à partir de 120€',
      'Refaites votre clé Audi maintenant',
      'Questions fréquentes : Clé Audi'
    ],
    images: {
      main: 'Programmation clé Audi système VAG'
    }
  },
  'refaire-cle-fiat': {
    title: 'Refaire une clé Fiat 500 à Nice — Double et programmation',
    description: 'Reproduction clé Fiat à Nice : Fiat 500, Panda, Tipo, Ducato. Programmation transpondeur ID46. Sinouhé Rochereau. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Clé de voiture Fiat',
    h2: [
      'Comment fonctionne la reproduction de clé Fiat ?',
      'Clé Fiat : modèles couverts à Nice',
      'Transpondeur ID46 Fiat : clonage ou programmation ?',
      'Tarif clé Fiat : à partir de 78€',
      'Refaites votre clé Fiat maintenant',
      'Questions fréquentes : Clé Fiat'
    ],
    images: {
      main: 'Reproduction clé Fiat 500'
    }
  },
  'refaire-cle-toyota': {
    title: 'Refaire une clé Toyota à Nice · Hybride et thermique',
    description: 'Reproduction clé Toyota à Nice : Yaris, Corolla, RAV4, hybride et thermique. Smart Entry & Start. Sinouhé Rochereau. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Clé de voiture Toyota',
    h2: [
      'Comment fonctionne la reproduction de clé Toyota ?',
      'Clé Toyota : modèles couverts à Nice',
      'Toyota Crypto G-chip : pourquoi la clé hybride est complexe',
      'Tarif clé Toyota : à partir de 78€',
      'Refaites votre clé Toyota maintenant',
      'Questions fréquentes : Clé Toyota'
    ],
    images: {
      main: 'Double de clé Toyota Hybride'
    }
  },
  'refaire-cle-mercedes': {
    title: 'Refaire une clé Mercedes à Nice — Clé étoile et badge',
    description: 'Reproduction clé Mercedes à Nice : Classe A, C, E, GLC. KESSY, clé étoile, ProxiKey. Sinouhé Rochereau, formateur Incarline. +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Clé de voiture Mercedes',
    h2: [
      'Comment fonctionne la reproduction de clé Mercedes ?',
      'Clé Mercedes : modèles couverts à Nice',
      'Clé étoile et ProxiKey Mercedes : programmation HiTag AES',
      'Tarif clé Mercedes : à partir de 120€',
      'Refaites votre clé Mercedes maintenant',
      'Questions fréquentes : Clé Mercedes'
    ],
    images: {
      main: 'Programmation clé étoile Mercedes'
    }
  },
  'refaire-cle-renault': {
    title: 'Refaire une clé Renault à Nice · Clé carte et clé à lame',
    description: 'Reproduction clé Renault à Nice : Clio, Captur, Mégane, clé carte. Sinouhé Rochereau, expert IVER Renault. Devis gratuit : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Clé de voiture Renault',
    h2: [
      'Comment fonctionne la reproduction de clé Renault ?',
      'Clé Renault : modèles couverts à Nice',
      'Clé carte Renault : le format le plus complexe du marché',
      'Tarif clé Renault : à partir de 78€',
      'Refaites votre clé Renault maintenant',
      'Questions fréquentes : Clé Renault'
    ],
    images: {
      main: 'Reproduction carte Renault à Nice'
    }
  },
  'acheter-une-voiture': {
    title: 'Acheter une voiture à Nice · Sinnes Automobiles',
    description: 'Vente de voitures d\'occasion révisées et garanties à Nice. Découvrez notre sélection de véhicules sélectionnés avec soin par Sinouhé Rochereau.',
    h1: 'Vente de véhicules d\'occasion',
    h2: [
      'Véhicules disponibles',
      'Contactez-nous pour le stock VO',
      'Voir les véhicules disponibles'
    ],
    images: {
      main: 'Voitures d\'occasion Sinnes Automobiles'
    }
  },
  'qui-sommes-nous': {
    title: 'Qui sommes-nous · Sinnes Automobiles Nice',
    description: 'Découvrez Sinouhé Rochereau et Inès Barthelemy, fondateurs de Sinnes Automobiles à Nice. Experts en reproduction de clé voiture et vente VO sur la Côte d\'Azur.',
    h1: 'Qui sommes-nous\u00A0?',
    h2: [
      'Sinouhé Rochereau · Référent technique',
      'Inès Barthelemy · Référente commerciale',
      'L\'histoire de Sinnes Automobiles',
      'Contactez Sinnes Automobiles'
    ],
    images: {
      main: 'L\'équipe Sinnes Automobiles'
    }
  },
  'contactez-nous': {
    title: 'Contactez Sinnes Automobiles — Devis gratuit · Nice',
    description: 'Contactez Sinnes Automobiles pour un devis gratuit. Reproduction de clé, serrurier automobile Nice. Réponse rapide 7j/7 : +33\u00A06\u00A075\u00A054\u00A004\u00A011',
    h1: 'Contactez-nous',
    h2: [
      'Coordonnées',
      'Demande de devis'
    ],
    images: {
      main: 'Formulaire de contact Sinnes'
    }
  },
  'mentions-legales-et-politique-de-confidentialite': {
    title: 'Mentions légales et politique de confidentialité — Sinnes Automobiles',
    description: 'Mentions légales, politique de confidentialité et informations RGPD de Sinnes Automobiles, 4 rue Diderot, 06000 Nice.',
    h1: 'Mentions Légales',
    h2: [
      '1. Mentions légales',
      '2. Politique de confidentialité'
    ],
    h3: [
      'Éditeur du site',
      'Directeur de publication',
      'Hébergeur',
      'Propriété intellectuelle',
      'Données collectées',
      'Finalité du traitement',
      'Base légale',
      'Conservation des données',
      'Partage des données',
      'Cookies',
      'Vos droits (RGPD)'
    ],
    images: {}
  }
} as const

/**
 * RÉFÉRENCE DES AVIS (Centralisée ici pour faciliter l'édition)
 * Les textes sont importés du fichier source src/data/reviews.ts
 */
export const reviewsData = ALL_REVIEWS

// ---------------------------------------------------------------------------
// SOURCES AUTORITAIRES — Liens de référence pour profils externes
// Base centralisée de tous les profils vérifiés (annuaires, registres, réseaux).
// Utilisé pour les sameAs dans les schemas JSON-LD et comme référence interne.
// ---------------------------------------------------------------------------

export const SOURCES = {
  /** Profils entreprise (Organization → sameAs) */
  enterprise: {
    gmb: 'https://www.google.com/maps/place/Sinnes+Automobiles/@43.7362735,7.105321,11z/data=!3m1!4b1!4m6!3m5!1s0x87fcb222a35de80b:0x2b059f74f9909f37!8m2!3d43.7361438!4d7.2701284!16s%2Fg%2F11x0g8czf3?entry=ttu',
    gmbPlaceId: '0x87fcb222a35de80b:0x2b059f74f9909f37',
    gmbKnowledgeGraphId: '/g/11x0g8czf3',
    societeCom: 'https://www.societe.com/societe/sinnes-automobiles-940997927.html',
    lefigaroEntreprises: 'https://entreprises.lefigaro.fr/sinnes-automobiles-06/entreprise-940997927',
    facebook: 'https://www.facebook.com/people/Sinnes-Automobiles/61572526535843/',
    instagram: 'https://www.instagram.com/sinnes_automobiles/',
    linkedin: 'https://www.linkedin.com/company/106317844',
  },
  /** Profils dirigeant Sinouhé Rochereau (Person → sameAs) */
  sinouhe: {
    pappers: 'https://www.pappers.fr/dirigeant/sinouhe_rochereau_1996-03',
    infonet: 'https://infonet.fr/dirigeants/66aa9fe95da7ac2c4b5d8f48/',
    societeCom: 'https://www.societe.com/manager/Sinouhe.ROCHEREAU.tbf-QSctD_i.html',
  },
  /** Profils dirigeante Inès Barthelemy (Person → sameAs) */
  ines: {
    infonet: 'https://infonet.fr/dirigeants/67d274ebcc8b3a47c0084462/',
    societeCom: 'https://www.societe.com/manager/Ines.BARTHELEMY.6HAmNw7pT9X.html',
  },
} as const
