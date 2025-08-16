"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-purple-50 min-h-screen flex items-start pt-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
        <div className="absolute top-10 right-20 w-80 h-80 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-300 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,_rgb(147_51_234)_1px,_transparent_0)] bg-[length:50px_50px]"></div>
        </div>

        {/* Large fading design elements */}
        <div className="absolute -top-20 -left-20 w-96 h-96 opacity-5 animate-pulse" style={{animationDelay: '1s'}}>
          <svg viewBox="0 0 200 200" className="w-full h-full text-purple-400">
            <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.8"/>
            <circle cx="100" cy="100" r="50" fill="none" stroke="currentColor" strokeWidth="0.6"/>
            <circle cx="100" cy="100" r="30" fill="currentColor" opacity="0.1"/>
          </svg>
        </div>
        
        <div className="absolute top-1/4 -right-32 w-[500px] h-[500px] opacity-3 animate-pulse" style={{animationDelay: '3s'}}>
          <svg viewBox="0 0 200 200" className="w-full h-full text-purple-300">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            <circle cx="100" cy="100" r="20" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] opacity-4 animate-pulse" style={{animationDelay: '5s'}}>
          <svg viewBox="0 0 200 200" className="w-full h-full text-purple-300">
            <path d="M100 0 L200 100 L100 200 L0 100 Z" fill="currentColor" opacity="0.3"/>
            <path d="M100 20 L180 100 L100 180 L20 100 Z" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </svg>
        </div>

        <div className="absolute top-0 right-0 w-72 h-72 opacity-6 animate-pulse" style={{animationDelay: '2s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-300">
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(45 50 50)"/>
            <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="0.3" transform="rotate(45 50 50)"/>
          </svg>
        </div>

        <div className="absolute -bottom-32 -right-20 w-[600px] h-[600px] opacity-2 animate-pulse" style={{animationDelay: '4s'}}>
          <svg viewBox="0 0 200 200" className="w-full h-full text-purple-400">
            <g transform="translate(100,100)">
              <polygon points="0,-80 75,60 -75,60" fill="currentColor" opacity="0.2"/>
              <polygon points="0,-60 55,45 -55,45" fill="none" stroke="currentColor" strokeWidth="0.3"/>
              <polygon points="0,-40 35,30 -35,30" fill="none" stroke="currentColor" strokeWidth="0.3"/>
            </g>
          </svg>
        </div>

        <div className="absolute top-1/3 left-0 w-80 h-80 opacity-4 animate-pulse" style={{animationDelay: '6s'}}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-purple-200">
            <path d="M50 5 L90 50 L50 95 L10 50 Z" fill="currentColor" opacity="0.2"/>
            <path d="M50 15 L80 50 L50 85 L20 50 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
            <path d="M50 25 L70 50 L50 75 L30 50 Z" fill="none" stroke="currentColor" strokeWidth="0.4"/>
          </svg>
        </div>
      </div>
      
      <div className="relative z-10 mx-auto max-w-6xl px-6 pb-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-8 text-sm font-semibold text-purple-700 bg-purple-100 rounded-full border border-purple-200"
          >
            <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse"></span>
            AI-Powered Growth Solutions
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight text-gray-900 mb-8 tracking-tight">
            We Take Ecommerce Brands Beyond{" "}
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 animate-gradient">10/10</span>
              <div className="absolute -bottom-2 left-0 right-0 h-4 bg-gradient-to-r from-purple-200 to-purple-300 -skew-y-1 -z-10 rounded-lg"></div>
            </span>
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-gray-900">—With AI That Works.</span>
          </h1>

          <motion.p
            className="mt-6 max-w-4xl mx-auto text-xl sm:text-2xl text-gray-600 leading-relaxed font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We don't just grow brands. We{" "}
            <span className="text-purple-700 font-bold">scale them</span>, using proven AI and data.
          </motion.p>

          <motion.div
            className="mt-16 flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="/contactform"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 rounded-2xl shadow-2xl hover:shadow-purple-500/40 transition-all duration-300 border border-purple-500/20 backdrop-blur-sm"
            >
              <span className="relative z-10 flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Free Audit
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            
            <motion.a
              href="/process"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-purple-700 bg-white/80 backdrop-blur-sm border-2 border-purple-300 rounded-2xl hover:bg-white hover:border-purple-500 shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              See How It Works
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
