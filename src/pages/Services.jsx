import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaCog, FaWrench, FaHammer, FaRuler, FaPaintBrush, FaShieldAlt, FaClock } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const services = [
  {
    icon: <FaIndustry className="w-12 h-12" />,
    title: "Laser Cutting",
    description: "Precision laser cutting for all metals with tight tolerances and clean edges.",
    features: ["High accuracy", "Clean cuts", "Fast turnaround", "Complex shapes"],
    price: "From $50"
  },
  {
    icon: <FaCog className="w-12 h-12" />,
    title: "CNC Machining",
    description: "High-accuracy CNC machining for custom parts and complex geometries.",
    features: ["Complex shapes", "Tight tolerances", "Quality finish", "Custom designs"],
    price: "From $75"
  },
  {
    icon: <FaWrench className="w-12 h-12" />,
    title: "Welding",
    description: "Expert MIG, TIG, and spot welding for strong, durable connections.",
    features: ["Multiple techniques", "Strong joints", "Professional finish", "Quality assurance"],
    price: "From $40"
  },
  {
    icon: <FaHammer className="w-12 h-12" />,
    title: "Fabrication",
    description: "Complete metal fabrication solutions from concept to finished product.",
    features: ["End-to-end service", "Custom designs", "Quality assurance", "Project management"],
    price: "From $100"
  },
  {
    icon: <FaRuler className="w-12 h-12" />,
    title: "Custom Design",
    description: "Custom design and engineering services for unique metal projects.",
    features: ["CAD design", "3D modeling", "Prototyping", "Engineering support"],
    price: "From $150"
  },
  {
    icon: <FaPaintBrush className="w-12 h-12" />,
    title: "Finishing",
    description: "Professional finishing services including powder coating and painting.",
    features: ["Powder coating", "Painting", "Polishing", "Surface treatment"],
    price: "From $30"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function Services() {
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
              Our Services
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Comprehensive metal fabrication services tailored to your needs. 
              From concept to completion, we deliver quality and precision.
            </motion.p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="max-w-7xl mx-auto px-4 pb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-br from-industrial/5 to-safety/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                />
                
                <div className="relative z-10">
                  <motion.div 
                    className="mb-6 text-industrial group-hover:text-safety transition-colors duration-300 flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  <h3 className="text-2xl font-bold text-steel mb-3 group-hover:text-industrial transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-safety rounded-full" />
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-semibold text-safety">
                      {service.price}
                    </span>
                    <motion.a
                      href="/quote"
                      className="inline-flex items-center gap-2 bg-industrial text-white px-4 py-2 rounded-lg hover:bg-blue-900 transition-all duration-300 text-sm font-semibold"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Quote
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
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
              Ready to Start Your Project?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Contact us today for a free consultation and quote.
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
                <span>Get Instant Quote</span>
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
      <Footer />
    </>
  );
} 