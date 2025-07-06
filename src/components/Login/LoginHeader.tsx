import { Link } from "react-router-dom";
import { FiBook, FiArrowLeft } from "react-icons/fi";

export const LoginHeader = () => {
  return (
    <div className="text-center mb-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm mb-4 transition-colors"
      >
        <FiArrowLeft className="mr-1" />
        Back to Home
      </Link>
      <div className="flex items-center justify-center mb-4">
        <FiBook className="text-3xl text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">
          Welcome Back
        </h1>
      </div>
      <p className="text-gray-600">
        Sign in to access your book collection
      </p>
    </div>
  );
}; 