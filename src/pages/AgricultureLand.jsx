import React from "react";

const AgricultureLand = () => {
  return (
    <div>
      {/* Banner */}
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/src/assets/hero1.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white z-10">
          Agriculture Land
        </h1>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">Overview</h2>
        <p className="mb-8 leading-relaxed text-lg">
          Discover fertile agriculture lands ideal for farming, investment, and
          sustainable living. Our curated plots provide opportunities to embrace
          nature while enjoying long-term growth and value.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {["Fertile Soil", "Water Access", "Prime Locations"].map(
            (feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Premium facilities and great investment potential.
                </p>
              </div>
            )
          )}
        </div>

        <div className="flex gap-4">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
            Book a Visit
          </button>
          <button className="border border-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
            Get Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default AgricultureLand;
