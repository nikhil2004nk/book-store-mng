import { FaUser } from "react-icons/fa";

interface ProfileHeaderProps {
  user: {
    name?: string;
    email?: string;
  };
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center">
        <FaUser className="mr-2" /> My Profile
      </h1>

      <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 text-white">
        <div className="flex items-center">
          <div className="bg-white text-blue-600 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center text-3xl font-bold">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="ml-4 md:ml-6">
            <h2 className="text-xl md:text-2xl font-semibold">
              {user?.name || "User"}
            </h2>
            <p className="text-blue-100">{user?.email || "user@example.com"}</p>
          </div>
        </div>
      </div>
    </>
  );
};
