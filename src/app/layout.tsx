import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CallToAction from "./Components/CalltoAction";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Eleven Media Agency | Social Media Marketing Experts",
  description:
    "Eleven is a cutting-edge social media marketing agency helping brands grow with creative storytelling, paid ads, SEO, and growth marketing. Boost your online presence today.",
  keywords:
    "social media marketing, paid ads, SEO, growth marketing, Eleven Media, digital strategy, content marketing, performance marketing, startup marketing, branding, ad creative",
  openGraph: {
    title: "Eleven Media Agency",
    description:
      "Partner with Eleven for expert social media, paid ads, SEO, and creative strategies to elevate your brand.",
    url: "https://www.elevenmedia.agency",
    siteName: "Eleven Media Agency",
    images: [
      {
        url: "https://www.elevenmedia.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eleven Media Agency - Boost Your Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleven Media Agency",
    description:
      "Expert social media marketing, paid ads, SEO, and growth strategies to help your brand thrive.",
    site: "@ElevenMedia",
    images: ["https://www.elevenmedia.agency/og-image.jpg"],
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
    <html lang="en" dir="ltr">
      <head>
        <link rel="canonical" href="https://www.elevenmedia.agency" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
