# Converting CyberSecurity Universe to React.js

## Overview
This project is currently built with Next.js 16. Below is a complete guide to convert it to a standalone React.js application using Vite.

## Step 1: Create New React Project

```bash
# Create new Vite + React + TypeScript project
npm create vite@latest cybersecurity-react -- --template react-ts

# Navigate to the project
cd cybersecurity-react

# Install dependencies
npm install

# Install required packages
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer
npm install -D @types/react-router-dom

# Initialize Tailwind CSS
npx tailwindcss init -p
```

## Step 2: Project Structure

```
cybersecurity-react/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── Hero.tsx
│   │   └── ThemeProvider.tsx
│   ├── pages/
│   │   ├── HomePage.tsx
│   │   ├── RoadmapPage.tsx
│   │   ├── JobsPage.tsx
│   │   ├── SalaryPage.tsx
│   │   └── ResourcesPage.tsx
│   ├── data/
│   │   ├── roadmap.ts
│   │   ├── jobs.ts
│   │   └── salary.ts
│   ├── lib/
│   │   └── types.ts
│   ├── App.tsx
│   ├── App.css
│   ├── main.tsx
│   └── index.css
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Step 3: Key Changes from Next.js to React

### Navigation
- **Next.js**: `import Link from 'next/link'` → **React**: `import { Link } from 'react-router-dom'`
- **Next.js**: `import { usePathname } from 'next/navigation'` → **React**: `import { useLocation } from 'react-router-dom'`

### Routing
- **Next.js**: File-based routing in `app/` directory
- **React**: React Router in `App.tsx`

### Layout
- **Next.js**: `app/layout.tsx` with RootLayout component
- **React**: `App.tsx` with Router and Layout wrapper

### Metadata
- **Next.js**: Export `metadata` object
- **React**: Use `react-helmet` or manually set document.title

## Step 4: Install Dependencies

```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.22.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.344.0"
  },
  "devDependencies": {
    "@types/react": "^18.3.11",
    "@types/react-dom": "^18.3.1",
    "@types/react-router-dom": "^5.3.3",
    "@vitejs/plugin-react": "^4.3.3",
    "typescript": "^5.6.2",
    "vite": "^6.0.1",
    "tailwindcss": "^3.4.1",
    "postcss": "^8.4.35",
    "autoprefixer": "^10.4.17"
  }
}
```

## Step 5: Configuration Files

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
```

### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

## Notes

1. **All component files (.tsx) remain mostly the same**
2. **Main differences**:
   - Replace `next/link` with `react-router-dom`
   - Replace `next/navigation` hooks with React Router hooks
   - Move layout logic from `app/layout.tsx` to `App.tsx`
   - Set up React Router for navigation

3. **Data files** (roadmap.ts, jobs.ts, salary.ts) can be copied as-is
4. **Types file** (types.ts) can be copied as-is  
5. **CSS file** (globals.css → index.css) can be copied as-is

## Running the React App

```bash
npm run dev     # Start development server
npm run build   # Build for production
npm run preview # Preview production build
```

The app will run on http://localhost:5173 (Vite default) instead of http://localhost:3000
