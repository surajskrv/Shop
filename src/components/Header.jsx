import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, FaComments } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <motion.header
        className={`text-white sticky top-0 z-40 backdrop-blur shadow-lg transition-all duration-200 ${
          scrolled ? "bg-steel/95 shadow-xl" : "bg-steel/70"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="flex items-center justify-between px-8 py-5">
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <span className="font-bold text-2xl tracking-wide bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              MetalWorks
            </span>
          </motion.div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex gap-8 text-lg font-medium">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-safety hover:underline underline-offset-4 transition-all duration-150 ${isActive ? "text-safety font-semibold" : "hover:scale-105"}`
              }
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `hover:text-safety hover:underline underline-offset-4 transition-all duration-150 ${isActive ? "text-safety font-semibold" : "hover:scale-105"}`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                `hover:text-safety hover:underline underline-offset-4 transition-all duration-150 ${isActive ? "text-safety font-semibold" : "hover:scale-105"}`
              }
            >
              Gallery
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-safety hover:underline underline-offset-4 transition-all duration-150 ${isActive ? "text-safety font-semibold" : "hover:scale-105"}`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-safety hover:underline underline-offset-4 transition-all duration-150 ${isActive ? "text-safety font-semibold" : "hover:scale-105"}`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="font-semibold text-white/90">555-123-4567</span>
            <NavLink
              to="/quote"
              className={({ isActive }) =>
                `bg-safety text-white px-5 py-2 rounded-lg transition-all duration-150 font-semibold shadow hover:bg-orange-600 hover:scale-105 ${isActive ? "ring-2 ring-white/60" : ""}`
              }
            >
              Get a Quote
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
            aria-label="Toggle navigation menu"
            aria-expanded={menuOpen}
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Hamburger / Close icon */}
            {!menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </motion.button>
        </div>
      </motion.header>

      {/* Mobile dropdown menu - Outside header to avoid z-index issues */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-gradient-to-b from-steel to-steel/90 text-white shadow-2xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/20">
                <span className="font-bold text-xl tracking-wide bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">Menu</span>
                <motion.button
                  className="inline-flex items-center justify-center p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Close menu"
                  onClick={closeMenu}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>

              {/* Navigation Links */}
              <div className="px-6 py-6">
                <div className="space-y-4">
                  <NavLink 
                    to="/" 
                    end 
                    onClick={closeMenu} 
                    className={({ isActive }) => `block text-lg font-medium transition-colors duration-150 ${isActive ? "text-safety" : "text-white hover:text-safety"}`}
                  >
                    Home
                  </NavLink>
                  
                  {/* Get Instant Quote Button */}
                  <NavLink 
                    to="/quote" 
                    onClick={closeMenu} 
                    className={({ isActive }) => `block bg-safety text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-lg hover:bg-orange-600 transition-all duration-150 flex items-center justify-between ${isActive ? "ring-2 ring-white/60" : ""}`}
                  >
                    <span>Get Instant Quote</span>
                    <FaArrowRight className="w-5 h-5" />
                  </NavLink>
                  
                  <NavLink 
                    to="/services" 
                    onClick={closeMenu} 
                    className={({ isActive }) => `block text-lg font-medium transition-colors duration-150 ${isActive ? "text-safety" : "text-white hover:text-safety"}`}
                  >
                    Services
                  </NavLink>
                  
                  <NavLink 
                    to="/gallery" 
                    onClick={closeMenu} 
                    className={({ isActive }) => `block text-lg font-medium transition-colors duration-150 ${isActive ? "text-safety" : "text-white hover:text-safety"}`}
                  >
                    Gallery
                  </NavLink>
                  
                  <NavLink 
                    to="/about" 
                    onClick={closeMenu} 
                    className={({ isActive }) => `block text-lg font-medium transition-colors duration-150 ${isActive ? "text-safety" : "text-white hover:text-safety"}`}
                  >
                    About Us
                  </NavLink>
                  
                  <NavLink 
                    to="/contact" 
                    onClick={closeMenu} 
                    className={({ isActive }) => `block text-lg font-medium transition-colors duration-150 flex items-center gap-2 ${isActive ? "text-safety" : "text-white hover:text-safety"}`}
                  >
                    <FaComments className="w-4 h-4" />
                    Contact
                  </NavLink>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
} 