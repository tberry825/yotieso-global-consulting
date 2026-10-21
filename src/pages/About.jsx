import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import HoustonBased from "@/components/about/HoustonBased";
import WhatSetsUsApart from "@/components/about/WhatSetsUsApart";
import WhoWeWorkWith from "@/components/about/WhoWeWorkWith";
import OurServices from "@/components/about/OurServices";
import OurProcess from "@/components/about/OurProcess";
import AboutFAQ from "@/components/about/AboutFAQ";
import CTASection from "@/components/CTASection";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main-content" tabIndex={-1}>
      <AboutHero />
      <HoustonBased />
      <WhatSetsUsApart />
      <WhoWeWorkWith />
      <OurServices />
      <OurProcess />
      <AboutFAQ />
      <CTASection />
      </main>
      <Footer />
    </div>
  );
}