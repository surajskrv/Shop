import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ServicesOverview from "../components/ServicesOverview";
import WhyChooseUs from "../components/WhyChooseUs";
import PortfolioPreview from "../components/PortfolioPreview";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <PortfolioPreview />
      <Footer />
    </>
  );
} 