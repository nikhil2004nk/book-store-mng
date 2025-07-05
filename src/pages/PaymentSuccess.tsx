import { useLocation } from "react-router-dom";
import { PaymentSuccessLayout } from "../components/Payment/PaymentSuccess/PaymentSuccessLayout";
import { PaymentNotFound } from "../components/Payment/PaymentSuccess/PaymentNotFound";
import { PaymentSuccessIcon } from "../components/Payment/PaymentSuccess/PaymentSuccessIcon";
import { PaymentDetails } from "../components/Payment/PaymentSuccess/PaymentDetails";
import { BackToBooksButton } from "../components/Payment/PaymentSuccess/BackToBooksButton";

const PaymentSuccess = () => {
  const location = useLocation();
  const { message, amount, paymentMethod } = location.state || {};

  if (!message) {
    return (
      <PaymentSuccessLayout>
        <PaymentNotFound />
      </PaymentSuccessLayout>
    );
  }

  return (
    <PaymentSuccessLayout>
      <div className="text-center">
        <PaymentSuccessIcon />
        <h1 className="text-xl sm:text-2xl font-bold mb-2">
          Payment Successful!
        </h1>
        <p className="text-gray-600 mb-6">{message}</p>
      </div>

      <PaymentDetails amount={amount} paymentMethod={paymentMethod} />

      <div className="text-center">
        <BackToBooksButton />
      </div>
    </PaymentSuccessLayout>
  );
};

export default PaymentSuccess;
