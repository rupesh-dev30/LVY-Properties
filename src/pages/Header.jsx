import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import hero1 from "../assets/hero.jpg";
import hero2 from "../assets/hero1.jpg";
import hero3 from "../assets/hero2.jpg";

const Header = () => {
  const images = [hero1, hero2, hero3];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="min-h-screen w-full relative overflow-hidden text-white">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute top-0 left-0 w-full h-screen object-cover transition-opacity duration-1000 ${
            index === current ? "opacity-100 animate-zoom" : "opacity-0"
          }`}
        />
      ))}

      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold drop-shadow-lg text-center px-4">
          Welcome to LVY Properties
        </h1>
      </div>

      <style>{`
        @keyframes zoomIn {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        .animate-zoom {
          animation: zoomIn 6s linear forwards;
        }
      `}</style>
    </div>
  );
};

export default Header;
