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
  metadataBase: new URL('https://www.elevenmedia.agency'),
  title: {
    default: "Eleven Media | Award-Winning Social Media Marketing Agency",
    template: "%s | Eleven Media Agency"
  },
  description:
    "Eleven Media is a globally recognized, award-winning social media marketing agency specializing in SEO, paid ads, creative strategy, and growth marketing. We empower startups, enterprises, and global brands to scale with measurable results.",
  keywords: [
    "Eleven Media",
    "Eleven Media Agency", 
    "social media marketing",
    "digital marketing agency",
    "SEO experts",
    "paid advertising",
    "performance marketing",
    "growth hacking",
    "influencer marketing",
    "content marketing",
    "brand strategy",
    "digital transformation"
  ],
  authors: [{ name: "Eleven Media Agency" }],
  creator: "Eleven Media Agency",
  publisher: "Eleven Media Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.elevenmedia.agency",
    siteName: "Eleven Media Agency",
    title: "Eleven Media | Elevate Your Brand with Top Social Media Experts",
    description:
      "Join forces with Eleven Media, the award-winning agency delivering SEO, paid ads, growth marketing, influencer strategies, and creative storytelling to elevate your brand globally.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eleven Media Agency - Elevate Your Brand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleven Media Agency | Global Social Media & SEO Experts",
    description:
      "Elevate your business with Eleven Media's expert SEO, social media marketing, paid ads, and creative strategies.",
    creator: "@ElevenMedia",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
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
        <meta name="theme-color" content="#9333ea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Eleven Media" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Eleven Media Agency",
              "alternateName": "Eleven Media",
              "url": "https://www.elevenmedia.agency",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.elevenmedia.agency/logo.png",
                "width": 400,
                "height": 400
              },
              "description": "Award-winning social media marketing agency specializing in SEO, paid ads, creative strategy, and growth marketing for global brands.",
              "foundingDate": "2020",
              "areaServed": "Worldwide",
              "serviceType": ["Digital Marketing", "Social Media Marketing", "SEO", "Paid Advertising", "Brand Strategy"],
              "sameAs": [
                "https://www.facebook.com/ElevenMedia",
                "https://www.instagram.com/ElevenMedia",
                "https://www.linkedin.com/company/elevenmedia",
                "https://twitter.com/ElevenMedia"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-123-456-7890",
                "contactType": "customer service",
                "email": "hello@elevenmedia.agency",
                "availableLanguage": ["English"]
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "USA",
                "addressLocality": "New York",
                "addressRegion": "NY"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "127",
                "bestRating": "5"
              }
            })
          }}
        />
        
        {/* Website Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Eleven Media Agency",
              "url": "https://www.elevenmedia.agency",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.elevenmedia.agency/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen flex flex-col" role="main">{children}</main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
