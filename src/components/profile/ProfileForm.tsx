import { FaSave, FaEdit } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { ProfileField } from "./ProfileField.tsx";

interface ProfileFormProps {
  formData: {
    name: string;
    email: string;
    address: string;
  };
  isEditing: boolean;
  isSaving: boolean;
  onInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onSave: (e: React.FormEvent) => void;
  onEditToggle: () => void;
}

export const ProfileForm = ({
  formData,
  isEditing,
  isSaving,
  onInputChange,
  onSave,
  onEditToggle,
}: ProfileFormProps) => {
  return (
    <form onSubmit={onSave}>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg md:text-xl font-semibold text-gray-800">
            Personal Information
          </h3>
          {isEditing ? (
            <button
              type="submit"
              disabled={isSaving}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors disabled:bg-blue-400"
            >
              <FaSave className="mr-2" />{" "}
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          ) : (
            <button
              type="button"
              onClick={onEditToggle}
              className="flex items-center bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg transition-colors"
            >
              <FaEdit className="mr-2" /> Edit Profile
            </button>
          )}
        </div>

        <div className="space-y-6">
          <ProfileField
            label="Full Name"
            name="name"
            value={formData.name}
            isEditing={isEditing}
            onChange={onInputChange}
            type="text"
            required
          />

          <ProfileField
            label="Email Address"
            name="email"
            value={formData.email}
            isEditing={isEditing}
            onChange={onInputChange}
            type="email"
            required
          />

          <ProfileField
            label={
              <>
                <FaMapMarkerAlt className="mr-2 inline" /> Shipping Address
              </>
            }
            name="address"
            value={formData.address}
            isEditing={isEditing}
            onChange={onInputChange}
            type="textarea"
            placeholder="Enter your full shipping address including postal code"
            required
            additionalText="* Required for checkout"
          />
        </div>
      </div>
    </form>
  );
};
