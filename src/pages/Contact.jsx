import React, { useState } from "react";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // 'idle' | 'sending' | 'success' | 'error'
  const [error, setError] = useState("");

  const isValidEmail = (value) => {
    // Basic email regex for client-side validation
    return /[^\s@]+@[^\s@]+\.[^\s@]+/.test(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus("error");
      setError("Please fill in all fields.");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("error");
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("sending");
    try {
      // Replace the placeholders below with your EmailJS credentials
      // SERVICE ID: create in EmailJS dashboard
      const serviceId = "YOUR_EMAILJS_SERVICE_ID"; // <-- insert your EmailJS service ID
      // TEMPLATE ID: create or use an existing template in EmailJS
      const templateId = "YOUR_EMAILJS_TEMPLATE_ID"; // <-- insert your EmailJS template ID
      // PUBLIC KEY (User ID): found in your EmailJS account settings
      const userId = "YOUR_EMAILJS_PUBLIC_KEY"; // <-- insert your EmailJS public key (formerly user ID)

      const templateParams = {
        from_name: name,
        reply_to: email,
        message,
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      setStatus("error");
      setError("Sorry, we couldn't send your message. Please try again later.");
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-steel via-gray-100 to-industrial py-20 px-4 min-h-[70vh]">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-5xl font-extrabold text-steel mb-4 drop-shadow">Contact Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">Have a question or need a quote? Fill out the form below or reach us directly. We’ll get back to you as soon as possible.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto mb-12">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="name" className="font-semibold text-steel">Name</label>
              <input
                id="name"
                type="text"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-safety"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={status === "sending"}
                required
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="email" className="font-semibold text-steel">Email</label>
              <input
                id="email"
                type="email"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-safety"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "sending"}
                required
              />
            </div>
            <div className="flex flex-col gap-2 text-left">
              <label htmlFor="message" className="font-semibold text-steel">Message</label>
              <textarea
                id="message"
                rows="4"
                className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-safety"
                placeholder="How can we help you?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                disabled={status === "sending"}
                required
              />
            </div>
            {status === "error" && error && (
              <div className="text-red-600 bg-red-50 border border-red-200 rounded px-4 py-2">{error}</div>
            )}
            {status === "success" && (
              <div className="text-green-700 bg-green-50 border border-green-200 rounded px-4 py-2">Message sent successfully!</div>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-safety text-white px-8 py-3 rounded-lg font-semibold text-lg shadow hover:bg-orange-600 transition self-end disabled:opacity-60"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
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