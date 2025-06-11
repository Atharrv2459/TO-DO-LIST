import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tables from "./components/Tables";
import Taskform from "./components/Taskform";
import Dashboard from "./Dashboard";
import Profile from "./profile";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
export default function App(){
    return(
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/TaskForm" element={<Taskform />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Register" element={<Register />} />
                <Route path="#modal" element={<Taskform />} />
            </Routes>
    )
}