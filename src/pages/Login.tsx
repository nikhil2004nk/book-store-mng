import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { LoginLayout } from "../components/Login/LoginLayout";
import { LoginHeader } from "../components/Login/LoginHeader";
import { ErrorMessage } from "../components/Login/ErrorMessage";
import { LoginForm } from "../components/Login/LoginForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      // Basic validation
      if (!name.trim() || !email.trim() || !password.trim()) {
        throw new Error("All fields are required");
      }
      
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      login(email, name);
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginLayout>
      <LoginHeader />
      <ErrorMessage error={error} />
      <LoginForm
        name={name}
        email={email}
        password={password}
        isLoading={isLoading}
        onNameChange={setName}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
      />
    </LoginLayout>
  );
};

export default Login;
