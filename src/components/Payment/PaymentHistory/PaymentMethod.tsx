import { FiCreditCard, FiDollarSign, FiPackage } from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";

interface PaymentMethodProps {
  method: string;
}

export const PaymentMethod = ({ method }: PaymentMethodProps) => {
  switch (method) {
    case "credit-card":
      return { text: "Credit Card", icon: <FiCreditCard className="mr-2" /> };
    case "paypal":
      return {
        text: "PayPal",
        icon: <FaPaypal className="mr-2 text-blue-500" />,
      };
    case "COD":
      return {
        text: "Cash on Delivery",
        icon: <FiPackage className="mr-2" />,
      };
    default:
      return { text: method, icon: <FiDollarSign className="mr-2" /> };
  }
};
