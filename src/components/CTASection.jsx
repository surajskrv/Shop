import React from "react";

export default function CTASection() {
  return (
    <section className="py-16 bg-gradient-to-r from-industrial via-steel to-gray-200">
      <div className="max-w-5xl mx-auto px-4 text-center text-white">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 drop-shadow">Ready to start your project?</h2>
        <p className="text-white/90 mb-6">Get an instant quote by entering your specs. Our team will follow up to finalize details.</p>
        <a href="/quote" className="inline-block bg-safety px-8 py-3 rounded-lg font-semibold shadow hover:bg-orange-600 transition">Get a Quote</a>
      </div>
    </section>
  );
}


