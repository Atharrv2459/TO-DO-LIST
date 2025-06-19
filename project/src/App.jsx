import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tables from "./components/Tables";
import Taskform from "./components/Taskform";
import Dashboard from "./Dashboard";
import Profile from "./profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import { Toaster } from "react-hot-toast";
export default function App(){
    return(
         <div className="min-h-screen bg-base-200 transition-colors duration-300">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/TaskForm" element={<Taskform />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Register" element={<Register />} />
                <Route path="#modal" element={<Taskform />} />
            </Routes>
            <Toaster />
            </div>
    )
}