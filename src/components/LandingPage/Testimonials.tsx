import { FiStar } from "react-icons/fi";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content: "Love the easy rent option! Perfect for my budget as a student.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Book Lover",
      content: "Amazing collection and fast delivery. Highly recommended!",
      rating: 4
    },
    {
      name: "Emily Davis",
      role: "Teacher",
      content: "Great for classroom resources. The rental system is brilliant!",
      rating: 3
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Users Say
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Over 1,000 happy users!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-gray-800">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 