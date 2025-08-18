import React from "react";

export default function Header() {
  return (
    <header className="bg-steel text-white flex items-center justify-between px-8 py-5 shadow-lg sticky top-0 z-50 backdrop-blur bg-steel/95 transition-all duration-300">
      <div className="flex items-center gap-4">
        <img src="/logo.png" alt="Metal Shop Logo" className="h-10" />
        <span className="font-bold text-2xl tracking-wide">MetalWorks</span>
      </div>
      <nav className="flex gap-8 text-lg">
        <a href="/" className="hover:text-safety hover:underline underline-offset-4 transition">Home</a>
        <a href="/services" className="hover:text-safety hover:underline underline-offset-4 transition">Services</a>
        <a href="/gallery" className="hover:text-safety hover:underline underline-offset-4 transition">Gallery</a>
        <a href="/about" className="hover:text-safety hover:underline underline-offset-4 transition">About Us</a>
        <a href="/contact" className="hover:text-safety hover:underline underline-offset-4 transition">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <span className="font-semibold">555-123-4567</span>
        <a href="/contact" className="bg-safety text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition font-semibold shadow">Get a Free Quote</a>
      </div>
    </header>
  );
} 