import React from "react";
import { motion } from "framer-motion";
import { FaAward, FaClock, FaUsers, FaShieldAlt } from "react-icons/fa";

const reasons = [
  {
    icon: <FaAward className="w-8 h-8" />,
    title: "25+ Years Experience",
    description: "Decades of expertise in metal fabrication and industrial solutions."
  },
  {
    icon: <FaClock className="w-8 h-8" />,
    title: "Fast Turnaround",
    description: "Quick delivery without compromising on quality or precision."
  },
  {
    icon: <FaUsers className="w-8 h-8" />,
    title: "Expert Team",
    description: "Skilled craftsmen and engineers dedicated to excellence."
  },
  {
    icon: <FaShieldAlt className="w-8 h-8" />,
    title: "Quality Guaranteed",
    description: "Every project meets our high standards and your specifications."
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
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-br from-steel via-gray-800 to-industrial">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 drop-shadow-2xl">
            Why Choose MetalWorks?
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            We combine decades of experience with cutting-edge technology to deliver 
            exceptional results that exceed expectations.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300 border border-white/20 relative overflow-hidden"
            >
              {/* Animated background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-safety/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="mb-6 text-safety group-hover:text-orange-400 transition-colors duration-300 relative z-10 flex justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {reason.icon}
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-3 text-white group-hover:text-safety transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-200 group-hover:text-white transition-colors duration-300 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="/about" 
            className="inline-flex items-center gap-3 bg-safety text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Learn More About Us</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
} 