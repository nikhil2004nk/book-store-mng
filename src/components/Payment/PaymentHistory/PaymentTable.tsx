import { Link } from "react-router-dom";
import { FiBook, FiCalendar } from "react-icons/fi";
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

interface PaymentTableProps {
  payments: Payment[];
}

export const PaymentTable = ({ payments }: PaymentTableProps) => {
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Transaction
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Item
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Details
          </th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Amount
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {payments.map((payment) => {
          const method = PaymentMethod({ method: payment.paymentMethod });
          return (
            <tr key={payment.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">
                  #{payment.id}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <FiCalendar className="mr-1.5" />
                  {new Date(payment.date).toLocaleDateString()}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-200 rounded flex items-center justify-center">
                    <FiBook className="text-gray-500" />
                  </div>
                  <div className="ml-4">
                    <Link
                      to={`/dashboard/books/${payment.bookId}`}
                      className="font-medium text-gray-900 hover:text-blue-600"
                    >
                      {payment.bookTitle}
                    </Link>
                    <div className="text-sm text-gray-500">
                      ID: {payment.bookId}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
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
                  <div className="flex items-center text-sm text-gray-500">
                    {method.icon}
                    {method.text}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <div className="flex items-center justify-end">
                  <span className="text-gray-900">
                    ₹ {payment.amount.toFixed(2)}
                  </span>
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
