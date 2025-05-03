export default function ServicesPage() {
  const services = [
    {
      title: "Social Media Strategy",
      description: "We design data-driven strategies tailored to your audience, ensuring your brand voice cuts through the noise on every platform.",
      points: ["Platform analysis", "Audience segmentation", "Content planning roadmap"],
      image: "/images/service-strategy.jpg",
      slug: "social-media-strategy"
    },
    {
      title: "Content Creation",
      description: "Our creative team delivers scroll-stopping visuals, videos, and posts that drive engagement and reflect your brand’s unique identity.",
      points: ["Branded graphics & videos", "Reels, TikToks, shorts", "Engaging captions & copy"],
      image: "/images/service-content.jpg",
      slug: "content-creation"
    },
    {
      title: "Paid Ads Management",
      description: "We manage high-ROI ad campaigns across social, search, and display networks, optimizing every dollar spent.",
      points: ["Ad targeting & retargeting", "A/B ad testing", "Budget optimization"],
      image: "/images/service-ads.jpg",
      slug: "paid-ads-management"
    },
    {
      title: "Website Creation",
      description: "We craft beautiful, fast, and conversion-focused websites that turn visitors into loyal customers.",
      points: ["Custom design", "SEO-ready build", "Mobile-first, responsive"],
      image: "/images/service-website.jpg",
      slug: "website-creation"
    },
    {
      title: "Social Media Management",
      description: "Our team handles daily posting, community engagement, and reputation management so you stay top-of-mind.",
      points: ["Content calendar management", "Community moderation", "Performance monitoring"],
      image: "/images/service-management.jpg",
      slug: "social-media-management"
    },
    {
      title: "Storytelling & Brand Narratives",
      description: "We help shape your brand’s story, building emotional connections and creating a lasting impression.",
      points: ["Brand voice development", "Narrative crafting", "Emotional hooks"],
      image: "/images/service-storytelling.jpg",
      slug: "storytelling-brand-narratives"
    },
    {
      title: "Ad Creation",
      description: "We create high-performing ad creatives that grab attention and drive action, from static banners to animated videos.",
      points: ["Copywriting", "Design & animation", "Creative testing"],
      image: "/images/service-adcreation.jpg",
      slug: "ad-creation"
    },
    {
      title: "Influencer Marketing",
      description: "We connect you with authentic influencers who can amplify your brand’s reach and credibility.",
      points: ["Influencer identification", "Campaign management", "Performance tracking"],
      image: "/images/service-influencer.jpg",
      slug: "influencer-marketing"
    },
    {
      title: "SEO & Website Optimization",
      description: "We boost your search visibility with on-page SEO, technical audits, and continuous site improvements.",
      points: ["Keyword research", "On-page & technical SEO", "Page speed & UX improvements"],
      image: "/images/service-seo.jpg",
      slug: "seo-website-optimization"
    },
    {
      title: "Email Marketing",
      description: "We craft targeted, automated email sequences that nurture leads and keep customers engaged.",
      points: ["Segmentation & automation", "Design & copywriting", "Performance tracking"],
      image: "/images/service-email.jpg",
      slug: "email-marketing"
    },
    {
      title: "Video Production",
      description: "We produce stunning brand videos, explainers, and social clips that captivate your audience.",
      points: ["Scriptwriting", "Filming & editing", "Platform-optimized delivery"],
      image: "/images/service-video.jpg",
      slug: "video-production"
    },
    {
      title: "Community Management",
      description: "We build and maintain vibrant brand communities, ensuring loyal engagement and fast responses.",
      points: ["Group & forum moderation", "Engagement strategies", "Community analytics"],
      image: "/images/service-community.jpg",
      slug: "community-management"
    },
    {
      title: "Branding & Design",
      description: "We elevate your visual identity with stunning logos, cohesive brand guidelines, and striking designs.",
      points: ["Logo & identity design", "Brand guidelines", "Collateral creation"],
      image: "/images/service-branding.jpg",
      slug: "branding-design"
    },
    {
      title: "Analytics & Reporting",
      description: "We provide deep insights into performance, helping you make data-backed decisions with confidence.",
      points: ["KPI tracking", "Custom dashboards", "Monthly performance reviews"],
      image: "/images/service-analytics.jpg",
      slug: "analytics-reporting"
    },
    {
      title: "Growth Hacking",
      description: "We apply creative, low-cost growth strategies to accelerate your brand’s reach and customer base.",
      points: ["Viral campaigns", "Referral loops", "Rapid experimentation"],
      image: "/images/service-growth.jpg",
      slug: "growth-hacking"
    },
    {
      title: "Conversion Rate Optimization",
      description: "We optimize your funnels, landing pages, and CTAs to turn more visitors into paying customers.",
      points: ["Landing page testing", "Funnel audits", "Call-to-action optimization"],
      image: "/images/service-cro.jpg",
      slug: "conversion-rate-optimization"
    }
  ];

  const bgShapes = [
    "absolute w-44 h-44 bg-purple-100 rounded-full top-10 left-5 opacity-20 -z-10 blur-sm",
    "absolute w-60 h-60 bg-purple-200 rounded-full top-1/3 right-10 opacity-20 -z-10 blur-sm",
    "absolute w-32 h-32 bg-purple-100 rounded-lg bottom-20 left-1/4 rotate-12 opacity-20 -z-10",
    "absolute w-48 h-48 bg-purple-300 rounded-full bottom-10 right-1/3 opacity-20 -z-10 blur-sm",
    "absolute w-36 h-36 bg-purple-200 rounded-lg top-1/2 left-1/2 -translate-x-1/2 opacity-20 -z-10 rotate-6"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      <>
        {bgShapes.map((className, i) => (
          <div key={i} className={className}></div>
        ))}
      </>

      <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-center text-purple-900">
        Our Services
      </h1>

      {services.map((service, index) => (
        <div
          id={service.slug}
          key={index}
          className={`group flex flex-col md:flex-row gap-8 mb-16 items-center ${
            index % 2 === 1 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Image */}
          <div className="relative transition-transform duration-500 group-hover:-translate-y-2 motion-safe:animate-fadeIn md:max-w-md lg:max-w-lg">
            {/* randomised decorative squares */}
            <div className={`absolute w-40 h-40 bg-purple-100 rounded-lg opacity-30 transform rotate-6 ${
              index % 2 === 0 ? "-top-6 -left-6" : "-bottom-6 -right-6"
            }`}></div>
            <div className={`absolute w-24 h-24 bg-purple-200 rounded-lg opacity-20 transform rotate-12 ${
              index % 2 === 0 ? "top-12 right-0" : "bottom-12 left-0"
            }`}></div>

            {/* service image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full rounded-xl shadow-lg relative z-10 motion-safe:animate-fadeIn"
            />
          </div>

          {/* Text Content */}
          <div className="motion-safe:animate-fadeIn">
            <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
              <a href={`#${service.slug}`}>
                {service.title}
              </a>
            </h2>
            <p className="text-gray-700 mb-3">{service.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {service.points.map((point, idx) => (
                <span key={idx} className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-full">
                  {point}
                </span>
              ))}
            </div>
            <a
              href={`#${service.slug}`}
              className="mt-4 inline-block bg-purple-700 text-white px-6 py-2 rounded-lg hover:bg-purple-800 transition-colors duration-300"
            >
              Explore
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}