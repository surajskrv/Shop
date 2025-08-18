import React from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-industrial via-steel to-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 left-10 w-20 h-20 bg-safety/10 rounded-full"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div 
        className="max-w-5xl mx-auto px-4 text-center text-white relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2 
          className="text-4xl md:text-5xl font-extrabold mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to Start Your Project?
        </motion.h2>
        
        <motion.p 
          className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Get an instant quote by entering your specifications. Our team will follow up to finalize details and get your project started.
        </motion.p>
        
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a 
            href="/quote" 
            className="group inline-flex items-center justify-center gap-3 bg-safety px-10 py-4 rounded-xl font-semibold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Get Instant Quote</span>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
          
          <motion.a 
            href="/contact" 
            className="group inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-10 py-4 rounded-xl font-semibold text-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Contact Us</span>
            <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </motion.a>
        </motion.div>
        
        <motion.p 
          className="text-white/70 mt-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          No commitment required • Free consultation • Fast response
        </motion.p>
      </motion.div>
    </section>
  );
}


