# FULL SEO AUDIT REPORT — Sinnes Automobiles
**Date :** 2026-03-24
**Site :** https://sinnes.fr
**Stack :** Next.js 16 App Router · React 19 · Tailwind CSS v4 · Vercel
**Périmètre :** 22 pages (cocon sémantique complet)
**Agents :** Technical SEO · Content/E-E-A-T · Schema · Sitemap/Links · GEO/AI

---

## EXECUTIVE SUMMARY

### Score SEO Global : **64 / 100**

| Catégorie | Score | Poids | Impact |
|---|---|---|---|
| Technical SEO | 35 / 100 | 25% | BLOQUE (noindex global + logo URL cassée) |
| Content Quality | 74 / 100 | 25% | Bon avec lacunes |
| On-Page SEO | 85 / 100 | 20% | Solide |
| Schema / Structured Data | 62 / 100 | 10% | Issues nombreuses |
| Performance (CWV) | 75 / 100 | 10% | Bon sur papier |
| Images | 65 / 100 | 5% | Acceptable |
| AI Search Readiness | 71 / 100 | 5% | Fondations bonnes |

> Sans les 2 issues CRITIQUES, le score serait **83 / 100**.

### Top 5 Issues Critiques

1. **SITE ENTIER NOINDEX** — `layout.tsx:51-54` bloque l'indexation totale
2. **Logo URL cassée dans schema.org** — `/images/logo-avec-fond-noir.png` n'existe pas sur disque
3. **Schema Organization dupliqué** — layout.tsx ET chaque page.tsx l'injectent simultanément
4. **Homepage sans BreadcrumbList** — lien `#breadcrumb` dangling dans WebPage
5. **`worstRating` absent de tous les `AggregateRating`** (validator Google)

### Top 5 Quick Wins (< 10 min chacun)

1. Supprimer `robots: { index: false, follow: false }` de `layout.tsx` (2 min)
2. Renommer `logo-avec-fond-noir-150x150.png` → `logo-avec-fond-noir.png` OU corriger `siteConfig.ts:23` (3 min)
3. Ajouter `worstRating: '1'` aux blocs `AggregateRating` via `REVIEWS.worstRating` (5 min)
4. Ajouter `foundingDate` à `getBaseOrganization()` (2 min)
5. Corriger le commentaire latitude stale dans `siteConfig.ts:7` (1 min)

---

## 1. TECHNICAL SEO — Score : 35 / 100

### 1.1 CRITIQUE — robots noindex/nofollow global

**Fichier :** `src/app/layout.tsx:51-54`

```ts
robots: {
  index: false,  // BLOQUE TOUTE INDEXATION
  follow: false,
},
```

Next.js App Router effectue un **shallow merge** des métadonnées layout → page. La clé `robots` du layout est héritée par toutes les pages qui ne la surchargent pas. Aucun des 22 `page.tsx` ne déclare de `robots`. Résultat : chaque page émet `<meta name="robots" content="noindex,nofollow">`.

**Fix (Option A — recommandé) :** Supprimer entièrement le bloc `robots` du layout (Next.js indexe par défaut).
**Fix (Option B) :** Changer `index: false` → `index: true` dans le layout.

---

### 1.2 CRITIQUE — Logo Schema URL cassée

**Fichier :** `src/constants/siteConfig.ts:23`

```ts
logo: `${SITE_URL}/images/logo-avec-fond-noir.png`,
```

Le fichier présent sur disque est `/public/images/logo-avec-fond-noir-150x150.png`. La version pleine résolution n'existe pas. Cette URL cassée est injectée dans le schéma Organization sur toutes les pages via `getBaseOrganization()`. Google's Rich Results Test échouera sur la validation du logo.

**Fix A :** Renommer le fichier physique → `logo-avec-fond-noir.png`
**Fix B :** Remplacer par une image ≥ 512×512px (dimensions recommandées Google pour Knowledge Panel)

---

### 1.3 HIGH — HSTS header absent

**Fichier :** `next.config.ts`

Le bloc de headers sécurité est excellent (nosniff, DENY, CSP, Referrer-Policy, Permissions-Policy) mais manque `Strict-Transport-Security`. Mozilla Observatory et Qualys SSL Labs le noteront.

