import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const BookNotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4 sm:p-6">
      <div className="bg-white rounded-xl shadow-md p-8 text-center max-w-md w-full">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
          <FiBookOpen className="h-6 w-6 text-red-600" />
        </div>
        <h1 className="mt-3 text-xl sm:text-2xl font-bold text-gray-900">
          Book Not Found
        </h1>
        <p className="mt-2 text-gray-600">
          The book you're looking for doesn't exist or has been removed.
        </p>
        <div className="mt-6">
          <button
            onClick={() => navigate("/dashboard/books")}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse Available Books
          </button>
        </div>
      </div>
    </div>
  );
};
