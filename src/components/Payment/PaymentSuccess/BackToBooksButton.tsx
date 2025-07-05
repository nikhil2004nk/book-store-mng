import { Link } from "react-router-dom";

export const BackToBooksButton = () => {
  return (
    <Link
      to="/dashboard/books"
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    >
      Back to Books
    </Link>
  );
};
