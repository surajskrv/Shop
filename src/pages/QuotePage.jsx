import React, { useState } from "react";
import axios from "axios";

const QuotePage = () => {
  const [widthCm, setWidthCm] = useState(80);
  const [heightCm, setHeightCm] = useState(60);
  const [material, setMaterial] = useState("steel");
  const [complexity, setComplexity] = useState(5);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [estimatedPrice, setEstimatedPrice] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setEstimatedPrice(null);

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
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Get an Instant Quote
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Width (cm)
                </label>
                <input
                  type="number"
                  min="1"
                  step="0.1"
                  value={widthCm}
                  onChange={(e) => setWidthCm(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height (cm)
                </label>
                <input
                  type="number"
                  min="1"
                  step="0.1"
                  value={heightCm}
                  onChange={(e) => setHeightCm(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material
                </label>
                <select
                  value={material}
                  onChange={(e) => setMaterial(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 shadow-sm"
                >
                  <option value="iron">Iron</option>
                  <option value="steel">Steel</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Design Complexity: {complexity}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={complexity}
                  onChange={(e) => setComplexity(e.target.value)}
                  className="w-full"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center px-6 py-2 rounded-md bg-indigo-600 text-white font-medium hover:bg-indigo-700 disabled:opacity-60"
            >
              {loading ? "Calculating..." : "Generate Quote"}
            </button>
          </form>

          {error && (
            <div className="mt-6 rounded-md bg-red-50 p-4 text-red-700">
              {error}
            </div>
          )}

          {estimatedPrice !== null && !error && (
            <div className="mt-6 rounded-md bg-green-50 p-4">
              <p className="text-lg text-green-800">
                Estimated Price: <span className="font-semibold">${estimatedPrice}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuotePage;


