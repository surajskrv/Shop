import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { InView } from "react-intersection-observer";
import { FaFilter, FaEye, FaCalendar, FaTag } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectModal from "../components/ProjectModal";

const categories = ["All", "Industrial", "Architectural", "Custom Art"];
const images = [
  { 
    src: "/project1.jpg", 
    title: "Industrial Staircase", 
    category: "Industrial", 
    description: "A robust industrial staircase designed for heavy-duty use in a manufacturing plant. Features non-slip treads and a durable steel frame that can withstand years of heavy traffic and industrial wear.",
    year: "2023",
    materials: "Steel, Powder Coated"
  },
  { 
    src: "/project2.jpg", 
    title: "Custom Railings", 
    category: "Architectural", 
    description: "Elegant custom railings for a modern residential building, combining safety with sophisticated design. Made from polished stainless steel with precision-welded joints and smooth finishes.",
    year: "2022",
    materials: "Stainless Steel"
  },
  { 
    src: "/project3.jpg", 
    title: "Machine Frame", 
    category: "Industrial", 
    description: "Precision-engineered machine frame providing a stable and rigid base for high-speed machinery. Constructed from reinforced steel alloys with exacting tolerances for optimal performance.",
    year: "2023",
    materials: "Reinforced Steel"
  },
  { 
    src: "/project4.jpg", 
    title: "Architectural Art", 
    category: "Custom Art", 
    description: "A unique architectural art piece commissioned for a public space, blending abstract forms with industrial materials. Features intricate laser-cut details and weathered steel finishes.",
    year: "2024",
    materials: "Mixed Metals"
  },
  { 
    src: "/project5.jpg", 
    title: "Factory Equipment", 
    category: "Industrial", 
    description: "Heavy-duty factory equipment components designed for continuous operation in demanding industrial environments. Built with durability and efficiency in mind.",
    year: "2023",
    materials: "Industrial Steel"
  },
  { 
    src: "/project6.jpg", 
    title: "Modern Facade", 
    category: "Architectural", 
    description: "Contemporary building facade featuring custom metal panels and structural elements. Combines aesthetic appeal with functional design for modern architecture.",
    year: "2024",
    materials: "Aluminum, Steel"
  },
  { 
    src: "/project7.jpg", 
    title: "Sculptural Installation", 
    category: "Custom Art", 
    description: "Large-scale sculptural installation showcasing the artistic potential of metal fabrication. Features flowing forms and dynamic shapes that create visual interest from all angles.",
    year: "2024",
    materials: "Stainless Steel, Bronze"
  },
  { 
    src: "/project8.jpg", 
    title: "Safety Barriers", 
    category: "Industrial", 
    description: "Industrial safety barriers and guardrails designed for maximum protection and durability. Engineered to meet strict safety standards while maintaining clean aesthetics.",
    year: "2023",
    materials: "Galvanized Steel"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3
    }
  }
};

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState(null);
  const filtered = filter === "All" ? images : images.filter(img => img.category === filter);

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-light-gray via-white to-gray-50 min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1 
              className="text-5xl md:text-6xl font-extrabold text-steel mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Our Gallery
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Explore our portfolio of completed projects, showcasing our expertise 
              in metal fabrication across various industries and applications.
            </motion.p>
          </div>
        </motion.div>

        {/* Filter Section */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 pb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  filter === category
                    ? "bg-safety text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFilter className="w-4 h-4" />
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <AnimatePresence mode="wait">
            <motion.div 
              key={filter}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {filtered.map((img) => (
                <motion.div
                  key={img.title}
                  variants={itemVariants}
                  layout
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <InView triggerOnce rootMargin="200px">
                      {({ inView, ref }) => (
                        <div ref={ref} className="h-64 bg-gray-200">
                          {inView ? (
                            <motion.img 
                              src={img.src} 
                              alt={img.title} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ duration: 0.5 }}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 animate-pulse" />
                          )}
                        </div>
                      )}
                    </InView>
                    
                    {/* Overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                    >
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <div className="flex items-center justify-between text-sm opacity-90 mb-2">
                          <div className="flex items-center gap-2">
                            <FaTag className="w-3 h-3" />
                            {img.category}
                          </div>
                          <div className="flex items-center gap-2">
                            <FaCalendar className="w-3 h-3" />
                            {img.year}
                          </div>
                        </div>
                        <p className="text-xs opacity-75">{img.materials}</p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-steel mb-2 group-hover:text-industrial transition-colors duration-300">
                      {img.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {img.description}
                    </p>
                    
                    <motion.button
                      onClick={() => setSelected(img)}
                      className="inline-flex items-center gap-2 bg-industrial text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all duration-300 text-sm font-semibold w-full justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaEye className="w-3 h-3" />
                      View Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-steel to-industrial py-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center text-white">
            <motion.h2 
              className="text-3xl md:text-4xl font-extrabold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Inspired by Our Work?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss your project and bring your vision to life with our expertise.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.a
                href="/quote"
                className="inline-flex items-center gap-3 bg-safety px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Quote</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
      <Footer />
    </>
  );
} 