# BeyondCX Interactive Sales Playbook

## Overview
This is a React-based interactive sales playbook application for BeyondCX. It provides comprehensive B2B sales methodologies, tools, and resources including MEDDICC frameworks, discovery scripts, ROI calculators, and sales plays. The application is built with React 19, TypeScript, and Vite.

## Project Type
- **Frontend**: React + TypeScript + Vite
- **Styling**: Tailwind CSS (via CDN)
- **Charts**: Recharts
- **No Backend**: Pure frontend application

## Recent Changes (November 20, 2025)
- Imported from GitHub repository
- Configured for Replit environment
- Updated Vite config to use port 5000 (required for Replit)
- Added HMR client port configuration for proper hot module replacement
- Installed all npm dependencies
- Set up workflow for development server

## Project Structure
```
.
├── components/           # React components
│   ├── charts/          # Chart components (MEDDICC Impact, Pipeline Health)
│   ├── shared/          # Reusable UI components (Accordion, Loading, etc.)
│   ├── solutions/       # Solution-specific value prop components
│   └── *.tsx            # Feature components (ROI Calculator, Sales Plays, etc.)
├── hooks/               # Custom React hooks
├── App.tsx              # Main application component
├── index.tsx            # Application entry point
├── index.html           # HTML template
├── types.ts             # TypeScript type definitions
├── vite.config.ts       # Vite configuration
└── package.json         # Dependencies and scripts
```

## Key Dependencies
- React 19.2.0
- React DOM 19.2.0
- Recharts 3.2.1 (for data visualization)
- Vite 6.2.0 (build tool)
- TypeScript 5.8.2

## Development
- **Dev Server**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Environment Variables
The application supports Gemini API integration via:
- `GEMINI_API_KEY` - Can be set in `.env.local` file (optional)

Note: The API key is exposed to the frontend via Vite's define feature.

## Replit-Specific Configuration
- Server runs on port 5000 (required for Replit webview)
- Host set to 0.0.0.0 for proper network access
- HMR configured for Replit's proxy environment
- Workflow: "Start application" runs `npm run dev`

## Features
The playbook includes:
- Discovery Scripts
- Sales Plays
- ROI Calculator
- Pricing Guide & Negotiation
- MEDDICC Methodology Tools
- Competitive Battlecards
- Email Templates
- Process Guides
- Case Studies
- Value Propositions for various solutions (IVR, FCR, Booking, Order)

## User Preferences
None documented yet.
