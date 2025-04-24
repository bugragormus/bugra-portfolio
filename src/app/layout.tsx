import "./globals.css";
import Header from "@/components/Header";

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
    <html lang="en" className="scroll-smooth">
      <body className="bg-gray-50 text-gray-900 min-h-screen">
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
