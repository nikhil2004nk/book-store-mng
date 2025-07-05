interface SidebarOverlayProps {
  isOpen: boolean;
  isMobileView: boolean;
  onClick: () => void;
}

export const SidebarOverlay = ({
  isOpen,
  isMobileView,
  onClick,
}: SidebarOverlayProps) => {
  if (!isOpen || !isMobileView) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
      onClick={onClick}
    />
  );
};
