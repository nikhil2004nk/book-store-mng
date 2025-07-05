import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CartHeader } from "../components/Cart/CartHeader";
import { CartEmptyState } from "../components/Cart/CartEmptyState";
import { CartTable } from "../components/Cart/CartTable";
import { CartItemMobile } from "../components/Cart/CartItemMobile";
import { PaymentMethodSelector } from "../components/Cart/PaymentMethodSelector";
import { OrderSummary } from "../components/Cart/OrderSummary";
import { AddressError } from "../components/Cart/AddressError";

const CartPage = () => {
  const { cart, removeFromCart, updateCartItem, checkout, user } = useAuth();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<
    "COD" | "credit-card" | "paypal"
  >("credit-card");
  const [showAddressError, setShowAddressError] = useState(false);

  const totalAmount = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity * (item.type === "rent" ? 0.3 : 1),
    0
  );

  const handleCheckout = () => {
    if (!user?.address) {
      setShowAddressError(true);
      return;
    }

    checkout(paymentMethod);
    navigate("/dashboard/payment/success", {
      state: {
        message: `Successfully processed ${cart.length} items`,
        amount: totalAmount,
        paymentMethod,
      },
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <CartHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Your Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <CartEmptyState />
        ) : (
          <>
            {/* Cart Items */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
              {/* Desktop Table */}
              <div className="hidden md:block">
                <CartTable
                  items={cart}
                  onRemove={removeFromCart}
                  onQuantityChange={updateCartItem}
                />
              </div>

              {/* Mobile List */}
              <div className="md:hidden divide-y divide-gray-200">
                {cart.map((item) => (
                  <CartItemMobile
                    key={`${item.id}-${item.type}`}
                    item={item}
                    onRemove={removeFromCart}
                    onQuantityChange={updateCartItem}
                  />
                ))}
              </div>
            </div>

            {/* Payment and Checkout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Payment Method */}
              <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Payment Method
                </h2>
                <PaymentMethodSelector
                  paymentMethod={paymentMethod}
                  onChange={setPaymentMethod}
                />
                {showAddressError && <AddressError />}
              </div>

              {/* Order Summary */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">
                  Order Summary
                </h2>
                <OrderSummary
                  totalAmount={totalAmount}
                  hasAddress={!!user?.address}
                  onCheckout={handleCheckout}
                  onAddAddress={() => navigate("/dashboard/profile")}
                />
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default CartPage;
