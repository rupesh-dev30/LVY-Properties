import footerBg from "../assets/hero.jpg";
import logo from "../assets/logo.jpeg";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaGoogle,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa6";
import { MapPin, Clock, Phone, Mail, ArrowRight } from "lucide-react";

const usefulLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Blogs", href: "#" },
  { label: "Contact Us", href: "#" },
];

const socialIcons = [
  { icon: <FaFacebookF />, href: "#", name: "Facebook" },
  { icon: <FaInstagram />, href: "#", name: "Instagram" },
  { icon: <FaYoutube />, href: "#", name: "YouTube" },
  { icon: <FaWhatsapp />, href: "#", name: "WhatsApp" },
];

const Footer = () => (
  <footer
    className="relative text-white"
    style={{
      backgroundImage: `url('${footerBg}')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    {/* Enhanced Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/75 to-black/80" />

    <div className="relative max-w-7xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
        {/* Left: Company Info & Contact */}
        <div className="lg:col-span-1 space-y-8">
          {/* Logo Section */}
          <div className="flex items-center gap-4 group">
            <div className="relative">
              <img
                src={logo}
                alt="LVY Properties"
                className="h-16 w-16 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div>
              <h1 className="font-bold text-3xl bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
                LVY Properties
              </h1>
              <p className="text-gray-300 text-sm">
                Premium Real Estate Solutions
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-amber-300 block">
                  Timings:
                </span>
                <span className="text-gray-300">
                  Monday to Sunday - 10 AM To 8 PM
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-blue-300 block">
                  Head Office:
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">
                  213 Second Floor Suncity Arcade Suncity Golf Course Road
                  Sector 54 Gurgaon
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <a
                  href="https://www.google.com/maps/place/LVY+PROPERTIES/@28.2188769,77.4987764,19z/data=!4m14!1m7!3m6!1s0x390cc90054533dbf:0xf28e4ba52ab42703!2sLVY+PROPERTIES!8m2!3d28.2187883!4d77.4987523!16s%2Fg%2F11xmz2h3l1!3m5!1s0x390cc90054533dbf:0xf28e4ba52ab42703!8m2!3d28.2187883!4d77.4987523!16s%2Fg%2F11xmz2h3l1?entry=ttu&g_ep=EgoyMDI1MDkxNi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                >
                  <MapPin className="w-5 h-5 text-white" />
                </a>
              </div>
              <div>
                <span className="font-semibold text-blue-300 block">
                  Branch Office:
                </span>
                <span className="text-gray-300 text-sm leading-relaxed">
                  Shekpur Road, Baghpur, PALWAL, Haryana, 122102
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-emerald-300 block">
                  Phone:
                </span>
                <span className="text-gray-300">
                  +91-9810540670, +91-9654800080
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-semibold text-purple-300 block">
                  E-Mail:
                </span>
                <span className="text-gray-300">lvyestate@outlook.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Middle: About & Social */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="font-bold text-white text-2xl mb-6 flex items-center gap-2">
              About Us
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              With over 10 years of experience in real estate, we partner with
              owners and professionals to build high-quality projects. Our
              commitment to excellence and customer satisfaction sets us apart
              in the industry.
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold text-white text-lg mb-4">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {socialIcons.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  className="group w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-gradient-to-br hover:from-amber-500 hover:to-amber-600 transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  target="_blank"
                  rel="noopener noreferrer"
                  title={item.name}
                >
                  <span className="group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Useful Links */}
        <div className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="font-bold text-white text-2xl mb-6 flex items-center gap-2">
              Quick Links
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
            </h3>
            <ul className="space-y-3">
              {usefulLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-3 text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2"
                  >
                    <ArrowRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform duration-300" />
                    <span className="group-hover:text-amber-300 transition-colors duration-300">
                      {link.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <h4 className="font-semibold text-white text-lg mb-3">
              Stay Updated
            </h4>
            <p className="text-gray-300 text-sm mb-4">
              Get the latest property updates and market insights
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-gray-300 focus:outline-none focus:border-amber-400 transition-colors duration-300"
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-2 rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all duration-300 hover:scale-105">
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="relative border-t border-white/20 py-6 px-6 bg-black/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row gap-4 text-gray-300 text-sm">
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            Terms of Service
          </a>
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            Cookie Policy
          </a>
        </div>
        <div className="text-gray-300 text-sm">
          <span className="font-semibold">LVY Properties</span> © 2025. All
          Rights Reserved.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
