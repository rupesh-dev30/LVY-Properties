import { Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import About from "./pages/About";
import Services from "./pages/Services";
import History from "./pages/History";
import Testimonial from "./pages/Testimonial";
import Footer from "./pages/Footer";
import AgricultureLand from "./pages/AgricultureLand";
import FarmHouse from "./pages/FarmHouse";
import Plots from "./pages/Plots";
import Flats from "./pages/Flats";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <About />
              <Services />
              <History />
              <Testimonial />
              <Contact />
            </>
          }
        />
        <Route path="/agriculture-land" element={<AgricultureLand />} />
        <Route path="/farm-house" element={<FarmHouse />} />
        <Route path="/plots" element={<Plots />} />
        <Route path="/Flats" element={<Flats />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
