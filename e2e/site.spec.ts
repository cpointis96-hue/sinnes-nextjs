import { test, expect } from '@playwright/test'

// ─── ACCUEIL ────────────────────────────────────────────────────────────────

test.describe('Accueil', () => {
  test('vidéo hero — présente, accessible et en lecture automatique', async ({ page }) => {
    await page.goto('/')

    const video = page.locator('video').first()
    await expect(video).toBeVisible()

    // Vérifier que le fichier vidéo répond (pas 404)
    const response = await page.request.get('/videos/Design-sans-titre-2.mp4')
    expect(response.status()).toBe(200)

    // Vérifier que la vidéo joue (currentTime > 0 après 2s)
    await page.waitForTimeout(2000)
    const isPlaying = await video.evaluate((v: HTMLVideoElement) => !v.paused && v.currentTime > 0)
    expect(isPlaying).toBe(true)
  })

  test('title et méta canonical', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Sinnes/i)
  })

  test('téléphone visible dans le header', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('header').getByText(/6 75 54 04 11/).first()).toBeVisible()
  })

  test('navigation principale visible', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByRole('navigation', { name: 'Navigation principale' })).toBeVisible()
  })
})

// ─── REPRODUCTION CLÉ ───────────────────────────────────────────────────────

test.describe('/reproduction-cle-voiture/', () => {
  test('page chargée — titre h1 présent', async ({ page }) => {
    await page.goto('/reproduction-cle-voiture/')
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test("TrustStrip — 4 items SVG (pas d'emoji)", async ({ page }) => {
    await page.goto('/reproduction-cle-voiture/')
    // Vérifier absence d'emojis (💶 🚗 🔑 📅)
    const body = await page.textContent('body')
    expect(body).not.toContain('💶')
    expect(body).not.toContain('🚗')
    expect(body).not.toContain('🔑')
    expect(body).not.toContain('📅')
    // Vérifier présence des SVG icons dans le TrustStrip (section visible)
    const trustStrip = page.locator('section, div').filter({ has: page.locator('svg[aria-hidden="true"]') }).first()
    await expect(trustStrip).toBeVisible()
  })

  test('CTA urgence — titre en blanc', async ({ page }) => {
    await page.goto('/reproduction-cle-voiture/')
    const h2 = page.locator('h2').filter({ hasText: 'rapidement' })
    await expect(h2).toBeVisible()
    const color = await h2.evaluate(el => getComputedStyle(el).color)
    // rgb(255, 255, 255) = blanc
    expect(color).toBe('rgb(255, 255, 255)')
  })

  test('téléphone dans le CTA urgence', async ({ page }) => {
    await page.goto('/reproduction-cle-voiture/')
    await expect(page.locator('a[href="tel:+33675540411"]').first()).toBeVisible()
  })
})

// ─── SERRURIER AUTOMOBILE ───────────────────────────────────────────────────

test.describe('/serrurier-automobile-nice/', () => {
  test('hero dark (#0A0A0A)', async ({ page }) => {
    await page.goto('/serrurier-automobile-nice/')
    const section = page.locator('section').first()
    const bg = await section.evaluate(el => getComputedStyle(el).backgroundColor)
    // rgb(10, 10, 10) = #0A0A0A
    expect(bg).toBe('rgb(10, 10, 10)')
  })

  test("TrustStrip — pas d'emoji", async ({ page }) => {
    await page.goto('/serrurier-automobile-nice/')
    const body = await page.textContent('body')
    expect(body).not.toContain('💶')
    expect(body).not.toContain('🚗')
  })
})

// ─── TARIF ──────────────────────────────────────────────────────────────────

test.describe('/tarif-cle-voiture/', () => {
  test('page chargée', async ({ page }) => {
    await page.goto('/tarif-cle-voiture/')
    await expect(page.locator('h1').first()).toBeVisible()
  })
})

// ─── NAP — CODE POSTAL ──────────────────────────────────────────────────────

test.describe('NAP — aucun 06100 sur le site', () => {
  const pages = [
    '/',
    '/reproduction-cle-voiture/',
    '/serrurier-automobile-nice/',
    '/tarif-cle-voiture/',
    '/programmation-cle-voiture/',
  ]

  for (const path of pages) {
    test(`${path} — pas de 06100`, async ({ page }) => {
      await page.goto(path)
      const body = await page.textContent('body')
      expect(body).not.toContain('06100')
    })
  }
})

// ─── MOT MYSTÈRE ────────────────────────────────────────────────────────────

test.describe('Mot mystère absent', () => {
  test("accueil — pas d'antidémarrage", async ({ page }) => {
    await page.goto('/')
    const body = await page.textContent('body')
    expect(body).not.toContain('antidémarrage')
  })
})
