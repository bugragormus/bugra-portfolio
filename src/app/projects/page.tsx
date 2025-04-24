// app/projects/page.tsx

import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";

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
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-gray-600">
            Here are some of the projects I've worked on during my professional
            journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                {/* Add your project images here */}
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-500"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="h-5 w-5 mr-2" />
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
