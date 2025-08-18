import React from "react";
import { motion } from "framer-motion";
import { FaIndustry, FaCog, FaWrench, FaHammer } from "react-icons/fa";

const services = [
  {
    icon: <FaHammer className="w-12 h-12" />,
    title: "Fabrication",
    desc: "Complete metal fabrication solutions from concept to finished product.",
    features: ["End-to-end service", "Custom designs", "Quality assurance"]
  },
  {
    icon: <FaWrench className="w-12 h-12" />,
    title: "Welding",
    desc: "Expert MIG, TIG, and spot welding for strong, durable connections.",
    features: ["Multiple techniques", "Strong joints", "Professional finish"]
  },
  {
    icon: <FaIndustry className="w-12 h-12" />,
    title: "Laser Cutting",
    desc: "Precision laser cutting for all metals with tight tolerances and clean edges.",
    features: ["High accuracy", "Clean cuts", "Fast turnaround"]
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

export default function ServicesOverview() {
  return (
    <section className="py-20 bg-gradient-to-br from-light-gray via-white to-gray-50">
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
          <h2 className="text-4xl md:text-5xl font-extrabold text-steel mb-6 drop-shadow">
            Our Metal Fabrication Services
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            From laser cutting to full fabrication, we offer a complete range of services for industrial and commercial clients. 
            Our advanced equipment and skilled team ensure top quality and fast turnaround.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="group bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-industrial/5 to-safety/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="mb-6 text-industrial group-hover:text-safety transition-colors duration-300 relative z-10"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {service.icon}
              </motion.div>
              
              <div className="relative z-10">
                <h3 className="font-bold text-xl mb-3 text-steel group-hover:text-industrial transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.desc}
                </p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-center gap-2 text-sm text-gray-500"
                    >
                      <div className="w-1.5 h-1.5 bg-safety rounded-full" />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
} 