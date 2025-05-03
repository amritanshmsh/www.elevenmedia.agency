export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        {/* About Eleven */}
        <div className="md:col-span-1">
          <h3 className="text-2xl font-extrabold mb-2 tracking-wide">Eleven</h3>
          <p className="text-purple-200 text-sm">
            Eleven is a cutting-edge social media marketing agency, dedicated to helping brands go beyond ordinary with bold strategies, data-driven insights, and creative storytelling.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Quick Links</h4>
          <ul className="space-y-2 text-purple-200">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/services" className="hover:text-white transition">Services</a></li>
            <li><a href="/process" className="hover:text-white transition">Process</a></li>
            <li><a href="/#casestudies" className="hover:text-white transition">Case Studies</a></li>
            <li><a href="/#timeline" className="hover:text-white transition">Timeline</a></li>
            <li><a href="/contactform" className="hover:text-white transition">Book Call</a></li>
          </ul>
        </div>

        {/* Specialties - Paid & Owned Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Specialties</h4>
          <ul className="space-y-2 text-purple-200">
            <li>Google Ads Agency</li>
            <li>YouTube Ads Agency</li>
            <li>LinkedIn Ads Agency</li>
            <li>Bing Ads Agency</li>
            <li>Technical SEO</li>
            <li>Content Strategy</li>
          </ul>
        </div>

        {/* Specialties - Creative & Growth */}
        <div>
          <h4 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">&nbsp;</h4>
          <ul className="space-y-2 text-purple-200">
            <li>Ad Creative</li>
            <li>Video Marketing</li>
            <li>Strategic Messaging</li>
            <li>Growth Marketing</li>
            <li>Performance Marketing</li>
            <li>Startup Marketing</li>
          </ul>
        </div>
      </div>

      {/* Bottom credit */}
      <div className="mt-12 border-t border-purple-700 pt-4 text-center text-purple-300 text-sm">
        © {new Date().getFullYear()} Eleven | All Rights Reserved
      </div>

      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-700 opacity-20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-800 opacity-20 rounded-full blur-3xl animate-ping"></div>
    </footer>
  );
}