import { test, expect } from '@playwright/test'

/**
 * Vérification visuelle des H1/H2/H3 sur toutes les pages modifiées.
 * Source de vérité : seoData.ts — les valeurs ci-dessous doivent correspondre
 * exactement à ce qui est affiché dans le DOM.
 */

const pages = [
  {
    url: '/',
    h1: 'Sinnes Automobiles\u00A0: Reproduction & Double de Clé Voiture à Nice',
    h2: [
      'Faites un double de clé en toute sécurité',
      'Intervention à domicile à Nice\u00A0: votre serrurier vient à vous',
      'Nos services de serrurier automobile à Nice',
      'Sinouhé et Inès\u00A0: votre équipe de serruriers à Nice',
      'Demandez votre devis clé voiture à Nice',
    ],
  },
  {
    url: '/reproduction-cle-voiture/',
    h1: 'Reproduction de clé de voiture\u00A0: spécialiste Nice & Côte d\'Azur',
    h2: [
      'Notre processus pour refaire votre clé de voiture',
      'Reproduction de clé avec ou sans original\u00A0: deux situations',
    ],
  },
  {
    url: '/tarif-cle-voiture/',
    h1: 'Tarif clé de voiture\u00A0: Prix à partir de 78€',
    h2: [
      'Grille tarifaire\u00A0: Tous types de clés',
      'Ce qui est inclus dans le tarif\u00A0: aucune surprise',
    ],
    anchorCheck: { href: '/reproduction-cle-voiture/', text: 'reproduction de clé de voiture à Nice' },
  },
  {
    url: '/programmation-cle-voiture/',
    h1: 'Programmation de clé de voiture\u00A0: Transpondeur, télécommande et badge',
    h2: [
      'Le processus de programmation de clé voiture',
      'Programmation par marque\u00A0: Audi, Mercedes, Renault...',
    ],
    anchorChecks: [
      { href: '/refaire-cle-audi/', text: 'programmation clé Audi à Nice' },
      { href: '/refaire-cle-mercedes/', text: 'programmation clé Mercedes à Nice' },
    ],
  },
  {
    url: '/double-cle-voiture/',
    h1: 'Double de clé de voiture\u00A0: Faire un double en toute sécurité',
    h2: [
      '4 étapes pour votre double de clé',
      'Double de clé Toyota, Hyundai, Renault et Fiat\u00A0: spécificités par marque',
    ],
  },
  {
    url: '/urgence-cle-voiture/',
    h1: 'Dépannage Urgence Clé Voiture\u00A0: Intervention immédiate 7j/7',
    h2: [
      'Clé bloquée ou perdue\u00A0? Nous intervenons au plus vite',
    ],
  },
  {
    url: '/prix-cle-voiture/',
    h1: 'Prix d\'une reproduction de clé\u00A0: Comparatif par type de clé',
    h2: [
      'Comment obtenir votre prix pour refaire une clé voiture\u00A0?',
    ],
    anchorCheck: { href: '/tarif-cle-voiture/', text: 'notre grille tarifaire complète' },
  },
  {
    url: '/prix-cle-vs-concessionnaire/',
    h1: 'Serrurier vs Concessionnaire\u00A0: Le comparatif Sinnes',
    h2: [
      'Économisez jusqu\'à 300€ sur votre clé de voiture',
    ],
  },
  {
    url: '/cle-voiture-nice/',
    h1: 'Reproduction et double de clé voiture à Nice, Antibes, Cagnes et Cannes',
    h2: [
      'Comment se passe une intervention à Nice\u00A0?',
    ],
  },
  {
    url: '/contactez-nous/',
    h1: 'Contactez Sinnes Automobiles à Nice\u00A0: Devis Gratuit pour Clé Voiture',
    h2: [
      'Nos coordonnées à Nice',
    ],
  },
]

for (const page of pages) {
  test(`${page.url} — H1 correct`, async ({ page: p }) => {
    await p.goto(page.url)
    // textContent() lit le contenu DOM brut (sans text-transform CSS)
    const h1Text = await p.locator('h1').first().textContent()
    expect(h1Text?.trim()).toBe(page.h1)
  })

  if (page.h2 && page.h2.length > 0) {
    for (const expectedH2 of page.h2) {
      test(`${page.url} — H2 "${expectedH2.substring(0, 40)}..."`, async ({ page: p }) => {
        await p.goto(page.url)
        const h2Texts = await p.locator('h2').allInnerTexts()
        const found = h2Texts.some(t => t.trim() === expectedH2)
        expect(found, `H2 non trouvé sur ${page.url}: "${expectedH2}"\nH2 présents: ${JSON.stringify(h2Texts)}`).toBe(true)
      })
    }
  }

  if ((page as { anchorCheck?: { href: string; text: string } }).anchorCheck) {
    const { href, text } = (page as { anchorCheck: { href: string; text: string } }).anchorCheck
    test(`${page.url} — ancre "${text}"`, async ({ page: p }) => {
      await p.goto(page.url)
      const anchor = p.locator(`a[href="${href}"]`).filter({ hasText: text })
      await expect(anchor.first()).toBeVisible()
    })
  }

  if ((page as { anchorChecks?: { href: string; text: string }[] }).anchorChecks) {
    for (const { href, text } of (page as { anchorChecks: { href: string; text: string }[] }).anchorChecks) {
      test(`${page.url} — ancre "${text}"`, async ({ page: p }) => {
        await p.goto(page.url)
        const anchor = p.locator(`a[href="${href}"]`).filter({ hasText: text })
        await expect(anchor.first()).toBeVisible()
      })
    }
  }
}
