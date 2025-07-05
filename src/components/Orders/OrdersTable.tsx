import { Link } from "react-router-dom";
import { FiBook, FiCalendar } from "react-icons/fi";
import { OrderStatus } from "./OrderStatus";
import { OrderTypeBadge } from "./OrderTypeBadge";

interface Order {
  id: string;
  bookId: string;
  bookTitle: string;
  date: string;
  type: "buy" | "rent" | "COD";
  status: string;
  price: number;
  quantity: number;
}

interface OrdersTableProps {
  orders: Order[];
}

export const OrdersTable = ({ orders }: OrdersTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Item
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Details
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Total
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {orders.map((order) => (
          <tr key={order.id} className="hover:bg-gray-50">
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
                  <FiBook className="text-gray-500" />
                </div>
                <div className="ml-4">
                  <Link
                    to={`/dashboard/books/${order.bookId}`}
                    className="font-medium text-gray-900 hover:text-blue-600"
                  >
                    {order.bookTitle}
                  </Link>
                  <div className="text-sm text-gray-500">
                    ID: {order.bookId}
                  </div>
                </div>
              </div>
            </td>
            <td className="px-6 py-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-1.5" />
                  {new Date(order.date).toLocaleDateString()}
                </div>
                <OrderTypeBadge type={order.type} />
                <div className="text-sm text-gray-500">
                  Qty: {order.quantity}
                </div>
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <OrderStatus status={order.status} />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
              <div className="flex items-center justify-end">
                <span className="text-gray-900">
                  ₹ {(order.price * order.quantity).toFixed(2)}
                </span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
