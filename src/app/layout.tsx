import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://www.yash.tech"
  ),
  title: "Yash Dubey | AI/ML Developer & Engineer",
  description:
    "AI/ML-focused Computer Science developer building practical software, AI systems, and technology products.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "256x256" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
  },
  openGraph: {
    title: "Yash Dubey | AI/ML Developer & Engineer",
    description:
      "AI/ML-focused Computer Science developer building practical software, AI systems, and technology products.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.yash.tech",
    siteName: "Yash Dubey",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1024,
        height: 576,
        type: "image/jpeg",
        alt: "Yash Dubey - Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yash Dubey | AI/ML Developer & Engineer",
    description:
      "AI/ML-focused Computer Science developer building practical software, AI systems, and technology products.",
    site: "@YashDubey61",
    creator: "@YashDubey61",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
