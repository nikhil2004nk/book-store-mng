interface HeroSectionProps {
  onLogin: () => void;
}

export const HeroSection = ({ onLogin }: HeroSectionProps) => {
  return (
    <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            Your One-Stop Destination for
            <span className="text-blue-600"> Buying and Renting Books</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Affordable, Fast, and Reliable Book Rentals & Purchases. 
            Discover thousands of books across all genres at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={onLogin}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              🔓 Login
            </button>
            <button
              onClick={onLogin}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center"
            >
              ✍️ Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 