import { FiDollarSign } from "react-icons/fi";

export const PaymentEmptyState = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 text-center">
      <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-blue-100">
        <FiDollarSign className="h-8 w-8 text-blue-600" />
      </div>
      <h2 className="mt-4 text-lg font-medium text-gray-900">
        No payment history
      </h2>
      <p className="mt-1 text-gray-600">
        Your payment records will appear here after purchases
      </p>
    </div>
  );
};
