# ✅ Practical Experience Section Added

## 📝 What Was Added

### New Section: Practical Experience
A dedicated section showcasing teaching assistant experience at Pertamina University.

---

## 📦 Files Created/Modified

### Created:
1. **`components/sections/PracticalExperience.tsx`**
   - New component with timeline design
   - Alternating left/right layout on desktop
   - Smooth animations with Framer Motion
   - Hover effects on cards
   - Skill tags for each position

### Modified:
1. **`lib/data.ts`**
   - Added `practicalExperience` array with 4 positions:
     - Basic Programming Practicum Assistant (Sep 2022 - Feb 2023)
     - Operating Systems Practicum Assistant (Sep 2022 - Feb 2023)
     - Algorithms and Data Structures Practicum Assistant (Feb 2023 - Aug 2023)
     - Object Oriented Programming Practicum Assistant (Sep 2023 - Feb 2024)

2. **`app/page.tsx`**
   - Imported `PracticalExperience` component
   - Added between Experience and Projects sections

3. **`components/layout/Header.tsx`**
   - Added "Practical" navigation link
   - Links to `#practical-experience` section

---

## 🎨 Design Features

### Visual Elements:
- ✅ **Timeline Design**: Vertical line with dots showing progression
- ✅ **Alternating Layout**: Cards alternate left/right on desktop (mobile: all left)
- ✅ **Icon Integration**: BookOpen and GraduationCap icons
- ✅ **Gradient Decorations**: Primary color gradients throughout
- ✅ **Skill Tags**: Each position shows relevant skills

### Animations:
- ✅ **Stagger Effect**: Items animate in sequence
- ✅ **Scale on Hover**: Cards slightly scale up
- ✅ **Timeline Dots**: Spring animation when appearing
- ✅ **Skill Tags**: Fade in with delay
- ✅ **Bottom Icon**: Scale animation

### Responsive:
- ✅ **Mobile**: Single column, timeline on left
- ✅ **Desktop**: Alternating two-column layout
- ✅ **Tablet**: Smooth transition between layouts

---

## 🎯 Section Order

Current page structure:
1. Hero
2. About
3. Experience (Work Experience)
4. **Practical Experience** ← NEW
5. Projects
6. Skills
7. Contact
8. Footer

---

## 📊 Data Structure

```typescript
{
  id: number;
  title: string;
  period: string;
  description: string;
  skills: string[];
}
```

---

## 🚀 Next Steps

The section is fully functional and integrated. You can:

1. **Customize Content**: Edit `lib/data.ts` to update details
2. **Adjust Styling**: Modify colors/spacing in `PracticalExperience.tsx`
3. **Add More Items**: Simply add new objects to `practicalExperience` array
4. **Change Order**: Rearrange in `app/page.tsx` if needed

---

## ✅ Status

**Build Status:** ✅ No errors  
**Integration:** ✅ Complete  
**Responsive:** ✅ Mobile & Desktop  
**Animations:** ✅ Working  
**Navigation:** ✅ Added to header
