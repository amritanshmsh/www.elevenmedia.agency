"use client";
import { motion } from "framer-motion";

const services = [
  { name: "Social Media Strategy", slug: "social-media-strategy" },
  { name: "Content Creation", slug: "content-creation" },
  { name: "Paid Ads Management", slug: "paid-ads-management" },
  { name: "Website Creation", slug: "website-creation" },
  { name: "Social Media Management", slug: "social-media-management" },
  { name: "Storytelling & Brand Narratives", slug: "storytelling" },
  { name: "Ad Creation", slug: "ad-creation" },
  { name: "Influencer Marketing", slug: "influencer-marketing" },
  { name: "SEO & Website Optimization", slug: "seo-optimization" },
  { name: "Email Marketing", slug: "email-marketing" },
  { name: "Video Production", slug: "video-production" },
  { name: "Community Management", slug: "community-management" },
  { name: "Branding & Design", slug: "branding-design" },
  { name: "Analytics & Reporting", slug: "analytics-reporting" },
  { name: "Growth Hacking", slug: "growth-hacking" },
  { name: "Conversion Rate Optimization", slug: "conversion-optimization" }
];

export default function WhatWeDo() {
  return (
    <section className="w-full bg-white py-20 px-6 text-center">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="inline-block bg-purple-100 text-purple-700 font-semibold px-4 py-1 rounded-full uppercase text-sm mb-4">
          What We Do
        </span>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          You’ve Got Growth Goals? Let’s Build the Playbook.
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          Eleven delivers sharp, full-stack social media strategies to move your brand from noise to domination.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={`/services#${service.slug}`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full cursor-pointer font-medium transition-colors ${
                index % 3 === 0
                  ? "bg-purple-700 text-white hover:bg-purple-800"
                  : index % 3 === 1
                  ? "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  : "bg-purple-200 text-purple-800 hover:bg-purple-300"
              }`}
            >
              {service.name}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}