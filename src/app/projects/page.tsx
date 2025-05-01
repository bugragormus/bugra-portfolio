"use client";

// app/projects/page.tsx

import Link from "next/link";
import {
  Github,
  ExternalLink,
  ArrowRight,
  Brain,
  LineChart,
  Wrench,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projectCategories = [
  {
    id: "ml",
    title: "Machine Learning & Computer Vision",
    icon: Brain,
    projects: [
      {
        title: "Retinal Imaging ML",
        description:
          "A machine learning pipeline to analyze retinal images and detect diseases using image processing and classification.",
        image: "/project4.jpg",
        tags: ["Python", "TensorFlow", "OpenCV", "Medical Imaging"],
        github: "https://github.com/bugragormus/RetinalImagingML",
        live: null,
      },
      {
        title: "Feature Extraction ResNet-SVM",
        description:
          "This project extracts deep features from images using ResNet variants and classifies them using Support Vector Machines.",
        image: "/project2.jpg",
        tags: ["Python", "TensorFlow", "Scikit-learn", "Jupyter"],
        github: "https://github.com/bugragormus/Feature-Extraction-ResNet-SVM",
        live: null,
      },
    ],
  },
  {
    id: "data",
    title: "Data Analysis & Visualization",
    icon: LineChart,
    projects: [
      {
        title: "Finance Report",
        description:
          "A Streamlit-based app that allows users to analyze, visualize, and report financial data with dynamic grouping and filtering.",
        image: "/project1.jpg",
        tags: ["Python", "Streamlit", "Pandas", "Matplotlib"],
        github: "https://github.com/bugragormus/Finance-Report",
        live: null,
      },
      {
        title: "Data Analysis & ML Template",
        description:
          "A ready-to-use template for building end-to-end machine learning and data analysis applications with multi-format support.",
        image: "/project2.jpg",
        tags: ["Python", "Scikit-learn", "Streamlit", "Pandas"],
        github:
          "https://github.com/bugragormus/Data-Analysis-and-Machine-Learning-Template",
        live: null,
      },
    ],
  },
  {
    id: "tools",
    title: "Utilities & Toolkits",
    icon: Wrench,
    projects: [
      {
        title: "Everything Tool",
        description:
          "A multi-purpose Streamlit-based application combining various utilities into a single interface with modular architecture.",
        image: "/project5.jpg",
        tags: ["Python", "Streamlit", "Web Development"],
        github: "https://github.com/bugragormus/EverythingTool",
        live: "https://everythingtool.github.io/everythingtool/",
      },
      {
        title: "Stock Tracking",
        description:
          "A Python-based Telegram bot that allows users to track the stock status of specific products in real time with instant notifications.",
        image: "/project3.jpg",
        tags: ["Python", "Selenium", "Telegram Bot API"],
        github: "https://github.com/bugragormus/StockTracking",
        live: null,
      },
    ],
  },
  {
    id: "web",
    title: "Web Applications",
    icon: Globe,
    projects: [
      {
        title: "Troysarl",
        description:
          "A modern and responsive corporate website built using Next.js and Tailwind CSS with optimized SEO structure.",
        image: "/project6.jpg",
        tags: ["Next.js", "TypeScript", "Tailwind CSS"],
        github: "https://github.com/bugragormus/troysarl",
        live: "https://troysarl.com",
      },
      {
        title: "FabrieBank",
        description:
          "A simple web banking simulation platform where users can manage balances and transactions with user account management.",
        image: "/project5.jpg",
        tags: ["Python", "Django", "SQLite"],
        github: "https://github.com/bugragormus/FabrieBank",
        live: null,
      },
    ],
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 tracking-tight font-sans py-2"
          >
            My <span className="inline-block">Projects</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
          >
            Explore my portfolio of projects across different domains, from
            machine learning to web development.
          </motion.p>
        </motion.div>

        {projectCategories.map((category, categoryIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
            className="mb-20"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.2 + 0.2 }}
              className="flex items-center gap-3 mb-8"
            >
              <category.icon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                {category.title}
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.projects.map((project, projectIndex) => (
                <motion.div
                  key={projectIndex}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: (categoryIndex * 2 + projectIndex) * 0.1,
                  }}
                  className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600">
                    <div className="w-full h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 dark:from-indigo-600 dark:via-purple-600 dark:to-pink-600 opacity-90 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tagIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay:
                              (categoryIndex * 2 + projectIndex) * 0.1 +
                              tagIndex * 0.1,
                          }}
                          className="px-4 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>
                    <div className="flex gap-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        <Github className="h-5 w-5 mr-2 group-hover/link:scale-110 transition-transform" />
                        View Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          <ExternalLink className="h-5 w-5 mr-2 group-hover/link:scale-110 transition-transform" />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let&apos;s Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
