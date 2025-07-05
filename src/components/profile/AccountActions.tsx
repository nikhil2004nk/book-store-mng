import { FaLock, FaEnvelope, FaTrash } from "react-icons/fa";

export const AccountActions = () => {
  return (
    <div className="border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">
        Account Actions
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          type="button"
          className="p-4 bg-white border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors flex items-center"
        >
          <FaLock className="mr-3 text-blue-500" />
          <div>
            <h4 className="font-medium text-gray-900">Change Password</h4>
            <p className="text-sm text-gray-500">
              Update your account password
            </p>
          </div>
        </button>
        <button
          type="button"
          className="p-4 bg-white border border-gray-300 rounded-lg text-left hover:bg-gray-50 transition-colors flex items-center"
        >
          <FaEnvelope className="mr-3 text-blue-500" />
          <div>
            <h4 className="font-medium text-gray-900">Update Email</h4>
            <p className="text-sm text-gray-500">Change your email address</p>
          </div>
        </button>
        <button
          type="button"
          className="p-4 bg-white border border-red-200 rounded-lg text-left hover:bg-red-50 transition-colors flex items-center md:col-span-2"
        >
          <FaTrash className="mr-3 text-red-500" />
          <div>
            <h4 className="font-medium text-red-700">Delete Account</h4>
            <p className="text-sm text-red-500">
              Permanently remove your account
            </p>
          </div>
        </button>
      </div>
    </div>
  );
};
