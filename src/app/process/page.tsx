"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "01 — Discover & Diagnose",
    bold: "We start with radical empathy.",
    desc: "Deep brand audits, market research, competitive mapping, and social listening reveal where you stand and where the whitespace lives.",
    image: "/process-discover.jpg",
  },
  {
    title: "02 — Strategy Blueprint",
    bold: "Data‑backed strategy, zero guesswork.",
    desc: "Audience personas, channel mix, brand voice, content pillars, and a cross‑platform calendar engineered to hit the right people at the right moment.",
    image: "/images/process-strategy.jpg",
  },
  {
    title: "03 — Creative & A/B Labs",
    bold: "Ideas are nothing without experiments.",
    desc: "Our studio churns out thumb‑stoppers—videos, carousels, reels—while the growth lab runs multivariate A/B tests on hooks, CTAs, and formats to unearth winners fast.",
    image: "/images/process-ab.jpg",
  },
  {
    title: "04 — Launch & Learn",
    bold: "Every post is a data point.",
    desc: "We deploy, monitor in real‑time, and pivot on micro‑signals: CPM fluctuations, hook drop‑off, sentiment spikes. Nothing ships without a metric to own.",
    image: "/images/process-launch.jpg",
  },
  {
    title: "05 — Scale & Repeat",
    bold: "Double‑down on what moves the needle.",
    desc: "Winning creatives get production muscle, budgets shift to high‑ROI channels, retargeting kicks in, and monthly reports translate data into board‑room clarity.",
    image: "/images/process-scale.jpg",
  },
  {
    title: "06 — Community & Retention",
    bold: "Fans are the best funnel.",
    desc: "We nurture loyalty with two‑way conversations, gated communities, and surprise‑and‑delight moments that transform followers into evangelists.",
    image: "/images/process-community.jpg",
  },
  {
    title: "07 — Intelligence Loop",
    bold: "Insights fuel the next iteration.",
    desc: "Monthly growth summits turn raw data into quarterly roadmaps, ensuring the engine never idles and your edge stays razor‑sharp.",
    image: "/images/process-intel.jpg",
  },
];

export default function ProcessPage() {
  return (
    <main className="relative overflow-hidden">
      {/* BG gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900 -z-10" />

      {/* Glow orbs */}
      <div className="absolute -top-16 -left-20 w-96 h-96 bg-purple-600 rounded-full opacity-30 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] bg-purple-500 rounded-full opacity-20 blur-3xl -z-10" />

      {/* Hero */}
      <section className="px-6 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
        >
          Our Process: <span className="text-purple-300">From Scroll to Superfan</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto max-w-2xl text-lg md:text-xl text-purple-200"
        >
          A battle‑tested growth engine that merges sharp strategy, addictive creative, ruthless optimisation, and community flywheels—so your brand owns every scroll, swipe, and share.
        </motion.p>
      </section>

      {/* Steps */}
      <section className="max-w-7xl mx-auto px-6 py-12 space-y-24">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            id={step.title.toLowerCase().replace(/\s+/g, "-")}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              i % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative md:max-w-md lg:max-w-lg"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={600}
                height={600}
                className="rounded-xl shadow-lg object-cover w-full h-auto"
              />
            </motion.div>

            {/* Text */}
            <div className="text-white">
              <h2 className="text-xl md:text-2xl font-semibold uppercase tracking-wider mb-2 text-purple-300">
                {step.title}
              </h2>
              <p className="text-2xl md:text-3xl font-bold mb-4">{step.bold}</p>
              <p className="text-purple-200 leading-relaxed">{step.desc}</p>
              <ul className="mt-4 space-y-1 text-sm text-purple-300">
                <li>✓ KPI owner assigned</li>
                <li>✓ Tool stack synced</li>
                <li>✓ Timeline locked</li>
              </ul>
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.a
          href="/contactform"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block rounded-full bg-white text-purple-800 font-semibold px-10 py-4 shadow-lg hover:bg-purple-50 transition"
        >
          Get Your Free Action Plan
        </motion.a>
      </section>
    </main>
  );
}
