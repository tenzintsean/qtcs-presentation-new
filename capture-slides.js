const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureSlides() {
    // Check for headless argument
    const isHeadless = process.argv.includes('--headless');
    
    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(__dirname, 'screenshots');
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir);
    }

    // Launch browser
    const browser = await chromium.launch({ 
        headless: isHeadless,  // Use headless mode if specified
        slowMo: isHeadless ? 500 : 1000     // Faster in headless mode
    });
    
    const context = await browser.newContext({
        viewport: { width: 1920, height: 1080 }  // Full HD resolution
    });
    
    const page = await context.newPage();
    
    // Array of all slides in order
    const slides = [
        'index.html',        // Slide 1
        'slide2.html',       // Slide 2
        'slide3.html',       // Slide 3
        'slide4.html',       // Slide 4
        'slide5.html',       // Slide 5
        'slide6.html',       // Slide 6
        'slide6b.html',      // Slide 7
        'slide7.html',       // Slide 8
        'slide8.html',       // Slide 9
        'slide8b.html',      // Slide 10
        'slide9.html',       // Slide 11
        'slide9b.html',      // Slide 12
        'slide9c.html',      // Slide 13
        'slide10.html',      // Slide 14
        'slide11.html',      // Slide 15
        'slide12.html',      // Slide 16
        'slide13.html',      // Slide 17
        'slide14.html',      // Slide 18
        'slide15.html',      // Slide 19
        'slide16.html',      // Slide 20
        'slide17.html',      // Slide 21
        'slide18.html',      // Slide 22
        'slide19.html',      // Slide 23
        'slide20.html',      // Slide 24
        'slide21.html',      // Slide 25
        'slide22.html',      // Slide 26
        'slide23.html',      // Slide 27
        'slide24.html'       // Slide 28
    ];

    try {
        console.log('🎬 Starting slide capture process...');
        console.log(`📋 Total slides to capture: ${slides.length}`);
        
        // Start with the first slide (index.html)
        const startUrl = `file://${path.join(__dirname, 'index.html')}`;
        console.log(`🌐 Navigating to: ${startUrl}`);
        
        await page.goto(startUrl);
        
        // Wait for page to fully load
        await page.waitForLoadState('networkidle');
        await page.waitForTimeout(2000); // Additional wait for animations
        
        // Capture each slide
        for (let i = 0; i < slides.length; i++) {
            const slideNumber = i + 1;
            const slideFilename = slides[i];
            
            console.log(`📸 Capturing Slide ${slideNumber}: ${slideFilename}`);
            
            // Take screenshot
            const screenshotPath = path.join(screenshotsDir, `slide-${slideNumber.toString().padStart(2, '0')}-${slideFilename.replace('.html', '')}.png`);
            await page.screenshot({ 
                path: screenshotPath,
                fullPage: false  // Just the viewport
            });
            
            console.log(`✅ Saved: ${path.basename(screenshotPath)}`);
            
            // Navigate to next slide using keyboard (except for the last slide)
            if (i < slides.length - 1) {
                console.log(`⏭️  Navigating to next slide using keyboard...`);
                
                // Press Right Arrow key to go to next slide
                await page.keyboard.press('ArrowRight');
                
                // Wait for navigation and page load
                await page.waitForLoadState('networkidle');
                await page.waitForTimeout(1500); // Wait for animations and transitions
                
                // Verify we're on the expected slide
                const currentUrl = page.url();
                const expectedSlideFile = slides[i + 1];
                
                if (currentUrl.includes(expectedSlideFile)) {
                    console.log(`✅ Successfully navigated to: ${expectedSlideFile}`);
                } else {
                    console.log(`⚠️  Expected ${expectedSlideFile}, but on: ${currentUrl}`);
                }
            }
        }
        
        console.log('\n🎉 All slides captured successfully!');
        console.log(`📁 Screenshots saved in: ${screenshotsDir}`);
        console.log(`📊 Total captures: ${slides.length}`);
        
    } catch (error) {
        console.error('❌ Error during capture process:', error);
    } finally {
        await browser.close();
        console.log('🔚 Browser closed');
    }
}

// Add error handling for the main function
captureSlides().catch(error => {
    console.error('❌ Fatal error:', error);
    process.exit(1);
});