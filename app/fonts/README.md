# BDO Grotesk Font Files

## Step-by-Step Instructions

### 1. Get Your BDO Grotesk Font Files

You need the following font files in `.woff2` format:

- `BDOGrotesk-Regular.woff2` (weight: 400)
- `BDOGrotesk-Medium.woff2` (weight: 500)
- `BDOGrotesk-SemiBold.woff2` (weight: 600)
- `BDOGrotesk-Bold.woff2` (weight: 700)

### 2. Place Font Files in This Directory

Copy your BDO Grotesk font files directly into this folder:

```
app/fonts/
  ├── BDOGrotesk-Regular.woff2
  ├── BDOGrotesk-Medium.woff2
  ├── BDOGrotesk-SemiBold.woff2
  └── BDOGrotesk-Bold.woff2
```

### 3. File Format Conversion (if needed)

If you have fonts in other formats (`.ttf`, `.otf`, `.woff`), convert them to `.woff2`:

**Option A: Online Converter**

- Use [CloudConvert](https://cloudconvert.com/ttf-to-woff2) or similar tools
- Upload your font files and convert to `.woff2`

**Option B: Command Line (if you have Node.js)**

```bash
npm install -g ttf2woff2
ttf2woff2 your-font.ttf output-font.woff2
```

### 4. Verify Setup

After adding the files:

1. Restart your development server (`npm run dev`)
2. The app should automatically use BDO Grotesk
3. If files are missing, it will fall back to Helvetica

### 5. Different File Names?

If your font files have different names, update the paths in `app/layout.tsx`:

```typescript
const bdoGrotesk = localFont({
  src: [
    {
      path: './fonts/YourActualFileName.woff2', // Update this
      weight: '400',
      style: 'normal',
    },
    // ... etc
  ],
  // ...
})
```

### 6. Supported Formats

- ✅ `.woff2` (recommended - best compression)
- ✅ `.woff` (also supported)
- ✅ `.ttf` (supported but larger file size)
- ✅ `.otf` (supported but larger file size)

Just update the file extensions in `app/layout.tsx` if using different formats.

## Current Status

✅ Font configuration is ready in `app/layout.tsx`
✅ CSS variables are set up
✅ Tailwind config is configured
⏳ **Waiting for font files to be added to this directory**

Once you add the font files, the app will automatically use BDO Grotesk!
