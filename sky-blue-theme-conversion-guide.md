# Sky-Blue Theme Conversion Guide
## Selective Color Extraction Approach (Option 1)

### Project Context
This guide provides comprehensive instructions for converting QTCS EV presentation slides from dark theme to sky-blue glassmorphism theme using the **selective color extraction approach (Option 1)**. This method preserves the original slide structure and layout while only updating colors and visual styling.

**Project Details:**
- 28-slide QTCS EV presentation
- Converting from dark theme to sky-blue glassmorphism theme
- Must preserve all layout, structure, and functionality
- Only colors, backgrounds, and visual effects should be updated

### Reference Files
1. **theme-skyblue.css** - Contains all theme variables and styling classes
2. **slide6.html** - Successfully converted reference slide showing desired outcome
3. **This guide** - Complete conversion instructions

---

## Theme Variables Reference

### Core Sky Blue Colors
```css
--sky-primary: #87CEEB;        /* Main sky blue */
--sky-light: #B0E0E6;          /* Light sky blue */
--sky-dark: #6BB6D6;           /* Dark sky blue */
--sky-darker: #5BA5C6;         /* Darker sky blue */
```

### Accent Colors (Orange/Gold)
```css
--accent-primary: #FF8C00;     /* Main orange accent */
--accent-light: #FFA500;       /* Light orange */
--accent-dark: #FF7700;        /* Dark orange */
```

### Title Colors (Trust Blue)
```css
--title-blue: #0047AB;         /* Main title blue */
--title-blue-light: #0056D2;   /* Light title blue */
--title-blue-dark: #003A8C;    /* Dark title blue */
```

### Supporting Colors
```css
--green-primary: #228B22;      /* Success/positive green */
--green-light: #2ECC40;        /* Light green */
```

### Glassmorphism Properties
```css
--glass-bg: rgba(255, 255, 255, 0.3);           /* Standard glass background */
--glass-bg-light: rgba(255, 255, 255, 0.35);    /* Lighter glass background */
--glass-border: rgba(255, 255, 255, 0.4);       /* Standard glass border */
--glass-border-light: rgba(255, 255, 255, 0.5); /* Lighter glass border */
--glass-blur-heavy: 20px;                       /* Heavy blur for navigation buttons */
```

### Theme Effects & Animations
```css
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.1);     /* Medium shadow */
--shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.12);    /* Large shadow */
--transition-normal: 0.3s ease;                  /* Standard transition timing */
```

### Text Colors for Light Background
```css
--text-primary: #1a1a1a;       /* Main text color */
--text-secondary: #2a2a2a;     /* Secondary text color */
--text-muted: #4a4a4a;         /* Muted/subtle text color */
```

---

## Step-by-Step Conversion Process

### Step 1: Initial Analysis
1. **Read the target slide file** to understand current structure
2. **Identify dark theme elements** that need conversion
3. **Note any custom styling** that should be preserved

### Step 2: Update CSS Variables Section
Replace any existing dark theme color variables with sky-blue theme equivalents and add required theme variables:

```css
/* BEFORE (Dark theme variables) */
--bg-dark: #1a1a1a;
--text-light: #ffffff;
--glass-dark: rgba(0, 0, 0, 0.5);

/* AFTER (Sky-blue theme variables) */
:root {
    /* Core Sky Blue Colors */
    --sky-primary: #87CEEB;
    --sky-light: #B0E0E6;
    --sky-dark: #6BB6D6;
    --sky-darker: #5BA5C6;
    
    /* Accent Colors (Orange/Gold) */
    --accent-primary: #FF8C00;
    --accent-light: #FFA500;
    --accent-dark: #FF7700;
    
    /* Title Colors (Trust Blue) */
    --title-blue: #0047AB;
    --title-blue-light: #0056D2;
    --title-blue-dark: #003A8C;
    
    /* Supporting Colors */
    --green-primary: #228B22;
    --green-light: #2ECC40;
    
    /* Glassmorphism Properties for Light Theme */
    --glass-bg: rgba(255, 255, 255, 0.3);
    --glass-bg-light: rgba(255, 255, 255, 0.35);
    --glass-border: rgba(255, 255, 255, 0.4);
    --glass-border-light: rgba(255, 255, 255, 0.5);
    --glass-blur-heavy: 20px;
    
    /* Text Colors for Light Background */
    --text-primary: #1a1a1a;
    --text-secondary: #2a2a2a;
    --text-muted: #4a4a4a;
    
    /* Shadows and Effects */
    --shadow-md: 0 8px 24px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 16px 40px rgba(0, 0, 0, 0.12);
    
    /* Animation Timing */
    --transition-normal: 0.3s ease;
}
```

