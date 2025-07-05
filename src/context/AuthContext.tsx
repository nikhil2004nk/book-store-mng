import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useEffect,
} from "react";

interface User {
  name: string;
  email: string;
  address?: string; // Added address field
  createdAt?: string;
}

interface Book {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CartItem extends Book {
  quantity: number;
  type: "buy" | "rent";
}

interface Order {
  id: string;
  bookId: string;
  bookTitle: string;
  quantity: number;
  type: "buy" | "rent";
  date: string;
  status: string;
  paymentMethod: string;
  price: number;
}

interface Payment {
  id: string;
  bookId: number;
  bookTitle: string;
  amount: number;
  date: string;
  type: "buy" | "rent";
  paymentMethod: "COD" | "credit-card" | "paypal";
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  cart: CartItem[];
  orders: Order[];
  payments: Payment[];
  login: (email: string, name: string) => void;
  logout: () => void;
  addToCart: (book: Book, type: "buy" | "rent") => void;
  removeFromCart: (bookId: number) => void;
  updateCartItem: (bookId: number, quantity: number) => void;
  clearCart: () => void;
  checkout: (paymentMethod: "COD" | "credit-card" | "paypal") => void;
  updateUser: (userData: Partial<User>) => Promise<void>; // Added updateUser function
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [payments, setPayments] = useState<Payment[]>([]);

  // Load saved state from localStorage on initial render
  useEffect(() => {
    const savedState = localStorage.getItem("authState");
    if (savedState) {
      const { isAuthenticated, user, cart, orders, payments } =
        JSON.parse(savedState);
      if (isAuthenticated && user) {
        setIsAuthenticated(true);
        setUser(user);
        setCart(cart || []);
        setOrders(orders || []);
        setPayments(payments || []);
      }
    }
  }, []);

  const login = (email: string, name: string) => {
    const newUser = { name, email, createdAt: new Date().toISOString() };
    setIsAuthenticated(true);
    setUser(newUser);
    const savedState = localStorage.getItem("authState");
    const state = {
      isAuthenticated: true,
      user: newUser,
      cart: savedState ? JSON.parse(savedState).cart || [] : [],
      orders: savedState ? JSON.parse(savedState).orders || [] : [],
      payments: savedState ? JSON.parse(savedState).payments || [] : [],
    };
    localStorage.setItem("authState", JSON.stringify(state));
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setCart([]);
    setOrders([]);
    setPayments([]);
    localStorage.removeItem("authState");
  };

  const updateUser = async (userData: Partial<User>) => {
    return new Promise<void>((resolve) => {
      const updatedUser = { ...user, ...userData } as User;
      setUser(updatedUser);

      // Update localStorage
      const savedState = localStorage.getItem("authState");
      if (savedState) {
        const state = JSON.parse(savedState);
        localStorage.setItem(
          "authState",
          JSON.stringify({
            ...state,
            user: updatedUser,
          })
        );
      }

      resolve();
    });
  };

  const saveState = () => {
    localStorage.setItem(
      "authState",
      JSON.stringify({
        isAuthenticated,
        user,
        cart,
        orders,
        payments,
      })
    );
  };

  const addToCart = (book: Book, type: "buy" | "rent") => {
    setCart((prev) => {
      const existingItem = prev.find(
        (item) => item.id === book.id && item.type === type
      );
      const newCart = existingItem
        ? prev.map((item) =>
            item.id === book.id && item.type === type
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...book, quantity: 1, type }];
      saveState();
      return newCart;
    });
  };

  const removeFromCart = (bookId: number) => {
    setCart((prev) => {
      const newCart = prev.filter((item) => item.id !== bookId);
      saveState();
      return newCart;
    });
  };

  const updateCartItem = (bookId: number, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(bookId);
      return;
    }
    setCart((prev) => {
      const newCart = prev.map((item) =>
        item.id === bookId ? { ...item, quantity } : item
      );
      saveState();
      return newCart;
    });
  };

  const clearCart = () => {
    setCart([]);
    saveState();
  };

  const checkout = (paymentMethod: "COD" | "credit-card" | "paypal") => {
    if (!user?.address) {
      throw new Error("Shipping address is required for checkout");
    }

    const newOrders: Order[] = cart.map((item) => ({
      id: Date.now().toString() + item.id,
      bookId: item.id.toString(),
      bookTitle: item.title,
      quantity: item.quantity,
      type: item.type,
      date: new Date().toISOString(),
      status: paymentMethod === "COD" ? "pending" : "completed",
      paymentMethod,
      price: item.price * (item.type === "rent" ? 0.3 : 1),
    }));

    const newPayments: Payment[] = cart.map((item) => ({
      id: Date.now().toString() + item.id,
      bookId: item.id,
      bookTitle: item.title,
      amount: item.price * item.quantity * (item.type === "rent" ? 0.3 : 1),
      date: new Date().toISOString(),
      type: item.type,
      paymentMethod,
    }));

    setOrders((prev) => [...prev, ...newOrders]);
    setPayments((prev) => [...prev, ...newPayments]);
    clearCart();
    saveState();
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        user,
        cart,
        orders,
        payments,
        login,
        logout,
        addToCart,
        removeFromCart,
        updateCartItem,
        clearCart,
        checkout,
        updateUser, // Added to the context value
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
