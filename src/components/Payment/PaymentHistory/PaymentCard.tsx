import { Link } from "react-router-dom";
import { FiBook, FiCalendar, FiDollarSign } from "react-icons/fi";
import { PaymentMethod } from "./PaymentMethod";

interface Payment {
  id: string;
  date: string;
  bookId: string;
  bookTitle: string;
  paymentMethod: string;
  type: string;
  amount: number;
}

interface PaymentCardProps {
  payment: Payment;
}

export const PaymentCard = ({ payment }: PaymentCardProps) => {
  const method = PaymentMethod({ method: payment.paymentMethod });

  return (
    <div className="p-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 h-12 w-10 bg-gray-200 rounded flex items-center justify-center">
          <FiBook className="text-gray-500" />
        </div>
        <div className="flex-1">
          <Link
            to={`/dashboard/books/${payment.bookId}`}
            className="font-medium text-gray-900 hover:text-blue-600"
          >
            {payment.bookTitle}
          </Link>
          <div className="text-sm text-gray-500">ID: {payment.bookId}</div>
          <div className="mt-2 flex items-center space-x-3">
            <div className="flex items-center text-sm text-gray-500">
              <FiCalendar className="mr-1.5" />
              {new Date(payment.date).toLocaleDateString()}
            </div>
            <span
              className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                payment.type === "buy"
                  ? "bg-blue-100 text-blue-800"
                  : "bg-green-100 text-green-800"
              }`}
            >
              {payment.type}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex items-center text-sm text-gray-500">
          {method.icon}
          {method.text}
        </div>
        <div className="flex items-center text-sm font-medium">
          <FiDollarSign className="text-gray-400 mr-1" />
          <span className="text-gray-900">{payment.amount.toFixed(2)}</span>
        </div>
      </div>
      <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500">
        Transaction ID: #{payment.id}
      </div>
    </div>
  );
};
