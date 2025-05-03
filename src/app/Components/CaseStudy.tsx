"use client";
import * as React from "react";
import { motion } from "framer-motion";
import caseStudies from "@/data/casestudy.json";

export default function CaseStudy() {
  return (
    <section id="casestudies" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our Success Stories
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          See how Eleven has helped brands go beyond ordinary — delivering measurable results and transformative growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <motion.div
              key={study.slug}
              className="bg-white rounded-lg shadow p-6 text-left transition transform hover:-translate-y-1 hover:shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{study.title}</h3>
              <p className="text-gray-800 mb-4">{study.subtitle}</p>
              <a
                href={`/casestudy/${study.slug}`}
                className="text-purple-700 font-semibold hover:underline"
              >
                Read Full Case Study →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
