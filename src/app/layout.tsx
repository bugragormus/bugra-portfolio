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
      <body
        className="bg-gray-900 text-gray-100 min-h-screen"
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