### Step 3: Update Body Background
Change the body background to sky-blue gradient:

```css
/* BEFORE */
background: #1a1a1a;
/* or */
background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);

/* AFTER */
background: linear-gradient(135deg, var(--sky-light) 0%, var(--sky-primary) 50%, var(--sky-dark) 100%);
```

### Step 4: Add Enhanced Sky Pattern Animations (STANDARDIZED)
Replace dark background patterns with the standardized cloud patterns from slide6.html:

```css
/* Enhanced Sky pattern background animations - STANDARDIZED VERSION */
.slide::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.25) 3px, transparent 3px),
        radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.18) 2px, transparent 2px),
        radial-gradient(circle at 10% 80%, rgba(135, 206, 235, 0.1) 4px, transparent 4px);
    background-size: 120px 120px, 80px 80px, 150px 150px;
    animation: cloudMove 35s linear infinite;
    z-index: 0;
}

.slide::after {
    content: '';
    position: absolute;
    inset: 0;
    background-image: 
        radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 90% 20%, rgba(176, 224, 230, 0.08) 3px, transparent 3px);
    background-size: 100px 100px, 140px 140px;
    animation: cloudMove2 50s linear infinite reverse;
    z-index: 0;
}

@keyframes cloudMove {
    0% { transform: translate(0, 0) rotate(0deg); }
    25% { transform: translate(15px, 10px) rotate(90deg); }
    50% { transform: translate(30px, 25px) rotate(180deg); }
    75% { transform: translate(45px, 35px) rotate(270deg); }
    100% { transform: translate(60px, 50px) rotate(360deg); }
}

@keyframes cloudMove2 {
    0% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(-20px, 15px) scale(1.1); }
    66% { transform: translate(-40px, 30px) scale(0.9); }
    100% { transform: translate(-60px, 45px) scale(1); }
}
```

**Note:** This is the standardized background animation from slide6.html that should be applied to all slides for consistency.

### Step 5: Update Main Titles
Apply trust blue gradient to main titles:

```css
/* BEFORE */
color: white;
/* or */
color: #ffffff;

/* AFTER */
background: linear-gradient(135deg, var(--title-blue-dark) 0%, var(--title-blue) 50%, var(--title-blue-light) 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
filter: drop-shadow(0 2px 4px rgba(255, 255, 255, 0.3));
```

### Step 6: Update Glassmorphism Elements
Convert all dark glass effects to light theme:

```css
/* BEFORE (Dark glassmorphism) */
background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(15px);
border: 1px solid rgba(255, 255, 255, 0.1);
box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

/* AFTER (Light glassmorphism) */
background: var(--glass-bg);
backdrop-filter: blur(15px);
-webkit-backdrop-filter: blur(15px);
border: 1px solid var(--glass-border);
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
```

### Step 7: Update Text Colors
Change all text colors to work on light background:

```css
/* BEFORE */
color: white;
color: rgba(255, 255, 255, 0.9);
color: rgba(255, 255, 255, 0.7);

/* AFTER */
color: var(--text-primary);     /* For main text */
color: var(--text-secondary);   /* For secondary text */
color: var(--text-muted);       /* For muted text */
```

### Step 8: Update Navigation Elements

#### Navigation Container
```css
/* AFTER */
.nav-container {
    background: var(--glass-bg-light);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid var(--glass-border-light);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}
```

#### Progress Bar
```css
/* AFTER */
.progress-fill {
    background: linear-gradient(90deg, var(--accent-dark) 0%, var(--accent-primary) 100%);
    box-shadow: 0 0 8px rgba(255, 140, 0, 0.4);
}
```

