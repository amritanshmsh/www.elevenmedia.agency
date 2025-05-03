

"use client";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden">
      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 via-purple-700 to-purple-900 opacity-90 -z-10" />

      {/* subtle glow circles */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-600 rounded-full opacity-30 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10"></div>

      <motion.div
        className="mx-auto max-w-4xl px-6 py-24 text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Elevate Your Brand?
        </h2>
        <p className="text-lg md:text-xl text-purple-200 mb-10 max-w-3xl mx-auto">
          Let’s turn attention into obsession. Book a free strategy call and discover how Eleven can ignite your growth.
        </p>

        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block rounded-full bg-white text-purple-800 font-semibold px-8 py-4 shadow-lg hover:bg-purple-50 transition-colors"
        >
          Kick‑Start with Eleven
        </motion.a>
      </motion.div>
    </section>
  );
}