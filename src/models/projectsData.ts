import { Brain, LineChart, Wrench, Globe } from "lucide-react";

export interface Project {
  title: string;
  description: string;
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
    id: "ml",
    title: "Machine Learning & AI Research",
    icon: Brain,
    projects: [
      {
        title: "Padok - Gazi Race Analytics Platform",
        description:
          "A predictive and analytical framework evaluating Gazi Derby candidates by correlating historic race structures, jockey standings, and owner stats. Built on automated TJK data ingestion, SQLite normalization, and explainable feature weight scores. Deploys live database artifacts via automated GitHub Actions.",
        image: null,
        tags: ["Python", "SQLite", "GitHub Actions CI/CD", "Data Ingestion", "Explainable AI"],
        github: "https://github.com/bugragormus/Padok",
        live: "https://bugragormus.github.io/Padok/",
        isFeatured: true,
      },
      {
        title: "Retinal Imaging ML",
        description:
          "A machine learning pipeline to analyze retinal images and detect eye diseases using custom neural network classification models and medical image preprocessing.",
        image: null,
        tags: ["Python", "TensorFlow", "NumPy", "Medical Imaging", "Computer Vision"],
        github: "https://github.com/bugragormus/RetinalImagingML",
        live: null,
        isFeatured: true,
      },
      {
        title: "Feature Extraction ResNet-SVM",
        description:
          "High-performance feature extraction framework using ResNet architectures combined with Support Vector Machines (SVM) for optimized image classification.",
        image: null,
        tags: ["Python", "TensorFlow", "Scikit-learn", "ResNet", "Image Classification"],
        github: "https://github.com/bugragormus/Feature-Extraction-ResNet-SVM",
        live: null,
      },
    ],
  },
  {
    id: "data",
    title: "Data Analysis & Visualizations",
    icon: LineChart,
    projects: [
      {
        title: "Finance Report Engine",
        description:
          "A Streamlit-based business intelligence app allowing users to ingest, clean, and visualize financial ledger data with dynamic filtering, grouping, and scenario modeling.",
        image: null,
        tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Financial Analytics"],
        github: "https://github.com/bugragormus/Finance-Report",
        live: null,
        isFeatured: true,
      },
      {
        title: "ML & Data Analytics Template",
        description:
          "An end-to-end framework and structured repository template for building, testing, and demonstrating machine learning and exploratory data analysis applications.",
        image: null,
        tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "EDA Template"],
        github:
          "https://github.com/bugragormus/Data-Analysis-and-Machine-Learning-Template",
        live: null,
      },
    ],
  },
  {
    id: "tools",
    title: "Analytical Utilities & Automations",
    icon: Wrench,
    projects: [
      {
        title: "KaleFrit Barcode Tracker v2.0",
        description:
          "Operations tracking system for manufacturing environments. Integrates hardware barcode scanners, scans databases, and runs statistical analytics to detect bottleneck anomalies.",
        image: null,
        tags: ["PHP", "Blade", "PostgreSQL", "Manufacturing Analytics"],
        github: "https://github.com/bugragormus/KaleFritBarcodeTracing",
        live: null,
      },
    ],
  },
  {
    id: "web",
    title: "Engineering Web Systems",
    icon: Globe,
    projects: [
      {
        title: "Lunasol Events Platform",
        description:
          "A premium booking and event management system based in Luxembourg. Integrates Next.js, Supabase PostgreSQL, and Cloudinary APIs. Features fully localized language interfaces (next-intl) and client-side animated state transitions via Framer Motion.",
        image: null,
        tags: ["Next.js", "Supabase", "next-intl (i18n)", "PostgreSQL", "Cloudinary"],
        github: "https://github.com/bugragormus/LunaSol",
        live: null,
      },
      {
        title: "FabrieBank Platform",
        description:
          "Full-stack simulation of a standard banking engine using layered system architectures, supporting transaction auditing, bank wire routing, and secure ledger balance tracking.",
        image: null,
        tags: [".NET Core", "C#", "ASP.NET MVC", "PostgreSQL", "Ledger Auditing"],
        github: "https://github.com/bugragormus/FabrieBank",
        live: null,
      },
      {
        title: "Troysarl Portal",
        description:
          "Modern optimized gallery portal with responsive layouts, customized backend dashboard for database entries, and SEO indexing structure.",
        image: null,
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase Backend"],
        github: "https://github.com/bugragormus/troysarl",
        live: "https://troysarl.com",
      },
    ],
  },
];