#### Navigation Buttons (Standardized)
```css
/* AFTER - Standardized navigation buttons */
.nav-btn {
    background: var(--glass-bg);
    backdrop-filter: blur(var(--glass-blur-heavy));
    -webkit-backdrop-filter: blur(var(--glass-blur-heavy));
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
    width: clamp(40px, 5vh, 55px);
    height: clamp(40px, 5vh, 55px);
    border-radius: 50%;
    font-size: clamp(16px, 2vh, 22px);
    cursor: pointer;
    transition: all var(--transition-normal);
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-md);
}

.nav-btn:hover:not(:disabled) {
    background: var(--accent-light);
    border-color: var(--accent-primary);
    transform: scale(1.1);
    box-shadow: var(--shadow-lg);
}

.nav-btn:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

/* Mobile navigation adjustments */
@media (max-width: 768px) {
    .nav-buttons {
        bottom: calc(20px + env(safe-area-inset-bottom));
    }
}

@media (max-width: 480px) {
    .nav-buttons {
        bottom: 15px;
        gap: 10px;
    }
    
    .nav-btn {
        width: 35px;
        height: 35px;
        font-size: 14px;
    }
}
```

### Step 9: Update Slide Number & Logo

#### Slide Number
```css
/* AFTER */
.slide-number {
    color: var(--text-muted);
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(8px);
    padding: 8px 12px;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.4);
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
}
```

#### Logo Corner (Centralized Theme Approach - BEST PRACTICE)
```css
/* RECOMMENDED APPROACH - Use centralized theme system */
/* Logo corner handled by centralized theme-skyblue.css */

/* This approach provides: */
/* - Zero CSS duplication across slides */
/* - Consistent styling automatically */
/* - Single source of truth for updates */
/* - Better maintainability */
```

**Why Centralized Theme is Superior:**
- **Consistency**: All 28 slides have identical logo styling automatically
- **Maintainability**: Logo updates happen in one place (theme-skyblue.css)
- **Performance**: No CSS duplication reduces file sizes
- **Scalability**: New slides automatically inherit correct styling

**Implementation:**
1. **Remove all local logo CSS** from individual slides
2. **Add comment reference**: `/* Logo corner handled by centralized theme-skyblue.css */`
3. **Rely on theme file**: Let theme-skyblue.css handle all logo styling

**Reference Implementation:**
Use slide8b.html as the gold standard - it correctly uses centralized logo styling without any local CSS duplication.

### Logo Standardization: slide8b.html Wisdom

**The slide8b.html Approach (BEST PRACTICE):**
```css
/* Logo corner handled by centralized theme-skyblue.css */
```

**Benefits of This Approach:**
1. **Zero Duplication**: No repeated CSS across 28 slides
2. **Automatic Updates**: Changes to theme-skyblue.css affect all slides instantly
3. **Consistent Behavior**: Identical hover effects, positioning, and styling everywhere
4. **Cleaner Code**: Individual slides focus only on slide-specific content
5. **Better Performance**: Reduced CSS payload and faster loading

**Migration Steps:**
1. **Remove all local logo CSS** from slide files
2. **Replace with simple comment**: `/* Logo corner handled by centralized theme-skyblue.css */`
3. **Verify functionality**: Logo should work identically through theme inheritance

**Anti-Pattern to Avoid:**
```css
/* DON'T DO THIS - Local logo styling in individual slides */
.logo-corner {
    position: absolute;
    bottom: clamp(20px, 2vw, 40px);
    /* ... 30+ lines of duplicated CSS ... */
}
```

This approach creates maintenance burden and inconsistency across slides.

### Step 10: Replace Hard-coded Colors

#### Common Color Replacements
```css
/* Replace these hard-coded colors: */
#FDB813, #FFD700 → var(--accent-primary)
#FF8C00 → var(--accent-primary)
#0047AB → var(--title-blue)
#228B22 → var(--green-primary)
#ffffff, white → var(--text-primary)
#000000, black → var(--text-primary)
rgba(0, 0, 0, 0.5) → var(--glass-bg)
rgba(255, 255, 255, 0.1) → var(--glass-border)

/* Dark theme navigation elements to update: */
rgba(255, 255, 255, 0.05) → var(--glass-bg)
rgba(0, 0, 0, 0.5) → var(--glass-bg)
color: white → color: var(--text-primary)
rgba(253, 184, 19, 0.2) → var(--accent-light)
rgba(253, 184, 19, 0.5) → var(--accent-primary)
```

### Step 10b: Use Centralized Theme System
**Use External Theme File for Navigation Standardization**

Instead of copying navigation CSS to each slide, use the centralized theme system:

1. **Add theme link to HTML head:**
```html
<link rel="stylesheet" href="theme-skyblue.css">
```

2. **Apply theme classes to body:**
```html
<body class="sky-theme">
```

