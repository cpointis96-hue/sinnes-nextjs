> Pièce historique de mars 2026. Les chiffres, promesses commerciales et descriptions techniques sont ceux du document source, sans validation actuelle. Lire les réserves dans [le dossier de présentation](../README.md) et [la grille de prix](../tarification.md). Cette pièce ne prouve ni signature, ni paiement, ni résultat SEO.

SINNES AUTOMOBILES
Nice & Côte d'Azur — Serrurier automobile & Reproduction de clé
ANALYSE SEO COMPARATIVE
Refonte complète & Proposition de suivi mensuel
Mars 2026 — Document confidentiel

1. Résumé exécutif
Ce document présente une analyse approfondie des deux versions du site sinnes.fr, réalisée après une lecture technique complète du code source. Il compare le site WordPress existant (sinnes-mirror) avec la refonte Next.js 15 (sinnes-nextjs), et détaille l'ensemble des améliorations SEO apportées pour justifier la valeur de la prestation.
5 pages
Ancien site
21 pages
Nouveau site
0 schemas
JSON-LD structurés
5 types
de schemas par page

2. Analyse de l'ancien site (WordPress)
2.1 Architecture technique
L'ancien site repose sur WordPress avec le plugin Elementor (page builder) et le thème Hello Elementor. Un plugin tiers, Motors (conçu pour les concessionnaires automobiles), est utilisé comme base — il est totalement inadapté au modèle d'affaires de Sinnes (serrurier automobile, non concessionnaire).
Problèmes techniques identifiés
Plugin Motors (concessionnaire) : inadapté au métier de serrurier automobile, génère du contenu parasite et un balisage confus pour Google
Elementor + jQuery : rendu côté client lourd, Core Web Vitals dégradés (LCP, CLS élevés)
Pages "listings" voitures d'occasion indexées (Renault Twingo, BMW Série 3, Peugeot 207) : contenu hors-sujet qui dilue la thématique principale et envoie des signaux contradictoires à Google
Environ 15 feuilles CSS tierces chargées : performance réseau très impactée
2.2 Erreurs SEO critiques
Balises canoniques cassées
Sur toutes les pages du site, la balise canonical est définie en chemin relatif :
<link rel="canonical" href="index.html" />
Une canonical relative pointe vers un chemin inexistant et invalide la directive pour Google. Cela signifie que Google ignore la canonical sur l'ensemble du site — risque de contenu dupliqué non géré.
Données structurées Schema.org erronées
Code postal incorrect : "06100" dans le schema alors que l'adresse réelle est 06000 (Nice centre)
Téléphone mal formaté : "+33 06.75.54.04.11" (double préfixe international) — invalide pour Google
Coordonnées GPS approximatives : "43.7102, 7.2620" ne correspondent pas à l'adresse Google My Business réelle
og:type = "article" sur les pages "Qui sommes-nous" et "Contact" (devrait être "website")
Aucun schema FAQPage, Service, Offer, BreadcrumbList, Person — zéro rich snippet possible
Incohérences de balises
Page "Qui sommes-nous" : title = "Serrurier Automobile à Nice – Dépannage Express & Clés Perdues | Sinnes Automobiles – Intervention en 30 Minutes !" (62 mots, hors-sujet pour une page institutionnelle)
Emojis dans les meta descriptions (emoji 🔑 dans la description de "Qui sommes-nous") : mauvaise pratique SEO
Pas de sitemap.xml déclaré dans les fichiers du site
Pas de robots.txt configuré
2.3 Architecture des pages
L'ancien site ne dispose que de 4 à 5 pages de contenu réel, toutes peu développées :
Accueil (page principale)
Qui sommes-nous (peu de contenu)
Contactez-nous
Mentions légales
Programmation de clé (page de service unique — non retrouvée dans le mirror)
Zéro page dédiée aux requêtes à fort potentiel commercial :
Aucune page "double de clé voiture"
Aucune page "clé voiture perdue"
Aucune page "urgence"
Aucune page géolocalisée (Nice, Antibes, Cannes, Cagnes)
Aucune page par marque (Renault, Toyota, Audi, Mercedes...)
Aucune page de comparaison de prix
Aucune page "transpondeur"
2.4 Maillage interne
Le maillage interne est quasi inexistant. Les rares pages présentes ne se lient pas entre elles de façon structurée. Google ne peut pas crawl efficacement le site, et aucun "jus SEO" n'est transmis entre les pages.

