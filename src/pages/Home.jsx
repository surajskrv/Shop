import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import StatsBand from "../components/StatsBand";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";
import BeforeAfter from "../components/BeforeAfter"; // Import the new component

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <StatsBand />
      <ServicesOverview />
      <WhyChooseUs />
      <BeforeAfter /> {/* Add the new component here */}
      <CTASection />
      <Footer />
    </>
  );
}