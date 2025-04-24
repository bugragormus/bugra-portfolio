// app/projects/page.tsx

import Link from "next/link";
import { Github, ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "FabrieBank",
    description:
      "A banking application developed during internship at Vakifbank. Built with C# and PostgreSQL using layered architecture.",
    image: "/project1.jpg",
    tags: ["C#", "PostgreSQL", ".NET", "Layered Architecture"],
    github: "https://github.com/bugragormus/FabrieBank",
    live: null,
  },
  {
    title: "Flutter Mobile Apps",
    description:
      "Several mobile applications built during Google Turkey Game & App Academy with Flutter and Dart.",
    image: "/project2.jpg",
    tags: ["Flutter", "Dart", "Firebase", "Mobile Development"],
    github: "https://github.com/bugragormus/flutter-apps",
    live: null,
  },
  {
    title: "ML Pipelines at Kale Group",
    description:
      "Developed and deployed ML models for forecasting & anomaly detection. Built data pipelines for preprocessing and visualization.",
    image: "/project3.jpg",
    tags: ["Python", "scikit-learn", "Pandas", "Data Engineering"],
    github: "https://github.com/bugragormus/ml-pipelines",
    live: null,
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 tracking-tight font-sans py-2">
            My <span className="inline-block">Projects</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on during my
            professional journey. Each project represents a unique challenge and
            learning experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-90 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-4 py-1.5 text-sm bg-gradient-to-r from-indigo-50 to-purple-50 text-indigo-700 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2 group-hover/link:scale-110 transition-transform" />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center text-gray-700 hover:text-indigo-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2 group-hover/link:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Let&apos;s Work Together
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
