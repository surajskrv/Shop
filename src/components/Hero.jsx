import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-br from-industrial via-steel to-gray-800 overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <motion.svg 
          width="100%" 
          height="100%" 
          className="h-full w-full opacity-10"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        >
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <rect x="0" y="0" width="20" height="40" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </motion.svg>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-4 h-4 bg-safety rounded-full opacity-60"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-6 h-6 bg-white rounded-full opacity-40"
        animate={{ 
          y: [0, 30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto"
      >
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-2xl tracking-tight leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Precision Metal
          <br />
          <span className="bg-gradient-to-r from-safety to-orange-400 bg-clip-text text-transparent">
            Fabrication
          </span>
        </motion.h1>
        
        <motion.p 
          className="text-2xl md:text-3xl font-semibold mb-3 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Since 1998
        </motion.p>
        
        <motion.p 
          className="text-lg md:text-xl mb-10 text-gray-100/90 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Custom Solutions for Industrial & Commercial Needs. 
          <br className="hidden md:block" />
          Quality, Experience, and Fast Turnaround.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row justify-center gap-6 mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a 
            href="/gallery" 
            className="group flex items-center justify-center gap-3 bg-industrial px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-blue-900"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A2 2 0 0121 14.09V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.91a2 2 0 01.447-1.314L8 10m7-6v6m0 0l-3 3m3-3l3 3" />
            </svg>
            View Our Work
          </motion.a>
          
          <motion.a 
            href="/quote" 
            className="group flex items-center justify-center gap-3 bg-safety px-8 py-4 rounded-xl text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-orange-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg className="w-6 h-6 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" />
            </svg>
            Get Instant Quote
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
} 