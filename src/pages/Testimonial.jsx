import React, { useState, useEffect } from "react";
import user1 from "../assets/hero1.jpg";
import user2 from "../assets/hero.jpg";
import user3 from "../assets/hero.jpg";
import user4 from "../assets/hero.jpg";
import user5 from "../assets/hero.jpg";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "SURENDER",
    title: "DIRECTOR (CITIZEN PROPERTIES)",
    highlight:
      "Thoroughly Professional, Helpful and Understanding Real Estate Agents!",
    content:
      "I had contacted many estate agents before coming to Faridabad but there was something extraordinary about Mr. LVY that I chose to go with him for my independent house villa. He takes care to maintain contact to see if there are things that he could help with. I will highly recommend Mr. LVY, in particular, if you are looking for a thoroughly professional, helpful and understanding estate agents for your needs.",
    image: user1,
    rating: 5
  },
  {
    name: "TILAK SATIJA",
    title: "C.E.O (NAVYUG PROPERTIES)",
    highlight: "Very sharp, knowledgeable and efficient!",
    content:
      "They are very nice people and I am very happy with them and their work. They did what others couldn't do and within a short span of time. Very genuine and honest people. Keep up the good work and keep bringing a smile on someone's face like you did for me. Lots of best wishes, blessings, love, light, prosperity, and power to both of you.",
    image: user2,
    rating: 5
  },
  {
    name: "MAHESH SHARMA",
    title: "C.O.O (RAMA PROPERTIES)",
    highlight: "Brilliant Team, Relentless Efforts & Very Helpful!",
    content:
      "I have met several real estate agents in Faridabad and somehow Mr. Sanjay LVY has an in-born gift to understand exactly what clients want and he delivers bang-on! It was a pleasure to deal with them and honestly I have recommended them to a lot of my friends already!!",
    image: user3,
    rating: 5
  },
  {
    name: "RAJESH GUPTA",
    title: "MANAGER (PREMIUM ESTATES)",
    highlight: "Outstanding service and support!",
    content: "Excellent communication and very professional team. They guided us through every step of the property purchase process with patience and expertise.",
    image: user4,
    rating: 5
  },
  {
    name: "PRIYA SHARMA",
    title: "CEO (GOLDEN PROPERTIES)",
    highlight: "Highly recommend for real estate needs!",
    content: "Quick responses and reliable advice throughout the purchase. Their market knowledge and negotiation skills saved us both time and money.",
    image: user5,
    rating: 5
  },
];

const Testimonial = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const [startIdx, setStartIdx] = useState(0);

  // Update visibleCount based on window width (responsive breakpoints)
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3); // lg and above
      else if (window.innerWidth >= 768) setVisibleCount(2); // md screens
      else setVisibleCount(1); // sm screens
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const maxStartIdx = testimonials.length - visibleCount;

  // Reset startIdx if visibleCount changes to avoid empty slide
  useEffect(() => {
    if (startIdx > maxStartIdx) {
      setStartIdx(maxStartIdx > 0 ? maxStartIdx : 0);
    }
  }, [visibleCount, maxStartIdx, startIdx]);

  const prev = () => {
    setStartIdx((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const next = () => {
    setStartIdx((prev) => (prev < maxStartIdx ? prev + 1 : prev));
  };

  const translatePercentage = -startIdx * (100 / visibleCount);

  return (
    <section className="w-full py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #FFFAE3 2px, transparent 2px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 text-amber-600 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-amber-600"></div>
            <p className="uppercase tracking-widest text-sm font-semibold">
              Testimonials
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-amber-600"></div>
          </div>
          
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Industry
            <br />
            <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
              Patronage
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our valued clients and industry partners about their experiences with LVY Properties
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex gap-6 transition-transform duration-500 ease-in-out"
              style={{
                width: `${(testimonials.length / visibleCount) * 100}%`,
                transform: `translateX(${translatePercentage}%)`,
              }}
            >
              {testimonials.map((testimonial, idx) => (
                <div
                  key={idx}
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 overflow-hidden"
                  style={{ width: `${100 / testimonials.length}%` }}
                >
                  {/* Card Header */}
                  <div className="relative p-8 pb-6">
                    

                    {/* Profile Section */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-blue-100 group-hover:border-blue-200 transition-colors duration-300"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center">
                          <Quote className="w-3 h-3 text-white" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-amber-600 transition-colors duration-300">
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-gray-500 font-medium">
                          {testimonial.title}
                        </p>
                        
                        {/* Star Rating */}
                        <div className="flex gap-1 mt-2">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Highlight */}
                    <div className="mb-4">
                      <h4 className="font-bold text-amber-900 text-lg leading-tight">
                        {testimonial.highlight}
                      </h4>
                    </div>

                    {/* Content */}
                    <div className="text-gray-700 leading-relaxed">
                      <p className="italic">"{testimonial.content}"</p>
                    </div>

                    {/* Decorative Element */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-amber-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              disabled={startIdx === 0}
              className={`group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                startIdx === 0
                  ? "bg-gray-200 cursor-not-allowed text-gray-400"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:scale-110"
              }`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform duration-200" />
            </button>
            
            <button
              onClick={next}
              disabled={startIdx === maxStartIdx}
              className={`group w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                startIdx === maxStartIdx
                  ? "bg-gray-200 cursor-not-allowed text-gray-400"
                  : "bg-gradient-to-r from-amber-500 to-amber-600 text-white hover:shadow-lg hover:scale-110"
              }`}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxStartIdx + 1 }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setStartIdx(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === startIdx
                    ? "bg-gradient-to-r from-amber-500 to-amber-600 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to testimonial set ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;