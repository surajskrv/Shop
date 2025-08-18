import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import ProjectModal from "../components/ProjectModal";
import Header from "../components/Header";
import Footer from "../components/Footer";

const categories = ["All", "Industrial", "Architectural", "Custom Art"];
const images = [
  {
    src: "/project1.jpg",
    title: "Industrial Staircase",
    category: "Industrial",
    description:
      "A heavy-duty, code-compliant staircase built with structural steel, powder-coated for durability and designed for high-traffic industrial environments.",
  },
  {
    src: "/project2.jpg",
    title: "Custom Railings",
    category: "Architectural",
    description:
      "Handcrafted aluminum railings with a brushed finish, engineered for safety while complementing the building's contemporary aesthetic.",
  },
  {
    src: "/project3.jpg",
    title: "Machine Frame",
    category: "Industrial",
    description:
      "Precision-fabricated machine frame with tight tolerances, designed to reduce vibration and improve overall equipment stability.",
  },
  {
    src: "/project4.jpg",
    title: "Architectural Art",
    category: "Custom Art",
    description:
      "A mixed-metal installation combining steel and copper elements, featuring a weathered finish and hidden mounting system.",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filtered = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-steel via-gray-100 to-industrial py-20 px-4 min-h-[70vh]">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-steel mb-4 drop-shadow">Project Gallery</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Browse a selection of our recent projects. Filter by category to see the range of our work.</p>
        </div>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full font-semibold border-2 transition text-lg ${filter === cat ? "bg-safety text-white border-safety" : "bg-white text-steel border-steel hover:bg-safety hover:text-white hover:border-safety"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                key={img.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <InView triggerOnce rootMargin="200px">
                  {({ inView, ref }) => (
                    <button
                      ref={ref}
                      type="button"
                      onClick={() => setSelected(img)}
                      className="relative group rounded-2xl overflow-hidden shadow-lg border border-gray-200 bg-white hover:shadow-2xl hover:scale-105 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-safety"
                    >
                      {inView ? (
                        <img src={img.src} alt={img.title} className="w-full h-48 object-cover" />
                      ) : (
                        <div className="w-full h-48 bg-gray-200 animate-pulse" />
                      )}
                      <div className="absolute inset-0 bg-steel bg-opacity-70 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <h3 className="text-xl font-bold text-safety mb-2">{img.title}</h3>
                        <span className="text-white">{img.category}</span>
                      </div>
                    </button>
                  )}
                </InView>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {selected && (
            <ProjectModal project={selected} onClose={() => setSelected(null)} />
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
} 