# 🎨 Runtime Variant Testing Guide

## Quick Start

1. **Replace your landing page component:**
   ```tsx
   // Replace this:
   <DendoraLanding language={language} />
   
   // With this:
   <ConfigurableLanding language={language} />
   ```

2. **Start testing variants instantly:**

### Method 1: Floating Button (Recommended)
- Look for the purple gear ⚙️ button in bottom-right corner
- Click it to open the variant switcher
- Select any variant and see instant changes
- Changes persist across page reloads

### Method 2: Keyboard Shortcuts (Power User)
- `Ctrl/Cmd + Shift + 1` → International
- `Ctrl/Cmd + Shift + 2` → Local Hungary
- `Ctrl/Cmd + Shift + 3` → Regional CEE  
- `Ctrl/Cmd + Shift + 4` → Minimal Tech
- `Ctrl/Cmd + Shift + 0` → Clear override

### Method 3: Browser Console (Programmatic)
```javascript
// Switch to local Hungary variant
window.setRuntimeVariant('local-hungary');
window.location.reload();

// Clear override
window.setRuntimeVariant(null);
window.location.reload();
```

## What You'll See

### 🇭🇺 Local Hungary (`Cmd+Shift+2`)
- Hero: Big FoundryPulse testimonial card
- Title: "Magyar szoftverfejlesztő csapat"
- Colors: Warm orange/amber
- Contact: "Beszélgessünk" (Let's chat)
- Only shows FoundryPulse project

### 🌍 Regional CEE (`Cmd+Shift+3`)
- Hero: FoundryPulse case study featured
- Title: "Central European software development"
- Local presence section
- Professional blue colors
- EU/regional messaging

### ⚡ Minimal Tech (`Cmd+Shift+4`)
- Ultra-clean minimal hero
- Only essential sections
- Technical focus
- Minimal grayscale design

### 🌐 International (`Cmd+Shift+1`)
- Your current default design
- Global approach
- All projects shown

## Development Only

- 🔒 **All runtime switching only works in development**
- 🚀 **In production, uses the variant set in `site-config.ts`**
- 💾 **Runtime choices are saved in localStorage**
- 🎯 **No performance impact in production builds**

## Perfect for A/B Testing

1. Test with local Hungarian clients → Use Local Hungary variant
2. Reaching out to regional businesses → Use Regional CEE variant  
3. Technical audiences → Use Minimal Tech variant
4. International clients → Use International variant

Switch instantly, no file editing needed! 🚀