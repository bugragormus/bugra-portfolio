import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Bugra Gormus | Portfolio",
  description: "Personal portfolio website of Bugra Gormus.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <nav className="bg-white shadow p-4 flex justify-center gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
