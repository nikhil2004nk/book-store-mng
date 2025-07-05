interface OrderSummaryProps {
  totalAmount: number;
  hasAddress: boolean;
  onCheckout: () => void;
  onAddAddress: () => void;
}

export const OrderSummary = ({
  totalAmount,
  hasAddress,
  onCheckout,
  onAddAddress,
}: OrderSummaryProps) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <span className="text-gray-600">Subtotal</span>
        <span className="font-medium">₹{totalAmount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">Shipping</span>
        <span className="font-medium">Free</span>
      </div>
      <div className="border-t border-gray-200 pt-4 flex justify-between">
        <span className="text-lg font-medium">Total</span>
        <span className="text-lg font-bold">₹{totalAmount.toFixed(2)}</span>
      </div>
      <button
        onClick={onCheckout}
        disabled={!hasAddress}
        className={`mt-6 w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
          hasAddress
            ? "bg-blue-600 hover:bg-blue-700"
            : "bg-gray-400 cursor-not-allowed"
        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500`}
      >
        {hasAddress ? "₹ Proceed to Checkout" : "Add Address to Checkout"}
      </button>
      {!hasAddress && (
        <button
          onClick={onAddAddress}
          className="mt-4 w-full text-center text-sm font-medium text-blue-600 hover:text-blue-800"
        >
          Go to Profile to Add Address
        </button>
      )}
    </div>
  );
};
