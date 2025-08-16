"use client";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      day: "One",
      title: "Setup & Access",
      description: "Create a WhatsApp group for seamless communication and quick updates.",
      details: "Grant access to the ad account, Shopify (if applicable), and content bank for smooth collaboration.",
      outcome: "We're all set to move forward efficiently with clear communication."
    },
    {
      day: "Two", 
      title: "Brand Understanding & Strategy Planning",
      description: "Understand the brand's USP, target avatar, and market positioning to ensure we're aligned with your goals.",
      details: "Assess the ad account baseline: Review past performance metrics to set realistic benchmarks for success. Create a 30-day action plan based on insights from the brand and market analysis to kick off our journey.",
      outcome: "A clear, customized plan to maximize ROI and set achievable milestones."
    },
    {
      day: "Three",
      title: "Onboarding & Plan Alignment", 
      description: "Align on campaign objectives, tools, roles, and expectations for the next steps.",
      details: "Finalize creative direction and ensure the strategy is fully aligned with the brand's goals.",
      outcome: "Everyone is on the same page, and we're ready to hit the ground running."
    },
    {
      day: "Four",
      title: "Creative Development & Campaign Setup",
      description: "Create and optimize ads based on data-backed insights, ensuring they're perfectly tailored to the target audience.",
      details: "Turn ideas into action: Prepare creatives using AI, scientific data, and industry knowledge to drive sales.",
      outcome: "We're launching campaigns that speak directly to your audience and are optimized for success."
    },
    {
      day: "Five",
      title: "Funnel Setup & Campaign Launch",
      description: "Set up the sales funnel: Ensure a smooth journey from ad click to conversion with tailored landing pages, retargeting, and email sequences (if applicable).",
      details: "Launch campaigns and monitor real-time performance. Initial adjustments: Fine-tune targeting, budget, creatives, and the funnel to ensure everything is aligned for maximum impact.",
      outcome: "Your campaign is live and optimized, driving traffic and conversions."
    }
  ];

  return (
    <section id="howitworks" className="bg-gradient-to-br from-gray-50 via-white to-purple-50 py-24 relative overflow-hidden">
      {/* Enhanced Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight tracking-tight max-sm:text-3xl">
            Our Process – <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800">How It Works</span>
          </h2>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto leading-relaxed font-medium max-sm:text-lg max-sm:px-4">
            Our proven 5-step process to launch your campaigns and drive results
          </p>
        </motion.div>

        {/* Enhanced Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Enhanced Timeline line with glow effect - hidden on mobile */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-300 via-purple-500 to-purple-700 rounded-full max-sm:hidden"></div>
          
          {/* Timeline items */}
          <div className="space-y-12 max-sm:space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.day}
                className={`flex items-start ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} max-sm:flex-col max-sm:items-center`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                {/* Mobile step number - only visible on mobile */}
                <div className="w-full sm:hidden mb-4">
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full text-white font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Enhanced Content Card */}
                <div className={`w-7/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'} max-sm:w-full max-sm:px-4`}>
                  <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 hover:border-purple-200 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden max-sm:p-6">
                    {/* Card background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                    
                    {/* Decorative element in unused space - hidden on mobile */}
                    <div className={`absolute ${index % 2 === 0 ? '-left-4' : '-right-4'} top-4 w-2 h-16 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full opacity-20 max-sm:hidden`}></div>
                    
                    <div className="relative z-10">
                      <div className="mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 max-sm:text-xl max-sm:text-center">
                          {step.title}
                        </h3>
                      </div>
                      
                      <p className="text-purple-700 font-semibold mb-4 text-lg leading-relaxed max-sm:text-base max-sm:text-center">
                        {step.description}
                      </p>
                      
                      <p className="text-gray-800 leading-relaxed text-base mb-4 max-sm:text-sm max-sm:text-center">
                        {step.details}
                      </p>

                      {/* Mobile Expected Outcome - only visible on mobile */}
                      <div className="sm:hidden mt-6">
                        <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-4 border border-purple-200 shadow-lg">
                          <p className="text-purple-900 font-semibold text-sm text-center">
                            <span className="text-purple-600 font-bold block mb-2">Expected Outcome:</span> 
                            {step.outcome}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Enhanced Timeline dot - hidden on mobile */}
                <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full border-4 border-white shadow-lg flex items-center justify-center mt-6 max-sm:hidden">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Numbers and Expected Outcome on opposite side - hidden on mobile */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pl-8' : 'pr-8'} flex flex-col items-center justify-start mt-6 max-sm:hidden`}>
                  <div className="relative mb-6">
                    {/* Large step number */}
                    <div className="text-8xl font-black text-purple-100 select-none">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  
                  {/* Expected Outcome below number */}
                  <div className="bg-gradient-to-r from-purple-100 to-purple-50 rounded-xl p-5 border border-purple-200 shadow-lg w-full">
                    <p className="text-purple-900 font-semibold text-sm text-center">
                      <span className="text-purple-600 font-bold block mb-2">Expected Outcome:</span> 
                      {step.outcome}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA */}
        <motion.div
          className="text-center mt-16 max-w-4xl mx-auto max-sm:mt-12 max-sm:px-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-purple-100 via-purple-50 to-white rounded-2xl p-10 border border-purple-200 shadow-xl max-sm:p-6">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 max-sm:text-2xl">
              Ready to scale your business?
            </h3>
            <p className="text-gray-700 text-lg mb-6 max-sm:text-base max-sm:mb-4">
              Let&apos;s get started today and transform your ecommerce success!
            </p>
            <a
              href="/contactform"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 max-sm:px-6 max-sm:py-3 max-sm:text-base"
            >
              Get Started Today →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
