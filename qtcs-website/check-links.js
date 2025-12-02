import { chromium } from '@playwright/test';

const BASE_URL = 'http://localhost:4326/qtcs-presentation-new/website';
const visited = new Set();
const brokenLinks = [];
const workingLinks = [];

async function checkLink(page, url, source) {
  if (visited.has(url)) return;
  visited.add(url);

  // Skip external links, mailto, tel, and anchor links
  if (url.startsWith('mailto:') || url.startsWith('tel:') || url.startsWith('#')) {
    console.log(`⏭️  Skipping: ${url}`);
    return;
  }

  // Skip external URLs
  if (!url.startsWith(BASE_URL) && !url.startsWith('/')) {
    console.log(`⏭️  External: ${url}`);
    return;
  }

  const fullUrl = url.startsWith('/') ? `http://localhost:4326${url}` : url;

  try {
    const response = await page.goto(fullUrl, { waitUntil: 'domcontentloaded', timeout: 10000 });
    const status = response?.status() || 0;

    if (status === 404 || status === 0) {
      brokenLinks.push({ url: fullUrl, source, status });
      console.log(`❌ 404: ${fullUrl} (from ${source})`);
    } else {
      workingLinks.push({ url: fullUrl, status });
      console.log(`✅ ${status}: ${fullUrl}`);
    }
  } catch (error) {
    brokenLinks.push({ url: fullUrl, source, error: error.message });
    console.log(`❌ Error: ${fullUrl} - ${error.message}`);
  }
}

async function crawlPage(page, url) {
  console.log(`\n📄 Crawling: ${url}`);

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });
  } catch (e) {
    console.log(`❌ Failed to load: ${url}`);
    return [];
  }

  // Get all links on the page
  const links = await page.evaluate(() => {
    return Array.from(document.querySelectorAll('a[href]')).map(a => a.href);
  });

  return links;
}

const browser = await chromium.launch();
const page = await browser.newPage();

// Start with home page
const pages = [
  `${BASE_URL}/`,
  `${BASE_URL}/products/`,
  `${BASE_URL}/about/`,
  `${BASE_URL}/contact/`
];

console.log('🔍 Checking all website links for 404 errors...\n');

// Check each main page
for (const pageUrl of pages) {
  await checkLink(page, pageUrl, 'direct');
}

// Now crawl each page and check internal links
for (const pageUrl of pages) {
  const links = await crawlPage(page, pageUrl);

  for (const link of links) {
    await checkLink(page, link, pageUrl);
  }
}

await browser.close();

// Summary
console.log('\n' + '='.repeat(60));
console.log('📊 LINK CHECK SUMMARY');
console.log('='.repeat(60));
console.log(`✅ Working links: ${workingLinks.length}`);
console.log(`❌ Broken links: ${brokenLinks.length}`);

if (brokenLinks.length > 0) {
  console.log('\n🚨 BROKEN LINKS:');
  brokenLinks.forEach(link => {
    console.log(`   ${link.url}`);
    console.log(`   └─ Source: ${link.source}`);
    if (link.status) console.log(`   └─ Status: ${link.status}`);
    if (link.error) console.log(`   └─ Error: ${link.error}`);
  });
} else {
  console.log('\n🎉 All links are working!');
}