3. **Apply pattern class to slide:**
```html
<div class="slide sky-pattern">
```

4. **Remove redundant navigation CSS** from individual slides
5. **Keep only slide-specific overrides** like progress bar width:
```css
.progress-fill {
    width: calc(6 / 28 * 100%); /* Slide-specific progress */
}
```

**Benefits:** Better maintainability, consistency, and reduced code duplication across all slides.

### Step 11: Enhanced Solar Rays Animation (STANDARDIZED)
Add or update solar rays using the enhanced version from slide6.html:

```css
/* Enhanced Solar-themed decorative elements - STANDARDIZED VERSION */
.solar-rays {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 200%;
    height: 200%;
    pointer-events: none;
    opacity: 0.06;
    animation: solarPulse 8s ease-in-out infinite;
}

.solar-rays::before,
.solar-rays::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: conic-gradient(
        from 0deg,
        transparent 0deg,
        var(--accent-primary) 3deg,
        transparent 6deg,
        transparent 90deg,
        var(--sky-primary) 93deg,
        transparent 96deg,
        transparent 180deg,
        var(--accent-primary) 183deg,
        transparent 186deg,
        transparent 270deg,
        var(--sky-primary) 273deg,
        transparent 276deg,
        transparent 354deg,
        var(--accent-primary) 357deg,
        transparent 360deg
    );
    animation: rotateSlow 45s linear infinite;
    transform: translate(-50%, -50%);
}

.solar-rays::after {
    transform: translate(-50%, -50%) rotate(45deg);
    animation-duration: 65s;
    animation-direction: reverse;
    background: conic-gradient(
        from 0deg,
        transparent 0deg,
        var(--sky-light) 2deg,
        transparent 4deg,
        transparent 178deg,
        var(--sky-light) 180deg,
        transparent 182deg,
        transparent 358deg,
        var(--sky-light) 360deg
    );
}

@keyframes rotateSlow {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes solarPulse {
    0%, 100% { opacity: 0.06; transform: translate(-50%, -50%) scale(1); }
    50% { opacity: 0.1; transform: translate(-50%, -50%) scale(1.05); }
}
```

**Note:** This enhanced version includes dual-layer solar rays with different rotation speeds for more dynamic visual appeal.

---

## Standardized Component Library

### Vehicle Showcase Components (STANDARDIZED)

These components provide consistent styling for vehicle presentation slides across the entire presentation:

#### 1. Vehicle Hero Container (STANDARDIZED)
```css
/* Vehicle showcase section - STANDARDIZED VERSION */
.vehicle-hero {
    background: var(--glass-bg);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid var(--glass-border);
    border-radius: 20px;
    padding: 0;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5);
    position: relative;
}
```

#### 2. Hero Header (STANDARDIZED)
```css
/* Hero header with accent gradient - STANDARDIZED VERSION */
.hero-header {
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0.05) 100%);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(255, 140, 0, 0.3);
    color: var(--text-primary);
    font-size: clamp(20px, 2.5vw, 36px);
    text-align: center;
    padding: clamp(15px, 2.5vh, 25px);
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(255, 255, 255, 0.3);
    position: relative;
}
```

#### 3. Vehicle Images Container (STANDARDIZED)
```css
/* Vehicle images container - STANDARDIZED VERSION */
.vehicle-images {
    display: flex;
    gap: clamp(15px, 2vw, 30px);
    padding: clamp(20px, 3vh, 40px);
    justify-content: center;
    flex-wrap: wrap;
    background: rgba(255, 255, 255, 0.1);
}

.vehicle-images img {
    height: clamp(120px, 15vw, 180px);
    width: auto;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    border: 1px solid var(--glass-border);
}

.vehicle-images img:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12);
}
```

