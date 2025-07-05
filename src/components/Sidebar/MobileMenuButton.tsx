import { FaBars, FaTimes } from "react-icons/fa";

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
  isMobileView: boolean;
}

export const MobileMenuButton = ({
  isOpen,
  onClick,
  isMobileView,
}: MobileMenuButtonProps) => {
  if (!isMobileView) return null;

  return (
    <button
      onClick={onClick}
      className={`fixed top-4 z-50 bg-gray-800 text-white p-2 rounded-md shadow-lg md:hidden ${
        isOpen ? "left-4" : "left-4"
      }`}
      style={{
        left: isOpen ? `calc(64px + 8rem)` : "1rem",
      }}
    >
      {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
    </button>
  );
};
