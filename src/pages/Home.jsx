import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import WhatWeDo from "@/components/WhatWeDo";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#EAF3FB]">
      <Header />
      <main id="main-content" tabIndex={-1}>
      <Hero />
      <WhatWeDo />
      <WhyChooseUs />
      <CTASection />
      </main>
      <Footer />
    </div>
  );
}