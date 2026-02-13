#!/bin/bash

# CyberSecurity Universe - React.js Conversion Script
# This script helps convert your Next.js app to React with Vite

echo "🚀 CyberSecurity Universe - React.js Setup"
echo "==========================================="
echo ""

# Step 1: Create new Vite project
echo "📦 Step 1: Creating new Vite + React + TypeScript project..."
npm create vite@latest cybersecurity-react -- --template react-ts
cd cybersecurity-react

# Step 2: Install dependencies
echo "📥 Step 2: Installing dependencies..."
npm install
npm install react-router-dom framer-motion lucide-react
npm install -D tailwindcss postcss autoprefixer @types/react-router-dom

# Step 3: Initialize Tailwind
echo "🎨 Step 3: Initializing Tailwind CSS..."
npx tailwindcss init -p

# Step 4: Create directory structure
echo "📁 Step 4: Creating directory structure..."
mkdir -p src/components/layout
mkdir -p src/pages
mkdir -p src/data
mkdir -p src/lib

echo ""
echo "✅ React project setup complete!"
echo ""
echo "Next steps:"
echo "1. Copy the following files from the conversion folder:"
echo "   - REACT_App.tsx → src/App.tsx"
echo "   - REACT_Navbar.tsx → src/components/layout/Navbar.tsx"
echo "   - REACT_Hero.tsx → src/components/Hero.tsx"
echo "   - REACT_HomePage.tsx → src/pages/HomePage.tsx"
echo "   - globals.css → src/index.css"
echo ""
echo "2. Copy data files as-is:"
echo "   - data/roadmap.ts → src/data/roadmap.ts"
echo "   - data/jobs.ts → src/data/jobs.ts"
echo "   - data/salary.ts → src/data/salary.ts"
echo "   - lib/types.ts → src/lib/types.ts"
echo ""
echo "3. Copy your page components:"
echo "   - app/roadmap/page.tsx → src/pages/RoadmapPage.tsx"
echo "   - app/jobs/page.tsx → src/pages/JobsPage.tsx"
echo "   - app/salary/page.tsx → src/pages/SalaryPage.tsx"
echo "   - app/resources/page.tsx → src/pages/ResourcesPage.tsx"
echo ""
echo "4. Update imports in all files:"
echo "   - Replace 'next/link' with 'react-router-dom'"
echo "   - Replace '@/...' with '../...' (relative imports)"
echo ""
echo "5. Run the development server:"
echo "   npm run dev"
echo ""
echo "🌐 Your React app will be available at http://localhost:5173"
