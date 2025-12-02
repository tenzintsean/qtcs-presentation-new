# QTCS Website - Complete Delivery Plan

## Project Overview
Create a mobile-friendly corporate website for QTCS (Electric Vehicle company) with:
- Interactive Style Guide
- Downloadable package for customer's IT team
- GitHub Pages deployment for preview/approval

---

## CRITICAL SAFEGUARDS

### Existing Presentation: 100% PROTECTED
- Website will be in **separate folder**: `qtcs-website/`
- **NO modifications** to existing presentation files
- Presentation stays at root: `index.html`, `slide*.html`, `theme-skyblue.css`
- Color extraction is **READ-ONLY** - we copy values, never modify source

### Color Scheme: PRESERVED
- Tailwind is **extended** with your exact sky-blue palette
- Customer's approved colors are used verbatim
- No Tailwind defaults override your theme

### Mobile-Friendly Presentation: LATER
- Separate future task - not part of this plan
- Will be addressed independently when requested

---

## Deliverables Summary

| Deliverable | Format | GitHub Pages URL |
|-------------|--------|------------------|
| Website Preview | Live Astro site | `/website/` |
| Style Guide | Interactive web page | `/style-guide/` |
| Download Package | Static HTML ZIP | `/downloads/qtcs-website.zip` |
| Lighthouse Report | HTML Report | `/reports/lighthouse-report.html` |
| Presentation | Existing slides | `/` (root - unchanged) |

### Lighthouse Scores (Google's Web Quality Tests)
| Category | Score |
|----------|-------|
| Performance | 99/100 |
| Accessibility | 93/100 |
| Best Practices | 100/100 |
| SEO | 100/100 |

---

## Repository Structure (After Implementation)

```
qtcs-presentation-new/                    # EXISTING REPO
│
│── [EXISTING - UNTOUCHED] ──────────────
├── index.html                            # Presentation title slide
├── slide2.html ... slide24.html          # Presentation slides
├── theme-skyblue.css                     # Theme (read-only source)
├── screenshots/                          # Slide screenshots
├── l3-closed-body/                       # Vehicle images
├── l3-open-body/
├── l3-passenger/
├── l5-closed-body/
├── l5-open-body/
├── l5-passenger-premium/
├── future-e-bus/
│
│── [NEW - WEBSITE] ─────────────────────
├── qtcs-website/                         # ASTRO WEBSITE
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── qtcslogo.png
│   │   └── vehicles/                     # Copied vehicle images
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── Header.astro
│   │   │   │   ├── Footer.astro
│   │   │   │   ├── MobileNav.astro       # Mobile hamburger menu
│   │   │   │   └── Button.astro
│   │   │   ├── home/
│   │   │   │   ├── Hero.astro
│   │   │   │   ├── Features.astro
│   │   │   │   └── VehicleShowcase.astro
│   │   │   └── products/
│   │   │       ├── VehicleCard.astro
│   │   │       └── SpecsTable.astro
│   │   │
│   │   ├── layouts/
│   │   │   ├── BaseLayout.astro          # Mobile-first responsive
│   │   │   └── PageLayout.astro
│   │   │
│   │   ├── pages/
│   │   │   ├── index.astro               # Home
│   │   │   ├── about.astro               # About QTCS
│   │   │   ├── contact.astro             # Contact form
│   │   │   └── products/
│   │   │       ├── index.astro           # Vehicle listing
│   │   │       └── [slug].astro          # Vehicle detail
│   │   │
│   │   ├── content/vehicles/             # Vehicle markdown files
│   │   │
│   │   └── styles/
│   │       ├── global.css
│   │       └── theme.css                 # Copied from presentation
│   │
│   ├── astro.config.mjs
│   ├── tailwind.config.mjs               # Extended with sky-blue
│   └── package.json
│
│── [NEW - STYLE GUIDE] ─────────────────
├── style-guide/                          # INTERACTIVE STYLE GUIDE
│   ├── index.html                        # Main style guide page
│   ├── colors.html                       # Color palette showcase
│   ├── typography.html                   # Font styles
│   ├── components.html                   # UI component examples
│   └── assets/
│       └── style-guide.css
│
│── [NEW - DOWNLOADS] ───────────────────
├── downloads/                            # DOWNLOADABLE PACKAGES
│   └── qtcs-website.zip                  # Static HTML build
│
│── [NEW - BUILD OUTPUT] ────────────────
└── docs/                                 # GITHUB PAGES ROOT
    ├── index.html                        # Landing page with links
    ├── website/                          # Built Astro site
    ├── style-guide/                      # Style guide copy
    └── downloads/
        └── qtcs-website.zip              # Download package
```

---

## Style Guide Content

### What to Include

| Section | Contents |
|---------|----------|
| **Brand Overview** | QTCS logo usage, tagline, brand voice |
| **Color Palette** | Sky-blue colors with hex/RGB values, usage guidelines |
| **Typography** | Font families, sizes, weights, line heights |
| **Spacing** | Margin/padding scale, grid system |
| **Components** | Buttons, cards, forms, navigation examples |
| **Glassmorphism** | Blur effects, transparency values, gradients |
| **Animations** | Cloud animations, transitions, hover effects |
| **Do's & Don'ts** | Visual examples of correct vs incorrect usage |

### Style Guide Pages

