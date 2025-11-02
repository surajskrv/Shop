// src/components/BeforeAfter.jsx
import React from 'react';
import { motion } from 'framer-motion';

const BeforeAfter = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-steel mb-6 drop-shadow">
            Transforming Spaces
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            See the difference our craftsmanship can make.
          </p>
        </motion.div>
        <div className="flex justify-center">
          {/* You can add an interactive slider here later. For now, a side-by-side comparison will work well. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-500 mb-4">Before</h3>
              <img src="/before-image.jpg" alt="Before" className="rounded-lg shadow-lg"/>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold text-industrial mb-4">After</h3>
              <img src="/after-image.jpg" alt="After" className="rounded-lg shadow-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;