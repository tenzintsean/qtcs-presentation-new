import { chromium } from '@playwright/test';

const browser = await chromium.launch();

// Desktop view
const desktopPage = await browser.newPage({ viewport: { width: 1280, height: 800 } });
await desktopPage.goto('http://localhost:4326/qtcs-presentation-new/website/', { waitUntil: 'networkidle' });
await desktopPage.screenshot({ path: '../test-results/header-desktop.png' });
console.log('✅ Desktop screenshot saved');

// Mobile view - header visible
const mobilePage = await browser.newPage({ viewport: { width: 375, height: 812 } });
await mobilePage.goto('http://localhost:4326/qtcs-presentation-new/website/', { waitUntil: 'networkidle' });
await mobilePage.screenshot({ path: '../test-results/header-mobile-closed.png' });
console.log('✅ Mobile header closed screenshot saved');

// Mobile view - hamburger menu opened
await mobilePage.click('#mobile-menu-btn');
await mobilePage.waitForTimeout(300); // Wait for animation
await mobilePage.screenshot({ path: '../test-results/header-mobile-open.png' });
console.log('✅ Mobile header open screenshot saved');

await browser.close();
console.log('✅ All screenshots saved');
