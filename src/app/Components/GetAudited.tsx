

export default function GetAudited() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left content */}
        <div>
          <p className="text-purple-700 uppercase tracking-widest font-semibold mb-4">
            Top Rated Agency | No Strings Audit
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Most Marketing Budgets Are Wasted—Let’s Fix That
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            After countless audits, we’ve found that <span className="font-bold">76% of marketing spend goes to waste</span>.
            We’ll show you exactly where yours is leaking — and how to fix it fast.
          </p>
          <button className="px-8 py-4 bg-purple-700 hover:bg-purple-800 text-white font-semibold rounded-lg shadow transition duration-300">
            Get Your Free Marketing Audit
          </button>
        </div>

        {/* Right image with frame and background boxes */}
        <div className="flex justify-center relative">
          {/* Background decorative boxes */}
          <div className="absolute w-52 h-52 bg-purple-100 rounded-lg -top-4 -left-4 transform rotate-6 opacity-20"></div>
          <div className="absolute w-40 h-40 bg-purple-200 rounded-lg top-12 left-12 transform rotate-12 opacity-20"></div>
          <div className="absolute w-32 h-32 bg-purple-300 rounded-lg bottom-8 right-8 transform rotate-45 opacity-20"></div>

          {/* Image frame */}
          <div className="relative z-10 border-4 border-purple-300 rounded-xl shadow-lg p-2 md:p-4 max-w-lg w-full">
            <img
              src="/digital-transformation.webp"
              alt="Award Badge"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}