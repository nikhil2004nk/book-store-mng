import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const CartEmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
        <FaShoppingCart className="h-8 w-8 text-blue-600" />
      </div>
      <h2 className="mt-4 text-lg font-medium text-gray-900">
        Your cart is empty
      </h2>
      <p className="mt-1 text-gray-600">
        Browse our collection to find your next read
      </p>
      <div className="mt-6">
        <button
          onClick={() => navigate("/dashboard/books")}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Browse Books
        </button>
      </div>
    </div>
  );
};
