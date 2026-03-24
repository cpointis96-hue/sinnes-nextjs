# ACTION PLAN SEO — Sinnes Automobiles
**Généré le :** 2026-03-24
**Basé sur :** FULL-AUDIT-REPORT.md + 4 audits spécialisés

---

## CRITIQUE — Corriger avant tout déploiement

### [C1] Supprimer le noindex global
**Fichier :** `src/app/layout.tsx:51-54` | **Effort :** 2 min

```ts
// SUPPRIMER ces lignes :
robots: {
  index: false,
  follow: false,
},
// (Next.js indexe par défaut sans ce bloc)
```

Vérification :
```bash
grep -n "index: false" src/app/layout.tsx && echo "ERREUR" || echo "OK"
```

---

### [C2] Corriger la logo URL cassée dans Schema
**Fichier :** `src/constants/siteConfig.ts:23` | **Effort :** 3 min

Option A (recommandée) — créer une image ≥ 512×512px :
```ts
logo: `${SITE_URL}/images/logo-sinnes-automobiles-512.png`,
```

Option B — corriger vers le fichier existant (150×150, sous-optimal) :
```ts
logo: `${SITE_URL}/images/logo-avec-fond-noir-150x150.png`,
```

Note : Google recommande fond blanc/transparent pour le Knowledge Panel. Le fond noir du logo actuel est sous-optimal. Créer une version PNG fond blanc.

---

## HIGH — Semaine 1

### [H1] Retirer Organization du layout — garder seulement WebSite
**Fichier :** `src/app/layout.tsx:82-92` | **Effort :** 15 min

Dans le script JSON-LD du layout, remplacer le `@graph` actuel par :
```ts
"@graph": [getWebSiteSchema()]
// Retirer getBaseOrganization() — chaque page le gère déjà
```

---

### [H2] Ajouter worstRating à tous les AggregateRating
**Fichier :** `src/utils/schema.ts:88-93` + pages inline | **Effort :** 20 min

```ts
// Dans getFullOrganizationSchema(), corriger :
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": REVIEWS.ratingValue,      // plus de hardcode
  "reviewCount": REVIEWS.reviewCount,       // plus de hardcode
  "bestRating": REVIEWS.bestRating,
  "worstRating": REVIEWS.worstRating        // NOUVEAU
},
```

Répéter sur `refaire-cle-hyundai` et toutes les pages avec AggregateRating inline.

---

### [H3] Corriger reviewRating — ajouter @type:"Rating"
**Fichier :** `src/app/refaire-cle-hyundai/page.tsx:71-75` | **Effort :** 5 min

```ts
"reviewRating": {
  "@type": "Rating",         // NOUVEAU
  "ratingValue": "5",
  "bestRating": "5",
  "worstRating": "1"         // NOUVEAU
}
```

---

### [H4] Ajouter foundingDate à getBaseOrganization()
**Fichier :** `src/utils/schema.ts` | **Effort :** 2 min

```ts
"foundingDate": ORG.foundingDate,  // "2025-01-01"
```

---

### [H5] Ajouter BreadcrumbList à la homepage
**Fichier :** `src/app/page.tsx` | **Effort :** 10 min

Ajouter dans le `@graph` de la homepage :
```ts
getBreadcrumbSchema('https://sinnes.fr/', [
  { name: 'Accueil', item: 'https://sinnes.fr/' }
])
```

---

### [H6] Étendre getWebPageSchema() avec name, inLanguage, author
**Fichier :** `src/utils/schema.ts:59-67` | **Effort :** 30 min

