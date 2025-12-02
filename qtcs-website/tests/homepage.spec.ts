import { test, expect } from '@playwright/test';

test.describe('Homepage', () => {
  test('should load homepage with correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/QTCS/);
  });

  test('should display hero section', async ({ page }) => {
    await page.goto('/');

    // Check main headline
    const headline = page.locator('h1');
    await expect(headline).toContainText('Driving the Future');
    await expect(headline).toContainText("India's Mobility");
  });

  test('should display navigation header', async ({ page }) => {
    await page.goto('/');

    // Check logo is visible
    const logo = page.locator('header img[alt="QTCS Logo"]');
    await expect(logo).toBeVisible();

    // Check navigation links (desktop)
    const homeLink = page.locator('header a[href="/"]').first();
    await expect(homeLink).toBeVisible();
  });

  test('should display stats section', async ({ page }) => {
    await page.goto('/');

    // Check stats are visible
    await expect(page.getByText('7+')).toBeVisible();
    await expect(page.getByText('Vehicle Models')).toBeVisible();
    await expect(page.getByText('Zero')).toBeVisible();
    await expect(page.getByText('Emissions')).toBeVisible();
  });

  test('should display CTA buttons', async ({ page }) => {
    await page.goto('/');

    // Check CTA buttons
    const exploreBtn = page.getByRole('link', { name: 'Explore Vehicles' });
    const contactBtn = page.getByRole('link', { name: 'Contact Us' });

    await expect(exploreBtn).toBeVisible();
    await expect(contactBtn).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    await page.goto('/');

    // Check footer exists
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();

    // Check copyright
    await expect(footer).toContainText('QTCS');
  });
});

test.describe('Mobile Responsiveness', () => {
  test('should show mobile menu button on mobile', async ({ page, isMobile }) => {
    await page.goto('/');

    const mobileMenuBtn = page.locator('#mobile-menu-btn');

    if (isMobile) {
      await expect(mobileMenuBtn).toBeVisible();
    }
  });

  test('should toggle mobile menu when clicked', async ({ page, isMobile }) => {
    if (!isMobile) {
      test.skip();
      return;
    }

    await page.goto('/');

    const mobileMenuBtn = page.locator('#mobile-menu-btn');
    const mobileMenu = page.locator('#mobile-menu');

    // Menu should be closed initially
    await expect(mobileMenu).toHaveAttribute('data-open', 'false');

    // Click to open
    await mobileMenuBtn.click();
    await expect(mobileMenu).toHaveAttribute('data-open', 'true');

    // Click to close
    await mobileMenuBtn.click();
    await expect(mobileMenu).toHaveAttribute('data-open', 'false');
  });
});

test.describe('Visual Verification', () => {
  test('should take desktop screenshot', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/homepage-desktop.png', fullPage: true });
  });

  test('should display sky-blue gradient background', async ({ page }) => {
    await page.goto('/');

    const body = page.locator('body');
    await expect(body).toHaveClass(/bg-sky-gradient/);
  });
});
