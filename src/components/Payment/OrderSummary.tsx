interface OrderSummaryProps {
  bookTitle: string;
  type: "buy" | "rent" | "COD";
  amount: number;
}

export const OrderSummary = ({
  bookTitle,
  type,
  amount,
}: OrderSummaryProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
      <div className="flex justify-between mb-1">
        <span>
          {bookTitle} ({type})
        </span>
        <span>₹{amount.toFixed(2)}</span>
      </div>
      <div className="border-t border-gray-200 my-2"></div>
      <div className="flex justify-between font-bold">
        <span>Total</span>
        <span>₹{amount.toFixed(2)}</span>
      </div>
    </div>
  );
};
