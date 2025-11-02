import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import emailjs from "emailjs-com";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() === "" ? "Name is required" : "";
      case "email":
        if (value.trim() === "") return "Email is required";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "Please enter a valid email";
        return "";
      case "message":
        return value.trim() === "" ? "Message is required" : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (touched[name]) {
      const error = validateField(name, value);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    const errors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) errors[key] = error;
    });

    setFieldErrors(errors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(errors).length > 0) {
      return;
    }

    setStatus("sending");
    setError("");

    try {
      // Replace with your actual EmailJS credentials
      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "YOUR_USER_ID" // Replace with your user ID
      );

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTouched({});
      setFieldErrors({});
    } catch (err) {
      setStatus("error");
      setError("Failed to send message. Please try again or contact us directly.");
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      value: "555-123-4567",
      href: "tel:555-123-4567"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "info@metalworks.com",
      href: "mailto:info@metalworks.com"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Address",
      value: "123 Industrial Ave, Patna, India",
      href: "https://www.google.com/maps/search/Patna,+India"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "Business Hours",
      value: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      href: null
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-br from-light-gray via-white to-gray-50 min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 px-4 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              className="text-5xl md:text-6xl font-extrabold text-steel mb-6 drop-shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Ready to start your project? Get in touch with us today for a free consultation
              and quote. We're here to help bring your vision to life.
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <motion.h2
                className="text-3xl font-extrabold text-steel mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Send Us a Message
              </motion.h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-safety focus:border-transparent ${
                      fieldErrors.name && touched.name
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 focus:border-safety"
                    }`}
                    placeholder="Your full name"
                  />
                  {fieldErrors.name && touched.name && (
                    <motion.p
                      className="mt-2 text-sm text-red-600 flex items-center gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FaExclamationCircle className="w-4 h-4" />
                      {fieldErrors.name}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-safety focus:border-transparent ${
                      fieldErrors.email && touched.email
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 focus:border-safety"
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {fieldErrors.email && touched.email && (
                    <motion.p
                      className="mt-2 text-sm text-red-600 flex items-center gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FaExclamationCircle className="w-4 h-4" />
                      {fieldErrors.email}
                    </motion.p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={5}
                    className={`w-full px-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-safety focus:border-transparent resize-none ${
                      fieldErrors.message && touched.message
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 focus:border-safety"
                    }`}
                    placeholder="Tell us about your project..."
                  />
                  {fieldErrors.message && touched.message && (
                    <motion.p
                      className="mt-2 text-sm text-red-600 flex items-center gap-2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <FaExclamationCircle className="w-4 h-4" />
                      {fieldErrors.message}
                    </motion.p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full bg-safety text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  whileHover={{ scale: status !== "sending" ? 1.02 : 1 }}
                  whileTap={{ scale: status !== "sending" ? 0.98 : 1 }}
                >
                  {status === "sending" ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {status === "success" && (
                  <motion.div
                    className="p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FaCheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-green-800 font-semibold">
                      Message sent successfully! We'll get back to you soon.
                    </span>
                  </motion.div>
                )}

                {status === "error" && (
                  <motion.div
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FaExclamationCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 font-semibold">
                      {error}
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Contact Information */}
              <motion.div
                className="bg-gradient-to-br from-steel to-industrial rounded-2xl p-8 text-white"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.h2
                  className="text-3xl font-extrabold mb-6"
                  variants={itemVariants}
                >
                  Get In Touch
                </motion.h2>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="flex items-start gap-4 group"
                    >
                      <div className="text-safety group-hover:text-orange-400 transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{info.title}</h3>
                        {info.href ? (
                          <a
                            href={info.href}
                            target={info.href.startsWith('http') ? "_blank" : undefined}
                            rel={info.href.startsWith('http') ? "noopener noreferrer" : undefined}
                            className="text-gray-200 hover:text-white transition-colors duration-300"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-gray-200">{info.value}</p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
              >
                <div className="h-64 bg-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117899.99999999999!2d85.00000000000001!3d25.600000000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f29937cce00001%3A0x8000000000000000!2sPatna%2C%20Bihar%2C%20India!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Map of Patna"
                  />
                </div>
                <div className="p-4 text-center">
                  <a
                    href="https://www.google.com/maps/search/Patna,+India"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-industrial hover:text-safety font-semibold transition-colors duration-300"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}