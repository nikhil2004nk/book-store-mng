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

interface CartTableProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
}

export const CartTable = ({
  items,
  onRemove,
  onQuantityChange,
}: CartTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Item
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Type
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Price
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Quantity
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Total
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Action
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {items.map((item) => (
          <tr key={`${item.id}-${item.type}`}>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 w-10 object-cover rounded mr-4"
                />
                <div>
                  <div className="font-medium text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.author}</div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <span
                className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                  item.type === "buy"
                    ? "bg-blue-100 text-blue-800"
                    : "bg-green-100 text-green-800"
                }`}
              >
                {item.type}
              </span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
              ₹
              {item.type === "rent"
                ? (item.price * 0.3).toFixed(2)
                : item.price.toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  onQuantityChange(item.id, parseInt(e.target.value))
                }
                className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              ₹
              {(
                item.price *
                item.quantity *
                (item.type === "rent" ? 0.3 : 1)
              ).toFixed(2)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <button
                onClick={() => onRemove(item.id)}
                className="text-red-600 hover:text-red-900 flex items-center gap-1"
              >
                <FaTrash className="text-sm" />
                Remove
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
