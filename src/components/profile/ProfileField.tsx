

interface ProfileFieldProps {
  label: React.ReactNode;
  name: string;
  value: string;
  isEditing: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: "text" | "email" | "textarea";
  placeholder?: string;
  required?: boolean;
  additionalText?: string;
}

export const ProfileField = ({
  label,
  name,
  value,
  isEditing,
  onChange,
  type = "text",
  placeholder,
  required,
  additionalText,
}: ProfileFieldProps) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
        {label}
      </label>
      {isEditing ? (
        <>
          {type === "textarea" ? (
            <textarea
              name={name}
              value={value}
              onChange={onChange}
              rows={3}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={placeholder}
              required={required}
            />
          ) : (
            <input
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder={placeholder}
              required={required}
            />
          )}
          {additionalText && (
            <p className="text-sm text-gray-500 mt-1">{additionalText}</p>
          )}
        </>
      ) : (
        <div className="flex justify-between items-start">
          <p
            className={`p-3 rounded-lg ${
              value ? "bg-gray-50" : "text-gray-400 italic bg-gray-50"
            }`}
          >
            {value || `No ${name} provided`}
          </p>
        </div>
      )}
    </div>
  );
};
