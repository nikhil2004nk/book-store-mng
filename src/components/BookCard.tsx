import type { Book } from "../data/books";
import { Link } from "react-router-dom";

interface BookCardProps {
  book: Book;
}

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
      <div className="aspect-w-3 aspect-h-4 w-full">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 sm:h-56 md:h-40 lg:h-48 object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">
          {book.title}
        </h2>
        <p className="text-gray-600 text-sm sm:text-base mb-2">
          by {book.author}
        </p>
        <div className="mt-auto">
          <p className="text-gray-800 font-bold mb-3 sm:mb-4 text-lg">
            ₹{book.price.toFixed(2)}
          </p>
          <Link
            to={`/dashboard/books/${book.id}`}
            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 rounded transition-colors text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
