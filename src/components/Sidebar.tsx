import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";
import { MobileMenuButton } from "../components/Sidebar/MobileMenuButton";
import { SidebarHeader } from "../components/Sidebar/SidebarHeader";
import { SidebarNav } from "../components/Sidebar/SidebarNav";
import { SidebarFooter } from "../components/Sidebar/SidebarFooter";
import { SidebarOverlay } from "../components/Sidebar/SidebarOverlay";

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { user, cart, logout } = useAuth();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { name: "Books", path: "/dashboard/books", icon: "📚" },
    { name: "Cart", path: "/dashboard/cart", icon: "🛒", count: cart.length },
    { name: "Orders", path: "/dashboard/orders", icon: "📦" },
    { name: "Payment History", path: "/dashboard/history", icon: "💰" },
    { name: "My Profile", path: "/dashboard/profile", icon: "👤" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      <MobileMenuButton
        isOpen={isMobileOpen}
        onClick={toggleMobileMenu}
        isMobileView={isMobileView}
      />

      <div
        className={`bg-gray-800 text-white flex flex-col fixed h-full transition-all duration-300 z-40
          ${
            isMobileView
              ? `w-64 ${isMobileOpen ? "left-0" : "-left-64"}`
              : "w-64"
          }`}
      >
        <SidebarHeader />

        <SidebarNav
          navItems={navItems}
          currentPath={location.pathname}
          isMobileView={isMobileView}
          onItemClick={() => setIsMobileOpen(false)}
        />

        <SidebarFooter userName={user?.name || ""} onLogout={handleLogout} />
      </div>

      <SidebarOverlay
        isOpen={isMobileOpen}
        isMobileView={isMobileView}
        onClick={toggleMobileMenu}
      />
    </>
  );
};

export default Sidebar;
