import React from "react";
import { motion } from "framer-motion";

const points = [
  {
    icon: (
      <svg className="w-8 h-8 text-safety" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
    ),
    text: "25+ Years of Experience"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-safety" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    ),
    text: "Fast Turnaround Times"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-safety" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
    ),
    text: "Quality Craftsmanship"
  },
  {
    icon: (
      <svg className="w-8 h-8 text-safety" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 9h6v6H9z" /></svg>
    ),
    text: "State-of-the-Art Equipment"
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gradient-to-r from-white via-gray-100 to-steel relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" className="h-full w-full" style={{ opacity: 0.08 }}>
          <defs>
            <pattern id="dots" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="4" cy="4" r="2" fill="#003366" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-extrabold text-steel mb-4 drop-shadow">Why Choose Us</h2>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">We combine decades of experience, advanced technology, and a passion for quality to deliver the best results for our clients.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-4 bg-white/80 rounded-xl p-6 shadow hover:scale-105 transition-transform duration-200">
                {point.icon}
                <span className="text-lg font-semibold text-steel">{point.text}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8 text-lg text-industrial font-semibold">
            <div>Founded: 1998</div>
            <div>Projects Completed: 1,200+</div>
            <div>Industries Served: 10+</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 