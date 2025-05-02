export default function CaseStudy() {
  return (
    <section className="w-full bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          Our Success Stories
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          See how Eleven has helped brands go beyond ordinary — delivering measurable results and transformative growth.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4">Brand A: +240% Engagement</h3>
            <p className="text-gray-600 mb-4">
              We revamped Brand A’s social strategy, focusing on authentic storytelling and dynamic visuals, boosting their engagement by 240% in just 3 months.
            </p>
            <a href="/case-studies/brand-a" className="text-purple-700 font-semibold hover:underline">
              Read Full Case Study →
            </a>
          </div>

          {/* Case 2 */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4">Brand B: 3x ROI on Ads</h3>
            <p className="text-gray-600 mb-4">
              Our targeted ad campaigns and A/B testing delivered a 3x return on investment for Brand B, helping them scale rapidly in a competitive market.
            </p>
            <a href="/case-studies/brand-b" className="text-purple-700 font-semibold hover:underline">
              Read Full Case Study →
            </a>
          </div>

          {/* Case 3 */}
          <div className="bg-white rounded-lg shadow p-6 text-left">
            <h3 className="text-2xl font-semibold mb-4">Brand C: Viral Growth</h3>
            <p className="text-gray-600 mb-4">
              Eleven’s creative team crafted a viral campaign for Brand C, generating millions of organic impressions and significantly boosting brand awareness.
            </p>
            <a href="/case-studies/brand-c" className="text-purple-700 font-semibold hover:underline">
              Read Full Case Study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
