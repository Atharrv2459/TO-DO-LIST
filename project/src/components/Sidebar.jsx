import {UserIcon} from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Sidebar(){
    const navigate = useNavigate();
    return(
    <div className="bg-violet-500 mx-0 mr-0 flex flex-col w-72 mb-0 min-h-screen  ">
        <button onClick={()=> navigate("/Dashboard")} className="text-white cursor-pointer hover:bg-violet-950 my-4 flex justify-center p-3">
            <UserIcon />
            Dashboard
        </button>
        <button onClick={() => navigate("/Profile")} className="text-white cursor-pointer hover:bg-violet-950 my-4 flex justify-center p-3">
            <UserIcon />
            Profile Settings
        </button>



    </div>)
}