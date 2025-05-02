"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
        {/* ─── Left copy ─────────────────────────────────────────── */}
        <div>
          <h1 className="text-4xl font-extrabold leading-tight text-gray-900 sm:text-5xl">
            Your Brand is Already Exceptional.&nbsp;
            <span className="block text-purple-700">
              Eleven Takes You Beyond.
            </span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-gray-600">
            At Eleven, we don’t just elevate brands — we amplify what’s already
            extraordinary. We take your perfection, your passion, and push it past
            the limits, creating digital experiences that are not just seen, but remembered.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-purple-700 px-8 py-3 text-sm font-semibold text-white shadow hover:bg-purple-800"
            >
              Work with Eleven
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-purple-700 px-8 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50"
            >
              Explore Our Services
            </a>
          </div>
        </div>

        {/* ─── Right image block ───────────────────────────────── */}
        <div className="relative">
          <Image
            src="/Wow.jpg"
            alt="Eleven team at work"
            width={700}
            height={800}
            priority
            className="h-80 md:h-96 w-full rounded-xl object-cover"
          />

          {/* Beyond badge */}
          <div className="absolute left-4 top-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm max-w-[220px]">
            <p className="text-xs font-semibold text-gray-700">🚀 Beyond Ordinary</p>
            <p className="mt-1 text-xs text-gray-600">
              We push your brand beyond the expected, into the unforgettable.
            </p>
          </div>

          {/* Perfect amplified badge */}
          <div className="absolute right-4 bottom-6 rounded-lg bg-white/90 p-4 shadow-lg backdrop-blur-sm max-w-[220px]">
            <p className="text-xs font-semibold text-gray-700">✨ Perfect, Amplified</p>
            <p className="mt-1 text-xs text-gray-600">
              We know you’re already exceptional — we help you go further.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}