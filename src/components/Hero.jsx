import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-industrial via-steel to-gray-300 overflow-hidden">
      {/* Animated Diagonal Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="h-full w-full" style={{ opacity: 0.12 }}>
          <defs>
            <pattern id="diagonalLines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
              <rect x="0" y="0" width="20" height="40" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#diagonalLines)" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center text-white px-4"
      >
        <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg tracking-tight">
          Precision Metal Fabrication
        </h1>
        <p className="text-2xl md:text-3xl font-semibold mb-2 drop-shadow-md">Since 1998</p>
        <p className="text-lg md:text-xl mb-8 text-gray-100/90 max-w-2xl mx-auto">
          Custom Solutions for Industrial & Commercial Needs. Quality, Experience, and Fast Turnaround.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="/gallery" className="flex items-center gap-2 bg-industrial px-7 py-3 rounded-lg text-white font-semibold text-lg shadow hover:scale-105 hover:bg-blue-900 transition-transform duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553 2.276A2 2 0 0121 14.09V17a2 2 0 01-2 2H5a2 2 0 01-2-2v-2.91a2 2 0 01.447-1.314L8 10m7-6v6m0 0l-3 3m3-3l3 3" /></svg>
            View Our Work
          </a>
          <a href="/quote" className="flex items-center gap-2 bg-safety px-7 py-3 rounded-lg text-white font-semibold text-lg shadow hover:scale-105 hover:bg-orange-600 transition-transform duration-200">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 14h.01M16 10h.01M21 16V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2h14a2 2 0 002-2z" /></svg>
            Request a Quote
          </a>
        </div>
      </motion.div>
    </section>
  );
} 