import { Brain, LineChart, Globe, Tv } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  recruiterPitch?: string;
  engineerPitch?: string;
  metric?: string;
  architecture?: string[];
  tags: string[];
  github: string | null;
  live: string | null;
  image: string | null;
  isFeatured?: boolean;
}

export interface ProjectCategory {
  id: string;
  title: string;
  icon: typeof Brain;
  projects: Project[];
}

export const projectCategories: ProjectCategory[] = [
  {
    id: "systems",
    title: "Native Systems & High-Performance Engineering",
    icon: Tv,
    projects: [
      {
        title: "OnCue — Cinematic IPTV & Media Player for macOS",
        description:
          "High-performance native macOS media player engineered with Swift, SwiftUI, and Apple AVKit. Features hardware-accelerated 4K 60fps HDR rendering, simultaneous Multi-View streams, and interactive EPG schedule grids.",
        recruiterPitch:
          "Engineered a polished, commercial-grade macOS desktop media player from scratch in native Swift, leveraging Apple's low-level AVFoundation frameworks for silky smooth 60fps 4K playback.",
        engineerPitch:
          "Built purely with native Swift & SwiftUI, bypassing Electron bloat. Implements AVPlayerLayer hardware acceleration, concurrent multi-pipeline video decoding, dynamic Electronic Program Guide (EPG) XML parsing, and secure Apple Keychain credential storage.",
        metric: "Hardware 4K 60fps HDR & Native Swift",
        architecture: ["SwiftUI UI Layer", "AVKit / AVPlayerCore", "Concurrent Multi-View", "Keychain Vault"],
        image: null,
        tags: ["Swift", "SwiftUI", "macOS", "Apple AVKit", "Hardware Acceleration", "OLED UI"],
        github: "https://github.com/bugragormus/OnCue-Releases",
        live: null,
        isFeatured: true,
      },
      {
        title: "Medya Stüdyosu — Automated Media Pipeline",
        description:
          "Local end-to-end media automation suite transforming raw prompts into production-ready video assets: Concept ➔ Script generation ➔ Image synthesis ➔ Text-to-Speech audio ➔ FFmpeg compositor ➔ Thumbnail rendering.",
        recruiterPitch:
          "Constructed a fully automated media generation engine that cuts multi-platform content production time from hours to minutes using orchestrated AI pipelines and video compositing.",
        engineerPitch:
          "Node.js runtime controlling headless Puppeteer Chromium contexts, parallel TTS audio stream stitching, and automated multi-track FFmpeg render commands for both 16:9 widescreen and 9:16 vertical video formats.",
        metric: "Zero-Click Multi-Track Video Assembly",
        architecture: ["Prompt Engine", "TTS Audio Synthesis", "Puppeteer Visuals", "FFmpeg Render Core"],
        image: null,
        tags: ["Node.js", "FFmpeg", "Puppeteer", "Generative AI", "Automation Pipeline"],
        github: "https://github.com/bugragormus/youtube-otomasyon",
        live: null,
        isFeatured: true,
      },
    ],
  },
  {
    id: "ml",
    title: "Machine Learning & Predictive Systems",
    icon: Brain,
    projects: [
      {
        title: "Padok — Gazi Derby Analytics & Backtesting Engine",
        description:
          "An explainable machine learning & statistical framework predicting Turkish Derby contender performances through multi-factor historic race dynamics, jockey win-shares, and sire bloodlines.",
        recruiterPitch:
          "Engineered an automated end-to-end predictive pipeline that ingests, cleans, and scores 100k+ historical racing data points with daily CI/CD deployments and explainable weight breakdowns.",
        engineerPitch:
          "Built with Python, automated official TJK data scrapers, SQLite schema normalization, and explainable feature weight backtesting. Automated database artifact publishing via GitHub Actions runners.",
        metric: "100k+ Records Ingested & Daily CI/CD",
        architecture: ["TJK Scraper", "SQLite Normalizer", "Weight Backtester", "GH Actions Deployed"],
        image: null,
        tags: ["Python", "SQLite", "GitHub Actions CI/CD", "Automated ETL", "Explainable AI"],
        github: "https://github.com/bugragormus/Padok",
        live: "https://bugragormus.github.io/Padok/",
        isFeatured: true,
      },
      {
        title: "Retinal Imaging ML — Deep Eye Pathology Diagnosis",
        description:
          "Medical computer vision pipeline for automated detection of Diabetic Retinopathy, Glaucoma, and Cataracts from high-resolution retinal fundus scans.",
        recruiterPitch:
          "Developed high-accuracy deep convolutional neural network classifiers on medical diagnostic datasets as an engineering thesis, demonstrating end-to-end image preprocessing and clinical CV.",
        engineerPitch:
          "Custom CNN and transfer learning architectures trained with TensorFlow and NumPy. Implemented CLAHE contrast enhancement, geometric augmentation, and cross-entropy loss balancing for class skew.",
        metric: "Clinical Image Augmentation & Deep CNNs",
        architecture: ["CLAHE Preprocessing", "Augmentation Pipeline", "Deep CNN Backbone", "Clinical Scoring"],
        image: null,
        tags: ["Python", "TensorFlow", "Computer Vision", "Medical Imaging", "NumPy"],
        github: "https://github.com/bugragormus/RetinalImagingML",
        live: null,
        isFeatured: true,
      },
      {
        title: "Feature Extraction ResNet-SVM Hybrid",
        description:
          "Hybrid computer vision architecture leveraging deep ResNet convolutional layers as high-dimensional feature extractors paired with Support Vector Machines for low-latency classification.",
        recruiterPitch:
          "Combines the representational power of deep feature representations with the fast, deterministic inference bounds of kernel SVMs for production-constrained environments.",
        engineerPitch:
          "Truncated pre-trained ResNet residual blocks to extract latent embedding vectors, followed by L2 normalization and hyperparameter-tuned RBF kernel SVMs.",
        metric: "Hybrid Deep + Kernel Inference",
        architecture: ["ResNet Feature Extraction", "Latent Normalization", "RBF Kernel SVM", "Inference Benchmark"],
        image: null,
        tags: ["Python", "TensorFlow", "Scikit-learn", "ResNet", "Image Classification"],
        github: "https://github.com/bugragormus/Feature-Extraction-ResNet-SVM",
        live: null,
      },
    ],
  },
  {
    id: "data",
    title: "Data Analytics & Enterprise Intelligence",
    icon: LineChart,
    projects: [
      {
        title: "Industrial Production Tracker & Scenario Engine",
        description:
          "Real-time manufacturing analytics and forecasting system deployed at Kale Group factory network, linking IoT sensors, ERP ledgers, and financial scenario simulations.",
        recruiterPitch:
          "Accelerated monthly executive financial reporting by 70% while deploying predictive anomaly detection models that decreased factory floor production risks.",
        engineerPitch:
          "Engineered Python & SQL ETL workflows pulling sensor streams and ERP tables into localized forecasting models with interactive dashboard interfaces.",
        metric: "70% Faster Monthly Reporting",
        architecture: ["ERP & IoT Streams", "SQL ETL Pipeline", "Time-Series Forecaster", "Executive BI"],
        image: null,
        tags: ["Python", "SQL", "ETL", "Time-Series", "Anomaly Detection", "Enterprise BI"],
        github: null,
        live: null,
        isFeatured: true,
      },
      {
        title: "Finance Report Engine",
        description:
          "Interactive business intelligence application for parsing, cleaning, and synthesizing ledger balances into multi-scenario cash-flow and cost projections.",
        recruiterPitch:
          "Turned cumbersome spreadsheet reporting into an instant, self-service dashboard with automated validation checks and dynamic KPI breakdowns.",
        engineerPitch:
          "Streamlit architecture backed by Pandas vectorized data manipulation, dynamic filtering pipelines, and interactive Matplotlib visualizations.",
        metric: "Automated Ledger Reconciliation",
        architecture: ["Ledger Ingestion", "Vectorized Aggregations", "Scenario Engine", "Streamlit UI"],
        image: null,
        tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Financial Modeling"],
        github: "https://github.com/bugragormus/Finance-Report",
        live: null,
      },
    ],
  },
  {
    id: "web",
    title: "Software Engineering & Full-Stack Systems",
    icon: Globe,
    projects: [
      {
        title: "FabrieBank Banking Engine",
        description:
          "Full-stack layered banking system simulation supporting double-entry accounting ledgers, transaction wire auditing, and customer balance consistency.",
        recruiterPitch:
          "Constructed core banking transaction logic and database schemas during software engineering internship at Türkiye Vakıflar Bankası.",
        engineerPitch:
          "Layered architecture in C# (.NET Core) with Entity Framework, PostgreSQL transactions with ACID guarantees, and strict business validation layers.",
        metric: "ACID-Guaranteed Banking Transactions",
        architecture: ["C# .NET Core", "Layered Architecture", "PostgreSQL ACID", "Audit Logging"],
        image: null,
        tags: [".NET Core", "C#", "ASP.NET MVC", "PostgreSQL", "Enterprise Architecture"],
        github: "https://github.com/bugragormus/FabrieBank",
        live: null,
        isFeatured: true,
      },
      {
        title: "Lunasol Events Platform",
        description:
          "High-performance booking and event ecosystem built for Luxembourg clients, featuring multitenant Supabase backend, multi-language localization, and fluid micro-animations.",
        recruiterPitch:
          "Delivered a modern localized event management web application with smooth user transitions, fast media delivery, and secure cloud database syncing.",
        engineerPitch:
          "Next.js App Router, Supabase PostgreSQL with Row Level Security (RLS), Cloudinary asset pipeline, next-intl for French/German/English locales, and Framer Motion state handling.",
        metric: "Full Multilingual (i18n) + Serverless",
        architecture: ["Next.js App Router", "Supabase PostgreSQL (RLS)", "Cloudinary CDN", "next-intl"],
        image: null,
        tags: ["Next.js", "TypeScript", "Supabase", "next-intl (i18n)", "Framer Motion"],
        github: "https://github.com/bugragormus/LunaSol",
        live: null,
      },
      {
        title: "Troysarl Portal & CMS",
        description:
          "Responsive digital portal and administrative CMS with dynamic database mutations, optimized image delivery, and structured SEO metadata.",
        recruiterPitch:
          "Engineered a production web portal with custom content management and top-tier Google PageSpeed scores.",
        engineerPitch:
          "Next.js with Tailwind CSS, TypeScript, and Supabase integration for authenticated administrative dashboard operations.",
        metric: "Production Client Deployment",
        architecture: ["Next.js SSG/SSR", "Tailwind UI", "Supabase Auth & DB", "SEO Optimization"],
        image: null,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        github: "https://github.com/bugragormus/troysarl",
        live: "https://troysarl.com",
      },
    ],
  },
];
