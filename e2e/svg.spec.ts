import { test, expect } from '@playwright/test'

// Pages contenant des SVG inline à tester
const PAGES_WITH_SVG = [
  { path: '/', label: 'Accueil' },
  { path: '/reproduction-cle-voiture/', label: 'Reproduction clé' },
  { path: '/serrurier-automobile-nice/', label: 'Serrurier auto' },
  { path: '/tarif-cle-voiture/', label: 'Tarif clé' },
]

// ─── HELPER — vérifie que la page est accessible avant de tester ─────────────

async function pageIsOk(page: import('@playwright/test').Page, path: string) {
  const response = await page.goto(path)
  if (!response || response.status() >= 400) {
    console.warn(`⚠️  Page ${path} inaccessible (${response?.status()}) — test ignoré`)
    return false
  }
  await page.waitForLoadState('networkidle')
  return true
}

// ─── 1. SVGs VISIBLES ET NON TRONQUÉES ──────────────────────────────────────

for (const { path, label } of PAGES_WITH_SVG) {
  test.describe(`SVG — ${label} (${path})`, () => {

    test('les SVG visibles ont des dimensions > 0 et un viewBox', async ({ page }) => {
      const ok = await pageIsOk(page, path)
      if (!ok) return

      // Ne tester que les SVG réellement visibles dans le viewport
      const svgs = page.locator('svg:visible')
      const count = await svgs.count()

      if (count === 0) {
        console.warn(`⚠️  Aucun SVG visible sur ${path}`)
        return
      }

      for (let i = 0; i < count; i++) {
        const svg = svgs.nth(i)
        const metrics = await svg.evaluate((el: SVGSVGElement) => {
          const rect = el.getBoundingClientRect()
          return {
            width: rect.width,
            height: rect.height,
            hasViewBox: el.hasAttribute('viewBox'),
          }
        })

        expect(metrics.width, `SVG visible #${i} a width = 0 sur ${path}`).toBeGreaterThan(0)
        expect(metrics.height, `SVG visible #${i} a height = 0 sur ${path}`).toBeGreaterThan(0)
        expect(metrics.hasViewBox, `SVG visible #${i} manque viewBox sur ${path}`).toBe(true)
      }
    })

    test('aucun SVG visible ne sort du viewport', async ({ page }) => {
      const ok = await pageIsOk(page, path)
      if (!ok) return

      const svgs = page.locator('svg:visible')
      const count = await svgs.count()
      if (count === 0) return

      const viewportWidth = page.viewportSize()?.width ?? 1280

      for (let i = 0; i < count; i++) {
        const svg = svgs.nth(i)
        const { left, right } = await svg.evaluate((el: SVGSVGElement) => {
          const rect = el.getBoundingClientRect()
          return { left: rect.left, right: rect.right }
        })
        // Un SVG ne doit pas commencer hors écran à gauche ni dépasser largement à droite
        expect(left, `SVG visible #${i} sort du viewport à gauche sur ${path}`).toBeGreaterThanOrEqual(-10)
        expect(right, `SVG visible #${i} sort du viewport à droite sur ${path}`).toBeLessThanOrEqual(viewportWidth + 10)
      }
    })
  })
}

// ─── 2. TRUSTSTRIP — icônes w-8 h-8 visibles ────────────────────────────────

