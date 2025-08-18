import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const team = [
  { name: "Alex Turner", role: "Founder & CEO", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { name: "Jamie Smith", role: "Lead Fabricator", img: "https://randomuser.me/api/portraits/men/45.jpg" },
  { name: "Morgan Lee", role: "Project Manager", img: "https://randomuser.me/api/portraits/women/44.jpg" },
];

export default function About() {
  return (
    <>
      <Header />
      <section className="bg-gradient-to-r from-industrial via-gray-100 to-steel py-20 px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-extrabold text-steel mb-4 drop-shadow">About Us</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">MetalWorks has been delivering precision metal fabrication since 1998. Our mission is to provide custom solutions with unmatched quality and reliability for every client.</p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-8">
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[250px]">
              <h2 className="text-2xl font-bold text-industrial mb-2">Our Story</h2>
              <p className="text-gray-600">Founded by Alex Turner, MetalWorks started as a small workshop and has grown into a leading provider of industrial and architectural metalwork. We pride ourselves on our craftsmanship, innovation, and customer focus.</p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 flex-1 min-w-[250px]">
              <h2 className="text-2xl font-bold text-industrial mb-2">Our Values</h2>
              <ul className="text-gray-600 list-disc list-inside">
                <li>Quality & Precision</li>
                <li>Integrity & Trust</li>
                <li>Innovation</li>
                <li>Customer Satisfaction</li>
              </ul>
            </div>
          </div>
          <h2 className="text-3xl font-bold text-steel mb-6 mt-12">Meet the Team</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {team.map(member => (
              <div key={member.name} className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-60">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-industrial" />
                <h3 className="font-bold text-xl text-industrial mb-1">{member.name}</h3>
                <span className="text-gray-600 mb-2">{member.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
} 