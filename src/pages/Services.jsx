import purchaseImg from "../assets/hero.jpg";
import saleImg from "../assets/hero.jpg";
import villaImg from "../assets/hero1.jpg";
import rentImg from "../assets/hero.jpg";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    title: "Purchase",
    description: "We deal in all Purchase options between the Buyer and Seller",
    image: purchaseImg,
  },
  {
    title: "Sale",
    description: "We deal in all Saleable options between the Buyer and Seller",
    image: saleImg,
  },
  {
    title: "Construct independent villa",
    description: "We also deal in construction part of Real Estate",
    image: villaImg,
  },
  {
    title: "Rent",
    description: "We deal in all rental properties in Real Estate",
    image: rentImg,
  },
];

const Services = () => (
  <section className="w-full bg-white py-12 relative">
    <div className="max-w-6xl mx-auto px-4">
      <div className="text-center mb-10">
        <p className="text-indigo-600 uppercase tracking-widest mb-2 text-sm">
          OUR SERVICES
        </p>
        <h1 className="text-4xl font-bold">
          Leading Real Estate consultancy firm in <br />
          <span className="text-indigo-600">Purchasing &amp; Selling</span> of
          the Real Estate Property
        </h1>
        <p className="mt-4 text-gray-600">
          Developing, Maintaining and Managing are main aspect of our services
          and assuring high class premium property to our clients
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, idx) => (
          <ServiceCard
            key={idx}
            title={service.title}
            description={service.description}
            image={service.image}
          />
        ))}
      </div>
    </div>
    {/* Bottom Ribbon - move OUTSIDE max-w container */}
    <div className="w-full mt-12 h-[150px] bg-blue-800 flex flex-col items-center justify-center px-5">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mx-auto gap-8 lg:px-3">
        <h2 className="text-white font-bold text-3xl text-center md:text-left">
          Great Experience For Real Estate Property Selling
        </h2>
        <button className="px-6 py-3 bg-black text-white rounded-sm mt-6 md:mt-0">
          Contact Us
        </button>
      </div>
    </div>
  </section>
);


export default Services;