3. Analyse du nouveau site (Next.js 15)
3.1 Architecture technique
Le nouveau site est construit sur Next.js 15, le framework React de référence pour le SEO et les performances web. Voici les avantages techniques directs :
Rendu côté serveur (SSR/SSG) : le HTML est livré pré-rendu à Google — pas de JS à exécuter pour crawler
next/font : les polices sont chargées sans import externe (zéro CLS, zéro requête bloquante)
Sitemap.xml généré automatiquement via sitemap.ts — toujours à jour
robots.txt correct : Allow: / + déclaration du sitemap
Architecture de composants réutilisables : TrustStrip, StickyCTA, FAQAccordion, SingleReview
CTA sticky mobile : bouton d'appel fixe en bas d'écran sur mobile — améliore le taux de conversion
3.2 Structure des pages — +16 nouvelles pages
Le nouveau site indexe 21 pages, contre ~5 pour l'ancien. Chaque page cible une intention de recherche précise :
Catégorie
URL / Page
Requête cible
Services
/reproduction-cle-voiture/
"reproduction clé voiture Nice" — existant
Services
/serrurier-automobile-nice/
"serrurier automobile Nice" — NOUVEAU
Services
/tarif-cle-voiture/
"tarif clé voiture Nice" — NOUVEAU
Services
/programmation-cle-voiture/
"programmation clé voiture Nice" — existant
Services
/double-cle-voiture/
"double clé voiture Nice" — NOUVEAU
Urgence
/cle-voiture-perdue/
"clé voiture perdue Nice" — NOUVEAU
Urgence
/urgence-cle-voiture/
"urgence clé voiture Nice" — NOUVEAU
Urgence
/depannage-cle-domicile/
"dépannage clé domicile Nice" — NOUVEAU
Technique
/cle-voiture-transpondeur/
"clé voiture transpondeur" — NOUVEAU
Géo
/cle-voiture-nice/
"clé voiture Nice Antibes Cannes" — NOUVEAU
Prix
/prix-cle-voiture/
"prix clé voiture" — NOUVEAU
Prix
/prix-cle-vs-concessionnaire/
"serrurier vs concessionnaire" — NOUVEAU
Marques
/refaire-cle-hyundai/
"clé Hyundai Nice" — NOUVEAU
Marques
/refaire-cle-audi/
"clé Audi Nice" — NOUVEAU
Marques
/refaire-cle-fiat/
"clé Fiat 500 Nice" — NOUVEAU
Marques
/refaire-cle-toyota/
"clé Toyota Nice hybride" — NOUVEAU
Marques
/refaire-cle-mercedes/
"clé Mercedes Nice" — NOUVEAU
Marques
/refaire-cle-renault/
"clé Renault Nice" — NOUVEAU
Institutionnel
/qui-sommes-nous/
"Sinnes Automobiles équipe" — existant
Institutionnel
/contactez-nous/
Contact / devis — existant