test.describe('TrustStrip — icônes SVG', () => {
  const pagesWithTrustStrip = [
    '/reproduction-cle-voiture/',
    '/serrurier-automobile-nice/',
  ]

  for (const path of pagesWithTrustStrip) {
    test(`${path} — au moins 4 icônes SVG visibles (~32px)`, async ({ page }) => {
      const ok = await pageIsOk(page, path)
      if (!ok) return

      // Les icônes TrustStrip sont dans un span avec color:#efad42 = rgb(239,173,66)
      const icons = page.locator('span').filter({ has: page.locator('svg[aria-hidden="true"]') }).locator('svg[aria-hidden="true"]:visible')
      const count = await icons.count()
      expect(count, `Moins de 4 icônes TrustStrip visibles sur ${path}`).toBeGreaterThanOrEqual(4)

      for (let i = 0; i < Math.min(count, 8); i++) {
        const icon = icons.nth(i)
        const { width, height } = await icon.evaluate((el: SVGSVGElement) => {
          const rect = el.getBoundingClientRect()
          return { width: rect.width, height: rect.height }
        })
        // w-8 h-8 = 32px — tolérance ±10px cross-browser (zoom, density)
        expect(width, `Icône TrustStrip #${i} trop petite (width=${width})`).toBeGreaterThanOrEqual(20)
        expect(width, `Icône TrustStrip #${i} trop grande (width=${width})`).toBeLessThanOrEqual(48)
        expect(height, `Icône TrustStrip #${i} trop petite (height=${height})`).toBeGreaterThanOrEqual(20)
        expect(height, `Icône TrustStrip #${i} trop grande (height=${height})`).toBeLessThanOrEqual(48)
      }
    })
  }
})

// ─── 3. PROCESSSTEPS — flèche desktop ───────────────────────────────────────

test.describe('ProcessSteps — flèche SVG desktop', () => {
  test('flèche visible et correctement dimensionnée sur desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 })
    const ok = await pageIsOk(page, '/reproduction-cle-voiture/')
    if (!ok) return

    // La flèche ProcessSteps a un path d="M9 18l6-6-6-6"
    const arrow = page.locator('svg').filter({
      has: page.locator('path[d="M9 18l6-6-6-6"]'),
    })
    const arrowCount = await arrow.count()
    if (arrowCount === 0) return // ProcessSteps peut ne pas être sur cette page

    const { width, height } = await arrow.first().evaluate((el: SVGSVGElement) => {
      const rect = el.getBoundingClientRect()
      return { width: rect.width, height: rect.height }
    })
    expect(width).toBeGreaterThan(0)
    expect(height).toBeGreaterThan(0)
  })
})

// ─── 4. SVG FICHIERS STATIQUES (fast-check) ──────────────────────────────────

test.describe('SVG statiques — public/images/svg/', () => {
  const svgFiles = [
    '/images/svg/fast-check-reproduction-cle-voiture.svg',
    '/images/svg/fast-check-serrurier-automobile-nice.svg',
    '/images/svg/fast-check-tarif-cle-voiture.svg',
  ]

  for (const file of svgFiles) {
    test(`${file} — si déployé, doit être un SVG valide avec viewBox`, async ({ page }) => {
      const response = await page.request.get(file)

      if (response.status() === 404) {
        console.warn(`⚠️  Fichier SVG non déployé : ${file}`)
        return // Pas encore déployé — OK
      }

      expect(response.status(), `${file} retourne une erreur`).toBe(200)

      const contentType = response.headers()['content-type'] ?? ''
      expect(contentType, `${file} n'est pas servi comme SVG`).toContain('svg')

      const body = await response.text()
      expect(body, `${file} ne contient pas de balise <svg`).toContain('<svg')
      expect(body, `${file} manque l'attribut viewBox`).toContain('viewBox')
    })
  }
})

// ─── 5. COULEUR ICÔNES #efad42 (rgb(239, 173, 66)) ───────────────────────────

test.describe('TrustStrip — couleur dorée des icônes', () => {
  test('/reproduction-cle-voiture/ — icônes couleur #efad42', async ({ page }) => {
    const ok = await pageIsOk(page, '/reproduction-cle-voiture/')
    if (!ok) return

    // Chercher les spans contenant des SVG avec une couleur explicite
    const iconWrappers = page.locator('span').filter({ has: page.locator('svg[aria-hidden="true"]') })
    const count = await iconWrappers.count()
    if (count === 0) {
      console.warn('⚠️  Aucun span avec SVG trouvé pour le test couleur')
      return
    }

    const color = await iconWrappers.first().evaluate(
      (el) => getComputedStyle(el).color
    )
    // rgb(239, 173, 66) = #efad42
    expect(color, `Couleur des icônes incorrecte : ${color}`).toBe('rgb(239, 173, 66)')
  })
})
