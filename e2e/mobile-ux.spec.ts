import { test, expect } from '@playwright/test';

const pagesToTest = [
  '/',
  '/reproduction-cle-voiture/',
  '/double-cle-voiture/',
  '/cle-voiture-perdue/',
  '/programmation-cle-voiture/',
  '/refaire-cle-audi/',
  '/refaire-cle-fiat/',
  '/refaire-cle-hyundai/',
  '/refaire-cle-mercedes/',
  '/refaire-cle-renault/',
  '/refaire-cle-toyota/',
  '/serrurier-automobile-nice/',
  '/tarif-cle-voiture/',
  '/contactez-nous/',
  '/depannage-cle-domicile/',
  '/urgence-cle-voiture/',
  '/cle-voiture-nice/',
  '/cle-voiture-transpondeur/',
  '/prix-cle-voiture/',
  '/prix-cle-vs-concessionnaire/'
];

test.describe('Mobile UX Verification', () => {
  for (const url of pagesToTest) {
    test(`Page ${url} - Mobile SE (320px) checks`, async ({ page }) => {
      // Step 1: Set viewport to iPhone SE (320px width)
      await page.setViewportSize({ width: 320, height: 568 });
      
      // Step 2: Navigate to the page
      await page.goto(url);
      
      // Step 3: Wait for network idle to ensure everything is loaded
      await page.waitForLoadState('networkidle');

      const overflowData = await page.evaluate(() => {
        const elements = document.querySelectorAll('*');
        const results = [];
        const vw = window.innerWidth;
        for (const el of elements) {
          const rect = el.getBoundingClientRect();
          if (rect.right > vw + 1) {
            results.push({
              tag: el.tagName,
              id: el.id,
              className: el.className,
              right: Math.round(rect.right),
              width: Math.round(rect.width)
            });
          }
        }
        return { 
          hasOverflow: document.documentElement.scrollWidth > vw + 1,
          scrollWidth: document.documentElement.scrollWidth,
          overflowingElements: results.slice(0, 5) // Top 5
        };
      });

      if (overflowData.hasOverflow) {
        console.log(`[OVERFLOW] Page ${url} overflows! scrollWidth: ${overflowData.scrollWidth}. Elements:`, overflowData.overflowingElements);
      }
      expect(overflowData.hasOverflow, `Page ${url} has horizontal overflow at 320px. scrollWidth: ${overflowData.scrollWidth}`).toBe(false);

      const phoneSpans = page.locator('span.whitespace-nowrap', { hasText: /06|75|54/ });
      const counts = await phoneSpans.count();
      
      for (let i = 0; i < counts; i++) {
        const span = phoneSpans.nth(i);
        // Only check visibility if it's in the viewport
        const box = await span.boundingBox();
        if (box && box.x < 320 && box.x + box.width > 0) {
          await expect(span).toBeVisible();
          expect(box.width, `Phone number span in ${url} is wider than the viewport (${box.width}px)`).toBeLessThanOrEqual(320);
        }
      }

      // 3. Verify Main CTAs (links with tel:) are visible and within bounds
      const ctas = page.locator('a[href^="tel:"]');
      const ctaCounts = await ctas.count();
      for (let i = 0; i < ctaCounts; i++) {
        const cta = ctas.nth(i);
        const box = await cta.boundingBox();
        // Only check elements that are actually on screen (x < 320)
        if (box && box.x < 320 && box.x + box.width > 0) {
          await expect(cta).toBeVisible();
          expect(box.x + box.width, `CTA in ${url} overflows horizontally at ${box.x + box.width}px`).toBeLessThanOrEqual(320.5);
        }
      }

      // 4. Performance Check: First Contentful Paint (FCP) < 2.5s
      const fcp = await page.evaluate(() => {
        const paintEntries = performance.getEntriesByType('paint');
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint');
        return fcpEntry ? fcpEntry.startTime : null;
      });
      
      if (fcp !== null) {
        console.log(`FCP for ${url}: ${Math.round(fcp)}ms`);
        expect(fcp, `FCP for ${url} is too high: ${fcp}ms`).toBeLessThan(2500);
      }
    });
  }
});
