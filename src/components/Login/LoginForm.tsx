import { FiUser, FiMail, FiLock } from "react-icons/fi";

interface LoginFormProps {
  name: string;
  email: string;
  password: string;
  isLoading: boolean;
  onNameChange: (value: string) => void;
  onEmailChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export const LoginForm = ({
  name,
  email,
  password,
  isLoading,
  onNameChange,
  onEmailChange,
  onPasswordChange,
  onSubmit
}: LoginFormProps) => {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          <FiUser className="inline mr-2" />
          Full Name
        </label>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          <FiMail className="inline mr-2" />
          Email Address
        </label>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => onEmailChange(e.target.value)}
          disabled={isLoading}
          required
        />
      </div>
      
      <div>
        <label className="block text-gray-700 text-sm font-semibold mb-2">
          <FiLock className="inline mr-2" />
          Password
        </label>
        <input
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => onPasswordChange(e.target.value)}
          disabled={isLoading}
          required
        />
        <p className="text-xs text-gray-500 mt-1">Password must be at least 6 characters</p>
      </div>
      
      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-200 ${
          isLoading 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'
        } text-white`}
        type="submit"
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
            Signing In...
          </div>
        ) : (
          'Sign In'
        )}
      </button>
    </form>
  );
}; 