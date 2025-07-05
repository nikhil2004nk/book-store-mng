import { FaCreditCard, FaPaypal } from "react-icons/fa";
import { FiPackage } from "react-icons/fi";

interface PaymentMethodSelectorProps {
  paymentMethod: "COD" | "credit-card" | "paypal";
  onChange: (method: "COD" | "credit-card" | "paypal") => void;
}

export const PaymentMethodSelector = ({
  paymentMethod,
  onChange,
}: PaymentMethodSelectorProps) => {
  return (
    <div className="space-y-4">
      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          paymentMethod === "credit-card"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
        onClick={() => onChange("credit-card")}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center mr-3">
            {paymentMethod === "credit-card" && (
              <div className="h-3 w-3 rounded-full bg-blue-600"></div>
            )}
          </div>
          <div className="flex items-center">
            <FaCreditCard className="text-gray-500 mr-2" />
            <span>Credit Card</span>
          </div>
        </div>
      </div>
      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          paymentMethod === "paypal"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
        onClick={() => onChange("paypal")}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center mr-3">
            {paymentMethod === "paypal" && (
              <div className="h-3 w-3 rounded-full bg-blue-600"></div>
            )}
          </div>
          <div className="flex items-center">
            <FaPaypal className="text-blue-500 mr-2" />
            <span>PayPal</span>
          </div>
        </div>
      </div>
      <div
        className={`border rounded-lg p-4 cursor-pointer transition-colors ${
          paymentMethod === "COD"
            ? "border-blue-500 bg-blue-50"
            : "border-gray-200 hover:border-gray-300"
        }`}
        onClick={() => onChange("COD")}
      >
        <div className="flex items-center">
          <div className="flex-shrink-0 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center mr-3">
            {paymentMethod === "COD" && (
              <div className="h-3 w-3 rounded-full bg-blue-600"></div>
            )}
          </div>
          <div className="flex items-center">
            <FiPackage className="text-gray-500 mr-2" />
            <span>Cash on Delivery (COD)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
