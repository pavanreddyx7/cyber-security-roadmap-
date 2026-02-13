import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CyberSecurity Universe - Roadmaps, Roles & Salary Insights",
  description: "Navigate your cybersecurity career with interactive roadmaps, comprehensive job role information, and data-driven salary insights from around the world.",
  keywords: ["cybersecurity", "career", "roadmap", "salary", "jobs", "security", "penetration testing", "SOC", "cloud security"],
  authors: [{ name: "CyberSecurity Universe" }],
  creator: "CyberSecurity Universe",
  publisher: "CyberSecurity Universe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cybersecurityuniverse.com",
    title: "CyberSecurity Universe - Roadmaps, Roles & Salary Insights",
    description: "Navigate your cybersecurity career with interactive roadmaps, comprehensive job role information, and data-driven salary insights.",
    siteName: "CyberSecurity Universe",
  },
  twitter: {
    card: "summary_large_image",
    title: "CyberSecurity Universe",
    description: "Navigate your cybersecurity career with interactive roadmaps and salary insights.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
