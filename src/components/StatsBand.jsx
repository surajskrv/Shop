import React from "react";
import { FaIndustry, FaClock, FaStar, FaCheckCircle } from "react-icons/fa";

export default function StatsBand() {
  const items = [
    { icon: <FaIndustry className="h-6 w-6" />, label: "Years in Business", value: "25+" },
    { icon: <FaClock className="h-6 w-6" />, label: "Average Lead Time", value: "3-7 days" },
    { icon: <FaStar className="h-6 w-6" />, label: "Customer Rating", value: "4.9/5" },
    { icon: <FaCheckCircle className="h-6 w-6" />, label: "Projects Delivered", value: "2,000+" },
  ];

  return (
    <section className="bg-light-gray py-10 animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.label} className="bg-white rounded-xl shadow p-5 flex items-center gap-4">
            <div className="text-industrial">{it.icon}</div>
            <div>
              <div className="text-2xl font-extrabold text-steel leading-tight">{it.value}</div>
              <div className="text-sm text-gray-600">{it.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}


