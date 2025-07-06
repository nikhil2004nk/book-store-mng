import { FiBookOpen } from "react-icons/fi";

interface BookInfoProps {
  title: string;
  author: string;
  price: number;
  type: string;
}

export const BookInfo = ({ title, author, price, type }: BookInfoProps) => {
  return (
    <div className="space-y-10">
      {/* Title and Author */}
      <div className="space-y-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          {title}
        </h1>
        <p className="text-lg text-gray-600 flex items-center">
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
