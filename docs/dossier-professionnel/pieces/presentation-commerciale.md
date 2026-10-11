> Pièce historique de mars 2026. Les chiffres, promesses commerciales et descriptions techniques sont ceux du document source, sans validation actuelle. Lire les réserves dans [le dossier de présentation](../README.md) et [la grille de prix](../tarification.md). Cette pièce ne prouve ni signature, ni paiement, ni résultat SEO.

# Sinnes Automobiles --- Votre nouveau site sinnes.fr

**Document de presentation -- Mars 2026**

---

## Introduction

Voici la presentation complete de votre nouveau site **sinnes.fr**, construit sur mesure pour Sinnes Automobiles.

**Investissement** : 7 000 EUR HT sur 24 mois, soit 291,67 EUR/mois brut. Apres deduction de l'Impot sur les Societes (taux reduit PME a 15 %), vous recuperez 1 050 EUR sur la duree, ce qui ramene le cout reel a environ **247,92 EUR/mois net**.

C'est la seule fois que nous parlons du prix dans ce document. La suite se concentre sur ce que nous avons construit et pourquoi.

---

## Section 1 --- Ce qu'on a trouve sur l'ancien site

Avant de construire quoi que ce soit, nous avons analyse l'ancien site WordPress de sinnes.fr. Voici les constats, organises par categorie.

### Performance et technique

- **65+ fichiers JavaScript charges** (des programmes qui alourdissent le site), dont jQuery et Bootstrap (des bibliotheques concues pour des sites complexes, surdimensionnees pour un site vitrine)
- **18+ fichiers CSS** (feuilles de style qui definissent l'apparence du site), avec Font Awesome (une bibliotheque d'icones) charge **8 fois en doublon**
- **Aucune image au format WebP ou AVIF** (formats modernes qui reduisent le poids des images de 30 a 50 % sans perte de qualite visible)

### SEO technique

- **Balises canoniques cassees** : toutes pointaient vers `index.html` au lieu de l'URL complete de chaque page. En clair, Google ne savait pas quelle page etait la version officielle --- il voyait potentiellement des doublons partout
- **Pas de fichier robots.txt** (le fichier qui guide les robots de Google sur ce qu'ils peuvent explorer et ce qu'ils doivent ignorer)
- **Pas de sitemap XML** (la carte du site pour les moteurs de recherche --- sans elle, Google doit deviner quelles pages existent)
- **URLs Open Graph en relatif** : les liens de partage sur les reseaux sociaux (Facebook, LinkedIn) ne fonctionnaient pas correctement --- l'apercu affichait une image cassee ou pas d'image du tout

### Contenu

