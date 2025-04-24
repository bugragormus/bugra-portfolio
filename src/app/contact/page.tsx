export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="text-gray-700 mb-6">
        Feel free to reach out to me via email or through my social platforms:
      </p>
      <ul className="space-y-2 text-blue-600">
        <li>
          <a href="mailto:bugra.gormus@hotmail.com">bugra.gormus@hotmail.com</a>
        </li>
        <li>
          <a href="https://github.com/bugragormus" target="_blank">
            GitHub: bugragormus
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/bugragormus" target="_blank">
            LinkedIn: bugragormus
          </a>
        </li>
        <li>
          <a href="/Bugra_Gormus_CV.pdf" target="_blank">
            Download CV (PDF)
          </a>
        </li>
      </ul>
    </main>
  );
}
