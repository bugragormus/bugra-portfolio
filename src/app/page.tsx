"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Database, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12 flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <Image
                  src="/logo.png"
                  alt="Bugra Gormus Logo"
                  width={180}
                  height={180}
                  className="rounded-full relative z-10 border-4 border-white dark:border-slate-800 shadow-xl"
                />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400 mb-6 tracking-tight font-sans py-2"
            >
              Hello, I&apos;m <span className="inline-block">Buğra</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-12 font-light"
            >
              Software Engineer & Data Enthusiast
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-500 dark:to-purple-500 text-white hover:from-indigo-700 hover:to-purple-700 dark:hover:from-indigo-600 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
          >
            What I Do
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Software Development",
                description:
                  "Building scalable and efficient applications with modern technologies and best practices.",
                gradient: "from-indigo-500/10 to-purple-500/10",
                iconBg: "bg-indigo-500/10",
                iconColor: "text-indigo-600 dark:text-indigo-400",
                hoverBg: "group-hover:bg-indigo-500/20",
              },
              {
                icon: Database,
                title: "Data Analysis",
                description:
                  "Transforming raw data into meaningful insights and visualizations that drive decision-making.",
                gradient: "from-purple-500/10 to-pink-500/10",
                iconBg: "bg-purple-500/10",
                iconColor: "text-purple-600 dark:text-purple-400",
                hoverBg: "group-hover:bg-purple-500/20",
              },
              {
                icon: Lightbulb,
                title: "Problem Solving",
                description:
                  "Finding innovative solutions to complex technical challenges with creative thinking.",
                gradient: "from-pink-500/10 to-indigo-500/10",
                iconBg: "bg-pink-500/10",
                iconColor: "text-pink-600 dark:text-pink-400",
                hoverBg: "group-hover:bg-pink-500/20",
              },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`group card p-8 rounded-2xl bg-gradient-to-br ${skill.gradient} dark:from-slate-800 dark:to-slate-700 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${skill.iconBg} dark:bg-opacity-20 flex items-center justify-center mb-6 ${skill.hoverBg} dark:group-hover:bg-opacity-30 transition-colors`}
                >
                  <skill.icon
                    className={`h-8 w-8 ${skill.iconColor} dark:text-opacity-80`}
                  />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                  {skill.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
