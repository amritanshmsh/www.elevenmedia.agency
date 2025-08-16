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
          {/* Travel Gear Brand Testimonial */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              "Our online store was dead. Eleven changed everything. We went from zero to 20 lakhs revenue in 3 months. Life-changing."
            </p>
            <div className="font-semibold text-purple-700">Rahul Mehta, Founder, TravelGear Pro</div>
          </div>

          {/* Tote Bag Brand Testimonial */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              "Stuck at 15K daily for months. Every agency failed. Eleven made us run out of stock! Now doing 1 lakh daily."
            </p>
            <div className="font-semibold text-purple-700">Priya Sharma, Founder, Luxe Tote Collections</div>
          </div>

          {/* Streetwear Brand Testimonial */}
          <div className="bg-purple-50 rounded-lg shadow p-6 text-left">
            <p className="text-gray-700 mb-4 italic">
              "Hit a wall at 4 lakhs monthly. Eleven's anime campaigns were brilliant. Tripled to 12 lakhs in 2 months."
            </p>
            <div className="font-semibold text-purple-700">Arjun Kapoor, Creative Director, Urban Threads</div>
          </div>
        </div>
      </div>
    </section>
  );
}