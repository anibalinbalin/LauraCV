# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js-based portfolio/CV website with internationalization (Spanish/English) and dark mode support. The project uses TypeScript, Tailwind CSS, and follows a component-based architecture.

## Common Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000

# Production
npm run build        # Build the application for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint to check code quality
```

## Architecture

### Content Management
- Content is stored in TypeScript files in `/data/` directory
- Each language has separate files: `content.ts` (Spanish) and `content.en.ts` (English)
- Content structure includes sections (Experience, Education, etc.) with typed interfaces

### Internationalization
- Custom React Context implementation in `lib/language-context.tsx`
- Language switching between Spanish (es) and English (en)
- No external i18n library - lightweight custom solution

### Theming
- Dark/light mode using `next-themes` library
- Theme toggle component with animated sun/moon icons
- System preference detection and persistence

### Component Structure
- `/app/` - Next.js 13 App Router pages and layouts
- `/components/` - Reusable UI components
- `/components/ui/` - Base UI components (buttons, dropdowns)
- Fixed navigation bar with theme and language controls

## Key Files

- `app/page.tsx` - Main CV page component
- `data/content.ts` & `data/content.en.ts` - CV content data
- `lib/language-context.tsx` - Language switching logic
- `components/theme-toggle.tsx` - Dark mode toggle
- `components/language-switcher.tsx` - Language selector