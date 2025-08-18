import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import PortfolioPreview from "../components/PortfolioPreview";
import StatsBand from "../components/StatsBand";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesOverview />
      <StatsBand />
      <WhyChooseUs />
      <PortfolioPreview />
      <CTASection />
      <Footer />
    </>
  );
} 