import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CartHeader = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <button
          onClick={() => navigate("/dashboard/books")}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FaArrowLeft className="inline" />
          <span className="font-medium">Back to Books</span>
        </button>
      </div>
    </header>
  );
};
