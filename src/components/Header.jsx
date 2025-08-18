import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

// Centralized navigation links for easier maintenance
const navLinks = [
  { to: "/", text: "Home" },
  { to: "/gallery", text: "Gallery" },
  { to: "/about", text: "About Us" },
  { to: "/contact", text: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-steel/95 shadow-xl backdrop-blur-lg" : "bg-steel/80 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-6 py-4">
          <NavLink to="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl tracking-wide text-white">
              MetalWorks
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-lg font-medium text-white/90">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative transition-colors duration-200 ${isActive ? "text-safety" : "hover:text-safety"}`
                }
              >
                {link.text}
              </NavLink>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <NavLink to="/quote" className="bg-safety text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-transform hover:scale-105">
              Get a Quote
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMenu}
              className="text-white p-2"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaBars size={28} />
            </motion.button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-lg"
            onClick={closeMenu}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="absolute top-0 right-0 h-full w-4/5 max-w-xs bg-dark-steel shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <motion.button onClick={closeMenu} className="text-white p-2" whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
                  <FaTimes size={28} />
                </motion.button>
              </div>
              <nav className="flex flex-col items-center gap-8 p-8 text-2xl text-white">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * i }}
                  >
                    <NavLink to={link.to} onClick={closeMenu} className={({ isActive }) => isActive ? "text-safety" : "hover:text-safety"}>
                      {link.text}
                    </NavLink>
                  </motion.div>
                ))}
                 <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <NavLink to="/quote" onClick={closeMenu} className="bg-safety text-white mt-4 px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-orange-600 transition-transform hover:scale-105">
                      Get a Quote
                    </NavLink>
                  </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}