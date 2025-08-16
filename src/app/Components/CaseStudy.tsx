"use client";
import caseStudies from "@/data/casestudy.json";

export default function CaseStudy() {
  return (
    <section id="casestudies" className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-purple-100 text-purple-700 font-semibold px-4 py-2 rounded-full uppercase text-sm mb-6">
            Success Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Real Results, Real Growth
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From struggling startups to breakthrough brands — see how we&apos;ve transformed businesses with data-driven strategies.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <div className="h-48 bg-purple-600 relative overflow-hidden">
                <img 
                  src={study.heroImage}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-sm font-medium text-purple-700">{study.readingTime}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3 text-sm text-gray-500">
                  <span>{study.author}</span>
                  <span>•</span>
                  <span>{study.date}</span>
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                  {study.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {study.subtitle}
                </p>

                <a
                  href={`/casestudy/${study.slug}`}
                  className="inline-flex items-center gap-2 bg-purple-700 text-white px-4 py-2 rounded-lg font-medium hover:bg-purple-800 transition-colors duration-200"
                >
                  Read Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">Ready to become our next success story?</p>
          <a 
            href="/contactform" 
            className="inline-flex items-center gap-2 bg-purple-700 text-white px-8 py-3 rounded-xl font-bold hover:bg-purple-800 transition-colors duration-200"
          >
            Start Your Transformation
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