**Fix :**
```ts
{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
```

---

### 1.4 HIGH — Twitter/X Card metadata absent

Aucun bloc `twitter` dans `layout.tsx` ni dans aucun `page.tsx`. X tombe sur OG Graph en fallback mais la prévisualisation est moins fiable.

**Fix dans `layout.tsx` :**
```ts
twitter: {
  card: 'summary_large_image',
  title: 'Sinnes Automobiles Nice | Serrurier Auto & Reproduction Clé',
  description: 'Reproduction et double de clé de voiture à Nice. Intervention 7j/7.',
  images: ['/images/sinnes-automobiles-cle-voiture-nice-og.jpg'],
},
```

---

### 1.5 HIGH — IndexNow non implémenté

Aucune configuration IndexNow. Bing, Yandex et Naver ne sont pas notifiés des mises à jour. Pour un business local dans une niche compétitive, l'indexation rapide des nouvelles pages a une valeur commerciale directe.

**Fix :** Activer l'intégration native Vercel IndexNow dans les paramètres projet.

---

### 1.6 MEDIUM — X-XSS-Protection header déprécié

**Fichier :** `next.config.ts:71-74`

Ce header n'est plus reconnu par Chrome, Firefox ou Edge depuis 2023. Inoffensif mais trompeur dans les rapports d'audit. La protection XSS réelle vient du CSP déjà présent.

**Fix :** Supprimer le bloc `X-XSS-Protection`.

---

### 1.7 MEDIUM — Dead preconnect vers fonts.gstatic.com

**Fichier :** `next.config.ts:107-110`

Le header `Link: <https://fonts.gstatic.com>; rel=preconnect` est inutile car `font-src 'self'` dans le CSP empêche toute requête vers ce domaine. next/font charge les polices localement — aucune connection externe n'est effectuée.

**Fix :** Supprimer le header `Link` `fonts.gstatic.com`.

---

### 1.8 MEDIUM — Vidéo hero sans prefers-reduced-motion ni poster

**Fichier :** `src/app/page.tsx:122-131`

- Pas de `prefers-reduced-motion` check → violation WCAG 2.1 AA (critère 2.2.2)
- Pas de `poster` → la vidéo n'est pas un LCP candidat optimisé ; les crawlers ne voient pas de fallback image

**Fix :**
```tsx
<video
  autoPlay muted loop playsInline
  poster="/images/hero-poster.avif"
  style={{ ..., ..., }}
  className={...}
/>
// + CSS : @media (prefers-reduced-motion: reduce) { video { display: none; } }
```

---

### 1.9 LOW — robots.txt minimal, sans directives AI crawlers explicites

**Fichier :** `public/robots.txt`

Fonctionnel mais passif. Étant donné que `llms.txt` existe et signale une volonté d'AI-readiness, des règles explicites `User-agent: GPTBot / Allow: /` renforceraient ce signal.

---

### 1.10 LOW — contactez-nous et mentions-légales devraient être noindex

Pages à faible valeur SEO. Recommandé : ajouter `robots: { index: false, follow: true }` après la correction du CRITIQUE-1.

---

### 1.11 PASS — Tout le reste

| Check | Statut |
|---|---|
| robots.txt syntaxe | OK |
| Trailing slash cohérent | OK — `trailingSlash: true` + tous les canonicals |
| Redirections 301 WordPress | OK — `/refaire-sa-cle-auto/`, `/programmation-de-cle/`, `/nos-services/` |
| Structure URL | OK — lowercase, tirets, sémantique |
| metadataBase | OK — `https://sinnes.fr` |
| lang="fr" | OK |
| Logo `priority` + `fetchPriority="high"` | OK — `Header.tsx:20-21` |
| Cache headers assets statiques | OK — `max-age=31536000, immutable` |
| AVIF/WebP formats | OK |
| Compression Brotli | OK |
| CSP (global) | OK — `frame-ancestors 'none'`, `object-src 'none'` |

---

## 2. CONTENT QUALITY & E-E-A-T — Score : 74 / 100

### 2.1 E-E-A-T — Points forts

