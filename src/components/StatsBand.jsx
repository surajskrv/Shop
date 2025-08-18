import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaClock, FaStar, FaCheckCircle } from "react-icons/fa";

export default function StatsBand() {
  const items = [
    { 
      icon: <FaIndustry className="h-8 w-8" />, 
      label: "Years in Business", 
      value: "25+",
      color: "from-blue-500 to-blue-600"
    },
    { 
      icon: <FaCheckCircle className="h-8 w-8" />, 
      label: "Projects Delivered", 
      value: "2,000+",
      color: "from-purple-500 to-purple-600"
    },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="bg-gradient-to-r from-light-gray via-white to-gray-50 py-16 animate-fadeIn">
      <motion.div 
        className="max-w-6xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-steel mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our track record speaks for itself. Here's what we've achieved over the years.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Gradient background on hover */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              <motion.div 
                className="mb-4 text-industrial group-hover:text-safety transition-colors duration-300 relative z-10"
                whileHover={{ 
                  rotate: 360,
                  scale: 1.1
                }}
                transition={{ duration: 0.6 }}
              >
                {item.icon}
              </motion.div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-3xl font-extrabold text-steel leading-tight mb-2 group-hover:text-industrial transition-colors duration-300"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.value}
                </motion.div>
                <div className="text-sm text-gray-600 font-medium group-hover:text-gray-800 transition-colors duration-300">
                  {item.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}


