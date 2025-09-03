import React from "react";
import footerBg from "../assets/hero.jpg"; // Background image
import logo from "../assets/phone.png"; // Logo image
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGoogle,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";

// const propertyLinks1 = [
//   "Property For Sale in Faridabad",
//   "Homes for Rent in Faridabad",
//   "Land for Sale in Faridabad",
//   "BPTP Discovery Park Flats in Faridabad",
//   "BPTP Plots in Faridabad",
//   "PURI Amanvilas Flats in Faridabad",
//   "TDI Retreat Plots in Faridabad",
//   "Kothi For Sale in Sector 7 Faridabad",
// ];

// const propertyLinks2 = [
//   "BPTP Villas in Faridabad",
//   "BPTP Parklands Plots in Faridabad",
//   "BPTP Eden Estate Plots in Faridabad",
//   "BPTP Builder Floors in Faridabad",
//   "BPTP District Plots",
//   "BPTP District Plots Sector 84",
//   "BPTP District Plots Sector 85",
//   "Godrej Retreat Plots in Faridabad",
// ];

// const propertyLinks3 = [
//   "Deen Dayal Plots in Faridabad",
//   "BPTP District Plots",
//   "Kothi For Sale In Sector-85 Faridabad",
//   "Kothi For Sale in Sector-15 Faridabad",
//   "Residential Plots in Faridabad.",
//   "Commercial Projects in Faridabad",
//   "Best Property Dealer in HUDA",
//   "Best Property Dealer In Greater Faridabad",
// ];

// const propertyLinks4 = [
//   "Kothi For Sale In HUDA Sector Faridabad",
//   "Kothi For Sale in Sector-10 Faridabad",
//   "Kothi For Sale in Sector-14 Faridabad",
//   "L.A DIMORA Plots in Faridabad",
//   "Industry for Sale in Faridabad",
//   "Kothi For Sale in Sector-15 Faridabad",
// ];

const usefulLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "#" },
  { icon: <FaXTwitter />, href: "#" },
  { icon: <FaInstagram />, href: "#" },
  { icon: <FaYoutube />, href: "#" },
  { icon: <FaGoogle />, href: "#" },
  { icon: <FaWhatsapp />, href: "#" },
  { icon: <FaLinkedinIn />, href: "#" },
];

const Footer = () => (
  <footer
    className="relative text-gray-200"
    style={{
      backgroundImage: `url('${footerBg}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-75" />

    <div className="relative max-w-7xl mx-auto px-5 py-12">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
        {/* Left: Contact & Logo */}
        <div className="flex-1 min-w-[230px]">
          <img src={logo} alt="LVY Properties" className="h-12 mb-6" />
          <div className="mb-2 flex items-start">
            <span className="inline-block mt-1 text-indigo-400 mr-2">⌚</span>
            <span>
              <span className="font-semibold text-indigo-300">Timings:</span>{" "}
              Monday to Sunday - 10 Am To 8 Pm
            </span>
          </div>
          <div className="mb-2 flex items-start">
            <span className="inline-block mt-1 text-indigo-400 mr-2">🏢</span>
            <span>
              <span className="font-semibold text-indigo-300">
                Head Office:
              </span>{" "}
              LVY Properties 109, 9-10 Dividing Rd, Sector 10, Faridabad,
              Haryana
            </span>
          </div>
          <div className="mb-2 flex items-start">
            <span className="inline-block mt-1 text-indigo-400 mr-2">📞</span>
            <span>
              <span className="font-semibold text-indigo-300">Phone:</span>{" "}
              +91-9899299948, +91-9899021991
            </span>
          </div>
          <div className="flex items-start">
            <span className="inline-block mt-1 text-indigo-400 mr-2">✉️</span>
            <span>
              <span className="font-semibold text-indigo-300">E-Mail:</span>{" "}
              info@LVYProperties.com
            </span>
          </div>
        </div>

        {/* Middle: About & Social */}
        <div className="flex-1 min-w-[230px]">
          <h3 className="font-bold text-white text-lg mb-4">About Us</h3>
          <p className="text-gray-200 text-sm mb-4">
            With over 30 years of experience in real estate, we partner with
            owners and professionals to build high-quality projects.
          </p>
          <div className="flex space-x-4 mb-4">
            {socialIcons.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                className="w-9 h-9 flex items-center justify-center rounded bg-white text-gray-700 hover:bg-indigo-500 hover:text-white transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Useful Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-bold text-white text-lg mb-4">Useful Links</h3>
          <ul className="space-y-2">
            {usefulLinks.map((l, idx) => (
              <li key={idx}>
                <a
                  href={l.href}
                  className="hover:text-indigo-400 flex items-center"
                >
                  <span className="mr-2 text-indigo-400">➤</span>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Property Links */}
      {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-8 text-sm">
        <ul className="space-y-1">
          {propertyLinks1.map((l, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2 text-indigo-400">›</span>
              {l}
            </li>
          ))}
        </ul>
        <ul className="space-y-1">
          {propertyLinks2.map((l, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2 text-indigo-400">›</span>
              {l}
            </li>
          ))}
        </ul>
        <ul className="space-y-1">
          {propertyLinks3.map((l, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2 text-indigo-400">›</span>
              {l}
            </li>
          ))}
        </ul>
        <ul className="space-y-1">
          {propertyLinks4.map((l, i) => (
            <li key={i} className="flex items-center">
              <span className="mr-2 text-indigo-400">›</span>
              {l}
            </li>
          ))}
        </ul>
      </div> */}
    </div>

    {/* Bottom Bar */}
    <div className="relative border-t border-gray-800 py-3 px-4 text-gray-300 flex justify-between items-center text-xs bg-black bg-opacity-80">
      <span>Privacy Policy</span>
      <span>LVY Properties © 2025. All Rights Reserved.</span>
    </div>
  </footer>
);

export default Footer;
