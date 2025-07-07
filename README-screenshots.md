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

## Screenshot Gallery

After capturing screenshots, view them in a beautiful gallery interface:

### Open the Gallery
```bash
# Option 1: Direct file opening (Mac)
npm run gallery

# Option 2: Local web server (recommended)
npm run serve
# Then open: http://localhost:8000/screenshot-gallery.html

# Option 3: Direct file opening
open screenshot-gallery.html
```

### Gallery Features
- ✅ **Visual thumbnails** of all screenshots
- ✅ **Click to download** individual images
- ✅ **Download all** screenshots at once
- ✅ **Auto-detection** of available screenshots
- ✅ **Responsive design** for mobile/desktop
- ✅ **Status indicators** (available/missing)
- ✅ **Slide information** with titles and descriptions

### Gallery Interface
The gallery shows:
- **Slide number** and status indicator
- **Thumbnail preview** of each screenshot
- **Slide title** and description
- **File information** (name, resolution)
- **Download actions** for individual or bulk downloads

## Complete Workflow

1. **Generate screenshots:**
   ```bash
   npm run capture
   ```

2. **View in gallery:**
   ```bash
   npm run serve
   # Open: http://localhost:8000/screenshot-gallery.html
   ```

3. **Download images:**
   - Click any thumbnail to download individual screenshot
   - Use "Download All" button for bulk download

## Technical Details

- **Browser:** Chromium via Playwright
- **Navigation:** Keyboard events (ArrowRight)
- **Wait strategy:** Network idle + timeout for animations
- **Viewport:** 1920x1080
- **File format:** PNG
- **Gallery:** HTML with responsive CSS and JavaScript