import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Taskform from "./components/Taskform";
import Tables from "./components/Tables";
export default function Dashboard(){
    return (
        <div>
             <Navbar />
            <div className="flex flex-row"><Sidebar />
             <Tables />
            </div>



            </div>
    )
}