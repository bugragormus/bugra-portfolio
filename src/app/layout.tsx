import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { ViewModeProvider } from "@/context/ViewModeContext";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata = {
  title: "Buğra Görmüş | Software Engineer & Data Scientist",
  description:
    "Personal portfolio of Buğra Görmüş, Software Engineer and Data Scientist. High-performance native systems, predictive machine learning, and enterprise data architectures.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col" suppressHydrationWarning>
        <LanguageProvider>
          <ViewModeProvider>
            <Header />
            <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
              {children}
            </main>
            <Footer />
          </ViewModeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
