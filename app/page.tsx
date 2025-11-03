// app/page.tsx

import HeroVideo from "./components/HeroVideo";

import InfidelityCasePricing from "./components/InfidelityCasePricing";
import TestimonialsAccordion from "@/app/components/TestimonialsAccordion";
import AboutDetective from "./components/AboutDetective";
import ServiceCards from "./components/ServiceCards";
import Reasons from "./components/Reasons";
import ConsultNow from "./components/ConsultNow";

export default function Home() {
  return (
    <>
      {/* 🔹 Hero・サービス紹介・お客様の声など */}
     <div className="w-screen">
          <HeroVideo />
        </div>
      <AboutDetective />
      <Reasons />
      <ServiceCards />
      <TestimonialsAccordion />
      <InfidelityCasePricing />
      <ConsultNow />

     {/* 🔹 Hero・サービス紹介・お客様の声など
        <div className="w-screen">
          <HeroVideo />
        </div>
 */}
    
     
    </>
  );
}