- **9 pages au total** (hors annonces vehicules)
- **Aucune page ciblant des mots-cles commerciaux precis** : pas de page dediee pour "double cle voiture", "refaire cle voiture", "serrurier automobile", ni aucune autre requete que vos clients tapent reellement sur Google
- **Aucune FAQ structuree** pour apparaitre dans les resultats enrichis de Google (les blocs "Questions frequentes" qui s'affichent directement dans la page de resultats)

### Schema.org (le code invisible qui aide Google a comprendre le site)

- Seulement **3 types basiques** : Organisation, Breadcrumb (fil d'Ariane), WebSite
- **Aucun schema Person** (pas de fiche d'identite pour Sinouhe ou Ines)
- **Aucun schema Service** (Google ne savait pas quels services vous proposez)
- **Aucun schema FAQ** (les questions n'etaient pas structurees pour les resultats enrichis)
- **Aucun schema AggregateRating** (vos 58 avis 5 etoiles n'etaient pas exploites)

### Local SEO

- **Code postal 06100** affiche sur le site (incorrect --- Sinnes est au 4 rue Diderot, **06000** Nice)
- **Coordonnees GPS decalees de ~3,3 km** par rapport a la position reelle de l'atelier
- **Aucune synchronisation** entre les informations du site et celles de Google My Business

### Signaux de confiance (E-E-A-T)

- **Aucun signal d'expertise** : pas de byline (signature d'auteur), pas de credentials (certifications affichees), pas de lien vers des registres officiels
- Impossible pour Google ou un visiteur de verifier qui se trouve derriere le site

---

## Section 2 --- Le nouveau site : vue d'ensemble

### Ce qui a ete construit

- **23 pages** (contre 9 sur l'ancien site), dont 19 pages formant un cocon semantique structure (explique en Section 4)
- **Architecture** : Next.js 16 (le framework utilise par Vercel, Netflix, TikTok) + React 19 + Tailwind CSS v4
- **Images automatiquement converties** en AVIF et WebP : les formats les plus legers du marche, servis automatiquement selon le navigateur du visiteur
- **Polices de caracteres optimisees** : Playfair Display, Maven Pro et Roboto, chargees via `next/font` --- zero decalage visuel au chargement (le texte ne "saute" jamais)
- **Zero jQuery, zero Bootstrap, zero bibliotheque lourde** : chaque ligne de code sert a quelque chose

### Securite

- **HSTS** (force la connexion securisee HTTPS)
- **CSP** (Content Security Policy --- empeche l'injection de scripts malveillants)
- **X-Frame-Options** (empeche l'affichage du site dans une iframe pirate)
- **Permissions-Policy** (interdit l'acces a la camera, au micro, etc.)
- **Referrer-Policy** (controle quelles informations sont partagees lors d'un clic sortant)

### Redirections SEO

3 redirections 301 (permanentes) sont configurees pour transferer l'autorite des anciennes URLs WordPress vers les nouvelles :

| Ancienne URL | Nouvelle URL |
|---|---|
| `/refaire-sa-cle-auto/` | `/reproduction-cle-voiture/` |
| `/programmation-de-cle/` | `/reproduction-cle-voiture/` |
| `/nos-services/` | `/` (accueil) |

Concretement : si un client avait mis en favori l'ancienne page, il arrive automatiquement sur la bonne page du nouveau site. Et Google transfere la "reputation" de l'ancienne URL vers la nouvelle.

---

## Section 3 --- Synchronisation des donnees de localisation

L'ancien site affichait le code postal **06100** (qui correspond a Beaulieu-sur-Mer / Villefranche-sur-Mer) au lieu de **06000** (Nice centre). Les coordonnees GPS etaient decalees de **3,3 km** par rapport a l'adresse reelle au 4 rue Diderot.

Sur le nouveau site, **tout a ete synchronise avec la fiche Google My Business officielle** :

- Code postal : **06000**
- Coordonnees exactes : **43.7361438, 7.2701284** (extraites du marqueur Google Maps officiel de Sinnes)
- Adresse identique partout : **4 rue Diderot, 06000 Nice**
- Telephone identique partout : **+33 6 75 54 04 11**

**Pourquoi c'est important** : Google compare en permanence les informations entre le site, Google Maps et les annuaires officiels (Societe.com, Pappers, Infonet...). Si les donnees ne correspondent pas, Google baisse la confiance et le site apparait moins dans les resultats locaux ("serrurier automobile Nice", "cle voiture Nice"...).

Toutes ces donnees sont centralisees dans un **fichier unique** (`siteConfig.ts`) : impossible d'avoir une incoherence entre deux pages du site.

---

## Section 4 --- Strategie du cocon semantique

### 4.1 --- Le principe

Un cocon semantique est un reseau de pages interconnectees, organisees par thematique, ou chaque page renforce les autres aux yeux de Google. Au lieu d'avoir une seule page qui tente de repondre a 15 questions differentes (c'etait le cas de l'ancienne page `/refaire-sa-cle-auto/`), chaque page repond a **un besoin precis** --- et passe du "jus SEO" (de la puissance de referencement) a ses voisines via des liens places dans le contenu.

### 4.2 --- L'architecture a 3 niveaux

#### Niveau 0 --- Page d'accueil (1 page)

La page d'accueil distribue la puissance SEO vers les 3 pages piliers. C'est le point d'entree du cocon.

#### Niveau 1 --- Pages cibles (3 pages) --- les piliers commerciaux

Ce sont les pages qui doivent ranker (se positionner) sur les mots-cles les plus importants :

1. **`/reproduction-cle-voiture/`** --- Hub national "refaire une cle"
   - Absorbe l'ancienne page `/refaire-sa-cle-auto/` via redirection 301
   - Cible : "refaire une cle de voiture" (1 900 recherches/mois)

2. **`/serrurier-automobile-nice/`** --- Hub local + urgence
   - Cible : "serrurier automobile" (2 400 recherches/mois)

3. **`/tarif-cle-voiture/`** --- Hub transactionnel (prix, devis)
   - Cible : "tarif reproduction cle voiture" (1 000 recherches/mois)

#### Niveau 2 --- Pages mixtes (9 pages) --- variations de besoins clients

Chaque page repond a un besoin precis d'un client potentiel :

| Page | Besoin client |
|---|---|
| `/double-cle-voiture/` | "Je veux un double preventif" |
| `/cle-voiture-perdue/` | "J'ai perdu mes cles, que faire ?" |
| `/programmation-cle-voiture/` | "Ma cle doit etre programmee" |
| `/cle-voiture-transpondeur/` | "C'est quoi la puce dans ma cle ?" |
| `/cle-voiture-nice/` | "Je cherche ce service a Nice / Antibes / Cannes" |
| `/urgence-cle-voiture/` | "J'ai besoin d'aide maintenant" |
| `/depannage-cle-domicile/` | "Vous pouvez venir chez moi ?" |
| `/prix-cle-voiture/` | "Combien ca coute selon le type de cle ?" |
| `/prix-cle-vs-concessionnaire/` | "C'est quoi la difference avec le concessionnaire ?" |

#### Niveau 3 --- Pages marques (6 pages) --- expertise par constructeur

- `/refaire-cle-hyundai/` (KD 2 --- tres facile a positionner)
- `/refaire-cle-audi/`
- `/refaire-cle-fiat/`
- `/refaire-cle-toyota/`
- `/refaire-cle-mercedes/`
- `/refaire-cle-renault/`

### 4.3 --- Le maillage interne (comment les pages se lient entre elles)

Le maillage suit des regles strictes pour maximiser la puissance de chaque lien :

- **Maximum 5 a 7 liens contextuels par page** (places dans le texte, pas dans un menu)
- **Zero lien vers le cocon dans le footer** (pied de page) : pour concentrer la puissance des liens la ou elle compte, dans le contenu
- **Les pages marques (Niveau 3) ne pointent jamais directement vers les pages cibles (Niveau 1)** : elles remontent via leur page mixte parente (Niveau 2), ce qui renforce la chaine de transmission

**Pourquoi certaines marques sont rattachees a certaines pages :**

Les marques **Toyota, Hyundai, Fiat et Renault** sont reliees a la page `/double-cle-voiture/` (faire un double). Ces vehicules necessitent surtout une duplication de cle classique --- la demande client est principalement "je veux un double de ma cle".

Les marques **Audi et Mercedes** sont reliees a la page `/programmation-cle-voiture/` (programmation). Ces vehicules utilisent des systemes electroniques complexes (VAG pour Audi, protocoles proprietaires pour Mercedes) qui necessitent une programmation avancee --- la demande client est "ma cle doit etre programmee".

Ce n'est pas un choix arbitraire : le rattachement correspond a la **realite technique du metier** et a **l'intention de recherche des clients** sur Google.

### 4.4 --- La page "Nice et ses environs" : strategie locale

La page `/cle-voiture-nice/` couvre **4 villes** : Nice, Antibes, Cagnes-sur-Mer et Cannes.

Chaque ville a ses propres sections avec des **reperes locaux concrets** :

- **Nice** : Vieux-Nice (intervention a pied obligatoire), Aeroport Nice Cote d'Azur (cle perdue avant/apres un vol), Promenade des Anglais, Gare Nice-Ville, Quartier Liberation
- **Antibes** : Sophia Antipolis (vehicules modernes, systemes complexes), Vieil Antibes et remparts, Port Vauban (plaisanciers)
- **Cagnes-sur-Mer** : Hippodrome de la Cote d'Azur (pics de demande les jours de courses), Haut-de-Cagnes (village medieval perche), Cros-de-Cagnes
- **Cannes** : Palais des Festivals et Croisette (pics pendant les evenements), Rue d'Antibes, La Bocca

Ce n'est **pas une page "doorway"** (page de spam local que Google penalise). Chaque ville a du contenu unique avec des specificites reelles : temps de trajet, conditions de stationnement, evenements locaux, contraintes d'acces.

**Objectif** : capter les recherches locales comme "reproduction cle voiture Cagnes-sur-Mer" (CPC de 10,58 EUR --- c'est ce que les concurrents paient en publicite Google pour un seul clic sur cette requete) ou "double cle voiture Nice".

---

## Section 5 --- Tous les mots-cles vises, page par page

Pour chaque page, voici les mots-cles cibles avec leur volume de recherche mensuel, la distinction entre national et local, et les questions FAQ reellement tapees par les internautes.

---

### Accueil `/`

**National :**
- "serrurier automobile" (2 400 rech./mois)
- "reproduction cle voiture" (720)

**Local :**
- "reproduction cle nice" (110)
- "serrurier automobile nice" (50)

---

### Reproduction cle voiture `/reproduction-cle-voiture/`

**National :**
- "refaire une cle de voiture" (1 900)
- "refaire des cles de voiture" (1 600)
- "refaire cle voiture" (1 300)
- "reproduction cle voiture" (720)

**FAQ long-tail :**
- "combien coute la reproduction d'une cle de voiture" (~1 000)
- "reproduire cle voiture sans originale" (~150)
- "comment fonctionne la reproduction d'une cle a transpondeur ?"
- "la reproduction de cle preserve-t-elle la garantie constructeur ?"

---

### Serrurier automobile Nice `/serrurier-automobile-nice/`

**National :**
- "serrurier automobile" (2 400)
- "serrurier auto" (1 600)
- "serrurier voiture" (1 000)

**Local :**
- "serrurier automobile nice" (50)

**FAQ :**
- "quelle est la difference entre un serrurier automobile et un serrurier de portes ?"
- "combien coute un serrurier automobile a Nice ?"
- "quels outils utilise un vrai serrurier automobile professionnel ?"
- "la garantie constructeur est-elle preservee apres l'intervention d'un serrurier automobile ?"
- "est-il possible d'ouvrir une voiture sans casser la serrure ?"

---

### Tarif cle voiture `/tarif-cle-voiture/`

**National :**
- "tarif reproduction cle voiture" (1 000)
- "prix pour refaire une cle" (880)
- "double cle voiture prix" (390)
- "refaire une cle de voiture prix" (260)

**Local :**
- "tarif cle voiture nice" (~20)

**FAQ :**
- "quel est le prix pour reproduire une cle de voiture a Nice ?"
- "y a-t-il des frais de deplacement en plus du tarif ?"
- "est-ce moins cher chez Sinnes qu'au concessionnaire ?"
- "peut-on payer par carte bancaire ?"

---

### Double cle voiture `/double-cle-voiture/`

**National :**
- "double cle voiture" (1 300)
- "double de cle voiture" (880)
- "double cle de voiture" (590)
- "faire double cle voiture" (390)

**Local :**
- "double cle voiture antibes" (40)
- "double cle autour de moi" (140)
- "double cle voiture nice" (10)

**FAQ :**
- "peut-on faire un double de cle voiture sans l'originale ?"
- "combien coute un double de cle de voiture ?" (~210)
- "combien de temps pour faire un double de cle ?"
- "le double de cle fonctionne-t-il exactement comme l'originale ?"

---

### Cle voiture perdue `/cle-voiture-perdue/`

**National :**
- "cle de voiture perdue sans double" (880)
- "cle voiture perdue" (480)
- "cle perdue sans double prix" (210)

**FAQ :**
- "que faire si on a perdu ses cles de voiture sans double ?" (880)
- "combien coute la creation d'une cle voiture perdue sans double ?" (~210)
- "peut-on vraiment ouvrir une voiture sans abimer la serrure ?"
- "combien de temps pour creer une cle perdue sans double ?"

---

### Urgence cle voiture `/urgence-cle-voiture/`

**National :**
- "serrurier automobile autour de moi" (880, KD 8)
- "serrurier auto autour de moi" (320)
- "serrurier voiture urgence" (210, KD 7)

**FAQ :**
- "combien de temps pour une intervention urgence a Nice ?"
- "intervenez-vous la nuit pour une urgence cle voiture ?"
- "pouvez-vous ouvrir une voiture sans abimer la serrure ?"
- "quel est le tarif d'une intervention urgence ?"

---

### Programmation cle voiture `/programmation-cle-voiture/`

**National :**
- "programmation cle voiture" (720)
- "reprogrammation cle voiture" (210)
- "programmation cle voiture a domicile" (210)

**FAQ :**
- "comment programmer une cle de voiture ?" (~110)
- "peut-on reprogrammer une cle voiture perdue pour la desactiver ?"
- "la programmation de cle voiture a domicile est-elle possible ?"
- "combien coute la programmation d'une cle de voiture ?" (~150)

---

### Depannage a domicile `/depannage-cle-domicile/`

**National :**
- "programmation cle voiture a domicile" (210)
- "depannage cle voiture a domicile" (70)

**FAQ :**
- "est-ce possible de programmer une cle voiture a domicile ?"
- "y a-t-il des frais de deplacement pour une intervention a domicile ?"
- "apportez-vous tout le materiel necessaire ?"
- "couvrez-vous toute la Cote d'Azur pour les interventions a domicile ?"

---

### Cle voiture transpondeur `/cle-voiture-transpondeur/`

**National :**
- "cle voiture transpondeur" (170, KD 2)

**FAQ :**
- "qu'est-ce qu'un transpondeur dans une cle de voiture ?"
- "comment savoir si ma cle a un transpondeur ?"
- "peut-on cloner le transpondeur d'une cle de voiture ?"
- "que se passe-t-il si le transpondeur d'une cle est endommage ?"

---

### Cle voiture Nice `/cle-voiture-nice/`

**Local uniquement :**
- "reproduction cle voiture antibes" (50)
- "reproduction cle voiture nice" (40)
- "double cle voiture antibes" (40)
- "reproduction cle voiture Cagnes-sur-Mer" (20, CPC 10,58 EUR)
- "double cle voiture nice" (10)

**FAQ :**
- "y a-t-il des frais de deplacement pour les interventions hors Nice ?"
- "pouvez-vous intervenir dans le Vieux-Nice ou le Vieil Antibes ?"
- "quel est le delai realiste pour une intervention a Cannes depuis Nice ?"
- "pouvez-vous intervenir au parking de l'aeroport Nice Cote d'Azur ?"
- "intervenez-vous a Sophia Antipolis le week-end ?"

---

### Prix cle voiture `/prix-cle-voiture/`

**National :**
- "prix double cle voiture" (210)
- "prix cle voiture" (170)
- "prix d'une cle" (110)

**FAQ :**
- "quel est le prix d'une cle voiture avec telecommande ?"
- "combien coute un double de cle de voiture ?"
- "le prix comprend-il la programmation du transpondeur ?"
- "y a-t-il des tarifs differents selon la marque de voiture ?"

---

### Prix cle vs concessionnaire `/prix-cle-vs-concessionnaire/`

**National :**
- Mots-cles comparatifs serrurier vs concessionnaire
- "combien coute de refaire une cle" (volume agrege)

**FAQ :**
- "pourquoi refaire une cle chez un serrurier auto coute moins cher qu'au concessionnaire ?"
- "la cle faite par un serrurier fonctionne-t-elle comme une cle d'origine ?"
- "quel est le delai chez Sinnes vs un concessionnaire ?"
- "la garantie constructeur de ma voiture est-elle preservee ?"

---

### Pages marques (6 pages)

| Page | Mot-cle principal | Volume | KD |
|---|---|---|---|
| `/refaire-cle-hyundai/` | "refaire cle voiture hyundai prix" | 50 | 2 (tres facile) |
| `/refaire-cle-audi/` | "refaire une cle chez audi prix" | 110 | 8 |
| `/refaire-cle-mercedes/` | "refaire une cle mercedes prix" | 210 | 14 |
| `/refaire-cle-toyota/` | "refaire cle toyota prix" | 70 | 11 |
| `/refaire-cle-fiat/` | "refaire cle fiat 500 prix" | 50 | 9 |
| `/refaire-cle-renault/` | "refaire cle renault" | --- | --- |

Chaque page marque a 4 FAQ dediees :

- **Hyundai** : "peut-on cloner une cle Hyundai sans concessionnaire ?", "combien coute de refaire une cle Hyundai ?", "intervenez-vous sur les Hyundai hybrides et electriques ?", "peut-on refaire une cle Hyundai a domicile ?"
- **Audi** : "peut-on refaire une cle Audi sans concessionnaire ?", "combien coute de refaire une cle Audi ?", "intervenez-vous sur toutes les generations Audi ?", "peut-on refaire une cle Audi a domicile ?"
- **Mercedes** : "peut-on refaire une cle Mercedes sans concessionnaire ?", "combien coute de refaire une cle Mercedes ?", "intervenez-vous sur les Mercedes recentes (W205, GLC) ?", "peut-on refaire une cle Smart (groupe Mercedes) ?"
- **Toyota** : "peut-on refaire une cle Toyota hybride (Yaris, Auris) ?", "combien coute de refaire une cle Toyota ?", "intervenez-vous sur les Toyota recents (RAV4, C-HR) ?", "la garantie Toyota est-elle preservee ?"
- **Fiat** : "peut-on doubler une cle Fiat 500 sans concessionnaire ?", "combien coute de refaire une cle Fiat ?", "intervenez-vous sur les Fiat professionnelles (Ducato) ?", "peut-on refaire une cle Fiat a domicile ?"
- **Renault** : "peut-on refaire une cle carte Renault sans concessionnaire ?", "combien coute de refaire une cle Renault ?", "ma Clio 3 est ancienne, pouvez-vous quand meme refaire la cle ?", "peut-on refaire une cle Renault a domicile ?"

**Renault** n'a pas de donnees SEMrush significatives, mais c'est la **marque n.1 de la clientele locale** sur la Cote d'Azur --- la page est indispensable.

> **Note importante** : les questions des FAQ ne sont pas inventees. Elles correspondent a de vraies requetes tapees par les internautes sur Google, avec des volumes de recherche mesures. Chaque FAQ genere aussi du code Schema.org qui permet a Google d'afficher ces questions directement dans les resultats de recherche (les blocs "People Also Ask").

---

## Section 6 --- SEO Technique : Avant / Apres

| Ce qu'on a verifie | Ancien site | Nouveau site |
|---|---|---|
| Balises canoniques (indiquent a Google la version officielle) | Cassees --- pointent toutes vers "index.html" | Correctes --- URL complete sur chaque page |
| robots.txt (guide pour les robots Google) | Absent | Configure avec lien vers le sitemap |
| Sitemap XML (carte du site pour Google) | Absent | Dynamique, 23 URLs avec dates de modification |
| Schema.org (code invisible pour Google) | 3 types basiques | 10+ types dont FAQ, Service, Person, AggregateRating |
| Images | JPG uniquement | Conversion automatique AVIF + WebP |
| Scripts JavaScript | 65+ fichiers (jQuery, Bootstrap...) | Zero bibliotheque lourde |
| Fichiers CSS | 18+ fichiers, Font Awesome x8 | CSS optimise, zero doublon |
| Redirections 301 (transfert de l'autorite des anciennes URLs) | Aucune | 3 redirections configurees |
| Signaux E-E-A-T (expertise et confiance) | Aucun | Personas, signatures d'auteur, certifications |
| Fichier llms.txt (pour les IA) | Inexistant | 59 lignes --- optimisation pour 6 plateformes IA |
| Open Graph (apercu sur les reseaux sociaux) | URLs relatives cassees | URLs absolues + image dediee |
| Coordonnees GPS | Decalees de 3,3 km | Synchronisees avec Google My Business |
| Code postal | 06100 (incorrect) | 06000 (correct) |
| Trailing slash (uniformite des URLs) | Incoherent | Active partout (`/slug/`) |
| HSTS (connexion securisee forcee) | Absent | Active (max-age 2 ans) |
| CSP (protection contre les injections) | Absent | Configure |
| Cache images | Non configure | 1 an, immutable |
| Compression | Non optimisee | Brotli active |
| Polices de caracteres | Chargement externe, decalage visuel | next/font, zero decalage (CLS 0) |
| Langue de la page | Non declaree | `lang="fr"` + `inLanguage: "fr-FR"` |
| Meta Twitter Card | Absente | `summary_large_image` configuree |
| Nombre de pages (hors vehicules) | 9 | 23 |
| FAQ structurees | 0 | 67 questions sur 18 pages |

---

## Section 7 --- Entites nommees : comment Google identifie Sinouhe comme expert

Les moteurs de recherche ne lisent plus seulement le texte d'un site. Ils cherchent a identifier des **"entites"** : des personnes, des entreprises, des lieux, des concepts. Quand Google reconnait que Sinouhe Rochereau est une personne reelle, verifiable, avec des competences prouvees, il accorde plus de confiance au site.

### Ce qu'on a code pour Sinouhe

Une **fiche d'identite structuree en Schema.org** (le langage que Google comprend), presente sur les pages techniques du site :

- **Certifications** : formateur international Incarline (organisme de formation reconnu dans le metier de la cle automobile)
- **Affiliation** : Commissaire au Grand Prix de Monaco depuis 2016 --- lie a l'entite Wikidata du GP Monaco (Q9102)
- **Competences techniques** : programmation de cle, electronique automobile, diagnostic vehicule, outils Abrites et ZedFull
- **Liens vers 4 registres officiels** ou Google peut verifier que Sinouhe existe :
  - Pappers (registre des dirigeants d'entreprise)
  - Infonet (annuaire des dirigeants)
  - Societe.com (registre SIRENE / INPI)
  - LinkedIn (profil professionnel)

### Ce qu'on a code pour Ines

Meme approche : fiche Person structuree, presente sur les pages commerciales (tarifs, prix, contact) :

- **Expertise** : devis, facturation, relation client, tarification
- **Liens vers 2 registres officiels** : Societe.com et Infonet

### Pourquoi c'est puissant

Google et les IA peuvent maintenant verifier, **via des sources externes independantes**, que les personnes derriere le site sont reelles et qualifiees. C'est le principe **E-E-A-T** (Experience, Expertise, Authoritativeness, Trustworthiness --- les 4 criteres de qualite de Google).

**Assignation par page** : Sinouhe signe les pages techniques (reproduction, programmation, urgence, marques). Ines signe les pages commerciales (tarifs, prix, contact). Chaque page a un auteur identifie --- exactement ce que Google recommande.

---

## Section 8 --- Optimisation pour les intelligences artificielles

### Le fichier llms.txt

Un fichier special place a la racine du site (`sinnes.fr/llms.txt`) que les IA lisent en priorite. Il contient un resume structure de toute l'activite : services, prix, avis, contact, zone d'intervention, certifications.

59 lignes, organisees en sections claires : About, Services principaux, Services complementaires, Marques couvertes, Tarifs, Trust, Contact, Verify.

### Quelles IA en beneficient

1. **ChatGPT** (OpenAI) --- quand quelqu'un demande "serrurier auto a Nice"
2. **Claude** (Anthropic) --- pour les recherches web integrees
3. **Perplexity** --- moteur de recherche IA qui cite ses sources
4. **Google Gemini** --- pour les "AI Overviews" dans les resultats Google
5. **Bing Copilot** (Microsoft) --- assistant integre a Bing
6. **Brave Search AI / DuckDuckGo AI** --- moteurs alternatifs avec synthese IA

### Les entites Wikidata (le "web semantique")

**17 concepts** du site sont lies a leur fiche Wikidata (la base de donnees universelle utilisee par Google et les IA) :

**Villes desservies :**
- Nice (Q33959), Antibes (Q126898), Cannes (Q39984), Cagnes-sur-Mer (Q193832)
- Cote d'Azur (Q182822), Alpes-Maritimes (Q3139)

**Marques automobiles :**
- Renault (Q6686), Audi (Q23317), Mercedes-Benz (Q36008), Toyota (Q53268), Hyundai (Q55931), Fiat (Q27510)
- Volkswagen Group / VAG (Q156578)

**Metier et technologie :**
- Serrurier (Q3479990), RFID (Q104954), Immobiliseur electronique (Q1571429)

**Credibilite :**
- Grand Prix de Monaco (Q9102)

**Resultat** : quand une IA doit repondre a "Qui peut refaire une cle de voiture a Nice ?", elle trouve des donnees verifiees et structurees sur sinnes.fr --- pas juste du texte, mais des **entites identifiees** qu'elle peut croiser avec d'autres sources.

---

## Section 9 --- Les 58 avis Google integres

- **58 avis verifies**, note de **5.0/5**
- Integres directement dans le site avec les **vrais noms, dates et textes** (aucun avis invente)
- Code **Schema.org AggregateRating** pour que Google affiche les etoiles dans les resultats de recherche
- Avis selectionnes pour couvrir differents cas d'usage : urgence, rapidite, prix, service a domicile, expertise par marque

Le schema AggregateRating est present sur la page d'accueil avec les donnees exactes : `ratingValue: 5.0`, `reviewCount: 58`, `bestRating: 5`.

---

## Annexes

Trois fichiers complementaires sont fournis au format CSV (importables dans Google Sheets, Excel ou Notion) :

1. **`annexe-pages-keywords.csv`** --- Les 23 pages avec : slug, H1, meta description, mot-cle principal, volume, mots-cles secondaires
2. **`annexe-maillage-interne.csv`** --- Matrice complete du maillage : page source, page cible, texte du lien (ancre)
3. **`annexe-comparatif-technique.csv`** --- Comparatif avant/apres sur 30+ criteres techniques

---

*Document genere en Mars 2026 pour Sinnes Automobiles.*
*Site construit avec Next.js 16 + React 19 + Tailwind CSS v4.*
*Deploiement prevu sur Vercel.*