```ts
export const getWebPageSchema = (
  url: string,
  datePublished: string,
  dateModified: string,
  name?: string,
  authorId?: string
) => ({
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  "url": url,
  ...(name && { "name": name }),
  "inLanguage": "fr-FR",
  "datePublished": datePublished,
  "dateModified": dateModified,
  "isPartOf": { "@id": `${SITE_URL}/#website` },
  "breadcrumb": { "@id": `${url}#breadcrumb` },
  ...(authorId && { "author": { "@id": authorId } })
})
```

Puis mettre à jour les call sites sur chaque page.

---

### [H7] Créer INES_FULL_ENTITY + injecter sur 4 pages commerciales
**Fichier :** `src/constants/siteConfig.ts` + 4 pages | **Effort :** 30 min

```ts
export const INES_FULL_ENTITY = {
  '@type': 'Person' as const,
  '@id': TEAM.ines.id,
  name: TEAM.ines.name,
  jobTitle: TEAM.ines.jobTitle,
  description: TEAM.ines.description,
  sameAs: [
    SOURCES.ines.societeCom,
    SOURCES.ines.infonet
  ],
  knowsAbout: [
    { '@type': 'Thing' as const, name: 'Tarification automobile' },
    { '@type': 'Thing' as const, name: 'Devis et facturation' },
    { '@type': 'Thing' as const, name: 'Relation client' },
  ],
  worksFor: { '@id': `${SITE_URL}/#organization` }
}
```

Injecter sur : `tarif-cle-voiture`, `prix-cle-voiture`, `prix-cle-vs-concessionnaire`, `contactez-nous`.

---

### [H8] Ajouter Twitter/X Card metadata
**Fichier :** `src/app/layout.tsx` | **Effort :** 10 min

```ts
twitter: {
  card: 'summary_large_image',
  title: 'Sinnes Automobiles Nice | Serrurier Auto & Reproduction Clé',
  description: 'Reproduction et double de clé de voiture à Nice. Intervention 7j/7.',
  images: ['/images/sinnes-automobiles-cle-voiture-nice-og.jpg'],
},
```

---

### [H9] Compléter llms.txt
**Fichier :** `public/llms.txt` | **Effort :** 20 min

Ajouter :
```markdown
## Services complémentaires
- Double de clé voiture : https://sinnes.fr/double-cle-voiture/
- Clé de voiture perdue : https://sinnes.fr/cle-voiture-perdue/
- Clé transpondeur : https://sinnes.fr/cle-voiture-transpondeur/
- Dépannage à domicile : https://sinnes.fr/depannage-cle-domicile/
- Urgence clé voiture : https://sinnes.fr/urgence-cle-voiture/
- Prix clé voiture : https://sinnes.fr/prix-cle-voiture/
- Comparatif concessionnaire : https://sinnes.fr/prix-cle-vs-concessionnaire/
- Zone d'intervention Nice : https://sinnes.fr/cle-voiture-nice/
- Équipe : https://sinnes.fr/qui-sommes-nous/

## Marques couvertes
- Clé Hyundai Nice : https://sinnes.fr/refaire-cle-hyundai/
- Clé Audi Nice : https://sinnes.fr/refaire-cle-audi/
- Clé Fiat Nice : https://sinnes.fr/refaire-cle-fiat/
- Clé Toyota Nice : https://sinnes.fr/refaire-cle-toyota/
- Clé Mercedes Nice : https://sinnes.fr/refaire-cle-mercedes/
- Clé Renault Nice : https://sinnes.fr/refaire-cle-renault/

## Tarifs
- Clé simple (sans télécommande) : à partir de 78€
- Clé centralisée (avec télécommande) : à partir de 132€
- Clé mains libres / badge : à partir de 150€
- Perte totale (sans double) : à partir de 240€
Économies vs concessionnaire : jusqu'à 300-1000€.

## Trust
5.0/5 · 58 avis Google vérifiés
Outils : Valise Abrites, ZedFull
Horaires : 7j/7 sur rendez-vous
SIRET : 940 997 927 00014
```

---

### [H10] Renforcer maillage interne pages near-orphans
**Effort :** 30 min

1. `/reproduction-cle-voiture/` → ajouter liens vers les 6 pages marques (section "Marques couvertes")
2. `/cle-voiture-perdue/` → lien vers `/urgence-cle-voiture/`
3. `/programmation-cle-voiture/` → lien vers `/cle-voiture-transpondeur/`
4. `/serrurier-automobile-nice/` → lien vers `/qui-sommes-nous/`
5. Pages marques → se cross-linker entre elles (bloc "Voir aussi : Audi, Renault...")

---

## MEDIUM — Mois 1

### [M1] Ajouter AggregateRating sur 6 pages Service
**Pages :** serrurier-automobile-nice, urgence-cle-voiture, cle-voiture-perdue, reproduction-cle-voiture, double-cle-voiture, tarif-cle-voiture | **Effort :** 30 min

Utiliser le template de `refaire-cle-hyundai` comme référence :
```ts
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": REVIEWS.ratingValue,
  "reviewCount": REVIEWS.reviewCount,
  "bestRating": REVIEWS.bestRating,
  "worstRating": REVIEWS.worstRating
}
```

---

### [M2] Ajouter @id aux FAQPage (18 pages)
**Effort :** 20 min (chercher/remplacer + @id pattern)

```ts
{
  "@type": "FAQPage",
  "@id": `https://sinnes.fr/${slug}/#faq`,  // NOUVEAU
  "mainEntity": [...]
}
```

---

### [M3] Corriger @id tarif-cle-voiture : #pricing → #service
**Fichier :** `src/app/tarif-cle-voiture/page.tsx:56` | **Effort :** 2 min

---

### [M4] Ajouter HowTo schema sur 5 pages
**Pages :** cle-voiture-perdue, reproduction-cle-voiture, depannage-cle-domicile, urgence-cle-voiture, programmation-cle-voiture | **Effort :** 45 min

Créer dans `src/utils/schema.ts` :
```ts
export const getHowToSchema = (
  name: string,
  description: string,
  steps: { name: string; text: string }[]
) => ({
  "@type": "HowTo",
  name,
  description,
  step: steps.map((s, i) => ({
    "@type": "HowToStep",
    "position": i + 1,
    "name": s.name,
    "text": s.text
  }))
})
```

---

### [M5] Enrichir Offer avec availability + priceValidUntil
**Effort :** 30 min

```ts
{
  "@type": "Offer",
  "name": "Clé simple (sans télécommande)",
  "price": "78",
  "priceCurrency": "EUR",
  "availability": "https://schema.org/InStock",
  "priceValidUntil": "2026-12-31"
}
```

---

### [M6] Ajouter priceRange + image + GMB sameAs à Organization
**Fichier :** `src/utils/schema.ts` + `src/constants/siteConfig.ts` | **Effort :** 15 min

```ts
// Dans getBaseOrganization() :
"priceRange": "€€",
"image": `${SITE_URL}/images/sinnes-automobiles-cle-voiture-nice-og.jpg`,

