import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: "Buğra Görmüş | AI Researcher & Data Scientist",
  description: "Personal portfolio of Buğra Görmüş, AI Researcher and Data Scientist. MSc Candidate in Artificial Intelligence at USI Lugano.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="min-h-screen flex flex-col"
        suppressHydrationWarning
      >
        <Header />
        <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
