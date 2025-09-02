const ServiceCard = ({ title, description, image }) => (
  <div className="relative rounded-lg overflow-hidden shadow-lg">
    <img src={image} alt={title} className="w-full h-56 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
      <p className="text-white text-center">{description}</p>
    </div>
  </div>
);

export default ServiceCard;
