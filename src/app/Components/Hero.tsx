"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* ─── Left copy ─────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Your Brand Is Already Remarkable.&nbsp;
            <span className="block text-purple-700">
              We Turn Attention&nbsp;Into Obsession.
            </span>
          </h1>

          <motion.p
            className="mt-6 max-w-md text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Eleven is the social media growth partner that converts scrolls into
            superfans. We amplify what makes you special and broadcast it to the
            audiences that matter—faster, louder, smarter.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a
              href="/contactform"
              className="inline-flex items-center justify-center rounded-full bg-purple-700 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-purple-800"
            >
              Kick‑Start with Eleven
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-purple-700 px-8 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50"
            >
              See Our Growth Playbook
            </a>
          </motion.div>
        </motion.div>

        {/* ─── Right image block ───────────────────────────────── */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Image
            src="/Wow.jpg"
            alt="Eleven team at work"
            width={700}
            height={800}
            priority
            className="h-80 md:h-96 w-full rounded-xl object-cover"
          />

          {/* Beyond badge */}
          <motion.div
            className="absolute left-4 top-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm max-w-[220px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-xs font-semibold text-gray-700">Viral Magnet</p>
            <p className="mt-1 text-xs text-gray-600">
              Scroll‑stopping ideas that spark shares, saves, and talk‑abouts.
            </p>
          </motion.div>

          {/* Perfect amplified badge */}
          <motion.div
            className="absolute right-4 bottom-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm max-w-[220px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-xs font-semibold text-gray-700">Perfection Reloaded</p>
            <p className="mt-1 text-xs text-gray-600">
              We level‑up your edge, turning fans into lifelong evangelists.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}