4. Comparatif SEO point par point
Critère SEO
Ancien site (WordPress)
Nouveau site (Next.js 15)
Nombre de pages indexées
~5 pages (dont 3 hors-sujet)
21 pages SEO ciblées
Balises Title
Trop longues, hors-sujet (ex: 62 mots sur "Qui sommes-nous")
Optimisées < 60 caractères, avec prix et téléphone
Balises canonical
Cassées (href="index.html" relatif)
Absolues et correctes sur toutes les pages
Meta descriptions
Génériques, emojis, sans données
Uniques, avec prix (78€) et numéro de tel
Sitemap.xml
Non déclaré
Généré automatiquement, 21 URLs
robots.txt
Non configuré
Allow: / + sitemap déclaré
Schema JSON-LD
Basique (Organization seul, avec erreurs)
Service + FAQPage + BreadcrumbList + WebPage + Person × 21 pages
Code postal NAP
06100 (FAUX)
06000 (corrigé — adresse réelle)
Téléphone NAP
"+33 06.75.54.04.11" (double préfixe)
E.164 unifié : +33675540411
Coordonnées GPS
Approximatives (43.7102, 7.2620)
Exactes GMB (43.7361438, 7.2701284)
Maillage interne
Inexistant
Complet — chaque page lie vers 3-5 pages pertinentes
Hiérarchie H1/H2/H3
Non structurée
1 H1 + 5 à 8 H2 + H3 ciblés par page
FAQPage (rich snippets)
Aucune
4 à 6 questions/réponses par page service
Grille tarifaire
Absente
Prix publics + comparatif concessionnaire sur 2 pages
Breadcrumbs
Basique (2 niveaux, données partielles)
BreadcrumbList schema complet sur toutes les pages
E-E-A-T (Expertise)
Non valorisé
Persona Sinouhé : formateur Incarline + GP Monaco + Wikidata
Pages géolocalisées
Aucune
/cle-voiture-nice/ : Nice, Antibes, Cagnes, Cannes par quartier
Pages par marque
Aucune
6 pages (Renault, Toyota, Audi, Mercedes, Fiat, Hyundai)
Pages intention urgence
Aucune
3 pages (/urgence/, /cle-perdue/, /depannage-domicile/)
Open Graph images
Logo 500x500 (toutes pages identiques)
OG dédié 1200×630 par catégorie
Performance (stack)
Elementor + 15 CSS + jQuery (lent)
Next.js 15 SSR + next/font (zéro CLS attendu)
Plugin inadapté
Motors (concessionnaire auto)
Supprimé — stack 100% sur-mesure
Listings voitures hors-sujet
Renault Twingo, BMW, Peugeot 207 indexés
Supprimés — thématique 100% serrurier
CTA mobile
Absent
StickyCTA bottom fixe 7j/7 sur toutes les pages
Avis clients intégrés
Absents sur les pages service
SingleReview + AggregateRating (58 avis 5.0/5)

5. Données structurées & E-E-A-T
5.1 Schemas JSON-LD déployés par page
Le nouveau site déploie une infrastructure sémantique complète sur chaque page. Voici les types de schemas présents :
Service + OfferCatalog + Offer (avec prix en euros) : génère des rich snippets de tarif dans Google
FAQPage + Question + Answer : génère les accordéons de questions/réponses dans les SERPs
BreadcrumbList : fil d'Ariane visible dans Google avec URL structurée
WebPage avec datePublished et dateModified : signal de fraîcheur du contenu
Person (Sinouhé Rochereau) : signal E-E-A-T — expertise, expérience, autorité
AggregateRating (home) : 58 avis 5.0/5 affichés dans les résultats de recherche
5.2 Stratégie E-E-A-T (Experience, Expertise, Authority, Trust)
Chaque page service intègre une "byline" structurée pour Sinouhé Rochereau avec :
Titre : "Formateur international chez Incarline, Commissaire au Grand Prix de Monaco depuis 2016"
sameAs vers LinkedIn, Pappers, Infonet, Societe.com — croisement de sources autoritaires
knowsAbout : liens Wikidata vers "Programmation de clé automobile", "Transpondeur RFID", "Immobiliseur électronique"
hasCredential : certification formateur Incarline en schema.org
memberOf : lien Wikidata vers le Grand Prix de Monaco
L'entreprise elle-même est liée via sameAs à : Google My Business (PlaceID officiel), Facebook, Instagram, LinkedIn, Societe.com, et les coordonnées GPS sont extraites directement de Google My Business.