- **Sinouhé Rochereau :** Formateur Incarline, Commissaire GP Monaco depuis 2016. Credentials vérifiables sur Pappers, Infonet, Société.com, LinkedIn.
- **Contenu technique :** Noms précis des systèmes (IMMO3, ID46, HITAG AES, Crypto G-chip, KESSY, IVER, Abrites, ZedFull) — signaux d'expertise non-génériques.
- **FAQs :** 4-5 Q&A par page, contenu factuel et attributable.
- **NAP :** Cohérent (06000, coordonnées GMB), avis Google verbatim.

### 2.2 E-E-A-T — Issues

**HIGH — Inès Barthelemy sans entité Person complète (`INES_FULL_ENTITY` manquant)**
- `siteConfig.ts:151-158` : Inès a `name`, `jobTitle`, `description`, `knowsAbout` mais pas de `sameAs` vers ses profils Infonet/Société.com, ni `hasCredential` pour Mas de Daumas Gassac.
- 4 pages commerciales (`tarif-cle-voiture`, `prix-cle-voiture`, `prix-cle-vs-concessionnaire`, `contactez-nous`) sont assignées à Inès mais n'injectent pas d'entité Inès dans leur schema.

**HIGH — Structure H2[0] similaire sur les 6 pages marques (risque doorway)**

| Page | H2[0] actuel |
|---|---|
| hyundai | "Comment fonctionne la reproduction de clé Hyundai ?" |
| audi | "Comment se déroule la programmation clé Audi ?" |
| fiat | "Comment fonctionne la reproduction de clé Fiat ?" |
| toyota | "Comment fonctionne la reproduction de clé Toyota ?" |
| mercedes | "Comment fonctionne la reproduction de clé Mercedes ?" |
| renault | "Comment fonctionne la reproduction de clé Renault ?" |

5 H2[0] sur 6 sont structurellement identiques (entity-swap). Le contenu technique sous-jacent est différencié mais la charpente heading est un signal doorway pour Google QRG sept. 2025.

**Fix :** Différencier H2[0] pour refléter le challenge spécifique de la marque. Ex :
- Hyundai : "Clé Hyundai IMMO3 : pourquoi le concessionnaire n'est pas nécessaire"
- Renault : "Clé carte Renault IVER : le format le plus complexe du marché"

**HIGH — Inès absente du byline homepage**
- `page.tsx:361-363` : Seul Sinouhé est nommé dans le byline de la section "Qui sommes-nous" de la homepage. Inès est dans le schema employee mais absente du HTML visible.

**HIGH — contactez-nous sans byline E-E-A-T**
- Aucun byline Sinouhé/Inès sur la page contact. CLAUDE.md requiert des bylines sur toutes les pages du cocon.

**MEDIUM — getFullOrganizationSchema hardcode les stats avis**
- `src/utils/schema.ts:88-93` : `ratingValue: "5.0"` et `reviewCount: "58"` sont hardcodés alors que la constante `REVIEWS` existe dans siteConfig.ts.
- **Fix :** Utiliser `REVIEWS.ratingValue`, `REVIEWS.reviewCount`, `REVIEWS.bestRating`, `REVIEWS.worstRating`.

### 2.3 Titres & Descriptions

**Titres (> 60 chars) :**
| Page | Chars | Issue |
|---|---|---|
| `urgence-cle-voiture` | 62 | Troncature risque |
| `depannage-cle-domicile` | 64 | Troncature risque |
| `prix-cle-vs-concessionnaire` | 65 | Troncature risque |
| `refaire-cle-hyundai` | 62 | Troncature risque |

**Descriptions :**
- `prix-cle-vs-concessionnaire` : ~194 chars → troncature milieu de phrase (fichier `seoData.ts:302`)
- `urgence-cle-voiture` : ~141 chars → sous 150, acceptable mais à enrichir
- `contactez-nous` : ~136 chars → sous 150

**contactez-nous `dateModified` stale :** `2026-03-07` alors que la date actuelle est 2026-03-24 (17 jours de retard). Violation CLAUDE.md règle 10.

### 2.4 Unicité H1

Tous les 22 H1 sont uniques. ✅

