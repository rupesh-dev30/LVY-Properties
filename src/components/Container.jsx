const Container = ({ title, description, logo }) => {
  return (
    <div className="p-10 bg-white shadow-lg rounded flex flex-col items-center">
      {logo && (
        <img src={logo} alt={title} className="w-12 h-12 mb-4" />
      )}
      <h4 className="text-lg font-semibold mb-2">{title}</h4>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

export default Container;
