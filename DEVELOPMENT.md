# Development Guide - Modern Portfolio Website

## 📋 Overview

This portfolio website is built with Next.js 15, TypeScript, and Tailwind CSS, featuring a modern dark/light theme toggle, smooth animations, and optimal performance.

## 🏗️ Architecture

### Technology Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme Management**: Next Themes

### Project Structure
```
my-portofolio/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Layout components
│   │   ├── Header.tsx     # Sticky navigation
│   │   └── Footer.tsx     # Footer
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Experience.tsx # Work experience
│   │   ├── Projects.tsx   # Projects showcase
│   │   ├── Skills.tsx     # Technical skills
│   │   └── Contact.tsx    # Contact form
│   └── providers/
│       └── ThemeProvider.tsx # Theme context
├── lib/
│   └── data.ts            # Structured data & content
└── public/                # Static assets

```

## 🎨 Design System

### Color Palette
- **Primary**: Custom blue gradient (customizable in tailwind.config.ts)
- **Background**: White/Gray-50 (light) | Gray-950 (dark)
- **Text**: Gray-900 (light) | White (dark)

### Typography
- **Font**: Inter (from Google Fonts)
- **Headings**: Bold, large sizes for visual hierarchy
- **Body**: Regular weight, comfortable reading size

### Animations
- Fade-in effects on scroll
- Smooth transitions on hover
- Staggered animations for lists
- Framer Motion for advanced animations

## 🔧 Key Features

### 1. Hero Section
- Eye-catching introduction
- Animated text and elements
- CTA buttons (Download CV, Contact)
- Social media links
- Scroll indicator

### 2. About Section
- Professional summary
- Key highlights with icons
- Grid layout for strengths

### 3. Experience Section
- Timeline layout
- Quantifiable achievements
- Technology tags
- Company details

### 4. Projects Section
- Card-based layout
- Project descriptions
- Technology stack display
- External links

### 5. Skills Section
- Categorized skills
- Icon-based categories
- Additional expertise tags
- Visual skill badges

### 6. Contact Section
- Contact form with validation
- Contact information display
- Social media links
- Form submission handling

## 🚀 Development

### Getting Started
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Environment Setup
No environment variables required for basic functionality. 

For form submission, you may want to add:
```env
NEXT_PUBLIC_FORM_ENDPOINT=your_form_endpoint_here
```

## 📝 Customization Guide

### 1. Personal Information
Update `lib/data.ts` with your information:
```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  // ... other fields
};
```

### 2. Theme Colors
Modify `tailwind.config.ts`:
```typescript
colors: {
  primary: {
    // Your color palette
  },
}
```

### 3. Content Sections
Each section component is self-contained:
- `components/sections/Hero.tsx` - Hero content
- `components/sections/About.tsx` - About content
- `components/sections/Experience.tsx` - Work history
- `components/sections/Projects.tsx` - Project list
- `components/sections/Skills.tsx` - Skills list
- `components/sections/Contact.tsx` - Contact info

### 4. Add New Sections
1. Create component in `components/sections/`
2. Import in `app/page.tsx`
3. Add to navigation in `components/layout/Header.tsx`

## 🎯 Performance Optimization

### Built-in Optimizations
- Next.js 15 automatic code splitting
- Image optimization with next/image
- Font optimization with next/font
- CSS optimization with Tailwind

### Best Practices
- Use Server Components where possible
- Lazy load non-critical content
- Optimize images before upload
- Minimize client-side JavaScript

## 🔍 SEO Optimization

### Implemented Features
- Meta tags in layout.tsx
- Structured data (JSON-LD)
- Semantic HTML
- Open Graph tags
- Twitter Card tags

### Additional Recommendations
- Add sitemap.xml
- Create robots.txt
- Implement canonical URLs
- Add alt text to images

## ♿ Accessibility

### Current Implementation
- ARIA labels on interactive elements
- Keyboard navigation support
- Semantic HTML structure
- Color contrast compliance
- Focus indicators

### Testing Tools
- Lighthouse (Chrome DevTools)
- WAVE Browser Extension
- axe DevTools

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import repository in Vercel
3. Deploy with default settings
4. Automatic deployments on push

### Other Platforms
- Netlify: Supports Next.js
- AWS Amplify: Full Next.js support
- Railway: Easy deployment
- Render: Next.js compatible

## 🐛 Troubleshooting

### Common Issues

**Issue**: Dark mode not working
**Solution**: Check ThemeProvider in layout.tsx

**Issue**: Animations not smooth
**Solution**: Ensure framer-motion is installed

**Issue**: TypeScript errors
**Solution**: Run `npm run build` to check for errors

**Issue**: Styling not applied
**Solution**: Check Tailwind config and globals.css

## 📊 Performance Targets

### Lighthouse Scores (Target)
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

### Core Web Vitals
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

## 🔐 Security

### Best Practices
- No sensitive data in client code
- Validate form inputs
- Use HTTPS in production
- Sanitize user inputs
- Keep dependencies updated

## 📚 Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)

### Learning Resources
- Next.js Learn Course
- Tailwind CSS Playground
- TypeScript Handbook
- React Documentation

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork for your own use
- Report bugs
- Suggest improvements
- Share with others

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 💬 Support

For questions or issues:
- GitHub Issues
- Email: farhandwi234@gmail.com
- LinkedIn: [linkedin.com/in/farhandwi](https://linkedin.com/in/farhandwi)

---

**Built with ❤️ using Next.js 15**
