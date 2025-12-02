import { test, expect } from '@playwright/test';
import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

test.describe('Lighthouse Performance Tests', () => {
  test.skip('should score 80+ on Lighthouse Performance', async () => {
    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = {
      logLevel: 'info' as const,
      output: 'json' as const,
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
    };

    const runnerResult = await lighthouse('http://localhost:4321', options);

    if (runnerResult?.lhr) {
      const { lhr } = runnerResult;
      console.log('Lighthouse Scores:');
      console.log(`Performance: ${Math.round((lhr.categories.performance?.score || 0) * 100)}`);
      console.log(`Accessibility: ${Math.round((lhr.categories.accessibility?.score || 0) * 100)}`);
      console.log(`Best Practices: ${Math.round((lhr.categories['best-practices']?.score || 0) * 100)}`);
      console.log(`SEO: ${Math.round((lhr.categories.seo?.score || 0) * 100)}`);

      expect((lhr.categories.performance?.score || 0) * 100).toBeGreaterThanOrEqual(80);
      expect((lhr.categories.accessibility?.score || 0) * 100).toBeGreaterThanOrEqual(80);
      expect((lhr.categories['best-practices']?.score || 0) * 100).toBeGreaterThanOrEqual(80);
      expect((lhr.categories.seo?.score || 0) * 100).toBeGreaterThanOrEqual(80);
    }

    await chrome.kill();
  });
});
