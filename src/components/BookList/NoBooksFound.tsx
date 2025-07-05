import { FiBook } from "react-icons/fi";

interface NoBooksFoundProps {
  onReset: () => void;
}

export const NoBooksFound = ({ onReset }: NoBooksFoundProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8 text-center">
      <div className="mx-auto max-w-md">
        <FiBook className="mx-auto h-12 w-12 text-gray-400" />
        <h3 className="mt-2 text-lg font-medium text-gray-900">
          No books found
        </h3>
        <p className="mt-1 text-sm text-gray-500">
          Try adjusting your search or filter criteria
        </p>
        <div className="mt-6">
          <button
            onClick={onReset}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Reset filters
          </button>
        </div>
      </div>
    </div>
  );
};
