import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5001/auth/register", {
        name,
        email,
        password,
      });
      const token = res.data.token;
      localStorage.setItem("token", token);
      toast.success("User registered successfully");
      navigate("/Dashboard");
    } catch (error) {
      console.error("Error in registering", error);
      toast.error(
        "Registration failed: " +
          (error.response?.data?.message || error.message)
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8">
        <h2 className="text-2xl font-bold text-center mb-6">Create Account</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg outline-none"
            onChange={(e) => setName(e.target.value)}
            required
          />
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
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            Sign up
          </button>
        </form>
        <div className="text-center mt-4">
          <p className="text-sm">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/")}
              className="font-semibold text-yellow-600 hover:underline cursor-pointer"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
