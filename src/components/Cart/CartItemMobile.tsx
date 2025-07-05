import { FaTrash } from "react-icons/fa";

interface CartItem {
  id: string;
  title: string;
  author: string;
  image: string;
  type: "buy" | "rent";
  price: number;
  quantity: number;
}

interface CartItemMobileProps {
  item: CartItem;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const CartItemMobile = ({
  item,
  onRemove,
  onQuantityChange,
}: CartItemMobileProps) => {
  return (
    <div className="p-4">
      <div className="flex items-start space-x-4">
        <img
          src={item.image}
          alt={item.title}
          className="flex-shrink-0 h-16 w-12 object-cover rounded"
        />
        <div className="flex-1">
          <div className="font-medium text-gray-900">{item.title}</div>
          <div className="text-sm text-gray-500">{item.author}</div>
          <div className="mt-2 flex items-center space-x-2">
            <span
              className={`px-2 text-xs leading-5 font-semibold rounded-full ${
                item.type === "buy"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {item.type}
            </span>
            <span className="text-sm text-gray-500">
              ₹
              {item.type === "rent"
                ? (item.price * 0.3).toFixed(2)
                : item.price.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-sm">Qty:</span>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              onQuantityChange(item.id, parseInt(e.target.value))
            }
            className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="text-sm font-medium">
          ₹
          {(
            item.price *
            item.quantity *
            (item.type === "rent" ? 0.3 : 1)
          ).toFixed(2)}
        </div>
      </div>
      <div className="mt-3 flex justify-end">
        <button
          onClick={() => onRemove(item.id)}
          className="text-sm text-red-600 hover:text-red-900 flex items-center gap-1"
        >
          <FaTrash className="text-sm" />
          Remove
        </button>
      </div>
    </div>
  );
};
