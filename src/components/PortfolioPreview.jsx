import React from "react";
import { motion } from "framer-motion";

const projects = [
  { img: "/project1.jpg", title: "Industrial Staircase", details: "Steel, 2023" },
  { img: "/project2.jpg", title: "Custom Railings", details: "Aluminum, 2022" },
  { img: "/project3.jpg", title: "Machine Frame", details: "Stainless, 2023" },
  { img: "/project4.jpg", title: "Architectural Art", details: "Mixed Metals, 2024" },
];

export default function PortfolioPreview() {
  return (
    <section className="py-20 bg-gradient-to-r from-industrial via-steel to-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-steel mb-4 text-center drop-shadow">Recent Projects</h2>
          <p className="text-lg text-gray-700 mb-12 text-center max-w-2xl mx-auto">A sample of our recent work, showcasing our range and quality. Click to see more details or view the full gallery.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white flex flex-col items-stretch hover:shadow-2xl hover:scale-105 transition-transform duration-200">
                <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
                <div className="flex-1 flex flex-col justify-between p-4">
                  <div>
                    <h3 className="text-xl font-bold text-safety mb-1">{project.title}</h3>
                    <p className="text-gray-600 mb-2">{project.details}</p>
                  </div>
                  <a href="/gallery" className="mt-2 inline-block bg-industrial text-white px-4 py-2 rounded hover:bg-blue-900 transition text-sm font-semibold opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 duration-200">View Details</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="/gallery" className="bg-safety text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-orange-600 transition">See Full Gallery</a>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 