import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import DashboardLayout from "./components/DashboardLayout";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Orders";
import ProfilePage from "./pages/ProfilePage";
import PaymentHistory from "./pages/PaymentHistory";
import PaymentSuccess from "./pages/PaymentSuccess";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<BookList />} />
        <Route path="books" element={<BookList />} />
        <Route path="books/:id" element={<BookDetail />} />
        <Route path="profile" element={<ProfilePage />} /> {/* Fixed path */}
        <Route path="cart" element={<CartPage />} />
        <Route path="orders" element={<Orders />} />
        <Route path="history" element={<PaymentHistory />} />
        <Route path="payment/success" element={<PaymentSuccess />} />
      </Route>
    </Routes>
  );
}

export default App;
