import { chromium } from '@playwright/test'
import { mkdir } from 'fs/promises'
import { existsSync } from 'fs'

const BASE = 'http://localhost:3001'
const OUT  = '/tmp/sinnes-screenshots'

const PAGES = [
  { slug: '/',                              label: 'home' },
  { slug: '/reproduction-cle-voiture/',     label: 'reproduction' },
  { slug: '/serrurier-automobile-nice/',    label: 'serrurier' },
  { slug: '/tarif-cle-voiture/',            label: 'tarif' },
  { slug: '/double-cle-voiture/',           label: 'double' },
  { slug: '/cle-voiture-perdue/',           label: 'perdue' },
  { slug: '/programmation-cle-voiture/',    label: 'programmation' },
  { slug: '/cle-voiture-transpondeur/',     label: 'transpondeur' },
  { slug: '/cle-voiture-nice/',             label: 'nice' },
  { slug: '/urgence-cle-voiture/',          label: 'urgence' },
  { slug: '/depannage-cle-domicile/',       label: 'depannage' },
  { slug: '/prix-cle-voiture/',             label: 'prix' },
  { slug: '/prix-cle-vs-concessionnaire/',  label: 'vs-concessionnaire' },
]

const VIEWPORTS = [
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'mobile',  width: 390,  height: 844 },
]

const issues = []

async function checkPage(page, url, label, vp) {
  const pageIssues = []
  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 })

  // --- H1 visibility ---
  const h1 = page.locator('h1').first()
  const h1Text  = await h1.textContent().catch(() => '(missing)')
  const h1Color = await h1.evaluate(el => getComputedStyle(el).color).catch(() => 'err')
  const h1BgEl  = await h1.evaluate(el => {
    let node = el
    while (node) {
      const bg = getComputedStyle(node).backgroundColor
      if (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') return bg
      node = node.parentElement
    }
    return 'unknown'
  }).catch(() => 'err')

  // Parse rgb(r,g,b) → luminance
  const lum = (rgb) => {
    const m = rgb.match(/(\d+),\s*(\d+),\s*(\d+)/)
    if (!m) return -1
    const [r, g, b] = [+m[1], +m[2], +m[3]].map(v => {
      v /= 255
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    })
    return 0.2126 * r + 0.7152 * g + 0.0722 * b
  }

  const lumText = lum(h1Color)
  const lumBg   = lum(h1BgEl)
  const contrast = lumText >= 0 && lumBg >= 0
    ? (Math.max(lumText, lumBg) + 0.05) / (Math.min(lumText, lumBg) + 0.05)
    : -1

  if (contrast > 0 && contrast < 4.5) {
    pageIssues.push(`H1 contrast faible : ${contrast.toFixed(1)} (couleur=${h1Color}, fond=${h1BgEl})`)
  }

  // --- CTA tel présent ---
  const ctaTel = await page.locator('a[href^="tel:"]').count()
  if (ctaTel === 0) pageIssues.push('Aucun lien tel: trouvé')

  // --- NAP tel display ---
  const hasPhone = await page.locator('text=+33 6 75 54 04 11').count()
  if (hasPhone === 0) pageIssues.push('Téléphone +33 6 75 54 04 11 absent du DOM')

  // --- Pas de 06100 ---
  const bodyText = await page.locator('body').innerText()
  if (bodyText.includes('06100')) pageIssues.push('Code postal 06100 détecté !')

  // --- Mot mystère ---
  if (bodyText.toLowerCase().includes('antidémarrage')) pageIssues.push('Mot mystère "antidémarrage" présent !')

  // --- Logo visible ---
  const logo = page.locator('header img').first()
  const logoVisible = await logo.isVisible().catch(() => false)
  if (!logoVisible) pageIssues.push('Logo header non visible')

  // --- Footer pas de liens cocon ---
  const footerLinks = await page.locator('footer a').all()
  const coconPattern = /\/(reproduction-cle|serrurier-automobile|tarif-cle|double-cle|cle-voiture|urgence|depannage|prix-cle|refaire-cle)/
  for (const link of footerLinks) {
    const href = await link.getAttribute('href').catch(() => '')
    if (href && coconPattern.test(href)) {
      pageIssues.push(`Footer contient lien cocon : ${href}`)
    }
  }

  // --- Screenshots ---
  const shot = `${OUT}/${label}-${vp.name}.png`
  await page.screenshot({ path: shot, fullPage: true })

  return pageIssues
}

;(async () => {
  if (!existsSync(OUT)) await mkdir(OUT, { recursive: true })

  const browser = await chromium.launch()

  for (const vp of VIEWPORTS) {
    const ctx = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 2,
    })
    const page = await ctx.newPage()

    for (const { slug, label } of PAGES) {
      const url = BASE + slug
      console.log(`[${vp.name}] ${url}`)
      try {
        const pageIssues = await checkPage(page, url, label, vp)
        if (pageIssues.length) {
          issues.push({ page: label, viewport: vp.name, issues: pageIssues })
        }
      } catch (e) {
        issues.push({ page: label, viewport: vp.name, issues: [`ERREUR: ${e.message}`] })
      }
    }

    await ctx.close()
  }

  await browser.close()

  console.log('\n══════════════════════════════════════')
  console.log('RAPPORT VISUEL SINNES — toutes pages')
  console.log('══════════════════════════════════════')

  if (issues.length === 0) {
    console.log('✅ Aucun problème détecté sur les', PAGES.length, 'pages ×', VIEWPORTS.length, 'viewports')
  } else {
    console.log(`⚠️  ${issues.length} problème(s) détecté(s) :\n`)
    for (const { page, viewport, issues: list } of issues) {
      console.log(`[${viewport}] /${page}/`)
      for (const msg of list) console.log(`  → ${msg}`)
    }
  }

  console.log(`\nScreenshots : ${OUT}/`)
})()
