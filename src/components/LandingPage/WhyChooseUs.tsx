import { FiBook, FiShield, FiTruck, FiUsers, FiStar, FiMail } from "react-icons/fi";

export const WhyChooseUs = () => {
  const features = [
    {
      icon: <FiBook className="text-3xl text-blue-600" />,
      title: "Wide Collection",
      description: "Over 30+ books across multiple genres"
    },
    {
      icon: <FiShield className="text-3xl text-green-600" />,
      title: "Secure Payments",
      description: "Multiple payment options with security"
    },
    {
      icon: <FiTruck className="text-3xl text-purple-600" />,
      title: "Fast Delivery",
      description: "Quick and reliable shipping"
    },
    {
      icon: <FiUsers className="text-3xl text-orange-600" />,
      title: "Student Friendly",
      description: "Affordable rental prices for students"
    },
    {
      icon: <FiStar className="text-3xl text-yellow-600" />,
      title: "Easy Returns",
      description: "Simple and hassle-free return process"
    },
    {
      icon: <FiMail className="text-3xl text-red-600" />,
      title: "24/7 Support",
      description: "Round the clock customer support"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We provide the best book rental and purchase experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                {feature.icon}
                <h3 className="text-xl font-semibold text-gray-800 ml-3">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 