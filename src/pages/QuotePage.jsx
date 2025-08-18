import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaCalculator, FaRuler, FaIndustry, FaCog, FaCheckCircle, FaExclamationCircle } from "react-icons/fa";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function QuotePage() {
  const [formData, setFormData] = useState({
    width_cm: "",
    height_cm: "",
    material: "steel",
    complexity: 5
  });
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [touched, setTouched] = useState({});

  const validateField = (name, value) => {
    switch (name) {
      case "width_cm":
        if (!value || value <= 0) return "Width must be greater than 0";
        if (value > 1000) return "Width cannot exceed 1000 cm";
        return "";
      case "height_cm":
        if (!value || value <= 0) return "Height must be greater than 0";
        if (value > 1000) return "Height cannot exceed 1000 cm";
        return "";
      case "material":
        return value ? "" : "Please select a material";
      case "complexity":
        return value >= 1 && value <= 10 ? "" : "Complexity must be between 1 and 10";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numValue = name === "complexity" ? parseFloat(value) : value;
    setFormData(prev => ({ ...prev, [name]: numValue }));
    
    if (touched[name]) {
      const error = validateField(name, numValue);
      setFieldErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const numValue = name === "complexity" ? parseFloat(value) : value;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, numValue);
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
    setTouched({ width_cm: true, height_cm: true, material: true, complexity: true });
    
    if (Object.keys(errors).length > 0) {
      return;
    }

    setLoading(true);
    setError("");
    setEstimatedPrice(null);

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/generate-quote", {
        width_cm: parseFloat(formData.width_cm),
        height_cm: parseFloat(formData.height_cm),
        material: formData.material,
        complexity: parseFloat(formData.complexity)
      });

      setEstimatedPrice(response.data.estimated_price);
    } catch (err) {
      if (err.response?.status === 400) {
        setError(err.response.data.detail || "Invalid input. Please check your values.");
      } else if (err.response?.status === 503) {
        setError("Quote service is temporarily unavailable. Please try again later.");
      } else {
        setError("Failed to generate quote. Please try again or contact us directly.");
      }
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      width_cm: "",
      height_cm: "",
      material: "steel",
      complexity: 5
    });
    setEstimatedPrice(null);
    setError("");
    setFieldErrors({});
    setTouched({});
  };

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
              Get Your Quote
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Enter your project specifications below and get an instant price estimate. 
              Our AI-powered system provides accurate quotes based on your requirements.
            </motion.p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Quote Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100"
            >
              <motion.div 
                className="flex items-center gap-3 mb-6"
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <FaCalculator className="w-8 h-8 text-safety" />
                <h2 className="text-3xl font-extrabold text-steel">Project Details</h2>
              </motion.div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label htmlFor="width_cm" className="block text-sm font-semibold text-gray-700 mb-2">
                        Width (cm) *
                      </label>
                      <div className="relative">
                        <FaRuler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="number"
                          id="width_cm"
                          name="width_cm"
                          value={formData.width_cm}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          step="0.1"
                          min="0.1"
                          max="1000"
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-safety focus:border-transparent ${
                            fieldErrors.width_cm && touched.width_cm 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:border-safety"
                          }`}
                          placeholder="Enter width"
                        />
                      </div>
                      {fieldErrors.width_cm && touched.width_cm && (
                        <motion.p 
                          className="mt-2 text-sm text-red-600 flex items-center gap-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <FaExclamationCircle className="w-4 h-4" />
                          {fieldErrors.width_cm}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label htmlFor="height_cm" className="block text-sm font-semibold text-gray-700 mb-2">
                        Height (cm) *
                      </label>
                      <div className="relative">
                        <FaRuler className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                          type="number"
                          id="height_cm"
                          name="height_cm"
                          value={formData.height_cm}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          step="0.1"
                          min="0.1"
                          max="1000"
                          className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-safety focus:border-transparent ${
                            fieldErrors.height_cm && touched.height_cm 
                              ? "border-red-500 bg-red-50" 
                              : "border-gray-300 focus:border-safety"
                          }`}
                          placeholder="Enter height"
                        />
                      </div>
                      {fieldErrors.height_cm && touched.height_cm && (
                        <motion.p 
                          className="mt-2 text-sm text-red-600 flex items-center gap-2"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <FaExclamationCircle className="w-4 h-4" />
                          {fieldErrors.height_cm}
                        </motion.p>
                      )}
                    </motion.div>
                  </div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="material" className="block text-sm font-semibold text-gray-700 mb-2">
                      Material *
                    </label>
                    <div className="relative">
                      <FaIndustry className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <select
                        id="material"
                        name="material"
                        value={formData.material}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`w-full pl-10 pr-4 py-3 rounded-lg border transition-all duration-300 focus:ring-2 focus:ring-safety focus:border-transparent ${
                          fieldErrors.material && touched.material 
                            ? "border-red-500 bg-red-50" 
                            : "border-gray-300 focus:border-safety"
                        }`}
                      >
                        <option value="steel">Steel</option>
                        <option value="iron">Iron</option>
                      </select>
                    </div>
                    {fieldErrors.material && touched.material && (
                      <motion.p 
                        className="mt-2 text-sm text-red-600 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FaExclamationCircle className="w-4 h-4" />
                        {fieldErrors.material}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="complexity" className="block text-sm font-semibold text-gray-700 mb-2">
                      Design Complexity (1-10) *
                    </label>
                    <div className="relative">
                      <FaCog className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="range"
                        id="complexity"
                        name="complexity"
                        value={formData.complexity}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        min="1"
                        max="10"
                        step="0.5"
                        className={`w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider ${
                          fieldErrors.complexity && touched.complexity 
                            ? "border-red-500" 
                            : ""
                        }`}
                      />
                      <div className="flex justify-between text-xs text-gray-500 mt-1">
                        <span>Simple (1)</span>
                        <span className="font-semibold text-safety">{formData.complexity}</span>
                        <span>Complex (10)</span>
                      </div>
                    </div>
                    {fieldErrors.complexity && touched.complexity && (
                      <motion.p 
                        className="mt-2 text-sm text-red-600 flex items-center gap-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <FaExclamationCircle className="w-4 h-4" />
                        {fieldErrors.complexity}
                      </motion.p>
                    )}
                  </motion.div>
                </motion.div>

                <motion.div 
                  className="flex flex-col sm:flex-row gap-4"
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-safety text-white py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    {loading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Calculating...
                      </span>
                    ) : (
                      "Calculate Quote"
                    )}
                  </motion.button>
                  
                  <motion.button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Reset
                  </motion.button>
                </motion.div>

                {error && (
                  <motion.div 
                    className="p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FaExclamationCircle className="w-5 h-5 text-red-600" />
                    <span className="text-red-800 font-semibold">{error}</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Quote Result */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {estimatedPrice && (
                <motion.div 
                  className="bg-gradient-to-br from-safety to-orange-600 rounded-2xl p-8 text-white text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="w-12 h-12 mx-auto mb-4 text-white/80" />
                  <h3 className="text-2xl font-bold mb-2">Estimated Price</h3>
                  <div className="text-4xl md:text-5xl font-extrabold mb-4">
                    ${estimatedPrice.toFixed(2)}
                  </div>
                  <p className="text-white/90 text-lg">
                    This is an estimate based on your specifications. 
                    Final price may vary based on project requirements.
                  </p>
                </motion.div>
              )}

              {/* Info Cards */}
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-steel mb-2">How it works</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Our AI analyzes your specifications including dimensions, material, and complexity 
                    to provide an accurate price estimate based on similar projects.
                  </p>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-steel mb-2">What's included</h3>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Material costs</li>
                    <li>• Labor and fabrication</li>
                    <li>• Basic finishing</li>
                    <li>• Quality assurance</li>
                  </ul>
                </motion.div>

                <motion.div 
                  variants={itemVariants}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-steel mb-2">Next steps</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    After getting your quote, contact us to discuss project details, 
                    timeline, and any custom requirements for a final proposal.
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}