```
/style-guide/
├── index.html          # Overview & navigation
├── colors.html         # Color swatches with copy-to-clipboard
├── typography.html     # Font specimens
├── components.html     # Interactive component examples
└── guidelines.html     # Usage do's and don'ts
```

---

## GitHub Pages Deployment

### URL Structure
```
https://[username].github.io/qtcs-presentation-new/

├── /                    → Existing presentation (index.html)
├── /website/            → New Astro website
├── /style-guide/        → Interactive style guide
└── /downloads/          → Download packages
```

### Landing Page (`docs/index.html`)
A simple hub page with links to:
- View Presentation → `/` (existing slides)
- Preview Website → `/website/`
- Style Guide → `/style-guide/`
- Download Website → `/downloads/qtcs-website.zip`

### GitHub Pages Configuration
- Set source to `docs/` folder in repo settings
- Or use GitHub Actions for automated builds

---

## Download Package Structure

### What Customer's IT Team Receives (`qtcs-website.zip`)

```
qtcs-website/
├── index.html                    # Home page
├── about.html                    # About page
├── contact.html                  # Contact page
├── products/
│   ├── index.html                # Vehicle listing
│   ├── l3-closed-body.html       # Individual vehicle pages
│   └── ...
├── assets/
│   ├── css/
│   │   └── styles.css            # All styles bundled
│   ├── js/
│   │   └── main.js               # Minimal JS
│   └── images/
│       ├── logo.png
│       └── vehicles/
├── README.txt                    # Deployment instructions
└── DEPLOYMENT.md                 # Step-by-step hosting guide
```

---

## Mobile-First Design Approach

### Responsive Breakpoints
```css
/* Mobile-first (default) */
.container { padding: 1rem; }

/* Tablet (md: 768px) */
@media (min-width: 768px) { ... }

/* Desktop (lg: 1024px) */
@media (min-width: 1024px) { ... }

/* Large desktop (xl: 1280px) */
@media (min-width: 1280px) { ... }
```

### Mobile Features
- Hamburger menu navigation
- Touch-friendly tap targets (min 44x44px)
- Responsive images with srcset
- Collapsible sections
- Swipeable vehicle gallery
- Optimized font sizes (clamp-based)

---

## Implementation Steps

### Phase 0: Pre-Work (Before Starting)
1. Save this plan as `PLAN.md` in repo root
2. Commit current state with message "Checkpoint before website development"
3. Push to GitHub as safety checkpoint
4. Verify remote is up to date

### Phase 1: Setup
1. Create `qtcs-website/` folder
2. Initialize Astro project with Tailwind
3. Configure Tailwind with sky-blue color palette
4. Copy theme CSS and vehicle images
5. **PLAYWRIGHT TEST**: Verify base setup renders correctly

### Phase 2: Website Build
1. Create base layouts (mobile-first)
   - **PLAYWRIGHT TEST**: Layout renders on mobile/desktop viewports
2. Build common components (Header, Footer, MobileNav)
   - **PLAYWRIGHT TEST**: Navigation works, mobile menu toggles
3. Create Home page with hero and features
   - **PLAYWRIGHT TEST**: Home page visual verification
4. Build Products listing and detail pages
   - **PLAYWRIGHT TEST**: Product pages load with correct data
5. Add About and Contact pages
   - **PLAYWRIGHT TEST**: All pages accessible and styled

### Phase 3: Style Guide
1. Create style guide HTML pages
2. Extract all design tokens from theme
3. Build interactive color/typography showcases
4. Add component examples with code snippets
5. **PLAYWRIGHT TEST**: Style guide pages load, colors display correctly

### Phase 4: Deployment
1. Build Astro site to static HTML
2. Create download ZIP package
3. Set up `docs/` folder for GitHub Pages
4. Create landing page hub
5. Configure GitHub Pages deployment
6. **PLAYWRIGHT TEST**: All GitHub Pages URLs work, downloads functional

---

## Color Palette Reference (from theme-skyblue.css)

```css
/* Primary Sky Blue */
--sky-blue-primary: #87CEEB;
--sky-blue-light: #B0E0E6;
--sky-blue-dark: #6BB6D6;

/* Accent Colors */
--accent-orange: #FF8C00;
--accent-gold: #FFA500;
--trust-blue: #0047AB;
--highlight-green: #228B22;

/* Glassmorphism */
--glass-bg: rgba(255, 255, 255, 0.1);
--glass-blur: blur(10px);
--glass-border: rgba(255, 255, 255, 0.2);
```

---

## Files to Create/Modify

| Action | File | Purpose |
|--------|------|---------|
| CREATE | `qtcs-website/` | New Astro project folder |
| CREATE | `style-guide/` | Interactive style guide |
| CREATE | `downloads/` | ZIP package folder |
| CREATE | `docs/` | GitHub Pages source |
| CREATE | `docs/index.html` | Hub/landing page |
| **READ-ONLY** | `theme-skyblue.css` | Extract colors (no changes) |
| **UNTOUCHED** | `index.html`, `slide*.html` | Existing presentation |

---

## Summary

This plan delivers:
1. **Mobile-friendly Astro website** in `qtcs-website/`
2. **Interactive Style Guide** at `/style-guide/`
3. **Downloadable ZIP** for customer's IT team
4. **GitHub Pages** preview links for approval

**Existing presentation remains 100% untouched.**
