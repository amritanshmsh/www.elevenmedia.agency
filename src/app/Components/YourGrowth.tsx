export default function YourGrowth() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image (now on the left) */}
        <div className="flex justify-center relative">
          <div className="absolute w-48 h-48 bg-purple-100 rounded-lg -top-4 -left-4 transform rotate-6 opacity-20"></div>
          <div className="absolute w-32 h-32 bg-purple-200 rounded-lg top-12 left-12 transform rotate-12 opacity-20"></div>
          <div className="absolute w-24 h-24 bg-purple-300 rounded-lg bottom-8 right-8 transform rotate-45 opacity-20"></div>
          <img
            src="/istockphoto-1224586881-612x612.jpg"
            alt="Team Meeting"
            className="w-full max-w-lg rounded-lg shadow-xl relative z-10 border-4 border-purple-300"
          />
        </div>

        {/* Content (now on the right) */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Build Your Growth Flywheel With Eleven.
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Peek under the hood of our proven growth framework — strategy, creative, experimentation, and relentless optimisation — then walk away with a custom, no‑fluff action plan built just for your brand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="/process"
              className="inline-flex items-center justify-center rounded-full bg-purple-700 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-purple-800 transition"
            >
              Our Process
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-purple-700 px-6 py-3 text-sm font-semibold text-purple-700 hover:bg-purple-50 transition"
            >
              Get Your Free Action Plan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}