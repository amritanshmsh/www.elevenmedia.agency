import Blogs from "./Components/Blogs";
import CaseStudy from "./Components/CaseStudy";
import GetAudited from "./Components/GetAudited";
import Hero from "./Components/Hero";
import Storyline from "./Components/Storyline";
import Testimonials from "./Components/Testimonals";
import Timeline from "./Components/Timeline";
import WhatWeDo from "./Components/Whatwedo";
import YourGrowth from "./Components/YourGrowth";




export default function Home() {
  return (
    <div className="bg-white">
     <Hero />
     <Storyline />
     <GetAudited />
     <WhatWeDo />
     <YourGrowth />
     <CaseStudy />
     <Timeline />
     <Testimonials />
     {/* <Blogs /> */}

    </div>
  );
}
