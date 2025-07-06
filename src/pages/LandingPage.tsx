import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/LandingPage/Navbar";
import { HeroSection } from "../components/LandingPage/HeroSection";
import { HowItWorks } from "../components/LandingPage/HowItWorks";
import { WhyChooseUs } from "../components/LandingPage/WhyChooseUs";
import { Testimonials } from "../components/LandingPage/Testimonials";
import { Footer } from "../components/LandingPage/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleBrowseBooks = () => {
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBrowseBooks={handleBrowseBooks} onLogin={handleLogin} />
      <HeroSection onLogin={handleLogin} />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer onBrowseBooks={handleBrowseBooks} />
    </div>
  );
};

export default LandingPage; 