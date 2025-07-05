import { useAuth } from "../context/AuthContext";
import { OrdersHeader } from "../components/Orders/OrdersHeader";
import { OrdersEmptyState } from "../components/Orders/OrdersEmptyState";
import { OrdersTable } from "../components/Orders/OrdersTable";
import { OrdersCard } from "../components/Orders/OrdersCard";

const Orders = () => {
  const { orders } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <OrdersHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {orders.length === 0 ? (
          <OrdersEmptyState />
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            {/* Desktop Table */}
            <div className="hidden md:block">
              <OrdersTable orders={orders} />
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden divide-y divide-gray-200">
              {orders.map((order) => (
                <OrdersCard key={order.id} order={order} />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Orders;
