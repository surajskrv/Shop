import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-steel mb-6 drop-shadow">
            What Our Clients Say
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <video controls className="w-full rounded-md">
              <source src="/testimonial-video-1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-600 mt-4">"The team at MetalWorks exceeded all our expectations. The new gate is a work of art!" - Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <video controls className="w-full rounded-md">
              <source src="/testimonial-video-2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <p className="text-gray-600 mt-4">"Professional, on time, and the quality is outstanding. Highly recommended." - John Smith</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;