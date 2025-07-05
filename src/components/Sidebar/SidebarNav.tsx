import { Link } from "react-router-dom";

interface NavItem {
  name: string;
  path: string;
  icon: string;
  count?: number;
}

interface SidebarNavProps {
  navItems: NavItem[];
  currentPath: string;
  isMobileView: boolean;
  onItemClick: () => void;
}

export const SidebarNav = ({
  navItems,
  currentPath,
  isMobileView,
  onItemClick,
}: SidebarNavProps) => {
  return (
    <nav className="flex-1 overflow-y-auto">
      <ul className="p-2">
        {navItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              onClick={() => isMobileView && onItemClick()}
              className={`flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 transition-colors ${
                currentPath === item.path ? "bg-gray-700" : ""
              }`}
            >
              <div className="flex items-center">
                <span className="mr-3">{item.icon}</span>
                {item.name}
              </div>
              {item.count ? (
                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {item.count}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