#### 4. Specifications Grid (STANDARDIZED)
```css
/* Specifications grid - STANDARDIZED VERSION */
.specs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(10px, 1.5vw, 20px);
    padding: clamp(15px, 2.5vh, 25px);
}

.spec-item {
    background: var(--glass-bg);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--glass-border);
    text-align: center;
    padding: clamp(12px, 2vh, 20px);
    border-radius: 12px;
    transition: all 0.3s ease;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.spec-item:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.4);
    border-color: rgba(255, 140, 0, 0.4);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 140, 0, 0.1);
}

/* Colored variants for spec items */
.spec-item:nth-child(1) {
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(255, 140, 0, 0.3);
}

.spec-item:nth-child(2) {
    background: linear-gradient(135deg, rgba(0, 71, 171, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(0, 71, 171, 0.3);
}

.spec-item:nth-child(3) {
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(34, 139, 34, 0.3);
}

.spec-item:nth-child(4) {
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(255, 140, 0, 0.3);
}

.spec-value {
    font-size: clamp(20px, 2.5vw, 28px);
    font-weight: 700;
    margin-bottom: clamp(4px, 0.6vh, 6px);
    color: var(--text-primary);
}

.spec-label {
    font-size: clamp(12px, 1.4vw, 16px);
    color: var(--text-secondary);
}

/* Gradient text effects for spec values */
.spec-item:nth-child(1) .spec-value {
    background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.spec-item:nth-child(2) .spec-value {
    background: linear-gradient(135deg, var(--title-blue-dark) 0%, var(--title-blue-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.spec-item:nth-child(3) .spec-value {
    color: var(--green-primary);
    filter: drop-shadow(0 2px 6px rgba(34, 139, 34, 0.3));
}

.spec-item:nth-child(4) .spec-value {
    background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

#### 5. Use Cases Section (STANDARDIZED)
```css
/* Use cases section - STANDARDIZED VERSION */
.use-cases-section {
    background: var(--glass-bg-light);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: clamp(15px, 2vh, 25px);
    border-radius: 12px;
    text-align: center;
    margin: 0 clamp(15px, 2.5vh, 25px) clamp(15px, 2.5vh, 25px);
    border: 1px solid var(--glass-border);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.use-cases-text {
    font-size: clamp(14px, 1.6vw, 18px);
    color: var(--text-primary);
    line-height: 1.6;
}

.use-case-badge {
    display: inline-block;
    background: linear-gradient(135deg, rgba(0, 71, 171, 0.15) 0%, rgba(0, 71, 171, 0.1) 100%);
    color: var(--title-blue);
    padding: clamp(6px, 1vh, 10px) clamp(15px, 2vw, 25px);
    border-radius: 20px;
    margin: 0 clamp(5px, 0.8vw, 10px);
    font-size: clamp(12px, 1.4vw, 16px);
    font-weight: 500;
    border: 1px solid rgba(0, 71, 171, 0.3);
    filter: drop-shadow(0 2px 8px rgba(0, 71, 171, 0.3));
}

/* Alternative badge colors for different use cases */
.use-case-badge.green {
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.15) 0%, rgba(34, 139, 34, 0.1) 100%);
    color: var(--green-light);
    border-color: rgba(34, 139, 34, 0.3);
    filter: drop-shadow(0 2px 8px rgba(34, 139, 34, 0.3));
}

.use-case-badge.orange {
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, rgba(255, 140, 0, 0.1) 100%);
    color: var(--accent-primary);
    border-color: rgba(255, 140, 0, 0.3);
    filter: drop-shadow(0 2px 8px rgba(255, 140, 0, 0.3));
}
```

#### 6. Feature Strip (STANDARDIZED)
```css
/* Feature strip - STANDARDIZED VERSION */
.feature-strip {
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.1) 0%, rgba(255, 140, 0, 0.05) 100%);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 140, 0, 0.3);
    padding: clamp(15px, 2.5vh, 25px);
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 8px 25px rgba(255, 140, 0, 0.2);
    position: relative;
    overflow: hidden;
}

.feature-strip::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.05) 0%, transparent 100%);
    pointer-events: none;
}

.feature-strip p {
    font-size: clamp(16px, 1.8vw, 24px);
    color: var(--text-primary);
    font-weight: 600;
    position: relative;
    z-index: 1;
}
```

### Component Standardization Guidelines

When converting slides, look for these common component patterns and apply standardized styling:

#### Variable Name Mapping
```css
/* OLD VARIABLES → NEW STANDARDIZED VARIABLES */
--trust-blue → var(--title-blue)
--trust-blue-light → var(--title-blue-light)
--solar-gold → var(--accent-primary)
--bg-glass → var(--glass-bg)
--bg-glass-border → var(--glass-border)
```

#### Component Name Standardization
```html
<!-- STANDARDIZED COMPONENT STRUCTURE -->
<div class="vehicle-hero">
    <h2 class="hero-header">Title Here</h2>
    <div class="vehicle-images">
        <!-- Images -->
    </div>
    <div class="specs-grid">
        <div class="spec-item">
            <div class="spec-value">Value</div>
            <div class="spec-label">Label</div>
        </div>
    </div>
    <div class="use-cases-section">
        <p class="use-cases-text">
            <strong>Ideal for:</strong>
            <span class="use-case-badge">Badge 1</span>
            <span class="use-case-badge green">Badge 2</span>
            <span class="use-case-badge orange">Badge 3</span>
        </p>
    </div>
