import React, { useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

const QuotePage = () => {
  const [widthCm, setWidthCm] = useState(80);
  const [heightCm, setHeightCm] = useState(60);
  const [material, setMaterial] = useState("steel");
  const [complexity, setComplexity] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);
  const [fieldErrors, setFieldErrors] = useState({ widthCm: "", heightCm: "", material: "", complexity: "" });
  const [touched, setTouched] = useState({ widthCm: false, heightCm: false, material: false, complexity: false });

  const materialOptions = [
    { label: "Steel", value: "steel" },
    { label: "Aluminum", value: "aluminum" },
    { label: "Copper", value: "copper" },
    { label: "Titanium", value: "titanium" },
  ];

  const validateAll = () => {
    const next = {
      widthCm: Number(widthCm) > 0 ? "" : "Width must be greater than 0.",
      heightCm: Number(heightCm) > 0 ? "" : "Height must be greater than 0.",
      material: material ? "" : "Please select a material.",
      complexity: Number(complexity) >= 1 && Number(complexity) <= 10 ? "" : "Complexity must be 1-10.",
    };
    setFieldErrors(next);
    return Object.values(next).every((v) => !v);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEstimatedPrice(null);

    // Validate before submit
    setTouched({ widthCm: true, heightCm: true, material: true, complexity: true });
    const ok = validateAll();
    if (!ok) {
      setLoading(false);
      return;
    }

    try {
      const payload = {
        width_cm: Number(widthCm),
        height_cm: Number(heightCm),
        material,
        complexity: Number(complexity),
      };

      const res = await axios.post(
        "http://127.0.0.1:8000/api/generate-quote",
        payload,
        { headers: { "Content-Type": "application/json" } }
      );
      setEstimatedPrice(res?.data?.estimated_price ?? null);
    } catch (err) {
      setError(
        err?.response?.data?.detail ||
          "Failed to generate quote. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-steel via-gray-100 to-industrial min-h-[70vh] py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white shadow rounded-lg p-6"
          >
            <h1 className="text-3xl font-extrabold text-steel mb-2">Get an Instant Quote</h1>
            <p className="text-gray-700 mb-6">Enter your part dimensions, material, and design complexity to estimate pricing.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Width (cm)</label>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={widthCm}
                    onChange={(e) => {
                      const v = e.target.value;
                      setWidthCm(v);
                      setFieldErrors((p) => ({ ...p, widthCm: Number(v) > 0 ? "" : "Width must be greater than 0." }));
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, widthCm: true }))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:border-industrial focus:ring-industrial shadow-sm"
                    required
                  />
                  {touched.widthCm && fieldErrors.widthCm && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.widthCm}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Height (cm)</label>
                  <input
                    type="number"
                    min="1"
                    step="0.1"
                    value={heightCm}
                    onChange={(e) => {
                      const v = e.target.value;
                      setHeightCm(v);
                      setFieldErrors((p) => ({ ...p, heightCm: Number(v) > 0 ? "" : "Height must be greater than 0." }));
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, heightCm: true }))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:border-industrial focus:ring-industrial shadow-sm"
                    required
                  />
                  {touched.heightCm && fieldErrors.heightCm && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.heightCm}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Material</label>
                  <select
                    value={material}
                    onChange={(e) => {
                      const v = e.target.value;
                      setMaterial(v);
                      setFieldErrors((p) => ({ ...p, material: v ? "" : "Please select a material." }));
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, material: true }))}
                    className="mt-1 block w-full rounded-md border-gray-300 focus:border-industrial focus:ring-industrial shadow-sm"
                  >
                    {materialOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                  {touched.material && fieldErrors.material && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.material}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Design Complexity: {complexity}</label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={complexity}
                    onChange={(e) => {
                      const v = e.target.value;
                      setComplexity(v);
                      setFieldErrors((p) => ({ ...p, complexity: Number(v) >= 1 && Number(v) <= 10 ? "" : "Complexity must be 1-10." }));
                    }}
                    onBlur={() => setTouched((t) => ({ ...t, complexity: true }))}
                    className="w-full"
                  />
                  {touched.complexity && fieldErrors.complexity && (
                    <p className="text-sm text-red-600 mt-1">{fieldErrors.complexity}</p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-industrial text-white font-medium hover:bg-blue-900 disabled:opacity-60"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="h-4 w-4 border-2 border-white/70 border-t-transparent rounded-full animate-spin" />
                      Calculating...
                    </span>
                  ) : (
                    "Generate Quote"
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setWidthCm(80);
                    setHeightCm(60);
                    setMaterial("steel");
                    setComplexity(5);
                    setFieldErrors({ widthCm: "", heightCm: "", material: "", complexity: "" });
                    setTouched({ widthCm: false, heightCm: false, material: false, complexity: false });
                    setError("");
                    setEstimatedPrice(null);
                  }}
                  className="btn-secondary"
                >
                  Reset
                </button>
              </div>
            </form>

            {error && (
              <div className="mt-6 rounded-md bg-red-50 p-4 text-red-700">{error}</div>
            )}

            {estimatedPrice !== null && !error && (
              <div className="mt-6 rounded-md bg-green-50 p-4">
                <p className="text-lg text-green-800">
                  Estimated Price: <span className="font-semibold">${estimatedPrice}</span>
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default QuotePage;


