# Mobile Scrolling Fix Guide

## Problem
Mobile devices were unable to see the bottom content of presentation slides due to:
1. Conflicting CSS rules overriding bottom padding
2. Logo positioning issues with increased padding
3. Duplicate media query rules interfering with mobile scrolling

## Solution Steps

### Step 1: Identify Duplicate CSS Rules
Search for problematic duplicate CSS patterns that override mobile scrolling:

```css
/* Ensure proper mobile scrolling */
@media (max-width: 768px) {
    .slide {
        min-height: auto;
        padding-bottom: calc(80px + env(safe-area-inset-bottom));
    }
}
```

**Issue**: This rule overrides the main bottom padding, preventing content from being visible.

### Step 2: Remove Duplicate CSS Rule
Remove the entire conflicting media query block:
- Look for the comment `/* Ensure proper mobile scrolling */`
- Delete the entire `@media (max-width: 768px)` block that follows
- This typically spans 6-8 lines in affected files

### Step 3: Increase Bottom Padding
Modify the base slide padding to add 1000px to bottom padding:

**Before:**
```css
padding: 80px 20px 120px;
```

**After:**
```css
padding: 80px 20px calc(1120px + env(safe-area-inset-bottom));
```

### Step 4: Adjust Logo Positioning
Add logo positioning override in the mobile media query to prevent logo from being hidden:

**Location**: Inside existing `@media (max-width: 768px)` block
**Code to add:**
```css
.logo-corner {
    bottom: calc(1050px + env(safe-area-inset-bottom));
}
```

## Files Fixed

### Slides with Duplicate CSS Issues (Full Fix Applied)
1. **slide7.html** ✅
2. **slide8.html** ✅
3. **slide9.html** ✅
4. **slide9b.html** ✅
5. **slide9c.html** ✅
6. **slide11.html** ✅
7. **slide14.html** ✅

### Slides with Clean CSS (Padding + Logo Fix Only)
1. **slide16.html** ✅

## Implementation Details

### For Slides with Duplicate CSS:
```bash
# 1. Remove duplicate CSS rule
# 2. Change padding: 80px 20px 120px;
# 3. To: padding: 80px 20px calc(1120px + env(safe-area-inset-bottom));
# 4. Add logo positioning in mobile media query
```

### For Clean Slides:
```bash
# 1. Change padding: 80px 20px 120px;
# 2. To: padding: 80px 20px calc(1120px + env(safe-area-inset-bottom));
# 3. Add logo positioning in existing mobile media query
```

## Technical Explanation

### Why This Works:
1. **Removed conflicting rules**: Duplicate CSS was overriding the main padding
2. **Increased scroll area**: 1120px bottom padding ensures all content is accessible
3. **Safe area support**: `env(safe-area-inset-bottom)` handles device-specific safe areas
4. **Logo repositioning**: Moves logo up to remain visible above the expanded padding area

### CSS Calculation:
- Base bottom padding: 120px
- Added padding: 1000px
- Total: 1120px + safe area inset
- Logo positioned: 1050px from bottom + safe area inset

## Testing
After applying fixes, verify:
- [ ] All slide content is visible on mobile
- [ ] Logo remains visible and positioned correctly
- [ ] Scrolling works smoothly without cutting off content
- [ ] Desktop layout remains unaffected

## Notes
- Desktop layouts use `overflow: hidden` and are unaffected by these changes
- Mobile-first approach allows natural scrolling with `overflow-y: visible`
- The fix maintains responsive design principles while ensuring content accessibility

---
*Fix applied to QTCS presentation slides - Mobile scrolling accessibility improvement*