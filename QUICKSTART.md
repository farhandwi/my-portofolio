# 🚀 Quick Start Guide

Get your portfolio up and running in minutes!

## Prerequisites

- Node.js 18.17 or later
- npm or yarn
- Git (optional)

## Installation Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000)

## First Time Setup

### Update Your Information

1. **Edit Personal Data** (`lib/data.ts`)
   - Update name, title, contact info
   - Modify social media links

2. **Update Hero Section** (`components/sections/Hero.tsx`)
   - Change greeting and tagline
   - Update LinkedIn/GitHub URLs

3. **Add Your Experience** (`components/sections/Experience.tsx`)
   - Replace with your work history
   - Add your achievements

4. **Showcase Your Projects** (`components/sections/Projects.tsx`)
   - Add your project details
   - Include live links and GitHub repos

5. **List Your Skills** (`components/sections/Skills.tsx`)
   - Update technology stack
   - Add your expertise areas

6. **Update Contact Info** (`components/sections/Contact.tsx`)
   - Change email and phone
   - Update location

### Add Your CV

Place your CV PDF in the `public` folder:
```
public/cv-farhan-dwi-septian.pdf
```

## Customization

### Change Theme Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    500: '#0ea5e9', // Change this
    600: '#0284c7', // And this
    // ... other shades
  },
}
```

### Modify Sections

All sections are in `components/sections/`. Edit any file to customize:
- Hero.tsx - Landing section
- About.tsx - About section
- Experience.tsx - Work history
- Projects.tsx - Project showcase
- Skills.tsx - Skills display
- Contact.tsx - Contact form

## Deploy to Vercel

### Method 1: GitHub Integration
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Click "Deploy"

### Method 2: Vercel CLI
```bash
npm install -g vercel
vercel
```

## Build for Production

```bash
npm run build
npm start
```

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## What's Included

✅ Responsive design (mobile, tablet, desktop)
✅ Dark/Light mode toggle
✅ Smooth animations with Framer Motion
✅ SEO optimized with meta tags
✅ Accessible (WCAG compliant)
✅ TypeScript for type safety
✅ Tailwind CSS for styling
✅ Modern Next.js 15 with App Router

## Need Help?

- 📖 Read the [DEVELOPMENT.md](./DEVELOPMENT.md) for detailed guide
- 🐛 Check [GitHub Issues](https://github.com/farhandwi/my-portofolio/issues)
- 📧 Email: farhandwi234@gmail.com

## Performance Tips

1. **Optimize Images**: Use WebP format, compress images
2. **Minimize JS**: Remove unused dependencies
3. **Use CDN**: Serve assets through CDN
4. **Enable Caching**: Configure proper cache headers

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ⬜ Update personal information
4. ⬜ Add your projects
5. ⬜ Customize colors/theme
6. ⬜ Test on mobile devices
7. ⬜ Deploy to Vercel
8. ⬜ Share your portfolio!

---

**Happy coding! 🎉**
