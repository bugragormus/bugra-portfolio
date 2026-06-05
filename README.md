# Buğra Görmüş | Portfolio & Data Science Log

This repository houses the personal portfolio website of **Buğra Görmüş**, a Data Scientist currently pursuing an MSc in Artificial Intelligence at the **Università della Svizzera italiana (USI)** in Lugano, Switzerland (YLSY Scholar).

The application is built using a clean, maintainable architecture, structured data models, and a professional warm pastel aesthetic.

---

## 🛠️ Architecture & Design Pattern

To avoid unmaintainable inline styling and spaghetti logic typical of default developer templates, this project adheres to a strict **MVC (Model-View-Controller)** design pattern:

1. **Model (Data Layer)**: 
   - Centralized declarative models located in `src/models/` (`cvData.ts`, `projectsData.ts`). 
   - All content changes, project logs, education histories, and contact metrics are driven by these type-safe configurations.
2. **Controller (Logic Layer)**:
   - React custom hooks located in `src/controllers/` (`useAboutController.ts`, `useProjectsController.ts`, `useContactController.ts`).
   - Hooks handle UI tab switching, query-based search filters, and external API integrations (e.g. Formspree API submission).
3. **View & Styling (Presentation Layer)**:
   - Scoped React components (`src/components/`) and layout routers (`src/app/`).
   - Highly structured visual presentation utilizing **CSS Modules** (`*.module.css`) to ensure strict separation of concerns and avoid inline utility pollution.

---

## 🎨 Visual Identity

- **Theme**: Premium editorial warm pastel canvas. 
- **Color Tokens**: Soft stone background (`#f7f5f0`), graphite body typography (`#2d3238`), and category-specific pastel colors (sage green for ML, warm clay for Data, soft blue for Utilities, lavender for Web Engineering) representing structural categories.
- **Typography**: Editorial layout combining high-contrast headers (sans-serif) with monospaced data detailing (`DM Mono`).

---

## 🚀 Key Projects Listed

- **Padok - Gazi Derby Analytics Platform**: A predictive analysis system correlating historic Turkish horse racing indicators, jockey standings, and owner metrics. Built on automated TJK data ingestion, SQLite normalization, and explainable feature weight backtesting.
- **Retinal Imaging ML**: A machine learning pipeline analyzing retinal scan images to detect eye diseases using custom neural classification networks.
- **Lunasol Events Platform**: A premium localized event booking system based in Luxembourg, integrating Next.js, Supabase PostgreSQL, and Cloudinary APIs.
- **Finance Report Engine**: A Streamlit business intelligence application for ingest, cleanup, and visualization of ledger data.

---

## ⚙️ Development & Build

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) (or `http://localhost:3001` if port 3000 is occupied) to view local changes.

### Production Compiles
```bash
npm run build
```
Generates a highly optimized build. Verifies typescript compiler bindings and runs ESLint audits.
