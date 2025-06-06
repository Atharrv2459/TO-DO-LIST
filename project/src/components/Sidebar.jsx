import {UserIcon} from "lucide-react";
export default function Sidebar(){
    return(
    <div className="bg-violet-500 mx-0 mr-0 flex flex-col w-72 mb-0 min-h-screen  ">
        <button className="text-white cursor-pointer hover:bg-violet-950 my-4 flex justify-center p-3">
            <UserIcon />
            Dashboard
        </button>
        <button className="text-white cursor-pointer hover:bg-violet-950 my-4 flex justify-center p-3">
            <UserIcon />
            Profile Settings
        </button>



    </div>)
}