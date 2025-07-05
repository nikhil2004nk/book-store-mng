import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { ProfileHeader } from "../components/Profile/ProfileHeader";
import { ProfileForm } from "../components/Profile/ProfileForm";
import { AccountActions } from "../components/Profile/AccountActions";

const ProfilePage = () => {
  const { user, updateUser } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
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
        <ProfileHeader user={user} />

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <ProfileForm
              user={user}
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
