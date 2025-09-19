import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Header = () => {
  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <Hero />
    </div>
  );
};

export default Header;
