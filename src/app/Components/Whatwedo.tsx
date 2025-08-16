"use client";
import { motion } from "framer-motion";

const services = [
  { name: "Website Creation", slug: "website-creation" },
  { name: "Social Media Management", slug: "social-media-management" },
  { name: "Storytelling & Brand Narratives", slug: "storytelling" },
  { name: "Influencer Marketing", slug: "influencer-marketing" },
  { name: "SEO & Website Optimization", slug: "seo-optimization" },
  { name: "Email Marketing", slug: "email-marketing" },
  { name: "Branding & Design", slug: "branding-design" },
  { name: "Analytics & Reporting", slug: "analytics-reporting" },
  { name: "Growth Hacking", slug: "growth-hacking" },
  { name: "Conversion Rate Optimization", slug: "conversion-optimization" },
  { name: "Media Buying", slug: "media-buying" },
  { name: "Video Editing", slug: "video-editing" }
];

export default function WhatWeDo() {
  return (
    <section id="whatwedo" className="w-full bg-white py-20 px-6 text-center">
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
          {services.map((service, index) => {
            // Create alternating rhythm: even indices get dark purple, odd indices get light purple
            const styleClass = index % 2 === 0
              ? "bg-purple-700 text-white"
              : "bg-purple-100 text-purple-700";

            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${styleClass}`}
              >
                {service.name}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}