**Risque cannibalisation légère :**
- `/reproduction-cle-voiture/` et `/double-cle-voiture/` ciblent un intent similaire. Différenciés dans le contenu ("reproduction complète" vs "double préventif") mais à surveiller en Search Console.

### 2.5 Maillage Interne — Issues

**HIGH — Pages marques near-orphans (1 lien entrant chacune) :**
- `/refaire-cle-fiat/`, `/refaire-cle-toyota/`, `/refaire-cle-mercedes/`, `/refaire-cle-renault/` → 1 lien entrant chacune
- `/qui-sommes-nous/` → 1 lien entrant, non dans la nav

**MEDIUM — prix-cle-voiture et tarif-cle-voiture non cross-linkées :** Ces deux pages couvrent des intents complémentaires (facteurs de prix vs grille tarifaire) mais ne se lient pas.

**MEDIUM — Transpondeur, urgence, dépannage peu liées depuis le cocon.**

---

## 3. ON-PAGE SEO — Score : 85 / 100

### 3.1 Structure Headings

Architecture H1 > H2 > H3 respectée. H1/H2 via `seoData.ts` exclusivement. ✅

**MEDIUM — `cle-voiture-transpondeur` H2[0] et H2[1] redondants :**
- H2[0] : "Comment fonctionne un transpondeur ?"
- H2[1] : "Qu'est-ce qu'un transpondeur dans une clé de voiture ?"
→ Même question reformulée. Fusionner ou repurposer H2[1].

### 3.2 Navigation

5/22 pages dans `NAV_ITEMS`. Architecture sémantique correcte pour un cocon — les 17 autres pages s'appuient sur le maillage contextuel. Toutes les pages du cocon sont atteignables depuis la homepage.

### 3.3 Canonical URLs

Tous les canonicals sont présents, explicites, avec trailing slash. ✅

---

## 4. SCHEMA / STRUCTURED DATA — Score : 62 / 100

### 4.1 Architecture Globale — Problèmes

**CRITIQUE — Double injection Organization (layout + chaque page)**

`layout.tsx` émet un `@graph` avec WebSite + Organization sur TOUTES les pages. Chaque `page.tsx` émet un second `@graph` contenant à nouveau Organization. Résultat : 2 blocs `<script type="application/ld+json">` concurrents sur chaque page.

**Fix :** `layout.tsx` → garder seulement `getWebSiteSchema()`. Organization est injectée par chaque page.

---

### 4.2 Inventaire Issues Schema

**HIGH — `getWebPageSchema()` manque `name`, `inLanguage`, `author`**
- `src/utils/schema.ts:59-67`
- `name` (titre de la page), `inLanguage: "fr-FR"`, et `author: { "@id": ... }` sont tous absents.
- L'absence de `author` dans l'entité WebPage supprime le signal E-E-A-T au niveau schema.

**HIGH — Homepage sans BreadcrumbList**
- `src/app/page.tsx` : `getWebPageSchema()` ajoute `"breadcrumb": { "@id": "https://sinnes.fr/#breadcrumb" }` mais aucun `BreadcrumbList` n'est dans le `@graph`. Référence dangling.

**HIGH — `worstRating` absent de tous les AggregateRating**
- `REVIEWS.worstRating = '1'` existe dans siteConfig.ts mais n'est pas passé dans `getFullOrganizationSchema()` ni dans les schemas inline.
- Google Rich Results Test flag l'absence de `worstRating`.

**HIGH — `reviewRating` sans `@type: "Rating"` (refaire-cle-hyundai)**
- `src/app/refaire-cle-hyundai/page.tsx:71-75` : le `reviewRating` object manque `"@type": "Rating"`.

**HIGH — `foundingDate` non injecté dans Organization**
- `ORG.foundingDate = '2025-01-01'` existe mais `getBaseOrganization()` ne l'inclut pas.

**MEDIUM — `tarif-cle-voiture` Service `@id` incohérent**
- `#pricing` au lieu de `#service` — empêche la résolution cross-page. (`tarif-cle-voiture/page.tsx:56`)

**MEDIUM — FAQPage sans `@id` (18 pages concernées)**
- Aucun `FAQPage` n'a de `@id` → ne peut pas être référencé depuis `WebPage.mainEntity`.

