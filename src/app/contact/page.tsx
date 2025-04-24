import { Mail, Github, Linkedin, MapPin, Download } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Have a question or want to work together? Feel free to reach out!
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
            <h2 className="text-2xl font-semibold mb-8 text-gray-800">
              Send me a message
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-8 text-gray-800">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                    <Mail className="h-6 w-6 text-indigo-600" />
                  </div>
                  <a
                    href="mailto:bugra.gormus@hotmail.com"
                    className="text-lg hover:text-indigo-600 transition-colors"
                  >
                    bugra.gormus@hotmail.com
                  </a>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                    <Github className="h-6 w-6 text-indigo-600" />
                  </div>
                  <a
                    href="https://github.com/bugragormus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-indigo-600 transition-colors"
                  >
                    github.com/bugragormus
                  </a>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                    <Linkedin className="h-6 w-6 text-indigo-600" />
                  </div>
                  <a
                    href="https://linkedin.com/in/bugragormus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-indigo-600 transition-colors"
                  >
                    linkedin.com/in/bugragormus
                  </a>
                </div>
                <div className="flex items-center text-gray-700 group">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4 group-hover:from-indigo-100 group-hover:to-purple-100 transition-colors">
                    <Download className="h-6 w-6 text-indigo-600" />
                  </div>
                  <a
                    href="/Bugra_Gormus_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg hover:text-indigo-600 transition-colors"
                  >
                    Download CV (PDF)
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
              <h2 className="text-2xl font-semibold mb-8 text-gray-800">
                Location
              </h2>
              <div className="flex items-center text-gray-700">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center mr-4">
                  <MapPin className="h-6 w-6 text-indigo-600" />
                </div>
                <div>
                  <p className="text-lg">
                    Based in Istanbul, Turkey
                    <br />
                    Available for remote work worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
