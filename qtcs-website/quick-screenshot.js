import { chromium } from '@playwright/test';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await page.goto('http://localhost:4325/qtcs-presentation-new/website/', { waitUntil: 'networkidle' });
await page.screenshot({ path: '../test-results/glass-button-fix.png' });
await browser.close();
console.log('✅ Screenshot saved');
