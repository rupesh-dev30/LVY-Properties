import React, { useState } from "react";
import historyImg from "../assets/hero.jpg";

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
      "Why is my home’s assessed value different from the market value?",
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

const History = () => {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="w-full bg-gray-50 py-12">
      {/* Heading and subtitle */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-indigo-600 uppercase tracking-widest mb-2 text-sm font-semibold relative flex items-center justify-center">
          <span className="inline-block h-0.5 w-12 bg-indigo-600 mr-3" />
          OUR HISTORY
          <span className="inline-block h-0.5 w-12 bg-indigo-600 ml-3" />
        </p>
        <h1 className="text-4xl font-bold mb-2">The story of our success</h1>
        <p className="mt-4 text-gray-700">
          LVY Properties Sector 10 Faridabad started with a vision to give the
          customer premium property with affordable market rates. With 30 years
          of experience in Real Estate, Mr Sanjay LVY has assured that every
          customer should get a property with all the facilities that one wants.
          Since 1995 we are serving the customers with great pride and a
          responsibility too
        </p>
      </div>
      {/* Main Content: Image + FAQ */}
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row gap-12 items-center justify-center">
        {/* Left: House image */}
        <div className="flex-1 flex items-center justify-center min-h-[600px]">
          <img
            src={historyImg}
            alt="3D house on blueprint"
            className="w-full max-w-md rounded-lg shadow-lg object-cover h-[450px]"
          />
        </div>
        {/* Right: FAQ */}
        <div className="flex-1 w-full">
          <h2 className="text-2xl font-bold mb-6 uppercase tracking-tight text-center md:text-left">
            Frequently Asked Questions in Real Estate
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-md bg-white shadow-sm transition"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="flex items-center justify-between w-full px-4 py-3 focus:outline-none"
                >
                  <div className="flex items-center space-x-3 text-left">
                    <span className="text-indigo-800 text-lg">✔</span>
                    <span className="font-semibold text-base text-gray-800">
                      {faq.question}
                    </span>
                  </div>
                  <span className="text-indigo-900 text-xl font-bold transition">
                    {openIdx === idx ? "–" : "+"}
                  </span>
                </button>
                {/* Answer */}
                <div
                  className={`px-4 pb-3 text-gray-700 text-sm transition-all duration-300 overflow-hidden ${
                    openIdx === idx ? "max-h-40" : "max-h-0"
                  }`}
                  style={{ transition: "max-height 0.3s ease" }}
                >
                  {openIdx === idx && <div>{faq.answer}</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
