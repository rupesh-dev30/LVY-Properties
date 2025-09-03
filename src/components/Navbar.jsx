import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logo from "../assets/logo.jpeg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false);

  // Logo placeholder - using a simple design
  const LogoComponent = () => (
    <div className="flex items-center gap-3">
      <div className="w-16 h-12 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg flex items-center justify-center shadow-lg">
        <img src={logo} alt="LVY Properties" className="h-16 w-16 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-110" />
      </div>
      <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
        LVY Properties
      </h1>
    </div>
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects', hasDropdown: true },
    { name: 'Blogs', href: '#blogs' },
    { name: 'Contact Us', href: '#contact' },
  ];

  const projectItems = [
    { name: 'Luxury Villas', href: '#luxury-villas' },
    { name: 'Modern Apartments', href: '#apartments' },
    { name: 'Commercial Spaces', href: '#commercial' },
    { name: 'Investment Properties', href: '#investment' }
  ];

  return (
    <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-xl' 
        : 'bg-gradient-to-b from-black/20 to-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
            <LogoComponent />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.name} className="relative group">
                {item.hasDropdown ? (
                  <div className="relative">
                    <button 
                      className={`flex items-center gap-1 font-semibold transition-all duration-300 hover:scale-105 ${
                        scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
                      }`}
                      onMouseEnter={() => setProjectsOpen(true)}
                      onMouseLeave={() => setProjectsOpen(false)}
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${projectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {/* Desktop Dropdown */}
                    <div 
                      className={`absolute left-0 top-full mt-2 w-56 transition-all duration-300 ${
                        projectsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                      onMouseEnter={() => setProjectsOpen(true)}
                      onMouseLeave={() => setProjectsOpen(false)}
                    >
                      <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">
                        <div className="py-2">
                          {projectItems.map((project, index) => (
                            <a
                              key={project.name}
                              href={project.href}
                              className={`block px-6 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-amber-600 transition-all duration-200 ${
                                index === 0 ? 'border-b border-gray-100' : ''
                              }`}
                            >
                              <span className="font-medium">{project.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <a 
                    href={item.href}
                    className={`relative font-semibold transition-all duration-300 hover:scale-105 ${
                      scrolled ? 'text-gray-800 hover:text-amber-600' : 'text-white hover:text-amber-300'
                    }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Contact Info */}
          <div className={`hidden lg:flex items-center gap-3 transition-colors duration-300 ${
            scrolled ? 'text-gray-800' : 'text-white'
          }`}>
            <div className="flex items-center gap-2 bg-gradient-to-r from-amber-400 to-amber-600 text-white px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Phone className="h-4 w-4" />
              <span className="font-semibold text-sm">
                +91-9810540670
              </span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
          <ul className="py-4">
            {navItems.map((item) => (
              <li key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                      className="flex justify-between items-center w-full px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-amber-600 transition-all duration-300 font-semibold"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${mobileProjectsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`transition-all duration-300 overflow-hidden ${
                      mobileProjectsOpen ? 'max-h-64' : 'max-h-0'
                    }`}>
                      <div className="bg-gray-50">
                        {projectItems.map((project) => (
                          <a
                            key={project.name}
                            href={project.href}
                            className="block px-10 py-3 text-gray-600 hover:text-amber-600 hover:bg-white transition-all duration-200"
                            onClick={() => setIsOpen(false)}
                          >
                            {project.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-6 py-4 text-gray-800 hover:bg-gradient-to-r hover:from-amber-50 hover:to-amber-100 hover:text-amber-600 transition-all duration-300 font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                )}
              </li>
            ))}
            <li className="px-6 py-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <div className="text-sm">
                  <div className="font-semibold">+91-9810540670</div>
                  <div>+91-9654800080</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;