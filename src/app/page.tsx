import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Code, Database, Lightbulb } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in">
            <div className="mb-8 flex justify-center">
              <Image
                src="/logo.png"
                alt="Bugra Gormus Logo"
                width={150}
                height={150}
                className="rounded-full"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 mb-6 tracking-tight font-sans py-2">
              Hello, I&apos;m <span className="inline-block">Bugra</span>
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 mb-12 font-light">
              Software Engineer & Data Enthusiast
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/projects"
                className="group inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Projects
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center px-8 py-4 rounded-full border-2 border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Skills Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            What I Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center mb-6 group-hover:bg-indigo-200 transition-colors">
                <Code className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Software Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Building scalable and efficient applications with modern
                technologies and best practices.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center mb-6 group-hover:bg-purple-200 transition-colors">
                <Database className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Data Analysis
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Transforming raw data into meaningful insights and
                visualizations that drive decision-making.
              </p>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-pink-50 to-indigo-50 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center mb-6 group-hover:bg-pink-200 transition-colors">
                <Lightbulb className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                Problem Solving
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Finding innovative solutions to complex technical challenges
                with creative thinking.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
