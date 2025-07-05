interface PaymentMethodSelectorProps {
  selectedMethod: "credit-card" | "paypal" | "COD";
  onMethodChange: (method: "credit-card" | "paypal" | "COD") => void;
}

export const PaymentMethodSelector = ({
  selectedMethod,
  onMethodChange,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
      <div className="space-y-3">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="payment"
            className="form-radio h-5 w-5 text-blue-600"
            checked={selectedMethod === "COD"}
            onChange={() => onMethodChange("COD")}
          />
          <span>Cash on Delivery</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="payment"
            className="form-radio h-5 w-5 text-blue-600"
            checked={selectedMethod === "credit-card"}
            onChange={() => onMethodChange("credit-card")}
          />
          <span>Credit Card</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            name="payment"
            className="form-radio h-5 w-5 text-blue-600"
            checked={selectedMethod === "paypal"}
            onChange={() => onMethodChange("paypal")}
          />
          <span>PayPal</span>
        </label>
      </div>
    </div>
  );
};
