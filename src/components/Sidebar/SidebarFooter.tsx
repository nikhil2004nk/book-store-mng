interface SidebarFooterProps {
  userName: string;
  onLogout: () => void;
}

export const SidebarFooter = ({ userName, onLogout }: SidebarFooterProps) => {
  // Function to get first name only
  const getFirstName = (fullName: string) => {
    if (!fullName) return "";
    return fullName.split(" ")[0];
  };

  return (
    <div className="p-4 border-t border-gray-700">
      <div className="flex items-center justify-between">
        <div className="text-sm truncate">
          {userName ? `Welcome, ${getFirstName(userName)}` : "Welcome"}
        </div>
        <button
          onClick={onLogout}
          className="text-sm bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded transition-colors"
          title="Logout"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};
