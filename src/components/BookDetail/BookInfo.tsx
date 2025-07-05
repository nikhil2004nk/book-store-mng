import { FiBookOpen } from "react-icons/fi";

interface BookInfoProps {
  title: string;
  author: string;
  price: number;
  type: string;
}

export const BookInfo = ({ title, author, price, type }: BookInfoProps) => {
  return (
    <div className="space-y-6">
      {/* Title and Author */}
      <div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
          {title}
        </h1>
        <p className="mt-2 text-lg text-gray-600 flex items-center">
          <FiBookOpen className="mr-2 text-gray-400" />
          by {author}
        </p>
      </div>

      {/* Price */}
      <div className="flex items-center">
        <span className="text-2xl sm:text-3xl font-bold text-blue-600">
          ₹{price.toFixed(2)}
        </span>
        <span className="ml-2 text-sm text-gray-500">
          {type === "new" ? "(New Release)" : ""}
        </span>
      </div>
    </div>
  );
};
