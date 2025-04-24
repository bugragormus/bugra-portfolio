import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-4xl font-bold">Hello, I'm Bugra</h1>
      <p className="mt-4 text-lg">Software Engineer & Data Enthusiast</p>
      <Link href="/projects" className="mt-6 text-blue-600 underline">
        View My Projects
      </Link>
    </main>
  );
}
