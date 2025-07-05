import { useAuth } from "../context/AuthContext";
import { PaymentHeader } from "../components/Payment/PaymentHistory/PaymentHeader";
import { PaymentEmptyState } from "../components/Payment/PaymentHistory/PaymentEmptyState";
import { PaymentTable } from "../components/Payment/PaymentHistory/PaymentTable";
import { PaymentCard } from "../components/Payment/PaymentHistory/PaymentCard";

const PaymentHistory = () => {
  const { payments } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <PaymentHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {payments.length === 0 ? (
          <PaymentEmptyState />
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <PaymentTable payments={payments} />
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {payments.map((payment) => (
                <PaymentCard key={payment.id} payment={payment} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default PaymentHistory;