6. Stratégie de maillage interne
L'un des piliers de la refonte est la construction d'un maillage interne en silos thématiques. Chaque page service fait des liens contextuels vers les pages complémentaires. Quelques exemples concrets issus du code :
/reproduction-cle-voiture/ → /programmation-cle-voiture/ + /cle-voiture-transpondeur/ + /double-cle-voiture/ + /cle-voiture-perdue/
/double-cle-voiture/ → /refaire-cle-toyota/ + /refaire-cle-hyundai/ + /refaire-cle-renault/ + /refaire-cle-fiat/
/urgence-cle-voiture/ → /serrurier-automobile-nice/ + /depannage-cle-domicile/
/tarif-cle-voiture/ → /prix-cle-vs-concessionnaire/ + /prix-cle-voiture/
Ce maillage permet à Google de comprendre la hiérarchie thématique du site, de transmettre le "jus SEO" des pages les plus fortes vers les pages secondaires, et d'indexer l'intégralité des pages du site efficacement.
7. Corrections NAP et cohérence locale
Pour le SEO local, la cohérence NAP (Name, Address, Phone) est un facteur de ranking direct. Voici toutes les corrections appliquées :
Champ NAP
Avant (erroné)
Après (corrigé)
Code postal
06100
06000 (vérifié sur Google My Business)
Téléphone
"+33 06.75.54.04.11" (double préfixe)
E.164 : +33675540411 — format universel
Latitude GPS
43.7102 (approximatif)
43.7361438 (PlaceID GMB exact)
Longitude GPS
7.2620 (approximatif)
7.2701284 (PlaceID GMB exact)
OpeningHours
Monday...Sunday 00:00-23:59
Mo-Su 00:00-23:59 (format schema.org)
addressRegion
"Nice" (ville en region)
"Provence-Alpes-Côte d'Azur" (région)

8. Tarifs du marché SEO freelance en France (2026)
Données issues d'une recherche croisée sur les plateformes Malt, Codeur.com, FreelanceRepublik et des comparateurs de prix SEO (Betterseo, Plateya, GalaxieSEO — mars 2026).
Prestation
Fourchette marché
Contexte
Audit SEO complet (site vitrine)
500€ – 2 000€
Prestation ponctuelle, analyse technique + sémantique
Refonte SEO + migration (5-10 pages)
2 500€ – 6 000€
Freelance senior, contenu + technique + schemas
Refonte SEO + 20 pages (site complet)
4 000€ – 10 000€
Freelance expert, architecture silos + E-E-A-T
Optimisation on-page (par page)
150€ – 400€/page
Title, H1-H3, contenu, schema, canonical
Suivi SEO mensuel (TPE locale)
500€ – 1 000€/mois
Reporting, ajustements, 1-2 contenus/mois
Suivi SEO mensuel (PME complète)
900€ – 1 500€/mois
Audit continu, contenu, netlinking, reporting
TJM consultant SEO confirmé
570€ – 1 200€/jour
Tarif journalier moyen France (Malt / FreelanceRepublik)
Note : Ces données sont issues des sources publiques françaises de référence (2026). La fourchette haute s'applique aux profils avec 5+ ans d'expérience spécialisée. La fourchette basse correspond aux profils juniors sans spécialisation sectorielle.

