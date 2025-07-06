import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

interface FooterProps {
  onBrowseBooks: () => void;
}

export const Footer = ({ onBrowseBooks }: FooterProps) => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Book Haven is your trusted partner for affordable book rentals and purchases. 
              We believe everyone should have access to quality literature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><button onClick={onBrowseBooks} className="text-gray-300 hover:text-white transition-colors text-left">Browse Books (Login Required)</button></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <FiMail className="mr-2" />
                <span className="text-gray-300">support@bookhaven.com</span>
              </div>
              <div className="flex items-center">
                <FiPhone className="mr-2" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <FiMapPin className="mr-2" />
                <span className="text-gray-300">123 Book Street, Library City</span>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <BsFacebook className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <BsTwitter className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <BsInstagram className="text-2xl" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <BsLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Book Haven. All rights reserved. | 
            <a href="#" className="text-gray-300 hover:text-white transition-colors ml-2">Terms & Privacy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}; 