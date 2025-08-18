import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-steel via-gray-100 to-industrial py-20 px-4 min-h-[70vh]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-steel mb-4 drop-shadow">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Have a question or need a quote? Fill out the form below or reach us directly. We’ll get back to you as soon as possible.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-12">
          <form className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name" className="font-semibold text-steel">Name</label>
              <input id="name" type="text" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-safety" placeholder="Your Name" />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="font-semibold text-steel">Email</label>
              <input id="email" type="email" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-safety" placeholder="you@email.com" />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="message" className="font-semibold text-steel">Message</label>
              <textarea id="message" rows="4" className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-safety" placeholder="How can we help you?" />
            </div>
            <button type="submit" className="bg-safety text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-orange-600 transition self-end">Send Message</button>
          </form>
        </div>
        <div className="max-w-2xl mx-auto text-center text-gray-700">
          <p className="mb-2"><span className="font-bold text-industrial">Phone:</span> 555-123-4567</p>
          <p className="mb-2"><span className="font-bold text-industrial">Email:</span> info@metalworks.com</p>
          <p className="mb-6"><span className="font-bold text-industrial">Address:</span> 123 Industrial Ave, City, State</p>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 font-semibold">[Google Map Placeholder]</div>
        </div>
      </section>
      <Footer />
    </>
  );
} 