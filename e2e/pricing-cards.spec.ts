import { test, expect } from '@playwright/test'

test.describe('Pricing Cards — /tarif-cle-voiture/', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/tarif-cle-voiture/')
    await page.waitForSelector('[data-testid="pricing-grid"]', { state: 'visible' })
  })

  test('4 cards visibles avec titres corrects', async ({ page }) => {
    const cards = page.locator('[data-testid="pricing-card"]')
    await expect(cards).toHaveCount(4)

    await expect(cards.nth(0)).toContainText('Clé Simple')
    await expect(cards.nth(1)).toContainText('Clé Centralisée')
    await expect(cards.nth(2)).toContainText('Clé Mains Libres')
    await expect(cards.nth(3)).toContainText('Perte Totale')
  })

  test('prix corrects sur chaque card', async ({ page }) => {
    const cards = page.locator('[data-testid="pricing-card"]')
    await expect(cards.nth(0)).toContainText('78')
    await expect(cards.nth(1)).toContainText('132')
    await expect(cards.nth(2)).toContainText('150')
    await expect(cards.nth(3)).toContainText('240')
  })

  test('prix concessionnaire affiché sur chaque card', async ({ page }) => {
    const cards = page.locator('[data-testid="pricing-card"]')
    await expect(cards.nth(0)).toContainText('150')
    await expect(cards.nth(0)).toContainText('250€')
    await expect(cards.nth(1)).toContainText('200')
    await expect(cards.nth(1)).toContainText('400€')
    await expect(cards.nth(2)).toContainText('400')
    await expect(cards.nth(2)).toContainText('800€')
    await expect(cards.nth(3)).toContainText('500')
    await expect(cards.nth(3)).toContainText('1200€')
  })

  test('bouton Contactez-nous présent sur chaque card', async ({ page }) => {
    const btns = page.locator('[data-testid="pricing-grid"] a[href="/contactez-nous/"]')
    await expect(btns).toHaveCount(4)
  })

  test('screenshot — état repos (toutes les cards)', async ({ page, browserName }) => {
    const grid = page.locator('[data-testid="pricing-grid"]')
    await expect(grid).toBeVisible()
    await grid.screenshot({
      path: `e2e/screenshots/pricing-cards-rest-${browserName}.png`,
    })
  })

  test('screenshot — hover card 1 (Clé Simple)', async ({ page, browserName }) => {
    const card = page.locator('[data-testid="pricing-card"]').nth(0)
    await card.hover()
    await page.waitForTimeout(400)
    await card.screenshot({
      path: `e2e/screenshots/pricing-card-hover-${browserName}.png`,
    })
  })

  test('badge prix noir en repos', async ({ page }) => {
    const badge = page.locator('[data-testid="price-badge"]').nth(0)
    await expect(badge).toBeVisible()
    const bg = await badge.evaluate(el => getComputedStyle(el).backgroundColor)
    // inline style #1A1A1A = rgb(26, 26, 26)
    expect(bg).toBe('rgb(26, 26, 26)')
  })

  // Hover via React useState — disponible partout (même mobile simulé)
  test('badge prix devient gold au hover', async ({ page, isMobile }) => {
    test.skip(isMobile, 'mouseenter non déclenché sur touch simulé')

    const card = page.locator('[data-testid="pricing-card"]').nth(0)
    const badge = page.locator('[data-testid="price-badge"]').nth(0)

    await card.hover()
    await page.waitForTimeout(350)

    const bg = await badge.evaluate(el => getComputedStyle(el).backgroundColor)
    // inline style hover #EFAD42 = rgb(239, 173, 66)
    expect(bg).toBe('rgb(239, 173, 66)')
  })

  test('card grossit au hover (Framer Motion scale)', async ({ page, isMobile }) => {
    test.skip(isMobile, 'scale au hover non testable sur touch')

    const card = page.locator('[data-testid="pricing-card"]').nth(1)

    const beforeBox = await card.boundingBox()
    await card.hover()
    await page.waitForTimeout(400)
    const afterBox = await card.boundingBox()

    expect(afterBox!.width).toBeGreaterThan(beforeBox!.width - 1)
    expect(afterBox!.height).toBeGreaterThan(beforeBox!.height - 1)
  })

})
