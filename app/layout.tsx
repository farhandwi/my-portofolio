import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { structuredData } from "@/lib/data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Farhan Dwi Septian | Software Engineer",
  description: "Building enterprise-grade systems with a focus on performance and security. Expert in Laravel, Node.js, PostgreSQL, and modern web technologies.",
  keywords: ["Software Engineer", "Full Stack Developer", "Backend Developer", "Laravel", "Node.js", "React", "Next.js", "PostgreSQL"],
  authors: [{ name: "Farhan Dwi Septian" }],
  creator: "Farhan Dwi Septian",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://farhandwi.dev",
    title: "Farhan Dwi Septian | Software Engineer",
    description: "Building enterprise-grade systems with a focus on performance and security.",
    siteName: "Farhan Dwi Septian Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Dwi Septian | Software Engineer",
    description: "Building enterprise-grade systems with a focus on performance and security.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
