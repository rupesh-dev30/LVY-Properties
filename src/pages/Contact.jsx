import { useState } from "react";
import map from "../assets/map.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false); // loading state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // start loading
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        alert(data.error || "Something went wrong");
      }
    } catch {
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false); // stop loading
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title with gradient style */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
          Contact Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-xl shadow-lg flex flex-col gap-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-400 transition"
            ></textarea>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-amber-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-amber-600 transition-all flex items-center justify-center gap-2"
              disabled={loading} // disable while loading
            >
              {loading ? (
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
              ) : null}
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col justify-center gap-6 text-gray-700">
            <h3 className="text-2xl font-bold">Contact Information</h3>
            <p>
              <strong>Phone:</strong> +91-9810540670, +91-9654800080
            </p>
            <p>
              <strong>Email:</strong> info@lvyproperties.com
            </p>
            <p>
              <strong>Address:</strong> 123, Luxury Villas Street, New Delhi,
              India
            </p>
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
              <a
                href="https://www.google.com/maps/place/LVY+PROPERTIES/@28.2188769,77.4987764,19z/data=!4m14!1m7!3m6!1s0x390cc90054533dbf:0xf28e4ba52ab42703!2sLVY+PROPERTIES!8m2!3d28.2187883!4d77.4987523!16s%2Fg%2F11xmz2h3l1!3m5!1s0x390cc90054533dbf:0xf28e4ba52ab42703!8m2!3d28.2187883!4d77.4987523!16s%2Fg%2F11xmz2h3l1?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
              >
                <img src={map} alt="map" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
