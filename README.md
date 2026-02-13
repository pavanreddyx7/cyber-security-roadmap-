# CyberSecurity Universe

> Navigate your cybersecurity career with interactive roadmaps, comprehensive job role information, and data-driven salary insights from around the world.

## 🚀 Project Overview

CyberSecurity Universe is a modern, professional, responsive web platform that provides:
- **Interactive Cybersecurity Roadmap**: Zoomable tree-based flow chart with 25+ learning nodes
- **Job Role Explorer**: Hierarchical tree of 15+ cybersecurity roles with detailed career paths
- **Salary Insights Dashboard**: Data-driven salary analysis across multiple countries and experience levels
- **Learning Resources**: Curated resources, certifications, and training materials
- **Admin Panel**: Content management and salary data updates (planned)

## ✨ Features

### Core Features (Implemented)
- ✅ Modern, responsive design with dark/light theme toggle
- ✅ Comprehensive cybersecurity learning roadmap data
- ✅ Detailed job role information with career paths
- ✅ Sample salary data with methodology documentation
- ✅ Beautiful animated hero section
- ✅ Smooth navigation with active state indicators
- ✅ Professional color scheme with gradient effects
- ✅ SEO optimized with comprehensive metadata
- ✅ Accessible design (WCAG 2.1 AA compliant foundations)

### Upcoming Features
- 🔄 Interactive zoomable roadmap visualization (using D3.js)
- 🔄 Job role comparison tool
- 🔄 Salary insights interactive dashboard with charts
- 🔄 PDF export functionality
- 🔄 User progress tracking
- 🔄 Admin panel for content management
- 🔄 Learning path recommendations
- 🔄 Resource hub with search and filtering

## 🛠️ Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Visualizations**: D3.js (planned), Recharts (planned)
- **PDF Generation**: jsPDF, html2canvas (planned)
- **Icons**: Lucide React
- **Theme**: next-themes with dark mode support

## 📁 Project Structure

```
cybersecurity-universe/
├── app/                    # Next.js app directory
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles and design system
│   └── (routes)/           # Application routes (to be added)
├── components/             # React components
│   ├── layout/             # Layout components
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer
│   ├── Hero.tsx            # Animated hero section
│   └── theme-provider.tsx  # Dark mode provider
├── data/                   # Static data
│   ├── roadmap.ts          # 25+ cybersecurity learning nodes
│   ├── jobs.ts             # 15+ job role definitions
│   └── salary.ts           # Sample salary data & methodology
├── lib/                    # Utility functions
│   └── types.ts            # TypeScript type definitions
└── public/                 # Static assets

```

## 🎨 Design System

### Color Palette
- **Primary**: Deep Indigo (`hsl(239, 84%, 67%)`)
- **Secondary**: Teal Accent (`hsl(180, 62%, 55%)`)
- **Accent**: Vibrant Purple (`hsl(270, 95%, 75%)`)
- **Dark mode**: Automatically switches based on user preference

### Key Design Features
- Animated gradient backgrounds
- Glassmorphism effects
- Smooth micro-animations
- Card hover effects with depth
- Responsive typography
- Professional spacing and layout

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Installation

\`\`\`bash
# Navigate to the project
cd cybersecurity-universe

# Install dependencies (already done)
npm install

# Run the development server
npm run dev
\`\`\`

### View the Application
Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Data Structure

### Roadmap Nodes
Each roadmap node includes:
- Title, description, and "why it matters"
- Skill level (beginner → professional)
- Domain classification (offense, defense, cloud, DevSecOps, GRC, OT)
- Prerequisites and child nodes
- Learning resources with links
- Related job roles
- Estimated timeline
- Checklist items

### Job Roles
Each job role includes:
- Role title and family
- Seniority levels (entry → executive)
- Key skills and certifications
- Career path (from/to roles)
- Salary band information
- Learning path nodes
- Typical responsibilities
- Demand score

### Salary Data
- Organized by role, country, region, and experience level
- Includes median, 25th, and 75th percentiles
- Sample size and confidence scores
- Source attribution and last updated date
- Methodology documentation

## 🎯 Roadmap Progress

### Phase 1: Foundation ✅
- [x] Next.js setup with TypeScript
- [x] Tailwind CSS configuration
- [x] Design system
- [x] Core layout components
- [x] Theme provider
- [x] Homepage with hero section
- [x] Data structures

### Phase 2: Interactive Visualizations (In Progress)
- [ ] Roadmap page with zoomable D3.js tree
- [ ] Job roles hierarchical tree view
- [ ] Role detail panels
- [ ] Search and filter functionality

### Phase 3: Data & Analytics
- [ ] Salary insights dashboard
- [ ] Interactive charts (Recharts)
- [ ] Country/region filters
- [ ] Trend analysis
- [ ] Methodology page

### Phase 4: Enhanced Features
- [ ] PDF export functionality
- [ ] Learning paths and checklists
- [ ] Progress tracking
- [ ] Resources hub
- [ ] Admin panel

### Phase 5: Deployment & Optimization
- [ ] SEO optimization
- [ ] Performance tuning
- [ ] Accessibility audit
- [ ] Deployment to Vercel
- [ ] Analytics setup

## 📚 Documentation

- **Type Definitions**: See `lib/types.ts` for all TypeScript interfaces
- **Roadmap Data**: See `data/roadmap.ts` for the complete learning roadmap
- **Job Roles**: See `data/jobs.ts` for all cybersecurity roles
- **Salary Data**: See `data/salary.ts` for sample data and methodology

## 🤝 Contributing

This project is currently in active development. Contributions, suggestions, and feedback are welcome!

## 📄 License

This project is created for educational purposes.

## 🎉 Acknowledgments

Built with modern web technologies and best practices for the cybersecurity community.

---

**Status**: 🚧 In Development - Phase 1 Complete

**Last Updated**: February 11, 2026