// Dans SAME_AS (siteConfig.ts) — ajouter :
SOURCES.enterprise.gmb,
```

---

### [M7] Ajouter SearchAction au WebSite schema
**Fichier :** `src/utils/schema.ts` | **Effort :** 10 min

```ts
"potentialAction": {
  "@type": "SearchAction",
  "target": {
    "@type": "EntryPoint",
    "urlTemplate": `${SITE_URL}/?q={search_term_string}`
  },
  "query-input": "required name=search_term_string"
}
```

---

### [M8] Enrichir qui-sommes-nous avec SINOUHE_FULL_ENTITY
**Fichier :** `src/app/qui-sommes-nous/page.tsx:32-48` | **Effort :** 15 min

```ts
// Remplacer l'entité Sinouhé inline par :
{
  ...SINOUHE_FULL_ENTITY,
  worksFor: { '@id': `${SITE_URL}/#organization` }
}
// Et l'entité Inès par INES_FULL_ENTITY (après [H7])
```

---

### [M9] Corriger les 4 titres > 60 chars
**Fichier :** `src/data/seoData.ts` | **Effort :** 10 min

```ts
// urgence-cle-voiture :
title: 'Urgence Clé Voiture Nice | 7j/7 | Sinnes'
// depannage-cle-domicile :
title: 'Dépannage Clé Domicile Nice | 7j/7 | Sinnes'
// prix-cle-vs-concessionnaire :
title: 'Serrurier vs Concessionnaire | -60% | Sinnes Nice'
// refaire-cle-hyundai :
title: 'Clé Hyundai Nice | Double & Prog. | Sinnes'
```

---

### [M10] Raccourcir description prix-cle-vs-concessionnaire
**Fichier :** `src/data/seoData.ts:302` | **Effort :** 5 min

Limiter à < 160 chars, finir sur une phrase complète.

---

### [M11] Corriger dateModified contactez-nous
**Fichier :** `src/app/contactez-nous/page.tsx:48` | **Effort :** 2 min

```ts
getWebPageSchema('https://sinnes.fr/contactez-nous/', '2026-03-04', '2026-03-24')
```

---

### [M12] Ajouter byline Inès + Sinouhé sur contactez-nous
**Effort :** 15 min

---

### [M13] Différencier H2[0] sur 5 pages marques
**Fichier :** `src/data/seoData.ts:338, 355, 371, 383, 398` | **Effort :** 30 min

Exemples :
- Fiat : "Transpondeur ID46 Fiat : clonage ou programmation obligatoire ?"
- Toyota : "Toyota Crypto G-chip : pourquoi la clé hybride est hors de portée des copieur bas de gamme"
- Mercedes : "Clé étoile et ProxiKey Mercedes : le système HiTag AES sans concessionnaire"
- Renault : "Clé carte Renault IVER : le format le plus complexe du marché, ici maîtrisé"

---

### [M14] Cross-link prix-cle-voiture ↔ tarif-cle-voiture
**Effort :** 15 min

Ajouter dans chaque page un lien contextuel vers l'autre.

---

### [M15] Corriger commentaire latitude dans siteConfig.ts
**Fichier :** `src/constants/siteConfig.ts:7` | **Effort :** 2 min

```ts
// AVANT :
// Latitude    : 43.7102 → 43.7031 (4 rue Diderot, coordonnées exactes)
// APRÈS :
// Latitude    : 43.7361438 (source : Google My Business PlaceID ChIJl4_C8y7QzRIR_0Vn9YmYrGk)
```

---

### [M16] Supprimer X-XSS-Protection + dead preconnect fonts.gstatic.com
**Fichier :** `next.config.ts:71-74` et `:107-110` | **Effort :** 5 min

---

### [M17] Ajouter poster image + prefers-reduced-motion à la vidéo hero
**Fichier :** `src/app/page.tsx:128` | **Effort :** 20 min (créer AVIF du premier frame)

---

### [M18] Ajouter HSTS header
**Fichier :** `next.config.ts` | **Effort :** 5 min

```ts
{ key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains' },
```

---

### [M19] Nettoyer sitemap.ts — importer SITE_URL + retirer priority/changeFrequency
**Fichier :** `src/app/sitemap.ts` | **Effort :** 10 min

---

## LOW — Backlog

### [L1] Retirer Microdata redondant du Footer
Supprimer `itemScope`, `itemType`, `itemProp` de `Footer.tsx:67-104`.

### [L2] Ajouter noindex à contactez-nous et mentions-légales
Après C1 résolu.

### [L3] OG images différenciées par segment
Créer 3 variantes : urgence, tarif, marques.

### [L4] Ajouter Speakable schema
```ts
"speakable": { "@type": "SpeakableSpecification", "cssSelector": ["h1"] }
```

### [L5] Pages marques supplémentaires
`/refaire-cle-bmw/`, `/refaire-cle-peugeot/`, `/refaire-cle-citroen/`, `/refaire-cle-volkswagen/`

### [L6] VideoObject schema pour vidéo hero
### [L7] Fusionner H2[0]+H2[1] sur cle-voiture-transpondeur (`seoData.ts:229-230`)
### [L8] Enrichir réponses FAQ (31 mots → 134+ mots pour AI citation)
### [L9] Ajouter IndexNow (Vercel intégration native)
### [L10] Règles robots.txt explicites pour GPTBot, ClaudeBot, PerplexityBot

---

## CHECKLIST VALIDATION PRE-DEPLOY

```bash
# 1. Plus de noindex global
grep -n "index: false" src/app/layout.tsx && echo "ERREUR noindex" || echo "OK noindex"

# 2. Logo URL correcte
grep -n "logo-avec-fond-noir.png" src/constants/siteConfig.ts
# Vérifier que le fichier existe :
ls sinnes-nextjs/public/images/logo-avec-fond-noir.png

# 3. NAP correct
grep -rn "06100\|43\.7102\|43\.7031" src/components/ src/app/ && echo "ERREUR NAP" || echo "OK NAP"

# 4. Mot mystère absent
grep -r "antidémarrage" src/app/ && echo "ERREUR" || echo "OK mot mystère"

# 5. Footer propre
grep -rE "reproduction-cle|serrurier-automobile|tarif-cle|double-cle|urgence|depannage|prix-cle|refaire-cle" src/components/layout/Footer.tsx && echo "ERREUR footer" || echo "OK footer"

# 6. TypeScript
npx tsc --noEmit

# 7. Build
npm run build
```

---

## RÉSUMÉ PRIORITÉS

| # | Action | Effort | Impact |
|---|---|---|---|
| 0 | [C1] Supprimer noindex | 2 min | **CRITIQUE** |
| 1 | [C2] Corriger logo URL schema | 3 min | **CRITIQUE** |
| 2 | [H1] Retirer Organization du layout | 15 min | High |
| 3 | [H2] worstRating + hardcode review stats | 20 min | High |
| 4 | [H3] reviewRating @type:"Rating" | 5 min | High |
| 5 | [H4] foundingDate dans Organization | 2 min | High |
| 6 | [H5] BreadcrumbList homepage | 10 min | High |
| 7 | [H6] Étendre getWebPageSchema() | 30 min | High |
| 8 | [H7] INES_FULL_ENTITY | 30 min | High |
| 9 | [H8] Twitter Card | 10 min | High |
| 10 | [H9] llms.txt complet | 20 min | High |
| 11 | [H10] Maillage near-orphans | 30 min | High |
| 12 | [M1-M8] Enrichissements schema | 2h | Medium |
| 13 | [M9-M19] Contenu + technique | 2h | Medium |
| 14 | [L1-L10] Backlog | 4h+ | Low |
