

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
            className="w-full max-w-sm rounded-lg shadow-lg relative z-10"
          />
        </div>

        {/* Content (now on the right) */}
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Your compounding growth curve begins here.
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            Enable your team with expert growth strategy, planning, and leadership from a proven growth marketing process and team.
            We have full-stack skills and technical expertise, so we’re not afraid to get in the weeds.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            This includes things like rapid message testing, building amazingly effective web pages, usability testing, ad optimization, A/B testing, and multivariate testing.
            It’s time to move beyond simply implementing tactics and start designing the right process with the right growth strategy.
          </p>
          <a href="/services" className="inline-flex items-center text-purple-700 font-semibold hover:underline">
            Learn more about our services <span className="ml-2">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}