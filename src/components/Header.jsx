import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-steel text-white sticky top-0 z-50 backdrop-blur bg-steel/80 shadow-lg">
      <div className="flex items-center justify-between px-8 py-5">
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="Metal Shop Logo" className="h-10" />
          <span className="font-bold text-2xl tracking-wide">MetalWorks</span>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-8 text-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:text-safety hover:underline underline-offset-4 transition ${isActive ? "text-safety" : ""}`
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `hover:text-safety hover:underline underline-offset-4 transition ${isActive ? "text-safety" : ""}`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `hover:text-safety hover:underline underline-offset-4 transition ${isActive ? "text-safety" : ""}`
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:text-safety hover:underline underline-offset-4 transition ${isActive ? "text-safety" : ""}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `hover:text-safety hover:underline underline-offset-4 transition ${isActive ? "text-safety" : ""}`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <span className="font-semibold">555-123-4567</span>
          <NavLink
            to="/quote"
            className={({ isActive }) =>
              `bg-safety text-white px-5 py-2 rounded-lg transition font-semibold shadow hover:bg-orange-600 ${isActive ? "ring-2 ring-white/60" : ""}`
            }
          >
            Get a Quote
          </NavLink>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
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
        </button>
      </div>

      {/* Mobile full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 md:hidden bg-black/40 backdrop-blur-sm"
            onClick={closeMenu}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
              className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-steel/95 text-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
                <span className="font-bold text-xl tracking-wide">Menu</span>
                <button
                  className="inline-flex items-center justify-center p-2 rounded hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
                  aria-label="Close menu"
                  onClick={closeMenu}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="px-8 py-6 flex flex-col gap-5 text-lg">
                <NavLink to="/" end onClick={closeMenu} className={({ isActive }) => `transition ${isActive ? "text-safety" : "hover:text-safety"}`}>Home</NavLink>
                <NavLink to="/services" onClick={closeMenu} className={({ isActive }) => `transition ${isActive ? "text-safety" : "hover:text-safety"}`}>Services</NavLink>
                <NavLink to="/gallery" onClick={closeMenu} className={({ isActive }) => `transition ${isActive ? "text-safety" : "hover:text-safety"}`}>Gallery</NavLink>
                <NavLink to="/about" onClick={closeMenu} className={({ isActive }) => `transition ${isActive ? "text-safety" : "hover:text-safety"}`}>About Us</NavLink>
                <NavLink to="/contact" onClick={closeMenu} className={({ isActive }) => `transition ${isActive ? "text-safety" : "hover:text-safety"}`}>Contact</NavLink>
                <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between">
                  <span className="font-semibold">555-123-4567</span>
                  <NavLink to="/quote" onClick={closeMenu} className={({ isActive }) => `bg-safety text-white px-4 py-2 rounded-lg transition font-semibold shadow hover:bg-orange-600 ${isActive ? "ring-2 ring-white/60" : ""}`}>Get a Quote</NavLink>
                </div>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 