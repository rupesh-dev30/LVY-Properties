import React, { useState, useEffect } from "react";
import user1 from "../assets/hero1.jpg";
import user2 from "../assets/hero.jpg";
import user3 from "../assets/hero.jpg";
import user4 from "../assets/hero.jpg";
import user5 from "../assets/hero.jpg";

const testimonials = [
  {
    name: "SURENDER KUMAR",
    title: "DIRECTOR (CITIZEN PROPERTIES)",
    highlight:
      "Thoroughly Professional, Helpful and Understanding Real Estate Agents!",
    content:
      "“I had contacted many estate agents before coming to Faridabad but there was something extraordinary about Mr. LVY that I chose to go with him for my independent house villa. He takes care to maintain contact to see if there are things that he could help with. I will highly recommend Mr. LVY, in particular, if you are looking for a thoroughly professional, helpful and understanding estate agents for your needs.”",
    image: user1,
  },
  {
    name: "TILAK SATIJA",
    title: "C.E.O (NAVYUG PROPERTIES)",
    highlight: "Very sharp, knowledgeable and efficient!",
    content:
      "“They are very nice people and I am very happy with them and their work. They did what others couldn’t do and within a short span of time. Very genuine and honest people. Keep up the good work and keep bringing a smile on someone’s face like you did for me. Lots of best wishes, blessings, love, light, prosperity, and power to both of you.”",
    image: user2,
  },
  {
    name: "MAHESH SHARMA",
    title: "C.O.O (RAMA PROPERTIES)",
    highlight: "Brilliant Team, Relentless Efforts & Very Helpful!",
    content:
      "“I have met several real estate agents in Faridabad and somehow Mr. Sanjay LVY has an in-born gift to understand exactly what clients want and he delivers bang-on! It was a pleasure to deal with them and honestly I have recommended them to a lot of my friends already!!”",
    image: user3,
  },
  {
    name: "NEW TESTIMONIAL 1",
    title: "MANAGER (NEW COMPANY)",
    highlight: "Outstanding service and support!",
    content: "“Excellent communication and very professional team.”",
    image: user4,
  },
  {
    name: "NEW TESTIMONIAL 2",
    title: "CEO (ANOTHER COMPANY)",
    highlight: "Highly recommend for real estate needs!",
    content: "“Quick responses and reliable advice throughout the purchase.”",
    image: user5,
  },
];

const Testimonial = () => {
  // State to track visible count (1, 2 or 3)
  const [visibleCount, setVisibleCount] = useState(3);

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
  const containerWidthPercent = visibleCount * 100;
  const cardWidthPercent = 100 / visibleCount;

  const [startIdx, setStartIdx] = useState(0);

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

  const translatePercentage = -startIdx * cardWidthPercent;

  return (
    <section className="w-full bg-white py-12 relative">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-indigo-600 uppercase tracking-widest mb-2 text-sm font-semibold flex items-center justify-center relative">
            <span className="inline-block h-0.5 w-12 bg-indigo-600 mr-3" />
            Testimonial
            <span className="inline-block h-0.5 w-12 bg-indigo-600 ml-3" />
          </p>
          <h1 className="text-4xl font-bold mb-4">Industry Patronage</h1>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-4 transition-transform duration-500 ease-in-out"
            style={{
              width: `${containerWidthPercent}%`,
              transform: `translateX(${translatePercentage}%)`,
            }}
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="flex-1 flex flex-col items-center bg-white rounded-lg shadow-md p-6 border border-gray-300 mx-1 max-w-[350px]"
                style={{ width: `${cardWidthPercent}%` }}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-gray-100"
                />
                <div className="font-bold uppercase text-lg">{t.name}</div>
                <div className="text-xs text-gray-400 font-semibold mb-2">
                  {t.title}
                </div>
                <div className="font-semibold text-indigo-900 mb-3 text-center">
                  {t.highlight}
                </div>
                <div className="text-sm text-gray-700 text-center">
                  {t.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 justify-center mt-6">
          <button
            onClick={prev}
            disabled={startIdx === 0}
            className={`w-12 h-12 rounded flex items-center justify-center text-2xl font-bold transition ${
              startIdx === 0
                ? "bg-indigo-300 cursor-not-allowed text-white"
                : "bg-indigo-900 text-white hover:bg-indigo-700"
            }`}
            aria-label="Previous"
          >
            ←
          </button>
          <button
            onClick={next}
            disabled={startIdx === maxStartIdx}
            className={`w-12 h-12 rounded flex items-center justify-center text-2xl font-bold transition ${
              startIdx === maxStartIdx
                ? "bg-indigo-300 cursor-not-allowed text-white"
                : "bg-indigo-900 text-white hover:bg-indigo-700"
            }`}
            aria-label="Next"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
