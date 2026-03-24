import { test, expect } from '@playwright/test'

test.describe('Bylines Verification', () => {
  test('Page Accueil — Bylines Sinouhé et Inès', async ({ page }) => {
    await page.goto('/')

    // Section Qui sommes-nous
    const section = page.locator('section').filter({ has: page.locator('h2', { hasText: /Sinouhé et Inès/i }) })
    await expect(section).toBeVisible()

    // Byline Sinouhé - on cible le paragraphe qui contient le texte
    const bylineSinouhe = section.locator('p', { hasText: /Sinouhé Rochereau/i })
    await expect(bylineSinouhe).toBeVisible()
    await expect(bylineSinouhe).toHaveClass(/border-l-4/)

    // Byline Inès
    const bylineInes = section.locator('p', { hasText: /Inès Barthelemy/i })
    await expect(bylineInes).toBeVisible()
    await expect(bylineInes).toHaveClass(/border-l-4/)
  })

  test('Page Contact — Byline Inès', async ({ page }) => {
    await page.goto('/contactez-nous/')

    // On cherche le paragraphe qui contient le texte
    const bylineInes = page.locator('p', { hasText: /Inès Barthelemy/i })
    await expect(bylineInes).toBeVisible()
    await expect(bylineInes).toHaveClass(/border-l-4/)
    
    // Vérifier qu'il est bien placé près du formulaire ou du titre NAP
    await expect(page.locator('h2', { hasText: /Demande de devis/i })).toBeVisible()
  })

  test('Page Accueil — Vidéo Hero Poster', async ({ page }) => {
    await page.goto('/')
    const video = page.locator('section').locator('video').first()
    await expect(video).toBeVisible()
    await expect(video).toHaveAttribute('poster', '/images/hero-poster.png')
  })
})