</div>
<div class="feature-strip">
    <p>Feature text here</p>
</div>
```

### Benefits of Standardization
- **Consistency**: All vehicle slides look uniform
- **Maintainability**: Single source of styling truth
- **Scalability**: Easy to add new vehicle slides
- **Performance**: Reduced CSS duplication
- **Quality**: Professional, polished appearance

### Implementation Priority
1. **High Priority**: Vehicle showcase components (hero, specs, images)
2. **Medium Priority**: Use cases and feature strips
3. **Low Priority**: Custom variations for specific slides

---

## Intelligent Design Philosophy

### Think Like a Designer, Not a Pattern Matcher

**CRITICAL**: This conversion requires design intelligence, not just mechanical string replacement. You must recognize component patterns and apply consistent styling regardless of naming conventions.

#### Component Recognition Patterns

**Card-like Elements** (Apply glassmorphism + enhanced styling):
- `.spec-item`, `.metric-item`, `.benefit-card`, `.stat-card`, `.flow-item`
- `.hero-header`, `.feature-strip`, `.use-cases-section`
- `.vehicle-showcase`, `.vehicle-features`, `.section-panel`

**All cards should receive**:
```css
/* Enhanced glassmorphism base */
background: var(--glass-bg);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid var(--glass-border);
border-radius: 12px;
box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
transition: all var(--transition-normal);