**MEDIUM — AggregateRating absent sur 6 pages Service**
- Pages sans AggregateRating sur leur entité Service : `serrurier-automobile-nice`, `urgence-cle-voiture`, `cle-voiture-perdue`, `reproduction-cle-voiture`, `double-cle-voiture`, `tarif-cle-voiture`.
- `refaire-cle-hyundai` est le template correct à suivre.

**MEDIUM — Service `description` absent sur 3 pages**
- `serrurier-automobile-nice`, `urgence-cle-voiture`, `cle-voiture-perdue` n'ont pas de `description` sur leur entité Service.

**MEDIUM — Offer sans `availability` ni `priceValidUntil`**
- Toutes les pages Offer manquent `"availability": "https://schema.org/InStock"` et `priceValidUntil`.

**MEDIUM — `priceRange` absent de LocalBusiness**
- Affiché dans le Knowledge Panel Google. Ajouter dans `getBaseOrganization()`.

**MEDIUM — `potentialAction` SearchAction absent du WebSite**
- Opportunité Sitelinks Searchbox non saisie.

**MEDIUM — `qui-sommes-nous` utilise des entités Person réduites**
- `src/app/qui-sommes-nous/page.tsx:32-48` : l'entité Sinouhé perd `hasCredential`, `memberOf`, `sameAs` par rapport à `SINOUHE_FULL_ENTITY`. La page About devrait avoir les entités les plus riches.

**MEDIUM — HowTo schema absent (5 pages avec processus étapes)**
- `cle-voiture-perdue`, `reproduction-cle-voiture`, `depannage-cle-domicile`, `urgence-cle-voiture`, `programmation-cle-voiture` ont des processus en 3-4 étapes en HTML mais sans schema `HowTo`.

**LOW — Microdata redondant dans le Footer**
- `Footer.tsx:67` : `itemScope itemType="https://schema.org/LocalBusiness"` en Microdata alors que JSON-LD couvre déjà cette entité. Signaux conflictuels.

**LOW — GMB URL absent du tableau `SAME_AS`**
- `SOURCES.enterprise.gmb` est défini dans siteConfig.ts mais n'est pas dans `SAME_AS`. L'entité Organization ne déclare pas son lien Google Maps.

**LOW — `image` absent de Organization (distinct du logo)**
- `getBaseOrganization()` n'a pas de propriété `image` (distincte de `logo`). Recommandé pour le Knowledge Panel.

**LOW — `Speakable` schema absent**
- Aucun `SpeakableSpecification` sur le site. Signal de citabilité pour Google Assistant et AI Overviews.

**LOW — `VideoObject` absent pour la vidéo hero**
- Le fichier `/videos/Design-sans-titre-2.mp4` n'a pas de schema VideoObject.

---

### 4.3 PASS — Ce qui fonctionne

| Check | Statut |
|---|---|
| @graph multi-entités avec @id cross-référencés | OK |
| WebPage datePublished + dateModified | OK sur toutes les pages vérifiées |
| BreadcrumbList sur pages cocon | OK |
| FAQPage sur 18/22 pages | OK |
| Service schema avec provider → #organization | OK |
| SINOUHE_FULL_ENTITY avec 5 sameAs Wikidata | Excellent |
| ENTITY_LINKS Wikidata (17 entités) | Excellent |
| AggregateRating sur Organization (homepage) | OK |

---

## 5. PERFORMANCE (CWV — analyse statique) — Score : 75 / 100

| Métrique | Estimation | Facteur de risque |
|---|---|---|
| LCP | ~1.8-2.2s | Vidéo sans poster — délai avant premier contenu visible |
| CLS | ~0.0-0.05 | next/font display:swap, images avec width/height |
| INP | ~150-200ms | Framer Motion à monitorer en prod |
| FCP | ~0.8-1.2s | CSS critique inline (optimizeCss:true) |

**Risques :**
- Hero `<video>` sans `poster` image → LCP non optimisé
- 3 fonts Google (Playfair, Maven Pro, Roboto) = 3 requêtes WOFF2
- `ScrollReveal` / Framer Motion peut appliquer `opacity: 0` SSR → contenu invisible pour crawlers AI (à vérifier sur le rendu serveur)

