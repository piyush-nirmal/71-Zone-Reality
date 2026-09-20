# Elysian Estates Luxury Frontend

This project is a high-end luxury real estate website built with Next.js 16, React 19, and Tailwind CSS v4. It features a complete **Client Branding Swap System** allowing for instant reconfiguration of the entire site's branding (logos, colors, fonts, content).

## Prerequisites

- **Node.js**: Version 20 or higher is recommended (Project uses Next.js 16).
- **npm**: Standard installation.

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   Access the site at `http://localhost:3000`.

3. **Build for Production**
   ```bash
   npm run build
   npm run start
   ```

## Key Features

- **Branding Swap System**: 
  - Toggle between **Elysian Estates** and **Vanguard Residences** using the floating settings icon.
  - Automatically updates CSS variables, fonts, and content.
- **Dual Theme Support**: 
  - Seamless Dark/Light mode integration with brand-aware colors.
- **Tech Stack**:
  - Next.js 16 (App Router)
  - React 19
  - Tailwind CSS v4
  - Framer Motion (Animations)
  - Lucide React (Icons)

## Troubleshooting Port Conflicts

If you see `EADDRINUSE` errors, it means the default port (3000) is busy. 

### 1. Automatic Fallback
The standard `npm run dev` command is configured to **automatically** try the next available port (e.g., 3001, 3002) if 3000 is taken. Just run:
```bash
npm run dev
```

### 2. Manual Port Selection
If you need to force a specific port (e.g., 4000), use the custom script added to `package.json`:
```bash
npm run dev:custom 4000
```

### 3. Ultimate Fix for Port/Lock Issues (Windows)
If processes get stuck or you see "Unable to acquire lock", run the maintenance script:
```bash
npm run fix
```
This script kills all zombie Node processes and clears the `.next` cache for a fresh start.

## CMS-Ready Architecture

The project has been refactored for professional Headless CMS integration:
- **TypeScript Models**: Centralized in `src/types/cms.ts`.
- **Mock Content Layer**: Located in `src/lib/content.ts` (simulating API responses).
- **Decoupled Components**: All sections (`Hero`, `About`, etc.) now consume data via props, making them agnostic to the data source.

## Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI components and page sections.
- `src/context`: React Context providers (`BrandContext`, `ThemeContext`).
- `src/data`: Brand configuration data (`brands.ts`).
- `src/types`: TypeScript interfaces.
