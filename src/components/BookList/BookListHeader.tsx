import { FiBook } from "react-icons/fi";

interface BookListHeaderProps {
  bookCount: number;
}

export const BookListHeader = ({ bookCount }: BookListHeaderProps) => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <FiBook className="text-blue-600 text-2xl" />
          <h1 className="text-xl font-bold text-gray-800">Book Haven</h1>
        </div>
        <div className="text-sm text-gray-500">{bookCount} books available</div>
      </div>
    </header>
  );
};
