# Troubleshooting Guide

## CSS Not Loading / Only Seeing HTML

If you're seeing only unstyled HTML, follow these steps:

### 1. **Clean Install**

```bash
# Remove node_modules and package-lock
rm -rf node_modules package-lock.json

# Remove .next build folder
rm -rf .next

# Reinstall dependencies
npm install

# Start dev server
npm run dev
```

### 2. **Verify Tailwind CSS is Working**

Open `app/globals.css` and check that it starts with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. **Check Browser Cache**

- Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
- Or open in incognito/private mode
- Or clear browser cache

### 4. **Verify Dev Server is Running**

```bash
npm run dev
```

You should see:
```
- Local:        http://localhost:3000
- Ready in XXXms
```

### 5. **Check Console for Errors**

Open browser DevTools (F12) and check:
- Console tab for JavaScript errors
- Network tab to see if CSS is loading
- Look for `globals.css` in the Network tab

### 6. **Verify Files Exist**

Check these files exist:
```bash
ls -la app/globals.css
ls -la tailwind.config.ts
ls -la postcss.config.js
```

### 7. **Check Port Conflicts**

If port 3000 is already in use:

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on different port
npm run dev -- -p 3001
```

### 8. **Rebuild from Scratch**

```bash
# Clean everything
rm -rf .next node_modules package-lock.json

# Reinstall
npm install

# Build
npm run build

# Start
npm run dev
```

## Common Issues

### Issue: "Module not found: Can't resolve './globals.css'"

**Solution:**
```bash
# Verify the file exists
ls app/globals.css

# If missing, it should contain:
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Issue: Tailwind Classes Not Working

**Solution:** Check `tailwind.config.ts` has correct content paths:

```typescript
content: [
  './pages/**/*.{js,ts,jsx,tsx,mdx}',
  './components/**/*.{js,ts,jsx,tsx,mdx}',
  './app/**/*.{js,ts,jsx,tsx,mdx}',
],
```

### Issue: Fonts Not Loading

**Solution:** Fonts are loaded from Google Fonts. Check internet connection and `app/layout.tsx`:

```typescript
import { Inter, Playfair_Display } from 'next/font/google'
```

## Quick Test

Create a test file to verify Tailwind is working:

**app/test/page.tsx**
```tsx
export default function Test() {
  return (
    <div className="min-h-screen bg-amber-400 flex items-center justify-center">
      <h1 className="text-6xl font-bold text-primary">
        Tailwind is Working! ✅
      </h1>
    </div>
  )
}
```

Visit `http://localhost:3000/test` - you should see a large amber page with dark text.

## Still Not Working?

### Check Node Version

```bash
node --version
# Should be v18.0.0 or higher
```

### Check NPM Version

```bash
npm --version
# Should be 9.0.0 or higher
```

### Reinstall Next.js

```bash
npm uninstall next
npm install next@14.2.0
```

### Check File Permissions

```bash
chmod -R 755 .
```

## Development Server Issues

### Server Won't Start

```bash
# Check if port is in use
lsof -i :3000

# Kill the process
kill -9 <PID>

# Try starting again
npm run dev
```

### CSS Changes Not Reflecting

1. Stop the dev server (Ctrl+C)
2. Delete `.next` folder: `rm -rf .next`
3. Start dev server: `npm run dev`

### Browser Shows Old Version

1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Disable cache in DevTools (Network tab → "Disable cache")
3. Clear browser cache completely

## Verify Installation

Run this command to check all dependencies:

```bash
npm list next react react-dom tailwindcss lucide-react
```

Should output:
```
roasted-roots-template@1.0.0
├── lucide-react@0.344.0
├── next@14.2.0
├── react-dom@18.3.0
├── react@18.3.0
└── tailwindcss@3.4.1
```

## Production Build Issues

If dev works but build fails:

```bash
# Clean build
rm -rf .next

# Run type check first
npm run type-check

# Then build
npm run build
```

## Contact Support

If none of these solutions work, provide:

1. Node version: `node --version`
2. NPM version: `npm --version`
3. Operating system
4. Error messages from console
5. Screenshots of the issue

---

**Most Common Fix:** Delete `.next` folder and restart dev server!

```bash
rm -rf .next && npm run dev
```
