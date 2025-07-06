import { FaSearch, FaShoppingCart, FaChartLine, FaBookOpen } from "react-icons/fa";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <FaSearch className="text-2xl text-blue-600" />,
      title: "1. Search",
      description: "Search for your favorite books",
      bgColor: "bg-blue-100"
    },
    {
      icon: <FaShoppingCart className="text-2xl text-green-600" />,
      title: "2. Choose",
      description: "Rent or Buy them instantly",
      bgColor: "bg-green-100"
    },
    {
      icon: <FaChartLine className="text-2xl text-purple-600" />,
      title: "3. Track",
      description: "Track Orders from your dashboard",
      bgColor: "bg-purple-100"
    },
    {
      icon: <FaBookOpen className="text-2xl text-orange-600" />,
      title: "4. Enjoy",
      description: "Read and Return when done",
      bgColor: "bg-orange-100"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get started in just a few simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`${step.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 