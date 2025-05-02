export default function Testimonials() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto">
          We’re proud to help brands break through limits. Here’s what a few of our partners have to say about working with Eleven.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              “Eleven transformed our digital presence. Their team’s creativity and precision drove a 2x increase in leads within just 6 weeks.”
            </p>
            <div className="font-semibold text-purple-700">Jane Smith, CMO, Brand A</div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              “Working with Eleven felt like adding a world-class growth team to our company. We saw immediate improvements in ad performance and ROI.”
            </p>
            <div className="font-semibold text-purple-700">John Doe, CEO, Brand B</div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              “The Eleven team is sharp, responsive, and deeply invested in our success. We couldn’t imagine a better growth partner.”
            </p>
            <div className="font-semibold text-purple-700">Emily Johnson, Founder, Brand C</div>
          </div>
        </div>
      </div>
    </section>
  );
}