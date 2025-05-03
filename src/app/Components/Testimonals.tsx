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
          {/* Testimonial 4 */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              “Partnering with Eleven helped modernize our school’s communications and outreach. Parents and students are now more engaged than ever.”
            </p>
            <div className="font-semibold text-purple-700">Mr. Rajaneesh Singh, Principal, JS Public</div>
          </div>

          {/* Testimonial 5 */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              “We trusted Eleven with a complex product launch, and they delivered beyond expectations. The buzz they created gave us a huge first-mover advantage.”
            </p>
            <div className="font-semibold text-purple-700">Sofia Ahmed, Product Manager, TechNova</div>
          </div>

          {/* Testimonial 6 */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              “Eleven’s storytelling magic helped us connect emotionally with our audience. Their campaigns doubled our engagement rates in under two months.”
            </p>
            <div className="font-semibold text-purple-700">Carlos Ramirez, Marketing Director, FreshLeaf Organics</div>
          </div>
        </div>
      </div>
    </section>
  );
}