/* Enhanced hover effects */
:hover {
    transform: translateY(-3px);
    background: rgba(255, 255, 255, 0.4);
    border-color: rgba(255, 140, 0, 0.4);
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(255, 140, 0, 0.1);
}
```

**Colored Variants for Visual Hierarchy**:
```css
/* Apply to different card types for visual distinction */
.card-orange { /* Orange accent cards */
    background: linear-gradient(135deg, rgba(255, 140, 0, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(255, 140, 0, 0.3);
}

.card-blue { /* Trust blue cards */
    background: linear-gradient(135deg, rgba(0, 71, 171, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(0, 71, 171, 0.3);
}

.card-green { /* Success/positive cards */
    background: linear-gradient(135deg, rgba(34, 139, 34, 0.15) 0%, var(--glass-bg) 100%);
    border-color: rgba(34, 139, 34, 0.3);
}
```

#### Value Text Enhancement Patterns

**Gradient Text Effects** (Apply to important values):
```css
/* Orange accent values */
.value-orange {
    background: linear-gradient(135deg, var(--accent-dark) 0%, var(--accent-primary) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Trust blue values */
.value-blue {
    background: linear-gradient(135deg, var(--title-blue-dark) 0%, var(--title-blue-light) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Green values */
.value-green {
    color: var(--green-primary);
    filter: drop-shadow(0 2px 6px rgba(34, 139, 34, 0.3));
}
```

#### Design Intelligence Guidelines

1. **Recognize Function, Not Name**: If it contains data/content and has a background, it's likely a card
2. **Apply Consistent Hierarchy**: Primary cards (orange), secondary (blue), success (green)
3. **Enhance Important Text**: Numbers, values, and key text should have gradient effects
4. **Consistent Spacing**: All cards should have similar padding, margins, and gaps
5. **Progressive Enhancement**: Basic glassmorphism → Colored variants → Hover effects → Text enhancement

#### String Replacement Errors as Design Opportunities

**CRITICAL INSIGHT**: When you encounter string replacement errors during theme conversion, treat them as opportunities to think intelligently about component functionality rather than just pattern matching.

**Common Error Scenarios & Solutions:**

1. **CSS String Not Found Error**
   - **Don't**: Give up or assume the conversion is impossible
   - **Do**: Analyze what the component actually does and apply appropriate styling
   - **Example**: If you can't find specific navigation CSS, recognize it's a navigation component and apply standard navigation glassmorphism patterns

2. **Class Name Variations**
   - **Don't**: Only look for exact class name matches
   - **Do**: Identify the component's purpose (card, header, navigation, etc.) and apply consistent styling
   - **Example**: `.metric-box`, `.stats-panel`, `.data-card` are all card-like elements deserving the same base glassmorphism treatment

3. **Different Component Structures**
   - **Don't**: Skip components that don't match expected patterns
   - **Do**: Recognize functional similarities and adapt styling accordingly
   - **Example**: A `.hero-section` with content behaves like a card and should receive enhanced glassmorphism styling

**Design-First Approach:**
```css
/* Instead of looking for specific CSS patterns, think: */
/* "This element displays information in a container" → Apply card styling */
/* "This element shows important values" → Apply gradient text effects */
/* "This element provides navigation" → Apply navigation glassmorphism */
/* "This element shows hierarchy" → Apply color-coded variants */
```

**Error Recovery Strategy:**
1. **Identify Component Purpose**: What does this element do functionally?
2. **Apply Base Pattern**: Choose appropriate glassmorphism base (card, navigation, header)
3. **Add Visual Hierarchy**: Apply color coding based on content importance
4. **Enhance Key Elements**: Add gradient effects to values and important text
5. **Ensure Consistency**: Make it visually consistent with other similar components

This approach transforms technical errors into design improvements, ensuring every component receives appropriate intelligent styling regardless of naming conventions.

### Visual Consistency Rules

**All slides must have**:
- Consistent card styling regardless of class names
- Harmonious color hierarchy (orange > blue > green)
- Unified hover animations and shadow treatments
- Graduated glassmorphism effects based on content importance
- Enhanced text treatment for key values and headings

---

## Key Principles

### ✅ DO PRESERVE
- All HTML structure and layout
- Responsive design breakpoints
- Interactive functionality
- Animation timing and easing
- Content hierarchy
- Accessibility features

### ✅ DO UPDATE
- Color schemes and palettes
- Background gradients and patterns
- Glassmorphism effects
- Text contrast for readability
- Animation visibility
- Theme consistency

### ❌ DON'T CHANGE
- Layout properties (flexbox, grid, positioning)
- Spacing and sizing (margins, padding, dimensions)
- Typography hierarchy
- JavaScript functionality
- Responsive breakpoints
- Content structure

---

## Validation Checklist

After conversion, verify these elements:

### Theme Implementation
- [ ] **External Theme**: slide links to theme-skyblue.css correctly
- [ ] **Theme Classes**: body has `class="sky-theme"` and slide has `class="sky-pattern"`
- [ ] **Background**: Sky-blue gradient is applied and visible
- [ ] **Animations**: Cloud patterns and solar rays are moving smoothly
- [ ] **Glassmorphism**: All glass elements use light theme with proper blur effects
- [ ] **Text Readability**: All text is readable on light background

### Navigation Standardization
- [ ] **Top Navigation**: Uses centralized navigation from theme-skyblue.css
- [ ] **Navigation Buttons**: Use standardized glassmorphism styling with theme variables
- [ ] **Progress Bar**: Uses accent gradient and shows correct slide progress
- [ ] **Slide Number**: Uses light glassmorphism background with proper styling
- [ ] **Logo Corner**: Has proper accent gradient with hover effects
- [ ] **CSS Cleanup**: Redundant navigation CSS removed from individual slide

### Code Quality
- [ ] **Theme Variables**: All hard-coded colors replaced with CSS variables
- [ ] **Navigation Standardization**: All navigation elements match theme implementation
- [ ] **Slide-specific CSS**: Only slide-specific overrides remain (e.g., progress width)
- [ ] **CSS Organization**: Clean separation between theme and slide-specific styles

### Functionality & Design
- [ ] **Responsive Design**: Layout works on mobile and desktop
- [ ] **Functionality**: All interactive elements work as before
- [ ] **Visual Hierarchy**: Content hierarchy is maintained with new colors
- [ ] **Consistency**: Styling matches other converted slides using centralized theme
- [ ] **Performance**: No CSS duplication or redundancy

---

## Common Issues & Solutions

### Issue: Text is not readable
**Solution**: Ensure using `var(--text-primary)`, `var(--text-secondary)`, or `var(--text-muted)` instead of white/light colors.

### Issue: Glassmorphism not visible
**Solution**: Check that `backdrop-filter: blur(15px)` and `-webkit-backdrop-filter: blur(15px)` are applied.

### Issue: Animations not showing
**Solution**: Increase opacity values and ensure z-index is set correctly (background animations should have `z-index: 0`).

### Issue: Hard-coded colors still present
**Solution**: Search for hex codes (`#`) and rgba values, replace with appropriate CSS variables. Pay special attention to navigation elements that often retain dark theme styling.

### Issue: Navigation buttons look different from reference
**Solution**: Ensure using the standardized navigation button styling with `var(--glass-blur-heavy)`, `var(--shadow-md)`, and proper theme variables.

### Issue: Logo not interactive or missing hover effects
**Solution**: Add the standardized logo hover effects with scale, opacity, and glow animations.

### Issue: Layout broken on mobile
**Solution**: Ensure responsive breakpoints and mobile-specific styles are preserved from original, including navigation button size adjustments.

---

## Usage Instructions

1. **Copy this entire guide** into your prompt
2. **Specify the target slide** (e.g., "Apply this to slide7.html")
3. **Provide the slide file** for analysis
4. **Follow the step-by-step process** systematically
5. **Use the validation checklist** to ensure complete conversion
6. **Test on different screen sizes** to verify responsiveness

---

## Example Prompt Template

```
Please apply the sky-blue glassmorphism theme to [SLIDE_NAME] using the selective color extraction approach (Option 1) detailed in the Sky-Blue Theme Conversion Guide.

[Paste this entire guide here]

Target slide: [SLIDE_NAME]
```

Replace `[SLIDE_NAME]` with the specific slide file you want to convert (e.g., "slide7.html").

---

---

## Navigation Standardization Process

### Overview
The navigation standardization approach centralizes all navigation styling in `theme-skyblue.css` for better maintainability and consistency across all 28 slides.

### Implementation Steps

1. **Extract Navigation Components**
   - Top navigation container with slide counter, progress bar, and slide selector
   - Bottom navigation buttons (previous/next)
   - Slide number display with glassmorphism background
   - Logo corner with hover effects

2. **Centralize in theme-skyblue.css**
   - All navigation components are now defined in the external theme file
   - Uses CSS variables for consistent styling
   - Mobile-responsive breakpoints included
   - Standardized glassmorphism effects

3. **Update Individual Slides**
   - Add `<link rel="stylesheet" href="theme-skyblue.css">` to HTML head
   - Apply `class="sky-theme"` to body tag
   - Apply `class="sky-pattern"` to slide div
   - Remove redundant navigation CSS from individual slides
   - Keep only slide-specific overrides (e.g., progress bar width)

### Benefits of Centralized Approach

- **Consistency:** All slides use identical navigation styling
- **Maintainability:** Single source of truth for navigation updates
- **Performance:** Reduced CSS duplication across files
- **Scalability:** Easy to add new slides with consistent navigation

### Example Conversion

**Before (Individual slide CSS):**
```css
.nav-container {
    position: fixed;
    top: clamp(10px, 1.5vh, 25px);
    left: 50%;
    /* ... 20+ lines of navigation CSS ... */
}
```

**After (Using centralized theme):**
```html
<link rel="stylesheet" href="theme-skyblue.css">
<body class="sky-theme">
    <div class="slide sky-pattern">
        <!-- Navigation automatically styled by theme -->
    </div>
</body>
```

Only slide-specific CSS needed:
```css
.progress-fill {
    width: calc(6 / 28 * 100%); /* Slide 6 progress */
}
```

---

## Reference Implementation

**Successfully Converted Slides:**
- ✅ **slide4.html** - Reference for navigation standardization and logo styling
- ✅ **slide5.html** - Reference for enhanced navigation using theme variables
- ✅ **slide6.html** - Reference for complete sky-blue theme implementation with enhanced animations

**Navigation Standardization Source:**
Use slide5.html as the reference for:
- Navigation using theme variables from theme-skyblue.css
- Enhanced slide number styling with glassmorphism
- Standardized navigation components
- Mobile responsive navigation adjustments

**Centralized Theme Source:**
Use theme-skyblue.css as the reference for:
- Complete navigation component library
- Standardized glassmorphism styles
- CSS variable system
- Responsive breakpoints

**Theme Implementation Source:**
Use slide6.html as the reference for:
- Complete sky-blue color scheme application
- Enhanced background animations (cloud patterns and solar rays)
- Glassmorphism effects throughout
- Text color adjustments for light background

---

**Last Updated**: December 2024  
**Version**: 1.1  
**Status**: Production Ready (Updated with Navigation Standardization)