"use client";
import { motion } from "framer-motion";

export default function GetAudited() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-700 uppercase tracking-widest font-semibold mb-4">
            Free Audit | Zero Risk
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Unlock Your Marketing Edge.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Most brands bleed <span className="font-bold">76% of their ad spend</span> on underperforming campaigns.
            We dissect, diagnose, and deliver a power-packed action plan — for free.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            Get sharp, no-nonsense insights on where your budget leaks and how to plug them for unstoppable growth.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow transition duration-300"
          >
            Claim Your Free Audit
          </motion.button>
        </motion.div>

        {/* Right image with animated background boxes */}
        <motion.div
          className="flex justify-center relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="absolute w-52 h-52 bg-purple-100 rounded-lg -top-4 -left-4 transform rotate-6 opacity-20"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute w-40 h-40 bg-purple-200 rounded-lg top-12 left-12 transform rotate-12 opacity-20"
            animate={{ rotate: [0, -20, 20, 0] }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          ></motion.div>
          <motion.div
            className="absolute w-32 h-32 bg-purple-300 rounded-lg bottom-8 right-8 transform rotate-45 opacity-20"
            animate={{ rotate: [0, 30, -30, 0] }}
            transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          ></motion.div>

          <motion.div
            className="relative z-10 border-4 border-purple-300 rounded-xl shadow-lg p-2 md:p-4 max-w-lg w-full"
            whileHover={{ scale: 1.02 }}
          >
            <img
              src="/digital-transformation.webp"
              alt="Marketing Audit"
              className="w-full h-auto rounded-lg object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}