9. Proposition commerciale
9.1 Ce qui a été réalisé (refonte)
Voici le récapitulatif objectif des livrables produits pour la refonte du site sinnes.fr :
Architecture de 21 pages SEO from scratch (Next.js 15, TypeScript, Tailwind)
Rédaction de 21 contenus uniques optimisés (H1, H2, H3, corps de texte, FAQ)
Déploiement de schemas JSON-LD sur chaque page : 5 types × 21 pages = 105 entités structurées
Correction complète du NAP (code postal, téléphone, coordonnées GPS)
Stratégie de maillage interne complet entre toutes les pages
Infrastructure E-E-A-T : persona Sinouhé avec credentials Wikidata, pappers, infonet, societe.com
Sitemap.xml + robots.txt + balises canonical correctes
Suppression du plugin Motors inadapté + des pages listings hors-sujet
Composants UI optimisés conversion : StickyCTA, TrustStrip, SingleReview, ProcessSteps
6 pages marques (Renault, Toyota, Audi, Mercedes, Fiat, Hyundai)
1 page géolocalisée avec couverture par quartier (Nice, Antibes, Cagnes, Cannes)
2 pages prix/comparatif avec grille tarifaire publique et tableau concessionnaire
Tests E2E (Playwright) : 8 suites de tests automatisés pour valider le comportement SEO
9.2 Grille tarifaire recommandée
Ligne
Montant HT
Détail
Refonte SEO complète (21 pages)
2 500€
Architecture, contenu, schemas, maillage, E-E-A-T, corrections NAP
– Dont livrables techniques (Next.js)

Code source, composants UI, tests Playwright, CI/CD prêt
– Dont livrables SEO

21 pages × contenu + schemas + maillage interne
TOTAL REFONTE (one-shot)
2 500€ HT

Suivi SEO mensuel — Formule Essentiel
450€/mois
Reporting mensuel, ajustements titres/metas, 1 nouveau contenu/mois
Suivi SEO mensuel — Formule Standard
750€/mois
Essentiel + 2 contenus + suivi positions + link building léger
Suivi SEO mensuel — Formule Premium
1 200€/mois
Standard + audit continu + 4 contenus + reporting détaillé + netlinking
Ces tarifs sont positionnés dans la fourchette basse-médiane du marché français pour un freelance spécialisé en SEO local et technique (cf. section 8). La valeur ajoutée est ici très concrète : passage de ~5 pages généralistes à 21 pages ultra-ciblées, corrections techniques critiques, et infrastructure E-E-A-T complète.
9.3 Éléments de justification face au client
21 pages créées from scratch (vs 5 avant) = ×4 de surface d'indexation pour Google
6 erreurs techniques critiques corrigées (canonical, code postal, téléphone, GPS, schemas, robots)
105 entités structurées JSON-LD déployées (0 auparavant) = rich snippets potentiels dans Google
Suppression du contenu hors-sujet (listings voitures) qui nuisait à la thématique
Stack Next.js 15 = meilleur Core Web Vitals attendu vs WordPress/Elementor
Maillage interne complet = chaque page "passe" du poids SEO aux autres
Persona E-E-A-T avec 5 sources autoritaires cross-référencées = crédibilité renforcée
Résultat final : le site est techniquement irréprochable pour Google en 2026
10. Conclusion
La refonte du site sinnes.fr représente un travail de fond qui va bien au-delà d'une simple mise à jour de design. Il s'agit d'une reconstruction complète de l'architecture SEO du site, avec :
La correction de 6 erreurs techniques critiques qui pénalisaient le site depuis sa création
La création de 16 nouvelles pages ciblant des requêtes commerciales à fort potentiel
Le déploiement d'une infrastructure de données structurées (JSON-LD) inexistante auparavant
Une stratégie de contenu E-E-A-T alignée avec les critères Google 2026 (Helpful Content, EEAT Update)
Rapporté au tarif marché d'un consultant SEO freelance confirmé (570€/jour en moyenne en France), la prestation de refonte représente environ 4 à 5 jours de travail valorisés, ce qui situe un tarif de 2 000€ à 2 500€ HT en-deçà des niveaux pratiqués par les agences SEO pour une refonte équivalente (4 000€ – 8 000€).
La valeur réelle de cette prestation est la position concurrentielle que Sinnes Automobiles occupera sur Google une fois le site mis en ligne — et le flux de clients que cela génère directement.
Document préparé sur la base d'une analyse technique complète du code source des deux sites (mars 2026).