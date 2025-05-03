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
  title: "Eleven Media | Award-Winning Social Media Marketing Agency",
  description:
    "Eleven Media is a globally recognized, award-winning social media marketing agency specializing in SEO, paid ads, creative strategy, and growth marketing. We empower startups, enterprises, and global brands to scale with measurable results.",
  keywords:
    "Eleven Media, Eleven Media Agency, Eleven social media marketing, best social media agency, SEO experts, paid advertising agency, digital growth, performance marketing, creative branding, growth hacking, influencer marketing, content marketing, social strategy",
  openGraph: {
    title: "Eleven Media | Elevate Your Brand with Top Social Media Experts",
    description:
      "Join forces with Eleven Media, the award-winning agency delivering SEO, paid ads, growth marketing, influencer strategies, and creative storytelling to elevate your brand globally.",
    url: "https://www.elevenmedia.agency",
    siteName: "Eleven Media Agency",
    images: [
      {
        url: "https://www.elevenmedia.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Eleven Media Agency - Elevate Your Brand",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eleven Media Agency | Global Social Media & SEO Experts",
    description:
      "Elevate your business with Eleven Media's expert SEO, social media marketing, paid ads, and creative strategies.",
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
        {/* Organization Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  name: "Eleven Media Agency",
                  url: "https://www.elevenmedia.agency",
                  logo: "https://www.elevenmedia.agency/logo.png",
                  sameAs: [
                    "https://www.facebook.com/ElevenMedia",
                    "https://www.instagram.com/ElevenMedia",
                    "https://www.linkedin.com/company/elevenmedia",
                  ],
                  description:
                    "Eleven Media is an award-winning social media marketing agency offering SEO, paid ads, creative strategy, and digital growth solutions for global brands.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "123 Marketing St",
                    addressLocality: "New York",
                    addressRegion: "NY",
                    postalCode: "10001",
                    addressCountry: "USA",
                  },
                  contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-123-456-7890",
                    contactType: "customer service",
                    email: "hello@elevenmedia.agency",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.elevenmedia.agency",
                    },
                  ],
                },
                {
                  "@type": "LocalBusiness",
                  name: "Eleven Media Agency",
                  image: "https://www.elevenmedia.agency/logo.png",
                  telephone: "+1-123-456-7890",
                  email: "hello@elevenmedia.agency",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "123 Marketing St",
                    addressLocality: "New York",
                    addressRegion: "NY",
                    postalCode: "10001",
                    addressCountry: "USA",
                  },
                  url: "https://www.elevenmedia.agency",
                  sameAs: [
                    "https://www.facebook.com/ElevenMedia",
                    "https://www.instagram.com/ElevenMedia",
                    "https://www.linkedin.com/company/elevenmedia",
                  ],
                  description:
                    "Award-winning social media marketing agency specializing in SEO, paid ads, creative strategy, and growth marketing.",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900`}>
        <Navbar />
        <main className="min-h-screen flex flex-col">{children}</main>
        <CallToAction />
        <Footer />
      </body>
    </html>
  );
}
