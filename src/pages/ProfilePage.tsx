import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { ProfileHeader } from "../components/profile/ProfileHeader";
import { ProfileForm } from "../components/profile/ProfileForm";
import { AccountActions } from "../components/profile/AccountActions";

interface FormData {
  name: string;
  email: string;
  address: string;
}

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: user?.name || "",
    email: user?.email || "",
    address: user?.address || "",
  });
  const [isSaving, setIsSaving] = useState(false);

  // Initialize form data when user changes
  useEffect(() => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      address: user?.address || "",
    });
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      await updateUser(formData);
      setIsEditing(false);
    } catch (error) {
      console.error("Failed to update profile:", error);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        <ProfileHeader user={user || { name: undefined, email: undefined }} />

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <ProfileForm
              isEditing={isEditing}
              formData={formData}
              isSaving={isSaving}
              onInputChange={handleInputChange}
              onSave={handleSave}
              onEditToggle={() => setIsEditing(!isEditing)}
            />

            <AccountActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage; 