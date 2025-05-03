"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
  {
    title: "01 — Discover & Diagnose",
    bold: "We start with radical empathy.",
    desc: "Deep brand audits, market research, competitive mapping, and social listening reveal where you stand and where the whitespace lives. We surface every hidden insight before we lift a pixel.",
    image: "/images/process-discover.jpg",
    bullets: [
      "In‑depth social listening dashboard",
      "Competitor gap matrix",
      "Brand sentiment heat‑map"
    ]
  },
  {
    title: "02 — Strategy Blueprint",
    bold: "Data‑backed strategy, zero guesswork.",
    desc: "We translate insights into an airtight roadmap: personas, channel mix, content pillars, voice guidelines, and a 90‑day calendar that syncs every touchpoint.",
    image: "/images/process-strategy.jpg",
    bullets: [
      "Persona‑driven channel plan",
      "Content‑pillar matrix",
      "90‑day rollout calendar"
    ]
  },
  {
    title: "03 — Creative & A/B Labs",
    bold: "Ideas are nothing without experiments.",
    desc: "Our studio cranks out thumb‑stoppers while the Growth Lab stress‑tests hooks, CTAs, and formats in rapid micro‑cycles to find the unbeatable combo.",
    image: "/images/process-ab.jpg",
    bullets: [
      "Rapid mock‑up sprints",
      "Hook & headline variations",
      "Real‑time performance board"
    ]
  },
  {
    title: "04 — Launch & Learn",
    bold: "Every post is a data point.",
    desc: "We deploy, monitor in real‑time, and pivot on micro‑signals—CPM dips, retention spikes, comment sentiment—nothing escapes our war‑room dashboards.",
    image: "/images/process-launch.jpg",
    bullets: [
      "24‑hour feedback loop",
      "Live metric war‑room",
      "Micro‑pivot protocol"
    ]
  },
  {
    title: "05 — Scale & Repeat",
    bold: "Double‑down on what moves the needle.",
    desc: "Winning creatives get budget muscle, new audiences, and retargeting layers. Monthly executive reports translate raw data into clear board‑room wins.",
    image: "/images/process-scale.jpg",
    bullets: [
      "Budget reallocation engine",
      "Winner creative cloning",
      "Executive scorecard report"
    ]
  },
  {
    title: "06 — Community & Retention",
    bold: "Fans are the best funnel.",
    desc: "We turn followers into evangelists with gated groups, surprise‑and‑delight drops, and loyalty ladders that keep the buzz compounding.",
    image: "/images/process-community.jpg",
    bullets: [
      "Private insider groups",
      "Surprise & delight drops",
      "Loyalty‑ladder system"
    ]
  },
  {
    title: "07 — Intelligence Loop",
    bold: "Insights fuel the next iteration.",
    desc: "Quarterly growth summits refine the roadmap while our edge‑tracking radar hunts for next‑gen opportunities before competitors blink.",
    image: "/images/process-intel.jpg",
    bullets: [
      "Quarterly growth summits",
      "Insights‑to‑roadmap pipeline",
      "Continuous edge tracking"
    ]
  }
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
              {step.bullets && (
                <ul className="mt-4 space-y-1 text-sm text-purple-300">
                  {step.bullets.map((b) => (
                    <li key={b}>✓ {b}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <motion.a
          href="/contact"
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
