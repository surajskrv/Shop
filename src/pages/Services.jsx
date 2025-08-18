import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: (
      <svg className="w-10 h-10 text-industrial" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7h18M3 12h18M3 17h18" /></svg>
    ),
    title: "Laser Cutting",
    desc: "Precision laser cutting for all metals."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-industrial" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
    ),
    title: "CNC Machining",
    desc: "High-accuracy CNC for custom parts."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-industrial" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    title: "Welding",
    desc: "Expert MIG, TIG, and spot welding."
  },
  {
    icon: (
      <svg className="w-10 h-10 text-industrial" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" /></svg>
    ),
    title: "Fabrication",
    desc: "Complete metal fabrication solutions."
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-industrial via-steel to-gray-100 py-20 px-4">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-steel mb-4 drop-shadow">Our Services</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">We offer a full suite of metal fabrication services, from design to delivery. Our advanced equipment and skilled team ensure every project meets the highest standards.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-gray-100">
              <div className="mb-4">{service.icon}</div>
              <h3 className="font-bold text-xl mb-2 text-industrial">{service.title}</h3>
              <p className="text-center text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16">
          <a href="/contact" className="bg-safety text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-orange-600 transition">Request a Custom Quote</a>
        </div>
      </section>
      <Footer />
    </>
  );
} 