import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";

export default function Login() {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`http://localhost:5001/auth/login`, {
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      toast.success("User login successful");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      toast.error(
        "Login failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-4 py-2 border rounded-lg outline-none"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={isPasswordShown ? "text" : "password"}
              placeholder="Enter password"
              className="w-full px-4 py-2 border rounded-lg outline-none"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
              onClick={() => setIsPasswordShown(!isPasswordShown)}
              tabIndex={-1}
            >
              {isPasswordShown ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg cursor-pointer transition"
          >
            Sign in
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            New user?{" "}
            <button
              onClick={() => navigate("/Register")}
              className="font-semibold text-yellow-600 hover:underline cursor-pointer"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
