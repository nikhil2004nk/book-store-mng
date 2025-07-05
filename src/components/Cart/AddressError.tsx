import { FaExclamationCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const AddressError = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-6 bg-red-50 border-l-4 border-red-500 p-4">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <FaExclamationCircle className="h-5 w-5 text-red-500" />
        </div>
        <div className="ml-3">
          <p className="text-sm text-red-700">
            Please add your shipping address in your{" "}
            <button
              onClick={() => navigate("/dashboard/profile")}
              className="font-medium underline hover:text-red-800"
            >
              profile settings
            </button>{" "}
            before proceeding to checkout.
          </p>
        </div>
      </div>
    </div>
  );
};
