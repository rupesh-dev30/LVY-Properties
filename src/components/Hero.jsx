import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import hero1 from "../assets/hero1.jpeg";
import hero2 from "../assets/hero2.jpeg";
import hero3 from "../assets/hero3.jpeg";

const Hero = () => {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToNext = () => {
    const nextSection = document.querySelector("#about-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen w-full relative overflow-hidden">
      {/* Background Slider */}
      {images.map((img, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full h-screen transition-all duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        >
          <img
            src={img}
            alt={`luxury property ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
      ))}

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-40">
        <div
          className={`text-center px-4 transform transition-all duration-1500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-light tracking-wider mb-4 leading-tight">
              <span className="block font-extralight text-4xl md:text-5xl opacity-90 mb-2">
                Welcome to
              </span>
              <span className="font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                LVY Properties
              </span>
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed opacity-90">
              Crafting exceptional living spaces where luxury meets comfort,
              creating homes that inspire and elevate your lifestyle.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
            <button className="group bg-white text-black px-8 py-4 font-semibold tracking-wide transition-all duration-300 hover:bg-opacity-90 hover:scale-105 hover:shadow-2xl">
              <span className="group-hover:tracking-wider transition-all duration-300">
                EXPLORE PROPERTIES
              </span>
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 font-semibold tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:scale-105">
              <span className="group-hover:tracking-wider transition-all duration-300">
                GET CONSULTATION
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 cursor-pointer group"
      >
        <div className="flex flex-col items-center text-white">
          <span className="text-sm tracking-widest mb-2 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
            SCROLL
          </span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:scale-110 transition-transform duration-300" />
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 right-8 z-40 flex flex-col gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-1 h-8 transition-all duration-300 ${
              index === current
                ? "bg-white shadow-lg"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
