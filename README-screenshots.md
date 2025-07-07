# QTCS Presentation Screenshot Capture

This project includes an automated screenshot capture tool using Playwright to capture all presentation slides using keyboard navigation.

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

## Usage

### Method 1: Using npm scripts (recommended)

**Visible browser mode (for debugging):**
```bash
npm run capture
```

**Headless mode (faster, no browser window):**
```bash
npm run capture-headless
```

### Method 2: Using npx directly

**Visible browser mode:**
```bash
npx node capture-slides.js
```

**Headless mode:**
```bash
npx node capture-slides.js --headless
```

### Method 3: Direct node execution

```bash
node capture-slides.js
node capture-slides.js --headless
```

## Output

- Screenshots are saved in the `screenshots/` directory
- Filename format: `slide-{number}-{filename}.png`
  - Example: `slide-01-index.png`, `slide-02-slide2.png`, etc.
- Resolution: 1920x1080 (Full HD)
- Format: PNG

## How it works

1. Opens the presentation starting from `index.html`
2. Takes a screenshot of each slide
3. Uses keyboard navigation (Right Arrow key) to move between slides
4. Automatically waits for page loads and animations
5. Captures all 28 slides in sequence

## Slides Captured

The script captures all slides in the correct order:
- Slide 1: index.html (Welcome)
- Slide 2: slide2.html (Market Opportunity)
- Slide 3: slide3.html (Purpose & Direction)
- ... (continues through all slides)
- Slide 28: slide24.html (Thank You)

## Features

- ✅ Automated keyboard navigation
- ✅ Full HD resolution captures
- ✅ Handles page animations and transitions
- ✅ Progress logging
- ✅ Error handling
- ✅ Both visible and headless modes
- ✅ Creates screenshots directory automatically

## Troubleshooting

If you encounter issues:

1. **Browser not installed:** Run `npx playwright install`
2. **Permission issues:** Ensure the project directory is writable
3. **Navigation issues:** Check that all slide files exist and keyboard navigation works manually
4. **Slow captures:** Use headless mode for faster execution

## Technical Details

- **Browser:** Chromium via Playwright
- **Navigation:** Keyboard events (ArrowRight)
- **Wait strategy:** Network idle + timeout for animations
- **Viewport:** 1920x1080
- **File format:** PNG