# Audit répétitions — Site Sinnes Automobiles
## Date : 2026-03-19

---

## PRIORITÉ 1 — Critique (duplicate content / UX fatal)

### [ ] P1-A — Retirer le tableau tarifs de `/serrurier-automobile-nice/`
- **Fichier :** `src/app/serrurier-automobile-nice/page.tsx:383`
- **Problème :** Tableau 4 lignes × 3 colonnes identique à celui de `reproduction-cle-voiture/page.tsx:457` et `tarif-cle-voiture/page.tsx`
- **Fix :** Remplacer par 1-2 phrases + lien `→ Voir la grille complète des tarifs` pointant vers `/tarif-cle-voiture/`
- **Impact :** Anti-duplicate content, autorité SEO concentrée sur la page dédiée

### [ ] P1-B — Réduire le CTA téléphone à max 3 occurrences par page
- **Pages concernées :** `reproduction-cle-voiture`, `serrurier-automobile-nice`, `tarif-cle-voiture`, `urgence-cle-voiture`
- **Situation actuelle :** 5-6 occurrences par page (header sticky + hero prose + bouton hero + CTA milieu + CTA bas + sticky mobile)
- **Fix :** Garder uniquement : Header sticky + 1 bouton hero + Sticky mobile
- **Supprimer :** CTA milieu de page redondant + répétition du numéro dans la prose hero
- **Impact :** Crédibilité, hiérarchie visuelle, design premium vs "anxious design"

---

## PRIORITÉ 2 — Significatif (dilution SEO / qualité contenu)

### [ ] P2-A — Varier la formulation du byline Sinouhé par page
- **Problème :** Formule quasi-identique sur 4+ pages — "formateur international chez Incarline. Commissaire au Grand Prix de Monaco depuis 2016."
  - `reproduction-cle-voiture/page.tsx:225`
  - `serrurier-automobile-nice/page.tsx:201`
  - `urgence-cle-voiture/page.tsx:145`
- **Fix :** Contextualiser par page :
  - Reproduction → précision technique, taille laser
  - Serrurier → certification, outils pro identiques aux concessionnaires
  - Urgence → réactivité, disponibilité terrain
  - Tarif → transparence, supervision des devis avec Inès
- **Impact :** Signal E-E-A-T authentique, pas du copier-coller

### [ ] P2-B — Fix alt ≠ figcaption sur la carte homepage
- **Fichier :** `src/app/page.tsx:495-502`
- **Problème :** `alt` et `figcaption` ont exactement le même texte : "Zone d'intervention de Sinnes Automobiles — Nice et alentours — Serrurier automobile à Nice"
- **Fix :**
  - `alt` → description visuelle : "Carte de la zone d'intervention Sinnes Automobiles — rayon 40 km autour de Nice"
  - `figcaption` → contexte conversion : "Déplacement sans frais sur Nice — Antibes, Cannes, Menton sur devis"
- **Impact :** SEO technique, signal de qualité markup

### [ ] P2-C — Supprimer 1 occurrence "Pas de frais de déplacement" sur homepage
- **Fichier :** `src/app/page.tsx`
- **Problème :** Phrase identique à `page.tsx:251` (section domicile) ET `page.tsx:473` (section contact)
- **Fix :** Supprimer l'occurrence de la section domicile (ligne 251), garder uniquement dans la section contact (contexte prix pertinent)
- **Impact :** Qualité contenu, évite la redondance sur une même page

### [ ] P2-D — Réduire les occurrences de "Devis gratuit" par page
- **Pages concernées :** Toutes, notamment `tarif-cle-voiture` (6 occurrences)
- **Fix :** Max 2 occurrences par page : 1 dans le hero, 1 dans le CTA final
- **Impact :** Copywriting — répéter une promesse affaiblit sa crédibilité

---

## PRIORITÉ 3 — UI Design (cohérence visuelle, premium)

### [ ] P3-A — Réserver le rouge `#e53935` aux pages et CTAs urgence uniquement
- **Problème :** Bouton rouge utilisé pour urgences ET devis non-urgents (ex: `tarif-cle-voiture` CTA "Devis gratuit en 30 minutes")
- **Fix :** Sur les pages informatives (tarif, reproduction, programmation), utiliser `btn-accent` (doré) — rouge exclusivement sur `/urgence-cle-voiture/` et hero de `/serrurier-automobile-nice/`
- **Impact :** La couleur d'urgence ne fonctionne que si elle est rare

### [ ] P3-B — Retirer le badge avis du hero des pages non-urgentes
- **Pages :** `tarif-cle-voiture/page.tsx:200`, `reproduction-cle-voiture/page.tsx:173`
- **Problème :** Badge "★★★★★ 57 avis Google · 5.0/5" dans le hero de CHAQUE page — perd sa valeur persuasive
- **Fix :** Garder sur homepage + urgence-cle-voiture. Sur les pages informatives, intégrer la preuve sociale dans la prose ou dans un blockquote
- **Impact :** Social proof efficace = rare et contextuel

### [ ] P3-C — Retirer le badge avis en titre de section avis sur la homepage
- **Fichier :** `src/app/page.tsx:520-525`
- **Problème :** Badge "★★★★★ 57 avis · 5.0/5" répété en titre de section, alors qu'il est déjà dans le hero 3 sections au-dessus
- **Fix :** Supprimer le badge pill de la section avis — le carrousel se suffit, éventuellement remplacer par un H2 textuel sobre
- **Impact :** Évite la redondance visuelle sur la homepage

### [ ] P3-D — Simplifier l'alternance de fonds sur `/urgence-cle-voiture/`
- **Fichier :** `src/app/urgence-cle-voiture/page.tsx`
- **Problème :** 9 backgrounds différents sur une seule page (#0A0A0A → blanc → gris → #111111 → blanc → #111111 → #F0F3F7 → rouge → gris)
- **Fix :** Max 4 transitions, avec logique émotionnelle :
  - Dark (#0A0A0A) → Hero urgence
  - Blanc → Contenu informatif
  - Shade (#F0F3F7) → Réassurance / FAQ
  - Rouge → CTA urgence final
- **Impact :** Rythme narratif cohérent, design premium

---

## CE QUI EST CORRECT — Ne pas modifier

| Élément | Raison |
|---|---|
| TrustStrip (4 icônes) sur chaque page cocon | Composant compact, contextualisé par page |
| Byline Sinouhé sur chaque page | E-E-A-T obligatoire (règle CLAUDE.md) |
| "7j/7" dans metas + H1 | Signal local SEO pertinent |
| Header sticky + Sticky mobile téléphone | Ne se chevauchent jamais visuellement |
| Liste villes sur serrurier + urgence | Signal géographique local pertinent |
| FAQ différente par page | Contenu unique — excellent pour featured snippets |
| `animate-pulse` sur urgence-cle-voiture uniquement | Bien ciblé, ne pas étendre |

---

## NOTES

- Le tableau tarif de référence canonique = `/tarif-cle-voiture/page.tsx`
- La page de référence pour les marques = `/reproduction-cle-voiture/page.tsx` (liste des 40+)
- Ne jamais mettre la liste complète des marques ailleurs que sur cette page
