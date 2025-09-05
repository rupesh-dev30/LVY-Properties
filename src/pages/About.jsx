import Detail from "../assets/detail.jpg";
import { Building2, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { number: "10+", label: "Years Experience", icon: Award },
  { number: "300+", label: "Happy Clients", icon: Users },
  { number: "50+", label: "Projects Completed", icon: Building2 },
  { number: "95%", label: "Client Satisfaction", icon: TrendingUp },
];

const About = () => {
  return (
    <section id="about-section" className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Text */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-amber-600">
                <div className="w-12 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600"></div>
                <p className="uppercase tracking-widest text-sm font-semibold">
                  Focusing on Feature of Housing
                </p>
              </div>
              
              <div className="space-y-2">
                <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  FOCUSING ON
                </h2>
                <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent leading-tight">
                  REAL ESTATE
                </h2>
              </div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg">
                Leveraging the years of experience, we have gained across all our
                projects, <span className="font-semibold text-gray-900">LVY Properties</span> is here to provide a
                state-of-the-infrastructure and luxury lifestyle through our BPTP
                Plots in Faridabad and BPTP Builder Floors in Faridabad.
              </p>
              <p>
                Welcome to LVY Properties, where we make luxury lifestyle and
                cutting-edge amenities available to all at affordable prices. Our commitment
                to excellence ensures every client receives premium service.
              </p>
              <p>
                Once you choose LVY Properties, you give yourself an opportunity to
                live a high-class and comfortable lifestyle with unmatched quality
                and sophisticated design standards.
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button className="group bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:scale-105 hover:from-amber-600 hover:to-amber-700">
                <span className="group-hover:tracking-wider transition-all duration-300">
                  LEARN MORE ABOUT US
                </span>
              </button>
            </div>
          </div>

          {/* Right Side - Image with overlay */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={Detail}
                alt="LVY Properties"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Floating Stats Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 2).map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-amber-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;