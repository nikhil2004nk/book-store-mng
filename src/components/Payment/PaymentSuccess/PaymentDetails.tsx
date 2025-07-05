interface PaymentDetailsProps {
  amount: number;
  paymentMethod: string;
}

export const PaymentDetails = ({
  amount,
  paymentMethod,
}: PaymentDetailsProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm sm:text-base">Amount Paid:</span>
        <span className="font-medium text-sm sm:text-base">
          ₹{amount.toFixed(2)}
        </span>
      </div>
      <div className="flex justify-between mb-1">
        <span className="text-sm sm:text-base">Payment Method:</span>
        <span className="font-medium text-sm sm:text-base">
          {paymentMethod === "COD" ? "Cash on Delivery" : paymentMethod}
        </span>
      </div>
      {paymentMethod === "COD" && (
        <div className="text-xs sm:text-sm text-yellow-600 mt-2">
          Your order will be processed after payment confirmation
        </div>
      )}
    </div>
  );
};
