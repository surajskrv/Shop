import React from "react";
import { motion } from "framer-motion";

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

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-r from-industrial via-steel to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-steel mb-4 text-center drop-shadow">Our Metal Fabrication Services</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">From laser cutting to full fabrication, we offer a complete range of services for industrial and commercial clients. Our advanced equipment and skilled team ensure top quality and fast turnaround.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-200 border border-gray-100">
                <div className="mb-4">{service.icon}</div>
                <h3 className="font-bold text-xl mb-2 text-industrial">{service.title}</h3>
                <p className="text-center text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/services" className="text-safety font-semibold hover:underline text-lg">View All Services</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 