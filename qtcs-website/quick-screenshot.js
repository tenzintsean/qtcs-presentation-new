import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

// Screenshot the footer by scrolling to bottom
await page.goto('http://localhost:4326/qtcs-presentation-new/website/', { waitUntil: 'networkidle' });
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(300);
await page.screenshot({ path: '../test-results/footer-fixed.png' });
console.log('✅ Footer screenshot saved');

await browser.close();