---

## 6. IMAGES — Score : 65 / 100

- **OG image identique** sur 22 pages : `/images/sinnes-automobiles-cle-voiture-nice-og.jpg`
- **Alt texts** : tous descriptifs et sourcés depuis `seoData.ts` ✅
- **Format logo schema** : `logo-avec-fond-noir.png` (fond noir) non conforme recommandations Google (fond blanc/transparent recommandé pour rich results)
- **`logo-sinnes-automobiles.svg`** utilisé en header mais non référencé dans le schema Organization
- **Formats AVIF/WebP** activés ✅

---

## 7. AI SEARCH READINESS — Score : 71 / 100

### 7.1 llms.txt — Incomplet

**Présent :** About, 8 services, contact, vérification (Pappers, Société.com, Infonet) ✅
**Absent :** 8 services/pages non référencés :
- `/double-cle-voiture/`, `/cle-voiture-transpondeur/`, `/prix-cle-voiture/`
- Les 6 pages marques (hyundai, audi, fiat, toyota, mercedes, renault)
- Grille tarifaire complète (78€ / 132€ / 150€ / 240€)
- Horaires explicites, note Google 5.0/58 avis, outils (Abrites, ZedFull)

### 7.2 Accessibilité Crawlers AI

`robots.txt` sans Disallow → GPTBot, ClaudeBot, PerplexityBot autorisés ✅

**Risque ScrollReveal :** Si le composant applique `opacity: 0` côté serveur et résout la visibilité en client-side JS, les crawlers AI peuvent recevoir du texte invisible dans le DOM SSR. À vérifier.

### 7.3 Citabilité des Passages

**Forces :**
- FAQPage sur 18/22 pages → format Q&A idéal
- SINOUHE_FULL_ENTITY avec Wikidata → riche pour knowledge graph
- Contenu technique avec termes précis (ID46, HITAG AES, etc.)

**Faiblesses :**
- FAQ answers trop courtes (~31 mots en moyenne vs 134-167 mots optimal pour AI citation)
- Homepage sans H2 en format question
- Pas de schema HowTo sur processus étapes

### 7.4 Signaux d'Autorité Manquants

| Signal | Statut | Impact |
|---|---|---|
| Entité Wikipedia pour Sinnes | Absent | High |
| YouTube channel | Absent | High (corrélation ~0.737 avec citations AI) |
| GMB URL dans `SAME_AS` | Absent | Medium |

---

## 8. SITEMAP — Score : 90 / 100

### 8.1 Couverture

**22/22 pages dans le sitemap** ✅ — couverture parfaite.

### 8.2 Issues Mineures

- `priority` et `changeFrequency` : ignorés par Google depuis 2023. Peuvent être retirés.
- `BASE_URL` hardcodé dans `sitemap.ts:3` indépendamment de `SITE_URL` de `siteConfig.ts`. Duplication à corriger.
- Dates `lastModified` en format `YYYY-MM-DD` (valide, mais ISO 8601 complet avec timezone serait préférable).

---

## 9. TABLEAU RÉCAPITULATIF — 35 ISSUES

