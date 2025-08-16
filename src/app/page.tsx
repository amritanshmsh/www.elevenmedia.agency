import CaseStudy from "./Components/CaseStudy";
import GetAudited from "./Components/GetAudited";
import Hero from "./Components/Hero";
import HowItWorks from "./Components/HowItWorks";
import Testimonials from "./Components/Testimonals";
import WhatWeDo from "./Components/Whatwedo";
import YourGrowth from "./Components/YourGrowth";

export default function Home() {
  return (
    <div className="bg-white">
     <Hero />
     <HowItWorks />
     <GetAudited />
     <WhatWeDo />
     <YourGrowth />
     <CaseStudy />
     <Testimonials />
    </div>
  );
}
