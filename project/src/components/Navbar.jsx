import { SearchIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Navbar(){
    const navigate=useNavigate();
    const handleSignout=(e)=>{
       
        e.preventDefault();
        try{
            localStorage.removeItem("token");
            navigate("/");
        }
        catch(error){
            console.error("Could not sign out", error);
            alert("Could not logout")
        }
    }
    return (
        <div>
            <nav className="bg-violet-700 flex flex-row justify-between p-4">
                <p>Atharrv's to do list</p>
                <input type="text" placeholder= "Search" className="rounded-xs bg-white p-1 w-xl"></input> 
                <button onClick={handleSignout} className="bg-amber-400 rounded-xs cursor-pointer p-2">Sign Out</button>
            </nav>
        </div>

    );
}