import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { PaymentLayout } from "../components/Payment/PaymentLayout";
import { OrderSummary } from "../components/Payment/OrderSummary";
import { PaymentMethodSelector } from "../components/Payment/PaymentMethodSelector";
import { CompletePaymentButton } from "../components/Payment/CompletePaymentButton";

interface BookState {
  book: {
    id: number;
    title: string;
    price: number;
  };
  type: "buy" | "rent" | "COD";
}

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addOrder, addPayment } = useAuth();
  const state = location.state as BookState;
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
    "credit-card" | "paypal" | "COD"
  >("credit-card");

  if (!state?.book || !state?.type) {
    navigate("/dashboard/books");
    return null;
  }

  const amount =
    state.type === "rent" ? state.book.price * 0.3 : state.book.price;

  const handlePayment = () => {
    addOrder(state.book.id, state.book.title, state.type);
    addPayment({
      bookId: state.book.id,
      bookTitle: state.book.title,
      amount,
      type: state.type,
      paymentMethod: selectedPaymentMethod,
    });

    navigate("/dashboard/payment/success", {
      state: {
        bookTitle: state.book.title,
        amount,
        type: state.type,
        paymentMethod: selectedPaymentMethod,
      },
    });
  };

  return (
    <PaymentLayout
      title={`Complete Your ${state.type === "buy" ? "Purchase" : "Rental"}`}
    >
      <OrderSummary
        bookTitle={state.book.title}
        type={state.type}
        amount={amount}
      />

      <PaymentMethodSelector
        selectedMethod={selectedPaymentMethod}
        onMethodChange={setSelectedPaymentMethod}
      />

      <CompletePaymentButton type={state.type} onClick={handlePayment} />
    </PaymentLayout>
  );
};

export default Payment;
