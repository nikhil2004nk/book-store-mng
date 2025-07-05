import { FaShoppingCart } from "react-icons/fa";
import { FiCalendar } from "react-icons/fi";

interface BookActionsProps {
  onBuy: () => void;
  onRent: () => void;
  onQuickBuy: () => void;
  onQuickRent: () => void;
}

export const BookActions = ({
  onBuy,
  onRent,
  onQuickBuy,
  onQuickRent,
}: BookActionsProps) => {
  return (
    <>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onBuy}
          className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          <FaShoppingCart />
          Buy Now
        </button>
        <button
          onClick={onRent}
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <FiCalendar />
          Rent Now
        </button>
      </div>

      {/* Quick Add to Cart */}
      <div className="border-t border-gray-200 pt-4">
        <h3 className="text-sm font-medium text-gray-500 mb-2">
          OR QUICKLY ADD TO CART
        </h3>
        <div className="flex gap-3">
          <button
            onClick={onQuickBuy}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-blue-500 text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <FaShoppingCart className="text-sm" />
            Add to Cart (Buy)
          </button>
          <button
            onClick={onQuickRent}
            className="flex-1 flex items-center justify-center gap-2 bg-white border border-green-500 text-green-600 hover:bg-green-50 px-3 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            <FaShoppingCart className="text-sm" />
            Add to Cart (Rent)
          </button>
        </div>
      </div>
    </>
  );
};
