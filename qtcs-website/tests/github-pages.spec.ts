import { test, expect } from '@playwright/test';

// When GitHub Pages serves from /docs folder, the docs content becomes the root
const BASE_URL = 'https://tenzintsean.github.io/qtcs-presentation-new';

test.describe('GitHub Pages Deployment', () => {
  test('check hub page (root)', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/github-pages-hub.png', fullPage: true });
    console.log('Hub page title:', await page.title());
  });

  test('check website preview', async ({ page }) => {
    // docs/website/ becomes /website/ on GitHub Pages
    await page.goto(`${BASE_URL}/website/`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/github-pages-website.png', fullPage: true });
    console.log('Website title:', await page.title());
  });

  test('check style guide', async ({ page }) => {
    await page.goto(`${BASE_URL}/style-guide/`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/github-pages-style-guide.png', fullPage: true });
    console.log('Style guide title:', await page.title());
  });

  test('check lighthouse report', async ({ page }) => {
    await page.goto(`${BASE_URL}/reports/lighthouse-report.html`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/github-pages-lighthouse.png', fullPage: true });
    console.log('Lighthouse report title:', await page.title());
  });

  test('check presentation (original)', async ({ page }) => {
    // The original presentation should still be at the old location
    // But now docs/index.html is at root, so we need to check if presentation link works
    await page.goto(`${BASE_URL}/index.html`);
    await page.waitForLoadState('networkidle');
    await page.screenshot({ path: 'test-results/github-pages-presentation.png', fullPage: true });
    console.log('Presentation title:', await page.title());
  });
});
