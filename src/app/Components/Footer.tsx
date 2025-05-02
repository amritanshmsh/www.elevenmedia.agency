export default function Footer() {
    return (
      <footer className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 text-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          {/* Logo + Tagline */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-extrabold mb-4 tracking-wide">Eleven</h3>
            <p className="text-purple-200">
              Beyond ordinary. Beyond perfect. We craft stories, elevate brands, and create experiences that stand out.
            </p>
          </div>
  
          {/* Navigation Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-purple-200 hover:text-white transition">Home</a>
              </li>
              <li>
                <a href="/services" className="text-purple-200 hover:text-white transition">Services</a>
              </li>
              <li>
                <a href="/about" className="text-purple-200 hover:text-white transition">About</a>
              </li>
              <li>
                <a href="/contact" className="text-purple-200 hover:text-white transition">Contact</a>
              </li>
            </ul>
          </div>
  
          {/* Social + Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-purple-500 pb-2">Connect With Us</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://www.linkedin.com/company/elevenagency" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">LinkedIn</a>
              </li>
              <li>
                <a href="https://medium.com/@elevenagency" target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-white transition">Medium</a>
              </li>
              <li>
                <a href="mailto:hello@elevenmedia.agency" className="text-purple-200 hover:text-white transition">hello@elevenmedia.agency</a>
              </li>
            </ul>
          </div>
        </div>
  
        {/* Decorative line + final credit */}
        <div className="mt-12 border-t border-purple-700 pt-4 text-center text-purple-300 text-sm">
          © {new Date().getFullYear()} Eleven | We’re a division of Conatus Bharat!
        </div>
  
        {/* Floating background shapes */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-purple-700 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-52 h-52 bg-purple-800 opacity-20 rounded-full blur-3xl"></div>
      </footer>
    );
  }