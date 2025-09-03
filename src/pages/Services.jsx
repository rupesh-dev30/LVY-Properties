import React from "react";
import purchaseImg from "../assets/hero.jpg";
import saleImg from "../assets/hero.jpg";
import villaImg from "../assets/hero2.jpg";
import rentImg from "../assets/hero1.jpg";
import { CheckCircle } from "lucide-react";

const services = [
  {
    title: "Purchase",
    description: "We deal in all Purchase options between the Buyer and Seller",
    image: purchaseImg,
  },
  {
    title: "Sale",
    description: "We deal in all Saleable options between the Buyer and Seller",
    image: saleImg,
  },
  {
    title: "Construct Independent Villa",
    description: "We also deal in construction part of Real Estate",
    image: villaImg,
  },
  {
    title: "Rent",
    description: "We deal in all rental properties in Real Estate",
    image: rentImg,
  },
];

const Services = () => {
  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, #f59e0b 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Content container */}
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 text-amber-600 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>
            <p className="uppercase tracking-widest text-sm font-semibold">
              Our Services
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600"></div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Premium Real Estate
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Solutions
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Developing, maintaining, and managing properties with excellence. We
            assure premium service and high-class real estate solutions to our
            clients.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width Ribbon */}
      <div className="w-full mt-20 bg-gradient-to-r from-amber-500 to-amber-600 shadow-lg">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 py-15 gap-6">
          <h2 className="text-white font-bold text-3xl text-center md:text-left leading-snug">
            Great Experience For Real Estate Property Selling
          </h2>
          <button className="px-6 py-3 bg-white text-amber-600 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
