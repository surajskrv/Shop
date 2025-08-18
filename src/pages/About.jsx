import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaUsers, FaClock, FaShieldAlt, FaIndustry, FaHandshake } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const values = [
  {
    icon: <FaIndustry className="w-8 h-8" />,
    title: "Quality",
    description: "We never compromise on quality, ensuring every project meets the highest standards."
  },
  {
    icon: <FaHandshake className="w-8 h-8" />,
    title: "Integrity",
    description: "Honest, transparent communication and fair pricing in all our dealings."
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "Reliability",
    description: "Consistent delivery on time, every time, with exceptional attention to detail."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Safety",
    description: "Safety first approach in all our operations and workplace practices."
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

export default function About() {
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
              About MetalWorks
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              For over 25 years, we've been at the forefront of metal fabrication, 
              delivering precision and quality to industries across the region.
            </motion.p>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div 
          className="max-w-6xl mx-auto px-4 py-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-steel mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded in 1998, MetalWorks began as a small family-owned workshop with a big vision: 
                  to deliver exceptional metal fabrication services that exceed customer expectations.
                </p>
                <p>
                  Over the years, we've grown from a local workshop to a trusted partner for businesses 
                  across multiple industries, always maintaining our commitment to quality and customer satisfaction.
                </p>
                <p>
                  Today, we operate state-of-the-art facilities with advanced equipment and a team of 
                  skilled professionals dedicated to bringing your metal fabrication projects to life.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-br from-industrial to-steel rounded-2xl p-8 text-white"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <FaAward className="w-8 h-8 text-safety" />
                  <div>
                    <h3 className="text-xl font-bold">25+ Years</h3>
                    <p className="text-gray-200">Of Excellence</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaUsers className="w-8 h-8 text-safety" />
                  <div>
                    <h3 className="text-xl font-bold">2,000+</h3>
                    <p className="text-gray-200">Projects Completed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaShieldAlt className="w-8 h-8 text-safety" />
                  <div>
                    <h3 className="text-xl font-bold">100%</h3>
                    <p className="text-gray-200">Quality Guaranteed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="bg-gradient-to-r from-steel to-industrial py-16 px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                The principles that guide everything we do and every project we undertake.
              </p>
            </motion.div>

            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <motion.div 
                    className="mb-6 text-safety flex justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-200 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>



        {/* CTA Section */}
        <motion.div 
          className="bg-gradient-to-r from-safety to-orange-600 py-16 px-4"
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
              Ready to Work With Us?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Let's discuss your project and see how we can bring your vision to life.
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
                className="inline-flex items-center gap-3 bg-white text-safety px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
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
      <Footer />
    </>
  );
} 