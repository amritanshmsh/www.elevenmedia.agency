"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden py-6 md:py-8">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 opacity-90 -z-10" />

      {/* subtle glow circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 rounded-full opacity-30 blur-3xl animate-pulse -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse -z-10"></div>

      <motion.div
        className="mx-auto max-w-6xl px-4 py-8 flex flex-col md:flex-row items-center md:justify-between text-white text-center md:text-left"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="md:w-2/3">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-3 leading-snug">
            Ready to Elevate Your Brand?
          </h2>
          <p className="text-sm md:text-base text-purple-200 mb-6 md:mb-0 max-w-xl">
            Let’s turn attention into obsession. Book a free strategy call and discover how Eleven can ignite your growth.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full bg-white text-purple-800 font-semibold px-6 py-3 shadow-lg hover:bg-purple-50 transition"
          >
            Kick‑Start with Eleven
          </motion.a>
        </div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white opacity-10"></div>
    </section>
  );
}