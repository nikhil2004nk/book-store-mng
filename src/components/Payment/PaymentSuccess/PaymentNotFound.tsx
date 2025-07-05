import { Link } from "react-router-dom";

export const PaymentNotFound = () => {
  return (
    <>
      <h1 className="text-xl sm:text-2xl font-bold mb-4">
        Payment Information Not Found
      </h1>
      <Link
        to="/dashboard/books"
        className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg font-medium transition-colors"
      >
        Back to Books
      </Link>
    </>
  );
};
