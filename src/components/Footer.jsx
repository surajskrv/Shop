import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-steel text-white py-8 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="font-bold text-lg mb-2">Contact Us</h2>
          <p>123 Industrial Ave, City, State</p>
          <p>555-123-4567</p>
          <p>info@metalworks.com</p>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/" className="hover:text-safety">Home</a>
          <a href="/services" className="hover:text-safety">Services</a>
          <a href="/gallery" className="hover:text-safety">Gallery</a>
          <a href="/about" className="hover:text-safety">About Us</a>
          <a href="/contact" className="hover:text-safety">Contact</a>
        </div>
        <div className="flex gap-4 text-2xl">
          <a href="#" aria-label="Facebook" className="hover:text-safety" title="Facebook"><FaFacebook /></a>
          <a href="#" aria-label="Instagram" className="hover:text-safety" title="Instagram"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-safety" title="LinkedIn"><FaLinkedin /></a>
        </div>
      </div>
      <div className="text-center text-sm mt-6">&copy; {new Date().getFullYear()} MetalWorks. All rights reserved.</div>
    </footer>
  );
} 