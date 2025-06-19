import {UserIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
export default function Sidebar(){
    const navigate = useNavigate();
    return(
    <div className="bg-white mx-4 mr-0 flex flex-col items-baseline w-64 mb-0 min-h-screen  ">
        <button onClick={()=> navigate("/Dashboard")} className=" cursor-pointer  hover:bg-yellow-500 hover:text-white my-4 flex justify-center p-3 font-semibold">
            <FaHome size={24} className="mx-4"/>
            Dashboard
        </button>
        <button onClick={() => navigate("/Profile")} className="cursor-pointer hover:bg-yellow-500 hover:text-white my-4 flex justify-center p-3 font-semibold ">
            <FaUser size={22} className="mx-4" />
            Profile Settings
        </button>



    </div>)
}