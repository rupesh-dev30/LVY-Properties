import React from "react";

const Flats = () => {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center bg-[url('/src/assets/hero.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50"></div>
        <h1 className="relative text-5xl md:text-6xl font-bold text-white z-10">
          Luxury Flats
        </h1>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 text-gray-700">
        <h2 className="text-3xl font-bold mb-6 text-amber-600">
          Modern Living Spaces
        </h2>
        <p className="mb-8 leading-relaxed text-lg">
          Discover premium flats with world-class amenities, designed for modern
          lifestyles. From cozy apartments to luxury penthouses, we bring you
          the best.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {["Smart Designs", "Great Connectivity", "Luxury Amenities"].map(
            (feature, i) => (
              <div
                key={i}
                className="p-6 border rounded-xl shadow-md hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{feature}</h3>
                <p className="text-gray-600">
                  Comfortable living made affordable.
                </p>
              </div>
            )
          )}
        </div>

        <div className="flex gap-4">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
            View Flats
          </button>
          <button className="border border-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-50 transition">
            Get Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default Flats;