| # | Sévérité | Catégorie | Issue | Fichier |
|---|---|---|---|---|
| 1 | CRITIQUE | Technique | Global noindex/nofollow — site entier non indexable | `layout.tsx:51-54` |
| 2 | CRITIQUE | Schema | Logo URL cassée dans schema Organization | `siteConfig.ts:23` |
| 3 | HIGH | Schema | Double injection Organization (layout + page.tsx) | `layout.tsx:82-92` |
| 4 | HIGH | Schema | getWebPageSchema() manque name, inLanguage, author | `utils/schema.ts:59-67` |
| 5 | HIGH | Schema | Homepage sans BreadcrumbList (dangling ref) | `app/page.tsx` |
| 6 | HIGH | Schema | worstRating absent de tous les AggregateRating | Tous les schemas |
| 7 | HIGH | Schema | reviewRating sans @type:"Rating" sur Hyundai | `refaire-cle-hyundai/page.tsx:71` |
| 8 | HIGH | Schema | foundingDate non injecté dans Organization | `utils/schema.ts` |
| 9 | HIGH | Contenu | Inès sans INES_FULL_ENTITY (4 pages commerciales) | `siteConfig.ts:151-158` |
| 10 | HIGH | Contenu | H2[0] identique × 5 sur pages marques (doorway) | `seoData.ts:338-410` |
| 11 | HIGH | Contenu | Inès absente byline homepage | `app/page.tsx:361` |
| 12 | HIGH | Contenu | contactez-nous sans byline E-E-A-T | `contactez-nous/page.tsx` |
| 13 | HIGH | Technique | HSTS header absent | `next.config.ts` |
| 14 | HIGH | Technique | Twitter/X Card metadata absent | `layout.tsx` |
| 15 | HIGH | GEO | llms.txt incomplet (8 services/pages manquants) | `public/llms.txt` |
| 16 | HIGH | Links | 4 pages marques near-orphans (1 lien entrant) | Maillage interne |
| 17 | HIGH | Links | qui-sommes-nous near-orphan (1 lien entrant) | Maillage interne |
| 18 | MEDIUM | Schema | AggregateRating absent sur 6 pages Service | Plusieurs pages |
| 19 | MEDIUM | Schema | FAQPage sans @id (18 pages) | Plusieurs pages |
| 20 | MEDIUM | Schema | tarif-cle-voiture Service @id #pricing vs #service | `tarif-cle-voiture/page.tsx:56` |
| 21 | MEDIUM | Schema | Service description absent (3 pages) | Plusieurs pages |
| 22 | MEDIUM | Schema | Offer sans availability ni priceValidUntil | Plusieurs pages |
| 23 | MEDIUM | Schema | priceRange absent de LocalBusiness | `utils/schema.ts` |
| 24 | MEDIUM | Schema | WebSite sans potentialAction SearchAction | `utils/schema.ts` |
| 25 | MEDIUM | Schema | qui-sommes-nous entités Person réduites | `qui-sommes-nous/page.tsx:32` |
| 26 | MEDIUM | Schema | HowTo schema absent (5 pages avec étapes) | Plusieurs pages |
| 27 | MEDIUM | Schema | getFullOrganizationSchema hardcode stats avis | `utils/schema.ts:88-93` |
| 28 | MEDIUM | Contenu | 4 titres > 60 chars | `seoData.ts` |
| 29 | MEDIUM | Contenu | prix-cle-vs-concessionnaire description > 160 chars | `seoData.ts:302` |
| 30 | MEDIUM | Contenu | contactez-nous dateModified stale (2026-03-07) | `contactez-nous/page.tsx:48` |
| 31 | MEDIUM | Contenu | prix-cle et tarif-cle non cross-linkées | Deux pages |
| 32 | MEDIUM | Technique | X-XSS-Protection header déprécié | `next.config.ts:71` |
| 33 | MEDIUM | Technique | Dead preconnect fonts.gstatic.com | `next.config.ts:107` |
| 34 | MEDIUM | Technique | Vidéo hero sans poster ni prefers-reduced-motion | `app/page.tsx:128` |
| 35 | LOW | Schema | GMB URL absent de SAME_AS Organization | `siteConfig.ts` |
| 36 | LOW | Schema | Microdata redondant Footer | `Footer.tsx:67` |
| 37 | LOW | Schema | image absent de Organization | `utils/schema.ts` |
| 38 | LOW | Schema | Speakable schema absent | `utils/schema.ts` |
| 39 | LOW | Schema | VideoObject absent pour vidéo hero | `app/page.tsx` |
| 40 | LOW | Sitemap | priority/changeFrequency inutiles dans sitemap | `app/sitemap.ts` |
| 41 | LOW | Sitemap | BASE_URL dupliqué vs SITE_URL dans sitemap.ts | `app/sitemap.ts:3` |
| 42 | LOW | Contenu | cle-voiture-transpondeur H2[0]/H2[1] redondants | `seoData.ts:229-230` |
| 43 | LOW | Contenu | Homepage TIMELINE entrée unique | `app/page.tsx:94-101` |
