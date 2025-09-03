import React, { useState } from "react";
import historyImg from "../assets/hero.jpg";
import { ChevronDown, Award, Users, Building2, CheckCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Carpet Area in Real Estate ?",
    answer:
      "Carpet Area means the net usable floor area of an apartment, excluding the external walls and certain other areas, but including internal partition walls.",
  },
  {
    question: "Why it is considered necessary to register Agreement for Sale?",
    answer:
      "Registration makes the agreement legally valid and enforceable in a court of law, and protects the interests of both buyer and seller.",
  },
  {
    question: "What are the Tax Implications with regard to Capital Gains?",
    answer:
      "Selling property may incur capital gains tax, depending on the period of ownership and applicable exemptions as per local tax laws.",
  },
  {
    question:
      "Why is my home's assessed value different from the market value?",
    answer:
      "Assessed value is for tax purposes and may differ from the actual market value, which can fluctuate based on supply and demand.",
  },
  {
    question:
      "What are the services that a real estate advisor can provide to me?",
    answer:
      "Advisors assist with property search, legal procedures, market analysis, negotiations, and post-sale support.",
  },
];

const achievements = [
  { icon: Award, number: "30+", label: "Years of Excellence" },
  { icon: Users, number: "500+", label: "Satisfied Clients" },
  { icon: Building2, number: "100+", label: "Successful Projects" },
];

const History = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-gradient-to-br from-gray-50 to-white py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 75% 25%, #3b82f6 2px, transparent 2px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header Section */}
        <div className="text-center mb-16 space-y-6">
          <div className="flex items-center justify-center gap-3 text-blue-600 mb-4">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-blue-600"></div>
            <p className="uppercase tracking-widest text-sm font-semibold">
              Our History
            </p>
            <div className="w-12 h-0.5 bg-gradient-to-l from-transparent to-blue-600"></div>
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            The Story of Our
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
              Success
            </span>
          </h1>

          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            LVY Properties Sector 10 Faridabad started with a vision to give the
            customer premium property with affordable market rates. With 30 years
            of experience in Real Estate, Mr Sanjay LVY has assured that every
            customer should get a property with all the facilities that one wants.
            Since 1995 we are serving the customers with great pride and a
            responsibility too.
          </p>
        </div>

        {/* Achievements Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <achievement.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </div>
          ))}
        </div>

        {/* Main Content: Image + FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: House image */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={historyImg}
                alt="3D house on blueprint"
                className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>

              {/* Floating Achievement Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    Since 1995
                  </div>
                  <div className="text-sm text-gray-600">Serving with Pride</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: FAQ */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">
                Frequently Asked Questions
                <br />
                <span className="text-blue-600">in Real Estate</span>
              </h2>
              <p className="text-gray-600">
                Get answers to the most common questions about real estate
                transactions and processes.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="group bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="flex items-center justify-between w-full px-6 py-5 focus:outline-none text-left hover:bg-gray-50 transition-colors duration-200"
                  >
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mt-0.5">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
                        {faq.question}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openIdx === idx ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>

                  {/* Answer */}
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openIdx === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-5">
                      <div className="pl-10 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
