import { SearchIcon } from "lucide-react";
export default function Navbar(){
    return (
        <div>
            <nav className="bg-violet-700 flex flex-row justify-between p-4">
                <p>Atharrv's to do list</p>
                <input type="text" placeholder= "Search" className="rounded-xs bg-white p-1 w-xl"></input> 
                <p>User name</p>
            </nav>
        </div>

    );
}