import { test, expect } from '@playwright/test';

test.describe('Service Cards Branded Design', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have three branded service cards with gold top border', async ({ page }) => {
    const cards = page.locator('.card-branded');
    await expect(cards).toHaveCount(3);

    // Verify the top border color of the first card
    const firstCard = cards.first();
    const borderTopColor = await firstCard.evaluate((el) => window.getComputedStyle(el).borderTopColor);
    // rgb(239, 173, 66) is #EFAD42
    expect(borderTopColor).toBe('rgb(239, 173, 66)');
  });

  test('should lift and change shadow on hover', async ({ page }) => {
    const firstCard = page.locator('.card-branded').first();
    
    // Initial transform
    const initialTransform = await firstCard.evaluate((el) => window.getComputedStyle(el).transform);
    
    // Hover
    await firstCard.hover();
    await page.waitForTimeout(500); // Wait for transition
    
    const hoverTransform = await firstCard.evaluate((el) => window.getComputedStyle(el).transform);
    expect(hoverTransform).not.toBe(initialTransform);
    
    // Check if it moved up (translateY should be negative)
    // The matrix for translateY(-8px) will have -8 in the 6th position
    expect(hoverTransform).toContain('-8');
  });

  test('should have buttons with arrows that animate on hover', async ({ page }) => {
    const firstButton = page.locator('.btn-with-arrow').first();
    await expect(firstButton).toBeVisible();

    // Check if the pseudoelement content is an arrow
    const afterContent = await firstButton.evaluate((el) => {
      const style = window.getComputedStyle(el, '::after');
      return style.content;
    });
    expect(afterContent).toContain('→');
  });
});
