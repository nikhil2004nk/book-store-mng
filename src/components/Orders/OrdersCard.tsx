import { Link } from "react-router-dom";
import { FiBook, FiCalendar, FiDollarSign } from "react-icons/fi";
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

interface OrdersCardProps {
  order: Order;
}

export const OrdersCard = ({ order }: OrdersCardProps) => {
  return (
    <div className="p-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-12 w-10 bg-gray-200 rounded flex items-center justify-center">
          <FiBook className="text-gray-500" />
        </div>
        <div className="flex-1">
          <Link
            to={`/dashboard/books/${order.bookId}`}
            className="font-medium text-gray-900 hover:text-blue-600"
          >
            {order.bookTitle}
          </Link>
          <div className="text-sm text-gray-500">ID: {order.bookId}</div>
          <div className="mt-2 flex items-center space-x-3">
            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1.5" />
              {new Date(order.date).toLocaleDateString()}
            </div>
            <OrderTypeBadge type={order.type} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <OrderStatus status={order.status} />
        <div className="flex items-center text-sm font-medium">
          <FiDollarSign className="text-gray-400 mr-1" />
          <span className="text-gray-900">
            {(order.price * order.quantity).toFixed(2)}
          </span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm text-gray-500">
        <span>Quantity: {order.quantity}</span>
        <span>Unit Price: {order.price.toFixed(2)}</span>
      </div>
    </div>
  );
};
