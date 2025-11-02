import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-steel via-gray-800 to-industrial text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" className="h-full w-full">
          <defs>
            <pattern id="footerDots" patternUnits="userSpaceOnUse" width="40" height="40">
              <circle cx="4" cy="4" r="2" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footerDots)" />
        </svg>
      </div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 py-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Contact Us
            </h3>
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaMapMarkerAlt className="text-safety group-hover:text-orange-400 transition-colors duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  123 Industrial Ave, Patna, India
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaPhone className="text-safety group-hover:text-orange-400 transition-colors duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  555-123-4567
                </span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FaEnvelope className="text-safety group-hover:text-orange-400 transition-colors duration-300" />
                <span className="text-gray-200 group-hover:text-white transition-colors duration-300">
                  info@metalworks.com
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Quick Links
            </h3>
            <div className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
                { href: "/quote", label: "Get Quote" }
              ].map((link) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-200 hover:text-safety transition-colors duration-300 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="group-hover:underline underline-offset-4">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Hours */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-200 mb-2">Business Hours</h4>
                <p className="text-gray-300 text-sm">
                  Mon - Fri: 8:00 AM - 6:00 PM<br />
                  Saturday: 9:00 AM - 4:00 PM<br />
                  Sunday: Closed
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-200 mb-3">Follow Us</h4>
                <div className="flex gap-4">
                  {[
                    { icon: FaFacebook, href: "#", label: "Facebook" },
                    { icon: FaInstagram, href: "#", label: "Instagram" },
                    { icon: FaLinkedin, href: "#", label: "LinkedIn" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-safety hover:scale-110 transition-all duration-300 group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <social.icon className="w-5 h-5 text-white group-hover:text-white transition-colors duration-300" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-8 border-t border-white/20 text-center"
          variants={itemVariants}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-300 text-sm">
              © {currentYear} MetalWorks. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-gray-300">
              <motion.a
                href="#"
                className="hover:text-safety transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                className="hover:text-safety transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}