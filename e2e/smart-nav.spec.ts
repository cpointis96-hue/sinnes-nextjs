import { test, expect } from '@playwright/test';

test.describe('Smart Header & CTA Coordination', () => {
  const pageToTest = '/reproduction-cle-voiture/';

  test('Header hides and CTA appears on scroll down', async ({ page }) => {
    // Navigate to the page
    await page.goto(pageToTest);
    
    // Set viewport to mobile
    await page.setViewportSize({ width: 320, height: 568 });

    const header = page.locator('.header-smart');
    // More robust locator for the CTA link
    const cta = page.locator('a[href^="tel:"]').filter({ hasText: /Devis gratuit|URGENCE/ }).first();

    // 1. Initial state (top of page)
    await expect(header).toBeVisible();
    const initialHeaderTransform = await header.evaluate(el => window.getComputedStyle(el).transform);
    console.log('Initial header transform:', initialHeaderTransform);
    // Identity transform can be 'none' or matrix(1, 0, 0, 1, 0, 0)
    expect(['none', 'matrix(1, 0, 0, 1, 0, 0)']).toContain(initialHeaderTransform);
    
    // CTA should NOT be visible initially
    await expect(cta).not.toBeVisible();

    // 2. Scroll down 500px
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(1000); // Wait for transition

    // Header should be translated up (hidden)
    const scrolledHeaderTransform = await header.evaluate(el => window.getComputedStyle(el).transform);
    console.log('Scrolled down header transform:', scrolledHeaderTransform);
    // Expect some form of transform matrix that is NOT identity
    expect(scrolledHeaderTransform).not.toBe('none');
    expect(scrolledHeaderTransform).not.toBe('matrix(1, 0, 0, 1, 0, 0)');

    // CTA should be visible
    await expect(cta).toBeVisible();

    // 3. Scroll up
    await page.evaluate(() => window.scrollTo(0, 0)); // Scroll back to top
    await page.waitForTimeout(1000);

    // Header should reappear
    const scrolledUpHeaderTransform = await header.evaluate(el => window.getComputedStyle(el).transform);
    console.log('Scrolled up header transform:', scrolledUpHeaderTransform);
    expect(['none', 'matrix(1, 0, 0, 1, 0, 0)']).toContain(scrolledUpHeaderTransform);

    // CTA should hide
    await expect(cta).not.toBeVisible();
  });
});
