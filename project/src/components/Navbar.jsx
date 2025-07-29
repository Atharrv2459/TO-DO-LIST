import { FaBook } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleSignout = (e) => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      navigate("/");
    } catch (error) {
      console.error("Could not sign out", error);
      alert("Could not logout");
    }
  };

  return (
    <header className="bg-white sticky top-0 z-10 shadow-sm">
      <nav className="flex justify-between items-center px-8 py-4">
        <div className="flex items-center gap-3">
          <FaBook size={32} className="text-yellow-600" />
          <h1 className="text-2xl font-bold text-gray-800">TO DO LIST</h1>
        </div>
        
        <button onClick={handleSignout} className="bg-amber-400 hover:bg-amber-500 transition px-4 py-2 rounded-xl font-semibold cursor-pointer">
          Sign Out
        </button>
      </nav>
    </header>
  );
}
