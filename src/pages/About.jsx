import Detail from "../assets/detail.jpg";
import PurchaseLogo from "../assets/building.png";
import SaleLogo from "../assets/buildings.png";
import ConstructionLogo from "../assets/increasing.png";
import Container from "../components/Container";

const containers = [
  {
    title: "Purchase",
    logo: PurchaseLogo,
    description: "We deal with all the purchasing in Real Estate",
  },
  {
    title: "Sale",
    logo: SaleLogo,
    description: "We deal in all Saleable options between the Buyer and Seller",
  },
  {
    title: "Construction",
    logo: ConstructionLogo,
    description: "We also deal in construction part of Real Estate",
  },
];

const About = () => {
  return (
    <section className="w-full bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Text */}
        <div className="space-y-6">
          <p className="text-gray-500 uppercase tracking-widest text-sm">
            FOCUSING ON FEATURE OF HOUSING ______
          </p>
          <h3 className="text-4xl font-bold text-gray-900">FOCUSING ON REAL</h3>
          <h3 className="text-4xl font-bold text-gray-900">ESTATE</h3>

          <p className="text-gray-700 leading-relaxed">
            Leveraging the years of experience, we have gained across all our
            projects, LVY Properties is here to provide a
            state-of-the-infrastructure and luxury lifestyle through our BPTP
            Plots in Faridabad and BPTP Builder Floors in Faridabad
          </p>
          <p className="text-gray-700 leading-relaxed">
            Welcome to LVY Properties, where we make luxury lifestyle and
            cutting-edge amenities available to all at affordable price...
          </p>
          <p className="text-gray-700 leading-relaxed">
            Once you choose LVY Properties, you give yourself an opportunity to
            live a high-class and comfortable lifestyle...
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex justify-center md:justify-end h-[400px]">
          <img
            src={Detail}
            alt="LVY Properties"
            className="w-full max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Container Cards */}
      <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-6">
        {containers.map((container, idx) => (
          <Container
            key={idx}
            title={container.title}
            description={container.description}
            logo={container.logo}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
