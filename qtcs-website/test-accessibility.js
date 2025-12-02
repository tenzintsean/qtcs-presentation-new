import { chromium } from '@playwright/test';

async function captureScreenshots() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1280, height: 800 }
  });
  const page = await context.newPage();

  const BASE_URL = 'http://localhost:4322/qtcs-presentation-new/website';

  const pages = [
    { url: '/', name: 'home' },
    { url: '/about/', name: 'about' },
    { url: '/contact/', name: 'contact' },
    { url: '/products/', name: 'products' },
  ];

  console.log('Taking screenshots of accessible text colors...\n');

  for (const p of pages) {
    try {
      await page.goto(`${BASE_URL}${p.url}`, { waitUntil: 'networkidle' });
      await page.screenshot({
        path: `../test-results/accessibility-${p.name}.png`,
        fullPage: true
      });
      console.log(`✓ ${p.name} page captured`);
    } catch (e) {
      console.error(`✗ ${p.name} failed: ${e.message}`);
    }
  }

  // Mobile viewport
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto(`${BASE_URL}/`, { waitUntil: 'networkidle' });
  await page.screenshot({
    path: `../test-results/accessibility-home-mobile.png`,
    fullPage: true
  });
  console.log('✓ home (mobile) captured');

  await browser.close();
  console.log('\n✅ All screenshots saved to test-results/');
}

captureScreenshots().catch(console.error);
